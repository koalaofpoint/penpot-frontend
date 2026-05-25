import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$highlight.js";
import "./app.util.dom.js";
goog.provide('app.util.code_highlight');
app.util.code_highlight.highlight_BANG_ = (function app$util$code_highlight$highlight_BANG_(node){
app.util.dom.set_data_BANG_(node,"highlighted",null);

return shadow.js.shim.module$highlight.default.highlightElement(node);
});

//# sourceMappingURL=app.util.code_highlight.js.map
