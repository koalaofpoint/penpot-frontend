import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as gsh from '@app/common/geom.shapes';
import * as json from '@app/common.json';
import * as csvg from '@app/common.svg';
import * as muc from '@app/main/ui/context';
import * as obj from '@app/util.object';
import * as str from 'cuerdas';
import React, { useContext, useMemo } from 'react';

let internalCounter = 0;

export const includeMetadataCtx = React.createContext(false);

function RenderXml(props: { xml: any }) {
  const { xml } = props;

  if (typeof xml === 'string') {
    return xml;
  }

  if (typeof xml !== 'object') {
    return null;
  }

  const { tag, attrs: xmlAttrs, content } = xml;
  const props_js = json.toJs(csvg.attrsToProps(xmlAttrs), {
    keyFn: (k: string) => k,
  });

  return (
    <d.name tag {...props_js}>
      {(content || []).map((child: any) => (
        <RenderXml key={internalCounter++} xml={child} />
      ))}
    </d.name>
  );
}

function boolToStr(val: any): string | undefined {
  return val != null ? String(val) : undefined;
}

function touchedToStr(val: any): string {
  return Array.isArray(val) ? val.map(String).join(' ') : '';
}

function addFactory(shape: any) {
  return function add(
    props: Record<string, any>,
    attr: string,
    trfn: (val: any) => string = (v) => String(v)
  ): Record<string, any> {
    let val = shape[attr];
    if (d.keyword(val)) {
      val = d.name(val);
    }
    const nsAttr = `penpot:${d.name(attr).replace(/\?$/, '')}`;

    if (val != null) {
      return obj.set(props, nsAttr, trfn(val));
    }
    return props;
  };
}

function addData(props: Record<string, any>, shape: any): Record<string, any> {
  const add = addFactory(shape);
  const frame = shape.type === 'frame';
  const group = shape.type === 'group';
  const rect = shape.type === 'rect';
  const image = shape.type === 'image';
  const text = shape.type === 'text';
  const path = shape.type === 'path';
  const mask = group && shape.maskedGroup;
  const bool = shape.type === 'bool';
  const center = gsh.shapeToCenter(shape);

  let result = { ...props };
  result = add(result, 'name');
  result = add(result, 'blocked');
  result = add(result, 'hidden');
  result = add(result, 'type');
  result = add(result, 'strokeStyle');
  result = add(result, 'strokeAlignment');
  result = add(result, 'hideFillOnExport');
  result = add(result, 'transform');
  result = add(result, 'transformInverse');
  result = add(result, 'flipX');
  result = add(result, 'flipY');
  result = add(result, 'proportion');
  result = add(result, 'proportionLock');
  result = add(result, 'rotation');
  result = obj.set(result, 'penpot:center-x', String(center.x));
  result = obj.set(result, 'penpot:center-y', String(center.y));

  result = add(result, 'constraintsH');
  result = add(result, 'constraintsV');
  result = add(result, 'fixedScroll');

  if (frame) {
    result = add(result, 'showContent', result);
    result = add(result, 'hideInViewer', result);
  }

  if (frame && shape.useForThumbnail) {
    result = add(result, 'useForThumbnail', result);
  }

  if ((rect || image || frame) && shape.r1 != null) {
    result = add(result, 'r1');
    result = add(result, 'r2');
    result = add(result, 'r3');
    result = add(result, 'r4');
  }

  if (path) {
    result = add(result, 'strokeCapStart');
    result = add(result, 'strokeCapEnd');
  }

  if (text) {
    result = add(result, 'x');
    result = add(result, 'y');
    result = add(result, 'width');
    result = add(result, 'height');
    result = add(result, 'growType');
    result = add(result, 'content', (v) => json.encode(v));
    result = add(result, 'positionData', (v) => json.encode(v));
  }

  if (mask) {
    result = obj.set(result, 'penpot:maskedGroup', 'true');
  }

  if (bool) {
    result = add(result, 'boolType');
  }

  return result;
}

function addLibraryRefs(props: Record<string, any>, shape: any): Record<string, any> {
  const add = addFactory(shape);

  let result = { ...props };
  result = add(result, 'fillColorRefId');
  result = add(result, 'fillColorRefFile');
  result = add(result, 'strokeColorRefId');
  result = add(result, 'strokeColorRefFile');
  result = add(result, 'typographyRefId');
  result = add(result, 'typographyRefFile');
  result = add(result, 'componentFile');
  result = add(result, 'componentId');
  result = add(result, 'componentRoot');
  result = add(result, 'mainInstance');
  result = add(result, 'shapeRef');
  result = add(result, 'touched', touchedToStr);

  return result;
}

