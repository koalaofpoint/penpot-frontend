// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export const FramePreview: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const zoomRef = useRef<HTMLInputElement>(null)
  const [lastData, setLastData] = useState<any>(null)
  const [zoom, setZoom] = useState(1)

  const handleLoad = useCallback(
    (data: string, width: number, height: number) => {
      setLastData(data)
      const iframeDom = iframeRef.current
      if (iframeDom) {
        iframeDom.width = String(width + 64)
        iframeDom.height = String(height + 64)
        const doc = iframeDom.contentWindow?.document
        if (doc) {
          doc.open()
          doc.write(data)
          doc.close()
        }
      }
    },
    []
  )

  const loadRef = useCallback((iframeDom: HTMLIFrameElement | null) => {
    console.log('load-ref', iframeDom)
    ;(iframeRef as any).current = iframeDom
    if (iframeDom && lastData) {
      const doc = iframeDom.contentWindow?.document
      if (doc) {
        doc.open()
        doc.write(lastData)
        doc.close()
      }
    }
  }, [lastData])

  const changeZoom = useCallback(() => {
    const zoomLevel = d.parseInteger(zoomRef.current?.value ?? '100')
    setZoom(zoomLevel / 100)
  }, [])

  useEffect(() => {
    const handler = (data: string, width: number, height: number) =>
      handleLoad(data, width, height)
    ;(window as any).load = handler
    return () => {
      delete (window as any).load
    }
  }, [handleLoad])

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        overflow: 'auto',
        alignItems: 'center',
      }}
    >
      <input
        id="zoom-input"
        ref={zoomRef}
        type="range"
        min={1}
        max={400}
        defaultValue={100}
        onChange={changeZoom}
        style={{ maxWidth: '500px' }}
      />

      <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
        <iframe
          ref={loadRef}
          frameBorder="0"
          scrolling="no"
          style={{
            transformOrigin: 'top left',
            transform: `scale(${zoom})`,
          }}
        />
      </div>
    </div>
  )
}
