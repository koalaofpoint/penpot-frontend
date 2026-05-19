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
  useContext,
  createContext,
} from "react"
import * as d from "app/common/data"
import * as dm from "app/common/data/macros"
import * as cfh from "app/common/files/helpers"
import * as gpt from "app/common/geom/point"
import * as mth from "app/common/math"
import * as ct from "app/common/time"
import * as uuid from "app/common/uuid"
import * as cfg from "app/config"
import * as dcm from "app/main/data/comments"
import * as modal from "app/main/data/modal"
import * as dwcm from "app/main/data/workspace/comments"
import * as dwv from "app/main/data/workspace/viewport"
import * as dwz from "app/main/data/workspace/zoom"
import * as refs from "app/main/refs"
import { store } from "app/main/store"
import { Dropdown } from "app/main/ui/components/dropdown"
import { Button } from "app/main/ui/ds/buttons/button"
import { IconButton } from "app/main/ui/ds/buttons/icon-button"
import * as icons from "app/main/ui/ds/foundations/assets/icon"
import * as h from "app/main/ui/hooks"
import * as deprecatedIcon from "app/main/ui/icons"
import * as dom from "app/util/dom"
import { tr } from "app/util/i18n"
import * as i18n from "app/util/i18n"
import * as kbd from "app/util/keyboard"
import * as obj from "app/util/object"
import * as wapi from "app/util/webapi"
import * as rx from "beicon.v2/core"
import { floor } from "clojure.math"
import * as str from "cuerdas.core"
import * as l from "okulary.core"

const refCommentsLocalOptions = l.derived(
  l.key("options"),
  refs.commentsLocal
)

export const mentionsContext = createContext<any>(null)

const rMentionsSplit = /@\[[^\]]*\]\([^\)]*\)/g
const rMentions = /@\[([^\]]*)\]\(([^\)]*)\)/
const zeroWidthSpace = "\u200B"

function parseComment(comment: string): Array<any> {
  const texts = str.split(comment, rMentionsSplit).map((t) => ({
    type: "text",
    content: t,
  }))

  const mentions = (reSeq(rMentions, comment) as any[]).map(([, user, id]) => ({
    type: "mention",
    content: user,
    data: { id },
  }))

  return d.interleaveAll(texts, mentions)
}

function reSeq(regex: RegExp, str: string): RegExpExecArray[] {
  const result: RegExpExecArray[] = []
  let match
  while ((match = regex.exec(str)) !== null) {
    result.push(match as any)
  }
  return result
}

function parseNodes(node: HTMLElement): string {
  return Array.from(dom.getChildren(node))
    .map((child) => {
      if (
        child instanceof HTMLElement &&
        dom.getData(child, "user-id")
      ) {
        return str.ffmt("@[%](%)", child.textContent || "", dom.getData(child, "user-id"))
      }
      return child.textContent || ""
    })
    .join("")
}

function createTextNode(text = ""): HTMLSpanElement {
  const span = dom.createElement("span") as HTMLSpanElement
  dom.setData(span, "type", "text")
  dom.setHtml(span, text || zeroWidthSpace)
  return span
}

function createMentionNode(id: string, fullname: string): HTMLSpanElement {
  const span = dom.createElement("span") as HTMLSpanElement
  dom.setData(span, "type", "mention")
  dom.setData(span, "user-id", dm.str(id))
  dom.setData(span, "fullname", fullname)
  obj.set!(span, "textContent", fullname)
  return span
}

function currentTextNodeInternal(
  node: HTMLElement,
  anchorNode: Node
): HTMLSpanElement | null {
  if (!node.contains(anchorNode)) return null

  const spanNode =
    anchorNode instanceof Text
      ? dom.getParent(anchorNode as Node)
      : anchorNode

  const container = dom.getParent(spanNode as Node)
  if (node === container) return spanNode as HTMLSpanElement
  return null
}

function currentTextNode(
  node: HTMLElement
): [HTMLSpanElement, number] | null {
  const selection = wapi.getSelection()
  if (!selection) return null

  const range = wapi.getRange(selection, 0)
  const anchorNode = wapi.rangeStartContainer(range)
  const offset = wapi.rangeStartOffset(range)
  const spanNode = currentTextNodeInternal(node, anchorNode)

  if (spanNode) return [spanNode, offset]
  return null
}

function absoluteOffset(
  node: HTMLElement,
  child: Node,
  offset: number
): number | null {
  const children = Array.from(dom.getChildren(node))
  let acc = 0
  for (const head of children) {
    if (head === child) {
      return acc + offset
    }
    acc += head.textContent?.length || 0
  }
  return null
}

function getPrevNode(parent: HTMLElement, node: Node): Node | null {
  const withPrev = d.withPrev(Array.from(dom.getChildren(parent)))
  const found = withPrev.find(([it]) => it === node)
  return found ? found[1] : null
}

function blankContent(content: string): boolean {
  const trimmed = str.trim(content)
  return (
    str.blank?(trimmed) ||
    str.empty?(trimmed) ||
    (trimmed.length === 1 && trimmed[0] === zeroWidthSpace)
  )
}

const CommentContent: React.FC<{ content: string }> = React.memo(
  ({ content }) => {
    const commentElements = useMemo(
      () => parseComment(content),
      [content]
    )

    return (
      <>
        {commentElements.map(({ type, content }: any, idx: number) => (
          <span
            key={idx}
            className={(stl as any).cssCase({
              "comment-text": type === "text",
              "comment-mention": type === "mention",
            })}
          >
            {content}
          </span>
        ))}
      </>
    )
  }
)

interface CommentInputProps {
  value?: string
  placeholder?: string
  autofocus?: boolean
  onFocus?: (event: React.FocusEvent) => void
  onBlur?: (event: React.FocusEvent) => void
  onChange?: (value: string) => void
  onEsc?: (event: React.KeyboardEvent) => void
  onCtrlEnter?: () => void
}

