// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_0ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_0ReleaseNotes: React.FC<V2_0ReleaseNotesProps> = ({
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
                src="images/features/2.0-intro-image.png"
                className="start-image"
                border="0"
                alt="A graphic illustration with Penpot style"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">Welcome to Penpot 2.0! </h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <p className="feature-content">
                    <span className="feature-title">CSS Grid Layout: </span>
                    Bring your designs to life, knowing that what you create is
                    what developers code.
                  </p>

                  <p className="feature-content">
                    <span className="feature-title">Sleeker UI: </span>
                    We've polished Penpot to make your experience smoother and
                    more enjoyable.
                  </p>

                  <p className="feature-content">
                    <span className="feature-title">New Components System: </span>
                    Managing and using your design components got a whole lot
                    better.
                  </p>

                  <p className="feature-content">
                    And that's not all - we've fined tuned performance and
                    accessibility to give you a better and more fluid design
                    experience.
                  </p>

                  <p className="feature-content">
                    {" "}
                    Ready to dive in? Let's get started!
                  </p>
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
                  src="images/features/2.0-css-grid.gif"
                  className="start-image"
                  border="0"
                  alt="Penpot's CSS Grid Layout"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      CSS Grid Layout - Design Meets Development
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      The much-awaited Grid Layout introduces 2-dimensional
                      layout capabilities to Penpot, allowing for the creation
                      of adaptive layouts by leveraging the power of CSS
                      properties.
                    </p>

                    <p className="feature-content">
                      It's a host of new features, including columns and rows
                      management, flexible units such as FR (fractions), the
                      ability to create and name areas, and tons of new and
                      unique possibilities within a design tool.
                    </p>

                    <p className="feature-content">
                      Designers will learn CSS basics while working, and as
                      always with Penpot, developers can pick up the design as
                      code to take it from there.
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
                  src="images/features/2.0-new-ui.gif"
                  className="start-image"
                  border="0"
                  alt="Penpot's UI Makeover"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      UI Makeover - Smoother, Sharper, and Simply More Fun
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      We've completely overhauled Penpot's user interface. The
                      improvements in consistency, the introduction of new
                      microinteractions, and attention to countless details will
                      significantly enhance the productivity and enjoyment of
                      using Penpot.
                    </p>
                    <p className="feature-content">
                      Furthermore, we've made several accessibility
                      improvements, with better color contrast, keyboard
                      navigation, and adherence to other best practices.
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
                  src="images/features/2.0-components.gif"
                  className="start-image"
                  border="0"
                  alt="Penpot's new components system"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">New Components System</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      The new Penpot components system improves control over
                      instances, including their inheritances and properties
                      overrides. Main components are now accessible as design
                      elements, allowing a better updating workflow through
                      instant changes synchronization.
                    </p>
                    <p className="feature-content">
                      And that's not all, there are new capabilities such as
                      component swapping and annotations that will help you to
                      better manage your design systems.
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
                  src="images/features/2.0-html.gif"
                  className="start-image"
                  border="0"
                  alt=" Penpot's HTML code generator"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">And much more</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      In addition to all of this, we've included several other
                      requested improvements:
                    </p>
                    <ul className="feature-list">
                      <li>Access HTML markup code directly in inspect mode</li>
                      <li>
                        Images are now treated as element fills, maintaining
                        their aspect ratio on resize, ideal for flexible designs
                      </li>
                      <li>
                        Enjoy new color themes with options for both dark and
                        light modes
                      </li>
                      <li>
                        Feel the speed boost! Enjoy a smoother experience with
                        a bunch of performance improvements
                      </li>
                    </ul>
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
