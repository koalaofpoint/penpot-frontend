// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { lazy } from 'react';
import { d, uuid, cf } from 'app.common.data';
import * as dcm from 'app.main.data.common';
import * as dtm from 'app.main.data.team';
import * as errors from 'app.main.errors';
import * as refs from 'app.main.refs';
import * as rp from 'app.main.repo';
import * as rt from 'app.main.router';
import * as st from 'app.main.store';
import * as ctx from 'app.main.ui.context';
import iconsPreview from 'app.main.ui.debug.icons-preview';
import playground from 'app.main.ui.debug.playground';
import loader from 'app.main.ui.ds.product.loader';
import errorBoundary from 'app.main.ui.error-boundary';
import 'app.main.ui.exports.files';
import * as framePreview from 'app.main.ui.frame-preview';
import * as notifications from 'app.main.ui.notifications';
import questionsModal from 'app.main.ui.onboarding.questions';
import onboardingTeamModal from 'app.main.ui.onboarding.team-choice';
import * as releases from 'app.main.ui.releases';
import * as staticContent from 'app.main.ui.static';
import { dom, tr } from 'app.util';
import * as mod from 'app.util.modules';
import * as theme from 'app.util.theme';
import { rx } from 'beicon.v2';

const authPage = lazy(() => mod.load('app.main.ui.auth/auth-page*'));

const verifyTokenPage = lazy(() => mod.load('app.main.ui.auth.verify-token/verify-token-page*'));

const viewerPage = lazy(() => mod.load('app.main.ui.viewer/viewer-page*'));

const dashboardPage = lazy(() => mod.load('app.main.ui.dashboard/dashboard-page*'));

const settingsPage = lazy(() => mod.load('app.main.ui.settings/settings-page*'));

const workspacePage = lazy(() => mod.load('app.main.ui.workspace/workspace-page*'));

const workspaceLegacyRedirect = () => {
  return ({ project-id, file-id, page-id, layout }: {
    project-id: string;
    file-id: string;
    page-id: string;
    layout: string;
  }) => {
    const subscription = rx.from(rp.cmd!({ cmd: 'get-project', data: { id: project-id } }))
      .subscribe(({ team-id }) => {
        st.emit!(dcm.goToWorkspace({ team-id, file-id, page-id, layout }));
      }, errors.onError);

    return <loader title={tr('labels.loading')} overlay={true} />;
  };
};

const dashboardLegacyRedirect = () => {
  return ({ section, team-id, project-id, search-term, plugin-url, template }: {
    section: string;
    team-id: string;
    project-id: string;
    search-term: string;
    plugin-url: string;
    template: string;
  }) => {
    const sectionMap: Record<string, string> = {
      'dashboard-legacy-search': 'dashboard-search',
      'dashboard-legacy-projects': 'dashboard-recent',
      'dashboard-legacy-files': 'dashboard-files',
      'dashboard-legacy-libraries': 'dashboard-libraries',
      'dashboard-legacy-fonts': 'dashboard-fonts',
      'dashboard-legacy-font-providers': 'dashboard-font-providers',
      'dashboard-legacy-team-members': 'dashboard-members',
      'dashboard-legacy-team-invitations': 'dashboard-invitations',
      'dashboard-legacy-team-webhooks': 'dashboard-webhooks',
      'dashboard-legacy-team-settings': 'dashboard-settings',
    };

    const mappedSection = sectionMap[section] || section;

    return ({ children }: { children: React.ReactNode }) => {
      st.emit!(rt.nav(mappedSection, d.withoutNils({ team-id, project-id, search-term, plugin: plugin-url, template })));

      return <loader title={tr('labels.loading')} overlay={true} />;
    };
  };
};

const viewerLegacyRedirect = () => {
  return ({ page-id, file-id, section, index, share-id, interactions-mode, frame-id, share }: {
    page-id: string;
    file-id: string;
    section: string;
    index: number;
    share-id: string;
    interactions-mode: string;
    frame-id: string;
    share: boolean;
  }) => {
    const subscription = rx.from(rt.nav('viewer', d.withoutNils({ page-id, file-id, section, index, share-id, interactions-mode, frame-id, share })))
      .subscribe();

    return <loader title={tr('labels.loading')} overlay={true} />;
  };
};

