// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_15ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_15ReleaseNotes: React.FC<V1_15ReleaseNotesProps> = ({
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
                  alt="What's new Beta release 1.15"
                />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Beta version {version}</span>
                <div className="modal-content">
                  <p>
                    Penpot continues to grow with new features that improve
                    performance, user experience and visual design.
                  </p>
                  <p>
                    We are happy to show you a sneak peek of the most important
                    stuff that the Beta 1.15 version brings.
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
                    src="images/features/1.15-nested-boards.gif"
                    border="0"
                    alt="Nested boards"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Nested boards</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Unlike its predecessors (the artboards) boards can contain
                      other boards and offer the options to clip content and
                      show them or not at the View Mode, opening up a ton of
                      possibilities when creating and organizing your designs.
                    </p>
                    <p>Say goodbye to Artboards and hello to Boards!</p>
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
                    src="images/features/1.15-share.gif"
                    border="0"
                    alt="Share prototype options"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Share prototype options</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Have you ever wanted to share a Penpot file and get
                      feedback from people that are not in your Penpot team?
                    </p>
                    <p>
                      Now you can thanks to new permissions that allow you to
                      decide who can comment and/or inspect the code at a shared
                      prototype link.
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
                    src="images/features/1.15-comments.gif"
                    border="0"
                    alt="Comments positioning"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Comments positioning</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      They live! Now you can move existing comments wherever you
                      want by dragging them.
                    </p>
                    <p>
                      Also, comments inside boards will be associated with it,
                      so that if you move a board its comments will maintain its
                      place inside it.
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
                    src="images/features/1.15-view-mode.gif"
                    border="0"
                    alt="View Mode improvements"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>View Mode improvements</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      The View Mode, used for presenting designs, is now easier
                      to use thanks to new navigation buttons and
                      microinteractions.
                    </p>
                    <p>
                      We've also made some adjustments to ensure the access to
                      the options from small screens.
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
