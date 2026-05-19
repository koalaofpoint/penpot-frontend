// Vendor shim for okulary (atom/state library)
// This is a stub matching the ClojureScript okulary library API

export function atom(initialValue) {
  let value = initialValue;
  const watchers = new Map();

  const deref = () => value;

  const reset = (newValue) => {
    const oldValue = value;
    value = typeof newValue === 'function' ? newValue(value) : newValue;
    watchers.forEach((callback) => callback(value, oldValue));
    return value;
  };

  const swap = (fn) => {
    const oldValue = value;
    value = fn(value);
    watchers.forEach((callback) => callback(value, oldValue));
    return value;
  };

  const update = (fn) => {
    return swap((v) => {
      const result = fn(v);
      return Array.isArray(result) ? result : [...v, ...result];
    });
  };

  const addWatch = (key, callback) => {
    watchers.set(key, callback);
    return () => watchers.delete(key);
  };

  const removeWatch = (key) => {
    watchers.delete(key);
  };

  return {
    deref,
    reset,
    swap,
    update,
    addWatch,
    removeWatch,
  };
}

export function derived(atomOrFn, computeFn) {
  const derivedAtom = atom(computeFn(atomOrFn.deref ? atomOrFn.deref() : atomOrFn));

  if (atomOrFn.addWatch) {
    atomOrFn.addWatch('derived', (newVal) => {
      derivedAtom.reset(computeFn(newVal));
    });
  }

  return derivedAtom;
}

export function fromAtom(atom) {
  return atom.deref();
}

// Alias for interop with different import styles
export default { atom, derived, fromAtom };
