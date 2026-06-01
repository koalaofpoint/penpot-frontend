import * as i0 from "date-fns/locale/he";
import * as i1 from "date-fns/locale/ru";
import * as i2 from "highlight.js";
import * as i3 from "react-error-boundary";
import * as i4 from "date-fns/locale/nb";
import * as i5 from "sax";
import * as i6 from "date-fns/locale/cs";
import * as i7 from "style-dictionary";
import * as i8 from "react-dom";
import * as i9 from "date-fns/locale/fr";
import * as i10 from "opentype.js";
import * as i11 from "date-fns/locale/id";
import * as i12 from "date-fns/setDefaultOptions";
import * as i13 from "date-fns/locale/pt-BR";
import * as i14 from "date-fns/locale/ja";
import * as i15 from "@penpot/plugins-runtime";
import * as i16 from "tdigest";
import * as i17 from "date-fns/locale/it";
import * as i18 from "react-dom/client";
import * as i19 from "@penpot/mousetrap";
import * as i20 from "date-fns/locale/ca";
import * as i21 from "date-fns/locale/de";
import * as i22 from "@penpot/draft-js";
import * as i23 from "react-dom/server";
import * as i24 from "date-fns/locale/ro";
import * as i25 from "@penpot/text-editor";
import * as i26 from "date-fns/locale/pl";
import * as i27 from "react/jsx-runtime";
import * as i28 from "tinycolor2";
import * as i29 from "date-fns/locale/hr";
import * as i30 from "eventsource-parser/stream";
import * as i31 from "date-fns/locale/es";
import * as i32 from "date-fns/locale/ko";
import * as i33 from "date-fns/parseISO";
import * as i34 from "date-fns/differenceInMilliseconds";
import * as i35 from "date-fns/locale/uk";
import * as i36 from "rxjs";
import * as i37 from "date-fns/locale/fa-IR";
import * as i38 from "lodash/debounce.js";
import * as i39 from "date-fns/locale/nl";
import * as i40 from "date-fns/locale/zh-CN";
import * as i41 from "@zip.js/zip.js";
import * as i42 from "react";
import * as i43 from "date-fns/locale/tr";
import * as i44 from "date-fns/add";
import * as i45 from "date-fns/format";
import * as i46 from "js-beautify";
import * as i47 from "@penpot/tokenscript";
import * as i48 from "date-fns/locale/pt";
import * as i49 from "date-fns/locale/ar-SA";
import * as i50 from "date-fns/formatISO";
import * as i51 from "react-virtualized";
import * as i52 from "ua-parser-js";
import * as i53 from "@penpot/svgo";
import * as i54 from "date-fns/locale/gl";
import * as i55 from "date-fns/locale/eu";
import * as i56 from "date-fns/sub";
import * as i57 from "date-fns/locale/lv";
import * as i58 from "date-fns/formatDistanceToNowStrict";
import * as i59 from "date-fns/locale/en-US";
import * as i60 from "date-fns/locale/el";
import * as i61 from "@tokens-studio/sd-transforms";

const ALL = {};

globalThis.shadow$bridge = function(name) {
  const ret = ALL[name];
  if (ret == undefined) {
    throw new Error("Dependency: " + name + " not provided by external JS!");
  } else {
    return ret;
  }
};

ALL["date-fns/locale/he"] = {
  default: i0.default
};

ALL["date-fns/locale/ru"] = {
  default: i1.default
};

ALL["highlight.js"] = {
  default: i2.default
};

ALL["react-error-boundary"] = {
  ErrorBoundary: i3.ErrorBoundary
};

ALL["date-fns/locale/nb"] = {
  default: i4.default
};

ALL["sax"] = {
  parser: i5.parser
};

ALL["date-fns/locale/cs"] = {
  default: i6.default
};

ALL["style-dictionary"] = {
  default: i7.default
};

ALL["react-dom"] = {
  createPortal: i8.createPortal
};

ALL["date-fns/locale/fr"] = {
  default: i9.default
};

ALL["opentype.js"] = {
  parse: i10.parse
};

ALL["date-fns/locale/id"] = {
  default: i11.default
};

ALL["date-fns/setDefaultOptions"] = {
  default: i12.default
};

ALL["date-fns/locale/pt-BR"] = {
  default: i13.default
};

ALL["date-fns/locale/ja"] = {
  default: i14.default
};

ALL["@penpot/plugins-runtime"] = {
  initPluginsRuntime: i15.initPluginsRuntime
};

ALL["tdigest"] = {
  TDigest: i16.TDigest
};

ALL["date-fns/locale/it"] = {
  default: i17.default
};

