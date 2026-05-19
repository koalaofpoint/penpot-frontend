// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as ex from '../common/exceptions.js';
import * as pp from '../common/pprint.js';
import * as cf from '../config.js';
import * as da from './data/auth.js';
import * as ev from './data/event.js';
import * as modal from './data/modal.js';
import * as ntf from './data/notifications.js';
import * as rt from './router.js';
import * as st from './store.js';
import * as dw from './data/workspace.js'; // aliased
import * as g from '../util/globals.js';
import { tr } from '../util/i18n.js';
import * as ts from '../util/timers.js';
import { str as strLib } from '../vendor/cuerdas/index.js';
import type { PotokError, PotokHandler } from '../vendor/potok/v2/index.js';
import { PotokV2 } from '../vendor/potok/v2/index.js';

// From app.main.data.workspace we can use directly because it causes a circular dependency
let reloadFile: any = null;

// Will contain the latest error report assigned
let lastReport: any = null;

// Will contain last uncaught exception
let lastException: any = null;

// Re-entrancy guard: prevents on-error from calling itself recursively.
// If an error occurs while we are already handling an error (e.g. the
// notification emit itself throws), we log it and bail out immediately
// instead of recursing until the call-stack overflows.
let handlingError = false;

export const stalteAssetError = (cause: any) => {
  if (!cause) return false;

  const message = ex.getMessage(cause);

  return (typeof message === 'string') &&
    (message.includes('$cljs$cst$') ||
     message.includes('$cljs$core$I')) &&
    (message.includes('is undefined') ||
     message.includes('is null') ||
     message.includes('is not a function') ||
     message.includes('Cannot read properties of undefined'));
};

export const exceptionToErrorData = (cause: any) => {
  const data = ex.getData(cause);

  return {
    ...data,
    hint: data?.hint || ex.getMessage(cause),
    __instance: cause,
    __trace: cause.stack
  };
};

export const onError = (error: any) => {
  if (handlingError) {
    console.error('[on-error] re-entrant call suppressed', error);
    return;
  }

  handlingError = true;
  try {
    if (typeof error === 'object' && error !== null) {
      PotokV2.handleError(error);
    } else {
      const data = exceptionToErrorData(error);
      PotokV2.handleError(data);
    }
  } finally {
    handlingError = false;
  }
};

// Inject dependency to remove circular dependency
// @ts-ignore
if (typeof app.main.worker !== 'undefined') {
  app.main.worker.onError = onError;
}

// Set the main potok error handler
// @ts-ignore
st.onError = onError;

export const generateReport = (cause: any) => {
  try {
    const teamId = st.state.currentTeamId;
    const fileId = st.state.currentFileId;
    const profileId = st.state.profileId;
    const data = ex.getData(cause);

    let report = 'Context:\n--------------------\n';
    report += `Hint:    ${data?.hint || ex.getMessage(cause) || '--'}\n`;
    report += `Prof ID: ${profileId || '--'}\n`;
    report += `Team ID: ${teamId || '--'}\n`;

    const fileIdToShow = data?.fileId || fileId;
    if (fileIdToShow) {
      report += `File ID: ${fileIdToShow}\n`;
    }

    report += `Version: ${cf.fullVersion}\n`;
    report += `HREF:    ${rt.getCurrentHref()}\n\n`;
    report += `${ex.formatThrowable(cause)}\n\n`;
    report += 'Last events:\\n--------------------\\n';
    report += pp.pprint(st.lastEvents, { length: 200 });

    return report;
  } catch (e) {
    console.error('error on generating report', e);
    return null;
  }
};

export const submitReport = ({ eventName = 'unhandled-exception', report, hint }: {
  eventName?: string;
  report?: string;
  hint?: string;
} = {}) => {
  if (hint && !strLib.isEmpty(hint) && typeof report === 'string' && typeof eventName === 'string') {
    st.emit({
      ...ev.event({
        __name: eventName,
        hint,
        href: rt.getCurrentHref(),
        report
      })
    });
  }
};

