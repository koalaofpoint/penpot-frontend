import "./cljs_env.js";

class WeakEqMap$$module$app$common$weak$impl_weak_map {
  constructor({equals, hash}) {
    this._equals = equals;
    this._hash = hash;
    this._buckets = new Map();
    this._fr = new FinalizationRegistry(({hash, token}) => {
      const bucket = this._buckets.get(hash);
      if (!bucket) {
        return;
      }
      let i = 0;
      for (; i < bucket.length;) {
        const e = bucket[i];
        const dead = e.keyRef.deref() === undefined;
        if (dead || e.token === token) {
          bucket[i] = bucket[bucket.length - 1];
          bucket.pop();
          continue;
        }
        i++;
      }
      if (bucket.length === 0) {
        this._buckets.delete(hash);
      }
    });
  }
  _getBucket(hash) {
    let b = this._buckets.get(hash);
    if (!b) {
      b = [];
      this._buckets.set(hash, b);
    }
    return b;
  }
  _findEntry(bucket, key) {
    let i = 0;
    let found = null;
    for (; i < bucket.length;) {
      const e = bucket[i];
      const k = e.keyRef.deref();
      if (k === undefined) {
        bucket[i] = bucket[bucket.length - 1];
        bucket.pop();
        continue;
      }
      if (found === null && this._equals(k, key)) {
        found = e;
      }
      i++;
    }
    return found;
  }
  set(key, value) {
    if (key === null || typeof key !== "object" && typeof key !== "function") {
      throw new TypeError("WeakEqMap keys must be objects (like WeakMap).");
    }
    const hash = this._hash(key);
    const bucket = this._getBucket(hash);
    const existing = this._findEntry(bucket, key);
    if (existing) {
      existing.value = value;
      return this;
    }
    const token = Object.create(null);
    const entry = {keyRef:new WeakRef(key), value, token};
    bucket.push(entry);
    this._fr.register(key, {hash, token}, entry);
    return this;
  }
  get(key) {
    const hash = this._hash(key);
    const bucket = this._buckets.get(hash);
    if (!bucket) {
      return undefined;
    }
    const e = this._findEntry(bucket, key);
    return e ? e.value : undefined;
  }
  has(key) {
    const hash = this._hash(key);
    const bucket = this._buckets.get(hash);
    if (!bucket) {
      return false;
    }
    return !!this._findEntry(bucket, key);
  }
  delete(key) {
    const hash = this._hash(key);
    const bucket = this._buckets.get(hash);
    if (!bucket) {
      return false;
    }
    let i = 0;
    for (; i < bucket.length;) {
      const e = bucket[i];
      const k = e.keyRef.deref();
      if (k === undefined) {
        bucket[i] = bucket[bucket.length - 1];
        bucket.pop();
        continue;
      }
      if (this._equals(k, key)) {
        this._fr.unregister(e);
        bucket[i] = bucket[bucket.length - 1];
        bucket.pop();
        if (bucket.length === 0) {
          this._buckets.delete(hash);
        }
        return true;
      }
      i++;
    }
    if (bucket.length === 0) {
      this._buckets.delete(hash);
    }
    return false;
  }
}
/** @const */ 
var module$app$common$weak$impl_weak_map = {};
/** @const */ 
module$app$common$weak$impl_weak_map.WeakEqMap = WeakEqMap$$module$app$common$weak$impl_weak_map;

$CLJS.module$app$common$weak$impl_weak_map=module$app$common$weak$impl_weak_map;
//# sourceMappingURL=module$app$common$weak$impl_weak_map.js.map
