import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.fills.js";
import "./app.common.types.text.js";
import "./app.main.fonts.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.inspect.common.typography.js";
import "./app.main.ui.inspect.styles.property_detail_copiable.js";
import "./app.main.ui.inspect.styles.rows.color_properties_row.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./app.util.clipboard.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.text');
app.main.ui.inspect.styles.panels.text.get_applied_tokens_in_shape = (function app$main$ui$inspect$styles$panels$text$get_applied_tokens_in_shape(shape_tokens,property){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_tokens,property);
});
app.main.ui.inspect.styles.panels.text.get_resolved_token = (function app$main$ui$inspect$styles$panels$text$get_resolved_token(property,shape,resolved_tokens){
var shape_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
var applied_tokens_in_shape = app.main.ui.inspect.styles.panels.text.get_applied_tokens_in_shape(shape_tokens,property);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,applied_tokens_in_shape);
return token;
});
app.main.ui.inspect.styles.panels.text.get_style_text = (function app$main$ui$inspect$styles$panels$text$get_style_text(shape){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__74920){
var vec__74921 = p__74920;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74921,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74921,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.get_default_text_attrs(),style], 0)),text],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__74924){
var vec__74925 = p__74924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74925,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74925,(1),null);
return cuerdas.core.empty_QMARK_(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(text));
}),app.common.types.text.content__GT_text_PLUS_styles(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))));
});
app.main.ui.inspect.styles.panels.text.generate_typography_shorthand = (function app$main$ui$inspect$styles$panels$text$generate_typography_shorthand(shapes){
var shape = cljs.core.first(shapes);
var style_text_blocks = app.main.ui.inspect.styles.panels.text.get_style_text(shape);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__74928){
var vec__74929 = p__74928;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74929,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74929,(1),null);
var font_style = new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(style);
var font_family = ""+(new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(style) ?? "");
var font_size = new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(style);
var font_weight = new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(style);
var line_height = new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(style);
var text_transform = new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(style);
return ""+(acc ?? "")+"font:"+(font_style ?? "")+" "+(text_transform ?? "")+" "+(font_weight ?? "")+" "+(font_size ?? "")+"/"+(line_height ?? "")+" "+("\"" ?? "")+(font_family ?? "")+("\"" ?? "")+";";
}),"",style_text_blocks);
});
app.main.ui.inspect.styles.panels.text.typography_name_block_STAR_ = (function app$main$ui$inspect$styles$panels$text$typography_name_block_STAR_(props_74932){
var style = props_74932.style;
var typography = app.main.ui.inspect.common.typography.get_typography(style);
var property_value = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography);
if(cljs.core.truth_(typography)){
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Typography",'detail':property_value,'property':property_value,'copiable':true});
} else {
return null;
}
});

(app.main.ui.inspect.styles.panels.text.typography_name_block_STAR_.displayName = "typography-name-block*");

app.main.ui.inspect.styles.panels.text.typography_color_row_STAR_ = (function app$main$ui$inspect$styles$panels$text$typography_color_row_STAR_(props_74933){
var color_space = props_74933.colorSpace;
var resolved_tokens = props_74933.resolvedTokens;
var fill = props_74933.fill;
var shape = props_74933.shape;
var color = app.common.types.fills.fill__GT_color(fill);
var resolved_token = app.main.ui.inspect.styles.panels.text.get_resolved_token(new cljs.core.Keyword(null,"fill","fill",883462889),shape,resolved_tokens);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.color_properties_row.color_properties_row_STAR_,{'term':"Font Color",'color':color,'token':resolved_token,'format':color_space,'copiable':true});
});

(app.main.ui.inspect.styles.panels.text.typography_color_row_STAR_.displayName = "typography-color-row*");

app.main.ui.inspect.styles.panels.text.style_text_block_STAR_ = (function app$main$ui$inspect$styles$panels$text$style_text_block_STAR_(props_74934){
var text = props_74934.text;
var color_space = props_74934.colorSpace;
var resolved_tokens = props_74934.resolvedTokens;
var style = props_74934.style;
var shape = props_74934.shape;
var copied_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var copied = cljs.core.deref(copied_STAR_);
var text__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(text);
var copy_text = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(copied)],(function (){
var formatted_text = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(style),"uppercase"))?text__$1.toUpperCase():text__$1);
cljs.core.reset_BANG_(copied_STAR_,true);

app.util.clipboard.to_clipboard(formatted_text);

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((1000),(function (){
return cljs.core.reset_BANG_(copied_STAR_,false);
}));
}));
var composite_typography_token = app.main.ui.inspect.styles.panels.text.get_resolved_token(new cljs.core.Keyword(null,"typography","typography",-399568138),shape,resolved_tokens);
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_styles_panels_text__text-properties",'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(style))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74936){
var vec__74937 = p__74936;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74937,(0),null);
var fill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74937,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.styles.panels.text.typography_color_row_STAR_,{'fill':fill,'shape':shape,'resolvedTokens':resolved_tokens,'colorSpace':color_space},idx));

