import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.shapes.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.store.js";
import "./app.render_wasm.api.js";
import "./app.render_wasm.text_editor.js";
import "./app.util.dom.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.render_wasm.text_editor_input');
/**
 * Sync WASM text editor content back to the shape via the standard
 *   commit pipeline. Called after every text-modifying input.
 */
app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_ = (function app$render_wasm$text_editor_input$sync_wasm_text_editor_content_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___57275 = arguments.length;
var i__5750__auto___57276 = (0);
while(true){
if((i__5750__auto___57276 < len__5749__auto___57275)){
args__5755__auto__.push((arguments[i__5750__auto___57276]));

var G__57277 = (i__5750__auto___57276 + (1));
i__5750__auto___57276 = G__57277;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__57261){
var map__57262 = p__57261;
var map__57262__$1 = cljs.core.__destructure_map(map__57262);
var finalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57262__$1,new cljs.core.Keyword(null,"finalize?","finalize?",687625539));
var temp__5825__auto__ = app.render_wasm.text_editor.text_editor_sync_content();
if(cljs.core.truth_(temp__5825__auto__)){
var map__57263 = temp__5825__auto__;
var map__57263__$1 = cljs.core.__destructure_map(map__57263);
var shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword(null,"shape-id","shape-id",981169327));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword(null,"content","content",15833224));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$variadic(shape_id,content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-name?","update-name?",-1643455272),true,new cljs.core.Keyword(null,"finalize?","finalize?",687625539),finalize_QMARK_], 0)));
} else {
return null;
}
}));

(app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_.cljs$lang$applyTo = (function (seq57259){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57259));
}));

/**
 * Contenteditable element positioned over the text shape to capture input events.
 */
app.render_wasm.text_editor_input.text_editor_input = (function app$render_wasm$text_editor_input$text_editor_input(props_57264){
var props = props_57264;
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var zoom = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"zoom");
var vbox = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"vbox");
var contenteditable_ref = rumext.v2.use_ref(null);
var composing_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var shape_bounds = app.common.geom.shapes.shape__GT_rect(shape);
var screen_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape_bounds) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox)) * zoom);
var screen_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape_bounds) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox)) * zoom);
var screen_w = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape_bounds) * zoom);
var screen_h = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape_bounds) * zoom);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto___57278 = rumext.v2.ref_val(contenteditable_ref);
if(cljs.core.truth_(temp__5825__auto___57278)){
var node_57279 = temp__5825__auto___57278;
node_57279.focus();
} else {
}

return undefined;
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var raf_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var animate = (function app$render_wasm$text_editor_input$text_editor_input_$_animate(){
if(cljs.core.truth_(app.render_wasm.text_editor.text_editor_is_active_QMARK_())){
app.render_wasm.api.request_render("cursor-blink");

return cljs.core.reset_BANG_(raf_id,requestAnimationFrame(app$render_wasm$text_editor_input$text_editor_input_$_animate));
} else {
return null;
}
});
animate();

return (function (){
if(cljs.core.truth_(cljs.core.deref(raf_id))){
return cancelAnimationFrame(cljs.core.deref(raf_id));
} else {
return null;
}
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var on_doc_keydown = (function (e){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.render_wasm.text_editor.text_editor_is_active_QMARK_();
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.deref(composing_QMARK_));
} else {
return and__5023__auto__;
}
})())){
var key = e.key;
var ctrl_QMARK_ = (function (){var or__5025__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return e.metaKey;
}
})();
var shift_QMARK_ = e.shiftKey;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Escape")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"finalize?","finalize?",687625539),true], 0));

return app.render_wasm.text_editor.text_editor_stop();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = ctrl_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.lower(key),"a");
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_select_all();

return app.render_wasm.api.request_render("text-select-all");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Enter")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_insert_paragraph();

app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_();

return app.render_wasm.api.request_render("text-paragraph");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Backspace")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_delete_backward();

app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_();

return app.render_wasm.api.request_render("text-delete-backward");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Delete")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_delete_forward();

app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_();

