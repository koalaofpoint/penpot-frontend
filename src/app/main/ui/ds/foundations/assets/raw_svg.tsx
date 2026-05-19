// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { dm } from '../../../../common/data';

// SVG asset IDs
const RAW_SVG_LIST = [
  'brand-openid',
  'brand-github',
  'brand-gitlab',
  'brand-google',
  'loader',
  'logo-error-screen',
  'logo-subscription',
  'logo-subscription-light',
  'marketing-arrows',
  'marketing-change',
  'marketing-file',
  'marketing-layers',
  'penpot-logo',
  'penpot-logo-icon',
  'empty-placeholder-1-left',
  'empty-placeholder-1-right',
  'empty-placeholder-2-left',
  'empty-placeholder-2-right'
];

/**
 * Raw SVG component props
 */
export interface RawSvgProps {
  id: string;
}

/**
 * Raw SVG component - SVG asset reference
 */
export function RawSvg({ id }: RawSvgProps) {
  // TODO: dm.assert(RAW_SVG_LIST.includes(id), "invalid raw svg id");
  if (!RAW_SVG_LIST.includes(id)) {
    return null;
  }

  const href = `#asset-${id}`;

  return (
    <svg>
      <use href={href} />
    </svg>
  );
}
