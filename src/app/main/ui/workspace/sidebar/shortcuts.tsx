// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React, { useState, useCallback, useEffect } from "react"
import * as d from "app/common/data"
import * as dm from "app.common.data.macros"
import * as cf from "app.config"
import * as ds from "app.main.data.shortcuts"
import * as dw from "app.main/data/workspace"
import * as workspaceShortcuts from "app.main.data.workspace.shortcuts"
import * as pathShortcuts from "app.main.data.workspace.path.shortcuts"
import * as dashboardShortcuts from "app.main.data.dashboard.shortcuts"
import * as viewerShortcuts from "app.main.data.viewer.shortcuts"
import * as st from "app/main/store"
import { SearchBar } from "app.main.ui.components.search-bar"
import { Icon, icons } from "app.main.ui.ds.foundations.assets.icon"
import { PanelTitle } from "app.main.ui.ds.product.panel-title"
import * as dom from "app.util.dom"
import { tr } from "app.util.i18n"
import { matchesSearch } from "app.util.strings"
import * as set from "clojure.set"
import * as str from "cuerdas/core"

const CSS = {
  shortcuts: "shortcuts",
  shortcutsTitle: "shortcuts-title",
  searchField: "search-field",
  shortcutsList: "shortcuts-list",
  notFound: "not-found",
  key: "key",
  keys: "keys",
  space: "space",
  subMenu: "sub-menu",
  shortcutsName: "shortcuts-name",
  commandName: "command-name",
  section: "section",
  sectionTitle: "section-title",
  sectionName: "section-name",
  subsectionTitle: "subsection-title",
  subsectionName: "subsection-name",
  subsectionMenu: "subsection-menu",
}

function css(className: string, ..._rest: any[]): string {
  return className
}

// Converted Chars Component
interface ConvertedCharsProps {
  char: string
  command: string
}

const ConvertedChars: React.FC<ConvertedCharsProps> = ({ char, command }) => {
  const modifiedKeys: Record<string, string> = {
    up: ds.upArrow,
    down: ds.downArrow,
    left: ds.leftArrow,
    right: ds.rightArrow,
    plus: "+",
  }

  const macosKeys: Record<string, string> = {
    command: "\u2318",
    option: "\u2325",
    alt: "\u2325",
    delete: "\u232B",
    del: "\u232B",
    shift: "\u21E7",
    control: "\u2303",
    esc: "\u238B",
    enter: "\u23CE",
  }

  const isMacos = cf.checkPlatform("macos")
  let charValue = modifiedKeys[char] || char
  charValue = isMacos && macosKeys[char] ? macosKeys[char] : charValue

  const uniqueKey = `${d.name(command)}-${charValue}`

  return (
    <span className={css(CSS.key)} key={uniqueKey}>
      {charValue}
    </span>
  )
}

// Translation keyname helper
function translationKeyname(type: "sc" | "sec" | "sub-sec", keyname: string): string {
  const translatPre: Record<string, string> = {
    sc: "shortcuts.",
    sec: "shortcut-section.",
    "sub-sec": "shortcut-subsection.",
  }
  return tr(translatPre[type] + d.name(keyname))
}

function addTranslation(type: "sc" | "sec" | "sub-sec", item: Record<string, any>) {
  return Object.entries(item).map(([k, v]) => [k, { ...v, translation: translationKeyname(type, k) }])
}

function shortcutsToSubsections(shortcuts: any) {
  const subsectionsSet = new Set<string>()
  Object.values(shortcuts).forEach((shortcut: any) => {
    shortcut.subsections?.forEach((sub: string) => subsectionsSet.add(sub))
  })

  const getScBySubsection = (subsection: string, [k, v]: [string, any]) => {
    if (v.subsections?.includes(subsection)) {
      return { [k]: v }
    }
    return null
  }

  const reduceSc = (acc: any, subsection: string) => {
    const shortcutsBySubsection: Record<string, any> = {}
    Object.entries(shortcuts).forEach((entry) => {
      const result = getScBySubsection(subsection, entry as [string, any])
      if (result) Object.assign(shortcutsBySubsection, result)
    })
    return { ...acc, [subsection]: { children: shortcutsBySubsection } }
  }

  return Array.from(subsectionsSet).reduce(reduceSc, {})
}

// Shortcuts Keys Component
interface ShortcutsKeysProps {
  content: string | string[]
  command: string
}

