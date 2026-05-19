import * as mousetrap from "@penpot/mousetrap";
import * as d from "../../common/data";
import * as log from "../../common/logging";
import * as sm from "../../common/schema";
import * as cf from "../../config";
import * as str from "cuerdas";
import * as ptk from "../types/ptok";

log.setLevel("warn");

// Constants for Mac symbols
const MAC_COMMAND = "⌘";
const MAC_OPTION = "⌥";
const MAC_DELETE = "⌫";
const MAC_SHIFT = "⇧";
const MAC_CONTROL = "⌃";
const MAC_ESC = "⎋";
const MAC_ENTER = "⏎";

// Arrow keys
const LEFT_ARROW = "←";
const UP_ARROW = "↑";
const RIGHT_ARROW = "→";
const DOWN_ARROW = "↓";
const TAB = "tab";

// Helper functions for shortcuts
export function cMod(shortcut: string): string {
  if (cf.checkPlatform("macos")) {
    return `command+${shortcut}`;
  }
  return `ctrl+${shortcut}`;
}

export function aMod(shortcut: string): string {
  return `alt+${shortcut}`;
}

export function caMod(shortcut: string): string {
  return cMod(aMod(shortcut));
}

export function meta(key: string): string {
  const key_ = !cf.checkPlatform("macos") && key === "+" ? "\"+\"" : key;
  return cf.checkPlatform("macos")
    ? `${MAC_COMMAND}${key_}`
    : `Ctrl+${key_}`;
}

export function shift(key: string): string {
  return cf.checkPlatform("macos")
    ? `${MAC_SHIFT}${key}`
    : `Shift+${key}`;
}

export function alt(key: string): string {
  return cf.checkPlatform("macos")
    ? `${MAC_OPTION}${key}`
    : `Alt+${key}`;
}

export function metaShift(key: string): string {
  return shift(meta(key));
}

export function metaAlt(key: string): string {
  return alt(meta(key));
}

export function altShift(key: string): string {
  return shift(alt(key));
}

export function supr(): string {
  return cf.checkPlatform("macos") ? MAC_DELETE : "Del";
}

export function esc(): string {
  return cf.checkPlatform("macos") ? MAC_ESC : "Escape";
}

export function enter(): string {
  return cf.checkPlatform("macos") ? MAC_ENTER : "Enter";
}

export function splitSc(sc: string): string[] {
  let sc_ = sc;
  if (str.includes(sc, "++")) {
    sc_ = str.replace(sc_, "++", "+plus");
  }

  if (sc_.length === 1) {
    return [sc_];
  }

  return str.split(sc_, /\+| /);
}

// Schema for shortcuts
const schemaShortcuts: sm.Schema = {
  type: "map",
  keys: { type: "keyword" },
  values: {
    type: "map",
    attrs: {
      command: { type: ["string", "array"] },
      fn: { type: "function", optional: true },
      tooltip: { type: "string", optional: true },
      type: { type: "string", optional: true },
      overwrite: { type: "boolean", optional: true },
      disabled: { type: "boolean", optional: true }
    }
  }
};

const checkShortcuts = sm.createCheckFn(schemaShortcuts);

function wrapCb(key: string, cb: Function): (event: any) => void {
  return (event: any) => {
    log.debug({ msg: `Shortcut ${key}` });
    if (event.preventDefault) {
      event.preventDefault();
    }
    cb(event);
  };
}

function bind!(shortcuts: any): void {
  const filtered = Object.entries(shortcuts).filter(([, value]) => !value.disabled);

  filtered.forEach(([key, shortcut]: [string, any]) => {
    const { command, fn, type, overwrite } = shortcut;
    const callback = wrapCb(key, fn);
    const undefined_ = (void 0) as undefined;

    const commands = Array.isArray(command)
      ? command
      : [command] as string[];

    if (type) {
      mousetrap.bind(commands, callback, type, overwrite);
    } else {
      mousetrap.bind(commands, callback, undefined_, overwrite);
    }
  });
}

export function reset_(): void {
  mousetrap.reset();
}

export function reset_(shortcuts?: any): void {
  mousetrap.reset();
  if (shortcuts) {
    bind!(shortcuts);
  }
}

const conj_ = (d.orderedMap as any) || (f => f)(d.orderedMap());

export function pushShortcuts(key: string, shortcuts: any): ptk.Event {
  if (typeof key !== "string") {
    throw new Error("expected a keyword for `key`");
  }

  const checkedShortcuts = checkShortcuts(shortcuts);

  return ptk.reify("push-shortcuts", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        shortcuts: conj_(state.shortcuts, [key, checkedShortcuts])
      };
    },
    effect(_state, _stream, _action) {
      reset_(checkedShortcuts);
    }
  });
}

export function popShortcuts(key: string): ptk.Event {
  return ptk.reify("pop-shortcuts", ptk.UpdateEvent, {
    update(state: any) {
      const newShortcuts = { ...state.shortcuts };
      delete newShortcuts[key];
      return {
        ...state,
        shortcuts: newShortcuts
      };
    },
    effect(state, _stream, _action) {
      const lastEntry = Object.entries(state.shortcuts).pop();
      if (lastEntry) {
        const [, shortcuts] = lastEntry;
        reset_(shortcuts);
      }
    }
  });
}