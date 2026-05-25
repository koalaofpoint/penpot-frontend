import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.text.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.common.types.text.js";
import "./app.config.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.features.js";
import "./app.main.fonts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.css_cursors.js";
import "./app.main.ui.hooks.js";
import "./app.render_wasm.api.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./app.util.text.content.js";
import "./app.util.text.content.styles.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.text.v2_editor');
app.main.ui.workspace.shapes.text.v2_editor.get_contrast_color = (function app$main$ui$workspace$shapes$text$v2_editor$get_contrast_color(background_color){
if(cljs.core.truth_(background_color)){
var luminance = app.common.types.color.hex__GT_lum(background_color);
if((luminance > 0.5)){
return "#000000";
} else {
return "#ffffff";
}
} else {
return null;
}
});
app.main.ui.workspace.shapes.text.v2_editor.gen_name = (function app$main$ui$workspace$shapes$text$v2_editor$gen_name(editor){
if((!((editor == null)))){
var editor_root = editor.root;
var result = editor_root.textContent;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,"")){
return result;
} else {
return null;
}
} else {
return null;
}
});
app.main.ui.workspace.shapes.text.v2_editor.get_fonts = (function app$main$ui$workspace$shapes$text$v2_editor$get_fonts(content){
var extract_fn = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718));
var default$ = extract_fn(app.common.types.text.default_typography);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([default$]),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(extract_fn),cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),content));
});
app.main.ui.workspace.shapes.text.v2_editor.load_fonts_BANG_ = (function app$main$ui$workspace$shapes$text$v2_editor$load_fonts_BANG_(fonts){
return cljs.core.run_BANG_((function (p__56809){
var vec__56810 = p__56809;
var font_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56810,(0),null);
var variant_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56810,(1),null);
if((!((font_id == null)))){
return app.main.fonts.ensure_loaded_BANG_.cljs$core$IFn$_invoke$arity$2(font_id,variant_id);
} else {
return null;
}
}),fonts);
});
/**
 * Internal editor events handler initializer/destructor
 */
app.main.ui.workspace.shapes.text.v2_editor.initialize_event_handlers = (function app$main$ui$workspace$shapes$text$v2_editor$initialize_event_handlers(shape_id,content,editor_ref,canvas_ref,container_ref,text_color){
var editor_node = rumext.v2.ref_val(editor_ref);
var canvas_node = rumext.v2.ref_val(canvas_ref);
var default_font = cljs.core.deref(app.main.refs.default_font);
var style_defaults = app.util.text.content.styles.get_style_defaults(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.get_default_text_attrs(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fills","fills",902966780),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),text_color,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null)], null),app.common.types.text.default_root_attrs,default_font], 0)));
var options = ({"styleDefaults": style_defaults, "allowHTMLPaste": app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2-html-paste")});
var instance = app.main.data.workspace.texts.create_editor(editor_node,canvas_node,options);
var original_content = content;
var on_key_up = (function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.clear_edition_mode()], 0));
} else {
return null;
}
});
var on_blur = (function (){
var temp__5825__auto___56832 = app.util.text.content.dom__GT_cljs(app.main.data.workspace.texts.get_editor_root(instance));
if(cljs.core.truth_(temp__5825__auto___56832)){
var content_56833__$1 = temp__5825__auto___56832;
var state_56834 = cljs.core.deref(app.main.store.state);
var objects_56835 = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state_56834);
var shape_56836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects_56835,shape_id);
var current_name_56837 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape_56836);
var generated_name_56838 = app.main.ui.workspace.shapes.text.v2_editor.gen_name(instance);
var update_name_QMARK__56839 = (((original_content == null)) || ((((!((current_name_56837 == null)))) && ((((!((original_content == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_name_56837,app.common.types.text.generate_shape_name(app.common.types.text.content__GT_text(original_content)))))))));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$variadic(shape_id,content_56833__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-name?","update-name?",-1643455272),update_name_QMARK__56839,new cljs.core.Keyword(null,"name","name",1843675177),generated_name_56838,new cljs.core.Keyword(null,"finalize?","finalize?",687625539),true,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false], 0)));
} else {
}

var container_node = rumext.v2.ref_val(container_ref);
return app.util.dom.set_style_BANG_(container_node,"opacity",(0));
});
var on_focus = (function (){
var container_node = rumext.v2.ref_val(container_ref);
return app.util.dom.set_style_BANG_(container_node,"opacity",(1));
});
var on_style_change = (function (event){
var styles = app.util.text.content.styles.get_styles_from_event(event);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.v2_update_text_editor_styles(shape_id,styles));
});
var on_needs_layout = (function (){
var temp__5825__auto__ = app.util.text.content.dom__GT_cljs(app.main.data.workspace.texts.get_editor_root(instance));
if(cljs.core.truth_(temp__5825__auto__)){
var content__$1 = temp__5825__auto__;
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$variadic(shape_id,content__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-name?","update-name?",-1643455272),true,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false], 0)));
} else {
return null;
}
});
var on_change = (function (){
var is_empty_QMARK_ = app.main.data.workspace.texts.is_empty_QMARK_(instance);
var save_undo_QMARK_ = cljs.core.not(is_empty_QMARK_);
var temp__5825__auto__ = app.util.text.content.dom__GT_cljs(app.main.data.workspace.texts.get_editor_root(instance));
if(cljs.core.truth_(temp__5825__auto__)){
var content__$1 = temp__5825__auto__;
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$variadic(shape_id,content__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-name?","update-name?",-1643455272),true,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),save_undo_QMARK_], 0)));
} else {
return null;
}
});
var on_clipboard_change = (function (event){
var style = event.detail;
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_clipboard_style(style));
});
app.util.globals.document.addEventListener("keyup",on_key_up);

instance.addEventListener("focus",on_focus);

instance.addEventListener("needslayout",on_needs_layout);

instance.addEventListener("stylechange",on_style_change);

instance.addEventListener("change",on_change);

instance.addEventListener("clipboardchange",on_clipboard_change);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_editor(instance));

