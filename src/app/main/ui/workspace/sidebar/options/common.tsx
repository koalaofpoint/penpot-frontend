// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { useRef, useEffect, ReactNode } from "react";
import { scrollIntoViewIfNeeded } from "app/util/dom";

interface AdvancedOptionsProps {
  className?: string;
  isVisible?: boolean;
  children?: ReactNode;
}

export function AdvancedOptions({
  className,
  isVisible = true,
  children,
}: AdvancedOptionsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (node && isVisible) {
      scrollIntoViewIfNeeded(node);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`${className ?? ""} advanced-options-wrapper`} ref={ref}>
      {children}
    </div>
  );
}