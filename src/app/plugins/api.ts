// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { indexBy } from '../../common/data';
// import { getIn } from '../../common/data/macros';
// import { emptyChanges, withPage, withObjects, addObject } from '../../common/files/changes-builder';
// import { getChildrenWithSelf, cleanLoops, selectedWithChildren } from '../../common/files/helpers';
// import { point } from '../../common/geom/point';
// import { validSafeNumber, validate } from '../../common/schema';
// import { schemaColor } from '../../common/types/color';
// import { boolTypes, setupShape } from '../../common/types/shape';
// import { changeText } from '../../common/types/text';
// import { next, zero, parse } from '../../common/uuid';
// import { commitChanges } from '../../main/data/changes';
// import { goToViewer, goToWorkspace } from '../../main/data/common';
// import { lookupPage } from '../../main/data/helpers';
// import { createPage } from '../../main/data/workspace';
// import { alignObjects, distributeObjects, convertSelectedToPath } from '../../main/data/workspace';
// import { createBool } from '../../main/data/workspace/bool';
// import { changeColorInSelected, extractAllColors } from '../../main/data/workspace/colors';
// import { groupShapes, ungroupShapes } from '../../main/data/workspace/groups';
// import { uploadMediaUrl, processBlobs, createSvgShape, createSvgShapeWithImages } from '../../main/data/workspace/media';
// import { selectShapes } from '../../main/data/workspace/selection';
// import { resizeWasmTextDebounce } from '../../main/data/workspace/wasm-text';
// import { activeFeature } from '../../main/features';
// import { fetchFontCss } from '../../main/fonts';
// import { generateFormattedMarkupCode, generateStyleCode, prelude } from '../../util/code-gen';
// import { addListener, removeListener, ListenerKey } from './events';
// import { fileProxy } from './file';
// import { flagsProxy } from './flags';
// import { fontsSubcontext } from './fonts';
// import { formatArray, formatColorResult, formatImage } from './format';
// import { historySubcontext } from './history';
// import { librarySubcontext } from './library';
// import { localStorageProxy } from './local_storage';
// import { pageProxy, isPageProxy } from './page';
// import { parseColorData } from './parser';
// import { shapeProxy, isShapeProxy } from './shape';
// import { event } from './system_events';
// import { currentUserProxy, activeUserProxy, isUserProxy } from './user';
// import { displayNotValid, locateObjects, proxyToShape } from './utils';
// import { viewportProxy } from './viewport';
// import { getSystemTheme } from '../../util/theme';

/**
 * Boolean operation type
 */
export type BooleanType = 'union' | 'difference' | 'intersection' | 'exclude' | 'trim' | 'merge';

/**
 * Generate markup options
 */
export interface GenerateMarkupOptions {
  type?: 'html' | 'svg';
}

/**
 * Generate style options
 */
export interface GenerateStyleOptions {
  type?: 'css';
  withPrelude?: boolean;
  includeChildren?: boolean;
}

/**
 * Align direction
 */
export type AlignDirectionHorizontal = 'left' | 'center' | 'right';
export type AlignDirectionVertical = 'top' | 'center' | 'bottom';

/**
 * Penpot context interface
 */
export interface PenpotContext {
  pluginId: string;

  root: ShapeProxy;
  currentFile: FileProxy | undefined;
  currentPage: PageProxy | undefined;
  theme: string;
  localStorage: LocalStorageProxy;
  selection: ShapeProxy[];
  viewport: ViewportProxy;
  currentUser: CurrentUserProxy;
  activeUsers: ActiveUserProxy[];
  fonts: FontsSubcontext;
  flags: FlagsProxy;
  library: LibrarySubcontext;
  history: HistorySubcontext;

  addListener(type: PluginEventType, callback: (value: unknown) => void, props?: Record<string, unknown>): ListenerKey;
  removeListener(key: ListenerKey): void;

