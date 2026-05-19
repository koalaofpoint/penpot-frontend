// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as ex from "app/common/exceptions"
import * as cfh from "app/common/files/helpers"
import * as gpt from "app/common/geom/point"
import * as gsb from "app/common/geom/shapes/bounds"
import * as ctsi from "app/common/types/shape/interactions"
import * as txt from "app/common/types/text"
import * as dcm from "app/main/data/comments"
import * as dv from "app/main/data/viewer"
import * as sc from "app/main/data/viewer/shortcuts"
import * as fonts from "app/main/fonts"
import * as refs from "app/main/refs"
import { store } from "app/main/store"
import * as ctx from "app/main/ui/context"
import { Loader } from "app/main/ui/ds/product/loader"
import * as hooks from "app/main/ui/hooks"
import * as deprecatedIcon from "app/main/ui/icons"
import { ModalContainer } from "app/main/ui/modal"
import {
  CommentsLayer,
  CommentsSidebar,
} from "app/main/ui/viewer/comments"
import * as header from "app/main/ui/viewer/header"
import * as inspect from "app/main/ui/viewer/inspect"
import * as interactions from "app/main/ui/viewer/interactions"
import "app/main/ui/viewer/login"
import "app/main/ui/viewer/share-link"
import { ThumbnailsPanel } from "app/main/ui/viewer/thumbnails"
import * as dom from "app/util/dom"
import * as nw from "app/util/dom/normalize-wheel"
import * as globals from "app/util/globals"
import { tr } from "app/util/i18n"
import * as i18n from "app/util/i18n"
import * as kbd from "app/util/keyboard"
import * as obj from "app/util/object"
import * as wapi from "app/util/webapi"
import * as str from "cuerdas.core"
import * as events from "goog.events"
import * as l from "okulary.core"

const currentAnimationsRef = l.derived(
  l.key("viewer-animations"),
  store.getState()
)

const currentOverlaysRef = l.derived(
  l.key("viewer-overlays"),
  store.getState()
)

function calculateSize(
  objects: any,
  frame: any,
  zoom: number
) {
  const { x, y, width, height } = gsb.getObjectBounds(
    objects,
    frame
  )
  return {
    baseWidth: width,
    baseHeight: height,
    x,
    y,
    width: width * zoom,
    height: height * zoom,
    vbox: dm.fmt("% % % %", 0, 0, width, height),
  }
}

function calculateDelta(
  size: any,
  selrect: any,
  [snapV, snapH]: [string, string],
  zoom: number
) {
  const deltaX =
    snapH === "left"
      ? (selrect as any).x1 - (size as any).x
      : snapH === "right"
      ? (selrect as any).x2 -
        ((size as any).x + (size as any).width / zoom)
      : snapH === "center"
      ? ((selrect as any).width - (size as any).width / zoom) / 2 -
        ((size as any).x - (selrect as any).x1)
      : 0

  const deltaY =
    snapV === "top"
      ? (selrect as any).y1 - (size as any).y
      : snapV === "bottom"
      ? (selrect as any).y2 -
        ((size as any).y + (size as any).height / zoom)
      : snapV === "center"
      ? ((selrect as any).height - (size as any).height / zoom) / 2 -
        ((size as any).y - (selrect as any).y1)
      : 0

  return gpt.point(deltaX * zoom, deltaY * zoom)
}

function calculateWrapper(
  size1: any,
  size2: any,
  zoom: number
) {
  if (!size1) return size2
  if (!size2) return size1

  const width = Math.max(size1.baseWidth, size2.baseWidth)
  const height = Math.max(size1.baseHeight, size2.baseHeight)

  return {
    width: width * zoom,
    height: height * zoom,
    vbox: str.concat("0 0 ", width, " ", height),
  }
}

interface ViewerPaginationProps {
  index: number
  numFrames: number
  leftBar?: boolean
  rightBar?: boolean
  commentSidebar?: boolean
}