return out_arr__46744__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(style))):null),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(composite_typography_token);
if(and__5023__auto__){
return new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(style);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.inspect.styles.panels.text.typography_name_block_STAR_,{'style':style}):null),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(style));
if(and__5023__auto__){
return composite_typography_token;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Typography",'detail':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(composite_typography_token),'token':composite_typography_token,'property':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(composite_typography_token),'copiable':true}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(style))?(function (){var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.fonts.get_font_data(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword(null,"name","name",1843675177));
var resolved_token = app.main.ui.inspect.styles.panels.text.get_resolved_token(new cljs.core.Keyword(null,"font-family","font-family",-667419874),shape,resolved_tokens);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Font Family",'detail':name,'token':resolved_token,'property':["font-family: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\";"].join(''),'copiable':true});
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(style))?rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Font Style",'detail':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(style),'property':["font-style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(style)),";"].join(''),'copiable':true}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(style))?(function (){var font_size = app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(style));
var resolved_token = app.main.ui.inspect.styles.panels.text.get_resolved_token(new cljs.core.Keyword(null,"font-size","font-size",-1847940346),shape,resolved_tokens);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Font Size",'detail':font_size,'token':resolved_token,'property':["font-size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),";"].join(''),'copiable':true});
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(style))?(function (){var resolved_token = app.main.ui.inspect.styles.panels.text.get_resolved_token(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),shape,resolved_tokens);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Font Weight",'detail':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(style),'token':resolved_token,'property':["font-weight: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(style)),";"].join(''),'copiable':true});
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(style))?(function (){var line_height = new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(style);
var resolved_token = app.main.ui.inspect.styles.panels.text.get_resolved_token(new cljs.core.Keyword(null,"line-height","line-height",1870784992),shape,resolved_tokens);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Line Height",'detail':cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_height),'token':resolved_token,'property':["line-height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_height),";"].join(''),'copiable':true});
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$1(style))?(function (){var letter_spacing = app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$1(style));
var resolved_token = app.main.ui.inspect.styles.panels.text.get_resolved_token(new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),shape,resolved_tokens);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Letter Spacing",'detail':letter_spacing,'token':resolved_token,'property':["letter-spacing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter_spacing),";"].join(''),'copiable':true});
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(style))?(function (){var resolved_token = app.main.ui.inspect.styles.panels.text.get_resolved_token(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),shape,resolved_tokens);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Text Decoration",'detail':new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(style),'token':resolved_token,'property':["text-decoration: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(style)),";"].join(''),'copiable':true});
})():null),(cljs.core.truth_(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(style))?(function (){var resolved_token = app.main.ui.inspect.styles.panels.text.get_resolved_token(new cljs.core.Keyword(null,"text-case","text-case",1049419399),shape,resolved_tokens);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'term':"Text Transform",'detail':new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(style),'token':resolved_token,'property':["text-transform: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(style)),";"].join(''),'copiable':true});
})():null),rumext.v2.jsx("pre",{'role':"presentation",'className':"main_ui_inspect_styles_panels_text__text-content-wrapper",'children':rumext.v2.jsx(app.main.ui.inspect.styles.property_detail_copiable.property_detail_copiable_STAR_,{'copied':copied,'onClick':copy_text,'children':rumext.v2.jsx("span",{'style':{'fontFamily':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(style),'fontWeight':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(style),'textTransform':new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(style),'letterSpacing':app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$1(style)),'fontStyle':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(style)},'className':"main_ui_inspect_styles_panels_text__text-content",'children':text__$1})})})]});
});

(app.main.ui.inspect.styles.panels.text.style_text_block_STAR_.displayName = "style-text-block*");

app.main.ui.inspect.styles.panels.text.text_panel_STAR_ = (function app$main$ui$inspect$styles$panels$text$text_panel_STAR_(props_74940){
var shapes = props_74940.shapes;
var color_space = props_74940.colorSpace;
var on_font_shorthand = props_74940.onFontShorthand;
var resolved_tokens = props_74940.resolvedTokens;
var shorthand_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.inspect.styles.panels.text.generate_typography_shorthand(shapes);
}));
var shorthand = cljs.core.deref(shorthand_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shorthand),rumext.v2.adapt(on_font_shorthand),rumext.v2.adapt(shapes)],(function (){
cljs.core.reset_BANG_(shorthand_STAR_,app.main.ui.inspect.styles.panels.text.generate_typography_shorthand(shapes));

var G__74941 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel","panel",-558637456),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"property","property",-1114278232),shorthand], null);
return (on_font_shorthand.cljs$core$IFn$_invoke$arity$1 ? on_font_shorthand.cljs$core$IFn$_invoke$arity$1(G__74941) : on_font_shorthand.call(null,G__74941));
}));

return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_text__text-panel",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push((function (){var style_text_blocks = app.main.ui.inspect.styles.panels.text.get_style_text(shape);
return rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_panels_text__text-shape",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,p__74942){
var vec__74943 = p__74942;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74943,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74943,(1),null);
out_arr__46744__auto____$1.push(rumext.v2.jsx(app.main.ui.inspect.styles.panels.text.style_text_block_STAR_,{'shape':shape,'style':style,'text':text,'resolvedTokens':resolved_tokens,'colorSpace':color_space},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto____$1;
}),[],style_text_blocks)},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
})());

return out_arr__46744__auto__;
}),[],shapes)});
});

(app.main.ui.inspect.styles.panels.text.text_panel_STAR_.displayName = "text-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.text.js.map
