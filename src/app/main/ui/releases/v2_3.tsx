// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_3ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_3ReleaseNotes: React.FC<V2_3ReleaseNotesProps> = ({
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
                src="images/features/2.3-slide-0.png"
                className="start-image"
                border="0"
                alt="A graphic illustration with Penpot style"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">
                    Penpot can now be extended by using Plugins!
                  </span>

                  <p className="feature-content">
                    The introduction of our brand new Plugin system allows you
                    to access even richer ecosystem of capabilities.
                  </p>

                  <p className="feature-content">
                    We are beyond excited about how this will further involve
                    the Penpot community in building the best design and
                    prototyping platform.
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
                  src="images/features/2.3-img-slide-1.gif"
                  className="start-image"
                  border="0"
                  alt="Build Plugins to enhance your workflow"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Build Plugins and enhance your workflow
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Penpot Plugins encourage developers to easily customize
                      and expand the platform using standard web technologies
                      like JavaScript, CSS, and HTML.
                    </p>

                    <p className="feature-content">
                      Find everything you need in our full comprehensive
                      documentation to start building your plugins now!
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
                  src="images/features/2.3-img-slide-2.gif"
                  className="start-image"
                  border="0"
                  alt="Plugins are safe and extremely easy to use"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Plugins are safe and extremely easy to use
                    </h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      Penpot plugins are quite easy to install.
                    </p>
                    <p className="feature-content">
                      Be sure to keep an eye on our evolving{" "}
                      <a href="https://penpot.app/penpothub" target="_blank">
                        Penpot Hub
                      </a>{" "}
                      to pick the ones that are best suited to enhance your
                      workflow.
                    </p>

                    <p className="feature-content">
                      This is just the beginning of a myriad of possibilities.
                      Let's build this community together ❤️.
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
