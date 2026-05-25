import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.text.js";
import "./app.main.fonts.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.text.fo_text.js";
import "./app.main.ui.shapes.text.svg_text.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.text');
app.main.ui.shapes.text.load_fonts_BANG_ = (function app$main$ui$shapes$text$load_fonts_BANG_(content){
var extract_fn = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718));
var default$ = extract_fn(app.common.types.text.default_typography);
return cljs.core.run_BANG_((function (p__54930){
var vec__54931 = p__54930;
var font_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54931,(0),null);
var variant_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54931,(1),null);
if((!((font_id == null)))){
return app.main.fonts.ensure_loaded_BANG_.cljs$core$IFn$_invoke$arity$2(font_id,variant_id);
} else {
return null;
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([default$]),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(extract_fn),cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),content)));
});
app.main.ui.shapes.text.text_shape = (function app$main$ui$shapes$text$text_shape(props_54934){
var props = props_54934;
var map__54935 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var map__54935__$1 = cljs.core.__destructure_map(map__54935);
var shape = map__54935__$1;
var position_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54935__$1,new cljs.core.Keyword(null,"position-data","position-data",-499622376));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54935__$1,new cljs.core.Keyword(null,"content","content",15833224));
var is_render_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.is_render_QMARK_);
var is_component_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.is_component_QMARK_);
rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(content)],(function (){
return app.main.ui.shapes.text.load_fonts_BANG_(content);
}));

if((!((position_data == null)))){
return rumext.v2.create_element(app.main.ui.shapes.text.svg_text.text_shape,props);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = (position_data == null);
if(and__5023__auto__){
var or__5025__auto__ = is_component_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return is_render_QMARK_;
}
} else {
return and__5023__auto__;
}
})())){
return rumext.v2.create_element(app.main.ui.shapes.text.fo_text.text_shape,props);
} else {
return null;
}
}
});

(app.main.ui.shapes.text.text_shape.displayName = "text-shape");


//# sourceMappingURL=app.main.ui.shapes.text.js.map
