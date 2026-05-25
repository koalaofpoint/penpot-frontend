import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$$penpot$draft_js.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.text.js";
import "./app.common.math.js";
import "./app.common.text.js";
import "./app.config.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.css_cursors.js";
import "./app.main.ui.shapes.text.styles.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./app.util.text_editor.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.text.editor');
app.main.ui.workspace.shapes.text.editor.block_component = (function app$main$ui$workspace$shapes$text$editor$block_component(props_56739){
var props = props_56739;
var bprops = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"blockProps");
var data = app.util.object.get.cljs$core$IFn$_invoke$arity$2(bprops,"data");
var style = app.main.ui.shapes.text.styles.generate_paragraph_styles(app.util.object.get.cljs$core$IFn$_invoke$arity$2(bprops,"shape"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(bprops,"data"));
var dir = new cljs.core.Keyword(null,"text-direction","text-direction",590275785).cljs$core$IFn$_invoke$arity$2(data,"auto");
return rumext.v2.jsx("div",{'style':style,'dir':dir,'children':rumext.v2.create_element(shadow.js.shim.module$$penpot$draft_js.EditorBlock,props)});
});

(app.main.ui.workspace.shapes.text.editor.block_component.displayName = "block-component");

app.main.ui.workspace.shapes.text.editor.selection_component = (function app$main$ui$workspace$shapes$text$editor$selection_component(props_56740){
var props = props_56740;
var children = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"children");
return rumext.v2.jsx("span",{'style':{'background':"#ccc",'display':"inline-block"},'children':children});
});

(app.main.ui.workspace.shapes.text.editor.selection_component.displayName = "selection-component");

app.main.ui.workspace.shapes.text.editor.render_block = (function app$main$ui$workspace$shapes$text$editor$render_block(block,shape){
var type = app.util.text_editor.get_editor_block_type(block);
var G__56741 = type;
switch (G__56741) {
case "unstyled":
return ({"editable": true, "component": app.main.ui.workspace.shapes.text.editor.block_component, "props": ({"data": app.util.text_editor.get_editor_block_data(block), "shape": shape})});

break;
default:
return null;

}
});
app.main.ui.workspace.shapes.text.editor.styles_fn = (function app$main$ui$workspace$shapes$text$editor$styles_fn(shape,styles,content){
var data = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(content.getText(),""))?cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(content.getData().toJS(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)):app.common.text.styles_to_attrs(styles));
return app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$3(shape,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-text?","show-text?",1934354679),false], null));
});
app.main.ui.workspace.shapes.text.editor.default_decorator = app.util.text_editor.create_decorator("PENPOT_SELECTION",app.main.ui.workspace.shapes.text.editor.selection_component);
app.main.ui.workspace.shapes.text.editor.empty_editor_state = app.util.text_editor.create_editor_state.cljs$core$IFn$_invoke$arity$2(null,app.main.ui.workspace.shapes.text.editor.default_decorator);
app.main.ui.workspace.shapes.text.editor.get_blocks_to_setup = (function app$main$ui$workspace$shapes$text$editor$get_blocks_to_setup(block_changes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56743){
var vec__56744 = p__56743;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56744,(1),null);
return (new cljs.core.Keyword(null,"old","old",-1825222690).cljs$core$IFn$_invoke$arity$1(v) == null);
}),block_changes));
});
app.main.ui.workspace.shapes.text.editor.get_blocks_to_add_styles = (function app$main$ui$workspace$shapes$text$editor$get_blocks_to_add_styles(block_changes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56747){
var vec__56748 = p__56747;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56748,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"new","new",-2085437848).cljs$core$IFn$_invoke$arity$1(v))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690).cljs$core$IFn$_invoke$arity$1(v),"")));
}),block_changes));
});
app.main.ui.workspace.shapes.text.editor.shape__GT_justify = (function app$main$ui$workspace$shapes$text$editor$shape__GT_justify(p__56752){
var map__56753 = p__56752;
var map__56753__$1 = cljs.core.__destructure_map(map__56753);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56753__$1,new cljs.core.Keyword(null,"content","content",15833224));
var G__56754 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$1(content),"top");
switch (G__56754) {
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
app.main.ui.workspace.shapes.text.editor.text_shape_edit_html = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1(rumext.v2.forward_ref((function app$main$ui$workspace$shapes$text$editor$text_shape_edit_html(props_56762,_){
var props = props_56762;
var map__56764 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var map__56764__$1 = cljs.core.__destructure_map(map__56764);
var shape = map__56764__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56764__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56764__$1,new cljs.core.Keyword(null,"content","content",15833224));
var state_map = rumext.v2.deref(app.main.refs.workspace_editor_state);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(state_map,id,app.main.ui.workspace.shapes.text.editor.empty_editor_state);
var self_ref = rumext.v2.use_ref();
var text_modifier_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))],(function (){
return app.main.refs.workspace_text_modifier_by_id(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
}));
var text_modifier = rumext.v2.deref(text_modifier_ref);
var shape__$1 = (function (){var G__56765 = shape;
if((!((text_modifier == null)))){
return app.main.data.workspace.texts.apply_text_modifier(G__56765,text_modifier);
} else {
return G__56765;
}
})();
var blurred = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(false);
var on_key_up = (function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.clear_edition_mode()], 0));
} else {
return null;
}
});
var on_mount = (function (){
var keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(document,"keyup",on_key_up)], null);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.texts.initialize_editor_state(shape__$1,app.main.ui.workspace.shapes.text.editor.default_decorator),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.texts.select_all(shape__$1)], 0));

