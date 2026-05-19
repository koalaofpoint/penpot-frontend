// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { d, dm } from "../../common/data";
import { sm } from "../../common/schema";
import { uuid } from "../../common/uuid";
import { cf } from "../../config";
import { ev } from "./event";
import { di } from "./media";
import { ntf } from "./notifications";
import { rp } from "./repo";
import { rt } from "./router";
import { plugins } from "../../plugins/register";
import { http } from "../../util/http";
import { tr } from "../../util/i18n";
import { storage } from "../../util/storage";
import { rx } from "../../beicon/v2";
import { ptk } from "../../potok/v2";

export interface Profile {
  id: string;
  fullname: string;
  lang: string;
  theme: string;
  props: {
    subscription?: { editors: number };
    notifications?: {
      dashboardComments?: "all" | "partial" | "none";
      emailComments?: "all" | "partial" | "none";
      emailInvites?: "all" | "none";
    };
    onboardingViewed?: boolean;
    releaseNotesViewed?: string;
    onboardingQuestionsAnswered?: boolean;
    onboardingQuestions?: any;
  };
}

export interface State {
  profileId?: string;
  profile?: Profile;
  fileCommentsUsers?: Record<string, any>;
  accessTokens?: any[];
  accessTokenCreated?: any;
}

// SCHEMAS

const profileSchema = sm.object({
  title: "Profile",
  properties: {
    id: sm.string,
    fullname: sm.string,
    lang: sm.string,
    theme: sm.string,
    props: sm.object({
      optional: true,
      properties: {
        subscription: sm.object({
          optional: true,
          properties: {
            editors: sm.number,
          },
        }),
        notifications: sm.object({
          optional: true,
          properties: {
            dashboardComments: sm.enum(["all", "partial", "none"]),
            emailComments: sm.enum(["all", "partial", "none"]),
            emailInvites: sm.enum(["all", "none"]),
          },
        }),
        onboardingViewed: sm.boolean,
        releaseNotesViewed: sm.string,
        onboardingQuestionsAnswered: sm.boolean,
        onboardingQuestions: sm.any,
      },
    }),
  },
  required: ["id", "fullname", "lang", "theme"],
});

const checkProfile = sm.checkFn(profileSchema);

// HELPERS

export const isAuthenticated = (profile: Profile): boolean => {
  return uuid.is(profile.id) && !uuid.isZero(profile.id);
};

// EVENT: fetch-profile

export const setProfile = (profile: Profile) => {
  return ptk.reify("set-profile", {
    deref() {
      return profile;
    },

    update(state: State): State {
      return {
        ...state,
        profileId: profile.id,
        profile,
      };
    },

    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.pipe(
        rx.from(tr.setLocale(profile.lang)),
        rx.ignore()
      );
    },

    effect(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      storage.user.set("profile", profile);
      plugins.init();
    },
  });
};

export const profileFetched = ptk.type("profile-fetched");

// FIXME: make it as general purpose handler, not only on profile
const onFetchProfileException = (cause: any) => {
  const data = cause?.data;
  if (data?.type === "authorization" && data.code === "challenge-required") {
    const path = rt.getCurrentPath();
    const href = `${encodeURIComponent(path)}/challenge.html?redirect=`;
    return rx.of(rt.navRaw({ href }));
  }
  return rx.throwError(cause);
};

const onFetchProfileSuccess = (profile: Profile) => {
  if (cf.flags?.subscriptions && isAuthenticated(profile)) {
    return rx.pipe(
      rp.cmd("get-subscription-usage"),
      rx.map((response: { editors: number }) => ({
        ...profile,
        props: {
          ...profile.props,
          subscription: {
            ...profile.props?.subscription,
            editors: response.editors,
          },
        },
      })),
      rx.catchError((cause) => {
        console.error("unexpected error on obtaining subscription usage", cause);
        return rx.of(profile);
      })
    );
  }
  return rx.of(profile);
};

export const fetchProfile = () => {
  return ptk.reify("fetch-profile", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.pipe(
        rp.cmd("get-profile"),
        rx.flatMap(onFetchProfileSuccess),
        rx.map((profile) => ptk.dataEvent("profile-fetched", profile)),
        rx.catchError(onFetchProfileException)
      );
    },
  });
};