ALL["react-dom/client"] = {
  createRoot: i18.createRoot,
  hydrateRoot: i18.hydrateRoot
};

ALL["@penpot/mousetrap"] = {
  default: i19.default
};

ALL["date-fns/locale/ca"] = {
  default: i20.default
};

ALL["date-fns/locale/de"] = {
  default: i21.default
};

ALL["@penpot/draft-js"] = {
  convertFromRaw: i22.convertFromRaw,
  EditorBlock: i22.EditorBlock,
  updateCurrentBlockData: i22.updateCurrentBlockData,
  Editor: i22.Editor,
  getSelectedBlocks: i22.getSelectedBlocks,
  removeBlurSelectionEntity: i22.removeBlurSelectionEntity,
  selectBlock: i22.selectBlock,
  applyInlineStyle: i22.applyInlineStyle,
  selectionEquals: i22.selectionEquals,
  getSelection: i22.getSelection,
  selectAll: i22.selectAll,
  cursorToEnd: i22.cursorToEnd,
  setSelection: i22.setSelection,
  splitBlockPreservingData: i22.splitBlockPreservingData,
  createEditorState: i22.createEditorState,
  createDecorator: i22.createDecorator,
  getBlockContent: i22.getBlockContent,
  getBlockData: i22.getBlockData,
  updateBlockData: i22.updateBlockData,
  setInlineStyleOverride: i22.setInlineStyleOverride,
  addBlurSelectionEntity: i22.addBlurSelectionEntity,
  insertText: i22.insertText,
  convertToRaw: i22.convertToRaw,
  getCurrentBlock: i22.getCurrentBlock,
  isCurrentEmpty: i22.isCurrentEmpty,
  getInlineStyle: i22.getInlineStyle
};

ALL["react-dom/server"] = {
  renderToStaticMarkup: i23.renderToStaticMarkup
};

ALL["date-fns/locale/ro"] = {
  default: i24.default
};

ALL["@penpot/text-editor"] = {
  createRootFromString: i25.createRootFromString,
  getCurrentStyle: i25.getCurrentStyle,
  dispose: i25.dispose,
  applyStylesToSelection: i25.applyStylesToSelection,
  getRoot: i25.getRoot,
  createRootFromHTML: i25.createRootFromHTML,
  create: i25.create,
  isEmpty: i25.isEmpty,
  setRoot: i25.setRoot
};

ALL["date-fns/locale/pl"] = {
  default: i26.default
};

ALL["react/jsx-runtime"] = {
  jsx: i27.jsx,
  jsxs: i27.jsxs
};

ALL["tinycolor2"] = {
  default: i28.default
};

ALL["date-fns/locale/hr"] = {
  default: i29.default
};

ALL["eventsource-parser/stream"] = {
  EventSourceParserStream: i30.EventSourceParserStream
};

ALL["date-fns/locale/es"] = {
  default: i31.default
};

ALL["date-fns/locale/ko"] = {
  default: i32.default
};

ALL["date-fns/parseISO"] = {
  default: i33.default
};

ALL["date-fns/differenceInMilliseconds"] = {
  default: i34.default
};

ALL["date-fns/locale/uk"] = {
  default: i35.default
};

ALL["rxjs"] = {
  skip: i36.skip,
  throttleTime: i36.throttleTime,
  map: i36.map,
  range: i36.range,
  retry: i36.retry,
  forkJoin: i36.forkJoin,
  skipWhile: i36.skipWhile,
  debounceTime: i36.debounceTime,
  throwError: i36.throwError,
  delayWhen: i36.delayWhen,
  of: i36.of,
  bufferTime: i36.bufferTime,
  mergeScan: i36.mergeScan,
  race: i36.race,
  Observable: i36.Observable,
  expand: i36.expand,
  observeOn: i36.observeOn,
  noop: i36.noop,
  takeUntil: i36.takeUntil,
  combineLatest: i36.combineLatest,
  takeLast: i36.takeLast,
  defaultIfEmpty: i36.defaultIfEmpty,
  TimeoutError: i36.TimeoutError,
  sampleTime: i36.sampleTime,
  take: i36.take,
  buffer: i36.buffer,
  distinct: i36.distinct,
  scan: i36.scan,
  BehaviorSubject: i36.BehaviorSubject,
  interval: i36.interval,
  mergeAll: i36.mergeAll,
  catchError: i36.catchError,
  switchMap: i36.switchMap,
  Scheduler: i36.Scheduler,
  timeout: i36.timeout,
  Subject: i36.Subject,
  concatMap: i36.concatMap,
  concat: i36.concat,
  filter: i36.filter,
  distinctUntilChanged: i36.distinctUntilChanged,
  animationFrameScheduler: i36.animationFrameScheduler,
  EMPTY: i36.EMPTY,
  delay: i36.delay,
  queueScheduler: i36.queueScheduler,
  takeWhile: i36.takeWhile,
  from: i36.from,
  withLatestFrom: i36.withLatestFrom,
  Subscription: i36.Subscription,
  subscribeOn: i36.subscribeOn,
  combineLatestWith: i36.combineLatestWith,
  skipLast: i36.skipLast,
  ignoreElements: i36.ignoreElements,
  mergeMap: i36.mergeMap,
  reduce: i36.reduce,
  asapScheduler: i36.asapScheduler,
  bufferCount: i36.bufferCount,
  fromEvent: i36.fromEvent,
  skipUntil: i36.skipUntil,
  tap: i36.tap,
  zip: i36.zip,
  Subscriber: i36.Subscriber,
  share: i36.share,
  sample: i36.sample,
  asyncScheduler: i36.asyncScheduler,
  timer: i36.timer,
  finalize: i36.finalize
};

