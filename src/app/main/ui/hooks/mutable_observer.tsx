// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";

export function useMutableObserver(
  onChange: (node: HTMLElement | null) => void
): [React.RefObject<HTMLElement | null>, (node: HTMLElement | null) => HTMLElement | null] {
  const prevObsRef = React.useRef<MutationObserver | null>(null);
  const nodeRef = React.useRef<HTMLElement | null>(null);

  const onMutation = React.useCallback(
    (mutations: MutationRecord[]) => {
      const filteredMutations = mutations.filter(
        (mutation) => mutation.attributeName !== "transform"
      );

      if (filteredMutations.length > 0) {
        onChange(nodeRef.current);
      }
    },
    [onChange]
  );

  const setNode = React.useCallback(
    (node: HTMLElement | null): HTMLElement | null => {
      if (node && node !== nodeRef.current) {
        nodeRef.current = node;

        if (prevObsRef.current) {
          prevObsRef.current.disconnect();
          prevObsRef.current = null;
        }

        if (node) {
          const options: MutationObserverInit = {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
          };

          const mutationObs = new MutationObserver(onMutation);
          prevObsRef.current = mutationObs;
          mutationObs.observe(node, options);
        }
      }

      return node;
    },
    [onMutation]
  );

  React.useEffect(() => {
    return () => {
      if (prevObsRef.current) {
        prevObsRef.current.disconnect();
        prevObsRef.current = null;
      }
    };
  }, []);

  return [nodeRef, setNode];
}
