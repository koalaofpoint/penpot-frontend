// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_6ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_6ReleaseNotes: React.FC<V1_6ReleaseNotesProps> = ({
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
                  alt="What's new Alpha release 1.6.0"
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
                    stuff that the Alpha 1.6.0 version brings.
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
                    src="images/features/custom-fonts.gif"
                    border="0"
                    alt="Upload/use custom fonts"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Upload/use custom fonts</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      From now on you can upload fonts to a Penpot team and use
                      them across its files. This is one of the most requested
                      features since our first release (we listen!)
                    </p>
                    <p>
                      We hope you enjoy having more typography options and our
                      brand new font selector.
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
                    src="images/features/scale-text.gif"
                    border="0"
                    alt="Interactively scale text"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Scale text layers at resizing</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      New main menu option "Scale text (K)" to enable scale
                      text mode.
                    </p>
                    <p>
                      Disabled by default, this tool is disabled back after
                      being used.
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
                    src="images/features/performance.gif"
                    border="0"
                    alt="Performance improvements"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Performance improvements</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Penpot brings important improvements handling large files.
                      The performance in managing files in the dashboard has also
                      been improved.
                    </p>
                    <p>
                      You should have the feeling that files and layers show up
                      a bit faster :)
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
                    src="images/features/shapes-to-path.gif"
                    border="0"
                    alt="Shapes to path"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Shapes to path</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Now you can edit basic shapes like rectangles, circles and
                      image containers by double clicking.
                    </p>
                    <p>An easy way to increase speed by working with vectors!</p>
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
