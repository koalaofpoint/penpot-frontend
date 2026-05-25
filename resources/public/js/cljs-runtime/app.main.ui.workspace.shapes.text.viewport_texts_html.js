import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.text.js";
import "./app.common.math.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.text.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.fonts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.shapes.text.html_text.js";
import "./app.util.dom.js";
import "./app.util.object.js";
import "./app.util.text_editor.js";
import "./app.util.text_svg_position.js";
import "./app.util.text.content.js";
import "./promesa.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.text.viewport_texts_html');
app.main.ui.workspace.shapes.text.viewport_texts_html.fix_position = (function app$main$ui$workspace$shapes$text$viewport_texts_html$fix_position(shape){
var temp__5823__auto__ = new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(temp__5823__auto__)){
var modifiers = temp__5823__auto__;
var shape_SINGLEQUOTE_ = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers);
var old_sr = (shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
var new_sr = (shape_SINGLEQUOTE_?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_SINGLEQUOTE_,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
var deltav = app.common.geom.point.to_vec(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new_sr),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(old_sr));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,app.common.types.modifiers.move.cljs$core$IFn$_invoke$arity$2(modifiers,deltav)),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
} else {
return shape;
}
});
app.main.ui.workspace.shapes.text.viewport_texts_html.update_shape_with_content = (function app$main$ui$workspace$shapes$text$viewport_texts_html$update_shape_with_content(shape,content,editor_content){
var G__56843 = shape;
if((((!((shape == null)))) && ((!((editor_content == null)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56843,new cljs.core.Keyword(null,"content","content",15833224),app.common.data.txt_merge(content,editor_content));
} else {
return G__56843;
}
});
/**
 * Updates the shape with the current state in the editor
 */
app.main.ui.workspace.shapes.text.viewport_texts_html.update_with_editor_state = (function app$main$ui$workspace$shapes$text$viewport_texts_html$update_with_editor_state(shape,editor_state){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
var editor_content = (cljs.core.truth_(editor_state)?app.util.text_editor.export_content(app.util.text_editor.get_editor_current_content(editor_state)):null);
return app.main.ui.workspace.shapes.text.viewport_texts_html.update_shape_with_content(shape,content,editor_content);
});
/**
 * Updates the shape with the current editor
 */
app.main.ui.workspace.shapes.text.viewport_texts_html.update_with_editor_v2 = (function app$main$ui$workspace$shapes$text$viewport_texts_html$update_with_editor_v2(shape,editor){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
var editor_content = app.util.text.content.dom__GT_cljs(editor.root);
return app.main.ui.workspace.shapes.text.viewport_texts_html.update_shape_with_content(shape,content,editor_content);
});
app.main.ui.workspace.shapes.text.viewport_texts_html.update_text_shape = (function app$main$ui$workspace$shapes$text$viewport_texts_html$update_text_shape(p__56844,node){
var map__56845 = p__56844;
var map__56845__$1 = cljs.core.__destructure_map(map__56845);
var shape = map__56845__$1;
var grow_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56845__$1,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56845__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56845__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743));
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (position_data){
if(app.common.geom.shapes.text.overlaps_position_data_QMARK_(shape,position_data)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_position_data(id,position_data));
} else {
}

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-height","auto-height",-960519663),null,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),null], null), null),grow_type)){
var map__56846_56870 = app.util.dom.get_bounding_rect(app.util.dom.query.cljs$core$IFn$_invoke$arity$2(node,".paragraph-set"));
var map__56846_56871__$1 = cljs.core.__destructure_map(map__56846_56870);
var width_56873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56846_56871__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_56874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56846_56871__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width_56875__$1 = app.common.math.ceil(width_56873);
var height_56876__$1 = app.common.math.ceil(height_56874);
if((((!(app.common.math.almost_zero_QMARK_(width_56875__$1)))) && ((((!(app.common.math.almost_zero_QMARK_(height_56876__$1)))) && (cljs.core.not(migrate)))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.resize_text(id,width_56875__$1,height_56876__$1));
} else {
}
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.clean_text_modifier(id));
}),app.util.text_svg_position.calc_position_data(id));
});
app.main.ui.workspace.shapes.text.viewport_texts_html.update_text_modifier = (function app$main$ui$workspace$shapes$text$viewport_texts_html$update_text_modifier(p__56848,node){
var map__56849 = p__56848;
var map__56849__$1 = cljs.core.__destructure_map(map__56849);
var shape = map__56849__$1;
var grow_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56849__$1,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56849__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (p1__56847_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_modifier(id,p1__56847_SHARP_));
}),promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (position_data){
var props = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position-data","position-data",-499622376),position_data], null);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-height","auto-height",-960519663),null,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),null], null), null),grow_type)){
var map__56850 = app.util.dom.get_client_size(app.util.dom.query.cljs$core$IFn$_invoke$arity$2(node,".paragraph-set"));
var map__56850__$1 = cljs.core.__destructure_map(map__56850);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56850__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56850__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width__$1 = app.common.math.ceil(width);
var height__$1 = app.common.math.ceil(height);
if((((!(app.common.math.almost_zero_QMARK_(width__$1)))) && ((!(app.common.math.almost_zero_QMARK_(height__$1)))))){
var G__56851 = props;
var G__56851__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56851,new cljs.core.Keyword(null,"width","width",-384071477),width__$1):G__56851);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-height","auto-height",-960519663))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56851__$1,new cljs.core.Keyword(null,"height","height",1025178622),height__$1);
} else {
return G__56851__$1;
}
} else {
return props;
}
} else {
return props;
}
}),app.util.text_svg_position.calc_position_data(id)));
});
app.main.ui.workspace.shapes.text.viewport_texts_html.text_container = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$shapes$text$viewport_texts_html$text_container(props_56852){
var props = props_56852;
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var on_update = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"on-update");
var handle_update = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(on_update)],(function (node){
if((!((node == null)))){
return (on_update.cljs$core$IFn$_invoke$arity$2 ? on_update.cljs$core$IFn$_invoke$arity$2(shape,node) : on_update.call(null,shape,node));
} else {
return null;
}
}));
return rumext.v2.jsx(app.main.ui.shapes.text.html_text.text_shape,{'ref':handle_update,'shape':shape,'grow-type':new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape)},["shape-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))].join(''));
}));

