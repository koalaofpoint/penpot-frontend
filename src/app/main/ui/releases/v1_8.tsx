// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_8ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_8ReleaseNotes: React.FC<V1_8ReleaseNotesProps> = ({
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
            <div className="modal-container onboarding feature">
              <div className="modal-left">
                <img
                  src="images/login-on.jpg"
                  border="0"
                  alt="What's new Alpha release 1.8"
                />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Alpha version {version}</span>
                <div className="modal-content">
                  <p>
                    Penpot continues growing with new features that improve
                    performance, user experience and visual design.
                  </p>
                  <p>
                    We are happy to show you a sneak peek of the most important
                    stuff that the Alpha 1.8 version brings.
                  </p>
                </div>
                <div className="modal-navigation">
                  <button className="btn-secondary" onClick={next}>
                    Continue
                  </button>
                </div>
              </div>
              <img className="deco" src="images/deco-left.png" border="0" />
              <img
                className="deco right"
                src="images/deco-right.png"
                border="0"
              />
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
              <div className="modal-container onboarding feature">
                <div className="modal-left">
                  <img
                    src="images/features/share-viewer.gif"
                    border="0"
                    alt="Share options and pages at view mode"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Share options and pages at view mode</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Now you can navigate through prototype pages of the same
                      file at the view mode.
                    </p>
                    <p>
                      You can also create a shareable link deciding which pages
                      will be available for the visitors. Sharing is caring!
                    </p>
                  </div>
                  <div className="modal-navigation">
                    <button className="btn-secondary" onClick={next}>
                      Continue
                    </button>
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={4}
                    />
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
              <div className="modal-container onboarding feature">
                <div className="modal-left">
                  <img
                    src="images/features/stroke-caps.gif"
                    border="0"
                    alt="Path stroke caps"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Path stroke caps</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Ever needed an arrow to point something? Style the ends of
                      any open paths.
                    </p>
                    <p>
                      You can select different styles for each end of an open
                      path: arrows, square, circle, diamond or just a round
                      ending are the available options.
                    </p>
                  </div>
                  <div className="modal-navigation">
                    <button className="btn-secondary" onClick={next}>
                      Continue
                    </button>
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="modal-overlay">
            <div className={`animated ${klass || ""}`}>
              <div className="modal-container onboarding feature">
                <div className="modal-left">
                  <img
                    src="images/features/navigate-history.gif"
                    border="0"
                    alt="Navigable history"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Navigable history</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Click on a change of the history of a file to get the file
                      to this very point without ctrl+z all the way.
                    </p>
                    <p>Quick and easy :)</p>
                  </div>
                  <div className="modal-navigation">
                    <button className="btn-secondary" onClick={next}>
                      Continue
                    </button>
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="modal-overlay">
            <div className={`animated ${klass || ""}`}>
              <div className="modal-container onboarding feature">
                <div className="modal-left">
                  <img
                    src="images/features/export-artboards.gif"
                    border="0"
                    alt="Export artboards PDF"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Export artboards PDF</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      If you have a presentation made at Penpot you might want to
                      create a document that can be shared with anyone,
                      regardless of having a Penpot account, or just to be able
                      to use your presentation offline (essential for talks and
                      classes).
                    </p>
                    <p>
                      Now you can easily export all the artboards of a page to a
                      single pdf file.
                    </p>
                  </div>
                  <div className="modal-navigation">
                    <button className="btn-secondary" onClick={finish}>
                      Start!
                    </button>
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={4}
                    />
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
