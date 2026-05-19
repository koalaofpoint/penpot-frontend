// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from '../common/data/index.js';
import * as dm from '../common/data/macros.js';
import * as log from '../common/logging.js';
import * as txt from '../common/types/text.js';
import * as u from '../common/uri.js';
import * as cf from '../config.js';
import * as dom from '../util/dom/index.js';
import * as globals from '../util/globals.js';
import * as http from '../util/http/index.js';
import * as obj from '../util/object/index.js';
import { Observable, of } from '../vendor/beicon/v2/index.js';
import { str as strLib } from '../vendor/cuerdas/index.js';
import { atom } from '../vendor/okulary/core.js';
import { delay } from '../vendor/promesa/index.js';

log.setLevel('warn');

// @ts-ignore
const googleFonts = {
  // This should be loaded from the JSON file
  // preloadGFonts is a macro that we'll need to implement differently
};

const localFonts = [
  {
    id: "sourcesanspro",
    name: "Source Sans Pro",
    family: "sourcesanspro",
    variants: [
      { id: "200", name: "200", weight: "200", style: "normal", suffix: "extralight", ttfUrl: "sourcesanspro-extralight.ttf" },
      { id: "200italic", name: "200 Italic", weight: "200", style: "italic", suffix: "extralightitalic", ttfUrl: "sourcesanspro-extralightitalic.ttf" },
      { id: "300", name: "300", weight: "300", style: "normal", suffix: "light", ttfUrl: "sourcesanspro-light.ttf" },
      { id: "300italic", name: "300 Italic", weight: "300", style: "italic", suffix: "lightitalic", ttfUrl: "sourcesanspro-lightitalic.ttf" },
      { id: "regular", name: "400", weight: "400", style: "normal", ttfUrl: "sourcesanspro-regular.ttf" },
      { id: "italic", name: "400 Italic", weight: "400", style: "italic", ttfUrl: "sourcesanspro-italic.ttf" },
      { id: "bold", name: "700", weight: "700", style: "normal", ttfUrl: "sourcesanspro-bold.ttf" },
      { id: "bolditalic", name: "700 Italic", weight: "700", style: "italic", ttfUrl: "sourcesanspro-bolditalic.ttf" },
      { id: "black", name: "900", weight: "900", style: "normal", ttfUrl: "sourcesanspro-black.ttf" },
      { id: "blackitalic", name: "900 Italic", weight: "900", style: "italic", ttfUrl: "sourcesanspro-blackitalic.ttf" }
    ]
  }
];

const fontsDb = atom({});
const fonts = atom([]);

fontsDb.addWatch('main', () => {
  const sortedFonts = Object.values(fontsDb.deref())
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((font, index) => ({ ...font, index }));

  fonts.reset(sortedFonts);
});

const register = (backend: string, fontsList: any[]) => {
  const currentDb = fontsDb.deref();

  // Remove existing fonts for this backend
  const updatedDb = Object.fromEntries(
    Object.entries(currentDb).filter(([_, font]) => font.backend !== backend)
  );

  // Add new fonts with backend
  const fontsWithBackend = fontsList.map(font => ({ ...font, backend }));
  const indexedFonts = d.indexBy('id', fontsWithBackend);

  fontsDb.reset({ ...updatedDb, ...indexedFonts });
};

register('builtin', localFonts);

if (cf.flags?.['google-fonts-provider']) {
  register('google', googleFonts);
}

export const getFontData = (id: string) => {
  return fontsDb.deref()[id];
};

export const findFontData = (data: any) => {
  return Object.values(fontsDb.deref()).find(font => {
    const matchingKeys = Object.keys(data);
    const fontKeys = Object.keys(font);

    return matchingKeys.every(key => {
      const fontValue = font[key];
      const searchValue = data[key];

      if (typeof fontValue === 'string' && typeof searchValue === 'string') {
        return fontValue.toLowerCase() === searchValue.toLowerCase();
      }

      return fontValue === searchValue;
    });
  });
};

