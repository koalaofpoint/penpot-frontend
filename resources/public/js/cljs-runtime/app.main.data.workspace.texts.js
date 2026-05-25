import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$$penpot$text_editor.js";
import "./app.common.attrs.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.common.types.fills.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.text.js";
import "./app.common.uuid.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.common.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.modifiers.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.data.workspace.wasm_text.js";
import "./app.main.features.js";
import "./app.main.fonts.js";
import "./app.main.router.js";
import "./app.render_wasm.api.js";
import "./app.util.text_editor.js";
import "./app.util.text.content.styles.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.texts');
app.main.data.workspace.texts.create_root_from_string = shadow.js.shim.module$$penpot$text_editor.createRootFromString;
app.main.data.workspace.texts.create_root_from_html = shadow.js.shim.module$$penpot$text_editor.createRootFromHTML;
app.main.data.workspace.texts.create_editor = shadow.js.shim.module$$penpot$text_editor.create;
app.main.data.workspace.texts.set_editor_root_BANG_ = shadow.js.shim.module$$penpot$text_editor.setRoot;
app.main.data.workspace.texts.get_editor_root = shadow.js.shim.module$$penpot$text_editor.getRoot;
app.main.data.workspace.texts.is_empty_QMARK_ = shadow.js.shim.module$$penpot$text_editor.isEmpty;
app.main.data.workspace.texts.dispose_BANG_ = shadow.js.shim.module$$penpot$text_editor.dispose;
app.main.data.workspace.texts.v2_content_has_text_QMARK_ = (function app$main$data$workspace$texts$v2_content_has_text_QMARK_(content){
return cljs.core.boolean$((cljs.core.truth_(content)?cljs.core.some((function (node){
return (!(cuerdas.core.blank_QMARK_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$2(node,""))));
}),app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,content)):null));
});
app.main.data.workspace.texts.update_editor = (function app$main$data$workspace$texts$update_editor(editor){
if((typeof app.main.data.workspace.texts.update_editor_49766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_editor_49766 = (function (editor,meta49767){
this.editor = editor;
this.meta49767 = meta49767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_editor_49766.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_editor_49766.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-editor","app.main.data.workspace.texts/update-editor",1553021306);
}));

(app.main.data.workspace.texts.update_editor_49766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49768,meta49767__$1){
var self__ = this;
var _49768__$1 = this;
return (new app.main.data.workspace.texts.update_editor_49766(self__.editor,meta49767__$1));
}));

(app.main.data.workspace.texts.update_editor_49766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49768){
var self__ = this;
var _49768__$1 = this;
return self__.meta49767;
}));

(app.main.data.workspace.texts.update_editor_49766.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_editor_49766.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if((!((self__.editor == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-editor","workspace-editor",1700926848),self__.editor);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-editor","workspace-editor",1700926848));
}
}));
}

return (new app.main.data.workspace.texts.update_editor_49766(editor,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.focus_editor = (function app$main$data$workspace$texts$focus_editor(){
if((typeof app.main.data.workspace.texts.focus_editor_49772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.focus_editor_49772 = (function (meta49773){
this.meta49773 = meta49773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.focus_editor_49772.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.focus_editor_49772.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","focus-editor","app.main.data.workspace.texts/focus-editor",2138710187);
}));

(app.main.data.workspace.texts.focus_editor_49772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49774,meta49773__$1){
var self__ = this;
var _49774__$1 = this;
return (new app.main.data.workspace.texts.focus_editor_49772(meta49773__$1));
}));

(app.main.data.workspace.texts.focus_editor_49772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49774){
var self__ = this;
var _49774__$1 = this;
return self__.meta49773;
}));

(app.main.data.workspace.texts.focus_editor_49772.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.focus_editor_49772.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var editor = new cljs.core.Keyword(null,"workspace-editor","workspace-editor",1700926848).cljs$core$IFn$_invoke$arity$1(state);
var element = (cljs.core.truth_(editor)?editor.element:null);
if(cljs.core.truth_(editor.focus)){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return editor.focus();
}));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = element;
if(cljs.core.truth_(and__5023__auto__)){
return element.focus;
} else {
return and__5023__auto__;
}
})())){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return element.focus();
}));
} else {
return null;
}
}
}));
}

return (new app.main.data.workspace.texts.focus_editor_49772(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.gen_name = (function app$main$data$workspace$texts$gen_name(editor){
if((!((editor == null)))){
var result = app.common.types.text.generate_shape_name(app.util.text_editor.get_editor_current_plain_text(editor));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,"")){
return result;
} else {
return null;
}
} else {
return null;
}
});
app.main.data.workspace.texts.update_editor_state = (function app$main$data$workspace$texts$update_editor_state(p__49781,editor_state){
var map__49782 = p__49781;
var map__49782__$1 = cljs.core.__destructure_map(map__49782);
var shape = map__49782__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.workspace.texts.update_editor_state_49783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_editor_state_49783 = (function (p__49781,editor_state,map__49782,shape,id,meta49784){
this.p__49781 = p__49781;
this.editor_state = editor_state;
this.map__49782 = map__49782;
this.shape = shape;
this.id = id;
this.meta49784 = meta49784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_editor_state_49783.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_editor_state_49783.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-editor-state","app.main.data.workspace.texts/update-editor-state",1174660022);
}));

(app.main.data.workspace.texts.update_editor_state_49783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49785,meta49784__$1){
var self__ = this;
var _49785__$1 = this;
return (new app.main.data.workspace.texts.update_editor_state_49783(self__.p__49781,self__.editor_state,self__.map__49782,self__.shape,self__.id,meta49784__$1));
}));

(app.main.data.workspace.texts.update_editor_state_49783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49785){
var self__ = this;
var _49785__$1 = this;
return self__.meta49784;
}));

(app.main.data.workspace.texts.update_editor_state_49783.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_editor_state_49783.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if((!((self__.editor_state == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),cljs.core.assoc,self__.id,self__.editor_state);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),cljs.core.dissoc,self__.id);
}
}));
}

return (new app.main.data.workspace.texts.update_editor_state_49783(p__49781,editor_state,map__49782__$1,shape,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.finalize_editor_state = (function app$main$data$workspace$texts$finalize_editor_state(id,update_name_QMARK_){
if((typeof app.main.data.workspace.texts.finalize_editor_state_49789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.finalize_editor_state_49789 = (function (id,update_name_QMARK_,meta49790){
this.id = id;
this.update_name_QMARK_ = update_name_QMARK_;
this.meta49790 = meta49790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.finalize_editor_state_49789.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.finalize_editor_state_49789.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","finalize-editor-state","app.main.data.workspace.texts/finalize-editor-state",-201608113);
}));

(app.main.data.workspace.texts.finalize_editor_state_49789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49791,meta49790__$1){
var self__ = this;
var _49791__$1 = this;
return (new app.main.data.workspace.texts.finalize_editor_state_49789(self__.id,self__.update_name_QMARK_,meta49790__$1));
}));

(app.main.data.workspace.texts.finalize_editor_state_49789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49791){
var self__ = this;
var _49791__$1 = this;
return self__.meta49790;
}));

(app.main.data.workspace.texts.finalize_editor_state_49789.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.finalize_editor_state_49789.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(app.main.data.workspace.common.initialized_QMARK_(state)){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var editor_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null));
var content = app.util.text_editor.get_editor_current_content(editor_state);
var name = app.main.data.workspace.texts.gen_name(editor_state);
var new_shape_QMARK_ = (new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape) == null);
if(app.util.text_editor.content_has_text_QMARK_(content)){
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
var content__$1 = app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.text_editor.export_content(content),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"children","children",-940561982))], 0));
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.workspace.texts.update_editor_state(shape,null)),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content__$1,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))) && ((((!((new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state) == null)))) && ((!((shape == null))))))))?beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),(function (shape__$1){
var G__49798 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),content__$1);
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.update_name_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!((name == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49798,new cljs.core.Keyword(null,"name","name",1843675177),name);
} else {
return G__49798;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),((new_shape_QMARK_)?self__.id:null)], null)),app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$core$IFn$_invoke$arity$2(shape,content__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),((new_shape_QMARK_)?self__.id:null)], null)], 0))):null));
} else {
var content__$1 = app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.text_editor.export_content(content),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"children","children",-940561982))], 0));
var modifiers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),self__.id], null));
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.workspace.texts.update_editor_state(shape,null)),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content__$1,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))) && ((((!((new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state) == null)))) && ((!((shape == null))))))))?beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),(function (shape__$1){
var map__49803 = modifiers;
var map__49803__$1 = cljs.core.__destructure_map(map__49803);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var position_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49803__$1,new cljs.core.Keyword(null,"position-data","position-data",-499622376));
var G__49804 = (function (){var G__49805 = (function (){var G__49806 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),content__$1);
if(cljs.core.truth_(position_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49806,new cljs.core.Keyword(null,"position-data","position-data",-499622376),position_data);
} else {
return G__49806;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.update_name_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!((name == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49805,new cljs.core.Keyword(null,"name","name",1843675177),name);
} else {
return G__49805;
}
})();
if((((!((width == null)))) || ((!((height == null)))))){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__49804,app.common.types.modifiers.change_size(shape__$1,width,height));
} else {
return G__49804;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),((new_shape_QMARK_)?self__.id:null)], null))):null));
}
} else {
if((!((self__.id == null)))){
return beicon.v2.core.of(app.main.data.workspace.selection.deselect_shape(self__.id),app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([self__.id])));
} else {
return null;
}
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.texts.finalize_editor_state_49789(id,update_name_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.initialize_editor_state = (function app$main$data$workspace$texts$initialize_editor_state(p__49815,decorator){
var map__49816 = p__49815;
var map__49816__$1 = cljs.core.__destructure_map(map__49816);
var shape = map__49816__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49816__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49816__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49816__$1,new cljs.core.Keyword(null,"content","content",15833224));
if((typeof app.main.data.workspace.texts.initialize_editor_state_49820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.initialize_editor_state_49820 = (function (p__49815,decorator,map__49816,shape,id,name,content,meta49821){
this.p__49815 = p__49815;
this.decorator = decorator;
this.map__49816 = map__49816;
this.shape = shape;
this.id = id;
this.name = name;
this.content = content;
this.meta49821 = meta49821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.initialize_editor_state_49820.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.initialize_editor_state_49820.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","initialize-editor-state","app.main.data.workspace.texts/initialize-editor-state",387679718);
}));

(app.main.data.workspace.texts.initialize_editor_state_49820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49822,meta49821__$1){
var self__ = this;
var _49822__$1 = this;
return (new app.main.data.workspace.texts.initialize_editor_state_49820(self__.p__49815,self__.decorator,self__.map__49816,self__.shape,self__.id,self__.name,self__.content,meta49821__$1));
}));

(app.main.data.workspace.texts.initialize_editor_state_49820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49822){
var self__ = this;
var _49822__$1 = this;
return self__.meta49821;
}));

