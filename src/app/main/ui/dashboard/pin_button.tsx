// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import React from "react";
import { deprecatedIcon } from "app.main.ui.icons";
import { tr } from "app.util.i18n";
import { obj } from "app.util.object";

function cssClass(classes: Record<string, boolean>): string {
  return Object.entries(classes).filter(([_, v]) => v).map(([k]) => k).join(" ");
}

const pinIcon = deprecatedIcon.iconXref("pin", cssClass({ icon: true }));

interface PinButtonProps {
  ariaLabel?: string;
  isPinned?: boolean;
  className?: string;
}

export function PinButton(props: PinButtonProps) {
  const { ariaLabel, isPinned = false, className } = props;
  const label = ariaLabel || tr("dashboard.pin-unpin");
  const classString = `${className || ""} ${cssClass({ button: true, "button-active": isPinned })}`;

  const buttonProps = {
    ...props,
    className: classString,
    "aria-label": label
  };

  delete buttonProps.isPinned;

  return (
    <button {...buttonProps}>
      {pinIcon}
    </button>
  );
}