export const refreshProfile = () => {
  return ptk.reify("refresh-profile", {
    watch(_state: State, _prevState: State, stream: rx.Observable<any>) {
      return rx.merge(
        rx.of(fetchProfile()),
        rx.pipe(
          stream,
          rx.filter(ptk.is("profile-fetched")),
          rx.map((event) => event.value),
          rx.filter(isAuthenticated),
          rx.take(1),
          rx.map(setProfile)
        )
      );
    },
  });
};

// --- Update Profile

export const persistProfile = (options: {
  onSuccess?: () => void;
  onError?: (error: any) => void;
} = {}) => {
  const { onSuccess = identity, onError = rx.throw } = options;

  return ptk.reify("persist-profile", {
    watch(state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      if (!state.profile) return rx.empty();

      const { fullname, lang, theme } = state.profile;
      const params = { fullname, lang, theme };

      return rx.pipe(
        rp.cmd("update-profile", params),
        rx.tap(onSuccess),
        rx.map(setProfile),
        rx.catchError(onError)
      );
    },
  });
};

export const updateProfile = (profile: Partial<Profile>) => {
  const validatedProfile = checkProfile(profile);

  return ptk.reify("update-profile", {
    watch(state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      if (!state.profile) return rx.empty();

      const currentProfile = state.profile;
      const mergedProfile = d.deepMerge(currentProfile, { ...validatedProfile, props: undefined });

      const events: rx.Observable<any>[] = [rx.of(setProfile(mergedProfile))];

      if (validatedProfile.theme !== currentProfile.theme) {
        events.push(
          rx.of(
            ptk.dataEvent(ev.event, {
              name: "activate-theme",
              origin: "settings",
              theme: validatedProfile.theme,
            })
          )
        );
      }

      return rx.merge(...events);
    },
  });
};

// --- Toggle Theme

export const toggleTheme = () => {
  return ptk.reify("toggle-theme", {
    update(state: State): State {
      if (!state.profile) return state;

      const currentTheme = state.profile.theme;
      let newTheme = currentTheme;

      // NOTE: this is a workaround for the old data on the database
      // where we have `default` value
      if (currentTheme === "default") {
        newTheme = "dark";
      }

      // Theme cycling: dark -> light -> system -> dark
      switch (newTheme) {
        case "dark":
          newTheme = "light";
          break;
        case "light":
          newTheme = "system";
          break;
        case "system":
        default:
          newTheme = "dark";
          break;
      }

      return {
        ...state,
        profile: {
          ...state.profile,
          theme: newTheme,
        },
      };
    },

    watch(it: any, state: State, _dispatch: ptk.Dispatch) {
      if (!state.profile) return rx.empty();

      return rx.of(
        ptk.dataEvent(ev.event, {
          theme: state.profile.theme,
          name: "activate-theme",
          origin: ev.origin(it),
        }),
        persistProfile()
      );
    },
  });
};

// --- Request Email Change

export const requestEmailChange = (data: { email: string }) => {
  sm.assert(sm.emailString(data.email), "expected a valid email");

  return ptk.reify("request-email-change", {
    get data() {
      return { email: data.email };
    },

    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const { onSuccess = identity, onError = rx.throw } = data;

      return rx.pipe(
        rp.cmd("request-email-change", data),
        rx.tap(onSuccess),
        rx.catchError(onError)
      );
    },
  });
};

// --- Cancel Email Change

export const cancelEmailChange = () => {
  return ptk.reify("cancel-email-change", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.pipe(
        rp.cmd("cancel-email-change"),
        rx.map(() => refreshProfile())
      );
    },
  });
};

// --- Update Password (Form)

const updatePasswordSchema = sm.object({
  title: "UpdatePassword",
  closed: true,
  properties: {
    password1: sm.string,
    password2: sm.string,
    passwordOld: sm.maybe(sm.string),
  },
  required: ["password1", "password2"],
});

const checkUpdatePassword = sm.checkFn(updatePasswordSchema);