(app.main.data.workspace.texts.initialize_editor_state_49820.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.initialize_editor_state_49820.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var text_state = (function (){var G__49823 = self__.content;
if((G__49823 == null)){
return null;
} else {
return app.util.text_editor.import_content(G__49823);
}
})();
var attrs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.get_default_text_attrs(),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"default-font","default-font",-1606411738)], null))], 0));
var editor = (function (){var G__49824 = app.util.text_editor.create_editor_state.cljs$core$IFn$_invoke$arity$2(text_state,self__.decorator);
if((((self__.content == null)) && ((!((attrs == null)))))){
return app.util.text_editor.update_editor_current_block_data(G__49824,attrs);
} else {
return G__49824;
}
})();
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null),editor);
}));

(app.main.data.workspace.texts.initialize_editor_state_49820.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.initialize_editor_state_49820.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251)),self__.id);
var update_name_QMARK_ = (((self__.content == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.name,app.main.data.workspace.texts.gen_name(editor))));
return beicon.v2.core.map((function (){
return app.main.data.workspace.texts.finalize_editor_state(self__.id,update_name_QMARK_);
}),beicon.v2.core.take((1),beicon.v2.core.merge(beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.router","navigate","app.main.router/navigate",-477162538)),stream),beicon.v2.core.filter((function (p1__49809_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.texts","finalize-editor-state","app.main.data.workspace.texts/finalize-editor-state",-201608113),p1__49809_SHARP_);
}),stream))));
}));
}

return (new app.main.data.workspace.texts.initialize_editor_state_49820(p__49815,decorator,map__49816__$1,shape,id,name,content,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Select all content of the current editor. When not editor found this
 *   event is noop.
 */
app.main.data.workspace.texts.select_all = (function app$main$data$workspace$texts$select_all(p__49835){
var map__49836 = p__49835;
var map__49836__$1 = cljs.core.__destructure_map(map__49836);
var shape = map__49836__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49836__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.workspace.texts.editor_select_all_49837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.editor_select_all_49837 = (function (p__49835,map__49836,shape,id,meta49838){
this.p__49835 = p__49835;
this.map__49836 = map__49836;
this.shape = shape;
this.id = id;
this.meta49838 = meta49838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.editor_select_all_49837.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.editor_select_all_49837.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","editor-select-all","app.main.data.workspace.texts/editor-select-all",2022116732);
}));

(app.main.data.workspace.texts.editor_select_all_49837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49839,meta49838__$1){
var self__ = this;
var _49839__$1 = this;
return (new app.main.data.workspace.texts.editor_select_all_49837(self__.p__49835,self__.map__49836,self__.shape,self__.id,meta49838__$1));
}));

(app.main.data.workspace.texts.editor_select_all_49837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49839){
var self__ = this;
var _49839__$1 = this;
return self__.meta49838;
}));

(app.main.data.workspace.texts.editor_select_all_49837.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.editor_select_all_49837.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null),app.util.text_editor.editor_select_all);
}));
}

return (new app.main.data.workspace.texts.editor_select_all_49837(p__49835,map__49836__$1,shape,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.cursor_to_end = (function app$main$data$workspace$texts$cursor_to_end(p__49843){
var map__49844 = p__49843;
var map__49844__$1 = cljs.core.__destructure_map(map__49844);
var shape = map__49844__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49844__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.workspace.texts.cursor_to_end_49848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.cursor_to_end_49848 = (function (p__49843,map__49844,shape,id,meta49849){
this.p__49843 = p__49843;
this.map__49844 = map__49844;
this.shape = shape;
this.id = id;
this.meta49849 = meta49849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.cursor_to_end_49848.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.cursor_to_end_49848.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","cursor-to-end","app.main.data.workspace.texts/cursor-to-end",-1476614484);
}));

(app.main.data.workspace.texts.cursor_to_end_49848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49850,meta49849__$1){
var self__ = this;
var _49850__$1 = this;
return (new app.main.data.workspace.texts.cursor_to_end_49848(self__.p__49843,self__.map__49844,self__.shape,self__.id,meta49849__$1));
}));

(app.main.data.workspace.texts.cursor_to_end_49848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49850){
var self__ = this;
var _49850__$1 = this;
return self__.meta49849;
}));

(app.main.data.workspace.texts.cursor_to_end_49848.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.cursor_to_end_49848.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null),app.util.text_editor.cursor_to_end);
}));
}

return (new app.main.data.workspace.texts.cursor_to_end_49848(p__49843,map__49844__$1,shape,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.to_new_fills = (function app$main$data$workspace$texts$to_new_fills(data){
return app.common.types.fills.create.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.select_keys(data,app.common.types.fills.fill_attrs))], 0));
});
app.main.data.workspace.texts.shape_current_values = (function app$main$data$workspace$texts$shape_current_values(shape,pred,attrs){
var root = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
var nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
if(app.common.types.text.is_text_node_QMARK_(node)){
var default_text_attrs = app.common.types.text.get_default_text_attrs();
var fills = ((app.common.types.fills.has_valid_fill_attrs_QMARK_(node))?app.main.data.workspace.texts.to_new_fills(node):(((!((new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(node) == null))))?new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(node):new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(default_text_attrs)
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_text_attrs,node], 0)),new cljs.core.Keyword(null,"fills","fills",902966780),fills);
} else {
return node;
}
}),app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(pred,root));
return app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$2(nodes,attrs);
});
app.main.data.workspace.texts.current_root_values = (function app$main$data$workspace$texts$current_root_values(p__49860){
var map__49861 = p__49860;
var map__49861__$1 = cljs.core.__destructure_map(map__49861);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return app.main.data.workspace.texts.shape_current_values(shape,app.common.types.text.is_root_node_QMARK_,attrs);
});
app.main.data.workspace.texts.v2_current_text_values = (function app$main$data$workspace$texts$v2_current_text_values(p__49866){
var map__49867 = p__49866;
var map__49867__$1 = cljs.core.__destructure_map(map__49867);
var editor_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword(null,"editor-instance","editor-instance",-1602615018));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var result = cljs.core.select_keys(app.util.text.content.styles.get_styles_from_style_declaration(editor_instance.currentStyle),attrs);
var result__$1 = ((cljs.core.empty_QMARK_(result))?app.common.types.text.default_text_attrs:result);
return result__$1;
});
app.main.data.workspace.texts.v1_current_paragraph_values = (function app$main$data$workspace$texts$v1_current_paragraph_values(p__49868){
var map__49869 = p__49868;
var map__49869__$1 = cljs.core.__destructure_map(map__49869);
var editor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"editor-state","editor-state",579582138));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49869__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
if(cljs.core.truth_(editor_state)){
return cljs.core.select_keys(app.util.text_editor.get_editor_current_block_data(editor_state),attrs);
} else {
return app.main.data.workspace.texts.shape_current_values(shape,app.common.types.text.is_paragraph_node_QMARK_,attrs);
}
});
app.main.data.workspace.texts.current_paragraph_values = (function app$main$data$workspace$texts$current_paragraph_values(p__49870){
var map__49871 = p__49870;
var map__49871__$1 = cljs.core.__destructure_map(map__49871);
var options = map__49871__$1;
var editor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"editor-state","editor-state",579582138));
var editor_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"editor-instance","editor-instance",-1602615018));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
if((!((editor_instance == null)))){
return app.main.data.workspace.texts.v2_current_text_values(options);
} else {
if((!((editor_state == null)))){
return app.main.data.workspace.texts.v1_current_paragraph_values(options);
} else {
return app.main.data.workspace.texts.shape_current_values(shape,app.common.types.text.is_paragraph_node_QMARK_,attrs);

}
}
});
app.main.data.workspace.texts.v1_current_text_values = (function app$main$data$workspace$texts$v1_current_text_values(p__49873){
var map__49874 = p__49873;
var map__49874__$1 = cljs.core.__destructure_map(map__49874);
var editor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"editor-state","editor-state",579582138));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var result = cljs.core.select_keys(app.util.text_editor.get_editor_current_inline_styles(editor_state),attrs);
var result__$1 = ((cljs.core.empty_QMARK_(result))?app.common.types.text.get_default_text_attrs():result);
return result__$1;
});
app.main.data.workspace.texts.current_text_values = (function app$main$data$workspace$texts$current_text_values(p__49876){
var map__49877 = p__49876;
var map__49877__$1 = cljs.core.__destructure_map(map__49877);
var options = map__49877__$1;
var editor_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"editor-state","editor-state",579582138));
var editor_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"editor-instance","editor-instance",-1602615018));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49877__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
if((!((editor_instance == null)))){
return app.main.data.workspace.texts.v2_current_text_values(options);
} else {
if((!((editor_state == null)))){
return app.main.data.workspace.texts.v1_current_text_values(options);
} else {
return app.main.data.workspace.texts.shape_current_values(shape,app.common.types.text.is_text_node_QMARK_,attrs);

}
}
});
app.main.data.workspace.texts.count_node_chars = (function app$main$data$workspace$texts$count_node_chars(var_args){
var G__49882 = arguments.length;
switch (G__49882) {
case 1:
return app.main.data.workspace.texts.count_node_chars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.texts.count_node_chars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.texts.count_node_chars.cljs$core$IFn$_invoke$arity$1 = (function (node){
return app.main.data.workspace.texts.count_node_chars.cljs$core$IFn$_invoke$arity$2(node,false);
}));

(app.main.data.workspace.texts.count_node_chars.cljs$core$IFn$_invoke$arity$2 = (function (node,last_QMARK_){
var G__49891 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
switch (G__49891) {
case "root":
case "paragraph-set":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.texts.count_node_chars,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49879_SHARP_){
return app.main.data.workspace.texts.count_node_chars.cljs$core$IFn$_invoke$arity$2(p1__49879_SHARP_,true);
}),cljs.core.take_last((1),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node)))));