return (function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.texts","finalize-editor-state","app.main.data.workspace.texts/finalize-editor-state",-201608113));

var seq__56767 = cljs.core.seq(keys);
var chunk__56768 = null;
var count__56769 = (0);
var i__56770 = (0);
while(true){
if((i__56770 < count__56769)){
var key = chunk__56768.cljs$core$IIndexed$_nth$arity$2(null,i__56770);
goog.events.unlistenByKey(key);


var G__56791 = seq__56767;
var G__56792 = chunk__56768;
var G__56793 = count__56769;
var G__56794 = (i__56770 + (1));
seq__56767 = G__56791;
chunk__56768 = G__56792;
count__56769 = G__56793;
i__56770 = G__56794;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__56767);
if(temp__5825__auto__){
var seq__56767__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56767__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__56767__$1);
var G__56795 = cljs.core.chunk_rest(seq__56767__$1);
var G__56796 = c__5548__auto__;
var G__56797 = cljs.core.count(c__5548__auto__);
var G__56798 = (0);
seq__56767 = G__56795;
chunk__56768 = G__56796;
count__56769 = G__56797;
i__56770 = G__56798;
continue;
} else {
var key = cljs.core.first(seq__56767__$1);
goog.events.unlistenByKey(key);


var G__56799 = cljs.core.next(seq__56767__$1);
var G__56800 = null;
var G__56801 = (0);
var G__56802 = (0);
seq__56767 = G__56799;
chunk__56768 = G__56800;
count__56769 = G__56801;
i__56770 = G__56802;
continue;
}
} else {
return null;
}
}
break;
}
});
});
var on_blur = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape__$1),rumext.v2.adapt(state)],(function (event){
var is_empty_QMARK_ = app.util.text_editor.is_current_empty(state);
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

if(cljs.core.not(is_empty_QMARK_)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.texts","finalize-editor-state","app.main.data.workspace.texts/finalize-editor-state",-201608113));

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.initialize_editor_state(shape__$1,app.main.ui.workspace.shapes.text.editor.default_decorator));
} else {
}

return cljs.core.reset_BANG_(blurred,true);
}));
var on_focus = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape__$1),rumext.v2.adapt(state)],(function (___$1){
return cljs.core.reset_BANG_(blurred,false);
}));
var prev_value = rumext.v2.use_ref(state);
var ___$1 = rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state)],(function (){
return rumext.v2.set_ref_val_BANG_(prev_value,state);
}));
var handle_change = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (state__$1){
var old_state = rumext.v2.ref_val(prev_value);
if((((!((state__$1 == null)))) && ((!((old_state == null)))))){
var block_changes = app.util.text_editor.get_content_changes(old_state,state__$1);
var prev_data = app.util.text_editor.get_editor_current_inline_styles(old_state);
var block_to_setup = app.main.ui.workspace.shapes.text.editor.get_blocks_to_setup(block_changes);
var block_to_add_styles = app.main.ui.workspace.shapes.text.editor.get_blocks_to_add_styles(block_changes);
return app.util.text_editor.apply_block_styles_to_content(app.util.text_editor.setup_block_styles(state__$1,block_to_setup,prev_data),block_to_add_styles);
} else {
return state__$1;
}
}));
var on_change = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (val){
var prev_val = rumext.v2.ref_val(prev_value);
var styleOverride = app.util.text_editor.get_style_override(prev_val);
var keep_style_QMARK_ = (function (){var and__5023__auto__ = (!((styleOverride == null)));
if(and__5023__auto__){
var and__5023__auto____$1 = app.util.text_editor.content_equals(prev_val,val);
if(cljs.core.truth_(and__5023__auto____$1)){
return app.util.text_editor.selection_equals(prev_val,val);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var val__$1 = (function (){var G__56772 = (handle_change.cljs$core$IFn$_invoke$arity$1 ? handle_change.cljs$core$IFn$_invoke$arity$1(val) : handle_change.call(null,val));
var G__56772__$1 = (cljs.core.truth_(cljs.core.deref(blurred))?app.util.text_editor.add_editor_blur_selection(G__56772):G__56772);
var G__56772__$2 = ((cljs.core.not(cljs.core.deref(blurred)))?app.util.text_editor.remove_editor_blur_selection(G__56772__$1):G__56772__$1);
if(cljs.core.truth_(keep_style_QMARK_)){
return app.util.text_editor.set_style_override(G__56772__$2,styleOverride);
} else {
return G__56772__$2;
}
})();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_editor_state(shape__$1,val__$1));
}));
var on_editor = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (editor){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_editor(editor));

if(cljs.core.truth_(editor)){
app.util.dom.add_class_BANG_(app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$1("public-DraftEditor-content"),"mousetrap");

return editor.focus();
} else {
return null;
}
}));
var handle_return = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (___$2,state__$1){
var style_56803 = app.util.text_editor.get_editor_current_block_data(state__$1);
var state_56804__$2 = (function (){var G__56773 = app.util.text_editor.insert_text(state__$1,"\n",style_56803);
return (handle_change.cljs$core$IFn$_invoke$arity$1 ? handle_change.cljs$core$IFn$_invoke$arity$1(G__56773) : handle_change.call(null,G__56773));
})();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_editor_state(shape__$1,state_56804__$2));

