import "./cljs_env.js";

goog.provide("app.util.path.path_impl_simplify");
goog.scope(function() {
  function getSqDist(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return dx * dx + dy * dy;
  }
  function getSqSegDist(p, p1, p2) {
    let x = p1.x;
    let y = p1.y;
    let dx = p2.x - x;
    let dy = p2.y - y;
    if (dx !== 0 || dy !== 0) {
      const t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);
      if (t > 1) {
        x = p2.x;
        y = p2.y;
      } else if (t > 0) {
        x = x + dx * t;
        y = y + dy * t;
      }
    }
    dx = p.x - x;
    dy = p.y - y;
    return dx * dx + dy * dy;
  }
  function simplifyRadialDist(points, sqTolerance) {
    let prevPoint = points[0];
    let newPoints = [prevPoint];
    let point;
    for (let i = 1, len = points.length; i < len; i++) {
      point = points[i];
      if (getSqDist(point, prevPoint) > sqTolerance) {
        newPoints.push(point);
        prevPoint = point;
      }
    }
    if (prevPoint !== point) {
      newPoints.push(point);
    }
    return newPoints;
  }
  function simplifyDPStep(points, first, last, sqTolerance, simplified) {
    let maxSqDist = sqTolerance;
    let index;
    for (let i = first + 1; i < last; i++) {
      let sqDist = getSqSegDist(points[i], points[first], points[last]);
      if (sqDist > maxSqDist) {
        index = i;
        maxSqDist = sqDist;
      }
    }
    if (maxSqDist > sqTolerance) {
      if (index - first > 1) {
        simplifyDPStep(points, first, index, sqTolerance, simplified);
      }
      simplified.push(points[index]);
      if (last - index > 1) {
        simplifyDPStep(points, index, last, sqTolerance, simplified);
      }
    }
  }
  function simplifyDouglasPeucker(points, sqTolerance) {
    let last = points.length - 1;
    let simplified = [points[0]];
    simplifyDPStep(points, 0, last, sqTolerance, simplified);
    simplified.push(points[last]);
    return simplified;
  }
  function simplify(points, tolerance, highestQuality) {
    if (points.length <= 2) {
      return points;
    }
    var sqTolerance = tolerance !== undefined ? tolerance * tolerance : 1;
    points = highestQuality ? points : simplifyRadialDist(points, sqTolerance);
    points = simplifyDouglasPeucker(points, sqTolerance);
    return points;
  }
  const self = app.util.path.path_impl_simplify;
  self.simplify = simplify;
});

//# sourceMappingURL=app.util.path.path_impl_simplify.js.map