break;
case "paragraph":
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.texts.count_node_chars,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))) + (cljs.core.truth_(last_QMARK_)?(0):(1)));

break;
default:
return cljs.core.count(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

}
}));

(app.main.data.workspace.texts.count_node_chars.cljs$lang$maxFixedArity = 2);

/**
 * Adds information about ranges inside the metadata of the text nodes
 */
app.main.data.workspace.texts.decorate_range_info = (function app$main$data$workspace$texts$decorate_range_info(content){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$2((function (node){
return app.common.data.update_when(node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
var start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$2(cljs.core.meta(node),(0));
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__49905,node__$1){
var vec__49906 = p__49905;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49906,(0),null);
var start__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49906,(1),null);
var end = (start__$1 + app.main.data.workspace.texts.count_node_chars.cljs$core$IFn$_invoke$arity$1(node__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.with_meta(node__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start__$1,new cljs.core.Keyword(null,"end","end",-268185958),end], null))),end], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,start], null),children));
}));
}),cljs.core.with_meta(content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),app.main.data.workspace.texts.count_node_chars.cljs$core$IFn$_invoke$arity$1(content)], null)));
});
app.main.data.workspace.texts.split_content_at = (function app$main$data$workspace$texts$split_content_at(content,position){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3((function (node){
return ((app.common.types.text.is_paragraph_node_QMARK_(node)) && ((((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(node)) < position)) && ((position < new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(node)))))));
}),(function (node){
var process_node = (function app$main$data$workspace$texts$split_content_at_$_process_node(child){
var start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(child));
var end = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(child));
if((((start < position)) && ((position < end)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(child,cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),position),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.subs,(0),(position - start)),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(child,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),position),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.subs,(position - start))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null);
}
});
return app.common.data.update_when(node,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__49912_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(process_node),p1__49912_SHARP_);
}));
}),content);
});
app.main.data.workspace.texts.update_content_range = (function app$main$data$workspace$texts$update_content_range(content,start,end,attrs){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3((function (node){
return ((app.common.types.text.is_text_node_QMARK_(node)) && ((((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(node)) >= start)) && ((new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(node)) <= end)))));
}),(function (p1__49926_SHARP_){
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(p1__49926_SHARP_,attrs);
}),content);
});
app.main.data.workspace.texts.update_text_range_attrs = (function app$main$data$workspace$texts$update_text_range_attrs(shape,start,end,attrs){
var new_content = app.main.data.workspace.texts.update_content_range(app.main.data.workspace.texts.split_content_at(app.main.data.workspace.texts.split_content_at(app.main.data.workspace.texts.decorate_range_info(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape)),start),end),start,end,attrs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),new_content);
});
app.main.data.workspace.texts.update_text_range = (function app$main$data$workspace$texts$update_text_range(id,start,end,attrs){
if((typeof app.main.data.workspace.texts.update_text_range_49935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_text_range_49935 = (function (id,start,end,attrs,meta49936){
this.id = id;
this.start = start;
this.end = end;
this.attrs = attrs;
this.meta49936 = meta49936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_text_range_49935.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_range_49935.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-text-range","app.main.data.workspace.texts/update-text-range",-1094206256);
}));

(app.main.data.workspace.texts.update_text_range_49935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49937,meta49936__$1){
var self__ = this;
var _49937__$1 = this;
return (new app.main.data.workspace.texts.update_text_range_49935(self__.id,self__.start,self__.end,self__.attrs,meta49936__$1));
}));

(app.main.data.workspace.texts.update_text_range_49935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49937){
var self__ = this;
var _49937__$1 = this;
return self__.meta49936;
}));

(app.main.data.workspace.texts.update_text_range_49935.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_range_49935.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var update_fn = (function (shape__$1){
var G__49938 = shape__$1;
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
return app.main.data.workspace.texts.update_text_range_attrs(G__49938,self__.start,self__.end,self__.attrs);
} else {
return G__49938;
}
});
var shape_ids = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null):((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,self__.id):null));
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(shape_ids,update_fn));
}));
}

return (new app.main.data.workspace.texts.update_text_range_49935(id,start,end,attrs,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.update_root_attrs = (function app$main$data$workspace$texts$update_root_attrs(p__49942){
var map__49943 = p__49942;
var map__49943__$1 = cljs.core.__destructure_map(map__49943);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49943__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if((typeof app.main.data.workspace.texts.update_root_attrs_49944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_root_attrs_49944 = (function (p__49942,map__49943,id,attrs,meta49945){
this.p__49942 = p__49942;
this.map__49943 = map__49943;
this.id = id;
this.attrs = attrs;
this.meta49945 = meta49945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_root_attrs_49944.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_root_attrs_49944.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-root-attrs","app.main.data.workspace.texts/update-root-attrs",470119238);
}));

(app.main.data.workspace.texts.update_root_attrs_49944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49946,meta49945__$1){
var self__ = this;
var _49946__$1 = this;
return (new app.main.data.workspace.texts.update_root_attrs_49944(self__.p__49942,self__.map__49943,self__.id,self__.attrs,meta49945__$1));
}));

(app.main.data.workspace.texts.update_root_attrs_49944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49946){
var self__ = this;
var _49946__$1 = this;
return self__.meta49945;
}));

(app.main.data.workspace.texts.update_root_attrs_49944.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_root_attrs_49944.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var update_fn = (function (shape__$1){
if((!((new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape__$1) == null)))){
return app.common.types.text.update_text_content(shape__$1,app.common.types.text.is_root_node_QMARK_,app.common.data.txt_merge,self__.attrs);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),app.common.data.txt_merge(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"root"], null),self__.attrs));
}
});
var shape_ids = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null):((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,self__.id):null));
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(shape_ids,update_fn));
}));
}

return (new app.main.data.workspace.texts.update_root_attrs_49944(p__49942,map__49943__$1,id,attrs,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.update_paragraph_attrs = (function app$main$data$workspace$texts$update_paragraph_attrs(p__49948){
var map__49949 = p__49948;
var map__49949__$1 = cljs.core.__destructure_map(map__49949);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49949__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var attrs__$1 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(attrs);
if((typeof app.main.data.workspace.texts.update_paragraph_attrs_49950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_paragraph_attrs_49950 = (function (p__49948,map__49949,id,attrs,meta49951){
this.p__49948 = p__49948;
this.map__49949 = map__49949;
this.id = id;
this.attrs = attrs;
this.meta49951 = meta49951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_paragraph_attrs_49950.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_paragraph_attrs_49950.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-paragraph-attrs","app.main.data.workspace.texts/update-paragraph-attrs",-653068763);
}));

(app.main.data.workspace.texts.update_paragraph_attrs_49950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49952,meta49951__$1){
var self__ = this;
var _49952__$1 = this;
return (new app.main.data.workspace.texts.update_paragraph_attrs_49950(self__.p__49948,self__.map__49949,self__.id,self__.attrs,meta49951__$1));
}));

(app.main.data.workspace.texts.update_paragraph_attrs_49950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49952){
var self__ = this;
var _49952__$1 = this;
return self__.meta49951;
}));

(app.main.data.workspace.texts.update_paragraph_attrs_49950.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_paragraph_attrs_49950.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null),app.util.text_editor.update_editor_current_block_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.attrs], 0));
}));

(app.main.data.workspace.texts.update_paragraph_attrs_49950.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_paragraph_attrs_49950.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null)) == null)))){
return null;
} else {
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var merge_fn = (function (node,attrs__$1){
return cljs.core.reduce_kv((function (node__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,k,v);
}),node,attrs__$1);
});
var update_fn = (function (p1__49947_SHARP_){
return app.common.types.text.update_text_content(p1__49947_SHARP_,app.common.types.text.is_paragraph_node_QMARK_,merge_fn,self__.attrs);
});
var shape_ids = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null):((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,self__.id):null));
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(shape_ids,update_fn));
}
}));
}

return (new app.main.data.workspace.texts.update_paragraph_attrs_49950(p__49948,map__49949__$1,id,attrs__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.update_text_attrs = (function app$main$data$workspace$texts$update_text_attrs(p__49960){
var map__49964 = p__49960;
var map__49964__$1 = cljs.core.__destructure_map(map__49964);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if((typeof app.main.data.workspace.texts.update_text_attrs_49965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_text_attrs_49965 = (function (p__49960,map__49964,id,attrs,meta49966){
this.p__49960 = p__49960;
this.map__49964 = map__49964;
this.id = id;
this.attrs = attrs;
this.meta49966 = meta49966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_text_attrs_49965.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_attrs_49965.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-text-attrs","app.main.data.workspace.texts/update-text-attrs",-962056551);
}));

(app.main.data.workspace.texts.update_text_attrs_49965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49967,meta49966__$1){
var self__ = this;
var _49967__$1 = this;
return (new app.main.data.workspace.texts.update_text_attrs_49965(self__.p__49960,self__.map__49964,self__.id,self__.attrs,meta49966__$1));
}));

(app.main.data.workspace.texts.update_text_attrs_49965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49967){
var self__ = this;
var _49967__$1 = this;
return self__.meta49966;
}));

(app.main.data.workspace.texts.update_text_attrs_49965.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_attrs_49965.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null),app.util.text_editor.update_editor_current_inline_styles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.attrs], 0));
}));

