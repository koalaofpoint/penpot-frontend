// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { iconXref } from 'app/main/ui/ds/foundations/assets/icon'
import * as DRP from 'app/main/data/workspace/path'
import * as SC from 'app/main/data/workspace/path/shortcuts'
import { Store } from 'app/main/store'
import * as ICONS from 'app/main/ui/icons'
import { tr } from 'app/util/i18n'
import * as MF from 'rumext.v2'
import React from 'react'

const pentoolIcon = iconXref(ICONS.pentool, 'pentool-icon', 'pathbar-icon')
const moveIcon = iconXref(ICONS.move, 'move-icon', 'pathbar-icon')
const addIcon = iconXref(ICONS.add, 'add-icon', 'pathbar-icon')
const removeIcon = iconXref(ICONS.remove, 'remove', 'pathbar-icon')
const mergeNodesIcon = iconXref(ICONS.mergeNodes, 'merge-nodes-icon', 'pathbar-icon')
const joinNodesIcon = iconXref(ICONS.joinNodes, 'join-nodes-icon', 'pathbar-icon')
const separateNodesIcon = iconXref(ICONS.separateNodes, 'separate-nodes-icon', 'pathbar-icon')
const toCornerIcon = iconXref(ICONS.toCorner, 'to-corner-icon', 'pathbar-icon')
const toCurveIcon = iconXref(ICONS.toCurve, 'to-curve-icon', 'pathbar-icon')
const snapNodesIcon = iconXref(ICONS.snapNodes, 'snap-nodes-icon', 'pathbar-icon')

function checkEnabled(content: any, selectedPoints: any[]) {
  if (!content) return null

  const { getSegmentsWithPoints } = require('app/common/types/path/segment')
  const segments = getSegmentsWithPoints(content, selectedPoints)
  const numSegments = segments.length
  const numPoints = selectedPoints.length
  const pointsSelected = selectedPoints.length > 0
  const segmentsSelected = segments.length > 0
  const maxSegments = (numPoints * (numPoints - 1)) / 2
  const isCurve = selectedPoints.some((p: any) => {
    const { isCurve } = require('app/common/types/path/segment')
    return isCurve(content, p)
  })

  return {
    makeCorner: pointsSelected && isCurve,
    makeCurve: pointsSelected && !isCurve,
    addNode: segmentsSelected,
    removeNode: pointsSelected,
    mergeNodes: segmentsSelected,
    joinNodes: pointsSelected && numPoints >= 2 && numSegments < maxSegments,
    separateNodes: segmentsSelected,
  }
}

interface PathActionsProps {
  shape: any
  state: any
}

export const PathActions: React.FC<PathActionsProps> = ({ shape, state }) => {
  const { editMode, selectedPoints, snapToggled } = state
  const content = shape.content

  const enabledButtons = React.useMemo(() => {
    return checkEnabled(content, selectedPoints)
  }, [content, selectedPoints])

  const onSelectDrawMode = React.useCallback(() => {
    Store.emit(DRP.changeEditMode('draw'))
  }, [])

  const onSelectEditMode = React.useCallback(() => {
    Store.emit(DRP.changeEditMode('move'))
  }, [])

  const onAddNode = React.useCallback(() => {
    if (enabledButtons?.addNode) {
      Store.emit(DRP.addNode())
    }
  }, [enabledButtons])

  const onRemoveNode = React.useCallback(() => {
    if (enabledButtons?.removeNode) {
      Store.emit(DRP.removeNode())
    }
  }, [enabledButtons])

  const onMergeNodes = React.useCallback(() => {
    if (enabledButtons?.mergeNodes) {
      Store.emit(DRP.mergeNodes())
    }
  }, [enabledButtons])

  const onJoinNodes = React.useCallback(() => {
    if (enabledButtons?.joinNodes) {
      Store.emit(DRP.joinNodes())
    }
  }, [enabledButtons])

  const onSeparateNodes = React.useCallback(() => {
    if (enabledButtons?.separateNodes) {
      Store.emit(DRP.separateNodes())
    }
  }, [enabledButtons])

  const onMakeCorner = React.useCallback(() => {
    if (enabledButtons?.makeCorner) {
      Store.emit(DRP.makeCorner())
    }
  }, [enabledButtons])

  const onMakeCurve = React.useCallback(() => {
    if (enabledButtons?.makeCurve) {
      Store.emit(DRP.makeCurve())
    }
  }, [enabledButtons])

  const onToggleSnap = React.useCallback(() => {
    Store.emit(DRP.toggleSnap())
  }, [])

  return (
    <div className='sub-actions' data-dont-clear-path='true'>
      <div className='sub-actions-group'>
        <button
          className={editMode === 'draw' ? 'is-toggled' : ''}
          title={tr('workspace.path.actions.draw-nodes', SC.getTooltip('draw-nodes'))}
          onClick={onSelectDrawMode}
        >
          {pentoolIcon}
        </button>

        <button
          className={editMode === 'move' ? 'is-toggled' : ''}
          title={tr('workspace.path.actions.move-nodes', SC.getTooltip('move-nodes'))}
          onClick={onSelectEditMode}
        >
          {moveIcon}
        </button>
      </div>

      <div className='sub-actions-group'>
        <button
          disabled={!enabledButtons?.addNode}
          title={tr('workspace.path.actions.add-node', SC.getTooltip('add-node'))}
          onClick={onAddNode}
        >
          {addIcon}
        </button>

        <button
          disabled={!enabledButtons?.removeNode}
          title={tr('workspace.path.actions.delete-node', SC.getTooltip('delete-node'))}
          onClick={onRemoveNode}
        >
          {removeIcon}
        </button>
      </div>

      <div className='sub-actions-group'>
        <button
          disabled={!enabledButtons?.mergeNodes}
          title={tr('workspace.path.actions.merge-nodes', SC.getTooltip('merge-nodes'))}
          onClick={onMergeNodes}
        >
          {mergeNodesIcon}
        </button>

        <button
          disabled={!enabledButtons?.joinNodes}
          title={tr('workspace.path.actions.join-nodes', SC.getTooltip('join-nodes'))}
          onClick={onJoinNodes}
        >
          {joinNodesIcon}
        </button>

        <button
          disabled={!enabledButtons?.separateNodes}
          title={tr('workspace.path.actions.separate-nodes', SC.getTooltip('separate-nodes'))}
          onClick={onSeparateNodes}
        >
          {separateNodesIcon}
        </button>
      </div>

      <div className='sub-actions-group'>
        <button
          disabled={!enabledButtons?.makeCorner}
          title={tr('workspace.path.actions.make-corner', SC.getTooltip('make-corner'))}
          onClick={onMakeCorner}
        >
          {toCornerIcon}
        </button>

        <button
          disabled={!enabledButtons?.makeCurve}
          title={tr('workspace.path.actions.make-curve', SC.getTooltip('make-curve'))}
          onClick={onMakeCurve}
        >
          {toCurveIcon}
        </button>
      </div>

      <div className='sub-actions-group'>
        <button
          className={snapToggled ? 'is-toggled' : ''}
          title={tr('workspace.path.actions.snap-nodes', SC.getTooltip('snap-nodes'))}
          onClick={onToggleSnap}
        >
          {snapNodesIcon}
        </button>
      </div>
    </div>
  )
}