export const updatePassword = (data: { password1: string; password2: string; passwordOld?: string }) => {
  const validatedData = checkUpdatePassword(data);

  return ptk.reify("update-password", {
    get data() {
      return {};
    },

    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const { onSuccess = identity, onError = identity } = data;
      const params = {
        oldPassword: validatedData.passwordOld,
        password: validatedData.password1,
      };

      return rx.pipe(
        rp.cmd("update-profile-password", params),
        rx.tap(onSuccess),
        rx.catchError((err) => {
          onError(err);
          return rx.empty();
        }),
        rx.ignore()
      );
    },
  });
};

// --- Update Notifications

const updateNotificationsSchema = sm.object({
  title: "NotificationsForm",
  properties: {
    dashboardComments: sm.enum(["all", "partial", "none"]),
    emailComments: sm.enum(["all", "partial", "none"]),
    emailInvites: sm.enum(["all", "none"]),
  },
});

const checkUpdateNotifications = sm.checkFn(updateNotificationsSchema);

export const updateNotifications = (options: {
  dashboardComments?: "all" | "partial" | "none";
  emailComments?: "all" | "partial" | "none";
  emailInvites?: "all" | "none";
}) => {
  const validatedOptions = checkUpdateNotifications(options);

  return ptk.reify("update-notifications", {
    get data() {
      return {};
    },

    update(state: State): State {
      if (!state.profile) return state;

      return {
        ...state,
        profile: {
          ...state.profile,
          props: {
            ...state.profile.props,
            notifications: validatedOptions,
          },
        },
      };
    },

    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.pipe(
        rp.cmd("update-profile-notifications", validatedOptions),
        rx.map(() => ntf.success(tr("dashboard.notifications.notifications-saved")))
      );
    },
  });
};

export const updateProfileProps = (props: Partial<Profile["props"]>) => {
  return ptk.reify("update-profile-props", {
    update(state: State): State {
      if (!state.profile) return state;

      return {
        ...state,
        profile: {
          ...state.profile,
          props: {
            ...state.profile.props,
            ...props,
          },
        },
      };
    },

    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.pipe(
        rp.cmd("update-profile-props", { props }),
        rx.map(() => refreshProfile())
      );
    },
  });
};

export const markOnboardingAsViewed = (version?: string) => {
  return ptk.reify("mark-onboarding-as-viewed", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const finalVersion = version || cf.version.main;
      const props = {
        onboardingViewed: true,
        releaseNotesViewed: finalVersion,
      };

      return rx.pipe(
        rp.cmd("update-profile-props", { props }),
        rx.map(() => refreshProfile())
      );
    },
  });
};

export const markQuestionsAsAnswered = (onboardingQuestions: any[]) => {
  return ptk.reify("mark-questions-as-answered", {
    update(state: State): State {
      if (!state.profile) return state;

      return {
        ...state,
        profile: {
          ...state.profile,
          props: {
            ...state.profile.props,
            onboardingQuestionsAnswered: true,
          },
        },
      };
    },

    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const props = {
        onboardingQuestionsAnswered: true,
        onboardingQuestions,
      };

      return rx.pipe(
        rp.cmd("update-profile-props", { props }),
        rx.map(() => refreshProfile())
      );
    },
  });
};

// --- Update Photo

export const updatePhoto = (file: Blob) => {
  di.assertBlob(file, "expected a blob instance on `update-photo`");

  return ptk.reify("update-photo", {
    get data() {
      return {};
    },

    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const onSuccess = di.notifyFinishedLoading;
      const onError = (error: any) => {
        di.notifyFinishedLoading();
        return di.processError(error);
      };

      const prepare = (file: Blob) => ({ file });

      return rx.pipe(
        rx.of(file),
        rx.map(di.validateFile),
        rx.map(prepare),
        rx.flatMap((params) => rp.cmd("update-profile-photo", params)),
        rx.tap(onSuccess),
        rx.map(() => refreshProfile()),
        rx.catchError(onError)
      );
    },
  });
};

export const fetchFileCommentsUsers = (teamId: string) => {
  uuid.assert(teamId, "expected a valid uuid for `team-id`");

  return ptk.reify("fetch-file-comments-users", {
    watch(state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const shareId = state.viewerLocal?.shareId;
      if (!shareId) return rx.empty();

      return rx.pipe(
        rp.cmd("get-profiles-for-file-comments", { teamId, shareId }),
        rx.map((users: any[]) => {
          const indexedUsers = d.indexBy("id", users);
          return (currentState: State) => ({
            ...currentState,
            fileCommentsUsers: indexedUsers,
          });
        })
      );
    },
  });
};