(app.main.data.workspace.texts.update_text_attrs_49965.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_attrs_49965.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if((!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null)) == null)))){
return null;
} else {
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var update_node_QMARK_ = (function (node){
return ((app.common.types.text.is_text_node_QMARK_(node)) || (app.common.types.text.is_paragraph_node_QMARK_(node)));
});
var shape_ids = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null):((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,self__.id):null));
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(shape_ids,(function (p1__49959_SHARP_){
return app.common.types.text.update_text_content(p1__49959_SHARP_,update_node_QMARK_,app.common.data.txt_merge,self__.attrs);
})));
}
}));
}

return (new app.main.data.workspace.texts.update_text_attrs_49965(p__49960,map__49964__$1,id,attrs,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.migrate_node = (function app$main$data$workspace$texts$migrate_node(node){
var color_attrs = cljs.core.not_empty(cljs.core.select_keys(node,app.common.types.fills.fill_attrs));
var G__49968 = node;
var G__49968__$1 = (((new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(node) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49968,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.create()):G__49968);
var G__49968__$2 = (cljs.core.truth_(color_attrs)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49968__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870)], 0)),new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.update,cljs.core.conj,color_attrs):G__49968__$1);
if((((new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(node) == null)) && (cljs.core.empty_QMARK_(color_attrs)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49968__$2,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.text.get_default_text_fills());
} else {
return G__49968__$2;
}
});
app.main.data.workspace.texts.migrate_content = (function app$main$data$workspace$texts$migrate_content(content){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,app.common.types.text.is_paragraph_node_QMARK_),app.main.data.workspace.texts.migrate_node,content);
});
app.main.data.workspace.texts.update_text_with_function = (function app$main$data$workspace$texts$update_text_with_function(var_args){
var G__49970 = arguments.length;
switch (G__49970) {
case 2:
return app.main.data.workspace.texts.update_text_with_function.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.texts.update_text_with_function.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.texts.update_text_with_function.cljs$core$IFn$_invoke$arity$2 = (function (id,update_node_fn){
return app.main.data.workspace.texts.update_text_with_function.cljs$core$IFn$_invoke$arity$3(id,update_node_fn,null);
}));

(app.main.data.workspace.texts.update_text_with_function.cljs$core$IFn$_invoke$arity$3 = (function (id,update_node_fn,options){
if((typeof app.main.data.workspace.texts.update_text_with_function_49974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_text_with_function_49974 = (function (id,update_node_fn,options,meta49975){
this.id = id;
this.update_node_fn = update_node_fn;
this.options = options;
this.meta49975 = meta49975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_text_with_function_49974.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_with_function_49974.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-text-with-function","app.main.data.workspace.texts/update-text-with-function",-372442532);
}));

(app.main.data.workspace.texts.update_text_with_function_49974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49976,meta49975__$1){
var self__ = this;
var _49976__$1 = this;
return (new app.main.data.workspace.texts.update_text_with_function_49974(self__.id,self__.update_node_fn,self__.options,meta49975__$1));
}));

(app.main.data.workspace.texts.update_text_with_function_49974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49976){
var self__ = this;
var _49976__$1 = this;
return self__.meta49975;
}));

(app.main.data.workspace.texts.update_text_with_function_49974.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_with_function_49974.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null),app.util.text_editor.update_editor_current_inline_styles_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$2(self__.update_node_fn,app.main.data.workspace.texts.migrate_node)], 0));
}));

(app.main.data.workspace.texts.update_text_with_function_49974.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_with_function_49974.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_((function (){var or__5025__auto__ = (function (){var and__5023__auto__ = app.main.features.active_feature_QMARK_(state,"text-editor/v2");
if(cljs.core.truth_(and__5023__auto__)){
return (new cljs.core.Keyword(null,"workspace-editor","workspace-editor",1700926848).cljs$core$IFn$_invoke$arity$1(state) == null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core.not(app.main.features.active_feature_QMARK_(state,"text-editor/v2"))) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251),self__.id], null)) == null)));
}
})())){
var page_id = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.options,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var update_node_QMARK_ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,app.common.types.text.is_paragraph_node_QMARK_);
var shape_ids = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null):((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,self__.id):null));
var update_content = (function (content){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3(update_node_QMARK_,self__.update_node_fn,app.main.data.workspace.texts.migrate_content(content));
});
var update_shape = (function (shape__$1){
return app.common.data.update_when(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"fills","fills",902966780)),new cljs.core.Keyword(null,"content","content",15833224),update_content);
});
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(shape_ids,update_shape,self__.options));
} else {
return null;
}
}));

(app.main.data.workspace.texts.update_text_with_function_49974.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_with_function_49974.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"text-editor/v2"))){
var temp__5825__auto__ = new cljs.core.Keyword(null,"workspace-editor","workspace-editor",1700926848).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var instance = temp__5825__auto__;
var styles = (function (){var G__49979 = shadow.js.shim.module$$penpot$text_editor.getCurrentStyle(instance);
var G__49979__$1 = (((G__49979 == null))?null:app.util.text.content.styles.get_styles_from_style_declaration.cljs$core$IFn$_invoke$arity$variadic(G__49979,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"removed-mixed","removed-mixed",-588684214),true], 0)));
var G__49979__$2 = (((G__49979__$1 == null))?null:cljs.core.comp.cljs$core$IFn$_invoke$arity$2(self__.update_node_fn,app.main.data.workspace.texts.migrate_node)(G__49979__$1));
if((G__49979__$2 == null)){
return null;
} else {
return app.util.text.content.styles.attrs__GT_styles(G__49979__$2);
}
})();
return shadow.js.shim.module$$penpot$text_editor.applyStylesToSelection(instance,styles);
} else {
return null;
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.texts.update_text_with_function_49974(id,update_node_fn,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.texts.update_text_with_function.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.texts.start_edit_if_selected = (function (){
if((typeof app.main.data.workspace.texts.start_edit_if_selected_49981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.start_edit_if_selected_49981 = (function (meta49982){
this.meta49982 = meta49982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.start_edit_if_selected_49981.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.start_edit_if_selected_49981.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","start-edit-if-selected","app.main.data.workspace.texts/start-edit-if-selected",371880962);
}));

(app.main.data.workspace.texts.start_edit_if_selected_49981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49983,meta49982__$1){
var self__ = this;
var _49983__$1 = this;
return (new app.main.data.workspace.texts.start_edit_if_selected_49981(meta49982__$1));
}));

(app.main.data.workspace.texts.start_edit_if_selected_49981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49983){
var self__ = this;
var _49983__$1 = this;
return self__.meta49982;
}));

(app.main.data.workspace.texts.start_edit_if_selected_49981.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.start_edit_if_selected_49981.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49980_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49980_SHARP_);
}),app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var G__49984 = state;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected)),new cljs.core.Keyword(null,"text","text",-1790561697))))){
return cljs.core.assoc_in(G__49984,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edition","edition",1337508089)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected)));
} else {
return G__49984;
}
}));
}

return (new app.main.data.workspace.texts.start_edit_if_selected_49981(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.texts.not_changed_QMARK_ = (function app$main$data$workspace$texts$not_changed_QMARK_(old_dim,new_dim){
return (app.common.math.abs((old_dim - new_dim)) > 0.1);
});
app.main.data.workspace.texts.commit_resize_text = (function app$main$data$workspace$texts$commit_resize_text(){
if((typeof app.main.data.workspace.texts.commit_resize_text_49985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.commit_resize_text_49985 = (function (meta49986){
this.meta49986 = meta49986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.commit_resize_text_49985.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.commit_resize_text_49985.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","commit-resize-text","app.main.data.workspace.texts/commit-resize-text",-1450936270);
}));

(app.main.data.workspace.texts.commit_resize_text_49985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49987,meta49986__$1){
var self__ = this;
var _49987__$1 = this;
return (new app.main.data.workspace.texts.commit_resize_text_49985(meta49986__$1));
}));

(app.main.data.workspace.texts.commit_resize_text_49985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49987){
var self__ = this;
var _49987__$1 = this;
return self__.meta49986;
}));

(app.main.data.workspace.texts.commit_resize_text_49985.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.commit_resize_text_49985.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var props = new cljs.core.Keyword("app.main.data.workspace.texts","resize-text-debounce-props","app.main.data.workspace.texts/resize-text-debounce-props",861311250).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var undo_id = Symbol();
var changed_text_QMARK_ = (function app$main$data$workspace$texts$commit_resize_text_$_changed_text_QMARK_(id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var vec__49999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
var new_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49999,(0),null);
var new_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49999,(1),null);
return ((((app.main.data.workspace.texts.not_changed_QMARK_(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape),new_width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))))) || (((app.main.data.workspace.texts.not_changed_QMARK_(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape),new_height)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"auto-height","auto-height",-960519663))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))))))));
});
var update_fn = (function app$main$data$workspace$texts$commit_resize_text_$_update_fn(p__50002){
var map__50003 = p__50002;
var map__50003__$1 = cljs.core.__destructure_map(map__50003);
var shape = map__50003__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50003__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50003__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var grow_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50003__$1,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411));
var map__50004 = selrect;
var map__50004__$1 = cljs.core.__destructure_map(map__50004);
var shape_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50004__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var shape_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50004__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vec__50005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,id);
var new_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50005,(0),null);
var new_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50005,(1),null);
var shape__$1 = (function (){var G__50008 = shape;
if((((((!(app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)))) || ((!(app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))))) && (((app.main.data.workspace.texts.not_changed_QMARK_(shape_width,new_width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))))))){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__50008,app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"width","width",-384071477),new_width,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-lock?","ignore-lock?",1533033230),true], null)));
} else {
return G__50008;
}
})();
var shape__$2 = (function (){var G__50009 = shape__$1;
if((((((!(app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape__$1)))) || ((!(app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)))))) && (((app.main.data.workspace.texts.not_changed_QMARK_(shape_height,new_height)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-height","auto-height",-960519663))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))))))))){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__50009,app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$4(shape__$1,new cljs.core.Keyword(null,"height","height",1025178622),new_height,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-lock?","ignore-lock?",1533033230),true], null)));
} else {
return G__50009;
}
})();
return shape__$2;
});
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(changed_text_QMARK_),cljs.core.keys(props));
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(ids,update_fn,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true,new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true,new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),true,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.texts.commit_resize_text_49985(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.resize_text = (function app$main$data$workspace$texts$resize_text(id,new_width,new_height){
var cur_event = Symbol();
if((typeof app.main.data.workspace.texts.resize_text_50012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.resize_text_50012 = (function (id,new_width,new_height,cur_event,meta50013){
this.id = id;
this.new_width = new_width;
this.new_height = new_height;
this.cur_event = cur_event;
this.meta50013 = meta50013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.resize_text_50012.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.resize_text_50012.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","resize-text","app.main.data.workspace.texts/resize-text",377982849);
}));

(app.main.data.workspace.texts.resize_text_50012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50014,meta50013__$1){
var self__ = this;
var _50014__$1 = this;
return (new app.main.data.workspace.texts.resize_text_50012(self__.id,self__.new_width,self__.new_height,self__.cur_event,meta50013__$1));
}));

(app.main.data.workspace.texts.resize_text_50012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50014){
var self__ = this;
var _50014__$1 = this;
return self__.meta50013;
}));