export const flash = ({ type = 'handled', hint, cause }: {
  type?: 'handled' | 'unhandled' | 'silent';
  hint?: any;
  cause?: any;
} = {}) => {
  if (ex.isException(cause)) {
    const eventName = type === 'handled' ? 'handled-exception' :
                     type === 'unhandled' ? 'unhandled-exception' :
                     null;

    if (eventName) {
      const report = generateReport(cause);
      if (report) {
        submitReport({
          eventName,
          report,
          hint: ex.getHint(cause)
        });
      }
    }
  }

  ts.schedule(() => {
    st.emit(ntf.show({
      content: hint || tr('errors.generic'),
      type: 'toast',
      level: 'error',
      timeout: 5000
    }));
  });
};

// Error handlers for different error types
PotokV2.addErrorHandler('network', (error: PotokError) => {
  // Transient network errors (e.g. lost connectivity, DNS failure)
  // should not replace the entire page with an error screen. Show a
  // non-intrusive toast instead and let the user continue working.
  const cause = error.__instance;
  if (cause) {
    ex.printThrowable(cause, 'Network Error');
  }
  flash({ cause, type: 'handled' });
});

PotokV2.addErrorHandler('internal', (error: PotokError) => {
  st.emit(rt.assignException(error));
  const cause = error.__instance;
  if (cause) {
    ex.printThrowable(cause, 'Internal Error');
  }
});

PotokV2.addErrorHandler('default', (error: PotokError) => {
  const hint = error.hint;
  if (typeof hint === 'string' && hint.startsWith('Assert failed:')) {
    PotokV2.handleError({ ...error, type: 'assertion' });
  } else {
    const cause = error.__instance;
    if (cause) {
      ex.printThrowable(cause, 'Unexpected Error');
      flash({ cause, type: 'unhandled' });
    }
  }
});

// We receive a explicit authentication error; If the uri is for
// workspace, dashboard, viewer or settings, then assign the exception
// for show the error page. Otherwise this explicitly clears all
// profile data and redirect the user to the login page. This is here
// and not in app.main.errors because of circular dependency.
PotokV2.addErrorHandler('authentication', (error: PotokError) => {
  const message = tr('errors.auth.unable-to-login');
  const uri = rt.getCurrentHref();

  const showError = uri.includes('workspace') ||
                    uri.includes('dashboard') ||
                    uri.includes('view') ||
                    uri.includes('settings');

  if (showError) {
    st.asyncEmit(rt.assignException(error));
  } else {
    st.emit(da.logout());
    ts.schedule(500, () => {
      st.emit(ntf.warn(message));
    });
  }
});

// Error that happens on an active business model validation does not
// passes an validation (example: profile can't leave a team). From
// the user perspective a error flash message should be visualized but
// user can continue operate on the application. Can happen in backend
// and frontend.

PotokV2.addErrorHandler('validation', (error: PotokError) => {
  const instance = error.__instance;
  if (instance) {
    ex.printThrowable(instance, 'Validation Error');
  }

  const code = error.code;

  if (code === 'invalid-paste-data') {
    const message = tr('errors.paste-data-validation');
    st.asyncEmit(ntf.show({
      content: message,
      type: 'toast',
      level: 'error',
      timeout: 3000
    }));
  } else if (code === 'vern-conflict') {
    st.emit(dw.reloadCurrentFile());
  } else if (code === 'snapshot-is-locked') {
    const message = tr('errors.version-locked');
    st.asyncEmit(ntf.show({
      content: message,
      type: 'toast',
      level: 'error',
      timeout: 3000
    }));
  } else if (code === 'only-creator-can-lock') {
    const message = tr('errors.only-creator-can-lock');
    st.asyncEmit(ntf.show({
      content: message,
      type: 'toast',
      level: 'error',
      timeout: 3000
    }));
  } else if (code === 'only-creator-can-unlock') {
    const message = tr('errors.only-creator-can-unlock');
    st.asyncEmit(ntf.show({
      content: message,
      type: 'toast',
      level: 'error',
      timeout: 3000
    }));
  } else if (code === 'snapshot-already-locked') {
    const message = tr('errors.version-already-locked');
    st.asyncEmit(ntf.show({
      content: message,
      type: 'toast',
      level: 'error',
      timeout: 3000
    }));
  } else {
    st.asyncEmit(rt.assignException(error));
  }
});

// This is a pure frontend error that can be caused by an active
// assertion (assertion that is preserved on production builds).
PotokV2.addErrorHandler('assertion', (error: PotokError) => {
  const cause = error.__instance;
  if (cause) {
    flash({ cause, type: 'handled' });
    ex.printThrowable(cause, 'Assertion Error');
  }
});

