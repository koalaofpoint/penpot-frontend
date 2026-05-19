// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dm from 'app/common/data/macros'
import * as dcm from 'app/main/data/common'
import * as ev from 'app/main/data/event'
import * as de from 'app/main/data/exports/assets'
import * as modal from 'app/main/data/modal'
import * as dpl from 'app/main/data/plugins'
import * as dp from 'app/main/data/preview'
import * as du from 'app/main/data/profile'
import * as ds from 'app/main/data/shortcuts'
import * as dw from 'app/main/data/workspace'
import * as mdc from 'app/main/data/workspace/colors'
import * as dwd from 'app/main/data/workspace/drawing'
import * as dwly from 'app/main/data/workspace/layers'
import * as dwl from 'app/main/data/workspace/libraries'
import * as dwsl from 'app/main/data/workspace/shape-layout'
import * as dws from 'app/main/data/workspace/shapes'
import * as dwtxts from 'app/main/data/workspace/text/shortcuts'
import * as dwtxt from 'app/main/data/workspace/texts'
import * as dwt from 'app/main/data/workspace/transforms'
import * as dwu from 'app/main/data/workspace/undo'
import * as dwv from 'app/main/data/workspace/variants'
import * as features from 'app/main/features'
import * as refs from 'app/main/refs'
import * as st from 'app/main/store'
import * as r from 'app/main/ui/hooks/resize'
import * as dom from 'app/util/dom'
import * as rx from 'beicon.v2.core'
import * as ptk from 'potok.v2.core'

import type { Event } from 'potok.v2.core'

///////////////////////////////////////////////////////////////////////////////
// Shortcuts
///////////////////////////////////////////////////////////////////////////////

function toggleLayoutFlag(flag: string): Event {
  const event = dw.toggleLayoutFlag(flag)
  return Object.assign({}, event, {
    meta: { ...(event as any).meta, [ev.evOrigin]: 'workspace-shortcuts' }
  })
}

function emitWhenNoReadonly(...events: Event[]): void {
  const permissions = refs.permissions as unknown as { canEdit: boolean }
  const workspaceReadOnly = refs.workspaceReadOnly as unknown as boolean
  const canEdit = permissions.canEdit
  const readOnly = workspaceReadOnly
  if (canEdit && !readOnly) {
    events.forEach(e => st.emit(e))
  }
}

export const escPressed: Event = {
  type: 'esc-pressed',
  execute: 'watch',
  watch: function(_: any, state: any, __: any) {
    return rx.of(
      'interrupt',
      (() => {
        const selection = dm.getIn(state, ['workspace-local', 'selected'])
        if (selection.size === 0) {
          return dpl.closeCurrentPlugin()
        } else {
          return dw.deselectAll(true)
        }
      })()
    )
  }
}

// Shortcuts format https://github.com/ccampbell/mousetrap

interface ShortcutDef {
  tooltip: string | string[]
  command: string | string[]
  subsections: string[]
  fn: () => void
  disabled?: boolean
  type?: string
  showCommand?: string
}