const teamContainer = () => {
  return ({ team-id, children }: {
    team-id: string;
    children: React.ReactNode;
  }) => {
    const team = refs.team.useDeref();

    if (team.id === team-id) {
      return (
        <ctx.currentTeamId.Provider value={team-id}>
          <ctx.permissions.Provider value={team.permissions}>
            <ctx.canEdit.Provider value={team.permissions.canEdit}>
              <React.Fragment key={team.id}>{children}</React.Fragment>
            </ctx.canEdit.Provider>
          </ctx.permissions.Provider>
        </ctx.currentTeamId.Provider>
      );
    }

    return null;
  };
};

const Page = () => {
  return ({ route, profile }: { route: any; profile: any }) => {
    const { data, params } = route;
    const props = profile.props;
    const section = data.name;
    const team = refs.team.useDeref();

    const showQuestionModal = cf.flags && cf.flags.onboarding &&
      !props.onboardingViewed && !props.onboardingQuestions;

    const showTeamModal = cf.flags && cf.flags.onboarding &&
      !props.onboardingViewed && !props.onboardingTeamId && team.isDefault;

    const showReleaseModal = cf.flags && cf.flags.onboarding &&
      !cf.flags.hideReleaseModal &&
      props.onboardingViewed &&
      props.releaseNotesViewed !== cf.version.main &&
      cf.version.main !== "0.0";

    return (
      <ctx.currentRoute.Provider value={route}>
        <ctx.currentProfile.Provider value={profile}>
          {(() => {
            switch (section) {
              case 'auth-login':
              case 'auth-register':
              case 'auth-register-validate':
              case 'auth-register-success':
              case 'auth-recovery-request':
              case 'auth-recovery':
                return <authPage route={route} />;

              case 'auth-verify-token':
                return <verifyTokenPage route={route} />;

              case 'settings-profile':
              case 'settings-password':
              case 'settings-options':
              case 'settings-feedback':
              case 'settings-subscription':
              case 'settings-access-tokens':
              case 'settings-notifications':
                const queryParams = params.query;
                const errorReportId = queryParams?.errorReportId ? uuid.parse(queryParams.errorReportId) : null;
                return (
                  <settingsPage
                    route={route}
                    type={queryParams?.type}
                    errorReportId={errorReportId}
                    errorHref={queryParams?.errorHref}
                  />
                );

              case 'debug-icons-preview':
                if (__DEV__) return <iconsPreview />;
                return null;

              case 'debug-playground':
                if (__DEV__) return <playground />;
                return null;

              case 'dashboard-search':
              case 'dashboard-recent':
              case 'dashboard-files':
              case 'dashboard-libraries':
              case 'dashboard-fonts':
              case 'dashboard-font-providers':
              case 'dashboard-members':
              case 'dashboard-invitations':
              case 'dashboard-webhooks':
              case 'dashboard-settings':
              case 'dashboard-deleted':
                const dashboardParams = params.query;
                const teamId = dashboardParams?.teamId ? uuid.parse(dashboardParams.teamId) : null;
                const projectId = dashboardParams?.projectId ? uuid.parse(dashboardParams.projectId) : null;
                const searchTerm = dashboardParams?.searchTerm;
                const pluginUrl = dashboardParams?.plugin;
                const template = dashboardParams?.template;

                return (
                  <>
                    {showQuestionModal && <questionsModal />}
                    {showTeamModal && <onboardingTeamModal goToTeam={true} />}
                    {showReleaseModal && <releases.releaseNotesModal version={cf.version.main} />}

                    <teamContainer team-id={teamId}>
                      <dashboardPage
                        profile={profile}
                        section={section}
                        team-id={teamId}
                        search-term={searchTerm}
                        plugin-url={pluginUrl}
                        project-id={projectId}
                        template={template}
                      />
                    </teamContainer>
                  </>
                );

              case 'workspace':
                const workspaceParams = params.query;
                const workspaceTeamId = workspaceParams?.teamId ? uuid.parse(workspaceParams.teamId) : null;
                const workspaceFileId = workspaceParams?.fileId ? uuid.parse(workspaceParams.fileId) : null;
                const workspacePageId = workspaceParams?.pageId ? uuid.parse(workspaceParams.pageId) : null;
                const layout = workspaceParams?.layout;

                return (
                  <>
                    {cf.externalFeatureFlag("onboarding-03", "test") && (
                      <>
                        {showQuestionModal && <questionsModal />}
                        {showTeamModal && <onboardingTeamModal goToTeam={false} />}
                        {showReleaseModal && <releases.releaseNotesModal version={cf.version.main} />}
                      </>
                    )}

                    <teamContainer team-id={workspaceTeamId}>
                      <workspacePage
                        team-id={workspaceTeamId}
                        file-id={workspaceFileId}
                        page-id={workspacePageId}
                        layout-name={layout}
                        key={workspaceFileId}
                      />
                    </teamContainer>
                  </>
                );

              case 'viewer':
                const viewerParams = params.query;
                const index = viewerParams?.index ? parseInt(viewerParams.index) : 0;
                const viewerShareId = viewerParams?.shareId ? uuid.parse(viewerParams.shareId) : null;
                const viewerSection = viewerParams?.section ? String(viewerParams.section) : 'interactions';
                const viewerFileId = viewerParams?.fileId ? uuid.parse(viewerParams.fileId) : null;
                const viewerPageId = viewerParams?.pageId ? uuid.parse(viewerParams.pageId) : null;
                const interactionsMode = viewerParams?.interactionsMode ? String(viewerParams.interactionsMode) : 'show-on-click';
                const frameId = viewerParams?.frameId ? uuid.parse(viewerParams.frameId) : null;
                const share = viewerParams?.share;

                return (
                  <viewerPage
                    page-id={viewerPageId}
                    file-id={viewerFileId}
                    frame-id={frameId}
                    section={viewerSection}
                    index={index}
                    share-id={viewerShareId}
                    interactions-mode={interactionsMode}
                    share={share}
                  />
                );

              case 'workspace-legacy':
                const projectPathId = params.path?.projectId ? uuid.parse(params.path.projectId) : null;
                const filePathId = params.path?.fileId ? uuid.parse(params.path.fileId) : null;
                const pagePathId = params.query?.pageId ? uuid.parse(params.query.pageId) : null;
                const layoutParam = params.query?.layout;

                return (
                  <workspaceLegacyRedirect
                    project-id={projectPathId}
                    file-id={filePathId}
                    page-id={pagePathId}
                    layout={layoutParam}
                  />
                );

              case 'dashboard-legacy-search':
              case 'dashboard-legacy-projects':
              case 'dashboard-legacy-files':
              case 'dashboard-legacy-libraries':
              case 'dashboard-legacy-fonts':
              case 'dashboard-legacy-font-providers':
              case 'dashboard-legacy-team-members':
              case 'dashboard-legacy-team-invitations':
              case 'dashboard-legacy-team-webhooks':
              case 'dashboard-legacy-team-settings':
                const legacyTeamId = params.path?.teamId ? uuid.parse(params.path.teamId) : null;
                const legacyProjectId = params.path?.projectId ? uuid.parse(params.path.projectId) : null;
                const legacySearchTerm = params.query?.searchTerm;
                const legacyPluginUrl = params.query?.plugin;

                return (
                  <dashboardLegacyRedirect
                    team-id={legacyTeamId}
                    section={section}
                    project-id={legacyProjectId}
                    search-term={legacySearchTerm}
                    plugin-url={legacyPluginUrl}
                    template={params.template}
                  />
                );

              case 'viewer-legacy':
                const { queryParams, pathParams } = route;
                const { index: legacyIndex, shareId, section: legacySection, pageId, interactionsMode, frameId, share } = queryParams;
                const { fileId: legacyFileId } = pathParams;

                return (
                  <viewerLegacyRedirect
                    page-id={pageId}
                    file-id={legacyFileId}
                    section={legacySection || 'interactions'}
                    index={legacyIndex || 0}
                    share-id={shareId}
                    interactions-mode={interactionsMode || 'show-on-click'}
                    frame-id={frameId}
                    share={share}
                  />
                );

              case 'frame-preview':
                return <framePreview.framePreview />;

              default:
                return null;
            }
          })()}
        </ctx.currentProfile.Provider>
      </ctx.currentRoute.Provider>
    );
  };
};

const App = () => {
  const route = refs.route.useDeref();
  const edata = refs.exception.useDeref();
  const profile = refs.profile.useDeref();

  theme.useInitialize(profile);

  dom.preventBrowserGestureNavigation();

  return (
    <ctx.currentRoute.Provider value={route}>
      <ctx.currentProfile.Provider value={profile}>
        {edata ? (
          <staticContent.exceptionPage data={edata} route={route} />
        ) : (
          <errorBoundary fallback={staticContent.exceptionPage}>
            <notifications.currentNotification />
            {route && <Page route={route} profile={profile} />}
          </errorBoundary>
        )}
      </ctx.currentProfile.Provider>
    </ctx.currentRoute.Provider>
  );
};

export {
  authPage,
  verifyTokenPage,
  viewerPage,
  dashboardPage,
  settingsPage,
  workspacePage,
  workspaceLegacyRedirect,
  dashboardLegacyRedirect,
  viewerLegacyRedirect,
  teamContainer,
  Page,
  App,
};