// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
// TODO: Import proper modules
// import * as c from '../cursors';
// import * as deprecated-icon from '../icons';
// import * as ts from '../../../util/timers';

interface IconEntry {
  key: string;
  component: React.ReactNode;
}

interface CursorEntry {
  key: string;
  value: string | ((rotation: number) => string);
}

function IconsGallery({ entries }: { entries: IconEntry[] }) {
  return (
    <section className="gallery">
      {entries.map(({ key, component }) => (
        <div key={key} className="gallery-item" title={key}>
          {component}
          <span>{key}</span>
        </div>
      ))}
    </section>
  );
}

function CursorsGallery({ entries }: { entries: CursorEntry[] }) {
  const [rotation, setRotation] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="gallery">
      {entries.map(({ key, value }) => {
        const cursorValue = typeof value === "function" ? value(rotation) : value;

        return (
          <div key={key} className="gallery-item">
            <div
              className="cursor"
              style={{
                backgroundImage: cursorValue?.replace(/url\(.*\)/, "$1"),
                cursor: cursorValue
              }}
            />
            <span>{`${key}`}</span>
          </div>
        );
      })}
    </section>
  );
}

export function IconsPreview() {
  // TODO: Get icons from deprecated-icon/default
  const iconEntries: IconEntry[] = [];

  // TODO: Get cursors from c/default
  const cursorEntries: CursorEntry[] = [];

  return (
    <article className="container">
      <h2 className="title">Cursors</h2>
      <CursorsGallery entries={cursorEntries} />
      <h2 className="title">Icons</h2>
      <IconsGallery entries={iconEntries} />
    </article>
  );
}
