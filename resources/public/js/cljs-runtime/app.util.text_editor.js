import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$$penpot$draft_js.js";
import "./app.common.text.js";
goog.provide('app.util.text_editor');
app.util.text_editor.immutable_map__GT_map = (function app$util$text_editor$immutable_map__GT_map(obj){
var data = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__68901){
var vec__68902 = p__68901;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68902,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
})),cljs.core.seq(obj));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
app.util.text_editor.create_editor_state = (function app$util$text_editor$create_editor_state(var_args){
var G__68909 = arguments.length;
switch (G__68909) {
case 0:
return app.util.text_editor.create_editor_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.util.text_editor.create_editor_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.text_editor.create_editor_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.text_editor.create_editor_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.js.shim.module$$penpot$draft_js.createEditorState(null,null);
}));

(app.util.text_editor.create_editor_state.cljs$core$IFn$_invoke$arity$1 = (function (content){
return shadow.js.shim.module$$penpot$draft_js.createEditorState(content,null);
}));

(app.util.text_editor.create_editor_state.cljs$core$IFn$_invoke$arity$2 = (function (content,decorator){
return shadow.js.shim.module$$penpot$draft_js.createEditorState(content,decorator);
}));

(app.util.text_editor.create_editor_state.cljs$lang$maxFixedArity = 2);

