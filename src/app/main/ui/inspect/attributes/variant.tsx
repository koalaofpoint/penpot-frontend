// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { InspectTitleBar } from 'app/main/ui/components/title-bar';
import { CopyButton } from 'app/main/ui/components/copy-button';
import { tr } from 'app/util/i18n';

interface VariantBlockProps {
  name: string;
  value: string;
}

function VariantBlock({ name, value }: VariantBlockProps) {
  return (
    <div title={value} className="variant-row">
      <div className="global-attr-label">{name}</div>
      <div className="global-attr-value">
        <CopyButton data={value}>
          <div className="button-children">{value}</div>
        </CopyButton>
      </div>
    </div>
  );
}

interface VariantPanelProps {
  objects: any;
  shapes: any[];
  libraries: any;
  fileId: string;
}

export function VariantPanel({ objects, shapes, libraries, fileId }: VariantPanelProps) {
  const shape = shapes[0];

  const properties = React.useMemo(() => {
    const data = libraries?.[fileId]?.data;
    const component = data?.components?.[shape?.componentId];

    if (!shape || !component) {
      return [];
    }

    if (isVariantContainer(shape)) {
      return extractPropertiesValues(data, objects, shape.id);
    }

    const variantProperties = component.variantProperties || [];
    return variantProperties.map((prop: any) => ({
      name: prop.name,
      value: prop.value || '--'
    }));
  }, [objects, shape, libraries, fileId]);

  if (properties.length === 0) {
    return null;
  }

  return (
    <div className="attributes-block">
      <InspectTitleBar
        title={isVariantContainer(shape) ? tr('inspect.attributes.variants') : tr('inspect.attributes.variant')}
        titleClass="variant-attr-title"
      />
      {properties.map((property: any, pos: number) => (
        <VariantBlock
          key={`variant-property-${pos}`}
          name={property.name}
          value={property.value}
        />
      ))}
    </div>
  );
}

function isVariantContainer(shape: any): boolean {
  return shape.type === 'variant';
}

function extractPropertiesValues(data: any, objects: any, shapeId: string): any[] {
  // Simplified - actual implementation would use cfv/extract-properties-values
  return [];
}
