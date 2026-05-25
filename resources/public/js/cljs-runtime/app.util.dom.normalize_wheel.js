import "./cljs_env.js";

goog.provide("app.util.dom.normalize_wheel");
goog.scope(function() {
  function normalizeWheel(event) {
    var sX = 0;
    var sY = 0;
    var pX = 0;
    var pY = 0;
    if ("detail" in event) {
      sY = event.detail;
    }
    if ("wheelDelta" in event) {
      sY = -event.wheelDelta / 120;
    }
    if ("wheelDeltaY" in event) {
      sY = -event.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in event) {
      sX = -event.wheelDeltaX / 120;
    }
    if ("axis" in event && event.axis === event.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in event) {
      pY = event.deltaY;
    }
    if ("deltaX" in event) {
      pX = event.deltaX;
    }
    if ((pX || pY) && event.deltaMode) {
      if (event.deltaMode == 1) {
        pX = pX * LINE_HEIGHT;
        pY = pY * LINE_HEIGHT;
      } else {
        pX = pX * PAGE_HEIGHT;
        pY = pY * PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {spinX:sX, spinY:sY, pixelX:pX, pixelY:pY};
  }
  const self = app.util.dom.normalize_wheel;
  const PIXEL_STEP = 10;
  const LINE_HEIGHT = 40;
  const PAGE_HEIGHT = 800;
  self.normalize_wheel = normalizeWheel;
});

//# sourceMappingURL=app.util.dom.normalize_wheel.js.map