  getViewport(): ViewportProxy;
  getFile(): FileProxy | undefined;
  getPage(): PageProxy | undefined;
  getSelectedShapes(): ShapeProxy[];
  shapesColors(shapes: ShapeProxy[]): ColorWithShapeInfo[];
  replaceColor(shapes: ShapeProxy[], oldColor: unknown, newColor: unknown): void;
  getRoot(): ShapeProxy;
  getTheme(): string;
  getCurrentUser(): CurrentUserProxy;
  getActiveUsers(): ActiveUserProxy[];
  uploadMediaUrl(name: string, url: string): Promise<ImageDataProxy>;
  uploadMediaData(name: string, data: Uint8Array, mimeType: string): Promise<ImageDataProxy>;
  group(shapes: ShapeProxy[]): ShapeProxy;
  ungroup(group: ShapeProxy, ...rest: ShapeProxy[]): void;
  createBoard(): ShapeProxy;
  createRectangle(): ShapeProxy;
  createEllipse(): ShapeProxy;
  createPath(): ShapeProxy;
  createText(text: string): ShapeProxy;
  createShapeFromSvg(svgString: string): ShapeProxy;
  createShapeFromSvgWithImages(svgString: string): Promise<ShapeProxy>;
  createBoolean(boolType: BooleanType, shapes: ShapeProxy[]): ShapeProxy;
  generateMarkup(shapes: ShapeProxy[], options?: GenerateMarkupOptions): string;
  generateStyle(shapes: ShapeProxy[], options?: GenerateStyleOptions): string;
  generateFontFaces(shapes: ShapeProxy[]): Promise<string>;
  openViewer(): void;
  createPage(): PageProxy;
  openPage(page: PageProxy | string, newWindow?: boolean): void;
  alignHorizontal(shapes: ShapeProxy[], direction: AlignDirectionHorizontal): void;
  alignVertical(shapes: ShapeProxy[], direction: AlignDirectionVertical): void;
  distributeHorizontal(shapes: ShapeProxy[]): void;
  distributeVertical(shapes: ShapeProxy[]): void;
  flatten(shapes: ShapeProxy[]): void;
}

// Type aliases for proxy interfaces (these should be imported from their respective modules)
interface ShapeProxy {
  pluginId: string;
  fileId: string;
  pageId: string;
  id: string;
  [Symbol('$id')]: string;
  [Symbol('$file')]: string;
  [Symbol('$page')]: string;
}

interface FileProxy {
  pluginId: string;
  id: string;
}

interface PageProxy {
  pluginId: string;
  fileId: string;
  id: string;
  [Symbol('$id')]: string;
}

interface ViewportProxy {
  pluginId: string;
}

interface LocalStorageProxy {
  pluginId: string;
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  getKeys(): string[];
}

interface CurrentUserProxy {
  pluginId: string;
  [Symbol('$session')]: string;
}

interface ActiveUserProxy {
  pluginId: string;
}

interface FontsSubcontext {
  all: FontProxy[];
  findById(id: string): FontProxy | null;
  findByName(name: string): FontProxy | null;
  findAllById(id: string): FontProxy[];
  findAllByName(name: string): FontProxy[];
}

interface FontProxy {
  id: string;
  family: string;
  name: string;
}

interface FlagsProxy {
  pluginId: string;
  naturalChildOrdering: boolean;
}

interface LibrarySubcontext {
  pluginId: string;
  colors: LibraryColorProxy[];
  typographies: LibraryTypographyProxy[];
  components: LibraryComponentProxy[];
  createColor(name: string, color: unknown): LibraryColorProxy;
  createTypography(name: string, font: unknown): LibraryTypographyProxy;
  createComponent(name: string, shapes: ShapeProxy[]): LibraryComponentProxy;
}

interface LibraryColorProxy {}
interface LibraryTypographyProxy {}
interface LibraryComponentProxy {}

interface HistorySubcontext {
  pluginId: string;
  undo(): void;
  redo(): void;
}

interface ColorWithShapeInfo {}

interface ImageDataProxy {
  name: string;
  width: number;
  height: number;
  data(): Promise<Uint8Array>;
}

type PluginEventType = 'finish' | 'filechange' | 'pagechange' | 'selectionchange' | 'shapechange' | 'contentsave' | 'themechange';

/**
 * Create a shape of the given type
 */
