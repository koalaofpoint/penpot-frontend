import "./cljs_env.js";

class WeakValueMap$$module$app$common$weak$impl_weak_value_map {
  constructor() {
    this._map = new Map();
    this._registry = new FinalizationRegistry(token => {
      this._map.delete(token.key);
    });
  }
  set(key, value) {
    const ref = new WeakRef(value);
    const token = {key};
    this._map.set(key, {ref, token});
    this._registry.register(value, token, token);
    return this;
  }
  get(key) {
    const entry = this._map.get(key);
    if (!entry) {
      return undefined;
    }
    const value = entry.ref.deref();
    if (value === undefined) {
      this._map.delete(key);
      return undefined;
    }
    return value;
  }
  has(key) {
    const entry = this._map.get(key);
    if (!entry) {
      return false;
    }
    if (entry.ref.deref() === undefined) {
      this._map.delete(key);
      return false;
    }
    return true;
  }
  delete(key) {
    const entry = this._map.get(key);
    if (!entry) {
      return false;
    }
    this._registry.unregister(entry.token);
    return this._map.delete(key);
  }
}
/** @const */ 
var module$app$common$weak$impl_weak_value_map = {};
/** @const */ 
module$app$common$weak$impl_weak_value_map.WeakValueMap = WeakValueMap$$module$app$common$weak$impl_weak_value_map;

$CLJS.module$app$common$weak$impl_weak_value_map=module$app$common$weak$impl_weak_value_map;
//# sourceMappingURL=module$app$common$weak$impl_weak_value_map.js.map
