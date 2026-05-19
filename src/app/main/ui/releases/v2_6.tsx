// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_6ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_6ReleaseNotes: React.FC<V2_6ReleaseNotesProps> = ({
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
                src="images/features/2.6-slide-0.png"
                className="start-image"
                border="0"
                alt="Design Tokens make their debut in Penpot!"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">
                    Design Tokens make their debut in Penpot!
                  </span>

                  <p className="feature-content">
                    Penpot is the first design tool to integrate native design
                    tokens—a single source of truth to improve efficiency and
                    collaboration between product design and development.
                  </p>

                  <p className="feature-content">
                    But that's not all—we've also tackled improvements, bug fixes
                    and optimizations.
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
                  src="images/features/2.6-tokens-1.gif"
                  className="start-image"
                  border="0"
                  alt="Manage brands and themes across your design systems"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Manage brands and themes across your design systems
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Create and manage different token types—Color, Opacity,
                      Border Radius, Dimension, Sizing, Spacing, Rotation, and
                      Stroke. And this is just the beginning—more token types are
                      on the way!
                    </p>

                    <p className="feature-content">
                      Add values to your tokens, including references to other
                      tokens (aliases) and even math operations to keep things
                      dynamic and flexible.
                    </p>

                    <p className="feature-content">
                      Use Themes and Sets for an efficient way to manage your
                      design system across multiple dimensions—whether it's brand,
                      color schemes, devices, density, or anything else your
                      product needs.
                    </p>
                  </div>

                  <div className="navigation">
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={3}
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
                  src="images/features/2.6-tokens-2.gif"
                  className="start-image"
                  border="0"
                  alt="Open Source design tokens format"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Open Source design tokens format
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Penpot adopts the W3C Design Tokens Community Group (DTCG)
                      standard, ensuring maximum compatibility with a wide range of
                      tools and technologies.
                    </p>

                    <p className="feature-content">
                      With Penpot's standardized design tokens format, you can
                      easily reuse and sync tokens across different platforms,
                      workflows, and disciplines. Import your existing tokens into
                      Penpot—or export them for use anywhere else. Seamless
                      interoperability by design through Open Source.
                    </p>
                  </div>

                  <div className="navigation">
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={3}
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
                  src="images/features/2.6-bubbles.gif"
                  className="start-image"
                  border="0"
                  alt="Comments grouped by zoom level"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Comments grouped by zoom level</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      When collaborating on files, feedback can quickly become
                      dense and overwhelming, turning what should be information
                      into visual noise. Now, comments are grouped based on your
                      zoom level, giving the right level of visibility and making
                      navigating feedback easier.
                    </p>

                    <p className="feature-content">
                      When you're zoomed out, comments are grouped to reduce
                      clutter and keep your workspace clean. As you zoom in, the
                      groups expand, revealing individual comments in context. This
                      makes navigating feedback much smoother, especially in complex
                      designs with lots of discussion.
                    </p>
                  </div>

                  <div className="navigation">
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={3}
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
