// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { d, dm } from "../../common/data";
import { sm } from "../../common/schema";
import { rx } from "../../beicon/v2";
import { ptk } from "../../potok/v2";

export type NotificationLevel = "success" | "error" | "info" | "warning";
export type NotificationStatus = "visible" | "hide";
export type NotificationPosition = "fixed" | "floating" | "inline";
export type NotificationType = "inline" | "context" | "toast";
export type NotificationControls = "none" | "close" | "inline-actions" | "bottom-actions";

export interface Notification {
  content: string;
  level?: NotificationLevel;
  status?: NotificationStatus;
  position?: NotificationPosition;
  type?: NotificationType;
  controls?: NotificationControls;
  tag?: string | symbol;
  timeout?: number;
  accept?: { label: string; callback: () => void };
  cancel?: { label: string; callback: () => void };
  actions?: Array<{ label: string; callback: () => void }>;
  links?: Array<{ label: string; callback: () => void }>;
}

export interface State {
  notification?: Notification;
}

const defaultTimeout = 7000;

const notificationSchema = sm.object({
  title: "Notification",
  properties: {
    level: { optional: true, type: sm.enum(["success", "error", "info", "warning"]) },
    status: { optional: true, type: sm.enum(["visible", "hide"]) },
    position: { optional: true, type: sm.enum(["fixed", "floating", "inline"]) },
    type: { optional: true, type: sm.enum(["inline", "context", "toast"]) },
    controls: { optional: true, type: sm.enum(["none", "close", "inline-actions", "bottom-actions"]) },
    tag: { optional: true, type: sm.union([sm.string, sm.symbol]) },
    timeout: { optional: true, type: sm.maybe(sm.number) },
    accept: {
      optional: true,
      type: sm.object({
        properties: {
          label: sm.string,
          callback: sm.anyFunction,
        },
        required: ["label", "callback"],
      }),
    },
    cancel: {
      optional: true,
      type: sm.object({
        properties: {
          label: sm.string,
          callback: sm.anyFunction,
        },
        required: ["label", "callback"],
      }),
    },
    actions: {
      optional: true,
      type: sm.array(
        sm.object({
          properties: {
            label: sm.string,
            callback: sm.anyFunction,
          },
          required: ["label", "callback"],
        })
      ),
    },
    links: {
      optional: true,
      type: sm.array(
        sm.object({
          properties: {
            label: sm.string,
            callback: sm.anyFunction,
          },
          required: ["label", "callback"],
        })
      ),
    },
  },
});

const checkNotification = sm.checkFn(notificationSchema);

export const show = (data: Notification) => {
  const isValid = checkNotification(data);
  if (!isValid) {
    throw new Error("expected valid notification map");
  }

  return ptk.reify("show", {
    update(state: State): State {
      const notification = { ...data, status: "visible" as const };
      return { ...state, notification };
    },

    watch(state: State, _prevState: State, stream: rx.Observable<any>) {
      return rx.merge(
        // Handle navigation events
        (() => {
          const stopper = rx.filter(ptk.is("hide"), stream);
          const routeId = dm.getIn(state, ["route", "data", "name"]);

          return rx.pipe(
            stream,
            rx.filter(ptk.is(":app.main.router/navigate")),
            rx.map((event) => event.value),
            rx.filter((navEvent) => navEvent.id !== routeId),
            rx.map(() => hide()),
            rx.takeUntil(stopper)
          );
        })(),

        // Handle timeout
        (() => {
          if (!data.timeout) return rx.empty();

          const stopper = rx.filter(ptk.is("show"), stream);
          return rx.pipe(
            rx.of(hide()),
            rx.delay(data.timeout),
            rx.takeUntil(stopper)
          );
        })()
      );
    },
  });
};

export const hide = (tag?: string) => {
  return ptk.reify("hide", {
    update(state: State): State {
      if (tag) {
        const notification = state.notification;
        if (notification && notification.tag === tag) {
          const { notification: _, ...rest } = state;
          return rest;
        }
        return state;
      }

      const { notification: _, ...rest } = state;
      return rest;
    },
  });
};

export const error = (content: string) => {
  return show({
    content,
    level: "error",
    type: "toast",
    position: "fixed",
  });
};

export const info = (content: string, options: { timeout?: number } = {}) => {
  return show({
    content,
    level: "info",
    type: "toast",
    position: "fixed",
    timeout: options.timeout ?? defaultTimeout,
  });
};

export const success = (content: string, options: { timeout?: number } = {}) => {
  return show({
    content,
    level: "success",
    type: "toast",
    position: "fixed",
    timeout: options.timeout ?? defaultTimeout,
  });
};

export const warn = (content: string, options: { timeout?: number } = {}) => {
  return show({
    content,
    level: "warning",
    type: "toast",
    position: "fixed",
    timeout: options.timeout ?? defaultTimeout,
  });
};

export const dialog = (options: {
  content: string;
  accept?: { label: string; callback: () => void };
  cancel?: { label: string; callback: () => void };
  tag?: string;
  links?: Array<{ label: string; callback: () => void }>;
}) => {
  const { content, accept, cancel, tag, links } = options;
  return show(d.withoutNil({
    content,
    type: "inline",
    accept,
    cancel,
    links,
    tag,
  }));
};