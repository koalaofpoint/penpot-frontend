// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_9ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_9ReleaseNotes: React.FC<V1_9ReleaseNotesProps> = ({
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
                  alt="What's new Alpha release 1.9"
                />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Alpha version {version}</span>
                <div className="modal-content">
                  <p>
                    Penpot continues growing with new features that improve
                    performance, user experience and visual design.
                  </p>
                  <p>
                    We are happy to show you a sneak peek of the most important
                    stuff that the Alpha 1.9 version brings.
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
                    src="images/features/advanced-proto.gif"
                    border="0"
                    alt="Advanced interactions"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Prototyping triggers and actions</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Prototyping options at last! Different triggers (like mouse
                      events or time delays) and actions allow you to add
                      complexity to the interactions of your prototypes.
                    </p>
                    <p>
                      Create overlays, back buttons or links to URLs to mimic
                      the behavior of the product you're designing.
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
                    src="images/features/flows-proto.gif"
                    border="0"
                    alt="Multiple flows"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Multiple flows</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Design projects usually need to define multiple casuistics
                      for different devices and user journeys.
                    </p>
                    <p>
                      Flows allow you to define multiple starting points within
                      the same page so you can better organize and present your
                      prototypes.
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
                    src="images/features/booleans.gif"
                    border="0"
                    alt="Boolean shapes"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Boolean operations</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Now in Penpot you can combine shapes in different ways.
                      There are five options: Union, difference, intersection,
                      exclusion and flatten.
                    </p>
                    <p>
                      Using boolean operations will lead to countless graphic
                      possibilities for your designs.
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
                    src="images/features/libraries-feature.gif"
                    border="0"
                    alt="Libraries & templates"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Libraries & templates</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      We've created a new space on Penpot where you can share
                      your libraries and templates and download the ones you
                      like. Material Design, Cocomaterial or Penpot's Design
                      System are among them (and a lot more to come!).
                    </p>
                    <p>
                      <a
                        href="https://penpot.app/libraries-templates"
                        target="_blank"
                        rel="noopener noreferrer"
                        alt="Explore libraries & templates"
                      >
                        Explore libraries & templates
                      </a>
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