export const findFontFamily = (family: string) => {
  const familyLower = family.toLowerCase();

  return Object.values(fontsDb.deref()).find(font =>
    font.family.toLowerCase() === familyLower
  );
};

export const resolveVariants = (id: string) => {
  return fontsDb.deref()[id]?.variants;
};

export const resolveFonts = (backend: string) => {
  return fonts.deref().filter(font => font.backend === backend);
};

// FONTS LOADING

const loaded = atom(new Set<string>());
const loading = atom<Record<string, Promise<string>>>({});
const loadedHints = atom(new Set<{ fontId: string; fontVariantId?: string }>());

const addFontCss = (id: string, css: string) => {
  const node = dom.createElement('style');
  dom.setAttribute(node, 'id', id);
  dom.setHtml(node, css);

  const head = globals.document?.head;
  if (head) {
    dom.appendChild(head, node);
  }
};

// LOADER: BUILTIN

const loadFont = (font: { backend: string; id: string; onLoaded?: (id: string) => void }) => {
  log.dbg('load-font', { fontId: font.id, backend: 'builtin' });

  if (typeof font.onLoaded === 'function') {
    font.onLoaded(font.id);
  }
};

// LOADER: GOOGLE

const generateGfontsUrl = (family: string, variants: any[]) => {
  const query = `family=${family}:${variants.map(v => v.id).join(',')}&display=block`;
  return u.join(cf.publicUri, 'internal/gfonts/css', { query });
};

const processGfontCss = (css: string) => {
  const base = u.join(cf.publicUri, 'internal/gfonts/font');
  return strLib.replace(css, 'https://fonts.gstatic.com/s', base);
};

const fetchGfontCss = (url: string) => {
  return http.send({
    method: 'get',
    uri: url,
    mode: 'cors',
    responseType: 'text'
  }).pipe(
    Observable.map(response => response.body),
    Observable.catchError(err => {
      console.warn('Cannot find the font', obj.get(err, 'message'));
      return Observable.empty();
    })
  );
};

// LOADER: CUSTOM

const fontFaceTemplate = `@font-face {
    font-family: '%(family)s';
    font-style: %(style)s;
    font-weight: %(weight)s;
    font-display: block;
    src: url(%(uri)s) format('woff');
  }`;

const assetIdToUri = (assetId: string) => {
  return u.join(cf.publicUri, `assets/by-id/${assetId}`);
};

const generateCustomFontVariantCss = (family: string, variant: any) => {
  return strLib.format(fontFaceTemplate, {
    family,
    style: variant.style,
    weight: variant.weight,
    uri: assetIdToUri(variant.woff1FileId || '')
  });
};

const generateCustomFontCss = (font: { family: string; variants: any[] }) => {
  return font.variants
    .map(variant => generateCustomFontVariantCss(font.family, variant))
    .join('\n');
};

// Register load methods
// @ts-ignore
loadFont.methods = {
  builtin: loadFont,

  google: (font: { id: string; onLoaded?: (id: string) => void }) => {
    if (typeof window === 'undefined') return;

    log.dbg('load-font', { fontId: font.id, backend: 'google' });

    const fontData = fontsDb.deref()[font.id];
    if (!fontData) return;

    const url = generateGfontsUrl(fontData.family, fontData.variants);

    fetchGfontCss(url)
      .pipe(
        Observable.map(processGfontCss),
        Observable.tap(() => {
          if (typeof font.onLoaded === 'function') {
            font.onLoaded(font.id);
          }
        }),
        Observable.subscribe({
          next: css => addFontCss(font.id, css)
        })
      );
  },

  custom: (font: { id: string; onLoaded?: () => void }) => {
    if (typeof window === 'undefined') return;

    log.dbg('load-font', { fontId: font.id, backend: 'custom' });

    const fontData = fontsDb.deref()[font.id];
    if (!fontData) return;

    const css = generateCustomFontCss(fontData);
    addFontCss(font.id, css);

    if (typeof font.onLoaded === 'function') {
      font.onLoaded();
    }
  }
};

// @ts-ignore
Object.assign(loadFont, {
  methods: loadFont.methods
});

