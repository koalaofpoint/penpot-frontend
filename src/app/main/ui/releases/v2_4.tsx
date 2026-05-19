// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
import { NavigationBullets, RenderReleaseNotesProps } from "./common";

interface V2_4ReleaseNotesProps extends RenderReleaseNotesProps {}

export const V2_4ReleaseNotes: React.FC<V2_4ReleaseNotesProps> = ({
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
                src="images/features/2.4-slide-0.jpg"
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
                  <span className="feature-title">At Penpot we are at full speed!</span>

                  <p className="feature-content">
                    With the release of the long-awaited Plugins System still
                    fresh, this 2.4 brings improvements in a wide range of
                    areas that will serve a variety of use cases.
                  </p>

                  <p className="feature-content">
                    This release combines some of the most requested features—such
                    as versioning and the viewer-only role—with performance
                    improvements and a new .penpot format that will streamline
                    the export of files and assets.
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
                  src="images/features/2.4-viewer.gif"
                  className="start-image"
                  border="0"
                  alt="Viewer role, designed to enhance collaboration"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      Viewer role, designed to enhance collaboration
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Collaboration takes many forms, and sometimes the risk of
                      making unwanted or accidental adjustments can be a barrier
                      to engaging with a design file.
                    </p>

                    <p className="feature-content">
                      Now, you can invite members to your teams who only need to
                      view and comment on files. Team members, stakeholders,
                      developers... pick your case. Anyone who doesn't need to
                      edit can participate confidently.
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
                  src="images/features/2.4-history.gif"
                  className="start-image"
                  border="0"
                  alt="A timeline for your design process"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">
                      A timeline for your design process
                    </h1>
                  </div>

                  <div className="feature">
                    <p className="feature-content">
                      Version History allows you to save different stages of your
                      design process, so you can revisit them whenever needed.
                    </p>

                    <p className="feature-content">
                      Some versions are saved automatically, serving as an
                      invaluable emergency backup. Additionally, you can manually
                      save versions, giving you full control over the timeline
                      associated with a file. This way, you can always restore
                      specific versions that you've intentionally saved.
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
                  src="images/features/2.4-format.gif"
                  className="start-image"
                  border="0"
                  alt="New export format: fast and open"
                />

                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title">New export format: fast and open</h1>
                  </div>
                  <div className="feature">
                    <p className="feature-content">
                      The new .penpot format will streamline the import and export
                      of files and assets by being more efficient and
                      interoperable.
                    </p>
                    <p className="feature-content">
                      This format replaces the previous two—so no more choosing
                      between them or accidentally picking the wrong one! It's
                      better for both scenarios: if you just need to import or
                      export files quickly, it'll be a bit faster. And if you
                      want to extract data (like a list of color assets), this
                      new format is much easier to read.
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
