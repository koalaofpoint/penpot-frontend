// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_11ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_11ReleaseNotes: React.FC<V2_11ReleaseNotesProps> = ({
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
                src="images/features/2.11-slide-0.jpg"
                className="start-image"
                border="0"
                alt="Penpot 2.11 is here!"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">
                    Typography tokens take the stage!
                  </span>

                  <p className="feature-content">
                    This release brings one of our most anticipated design system
                    upgrades yet: Typography tokens.
                  </p>

                  <p className="feature-content">
                    But that's not all. Variants get a nice boost with
                    multi-switching, new creation shortcuts, and draggable
                    property reordering. Invitations are now easier to manage and
                    the user menu has been reorganized. Now showing your current
                    Penpot version and direct access to release info.
                  </p>

                  <p className="feature-content">
                    And as always, you'll notice performance improvements
                    throughout. Faster, smoother, and just a bit more magical
                    every time.
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
                  src="images/features/2.11-typography-token.gif"
                  className="start-image"
                  border="0"
                  alt="Typography token: one token to rule your text"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Typography token: one token to rule your text
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Imagine having just one token to manage all your typography.
                      With the new Typography token, you can create presets that
                      bundle all your text styles (font, weight, size, line height,
                      spacing, and more) into a single reusable definition. Just
                      one clean, flexible token to keep your type consistent across
                      your designs.
                    </p>

                    <p className="feature-content">
                      The Typography token also marks a big step forward for Penpot:
                      it's our first composite token! Composite tokens are special
                      because they can hold multiple properties within one token.
                      Shadow token will be the next composite token coming your
                      way.
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
                  src="images/features/2.11-variants.gif"
                  className="start-image"
                  border="0"
                  alt="Variants get a power-up"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Variants get a power-up</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      Variants just got published and they already got a serious
                      quality-of-life boost!
                    </p>

                    <p className="feature-content">
                      - Switch several variant copies at once: No more clicking
                      through each one individually when you want to update a
                      property. Just select multiple copies and change their
                      values in one go — fast, smooth, and efficient.
                    </p>

                    <p className="feature-content">
                      - New ways to create variants, right from the design
                      viewport: No need to dig through menus. The new buttons
                      make it super quick to spin up variant sets directly where
                      you're working.
                    </p>

                    <p className="feature-content">
                      - Reorder your component properties by drag & drop: Because
                      organization matters, now you can arrange your properties
                      however makes the most sense to you, so you can keep the ones
                      you use most often right where you want them.
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
                  src="images/features/2.11-invitations.gif"
                  className="start-image"
                  border="0"
                  alt="A smoother way to manage invitations"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      A smoother way to manage invitations
                    </h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      The Invitations section just got a big usability upgrade for
                      admins. Here's what's new:
                    </p>

                    <p className="feature-content">
                      Sorting - Organize invitations by role type or status to
                      keep track of who's in and who's pending.
                    </p>
                    <p className="feature-content">
                      Quicker actions - Main actions (resend and delete) are now
                      visible upfront for quicker access.
                    </p>
                    <p className="feature-content">
                      Bulk management - Select multiple invitations to resend or
                      delete them all at once.
                    </p>

                    <p className="feature-content">
                      Invited users will also get clearer emails, including a
                      reminder sent one day before the invite expires (after seven
                      days). Simple, clean, and much more efficient.
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
                  src="images/features/2.11-menu.gif"
                  className="start-image"
                  border="0"
                  alt="User menu makeover"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">User menu makeover</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      The user menu got a well-deserved cleanup. Options are now
                      grouped into clear sections like Help & Learning and Community
                      & Contributions, making navigation faster and easier.
                    </p>

                    <p className="feature-content">
                      You'll also notice a handy new detail: the menu now shows
                      your current Penpot version and gives you quick access to
                      changelog information. This is especially useful for
                      self-hosted setups that want to stay in sync with the latest
                      updates. Simple, organized, and more informative.
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