const CommentInput: React.FC<CommentInputProps> = ({
  value,
  placeholder,
  autofocus,
  onFocus,
  onBlur,
  onChange,
  onEsc,
  onCtrlEnter,
}) => {
  const [internalValue, setInternalValue] = useState(d.nilm(value, ""))
  const prevValue = h.usePrevious(internalValue)

  const localRef = useRef<HTMLElement>(null)
  const mentionsS = useContext(mentionsContext)
  const curMention = useRef<string | null>(null)
  const prevSelectionRef = useRef<[HTMLSpanElement, number] | null>(null)

  const initInput = useCallback(
    (node: HTMLElement | null) => {
      if (localRef.current !== node) {
        (localRef as any).current = node
      }
      if (node) {
        Array.from(dom.getChildren(node)).forEach(
          ({ type, content, data }: any) => {
            switch (type) {
              case "text":
                dom.appendChild!(node, createTextNode(content))
                break
              case "mention":
                dom.appendChild!(node, createMentionNode(data.id, content))
                break
            }
          }
        )
      }
    },
    []
  )

  const handleInput = useCallback(() => {
    const node = localRef.current
    if (!node) return

    const children = dom.getChildren(node)
    children.forEach((childNode: any) => {
      if ((childNode as HTMLElement).tagName !== "SPAN") {
        childNode.remove()
      }

      if (
        dom.getData(childNode, "type") === "text" &&
        dom.getText(childNode).length === 0
      ) {
        dom.setHtml(childNode, zeroWidthSpace)
      }

      if (
        dom.getData(childNode, "type") === "mention" &&
        dom.getData(childNode, "fullname") !== dom.getText(childNode)
      ) {
        childNode.remove()
      }
    })

    if ((children as any).length === 0) {
      dom.appendChild!(node, createTextNode())
    }

    const newInput = parseNodes(node)
    if (onChange) {
      onChange(newInput)
    }
  }, [onChange])

  const handleSelect = useCallback(() => {
    const node = localRef.current
    if (!node) return

    const selection = wapi.getSelection()
    if (!selection) return

    const range = wapi.getRange(selection, 0)
    const anchorNode = wapi.rangeStartContainer(range)
    const offset = wapi.rangeStartOffset(range)

    if (node === anchorNode && range.collapsed) {
      wapi.setCursorAfter!(anchorNode)
    }

    const spanNode = currentTextNodeInternal(node, anchorNode)
    if (!spanNode) return

    const [prevSpan, prevOffset] = prevSelectionRef.current || ([[], 0] as any)

    const nodeText = dom.getText(spanNode).substring(0, offset)
    const currentAtSymbol = str.lastIndexOf(
      nodeText.substring(0, offset),
      "@"
    )
    const mentionText = nodeText.substring(currentAtSymbol)
    const atSymbolInsideWord =
      currentAtSymbol > 0 &&
      str.word!(nodeText.charAt(currentAtSymbol - 1))

    prevSelectionRef.current = [spanNode, offset]

    if (dom.getData(spanNode, "type") === "mention") {
      const fromOffset = absoluteOffset(node, prevSpan, prevOffset)
      const toOffset = absoluteOffset(node, spanNode, offset)

      const allNodes = Array.from(dom.seqNodes!(node))
      const withPrevNext = d.withPrevNext(allNodes)
      const found = withPrevNext.find(([elem]) => elem === spanNode)
      if (found) {
        const [, prev, next] = found
        if ((fromOffset || 0) > (toOffset || 0)) {
          wapi.setCursorAfter!(prev)
        } else {
          wapi.setCursorBefore!(next)
        }
      }
    }

    if (
      !atSymbolInsideWord &&
      new RegExp("@\\w*").test(mentionText)
    ) {
      curMention.current = mentionText
      rx.push!(mentionsS, { type: "display-mentions" })
      const mention = mentionText.substring(1)
      if (d.notEmpty!(mention)) {
        rx.push!(mentionsS, {
          type: "filter-mentions",
          data: mention,
        })
      }
    } else {
      curMention.current = null
      rx.push!(mentionsS, { type: "hide-mentions" })
    }
  }, [mentionsS])

  const handleFocus = useCallback(
    (event: React.FocusEvent) => {
      dom.preventDefault(event)
      if (localRef.current) {
        dom.setCssProperty!(localRef.current, "--placeholder", "")
      }
      if (onFocus) onFocus(event)
    },
    [onFocus]
  )

  const handleBlur = useCallback(
    (event: React.FocusEvent) => {
      if (!internalValue && localRef.current) {
        dom.setCssProperty!(
          localRef.current,
          "--placeholder",
          dm.str('"', placeholder, '"')
        )
      }
      if (onBlur) onBlur(event)
    },
    [internalValue, placeholder, onBlur]
  )

  const handleInsertMention = useCallback(
    (data: any) => {
      const node = localRef.current
      if (!node) return

      const textNodeInfo = currentTextNode(node)
      if (!textNodeInfo) return

      const [spanNode, offset] = textNodeInfo
      const nodeText = dom.getText(spanNode)
      const currentAtSymbol =
        str.lastIndexOf(nodeText.substring(0, offset), "@") ||
        absoluteOffset(node, spanNode, offset) ||
        0

      const mention = new RegExp("@\\w*").exec(
        nodeText.substring(currentAtSymbol)
      )?.[0] || ""

      const prefix = nodeText.substring(0, currentAtSymbol)
      const suffix = nodeText.substring(
        currentAtSymbol + mention.length
      )

      const mentionSpan = createMentionNode(
        data.user.id,
        data.user.fullname
      )
      const afterSpan = createTextNode(dm.str(" ", suffix))
      const sel = wapi.getSelection()

      dom.setHtml(spanNode, prefix || zeroWidthSpace)
      dom.insertAfter!(node, spanNode, mentionSpan)
      dom.insertAfter!(node, mentionSpan, afterSpan)
      wapi.setCursorAfter!(afterSpan)
      wapi.collapseEnd!(sel)

      if (onChange) {
        onChange(parseNodes(node))
      }
    },
    [onChange]
  )

  const handleInsertAtSymbol = useCallback(() => {
    const node = localRef.current
    if (!node) return

    const textNodeInfo = currentTextNode(node)
    if (!textNodeInfo) return

    const [spanNode] = textNodeInfo
    const nodeText = dom.getText(spanNode)
    const atSymbol =
      blankContent(nodeText) ? "@" : " @"

    dom.setHtml(spanNode, str.concat(nodeText, atSymbol))
    wapi.setCursorAfter!(spanNode)
  }, [])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      handleSelect()
      const node = localRef.current
      if (!node) return

      const textNodeInfo = currentTextNode(node)
      if (!textNodeInfo) return

      const [spanNode, offset] = textNodeInfo

      if (curMention.current && kbd.enter!(event)) {
        dom.preventDefault(event)
        dom.stopPropagation(event)
        rx.push!(mentionsS, { type: "insert-selected-mention" })
      }

      if (curMention.current && kbd.downArrow!(event)) {
        dom.preventDefault(event)
        dom.stopPropagation(event)
        rx.push!(mentionsS, { type: "insert-next-mention" })
      }

      if (curMention.current && kbd.upArrow!(event)) {
        dom.preventDefault(event)
        dom.stopPropagation(event)
        rx.push!(mentionsS, { type: "insert-prev-mention" })
      }

      if (curMention.current && kbd.esc!(event)) {
        dom.preventDefault(event)
        dom.stopPropagation(event)
        rx.push!(mentionsS, { type: "hide-mentions" })
      }

      if (kbd.esc!(event) && onEsc) {
        onEsc(event)
      }

      if (kbd.mod!(event) && kbd.enter!(event) && onCtrlEnter) {
        onCtrlEnter()
      }

      if (kbd.enter!(event)) {
        const sel = wapi.getSelection()
        const range = sel?.getRangeAt(0)
        dom.preventDefault(event)
        dom.stopPropagation(event)

        const newTextNodeInfo = currentTextNode(node)
        if (range && newTextNodeInfo) {
          const [newSpanNode, newOffset] = newTextNodeInfo
          range.deleteContents()

          const txt = newSpanNode.textContent || ""
          const before = txt.substring(0, newOffset)
          const after = txt.substring(newOffset)
          dom.setHtml!(
            newSpanNode,
            dm.str(
              before,
              "\n",
              zeroWidthSpace,
              after
            )
          )
          wapi.setCursor!(newSpanNode, newOffset + 1)
          handleInput()
        }
      }

      if (kbd.backspace!(event)) {
        const prevNode = getPrevNode(node, spanNode)
        if (
          prevNode &&
          dom.getData(prevNode, "type") === "mention" &&
          offset === 1
        ) {
          dom.preventDefault(event)
          dom.stopPropagation(event)
          prevNode.remove()
        }
      }
    },
    [handleSelect, handleInput, onEsc, onCtrlEnter, mentionsS]
  )

  useLayoutEffect(() => {
    if (autofocus && localRef.current) {
      dom.focus!(localRef.current)
    }
  }, [autofocus])

  useEffect(() => {
    const handleSelectBound = handleSelect
    document.addEventListener("selectionchange", handleSelectBound)
    return () =>
      document.removeEventListener("selectionchange", handleSelectBound)
  }, [handleSelect])

  useEffect(() => {
    if (!mentionsS) return

    const sub = rx.subs!(mentionsS, ({ type, data }: any) => {
      switch (type) {
        case "insert-mention":
          handleInsertMention(data)
          break
        case "insert-at-symbol":
          handleInsertAtSymbol()
          break
      }
    })
    return () => rx.dispose!(sub)
  }, [mentionsS, handleInsertMention, handleInsertAtSymbol])

  useLayoutEffect(() => {
    const node = localRef.current
    if (!node) return

    const elem = node as any
    elem.style.height = "0"
    elem.style.height = str.toString(
      (node.scrollHeight || 0) + 2,
      "px"
    )
  }, [])

  useEffect(() => {
    const node = localRef.current
    if (!node) return

    if (d.notEmpty!(prevValue) && !internalValue) {
      dom.setHtml!(node, "")
      dom.appendChild!(node, createTextNode())
      dom.setCssProperty!(node, "--placeholder", "")
      dom.focus!(node)
    } else if (node && !internalValue && !dom.focus?(node)) {
      dom.setCssProperty!(
        node,
        "--placeholder",
        dm.str('"', placeholder, '"')
      )
    } else if (node) {
      dom.setCssProperty!(node, "--placeholder", "")
    }
  }, [internalValue, prevValue, placeholder])

  return (
    <div
      role="textbox"
      className={(stl as any).css("comment-input")}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={handleInput}
      ref={initInput as any}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  )
}

