// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_17ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_17ReleaseNotes: React.FC<V1_17ReleaseNotesProps> = ({
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
                  alt="What's new release 1.17"
                />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Version {version}</span>
                <div className="modal-content">
                  <p>
                    This is the first release in which Penpot is no longer Beta
                    (hooray!) and it comes with very special features, starring
                    the long awaited Flex Layout.
                  </p>
                  <p>
                    On this 1.17 release, you'll also be able to inspect the
                    code and properties of your designs right from the workspace
                    and to manage webhooks. We've also implemented a lot of
                    accessibility improvements.
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
                    src="images/features/1.17-flex-layout.gif"
                    border="0"
                    alt="Flex-Layout"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Flex-Layout</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      The Flex Layout allows you to automatically adapt your
                      designs. Resize, fit, and fill content and containers
                      without the need to do it manually.
                    </p>
                    <p>
                      Penpot brings a layout system like no other. As described
                      by one of our beta testers: 'I love the fact that Penpot is
                      following the CSS FlexBox, which is making UI Design a step
                      closer to the logic and behavior behind how things will be
                      actually built after design.'
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
                    src="images/features/1.17-inspect.gif"
                    border="0"
                    alt="Inspect at the workspace"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Inspect at the workspace</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Now you can inspect designs to get measures, properties
                      and production-ready code right at the workspace, so
                      designers and developers can share the same space while
                      working.
                    </p>
                    <p>
                      Also, inspect mode provides a safer view-only mode and
                      other improvements.
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
                    src="images/features/1.17-webhook.gif"
                    border="0"
                    alt="Webhooks"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Webhooks</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Webhooks allow other websites and apps to be notified when
                      certain events happen at Penpot, ensuring to create
                      integrations with other services.
                    </p>
                    <p>
                      While we are still working on a plugin system, this is a
                      great and simple way to create integrations with other
                      services.
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
                    src="images/features/1.17-ally.gif"
                    border="0"
                    alt="Accessibility improvements"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Accessibility improvements</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      We're working to ensure that people with visual or physical
                      impairments can use Penpot in the same conditions.
                    </p>
                    <p>
                      This release comes with improvements on color contrasts,
                      alt texts, semantic labels, focusable items and keyboard
                      navigation at login and dashboard, but more will come.
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