const ViewerPagination: React.FC<ViewerPaginationProps> = ({
  index,
  numFrames,
  leftBar,
  rightBar,
  commentSidebar,
}) => {
  const goPrevFrame = useCallback(() => {
    store.emit(dv.selectPrevFrame)
  }, [])

  const goNextFrame = useCallback(() => {
    store.emit(dv.selectNextFrame)
  }, [])

  const goFirstFrame = useCallback(() => {
    store.emit(dv.selectFirstFrame)
  }, [])

  return (
    <>
      {index > 0 && (
        <button
          className={(stl as any).cssCase({
            "viewer-go-prev": true,
            "left-bar": leftBar,
          })}
          onClick={goPrevFrame}
          aria-label={tr("labels.previous")}
        >
          {deprecatedIcon.arrow}
        </button>
      )}
      {index + 1 < numFrames && (
        <button
          className={(stl as any).cssCase({
            "viewer-go-next": true,
            "comment-sidebar": commentSidebar,
            "right-bar": rightBar,
          })}
          onClick={goNextFrame}
          aria-label={tr("labels.next")}
        >
          {deprecatedIcon.arrow}
        </button>
      )}
      <div
        className={(stl as any).cssCase({
          "viewer-bottom": true,
          "left-bar": leftBar,
        })}
      >
        <button onClick={goFirstFrame} className={(stl as any).css("reset-button")}>
          {deprecatedIcon.reload}
        </button>
        <span className={(stl as any).css("counter")}>
          {str.join(" / ", [index + 1, numFrames])}
        </span>
        <span />
      </div>
    </>
  )
}

interface ViewerPaginationAndSidebarProps {
  section: any
  index: number
  users: any[]
  frame: any
  page: any
}

const ViewerPaginationAndSidebar: React.FC<
  ViewerPaginationAndSidebarProps
> = React.memo(({ section, index, users, frame, page }) => {
  const commentsLocal = (store.getState() as any).commentsLocal
  const showSidebar =
    section === "comments" && commentsLocal?.showSidebar

  return (
    <>
      <ViewerPagination
        index={index}
        numFrames={page.frames?.length || 0}
        commentSidebar={showSidebar}
      />

      {showSidebar && (
        <CommentsSidebar profiles={users} frame={frame} page={page} />
      )}
    </>
  )
})

interface ViewerOverlayProps {
  overlay: any
  page: any
  frame: any
  zoom: number
  wrapperSize: any
  interactionsMode: any
}

const ViewerOverlay: React.FC<ViewerOverlayProps> = ({
  overlay,
  page,
  frame,
  zoom,
  wrapperSize,
  interactionsMode,
}) => {
  const closeClickOutside = overlay.closeClickOutside
  const backgroundOverlay = overlay.backgroundOverlay
  const overlayFrame = overlay.frame
  const overlayPosition = overlay.position
  const fixedBase = overlay.fixedSource

  const size = useMemo(
    () => calculateSize(page.objects, overlay.frame, zoom),
    [page, overlay, zoom]
  )

  const delta = useMemo(
    () =>
      calculateDelta(size, overlayFrame.selrect, overlay.snapTo, zoom),
    [size, overlayFrame, overlay, zoom]
  )

  const onClick = useCallback(
    (_: any) => {
      if (closeClickOutside) {
        if (overlay.animation) {
          store.emit(
            dv.closeOverlay(
              overlay.id,
              ctsi.invertDirection(overlay.animation)
            )
          )
        } else {
          store.emit(dv.closeOverlay(overlay.id))
        }
      }
    },
    [overlay, closeClickOutside]
  )

  return (
    <>
      {(closeClickOutside || backgroundOverlay) && (
        <div
          className={(stl as any).cssCase({
            "viewer-overlay-background": true,
            visible: backgroundOverlay,
          })}
          style={{
            width: wrapperSize.width,
            height: wrapperSize.height,
            position: "absolute",
            left: 0,
            top: 0,
          }}
          onClick={onClick}
        />
      )}

      {fixedBase ? (
        <div
          className={(stl as any).css("viewport-container-wrapper")}
          style={{
            position: "absolute",
            left: overlayPosition.x * zoom,
            top: overlayPosition.y * zoom,
            width: size.width,
            height: size.height,
            zIndex: 2,
          }}
        >
          <div
            id={dm.str("overlay-", overlayFrame.id)}
            className={(stl as any).css("viewer-overlay", "viewport-container")}
            style={{
              width: size.width,
              height: size.height,
              position: "fixed",
            }}
          >
<interactions.Viewport
              frame={overlayFrame}
              baseFrame={frame}
              frameOffset={overlayPosition}
              size={size}
              delta={delta}
              page={page}
              interactionsMode={interactionsMode}
            />
          </div>
        </div>
      ) : (
        <div
          className={(stl as any).css("viewer-overlay", "viewport-container")}
          id={dm.str("overlay-", overlayFrame.id)}
          style={{
            width: size.width,
            height: size.height,
            left: overlayPosition.x * zoom,
            top: overlayPosition.y * zoom,
          }}
        >
          <interactions.Viewport
            frame={overlayFrame}
            baseFrame={frame}
            frameOffset={overlayPosition}
            size={size}
            delta={delta}
            page={page}
            interactionsMode={interactionsMode}
          />
        </div>
      )}
    </>
  )
}