export function createShape(pluginId: string, type: string): ShapeProxy {
  // TODO: const page = lookupPage(getState());
  // TODO: const shape = setupShape({ type, x: 0, y: 0, width: 100, height: 100 });
  // TODO: const changes = emptyChanges()
  // TODO:   .withPage(page)
  // TODO:   .withObjects(page.objects)
  // TODO:   .addObject(shape);
  // TODO: emit(commitChanges(changes));
  // TODO: emit(event(pluginId, 'create-shape', { type }));
  // TODO: return shapeProxy(pluginId, shape.id);

  return {} as ShapeProxy;
}

/**
 * Create a Penpot context for a plugin
 */
export function createContext(pluginId: string): PenpotContext {
  const context = {} as PenpotContext;

  // Internal properties
  (context as unknown as Record<symbol, unknown>)[Symbol('$plugin')] = pluginId;

  context.pluginId = pluginId;

  // Root getter
  Object.defineProperty(context, 'root', {
    get(): ShapeProxy {
      return getRoot();
    },
    enumerable: true
  });

  // Current file getter
  Object.defineProperty(context, 'currentFile', {
    get(): FileProxy | undefined {
      return getFile();
    },
    enumerable: true
  });

  // Current page getter
  Object.defineProperty(context, 'currentPage', {
    get(): PageProxy | undefined {
      return getPage();
    },
    enumerable: true
  });

  // Theme getter
  Object.defineProperty(context, 'theme', {
    get(): string {
      return getTheme();
    },
    enumerable: true
  });

  // Local storage getter
  Object.defineProperty(context, 'localStorage', {
    get(): LocalStorageProxy {
      return localStorageProxy(pluginId);
    },
    enumerable: true
  });

  // Selection getter
  Object.defineProperty(context, 'selection', {
    get(): ShapeProxy[] {
      return getSelectedShapes();
    },
    set(shapes: ShapeProxy[]): void {
      if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
        displayNotValid('selection', shapes);
        return;
      }

      const ids = new Set(shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string));
      // TODO: emit(selectShapes(ids));
    },
    enumerable: true
  });

  // Viewport getter
  Object.defineProperty(context, 'viewport', {
    get(): ViewportProxy {
      return getViewport();
    },
    enumerable: true
  });

  // Current user getter
  Object.defineProperty(context, 'currentUser', {
    get(): CurrentUserProxy {
      return getCurrentUser();
    },
    enumerable: true
  });

  // Active users getter
  Object.defineProperty(context, 'activeUsers', {
    get(): ActiveUserProxy[] {
      return getActiveUsers();
    },
    enumerable: true
  });

  // Fonts getter
  Object.defineProperty(context, 'fonts', {
    get(): FontsSubcontext {
      return fontsSubcontext(pluginId);
    },
    enumerable: true
  });

  // Flags getter
  Object.defineProperty(context, 'flags', {
    get(): FlagsProxy {
      return flagsProxy(pluginId);
    },
    enumerable: true
  });

  // Library getter
  Object.defineProperty(context, 'library', {
    get(): LibrarySubcontext {
      return librarySubcontext(pluginId);
    },
    enumerable: true
  });

  // History getter
  Object.defineProperty(context, 'history', {
    get(): HistorySubcontext {
      return historySubcontext(pluginId);
    },
    enumerable: true
  });

  // Add listener method
  context.addListener = function(
    type: PluginEventType,
    callback: (value: unknown) => void,
    props?: Record<string, unknown>
  ): ListenerKey {
    return addListener(type, pluginId, callback, props);
  };

  // Remove listener method
  context.removeListener = function(key: ListenerKey): void {
    removeListener(key);
  };

  // Get viewport method
  const getViewport = function(): ViewportProxy {
    return viewportProxy(pluginId);
  };

  // Get file method
  const getFile = function(): FileProxy | undefined {
    // TODO: const currentFileId = getState().currentFileId;
    // TODO: if (currentFileId) return fileProxy(pluginId, currentFileId);
    return undefined;
  };

  // Get page method
  const getPage = function(): PageProxy | undefined {
    // TODO: const currentFileId = getState().currentFileId;
    // TODO: const currentPageId = getState().currentPageId;
    // TODO: if (currentFileId && currentPageId) return pageProxy(pluginId, currentFileId, currentPageId);
    return undefined;
  };

  // Get selected shapes method
  const getSelectedShapes = function(): ShapeProxy[] {
    // TODO: const selection = getIn(getState(), ['workspaceLocal', 'selected']);
    // TODO: return selection.map(id => shapeProxy(pluginId, id));
    return [];
  };

  // Shapes colors method
  context.shapesColors = function(shapes: ShapeProxy[]): ColorWithShapeInfo[] {
    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('shapesColors-shapes', shapes);
      return [];
    }

    // TODO: const objects = locateObjects();
    // TODO: const shapeIds = shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string);
    // TODO: const allShapes = shapeIds.flatMap(id => getChildrenWithSelf(objects, id));
    // TODO: const fileId = getState().currentFileId;
    // TODO: const sharedLibs = getState().files;
    // TODO: const colors = extractAllColors(allShapes, fileId, sharedLibs);
    // TODO: const grouped = indexBy(colors, 'attrs');
    // TODO: return formatArray(formatColorResult, Object.values(grouped));
    return [];
  };

  // Replace color method
  context.replaceColor = function(shapes: ShapeProxy[], oldColor: unknown, newColor: unknown): void {
    const parsedOldColor = parseColorDataInternal(oldColor);
    const parsedNewColor = parseColorDataInternal(newColor);

    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('replaceColor-shapes', shapes);
      return;
    }

    // TODO: if (!validate(schemaColor, parsedOldColor)) {
    // TODO:   displayNotValid('replaceColor-oldColor', oldColor);
    // TODO:   return;
    // TODO: }

    // TODO: if (!validate(schemaColor, parsedNewColor)) {
    // TODO:   displayNotValid('replaceColor-newColor', newColor);
    // TODO:   return;
    // TODO: }

    // TODO: const fileId = getState().currentFileId;
    // TODO: const sharedLibs = getState().files;
    // TODO: const objects = locateObjects();
    // TODO: const shapeIds = shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string);
    // TODO: const allShapes = shapeIds.flatMap(id => getChildrenWithSelf(objects, id));
    // TODO: const colorsByGroup = indexBy(extractAllColors(allShapes, fileId, sharedLibs), 'attrs');
    // TODO: const operations = colorsByGroup[parsedOldColor];
    // TODO: if (operations) emit(changeColorInSelected(operations, parsedNewColor, parsedOldColor));
  };

  // Get root method
  const getRoot = function(): ShapeProxy {
    // TODO: const currentFileId = getState().currentFileId;
    // TODO: const currentPageId = getState().currentPageId;
    // TODO: if (currentFileId && currentPageId) return shapeProxy(pluginId, zero);
    return {} as ShapeProxy;
  };

  // Get theme method
  const getTheme = function(): string {
    // TODO: const theme = getIn(getState(), ['profile', 'theme']);
    // TODO: if (!theme || theme === 'system') return getSystemTheme();
    // TODO: if (theme === 'default') return 'dark';
    // TODO: return theme;
    return 'dark';
  };

  // Get current user method
  const getCurrentUser = function(): CurrentUserProxy {
    // TODO: const sessionId = getState().sessionId;
    // TODO: return currentUserProxy(pluginId, sessionId);
    return {} as CurrentUserProxy;
  };

  // Get active users method
  const getActiveUsers = function(): ActiveUserProxy[] {
    // TODO: const workspacePresence = getState().workspacePresence;
    // TODO: const sessionId = getState().sessionId;
    // TODO: return Object.values(workspacePresence)
    // TODO:   .filter(u => u.id !== sessionId)
    // TODO:   .map(u => activeUserProxy(pluginId, u.id));
    return [];
  };

  // Upload media URL method
  context.uploadMediaUrl = function(name: string, url: string): Promise<ImageDataProxy> {
    return new Promise((resolve, reject) => {
      if (typeof name !== 'string') {
        displayNotValid('uploadMedia-name', name);
        reject(new Error('Name must be a string'));
        return;
      }

      if (typeof url !== 'string') {
        displayNotValid('uploadMedia-url', url);
        reject(new Error('URL must be a string'));
        return;
      }

      // TODO: const fileId = getState().currentFileId;
      // TODO: uploadMediaUrl(name, fileId, url)
      // TODO:   .pipe(take(1), map(formatImage))
      // TODO:   .subscribe({
      // TODO:     next: resolve,
      // TODO:     error: reject
      // TODO:   });

      resolve({} as ImageDataProxy);
    });
  };

  // Upload media data method
  context.uploadMediaData = function(name: string, data: Uint8Array, mimeType: string): Promise<ImageDataProxy> {
    return new Promise((resolve, reject) => {
      // TODO: const fileId = getState().currentFileId;
      // TODO: const blob = new Blob([data], { type: mimeType });
      // TODO: processBlobs({
      // TODO:   fileId,
      // TODO:   local: false,
      // TODO:   name,
      // TODO:   blobs: [blob],
      // TODO:   onImage: identity,
      // TODO:   onSvg: identity
      // TODO; })
      // TODO:   .pipe(take(1), map(formatImage))
      // TODO;   .subscribe({
      // TODO;     next: resolve,
      // TODO;     error: reject
      // TODO;   });

      resolve({} as ImageDataProxy);
    });
  };

  // Group method
  context.group = function(shapes: ShapeProxy[]): ShapeProxy {
    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('group-shapes', shapes);
      throw new Error('Not valid shapes');
    }

    // TODO: const fileId = getState().currentFileId;
    // TODO: const currentPageId = getState().currentPageId;
    // TODO: const id = next();
    // TODO: const ids = new Set(shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string));
    // TODO: emit(groupShapes(id, ids));
    // TODO: emit(event(pluginId, 'create-shape', { type }));
    // TODO: return shapeProxy(pluginId, fileId, currentPageId, id);
    return {} as ShapeProxy;
  };

  // Ungroup method
  context.ungroup = function(group: ShapeProxy, ...rest: ShapeProxy[]): void {
    if (!isShapeProxyInternal(group)) {
      displayNotValid('ungroup', group);
      return;
    }

    if (rest.length > 0 && !rest.every(isShapeProxyInternal)) {
      displayNotValid('ungroup', rest);
      return;
    }

    const shapes = [group, ...rest];
    const ids = new Set(shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string));
    // TODO: emit(ungroupShapes(ids));
  };

  // Create board method
  context.createBoard = function(): ShapeProxy {
    return createShape(pluginId, 'frame');
  };

  // Create rectangle method
  context.createRectangle = function(): ShapeProxy {
    return createShape(pluginId, 'rect');
  };

  // Create ellipse method
  context.createEllipse = function(): ShapeProxy {
    return createShape(pluginId, 'circle');
  };

  // Create path method
  context.createPath = function(): ShapeProxy {
    // TODO: const page = lookupPage(getState());
    // TODO: const shape = setupShape({
    // TODO:   type: 'path',
    // TODO:   content: [
    // TODO:     { command: 'move-to', params: { x: 0, y: 0 } },
    // TODO;     { command: 'line-to', params: { x: 100, y: 100 } }
    // TODO;   ]
    // TODO; });
    // TODO: const changes = emptyChanges()
    // TODO;   .withPage(page)
    // TODO;   .withObjects(page.objects)
    // TODO;   .addObject(shape);
    // TODO; emit(commitChanges(changes));
    // TODO; emit(event(pluginId, 'create-shape', { type: 'path' }));
    // TODO; return shapeProxy(pluginId, shape.id);
    return {} as ShapeProxy;
  };

  // Create text method
  context.createText = function(text: string): ShapeProxy {
    if (typeof text !== 'string' || text === '') {
      displayNotValid('createText', text);
      throw new Error('Text must be a non-empty string');
    }

    // TODO: const page = lookupPage(getState());
    // TODO: const shape = setupShape({
    // TODO:   type: 'text',
    // TODO:   x: 0,
    // TODO:   y: 0,
    // TODO:   width: 1,
    // TODO;   height: 1,
    // TODO:   growType: 'auto-width'
    // TODO; })
    // TODO;   .update('content', changeText(text, { fills: [{ fillColor: '#000000', fillOpacity: 1 }] }))
    // TODO;   .dissoc('positionData');
    // TODO; const changes = emptyChanges()
    // TODO;   .withPage(page)
    // TODO;   .withObjects(page.objects)
    // TODO;   .addObject(shape);
    // TODO; emit(commitChanges(changes));
    // TODO; emit(event(pluginId, 'create-shape', { type: 'text' }));
    // TODO; if (activeFeature(getState(), 'render-wasm/v1')) {
    // TODO;   emit(resizeWasmTextDebounce(shape.id));
    // TODO; }
    // TODO; return shapeProxy(pluginId, shape.id);
    return {} as ShapeProxy;
  };

  // Create shape from SVG method
  context.createShapeFromSvg = function(svgString: string): ShapeProxy {
    if (typeof svgString !== 'string' || svgString === '') {
      displayNotValid('createShapeFromSvg', svgString);
      throw new Error('SVG must be a non-empty string');
    }

    // TODO: const id = next();
    // TODO: const fileId = getState().currentFileId;
    // TODO: const currentPageId = getState().currentPageId;
    // TODO: emit(createSvgShape(id, 'svg', svgString, point(0, 0)));
    // TODO: emit(event(pluginId, 'create-shape', { type: 'svg' }));
    // TODO: return shapeProxy(pluginId, fileId, currentPageId, id);
    return {} as ShapeProxy;
  };

  // Create shape from SVG with images method
  context.createShapeFromSvgWithImages = function(svgString: string): Promise<ShapeProxy> {
    return new Promise((resolve, reject) => {
      if (typeof svgString !== 'string' || svgString === '') {
        displayNotValid('createShapeFromSvg', 'Svg not valid');
        reject(new Error('Svg not valid'));
        return;
      }

      // TODO: const id = next();
      // TODO: const fileId = getState().currentFileId;
      // TODO: const currentPageId = getState().currentPageId;
      // TODO: emit(
      // TODO:   createSvgShapeWithImages(
      // TODO:     fileId,
      // TODO;     id,
      // TODO;     'svg',
      // TODO;     svgString,
      // TODO;     point(0, 0),
      // TODO;     () => resolve(shapeProxy(pluginId, fileId, currentPageId, id)),
      // TODO;     reject
      // TODO;   ),
      // TODO;   event(pluginId, 'create-shape', { type: 'text' })
      // TODO; );

      resolve({} as ShapeProxy);
    });
  };

  // Create boolean operation method
  context.createBoolean = function(boolType: BooleanType, shapes: ShapeProxy[]): ShapeProxy {
    const type = boolType.toLowerCase() as BooleanType;

    // TODO: if (!boolTypes.includes(type as any)) {
    // TODO:   displayNotValid('createBoolean-boolType', boolType);
    // TODO;   throw new Error('Invalid boolean type');
    // TODO; }

    if (!Array.isArray(shapes) || shapes.length === 0 || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('createBoolean-shapes', shapes);
      throw new Error('Not valid shapes');
    }

    // TODO: const ids = new Set(shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string));
    // TODO: const shapeId = next();
    // TODO: emit(createBool(type as any, { ids, forceShapeId: shapeId }));
    // TODO: emit(event(pluginId, 'create-shape', { type: 'boolean' }));
    // TODO: return shapeProxy(pluginId, shapeId);
    return {} as ShapeProxy;
  };

  // Generate markup method
  context.generateMarkup = function(shapes: ShapeProxy[], options: GenerateMarkupOptions = {}): string {
    const type = options.type ?? 'html';

    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('generateMarkup-shapes', shapes);
      return '';
    }

    if (type !== 'html' && type !== 'svg') {
      displayNotValid('generateMarkup-type', type);
      return '';
    }

    // TODO: const shapesMap = new Map<string, any>();
    // TODO: for (const s of shapes) {
    // TODO:   const fileId = (s as Record<string, unknown>)[Symbol('$file')] as string;
    // TODO:   const pageId = (s as Record<string, unknown>)[Symbol('$page')] as string;
    // TODO:   const id = (s as Record<string, unknown>)[Symbol('$id')] as string;
    // TODO;   const shapeData = proxyToShape(s);
    // TODO;   shapeData.pageId = pageId;
    // TODO;   shapeData.fileId = fileId;
    // TODO;   shapesMap.set(id, shapeData);
    // TODO; }
    // TODO;
    // TODO; const groupedByPage = new Map<string, any[]>();
    // TODO; for (const [id, shape] of shapesMap.entries()) {
    // TODO;   if (!groupedByPage.has(shape.pageId)) {
    // TODO;     groupedByPage.set(shape.pageId, []);
    // TODO;   }
    // TODO;   groupedByPage.get(shape.pageId)?.push(shape);
    // TODO; }
    // TODO;
    // TODO; const codeSegments: string[] = [];
    // TODO; for (const [pageId, pageShapes] of groupedByPage.entries()) {
    // TODO;   const firstShape = pageShapes[0];
    // TODO;   const objects = locateObjects(firstShape.fileId, pageId);
    // TODO;   const cleanedShapes = cleanLoops(objects, pageShapes);
    // TODO;   const resolvedShapes = cleanedShapes.flatMap(s => getChildrenWithSelf(objects, s.id));
    // TODO;   codeSegments.push(generateFormattedMarkupCode(objects, type, resolvedShapes));
    // TODO; }
    // TODO;
    // TODO; return codeSegments.join('\n');
    return '';
  };

  // Generate style method
  context.generateStyle = function(shapes: ShapeProxy[], options: GenerateStyleOptions = {}): string {
    const type = options.type ?? 'css';
    const prelude = options.withPrelude ?? false;
    const includeChildren = options.includeChildren ?? true;

    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('generateStyle-shapes', shapes);
      return '';
    }

    if (type !== 'css') {
      displayNotValid('generateStyle-type', type);
      return '';
    }

    if (typeof prelude !== 'boolean') {
      displayNotValid('generateStyle-withPrelude', prelude);
      return '';
    }

    if (typeof includeChildren !== 'boolean') {
      displayNotValid('generateStyle-includeChildren', includeChildren);
      return '';
    }

    // TODO: const shapesMap = new Map<string, any>();
    // TODO: for (const s of shapes) {
    // TODO:   const fileId = (s as Record<string, unknown>)[Symbol('$file')] as string;
    // TODO:   const pageId = (s as Record<string, unknown>)[Symbol('$page')] as string;
    // TODO:   const id = (s as Record<string, unknown>)[Symbol('$id')] as string;
    // TODO;   const shapeData = proxyToShape(s);
    // TODO;   shapeData.pageId = pageId;
    // TODO;   shapeData.fileId = fileId;
    // TODO;   shapesMap.set(id, shapeData);
    // TODO; }
    // TODO;
    // TODO; const groupedByPage = new Map<string, any[]>();
    // TODO; for (const [id, shape] of shapesMap.entries()) {
    // TODO;   if (!groupedByPage.has(shape.pageId)) {
    // TODO;     groupedByPage.set(shape.pageId, []);
    // TODO;   }
    // TODO;   groupedByPage.get(shape.pageId)?.push(shape);
    // TODO; }
    // TODO;
    // TODO; const styleSegments: string[] = [];
    // TODO; for (const [pageId, pageShapes] of groupedByPage.entries()) {
    // TODO;   const firstShape = pageShapes[0];
    // TODO;   const objects = locateObjects(firstShape.fileId, pageId);
    // TODO;   const cleanedShapes = cleanLoops(objects, pageShapes);
    // TODO;   let resolvedShapes = cleanedShapes;
    // TODO;   if (includeChildren) {
    // TODO;     resolvedShapes = cleanedShapes.flatMap(s => getChildrenWithSelf(objects, s.id));
    // TODO;   }
    // TODO;   styleSegments.push(generateStyleCode(objects, type, pageShapes, resolvedShapes, { withPrelude: prelude }));
    // TODO; }
    // TODO;
    // TODO; return (prelude ? prelude(type) : '') + styleSegments.join('\n\n');
    return '';
  };

  // Generate font faces method
  context.generateFontFaces = function(shapes: ShapeProxy[]): Promise<string> {
    return new Promise((resolve, reject) => {
      // TODO: const objects = locateObjects();
      // TODO: const shapeIds = shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string);
      // TODO: const allChildren = selectedWithChildren(objects, shapeIds).map(id => objects[id]);
      // TODO: const fonts = shapesToFonts(allChildren);
      // TODO: from(fonts)
      // TODO;   .pipe(mergeMap(fetchFontCss), reduce((acc, css) => [...acc, css], []))
      // TODO;   .pipe(map(cssArray => cssArray.join('\n')), first())
      // TODO;   .subscribe({
      // TODO;     next: resolve,
      // TODO;     error: reject
      // TODO;   });

      resolve('');
    });
  };

  // Open viewer method
  context.openViewer = function(): void {
    // TODO: emit(goToViewer({
    // TODO:   pageId: getState().currentPageId,
    // TODO;   fileId: getState().currentFileId,
    // TODO;   section: 'interactions'
    // TODO; }));
  };

  // Create page method
  context.createPage = function(): PageProxy {
    // TODO: const fileId = getState().currentFileId;
    // TODO: const id = next();
    // TODO: emit(createPage({ pageId: id, fileId }));
    // TODO: return pageProxy(pluginId, fileId, id);
    return {} as PageProxy;
  };

  // Open page method
  context.openPage = function(page: PageProxy | string, newWindow?: boolean): void {
    let id: string | undefined;

    if (isPageProxyInternal(page)) {
      id = (page as Record<string, unknown>)[Symbol('$id')] as string;
    } else if (typeof page === 'string') {
      // TODO: id = parse(page);
    }

    if (!id) {
      displayNotValid('openPage', 'Expected a Page object or a page UUID string');
      return;
    }

    const newWin = typeof newWindow === 'boolean' ? newWindow : false;
    // TODO: emit(goToWorkspace({ pageId: id, newWindow: newWin }));
  };

  // Align horizontal method
  context.alignHorizontal = function(shapes: ShapeProxy[], direction: AlignDirectionHorizontal): void {
    const dirMap: Record<AlignDirectionHorizontal, string> = {
      left: 'hleft',
      center: 'hcenter',
      right: 'hright'
    };

    const dir = dirMap[direction];

    if (!dir) {
      displayNotValid('alignHorizontal-direction', 'Direction not valid');
      return;
    }

    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('alignHorizontal-shapes', 'Not valid shapes');
      return;
    }

    const ids = new Set(shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string));
    // TODO: emit(alignObjects(dir as any, ids));
  };

  // Align vertical method
  context.alignVertical = function(shapes: ShapeProxy[], direction: AlignDirectionVertical): void {
    const dirMap: Record<AlignDirectionVertical, string> = {
      top: 'vtop',
      center: 'vcenter',
      bottom: 'vbottom'
    };

    const dir = dirMap[direction];

    if (!dir) {
      displayNotValid('alignVertical-direction', 'Direction not valid');
      return;
    }

    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('alignVertical-shapes', 'Not valid shapes');
      return;
    }

    const ids = new Set(shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string));
    // TODO: emit(alignObjects(dir as any, ids));
  };

  // Distribute horizontal method
  context.distributeHorizontal = function(shapes: ShapeProxy[]): void {
    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('distributeHorizontal-shapes', 'Not valid shapes');
      return;
    }

    const ids = new Set(shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string));
    // TODO: emit(distributeObjects('horizontal', ids));
  };

  // Distribute vertical method
  context.distributeVertical = function(shapes: ShapeProxy[]): void {
    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('distributeVertical-shapes', 'Not valid shapes');
      return;
    }

    const ids = new Set(shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string));
    // TODO: emit(distributeObjects('vertical', ids));
  };

  // Flatten method
  context.flatten = function(shapes: ShapeProxy[]): void {
    if (!Array.isArray(shapes) || !shapes.every(isShapeProxyInternal)) {
      displayNotValid('flatten-shapes', 'Not valid shapes');
      return;
    }

    const ids = new Set(shapes.map(s => (s as Record<string, unknown>)[Symbol('$id')] as string));
    // TODO: emit(convertSelectedToPath(ids));
  };

  return context;
}

// Helper functions

function displayNotValid(code: string, message: string): void {
  console.error(`[PENPOT PLUGIN] Value not valid: ${message}. Code: ${code}`);
}

function isShapeProxyInternal(p: unknown): boolean {
  // TODO: return isShapeProxy(p);
  return true;
}

function isPageProxyInternal(p: unknown): boolean {
  // TODO: return isPageProxy(p);
  return true;
}

function parseColorDataInternal(color: unknown): unknown {
  // TODO: return parseColorData(color);
  return color;
}