const MentionsPanel: React.FC = () => {
  const mentionsS = useContext(mentionsContext)

  const team = (store.getState() as any).team
  const members = team?.members || []

  const [state, setState] = useState(() => ({
    display: false,
    mentionFilter: "",
    selected: 0,
  }))

  const { display, mentionFilter, selected } = state

  const mentionsUsers = useMemo(() => {
    return members
      .filter(({ fullname, email }: any) => {
        if (!mentionFilter || str.empty!(mentionFilter)) return true
        return (
          str.includes!(str.lower(fullname), str.lower(mentionFilter)) ||
          str.includes!(str.lower(email), str.lower(mentionFilter))
        )
      })
      .slice(0, 4)
  }, [mentionFilter, members])

  const clampedSelected = mth.clamp(
    selected,
    0,
    Math.max(0, mentionsUsers.length - 1)
  )

  const handleClickMention = useCallback(
    (event: React.PointerEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)

      const id = uuid.parse(dom.getData(dom.getCurrentTarget(event), "user-id"))
      const user = members.find((m: any) => m.id === id)

      if (user) {
        rx.push!(mentionsS, { type: "insert-mention", data: { user } })
      }
    },
    [members, mentionsS]
  )

  useEffect(() => {
    const sub = rx.subs!(mentionsS, ({ type, data }: any) => {
      switch (type) {
        case "display-mentions":
          setState((s) => ({ ...s, display: true }))
          break
        case "hide-mentions":
          setState((s) => ({
            ...s,
            display: false,
            mentionFilter: "",
          }))
          break
        case "filter-mentions":
          setState((s) => ({ ...s, mentionFilter: data }))
          break
        case "insert-selected-mention":
          rx.push!(mentionsS, {
            type: "insert-mention",
            data: { user: mentionsUsers[clampedSelected] },
          })
          break
        case "insert-next-mention":
          setState((s) => ({
            ...s,
            selected: mth.clamp(
              s.selected + 1,
              0,
              Math.max(0, mentionsUsers.length - 1)
            ),
          }))
          break
        case "insert-prev-mention":
          setState((s) => ({
            ...s,
            selected: mth.clamp(
              s.selected - 1,
              0,
              Math.max(0, mentionsUsers.length - 1)
            ),
          }))
          break
      }
    })
    return () => rx.dispose!(sub)
  }, [mentionsS, mentionsUsers, clampedSelected])

  if (!display) return null

  return (
    <div className={(stl as any).css("comments-mentions-choice")}>
      {mentionsUsers.length === 0 ? (
        <div className={(stl as any).css("comments-mentions-empty")}>
          {tr("comments.mentions.not-found", mentionFilter)}
        </div>
      ) : (
        mentionsUsers.map(({ id, fullname, email }: any, idx: number) => (
          <div
            key={id}
            onPointerDown={handleClickMention}
            data-user-id={dm.str(id)}
            className={(stl as any).cssCase({
              "comments-mentions-entry": true,
              "is-selected": clampedSelected === idx,
            })}
          >
            <img
              className={(stl as any).css("comments-mentions-avatar")}
              src={cfg.resolveProfilePhotoUrl({ id, fullname, email })}
            />
            <div
              className={(stl as any).css("comments-mentions-name")}
            >
              {fullname}
            </div>
            <div
              className={(stl as any).css("comments-mentions-email")}
            >
              {email}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

const MentionsButton: React.FC = () => {
  const mentionsS = useContext(mentionsContext)
  const [displayMentions, setDisplayMentions] = useState(false)

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      dom.preventDefault(event)
      dom.stopPropagation(event)
      if (displayMentions) {
        rx.push!(mentionsS, { type: "hide-mentions" })
      } else {
        rx.push!(mentionsS, { type: "insert-at-symbol" })
      }
    },
    [displayMentions, mentionsS]
  )

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (kbd.enter!(event) || kbd.space!(event)) {
        handlePointerDown(event as any)
      }
    },
    [handlePointerDown]
  )

  useEffect(() => {
    const sub = rx.subs!(mentionsS, ({ type }: any) => {
      switch (type) {
        case "display-mentions":
          setDisplayMentions(true)
          break
        case "hide-mentions":
          setDisplayMentions(false)
          break
      }
    })
    return () => rx.dispose!(sub)
  }, [mentionsS])

  return (
    <IconButton
      variant="ghost"
      aria-label={tr("labels.mention")}
      onPointerDown={handlePointerDown}
      onKeyDown={handleKeyDown}
      iconClass={(stl as any).cssCase({
        "open-mentions-button": true,
        "is-toggled": displayMentions,
      })}
      icon={icons.at}
    />
  )
}

const schemaCommentAvatar = {
  type: "object" as const,
  properties: {
    class: { type: "string", optional: true },
    image: { type: "string", optional: true },
    variant: {
      type: "string",
      optional: true,
      enum: ["read", "unread", "solved"],
    },
  },
}

interface CommentAvatarProps {
  image?: string
  variant?: "read" | "unread" | "solved"
  class?: string
  children?: React.ReactNode
}

const CommentAvatar: React.FC<CommentAvatarProps> = ({
  image,
  variant = "read",
  class: className,
  children,
  ...props
}) => {
  const classNameFinal = dm.str(
    className,
    " ",
    (stl as any).cssCase({
      avatar: true,
      "avatar-read": variant === "read",
      "avatar-unread": variant === "unread",
      "avatar-solved": variant === "solved",
    })
  )

  return (
    <div {...props} className={classNameFinal}>
      {image ? (
        <img src={image} className={(stl as any).css("avatar-image")} />
      ) : (
        <div className={(stl as any).css("avatar-text")}>{children}</div>
      )}
      <div
        className={(stl as any).cssCase({
          "avatar-mask": true,
          "avatar-darken": variant === "solved",
        })}
      />
    </div>
  )
}

interface CommentInfoProps {
  item: any
  profile: any
}

const CommentInfo: React.FC<CommentInfoProps> = ({ item, profile }) => {
  const variant = item.isResolved
    ? "solved"
    : (item.countUnreadComments || 0) > 0
    ? "unread"
    : "read"

  return (
    <>
      <div className={(stl as any).css("author")}>
        <CommentAvatar
          image={cfg.resolveProfilePhotoUrl(profile)}
          className={(stl as any).css("avatar-lg")}
          variant={variant}
        />
        <div className={(stl as any).css("author-identity")}>
          <div className={(stl as any).css("author-fullname")}>
            {profile.fullname}
          </div>
          <div className={(stl as any).css("author-timeago")}>
            {ct.timeago(item.modifiedAt)}
          </div>
        </div>
      </div>

      <div className={(stl as any).css("item")}>
        <CommentContent content={item.content} />
      </div>

      <div className={(stl as any).css("replies")}>
        {(() => {
          const totalComments = item.countComments || 0
          const unreadComments = item.countUnreadComments || 0
          const totalReplies = totalComments - 1
          const unreadReplies =
            unreadComments === totalComments
              ? unreadComments - 1
              : unreadComments

          return (
            <>
              {totalReplies > 0 && (
                <span className={(stl as any).css("replies-total")}>
                  {totalReplies === 1
                    ? str.concat(totalReplies, " ", tr("labels.reply"))
                    : str.concat(totalReplies, " ", tr("labels.replies"))}
                </span>
              )}

              {totalReplies > 0 && unreadReplies > 0 && (
                <span className={(stl as any).css("replies-unread")}>
                  {unreadReplies === 1
                    ? str.concat(unreadReplies, " ", tr("labels.reply.new"))
                    : str.concat(
                        unreadReplies,
                        " ",
                        tr("labels.replies.new")
                      )}
                </span>
              )}
            </>
          )
        })()}
      </div>
    </>
  )
}

interface CommentFormButtonsProps {
  onSubmit?: () => void
  onCancel?: () => void
  isDisabled?: boolean
}

const CommentFormButtons: React.FC<CommentFormButtonsProps> = ({
  onSubmit,
  onCancel,
  isDisabled,
}) => {
  const handleCancel = useCallback(
    (event: React.KeyboardEvent) => {
      if (kbd.enter!(event) && onCancel) {
        onCancel()
      }
    },
    [onCancel]
  )

  const handleSubmit = useCallback(
    (event: React.KeyboardEvent) => {
      if (kbd.enter!(event) && onSubmit) {
        onSubmit()
      }
    },
    [onSubmit]
  )

  return (
    <div className={(stl as any).css("form-buttons-wrapper")}>
      <MentionsButton />
      {onCancel && (
        <Button
          variant="ghost"
          type="button"
          onKeyDown={handleCancel}
          onClick={onCancel}
        >
          {tr("ds.confirm-cancel")}
        </Button>
      )}
      <Button
        variant="primary"
        type="button"
        onKeyDown={handleSubmit}
        onClick={onSubmit}
        disabled={isDisabled}
      >
        {tr("labels.post")}
      </Button>
    </div>
  )
}

function exceedsLength(content: string): boolean {
  return content.length > 750
}

interface CommentReplyFormProps {
  onSubmit: (content: string) => void
}

const CommentReplyForm: React.FC<CommentReplyFormProps> = ({
  onSubmit,
}) => {
  const [content, setContent] = useState("")

  const disabled = blankContent(content) || exceedsLength(content)

  const onCancel = useCallback(() => {
    store.emit("interrupt")
  }, [])

  const onChange = useCallback((value: string) => {
    setContent(value)
  }, [])

  const onSubmitFinal = useCallback(() => {
    onSubmit(content)
    setContent("")
  }, [content, onSubmit])

  return (
    <div className={(stl as any).css("form")}>
      <CommentInput
        value={content}
        placeholder={tr("labels.reply.thread")}
        autofocus
        onCtrlEnter={onSubmitFinal}
        onChange={onChange}
      />
      {exceedsLength(content) && (
        <div className={(stl as any).css("error-text")}>
          {tr("errors.character-limit-exceeded")}
        </div>
      )}
      <CommentFormButtons
        onSubmit={onSubmitFinal}
        onCancel={onCancel}
        isDisabled={disabled}
      />
    </div>
  )
}

interface CommentEditFormProps {
  content: string
  onSubmit: (content: string) => void
  onCancel?: () => void
}

const CommentEditForm: React.FC<CommentEditFormProps> = ({
  content: initialContent,
  onSubmit,
  onCancel,
}) => {
  const [content, setContent] = useState(initialContent)

  const disabled = blankContent(content) || exceedsLength(content)

  const onChange = useCallback((value: string) => {
    setContent(value)
  }, [])

  const onSubmitFinal = useCallback(() => {
    onSubmit(content)
  }, [content, onSubmit])

  return (
    <div className={(stl as any).css("form")}>
      <CommentInput
        value={content}
        autofocus
        onCtrlEnter={onSubmitFinal}
        onChange={onChange}
      />
      {exceedsLength(content) && (
        <div className={(stl as any).css("error-text")}>
          {tr("errors.character-limit-exceeded")}
        </div>
      )}
      <CommentFormButtons
        onSubmit={onSubmitFinal}
        onCancel={onCancel}
        isDisabled={disabled}
      />
    </div>
  )
}

function offsetPosition(
  position: { x: number; y: number },
  viewport: any,
  zoom: number,
  bubbleMargin: { x: number; y: number }
) {
  const vp = viewport || { offsetX: 0, offsetY: 0, width: 0, height: 0 }
  const baseX = position.x * zoom + vp.offsetX
  const baseY = position.y * zoom + vp.offsetY

  const x = position.x
  const y = position.y

  const w = vp.width
  const h = vp.height

  const commentWidth = 284

  const orientationLeft = baseX + commentWidth + x > w
  const orientationTop = baseY > h / 2

  const hDir = orientationLeft ? "left" : "right"
  const vDir = orientationTop ? "top" : "bottom"

  return { x, y, hDir, vDir }
}

interface CommentFloatingThreadDraftProps {
  draft: any
  zoom: number
  onCancel?: () => void
  onSubmit: () => void
  positionModifier?: any
  viewport?: any
}

const CommentFloatingThreadDraft: React.FC<
  CommentFloatingThreadDraftProps
> = ({ draft, zoom, onCancel, onSubmit, positionModifier, viewport }) => {
  const profile = (store.getState() as any).profile

  const mentionsS = useMemo(() => rx.subject(), [])

  const position = positionModifier
    ? gpt.transform(draft.position, positionModifier)
    : draft.position
  const content = draft.content
  const bubbleMargin = gpt.point(0, 0)

  const pos = offsetPosition(position, viewport, zoom, bubbleMargin)

  const marginX = position.x * bubbleMargin.x * (pos.hDir === "left" ? -1 : 1)
  const marginY = position.y * bubbleMargin.y * (pos.vDir === "top" ? -1 : 1)
  const posX = pos.x * zoom + marginX
  const posY = pos.y * zoom - marginY

  const disabled = blankContent(content) || exceedsLength(content)

  const onEsc = useCallback(
    (event: any) => {
      dom.stopPropagation(event)
      if (onCancel) {
        onCancel()
      } else {
        store.emit("interrupt")
      }
    },
    [onCancel]
  )

  const onChange = useCallback(
    (content: string) => {
      store.emit(dcm.updateDraftThread({ content }))
    },
    []
  )

  const onSubmitFinal = useCallback(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <mentionsContext.Provider value={mentionsS}>
      <div
        className={(stl as any).cssCase({
          "floating-thread-draft-wrapper": true,
          left: pos.hDir === "left",
          top: pos.vDir === "top",
        })}
        style={{
          top: str.concat(posY, "px"),
          left: str.concat(posX, "px"),
        }}
      >
        <div
          data-testid="floating-thread-bubble"
          style={{
            top: str.concat(posY, "px"),
            left: str.concat(posX, "px"),
          }}
          onClick={dom.stopPropagation}
        >
          <CommentAvatar
            className={(stl as any).css("avatar-lg")}
            image={cfg.resolveProfilePhotoUrl(profile)}
          />
        </div>
        <div
          className={(stl as any).css(
            "floating-thread-draft-inner-wrapper cursor-auto"
          )}
          style={{
            top: str.concat(posY - 24, "px"),
            left: str.concat(posX + 28, "px"),
          }}
          onClick={dom.stopPropagation}
        >
          <div className={(stl as any).css("form")}>
            <CommentInput
              placeholder={tr("labels.write-new-comment")}
              value={content || ""}
              autofocus
              onEsc={onEsc}
              onChange={onChange}
              onCtrlEnter={onSubmitFinal}
            />
            {exceedsLength(content) && (
              <div className={(stl as any).css("error-text")}>
                {tr("errors.character-limit-exceeded")}
              </div>
            )}
            <CommentFormButtons
              onSubmit={onSubmitFinal}
              onCancel={onEsc}
              isDisabled={disabled}
            />
          </div>
          <MentionsPanel />
        </div>
      </div>
    </mentionsContext.Provider>
  )
}

interface CommentFloatingThreadHeaderProps {
  thread: any
  origin?: any
}

const CommentFloatingThreadHeader: React.FC<
  CommentFloatingThreadHeaderProps
> = ({ thread, origin }) => {
  const owner = dcm.getOwner(thread)
  const profile = (store.getState() as any).profile
  const options = (store.getState() as any).commentsLocal?.options

  const toggleResolved = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      store.emit(
        dcm.updateCommentThread(update(thread, "isResolved", (v: boolean) => !v))
      )
    },
    [thread]
  )

  const onToggleOptions = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      store.emit(dcm.toggleCommentOptions(uuid.zero))
    },
    []
  )

  const deleteThread = useCallback(() => {
    store.emit(dcm.closeThread())
    if (origin === "viewer") {
      store.emit(dcm.deleteCommentThreadOnViewer(thread))
    } else {
      store.emit(dcm.deleteCommentThreadOnWorkspace(thread))
    }
  }, [origin, thread])

  const onDeleteThread = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      store.emit(dcm.hideCommentOptions)
      store.emit(
        modal.show({
          type: "confirm",
          title: tr("modals.delete-comment-thread.title"),
          message: tr("modals.delete-comment-thread.message"),
          acceptLabel: tr("modals.delete-comment-thread.accept"),
          onAccept: deleteThread,
        })
      )
    },
    [deleteThread]
  )

  const onHideOptions = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      store.emit(dcm.hideCommentOptions)
    },
    []
  )

  return (
    <>
      <div className={(stl as any).css("floating-thread-header-left")}>
        {tr("labels.comment")} {""}
        <span className={(stl as any).css("grayed-text")}>
          # {thread.seqn}
        </span>
      </div>
      <div className={(stl as any).css("floating-thread-header-right")}>
        {thread && (
          <div
            className={(stl as any).css("checkbox-wrapper")}
            title={tr("labels.comment.mark-as-solved")}
            onClick={toggleResolved}
          >
            <span
              className={(stl as any).cssCase({
                checkbox: true,
                "global/checked": thread.isResolved,
              })}
            >
              {deprecatedIcon.tick}
            </span>
          </div>
        )}
        {profile.id === owner.id && (
          <IconButton
            variant="ghost"
            aria-label={tr("labels.options")}
            onClick={onToggleOptions}
            icon={icons.menu}
          />
        )}
      </div>
      <Dropdown
        show={options === uuid.zero}
        onClose={onHideOptions}
      >
        <ul className={(stl as any).css("dropdown-menu")}>
          <li
            className={(stl as any).css("dropdown-menu-option")}
            onClick={onDeleteThread}
          >
            {tr("labels.delete-comment-thread")}
          </li>
        </ul>
      </Dropdown>
    </>
  )
}

