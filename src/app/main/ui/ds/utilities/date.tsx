// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../../style';
// import { ct } from '../../../../common/types/color';
// import { t } from '../typography';
// import { Text } from '../typography/text';

/**
 * Date component props
 */
export interface DateProps {
  class?: string;
  date: number | Date;
  selected?: boolean;
}

/**
 * Date component - Displays formatted date with optional timeago
 */
export function Date({ class: className, date: dateProp, selected = false }: DateProps) {
  // TODO: const isValidDate = ct.inst(date) || typeof date === 'number';
  const isValidDate = typeof date === 'number' || date instanceof Date;

  const finalDate = isValidDate ? new Date(dateProp) : new Date();

  const finalClassName = `${className || ''} date ${selected ? 'is-selected' : ''}`;

  // TODO: const timeIso = ct.formatIso(finalDate);
  // TODO: const timeLocalized = ct.formatInst(finalDate, 'localized-date-time');
  const timeIso = finalDate.toISOString();
  const timeLocalized = finalDate.toLocaleString();

  return (
    <>
      <Text as="time" typography="bodyMedium" className={finalClassName}>
        {timeIso}
      </Text>
      {/* <Text as="span" typography="bodySmall">{timeLocalized}</Text> */}
    </>
  );
}