if((!((content == null)))){
app.main.data.workspace.texts.set_editor_root_BANG_(instance,app.util.text.content.cljs__GT_dom(content));
} else {
}

if((!((instance == null)))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.focus_editor());
} else {
}

return (function (){
on_blur();

app.util.globals.document.removeEventListener("keyup",on_key_up);

instance.removeEventListener("focus",on_focus);

instance.removeEventListener("needslayout",on_needs_layout);

instance.removeEventListener("stylechange",on_style_change);

instance.removeEventListener("change",on_change);

instance.removeEventListener("clipboardchange",on_clipboard_change);

app.main.data.workspace.texts.dispose_BANG_(instance);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_editor(null));
});
});
app.main.ui.workspace.shapes.text.v2_editor.get_color_from_content = (function app$main$ui$workspace$shapes$text$v2_editor$get_color_from_content(content){
var fills = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),content)], 0)));
return cljs.core.some(new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),fills);
});
/**
 * Returns the appropriate text color based on fill, frame, and background.
 */
app.main.ui.workspace.shapes.text.v2_editor.get_default_text_color = (function app$main$ui$workspace$shapes$text$v2_editor$get_default_text_color(p__56814){
var map__56815 = p__56814;
var map__56815__$1 = cljs.core.__destructure_map(map__56815);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56815__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56815__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
if(cljs.core.truth_((function (){var and__5023__auto__ = frame;
if(cljs.core.truth_(and__5023__auto__)){
return (((!(app.common.files.helpers.root_QMARK_(frame)))) && (cljs.core.seq(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(frame))));
} else {
return and__5023__auto__;
}
})())){
var fill_color = cljs.core.some((function (p1__56813_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(p1__56813_SHARP_))){
return new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(p1__56813_SHARP_);
} else {
return null;
}
}),new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(frame));
if(cljs.core.truth_(fill_color)){
return app.main.ui.workspace.shapes.text.v2_editor.get_contrast_color(fill_color);
} else {
return app.main.ui.workspace.shapes.text.v2_editor.get_contrast_color(background_color);
}
} else {
return app.main.ui.workspace.shapes.text.v2_editor.get_contrast_color(background_color);
}
});
/**
 * Text editor (HTML)
 */
app.main.ui.workspace.shapes.text.v2_editor.text_editor_html = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$shapes$text$v2_editor$text_editor_html(props_56816){
var shape = props_56816.shape;
var canvas_ref = (props_56816["canvas-ref"]);
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var fill_color = app.main.ui.workspace.shapes.text.v2_editor.get_color_from_content(content);
var editor_ref = rumext.v2.use_ref(null);
var container_ref = rumext.v2.use_ref(null);
var page = rumext.v2.deref(app.main.refs.workspace_page);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"objects","objects",2099713734));
var frame = app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
var background_color = new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(page);
var text_color = (function (){var or__5025__auto__ = fill_color;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.main.ui.workspace.shapes.text.v2_editor.get_default_text_color(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color], null));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "#000000";
}
}
})();
var fonts = app.main.ui.hooks.use_equal_memo(rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(content)],(function (){
return app.main.ui.workspace.shapes.text.v2_editor.get_fonts(content);
})));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fonts)],(function (){
return app.main.ui.workspace.shapes.text.v2_editor.load_fonts_BANG_(fonts);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.ui.workspace.shapes.text.v2_editor.initialize_event_handlers(shape_id,content,editor_ref,canvas_ref,container_ref,text_color);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(text_color)],(function (){
var container_node = rumext.v2.ref_val(container_ref);
return app.util.dom.set_style_BANG_(container_node,"--text-editor-caret-color",text_color);
}));