interface CommentFloatingThreadItemProps {
  comment: any
  thread?: any
}

const CommentFloatingThreadItem: React.FC<
  CommentFloatingThreadItemProps
> = ({ comment, thread }) => {
  const owner = dcm.getOwner(comment)
  const profile = (store.getState() as any).profile
  const options = (store.getState() as any).commentsLocal?.options
  const [edition, setEdition] = useState(false)

  const onToggleOptions = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      store.emit(dcm.toggleCommentOptions(comment.id))
    },
    []
  )

  const onHideOptions = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      store.emit(dcm.hideCommentOptions)
    },
    []
  )

  const onEditClicked = useCallback(() => {
    store.emit(dcm.hideCommentOptions)
    setEdition(true)
  }, [])

  const onDeleteComment = useCallback(() => {
    store.emit(dcm.deleteComment(comment))
  }, [comment])

  const onSubmit = useCallback(
    (content: string) => {
      setEdition(false)
      store.emit(dcm.updateComment({ ...comment, content }))
    },
    [comment]
  )

  const onCancel = useCallback(() => {
    setEdition(false)
  }, [])

  return (
    <div className={(stl as any).css("floating-thread-item-wrapper")}>
      <div className={(stl as any).css("floating-thread-item")}>
        <div className={(stl as any).css("author")}>
          <CommentAvatar image={cfg.resolveProfilePhotoUrl(owner)} />
          <div className={(stl as any).css("author-identity")}>
            <div className={(stl as any).css("author-fullname")}>
              {owner.fullname}
            </div>
            <div className={(stl as any).css("author-timeago")}>
              {ct.timeago(comment.modifiedAt)}
            </div>
          </div>

          {profile.id === owner.id && (
            <IconButton
              variant="ghost"
              aria-label={tr("labels.options")}
              onClick={onToggleOptions}
              icon={icons.menu}
            />
          )}
        </div>

        <div className={(stl as any).css("item")}>
          {edition ? (
            <CommentEditForm
              content={comment.content}
              onSubmit={onSubmit}
              onCancel={onCancel}
            />
          ) : (
            <span className={(stl as any).css("text")}>
              <CommentContent content={comment.content} />
            </span>
          )}
        </div>
      </div>

      <Dropdown
        show={options === comment.id}
        onClose={onHideOptions}
      >
        <ul className={(stl as any).css("dropdown-menu")}>
          <li
            className={(stl as any).css("dropdown-menu-option")}
            onClick={onEditClicked}
          >
            {tr("labels.edit")}
          </li>
          {!thread && (
            <li
              className={(stl as any).css("dropdown-menu-option")}
              onClick={onDeleteComment}
            >
              {tr("labels.delete-comment")}
            </li>
          )}
        </ul>
      </Dropdown>
    </div>
  )
}

