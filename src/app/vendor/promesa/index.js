// Vendor shim for promesa (promise utilities)
// This is a stub matching the ClojureScript promesa library API

export function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export function all(promises) {
  return Promise.all(promises);
}

export function race(promises) {
  return Promise.race(promises);
}

export function resolved(value) {
  return Promise.resolve(value);
}

export function rejected(error) {
  return Promise.reject(error);
}

export default { delay, all, race, resolved, rejected };
