// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as c from '@ui/releases/common'
import React from 'react'

export function renderReleaseNotes1_5({
  slide,
  klass,
  next,
  finish,
  navigate,
  version,
}: {
  slide: number | ':start'
  klass: string
  next: () => void
  finish: () => void
  navigate: (slide: number) => void
  version: string
}) {
  switch (slide) {
    case ':start':
      return (
        <div className="modal-overlay">
          <div className={`animated ${klass}`}>
            <div className="modal-container onboarding feature">
              <div className="modal-left">
                <img src="images/login-on.jpg" border="0" alt="What's new Alpha release 1.5.0" />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Alpha version {version}</span>
                <div className="modal-content">
                  <p>Penpot continues growing with new features that improve performance, user experience and visual design.</p>
                  <p>We are happy to show you a sneak peek of the most important stuff that the Alpha 1.5.0 version brings.</p>
                </div>
                <div className="modal-navigation">
                  <button className="btn-secondary" onClick={next}>Continue</button>
                </div>
              </div>
            </div>
            <img className="deco" src="images/deco-left.png" border="0" />
            <img className="deco right" src="images/deco-right.png" border="0" />
          </div>
        </div>
      )

    case 0:
      return (
        <div className="modal-overlay">
          <div className={`animated ${klass}`}>
            <div className="modal-container onboarding feature">
              <div className="modal-left">
                <img src="images/features/path-tool.gif" border="0" alt="New path tool" />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>New features for paths</h2>
                </div>
                <div className="modal-content">
                  <p>Now you can select snap points on edition, add/remove nodes, merge/join/split nodes.</p>
                  <p>The usability and performance of the paths tool has been improved too.</p>
                </div>
                <div className="modal-navigation">
                  <button className="btn-secondary" onClick={next}>Continue</button>
                  <c.navigationBullets
                    slide={slide}
                    navigate={navigate}
                    total={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    case 1:
      return (
        <div className="modal-overlay">
          <div className={`animated ${klass}`}>
            <div className="modal-container onboarding feature">
              <div className="modal-left">
                <img src="images/features/assets-organiz.gif" border="0" alt="Manage libraries" />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>New libraries organization</h2>
                </div>
                <div className="modal-content">
                  <p>Penpot now allows to group, multiselect and bulk edition of assets (components and graphics).</p>
                  <p>It is time to have all the libraries well organized and work more efficiently.</p>
                </div>
                <div className="modal-navigation">
                  <button className="btn-secondary" onClick={next}>Continue</button>
                  <c.navigationBullets
                    slide={slide}
                    navigate={navigate}
                    total={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    case 2:
      return (
        <div className="modal-overlay">
          <div className={`animated ${klass}`}>
            <div className="modal-container onboarding feature">
              <div className="modal-left">
                <img src="images/features/smart-inputs.gif" border="0" alt="Smart inputs" />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>Smart inputs</h2>
                </div>
                <div className="modal-content">
                  <p>Now you can have more precision in your designs with basic math operations in inputs.</p>
                  <p>It's easier to specify by how much you want to change a value and work with measures and distances.</p>
                </div>
                <div className="modal-navigation">
                  <button className="btn-secondary" onClick={finish}>Start!</button>
                  <c.navigationBullets
                    slide={slide}
                    navigate={navigate}
                    total={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}
