import * as d from '@app/common/data';
import * as transit from '@app/common.transit';
import * as cc from '@app/common.types.color';
import * as txt from '@app/common.types.text';
import * as fonts from '@app/main/fonts';
import * as fmt from '@app/main/ui/formats';
import * as uc from '@app/util.color';
import * as obj from '@app/util.object';
import * as str from 'cuerdas';

export function generateRootStyles(
  props: { width?: number; height?: number },
  node: any,
  code?: boolean
): Record<string, any> {
  const valign = node.verticalAlign || 'top';
  const base: Record<string, any> = {
    height: code ? undefined : fmt.formatPixels(props.height),
    width: code ? undefined : fmt.formatPixels(props.width),
    display: 'flex',
    whiteSpace: 'break-spaces',
  };

  if (valign === 'top') {
    obj.set(base, 'alignItems', 'flex-start');
  } else if (valign === 'center') {
    obj.set(base, 'alignItems', 'center');
  } else if (valign === 'bottom') {
    obj.set(base, 'alignItems', 'flex-end');
  }

  return base;
}

export function generateParagraphSetStyles(shape: any): Record<string, any> {
  const autoWidth = shape.growType === 'auto-width';

  return {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'inherit',
    minWidth: autoWidth ? undefined : '100%',
    marginRight: '1px',
    verticalAlign: 'top',
  };
}

export function generateParagraphStyles(
  shape: any,
  data: any
): Record<string, any> {
  let lineHeight = data.lineHeight;

  if (
    lineHeight != null &&
    lineHeight !== ''
  ) {
    // Keep the provided value
  } else {
    lineHeight = txt.defaultTypography.lineHeight;
  }

  const textAlign = data.textAlign || 'start';

  const base: Record<string, any> = {
    fontSize: 0,
    lineHeight,
    margin: 0,
  };

  if (lineHeight != null) {
    obj.set(base, 'lineHeight', lineHeight);
  }
  if (textAlign != null) {
    obj.set(base, 'textAlign', textAlign);
  }

  return base;
}

export function generateTextStyles(
  shape: any,
  data: any,
  options?: { showText?: boolean }
): Record<string, any> {
  const { showText = true } = options || {};

  const letterSpacing = data.letterSpacing || 0;
  const textDecoration = data.textDecoration;
  const textTransform = data.textTransform;

  const fontId =
    data.fontId || txt.defaultTypography.fontId;

  const fontVariantId = data.fontVariantId;

  const fontSize = data.fontSize;

  const firstFill = data.fills?.[0];
  const fillColor = firstFill?.fillColor || data.fillColor;
  const fillOpacity = firstFill?.fillOpacity || data.fillOpacity;
  const fillGradient = firstFill?.fillColorGradient || data.fillColorGradient;

  const [r, g, b, a] = cc.hexToRgba(fillColor, fillOpacity);
  let textColor: string | null = null;
  if (fillColor != null && fillOpacity != null) {
    textColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  const gradient = fillGradient != null;

  if (gradient) {
    textColor = uc.colorToBackground({ gradient: fillGradient });
  }

  const fontsdb = fonts.fontsdb.deref();

  const base: Record<string, any> = {
    textDecoration,
    textTransform,
    fontSize,
    color:
      showText && !gradient && textColor != null
        ? textColor
        : 'transparent',
    background: showText && gradient ? textColor : undefined,
    caretColor: !gradient && textColor ? textColor : 'black',
    overflowWrap: 'initial',
    lineBreak: 'auto',
    whiteSpace: 'break-spaces',
    textRendering: 'geometricPrecision',
  };

  if (data.lineHeight === '0') {
    obj.set(base, 'display', 'inline-block');
    obj.set(base, 'verticalAlign', 'top');
  }

  let fills: any[];
  if (
    data.fillColor != null ||
    data.fillOpacity != null ||
    data.fillColorGradient != null
  ) {
    fills = [
      d.withoutNils({
        fillColor: data.fillColor,
        fillOpacity: data.fillOpacity,
        fillColorGradient: data.fillColorGradient,
        fillColorRefId: data.fillColorRefId,
        fillColorRefFile: data.fillColorRefFile,
      }),
    ];
  } else if (data.fills == null) {
    fills = [{ fillColor: '#000000', fillOpacity: 1 }];
  } else {
    fills = data.fills;
  }

  const font = fontId != null ? fontsdb?.[fontId] : null;

  let fontFamily: string | undefined;
  let fontStyle: string | undefined;
  let fontWeight: string | undefined;

  if (font != null) {
    const fontVariant = font.variants?.find(
      (v: any) => v.id === fontVariantId
    );
    fontFamily = str.quote(font?.family || data.fontFamily);
    fontStyle = fontVariant?.style || data.fontStyle;
    fontWeight = fontVariant?.weight || data.fontWeight;
  }

  obj.set(base, '--font-id', fontId);

  if (fills != null) {
    obj.set(base, '--fills', transit.encodeStr(fills));
  }

  if (typeof letterSpacing === 'string' && letterSpacing.length > 0) {
    obj.set(base, 'letterSpacing', `${letterSpacing}px`);
  }

  if (typeof fontSize === 'string' && fontSize.length > 0) {
    obj.set(base, 'fontSize', `${fontSize}px`);
  }

  if (font != null) {
    obj.set(base, 'fontFamily', fontFamily);
    obj.set(base, 'fontStyle', fontStyle);
    obj.set(base, 'fontWeight', fontWeight);
  }

  if (shape.growType === 'auto-width') {
    obj.set(base, 'whiteSpace', 'pre');
  }

  return base;
}
