import "./cljs_env.js";
import "./cljs.core.js";
import "./cuerdas.core.js";
goog.provide('app.render_wasm.performance');
app.render_wasm.performance.enabled_QMARK_ = (function app$render_wasm$performance$enabled_QMARK_(){
return false;
});
app.render_wasm.performance.create_memory = (function app$render_wasm$performance$create_memory(used,total){
return ({"used": used, "total": total});
});
app.render_wasm.performance.get_memory = (function app$render_wasm$performance$get_memory(){
return app.render_wasm.performance.create_memory(performance.memory.usedJSHeapSize,performance.memory.totalJSHeapSize);
});
app.render_wasm.performance.memory_measure = (function app$render_wasm$performance$memory_measure(){
var begin_memory = app.render_wasm.performance.get_memory();
return (function (){
var end_memory = app.render_wasm.performance.get_memory();
return ({"begin": begin_memory, "end": end_memory, "delta": app.render_wasm.performance.create_memory((end_memory.used - begin_memory.used),(end_memory.total - begin_memory.total))});
});
});

//# sourceMappingURL=app.render_wasm.performance.js.map
