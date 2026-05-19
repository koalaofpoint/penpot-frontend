// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { useSelector } from 'react-redux';
import * as l from 'okulary/core';
import { getIn } from 'app/common/data';

export const fileColorsRef = l.derived(
  l.in(['viewer', 'file', 'data', 'colors']),
  (state: any) => state
);

export function makeColorsLibraryRef(librariesPlace: string, fileId: string) {
  return l.derived(
    (state: any) => getIn(state, [librariesPlace, fileId, 'data', 'colors']),
    (state: any) => state
  );
}

export function useColorsLibrary(color: any) {
  const { refFile } = color || {};

  const libraryRef = React.useMemo(() => {
    if (!refFile) return null;
    return makeColorsLibraryRef('files', refFile);
  }, [refFile]);

  if (!libraryRef) return null;

  return useSelector(libraryRef as any);
}