app.util.text_editor.create_decorator = (function app$util$text_editor$create_decorator(type,component){
return shadow.js.shim.module$$penpot$draft_js.createDecorator(type,component);
});
app.util.text_editor.import_content = (function app$util$text_editor$import_content(content){
return shadow.js.shim.module$$penpot$draft_js.convertFromRaw(cljs.core.clj__GT_js(app.common.text.convert_to_draft(content)));
});
app.util.text_editor.export_content = (function app$util$text_editor$export_content(content){
return app.common.text.convert_from_draft(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(shadow.js.shim.module$$penpot$draft_js.convertToRaw(content),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
app.util.text_editor.get_editor_current_plain_text = (function app$util$text_editor$get_editor_current_plain_text(state){
return state.getCurrentContent().getPlainText();
});
app.util.text_editor.get_editor_current_content = (function app$util$text_editor$get_editor_current_content(state){
return state.getCurrentContent();
});
app.util.text_editor.content_has_text_QMARK_ = (function app$util$text_editor$content_has_text_QMARK_(content){
return content.hasText();
});
app.util.text_editor.editor_select_all = (function app$util$text_editor$editor_select_all(state){
return shadow.js.shim.module$$penpot$draft_js.selectAll(state);
});
app.util.text_editor.get_editor_block_data = (function app$util$text_editor$get_editor_block_data(block){
return app.util.text_editor.immutable_map__GT_map(block.getData());
});
app.util.text_editor.get_editor_block_type = (function app$util$text_editor$get_editor_block_type(block){
return block.getType();
});
app.util.text_editor.get_editor_current_block_data = (function app$util$text_editor$get_editor_current_block_data(state){
var block = shadow.js.shim.module$$penpot$draft_js.getCurrentBlock(state);
return app.util.text_editor.get_editor_block_data(block);
});
app.util.text_editor.is_current_empty = (function app$util$text_editor$is_current_empty(state){
return shadow.js.shim.module$$penpot$draft_js.isCurrentEmpty(state);
});
app.util.text_editor.get_editor_current_inline_styles = (function app$util$text_editor$get_editor_current_inline_styles(state){
if(cljs.core.truth_(shadow.js.shim.module$$penpot$draft_js.isCurrentEmpty(state))){
return app.util.text_editor.get_editor_current_block_data(state);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(app.common.text.styles_to_attrs(state.getCurrentInlineStyle()),new cljs.core.Keyword(null,"text-align","text-align",1786091845),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text-direction","text-direction",590275785)], 0));
}
});
app.util.text_editor.update_editor_current_block_data = (function app$util$text_editor$update_editor_current_block_data(state,attrs){
return shadow.js.shim.module$$penpot$draft_js.updateCurrentBlockData(state,cljs.core.clj__GT_js(attrs));
});
app.util.text_editor.update_editor_current_inline_styles = (function app$util$text_editor$update_editor_current_inline_styles(state,attrs){
var update_blocks = (function (state__$1,block_key){
if(cljs.core.empty_QMARK_(shadow.js.shim.module$$penpot$draft_js.getBlockContent(state__$1,block_key))){
return shadow.js.shim.module$$penpot$draft_js.updateBlockData(state__$1,block_key,cljs.core.clj__GT_js(attrs));
} else {
var attrs__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(app.common.text.styles_to_attrs(shadow.js.shim.module$$penpot$draft_js.getInlineStyle(state__$1,block_key,(0))),new cljs.core.Keyword(null,"text-align","text-align",1786091845),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text-direction","text-direction",590275785)], 0));
return shadow.js.shim.module$$penpot$draft_js.updateBlockData(state__$1,block_key,cljs.core.clj__GT_js(attrs__$1));
}
});
var state__$1 = shadow.js.shim.module$$penpot$draft_js.applyInlineStyle(state,app.common.text.attrs_to_styles(attrs));
var selection_after_apply = shadow.js.shim.module$$penpot$draft_js.getSelection(state__$1);
var selected = shadow.js.shim.module$$penpot$draft_js.getSelectedBlocks(state__$1);
var state__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_blocks,state__$1,selected);
return shadow.js.shim.module$$penpot$draft_js.setSelection(state__$2,selection_after_apply);
});
app.util.text_editor.update_editor_current_inline_styles_fn = (function app$util$text_editor$update_editor_current_inline_styles_fn(state,update_fn){
var attrs = (function (){var G__68910 = app.common.text.styles_to_attrs(state.getCurrentInlineStyle());
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(G__68910) : update_fn.call(null,G__68910));
})();
return shadow.js.shim.module$$penpot$draft_js.applyInlineStyle(state,app.common.text.attrs_to_styles(attrs));
});
app.util.text_editor.editor_split_block = (function app$util$text_editor$editor_split_block(state){
return shadow.js.shim.module$$penpot$draft_js.splitBlockPreservingData(state);
});
app.util.text_editor.add_editor_blur_selection = (function app$util$text_editor$add_editor_blur_selection(state){
return shadow.js.shim.module$$penpot$draft_js.addBlurSelectionEntity(state);
});
app.util.text_editor.remove_editor_blur_selection = (function app$util$text_editor$remove_editor_blur_selection(state){
return shadow.js.shim.module$$penpot$draft_js.removeBlurSelectionEntity(state);
});
app.util.text_editor.cursor_to_end = (function app$util$text_editor$cursor_to_end(state){
return shadow.js.shim.module$$penpot$draft_js.cursorToEnd(state);
});
app.util.text_editor.setup_block_styles = (function app$util$text_editor$setup_block_styles(state,blocks,attrs){
if(cljs.core.empty_QMARK_(blocks)){
return state;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,block_key){
return shadow.js.shim.module$$penpot$draft_js.updateBlockData(state__$1,block_key,cljs.core.clj__GT_js(attrs));
}),state,blocks);
}
});
app.util.text_editor.apply_block_styles_to_content = (function app$util$text_editor$apply_block_styles_to_content(state,blocks){
if(cljs.core.empty_QMARK_(blocks)){
return state;
} else {
var selection = shadow.js.shim.module$$penpot$draft_js.getSelection(state);
var redfn = (function (state__$1,bkey){
var attrs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(shadow.js.shim.module$$penpot$draft_js.getBlockData(state__$1,bkey),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return shadow.js.shim.module$$penpot$draft_js.applyInlineStyle(shadow.js.shim.module$$penpot$draft_js.selectBlock(state__$1,bkey),app.common.text.attrs_to_styles(attrs));
});
var $ = state;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(redfn,$,blocks);
return shadow.js.shim.module$$penpot$draft_js.setSelection($__$1,selection);
}
});
app.util.text_editor.insert_text = (function app$util$text_editor$insert_text(state,text,attrs){
var style = app.common.text.attrs_to_styles(attrs);
return shadow.js.shim.module$$penpot$draft_js.insertText(state,text,cljs.core.clj__GT_js(attrs),cljs.core.clj__GT_js(style));
});
app.util.text_editor.get_style_override = (function app$util$text_editor$get_style_override(state){
return state.getInlineStyleOverride();
});
app.util.text_editor.set_style_override = (function app$util$text_editor$set_style_override(state,inline_style){
return shadow.js.shim.module$$penpot$draft_js.setInlineStyleOverride(state,inline_style);
});
app.util.text_editor.content_equals = (function app$util$text_editor$content_equals(state,other){
return state.getCurrentContent().equals(other.getCurrentContent());
});
app.util.text_editor.selection_equals = (function app$util$text_editor$selection_equals(state,other){
return shadow.js.shim.module$$penpot$draft_js.selectionEquals(state.getSelection(),other.getSelection());
});
app.util.text_editor.get_content_changes = (function app$util$text_editor$get_content_changes(old_state,state){
var old_blocks = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(old_state.getCurrentContent().getBlockMap().toJS(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], 0));
var new_blocks = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(state.getCurrentContent().getBlockMap().toJS(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__68918_SHARP_){
return cljs.core.contains_QMARK_(new_blocks,cljs.core.first(p1__68918_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__68920){
var vec__68921 = p__68920;
var bkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68921,(0),null);
var bstate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68921,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bkey,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(bstate,"text"),new cljs.core.Keyword(null,"new","new",-2085437848),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_blocks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bkey,"text"], null))], null)], null);
}))),old_blocks),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__68919_SHARP_){
return (!(cljs.core.contains_QMARK_(old_blocks,cljs.core.first(p1__68919_SHARP_))));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__68927){
var vec__68928 = p__68927;
var bkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68928,(0),null);
var bstate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68928,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bkey,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),null,new cljs.core.Keyword(null,"new","new",-2085437848),cljs.core.get.cljs$core$IFn$_invoke$arity$2(bstate,"text")], null)], null);
}))),new_blocks)], 0));
});

//# sourceMappingURL=app.util.text_editor.js.map