function prefixKeys(m: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  Object.entries(m).forEach(([k, v]) => {
    result[`penpot:${d.name(k)}`] = v;
  });
  return result;
}

function ExportGridData(props: { grids: any[] }) {
  const { grids } = props;

  if (!d.notEmpty(grids)) {
    return null;
  }

  return (
    <penpot:grids>
      {grids.map(({ type, display, params }: any, index: number) => {
        const { color, ...restParams } = params;
        const gridProps = prefixKeys(restParams);
        gridProps['penpot:color'] = color?.color;
        gridProps['penpot:opacity'] = color?.opacity;
        gridProps['penpot:type'] = d.name(type);
        if (display != null) {
          gridProps['penpot:display'] = String(display);
        }
        return <penpot:grid key={index} {...gridProps} />;
      })}
    </penpot:grids>
  );
}

interface ExportFlowsProps {
  flows: Record<string, any>;
}

function ExportFlows(props: ExportFlowsProps) {
  const { flows } = props;

  return (
    <penpot:flows>
      {Object.values(flows).map(({ id, name, startingFrame }: any) => (
        <penpot:flow
          key={id}
          id={id}
          name={name}
          startingFrame={startingFrame}
        />
      ))}
    </penpot:flows>
  );
}

interface ExportGuidesProps {
  guides: Record<string, any>;
}

function ExportGuides(props: ExportGuidesProps) {
  const { guides } = props;

  return (
    <penpot:guides>
      {Object.values(guides).map(({ position, frameId, axis }: any) => (
        <penpot:guide
          key={position}
          position={position}
          frameId={frameId}
          axis={d.name(axis)}
        />
      ))}
    </penpot:guides>
  );
}

interface ExportPageProps {
  page: any;
}

function ExportPage(props: ExportPageProps) {
  const { page } = props;

  const id = page.id;
  const grids = page.grids;
  const flows = page.flows;
  const guides = page.guides;

  return (
    <penpot:page id={id}>
      {d.notEmpty(grids) && (
        <ExportGridData
          grids={Object.entries(grids).map(([type, params]) => ({
            type,
            params,
          }))}
        />
      )}

      {d.notEmpty(flows) && <ExportFlows flows={flows} />}

      {d.notEmpty(guides) && <ExportGuides guides={guides} />}
    </penpot:page>
  );
}

function ExportShadowData(props: { shadow: any[] }) {
  const { shadow } = props;

  return (
    <>
      {shadow.map(
        (
          { style, hidden, color, offsetX, offsetY, blur, spread }: any,
          index: number
        ) => (
          <penpot:shadow
            key={index}
            penpot:shadowType={d.name(style)}
            penpot:hidden={String(hidden)}
            penpot:color={String(color?.color)}
            penpot:opacity={String(color?.opacity)}
            penpot:offsetX={String(offsetX)}
            penpot:offsetY={String(offsetY)}
            penpot:blur={String(blur)}
            penpot:spread={String(spread)}
          />
        )
      )}
    </>
  );
}

function ExportBlurData(props: { blur: any }) {
  const { blur } = props;

  if (!blur) return null;

  const { type, hidden, value } = blur;

  return (
    <penpot:blur
      penpot:blurType={d.name(type)}
      penpot:hidden={String(hidden)}
      penpot:value={String(value)}
    />
  );
}

function ExportExportsData(props: { exports: any[] }) {
  const { exports: exportsList } = props;

  return (
    <>
      {exportsList.map(
        ({ scale, suffix, type }: any, index: number) => (
          <penpot:export
            key={index}
            penpot:type={d.name(type)}
            penpot:suffix={suffix}
            penpot:scale={String(scale)}
          />
        )
      )}
    </>
  );
}

function strToStyle(styleStr: string): Record<string, any> {
  if (typeof styleStr !== 'string') {
    return styleStr;
  }

  const result: Record<string, any> = {};
  styleStr.split(';').forEach((item) => {
    const [key, val] = item.split(':').map((s) => s.trim());
    if (key && val) {
      result[key] = val;
    }
  });
  return result;
}