const baseShortcuts: Record<string, ShortcutDef> = {
  // EDIT
  undo: {
    tooltip: ds.meta('Z'),
    command: ds.cMod('z'),
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dwu.undo)
  },

  redo: {
    tooltip: ds.meta('Y'),
    command: [ds.cMod('shift+z'), ds.cMod('y')],
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dwu.redo)
  },

  clearUndo: {
    tooltip: ds.alt('Q'),
    command: 'alt+q',
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dwu.reinitializeUndo)
  },

  copy: {
    tooltip: ds.meta('C'),
    command: ds.cMod('c'),
    subsections: ['edit'],
    fn: () => st.emit(dw.copySelected())
  },

  copyLink: {
    tooltip: ds.shift(ds.alt('C')),
    command: 'shift+alt+c',
    subsections: ['edit'],
    fn: () => st.emit(dw.copyLinkToClipboard())
  },

  cut: {
    tooltip: ds.meta('X'),
    command: ds.cMod('x'),
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dw.copySelected(), dw.deleteSelected())
  },

  paste: {
    tooltip: ds.meta('V'),
    disabled: true,
    command: ds.cMod('v'),
    subsections: ['edit'],
    fn: () => null as unknown as void
  },

  copyProps: {
    tooltip: ds.meta(ds.alt('c')),
    command: ds.cMod('alt+c'),
    subsections: ['edit'],
    fn: () => st.emit(dw.copySelectedProps())
  },

  pasteProps: {
    tooltip: ds.meta(ds.alt('v')),
    command: ds.cMod('alt+v'),
    subsections: ['edit'],
    fn: () => st.emit(dw.pasteSelectedProps())
  },

  delete: {
    tooltip: ds.supr(),
    command: ['del', 'backspace'],
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dw.deleteSelected())
  },

  duplicate: {
    tooltip: ds.meta('D'),
    command: ds.cMod('d'),
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dwv.duplicateOrAddVariant())
  },

  startEditing: {
    tooltip: ds.enter(),
    command: 'enter',
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dw.startEditingSelected())
  },

  startMeasure: {
    tooltip: ds.alt(''),
    command: ['alt', '.'],
    type: 'keydown',
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dw.toggleDistancesDisplay(true))
  },

  stopMeasure: {
    tooltip: ds.alt(''),
    command: ['alt', '.'],
    type: 'keyup',
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dw.toggleDistancesDisplay(false))
  },

  escape: {
    tooltip: ds.esc(),
    command: 'escape',
    subsections: ['edit'],
    fn: () => st.emit(escPressed)
  },

  // MODIFY LAYERS
  rename: {
    tooltip: ds.alt('N'),
    command: 'alt+n',
    subsections: ['edit'],
    fn: () => emitWhenNoReadonly(dw.startRenameSelected())
  },

  group: {
    tooltip: ds.meta('G'),
    command: ds.cMod('g'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.groupSelected())
  },

  ungroup: {
    tooltip: ds.shift('G'),
    command: 'shift+g',
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.ungroupSelected())
  },

  mask: {
    tooltip: ds.meta('M'),
    command: ds.cMod('m'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.maskGroup())
  },

  unmask: {
    tooltip: ds.metaShift('M'),
    command: ds.cMod('shift+m'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.unmaskGroup())
  },

  createComponentVariant: {
    tooltip: ds.meta('K'),
    command: ds.cMod('k'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwv.addComponentOrVariant())
  },

  detachComponent: {
    tooltip: ds.metaShift('K'),
    command: ds.cMod('shift+k'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwl.detachSelectedComponents)
  },

  flipVertical: {
    tooltip: ds.shift('V'),
    command: 'shift+v',
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.flipVerticalSelected())
  },

  flipHorizontal: {
    tooltip: ds.shift('H'),
    command: 'shift+h',
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.flipHorizontalSelected())
  },

  bringForward: {
    tooltip: ds.meta(ds.upArrow),
    command: ds.cMod('up'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.verticalOrderSelected('up'))
  },

  bringBackward: {
    tooltip: ds.meta(ds.downArrow),
    command: ds.cMod('down'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.verticalOrderSelected('down'))
  },

  bringFront: {
    tooltip: ds.metaShift(ds.upArrow),
    command: ds.cMod('shift+up'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.verticalOrderSelected('top'))
  },

  bringBack: {
    tooltip: ds.metaShift(ds.downArrow),
    command: ds.cMod('shift+down'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dw.verticalOrderSelected('bottom'))
  },

  moveFastUp: {
    tooltip: ds.shift(ds.upArrow),
    command: ['shift+up', 'shift+alt+up'],
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwt.moveSelected('up', true))
  },

  moveFastDown: {
    tooltip: ds.shift(ds.downArrow),
    command: ['shift+down', 'shift+alt+down'],
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwt.moveSelected('down', true))
  },

  moveFastRight: {
    tooltip: ds.shift(ds.rightArrow),
    command: ['shift+right', 'shift+alt+right'],
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwt.moveSelected('right', true))
  },

  moveFastLeft: {
    tooltip: ds.shift(ds.leftArrow),
    command: ['shift+left', 'shift+alt+left'],
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwt.moveSelected('left', true))
  },

  moveUnitUp: {
    tooltip: ds.upArrow,
    command: ['up', 'alt+up'],
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwt.moveSelected('up', false))
  },

  moveUnitDown: {
    tooltip: ds.downArrow,
    command: ['down', 'alt+down'],
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwt.moveSelected('down', false))
  },

  moveUnitLeft: {
    tooltip: ds.rightArrow,
    command: ['right', 'alt+right'],
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwt.moveSelected('right', false))
  },

  moveUnitRight: {
    tooltip: ds.leftArrow,
    command: ['left', 'alt+left'],
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwt.moveSelected('left', false))
  },

  artboardSelection: {
    tooltip: ds.meta(ds.alt('G')),
    command: ds.cMod('alt+g'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dws.createArtboardFromSelection())
  },

  toggleLayoutFlex: {
    tooltip: ds.shift('A'),
    command: 'shift+a',
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(
      Object.assign({}, dwsl.toggleLayout('flex'), {
        meta: { [ev.evOrigin]: 'workspace:shortcuts' }
      })
    )
  },

  toggleLayoutGrid: {
    tooltip: ds.metaShift('A'),
    command: ds.cMod('shift+a'),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(
      Object.assign({}, dwsl.toggleLayout('grid'), {
        meta: { [ev.evOrigin]: 'workspace:shortcuts' }
      })
    )
  },

  // TOOLS
  drawFrame: {
    tooltip: 'B',
    command: ['b', 'a'],
    subsections: ['tools', 'basics'],
    fn: () => emitWhenNoReadonly(dwd.selectForDrawing('frame'))
  },

  move: {
    tooltip: 'V',
    command: 'v',
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly('interrupt' as unknown as Event)
  },

  drawRect: {
    tooltip: 'R',
    command: 'r',
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(dwd.selectForDrawing('rect'))
  },

  drawEllipse: {
    tooltip: 'E',
    command: 'e',
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(dwd.selectForDrawing('circle'))
  },

  drawText: {
    tooltip: 'T',
    command: 't',
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(
      dwtxt.startEditIfSelected,
      dwd.selectForDrawing('text')
    )
  },

  drawPath: {
    tooltip: 'P',
    command: 'p',
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(dwd.selectForDrawing('path'))
  },

  drawCurve: {
    tooltip: ds.shift('C'),
    command: 'shift+c',
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(dwd.selectForDrawing('curve'))
  },

  addComment: {
    tooltip: 'C',
    command: 'c',
    subsections: ['tools'],
    fn: () => st.emit(dwd.selectForDrawing('comments'))
  },

  insertImage: {
    tooltip: ds.shift('K'),
    command: 'shift+k',
    subsections: ['tools'],
    fn: () => {
      const el = dom.getElement('image-upload')
      if (el) dom.click(el)
    }
  },

  toggleVisibility: {
    tooltip: ds.metaShift('H'),
    command: ds.cMod('shift+h'),
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(dw.toggleVisibilitySelected())
  },

  toggleLock: {
    tooltip: ds.metaShift('L'),
    command: ds.cMod('shift+l'),
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(dw.toggleLockSelected())
  },

  toggleLockSize: {
    tooltip: ds.shift('L'),
    command: 'shift+l',
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(dw.toggleProportionLock())
  },

  scale: {
    tooltip: 'K',
    command: 'k',
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(toggleLayoutFlag('scale-text'))
  },

  openColorPicker: {
    tooltip: 'I',
    command: 'i',
    subsections: ['tools'],
    fn: () => emitWhenNoReadonly(mdc.pickerForSelectedShape())
  },

  toggleFocusMode: {
    command: 'f',
    tooltip: 'F',
    subsections: ['basics', 'tools'],
    fn: () => st.emit(dw.toggleFocusMode())
  },

  // ITEM ALIGNMENT
  alignLeft: {
    tooltip: ds.alt('A'),
    command: 'alt+a',
    subsections: ['alignment'],
    fn: () => emitWhenNoReadonly(dw.alignObjects('hleft'))
  },

  alignRight: {
    tooltip: ds.alt('D'),
    command: 'alt+d',
    subsections: ['alignment'],
    fn: () => emitWhenNoReadonly(dw.alignObjects('hright'))
  },

  alignTop: {
    tooltip: ds.alt('W'),
    command: 'alt+w',
    subsections: ['alignment'],
    fn: () => emitWhenNoReadonly(dw.alignObjects('vtop'))
  },

  alignHcenter: {
    tooltip: ds.alt('H'),
    command: 'alt+h',
    subsections: ['alignment'],
    fn: () => emitWhenNoReadonly(dw.alignObjects('hcenter'))
  },

  alignVcenter: {
    tooltip: ds.alt('V'),
    command: 'alt+v',
    subsections: ['alignment'],
    fn: () => emitWhenNoReadonly(dw.alignObjects('vcenter'))
  },

  alignBottom: {
    tooltip: ds.alt('S'),
    command: 'alt+s',
    subsections: ['alignment'],
    fn: () => emitWhenNoReadonly(dw.alignObjects('vbottom'))
  },

  hDistribute: {
    tooltip: ds.metaShift(ds.alt('H')),
    command: ds.cMod('shift+alt+h'),
    subsections: ['alignment'],
    fn: () => emitWhenNoReadonly(dw.distributeObjects('horizontal'))
  },

  vDistribute: {
    tooltip: ds.metaShift(ds.alt('V')),
    command: ds.cMod('shift+alt+v'),
    subsections: ['alignment'],
    fn: () => emitWhenNoReadonly(dw.distributeObjects('vertical'))
  },

  // MAIN MENU
  toggleRulers: {
    tooltip: ds.metaShift('R'),
    command: ds.cMod('shift+r'),
    subsections: ['main-menu'],
    fn: () => st.emit(toggleLayoutFlag('rulers'))
  },

  selectAll: {
    tooltip: ds.meta('A'),
    command: ds.cMod('a'),
    subsections: ['main-menu'],
    fn: () => st.emit(dw.selectAll())
  },

  toggleGuides: {
    tooltip: ds.meta("'"),
    command: [ds.cMod("'"), ds.cMod('219')],
    showCommand: ds.cMod("'"),
    subsections: ['main-menu'],
    fn: () => st.emit(toggleLayoutFlag('display-guides'))
  },

  toggleAlignment: {
    tooltip: ds.meta('\\'),
    command: ds.cMod('\\'),
    subsections: ['main-menu'],
    fn: () => st.emit(toggleLayoutFlag('dynamic-alignment'))
  },

  thumbnailSet: {
    tooltip: ds.shift('T'),
    command: 'shift+t',
    subsections: ['main-menu'],
    fn: () => st.emit(dw.toggleFileThumbnailSelected())
  },

  showPixelGrid: {
    tooltip: ds.shift(','),
    command: 'shift+,',
    subsections: ['main-menu'],
    fn: () => st.emit(toggleLayoutFlag('show-pixel-grid'))
  },

  snapPixelGrid: {
    command: ',',
    tooltip: ',',
    subsections: ['main-menu'],
    fn: () => st.emit(toggleLayoutFlag('snap-pixel-grid'))
  },

  exportShapes: {
    tooltip: ds.metaShift('E'),
    command: ds.cMod('shift+e'),
    subsections: ['basics', 'main-menu'],
    fn: () => st.emit(
      de.showWorkspaceExportDialog({ origin: 'workspace:shortcuts' })
    )
  },

  toggleSnapRulerGuide: {
    tooltip: ds.metaShift('G'),
    command: ds.cMod('shift+g'),
    subsections: ['main-menu'],
    fn: () => st.emit(toggleLayoutFlag('snap-ruler-guides'))
  },

  toggleSnapGuides: {
    tooltip: ds.metaShift("'"),
    command: [ds.cMod("shift+'"), ds.cMod('shift+219')],
    showCommand: ds.cMod("shift+'"),
    subsections: ['main-menu'],
    fn: () => st.emit(toggleLayoutFlag('snap-guides'))
  },

  showShortcuts: {
    tooltip: '?',
    command: '?',
    subsections: ['main-menu'],
    fn: () => st.emit(toggleLayoutFlag('shortcuts'))
  },

  // PANELS
  toggleLayers: {
    tooltip: ds.alt('L'),
    command: ds.aMod('l'),
    subsections: ['panels'],
    fn: () => st.emit(dcm.goToWorkspace('layout', 'layers'))
  },

  toggleAssets: {
    tooltip: ds.alt('I'),
    command: ds.aMod('i'),
    subsections: ['panels'],
    fn: () => st.emit(dcm.goToWorkspace('layout', 'assets'))
  },

  toggleHistory: {
    tooltip: ds.metaAlt('H'),
    command: ds.caMod('h'),
    subsections: ['panels'],
    fn: () => emitWhenNoReadonly(dw.toggleLayoutFlag('document-history'))
  },

  toggleColorpalette: {
    tooltip: ds.alt('P'),
    command: ds.aMod('p'),
    subsections: ['panels'],
    fn: () => {
      r.setResizeType('bottom')
      emitWhenNoReadonly(
        dw.removeLayoutFlag('hide-palettes'),
        dw.removeLayoutFlag('textpalette'),
        toggleLayoutFlag('colorpalette')
      )
    }
  },

  toggleTextpalette: {
    tooltip: ds.alt('T'),
    command: ds.aMod('t'),
    subsections: ['panels'],
    fn: () => {
      r.setResizeType('bottom')
      emitWhenNoReadonly(
        dw.removeLayoutFlag('hide-palettes'),
        dw.removeLayoutFlag('colorpalette'),
        toggleLayoutFlag('textpalette')
      )
    }
  },

  hideUi: {
    tooltip: '\\',
    command: '\\',
    subsections: ['panels', 'basics'],
    fn: () => st.emit(toggleLayoutFlag('hide-ui'))
  },

  // ZOOM-WORKSPACE
  increaseZoom: {
    tooltip: '+',
    command: ['+', '='],
    subsections: ['zoom-workspace'],
    fn: () => st.emit(dw.increaseZoom())
  },

  decreaseZoom: {
    tooltip: '-',
    command: ['-', '_'],
    subsections: ['zoom-workspace'],
    fn: () => st.emit(dw.decreaseZoom())
  },

  resetZoom: {
    tooltip: ds.shift('0'),
    command: 'shift+0',
    subsections: ['zoom-workspace'],
    fn: () => st.emit(dw.resetZoom)
  },

  fitAll: {
    tooltip: ds.shift('1'),
    command: 'shift+1',
    subsections: ['zoom-workspace'],
    fn: () => st.emit(dw.zoomToFitAll)
  },

  zoomSelected: {
    tooltip: ds.shift('2'),
    command: ['shift+2', '@', '"'],
    subsections: ['zoom-workspace'],
    fn: () => st.emit(dw.zoomToSelectedShape)
  },

  zoomLenseIncrease: {
    tooltip: 'Z',
    command: 'z',
    subsections: ['zoom-workspace'],
    fn: () => (x: any) => x
  },

  zoomLenseDecrease: {
    tooltip: ds.alt('Z'),
    command: 'alt+z',
    subsections: ['zoom-workspace'],
    fn: () => (x: any) => x
  },

  // NAVIGATION
  openViewer: {
    tooltip: 'G V',
    command: 'g v',
    subsections: ['navigation-workspace'],
    fn: () => st.emit(dcm.goToViewer())
  },

  openInspect: {
    tooltip: 'G I',
    command: 'g i',
    subsections: ['navigation-workspace'],
    fn: () => st.emit(dcm.goToViewer({ section: 'inspect' }))
  },

  openComments: {
    tooltip: 'G C',
    command: 'g c',
    subsections: ['navigation-workspace'],
    fn: () => st.emit(dcm.goToViewer({ section: 'comments' }))
  },

  openDashboard: {
    tooltip: 'G D',
    command: 'g d',
    subsections: ['navigation-workspace'],
    fn: () => st.emit(dcm.goToDashboardRecent())
  },

  selectPrev: {
    tooltip: ds.shift('tab'),
    command: 'shift+tab',
    subsections: ['navigation-workspace'],
    fn: () => st.emit(dw.selectPrevShape())
  },

  selectNext: {
    tooltip: ds.tab,
    command: 'tab',
    subsections: ['navigation-workspace'],
    fn: () => st.emit(dw.selectNextShape())
  },

  selectParentLayer: {
    tooltip: ds.shift(ds.enter),
    command: 'shift+enter',
    subsections: ['navigation-workspace'],
    fn: () => emitWhenNoReadonly(dw.selectParentLayer())
  },

  // SHAPE
  boolUnion: {
    tooltip: ds.meta(ds.alt('U')),
    command: ds.cMod('alt+u'),
    subsections: ['shape'],
    fn: () => emitWhenNoReadonly(dw.createBool('union'))
  },

  boolDifference: {
    tooltip: ds.meta(ds.alt('D')),
    command: ds.cMod('alt+d'),
    subsections: ['shape'],
    fn: () => emitWhenNoReadonly(dw.createBool('difference'))
  },

  boolIntersection: {
    tooltip: ds.meta(ds.alt('I')),
    command: ds.cMod('alt+i'),
    subsections: ['shape'],
    fn: () => emitWhenNoReadonly(dw.createBool('intersection'))
  },

  boolExclude: {
    tooltip: ds.meta(ds.alt('E')),
    command: ds.cMod('alt+e'),
    subsections: ['shape'],
    fn: () => emitWhenNoReadonly(dw.createBool('exclude'))
  },

  // THEME
  toggleTheme: {
    tooltip: ds.alt('M'),
    command: ds.aMod('m'),
    subsections: ['basics'],
    fn: () => st.emit(
      Object.assign({}, du.toggleTheme(), {
        meta: { [ev.evOrigin]: 'workspace:shortcut' }
      })
    )
  },

  // PLUGINS
  plugins: {
    tooltip: ds.meta(ds.alt('P')),
    command: ds.cMod('alt+p'),
    subsections: ['basics'],
    fn: () => {
      const state = st.state
      if (features.activeFeature(state, 'plugins/runtime')) {
        st.emit(
          ptk.event(ev as any, { [ev.evName]: 'open-plugins-manager', [ev.evOrigin]: 'workspace:shortcuts' }),
          modal.show('plugin-management', {})
        )
      }
    }
  }
}

const debugShortcuts: Record<string, ShortcutDef> = {
  // PREVIEW
  previewFrame: {
    tooltip: ds.meta(ds.alt(ds.enter())),
    command: ds.cMod('alt+enter'),
    fn: () => emitWhenNoReadonly(dp.openPreviewSelected())
  }
}

const opacityShortcuts: Record<string, ShortcutDef> = Object.assign({}, ...Array.from({ length: 10 }, (_, n) => ({
  [`opacity-${n}`]: {
    tooltip: String(n),
    command: String(n),
    subsections: ['modify-layers'],
    fn: () => emitWhenNoReadonly(dwly.pressedOpacity(n))
  }
})))

export const shortcuts = Object.assign(
  {},
  baseShortcuts,
  opacityShortcuts,
  dwtxts.shortcuts,
  (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') ? debugShortcuts : {}
)

export function getTooltip(shortcut: string): string | string[] {
  const s = shortcuts[shortcut]
  if (!s) {
    throw new Error(`Shortcut not found: ${shortcut}`)
  }
  return s.tooltip
}
