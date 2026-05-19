// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as c from '@ui/releases/common'
import React from 'react'

export function renderReleaseNotes1_11({
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
                <img src="images/login-on.jpg" border="0" alt="What's new Beta release 1.11" />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>What's new?</h2>
                </div>
                <span className="release">Beta version {version}</span>
                <div className="modal-content">
                  <p>Penpot continues growing with new features that improve performance, user experience and visual design.</p>
                  <p>We are happy to show you a sneak peek of the most important stuff that the Beta 1.11 version brings.</p>
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
                <img src="images/features/1.11-animations.gif" border="0" alt="Animations" />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>Prototype animations</h2>
                </div>
                <div className="modal-content">
                  <p>Bring your prototypes to life with animations! With animations now you can define the transition between artboards when an interaction is triggered.</p>
                  <p>Use dissolve, slide and push animations to fade screens and imitate gestures like swipe.</p>
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
                <img src="images/features/1.11-bg-export.gif" border="0" alt="Ignore background on export" />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>Ignore artboard background on export</h2>
                </div>
                <div className="modal-content">
                  <p>Sometimes you don't need the artboards to be part of your designs, but only their support to work on them.</p>
                  <p>Now you can decide to include their backgrounds on your exports or leave them out.</p>
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
                <img src="images/features/1.11-zoom-widget.gif" border="0" alt="New zoom widget" />
              </div>
              <div className="modal-right">
                <div className="modal-title">
                  <h2>New zoom widget</h2>
                </div>
                <div className="modal-content">
                  <p>We've redesigned zooming menus to improve their usability and the consistency between zooming in the design workspace and in the view mode.</p>
                  <p>We've also added two new options to scale your designs at the view mode that might help you to make your presentations look better.</p>
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