(app.main.data.workspace.texts.resize_text_50012.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.resize_text_50012.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var G__50015 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword("app.main.data.workspace.texts","resize-text-debounce-props","app.main.data.workspace.texts/resize-text-debounce-props",861311250),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),self__.id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.new_width,self__.new_height], null));
if((new cljs.core.Keyword("app.main.data.workspace.texts","resize-text-debounce-event","app.main.data.workspace.texts/resize-text-debounce-event",-892444927).cljs$core$IFn$_invoke$arity$1(state) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50015,new cljs.core.Keyword("app.main.data.workspace.texts","resize-text-debounce-event","app.main.data.workspace.texts/resize-text-debounce-event",-892444927),self__.cur_event);
} else {
return G__50015;
}
}));

(app.main.data.workspace.texts.resize_text_50012.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.resize_text_50012.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.texts","resize-text-debounce-event","app.main.data.workspace.texts/resize-text-debounce-event",-892444927).cljs$core$IFn$_invoke$arity$1(state),self__.cur_event)){
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","finalize","app.main.data.workspace/finalize",-1506426600)),stream);
return beicon.v2.core.concat(beicon.v2.core.merge(beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (){
return app.main.data.workspace.texts.commit_resize_text();
}),beicon.v2.core.take((1),beicon.v2.core.debounce((50),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.texts","resize-text","app.main.data.workspace.texts/resize-text",377982849)),stream))))),beicon.v2.core.of((app.main.data.workspace.texts.resize_text.cljs$core$IFn$_invoke$arity$3 ? app.main.data.workspace.texts.resize_text.cljs$core$IFn$_invoke$arity$3(self__.id,self__.new_width,self__.new_height) : app.main.data.workspace.texts.resize_text.call(null,self__.id,self__.new_width,self__.new_height)))),beicon.v2.core.of((function (p1__50011_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__50011_SHARP_,new cljs.core.Keyword("app.main.data.workspace.texts","resize-text-debounce-props","app.main.data.workspace.texts/resize-text-debounce-props",861311250),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.main.data.workspace.texts","resize-text-debounce-event","app.main.data.workspace.texts/resize-text-debounce-event",-892444927)], 0));
})));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.texts.resize_text_50012(id,new_width,new_height,cur_event,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.save_font = (function app$main$data$workspace$texts$save_font(data){
if((typeof app.main.data.workspace.texts.save_font_50018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.save_font_50018 = (function (data,meta50019){
this.data = data;
this.meta50019 = meta50019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.save_font_50018.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.save_font_50018.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","save-font","app.main.data.workspace.texts/save-font",-1999563757);
}));

(app.main.data.workspace.texts.save_font_50018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50020,meta50019__$1){
var self__ = this;
var _50020__$1 = this;
return (new app.main.data.workspace.texts.save_font_50018(self__.data,meta50019__$1));
}));

(app.main.data.workspace.texts.save_font_50018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50020){
var self__ = this;
var _50020__$1 = this;
return self__.meta50019;
}));

(app.main.data.workspace.texts.save_font_50018.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.save_font_50018.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var multiple_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__50017_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50017_SHARP_,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
}),cljs.core.vals(self__.data));
var G__50021 = state;
if(cljs.core.not(multiple_QMARK_)){
return cljs.core.assoc_in(G__50021,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"default-font","default-font",-1606411738)], null),self__.data);
} else {
return G__50021;
}
}));
}

return (new app.main.data.workspace.texts.save_font_50018(data,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.apply_text_modifier = (function app$main$data$workspace$texts$apply_text_modifier(shape,text_modifier){
if((!((text_modifier == null)))){
var map__50022 = text_modifier;
var map__50022__$1 = cljs.core.__destructure_map(map__50022);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50022__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50022__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var position_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50022__$1,new cljs.core.Keyword(null,"position-data","position-data",-499622376));
var new_shape = (function (){var G__50023 = shape;
var G__50023__$1 = (((!((width == null))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__50023,app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-lock?","ignore-lock?",1533033230),true], null))):G__50023);
var G__50023__$2 = (((!((height == null))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__50023__$1,app.common.types.modifiers.change_dimensions_modifiers.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-lock?","ignore-lock?",1533033230),true], null))):G__50023__$1);
if((!((position_data == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50023__$2,new cljs.core.Keyword(null,"position-data","position-data",-499622376),position_data);
} else {
return G__50023__$2;
}
})();
var delta_move = app.common.geom.point.subtract(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(app.common.types.modifiers.safe_size_rect(new_shape)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(app.common.types.modifiers.safe_size_rect(shape)));
var new_shape__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(new_shape,new cljs.core.Keyword(null,"position-data","position-data",-499622376),app.common.geom.shapes.move_position_data,delta_move);
return new_shape__$1;
} else {
return shape;
}
});
app.main.data.workspace.texts.commit_update_text_modifier = (function app$main$data$workspace$texts$commit_update_text_modifier(){
if((typeof app.main.data.workspace.texts.commit_update_text_modifier_50024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.commit_update_text_modifier_50024 = (function (meta50025){
this.meta50025 = meta50025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.commit_update_text_modifier_50024.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.commit_update_text_modifier_50024.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","commit-update-text-modifier","app.main.data.workspace.texts/commit-update-text-modifier",-898731876);
}));

(app.main.data.workspace.texts.commit_update_text_modifier_50024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50026,meta50025__$1){
var self__ = this;
var _50026__$1 = this;
return (new app.main.data.workspace.texts.commit_update_text_modifier_50024(meta50025__$1));
}));

(app.main.data.workspace.texts.commit_update_text_modifier_50024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50026){
var self__ = this;
var _50026__$1 = this;
return self__.meta50025;
}));

(app.main.data.workspace.texts.commit_update_text_modifier_50024.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.commit_update_text_modifier_50024.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var ids = new cljs.core.Keyword("app.main.data.workspace.texts","update-text-modifier-debounce-ids","app.main.data.workspace.texts/update-text-modifier-debounce-ids",88238649).cljs$core$IFn$_invoke$arity$1(state);
var modif_tree = app.main.data.workspace.modifiers.create_modif_tree(ids,app.common.types.modifiers.reflow_modifiers());
return beicon.v2.core.of(app.main.data.workspace.modifiers.update_modifiers.cljs$core$IFn$_invoke$arity$3(modif_tree,false,true));
}));
}

return (new app.main.data.workspace.texts.commit_update_text_modifier_50024(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.update_text_modifier = (function app$main$data$workspace$texts$update_text_modifier(id,props){
var cur_event = Symbol();
if((typeof app.main.data.workspace.texts.update_text_modifier_50042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_text_modifier_50042 = (function (id,props,cur_event,meta50043){
this.id = id;
this.props = props;
this.cur_event = cur_event;
this.meta50043 = meta50043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_text_modifier_50042.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_modifier_50042.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-text-modifier","app.main.data.workspace.texts/update-text-modifier",297172056);
}));

(app.main.data.workspace.texts.update_text_modifier_50042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50044,meta50043__$1){
var self__ = this;
var _50044__$1 = this;
return (new app.main.data.workspace.texts.update_text_modifier_50042(self__.id,self__.props,self__.cur_event,meta50043__$1));
}));

(app.main.data.workspace.texts.update_text_modifier_50042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50044){
var self__ = this;
var _50044__$1 = this;
return self__.meta50043;
}));

(app.main.data.workspace.texts.update_text_modifier_50042.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_modifier_50042.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var G__50054 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),self__.id], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),self__.props),new cljs.core.Keyword("app.main.data.workspace.texts","update-text-modifier-debounce-ids","app.main.data.workspace.texts/update-text-modifier-debounce-ids",88238649),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),self__.id);
if((new cljs.core.Keyword("app.main.data.workspace.texts","update-text-modifier-debounce-event","app.main.data.workspace.texts/update-text-modifier-debounce-event",1695192681).cljs$core$IFn$_invoke$arity$1(state) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50054,new cljs.core.Keyword("app.main.data.workspace.texts","update-text-modifier-debounce-event","app.main.data.workspace.texts/update-text-modifier-debounce-event",1695192681),self__.cur_event);
} else {
return G__50054;
}
}));

