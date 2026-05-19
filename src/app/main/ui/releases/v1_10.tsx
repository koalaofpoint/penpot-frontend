// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { RenderReleaseNotesProps } from "./common";

interface V1_10ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_10ReleaseNotes: React.FC<V1_10ReleaseNotesProps> = ({
  klass,
  finish,
  version,
}) => {
  return (
    <div className="modal-overlay">
      <div className={`animated ${klass || ""}`}>
        <div className="modal-container onboarding feature">
          <div className="modal-left">
            <img
              src="images/beta-on.jpg"
              border="0"
              alt="Penpot is now BETA"
            />
          </div>
          <div className="modal-right">
            <div className="modal-title">
              <h2>Penpot is now BETA</h2>
            </div>
            <span className="release">Beta version {version}</span>
            <div className="modal-content">
              <p>Penpot's officially beta!</p>
              <p>
                We carefully analyzed everything important to us before taking
                this step. And now we're ready to move forward onto the beta
                version. Have a play around if you haven't yet.
              </p>
              <a href="https://penpot.app/why-beta" target="_blank">
                Learn why we made this decision.
              </a>
            </div>
            <div className="modal-navigation">
              <button className="btn-secondary" onClick={finish}>
                Explore Penpot Beta 1.10
              </button>
            </div>
          </div>
          <img className="deco" src="images/deco-left.png" border="0" />
          <img className="deco right" src="images/deco-right.png" border="0" />
        </div>
      </div>
    </div>
  );
};
