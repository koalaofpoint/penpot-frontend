import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.shape_tree.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.main.fonts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.code_block.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.hooks.resize.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.shapes.text.fontfaces.js";
import "./app.util.clipboard.js";
import "./app.util.code_beautify.js";
import "./app.util.code_gen.js";
import "./app.util.dom.js";
import "./app.util.http.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.code');
app.main.ui.inspect.code.embed_images_QMARK_ = true;
app.main.ui.inspect.code.remove_localhost_QMARK_ = true;
app.main.ui.inspect.code.page_template = "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n    %s\n    </style>\n  </head>\n  <body>\n  %s\n  </body>\n</html>";
app.main.ui.inspect.code.get_viewer_objects = (function app$main$ui$inspect$code$get_viewer_objects(var_args){
var G__74772 = arguments.length;
switch (G__74772) {
case 0:
return app.main.ui.inspect.code.get_viewer_objects.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.ui.inspect.code.get_viewer_objects.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.inspect.code.get_viewer_objects.cljs$core$IFn$_invoke$arity$0 = (function (){
var route = cljs.core.deref(app.main.refs.route);
var page_id = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route));
return app.main.ui.inspect.code.get_viewer_objects.cljs$core$IFn$_invoke$arity$1(page_id);
}));

(app.main.ui.inspect.code.get_viewer_objects.cljs$core$IFn$_invoke$arity$1 = (function (page_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (state){
var objects = app.main.refs.get_viewer_objects(state,page_id);
return objects;
}),app.main.store.state,cljs.core._EQ_);
}));

(app.main.ui.inspect.code.get_viewer_objects.cljs$lang$maxFixedArity = 1);

