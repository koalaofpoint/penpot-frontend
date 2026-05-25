import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.text.js";
import "./app.common.types.fills.js";
import "./app.common.types.text.js";
import "./app.main.fonts.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.main.ui.inspect.common.typography.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.text');
app.main.ui.inspect.attributes.text.has_text_QMARK_ = (function app$main$ui$inspect$attributes$text$has_text_QMARK_(shape){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
});
app.main.ui.inspect.attributes.text.copy_style_data = (function app$main$ui$inspect$attributes$text$copy_style_data(var_args){
var args__5755__auto__ = [];
var len__5749__auto___74742 = arguments.length;
var i__5750__auto___74743 = (0);
while(true){
if((i__5750__auto___74743 < len__5749__auto___74742)){
args__5755__auto__.push((arguments[i__5750__auto___74743]));

var G__74744 = (i__5750__auto___74743 + (1));
i__5750__auto___74743 = G__74744;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic = (function (style,properties){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74706_SHARP_){
return ""+(app.common.data.name(p1__74706_SHARP_) ?? "")+": "+(cljs.core.get.cljs$core$IFn$_invoke$arity$2(style,p1__74706_SHARP_) ?? "")+";";
}),properties));
}));

(app.main.ui.inspect.attributes.text.copy_style_data.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.ui.inspect.attributes.text.copy_style_data.cljs$lang$applyTo = (function (seq74707){
var G__74708 = cljs.core.first(seq74707);
var seq74707__$1 = cljs.core.next(seq74707);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74708,seq74707__$1);
}));

app.main.ui.inspect.attributes.text.typography_block = (function app$main$ui$inspect$attributes$text$typography_block(props_74717){
var map__74718 = rumext.v2.util.wrap_props(props_74717);
var map__74718__$1 = cljs.core.__destructure_map(map__74718);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74718__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74718__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var color_format_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hex","hex",41691346));
var color_format = cljs.core.deref(color_format_STAR_);
var typography = app.main.ui.inspect.common.typography.get_typography(style);
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__attributes-content",'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(style))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74719){
var vec__74720 = p__74719;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74720,(0),null);
var fill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74720,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.attributes.common.color_row,{'format':color_format,'color':app.common.types.fills.fill__GT_color(fill),'copy-data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(fill,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870)], 0)),'on-change-format':(function (p1__74716_SHARP_){
return cljs.core.reset_BANG_(color_format_STAR_,p1__74716_SHARP_);
})},idx));

return out_arr__46744__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(style))):null),(cljs.core.truth_(new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__text-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography")}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(typography,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-style","font-style",-773672352)], 0)),'className':"main_ui_inspect_attributes_text__copy-btn-wrapper",'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_text__button-children",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography)})})})]}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__text-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':"Font Family"}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(style,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font-family","font-family",-667419874)], 0)),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_text__button-children",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.main.fonts.get_font_data(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(style)))})})})]}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__text-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':"Font Style"}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(style,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font-style","font-style",-773672352)], 0)),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_text__button-children",'children':""+(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(style) ?? "")})})})]}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__text-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':"Font Size"}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(style,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(style))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], 0)),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_text__button-children",'children':app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(style))})})})]}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__text-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':"Font Weight"}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(style,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font-weight","font-weight",2085804583)], 0)),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_text__button-children",'children':""+(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(style) ?? "")})})})]}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__text-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':"Line Height"}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(style,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line-height","line-height",1870784992)], 0)),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_text__button-children",'children':app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(style))})})})]}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__text-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':"Letter Spacing"}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(style,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767)], 0)),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_text__button-children",'children':app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$1(style))})})})]}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__text-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':"Text Decoration"}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(style,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207)], 0)),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_text__button-children",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(""+"inspect.attributes.typography.text-decoration."+(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(style) ?? ""))})})})]}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__text-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':"Text Transform"}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.text.copy_style_data.cljs$core$IFn$_invoke$arity$variadic(style,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text-transform","text-transform",1685000676)], 0)),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_text__button-children",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(""+"inspect.attributes.typography.text-transform."+(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(style) ?? ""))})})})]}):null),rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(text),'className':"main_ui_inspect_attributes_text__attributes-content-row",'children':rumext.v2.jsx("span",{'style':{'fontFamily':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(style),'fontWeight':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(style),'fontStyle':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(style)},'className':"main_ui_inspect_attributes_text__content",'children':cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(text)})})]});
});

(app.main.ui.inspect.attributes.text.typography_block.displayName = "typography-block");

app.main.ui.inspect.attributes.text.text_block = (function app$main$ui$inspect$attributes$text$text_block(props_74723){
var map__74724 = rumext.v2.util.wrap_props(props_74723);
var map__74724__$1 = cljs.core.__destructure_map(map__74724);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74724__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var style_text_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__74725){
var vec__74726 = p__74725;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74726,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74726,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.get_default_text_attrs(),style], 0)),text],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__74729){
var vec__74730 = p__74729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74730,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74730,(1),null);
return cuerdas.core.empty_QMARK_(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(text));
}),app.common.text.content__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74733){
var vec__74734 = p__74733;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74734,(0),null);
var vec__74737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74734,(1),null);
var full_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74737,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74737,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.attributes.text.typography_block,{'shape':shape,'style':full_style,'text':text},idx));

return out_arr__46744__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,style_text_blocks));
});

(app.main.ui.inspect.attributes.text.text_block.displayName = "text-block");

app.main.ui.inspect.attributes.text.text_panel = (function app$main$ui$inspect$attributes$text$text_panel(props_74740){
var map__74741 = rumext.v2.util.wrap_props(props_74740);
var map__74741__$1 = cljs.core.__destructure_map(map__74741);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74741__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var temp__5825__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.attributes.text.has_text_QMARK_,shapes));
if(temp__5825__auto__){
var shapes__$1 = temp__5825__auto__;
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_text__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography"),'className':"main_ui_inspect_attributes_text__title-wrapper",'titleClass':"main_ui_inspect_attributes_text__text-atrr-title"}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.attributes.text.text_block,{'shape':shape},""+"text-block"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")));

return out_arr__46744__auto__;
}),[],shapes__$1)]});
} else {
return null;
}
});

(app.main.ui.inspect.attributes.text.text_panel.displayName = "text-panel");


//# sourceMappingURL=app.main.ui.inspect.attributes.text.js.map
