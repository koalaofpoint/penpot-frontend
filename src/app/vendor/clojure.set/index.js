// Vendor shim for clojure.set
// This is a stub matching the ClojureScript clojure.set library API

export function union(...sets) {
  const result = new Set();
  sets.forEach((set) => {
    if (set instanceof Set) {
      set.forEach((item) => result.add(item));
    } else if (Array.isArray(set)) {
      set.forEach((item) => result.add(item));
    } else if (typeof set === 'object') {
      Object.values(set).forEach((item) => result.add(item));
    }
  });
  return result;
}

export function intersection(set1, set2) {
  const result = new Set();
  const iterable = set2 instanceof Set ? set2 : new Set(set2);
  set1.forEach((item) => {
    if (iterable.has(item)) result.add(item);
  });
  return result;
}

export function difference(set1, set2) {
  const result = new Set(set1);
  const iterable = set2 instanceof Set ? set2 : new Set(set2);
  iterable.forEach((item) => result.delete(item));
  return result;
}

export default { union, intersection, difference };