(app.main.data.workspace.texts.update_text_modifier_50042.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_text_modifier_50042.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.texts","update-text-modifier-debounce-event","app.main.data.workspace.texts/update-text-modifier-debounce-event",1695192681).cljs$core$IFn$_invoke$arity$1(state),self__.cur_event)){
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","finalize","app.main.data.workspace/finalize",-1506426600)),stream);
return beicon.v2.core.concat(beicon.v2.core.merge(beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (){
return app.main.data.workspace.texts.commit_update_text_modifier();
}),beicon.v2.core.take((1),beicon.v2.core.debounce((50),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.texts","update-text-modifier","app.main.data.workspace.texts/update-text-modifier",297172056)),stream))))),beicon.v2.core.of((app.main.data.workspace.texts.update_text_modifier.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.texts.update_text_modifier.cljs$core$IFn$_invoke$arity$2(self__.id,self__.props) : app.main.data.workspace.texts.update_text_modifier.call(null,self__.id,self__.props)))),beicon.v2.core.of((function (p1__50037_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__50037_SHARP_,new cljs.core.Keyword("app.main.data.workspace.texts","update-text-modifier-debounce-event","app.main.data.workspace.texts/update-text-modifier-debounce-event",1695192681),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.main.data.workspace.texts","update-text-modifier-debounce-ids","app.main.data.workspace.texts/update-text-modifier-debounce-ids",88238649)], 0));
})));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.texts.update_text_modifier_50042(id,props,cur_event,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.clean_text_modifier = (function app$main$data$workspace$texts$clean_text_modifier(id){
if((typeof app.main.data.workspace.texts.clean_text_modifier_50056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.clean_text_modifier_50056 = (function (id,meta50057){
this.id = id;
this.meta50057 = meta50057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.clean_text_modifier_50056.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.clean_text_modifier_50056.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","clean-text-modifier","app.main.data.workspace.texts/clean-text-modifier",-292436858);
}));

(app.main.data.workspace.texts.clean_text_modifier_50056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50058,meta50057__$1){
var self__ = this;
var _50058__$1 = this;
return (new app.main.data.workspace.texts.clean_text_modifier_50056(self__.id,meta50057__$1));
}));

(app.main.data.workspace.texts.clean_text_modifier_50056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50058){
var self__ = this;
var _50058__$1 = this;
return self__.meta50057;
}));

(app.main.data.workspace.texts.clean_text_modifier_50056.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.clean_text_modifier_50056.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807)),self__.id);
return beicon.v2.core.delay((100),beicon.v2.core.of((function (state__$1){
var G__50059 = state__$1;
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807)),self__.id) === current_value)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50059,new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),cljs.core.dissoc,self__.id);
} else {
return G__50059;
}
})));
}));
}

return (new app.main.data.workspace.texts.clean_text_modifier_50056(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.remove_text_modifier = (function app$main$data$workspace$texts$remove_text_modifier(id){
if((typeof app.main.data.workspace.texts.remove_text_modifier_50061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.remove_text_modifier_50061 = (function (id,meta50062){
this.id = id;
this.meta50062 = meta50062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.remove_text_modifier_50061.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.remove_text_modifier_50061.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","remove-text-modifier","app.main.data.workspace.texts/remove-text-modifier",-1971036133);
}));

(app.main.data.workspace.texts.remove_text_modifier_50061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50063,meta50062__$1){
var self__ = this;
var _50063__$1 = this;
return (new app.main.data.workspace.texts.remove_text_modifier_50061(self__.id,meta50062__$1));
}));

(app.main.data.workspace.texts.remove_text_modifier_50061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50063){
var self__ = this;
var _50063__$1 = this;
return self__.meta50062;
}));

(app.main.data.workspace.texts.remove_text_modifier_50061.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.remove_text_modifier_50061.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.dissoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),self__.id], null));
}));

(app.main.data.workspace.texts.remove_text_modifier_50061.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.remove_text_modifier_50061.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),true], null)));
}));
}

return (new app.main.data.workspace.texts.remove_text_modifier_50061(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.commit_position_data = (function app$main$data$workspace$texts$commit_position_data(){
if((typeof app.main.data.workspace.texts.commit_position_data_50065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.commit_position_data_50065 = (function (meta50066){
this.meta50066 = meta50066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.commit_position_data_50065.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.commit_position_data_50065.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","commit-position-data","app.main.data.workspace.texts/commit-position-data",1056332356);
}));

(app.main.data.workspace.texts.commit_position_data_50065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50067,meta50066__$1){
var self__ = this;
var _50067__$1 = this;
return (new app.main.data.workspace.texts.commit_position_data_50065(meta50066__$1));
}));

(app.main.data.workspace.texts.commit_position_data_50065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50067){
var self__ = this;
var _50067__$1 = this;
return self__.meta50066;
}));

(app.main.data.workspace.texts.commit_position_data_50065.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.commit_position_data_50065.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var ids = cljs.core.keys(new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data","app.main.data.workspace.texts/update-position-data",1071451524).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),(function (p1__50064_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__50064_SHARP_,ids);
}));
}));

(app.main.data.workspace.texts.commit_position_data_50065.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.commit_position_data_50065.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var position_data = new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data","app.main.data.workspace.texts/update-position-data",1071451524).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(cljs.core.keys(position_data),(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"position-data","position-data",-499622376),cljs.core.get.cljs$core$IFn$_invoke$arity$2(position_data,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),true,new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),false], null))),beicon.v2.core.of((function (state__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state__$1,new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data-debounce","app.main.data.workspace.texts/update-position-data-debounce",568799460),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data","app.main.data.workspace.texts/update-position-data",1071451524)], 0));
})));
}));
}

return (new app.main.data.workspace.texts.commit_position_data_50065(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.update_position_data = (function app$main$data$workspace$texts$update_position_data(id,position_data){
var cur_event = Symbol();
if((typeof app.main.data.workspace.texts.update_position_data_50068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_position_data_50068 = (function (id,position_data,cur_event,meta50069){
this.id = id;
this.position_data = position_data;
this.cur_event = cur_event;
this.meta50069 = meta50069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_position_data_50068.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_position_data_50068.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data","app.main.data.workspace.texts/update-position-data",1071451524);
}));

(app.main.data.workspace.texts.update_position_data_50068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50070,meta50069__$1){
var self__ = this;
var _50070__$1 = this;
return (new app.main.data.workspace.texts.update_position_data_50068(self__.id,self__.position_data,self__.cur_event,meta50069__$1));
}));

(app.main.data.workspace.texts.update_position_data_50068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50070){
var self__ = this;
var _50070__$1 = this;
return self__.meta50069;
}));

(app.main.data.workspace.texts.update_position_data_50068.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_position_data_50068.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var state__$1 = cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),self__.id,new cljs.core.Keyword(null,"position-data","position-data",-499622376)], null),self__.position_data);
if((new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data-debounce","app.main.data.workspace.texts/update-position-data-debounce",568799460).cljs$core$IFn$_invoke$arity$1(state__$1) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data-debounce","app.main.data.workspace.texts/update-position-data-debounce",568799460),self__.cur_event);
} else {
return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data","app.main.data.workspace.texts/update-position-data",1071451524),self__.id], null),self__.position_data);
}
}));

(app.main.data.workspace.texts.update_position_data_50068.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_position_data_50068.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data-debounce","app.main.data.workspace.texts/update-position-data-debounce",568799460).cljs$core$IFn$_invoke$arity$1(state),self__.cur_event)){
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","finalize","app.main.data.workspace/finalize",-1506426600)),stream);
return beicon.v2.core.merge(beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (){
return app.main.data.workspace.texts.commit_position_data();
}),beicon.v2.core.take((1),beicon.v2.core.debounce((50),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.texts","update-position-data","app.main.data.workspace.texts/update-position-data",1071451524)),stream))))),beicon.v2.core.of((app.main.data.workspace.texts.update_position_data.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.texts.update_position_data.cljs$core$IFn$_invoke$arity$2(self__.id,self__.position_data) : app.main.data.workspace.texts.update_position_data.call(null,self__.id,self__.position_data))));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.texts.update_position_data_50068(id,position_data,cur_event,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.update_attrs = (function app$main$data$workspace$texts$update_attrs(id,attrs){
if((typeof app.main.data.workspace.texts.update_attrs_50072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_attrs_50072 = (function (id,attrs,meta50073){
this.id = id;
this.attrs = attrs;
this.meta50073 = meta50073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_attrs_50072.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_attrs_50072.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-attrs","app.main.data.workspace.texts/update-attrs",-6808024);
}));

(app.main.data.workspace.texts.update_attrs_50072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50074,meta50073__$1){
var self__ = this;
var _50074__$1 = this;
return (new app.main.data.workspace.texts.update_attrs_50072(self__.id,self__.attrs,meta50073__$1));
}));

(app.main.data.workspace.texts.update_attrs_50072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50074){
var self__ = this;
var _50074__$1 = this;
return self__.meta50073;
}));

