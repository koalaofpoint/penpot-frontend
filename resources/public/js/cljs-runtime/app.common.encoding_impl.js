import "./cljs_env.js";
import "./cljs.core.js";
goog.require("cljs.core");
goog.provide("app.common.encoding_impl");
goog.scope(function() {
  function hexToBuffer(input) {
    if (typeof input !== "string") {
      throw new TypeError("Expected input to be a string");
    }
    input = input.replace(/-/g, "");
    if (input.length % 2 !== 0) {
      throw new RangeError("Expected string to be an even number of characters");
    }
    const view = new Uint8Array(input.length / 2);
    for (let i = 0; i < input.length; i = i + 2) {
      view[i / 2] = parseInt(input.substring(i, i + 2), 16);
    }
    return view.buffer;
  }
  function bufferToHex(source, isUuid) {
    if (source instanceof Uint8Array) {
    } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (source.length != 16) {
      throw new RangeError("only 16 bytes array is allowed");
    }
    const spacer = isUuid ? "-" : "";
    let i = 0;
    return hexMap[source[i++]] + hexMap[source[i++]] + hexMap[source[i++]] + hexMap[source[i++]] + spacer + hexMap[source[i++]] + hexMap[source[i++]] + spacer + hexMap[source[i++]] + hexMap[source[i++]] + spacer + hexMap[source[i++]] + hexMap[source[i++]] + spacer + hexMap[source[i++]] + hexMap[source[i++]] + hexMap[source[i++]] + hexMap[source[i++]] + hexMap[source[i++]] + hexMap[source[i++]];
  }
  function getBaseCodec(ALPHABET) {
    function encode(source) {
      if (source instanceof Uint8Array) {
      } else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      let zeroes = 0;
      let length = 0;
      let pbegin = 0;
      let pend = source.length;
      for (; pbegin !== pend && source[pbegin] === 0;) {
        pbegin++;
        zeroes++;
      }
      let size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      let b58 = new Uint8Array(size);
      for (; pbegin !== pend;) {
        let carry = source[pbegin];
        let i = 0;
        for (let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
          carry = carry + (256 * b58[it1] >>> 0);
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i;
        pbegin++;
      }
      let it2 = size - length;
      for (; it2 !== size && b58[it2] === 0;) {
        it2++;
      }
      let str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str = str + ALPHABET.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      let psz = 0;
      let zeroes = 0;
      let length = 0;
      for (; source[psz] === LEADER;) {
        zeroes++;
        psz++;
      }
      let size = (source.length - psz) * FACTOR + 1 >>> 0;
      let b256 = new Uint8Array(size);
      for (; source[psz];) {
        let carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        let i = 0;
        for (let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
          carry = carry + (BASE * b256[it3] >>> 0);
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i;
        psz++;
      }
      let it4 = size - length;
      for (; it4 !== size && b256[it4] === 0;) {
        it4++;
      }
      let vch = new Uint8Array(zeroes + (size - it4));
      let j = zeroes;
      for (; it4 !== size;) {
        vch[j++] = b256[it4++];
      }
      return vch;
    }
    function decode(string) {
      let buffer = decodeUnsafe(string);
      if (buffer) {
        return buffer;
      }
      throw new Error("Non-base" + BASE + " character");
    }
    if (ALPHABET.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    let BASE_MAP = new Uint8Array(256);
    for (let j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (let i = 0; i < ALPHABET.length; i++) {
      let x = ALPHABET.charAt(i);
      let xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    let BASE = ALPHABET.length;
    let LEADER = ALPHABET.charAt(0);
    let FACTOR = Math.log(BASE) / Math.log(256);
    let iFACTOR = Math.log(256) / Math.log(BASE);
    return {encode:encode, decodeUnsafe:decodeUnsafe, decode:decode};
  }
  const core = cljs.core;
  const global = goog.global;
  const self = app.common.encoding_impl;
  const hexMap = [];
  for (let i = 0; i < 256; i++) {
    hexMap[i] = (i + 256).toString(16).substr(1);
  }
  self.hexToBuffer = hexToBuffer;
  self.bufferToHex = bufferToHex;
  const BASE62 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  self.bufferToBase62 = getBaseCodec(BASE62).encode;
});

//# sourceMappingURL=app.common.encoding_impl.js.map
