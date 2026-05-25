import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.fills.js";
import "./app.config.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.util.code_gen.style_css.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.fill');
app.main.ui.inspect.attributes.fill.properties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"background-image","background-image",-1142314704)], null);
app.main.ui.inspect.attributes.fill.has_fill_QMARK_ = (function app$main$ui$inspect$attributes$fill$has_fill_QMARK_(shape){
var and__5023__auto__ = (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))));
if(and__5023__auto__){
var or__5025__auto__ = new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.seq(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape));
}
}
} else {
return and__5023__auto__;
}
});
app.main.ui.inspect.attributes.fill.fill_block = (function app$main$ui$inspect$attributes$fill$fill_block(props_74657){
var objects = props_74657.objects;
var shape = props_74657.shape;
var format_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hex","hex",41691346));
var format = cljs.core.deref(format_STAR_);
var color = app.common.types.fills.fill__GT_color(shape);
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (format__$1){
return cljs.core.reset_BANG_(format_STAR_,format__$1);
}));
return rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_fill__attributes-fill-block",'children':rumext.v2.jsx(app.main.ui.inspect.attributes.common.color_row,{'color':color,'format':format,'property':"Background",'on-change-format':on_change,'copy-data':app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$4(objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null)], null),app.main.ui.inspect.attributes.fill.properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),format], null))})});
});

(app.main.ui.inspect.attributes.fill.fill_block.displayName = "fill-block");

app.main.ui.inspect.attributes.fill.fill_block_styles_STAR_ = (function app$main$ui$inspect$attributes$fill$fill_block_styles_STAR_(props_74658){
var color_space = props_74658.colorSpace;
var objects = props_74658.objects;
var shape = props_74658.shape;
var color = app.common.types.fills.fill__GT_color(shape);
return rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_fill__attributes-fill-block",'children':rumext.v2.jsx(app.main.ui.inspect.attributes.common.color_row,{'color':color,'property':"Background",'format':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color_space),new cljs.core.Keyword(null,"hex","hex",41691346)),'copy-data':app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$4(objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null)], null),app.main.ui.inspect.attributes.fill.properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color_space)], null))})});
});

(app.main.ui.inspect.attributes.fill.fill_block_styles_STAR_.displayName = "fill-block-styles*");

app.main.ui.inspect.attributes.fill.fill_panel_STAR_ = (function app$main$ui$inspect$attributes$fill$fill_panel_STAR_(props_74659){
var shapes = props_74659.shapes;
var color_space = props_74659.colorSpace;
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.attributes.fill.has_fill_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_fill__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.fill"),'className':"main_ui_inspect_attributes_fill__title-wrapper",'classTitle':"main_ui_inspect_attributes_fill__fill-attr-title"}),rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_fill__attributes-content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"inspect-styles","inspect-styles",1359737423)))?((cljs.core.seq(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,value){
out_arr__46744__auto____$1.push(rumext.v2.jsx(app.main.ui.inspect.attributes.fill.fill_block_styles_STAR_,{'colorSpace':color_space,'shape':value},["fill-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')));

return out_arr__46744__auto____$1;
}),[],new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$2(shape,cljs.core.PersistentVector.EMPTY)):rumext.v2.jsx(app.main.ui.inspect.attributes.fill.fill_block_styles_STAR_,{'colorSpace':color_space,'shape':shape},["fill-block-only",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))].join(''))):((cljs.core.seq(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,value){
out_arr__46744__auto____$1.push(rumext.v2.jsx(app.main.ui.inspect.attributes.fill.fill_block,{'shape':value},["fill-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')));

return out_arr__46744__auto____$1;
}),[],new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$2(shape,cljs.core.PersistentVector.EMPTY)):rumext.v2.jsx(app.main.ui.inspect.attributes.fill.fill_block,{'shape':shape},["fill-block-only",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))].join('')))));

return out_arr__46744__auto__;
}),[],shapes__$1)})]});
} else {
return null;
}
});

(app.main.ui.inspect.attributes.fill.fill_panel_STAR_.displayName = "fill-panel*");


//# sourceMappingURL=app.main.ui.inspect.attributes.fill.js.map