function makeCommentsRef(threadId: string) {
  return l.derived(l.in(["comments", threadId]), store.getState())
}

interface CommentFloatingThreadProps {
  thread: any
  zoom: number
  origin?: any
  positionModifier?: any
  viewport?: any
}

const CommentFloatingThread: React.FC<CommentFloatingThreadProps> = React.memo(
  ({ thread, zoom, origin, positionModifier, viewport }) => {
    const ref = useRef<HTMLDivElement>(null)
    const mentionsS = useMemo(() => rx.subject(), [])
    const threadId = thread.id
    const threadPos = thread.position

    const basePos = positionModifier
      ? gpt.transform(threadPos, positionModifier)
      : threadPos

    const maxHeight = viewport
      ? Math.floor(viewport.height * 0.5)
      : undefined

    const bubbleMargin = gpt.point(24, 24)
    const pos = offsetPosition(basePos, viewport, zoom, bubbleMargin)

    const marginX = bubbleMargin.x * (pos.hDir === "left" ? -1 : 1)
    const marginY = bubbleMargin.y * (pos.vDir === "top" ? -1 : 1)
    const posX = pos.x * zoom + marginX
    const posY = pos.y * zoom - marginY

    const commentsRef = useMemo(
      () => makeCommentsRef(threadId),
      [threadId]
    )
    const commentsMap = store.getState()(commentsRef)

    const comments = useMemo(
      () =>
        (Object.values(commentsMap) as any[])
          .sort(by(createdAt)),
      [commentsMap]
    )

    const firstComment = comments[0]

    const onSubmit = useCallback(
      (content: string) => {
        store.emit(dcm.addComment(thread, content))
      },
      [thread]
    )

    useEffect(() => {
      store.emit(dcm.retrieveComments(threadId))
    }, [threadId])

    useEffect(() => {
      store.emit(dcm.updateCommentThreadStatus(threadId))
    }, [threadId])

    useLayoutEffect(() => {
      const node = ref.current
      if (node) {
        dom.scrollIntoViewIfNeeded!(node)
      }
    }, [threadPos, commentsMap])

    return (
      <mentionsContext.Provider value={mentionsS}>
        {firstComment && (
          <div
            id={dm.str("thread-", threadId)}
            className={(stl as any).cssCase({
              "floating-thread-wrapper": true,
              "cursor-auto": true,
              left: pos.hDir === "left",
              top: pos.vDir === "top",
            })}
            style={{
              left: str.concat(posX, "px"),
              top: str.concat(posY, "px"),
              "--comment-height": str.concat(maxHeight, "px"),
            }}
            onClick={dom.stopPropagation}
          >
            <div className={(stl as any).css("floating-thread-header")}>
              <CommentFloatingThreadHeader
                thread={thread}
                origin={origin}
              />
            </div>

            <div className={(stl as any).css("floating-thread-main")}>
              <CommentFloatingThreadItem
                comment={firstComment}
                thread={thread}
              />
              {comments.slice(1).map((item: any) => (
                <React.Fragment key={dm.str(item.id)}>
                  <CommentFloatingThreadItem comment={item} />
                </React.Fragment>
              ))}
            </div>

            <CommentReplyForm onSubmit={onSubmit} />

            <MentionsPanel />
          </div>
        )}
      </mentionsContext.Provider>
    )
  }
)

