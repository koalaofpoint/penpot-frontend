import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.path.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.shapes.export.js";
import "./app.main.ui.shapes.path.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.bool');
app.main.ui.shapes.bool.bool_shape = (function app$main$ui$shapes$bool$bool_shape(shape_wrapper){
var bool_shape__54347 = (function app$main$ui$shapes$bool$bool_shape_$_bool_shape(props_54346){
var props = props_54346;
var shape = (props["shape"]);
var child_objs = (props["childs"]);
var child_objs__$1 = app.main.ui.hooks.use_equal_memo(child_objs);
var metadata_QMARK_ = rumext.v2.use_ctx(app.main.ui.shapes.export$.include_metadata_ctx);
var content = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(child_objs__$1)],(function (){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
if((!((content == null)))){
return content;
} else {
if((!((child_objs__$1 == null)))){
return app.common.types.path.calc_bool_content(shape,child_objs__$1);
} else {
return null;
}
}
}));
var shape__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(content)],(function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),content);
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((!((content == null))))?rumext.v2.jsx(app.main.ui.shapes.path.path_shape,{'shape':shape__$1}):null),(cljs.core.truth_(metadata_QMARK_)?rumext.v2.jsx("penpot:bool",{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,item){
out_arr__46744__auto__.push(rumext.v2.jsx(shape_wrapper,{'shape':item},""+((item?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"id","id",-1388402092))) ?? "")));

return out_arr__46744__auto__;
}),[],cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54345_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(child_objs__$1,p1__54345_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape__$1)))}):null)]});
});
(bool_shape__54347.displayName = "bool-shape");

return bool_shape__54347;
});

//# sourceMappingURL=app.main.ui.shapes.bool.js.map