(app.main.ui.workspace.shapes.text.viewport_texts_html.text_container.displayName = "text-container");

app.main.ui.workspace.shapes.text.viewport_texts_html.text_properties_equal_QMARK_ = (function app$main$ui$workspace$shapes$text$viewport_texts_html$text_properties_equal_QMARK_(shape,other){
var or__5025__auto__ = (shape === other);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(other));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(other));
if(and__5023__auto____$1){
var and__5023__auto____$2 = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185))),(other?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(other,new cljs.core.Keyword(null,"x","x",2099068185))));
if(cljs.core.truth_(and__5023__auto____$2)){
var and__5023__auto____$3 = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776))),(other?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(other,new cljs.core.Keyword(null,"y","y",-1757859776))));
if(cljs.core.truth_(and__5023__auto____$3)){
var and__5023__auto____$4 = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477))),(other?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(other,new cljs.core.Keyword(null,"width","width",-384071477))));
if(cljs.core.truth_(and__5023__auto____$4)){
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2((shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622))),(other?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(other,new cljs.core.Keyword(null,"height","height",1025178622))));
} else {
return and__5023__auto____$4;
}
} else {
return and__5023__auto____$3;
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
app.main.ui.workspace.shapes.text.viewport_texts_html.text_changes_renderer = (function app$main$ui$workspace$shapes$text$viewport_texts_html$text_changes_renderer(props_56853){
var props = props_56853;
var text_shapes = (props["text-shapes"]);
var prev_text_shapes = app.main.ui.hooks.use_previous(text_shapes);
var pending_update_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var pending_update = cljs.core.deref(pending_update_STAR_);
var text_change_QMARK_ = (function (id){
var new_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_shapes,id);
var old_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_text_shapes,id);
var remote_QMARK_ = (!((new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new_shape)) == null)));
return (((((!(remote_QMARK_))) && (cljs.core.not(app.main.ui.workspace.shapes.text.viewport_texts_html.text_properties_equal_QMARK_(old_shape,new_shape))))) || ((new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(new_shape) == null)));
});
var changed_texts = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(text_shapes),rumext.v2.adapt(pending_update)],(function (){
var pending_shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.vals(pending_update));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(text_shapes),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (id){
return ((cljs.core.contains_QMARK_(pending_shapes,id)) || (text_change_QMARK_(id)));
}),cljs.core.keys(text_shapes)));
}));
var handle_update_shape = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (shape,node){
var uid = app.common.uuid.next();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pending_update_STAR_,cljs.core.assoc,uid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.shapes.text.viewport_texts_html.update_text_shape(shape,node),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pending_update_STAR_,cljs.core.dissoc,uid);
}));
}));
return rumext.v2.jsx("div",{'className':"text-changes-renderer",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56855){
var map__56856 = p__56855;
var map__56856__$1 = cljs.core.__destructure_map(map__56856);
var shape = map__56856__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56856__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.shapes.text.viewport_texts_html.text_container,{'shape':shape,'on-update':handle_update_shape},""+"text-container-"+(id ?? "")));