function groupBubbles(
  zoom: number,
  circles: any[],
  visited: any[] = [],
  groups: any[][] = []
): any[][] {
  if (circles.length === 0) return groups

  const current = circles[0]
  const remaining = circles.slice(1)

  const overlappingGroup = groups.find((group) =>
    group.some((g) => dwcm.overlapBubbles?.(zoom, current, g))
  )

  if (overlappingGroup) {
    const newGroups = groups.map((group) =>
      group === overlappingGroup
        ? [current, ...group]
        : group
    )
    return groupBubbles(zoom, remaining, visited, newGroups)
  }

  return groupBubbles(zoom, remaining, visited, [[current], ...groups])
}

function insideVbox(threadGroup: any[], wl: any): boolean {
  const vbox = wl.vbox
  const positions = threadGroup.map((t) => t.position)
  const position = gpt.centerPoints(positions)
  const posX = position.x
  const posY = position.y
  const x1 = vbox.x
  const y1 = vbox.y
  const x2 = x1 + vbox.width
  const y2 = y1 + vbox.height

  return posX > x1 && posX < x2 && posY > y1 && posY < y2
}

function calculateZoomScale(
  position: any,
  zoom: number,
  threads: any[],
  wl: any
): number {
  const numThreads = threads.length
  const groupedThreads = groupBubbles(zoom, threads)
  const numGroupedThreads = groupedThreads.length
  const zoomScaleStep = 1.75
  const scaledZoom = zoom * zoomScaleStep
  const zoomedWl = dwz.implUpdateZoom(wl, position, scaledZoom)
  const outsideVbox = (group: any[]) => !insideVbox(group, zoomedWl)

  if (
    numThreads === numGroupedThreads ||
    groupedThreads.some(outsideVbox)
  ) {
    return zoom
  }

  return calculateZoomScale(position, scaledZoom, threads, zoomedWl)
}