app.main.ui.inspect.code.use_objects = (function app$main$ui$inspect$code$use_objects(from){
var page_objects_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(from)],(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,new cljs.core.Keyword(null,"workspace","workspace",-1096735709))){
return app.main.refs.workspace_page_objects;
} else {
return app.main.ui.inspect.code.get_viewer_objects.cljs$core$IFn$_invoke$arity$0();
}
}));
return rumext.v2.deref(page_objects_ref);
});
app.main.ui.inspect.code.shapes__GT_images = (function app$main$ui$inspect$code$shapes__GT_images(shapes){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (shape){
var temp__5825__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape)));
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(data)], null);
} else {
return null;
}
}),shapes);
});
app.main.ui.inspect.code.replace_map = (function app$main$ui$inspect$code$replace_map(value,map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (value__$1,p__74776){
var vec__74777 = p__74776;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74777,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74777,(1),null);
return cuerdas.core.replace(value__$1,old,new$);
}),value,map);
});
app.main.ui.inspect.code.gen_all_code = (function app$main$ui$inspect$code$gen_all_code(style_code,markup_code,images_data){
var markup_code__$1 = (function (){var G__74780 = markup_code;
if(app.main.ui.inspect.code.embed_images_QMARK_){
return app.main.ui.inspect.code.replace_map(G__74780,images_data);
} else {
return G__74780;
}
})();
var style_code__$1 = (function (){var G__74781 = style_code;
if(app.main.ui.inspect.code.embed_images_QMARK_){
return app.main.ui.inspect.code.replace_map(G__74781,images_data);
} else {
return G__74781;
}
})();
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(app.main.ui.inspect.code.page_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_code__$1,markup_code__$1], 0));
});
app.main.ui.inspect.code.code_STAR_ = (function app$main$ui$inspect$code$code_STAR_(props_74783){
var on_expand = props_74783.onExpand;
var shapes = props_74783.shapes;
var frame = props_74783.frame;
var from = props_74783.from;
var style_type_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("css");
var markup_type_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("html");
var fontfaces_css_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var images_data_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var style_type = cljs.core.deref(style_type_STAR_);
var markup_type = cljs.core.deref(markup_type_STAR_);
var fontfaces_css = cljs.core.deref(fontfaces_css_STAR_);
var images_data = cljs.core.deref(images_data_STAR_);
var collapsed_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var collapsed_css_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(collapsed_STAR_),new cljs.core.Keyword(null,"css","css",1135045163));
var collapsed_markup_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(collapsed_STAR_),new cljs.core.Keyword(null,"markup","markup",2143234544));
var objects = app.main.ui.inspect.code.use_objects(from);
var shapes__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes),rumext.v2.adapt(frame)],(function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74782_SHARP_){
return app.common.geom.shapes.translate_to_frame(p1__74782_SHARP_,frame);
}),shapes);
}));
var all_children = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes__$1),rumext.v2.adapt(objects)],(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2(objects,app.common.files.helpers.selected_with_children(objects,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes__$1))));
}));
var fonts = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(all_children)],(function (){
return app.main.ui.shapes.text.fontfaces.shapes__GT_fonts(all_children);
}));
var images_urls = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(all_children)],(function (){
return app.main.ui.inspect.code.shapes__GT_images(all_children);
}));
var style_code = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fontfaces_css),rumext.v2.adapt(style_type),rumext.v2.adapt(shapes__$1),rumext.v2.adapt(all_children),rumext.v2.adapt(app.util.code_gen.generate_style_code)],(function (){
return ""+(fontfaces_css ?? "")+"\n"+(app.util.code_beautify.format_code(app.util.code_gen.generate_style_code.cljs$core$IFn$_invoke$arity$4(objects,style_type,shapes__$1,all_children),style_type) ?? "");
}));
var markup_code = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(markup_type),rumext.v2.adapt(shapes__$1),rumext.v2.adapt(images_data)],(function (){
return app.util.code_gen.generate_formatted_markup_code(objects,markup_type,shapes__$1);
}));
var on_markup_copied = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(markup_type),rumext.v2.adapt(from)],(function (){
var origin = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),from))?"workspace":"viewer");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"copy-inspect-code",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"type","type",1174270348),markup_type], null)));
}));
var on_style_copied = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(style_type),rumext.v2.adapt(from)],(function (){
var origin = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),from))?"workspace":"viewer");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"copy-inspect-style",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"type","type",1174270348),style_type], null)));
}));
var map__74785 = app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$7(new cljs.core.Keyword(null,"code","code",1586293142),(400),(100),(800),new cljs.core.Keyword(null,"y","y",-1757859776),false,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var map__74785__$1 = cljs.core.__destructure_map(map__74785);
var on_markup_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_markup_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_markup_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var markup_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74785__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__74786 = app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$7(new cljs.core.Keyword(null,"code","code",1586293142),(400),(100),(800),new cljs.core.Keyword(null,"y","y",-1757859776),false,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var map__74786__$1 = cljs.core.__destructure_map(map__74786);
var on_style_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74786__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_style_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74786__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_style_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74786__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var style_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74786__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var set_markup = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(markup_type_STAR_)],(function (value){
return cljs.core.reset_BANG_(markup_type_STAR_,value);
}));
var handle_copy_all_code = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(style_code),rumext.v2.adapt(markup_code),rumext.v2.adapt(images_data)],(function (){
app.util.clipboard.to_clipboard(app.main.ui.inspect.code.gen_all_code(style_code,markup_code,images_data));

var origin = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),from))?"workspace":"viewer");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"copy-inspect-code",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"type","type",1174270348),"all"], null)));
}));
var handle_collapse = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var panel_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"type"));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_STAR_,(function (collapsed){
if(cljs.core.contains_QMARK_(collapsed,panel_type)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(collapsed,panel_type);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(collapsed,panel_type);
}
}));
}));
var copy_css_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(style_code),rumext.v2.adapt(images_data)],(function (){
return app.main.ui.inspect.code.replace_map(style_code,images_data);
}));
var copy_html_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(markup_code),rumext.v2.adapt(images_data)],(function (){
return app.main.ui.inspect.code.replace_map(markup_code,images_data);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fonts)],(function (){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (result){
var css = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",result);
return cljs.core.reset_BANG_(fontfaces_css_STAR_,css);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.merge_map(app.main.fonts.fetch_font_css,beicon.v2.core.from(fonts))));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(images_urls)],(function (){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (result){
return cljs.core.reset_BANG_(images_data_STAR_,result);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.merge_map((function (p__74789){
var vec__74790 = p__74789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74790,(0),null);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74790,(1),null);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (___$1){
return beicon.v2.core.of(cljs.core.PersistentHashMap.fromArrays([uri],[uri]));
}),app.util.http.fetch_data_uri.cljs$core$IFn$_invoke$arity$2(uri,true));
}),beicon.v2.core.from(images_urls))));
}));