export const ensureLoaded = (fontId: string, variantId?: string) => {
  log.dbg('try-ensure-loaded!', { fontId, variantId });

  if (typeof window === 'undefined') {
    // If we are in the worker environment, we just mark it as loaded
    // without really loading it.
    const currentHints = loadedHints.deref();
    loadedHints.reset(new Set([...currentHints, { fontId, fontVariantId: variantId }]));
    Promise.resolve(fontId);
  }

  const font = fontsDb.deref()[fontId];
  if (!font) {
    return Promise.resolve(fontId);
  }

  const currentLoaded = loaded.deref();
  if (currentLoaded.has(fontId)) {
    return Promise.resolve(fontId);
  }

  const currentLoading = loading.deref();
  if (currentLoading[fontId]) {
    return currentLoading[fontId];
  }

  const onLoad = (resolve: (value: string) => void) => {
    const updatedLoaded = new Set([...currentLoaded, fontId]);
    loaded.reset(updatedLoaded);

    const updatedLoading = { ...currentLoading };
    delete updatedLoading[fontId];
    loading.reset(updatedLoading);

    resolve(fontId);
  };

  const loadPromise = new Promise<string>((resolve, _reject) => {
    const fontWithCallback = {
      ...font,
      onLoaded: (id: string) => {
        // @ts-ignore
        loadFont.methods[font.backend]({ ...font, onLoaded: (id: string) => onLoad(resolve) });
      }
    };

    // @ts-ignore
    loadFont.methods[font.backend](fontWithCallback);
  })
  .then(() => delay(120))
  .then(() => fontId);

  const updatedLoading = { ...currentLoading, [fontId]: loadPromise };
  loading.reset(updatedLoading);

  return loadPromise;
};

export const ready = (cb: () => void) => {
  if (typeof window === 'undefined') return;

  const fonts = obj.get(globals.document, 'fonts');
  if (!fonts) return;

  return obj.get(fonts, 'ready')
    .then(() => cb());
};

export const getDefaultVariant = (variants: any[]) => {
  return variants.find(variant =>
    variant.id === 'regular' || variant.name === 'regular'
  ) || variants[0];
};

export const getVariant = (font: any, fontVariantId: string) => {
  return font.variants.find((variant: any) => variant.id === fontVariantId) ||
    getDefaultVariant(font.variants);
};

export const findVariant = (font: any, variantData: any) => {
  const props = Object.keys(variantData);

  return font.variants.find((variant: any) => {
    const variantProps = Object.keys(variant);
    return props.every(prop => {
      const variantValue = variant[prop];
      const searchValue = variantData[prop];

      if (typeof variantValue === 'string' && typeof searchValue === 'string') {
        return variantValue.toLowerCase() === searchValue.toLowerCase();
      }

      return variantValue === searchValue;
    });
  });
};

export const findClosestVariant = (font: any, targetWeight: string, targetStyle?: string) => {
  const weight = d.parseInt(targetWeight);
  if (weight === null) return undefined;

  const variants = font.variants || [];
  let closestMatch = null;

  for (const variant of variants) {
    const variantWeight = d.parseInt(variant.weight);
    if (variantWeight === null) continue;

    const distance = Math.abs(weight - variantWeight);
    const matchesStyle = !targetStyle || targetStyle === variant.style;

    if (distance === 0 && (!targetStyle || matchesStyle)) {
      return variant;
    }

    if (!closestMatch) {
      closestMatch = { variant, weight: variantWeight, distance };
    } else {
      if (distance < closestMatch.distance ||
          (distance === closestMatch.distance && variantWeight > closestMatch.weight)) {
        closestMatch = { variant, weight: variantWeight, distance };
      } else if (distance === closestMatch.distance &&
                 variantWeight === closestMatch.weight &&
                 matchesStyle) {
        closestMatch = { variant, weight: variantWeight, distance };
      }
    }
  }

  return closestMatch?.variant;
};