return "handled";
}));
var on_pointer_down = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
if(app.util.dom.class_QMARK_(app.util.dom.get_target(event),"DraftEditor-root")){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.cursor_to_end(shape__$1));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.focus_editor());
}));
var handle_pasted_text = (function (text,___$2,___$3){
if(cljs.core.seq(text)){
var current_block_styles_56805 = app.util.text_editor.get_editor_current_block_data(state);
var inline_styles_56806 = app.util.text_editor.get_editor_current_inline_styles(state);
var style_56807 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_block_styles_56805,inline_styles_56806], 0));
var state_56808__$1 = (function (){var G__56774 = app.util.text_editor.insert_text(state,text,style_56807);
return (handle_change.cljs$core$IFn$_invoke$arity$1 ? handle_change.cljs$core$IFn$_invoke$arity$1(G__56774) : handle_change.call(null,G__56774));
})();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_editor_state(shape__$1,state_56808__$1));
} else {
}

return "handled";
});
rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$1(on_mount);

return rumext.v2.jsx("div",{'className':"text-editor"+" "+(app.util.dom.classnames.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.ui.css_cursors.get_dynamic("text",new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(shape__$1)),true,new cljs.core.Keyword(null,"align-top","align-top",576330652),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$2(content,"top"),"top"),new cljs.core.Keyword(null,"align-center","align-center",-99300755),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$1(content),"center"),new cljs.core.Keyword(null,"align-bottom","align-bottom",612864893),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$1(content),"bottom")], 0)) ?? ""),'ref':self_ref,'style':{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape__$1),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape__$1),'opacity':(cljs.core.truth_(cljs.core.deref(blurred))?(0):null)},'onPointerDown':on_pointer_down,'children':rumext.v2.jsx(shadow.js.shim.module$$penpot$draft_js.Editor,{'stripPastedStyles':true,'onChange':on_change,'blockRendererFn':(function (p1__56761_SHARP_){
return app.main.ui.workspace.shapes.text.editor.render_block(p1__56761_SHARP_,shape__$1);
}),'handleReturn':handle_return,'style':({"border": "1px solid red"}),'onFocus':on_focus,'onBlur':on_blur,'ref':on_editor,'handlePastedText':handle_pasted_text,'customStyleFn':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.shapes.text.editor.styles_fn,shape__$1),'editorState':state})});
})));

