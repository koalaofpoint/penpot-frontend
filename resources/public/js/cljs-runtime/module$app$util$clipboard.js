import "./cljs_env.js";

var maxParseableSize$$module$app$util$clipboard = 16 * 1024 * 1024;
var allowedTypes$$module$app$util$clipboard = ["image/webp", "image/png", "image/jpeg", "image/svg+xml", "application/transit+json", "text/html", "text/plain"];
var exclusiveTypes$$module$app$util$clipboard = ["application/transit+json", "text/html", "text/plain"];
var looksLikeJSON$$module$app$util$clipboard = str => {
  if (typeof str !== "string") {
    return false;
  }
  const trimmed = str.trim();
  return trimmed.startsWith("{") && trimmed.endsWith("}") || trimmed.startsWith("[") && trimmed.endsWith("]");
};
function parseText$$module$app$util$clipboard(text, options) {
  options = options || {};
  const decodeTransit = options["decodeTransit"];
  if (decodeTransit && looksLikeJSON$$module$app$util$clipboard(text)) {
    try {
      decodeTransit(text);
      return new Blob([text], {type:"application/transit+json"});
    } catch (_error) {
      return new Blob([text], {type:"text/plain"});
    }
  }
  if (/^<svg[\s>]/i.test(text)) {
    return new Blob([text], {type:"image/svg+xml"});
  } else {
    return new Blob([text], {type:"text/plain"});
  }
}
function filterAllowedTypes$$module$app$util$clipboard(options) {
  function filter(type) {
    if ((!("allowHTMLPaste" in options) || !options["allowHTMLPaste"]) && type === "text/html") {
      return false;
    }
    return allowedTypes$$module$app$util$clipboard.includes(type);
  }
  return filter;
}
function filterAllowedItems$$module$app$util$clipboard(options) {
  function filter(item) {
    if ((!("allowHTMLPaste" in options) || !options["allowHTMLPaste"]) && item.type === "text/html") {
      return false;
    }
    return allowedTypes$$module$app$util$clipboard.includes(item.type);
  }
  return filter;
}
function sortTypes$$module$app$util$clipboard(a, b) {
  return allowedTypes$$module$app$util$clipboard.indexOf(a) - allowedTypes$$module$app$util$clipboard.indexOf(b);
}
function sortItems$$module$app$util$clipboard(a, b) {
  return allowedTypes$$module$app$util$clipboard.indexOf(a.type) - allowedTypes$$module$app$util$clipboard.indexOf(b.type);
}
async function fromNavigator$$module$app$util$clipboard(options) {
  options = options || {};
  const items = await navigator.clipboard.read();
  const result = await Promise.all(Array.from(items).map(async item => {
    const itemAllowedTypes = Array.from(item.types).filter(filterAllowedTypes$$module$app$util$clipboard(options)).sort(sortTypes$$module$app$util$clipboard);
    if (itemAllowedTypes.length === 1 && itemAllowedTypes.at(0) === "text/plain") {
      const blob = await item.getType("text/plain");
      if (blob.size < maxParseableSize$$module$app$util$clipboard) {
        const text = await blob.text();
        return parseText$$module$app$util$clipboard(text, options);
      } else {
        return blob;
      }
    }
    const type = itemAllowedTypes.at(0);
    if (type == null) {
      return null;
    }
    return item.getType(type);
  }));
  return result.filter(item => !!item);
}
async function fromDataTransfer$$module$app$util$clipboard(dataTransfer, options) {
  options = options || {};
  const items = await Promise.all(Array.from(dataTransfer.items).filter(filterAllowedItems$$module$app$util$clipboard(options)).sort(sortItems$$module$app$util$clipboard).map(async item => {
    if (item.kind === "file") {
      return Promise.resolve(item.getAsFile());
    } else if (item.kind === "string") {
      return new Promise(resolve => {
        const type = item.type;
        item.getAsString(text => {
          if (type === "text/plain") {
            return resolve(parseText$$module$app$util$clipboard(text, options));
          } else {
            return resolve(new Blob([text], {type}));
          }
        });
      });
    }
    return Promise.resolve(null);
  }));
  return items.filter(item => !!item).reduce((filtered, item) => {
    if (exclusiveTypes$$module$app$util$clipboard.includes(item.type) && filtered.find(filteredItem => exclusiveTypes$$module$app$util$clipboard.includes(filteredItem.type))) {
      return filtered;
    }
    filtered.push(item);
    return filtered;
  }, []);
}
function fromClipboardData$$module$app$util$clipboard(clipboardData, options) {
  return fromDataTransfer$$module$app$util$clipboard(clipboardData, options);
}
function fromClipboardEvent$$module$app$util$clipboard(e, options) {
  return fromClipboardData$$module$app$util$clipboard(e.clipboardData, options);
}
/** @const */ 
var module$app$util$clipboard = {};
/** @const */ 
module$app$util$clipboard.fromClipboardData = fromClipboardData$$module$app$util$clipboard;
/** @const */ 
module$app$util$clipboard.fromClipboardEvent = fromClipboardEvent$$module$app$util$clipboard;
/** @const */ 
module$app$util$clipboard.fromDataTransfer = fromDataTransfer$$module$app$util$clipboard;
/** @const */ 
module$app$util$clipboard.fromNavigator = fromNavigator$$module$app$util$clipboard;

$CLJS.module$app$util$clipboard=module$app$util$clipboard;
//# sourceMappingURL=module$app$util$clipboard.js.map
