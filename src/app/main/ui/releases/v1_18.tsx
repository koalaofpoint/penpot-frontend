// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_18ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_18ReleaseNotes: React.FC<V1_18ReleaseNotesProps> = ({
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
                  src="images/onboarding-version.jpg"
                  border="0"
                  alt="What's new release 1.18"
                />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Version {version}</span>
                <div className="modal-content">
                  <p>
                    On this 1.18 release we make Flex Layout even more powerful
                    with smart spacing, absolute position and z-index management.
                  </p>
                  <p>
                    We also continued implementing accessibility improvements to
                    make Penpot more inclusive and published stability and
                    performance enhancements.
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
                    src="images/features/1.18-spacing.gif"
                    border="0"
                    alt="Spacing management"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Spacing management for Flex layout</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Managing Flex Layout spacing is much more intuitive now.
                      Visualize paddings, margins and gaps and drag to resize
                      them.
                    </p>
                    <p>
                      And not only that, when creating Flex layouts, the spacing
                      is predicted, helping you to maintain your design
                      composition.
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
                    src="images/features/1.18-absolute.gif"
                    border="0"
                    alt="Position absolute feature"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Absolute position elements in Flex layout</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Sometimes you need to freely position an element in a
                      specific place regardless of the size of the layout where
                      it belongs.
                    </p>
                    <p>
                      Now you can exclude elements from the Flex layout flow
                      using absolute position.
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
                    src="images/features/1.18-z-index.gif"
                    border="0"
                    alt="Z-index feature"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>More on Flex layout: z-index</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      With the new z-index option you can decide the order of
                      overlapping elements while maintaining the layers order.
                    </p>
                    <p>
                      This is another capability that brings Penpot Flex layout
                      even closer to the power of CSS standards.
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
                    src="images/features/1.18-scale.gif"
                    border="0"
                    alt="Scale content proportionally"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Scale content proportionally affects strokes, shadows, blurs and corners</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Now you can resize your layers and groups preserving their
                      aspect ratio while scaling their properties proportionally,
                      including strokes, shadows, blurs and corners.
                    </p>
                    <p>
                      Activate the scale tool by pressing K and scale your
                      elements, maintaining their visual aspect.
                    </p>
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
