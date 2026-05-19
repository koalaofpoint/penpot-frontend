// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { css, cssCase } from '../../main/style';

/**
 * Release notes navigation dots component
 */
interface NavigationBulletsProps {
  slide: number;
  navigate: (slide: number) => void;
  total: number;
}

/**
 * Navigation bullets component - Shows dots for release notes pages
 */
export function NavigationBullets({ slide, navigate, total }: NavigationBulletsProps) {
  const bullets = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <ul className="step-dots">
      {bullets.map((i) => (
        <li
          key={i}
          className={cssCase({ dot: true, current: i === slide })}
          onClick={() => navigate(i)}
        />
      ))}
    </ul>
  );
}
