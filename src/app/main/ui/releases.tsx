// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as modal from 'app/main/data/modal';
import * as du from 'app/main/data/profile';
import { emit, store } from 'app/main/store';
import { RenderReleaseNotes } from 'app/main/ui/releases/common';
import * as rc from 'app/main/ui/releases/common';
import * as obj from 'app/util/object';
import * as tm from 'app/util/timers';
import React, { useEffect, useState } from 'react';

// Version-specific release notes imports
import 'app/main/ui/releases/v1-10';
import 'app/main/ui/releases/v1-11';
import 'app/main/ui/releases/v1-12';
import 'app/main/ui/releases/v1-13';
import 'app/main/ui/releases/v1-14';
import 'app/main/ui/releases/v1-15';
import 'app/main/ui/releases/v1-16';
import 'app/main/ui/releases/v1-17';
import 'app/main/ui/releases/v1-18';
import 'app/main/ui/releases/v1-19';
import 'app/main/ui/releases/v1-4';
import 'app/main/ui/releases/v1-5';
import 'app/main/ui/releases/v1-6';
import 'app/main/ui/releases/v1-7';
import 'app/main/ui/releases/v1-8';
import 'app/main/ui/releases/v1-9';
import 'app/main/ui/releases/v2-0';
import 'app/main/ui/releases/v2-1';
import 'app/main/ui/releases/v2-10';
import 'app/main/ui/releases/v2-11';
import 'app/main/ui/releases/v2-12';
import 'app/main/ui/releases/v2-13';
import 'app/main/ui/releases/v2-14';
import 'app/main/ui/releases/v2-2';
import 'app/main/ui/releases/v2-3';
import 'app/main/ui/releases/v2-4';
import 'app/main/ui/releases/v2-5';
import 'app/main/ui/releases/v2-6';
import 'app/main/ui/releases/v2-7';
import 'app/main/ui/releases/v2-8';
import 'app/main/ui/releases/v2-9';

interface ReleaseNotesProps {
  version: string;
}

export const ReleaseNotes: React.FC<ReleaseNotesProps> = ({ version }) => {
  const [slide, setSlide] = useState<number | 'start'>('start');
  const [klass, setKlass] = useState('fadeInDown');

  const navigate = (newSlide: number | 'start') => {
    setSlide(newSlide);
  };

  const next = () => {
    if (slide === 'start') {
      navigate(0);
    } else {
      navigate(typeof slide === 'number' ? slide + 1 : 0);
    }
  };

  const finish = () => {
    emit(modal.hide(), du.markOnboardingAsViewed({ version }));
  };

  useEffect(() => {
    emit(du.markOnboardingAsViewed({ version }));
  }, [version]);

  useEffect(() => {
    if (slide !== 'start') {
      setKlass('fadeIn');
    }
    const sem = tm.schedule(() => setKlass(''), 300);
    return () => {
      tm.dispose!(sem);
    };
  }, [slide]);

  return (
    <RenderReleaseNotes
      next={next}
      navigate={navigate}
      finish={finish}
      klass={klass}
      slide={slide}
      version={version}
    />
  );
};

interface ReleaseNotesModalProps {
  version: string;
}

export const ReleaseNotesModal: React.FC<ReleaseNotesModalProps> = (props) => {
  const versions = (rc as any).renderReleaseNotes ? Object.keys((rc as any).renderReleaseNotes.methods || {}) : [];
  const version = obj.get(props, 'version');

  if (version && versions.includes(version)) {
    return (
      <div className="relnotes">
        <ReleaseNotes {...props} />
      </div>
    );
  }
  return null;
};

// Default handler for "0.0" version
const originalRenderReleaseNotes = (rc as any).renderReleaseNotes;
if (originalRenderReleaseNotes && typeof originalRenderReleaseNotes === 'function') {
  const originalMethod = originalRenderReleaseNotes.methods?.['0.0'];
  if (!originalMethod) {
    (rc as any).renderReleaseNotes.methods = {
      ...(rc as any).renderReleaseNotes.methods,
      '0.0': function(params: any) {
        return (rc as any).renderReleaseNotes({ ...params, version: '2.14' });
      }
    };
  }
}