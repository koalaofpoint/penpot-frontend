import * as d from '@app/common/data';
import { dm} from '@app/common/data.macros';
import * as gsb from '@app/common/geom.shapes.bounds';
import * as mth from '@app/common.math';
import * as cc from '@app/common.types.color';
import * as uuid from '@app/common.uuid';
import * as str from 'cuerdas';
import React from 'react';

export function getFilterId(): string {
  return dm.str('filter-', uuid.next());
}

export function filterStr(filterId: string, shape: any): string | null {
  const hasShadow =
    shape.shadow && shape.shadow.filter((s: any) => !s.hidden).length > 0;
  const hasBlur = shape.blur && !shape.blur.hidden;

  if (hasShadow || hasBlur) {
    return `url(#${filterId})`;
  }
  return null;
}

interface ColorMatrixProps {
  color: any;
}

function ColorMatrix(props: ColorMatrixProps) {
  const { color } = props;
  const { color: colorValue, opacity } = color;
  const [r, g, b, a] = cc.hexToRgba(colorValue, opacity);
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  return (
    <feColorMatrix
      type="matrix"
      values={`0 0 0 0 ${rNorm} 0 0 0 0 ${gNorm} 0 0 0 0 ${bNorm} 0 0 0 ${a} 0`}
    />
  );
}

interface DropShadowFilterProps {
  filterIn: string;
  filterId: string;
  params: any;
}

function DropShadowFilter(props: DropShadowFilterProps) {
  const { filterIn, filterId, params } = props;
  const { color, offsetX, offsetY, blur, spread } = params;

  return (
    <>
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      />
      {spread > 0 && (
        <feMorphology
          radius={spread}
          operator="dilate"
          in="SourceAlpha"
          result={filterId}
        />
      )}
      {spread < 0 && (
        <feMorphology
          radius={-spread}
          operator="erode"
          in="SourceAlpha"
          result={filterId}
        />
      )}
      <feOffset dx={offsetX} dy={offsetY} />
      <feGaussianBlur stdDeviation={blur / 2} />
      <ColorMatrix color={color} />
      <feBlend mode="normal" in2={filterIn} result={filterId} />
    </>
  );
}

interface InnerShadowFilterProps {
  filterIn: string;
  filterId: string;
  params: any;
}

function InnerShadowFilter(props: InnerShadowFilterProps) {
  const { filterIn, filterId, params } = props;
  const { color, offsetX, offsetY, blur, spread } = params;

  return (
    <>
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      {spread > 0 && (
        <feMorphology
          radius={spread}
          operator="erode"
          in="SourceAlpha"
          result={filterId}
        />
      )}
      <feOffset dx={offsetX} dy={offsetY} />
      <feGaussianBlur stdDeviation={blur / 2} />
      <feComposite
        in2="hardAlpha"
        operator="arithmetic"
        k2="-1"
        k3="1"
      />
      <ColorMatrix color={color} />
      <feBlend mode="normal" in2={filterIn} result={filterId} />
    </>
  );
}

interface BackgroundBlurFilterProps {
  filterId: string;
  params: any;
}

function BackgroundBlurFilter(props: BackgroundBlurFilterProps) {
  const { filterId, params } = props;
  return (
    <>
      <feGaussianBlur in="BackgroundImage" stdDeviation={params.value / 2} />
      <feComposite in2="SourceAlpha" operator="in" result={filterId} />
    </>
  );
}

interface LayerBlurFilterProps {
  filterId: string;
  params: any;
}

function LayerBlurFilter(props: LayerBlurFilterProps) {
  const { filterId, params } = props;
  return <feGaussianBlur stdDeviation={params.value} result={filterId} />;
}

interface ImageFixFilterProps {
  filterId: string;
}

function ImageFixFilter(props: ImageFixFilterProps) {
  const { filterId } = props;
  return <feFlood floodOpacity={0} result={filterId} />;
}

interface BlendFiltersProps {
  filterId: string;
  filterIn?: string;
}

function BlendFilters(props: BlendFiltersProps) {
  const { filterId, filterIn } = props;
  return (
    <feBlend mode="normal" in="SourceGraphic" in2={filterIn} result={filterId} />
  );
}

interface FilterEntryProps {
  entry: any;
}

function FilterEntry(props: FilterEntryProps) {
  const { entry } = props;
  const filterEntryProps = {
    filterId: entry.id,
    filterIn: entry.filterIn,
    params: entry.params,
  };

  switch (entry.type) {
    case 'drop-shadow':
      return <DropShadowFilter {...filterEntryProps} />;
    case 'inner-shadow':
      return <InnerShadowFilter {...filterEntryProps} />;
    case 'background-blur':
      return <BackgroundBlurFilter {...filterEntryProps} />;
    case 'layer-blur':
      return <LayerBlurFilter {...filterEntryProps} />;
    case 'image-fix':
      return <ImageFixFilter {...filterEntryProps} />;
    case 'blend-filters':
      return <BlendFilters {...filterEntryProps} />;
    default:
      return null;
  }
}

function changeFilterIn(filters: any[]): any[] {
  return filters.map((filter, i) => ({
    ...filter,
    filterIn: i === 0 ? undefined : filters[i - 1].id,
  }));
}

function filterCoords(
  bounds: any,
  selrect: any,
  padding: any
): [number, number, number, number, string] {
  if (mth.close(0.01, selrect.width) || mth.close(0.01, selrect.height)) {
    const filterWidth = bounds.width + 2 * padding.horizontal;
    const filterHeight = bounds.height + 2 * padding.vertical;
    const filterX = bounds.x - padding.horizontal;
    const filterY = bounds.y - padding.vertical;
    return [filterX, filterY, filterWidth, filterHeight, 'userSpaceOnUse'];
  }

  const filterWidth =
    (bounds.width + 2 * padding.horizontal) / selrect.width;
  const filterHeight =
    (bounds.height + 2 * padding.vertical) / selrect.height;
  const filterX = (bounds.x - selrect.x - padding.horizontal) / selrect.width;
  const filterY = (bounds.y - selrect.y - padding.vertical) / selrect.height;
  return [filterX, filterY, filterWidth, filterHeight, 'objectBoundingBox'];
}

interface FiltersProps {
  filterId: string;
  shape: any;
}

export function Filters(props: FiltersProps) {
  const { filterId, shape } = props;

  const shapeShadowReversed = { ...shape, shadow: [...shape.shadow].reverse() };
  const filters = gsb.shapeToFilters(shapeShadowReversed);
  const updatedFilters = changeFilterIn(filters);
  const bounds = gsb.getRectFilterBounds(
    shape.selrect,
    updatedFilters,
    shape.blur?.value ?? 0
  );
  const padding = gsb.calculatePadding(shape);
  const selrect = shape.selrect;

  const [filterX, filterY, filterWidth, filterHeight, filterUnits] =
    filterCoords(bounds, selrect, padding);

  if (updatedFilters.length <= 2) {
    return null;
  }

  return (
    <filter
      id={filterId}
      x={filterX}
      y={filterY}
      width={filterWidth}
      height={filterHeight}
      filterUnits={filterUnits}
      colorInterpolationFilters="sRGB"
    >
      {updatedFilters.map((entry: any, index: number) => (
        <FilterEntry
          key={`${filterId}-${index}`}
          entry={entry}
        />
      ))}
    </filter>
  );
}