(app.main.ui.workspace.shapes.text.editor.text_shape_edit_html.displayName = "text-shape-edit-html");

/**
 * Translate a point in the viewport into client coordinates
 */
app.main.ui.workspace.shapes.text.editor.translate_point_from_viewport = (function app$main$ui$workspace$shapes$text$editor$translate_point_from_viewport(pt,viewport,zoom){
if((!((viewport == null)))){
var vbox = viewport.viewBox.baseVal;
var box = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(vbox.x,vbox.y);
var zoom__$1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(zoom);
return app.common.geom.point.multiply(app.common.geom.point.subtract(pt,box),zoom__$1);
} else {
return null;
}
});
app.main.ui.workspace.shapes.text.editor.text_editor_svg = (function app$main$ui$workspace$shapes$text$editor$text_editor_svg(props_56775){
var modifiers = props_56775.modifiers;
var shape = props_56775.shape;
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var modifiers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,shape_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var clip_id = ""+"text-edition-clip"+(shape_id ?? "");
var text_modifier_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.refs.workspace_text_modifier_by_id(shape_id);
}));
var text_modifier = rumext.v2.deref(text_modifier_ref);
var maybe_zoom = ((app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari-16","safari-16",-2098723899)))?rumext.v2.deref(app.main.refs.selected_zoom):null);
var shape__$1 = (function (){var G__56787 = shape;
var G__56787__$1 = (((!((text_modifier == null))))?app.main.data.workspace.texts.apply_text_modifier(G__56787,text_modifier):G__56787);
if((!((modifiers__$1 == null)))){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__56787__$1,modifiers__$1);
} else {
return G__56787__$1;
}
})();
var bounds = app.common.geom.shapes.text.shape__GT_rect(shape__$1);
var x = Math.min((bounds?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"x","x",2099068185))),(shape__$1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"x","x",2099068185))));
var y = Math.min((bounds?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"y","y",-1757859776))),(shape__$1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"y","y",-1757859776))));
var width = Math.max((bounds?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"width","width",-384071477))),(shape__$1?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"width","width",-384071477))));
var height = Math.max((bounds?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"height","height",1025178622))),(shape__$1?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"height","height",1025178622))));
var style = (function (){var G__56788 = ({"pointerEvents": "all"});
var G__56788__$1 = (((!(app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari","safari",497115653)))))?app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(G__56788,({"transform": ""+"translate("+(((shape__$1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"x","x",2099068185))) - x) ?? "")+"px, "+(((shape__$1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"y","y",-1757859776))) - y) ?? "")+"px)"})):G__56788);
var G__56788__$2 = ((app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari-17","safari-17",412083955)))?app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(G__56788__$1,({"height": "100%", "display": "flex", "flexDirection": "column", "justifyContent": app.main.ui.workspace.shapes.text.editor.shape__GT_justify(shape__$1)})):G__56788__$1);
if(app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari-16","safari-16",-2098723899))){
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(G__56788__$2,({"position": "fixed", "left": (0), "top": ((shape__$1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"y","y",-1757859776))) - y), "transform-origin": "top left", "transform": (((!((maybe_zoom == null))))?""+"scale("+(maybe_zoom ?? "")+")":null)}));
} else {
return G__56788__$2;
}
})();
return rumext.v2.jsxs("g",{'className':"text-editor",'clipPath':""+"url(#"+(clip_id ?? "")+")",'transform':""+(app.common.geom.shapes.transform_matrix.cljs$core$IFn$_invoke$arity$1(shape__$1) ?? ""),'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx("clipPath",{'id':clip_id,'children':rumext.v2.jsx("rect",{'x':x,'y':y,'width':width,'height':height})})}),rumext.v2.jsx("foreignObject",{'x':x,'y':y,'width':width,'height':height,'children':rumext.v2.jsx("div",{'style':style,'children':rumext.v2.jsx(app.main.ui.workspace.shapes.text.editor.text_shape_edit_html,{'shape':shape__$1},""+(shape_id ?? ""))})})]});
});

(app.main.ui.workspace.shapes.text.editor.text_editor_svg.displayName = "text-editor-svg");


//# sourceMappingURL=app.main.ui.workspace.shapes.text.editor.js.map