return out_arr__35152__auto__;
}),[],changed_texts)});
});

(app.main.ui.workspace.shapes.text.viewport_texts_html.text_changes_renderer.displayName = "text-changes-renderer");

app.main.ui.workspace.shapes.text.viewport_texts_html.text_modifiers_renderer = (function app$main$ui$workspace$shapes$text$viewport_texts_html$text_modifiers_renderer(props_56857){
var props = props_56857;
var text_shapes = cljs.core.update_vals(app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"text-shapes"),app.main.ui.workspace.shapes.text.viewport_texts_html.fix_position);
var prev_text_shapes = app.main.ui.hooks.use_previous(text_shapes);
var text_change_QMARK_ = (function (id){
var new_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_shapes,id);
var old_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_text_shapes,id);
return (((!((new_shape == null)))) && ((((!((old_shape == null)))) && (cljs.core.not(app.main.ui.workspace.shapes.text.viewport_texts_html.text_properties_equal_QMARK_(old_shape,new_shape))))));
});
var changed_texts = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(text_shapes)],(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(text_shapes),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(text_change_QMARK_,cljs.core.keys(text_shapes)));
}));
var handle_update_shape = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.shapes.text.viewport_texts_html.update_text_modifier);
return rumext.v2.jsx("div",{'className':"text-changes-renderer",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56858){
var map__56859 = p__56858;
var map__56859__$1 = cljs.core.__destructure_map(map__56859);
var shape = map__56859__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56859__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.shapes.text.viewport_texts_html.text_container,{'shape':shape,'on-update':handle_update_shape},""+"text-container-"+(id ?? "")));

return out_arr__35152__auto__;
}),[],changed_texts)});
});

(app.main.ui.workspace.shapes.text.viewport_texts_html.text_modifiers_renderer.displayName = "text-modifiers-renderer");

