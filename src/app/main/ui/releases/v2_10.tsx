// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_10ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_10ReleaseNotes: React.FC<V2_10ReleaseNotesProps> = ({
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
                src="images/features/2.10-slide-0.jpg"
                className="start-image"
                border="0"
                alt="Penpot 2.10 is here!"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">
                    Variants have arrived in Penpot!
                  </span>

                  <p className="feature-content">
                    We're excited to introduce what's (probably) the top community
                    request. Variants are a powerful way to bring order and
                    flexibility to your design system in Penpot.
                  </p>

                  <p className="feature-content">
                    This release also brings major progress on design tokens—including
                    several new token types to help you manage typography at an
                    entirely new level—plus a bunch of quality-of-life improvements
                    that make the Penpot experience even more enjoyable.
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
                  src="images/features/2.10-variants.gif"
                  className="start-image"
                  border="0"
                  alt="Variants have arrived in Penpot!"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Variants have arrived in Penpot!
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      With Variants, you can group similar components—like buttons,
                      icons, or toggles—into a single, customizable component.
                      Instead of juggling multiple versions for every state, size,
                      or style, you'll manage them all in one unified place with
                      clear, intuitive properties.
                    </p>

                    <p className="feature-content">
                      Imagine a single button component that seamlessly switches
                      between primary and secondary styles, active and disabled
                      states, and small to large sizes—all without leaving your
                      flow. That's the power of Variants.
                    </p>

                    <p className="feature-content">
                      This release has been shaped by our amazing community. A huge
                      thank-you to everyone who shared ideas, feedback, and
                      insights to make Penpot Variants possible &lt;3
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
                  src="images/features/2.10-penpotfest.jpg"
                  className="start-image"
                  border="0"
                  alt="Road to Penpot 3.0… Join us at Penpot Fest next month!"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Road to Penpot 3.0… Join us at Penpot Fest next month!
                    </h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      This year's Penpot Fest theme is: Better, together: Refining
                      the designer-developer workflow.
                    </p>

                    <p className="feature-content">
                      Catch industry experts from GitHub, Blender, Wikimedia
                      Foundation and more. Join workshops and our panel discussion
                      for practical and visionary thoughts.
                    </p>

                    <p className="feature-content">
                      And one more thing…Tune into our product showcase to see
                      future plans and help us shape Penpot. Come for the insights,
                      stay for the community…
                    </p>

                    <p className="feature-content">
                      <a href="https://penpot.app/penpotfest" target="_blank">
                        Get your tickets
                      </a>{" "}
                      now to join us 8-10 October, in Madrid!
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
                  src="images/features/2.10-font-tokens.gif"
                  className="start-image"
                  border="0"
                  alt="New typography token types"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">New typography token types</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      We're continually building on Penpot's native Design Tokens
                      support, and this time, we introduce an expanded range of
                      token types, giving you greater options for your design
                      systems.
                    </p>

                    <p className="feature-content">
                      This latest update brings—no more no less than—six new token
                      types, significantly boosting your ability to manage design
                      decisions, particularly in typography: Font Family, Font
                      Weight, Text Case, Text Decoration, Letter Spacing token, and
                      Number token (for unitless values).
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
                  src="images/features/2.10-preset.gif"
                  className="start-image"
                  border="0"
                  alt="Select artboard defaults before their creation"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Select artboard defaults before their creation
                    </h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      Starting a new design in Penpot just got easier. You can now
                      choose from preset artboard sizes before creating an
                      artboard. This will help you begin your designs with the
                      right dimensions from the very first click.
                    </p>

                    <p className="feature-content">
                      This feature was born from community proposals. Several Penpot
                      users helped us understand the different workflows around
                      creating artboards, and their feedback shaped the simple,
                      effective solution we're announcing today.
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
