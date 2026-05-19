// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_13ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_13ReleaseNotes: React.FC<V1_13ReleaseNotesProps> = ({
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
                  alt="What's new Beta release 1.13"
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
                    stuff that the Beta 1.13 version brings.
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
                    src="images/features/1.13-multi-export.gif"
                    border="0"
                    alt="Multiple exports"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Multiple exports</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Speed up your workflow exporting multiple elements
                      simultaneously.
                    </p>
                    <p>
                      Use the export window to manage your multiple exports and
                      be informed about the download progress. Big exports will
                      happen in the background so you can keep designing in the
                      meantime ;)
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
                    src="images/features/1.13-multiple-fills.gif"
                    border="0"
                    alt="Multiple fills and strokes"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Multiple fills and strokes</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Now you can add multiple color fills and strokes to a
                      single element, including shapes and texts.
                    </p>
                    <p>
                      This opens endless graphic possibilities such as combining
                      gradients and blending modes in the same element to create
                      sophisticated visual effects.
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
                    src="images/features/1.13-members.gif"
                    border="0"
                    alt="Members area redesign"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Members area redesign</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Penpot is meant for teams, that's why we decided to give
                      some love to the members area.
                    </p>
                    <p>
                      A refreshed interface and two new features! The
                      Invitations section allows you to check the status of
                      current team invites plus you now have the ability to
                      invite multiple members at the same time.
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
                    src="images/features/1.13-focus.gif"
                    border="0"
                    alt="Focus mode"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Focus mode</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Enjoy a distraction-less design mode by selecting the
                      elements of a page that matter to you and temporarily
                      hiding the rest.
                    </p>
                    <p>
                      As a side effect, this can give you a performance boost in
                      massive designs.
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