interface CommentFloatingGroupProps {
  threadGroup: any[]
  zoom: number
  positionModifier?: any
}

const CommentFloatingGroup: React.FC<CommentFloatingGroupProps> = React.memo(
  ({ threadGroup, zoom, positionModifier }) => {
    const positions = threadGroup.map((t) => t.position)

    let position = gpt.centerPoints(positions)
    if (positionModifier) {
      position = gpt.transform(position, positionModifier)
    }

    const posX = position.x * zoom
    const posY = position.y * zoom

    const unread = threadGroup.some(
      (t) => (t.countUnreadComments || 0) > 0
    )
    const numThreads = str(threadGroup.length)

    const testId = threadGroup
      .slice()
      .sort(by("seqn"))
      .map((t) => t.seqn)
      .join("-")

    const onClick = useCallback(() => {
      const wl = (store.getState() as any)["workspace-local"]
      const centeredWl = dwv.calculateCenteredViewbox(wl, position)
      const updatedZoom = calculateZoomScale(
        position,
        zoom,
        threadGroup,
        centeredWl
      )
      const scaleZoom = updatedZoom / zoom

      store.emit(
        dwv.updateViewportPositionCenter(position),
        dwz.setZoom(position, scaleZoom)
      )
    }, [threadGroup, position, zoom])

    return (
      <div
        style={{
          top: str.concat(posY, "px"),
          left: str.concat(posX, "px"),
        }}
        onClick={onClick}
        className={(stl as any).css(
          "floating-preview-wrapper",
          "floating-preview-bubble"
        )}
      >
        <CommentAvatar
          className={(stl as any).css("avatar-lg")}
          variant={unread ? "unread" : "read"}
          data-testid={dm.str("floating-thread-bubble-", testId)}
        >
          {numThreads}
        </CommentAvatar>
      </div>
    )
  }
)

interface CommentFloatingBubbleProps {
  thread: any
  zoom: number
  isOpen: boolean
  onClick?: (thread: any) => void
  origin?: any
  positionModifier?: any
}

