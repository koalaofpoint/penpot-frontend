// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_7ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_7ReleaseNotes: React.FC<V2_7ReleaseNotesProps> = ({
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
                src="images/features/2.7-slide-0.jpg"
                className="start-image"
                border="0"
                alt="Design Tokens make their debut in Penpot!"
              />

              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">What's new in Penpot?</h1>
                  <div className="version-tag">Version {version}</div>
                </div>

                <div className="features-block">
                  <span className="feature-title">Penpot 2.7 is out!</span>

                  <p className="feature-content">
                    After the huge excitement around our last release. The first-ever
                    native Design Tokens support in a design tool (yay!), we're
                    keeping the momentum going with a fresh batch of new features
                    and improvements.
                  </p>

                  <p className="feature-content">
                    This update brings the first set of upgrades to our new Design
                    Tokens system, a few of the many to come. We've also expanded
                    who can create sharing prototype links and improved the
                    invitations area. Last but not least, we fixed a bunch of bugs
                    and optimizations that will make the experience more enjoyable
                    for all.
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
                  src="images/features/2.7-duplicate-set.gif"
                  className="start-image"
                  border="0"
                  alt="Design Tokens improvements"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">Design Tokens improvements</h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      It hasn't been long since we launched Design Tokens in Penpot
                      (the first native Design Tokens support in a design tool!),
                      and we're already rolling out the first set of improvements.
                    </p>

                    <p className="feature-content">
                      The highlight: you can now duplicate token sets directly from a
                      menu item. A huge time-saver, especially when working from
                      existing sets. We've also made it easier to create themes by
                      letting you select their set right away, and we've polished
                      some info indicators to make everything a bit clearer. Plus,
                      we've fixed a bunch of early-stage bugs to keep things
                      running smoothly.
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
                  src="images/features/2.7-share.gif"
                  className="start-image"
                  border="0"
                  alt="Editors and viewers can now create Share prototype links"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Editors and viewers can now create Share prototype links
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      From now on, both editors and viewers can create Share
                      Prototype links. Sharing prototypes is key for better team
                      collaboration, no matter the role. It's a common need, team
                      members often have to share presentations without risking any
                      accidental changes to the designs, which means they don't
                      necessarily need editing permissions. In the future, Penpot
                      will introduce more fine-grained control over these
                      permissions.
                    </p>

                    <p className="feature-content">
                      This update gives editors and viewers the same ability to
                      configure, create, copy, and delete sharing links. A
                      capability that, until now, was limited to owners and admins.
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
                  src="images/features/2.7-invitations.gif"
                  className="start-image"
                  border="0"
                  alt="A clearer way to invite your first team members"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      A clearer way to invite your first team members
                    </h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      Penpot works perfectly for solo projects, but it's always
                      more fun with a team. That's why we've updated the initial
                      state of the invitations area. Instead of starting blank, it
                      now offers clearer guidance to help you invite your first
                      team members.
                    </p>

                    <p className="feature-content">
                      This improvement in design and UX writing comes from community
                      member Prithvi Tharun (credit where it's due!) Not all open
                      source contributions are about code, and this is a fantastic
                      example of how design and writing make a real difference too.
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
