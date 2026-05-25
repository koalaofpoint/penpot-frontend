import "./cljs_env.js";

goog.provide("app.util.globals");
goog.scope(function() {
  function createMockedEventEmitter(k) {
    return {addListener(...args) {
    }, removeListener(...args) {
    }, addEventListener(...args) {
    }, removeEventListener(...args) {
    }, dispatchEvent(...args) {
      return true;
    }};
  }
  var self = app.util.globals;
  self.global = globalThis;
  self.event = function(name, detail) {
    const options = {};
    if (detail !== undefined) {
      options.detail = detail;
    }
    return new CustomEvent(name, options);
  };
  self.dispatch_BANG_ = function(...args) {
    self.document.dispatchEvent(...args);
  };
  self.listen = function(...args) {
    self.document.addEventListener(...args);
  };
  self.unlisten = function(...args) {
    self.document.removeEventListener(...args);
  };
  self.window = function() {
    if (typeof goog.global.window !== "undefined") {
      return goog.global.window;
    } else {
      const mockWindow = createMockedEventEmitter();
      mockWindow.matchMedia = function(query) {
        const mediaObj = createMockedEventEmitter();
        mediaObj.matches = false;
        mediaObj.media = query;
        mediaObj.onchange = null;
        return mediaObj;
      };
      return mockWindow;
    }
  }();
  self.document = function() {
    if (typeof goog.global.document !== "undefined") {
      return goog.global.document;
    } else {
      return createMockedEventEmitter();
    }
  }();
  self.location = function() {
    if (typeof goog.global.location !== "undefined") {
      return goog.global.location;
    } else {
      return createMockedEventEmitter();
    }
  }();
  self.navigator = function() {
    if (typeof goog.global.navigator !== "undefined") {
      return goog.global.navigator;
    } else {
      return createMockedEventEmitter();
    }
  }();
  self.FormData = function() {
    if (typeof goog.global.FormData !== "undefined") {
      return goog.global.FormData;
    } else {
      return function() {
      };
    }
  }();
});

//# sourceMappingURL=app.util.globals.js.map
