// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_12ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_12ReleaseNotes: React.FC<V2_12ReleaseNotesProps> = ({
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
                src="images/features/2.12-slide-0.jpg"
                className="start-image"
                border="0"
                alt="Penpot 2.12 is here!"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">
                    Better tokens visibility and more!
                  </span>

                  <p className="feature-content">
                    This release focuses on making your everyday workflow feel
                    clearer, faster and more intuitive. Tokens are now easier to
                    see and apply, appearing directly where you work and giving
                    the designs better context during code inspection. Variants
                    gain a more natural flow thanks to simple boolean toggles that
                    remove friction when switching states. And PDF export becomes
                    more flexible, letting you choose exactly which boards to share
                    so your files match the story you want to tell.
                  </p>

                  <p className="feature-content">
                    Together, these enhancements bring greater control and fluidity
                    to your entire design process.
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
                  src="images/features/2.12-tokens-sidebar.gif"
                  className="start-image"
                  border="0"
                  alt="Better tokens visibility"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Better tokens visibility</h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Design systems should be both powerful and effortless to use.
                      This release brings tokens closer to where you work, making
                      them easier to apply and easier to understand.
                    </p>

                    <span className="feature-title">
                      Apply color tokens right from the sidebar
                    </span>

                    <p className="feature-content">
                      Your color tokens now appear directly in the properties
                      sidebar, making it faster to apply or unapply tokens from the
                      design tab. No more digging: now you can use tokens within
                      your design flow.
                    </p>

                    <span className="feature-title">
                      See token names in the Inspect panel
                    </span>

                    <p className="feature-content">
                      Developers now get a clearer context during handoff. The
                      Inspect panel shows the actual token used in your design, in
                      a similar way to how styles are displayed. This small detail
                      reduces ambiguity, aligns everyone on the same language, and
                      strengthens collaboration across the team.
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
                  src="images/features/2.12-variants.gif"
                  className="start-image"
                  border="0"
                  alt="Simpler boolean variants"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Simpler boolean variants</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      Variants are central to building flexible, scalable
                      components. With this release, boolean properties become far
                      easier to work with.
                    </p>

                    <span className="feature-title">
                      A simple toggle for boolean values
                    </span>

                    <p className="feature-content">
                      Binary states now use a clean toggle, to be able to switch
                      visually, instead of a dropdown. This makes adjusting component
                      states more intuitive and speeds up working with multiple
                      instances.
                    </p>

                    <p className="feature-content">
                      It's a subtle improvement, but it removes friction you feel
                      hundreds of times a week, and makes component work flow more
                      naturally.
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
                  src="images/features/2.12-export-pdf.gif"
                  className="start-image"
                  border="0"
                  alt="Smarter PDF export"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Smarter PDF export</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      Exporting your work is now more precise and flexible.
                    </p>

                    <span className="feature-title">
                      Select specific boards when exporting
                    </span>

                    <p className="feature-content">
                      You're now in control of which boards make it into your PDF.
                      Share just the final screens, just a flow, just the workshop
                      materials. This streamlined export flow adapts to the way real
                      teams work: share the story you want to tell, with exactly
                      the boards you need.
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