return rumext.v2.jsxs("div",{'className':"main_ui_inspect_code__element-options"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),from))?"main_ui_inspect_code__viewer-code-block":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_code__attributes-block",'children':rumext.v2.jsx("button",{'onClick':handle_copy_all_code,'className':"main_ui_inspect_code__download-button",'children':"Copy all code"})}),rumext.v2.jsxs("div",{'className':"main_ui_inspect_code__code-block"+" "+((collapsed_css_QMARK_)?"main_ui_inspect_code__collapsed":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_inspect_code__code-row-lang",'children':[rumext.v2.jsx("button",{'data-type':"css",'onClick':handle_collapse,'className':"main_ui_inspect_code__toggle-btn",'children':rumext.v2.jsx("span",{'className':"main_ui_inspect_code__collapsabled-icon"+" "+((collapsed_css_QMARK_)?"main_ui_inspect_code__rotated":""),'children':app.main.ui.icons.arrow})}),rumext.v2.jsx("div",{'className':"main_ui_inspect_code__code-lang-option",'children':"CSS"}),rumext.v2.jsxs("div",{'className':"main_ui_inspect_code__action-btns",'children':[rumext.v2.jsx("button",{'onClick':on_expand,'className':"main_ui_inspect_code__expand-button",'children':app.main.ui.icons.code}),rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':copy_css_fn,'className':"main_ui_inspect_code__css-copy-btn",'onCopied':on_style_copied})]})]}),((collapsed_css_QMARK_)?null:rumext.v2.jsx("div",{'style':{'--code-height':""+((function (){var or__5025__auto__ = style_size;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (400);
}
})() ?? "")+"px"},'className':"main_ui_inspect_code__code-row-display",'children':rumext.v2.jsx(app.main.ui.components.code_block.code_block,{'type':style_type,'code':style_code})})),rumext.v2.jsx("div",{'onPointerDown':on_style_pointer_down,'onLostPointerCapture':on_style_lost_pointer_capture,'onPointerMove':on_style_pointer_move,'className':"main_ui_inspect_code__resize-area"})]}),rumext.v2.jsxs("div",{'className':"main_ui_inspect_code__code-block"+" "+((collapsed_markup_QMARK_)?"main_ui_inspect_code__collapsed":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_inspect_code__code-row-lang",'children':[rumext.v2.jsx("button",{'data-type':"markup",'onClick':handle_collapse,'className':"main_ui_inspect_code__toggle-btn",'children':rumext.v2.jsx("span",{'className':"main_ui_inspect_code__collapsabled-icon"+" "+((collapsed_markup_QMARK_)?"main_ui_inspect_code__rotated":""),'children':app.main.ui.icons.arrow})}),rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':markup_type,'on-change':set_markup,'class':"main_ui_inspect_code__code-lang-options",'wide':true,'name':"listing-style",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"html",'id':new cljs.core.Keyword(null,"html","html",-998796897)}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"svg",'id':new cljs.core.Keyword(null,"svg","svg",856789142)})]}),rumext.v2.jsxs("div",{'className':"main_ui_inspect_code__action-btns",'children':[rumext.v2.jsx("button",{'onClick':on_expand,'className':"main_ui_inspect_code__expand-button",'children':app.main.ui.icons.code}),rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':copy_html_fn,'className':"main_ui_inspect_code__html-copy-btn",'onCopied':on_markup_copied})]})]}),((collapsed_markup_QMARK_)?null:rumext.v2.jsx("div",{'style':{'--code-height':""+((function (){var or__5025__auto__ = markup_size;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (400);
}
})() ?? "")+"px"},'className':"main_ui_inspect_code__code-row-display",'children':rumext.v2.jsx(app.main.ui.components.code_block.code_block,{'type':markup_type,'code':markup_code})})),rumext.v2.jsx("div",{'onPointerDown':on_markup_pointer_down,'onLostPointerCapture':on_markup_lost_pointer_capture,'onPointerMove':on_markup_pointer_move,'className':"main_ui_inspect_code__resize-area"})]})]});
});

(app.main.ui.inspect.code.code_STAR_.displayName = "code*");


//# sourceMappingURL=app.main.ui.inspect.code.js.map
