// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { defineComponent, PropType } from 'vue';
import { cssClass } from '@/app/main/style';
import { Icon, iconList } from '@/app/main/ui/ds/foundations/assets/icon';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  icon?: string;
  children?: string;
  class?: string;
  onRef?: (node: HTMLElement | null) => void;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = defineComponent({
  props: {
    variant: {
      type: String as PropType<ButtonProps['variant']>,
      default: 'primary'
    },
    icon: String,
    children: String,
    class: String,
    onRef: Function as PropType<ButtonProps['onRef']>,
    to: String,
    type: {
      type: String as PropType<ButtonProps['type']>,
      default: 'button'
    }
  },
  setup(props) {
    const internalClass = computed(() => cssClass({
      button: true,
      'button-link': props.to !== undefined,
      'button-primary': props.variant === 'primary',
      'button-secondary': props.variant === 'secondary',
      'button-ghost': props.variant === 'ghost',
      'button-destructive': props.variant === 'destructive'
    }));

    const element = computed(() => props.to ? 'a' : 'button');

    const propsData = computed(() => ({
      class: [props.class, internalClass.value],
      href: props.to,
      type: props.type,
      ref: (node: HTMLElement | null) => {
        if (props.onRef) {
          props.onRef(node);
        }
      }
    }));

    return () => (
      <component is={element.value} {...propsData.value}>
        {props.icon && <Icon iconId={props.icon} size="m" />}
        <span class={cssClass('label-wrapper')}>{props.children}</span>
      </component>
    );
  }
});