// All the errors that happens on worker are handled here.
PotokV2.addErrorHandler('worker-error', (error: PotokError) => {
  ts.schedule(() => {
    st.emit(ntf.show({
      content: tr('errors.internal-worker-error'),
      type: 'toast',
      level: 'error',
      timeout: 3000
    }));
  });

  const instance = error.__instance;
  if (instance) {
    ex.printThrowable(instance, 'Web Worker Error');
  }
});

// Error on parsing an SVG
PotokV2.addErrorHandler('svg-parser', () => {
  ts.schedule(() => {
    st.emit(ntf.show({
      content: tr('errors.svg-parser.invalid-svg'),
      type: 'toast',
      level: 'error',
      timeout: 3000
    }));
  });
});

// TODO: should be handled in the event and not as general error handler
PotokV2.addErrorHandler('comment-error', () => {
  ts.schedule(() => {
    st.emit(ntf.show({
      content: tr('errors.comment-error'),
      type: 'toast',
      level: 'error',
      timeout: 3000
    }));
  });
});

// That are special case server-errors that should be treated
// differently.
// These need to be registered in the Potok system first
// @ts-ignore
if (typeof PotokV2.registerDerivedType === 'function') {
  PotokV2.registerDerivedType('not-found', 'exceptional-state');
  PotokV2.registerDerivedType('bad-gateway', 'exceptional-state');
  PotokV2.registerDerivedType('service-unavailable', 'exceptional-state');
}

PotokV2.addErrorHandler('exceptional-state', (error: PotokError) => {
  const instance = error.__instance;
  if (instance) {
    ex.printThrowable(instance, 'Exceptional State');
  }
  ts.schedule(() => {
    st.emit(rt.assignException(error));
  });
});

const redirectToDashboard = () => {
  const teamId = st.state.currentTeamId;
  const projectId = st.state.currentProjectId;

  if (teamId && projectId) {
    st.emit(rt.nav('dashboard-files', { teamId, projectId }));
  } else {
    (g.location as Location).href = '';
  }
};

PotokV2.addErrorHandler('restriction', (error: PotokError) => {
  const code = error.code;

  if (code === 'migration-in-progress') {
    const message = tr('errors.migration-in-progress', error.feature);
    const onAccept = () => null;
    st.emit(modal.show({ type: 'alert', message, onAccept }));
  } else if (code === 'team-feature-mismatch') {
    const message = tr('errors.team-feature-mismatch', error.feature);
    const onAccept = () => null;
    st.emit(modal.show({ type: 'alert', message, onAccept }));
  } else if (code === 'file-feature-mismatch') {
    const message = tr('errors.file-feature-mismatch', error.feature);
    st.emit(modal.show({ type: 'alert', message, onAccept: redirectToDashboard }));
  } else if (code === 'feature-mismatch') {
    const message = tr('errors.feature-mismatch', error.feature);
    st.emit(modal.show({ type: 'alert', message, onAccept: redirectToDashboard }));
  } else if (code === 'feature-not-supported') {
    const message = tr('errors.feature-not-supported', error.feature);
    st.emit(modal.show({ type: 'alert', message, onAccept: redirectToDashboard }));
  } else if (code === 'file-version-not-supported') {
    const message = tr('errors.version-not-supported');
    st.emit(modal.show({ type: 'alert', message, onAccept: redirectToDashboard }));
  } else if (code === 'max-quote-reached') {
    const message = tr('errors.max-quota-reached', error.target);
    st.emit(modal.show({ type: 'alert', message }));
  } else if (code === 'paste-feature-not-enabled' ||
             code === 'missing-features-in-paste-content' ||
             code === 'paste-feature-not-supported') {
    const message = tr('errors.feature-not-supported', error.feature);
    st.emit(modal.show({ type: 'alert', message }));
  } else if (code === 'file-in-components-v1') {
    st.emit(modal.show({
      type: 'alert',
      message: tr('errors.deprecated'),
      linkMessage: {
        before: tr('errors.deprecated.contact.before'),
        text: tr('errors.deprecated.contact.text'),
        after: tr('errors.deprecated.contact.after'),
        onClick: () => {
          st.emit(rt.nav('settings-feedback'));
        }
      }
    }));
  } else {
    const cause = error.__instance;
    if (cause) {
      ex.printThrowable(cause, 'Restriction Error');
      flash({ cause, type: 'unhandled' });
    }
  }
});

