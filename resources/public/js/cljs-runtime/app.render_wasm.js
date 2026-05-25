import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.path.js";
import "./app.common.types.shape.js";
import "./app.render_wasm.api.js";
import "./app.render_wasm.shape.js";
goog.provide('app.render_wasm');
app.render_wasm.module = app.render_wasm.api.module;
app.render_wasm.initialize = (function app$render_wasm$initialize(enabled_QMARK_){
if(cljs.core.truth_(enabled_QMARK_)){
(app.common.types.path.wasm_COLON_calc_bool_content = app.render_wasm.api.calculate_bool);
} else {
(app.common.types.path.wasm_COLON_calc_bool_content = null);
}

(app.common.types.shape.wasm_enabled_QMARK_ = enabled_QMARK_);

return (app.common.types.shape.wasm_create_shape = app.render_wasm.shape.create_shape);
});

//# sourceMappingURL=app.render_wasm.js.map