ALL["date-fns/locale/fa-IR"] = {
  default: i37.default
};

ALL["lodash/debounce.js"] = i38;

ALL["date-fns/locale/nl"] = {
  default: i39.default
};

ALL["date-fns/locale/zh-CN"] = {
  default: i40.default
};

ALL["@zip.js/zip.js"] = {
  Uint8ArrayWriter: i41.Uint8ArrayWriter,
  TextReader: i41.TextReader,
  BlobWriter: i41.BlobWriter,
  TextWriter: i41.TextWriter,
  ZipWriter: i41.ZipWriter,
  BlobReader: i41.BlobReader,
  ZipReader: i41.ZipReader,
  Uint8ArrayReader: i41.Uint8ArrayReader
};

ALL["react"] = {
  useLayoutEffect: i42.useLayoutEffect,
  useInsertionEffect: i42.useInsertionEffect,
  useRef: i42.useRef,
  useTransition: i42.useTransition,
  useCallback: i42.useCallback,
  useId: i42.useId,
  startTransition: i42.startTransition,
  createElement: i42.createElement,
  Fragment: i42.Fragment,
  useSyncExternalStore: i42.useSyncExternalStore,
  isValidElement: i42.isValidElement,
  useMemo: i42.useMemo,
  forwardRef: i42.forwardRef,
  useDeferredValue: i42.useDeferredValue,
  createContext: i42.createContext,
  Suspense: i42.Suspense,
  Profiler: i42.Profiler,
  Component: i42.Component,
  useEffect: i42.useEffect,
  lazy: i42.lazy,
  useState: i42.useState,
  createRef: i42.createRef,
  useContext: i42.useContext,
  use: i42.use,
  memo: i42.memo
};

ALL["date-fns/locale/tr"] = {
  default: i43.default
};

ALL["date-fns/add"] = {
  default: i44.default
};

ALL["date-fns/format"] = {
  default: i45.default
};

ALL["js-beautify"] = {
  html: i46.html
};

ALL["@penpot/tokenscript"] = {
  makeConfig: i47.makeConfig,
  ListSymbol: i47.ListSymbol,
  ProcessorError: i47.ProcessorError,
  NumberSymbol: i47.NumberSymbol,
  NumberWithUnitSymbol: i47.NumberWithUnitSymbol,
  TokenSymbol: i47.TokenSymbol,
  BaseSymbolType: i47.BaseSymbolType,
  ColorSymbol: i47.ColorSymbol,
  processTokens: i47.processTokens
};

ALL["date-fns/locale/pt"] = {
  default: i48.default
};

ALL["date-fns/locale/ar-SA"] = {
  default: i49.default
};

ALL["date-fns/formatISO"] = {
  default: i50.default
};

ALL["react-virtualized"] = {
  AutoSizer: i51.AutoSizer,
  List: i51.List
};

ALL["ua-parser-js"] = {
  UAParser: i52.UAParser
};

ALL["@penpot/svgo"] = {
  default: i53.default
};

ALL["date-fns/locale/gl"] = {
  default: i54.default
};

ALL["date-fns/locale/eu"] = {
  default: i55.default
};

ALL["date-fns/sub"] = {
  default: i56.default
};

ALL["date-fns/locale/lv"] = {
  default: i57.default
};

ALL["date-fns/formatDistanceToNowStrict"] = {
  default: i58.default
};

ALL["date-fns/locale/en-US"] = {
  default: i59.default
};

ALL["date-fns/locale/el"] = {
  default: i60.default
};

ALL["@tokens-studio/sd-transforms"] = {
  getTransforms: i61.getTransforms,
  register: i61.register
};
