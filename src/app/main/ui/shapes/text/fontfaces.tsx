// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import * as cfh from 'app/common/files/helpers'
import * as fonts from '@main/fonts'
import * as obj from '@util/object'
import { from, mergeMap, reduce, subscribe, dispose } from 'rxjs'
import React, { useCallback, useEffect, useRef, useState } from 'react'

function useFontsCss(fonts: string[]) {
  const fontsCssRef = useRef('')
  const [, setRedraw] = useState(0)

  useEffect(() => {
    const sub = from(fonts)
      .pipe(
        mergeMap(fonts.fetchFontCss),
        reduce((acc: string[], val: string) => [...acc, val], []),
        subscribe({
          next: (result) => {
            const css = result.join('\n')
            if (fontsCssRef.current !== css) {
              fontsCssRef.current = css
              setRedraw((n) => n + 1)
            }
          },
        })
      )
      .add(() => dispose(sub))

    return () => dispose(sub)
  }, [fonts])

  return fontsCssRef.current
}

interface FontfacesStyleHtmlProps {
  fonts: string[]
}

export const FontfacesStyleHtml: React.FC<FontfacesStyleHtmlProps> = React.memo(
  ({ fonts }) => {
    const fontsCss = useFontsCss(fonts)
    return <style>{fontsCss}</style>
  }
)

interface FontfacesStyleRenderProps {
  fonts: string[]
}

export const FontfacesStyleRender: React.FC<FontfacesStyleRenderProps> = React.memo(
  ({ fonts }) => {
    const fontsCss = useFontsCss(fonts)
    return <style>{fontsCss}</style>
  }
)

export function shapeToFonts(shape: any, objects: any): Set<string> {
  let initial: Set<string> = {}
  if (cfh.textShape(shape)) {
    initial = new Set(fonts.getContentFonts(shape.content))
  }

  return cfh.getChildren(objects, shape.id)
    .filter(cfh.textShape)
    .map((s: any) => fonts.getContentFonts(s.content))
    .reduce((acc: Set<string>, val: Set<string>) => new Set([...acc, ...val]), initial)
}

export function shapesToFonts(shapes: any[]): Set<string> {
  return shapes
    .filter(cfh.textShape)
    .map((s: any) => fonts.getContentFonts(s.content))
    .reduce((acc: Set<string>, val: Set<string>) => new Set([...acc, ...val]), new Set())
}

interface FontfacesStyleProps {
  fonts: string[]
}

export const FontfacesStyle: React.FC<FontfacesStyleProps> = React.memo(
  ({ fonts }) => {
    if (!d.notEmpty(fonts)) return null
    return <FontfacesStyleRender fonts={fonts} />
  }
)