interface ViewerWrapperProps {
  wrapperSize: any
  origFrame: any
  origViewportRef: React.RefObject<HTMLDivElement | null>
  origSize: any
  page: any
  file: any
  users: any[]
  currentViewportRef: React.RefObject<HTMLDivElement | null>
  size: any
  frame: any
  interactionsMode: any
  overlays: any[]
  zoom: number
  section: any
  index: number
}

const ViewerWrapper: React.FC<ViewerWrapperProps> = ({
  wrapperSize,
  origFrame,
  origViewportRef,
  origSize,
  page,
  file,
  users,
  currentViewportRef,
  size,
  frame,
  interactionsMode,
  overlays,
  zoom,
  section,
  index,
}) => {
  return (
    <>
      <ViewerPaginationAndSidebar
        section={section}
        index={index}
        page={page}
        users={users}
        frame={frame}
        interactionsMode={interactionsMode}
      />

      <div
        className={(stl as any).css("viewer-wrapper")}
        style={{
          width: wrapperSize.width,
          height: wrapperSize.height,
        }}
      >
        <div className={(stl as any).css("viewer-clipper")}>
          {origFrame && (
            <div
              ref={origViewportRef}
              className={(stl as any).css("viewport-container")}
              style={{
                width: origSize.width,
                height: origSize.height,
                position: "relative",
              }}
            >
  <interactions.Viewport
                frame={origFrame}
                baseFrame={origFrame}
                frameOffset={gpt.point(0, 0)}
                size={origSize}
                page={page}
                users={users}
                interactionsMode={interactionsMode}
              />
            </div>
          )}

          <div
            ref={currentViewportRef}
            className={(stl as any).css("viewport-container")}
            style={{
              width: size.width,
              height: size.height,
              position: "relative",
            }}
          >
<interactions.Viewport
              frame={frame}
              baseFrame={frame}
              frameOffset={gpt.point(0, 0)}
              size={size}
              page={page}
              interactionsMode={interactionsMode}
            />

            {overlays.map((overlay) => (
              <ViewerOverlay
                key={overlay.id}
                overlay={overlay}
                page={page}
                frame={frame}
                zoom={zoom}
                wrapperSize={wrapperSize}
                interactionsMode={interactionsMode}
              />
            ))}
          </div>
        </div>

        {section === "comments" && (
          <CommentsLayer file={file} users={users} frame={frame} page={page} zoom={zoom} />
        )}
      </div>
    </>
  )
}

interface ViewerContentProps {
  data: any
  pageId?: string
  shareId?: string
  section: any
  index: number
  interactionsMode: any
  share: any
}

