// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_4ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_4ReleaseNotes: React.FC<V1_4ReleaseNotesProps> = ({
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
                  alt="What's new Alpha release 1.4.0"
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
                    stuff that the Alpha 1.4.0 version brings.
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
                    src="images/features/select-files.gif"
                    border="0"
                    alt="New file selection"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>New file selection and open files</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Now you can select files with left click and make
                      multi-selections holding down the shift + left click.
                    </p>
                    <p>
                      To open a file you just have to double click it. You can
                      also open a file in a new tab with right click.
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
                    src="images/features/manage-files.gif"
                    border="0"
                    alt="Manage files"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>New files/projects management</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Penpot now allows to duplicate and move files and projects.
                    </p>
                    <p>
                      Also, now you have an easy way to manage files and projects
                      between teams.
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
                    src="images/features/rtl.gif"
                    border="0"
                    alt="RTL support"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>RTL support is now available!</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Diversity and inclusion is one major Penpot concern and
                      that's why we love to give support to RTL languages, unlike
                      in most of design tools.
                    </p>
                    <p>
                      If you write in arabic, hebrew or other RTL language text
                      direction will be automatically detected in text layers.
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
                    src="images/features/blend-modes.gif"
                    border="0"
                    alt="Blend modes"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>New layer opacity and blend modes</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Combining elements visually is an important part of the
                      design process.
                    </p>
                    <p>
                      This is why the standard blend modes and opacity level are
                      now available for each element.
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
