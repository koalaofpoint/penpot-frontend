import tinycolor2 from "tinycolor2";
import * as str from "cuerdas";

const tinycolor = tinycolor2;

export function tinycolor_(x: any): boolean {
  return x instanceof tinycolor && x.isValid();
}

export function hex_(tc: any): boolean {
  return str.startsWith(tc.getFormat(), "hex");
}

export function validColor(colorStr: string): any {
  const tc = tinycolor(colorStr);
  if (!tc.isValid() || !tc.getFormat()) {
    return null;
  }

  // Reject hex values without a # prefix
  if (hex_(tc) && !str.startsWith(tc.getOriginalInput(), "#")) {
    return null;
  }

  return tc;
}

export function hexWithoutHashPrefix_(colorStr: string): boolean {
  if (colorStr.startsWith("#")) {
    return false;
  }

  const tc = tinycolor(colorStr);
  return str.startsWith(tc.getFormat(), "hex");
}

export function toString_(tc: any, format: string): string {
  const format_ = format === "rgba" ? "rgb" :
    format === "hsva" ? "hsv" :
    ["rgb", "hsv"].includes(format) ? format :
    "hex";

  return tc.toString(format_);
}

export function toHexString_(tc: any): string {
  if (!tinycolor_(tc)) {
    throw new Error("Expected valid tinycolor instance");
  }
  return tc.toHexString();
}

export function colorFormat_(tc: any): string {
  if (!tinycolor_(tc)) {
    throw new Error("Expected valid tinycolor instance");
  }
  return tc.getFormat();
}

export function alpha_(tc: any): number {
  if (!tinycolor_(tc)) {
    throw new Error("Expected valid tinycolor instance");
  }
  return tc.getAlpha();
}

export function setAlpha_(tc: any, alpha: number): any {
  if (!tinycolor_(tc)) {
    throw new Error("Expected valid tinycolor instance");
  }
  return tc.setAlpha(alpha);
}