// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { defineComponent, PropType, computed, ref } from 'vue';
import { cssClass } from '@/app/main/style';
import { Icon, iconList } from '@/app/main/ui/ds/foundations/assets/icon';
import { Tooltip } from '@/app/main/ui/ds/tooltip';

interface IconButtonProps {
  class?: string;
  tooltipClass?: string;
  iconClass?: string;
  icon: string;
  ariaLabel: string;
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'action';
  children?: string;
}

export const IconButton = defineComponent({
  props: {
    class: String,
    tooltipClass: String,
    iconClass: String,
    icon: {
      type: String as PropType<IconButtonProps['icon']],
      required: true
    },
    ariaLabel: {
      type: String as PropType<IconButtonProps['ariaLabel']],
      required: true
    },
    tooltipPlacement: String as PropType<IconButtonProps['tooltipPlacement']],
    variant: {
      type: String as PropType<IconButtonProps['variant']],
      default: 'primary'
    },
    children: String
  },
  setup(props) {
    const buttonRef = ref<HTMLElement | null>(null);
    const tooltipId = ref(`tooltip-${Math.random().toString(36).substr(2, 9)}`);

    const variant = computed(() => props.variant || 'primary');

    const buttonClass = computed(() => cssClass({
      'icon-button': true,
      'icon-button-primary': variant.value === 'primary',
      'icon-button-secondary': variant.value === 'secondary',
      'icon-button-ghost': variant.value === 'ghost',
      'icon-button-action': variant.value === 'action',
      'icon-button-destructive': variant.value === 'destructive'
    }));

    const buttonProps = computed(() => ({
      class: [props.class, buttonClass.value],
      ref: buttonRef,
      'aria-labelledby': tooltipId.value
    }));

    return () => (
      <Tooltip
        content={props.ariaLabel}
        class={props.tooltipClass}
        triggerRef={buttonRef}
        placement={props.tooltipPlacement}
        id={tooltipId.value}
      >
        <button {...buttonProps.value}>
          <Icon iconId={props.icon} ariaHidden={true} class={props.iconClass} />
          {props.children}
        </button>
      </Tooltip>
    );
  }
});