return rumext.v2.jsx("div",{'ref':container_ref,'data-testid':"text-editor-container",'style':{'width':"var(--editor-container-width)",'height':"var(--editor-container-height)"},'className':""+(app.main.ui.css_cursors.get_dynamic("text",new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape)) ?? "")+" "+("main_ui_workspace_shapes_text_v2_editor__text-editor-container" ?? ""),'children':rumext.v2.jsx("div",{'role':"textbox",'aria-multiline':true,'data-x':(shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185))),'className':""+"mousetrap "+("main_ui_workspace_shapes_text_v2_editor__text-editor-content"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"fixed","fixed",-562004358)))?"main_ui_workspace_shapes_text_v2_editor__grow-type-fixed":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"auto-width","auto-width",-992925188)))?"main_ui_workspace_shapes_text_v2_editor__grow-type-auto-width":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"auto-height","auto-height",-960519663)))?"main_ui_workspace_shapes_text_v2_editor__grow-type-auto-height":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$2(content,"top"),"top"))?"main_ui_workspace_shapes_text_v2_editor__align-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$1(content),"center"))?"main_ui_workspace_shapes_text_v2_editor__align-center":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$1(content),"bottom"))?"main_ui_workspace_shapes_text_v2_editor__align-bottom":"") ?? ""),'aria-autocomplete':"none",'data-testid':"text-editor-content",'data-y':(shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776))),'ref':editor_ref,'contentEditable':true})});
}));

(app.main.ui.workspace.shapes.text.v2_editor.text_editor_html.displayName = "text-editor-html");

app.main.ui.workspace.shapes.text.v2_editor.shape__GT_justify = (function app$main$ui$workspace$shapes$text$v2_editor$shape__GT_justify(p__56817){
var map__56818 = p__56817;
var map__56818__$1 = cljs.core.__destructure_map(map__56818);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56818__$1,new cljs.core.Keyword(null,"content","content",15833224));
var G__56819 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$1(content),"top");
switch (G__56819) {
case "center":
return "center";

break;
case "top":
return "flex-start";

break;
case "bottom":
return "flex-end";

break;
default:
return null;

}
});
app.main.ui.workspace.shapes.text.v2_editor.font_family_from_font_id = (function app$main$ui$workspace$shapes$text$v2_editor$font_family_from_font_id(font_id){
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(font_id,"gfont-noto-sans"))){
var lang = cuerdas.core.replace(font_id,/gfont\-noto\-sans\-/,"");
if((cljs.core.count(lang) >= (3))){
return cuerdas.core.capital(lang);
} else {
return cuerdas.core.upper(lang);
}
} else {
return "Noto Color Emoji";
}
});
/**
 * Text editor wrapper component
 */
