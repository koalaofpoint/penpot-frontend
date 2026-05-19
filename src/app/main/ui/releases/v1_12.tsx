// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_12ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_12ReleaseNotes: React.FC<V1_12ReleaseNotesProps> = ({
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
                  alt="What's new Beta release 1.12"
                />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Beta version {version}</span>
                <div className="modal-content">
                  <p>
                    Penpot continues growing with new features that improve
                    performance, user experience and visual design.
                  </p>
                  <p>
                    We are happy to show you a sneak peek of the most important
                    stuff that the Beta 1.12 version brings.
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
                    src="images/features/1.12-ui.gif"
                    border="0"
                    alt="Adjustable UI"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Adjustable UI</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Adjust the workspace interface to your unique experience.
                      Resize the sidebar, the layers panel or hide the whole UI
                      to have maximum space.
                    </p>
                    <p>
                      Along with a better organization of panels (say hello to
                      typography toolbar!) and new shortcuts that will speed your
                      workflow.
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
                    src="images/features/1.12-guides.gif"
                    border="0"
                    alt="Guides"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Guides</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      One of our most requested features! It's hard to believe
                      how far Penpot has come without guides, but they are here
                      at last.
                    </p>
                    <p>And they don't come alone, but with some nice improvements to the rulers.</p>
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
                    src="images/features/1.12-scrollbars.gif"
                    border="0"
                    alt="Scrollbars"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Scrollbars</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Scrollbars at the design workspace will make it more
                      obvious how to navigate it and easier for some users, for
                      instance those who love using graphic tablets, from now on,
                      will feel just as comfortable as those who use a mouseAnd
                      they don't come alone, but with some nice improvements to
                      the rulers.
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

      case 3:
        return (
          <div className="modal-overlay">
            <div className={`animated ${klass || ""}`}>
              <div className="modal-container onboarding feature">
                <div className="modal-left">
                  <img
                    src="images/features/1.12-nudge.gif"
                    border="0"
                    alt="Nudge amount"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Nudge amount</h2>
                  </div>
                  <div className="modal-content">
                    <p>Set your desired distance to move objects using the keyboard.</p>
                    <p>
                      This is a must if you're working with grids (if you're
                      not, you should ;), being able to adjust the movement to
                      your baseline grid (8px? 5px?) is a huge timesaver that
                      will improve your quality of life while designing.
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
