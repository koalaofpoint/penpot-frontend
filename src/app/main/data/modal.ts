// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { uuid } from "../../common/uuid";
import { ev } from "./event";
import { st } from "./store";
import { ptk } from "../../potok/v2";

const components: Record<string, any> = {};

// TODO: rename `:type` to `:name`

export interface ModalProps {
  type?: string;
  name?: string;
  id?: string;
  [key: string]: any;
}

export interface ModalState {
  id: string;
  type: string;
  props: ModalProps;
  allowClickOutside: boolean;
}

export type ModalEvent = ptk.PtkEvent & ev.Event & ptk.UpdateEvent;

export const show = (props: ModalProps): ModalEvent => {
  return showWithId(uuid.next(), props.type || "modal", props);
};

export const showWithType = (type: string, props: ModalProps): ModalEvent => {
  return showWithId(uuid.next(), type, props);
};

export const showWithId = (id: string, type: string, props: ModalProps): ModalEvent => {
  const finalProps = { ...props, type: undefined };
  const name = props.name || type;

  return ptk.reify("show-modal", {
    get data() {
      return {
        ...finalProps,
        name,
      };
    },

    update(state: any): any {
      const modalState: ModalState = {
        id,
        type: name,
        props: finalProps,
        allowClickOutside: false,
      };
      return {
        ...state,
        "::modal": modalState,
      };
    },
  });
};

export const updateProps = (type: string, props: ModalProps) => {
  return ptk.reify("update-modal-props", {
    update(state: any): any {
      if (state["::modal"]) {
        return {
          ...state,
          "::modal": {
            ...state["::modal"],
            props: {
              ...state["::modal"].props,
              ...props,
            },
          },
        };
      }
      return state;
    },
  });
};

export const hide = () => {
  return ptk.reify("hide-modal", {
    update(state: any): any {
      const { ["::modal"]: _, ...rest } = state;
      return rest;
    },
  });
};

export const update = (options: Partial<ModalState>) => {
  return ptk.reify("update-modal", {
    update(state: any): any {
      if (state["::modal"]) {
        return {
          ...state,
          "::modal": {
            ...state["::modal"],
            ...options,
          },
        };
      }
      return state;
    },
  });
};

// Convenience functions that emit events
export const show_ = (props: ModalProps): void => {
  st.emit(show(props));
};

export const showWithType_ = (type: string, props: ModalProps): void => {
  st.emit(showWithType(type, props));
};

export const updateProps_ = (type: string, props: ModalProps): void => {
  st.emit(updateProps(type, props));
};

export const allowClickOutside_ = (): void => {
  st.emit(update({ allowClickOutside: true }));
};

export const disallowClickOutside_ = (): void => {
  st.emit(update({ allowClickOutside: false }));
};

export const hide_ = (): void => {
  st.emit(hide());
};