const ViewerContent: React.FC<ViewerContentProps> = ({
  data,
  pageId,
  shareId,
  section,
  index,
  interactionsMode,
  share,
}) => {
  const { file, users, project, permissions } = data

  const allowed =
    section === "interactions" ||
    (section === "comments" &&
      (permissions.canEdit ||
        (permissions.isLogged === true &&
          permissions.whoComment === "all"))) ||
    (section === "inspect" &&
      (permissions.canEdit ||
        (permissions.isLogged === true &&
          permissions.whoInspect === "all")))

  const local = (store.getState() as any).viewerLocal

  const navScroll = local?.navScroll
  const origViewportRef = useRef<HTMLDivElement>(null)
  const currentViewportRef = useRef<HTMLDivElement>(null)
  const viewerSectionRef = useRef<HTMLDivElement>(null)

  const currentAnimations = (store.getState() as any).viewerAnimations

  const resolvedPageId =
    pageId || (file.data.pages as string[])?.[0]

  const page = useMemo(
    () => d.getIn(data, ["pages", resolvedPageId]),
    [data, resolvedPageId]
  )

  const textShapes = hooks.useEqualMemo(
    (page?.objects as any[])
      ?.filter((o) => cfh.textShape?(o))
  )

  const zoom = local?.zoom
  const zoomType = local?.zoomType

  const frames = page?.frames
  const frame = frames?.[index]

  const fullscreen = (store.getState() as any).fullscreen
  const overlays = (store.getState() as any).viewerOverlays

  const origFrame = useMemo(() => {
    const animations = currentAnimations || {}
    const animationWithOrigin = d.seek(
      "origFrameId",
      Object.values(animations)
    )
    if (animationWithOrigin) {
      return d.seek(
        (f: any) => f.id === animationWithOrigin.origFrameId,
        frames
      )
    }
    return null
  }, [currentAnimations, frames])

  const size = useMemo(
    () => (frame ? calculateSize(page.objects, frame, zoom) : null),
    [frame, page, zoom]
  )

  const origSize = useMemo(
    () => (origFrame ? calculateSize(page.objects, origFrame, zoom) : null),
    [origFrame, page, zoom]
  )

  const wrapperSize = useMemo(
    () => calculateWrapper(size, origSize, zoom),
    [size, origSize, zoom]
  )

  const clickOnScreen = useCallback(
    (event: React.MouseEvent) => {
      const origin = dom.getTarget(event)
      const overSection = dom.getData(origin, "viewer-section")
      const layout = dom.getElement("viewer-layout")
      const hasForce = dom.getData(layout, "force-visible")

      if (overSection) {
        if (hasForce === "true") {
          dom.setData!(layout, "force-visible", "false")
        } else {
          dom.setData!(layout, "force-visible", "true")
        }
      }
    },
    []
  )

  const onClick = useCallback(
    (_: any) => {
      if (section === "comments") {
        store.emit(dcm.closeThread)
      }
    },
    [section]
  )

  const setUpNewSize = useCallback((_: any) => {
    const viewerSection = dom.getElement("viewer-section")
    const size = dom.getClientSize(viewerSection)
    store.emit(dv.setViewportSize({ size }))
  }, [])

  const onWheel = useCallback(
    (event: React.WheelEvent) => {
      const e = (event as any).getBrowserEvent?.() || event
      const wrapper = dom.getElement("inspect-svg-wrapper")
      const sectionEl = dom.getElement("inspect-svg-container")
      const target = e.target

      if (
        dom.child!(target, wrapper) ||
        dom.id?(target, "inspect-svg-container")
      ) {
        const normEvent = nw.normalizeWheel(e)
        const mod = kbd.mod!(event as any)
        const shift = kbd.shift!(event as any)
        const delta = normEvent.pixelY
        const scrollPos = shift
          ? dom.getHScrollPos(sectionEl)
          : dom.getScrollPos(sectionEl)
        const newScrollPos = scrollPos + delta

        if (!mod) {
          dom.preventDefault(event)
          dom.stopPropagation(event)
          if (shift) {
            dom.setHScrollPos!(sectionEl, newScrollPos)
          } else {
            dom.setScrollPos!(sectionEl, newScrollPos)
          }
        }
      }
    },
    []
  )

  const onThumbnailsClose = useCallback(() => {
    store.emit(dv.closeThumbnailsPanel)
  }, [])

  const onExitFullscreen = useCallback(() => {
    if (!dom.fullscreen?.()) {
      store.emit(dv.exitFullscreen)
    }
  }, [])

  hooks.useShortcuts("viewer", sc.shortcuts)

  if (!page) {
    ex.raise({ type: "not-found" })
  }

  useEffect(() => {
    if (!allowed) {
      store.emit(dv.goToSection("interactions"))
    }
  }, [allowed])

  useEffect(() => {
    const name = file.name
    dom.setHtmlTitle(str.concat("\u25b6 ", tr("title.viewer", name)))
  }, [file.name])

  useEffect(() => {
    const eventListeners: any[] = [
      events.listen(globals.window, "click", onClick),
      events.listen(
        viewerSectionRef.current,
        "wheel",
        onWheel,
        { passive: false }
      ),
    ]

    dom.fullscreenEvents.forEach((event) => {
      globals.document.addEventListener(event, onExitFullscreen, false)
    })

    return () => {
      eventListeners.forEach((key) => events.unlistenByKey(key))

      dom.fullscreenEvents.forEach((event) => {
        globals.document.removeEventListener(event, onExitFullscreen, false)
      })
    }
  }, [onClick, onWheel, onExitFullscreen])

  useEffect(() => {
    setUpNewSize()
    window.addEventListener("resize", setUpNewSize)
    return () => window.removeEventListener("resize", setUpNewSize)
  }, [setUpNewSize])

  useEffect(() => {
    if (typeof navScroll === "number") {
      const viewerSection = dom.getElement("viewer-section")
      store.emit(dv.resetNavScroll)
      dom.setScrollPos!(viewerSection, navScroll)
    }
  }, [navScroll])

  useLayoutEffect(() => {
    const wrapper = dom.getElement("viewer-layout")
    const fullscreenDom = dom.fullscreen?.()

    if (fullscreen !== fullscreenDom) {
      if (fullscreen) {
        const layout = dom.getElement("viewer-layout")
        dom.setData!(layout, "force-visible", "false")
        wapi.requestFullscreen(wrapper)
      } else {
        wapi.exitFullscreen()
      }
    }
  }, [fullscreen])

  useEffect(() => {
    if (zoomType) {
      switch (zoomType) {
        case "fit":
          store.emit(dv.zoomToFit)
          break
        case "fill":
          store.emit(dv.zoomToFill)
          break
      }
    }
  }, [zoomType])

  useEffect(() => {
    if (zoomType) {
      switch (zoomType) {
        case "fit":
          store.emit(dv.zoomToFit)
          break
        case "fill":
          store.emit(dv.zoomToFill)
          break
      }
    }

    const navAnimation = d.seek(
      (a: any) => a.kind === "go-to-frame",
      Object.values(currentAnimations || {})
    )

    if (navAnimation) {
      const origViewport = origViewportRef.current
      const currentViewport = currentViewportRef.current

      interactions.animateGoToFrame(
        navAnimation.animation,
        currentViewport,
        origViewport,
        size,
        origSize,
        wrapperSize
      )
    }
  }, [index, currentAnimations, zoomType, size, origSize, wrapperSize])

  useEffect(() => {
    if (currentAnimations) {
      Object.entries(currentAnimations).forEach(
        ([overlayFrameId, animationVals]: [string, any]) => {
          const overlayViewport = dom.getElement(
            str.concat("overlay-", (animationVals as any).overlayId)
          )
          const overlay = d.seek(
            (o: any) => o.frame.id === overlayFrameId,
            overlays
          )
          const overlaySize = calculateSize(
            page.objects,
            overlay.frame,
            zoom
          )
          const overlayPosition = {
            x: overlay.position.x * zoom,
            y: overlay.position.y * zoom,
          }
          const origFrame = (animationVals as any).origFrameId
            ? d.seek(
                (f: any) =>
                  f.id === (animationVals as any).origFrameId,
                frames
              )
            : null
          const frameSize = calculateSize(page.objects, frame, zoom)
          const origFrameSize = origFrame
            ? calculateSize(page.objects, origFrame, zoom)
            : null
          const wrapSize = calculateWrapper(
            frameSize,
            origFrameSize,
            zoom
          )

          switch ((animationVals as any).kind) {
            case "open-overlay":
              interactions.animateOpenOverlay(
                (animationVals as any).animation,
                overlayViewport,
                wrapSize,
                overlaySize,
                overlayPosition
              )
              break
            case "close-overlay":
              interactions.animateCloseOverlay(
                (animationVals as any).animation,
                overlayViewport,
                wrapSize,
                overlaySize,
                overlayPosition,
                overlay.frame.id
              )
              break
          }
        }
      )
    }
  }, [currentAnimations, page, frames, overlays, zoom])

  useEffect(() => {
    const textNodes = textShapes?.flatMap((shape: any) =>
      txt.nodeSeq(txt.isTextNode, shape.content)
    )
    const fontIds = [...new Set(textNodes?.map((n: any) => n.fontId).filter(Boolean))]
    fontIds.forEach((fontId) => fonts.ensureLoaded!(fontId))
  }, [textShapes])

  return (
    <div
      id="viewer-layout"
      className={(stl as any).cssCase({
        "force-visible": local?.showThumbnails,
        "viewer-layout": section !== "inspect",
        "inspect-layout": section === "inspect",
      })}
      data-fullscreen={fullscreen}
      data-force-visible={local?.showThumbnails}
    >
      <div className={(stl as any).css("viewer-content")}>
        <button
          onClick={onThumbnailsClose}
          className={(stl as any).cssCase({
            "thumbnails-close": true,
            invisible: !local?.showThumbnails,
          })}
        />

        <ThumbnailsPanel
          frames={frames}
          show={local?.showThumbnails || false}
          page={page}
          index={index}
          thumbnailData={file.thumbnails}
        />

        <section
          ref={viewerSectionRef}
          id="viewer-section"
          data-viewer-section
          className={(stl as any).cssCase({
            "viewer-section": true,
            fullscreen,
          })}
          onClick={clickOnScreen}
        >
          {(!frames || frames.length === 0) && (
            <section className={(stl as any).css("empty-state")}>
              <span>{tr("viewer.empty-state")}</span>
            </section>
          )}

          {frame === undefined && index !== undefined && (
            <section className={(stl as any).css("empty-state")}>
              <span>{tr("viewer.frame-not-found")}</span>
            </section>
          )}

          {frame && (
            section === "inspect" ? (
              <inspect.Viewport
                frame={frame}
                page={page}
                file={file}
                section={section}
                local={local}
                size={size}
                index={index}
                viewerPagination={ViewerPagination}
                interactionsMode={interactionsMode}
                shareId={shareId}
              />
            ) : (
              <ctx.CurrentZoom.Provider value={zoom}>
                <ViewerWrapper
                  wrapperSize={wrapperSize}
                  origFrame={origFrame}
                  origViewportRef={origViewportRef}
                  origSize={origSize}
                  page={page}
                  file={file}
                  users={users}
                  currentViewportRef={currentViewportRef}
                  size={size}
                  frame={frame}
                  interactionsMode={interactionsMode}
                  overlays={overlays}
                  zoom={zoom}
                  section={section}
                  index={index}
                />
              </ctx.CurrentZoom.Provider>
            )
          )}
        </section>
      </div>

      <header.Header
        project={project}
        index={index}
        file={file}
        page={page}
        frame={frame}
        permissions={permissions}
        zoom={zoom}
        section={section}
        shownThumbnails={local?.showThumbnails}
        interactionsMode={interactionsMode}
        share={share}
      />
    </div>
  )
}

interface ViewerProps {
  fileId?: string
  shareId?: string
  pageId?: string
}

const Viewer: React.FC<ViewerProps> = ({ fileId, shareId, pageId }) => {
  useEffect(() => {
    const params = { fileId, pageId, shareId }
    store.emit(dv.initialize(params))
    return () => {
      store.emit(dv.finalize(params))
    }
  }, [fileId, pageId, shareId])

  const data = (store.getState() as any).viewerData

  if (data) {
    const props = obj.merge(
      { fileId, shareId, pageId },
      { data, key: dm.str(fileId) }
    )
    return (
      <>
        <ModalContainer />
        <ViewerContent
          {...props}
          fileId={fileId}
          shareId={shareId}
          pageId={pageId}
        />
      </>
    )
  }

  return <Loader title={tr("labels.loading")} overlay />
}

export const ViewerPage: React.FC<ViewerProps> = (props) => {
  return <Viewer {...props} />
}
