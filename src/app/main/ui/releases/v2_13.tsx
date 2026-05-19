// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_13ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_13ReleaseNotes: React.FC<V2_13ReleaseNotesProps> = ({
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
                src="images/features/2.13-slide-0.jpg"
                className="start-image"
                border="0"
                alt="Penpot 2.13 is here!"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">
                    The first release of the year, and we're just getting started
                    🚀
                  </span>

                  <p className="feature-content">
                    This is our first release of the year, and it sets the tone
                    for what's coming next. We're kicking off an exciting year
                    where we'll take Penpot to a whole new level, with improved
                    performance, stronger design system foundations, long-requested
                    features, and new capabilities that unlock better workflows for
                    teams.
                  </p>

                  <p className="feature-content">
                    This release brings two highlights the community has been
                    asking for, along with solid improvements under the hood to
                    keep everything fast and smooth.
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
                  src="images/features/2.13-trash.gif"
                  className="start-image"
                  border="0"
                  alt="The Trash"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">The Trash</h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Deleting a file no longer means it's gone forever.
                      Introducing The Trash, a dedicated space in the dashboard
                      where deleted files and projects live before being
                      permanently removed.
                    </p>

                    <p className="feature-content">
                      From here, you can recover content deleted by mistake or clean
                      things up for good when you're sure you don't need them
                      anymore. The Trash works for both files and projects, and
                      items are automatically removed after a period of time
                      depending on your Penpot plan.
                    </p>

                    <p className="feature-content">
                      Highly requested, long overdue, and now officially here.
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
                  src="images/features/2.13-shadow-tokens.gif"
                  className="start-image"
                  border="0"
                  alt="Shadow tokens: Reusable shadows, at last!"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Shadow tokens: Reusable shadows, at last!
                    </h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      With Shadow tokens, we're introducing our second composite
                      token, right after Typography tokens. This is a big step
                      forward for design systems in Penpot.
                    </p>

                    <p className="feature-content">
                      Until now, shadows couldn't be defined as reusable styles the
                      way colors could before color tokens existed. Shadow tokens
                      change that. You can now create reusable, consistent
                      shadows, made of one or multiple layers, fully tokenized
                      and ready to scale across your designs.
                    </p>

                    <p className="feature-content">
                      Each shadow can reference existing tokens or use custom
                      values, supports both Drop Shadow and Inner Shadow, and even
                      allows shadow tokens to reference other shadow tokens. A
                      brand-new capability, unlocked.
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