return app.render_wasm.api.request_render("text-delete-forward");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowLeft")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_move_cursor((0),shift_QMARK_);

return app.render_wasm.api.request_render("text-cursor-move");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowRight")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_move_cursor((1),shift_QMARK_);

return app.render_wasm.api.request_render("text-cursor-move");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowUp")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_move_cursor((2),shift_QMARK_);

return app.render_wasm.api.request_render("text-cursor-move");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"ArrowDown")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_move_cursor((3),shift_QMARK_);

return app.render_wasm.api.request_render("text-cursor-move");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"Home")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_move_cursor((4),shift_QMARK_);

return app.render_wasm.api.request_render("text-cursor-move");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"End")){
app.util.dom.prevent_default(e);

app.render_wasm.text_editor.text_editor_move_cursor((5),shift_QMARK_);

return app.render_wasm.api.request_render("text-cursor-move");
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
} else {
return null;
}
});
goog.events.listen(document,goog.events.EventType.KEYDOWN,on_doc_keydown,true);

return (function (){
return goog.events.unlisten(document,goog.events.EventType.KEYDOWN,on_doc_keydown,true);
});
}));

var on_composition_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_event){
return cljs.core.reset_BANG_(composing_QMARK_,true);
}));
var on_composition_end = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
cljs.core.reset_BANG_(composing_QMARK_,false);

var data = event.data;
if(cljs.core.truth_(data)){
app.render_wasm.text_editor.text_editor_insert_text(data);

app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_();

app.render_wasm.api.request_render("text-composition");
} else {
}

var temp__5825__auto__ = rumext.v2.ref_val(contenteditable_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return (node.textContent = "");
} else {
return null;
}
}));
var on_paste = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

var clipboard_data = event.clipboardData;
var text = clipboard_data.getData("text/plain");
if(cljs.core.truth_((function (){var and__5023__auto__ = text;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(text);
} else {
return and__5023__auto__;
}
})())){
app.render_wasm.text_editor.text_editor_insert_text(text);

app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_();

app.render_wasm.api.request_render("text-paste");
} else {
}

var temp__5825__auto__ = rumext.v2.ref_val(contenteditable_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return (node.textContent = "");
} else {
return null;
}
}));
var on_copy = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(app.render_wasm.text_editor.text_editor_is_active_QMARK_())){
app.util.dom.prevent_default(event);

if(cljs.core.truth_(app.render_wasm.text_editor.text_editor_get_selection())){
var text = app.render_wasm.text_editor.text_editor_export_selection();
return event.clipboardData.setData("text/plain",text);
} else {
return null;
}
} else {
return null;
}
}));
var on_input = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var native_event = event.nativeEvent;
var input_type = native_event.inputType;
var data = native_event.data;
if(((cljs.core.not(cljs.core.deref(composing_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(input_type,"insertCompositionText")))){
if(cljs.core.truth_((function (){var and__5023__auto__ = data;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(data);
} else {
return and__5023__auto__;
}
})())){
app.render_wasm.text_editor.text_editor_insert_text(data);

app.render_wasm.text_editor_input.sync_wasm_text_editor_content_BANG_();

app.render_wasm.api.request_render("text-input");
} else {
}

var temp__5825__auto__ = rumext.v2.ref_val(contenteditable_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return (node.textContent = "");
} else {
return null;
}
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'onCompositionStart':on_composition_start,'onPaste':on_paste,'onInput':on_input,'suppressContentEditableWarning':true,'id':"text-editor-wasm-input",'style':{'width':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_w),"px"].join(''),'top':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_y),"px"].join(''),'whiteSpace':"pre",'height':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_h),"px"].join(''),'position':"absolute",'cursor':"text",'overflow':"hidden",'zIndex':(10),'opacity':(0),'left':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(screen_x),"px"].join('')},'ref':contenteditable_ref,'onCopy':on_copy,'onCompositionEnd':on_composition_end,'contentEditable':true});
});

(app.render_wasm.text_editor_input.text_editor_input.displayName = "text-editor-input");


//# sourceMappingURL=app.render_wasm.text_editor_input.js.map
