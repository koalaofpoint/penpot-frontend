// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_7ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_7ReleaseNotes: React.FC<V1_7ReleaseNotesProps> = ({
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
                  alt="What's new Alpha release 1.7"
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
                    stuff that the Alpha 1.7 version brings.
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
                    src="images/features/export.gif"
                    border="0"
                    alt="Export & Import"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Export and import Penpot files</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      <strong>
                        Export files from the dashboard to your computer and
                        import them from your computer to your projects.
                      </strong>{" "}
                      This means that Penpot users can freely save and share
                      Penpot files.
                    </p>
                    <p>
                      Exported files linked to shared libraries provide different
                      ways to export their assets. Choose the one that suits
                      you better!
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
                    src="images/features/constraints.gif"
                    border="0"
                    alt="Resizing constraints"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Resizing constraints</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Constraints allow you to{" "}
                      <strong>
                        decide how layers will behave when resizing its container
                      </strong>{" "}
                      being a group or an artboard.
                    </p>
                    <p>
                      You can manually set horizontal and vertical constraints
                      for every layer. This is especially useful to control how
                      your designs look when working with responsive components.
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
                    src="images/features/group-components.gif"
                    border="0"
                    alt="Library assets management improvements"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Library assets management</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      <strong>Collapse/expand groups</strong> at any nesting
                      level, so you don't have to manage their visibility
                      individually.
                    </p>
                    <p>
                      Penpot <strong>remembers the last library state</strong>,
                      so you don't have to collapse a group you want hidden every
                      time.
                    </p>
                    <p>
                      Easily <strong>rename and ungroup</strong> asset groups.
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
                    src="images/features/copy-paste.gif"
                    border="0"
                    alt="Paste components from file to file"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Paste components from file to file</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Do you sometimes copy and paste component copies that
                      belong to a library already shared by the original and
                      destination files? From now on, those component copies are
                      aware of this and will retain their linkage to the
                      library.
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
