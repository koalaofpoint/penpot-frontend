import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.workspace.shapes.debug.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.common');
app.main.ui.workspace.shapes.common.check_shape_props = (function app$main$ui$workspace$shapes$common$check_shape_props(np,op){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((np["shape"]),(op["shape"]));
});
app.main.ui.workspace.shapes.common.generic_wrapper_factory = (function app$main$ui$workspace$shapes$common$generic_wrapper_factory(component){
var generic_wrapper__73491 = (function (p1__73489_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__73489_SHARP_,app.main.ui.workspace.shapes.common.check_shape_props);
})((function app$main$ui$workspace$shapes$common$generic_wrapper_factory_$_generic_wrapper(props_73490){
var props = props_73490;
var shape = (props["shape"]);
return rumext.v2.jsxs(app.main.ui.shapes.shape.shape_container,{'shape':shape,'children':[rumext.v2.jsx(component,{'shape':shape}),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.shape_debug,{'shape':shape}):null)]});
}));
(generic_wrapper__73491.displayName = "generic-wrapper");

return generic_wrapper__73491;
});

//# sourceMappingURL=app.main.ui.workspace.shapes.common.js.map
