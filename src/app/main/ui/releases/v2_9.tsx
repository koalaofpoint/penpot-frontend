// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_9ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_9ReleaseNotes: React.FC<V2_9ReleaseNotesProps> = ({
  slide,
  klass,
  next,
  finish,
  navigate,
  version,
}) => {
  const renderSlide = () => {
    if (slide === ":start" || slide === "start") {
      return (
        <div className="modal-overlay">
          <div className={`animated ${klass || ""}`}>
            <div className="modal-container">
              <img
                src="images/features/2.9-slide-0.jpg"
                className="start-image"
                border="0"
                alt="Penpot 2.9 is here!"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">Penpot 2.9 is out!</span>

                  <p className="feature-content">
                    We're keeping the momentum going with another exciting round of
                    improvements and features!
                  </p>

                  <p className="feature-content">
                    This release brings major progress in Design Token management
                    (including our very first typography token!), smarter text
                    overrides for components, and a rich collection of
                    quality-of-life enhancements.
                  </p>

                  <p className="feature-content">Let's dive in!</p>
                </div>

                <div className="navigation">
                  <button className="next-btn" onClick={next}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    switch (slide) {
      case 0:
        return (
          <div className="modal-overlay">
            <div className={`animated ${klass || ""}`}>
              <div className="modal-container">
                <img
                  src="images/features/2.9-font-size.gif"
                  className="start-image"
                  border="0"
                  alt="New typography token type"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">New typography token type</h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      You can now define and manage font size tokens right from the
                      Design Tokens panel. This is just the first of many
                      typography token types to come. Font family token is next!
                    </p>

                    <p className="feature-content">
                      And there's more progress on Tokens, including support for
                      importing multiple token files via .zip, and smarter token
                      visibility, only showing the relevant tokens for each layer
                      type.
                    </p>
                  </div>

                  <div className="navigation">
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={2}
                    />
                    <button className="next-btn" onClick={next}>
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="modal-overlay">
            <div className={`animated ${klass || ""}`}>
              <div className="modal-container">
                <img
                  src="images/features/2.9-qol.gif"
                  className="start-image"
                  border="0"
                  alt="Quality-of-life galore"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Quality-of-life galore</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      This release packs dozens of small yet impactful usability
                      improvements, including enhanced UX writing (thanks to community
                      contributions!), a new visual indicator for comments directly
                      in the design space, a reorganized dashboard sidebar,
                      improved text resizing behavior, and much more.
                    </p>

                    <p className="feature-content">
                      As always, we've squashed plenty of bugs and made underlying
                      performance improvements to keep everything running smoothly.
                    </p>
                  </div>

                  <div className="navigation">
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={2}
                    />
                    <button className="next-btn" onClick={finish}>
                      Let's go
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderSlide();
};
