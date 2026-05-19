// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import {button} from "app/main/ui/ds/buttons/button"
import {iconButton} from "app/main/ui/ds/buttons/icon-button"
import {checkbox} from "app/main/ui/ds/controls/checkbox"
import {combobox} from "app/main/ui/ds/controls/combobox"
import {input} from "app/main/ui/ds/controls/input"
import {numericInput} from "app/main/ui/ds/controls/numeric-input"
import {radioButtons} from "app/main/ui/ds/controls/radio-buttons"
import {select} from "app/main/ui/ds/controls/select"
import {switchControl} from "app/main/ui/ds/controls/switch"
import {hintMessage} from "app/main/ui/ds/controls/utilities/hint-message"
import {inputField} from "app/main/ui/ds/controls/utilities/input-field"
import {label} from "app/main/ui/ds/controls/utilities/label"
import {icon, iconList} from "app/main/ui/ds/foundations/assets/icon"
import {rawSvg, rawSvgList} from "app/main/ui/ds/foundations/assets/raw-svg"
import {typographyList} from "app/main/ui/ds/foundations/typography"
import {heading} from "app/main/ui/ds/foundations/typography/heading"
import {text} from "app/main/ui/ds/foundations/typography/text"
import {tokenStatusIcon, tokenStatusList} from "app/main/ui/ds/foundations/utilities/token/token-status"
import {tabSwitcher} from "app/main/ui/ds/layout/tab-switcher"
import {actionable} from "app/main/ui/ds/notifications/actionable"
import {contextNotification} from "app/main/ui/ds/notifications/context-notification"
import {notificationPill} from "app/main/ui/ds/notifications/shared/notification-pill"
import {toast} from "app/main/ui/ds/notifications/toast"
import {avatar} from "app/main/ui/ds/product/avatar"
import {cta} from "app/main/ui/ds/product/cta"
import {emptyPlaceholder} from "app/main/ui/ds/product/empty-placeholder"
import {emptyState} from "app/main/ui/ds/product/empty-state"
import {inputWithMeta} from "app/main/ui/ds/product/input-with-meta"
import {loader} from "app/main/ui/ds/product/loader"
import {milestone} from "app/main/ui/ds/product/milestone"
import {milestoneGroup} from "app/main/ui/ds/product/milestone-group"
import {panelTitle} from "app/main/ui/ds/product/panel-title"
import * as sb from "app/main/ui/ds/storybook"
import {tooltip} from "app/main/ui/ds/tooltip/tooltip"
import {date} from "app/main/ui/ds/utilities/date"
import {swatch} from "app/main/ui/ds/utilities/swatch"
import * as i18n from "app/util/i18n"

export default {
  Button: button,
  Heading: heading,
  Icon: icon,
  IconButton: iconButton,
  Input: input,
  Label: label,
  InputField: inputField,
  HintMessage: hintMessage,
  InputWithMeta: inputWithMeta,
  EmptyPlaceholder: emptyPlaceholder,
  EmptyState: emptyState,
  Loader: loader,
  RawSvg: rawSvg,
  Select: select,
  Switch: switchControl,
  Checkbox: checkbox,
  RadioButtons: radioButtons,
  Combobox: combobox,
  Text: text,
  TabSwitcher: tabSwitcher,
  Toast: toast,
  Tooltip: tooltip,
  ContextNotification: contextNotification,
  NotificationPill: notificationPill,
  NumericInput: numericInput,
  Actionable: actionable,
  TokenStatusIcon: tokenStatusIcon,
  Swatch: swatch,
  Cta: cta,
  Avatar: avatar,
  Milestone: milestone,
  MilestoneGroup: milestoneGroup,
  Date: date,
  PanelTitle: panelTitle,

  setDefaultTranslations: (data: any) => {
    i18n.setTranslations("en", data)
  },

  meta: {
    icons: [...iconList].sort(),
    tokenStatus: [...tokenStatusList].sort(),
    svgs: [...rawSvgList].sort(),
    typography: [...typographyList],
  },

  storybook: {
    StoryGrid: sb.storyGrid,
    StoryGridCell: sb.storyGridCell,
    StoryGridRow: sb.storyGridRow,
    StoryHeader: sb.storyHeader,
  },
}