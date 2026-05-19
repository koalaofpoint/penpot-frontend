// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_14ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_14ReleaseNotes: React.FC<V2_14ReleaseNotesProps> = ({
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
                src="images/features/2.14-slide-0.jpg"
                className="start-image"
                border="0"
                alt="Penpot 2.14 is here!"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">
                    Design tokens, but friendlier (and a bit faster, too)
                  </span>

                  <p className="feature-content">
                    This release keeps pushing Penpot's design system foundations
                    forward, with a big focus on design tokens. We're making long
                    token names easier to navigate, opening up tokens in the
                    plugins API, and tackling one of the trickiest moments in
                    token workflows: renaming (without breaking everything).
                  </p>

                  <p className="feature-content">
                    On top of that, you'll find a handful of quality-of-life
                    improvements and some performance work in the sidebar to keep
                    things feeling smooth as your files grow. Let's dive in.
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
                  src="images/features/2.14-tokens-fold.gif"
                  className="start-image"
                  border="0"
                  alt="Token groups: Navigating long names, finally"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Token groups: Navigating long names, finally
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Token names are rarely short and sweet. Most of the time
                      they carry a lot of meaning (type, state, property,
                      variant… and more), which is great for consistency, but not
                      so great for browsing. In 2.14 we're introducing token
                      groups, a new way to navigate dotted token paths as nested,
                      collapsible sections.
                    </p>

                    <p className="feature-content">
                      Token segments before the final name are displayed as
                      groups, and only the last segment stays as a pill (so you
                      keep the familiar token "chip" where it matters). If you
                      unfold a path, it stays open while you move around the app
                      (it resets only when the page reloads). And when you create
                      a new token, Penpot automatically unfolds the path needed to
                      reveal it (even if it overrides a previously opened one).
                    </p>

                    <p className="feature-content">
                      One extra detail: if you edit the path and change group
                      segments, the token is moved to its new group (creating it
                      if needed), and empty groups are automatically cleaned up.
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
                  src="images/features/2.14-api.gif"
                  className="start-image"
                  border="0"
                  alt="Design tokens in the plugins API: Automation unlocked"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Design tokens in the plugins API: Automation unlocked
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Design tokens are now available in the Penpot plugins API.
                      That means plugins (and external tools built around Penpot,
                      like AI clients or Penpot MCP) can finally work with tokens
                      programmatically and automate token workflows that used to be
                      purely manual.
                    </p>

                    <p className="feature-content">
                      If you've been waiting to generate tokens, sync them, or
                      manipulate them from your own tools, this is the missing
                      piece. And yes, this one has been requested a lot.
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
                  src="images/features/2.14-remap.jpg"
                  className="start-image"
                  border="0"
                  alt="Rename tokens without breaking everything"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Rename tokens without breaking everything
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Renaming tokens sounds simple until you remember the
                      references. One change can ripple through aliases, applied
                      tokens, tooltips, math operations… and suddenly you're left
                      with a broken chain. In 2.14, renaming a token can optionally
                      remap its references, keeping connections intact and
                      updating the design with the new token name.
                    </p>

                    <p className="feature-content">
                      Remapping is always optional, because sometimes you don't
                      want to keep the current connections. When enabled, it
                      affects all tokens in the file and also takes libraries into
                      account, so main components can propagate changes to child
                      components, and applied tokens update on the elements using
                      them.
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
                  src="images/features/2.14-icons.gif"
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
                      Lock and hide controls in the layer panel are getting a
                      usability boost. The lock and visibility icons stay fixed in a
                      right-aligned column regardless of indentation, and scrolling
                      won't make them awkward to click (even in deeply nested
                      files).
                    </p>

                    <p className="feature-content">
                      We're also improving sidebar performance, with a focus on
                      keeping interactions fluent. The goal is to lazy-load the
                      shape list on-demand and avoid UI stalls when clicking or
                      hovering around the sidebar.
                    </p>

                    <p className="feature-content">
                      And one more: you can now use Shift/Alt arrow key stepping in
                      color picker inputs (a community contribution by @eureka928.
                      ❤️)
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
