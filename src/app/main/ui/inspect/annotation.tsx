// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { TitleBar } from 'app/main/ui/components/title-bar';
import { CopyButton } from 'app/main/ui/components/copy-button';
import { tr } from 'app/util/i18n';

interface AnnotationProps {
  content: string;
}

export function Annotation({ content }: AnnotationProps) {
  return (
    <div className="attributes-block">
      <TitleBar
        title={tr('workspace.options.component.annotation')}
        className="title-spacing-annotation"
      >
        <CopyButton data={content} className="copy-btn-title" />
      </TitleBar>
      <div className="annotation-content">{content}</div>
    </div>
  );
}
