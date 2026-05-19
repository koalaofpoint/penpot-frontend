// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { RenderReleaseNotesProps } from "./common";

interface V2_2ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_2ReleaseNotes: React.FC<V2_2ReleaseNotesProps> = ({
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
                This Penpot 2.2 release focuses on internal changes that are
                laying out the ground for the upcoming plugin system and
                substantial performance improvements.
              </p>

              <p className="feature-content">
                This version also adds full JSON API interoperability and the
                brand-new Penpot's Storybook!
              </p>

              <p className="feature-content">
                Self-hosted Penpot installations will benefit from better file
                data storage and Penpot admins can now use the improved automatic
                snapshotting process when recovering old files.
              </p>

              <p className="feature-content">
                Thanks again to our awesome community for their amazing
                contributions to this release!
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