// This happens when the backed server fails to process the
// request. This can be caused by an internal assertion or any other
// uncontrolled error.

PotokV2.addErrorHandler('server-error', (error: PotokError) => {
  const instance = error.__instance;
  if (instance) {
    ex.printThrowable(instance, 'Server Error');
  }
  st.asyncEmit(rt.assignException(error));
});

const fromExtension = (cause: any) => {
  const stack = cause.stack;
  return (typeof stack === 'string') &&
    (stack.includes('chrome-extension://') ||
     stack.includes('moz-extension://'));
};

const fromPosthog = (cause: any) => {
  const stack = cause.stack;
  return (typeof stack === 'string') &&
    stack.includes('posthog');
};

export const isIgnorableException = (cause: any) => {
  const message = ex.getMessage(cause);

  return (fromExtension(cause) ||
          fromPosthog(cause) ||
          message === 'Possible side-effect in debug-evaluate' ||
          message === 'Unexpected end of input' ||
          (typeof message === 'string' && message.startsWith('invalid props on component')) ||
          (typeof message === 'string' && message.startsWith('Unexpected token ')) ||
          // Native AbortError DOMException: raised when an in-flight
          // HTTP fetch is cancelled via AbortController (e.g. by an
          // RxJS unsubscription / take-until chain).  These are
          // handled gracefully inside app.util.http/fetch and must NOT
          // be surfaced as application errors.
          cause.name === 'AbortError' ||
          // Zone.js (injected by browser extensions such as Angular
          // DevTools) wraps event listeners and assigns a custom
          // .toString to its wrapper functions using
          // Object.defineProperty.  When the wrapper was previously
          // defined with {writable: false}, a subsequent plain assignment
          // in strict mode (our libs.js uses "use strict") throws this
          // TypeError.  This is a known Zone.js / browser-extension
          // incompatibility and is NOT a Penpot bug.
          (typeof message === 'string' && message.startsWith('Cannot assign to read only property \'toString\'')) ||
          // NotFoundError DOMException: "Failed to execute
          // 'removeChild' on 'Node'" — Thrown by React's commit
          // phase when the DOM tree has been modified externally
          // (typically by browser extensions like Grammarly,
          // LastPass, translation tools, or ad blockers that
          // inject/remove nodes).  The entire stack trace is inside
          // React internals (libs.js) with no application code,
          // so there is nothing actionable on our side.  React's
          // error boundary already handles recovery.
          (cause.name === 'NotFoundError' &&
           typeof message === 'string' &&
           message.includes('removeChild')));
};

export const uncaughtErrorHandler = (() => {
  let removeErrorListener: () => void;
  let removeRejectionListener: () => void;

  const onUnhandledError = (event: any) => {
    event.preventDefault();
    const cause = event.error;
    if (cause && !isIgnorableException(cause)) {
      if (stalteAssetError(cause)) {
        cf.throttledReload({ reason: ex.getMessage(cause) });
      } else {
        const data = ex.getData(cause);
        const type = data?.type;

        lastException = cause;

        if (type === 'wasm-error') {
          onError(cause);
        } else {
          ex.printThrowable(cause, 'Uncaught Exception');
          ts.asap(() => {
            flash({ cause, type: 'unhandled' });
          });
        }
      }
    }
  };

  const onUnhandledRejection = (event: any) => {
    event.preventDefault();
    const cause = event.reason;
    if (cause && !isIgnorableException(cause)) {
      if (stalteAssetError(cause)) {
        cf.throttledReload({ reason: ex.getMessage(cause) });
      } else {
        const data = ex.getData(cause);
        const type = data?.type;

        lastException = cause;

        if (type === 'wasm-error') {
          onError(cause);
        } else {
          ex.printThrowable(cause, 'Uncaught Rejection');
          ts.asap(() => {
            flash({ cause, type: 'unhandled' });
          });
        }
      }
    }
  };

  removeErrorListener = () => {
    g.window.removeEventListener('error', onUnhandledError);
  };

  removeRejectionListener = () => {
    g.window.removeEventListener('unhandledrejection', onUnhandledRejection);
  };

  g.window.addEventListener('error', onUnhandledError);
  g.window.addEventListener('unhandledrejection', onUnhandledRejection);

  return () => {
    removeErrorListener();
    removeRejectionListener();
  };
})();