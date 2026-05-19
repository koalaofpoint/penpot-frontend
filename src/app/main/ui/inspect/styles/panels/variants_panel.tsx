// This Source Code Form is subject of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from 'react';
import { PropertiesRow } from 'app/main/ui/inspect/styles/rows/properties-row';

interface VariantsPanelProps {
  component?: any;
  objects?: any;
  shape?: any;
  data?: any;
}

export function VariantsPanel({
  component,
  objects,
  shape,
  data
}: VariantsPanelProps) {
  const properties = React.useMemo(() => {
    if (!shape || !component) return [];

    const isContainer = shape.type === 'variant';

    if (isContainer) {
      // Would use cfv/extract-properties-values in real implementation
      return [];
    }

    const variantProperties = component.variantProperties || [];
    return variantProperties.map((prop: any) => ({
      name: prop.name,
      value: prop.value || '--'
    }));
  }, [shape, component]);

  if (properties.length === 0) {
    return null;
  }

  return (
    <div className="variants-panel">
      {properties.map((property: any) => (
        <PropertiesRow
          key={`variant-property-${property.name}`}
          term={property.name}
          detail={property.value}
        />
      ))}
    </div>
  );
}
