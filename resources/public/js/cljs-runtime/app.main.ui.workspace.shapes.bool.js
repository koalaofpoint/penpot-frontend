import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.refs.js";
import "./app.main.ui.shapes.bool.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.workspace.shapes.common.js";
import "./app.main.ui.workspace.shapes.debug.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.bool');
app.main.ui.workspace.shapes.bool.bool_wrapper_factory = (function app$main$ui$workspace$shapes$bool$bool_wrapper_factory(shape_wrapper){
var bool_shape = app.main.ui.shapes.bool.bool_shape(shape_wrapper);
var bool_wrapper__73497 = (function (p1__73495_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__73495_SHARP_,app.main.ui.workspace.shapes.common.check_shape_props);
})((function app$main$ui$workspace$shapes$bool$bool_wrapper_factory_$_bool_wrapper(props_73496){
var props = props_73496;
var shape = (props["shape"]);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var child_sel_STAR_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.refs.is_child_selected_QMARK_(shape_id);
}));
var childs_STAR_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.refs.select_bool_children(shape_id);
}));
var child_sel_QMARK_ = rumext.v2.deref(child_sel_STAR_);
var childs = rumext.v2.deref(childs_STAR_);
var shape__$1 = (function (){var G__73498 = shape;
if(child_sel_QMARK_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__73498,new cljs.core.Keyword(null,"content","content",15833224));
} else {
return G__73498;
}
})();
return rumext.v2.jsxs(app.main.ui.shapes.shape.shape_container,{'shape':shape__$1,'children':[rumext.v2.jsx(bool_shape,{'shape':shape__$1,'childs':childs}),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.shape_debug,{'shape':shape__$1}):null)]});
}));
(bool_wrapper__73497.displayName = "bool-wrapper");

return bool_wrapper__73497;
});

//# sourceMappingURL=app.main.ui.workspace.shapes.bool.js.map
