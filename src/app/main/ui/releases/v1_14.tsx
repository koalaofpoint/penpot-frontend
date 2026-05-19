// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_14ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_14ReleaseNotes: React.FC<V1_14ReleaseNotesProps> = ({
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
                  alt="What's new Beta release 1.14"
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
                    stuff that the Beta 1.14 version brings.
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
                    src="images/features/1.14-shortcuts.gif"
                    border="0"
                    alt="Shortcuts panel"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Shortcuts panel</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Shortcuts boost your productivity but are not easy to find
                      and learn. A handy panel at your workspace will help you
                      with that.
                    </p>
                    <p>
                      Categories and filters will help you to find the shortcut
                      you need. One of the most requested features by the
                      community!
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
                    src="images/features/1.14-color-group.gif"
                    border="0"
                    alt="Colors selection"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Colors selection</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      All of the colors that are contained within a selection of
                      objects are showcased at the sidebar.
                    </p>
                    <p>
                      Play with the colors of a group without the hassles of
                      individual selection!
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
                    src="images/features/1.14-fix-on-scroll.gif"
                    border="0"
                    alt="Fix elements at scroll"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Fix elements at scroll</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      A new option that allows you to fix the position of an
                      object when scrolling at the presentation view.
                    </p>
                    <p>Ideal for prototyping fixed headers, navbars and floating buttons.</p>
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
                    src="images/features/1.14-group-assets.gif"
                    border="0"
                    alt="Group library assets with drag & drop"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Group library assets with drag & drop</h2>
                  </div>
                  <div className="modal-content">
                    <p>We have improved the way to manage asset groups at libraries.</p>
                    <p>
                      Until now you could only do it by renaming the groups,
                      now with drag & drop it is much more user friendly.
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