// --- EVENT: request-account-deletion

export const profileDeleted = ptk.type("profile-deleted");

const deleteSubscription = () => {
  if (cf.flags?.subscriptions) {
    return rx.pipe(
      http.fetch({
        uri: "/payments/subscriptions/delete",
        credentials: "include",
        method: "get",
      }),
      rx.map(() => null),
      rx.catchError(() => rx.empty())
    );
  }
  return rx.empty();
};

export const requestAccountDeletion = (params: {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}) => {
  const { onSuccess = identity, onError = rx.throw } = params;

  return ptk.reify("request-account-deletion", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.concat(
        deleteSubscription(),
        rx.pipe(
          rp.cmd("delete-profile"),
          rx.tap(onSuccess),
          rx.map(() => ptk.dataEvent("profile-deleted", params)),
          rx.catchError(onError),
          rx.delayAtLeast(300)
        )
      );
    },
  });
};

// --- EVENT: request-profile-recovery

const requestProfileRecoverySchema = sm.object({
  title: "request-profile-recovery",
  closed: true,
  properties: {
    email: sm.email,
  },
  required: ["email"],
});

const checkRequestProfileRecovery = sm.checkFn(requestProfileRecoverySchema);

export const requestProfileRecovery = (data: { email: string }) => {
  const validatedData = checkRequestProfileRecovery(data);

  return ptk.reify("request-profile-recovery", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const { onSuccess = identity, onError = rx.throw } = data;

      return rx.pipe(
        rp.cmd("request-profile-recovery", validatedData),
        rx.tap(onSuccess),
        rx.catchError(onError)
      );
    },
  });
};

// --- EVENT: recover-profile (Password)

const recoverProfileSchema = sm.object({
  title: "recover-profile",
  closed: true,
  properties: {
    password: sm.string,
    token: sm.string,
  },
  required: ["password", "token"],
});

const checkRecoverProfile = sm.checkFn(recoverProfileSchema);

export const recoverProfile = (data: { password: string; token: string }) => {
  const validatedData = checkRecoverProfile(data);

  return ptk.reify("recover-profile", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      const { onSuccess = identity, onError = rx.throw } = data;

      return rx.pipe(
        rp.cmd("recover-profile", validatedData),
        rx.tap(onSuccess),
        rx.catchError(onError)
      );
    },
  });
};

// --- EVENT: fetch-team-webhooks

export const accessTokensFetched = (accessTokens: any[]) => {
  return ptk.reify("access-tokens-fetched", {
    update(state: State): State {
      return {
        ...state,
        accessTokens,
      };
    },
  });
};

export const fetchAccessTokens = () => {
  return ptk.reify("fetch-access-tokens", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.pipe(
        rp.cmd("get-access-tokens"),
        rx.map(accessTokensFetched)
      );
    },
  });
};

// --- EVENT: create-access-token

export const accessTokenCreated = (accessToken: any) => {
  return ptk.reify("access-token-created", {
    update(state: State): State {
      return {
        ...state,
        accessTokenCreated: accessToken,
      };
    },
  });
};

export const createAccessToken = (params: {
  onSuccess?: (accessToken: any) => void;
  onError?: (error: any) => void;
} = {}) => {
  const { onSuccess = identity, onError = rx.throw } = params;

  return ptk.reify("create-access-token", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.pipe(
        rp.cmd("create-access-token", params),
        rx.map(accessTokenCreated),
        rx.tap(onSuccess),
        rx.catchError(onError)
      );
    },
  });
};

// --- EVENT: delete-access-token

export const deleteAccessToken = (params: { id: string; onSuccess?: () => void; onError?: (error: any) => void }) => {
  uuid.assert(params.id);

  const { onSuccess = identity, onError = rx.throw } = params;

  return ptk.reify("delete-access-token", {
    watch(_state: State, _prevState: State, _dispatch: ptk.Dispatch) {
      return rx.pipe(
        rp.cmd("delete-access-token", params),
        rx.tap(onSuccess),
        rx.catchError(onError)
      );
    },
  });
};