(app.main.data.workspace.texts.update_attrs_50072.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_attrs_50072.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var text_editor_instance = new cljs.core.Keyword(null,"workspace-editor","workspace-editor",1700926848).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((function (){var and__5023__auto__ = app.main.features.active_feature_QMARK_(state,"text-editor/v2");
if(cljs.core.truth_(and__5023__auto__)){
return (!((text_editor_instance == null)));
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.empty();
} else {
return beicon.v2.core.concat((function (){var attrs__$1 = cljs.core.select_keys(self__.attrs,app.common.types.text.root_attrs);
if((!(cljs.core.empty_QMARK_(attrs__$1)))){
return beicon.v2.core.of(app.main.data.workspace.texts.update_root_attrs(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1], null)));
} else {
return beicon.v2.core.empty();
}
})(),(function (){var attrs__$1 = cljs.core.select_keys(self__.attrs,app.common.types.text.paragraph_attrs);
if((!(cljs.core.empty_QMARK_(attrs__$1)))){
return beicon.v2.core.of(app.main.data.workspace.texts.update_paragraph_attrs(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1], null)));
} else {
return beicon.v2.core.empty();
}
})(),(function (){var attrs__$1 = cljs.core.select_keys(self__.attrs,app.common.types.text.text_node_attrs);
if((!(cljs.core.empty_QMARK_(attrs__$1)))){
return beicon.v2.core.of(app.main.data.workspace.texts.update_text_attrs(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1], null)));
} else {
return beicon.v2.core.empty();
}
})(),(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"text-editor/v2"))?beicon.v2.core.of((app.main.data.workspace.texts.v2_update_text_editor_styles.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.texts.v2_update_text_editor_styles.cljs$core$IFn$_invoke$arity$2(self__.id,self__.attrs) : app.main.data.workspace.texts.v2_update_text_editor_styles.call(null,self__.id,self__.attrs))):null),(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))?beicon.v2.core.concat((cljs.core.truth_((app.render_wasm.api.text_editor_is_active_QMARK_.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.text_editor_is_active_QMARK_.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.text_editor_is_active_QMARK_.call(null)))?(function (){var span_attrs = cljs.core.select_keys(self__.attrs,app.common.types.text.text_node_attrs);
if((!(cljs.core.empty_QMARK_(span_attrs)))){
var result = app.render_wasm.api.apply_style_to_selection(span_attrs);
if(cljs.core.truth_(result)){
return beicon.v2.core.of((function (){var G__50075 = new cljs.core.Keyword(null,"shape-id","shape-id",981169327).cljs$core$IFn$_invoke$arity$1(result);
var G__50076 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(result);
var G__50077 = new cljs.core.Keyword(null,"update-name?","update-name?",-1643455272);
var G__50078 = true;
return (app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$4 ? app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$4(G__50075,G__50076,G__50077,G__50078) : app.main.data.workspace.texts.v2_update_text_shape_content.call(null,G__50075,G__50076,G__50077,G__50078));
})());
} else {
return null;
}
} else {
return null;
}
})():null),(function (){var G__50079 = beicon.v2.core.of(app.main.data.workspace.wasm_text.resize_wasm_text(self__.id));
if(cljs.core.contains_QMARK_(self__.attrs,new cljs.core.Keyword(null,"font-id","font-id",-390084123))){
return beicon.v2.core.delay((200),G__50079);
} else {
return G__50079;
}
})()):null));
}
}));

(app.main.data.workspace.texts.update_attrs_50072.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_attrs_50072.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"text-editor/v2"))){
var temp__5825__auto__ = new cljs.core.Keyword(null,"workspace-editor","workspace-editor",1700926848).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var instance = temp__5825__auto__;
var attrs_to_override = (function (){var G__50080 = shadow.js.shim.module$$penpot$text_editor.getCurrentStyle(instance);
if((G__50080 == null)){
return null;
} else {
return app.util.text.content.styles.get_styles_from_style_declaration(G__50080);
}
})();
var overriden_attrs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_to_override,self__.attrs], 0));
var styles = app.util.text.content.styles.attrs__GT_styles(overriden_attrs);
return shadow.js.shim.module$$penpot$text_editor.applyStylesToSelection(instance,styles);
} else {
return null;
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.texts.update_attrs_50072(id,attrs,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.update_all_attrs = (function app$main$data$workspace$texts$update_all_attrs(ids,attrs){
if((typeof app.main.data.workspace.texts.update_all_attrs_50082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.update_all_attrs_50082 = (function (ids,attrs,meta50083){
this.ids = ids;
this.attrs = attrs;
this.meta50083 = meta50083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.update_all_attrs_50082.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_all_attrs_50082.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","update-all-attrs","app.main.data.workspace.texts/update-all-attrs",-900372683);
}));

(app.main.data.workspace.texts.update_all_attrs_50082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50084,meta50083__$1){
var self__ = this;
var _50084__$1 = this;
return (new app.main.data.workspace.texts.update_all_attrs_50082(self__.ids,self__.attrs,meta50083__$1));
}));

(app.main.data.workspace.texts.update_all_attrs_50082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50084){
var self__ = this;
var _50084__$1 = this;
return self__.meta50083;
}));

(app.main.data.workspace.texts.update_all_attrs_50082.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.update_all_attrs_50082.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.map((function (p1__50081_SHARP_){
return app.main.data.workspace.texts.update_attrs(p1__50081_SHARP_,self__.attrs);
}),beicon.v2.core.from(self__.ids)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.texts.update_all_attrs_50082(ids,attrs,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A higher level event that has the resposability of to apply the
 *   specified typography to the selected shapes.
 */
app.main.data.workspace.texts.apply_typography = (function app$main$data$workspace$texts$apply_typography(var_args){
var G__50086 = arguments.length;
switch (G__50086) {
case 2:
return app.main.data.workspace.texts.apply_typography.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.texts.apply_typography.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.texts.apply_typography.cljs$core$IFn$_invoke$arity$2 = (function (typography,file_id){
return app.main.data.workspace.texts.apply_typography.cljs$core$IFn$_invoke$arity$3(null,typography,file_id);
}));

(app.main.data.workspace.texts.apply_typography.cljs$core$IFn$_invoke$arity$3 = (function (ids,typography,file_id){
if((((ids == null)) || (((cljs.core.set_QMARK_(ids)) && (cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)))))){
} else {
throw (new Error("Assert failed: (or (nil? ids) (and (set? ids) (every? uuid? ids)))"));
}

if((typeof app.main.data.workspace.texts.apply_typography_50087 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.apply_typography_50087 = (function (ids,typography,file_id,meta50088){
this.ids = ids;
this.typography = typography;
this.file_id = file_id;
this.meta50088 = meta50088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.apply_typography_50087.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.apply_typography_50087.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","apply-typography","app.main.data.workspace.texts/apply-typography",1717453619);
}));

(app.main.data.workspace.texts.apply_typography_50087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50089,meta50088__$1){
var self__ = this;
var _50089__$1 = this;
return (new app.main.data.workspace.texts.apply_typography_50087(self__.ids,self__.typography,self__.file_id,meta50088__$1));
}));

(app.main.data.workspace.texts.apply_typography_50087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50089){
var self__ = this;
var _50089__$1 = this;
return self__.meta50088;
}));

(app.main.data.workspace.texts.apply_typography_50087.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.apply_typography_50087.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var editor_state = new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251).cljs$core$IFn$_invoke$arity$1(state);
var ids__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.ids,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var attrs = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.typography,new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),self__.file_id),new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.typography)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177)], 0));
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.map((function (id){
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(editor_state,id);
return app.main.data.workspace.texts.update_text_attrs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"editor","editor",-989377770),editor,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs], null));
}),beicon.v2.core.from(cljs.core.seq(ids__$1))),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.texts.apply_typography_50087(ids,typography,file_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.texts.apply_typography.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.texts.generate_typography_name = (function app$main$data$workspace$texts$generate_typography_name(p__50090){
var map__50091 = p__50090;
var map__50091__$1 = cljs.core.__destructure_map(map__50091);
var typography = map__50091__$1;
var font_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50091__$1,new cljs.core.Keyword(null,"font-id","font-id",-390084123));
var font_variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50091__$1,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718));
var map__50092 = app.main.fonts.get_font_data(font_id);
var map__50092__$1 = cljs.core.__destructure_map(map__50092);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(typography,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.title(font_variant_id))].join(''));
});
/**
 * A higher level version of dwl/add-typography, and has mainly two
 *   responsabilities: add the typography to the library and apply it to
 *   the currently selected text shapes (being aware of the open text
 *   editors.
 */
app.main.data.workspace.texts.add_typography = (function app$main$data$workspace$texts$add_typography(file_id){
if((typeof app.main.data.workspace.texts.add_typography_50093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.add_typography_50093 = (function (file_id,meta50094){
this.file_id = file_id;
this.meta50094 = meta50094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.add_typography_50093.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.add_typography_50093.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","add-typography","app.main.data.workspace.texts/add-typography",-992361009);
}));

(app.main.data.workspace.texts.add_typography_50093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50095,meta50094__$1){
var self__ = this;
var _50095__$1 = this;
return (new app.main.data.workspace.texts.add_typography_50093(self__.file_id,meta50094__$1));
}));

(app.main.data.workspace.texts.add_typography_50093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50095){
var self__ = this;
var _50095__$1 = this;
return self__.meta50094;
}));

(app.main.data.workspace.texts.add_typography_50093.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.add_typography_50093.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.text_shape_QMARK_));
var shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,selected);
var shape = cljs.core.first(shapes);
var values = app.main.data.workspace.texts.current_text_values(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editor-state","editor-state",579582138),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.text_node_attrs], null));
var multiple_QMARK_ = (function (){var or__5025__auto__ = ((1) > cljs.core.count(shapes));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"multiple","multiple",1244445549)),cljs.core.vals(values));
}
})();
var values__$1 = cljs.core.select_keys(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(values),app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(app.common.types.text.text_font_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.text_spacing_attrs,app.common.types.text.text_transform_attrs], 0)));
var typ_id = app.common.uuid.next();
var typ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.texts.generate_typography_name((cljs.core.truth_(multiple_QMARK_)?app.common.types.text.default_typography:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.default_typography,values__$1], 0)))),new cljs.core.Keyword(null,"id","id",-1388402092),typ_id);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.libraries.add_typography.cljs$core$IFn$_invoke$arity$1(typ),potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-asset-to-library",new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),"typography"], null))),((cljs.core.not(multiple_QMARK_))?beicon.v2.core.of(app.main.data.workspace.texts.update_attrs(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),typ_id,new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),self__.file_id], null))):null));
}));
}