app.main.ui.workspace.shapes.text.viewport_texts_html.viewport_text_editing = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$shapes$text$viewport_texts_html$viewport_text_editing(props_56860){
var props = props_56860;
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var workspace_editor_state = rumext.v2.deref(app.main.refs.workspace_editor_state);
var workspace_v2_editor_state = rumext.v2.deref(app.main.refs.workspace_v2_editor_state);
var workspace_editor = rumext.v2.deref(app.main.refs.workspace_editor);
var editor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(workspace_editor_state,shape_id);
var v2_editor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(workspace_v2_editor_state,shape_id);
var text_modifier_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.refs.workspace_text_modifier_by_id(shape_id);
}));
var text_modifier = rumext.v2.deref(text_modifier_ref);
var shape__$1 = (function (){var G__56861 = shape;
var G__56861__$1 = (((!((editor_state == null))))?app.main.ui.workspace.shapes.text.viewport_texts_html.update_with_editor_state(G__56861,editor_state):G__56861);
if((((!((v2_editor_state == null)))) && ((!((workspace_editor == null)))))){
return app.main.ui.workspace.shapes.text.viewport_texts_html.update_with_editor_v2(G__56861__$1,workspace_editor);
} else {
return G__56861__$1;
}
})();
var shape__$2 = (((!((text_modifier == null))))?(function (){var map__56862 = app.main.data.workspace.texts.apply_text_modifier(shape__$1,text_modifier);
var map__56862__$1 = cljs.core.__destructure_map(map__56862);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56862__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56862__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape__$1,new cljs.core.Keyword(null,"width","width",-384071477),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),height], 0));
})():shape__$1);
var shape__$3 = app.main.ui.hooks.use_equal_memo(shape__$2);
var handle_update_shape = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.shapes.text.viewport_texts_html.update_text_modifier);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$3))],(function (){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.remove_text_modifier(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$3)));
});
}));

return rumext.v2.jsx(app.main.ui.workspace.shapes.text.viewport_texts_html.text_container,{'shape':shape__$3,'on-update':handle_update_shape});
}));

(app.main.ui.workspace.shapes.text.viewport_texts_html.viewport_text_editing.displayName = "viewport-text-editing");

app.main.ui.workspace.shapes.text.viewport_texts_html.check_props = (function app$main$ui$workspace$shapes$text$viewport_texts_html$check_props(new_props,old_props){
return ((((new_props["objects"]) === (old_props["objects"]))) && (((((new_props["modifiers"]) === (old_props["modifiers"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props["edition"]),(old_props["edition"]))))));
});
app.main.ui.workspace.shapes.text.viewport_texts_html.viewport_texts = (function (p1__56863_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__56863_SHARP_,app.main.ui.workspace.shapes.text.viewport_texts_html.check_props);
})((function app$main$ui$workspace$shapes$text$viewport_texts_html$viewport_texts(props_56865){
var props = props_56865;
var objects = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"objects");
var edition = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"edition");
var modifiers = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"modifiers");
var text_shapes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.text_shape_QMARK_,cljs.core.second)),objects);
}));
var text_shapes__$1 = app.main.ui.hooks.use_equal_memo(text_shapes);
var editing_shape = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(text_shapes__$1),rumext.v2.adapt(edition)],(function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_shapes__$1,edition);
}));
var editing_shape__$1 = app.main.ui.hooks.use_equal_memo(editing_shape);
var text_shapes_changes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(text_shapes__$1),rumext.v2.adapt(edition)],(function (){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(text_shapes__$1,edition);
}));
var text_shapes_modifiers = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(modifiers),rumext.v2.adapt(text_shapes__$1)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__56866){
var vec__56867 = p__56866;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56867,(0),null);
var modifiers__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56867,(1),null);
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_shapes__$1,id);
if(cljs.core.truth_(temp__5825__auto__)){
var shape = temp__5825__auto__;
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[id,app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(shape,modifiers__$1)],null));
} else {
return null;
}
})),modifiers);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var text_nodes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56864_SHARP_){
return app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__56864_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(text_shapes__$1)], 0));
var fonts = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-id","font-id",-390084123)),text_nodes);
return cljs.core.run_BANG_(app.main.fonts.ensure_loaded_BANG_,fonts);
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(editing_shape__$1)?rumext.v2.jsx(app.main.ui.workspace.shapes.text.viewport_texts_html.viewport_text_editing,{'shape':editing_shape__$1}):null),rumext.v2.jsx(app.main.ui.workspace.shapes.text.viewport_texts_html.text_modifiers_renderer,{'text-shapes':text_shapes_modifiers}),rumext.v2.jsx(app.main.ui.workspace.shapes.text.viewport_texts_html.text_changes_renderer,{'text-shapes':text_shapes_changes})]});
}));

(app.main.ui.workspace.shapes.text.viewport_texts_html.viewport_texts.displayName = "viewport-texts");


//# sourceMappingURL=app.main.ui.workspace.shapes.text.viewport_texts_html.js.map
