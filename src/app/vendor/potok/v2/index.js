// Vendor shim for potok v2 (event/store library)
// This is a stub matching the ClojureScript potok library API

let storeInstance = null;
const resolvers = new Map();

export const PotokV2 = {
  store(options) {
    storeInstance = {
      state: options.initialState || {},
      listeners: new Set(),
      onEvent: options.onEvent || (() => {}),
      onError: options.onError || console.error,
      resolve: options.resolve || ((type, data) => ({ type, data })),
    };
    return storeInstance;
  },

  inputStream(store) {
    return {
      stream: store,
      filter(predicate) {
        return this;
      },
      map(fn) {
        return this;
      },
      pipe(...ops) {
        return ops.reduce((s, op) => op(s), this);
      },
      subscribe(callback) {
        store.listeners.add(callback);
        return () => store.listeners.delete(callback);
      },
    };
  },

  emit(store, ...events) {
    events.forEach((event) => {
      store.onEvent(event);
      store.listeners.forEach((listener) => listener(event));
    });
  },

  isEvent(e) {
    return e && typeof e === 'object' && e.constructor && e.constructor.name === 'Event';
  },

  isType(type) {
    return (e) => e && e.type === type;
  },

  type(e) {
    return e ? e.type : undefined;
  },

  reprEvent(e) {
    return e ? JSON.stringify(e) : 'null';
  },

  dataEvent(type, data) {
    return { type, data, constructor: { name: 'Event' } };
  },

  addResolver(name, fn) {
    resolvers.set(name, fn);
  },

  defaultResolver(type, data) {
    return resolvers.get('default') ? resolvers.get('default')(type, data) : { type, data };
  },

  defaultResolverFn(type, data) {
    return { type, data };
  },
};

export default PotokV2;