const ShortcutsKeys: React.FC<ShortcutsKeysProps> = ({ content, command }) => {
  const managedList = Array.isArray(content) ? content : [content]
  const charsList = managedList.map(ds.splitSc)
  const lastElement = charsList[charsList.length - 1]
  const shortCharList = charsList.length === 1 ? charsList : charsList.slice(0, -1)
  const penultimate = shortCharList[shortCharList.length - 1]

  return (
    <span className={css(CSS.keys)}>
      {shortCharList.map((chars, idx) => (
        <React.Fragment key={chars.join("")}>
          {chars.map((char) => (
            <ConvertedChars key={`${char}-${command}`} char={char} command={command} />
          ))}
          {chars !== penultimate && <span className={css(CSS.space)}>,</span>}
        </React.Fragment>
      ))}

      {lastElement !== penultimate && (
        <>
          <span className={css(CSS.space)}>{tr("shortcuts.or")}</span>
          {lastElement.map((char) => (
            <ConvertedChars key={`${char}-${command}`} char={char} command={command} />
          ))}
        </>
      )}
    </span>
  )
}

// Shortcut Row Component
interface ShortcutRowProps {
  elements: Record<string, any>
  filterTerm: string
  isMatchSection?: boolean
  isMatchSubsection?: boolean
}

const ShortcutRow: React.FC<ShortcutRowProps> = ({ elements, filterTerm, isMatchSection, isMatchSubsection }) => {
  const shortcutNames = Object.keys(elements)
  const shortcutTranslations = shortcutNames.map((name) => translationKeyname("sc", name))
  const matchShortcut = shortcutTranslations.some((t) => matchesSearch(t, filterTerm))

  let filtered = shortcutTranslations
  if ((isMatchSection || isMatchSubsection) && !matchShortcut) {
    filtered = shortcutTranslations
  } else {
    filtered = shortcutTranslations.filter((t) => matchesSearch(t, filterTerm))
  }

  const sortedFiltered = [...filtered].sort()

  return (
    <ul className={css(CSS.subMenu)}>
      {sortedFiltered.map((commandTranslate) => {
        const scByTranslate = Object.entries(elements).find(
          ([, info]) => (info as any).translation === commandTranslate
        )
        if (!scByTranslate) return null

        const [command, comandInfo] = scByTranslate
        const content = (comandInfo as any).showCommand || (comandInfo as any).command

        return (
          <li key={commandTranslate} className={css(CSS.shortcutsName)}>
            <span className={css(CSS.commandName)}>{commandTranslate}</span>
            <ShortcutsKeys content={content} command={command} />
          </li>
        )
      })}
    </ul>
  )
}

// Section Title Component
interface SectionTitleProps {
  name: string
  isVisible: boolean
  isSub?: boolean
}

const SectionTitle: React.FC<SectionTitleProps> = ({ name, isVisible, isSub = false }) => (
  <div className={isSub ? css(CSS.subsectionTitle) : css(CSS.sectionTitle)}>
    <Icon iconId={isVisible ? icons.arrowDown : icons.arrowRight} size="s" />
    <span className={isSub ? css(CSS.subsectionName) : css(CSS.sectionName)}>{name}</span>
  </div>
)

// Shortcut Subsection Component
interface ShortcutSubsectionProps {
  subsections: any
  manageSections: (id: any) => () => void
  openSections: any[]
  filterTerm: string
  isMatchSection: boolean
}