function ExportSvgData(props: { shape: any }) {
  const { shape } = props;

  return (
    <>
      {shape.svgAttrs && (
        <>
          {(() => {
            const svgTransform = shape.svgTransform;
            const svgAttrsKeys = Object.keys(shape.svgAttrs).map((k) =>
              d.name(str.kebab(k))
            );
            const svgAttrsKeysStr = svgAttrsKeys.join(',');
            const svgDefsKeys = Object.keys(shape.svgDefs || {}).map(d.name).join(',');

            return (
              <penpot:svg-import
                penpot:svgAttrs={
                  svgAttrsKeysStr !== '' ? svgAttrsKeysStr : undefined
                }
                penpot:svgStyle={
                  shape.svgAttrs.style
                    ? Object.entries(shape.svgAttrs.style)
                        .map(([k, v]) => `${k}:${v}`)
                        .join('; ')
                    : undefined
                }
                penpot:svgFilter={shape.svgAttrs.filter}
                penpot:svgDefs={svgDefsKeys !== '' ? svgDefsKeys : undefined}
                penpot:svgTransform={
                  svgTransform ? String(svgTransform) : undefined
                }
                penpot:svgViewboxX={shape.svgViewbox?.x}
                penpot:svgViewboxY={shape.svgViewbox?.y}
                penpot:svgViewboxWidth={shape.svgViewbox?.width}
                penpot:svgViewboxHeight={shape.svgViewbox?.height}
              >
                {Object.entries(shape.svgDefs || {}).map(
                  ([defId, defXml]: [string, any]) => (
                    <penpot:svg-def key={defId} defId={defId}>
                      <RenderXml xml={defXml} />
                    </penpot:svg-def>
                  )
                )}
              </penpot:svg-import>
            );
          })()}
        </>
      )}

      {shape.type === 'svg-raw' && (
        <>
          {(() => {
            const processedShape = d.updateInWhen(
              shape,
              ['content', 'attrs', 'style'],
              strToStyle
            );
            const contentAttrs = processedShape.content?.attrs;

            return (
              <penpot:svg-content
                penpot:x={processedShape.x}
                penpot:y={processedShape.y}
                penpot:width={processedShape.width}
                penpot:height={processedShape.height}
                penpot:tag={d.name(processedShape.content?.tag)}
                {...(contentAttrs || {})}
              >
                {(processedShape.content?.content || [])
                  .filter((c: any) => typeof c === 'string')
                  .map((leaf: string, index: number) => (
                    <penpot:svg-child key={index}>
                      {leaf}
                    </penpot:svg-child>
                  ))}
              </penpot:svg-content>
            );
          })()}
        </>
      )}
    </>
  );
}

interface ExportFillsDataProps {
  fills: any[];
}

function ExportFillsData(props: ExportFillsDataProps) {
  const { fills } = props;
  const renderId = useContext(muc.renderId);

  if (!fills || fills.length === 0) {
    return null;
  }

  return (
    <penpot:fills>
      {fills.map((fill: any, index: number) => {
        const fillImageId = `fill-image-${renderId}-${index}`;
        let fillColor: string;
        if (fill.fillColorGradient != null) {
          fillColor = `url(#fill-color-gradient-${renderId}-${index})`;
        } else {
          fillColor = d.name(fill.fillColor);
        }

        return (
          <penpot:fill
            key={index}
            penpot:fillColor={fillColor}
            penpot:fillImageId={fill.fillImage ? fillImageId : undefined}
            penpot:fillColorRefFile={d.name(fill.fillColorRefFile)}
            penpot:fillColorRefId={d.name(fill.fillColorRefId)}
            penpot:fillOpacity={d.name(fill.fillOpacity)}
          />
        );
      })}
    </penpot:fills>
  );
}

interface ExportStrokesDataProps {
  strokes: any[];
}