// Font embedding functions
export const getNodeFonts = (node: HTMLElement) => {
  const nodes = Array.from(dom.queryAll(node, '[style*=font]')) as HTMLElement[];
  const result = nodes.reduce((obj: Record<string, any>, node) => {
    const style = node.style;
    const fontFamily = style.fontFamily;

    // Find matching font in database
    const matchingFont = Object.entries(fontsDb.deref()).find(([_, font]) => {
      const fontId = font.id;
      const fontFamilyName = font.family;
      return fontId === fontFamily || fontFamilyName === fontFamily;
    });

    if (!matchingFont) return obj;

    const [fontId, font] = matchingFont;
    const fontVariant = getVariant(font, style.fontVariant || 'regular');
    const fontVariantId = fontVariant.id;

    obj[`${fontId}:${fontVariantId}`] = {
      fontId,
      fontVariantId
    };

    return obj;
  }, {});

  return Object.values(result);
};

export const getContentFonts = (content: any) => {
  return txt.nodeSeq(content)
    .filter(txt.isTextNode)
    .reduce((result: Set<any>, node: any) => {
      const currentFont = node.fontId
        ? {
            fontId: node.fontId,
            fontVariantId: node.fontVariantId,
            fontWeight: node.fontWeight,
            fontStyle: node.fontStyle
          }
        : {
            fontId: txt.defaultTypography.fontId,
            fontVariantId: txt.defaultTypography.fontVariantId,
            fontWeight: txt.defaultTypography.fontWeight,
            fontStyle: txt.defaultTypography.fontStyle
          };

      return new Set([...result, currentFont]);
    }, new Set());
};

export const fetchFontCss = ({ fontId, fontVariantId = 'regular' }: {
  fontId: string;
  fontVariantId?: string;
}) => {
  const font = fontsDb.deref()[fontId];
  if (!font) {
    return Observable.empty();
  }

  if (font.backend === 'google') {
    const variant = getVariant(font, fontVariantId);
    const url = generateGfontsUrl(font.family, [variant]);

    return Observable.of(url)
      .pipe(
        Observable.flatMap(fetchGfontCss),
        Observable.map(processGfontCss)
      );
  }

  if (font.backend === 'custom') {
    const variant = getVariant(font, fontVariantId);
    const result = generateCustomFontVariantCss(font.family, variant);

    return Observable.of(result);
  }

  // Builtin fonts
  const variant = getVariant(font, fontVariantId);
  const suffix = variant.suffix || fontVariantId;
  const params = {
    uri: u.join(cf.publicUri, `fonts/${font.family}-${suffix}.woff`),
    family: font.family,
    style: variant.style,
    weight: variant.weight
  };

  return Observable.of(strLib.format(fontFaceTemplate, params));
};

export const extractFontfaceUrls = (css: string) => {
  const matches = css.match(/url\(([^)]+)\)/g);
  return matches?.map(match => match.match(/url\(([^)]+)\)/)?.[1]) || [];
};

export const renderFontStyles = (fontRefs: any[]) => {
  return Observable.from(fontRefs)
    .pipe(
      Observable.flatMap(fetchFontCss),
      Observable.reduce((acc: string, css: string) => acc + '\n' + css, '')
    );
};

const fontStyles = new Map<string, string>();

export const getFontStyleId = ({ fontId, fontVariantId = 'regular' }: {
  fontId: string;
  fontVariantId?: string;
}) => {
  return `${fontId}:${fontVariantId}`;
};

export const getFontStylesByFontRef = (fontRef: any) => {
  const id = getFontStyleId(fontRef);

  if (fontStyles.has(id)) {
    return Observable.of(fontStyles.get(id));
  }

  return Observable.of(fontRef)
    .pipe(
      Observable.flatMap(fetchFontCss),
      Observable.tap(css => fontStyles.set(id, css))
    );
};

export const renderFontStylesCached = (fontRefs: any[]) => {
  return Observable.from(fontRefs)
    .pipe(
      Observable.flatMap(getFontStylesByFontRef),
      Observable.reduce((acc: string, css: string) => acc + '\n' + css, '')
    );
};