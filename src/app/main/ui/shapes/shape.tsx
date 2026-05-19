import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as cfh from '@app/common.files.helpers';
import * as refs from '@app/main/refs';
import * as muc from '@app/main/ui/context';
import * as h from '@app/main/ui/hooks';
import * as attrs from '@app/main/ui/shapes/attrs';
import * as ed from '@app/main/ui/shapes/export';
import * as fills from '@app/main/ui/shapes/fills';
import * as filters from '@app/main/ui/shapes/filters';
import * as frame from '@app/main/ui/shapes/frame';
import * as svgDefs from '@app/main/ui/shapes/svg-defs';
import * as obj from '@app/util/object';
import React, { useMemo } from 'react';

function propagateWrapperStylesChild(
  child: any,
  wrapperProps: Record<string, any>
): any {
  if (child == null) return null;

  const childProps = obj.get(child, 'props');
  const childPropsChilds = obj
    .get(childProps, 'childs')
    ?.map((c: any) => ({
      ...c,
      wrapperStyles: obj.get(wrapperProps, 'style'),
    }));

  const newChildProps = obj.clone(childProps);
  obj.set(newChildProps, 'childs', childPropsChilds);

  return obj.clone(child, { props: newChildProps });
}

function propagateWrapperStyles(
  children: any,
  wrapperProps: Record<string, any>
): any {
  if (obj.array(children)) {
    return children.map((c: any) =>
      propagateWrapperStylesChild(c, wrapperProps)
    );
  }
  return propagateWrapperStylesChild(children, wrapperProps);
}

interface ShapeContainerProps {
  shape: any;
  children?: React.ReactNode;
  pointerEvents?: string;
}

export const ShapeContainer = React.forwardRef<SVGGElement, ShapeContainerProps>(
  (props, ref) => {
    const { shape, children, pointerEvents } = props;

    const shapeId = dm.getProp(shape, 'id');

    const previewBlendModeRef = useMemo(() => {
      return refs.workspacePreviewBlendById(shapeId);
    }, [shapeId]);

    const blendMode = previewBlendModeRef.current?.blendMode || shape.blendMode;

    const type = dm.getProp(shape, 'type');
    const renderId = h.useRenderId();

    const styles: Record<string, any> = {
      pointerEvents: pointerEvents ?? 'visible',
    };

    if (!cfh.frameShape(shape)) {
      styles.opacity = shape.opacity;
    }

    if (shape.hidden) {
      styles.display = 'none';
    }

    if (blendMode && blendMode !== 'normal') {
      styles.mixBlendMode = d.name(blendMode);
    }

    const includeMetadata = React.useContext(ed.includeMetadataCtx);

    const shapeWithoutBlur = { ...shape, blur: undefined };
    const shapeWithoutShadows = { ...shape, shadow: [] };

    const filterId = dm.str('filter-', renderId);
    const filterStr =
      (cfh.groupShape(shape) || cfh.svgRawShape(shape)) &&
      filters.filterStr(filterId, shape);

    const wrapperProps = useMemo(() => {
      const result: Record<string, any> = {};
      Object.keys(props).forEach((key) => {
        if (key !== 'shape' && key !== 'children' && key !== 'pointer-events') {
          (result as any)[key] = (props as any)[key];
        }
      });
      result.ref = ref;
      result.id = `shape-${shapeId}`;
      result.style = styles;

      if (
        cfh.textShape(shape) &&
        (!shape.positionData || d.empty(shape.positionData))
      ) {
        result.x = shape.x;
        result.y = shape.y;
        result.width = shape.width;
        result.height = shape.height;
      }

      if (type === 'group') {
        attrs.addFillProps(result, shape, renderId);
        attrs.addBorderProps(result, shape);
      }

      if (filterStr) {
        result.filter = filterStr;
      }

      return result;
    }, [props, shape, ref, shapeId, styles, renderId, filterStr, type]);

    const svgGroup =
      shape.svgAttrs !== undefined && type === 'group';

    let processedChildren = children;
    if (svgGroup) {
      processedChildren = propagateWrapperStyles(children, wrapperProps);
    }

    return (
      <muc.renderId.Provider value={renderId}>
        <g {...wrapperProps}>
          {includeMetadata && <ed.ExportData shape={shape} />}

          <defs>
            <svgDefs.SvgDefs shape={shape} renderId={renderId} />

            {!cfh.frameShape(shape) && (
              <>
                <filters.Filters
                  shape={shape}
                  filterId={filterId}
                />
                <filters.Filters
                  shape={shapeWithoutBlur}
                  filterId={`filter-shadow-${renderId}`}
                />
                <filters.Filters
                  shape={shapeWithoutShadows}
                  filterId={`filter-blur-${renderId}`}
                />
              </>
            )}

            <frame.FrameClipDef shape={shape} renderId={renderId} />
          </defs>

          {!cfh.textShape(shape) && (
            <fills.Fills shape={shape} renderId={renderId} />
          )}

          {processedChildren}
        </g>
      </muc.renderId.Provider>
    );
  }
);