function ExportStrokesData(props: ExportStrokesDataProps) {
  const { strokes } = props;
  const renderId = useContext(muc.renderId);

  if (!strokes || strokes.length === 0) {
    return null;
  }

  return (
    <penpot:strokes>
      {strokes.map((stroke: any, index: number) => {
        const strokeImageId = `stroke-image-${renderId}-${index}`;
        let strokeColor: string;
        if (stroke.strokeColorGradient != null) {
          strokeColor = `url(#stroke-color-gradient-${renderId}-${index})`;
        } else {
          strokeColor = d.name(stroke.strokeColor);
        }

        return (
          <penpot:stroke
            key={index}
            penpot:strokeColor={strokeColor}
            penpot:strokeImageId={stroke.strokeImage ? strokeImageId : undefined}
            penpot:strokeColorRefFile={d.name(stroke.strokeColorRefFile)}
            penpot:strokeColorRefId={d.name(stroke.strokeColorRefId)}
            penpot:strokeOpacity={d.name(stroke.strokeOpacity)}
            penpot:strokeStyle={d.name(stroke.strokeStyle)}
            penpot:strokeWidth={d.name(stroke.strokeWidth)}
            penpot:strokeAlignment={d.name(stroke.strokeAlignment)}
            penpot:strokeCapStart={d.name(stroke.strokeCapStart)}
            penpot:strokeCapEnd={d.name(stroke.strokeCapEnd)}
          />
        );
      })}
    </penpot:strokes>
  );
}

interface ExportInteractionsDataProps {
  interactions: any[];
}

function ExportInteractionsData(props: ExportInteractionsDataProps) {
  const { interactions } = props;

  if (!interactions || interactions.length === 0) {
    return null;
  }

  return (
    <penpot:interactions>
      {interactions.map((interaction: any, index: number) => (
        <penpot:interaction
          key={index}
          penpot:eventType={d.name(interaction.eventType)}
          penpot:actionType={d.name(interaction.actionType)}
          penpot:delay={interaction.delay != null ? String(interaction.delay) : undefined}
          penpot:destination={
            interaction.destination != null
              ? String(interaction.destination)
              : undefined
          }
          penpot:overlayPosType={
            interaction.overlayPosType != null
              ? d.name(interaction.overlayPosType)
              : undefined
          }
          penpot:overlayPositionX={
            interaction.overlayPosition?.x != null
              ? interaction.overlayPosition.x
              : undefined
          }
          penpot:overlayPositionY={
            interaction.overlayPosition?.y != null
              ? interaction.overlayPosition.y
              : undefined
          }
          penpot:url={interaction.url}
          penpot:closeClickOutside={
            interaction.closeClickOutside != null
              ? String(interaction.closeClickOutside)
              : undefined
          }
          penpot:backgroundOverlay={
            interaction.backgroundOverlay != null
              ? String(interaction.backgroundOverlay)
              : undefined
          }
          penpot:preserveScroll={
            interaction.preserveScroll != null
              ? String(interaction.preserveScroll)
              : undefined
          }
        />
      ))}
    </penpot:interactions>
  );
}

interface ExportLayoutContainerDataProps {
  shape: any;
}

function ExportLayoutContainerData(props: ExportLayoutContainerDataProps) {
  const { shape } = props;

  if (!shape.layout) {
    return null;
  }

  const {
    layout,
    layoutFlexDir,
    layoutGap,
    layoutGapType,
    layoutWrapType,
    layoutPaddingType,
    layoutPadding,
    layoutJustifyItems,
    layoutJustifyContent,
    layoutAlignItems,
    layoutAlignContent,
    layoutGridDir,
    layoutGridRows,
    layoutGridColumns,
    layoutGridCells,
  } = shape;

  return (
    <penpot:layout
      penpot:layout={d.name(layout)}
      penpot:layoutFlexDir={d.name(layoutFlexDir)}
      penpot:layoutGapType={d.name(layoutGapType)}
      penpot:layoutGapRow={layoutGap?.rowGap}
      penpot:layoutGapColumn={layoutGap?.columnGap}
      penpot:layoutWrapType={d.name(layoutWrapType)}
      penpot:layoutPaddingType={d.name(layoutPaddingType)}
      penpot:layoutPaddingP1={layoutPadding?.p1}
      penpot:layoutPaddingP2={layoutPadding?.p2}
      penpot:layoutPaddingP3={layoutPadding?.p3}
      penpot:layoutPaddingP4={layoutPadding?.p4}
      penpot:layoutJustifyItems={d.name(layoutJustifyItems)}
      penpot:layoutJustifyContent={d.name(layoutJustifyContent)}
      penpot:layoutAlignItems={d.name(layoutAlignItems)}
      penpot:layoutAlignContent={d.name(layoutAlignContent)}
      penpot:layoutGridDir={d.name(layoutGridDir)}
    >
      <penpot:grid-rows>
        {layoutGridRows?.map(({ type, value }: any, idx: number) => (
          <penpot:grid-track
            key={idx}
            penpot:index={idx}
            penpot:type={d.name(type)}
            penpot:value={value}
          />
        ))}
      </penpot:grid-rows>

      <penpot:grid-columns>
        {layoutGridColumns?.map(({ type, value }: any, idx: number) => (
          <penpot:grid-track
            key={idx}
            penpot:index={idx}
            penpot:type={d.name(type)}
            penpot:value={value}
          />
        ))}
      </penpot:grid-columns>

      <penpot:grid-cells>
        {layoutGridCells?.map(
          (
            {
              id,
              areaName,
              row,
              rowSpan,
              column,
              columnSpan,
              position,
              alignSelf,
              justifySelf,
              shapes,
            }: any,
            idx: number
          ) => (
            <penpot:grid-cell
              key={idx}
              penpot:id={id}
              penpot:areaName={areaName}
              penpot:row={row}
              penpot:rowSpan={rowSpan}
              penpot:column={column}
              penpot:columnSpan={columnSpan}
              penpot:position={d.name(position)}
              penpot:alignSelf={d.name(alignSelf)}
              penpot:justifySelf={d.name(justifySelf)}
              penpot:shapes={shapes?.join(' ')}
            />
          )
        )}
      </penpot:grid-cells>
    </penpot:layout>
  );
}

