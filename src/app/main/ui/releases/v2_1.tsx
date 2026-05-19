// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { RenderReleaseNotesProps } from "./common";

interface V2_1ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_1ReleaseNotes: React.FC<V2_1ReleaseNotesProps> = ({
  klass,
  finish,
  version,
}) => {
  return (
    <div className="modal-overlay">
      <div className={`animated ${klass || ""}`}>
        <div className="modal-container">
          <img
            src="images/features/2.0-intro-image.png"
            className="start-image"
            border="0"
            alt="A graphic illustration with Penpot style"
          />

          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">What's new in Penpot? </h1>
              <div className="version-tag">Version {version}</div>
            </div>

            <div className="features-block">
              <p className="feature-content">
                Penpot 2.1 brings improvements to the authentication system,
                path editing, real-time persistence, and comments system among
                other enhancements. We've improved the stability of the
                platform by fixing a bunch of bugs, a lot of them raised by our
                amazing community &lt;3.
              </p>

              <p className="feature-content">
                This minor release comes shortly after our amazing Penpot 2.0 and
                it shows the way to long-expected capabilities like the incoming
                new plugin system!
              </p>

              <p className="feature-content">
                {" "}
                Ready to dive in? Let's get started!
              </p>
            </div>

            <div className="navigation">
              <button className="next-btn" onClick={finish}>
                Let's go
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