return (new app.main.data.workspace.texts.add_typography_50093(file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.v2_update_text_editor_styles = (function app$main$data$workspace$texts$v2_update_text_editor_styles(id,new_styles){
if((typeof app.main.data.workspace.texts.v2_update_text_editor_styles_50096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.v2_update_text_editor_styles_50096 = (function (id,new_styles,meta50097){
this.id = id;
this.new_styles = new_styles;
this.meta50097 = meta50097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.v2_update_text_editor_styles_50096.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.v2_update_text_editor_styles_50096.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","v2-update-text-editor-styles","app.main.data.workspace.texts/v2-update-text-editor-styles",-1649752436);
}));

(app.main.data.workspace.texts.v2_update_text_editor_styles_50096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50098,meta50097__$1){
var self__ = this;
var _50098__$1 = this;
return (new app.main.data.workspace.texts.v2_update_text_editor_styles_50096(self__.id,self__.new_styles,meta50097__$1));
}));

(app.main.data.workspace.texts.v2_update_text_editor_styles_50096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50098){
var self__ = this;
var _50098__$1 = this;
return self__.meta50097;
}));

(app.main.data.workspace.texts.v2_update_text_editor_styles_50096.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.v2_update_text_editor_styles_50096.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var merged_styles = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.get_default_text_attrs(),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"default-font","default-font",-1606411738)], null)),self__.new_styles], 0));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-v2-editor-state","workspace-v2-editor-state",-2092501766),self__.id], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),merged_styles);
}));
}

return (new app.main.data.workspace.texts.v2_update_text_editor_styles_50096(id,new_styles,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.v2_update_text_shape_position_data = (function app$main$data$workspace$texts$v2_update_text_shape_position_data(shape_id,position_data){
if((typeof app.main.data.workspace.texts.v2_update_text_shape_position_data_50099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.v2_update_text_shape_position_data_50099 = (function (shape_id,position_data,meta50100){
this.shape_id = shape_id;
this.position_data = position_data;
this.meta50100 = meta50100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.v2_update_text_shape_position_data_50099.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.v2_update_text_shape_position_data_50099.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","v2-update-text-shape-position-data","app.main.data.workspace.texts/v2-update-text-shape-position-data",69154331);
}));

(app.main.data.workspace.texts.v2_update_text_shape_position_data_50099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50101,meta50100__$1){
var self__ = this;
var _50101__$1 = this;
return (new app.main.data.workspace.texts.v2_update_text_shape_position_data_50099(self__.shape_id,self__.position_data,meta50100__$1));
}));

(app.main.data.workspace.texts.v2_update_text_shape_position_data_50099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50101){
var self__ = this;
var _50101__$1 = this;
return self__.meta50100;
}));

(app.main.data.workspace.texts.v2_update_text_shape_position_data_50099.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.v2_update_text_shape_position_data_50099.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),self__.shape_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position-data","position-data",-499622376),self__.position_data], null));
}));
}

return (new app.main.data.workspace.texts.v2_update_text_shape_position_data_50099(shape_id,position_data,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.texts.v2_update_text_shape_content = (function app$main$data$workspace$texts$v2_update_text_shape_content(var_args){
var args__5755__auto__ = [];
var len__5749__auto___50244 = arguments.length;
var i__5750__auto___50245 = (0);
while(true){
if((i__5750__auto___50245 < len__5749__auto___50244)){
args__5755__auto__.push((arguments[i__5750__auto___50245]));

var G__50246 = (i__5750__auto___50245 + (1));
i__5750__auto___50245 = G__50246;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$variadic = (function (id,content,p__50105){
var map__50106 = p__50105;
var map__50106__$1 = cljs.core.__destructure_map(map__50106);
var update_name_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50106__$1,new cljs.core.Keyword(null,"update-name?","update-name?",-1643455272),false);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50106__$1,new cljs.core.Keyword(null,"name","name",1843675177),null);
var finalize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50106__$1,new cljs.core.Keyword(null,"finalize?","finalize?",687625539),false);
var save_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50106__$1,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),true);
if((typeof app.main.data.workspace.texts.v2_update_text_shape_content_50107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.texts.v2_update_text_shape_content_50107 = (function (id,content,p__50105,map__50106,update_name_QMARK_,name,finalize_QMARK_,save_undo_QMARK_,meta50108){
this.id = id;
this.content = content;
this.p__50105 = p__50105;
this.map__50106 = map__50106;
this.update_name_QMARK_ = update_name_QMARK_;
this.name = name;
this.finalize_QMARK_ = finalize_QMARK_;
this.save_undo_QMARK_ = save_undo_QMARK_;
this.meta50108 = meta50108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.texts.v2_update_text_shape_content_50107.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.v2_update_text_shape_content_50107.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.texts","v2-update-text-shape-content","app.main.data.workspace.texts/v2-update-text-shape-content",702141646);
}));

(app.main.data.workspace.texts.v2_update_text_shape_content_50107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50109,meta50108__$1){
var self__ = this;
var _50109__$1 = this;
return (new app.main.data.workspace.texts.v2_update_text_shape_content_50107(self__.id,self__.content,self__.p__50105,self__.map__50106,self__.update_name_QMARK_,self__.name,self__.finalize_QMARK_,self__.save_undo_QMARK_,meta50108__$1));
}));

(app.main.data.workspace.texts.v2_update_text_shape_content_50107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50109){
var self__ = this;
var _50109__$1 = this;
return self__.meta50108;
}));

(app.main.data.workspace.texts.v2_update_text_shape_content_50107.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.texts.v2_update_text_shape_content_50107.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var new_shape_QMARK_ = (new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape) == null);
var prev_content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
var has_prev_content_QMARK_ = (!((new cljs.core.Keyword(null,"prev-content","prev-content",165417916).cljs$core$IFn$_invoke$arity$1(shape) == null)));
var has_content_QMARK_ = ((new_shape_QMARK_)?null:app.main.data.workspace.texts.v2_content_has_text_QMARK_(self__.content));
var did_has_content_QMARK_ = ((new_shape_QMARK_)?null:app.main.data.workspace.texts.v2_content_has_text_QMARK_(prev_content));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),(function (shape__$1){
var new_shape = (function (){var G__50110 = (function (){var G__50111 = (function (){var G__50112 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),self__.content);
if(cljs.core.truth_((function (){var and__5023__auto__ = has_content_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return has_prev_content_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50112,new cljs.core.Keyword(null,"prev-content","prev-content",165417916));
} else {
return G__50112;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = did_has_content_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(has_content_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50111,new cljs.core.Keyword(null,"prev-content","prev-content",165417916),prev_content);
} else {
return G__50111;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.update_name_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!((self__.name == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50110,new cljs.core.Keyword(null,"name","name",1843675177),self__.name);
} else {
return G__50110;
}
})();
return new_shape;
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),self__.save_undo_QMARK_,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),((new_shape_QMARK_)?self__.id:null)], null)),(function (){var modifiers = app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$core$IFn$_invoke$arity$2(shape,self__.content);
var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),((new_shape_QMARK_)?self__.id:null)], null);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape));
if(and__5023__auto__){
return self__.finalize_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modifiers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
} else {
return app.main.data.workspace.modifiers.set_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modifiers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}
})()),(cljs.core.truth_(self__.finalize_QMARK_)?beicon.v2.core.concat(((((cljs.core.not(has_content_QMARK_)) && ((!((self__.id == null))))))?beicon.v2.core.of(((has_prev_content_QMARK_)?app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),(function (shape__$1){
var new_shape = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"prev-content","prev-content",165417916).cljs$core$IFn$_invoke$arity$1(shape__$1));
return new_shape;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false], null)):null),app.main.data.workspace.selection.deselect_shape(self__.id),app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([self__.id]))):null),beicon.v2.core.of(app.main.data.workspace.transforms.finish_transform())):null));
} else {
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var modifiers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-text-modifier","workspace-text-modifier",1403277807),self__.id], null));
var new_shape_QMARK_ = (new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape) == null);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),(function (shape__$1){
var map__50113 = modifiers;
var map__50113__$1 = cljs.core.__destructure_map(map__50113);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var position_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113__$1,new cljs.core.Keyword(null,"position-data","position-data",-499622376));
var G__50114 = (function (){var G__50115 = (function (){var G__50116 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),self__.content);
if(cljs.core.truth_(position_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50116,new cljs.core.Keyword(null,"position-data","position-data",-499622376),position_data);
} else {
return G__50116;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.update_name_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!((self__.name == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50115,new cljs.core.Keyword(null,"name","name",1843675177),self__.name);
} else {
return G__50115;
}
})();
if((((!((width == null)))) || ((!((height == null)))))){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__50114,app.common.types.modifiers.change_size(shape__$1,width,height));
} else {
return G__50114;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),((new_shape_QMARK_)?self__.id:null)], null)));
}
}));
}

return (new app.main.data.workspace.texts.v2_update_text_shape_content_50107(id,content,p__50105,map__50106__$1,update_name_QMARK_,name,finalize_QMARK_,save_undo_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.texts.v2_update_text_shape_content.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.main.data.workspace.texts.v2_update_text_shape_content.cljs$lang$applyTo = (function (seq50102){
var G__50103 = cljs.core.first(seq50102);
var seq50102__$1 = cljs.core.next(seq50102);
var G__50104 = cljs.core.first(seq50102__$1);
var seq50102__$2 = cljs.core.next(seq50102__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50103,G__50104,seq50102__$2);
}));


//# sourceMappingURL=app.main.data.workspace.texts.js.map
