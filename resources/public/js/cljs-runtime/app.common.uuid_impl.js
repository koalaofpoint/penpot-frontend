import "./cljs_env.js";
import "./app.common.encoding_impl.js";
goog.require("app.common.encoding_impl");
goog.provide("app.common.uuid_impl");
goog.scope(function() {
  function toHexString(buf) {
    const hexMap = encoding.hexMap;
    let i = 0;
    return hexMap[buf[i++]] + hexMap[buf[i++]] + hexMap[buf[i++]] + hexMap[buf[i++]] + "-" + hexMap[buf[i++]] + hexMap[buf[i++]] + "-" + hexMap[buf[i++]] + hexMap[buf[i++]] + "-" + hexMap[buf[i++]] + hexMap[buf[i++]] + "-" + hexMap[buf[i++]] + hexMap[buf[i++]] + hexMap[buf[i++]] + hexMap[buf[i++]] + hexMap[buf[i++]] + hexMap[buf[i++]];
  }
  function getBigUint64(view, byteOffset, le) {
    const a = view.getUint32(byteOffset, le);
    const b = view.getUint32(byteOffset + 4, le);
    const leMask = Number(!!le);
    const beMask = Number(!le);
    return BigInt(a * beMask + b * leMask) << 32n | BigInt(a * leMask + b * beMask);
  }
  function setBigUint64(view, byteOffset, value, le) {
    const hi = Number(value >> 32n);
    const lo = Number(value & 4294967295n);
    if (le) {
      view.setUint32(byteOffset + 4, hi, le);
      view.setUint32(byteOffset, lo, le);
    } else {
      view.setUint32(byteOffset, hi, le);
      view.setUint32(byteOffset + 4, lo, le);
    }
  }
  function currentTimestamp(timeRef) {
    return BigInt.asUintN(64, "" + (Date.now() - timeRef));
  }
  function nextLong() {
    fill(tmpInt8);
    return getBigUint64(tmpView, 0, false);
  }
  const global = goog.global;
  const encoding = app.common.encoding_impl;
  const self = app.common.uuid_impl;
  const timeRef = 1640995200000;
  const fill = (() => {
    if (typeof global.crypto !== "undefined" && typeof global.crypto.getRandomValues !== "undefined") {
      return buf => {
        global.crypto.getRandomValues(buf);
        return buf;
      };
    } else if (typeof require === "function") {
      const crypto = require("crypto");
      const randomBytes = crypto["randomBytes"];
      return buf => {
        const bytes = randomBytes(buf.length);
        buf.set(bytes);
        return buf;
      };
    } else {
      console.warn("No SRNG available, switching back to Math.random.");
      return buf => {
        for (let i = 0, r; i < buf.length; i++) {
          if ((i & 3) === 0) {
            r = Math.random() * 4294967296;
          }
          buf[i] = r >>> ((i & 3) << 3) & 255;
        }
        return buf;
      };
    }
  })();
  const tmpBuff = new ArrayBuffer(8);
  const tmpView = new DataView(tmpBuff);
  const tmpInt8 = new Uint8Array(tmpBuff);
  self.shortID = function() {
    const buff = new ArrayBuffer(8);
    const int8 = new Uint8Array(buff);
    const view = new DataView(buff);
    const base = 0n;
    return function shortID(ts) {
      const tss = currentTimestamp(timeRef);
      const msb = base | nextLong() & 0xffffffff00000000n | tss & 4294967295n;
      setBigUint64(view, 0, msb, false);
      return encoding.toBase62(int8);
    };
  }();
  self.v4 = function() {
    const arr = new Uint8Array(16);
    return function v4() {
      fill(arr);
      arr[6] = arr[6] & 15 | 64;
      arr[8] = arr[8] & 63 | 128;
      return encoding.bufferToHex(arr, true);
    };
  }();
  self.v8 = function() {
    const buff = new ArrayBuffer(16);
    const int8 = new Uint8Array(buff);
    const view = new DataView(buff);
    const maxCs = 16383n;
    let countCs = 0n;
    let lastRd = 0n;
    let lastCs = 0n;
    let lastTs = 0n;
    let baseMsb = 32768n;
    let baseLsb = 0x8000000000000000n;
    lastRd = nextLong() & 0xfffffffffffff0ffn;
    lastCs = nextLong() & maxCs;
    const create = function create(ts, lastRd, lastCs) {
      const msb = baseMsb | lastRd & 0xffffffffffff0fffn;
      const lsb = baseLsb | ts << 14n & 0x3fffffffffffc000n | lastCs;
      setBigUint64(view, 0, msb, false);
      setBigUint64(view, 8, lsb, false);
      return encoding.bufferToHex(int8, true);
    };
    const factory = function v8() {
      for (; true;) {
        let ts = currentTimestamp(timeRef);
        if (ts - lastTs < 0) {
          lastRd = lastRd & 3840n | nextLong() & 0xfffffffffffff0ffn;
          countCs = 0n;
          continue;
        }
        if (lastTs === ts) {
          if (countCs < maxCs) {
            lastCs = lastCs + 1n & maxCs;
            countCs++;
          } else {
            continue;
          }
        } else {
          lastTs = ts;
          lastCs = nextLong() & maxCs;
          countCs = 0;
        }
        return create(ts, lastRd, lastCs);
      }
    };
    const fillBytes = uuid => {
      let rest;
      int8[0] = (rest = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      int8[1] = rest >>> 16 & 255;
      int8[2] = rest >>> 8 & 255;
      int8[3] = rest & 255;
      int8[4] = (rest = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      int8[5] = rest & 255;
      int8[6] = (rest = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      int8[7] = rest & 255;
      int8[8] = (rest = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      int8[9] = rest & 255, int8[10] = (rest = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
      int8[11] = rest / 4294967296 & 255;
      int8[12] = rest >>> 24 & 255;
      int8[13] = rest >>> 16 & 255;
      int8[14] = rest >>> 8 & 255;
      int8[15] = rest & 255;
    };
    const fromPair = (hi, lo) => {
      view.setBigInt64(0, hi);
      view.setBigInt64(8, lo);
      return encoding.bufferToHex(int8, true);
    };
    const getHi = uuid => {
      fillBytes(uuid);
      return view.getBigInt64(0);
    };
    const getLo = uuid => {
      fillBytes(uuid);
      return view.getBigInt64(8);
    };
    const getBytes = uuid => {
      fillBytes(uuid);
      return Int8Array.from(int8);
    };
    const getUnsignedParts = uuid => {
      fillBytes(uuid);
      const result = new Uint32Array(4);
      result[0] = view.getUint32(0);
      result[1] = view.getUint32(4);
      result[2] = view.getUint32(8);
      result[3] = view.getUint32(12);
      return result;
    };
    const fromUnsignedParts = (a, b, c, d) => {
      view.setUint32(0, a);
      view.setUint32(4, b);
      view.setUint32(8, c);
      view.setUint32(12, d);
      return encoding.bufferToHex(int8, true);
    };
    const fromArray = u8data => {
      int8.set(u8data);
      return encoding.bufferToHex(int8, true);
    };
    const setTag = tag => {
      tag = BigInt.asUintN(64, "" + tag);
      if (tag > 15n) {
        throw new Error("illegal arguments: tag value should fit in 4bits");
      }
      lastRd = lastRd & 0xfffffffffffff0ffn | tag << 8 & 3840n;
    };
    factory.create = create;
    factory.fromArray = fromArray;
    factory.fromPair = fromPair;
    factory.fromUnsignedParts = fromUnsignedParts;
    factory.getBytes = getBytes;
    factory.getHi = getHi;
    factory.getLo = getLo;
    factory.getUnsignedParts = getUnsignedParts;
    factory.setTag = setTag;
    return factory;
  }();
  self.shortV8 = function(uuid) {
    const buff = encoding.hexToBuffer(uuid);
    const short = new Uint8Array(buff, 4);
    return encoding.bufferToBase62(short);
  };
  self.custom = function formatAsUUID(hi, lo) {
    if (!(hi instanceof BigInt)) {
      hi = BigInt(hi);
    }
    if (!(hi instanceof BigInt)) {
      lo = BigInt(lo);
    }
    return self.v8.fromPair(hi, lo);
  };
  self.fromBytes = function(data) {
    if (data instanceof Uint8Array) {
      return self.v8.fromArray(data);
    } else if (data instanceof Int8Array) {
      return self.v8.fromArray(data);
    } else {
      throw new Error("invalid array type received");
    }
  };
  self.getBytes = function parse(uuid) {
    return self.v8.getBytes(uuid);
  };
  self.getUnsignedParts = function(uuid) {
    return self.v8.getUnsignedParts(uuid);
  };
  self.fromUnsignedParts = function(a, b, c, d) {
    return self.v8.fromUnsignedParts(a, b, c, d);
  };
  self.getHi = function(uuid) {
    return self.v8.getHi(uuid);
  };
  self.getLo = function(uuid) {
    return self.v8.getLo(uuid);
  };
});

//# sourceMappingURL=app.common.uuid_impl.js.map
