// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { okulary } from 'okulary';

// TODO: Import from proper location
// import * as commonI18n from '../../common/i18n';
// import { setDefaultLocale } from '../../common/time';
// import { defaultLanguage, versionTag } from '../../config';

/**
 * Supported locale
 */
export interface SupportedLocale {
  label: string;
  value: string;
}

/**
 * Counter marker for plural forms
 */
export interface Counter {
  value: number;
}

/**
 * Create a counter marker
 */
export function c(value: number): Counter {
  return { value };
}

/**
 * Check if value is a counter marker
 */
export function isCounter(value: unknown): value is Counter {
  return typeof value === 'object' && value !== null && 'value' in value;
}

/**
 * Supported locales
 */
export const SUPPORTED_LOCALES: SupportedLocale[] = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Català', value: 'ca' },
  { label: 'Deutsch (community)', value: 'de' },
  { label: 'Dutch (community)', value: 'nl' },
  { label: 'Euskera (community)', value: 'eu' },
  { label: 'Français (community)', value: 'fr' },
  { label: 'Gallego (Community)', value: 'gl' },
  { label: 'Hausa (Community)', value: 'ha' },
  { label: 'Hrvatski (Community)', value: 'hr' },
  { label: 'Italiano (community)', value: 'it' },
  { label: 'Norsk - Bokmål (community)', value: 'nb_no' },
  { label: 'Polski (community)', value: 'pl' },
  { label: 'Portuguese - Brazil (community)', value: 'pt_br' },
  { label: 'Portuguese - Portugal (community)', value: 'pt_pt' },
  { label: 'Bahasa Indonesia (community)', value: 'id' },
  { label: 'Rumanian (community)', value: 'ro' },
  { label: 'Türkçe (community)', value: 'tr' },
  { label: 'Ελληνική γλώσσα (community)', value: 'el' },
  { label: 'Русский (community)', value: 'ru' },
  { label: 'Украї́нська мо́ва (community)', value: 'uk' },
  { label: 'Český jazyk (community)', value: 'cs' },
  { label: 'Latviešu valoda (community)', value: 'lv' },
  { label: 'Српски (community)', value: 'sr' },
  { label: 'Føroyskt mál (community)', value: 'fo' },
  { label: 'Korean (community)', value: 'ko' },
  { label: 'עִבְרִית (community)', value: 'he' },
  { label: 'आधुनिक मानक हिन्दी (community)', value: 'hi' },
  { label: 'عربي/عربى (community)', value: 'ar' },
  { label: 'فارسی (community)', value: 'fa' },
  { label: '日本語 (Community)', value: 'ja_jp' },
  { label: '简体中文 (community)', value: 'zh_cn' },
  { label: '繁體中文 (community)', value: 'zh_hant' }
];

const DEFAULT_LANGUAGE = 'en';

/**
 * Parse locale string
 */
function parseLocale(locale: string): string[] {
  const normalized = locale.toLowerCase().replace('-', '_');
  const result = [normalized];

  if (normalized.includes('_')) {
    result.push(normalized.substring(0, 2));
  }

  return result;
}

/**
 * Get browser locales
 */
function getBrowserLocales(): string[] {
  const language = navigator.language || 'en';
  return parseLocale(language);
}

/**
 * Auto-detect locale from browser preferences
 */
function autodetect(): string {
  const supported = new Set(SUPPORTED_LOCALES.map(l => l.value));
  const locales = getBrowserLocales();

  for (const locale of locales) {
    if (supported.has(locale)) {
      return locale;
    }
  }

  return DEFAULT_LANGUAGE;
}

/**
 * Get current locale from storage or autodetect
 */
function getCurrent(): string {
  // TODO: Import from storage
  // const stored = storage.global.get(localeKey);
  // return stored || autodetect();
  return autodetect();
}

/**
 * Current locale
 */
let currentLocale = getCurrent();

/**
 * Locale atom
 */
export const locale = okulary.atom(currentLocale);

/**
 * Get global translations object
 */
function getTranslations(): Record<string, unknown> {
  if (!(window as any).penpotTranslations) {
    (window as any).penpotTranslations = {};
  }
  return (window as any).penpotTranslations;
}

/**
 * Set translations for a specific locale
 */
export function setTranslations(localeValue: string, data: Record<string, unknown>): void {
  const translations = getTranslations();
  translations[localeValue] = data;
}

/**
 * Set default translations
 */
export function setDefaultTranslations(data: Record<string, unknown>): void {
  setTranslations(DEFAULT_LANGUAGE, data);
}

/**
 * Load translations from file
 */
async function load(localeValue: string): Promise<void> {
  // TODO: Implement dynamic import
  // const path = `./translation.${localeValue}.js?version=${versionTag}`;
  // const result = await import(path);
  // const data = result.default;
  // setTranslations(localeValue, data);
}

/**
 * Initialize i18n module
 */
export async function init(): Promise<void> {
  await load(currentLocale);
  if (currentLocale !== DEFAULT_LANGUAGE) {
    await load(DEFAULT_LANGUAGE);
  }
}

/**
 * Set current locale
 */
export async function setLocale(lname: string | null): Promise<void> {
  let targetLocale = lname;

  if (!lname || lname === '') {
    targetLocale = autodetect();
  } else {
    const normalized = parseLocale(lname);
    const supported = new Set(SUPPORTED_LOCALES.map(l => l.value));

    for (const locale of normalized) {
      if (supported.has(locale)) {
        targetLocale = locale;
        break;
      }
    }

    if (!targetLocale) {
      targetLocale = DEFAULT_LANGUAGE;
    }
  }

  await load(targetLocale!);
  currentLocale = targetLocale!;
  locale.reset(currentLocale);

  // TODO: Update common time default locale
  // setDefaultLocale(currentLocale);
}

/**
 * Check if string is empty
 */
function isEmptyString(v: unknown): v is null | undefined | '' {
  return v === null || v === undefined || v === '';
}

/**
 * Translate a code for a specific locale
 */
export function t(localeValue: string, code: string | string[], ...args: unknown[]): string {
  const translations = getTranslations();
  const codeStr = Array.isArray(code) ? code[0] : code;
  const value = translations[localeValue]?.[codeStr];

  if (isEmptyString(value)) {
    if (localeValue === DEFAULT_LANGUAGE) {
      return codeStr;
    }
    return t(DEFAULT_LANGUAGE, code, ...args);
  }

  if (Array.isArray(value)) {
    return value[0] as string;
  }

  // Handle plural forms
  const counter = args.find(isCounter);
  if (counter && Array.isArray(value)) {
    const pluralIndex = counter.value === 1 ? 0 : 1;
    return value[pluralIndex] as string;
  }

  // Replace placeholders
  return String(value).replace(/\{(\d+)\}/g, (match, index) => {
    const arg = args[parseInt(index, 10)];
    return isCounter(arg) ? String(arg.value) : String(arg ?? '');
  });
}

/**
 * Translate using current locale
 */
export function tr(code: string | string[], ...args: unknown[]): string {
  return t(currentLocale, code, ...args);
}

/**
 * Set the translation function in common i18n namespace
 */
// TODO: Set in common i18n
// commonI18n.tr = tr;

// Watch locale changes
// locale.addWatch('common.time', (_key, _ref, oldValue, newValue) => {
//   if (oldValue !== newValue) {
//     setDefaultLocale(newValue);
//   }
// });
