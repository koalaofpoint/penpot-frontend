import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.path.js";
import "./app.main.refs.js";
import "./app.main.ui.shapes.path.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.workspace.shapes.debug.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.path');
app.main.ui.workspace.shapes.path.make_content_modifiers_ref = (function app$main$ui$workspace$shapes$path$make_content_modifiers_ref(id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (local){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(local,new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480));
}),app.main.refs.workspace_local);
});
app.main.ui.workspace.shapes.path.apply_content_modifiers = (function app$main$ui$workspace$shapes$path$apply_content_modifiers(shape,content_modifiers){
var shape__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.apply_content_modifiers,content_modifiers);
return app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$1(shape__$1);
});
app.main.ui.workspace.shapes.path.path_wrapper = (function app$main$ui$workspace$shapes$path$path_wrapper(props_73584){
var shape = props_73584.shape;
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var content_modifiers_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.ui.workspace.shapes.path.make_content_modifiers_ref(shape_id);
}));
var content_modifiers = rumext.v2.deref(content_modifiers_ref);
var editing_id = rumext.v2.deref(app.main.refs.selected_edition);
var editing_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_id,shape_id);
var shape__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(content_modifiers)],(function (){
var G__73585 = shape;
if((!((content_modifiers == null)))){
return app.main.ui.workspace.shapes.path.apply_content_modifiers(G__73585,content_modifiers);
} else {
return G__73585;
}
}));
return rumext.v2.jsxs(app.main.ui.shapes.shape.shape_container,{'shape':shape__$1,'pointerEvents':((editing_QMARK_)?"none":null),'children':[rumext.v2.jsx(app.main.ui.shapes.path.path_shape,{'shape':shape__$1}),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.shape_debug,{'shape':shape__$1}):null)]});
});

(app.main.ui.workspace.shapes.path.path_wrapper.displayName = "path-wrapper");


//# sourceMappingURL=app.main.ui.workspace.shapes.path.js.map
