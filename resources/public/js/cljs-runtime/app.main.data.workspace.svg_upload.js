import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.files.shapes_builder.js";
import "./app.common.svg.js";
import "./app.common.types.shape_tree.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.repo.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.svg_upload');
app.main.data.workspace.svg_upload.extract_name = (function app$main$data$workspace$svg_upload$extract_name(href){
var query_idx = cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2(href,"?");
var href__$1 = (((query_idx > (0)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(href,(0),query_idx):href);
var filename = cljs.core.last(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(href__$1,"/"));
var ext_idx = cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2(filename,".");
if((ext_idx > (0))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename,(0),ext_idx);
} else {
return filename;
}
});
/**
 * Extract all bitmap images inside the svg data, and upload them, associated to the file.
 *   Return a map {<href> <image-data>}.
 */
app.main.data.workspace.svg_upload.upload_images = (function app$main$data$workspace$svg_upload$upload_images(svg_data,file_id){
return beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.mapcat((function (item){
return beicon.v2.core.map((function (p1__48333_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item),p1__48333_SHARP_],null));
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.of(null);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(item,new cljs.core.Keyword(null,"content","content",15833224)))?new cljs.core.Keyword(null,"upload-file-media-object","upload-file-media-object",-350555764):new cljs.core.Keyword(null,"create-file-media-object-from-url","create-file-media-object-from-url",660909681)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"href","href",-793805698)))));
}),beicon.v2.core.map((function (p__48334){
var map__48335 = p__48334;
var map__48335__$1 = cljs.core.__destructure_map(map__48335);
var item = map__48335__$1;
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48335__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var item__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id),new cljs.core.Keyword(null,"is-local","is-local",-258841872),true),new cljs.core.Keyword(null,"name","name",1843675177),"image");
if(cuerdas.core.starts_with_QMARK_(href,"data:")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item__$1,new cljs.core.Keyword(null,"content","content",15833224),app.util.webapi.data_uri__GT_blob(href));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item__$1,new cljs.core.Keyword(null,"name","name",1843675177),app.main.data.workspace.svg_upload.extract_name(href)),new cljs.core.Keyword(null,"url","url",276297046),href);
}
}),beicon.v2.core.from(app.common.svg.collect_images(svg_data)))));
});
app.main.data.workspace.svg_upload.add_svg_shapes = (function app$main$data$workspace$svg_upload$add_svg_shapes(var_args){
var G__48342 = arguments.length;
switch (G__48342) {
case 2:
return app.main.data.workspace.svg_upload.add_svg_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.main.data.workspace.svg_upload.add_svg_shapes.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.svg_upload.add_svg_shapes.cljs$core$IFn$_invoke$arity$2 = (function (svg_data,position){
return app.main.data.workspace.svg_upload.add_svg_shapes.cljs$core$IFn$_invoke$arity$4(null,svg_data,position,null);
}));

(app.main.data.workspace.svg_upload.add_svg_shapes.cljs$core$IFn$_invoke$arity$4 = (function (id,svg_data,position,p__48354){
var map__48355 = p__48354;
var map__48355__$1 = cljs.core.__destructure_map(map__48355);
var change_selection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48355__$1,new cljs.core.Keyword(null,"change-selection?","change-selection?",1166805125),true);
var ignore_selection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48355__$1,new cljs.core.Keyword(null,"ignore-selection?","ignore-selection?",1748318677),false);
if((typeof app.main.data.workspace.svg_upload.add_svg_shapes_48356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.svg_upload.add_svg_shapes_48356 = (function (id,svg_data,position,p__48354,map__48355,change_selection_QMARK_,ignore_selection_QMARK_,meta48357){
this.id = id;
this.svg_data = svg_data;
this.position = position;
this.p__48354 = p__48354;
this.map__48355 = map__48355;
this.change_selection_QMARK_ = change_selection_QMARK_;
this.ignore_selection_QMARK_ = ignore_selection_QMARK_;
this.meta48357 = meta48357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.svg_upload.add_svg_shapes_48356.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.svg_upload.add_svg_shapes_48356.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.svg-upload","add-svg-shapes","app.main.data.workspace.svg-upload/add-svg-shapes",-1959694469);
}));

(app.main.data.workspace.svg_upload.add_svg_shapes_48356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48358,meta48357__$1){
var self__ = this;
var _48358__$1 = this;
return (new app.main.data.workspace.svg_upload.add_svg_shapes_48356(self__.id,self__.svg_data,self__.position,self__.p__48354,self__.map__48355,self__.change_selection_QMARK_,self__.ignore_selection_QMARK_,meta48357__$1));
}));

(app.main.data.workspace.svg_upload.add_svg_shapes_48356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48358){
var self__ = this;
var _48358__$1 = this;
return self__.meta48357;
}));

(app.main.data.workspace.svg_upload.add_svg_shapes_48356.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.svg_upload.add_svg_shapes_48356.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
try{var id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.id,app.common.uuid.next());
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected = (cljs.core.truth_(self__.ignore_selection_QMARK_)?cljs.core.PersistentHashSet.EMPTY:app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var base = app.common.files.helpers.get_base_shape(objects,selected);
var selected_id = cljs.core.first(selected);
var selected_frame_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,selected_id),new cljs.core.Keyword(null,"type","type",1174270348)))));
var base_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(base);
var frame_id = ((((selected_frame_QMARK_) || (((cljs.core.empty_QMARK_(selected)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,base_id),new cljs.core.Keyword(null,"type","type",1174270348))))))))?app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$2(objects,self__.position):base_id);
var parent_id = ((((selected_frame_QMARK_) || (cljs.core.empty_QMARK_(selected))))?frame_id:base_id);
var vec__48361 = app.common.files.shapes_builder.create_svg_shapes.cljs$core$IFn$_invoke$arity$8(id__$1,self__.svg_data,self__.position,objects,frame_id,parent_id,selected,true);
var new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361,(0),null);
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361,(1),null);
var changes = app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),new_shape);
var changes__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,new_child){
return app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$2(changes__$1,new_child);
}),changes,new_children);
var changes__$2 = app.common.files.changes_builder.resize_parents(changes__$1,cljs.core.vec(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48340_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48340_SHARP_));
}),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes__$1))))));
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$2),(cljs.core.truth_(self__.change_selection_QMARK_)?app.main.data.workspace.selection.select_shapes(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape))):null),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape)], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}catch (e48360){var cause = e48360;
console.error(cause);

return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(cause),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"svg-parser","svg-parser",-257903184),new cljs.core.Keyword(null,"hint","hint",439639918),cljs.core.ex_message(cause)], null),null], 0)),null));
}}));
}

return (new app.main.data.workspace.svg_upload.add_svg_shapes_48356(id,svg_data,position,p__48354,map__48355__$1,change_selection_QMARK_,ignore_selection_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.svg_upload.add_svg_shapes.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=app.main.data.workspace.svg_upload.js.map
