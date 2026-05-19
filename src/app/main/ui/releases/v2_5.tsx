// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_5ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_5ReleaseNotes: React.FC<V2_5ReleaseNotesProps> = ({
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
                src="images/features/2.5-slide-0.png"
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
                    We're thrilled to introduce Penpot 2.5
                  </span>

                  <p className="feature-content">
                    Packed with powerful new features and little big details.
                    This release brings multi-step gradients, along with
                    comment notifications, making it easier than ever to
                    communicate with your team members. Now you also can easily
                    copy/paste groups of styles between layers and share direct
                    links to specific boards, among other new capabilities
                    considered true gems for designers and team collaboration.
                  </p>

                  <p className="feature-content">
                    But that's not all—we've also tackled numerous bug fixes and
                    optimizations.
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
                  src="images/features/2.5-gradients.gif"
                  className="start-image"
                  border="0"
                  alt="Multi-step gradients and more"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Multi-step gradients and more</h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      We're so happy to bring you one of our most requested
                      features—multi-step gradients! Now, you can create smooth,
                      complex color transitions with multiple stops, giving you
                      more creative options to customize your designs.
                    </p>

                    <p className="feature-content">
                      And that's not all. We've also added quick actions to flip
                      and rotate gradients, plus now you can adjust the radius
                      for radial gradients. More control, more flexibility, more
                      fun.
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
                  src="images/features/2.5-mention.gif"
                  className="start-image"
                  border="0"
                  alt="Comment mentions and manage notifications"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Comment mentions and manage notifications
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      No more lost comments! You can now tag teammates in
                      comments, and they'll get a notification so they never miss
                      direct feedback. Plus, now you can filter mentions—just
                      select 'Only your mentions' to quickly find discussions
                      that matter to you.
                    </p>

                    <p className="feature-content">
                      We've also added a new section in your profile where you can
                      customize your notifications, choosing what to receive on
                      your dashboard and via email. On top of that, comments got
                      a UI refresh, making everything clearer and better
                      organized. And this is just the first batch of
                      improvements—expect even more comment-related upgrades in
                      the next Penpot release.
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
                  src="images/features/2.5-copy.gif"
                  className="start-image"
                  border="0"
                  alt="Copy/paste styles, CSS, and text"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Copy/paste styles, CSS, and text
                    </h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      Easily copy and apply styles across your designs with just
                      a few clicks. With the new Copy/Paste options, you can
                      quickly transfer fills, strokes, shadows, and other
                      properties from one layer to another—or multiple layers at
                      once. Reusing styles is no longer a repetitive task.
                    </p>
                    <p className="feature-content">
                      And we've also added more copy options:
                    </p>
                    <p className="feature-content">
                      - 'Copy as CSS' to grab the code instantly.
                    </p>
                    <p className="feature-content">
                      - 'Copy as text' if you just need the content.
                    </p>
                    <p className="feature-content">
                      Less manual work for a faster workflow. We hope you find
                      it as useful as we do.
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
                  src="images/features/2.5-link.gif"
                  className="start-image"
                  border="0"
                  alt="Links to specific boards"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Links to specific boards</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      In a single Penpot file, it's common to have multiple
                      individual screens or designs spread across different
                      boards. Now, you can generate direct links to each board,
                      making it easy to share them with team members or include
                      direct links in documentation.
                    </p>
                    <p className="feature-content">
                      No more navigating through the design workspace of a file
                      to find a specific screen—just send a link and take your
                      team straight to the intended board.
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
