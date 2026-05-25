import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.config.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.util.code_gen.style_css.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.stroke');
app.main.ui.inspect.attributes.stroke.properties = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"border-width","border-width",-1512605390)], null);
app.main.ui.inspect.attributes.stroke.stroke__GT_color = (function app$main$ui$inspect$attributes$stroke$stroke__GT_color(shape){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(shape)], null);
});
app.main.ui.inspect.attributes.stroke.has_stroke_QMARK_ = (function app$main$ui$inspect$attributes$stroke$has_stroke_QMARK_(shape){
return cljs.core.seq(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape));
});
app.main.ui.inspect.attributes.stroke.stroke_block = (function app$main$ui$inspect$attributes$stroke$stroke_block(props_74684){
var stroke = props_74684.stroke;
var objects = props_74684.objects;
var shape = props_74684.shape;
var format_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hex","hex",41691346));
var format = cljs.core.deref(format_STAR_);
var color = app.main.ui.inspect.attributes.stroke.stroke__GT_color(stroke);
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (format__$1){
return cljs.core.reset_BANG_(format_STAR_,format__$1);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_stroke__attributes-fill-block",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,property){
out_arr__46744__auto__.push((function (){var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
var property_value = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,stroke,property);
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_stroke__stroke-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':property_name}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,stroke,property),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_stroke__button-children",'children':property_value})})})]},["stroke-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)].join(''));
})());

return out_arr__46744__auto__;
}),[],app.main.ui.inspect.attributes.stroke.properties),rumext.v2.jsx(app.main.ui.inspect.attributes.common.color_row,{'color':color,'property':"Border color",'format':format,'on-change-format':on_change,'copy-data':app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$3(objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null)], null),app.main.ui.inspect.attributes.stroke.properties)})]});
});

(app.main.ui.inspect.attributes.stroke.stroke_block.displayName = "stroke-block");

app.main.ui.inspect.attributes.stroke.stroke_block_styles_STAR_ = (function app$main$ui$inspect$attributes$stroke$stroke_block_styles_STAR_(props_74685){
var color_space = props_74685.colorSpace;
var stroke = props_74685.stroke;
var objects = props_74685.objects;
var shape = props_74685.shape;
var color = app.main.ui.inspect.attributes.stroke.stroke__GT_color(stroke);
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_stroke__attributes-fill-block",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,property){
out_arr__46744__auto__.push((function (){var property_name = app.main.ui.inspect.attributes.common.get_css_rule_humanized(property);
var property_value = app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,stroke,property);
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_stroke__stroke-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':property_name}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,stroke,property),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_stroke__button-children",'children':property_value})})})]},["stroke-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property)].join(''));
})());

return out_arr__46744__auto__;
}),[],app.main.ui.inspect.attributes.stroke.properties),rumext.v2.jsx(app.main.ui.inspect.attributes.common.color_row,{'color':color,'property':"Border color",'format':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color_space),new cljs.core.Keyword(null,"hex","hex",41691346)),'copyData':app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$4(objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null)], null),app.main.ui.inspect.attributes.stroke.properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color_space)], null))})]});
});

(app.main.ui.inspect.attributes.stroke.stroke_block_styles_STAR_.displayName = "stroke-block-styles*");

app.main.ui.inspect.attributes.stroke.stroke_panel_STAR_ = (function app$main$ui$inspect$attributes$stroke$stroke_panel_STAR_(props_74686){
var shapes = props_74686.shapes;
var color_space = props_74686.colorSpace;
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.attributes.stroke.has_stroke_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_stroke__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.stroke"),'className':"main_ui_inspect_attributes_stroke__title-wrapper",'titleClass':"main_ui_inspect_attributes_stroke__stroke-attr-title"}),rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_stroke__attributes-content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,stroke){
out_arr__46744__auto____$1.push(((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"inspect-styles","inspect-styles",1359737423)))?rumext.v2.jsx(app.main.ui.inspect.attributes.stroke.stroke_block_styles_STAR_,{'shape':shape,'colorSpace':color_space,'stroke':stroke},["stroke-color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stroke)].join('')):rumext.v2.jsx(app.main.ui.inspect.attributes.stroke.stroke_block,{'shape':shape,'stroke':stroke},["stroke-color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stroke)].join(''))));

return out_arr__46744__auto____$1;
}),[],new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes__$1)})]});
} else {
return null;
}
});

(app.main.ui.inspect.attributes.stroke.stroke_panel_STAR_.displayName = "stroke-panel*");


//# sourceMappingURL=app.main.ui.inspect.attributes.stroke.js.map
