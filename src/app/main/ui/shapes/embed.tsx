import * as hooks from '@app/main/ui/hooks';
import * as http from '@app/util/http';
import * as rx from 'beicon';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const context = React.createContext(false);

export function useDataUris(urls: string[]): Record<string, string> {
  const embed = React.useContext(context);
  const urlsMemo = hooks.useEqualMemo(urls);
  const uriData = useRef<Record<string, string>>({});
  const [, setState] = useState(0);

  useEffect(() => {
    const urlMapping = (obs: any) => {
      if (embed) {
        return obs.pipe(
          rx.mergeMap((uri: string) =>
            http
              .fetchDataUri(uri, true)
              .pipe(rx.catch(() => rx.of({ [uri]: uri })))
          )
        );
      }
      return obs.pipe(rx.map((uri: string) => ({ [uri]: uri })));
    };

    const sub = urlsMemo
      .pipe(
        rx.filter((uri) => uri != null),
        urlMapping,
        rx.reduce((acc: Record<string, string>, curr: Record<string, string>) => ({
          ...acc,
          ...curr,
        })),
        rx.subscribe((data: Record<string, string>) => {
          if (data !== uriData.current) {
            uriData.current = data;
            setState((s) => s + 1);
          }
        })
      );

    return () => {
      rx.dispose(sub);
    };
  }, [embed, urlsMemo]);

  return uriData.current;
}
