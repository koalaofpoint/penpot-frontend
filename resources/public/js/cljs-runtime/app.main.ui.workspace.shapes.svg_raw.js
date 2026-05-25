import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.svg.js";
import "./app.main.refs.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.shapes.svg_raw.js";
import "./app.main.ui.workspace.shapes.debug.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.svg_raw');
app.main.ui.workspace.shapes.svg_raw.svg_raw_wrapper_factory = (function app$main$ui$workspace$shapes$svg_raw$svg_raw_wrapper_factory(shape_wrapper){
var svg_raw_shape = app.main.ui.shapes.svg_raw.svg_raw_shape(shape_wrapper);
var svg_raw_wrapper__73675 = (function (p1__73673_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__73673_SHARP_,(function (new_props_73676,old_props_73677){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_73676.shape,old_props_73677.shape);
}));
})((function app$main$ui$workspace$shapes$svg_raw$svg_raw_wrapper_factory_$_svg_raw_wrapper(props_73674){
var props = props_73674;
var shape = (props["shape"]);
var childs_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))],(function (){
return app.main.refs.children_objects(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
}));
var childs = rumext.v2.deref(childs_ref);
var svg_tag = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null));
if(cljs.core.contains_QMARK_(app.common.svg.svg_group_safe_tags,svg_tag)){
return rumext.v2.jsxs(app.main.ui.shapes.shape.shape_container,{'shape':shape,'children':[rumext.v2.jsx(svg_raw_shape,{'shape':shape,'childs':childs}),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.shape_debug,{'shape':shape}):null)]});
} else {
return rumext.v2.jsx(svg_raw_shape,{'shape':shape,'childs':childs});
}
}));
(svg_raw_wrapper__73675.displayName = "svg-raw-wrapper");

return svg_raw_wrapper__73675;
});

//# sourceMappingURL=app.main.ui.workspace.shapes.svg_raw.js.map
