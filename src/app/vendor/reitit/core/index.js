// Vendor shim for reitit (routing)
// This is a stub matching the ClojureScript reitit library API

export function createRouter(routes, options = {}) {
  return {
    routes,
    match(path) {
      for (const [pathPattern, handler] of routes) {
        if (path === pathPattern) {
          return { path, handler };
        }
      }
      return null;
    },
    navigate(path) {
      const match = this.match(path);
      if (match && match.handler) {
        match.handler();
      }
    },
  };
}

export function createRoute(name, path, handlers = {}) {
  return { name, path, ...handlers };
}

export default { createRouter, createRoute };
