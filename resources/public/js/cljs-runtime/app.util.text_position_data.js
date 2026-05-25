import "./cljs_env.js";

goog.provide("app.util.text_position_data");
goog.scope(function() {
  function getRangeRects(node, start, end) {
    const range = document.createRange();
    range.setStart(node, start);
    range.setEnd(node, end);
    return [...range.getClientRects()].filter(r => {
      return r.width > 0;
    });
  }
  const self = app.util.text_position_data;
  const document = goog.global.document;
  self.parse_text_nodes = function(parent, textNode, textAlign) {
    const content = textNode.textContent;
    const textSize = content.length;
    let from = 0;
    let to = 0;
    let current = "";
    let result = [];
    let prevRect = null;
    let safeguard = false;
    for (; to < textSize;) {
      const rects = getRangeRects(textNode, from, to + 1);
      const splitByWords = textAlign == "justify" && content[to].trim() == "";
      if (rects.length > 1 && safeguard) {
        from++;
        to++;
        safeguard = false;
      } else if (rects.length > 1 || splitByWords) {
        const position = prevRect;
        result.push({node:parent, position:position, text:current});
        if (splitByWords) {
          to++;
        }
        from = to;
        current = "";
        safeguard = true;
      } else {
        prevRect = rects[0];
        current = current + content[to];
        to = to + 1;
        safeguard = false;
      }
    }
    const rects = getRangeRects(textNode, from, to);
    result.push({node:parent, position:rects[0], text:current});
    return result;
  };
});

//# sourceMappingURL=app.util.text_position_data.js.map
