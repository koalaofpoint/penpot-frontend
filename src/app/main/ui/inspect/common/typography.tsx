// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import * as l from 'okulary/core';
import { getIn } from 'app/common/data';

const fileTypographiesRef = l.derived(
  l.in(['viewer', 'file', 'data', 'typographies']),
  (state: any) => state
);

export function getTypography(style: any) {
  const typographyRefFile = style.typographyRefFile;

  const typographyLibraryRef = React.useMemo(() => {
    if (!typographyRefFile) return null;
    return makeTypographiesLibraryRef(typographyRefFile);
  }, [typographyRefFile]);

  // In a real implementation, we would properly combine these selectors
  // For now, this is a placeholder
  return null;
}

function makeTypographiesLibraryRef(fileId: string) {
  return l.derived(
    (state: any) => getIn(state, ['viewer-libraries', fileId, 'data', 'typographies']),
    (state: any) => state
  );
}