const CommentFloatingBubble: React.FC<CommentFloatingBubbleProps> = React.memo(
  ({ thread, zoom, isOpen, onClick, origin, positionModifier }) => {
    const owner = useMemo(() => dcm.getOwner(thread), [thread])

    let position = thread.position
    if (positionModifier) {
      position = gpt.transform(position, positionModifier)
    }

    const frameId = thread.frameId

    const [state, setState] = useState(() => ({
      isHover: false,
      isGrabbing: false,
      newPositionX: null as number | null,
      newPositionY: null as number | null,
      newFrameId: frameId,
    }))

    const posX = floor(
      ((state as any).newPositionX || position.x) * zoom
    )
    const posY = floor(
      ((state as any).newPositionY || position.y) * zoom
    )

    const drag = useRef<boolean | null>(null)
    const wasOpen = useRef<boolean | null>(null)
    const draggingRef = useRef(false)
    const startRef = useRef<{ x: number; y: number } | null>(null)

    const onPointerDown = useCallback(
      (event: React.PointerEvent) => {
        if (origin === "viewer") return

        setState((s) => ({ ...s, isGrabbing: true }))
        wasOpen.current = isOpen
        if (isOpen) {
          store.emit(dcm.closeThread())
        }
        drag.current = false
        dom.stopPropagation(event)
        dom.capturePointer(event)
        draggingRef.current = true
        startRef.current = dom.getClientPosition(event)
      },
      [origin, isOpen]
    )

    const onPointerUp = useCallback(
      (event: React.PointerEvent) => {
        if (origin === "viewer") return

        setState((s) => ({ ...s, isGrabbing: false }))
        dom.stopPropagation(event)
        dom.releasePointer(event)
        draggingRef.current = false
        startRef.current = null

        if (state.newPositionX && state.newPositionY) {
          store.emit(
            dwcm.updateCommentThreadPosition(thread, [
              state.newPositionX,
              state.newPositionY,
            ])
          )
          setState((s) => ({
            ...s,
            newPositionX: null,
            newPositionY: null,
          }))
        }
      },
      [origin, thread, state.newPositionX, state.newPositionY]
    )

    const onPointerMove = useCallback(
      (event: React.PointerEvent) => {
        if (origin === "viewer") return

        drag.current = true
        dom.stopPropagation(event)

        if (draggingRef.current) {
          const startPt = startRef.current
          const currentPt = dom.getClientPosition(event)
          const deltaX = (currentPt.x - startPt!.x) / zoom
          const deltaY = (currentPt.y - startPt!.y) / zoom

          setState((s) => ({
            ...s,
            newPositionX: position.x + deltaX,
            newPositionY: position.y + deltaY,
          }))
        }
      },
      [origin, drag, position, zoom]
    )

    const onPointerEnter = useCallback(
      (event: React.PointerEvent) => {
        dom.stopPropagation(event)
        if (isOpen === false) {
          setState((s) => ({ ...s, isHover: true }))
        }
      },
      [isOpen]
    )

    const onPointerLeave = useCallback(
      (event: React.PointerEvent) => {
        dom.stopPropagation(event)
        setState((s) => ({ ...s, isHover: false }))
      },
      []
    )

    const onClick = useCallback(
      (event: React.MouseEvent) => {
        dom.stopPropagation(event)

        if (
          (wasOpen.current && drag.current) ||
          (!wasOpen.current && !drag.current)
        ) {
          setState((s) => ({ ...s, isHover: false }))
          store.emit(dcm.openThread(thread))
        }

        if (origin === "viewer" && onClick) {
          onClick(thread)
        }
      },
      [origin, thread, onClick, wasOpen, drag]
    )

    const variant = thread.isResolved
      ? "solved"
      : (thread.countUnreadComments || 0) > 0
      ? "unread"
      : "read"

    return (
      <div
        style={{
          top: str.concat(posY, "px"),
          left: str.concat(posX, "px"),
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerMove={onPointerMove}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onClick={onClick}
        className={(stl as any).cssCase({
          "floating-preview-wrapper": true,
          "floating-preview-bubble": !state.isHover,
        })}
      >
        {state.isHover ? (
          <div
            className={(stl as any).cssCase({
              "floating-thread-wrapper": true,
              "floating-preview-displacement": true,
              "cursor-pointer": !state.isGrabbing,
              "cursor-grabbing": state.isGrabbing,
            })}
          >
            <div
              className={(stl as any).css("floating-thread-item-wrapper")}
            >
              <div
                className={(stl as any).css("floating-thread-item")}
              >
                <CommentInfo item={thread} profile={owner} />
              </div>
            </div>
          </div>
        ) : (
          <CommentAvatar
            image={cfg.resolveProfilePhotoUrl(owner)}
            className={(stl as any).css("avatar-lg")}
            data-testid={dm.str(
              "floating-thread-bubble-",
              thread.seqn
            )}
            variant={variant}
          />
        )}
      </div>
    )
  }
)

interface CommentSidebarThreadItemProps {
  item: any
  onClick?: (item: any) => void
}

const CommentSidebarThreadItem: React.FC<CommentSidebarThreadItemProps> = ({
  item,
  onClick,
}) => {
  const owner = dcm.getOwner(item)
  const frame = store.getState()(
    refs.workspacePageObjectById(item.pageId, item.frameId)
  )

  const onClickHandler = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      dom.preventDefault(event)
      if (onClick) {
        onClick(item)
      }
    },
    [item, onClick]
  )

  return (
    <div className={(stl as any).css("cover")} onClick={onClickHandler}>
      <div className={(stl as any).css("location")}>
        <div className={(stl as any).css("location-text")}>
          {str.concat("#", item.seqn)}
          {str.concat(" - ", item.pageName)}
          {frame && !cfh.root?(frame)
            ? str.concat(" - ", frame.name)
            : null}
        </div>
      </div>

      <CommentInfo item={item} profile={owner} />
    </div>
  )
}

interface CommentSidebarThreadGroupProps {
  group: any
  onThreadClick?: (item: any) => void
}

const CommentSidebarThreadGroup: React.FC<
  CommentSidebarThreadGroupProps
> = ({ group, onThreadClick }) => {
  return (
    <div>
      {group.items.map((item: any) => (
        <CommentSidebarThreadItem
          key={item.id}
          item={item}
          onClick={onThreadClick}
        />
      ))}
    </div>
  )
}

interface CommentDashboardThreadItemProps {
  item: any
  onClick?: (item: any) => void
}

const CommentDashboardThreadItem: React.FC<
  CommentDashboardThreadItemProps
> = ({ item, onClick }) => {
  const owner = dcm.getOwner(item)

  const onClickHandler = useCallback(
    (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      dom.preventDefault(event)
      if (onClick) {
        onClick(item)
      }
    },
    [item, onClick]
  )

  return (
    <div className={(stl as any).css("cover")} onClick={onClickHandler}>
      <div className={(stl as any).css("location")}>
        <div className={(stl as any).css("location-icon")}>
          <icons.CommentIcon iconId={icons.comments} />
        </div>
        <div className={(stl as any).css("location-text")}>
          {str.concat("#", item.seqn)}
          {str.concat(" ", item.fileName)}
          {str.concat(", ", item.pageName)}
        </div>
      </div>

      <CommentInfo item={item} profile={owner} />
    </div>
  )
}

interface CommentDashboardThreadGroupProps {
  group: any
  onThreadClick?: (item: any) => void
}

const CommentDashboardThreadGroup: React.FC<
  CommentDashboardThreadGroupProps
> = ({ group, onThreadClick }) => {
  return (
    <div>
      {group.items.map((item: any) => (
        <CommentDashboardThreadItem
          key={item.id}
          item={item}
          onClick={onThreadClick}
        />
      ))}
    </div>
  )
}

function by(key: string) {
  return (a: any, b: any) => (a[key] < b[key] ? -1 : 1)
}
