// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import * as ex from '@app/common/exceptions';
import * as cf from '@app/config';
import * as errors from '@app/main/errors';
import * as refs from '@app/main/refs';
import * as gfn from 'goog:functions';

interface FallbackWrapperProps {
  error: Error;
  resetErrorBoundary: () => void;
  fallback: React.ComponentType<any>;
  route: any;
  data: any;
}

const FallbackWrapper: React.FC<FallbackWrapperProps> = React.memo(({ error, resetErrorBoundary, fallback, route, data }) => {
  return React.createElement(fallback, {
    data,
    route,
    onReset: resetErrorBoundary
  });
});

interface ErrorBoundaryProps {
  fallback: React.ComponentType<any>;
  children: React.ReactNode;
}

export const ErrorBoundaryComponent: React.FC<ErrorBoundaryProps> = ({ fallback, children }) => {
  const fallbackWrapper = useMemo(() => {
    return React.memo<FallbackWrapperProps>(({ error, resetErrorBoundary }) => {
      const route = (refs.route as any)?.deref?.() || refs.route;
      const data = errors.exceptionToErrorData(error);

      return React.createElement(FallbackWrapper, {
        error,
        resetErrorBoundary,
        fallback,
        route,
        data
      });
    });
  }, [fallback]);

  const onError = useMemo(() => {
    return gfn.debounce((error: Error, info: any) => {
      if (errors.staleAssetError(error)) {
        cf.throttledReload({ reason: ex.message(error) });
      } else {
        errors.lastException = error;
        ex.printThrowable(error);
        console.error(
          'Component trace: \n',
          info.componentStack,
          '\n',
          error
        );
      }
    }, 100);
  }, []);

  return React.createElement(ErrorBoundary, {
    FallbackComponent: fallbackWrapper,
    onError
  }, children);
};