interface ExportLayoutItemDataProps {
  shape: any;
}

function ExportLayoutItemData(props: ExportLayoutItemDataProps) {
  const { shape } = props;

  const {
    layoutItemMargin,
    layoutItemMarginType,
    layoutItemHSizing,
    layoutItemVSizing,
    layoutItemMaxH,
    layoutItemMinH,
    layoutItemMaxW,
    layoutItemMinW,
    layoutItemAlignSelf,
    layoutItemAbsolute,
    layoutItemZIndex,
  } = shape;

  if (
    !layoutItemMargin &&
    !layoutItemMarginType &&
    !layoutItemHSizing &&
    !layoutItemVSizing &&
    !layoutItemMaxH &&
    !layoutItemMinH &&
    !layoutItemMaxW &&
    !layoutItemMinW &&
    !layoutItemAlignSelf &&
    !layoutItemAbsolute &&
    layoutItemZIndex == null
  ) {
    return null;
  }

  return (
    <penpot:layout-item
      penpot:layoutItemMarginM1={layoutItemMargin?.m1}
      penpot:layoutItemMarginM2={layoutItemMargin?.m2}
      penpot:layoutItemMarginM3={layoutItemMargin?.m3}
      penpot:layoutItemMarginM4={layoutItemMargin?.m4}
      penpot:layoutItemMarginType={d.name(layoutItemMarginType)}
      penpot:layoutItemHSizing={d.name(layoutItemHSizing)}
      penpot:layoutItemVSizing={d.name(layoutItemVSizing)}
      penpot:layoutItemMaxH={layoutItemMaxH}
      penpot:layoutItemMinH={layoutItemMinH}
      penpot:layoutItemMaxW={layoutItemMaxW}
      penpot:layoutItemMinW={layoutItemMinW}
      penpot:layoutItemAlignSelf={d.name(layoutItemAlignSelf)}
      penpot:layoutItemAbsolute={layoutItemAbsolute}
      penpot:layoutItemZIndex={layoutItemZIndex}
    />
  );
}

interface ExportDataProps {
  shape: any;
}

export function ExportData(props: ExportDataProps) {
  const { shape } = props;

  const dataProps = addData({}, shape);
  const dataPropsWithRefs = addLibraryRefs(dataProps, shape);

  return (
    <penpot:shape {...dataPropsWithRefs}>
      <ExportShadowData shadow={shape.shadow || []} />
      <ExportBlurData blur={shape.blur} />
      <ExportExportsData exports={shape.exports || []} />
      <ExportSvgData shape={shape} />
      <ExportInteractionsData interactions={shape.interactions || []} />
      <ExportFillsData fills={shape.fills || []} />
      <ExportStrokesData strokes={shape.strokes || []} />
      <ExportGridData grids={shape.grids || []} />
      <ExportLayoutContainerData shape={shape} />
      <ExportLayoutItemData shape={shape} />
    </penpot:shape>
  );
}
