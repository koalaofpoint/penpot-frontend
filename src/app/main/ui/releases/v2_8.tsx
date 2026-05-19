// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_8ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_8ReleaseNotes: React.FC<V2_8ReleaseNotesProps> = ({
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
                src="images/features/2.8-slide-0.jpg"
                className="start-image"
                border="0"
                alt="Penpot 2.8 is here!"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">Penpot 2.8 is out!</span>

                  <p className="feature-content">
                    Keeping the momentum from our last releases, we're moving
                    forward with a fresh batch of features and improvements.
                  </p>

                  <p className="feature-content">
                    This update brings significant user experience optimizations,
                    new capabilities for Design Token management, and an
                    important performance enhancement, in addition to the usual bug
                    fixes and general optimizations.
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
                  src="images/features/2.8-selection.gif"
                  className="start-image"
                  border="0"
                  alt="Quality-of-life improvements"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Quality-of-life improvements</h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      The devil is in the details, and we've added many more
                      improvements than we can list in this introduction, so we'll
                      list them here:
                    </p>

                    <p className="feature-content">
                      - You can now deselect layers with Ctrl+Shift+Drag.
                    </p>
                    <p className="feature-content">
                      - Synchronize your color theme (light, dark) with your
                      operating system theme.
                    </p>
                    <p className="feature-content">
                      - Copy objects directly as SVG from the design workspace using
                      the contextual menu.
                    </p>
                    <p className="feature-content">
                      - Your choice of ruler visibility settings now persists across
                      files and reloads.
                    </p>
                    <p className="feature-content">
                      - We have introduced a new look and feel for tooltips.
                    </p>
                    <p className="feature-content">
                      - Our fonts catalog has been updated, highlighting fonts like
                      Atkinson Hyperlegible, developed specifically to increase
                      legibility for readers with low vision.
                    </p>
                    <p className="feature-content">
                      - And we've a new language! Hi Serbians!
                    </p>
                  </div>

                  <div className="navigation">
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={4}
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
                  src="images/features/2.8-json-multi.gif"
                  className="start-image"
                  border="0"
                  alt="Multi-file tokens import and export"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Multi-file tokens import and export
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Continuing the development of our Design Tokens system, we
                      keep launching new functionalities that will improve your
                      workflow.
                    </p>

                    <p className="feature-content">
                      It is now possible to perform multi-file token import. This
                      is perfect for handling more complex setups like separate
                      JSON files for themes or metadata. The same goes for
                      exporting. Now you can export tokens choosing between single
                      or multi-file (check your team preference!), being able to
                      preview both options before you decide.
                    </p>

                    <p className="feature-content">
                      This is just one more step in the evolution of Design Tokens
                      in Penpot. And there's more to come: typography tokens are
                      already in the works!
                    </p>
                  </div>

                  <div className="navigation">
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={4}
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

      case 2:
        return (
          <div className="modal-overlay">
            <div className={`animated ${klass || ""}`}>
              <div className="modal-container">
                <img
                  src="images/features/2.8-ia-help.gif"
                  className="start-image"
                  border="0"
                  alt="Better onboarding experience"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Better onboarding experience</h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      We know Penpot works perfectly for solo projects, but it's
                      always more fun and productive to work as a team. That's why
                      we have made significant optimizations to the onboarding
                      process to make your team mates getting started easier and
                      faster.
                    </p>

                    <p className="feature-content">
                      - We have reduced the number of onboarding steps so new
                      users can start designing sooner. Only essential data will be
                      collected to help you set up your profile more efficiently.
                    </p>

                    <p className="feature-content">
                      - We have integrated AI-powered help, which is trained on
                      Penpot documentation, directly into the design workspace. Get
                      assistance without switching context, so you can stay in the
                      flow.
                    </p>
                  </div>

                  <div className="navigation">
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={4}
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

      case 3:
        return (
          <div className="modal-overlay">
            <div className={`animated ${klass || ""}`}>
              <div className="modal-container">
                <img
                  src="images/features/2.8-svg-opt.gif"
                  className="start-image"
                  border="0"
                  alt="Performance improvements related to SVG paths"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Performance improvements related to SVG paths
                    </h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      We are putting a special focus on performance. This time,
                      we've made improvements around handling paths, which typically
                      make up icons and illustrations.
                    </p>

                    <p className="feature-content">
                      We have carried out a refactoring of how Penpot deals with
                      path data. This translates into perceptible performance
                      improvements in SVG-heavily loaded files. This means that,
                      in files with a significant presence of SVG icons and
                      illustrations you can expect:
                    </p>
                    <p className="feature-content">- Faster import/export.</p>
                    <p className="feature-content">
                      - A more fluid user experience.
                    </p>
                    <p className="feature-content">
                      This is one of many performance improvements to come,
                      including a new rendering engine that is already under
                      development (this will be huge, please be patient!).
                    </p>
                  </div>

                  <div className="navigation">
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={4}
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