const ShortcutSubsection: React.FC<ShortcutSubsectionProps> = ({
  subsections,
  manageSections,
  openSections,
  filterTerm,
  isMatchSection,
}) => {
  const subsectionsNames = Object.keys(subsections)

  const subsectionTranslations = subsectionsNames.map((name) =>
    name === "none" ? translationKeyname("sc", name) : translationKeyname("sub-sec", name)
  )

  const sortedTranslations = [...subsectionTranslations].sort()

  // Basics section has no sub sections
  if (subsectionsNames[0] === "none") {
    const basicShortcuts = subsections.none
    return (
      <ShortcutRow
        elements={basicShortcuts.children}
        filterTerm={filterTerm}
        isMatchSection={isMatchSection}
        isMatchSubsection={true}
      />
    )
  }

  return (
    <ul className={css(CSS.subsectionMenu)}>
      {sortedTranslations.map((subTranslated) => {
        const subByTranslate = Object.entries(subsections).find(
          ([, info]) => (info as any).translation === subTranslated
        )
        if (!subByTranslate) return null

        const [subName, subInfo] = subByTranslate
        const visible = openSections.some((id: any) => id === (subInfo as any).id)
        const matchSubsection = matchesSearch(translationKeyname("sub-sec", subName), filterTerm)
        const shortcutNames = Object.keys((subInfo as any).children).map((k) =>
          translationKeyname("sc", k)
        )
        const matchShortcuts = shortcutNames.some((n) => matchesSearch(n, filterTerm))

        if (!matchSubsection && !matchShortcuts && !isMatchSection) return null

        return (
          <li
            key={subTranslated}
            onClick={manageSections((subInfo as any).id)}
          >
            <SectionTitle name={subTranslated} isVisible={visible} isSub={true} />

            <div style={{ display: visible ? "initial" : "none" }}>
              <ShortcutRow
                elements={(subInfo as any).children}
                filterTerm={filterTerm}
                isMatchSection={isMatchSection}
                isMatchSubsection={matchSubsection}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

// Shortcut Section Component
interface ShortcutSectionProps {
  section: [string, any]
  manageSections: (id: any) => () => void
  openSections: any[]
  filterTerm: string
}

const ShortcutSection: React.FC<ShortcutSectionProps> = ({
  section,
  manageSections,
  openSections,
  filterTerm,
}) => {
  const [sectionKey, sectionInfo] = section
  const sectionId = (sectionInfo as any).id
  const sectionTranslation = translationKeyname("sec", sectionKey)
  const matchSection = matchesSearch(sectionTranslation, filterTerm)

  const subsections = (sectionInfo as any).children
  const subsNames = Object.keys(subsections)
  const subsBodys = subsNames.reduce((acc: any, name) => {
    acc[name] = { children: (subsections[name] as any).children }
    return acc
  }, {} as any)

  const subTrans = subsNames.map((name) =>
    name === "none" ? null : translationKeyname("sub-sec", name)
  ).filter(Boolean)

  const matchSubsection = subTrans.some((t) => matchesSearch(t || "", filterTerm))
  const translations = subsNames.flatMap((name) => {
    const children = (subsections[name] as any).children
    return Object.keys(children).map((k) => translationKeyname("sc", k))
  })
  const matchShortcut = translations.some((t) => matchesSearch(t, filterTerm))
  const visible = openSections.some((id: any) => id === sectionId)

  if (!matchSection && !matchSubsection && !matchShortcut) return null

  return (
    <div className={css(CSS.section)} onClick={manageSections(sectionId)}>
      <SectionTitle name={sectionTranslation} isVisible={visible} isSub={false} />

      <div style={{ display: visible ? "initial" : "none" }}>
        <ShortcutSubsection
          subsections={subsections}
          openSections={openSections}
          manageSections={manageSections}
          isMatchSection={matchSection}
          filterTerm={filterTerm}
        />
      </div>
    </div>
  )
}

// Main Shortcuts Container
interface ShortcutsContainerProps {
  className?: string
}

export const ShortcutsContainer: React.FC<ShortcutsContainerProps> = ({ className }) => {
  const [openSections, setOpenSections] = useState<any[]>([[1]])
  const [filterTerm, setFilterTerm] = useState("")

  const closeFn = useCallback(() => {
    st.emit!(dw.toggleLayoutFlag("shortcuts"))
  }, [])

  // Process shortcuts
  const allWorkspaceShortcuts = Object.fromEntries(
    addTranslation("sc", d.deepMerge(pathShortcuts.shortcuts, workspaceShortcuts.shortcuts))
  )
  const dashboardShortcutsProcessed = Object.fromEntries(
    addTranslation("sc", dashboardShortcuts.shortcuts)
  )
  const viewerShortcutsProcessed = Object.fromEntries(
    addTranslation("sc", viewerShortcuts.shortcuts)
  )

  const workspaceScBySubsections = Object.fromEntries(
    addTranslation("sub-sec", shortcutsToSubsections(allWorkspaceShortcuts))
  )
  const dashboardScBySubsections = Object.fromEntries(
    addTranslation("sub-sec", shortcutsToSubsections(dashboardShortcutsProcessed))
  )
  const viewerScBySubsections = Object.fromEntries(
    addTranslation("sub-sec", shortcutsToSubsections(viewerShortcutsProcessed))
  )

  const basicsElements = {
    ...(workspaceScBySubsections.basics?.children || {}),
    ...(dashboardScBySubsections.basics?.children || {}),
    ...(viewerScBySubsections.basics?.children || {}),
  }

  // Remove basics from all
  delete workspaceScBySubsections.basics
  delete dashboardScBySubsections.basics
  delete viewerScBySubsections.basics

  const allShortcuts: Record<string, any> = {
    basics: {
      id: [1],
      children: { none: { children: basicsElements } },
      translation: tr("shortcut-section.basics"),
    },
    workspace: {
      id: [2],
      children: workspaceScBySubsections,
      translation: tr("shortcut-section.workspace"),
    },
    dashboard: {
      id: [3],
      children: dashboardScBySubsections,
      translation: tr("shortcut-section.dashboard"),
    },
    viewer: {
      id: [4],
      children: viewerScBySubsections,
      translation: tr("shortcut-section.viewer"),
    },
  }

  // Walk function to add ids
  const walk = (element: any, parentId: any): any => {
    if (!element) return element

    return Object.entries(element).reduce((acc, [k, item], index) => {
      const itemId = parentId ? [...parentId, index] : [index]
      const children = item?.children ? walk(item.children, itemId) : item
      return {
        ...acc,
        [k]: {
          ...item,
          id: itemId,
          children,
        },
      }
    }, {})
  }

  const walkedAllShortcuts = walk(allShortcuts, null)

  const allScNames = [
    ...Object.keys(allWorkspaceShortcuts),
    ...Object.keys(dashboardShortcutsProcessed),
    ...Object.keys(viewerShortcutsProcessed),
  ].map((k) => translationKeyname("sc", k))

  const allSubNames = [
    ...Object.keys(workspaceScBySubsections),
    ...Object.keys(dashboardScBySubsections),
    ...Object.keys(viewerScBySubsections),
  ].map((k) => translationKeyname("sub-sec", k))

  const allSectionNames = Object.keys(walkedAllShortcuts).map((k) =>
    translationKeyname("sec", k)
  )

  const allItemNames = [...allScNames, ...allSubNames, ...allSectionNames]
  const matchAny = allItemNames.some((name) => matchesSearch(name, filterTerm))

  const manageSections = useCallback(
    (item: any) => (event: React.MouseEvent) => {
      dom.stopPropagation(event)
      const isPresent = openSections.some((s: any) => s === item)
      if (isPresent) {
        setOpenSections(openSections.filter((s: any) => s !== item))
      } else {
        setOpenSections([...openSections, item])
      }
    },
    [openSections]
  )

  const addIds = (acc: any, node: any) => {
    const id = node.id
    let addition: any
    if (id.length === 1) {
      addition = id
    } else if (id.length === 2) {
      addition = [[id[0]], id]
    } else if (id.length === 3) {
      addition = [[id[0]], [id[0], id[1]]]
    } else {
      addition = null
    }

    if (addition?.length === 1) {
      return [...acc, addition]
    }
    return [...acc, ...addition]
  }

  const manageSectionOnSearch = useCallback(
    (section: string, term: string) => {
      const nodeSeq: any[] = []
      const traverse = (node: any) => {
        if (!node) return
        nodeSeq.push(node)
        if (node.children) {
          Object.values(node.children).forEach(traverse)
        }
      }

      const sectionNode = walkedAllShortcuts[section]
      traverse(sectionNode)

      return nodeSeq.reduce((acc, node) => {
        if (matchesSearch(node.translation || "", term)) {
          return [...acc, ...addIds(acc, node)]
        }
        return acc
      }, [] as any[])
    },
    [walkedAllShortcuts]
  )

  const manageSectionsOnSearch = useCallback(
    (term: string) => {
      if (term === "") {
        setOpenSections([[1]])
      } else {
        const ids = new Set([
          ...manageSectionOnSearch("basics", term),
          ...manageSectionOnSearch("workspace", term),
          ...manageSectionOnSearch("dashboard", term),
          ...manageSectionOnSearch("viewer", term),
        ])
        setOpenSections(Array.from(ids))
      }
    },
    [manageSectionOnSearch]
  )

  const onSearchTermChange = useCallback(
    (value: string) => {
      manageSectionsOnSearch(value)
      setFilterTerm(value)
    },
    [manageSectionsOnSearch]
  )

  const onSearchClearClick = useCallback(() => {
    setOpenSections([[1]])
    setFilterTerm("")
  }, [])

  useEffect(() => {
    dom.focus!(dom.getElement("shortcut-search"))
  }, [])

  return (
    <div className={`${className || ""} ${css(CSS.shortcuts)}`}>
      <PanelTitle className={css(CSS.shortcutsTitle)} text={tr("shortcuts.title")} onClose={closeFn} />

      <div className={css(CSS.searchField)}>
        <SearchBar
          onChange={onSearchTermChange}
          onClear={onSearchClearClick}
          value={filterTerm}
          placeholder={tr("shortcuts.title")}
          iconId={icons.search}
        />
      </div>

      {matchAny ? (
        <div className={css(CSS.shortcutsList)}>
          {Object.entries(walkedAllShortcuts).map((section) => (
            <ShortcutSection
              key={section[1].id?.[0]}
              section={section as [string, any]}
              manageSections={manageSections}
              openSections={openSections}
              filterTerm={filterTerm}
            />
          ))}
        </div>
      ) : (
        <div className={css(CSS.notFound)}>{tr("shortcuts.not-found")}</div>
      )}
    </div>
  )
}