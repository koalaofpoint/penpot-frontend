// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_16ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_16ReleaseNotes: React.FC<V1_16ReleaseNotesProps> = ({
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
                  src="images/login-on.jpg"
                  border="0"
                  alt="What's new Beta release 1.16"
                />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Beta version {version}</span>
                <div className="modal-content">
                  <p>
                    Penpot continues to grow with new features that improve
                    performance, user experience and visual design.
                  </p>
                  <p>
                    We are happy to show you a sneak peek of the most important
                    stuff that the Beta 1.16 version brings.
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
                    src="images/features/1.16-dashboard.gif"
                    border="0"
                    alt="Dashboard refreshed look & feel"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Dashboard refreshed look & feel</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      It's been some time since we designed the project's
                      dashboard and we felt that we could improve it in terms of
                      accessibility, content hierarchy and aesthetics.
                    </p>
                    <p>
                      We heard the users before refreshing the interface,
                      simplifying it to give prominence to the content. And yes,
                      now that you ask, the dark theme is coming soon.
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
                    src="images/features/1.16-slider.gif"
                    border="0"
                    alt="Libraries & templates module"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Libraries & templates module</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      This new module will allow you to import a curated
                      selection of the files that are available at the Libraries
                      & Templates page directly from your projects dashboard.
                    </p>
                    <p>
                      You no longer need to to download most of them to the
                      computer before importing.
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
                    src="images/features/1.16-onboarding.gif"
                    border="0"
                    alt="Improved onboarding"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Improved onboarding</h2>
                  </div>
                  <div className="modal-content">
                    <p>We've done a ton of improvements to the onboarding experience.</p>
                    <p>
                      More relevant info and better explanations, a refined new
                      team and invitation flow, a beginners tutorial and a
                      walkthrough file that will help newcomers learn how to use
                      and start designing with Penpot faster.
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
                    src="images/features/1.16-click-zoom.gif"
                    border="0"
                    alt="Zoom to shape with double click"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Zoom to shape with double click</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      The devil is in the details. At the layers panel, double
                      clicking to the icon of a layer will zoom to it, making
                      the layers navigation and selection easier.
                    </p>
                    <p>
                      This was a contribution by our community member @andrewzhurov
                      &lt;3
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