app.main.ui.workspace.shapes.text.v2_editor.text_editor = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1(rumext.v2.forward_ref((function app$main$ui$workspace$shapes$text$v2_editor$text_editor(props_56820,_){
var modifiers = props_56820.modifiers;
var shape = props_56820.shape;
var canvas_ref = (props_56820["canvas-ref"]);
var props = props_56820;
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var modifiers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,shape_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var fallback_fonts = app.render_wasm.api.fonts_from_text_content(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),false);
var fallback_families = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (font){
return app.main.ui.workspace.shapes.text.v2_editor.font_family_from_font_id(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(font));
}),fallback_fonts);
var clip_id = ""+"text-edition-clip"+(shape_id ?? "");
var text_modifier_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))],(function (){
return app.main.refs.workspace_text_modifier_by_id(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
}));
var text_modifier = rumext.v2.deref(text_modifier_ref);
var maybe_zoom = ((app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari-16","safari-16",-2098723899)))?rumext.v2.deref(app.main.refs.selected_zoom):null);
var shape__$1 = (function (){var G__56825 = shape;
var G__56825__$1 = (((!((text_modifier == null))))?app.main.data.workspace.texts.apply_text_modifier(G__56825,text_modifier):G__56825);
if((!((modifiers__$1 == null)))){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__56825__$1,modifiers__$1);
} else {
return G__56825__$1;
}
})();
var render_wasm_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1");
}));
var vec__56821 = (cljs.core.truth_(render_wasm_QMARK_)?(function (){var map__56826 = app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$1(shape_id);
var map__56826__$1 = cljs.core.__destructure_map(map__56826);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56826__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56826__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var selrect_transform = rumext.v2.deref(app.main.refs.workspace_selrect);
var vec__56827 = app.main.data.helpers.get_selrect(selrect_transform,shape__$1);
var selrect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56827,(0),null);
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56827,(1),null);
var selrect_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect);
var selrect_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect);
var max_width = (function (){var x__5110__auto__ = width;
var y__5111__auto__ = selrect_width;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var max_height = (function (){var x__5110__auto__ = height;
var y__5111__auto__ = selrect_height;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var valign = new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape__$1));
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selrect);
var y__$1 = (function (){var G__56830 = valign;
switch (G__56830) {
case "bottom":
return (y + (selrect_height - height));

break;
case "center":
return (y + ((selrect_height - height) / (2)));

break;
default:
return y;

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(selrect,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),max_width,new cljs.core.Keyword(null,"height","height",1025178622),max_height], 0)),transform], null);
})():(function (){var bounds = app.common.geom.shapes.text.shape__GT_rect(shape__$1);
var x = Math.min((bounds?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"x","x",2099068185))),(shape__$1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"x","x",2099068185))));
var y = Math.min((bounds?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"y","y",-1757859776))),(shape__$1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"y","y",-1757859776))));
var width = Math.max((bounds?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"width","width",-384071477))),(shape__$1?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"width","width",-384071477))));
var height = Math.max((bounds?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"height","height",1025178622))),(shape__$1?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"height","height",1025178622))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x,y,width,height),app.common.geom.shapes.transform_matrix.cljs$core$IFn$_invoke$arity$1(shape__$1)], null);
})());
var map__56824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56821,(0),null);
var map__56824__$1 = cljs.core.__destructure_map(map__56824);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56821,(1),null);
var style = (function (){var G__56831 = ({"pointerEvents": "all"});
var G__56831__$1 = (cljs.core.truth_(render_wasm_QMARK_)?app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(G__56831,({"--editor-container-width": ""+(width ?? "")+"px", "--editor-container-height": ""+(height ?? "")+"px", "--fallback-families": ((cljs.core.seq(fallback_families))?""+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",fallback_families) ?? ""):"sourcesanspro")})):G__56831);
var G__56831__$2 = ((cljs.core.not(render_wasm_QMARK_))?app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(G__56831__$1,({"--editor-container-width": ""+(width ?? "")+"px", "--editor-container-height": ""+(height ?? "")+"px"})):G__56831__$1);
var G__56831__$3 = ((((cljs.core.not(render_wasm_QMARK_)) && ((!(app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari","safari",497115653)))))))?app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(G__56831__$2,({"transform": ""+"translate("+(((shape__$1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"x","x",2099068185))) - x) ?? "")+"px, "+(((shape__$1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"y","y",-1757859776))) - y) ?? "")+"px)"})):G__56831__$2);
var G__56831__$4 = ((app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari-17","safari-17",412083955)))?app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(G__56831__$3,({"height": "100%", "display": "flex", "flexDirection": "column", "justifyContent": app.main.ui.workspace.shapes.text.v2_editor.shape__GT_justify(shape__$1)})):G__56831__$3);
if(app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari-16","safari-16",-2098723899))){
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(G__56831__$4,({"position": "fixed", "left": (0), "top": ((shape__$1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"y","y",-1757859776))) - y), "transform-origin": "top left", "transform": (((!((maybe_zoom == null))))?""+"scale("+(maybe_zoom ?? "")+")":null)}));
} else {
return G__56831__$4;
}
})();
return rumext.v2.jsxs("g",{'className':"text-editor",'clipPath':""+"url(#"+(clip_id ?? "")+")",'transform':""+(transform ?? ""),'data-testid':"text-editor",'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx("clipPath",{'id':clip_id,'children':rumext.v2.jsx("rect",{'x':x,'y':y,'width':width,'height':height})})}),rumext.v2.jsx("foreignObject",{'x':x,'y':y,'width':width,'height':height,'children':rumext.v2.jsx("div",{'style':style,'children':rumext.v2.jsx(app.main.ui.workspace.shapes.text.v2_editor.text_editor_html,{'shape':shape__$1,'canvas-ref':canvas_ref},""+(shape_id ?? ""))})})]});
})));

(app.main.ui.workspace.shapes.text.v2_editor.text_editor.displayName = "text-editor");


//# sourceMappingURL=app.main.ui.workspace.shapes.text.v2_editor.js.map
