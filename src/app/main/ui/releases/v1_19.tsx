// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V1_19ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V1_19ReleaseNotes: React.FC<V1_19ReleaseNotesProps> = ({
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
                  alt="What's new release 1.19"
                />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Version {version}</span>
                <div className="modal-content">
                  <p>
                    On this 1.19 release, we bring Access Tokens, which will
                    enable Penpot to connect with other services, another gateway
                    to community creativity!
                  </p>
                  <p>
                    We've also published performance improvements and tons of
                    enhancements, a lot of them from our beloved community
                    contributors &lt;3
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
                    src="images/features/1.19-contributions.png"
                    border="0"
                    alt="Community code contributions"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Community code contributions</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      By far, this is the Penpot release that has the most code
                      contributions. We cannot emphasize enough how happy we are
                      to see how Penpot is more and more a product of the
                      community.
                    </p>
                    <p>
                      Let's give kudos to{" "}
                      <a
                        href="https://github.com/astudentinearth"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @astudentinearth
                      </a>
                      ,{" "}
                      <a
                        href="https://github.com/dfelinto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @dfelinto
                      </a>
                      ,{" "}
                      <a
                        href="https://github.com/akshay-gupta7"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @akshay-gupta7
                      </a>
                      ,{" "}
                      <a
                        href="https://github.com/ondrejkonec"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @ondrejkonec
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://github.com/ryanbreen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @ryanbreen
                      </a>{" "}
                      in particular and the Penpot community as a whole!
                    </p>
                  </div>
                  <div className="modal-navigation">
                    <button className="btn-secondary" onClick={next}>
                      Continue
                    </button>
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={2}
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
                    src="images/features/1.19-tokens.gif"
                    border="0"
                    alt="Access Tokens"
                  />
                </div>
                <div className="modal-right">
                  <div className="modal-title">
                    <h2>Access Tokens</h2>
                  </div>
                  <div className="modal-content">
                    <p>
                      Personal access tokens function like an alternative to our
                      login/password authentication system and can be used to
                      allow an application to access the internal Penpot API.
                    </p>
                    <p>
                      This opens up a wide range of possibilities in terms of
                      integrations and is an important step on the critical path
                      to the Penpot's plugins system.
                    </p>
                  </div>
                  <div className="modal-navigation">
                    <button className="btn-secondary" onClick={finish}>
                      Start!
                    </button>
                    <NavigationBullets
                      slide={slide as number}
                      navigate={navigate}
                      total={2}
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
