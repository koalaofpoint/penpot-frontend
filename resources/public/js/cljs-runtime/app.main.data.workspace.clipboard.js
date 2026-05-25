import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.features.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.files.variant.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.grid_layout.js";
import "./app.common.logic.libraries.js";
import "./app.common.schema.js";
import "./app.common.transit.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.shape.text.js";
import "./app.common.types.text.js";
import "./app.common.types.typography.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.changes.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.notifications.js";
import "./app.main.data.workspace.media.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.errors.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.streams.js";
import "./app.util.clipboard.js";
import "./app.util.code_gen.markup_svg.js";
import "./app.util.code_gen.style_css.js";
import "./app.util.globals.js";
import "./app.util.http.js";
import "./app.util.i18n.js";
import "./app.util.text.content.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./promesa.core.js";
goog.provide('app.main.data.workspace.clipboard');
app.main.data.workspace.clipboard.copy_selected = (function app$main$data$workspace$clipboard$copy_selected(){
var sort_selected = (function app$main$data$workspace$clipboard$copy_selected_$_sort_selected(state,data){
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var objects__$1 = app.common.files.helpers.selected_subtree(objects,selected);
var selected__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.reverse(app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2(objects__$1,selected)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"selected","selected",574897764),selected__$1);
});
var maybe_translate = (function app$main$data$workspace$clipboard$copy_selected_$_maybe_translate(shape,objects,parent_frame_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_frame_id,app.common.uuid.zero)){
return shape;
} else {
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_frame_id);
return app.common.geom.shapes.translate_to_frame(shape,frame);
}
});
var advance_copies = (function app$main$data$workspace$clipboard$copy_selected_$_advance_copies(state,selected,data){
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(state);
var libraries = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(state);
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var heads = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__50129_SHARP_){
return app.common.types.container.get_child_heads(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(data),p1__50129_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected], 0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"objects","objects",2099713734),(function (p1__50130_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(advance_copy,file,libraries,page),p1__50130_SHARP_,heads);
}));
});
var fetch_image = (function app$main$data$workspace$clipboard$copy_selected_$_fetch_image(entry){
var url = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(entry);
return beicon.v2.core.map((function (p1__50125_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"data","data",-232669377),p1__50125_SHARP_);
}),beicon.v2.core.mapcat(app.util.webapi.read_file_as_data_url,beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),url,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233)], null)))));
});
var collect_variants = (function app$main$data$workspace$clipboard$copy_selected_$_collect_variants(state,shape){
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490)),components));
});
var collect_data = (function app$main$data$workspace$clipboard$copy_selected_$_collect_data(state,result,p__50160){
var map__50164 = p__50160;
var map__50164__$1 = cljs.core.__destructure_map(map__50164);
var item = map__50164__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50164__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var images = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50164__$1,new cljs.core.Keyword("app.main.data.workspace.clipboard","images","app.main.data.workspace.clipboard/images",1335143239));
var G__50167 = result;
var G__50167__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__50167,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.assoc,id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("app.main.data.workspace.clipboard","images","app.main.data.workspace.clipboard/images",1335143239)))
;
var G__50167__$2 = (((!((images == null))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50167__$1,new cljs.core.Keyword(null,"images","images",1757475080),cljs.core.into,images):G__50167__$1);
if(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(item))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50167__$2,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),cljs.core.merge,collect_variants(state,item));
} else {
return G__50167__$2;
}
});
var on_copy_error = (function app$main$data$workspace$clipboard$copy_selected_$_on_copy_error(error){
console.error("clipboard blocked:",error);

return beicon.v2.core.empty();
});
var prepare_object = (function app$main$data$workspace$clipboard$copy_selected_$_prepare_object(objects,parent_frame_id,obj){
var obj__$1 = maybe_translate(obj,objects,parent_frame_id);
var imgdata = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(obj__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1], null);
}
})()], 0))),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(obj__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((app.common.files.helpers.image_shape_QMARK_(obj__$1))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(obj__$1)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(obj__$1))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(obj__$1)], null):null)], 0));
if(cljs.core.seq(imgdata)){
return beicon.v2.core.map((function (images){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(obj__$1,new cljs.core.Keyword("app.main.data.workspace.clipboard","images","app.main.data.workspace.clipboard/images",1335143239),images);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.mapcat(fetch_image,beicon.v2.core.from(imgdata))));
} else {
return beicon.v2.core.of(obj__$1);
}
});
var advance_shape = (function app$main$data$workspace$clipboard$copy_selected_$_advance_shape(file,libraries,page,level_delta,objects,shape){
var new_shape_ref = app.common.types.file.advance_shape_ref.cljs$core$IFn$_invoke$arity$variadic(file,page,libraries,shape,level_delta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0));
var container = app.common.types.container.make_container(page,new cljs.core.Keyword(null,"page","page",849072397));
var new_touched = app.common.types.file.get_touched_from_ref_chain_until_target_ref(container,libraries,shape,new_shape_ref);
var G__50183 = objects;
if((((!((new_shape_ref == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_shape_ref,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape))))){
return cljs.core.assoc_in(cljs.core.assoc_in(G__50183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329)], null),new_shape_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"touched","touched",-609134419)], null),new_touched);
} else {
return G__50183;
}
});
var advance_copy = (function app$main$data$workspace$clipboard$copy_selected_$_advance_copy(file,libraries,page,objects,shape){
if(((app.common.types.component.instance_head_QMARK_(shape)) && ((!(app.common.types.component.main_instance_QMARK_(shape)))))){
var level_delta = app.common.types.container.get_nesting_level_delta(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),shape,app.common.uuid.zero);
if((level_delta > (0))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(advance_shape,file,libraries,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([level_delta], 0)),objects,app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return objects;
}
} else {
return objects;
}
});
if((typeof app.main.data.workspace.clipboard.copy_selected_50201 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.copy_selected_50201 = (function (sort_selected,maybe_translate,advance_copies,fetch_image,collect_variants,collect_data,on_copy_error,prepare_object,advance_shape,advance_copy,meta50202){
this.sort_selected = sort_selected;
this.maybe_translate = maybe_translate;
this.advance_copies = advance_copies;
this.fetch_image = fetch_image;
this.collect_variants = collect_variants;
this.collect_data = collect_data;
this.on_copy_error = on_copy_error;
this.prepare_object = prepare_object;
this.advance_shape = advance_shape;
this.advance_copy = advance_copy;
this.meta50202 = meta50202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.copy_selected_50201.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_50201.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","copy-selected","app.main.data.workspace.clipboard/copy-selected",-355255732);
}));

(app.main.data.workspace.clipboard.copy_selected_50201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50203,meta50202__$1){
var self__ = this;
var _50203__$1 = this;
return (new app.main.data.workspace.clipboard.copy_selected_50201(self__.sort_selected,self__.maybe_translate,self__.advance_copies,self__.fetch_image,self__.collect_variants,self__.collect_data,self__.on_copy_error,self__.prepare_object,self__.advance_shape,self__.advance_copy,meta50202__$1));
}));

(app.main.data.workspace.clipboard.copy_selected_50201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50203){
var self__ = this;
var _50203__$1 = this;
return self__.meta50202;
}));

(app.main.data.workspace.clipboard.copy_selected_50201.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_50201.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var text = app.util.webapi.get_current_selected_text();
if((!(cuerdas.core.empty_QMARK_(text)))){
try{return app.util.clipboard.to_clipboard(text);
}catch (e50207){var e = e50207;
return (self__.on_copy_error.cljs$core$IFn$_invoke$arity$1 ? self__.on_copy_error.cljs$core$IFn$_invoke$arity$1(e) : self__.on_copy_error.call(null,e));
}} else {
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = app.common.files.helpers.clean_loops(objects,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var features__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336)),app.common.features.frontend_only_features);
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var frame_id = app.common.files.helpers.common_parent_frame(objects,selected);
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(state,file_id);
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"version","version",425292698));
var initial = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"copied-shapes","copied-shapes",-573831497),new cljs.core.Keyword(null,"features","features",-1146962336),features__$1,new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"images","images",1757475080),cljs.core.PersistentHashSet.EMPTY], null);
var shapes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.files.helpers.selected_with_children(objects,selected));
if((!(((app.util.globals.global["ClipboardItem"]) == null)))){
var resolve_data_promise = promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.map((function (p1__50135_SHARP_){
return app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2(p1__50135_SHARP_,"text/plain");
}),beicon.v2.core.map((function (p1__50134_SHARP_){
return app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2(p1__50134_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531)], null));
}),beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(self__.advance_copies,state,selected),beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.sort_selected,state),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.collect_data,state),initial,beicon.v2.core.merge_map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(self__.prepare_object,objects,frame_id),beicon.v2.core.from(shapes))))))));
}));
return beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(self__.on_copy_error,beicon.v2.core.from(app.util.clipboard.to_clipboard_promise("text/plain",resolve_data_promise))));
} else {
return beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(self__.on_copy_error,beicon.v2.core.map(app.util.clipboard.to_clipboard,beicon.v2.core.map((function (p1__50136_SHARP_){
return app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2(p1__50136_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531)], null));
}),beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(self__.advance_copies,state,selected),beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.sort_selected,state),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.collect_data,state),initial,beicon.v2.core.merge_map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(self__.prepare_object,objects,frame_id),beicon.v2.core.from(shapes)))))))));
}
}
}));
}

return (new app.main.data.workspace.clipboard.copy_selected_50201(sort_selected,maybe_translate,advance_copies,fetch_image,collect_variants,collect_data,on_copy_error,prepare_object,advance_shape,advance_copy,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.default_options = ({"decodeTransit": app.common.transit.decode_str, "allowHTMLPaste": app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2-html-paste")});
app.main.data.workspace.clipboard.create_paste_from_blob = (function app$main$data$workspace$clipboard$create_paste_from_blob(in_viewport_QMARK_){
return (function (blob){
var type = blob.type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"image/svg+xml")){
return beicon.v2.core.map(app.main.data.workspace.clipboard.paste_svg_text,beicon.v2.core.from(blob.text()));
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__50208_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,p1__50208_SHARP_);
}),app.util.clipboard.image_types))){
return beicon.v2.core.of((app.main.data.workspace.clipboard.paste_image.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.clipboard.paste_image.cljs$core$IFn$_invoke$arity$1(blob) : app.main.data.workspace.clipboard.paste_image.call(null,blob)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"text/html")){
return beicon.v2.core.map(app.main.data.workspace.clipboard.paste_html_text,beicon.v2.core.from(blob.text()));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"application/transit+json")){
return beicon.v2.core.mapcat((function (pdata){
var G__50210 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(pdata);
var G__50210__$1 = (((G__50210 instanceof cljs.core.Keyword))?G__50210.fqn:null);
switch (G__50210__$1) {
case "copied-props":
return beicon.v2.core.of((app.main.data.workspace.clipboard.paste_transit_props.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.clipboard.paste_transit_props.cljs$core$IFn$_invoke$arity$1(pdata) : app.main.data.workspace.clipboard.paste_transit_props.call(null,pdata)));

break;
case "copied-shapes":
return beicon.v2.core.of((app.main.data.workspace.clipboard.paste_transit_shapes.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.clipboard.paste_transit_shapes.cljs$core$IFn$_invoke$arity$1(pdata) : app.main.data.workspace.clipboard.paste_transit_shapes.call(null,pdata)));

break;
default:
return beicon.v2.core.empty();

}
}),beicon.v2.core.map((function (pdata){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pdata,new cljs.core.Keyword(null,"in-viewport","in-viewport",-45347096),in_viewport_QMARK_);
}),beicon.v2.core.filter(cljs.core.map_QMARK_,beicon.v2.core.map(app.common.transit.decode_str,beicon.v2.core.from(blob.text())))));
} else {
return beicon.v2.core.map(app.main.data.workspace.clipboard.paste_text,beicon.v2.core.from(blob.text()));

}
}
}
}
});
});
app.main.data.workspace.clipboard.default_paste_from_blob = app.main.data.workspace.clipboard.create_paste_from_blob(false);
/**
 * Check if the given error is a clipboard permission error
 *   (NotAllowedError DOMException).
 */
app.main.data.workspace.clipboard.clipboard_permission_error_QMARK_ = (function app$main$data$workspace$clipboard$clipboard_permission_error_QMARK_(cause){
return (((cause instanceof DOMException)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause.name,"NotAllowedError")));
});
app.main.data.workspace.clipboard.on_clipboard_permission_error = (function app$main$data$workspace$clipboard$on_clipboard_permission_error(cause){
if(app.main.data.workspace.clipboard.clipboard_permission_error_QMARK_(cause)){
return beicon.v2.core.of(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.clipboard-permission-denied"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000)], null)));
} else {
return beicon.v2.core.throw$(cause);
}
});
/**
 * Perform a `paste` operation using the Clipboard API.
 */
app.main.data.workspace.clipboard.paste_from_clipboard = (function app$main$data$workspace$clipboard$paste_from_clipboard(){
if((typeof app.main.data.workspace.clipboard.paste_from_clipboard_50216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_from_clipboard_50216 = (function (meta50217){
this.meta50217 = meta50217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_from_clipboard_50216.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_from_clipboard_50216.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-from-clipboard","app.main.data.workspace.clipboard/paste-from-clipboard",-754724549);
}));

(app.main.data.workspace.clipboard.paste_from_clipboard_50216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50218,meta50217__$1){
var self__ = this;
var _50218__$1 = this;
return (new app.main.data.workspace.clipboard.paste_from_clipboard_50216(meta50217__$1));
}));

(app.main.data.workspace.clipboard.paste_from_clipboard_50216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50218){
var self__ = this;
var _50218__$1 = this;
return self__.meta50217;
}));

(app.main.data.workspace.clipboard.paste_from_clipboard_50216.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_from_clipboard_50216.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.clipboard.on_clipboard_permission_error,beicon.v2.core.take((1),beicon.v2.core.mapcat(app.main.data.workspace.clipboard.default_paste_from_blob,app.util.clipboard.from_navigator.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.clipboard.default_options))));
}));
}

return (new app.main.data.workspace.clipboard.paste_from_clipboard_50216(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Perform a `paste` operation from user emmited event.
 */
app.main.data.workspace.clipboard.paste_from_event = (function app$main$data$workspace$clipboard$paste_from_event(event,in_viewport_QMARK_){
if((typeof app.main.data.workspace.clipboard.paste_from_event_50219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_from_event_50219 = (function (event,in_viewport_QMARK_,meta50220){
this.event = event;
this.in_viewport_QMARK_ = in_viewport_QMARK_;
this.meta50220 = meta50220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_from_event_50219.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_from_event_50219.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-from-event","app.main.data.workspace.clipboard/paste-from-event",1440439287);
}));

(app.main.data.workspace.clipboard.paste_from_event_50219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50221,meta50220__$1){
var self__ = this;
var _50221__$1 = this;
return (new app.main.data.workspace.clipboard.paste_from_event_50219(self__.event,self__.in_viewport_QMARK_,meta50220__$1));
}));

(app.main.data.workspace.clipboard.paste_from_event_50219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50221){
var self__ = this;
var _50221__$1 = this;
return self__.meta50220;
}));

(app.main.data.workspace.clipboard.paste_from_event_50219.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_from_event_50219.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var edit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var is_editing_QMARK_ = (function (){var and__5023__auto__ = edit_id;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edit_id,new cljs.core.Keyword(null,"type","type",1174270348)], null)));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(is_editing_QMARK_)){
return beicon.v2.core.empty();
} else {
return beicon.v2.core.mapcat(app.main.data.workspace.clipboard.create_paste_from_blob(self__.in_viewport_QMARK_),app.util.clipboard.from_synthetic_clipboard_event(self__.event,app.main.data.workspace.clipboard.default_options));
}
}));
}

return (new app.main.data.workspace.clipboard.paste_from_event_50219(event,in_viewport_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.copy_selected_svg = (function app$main$data$workspace$clipboard$copy_selected_svg(){
if((typeof app.main.data.workspace.clipboard.copy_selected_svg_50223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.copy_selected_svg_50223 = (function (meta50224){
this.meta50224 = meta50224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.copy_selected_svg_50223.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_svg_50223.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","copy-selected-svg","app.main.data.workspace.clipboard/copy-selected-svg",1829114841);
}));

(app.main.data.workspace.clipboard.copy_selected_svg_50223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50225,meta50224__$1){
var self__ = this;
var _50225__$1 = this;
return (new app.main.data.workspace.clipboard.copy_selected_svg_50223(meta50224__$1));
}));

(app.main.data.workspace.clipboard.copy_selected_svg_50223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50225){
var self__ = this;
var _50225__$1 = this;
return self__.meta50224;
}));

(app.main.data.workspace.clipboard.copy_selected_svg_50223.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_svg_50223.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2(objects,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state)));
var parent_frame_id = app.common.files.helpers.common_parent_frame(objects,selected);
var maybe_translate = (function (p1__50222_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_frame_id,app.common.uuid.zero)){
return p1__50222_SHARP_;
} else {
return app.common.geom.shapes.translate_to_frame(p1__50222_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_frame_id));
}
});
var shapes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(maybe_translate,selected);
var svg_formatted = app.util.code_gen.markup_svg.generate_formatted_markup(objects,shapes);
return app.util.clipboard.to_clipboard(svg_formatted);
}));
}

return (new app.main.data.workspace.clipboard.copy_selected_svg_50223(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.copy_selected_css = (function app$main$data$workspace$clipboard$copy_selected_css(){
if((typeof app.main.data.workspace.clipboard.copy_selected_css_50228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.copy_selected_css_50228 = (function (meta50229){
this.meta50229 = meta50229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.copy_selected_css_50228.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_css_50228.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","copy-selected-css","app.main.data.workspace.clipboard/copy-selected-css",1504637036);
}));

(app.main.data.workspace.clipboard.copy_selected_css_50228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50230,meta50229__$1){
var self__ = this;
var _50230__$1 = this;
return (new app.main.data.workspace.clipboard.copy_selected_css_50228(meta50229__$1));
}));

(app.main.data.workspace.clipboard.copy_selected_css_50228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50230){
var self__ = this;
var _50230__$1 = this;
return self__.meta50229;
}));

(app.main.data.workspace.clipboard.copy_selected_css_50228.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_css_50228.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var css = app.util.code_gen.style_css.generate_style.cljs$core$IFn$_invoke$arity$4(objects,selected,selected,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-prelude?","with-prelude?",-1449344035),false], null));
return app.util.clipboard.to_clipboard(css);
}));
}

return (new app.main.data.workspace.clipboard.copy_selected_css_50228(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.copy_selected_css_nested = (function app$main$data$workspace$clipboard$copy_selected_css_nested(){
if((typeof app.main.data.workspace.clipboard.copy_selected_css_nested_50236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.copy_selected_css_nested_50236 = (function (meta50237){
this.meta50237 = meta50237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.copy_selected_css_nested_50236.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_css_nested_50236.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","copy-selected-css-nested","app.main.data.workspace.clipboard/copy-selected-css-nested",-783228551);
}));

(app.main.data.workspace.clipboard.copy_selected_css_nested_50236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50238,meta50237__$1){
var self__ = this;
var _50238__$1 = this;
return (new app.main.data.workspace.clipboard.copy_selected_css_nested_50236(meta50237__$1));
}));

(app.main.data.workspace.clipboard.copy_selected_css_nested_50236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50238){
var self__ = this;
var _50238__$1 = this;
return self__.meta50237;
}));

(app.main.data.workspace.clipboard.copy_selected_css_nested_50236.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_css_nested_50236.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.files.helpers.selected_with_children(objects,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state)));
var css = app.util.code_gen.style_css.generate_style.cljs$core$IFn$_invoke$arity$4(objects,selected,selected,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-prelude?","with-prelude?",-1449344035),false], null));
return app.util.clipboard.to_clipboard(css);
}));
}

return (new app.main.data.workspace.clipboard.copy_selected_css_nested_50236(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.copy_selected_text = (function app$main$data$workspace$clipboard$copy_selected_text(){
if((typeof app.main.data.workspace.clipboard.copy_selected_text_50247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.copy_selected_text_50247 = (function (meta50248){
this.meta50248 = meta50248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.copy_selected_text_50247.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_text_50247.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","copy-selected-text","app.main.data.workspace.clipboard/copy-selected-text",259733889);
}));

(app.main.data.workspace.clipboard.copy_selected_text_50247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50249,meta50248__$1){
var self__ = this;
var _50249__$1 = this;
return (new app.main.data.workspace.clipboard.copy_selected_text_50247(meta50248__$1));
}));

(app.main.data.workspace.clipboard.copy_selected_text_50247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50249){
var self__ = this;
var _50249__$1 = this;
return self__.meta50248;
}));

(app.main.data.workspace.clipboard.copy_selected_text_50247.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_text_50247.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var text_shapes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.text_shape_QMARK_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.files.helpers.selected_with_children(objects,selected)));
var selected__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),text_shapes);
var objects__$1 = app.common.files.helpers.selected_subtree(objects,selected__$1);
var selected__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2(objects__$1,selected__$1));
var text = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,id);
return app.common.types.text.content__GT_text(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape));
}),selected__$2));
return app.util.clipboard.to_clipboard(text);
}));
}

return (new app.main.data.workspace.clipboard.copy_selected_text_50247(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.copy_selected_props = (function app$main$data$workspace$clipboard$copy_selected_props(){
if((typeof app.main.data.workspace.clipboard.copy_selected_props_50261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.copy_selected_props_50261 = (function (meta50262){
this.meta50262 = meta50262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.copy_selected_props_50261.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_props_50261.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","copy-selected-props","app.main.data.workspace.clipboard/copy-selected-props",-1744426900);
}));

(app.main.data.workspace.clipboard.copy_selected_props_50261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50263,meta50262__$1){
var self__ = this;
var _50263__$1 = this;
return (new app.main.data.workspace.clipboard.copy_selected_props_50261(meta50262__$1));
}));

(app.main.data.workspace.clipboard.copy_selected_props_50261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50263){
var self__ = this;
var _50263__$1 = this;
return self__.meta50262;
}));

(app.main.data.workspace.clipboard.copy_selected_props_50261.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_selected_props_50261.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var fetch_image = (function app$main$data$workspace$clipboard$copy_selected_props_$_fetch_image(entry){
var url = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(entry);
return beicon.v2.core.map((function (p1__50256_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"data","data",-232669377),p1__50256_SHARP_);
}),beicon.v2.core.mapcat(app.util.webapi.read_file_as_data_url,beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),url,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233)], null)))));
});
var resolve_images = (function app$main$data$workspace$clipboard$copy_selected_props_$_resolve_images(data){
var images = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(data))),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(data))));
if(cljs.core.seq(images)){
return beicon.v2.core.map((function (p1__50257_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"images","images",1757475080),p1__50257_SHARP_);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,beicon.v2.core.mapcat(fetch_image,beicon.v2.core.from(images))));
} else {
return beicon.v2.core.of(data);
}
});
var on_copy_error = (function app$main$data$workspace$clipboard$copy_selected_props_$_on_copy_error(error){
console.error("clipboard blocked:",error);

return beicon.v2.core.empty();
});
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
if((cljs.core.count(selected) > (1))){
return beicon.v2.core.empty();
} else {
var selected__$1 = cljs.core.first(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,selected__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var shape = temp__5825__auto__;
var props = app.common.types.shape.extract_props(shape);
var features__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336)),app.common.features.frontend_only_features);
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"version","version",425292698));
var copy_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"copied-props","copied-props",377336865),new cljs.core.Keyword(null,"features","features",-1146962336),features__$1,new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"images","images",1757475080),cljs.core.PersistentHashSet.EMPTY], null);
if((!(((app.util.globals.global["ClipboardItem"]) == null)))){
var resolve_data_promise = promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,reject){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.map((function (p1__50259_SHARP_){
return app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2(p1__50259_SHARP_,"text/plain");
}),beicon.v2.core.map((function (p1__50258_SHARP_){
return app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2(p1__50258_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531)], null));
}),beicon.v2.core.mapcat(resolve_images,beicon.v2.core.of(copy_data)))));
}));
return beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_copy_error,beicon.v2.core.from(app.util.clipboard.to_clipboard_promise("text/plain",resolve_data_promise))));
} else {
return beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_copy_error,beicon.v2.core.map((function (p1__50260_SHARP_){
return app.util.clipboard.to_clipboard(app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2(p1__50260_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531)], null)));
}),beicon.v2.core.mapcat(resolve_images,beicon.v2.core.of(copy_data)))));
}
} else {
return null;
}
}
}));
}

return (new app.main.data.workspace.clipboard.copy_selected_props_50261(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.paste_selected_props = (function app$main$data$workspace$clipboard$paste_selected_props(){
if((typeof app.main.data.workspace.clipboard.paste_selected_props_50271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_selected_props_50271 = (function (meta50272){
this.meta50272 = meta50272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_selected_props_50271.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_selected_props_50271.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-selected-props","app.main.data.workspace.clipboard/paste-selected-props",417256302);
}));

(app.main.data.workspace.clipboard.paste_selected_props_50271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50273,meta50272__$1){
var self__ = this;
var _50273__$1 = this;
return (new app.main.data.workspace.clipboard.paste_selected_props_50271(meta50272__$1));
}));

(app.main.data.workspace.clipboard.paste_selected_props_50271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50273){
var self__ = this;
var _50273__$1 = this;
return self__.meta50272;
}));

(app.main.data.workspace.clipboard.paste_selected_props_50271.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_selected_props_50271.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"read-only?","read-only?",-770285386).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178).cljs$core$IFn$_invoke$arity$1(state)))){
return null;
} else {
var decode_entry = (function app$main$data$workspace$clipboard$paste_selected_props_$_decode_entry(entry){
var G__50276 = app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(entry);
return (app.main.data.workspace.clipboard.paste_transit_props.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.clipboard.paste_transit_props.cljs$core$IFn$_invoke$arity$1(G__50276) : app.main.data.workspace.clipboard.paste_transit_props.call(null,G__50276));
});
var on_error = (function app$main$data$workspace$clipboard$paste_selected_props_$_on_error(cause){
if(app.main.data.workspace.clipboard.clipboard_permission_error_QMARK_(cause)){
return beicon.v2.core.of(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.clipboard-permission-denied"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000)], null)));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"not-implemented","not-implemented",1918806714).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(cause)))){
return beicon.v2.core.of(app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.clipboard-not-implemented")));
} else {
console.error("Clipboard error:",cause);

return beicon.v2.core.empty();

}
}
});
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.take((1),beicon.v2.core.map(decode_entry,beicon.v2.core.mapcat((function (p1__50270_SHARP_){
return p1__50270_SHARP_.text();
}),app.util.clipboard.from_navigator.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.clipboard.default_options)))));
}
}));
}

return (new app.main.data.workspace.clipboard.paste_selected_props_50271(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.selected_frame_QMARK_ = (function app$main$data$workspace$clipboard$selected_frame_QMARK_(state){
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(selected),new cljs.core.Keyword(null,"type","type",1174270348)], null)))));
});
app.main.data.workspace.clipboard.get_tree_root_shapes = (function app$main$data$workspace$clipboard$get_tree_root_shapes(tree){
var shapes_in_tree = cljs.core.vals(tree);
var shape_ids = cljs.core.keys(tree);
var parent_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50278_SHARP_){
return new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__50278_SHARP_);
}),shapes_in_tree));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50279_SHARP_){
return cljs.core.contains_QMARK_(parent_ids,p1__50279_SHARP_);
}),shape_ids);
});
app.main.data.workspace.clipboard.any_same_frame_from_selected_QMARK_ = (function app$main$data$workspace$clipboard$any_same_frame_from_selected_QMARK_(state,frame_ids){
var selected = cljs.core.first(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
return ((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50280_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50280_SHARP_,selected);
}),frame_ids)));
});
app.main.data.workspace.clipboard.frame_same_size_QMARK_ = (function app$main$data$workspace$clipboard$frame_same_size_QMARK_(paste_obj,frame_obj){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"heigth","heigth",914329217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vals(paste_obj)))),new cljs.core.Keyword(null,"heigth","heigth",914329217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(frame_obj)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.vals(paste_obj)))),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(frame_obj)))));
});
app.main.data.workspace.clipboard.schema_COLON_paste_data_shapes = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"paste-data-shapes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"copied-shapes","copied-shapes",-573831497)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword("app.common.schema","set-of-strings","app.common.schema/set-of-strings",1794281466)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("app.common.schema","set-of-uuid","app.common.schema/set-of-uuid",-313818768)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"images","images",1757475080),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null)], null);
app.main.data.workspace.clipboard.schema_COLON_paste_data_props = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"paste-data-props"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"copied-props","copied-props",377336865)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword("app.common.schema","set-of-strings","app.common.schema/set-of-strings",1794281466)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null);
app.main.data.workspace.clipboard.schema_COLON_paste_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"paste-data",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copied-shapes","copied-shapes",-573831497),app.main.data.workspace.clipboard.schema_COLON_paste_data_shapes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copied-props","copied-props",377336865),app.main.data.workspace.clipboard.schema_COLON_paste_data_props], null)], null);
app.main.data.workspace.clipboard.paste_data_valid_QMARK_ = app.common.schema.lazy_validator(app.main.data.workspace.clipboard.schema_COLON_paste_data);
app.main.data.workspace.clipboard.paste_transit_shapes = (function app$main$data$workspace$clipboard$paste_transit_shapes(p__50286){
var map__50287 = p__50286;
var map__50287__$1 = cljs.core.__destructure_map(map__50287);
var pdata = map__50287__$1;
var images = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50287__$1,new cljs.core.Keyword(null,"images","images",1757475080));
var upload_media = (function app$main$data$workspace$clipboard$paste_transit_shapes_$_upload_media(file_id,imgpart){
return beicon.v2.core.map((function (p1__50284_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50284_SHARP_,new cljs.core.Keyword(null,"prev-id","prev-id",1028193202),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(imgpart));
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.repo.cmd_BANG_,new cljs.core.Keyword(null,"upload-file-media-object","upload-file-media-object",-350555764)),beicon.v2.core.map((function (blob){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(imgpart),new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"content","content",15833224),blob,new cljs.core.Keyword(null,"is-local","is-local",-258841872),true], null);
}),beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(imgpart),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null))))));
});
if((typeof app.main.data.workspace.clipboard.paste_transit_shapes_50288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_transit_shapes_50288 = (function (p__50286,map__50287,pdata,images,upload_media,meta50289){
this.p__50286 = p__50286;
this.map__50287 = map__50287;
this.pdata = pdata;
this.images = images;
this.upload_media = upload_media;
this.meta50289 = meta50289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_transit_shapes_50288.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_transit_shapes_50288.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-transit-shapes","app.main.data.workspace.clipboard/paste-transit-shapes",-1375295342);
}));

(app.main.data.workspace.clipboard.paste_transit_shapes_50288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50290,meta50289__$1){
var self__ = this;
var _50290__$1 = this;
return (new app.main.data.workspace.clipboard.paste_transit_shapes_50288(self__.p__50286,self__.map__50287,self__.pdata,self__.images,self__.upload_media,meta50289__$1));
}));

(app.main.data.workspace.clipboard.paste_transit_shapes_50288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50290){
var self__ = this;
var _50290__$1 = this;
return self__.meta50289;
}));

(app.main.data.workspace.clipboard.paste_transit_shapes_50288.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_transit_shapes_50288.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336));
if(cljs.core.truth_(app.main.data.workspace.clipboard.paste_data_valid_QMARK_(self__.pdata))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("validation",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invalid-paste-data","invalid-paste-data",1058482108),new cljs.core.Keyword(null,"hibt","hibt",-864980972),"invalid paste data found"], null),null], 0)),null);
}

app.common.features.check_paste_features_BANG_(features__$1,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(self__.pdata));

var G__50291 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.pdata);
var G__50291__$1 = (((G__50291 instanceof cljs.core.Keyword))?G__50291.fqn:null);
switch (G__50291__$1) {
case "copied-shapes":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(self__.pdata))){
var pdata__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.pdata,new cljs.core.Keyword(null,"images","images",1757475080),cljs.core.PersistentVector.EMPTY);
return beicon.v2.core.of((app.main.data.workspace.clipboard.paste_shapes.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.clipboard.paste_shapes.cljs$core$IFn$_invoke$arity$1(pdata__$1) : app.main.data.workspace.clipboard.paste_shapes.call(null,pdata__$1)));
} else {
return beicon.v2.core.map(app.main.data.workspace.clipboard.paste_shapes,beicon.v2.core.map((function (p1__50285_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.pdata,new cljs.core.Keyword(null,"images","images",1757475080),p1__50285_SHARP_);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.merge_map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.upload_media,file_id),beicon.v2.core.from(self__.images)))));
}

break;
default:
return null;

}
}));
}

return (new app.main.data.workspace.clipboard.paste_transit_shapes_50288(p__50286,map__50287__$1,pdata,images,upload_media,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.paste_transit_props = (function app$main$data$workspace$clipboard$paste_transit_props(pdata){
var upload_media = (function app$main$data$workspace$clipboard$paste_transit_props_$_upload_media(file_id,imgpart){
return beicon.v2.core.map((function (p1__50293_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(imgpart),p1__50293_SHARP_],null));
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.repo.cmd_BANG_,new cljs.core.Keyword(null,"upload-file-media-object","upload-file-media-object",-350555764)),beicon.v2.core.map((function (blob){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(imgpart),new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"content","content",15833224),blob,new cljs.core.Keyword(null,"is-local","is-local",-258841872),true], null);
}),beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(imgpart),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null))))));
});
var update_image_data = (function app$main$data$workspace$clipboard$paste_transit_props_$_update_image_data(pdata__$1,media_map){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(pdata__$1,new cljs.core.Keyword(null,"props","props",453281727),(function (props){
return app.common.data.update_when(app.common.data.update_when(props,new cljs.core.Keyword(null,"fills","fills",902966780),(function (fills){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (fill){
var G__50301 = fill;
if((!((new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(fill) == null)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__50301,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(function (p1__50294_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(media_map,p1__50294_SHARP_,p1__50294_SHARP_);
}));
} else {
return G__50301;
}
}),fills);
})),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(function (strokes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (stroke){
var G__50302 = stroke;
if((!((new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(stroke) == null)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__50302,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(function (p1__50295_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(media_map,p1__50295_SHARP_,p1__50295_SHARP_);
}));
} else {
return G__50302;
}
}),strokes);
}));
}));
});
var upload_images = (function app$main$data$workspace$clipboard$paste_transit_props_$_upload_images(file_id,pdata__$1){
return beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(update_image_data,pdata__$1),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.merge_map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(upload_media,file_id),beicon.v2.core.from(new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(pdata__$1)))));
});
if((typeof app.main.data.workspace.clipboard.paste_transit_props_50303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_transit_props_50303 = (function (pdata,upload_media,update_image_data,upload_images,meta50304){
this.pdata = pdata;
this.upload_media = upload_media;
this.update_image_data = update_image_data;
this.upload_images = upload_images;
this.meta50304 = meta50304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_transit_props_50303.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_transit_props_50303.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-transit-props","app.main.data.workspace.clipboard/paste-transit-props",-1093057052);
}));

(app.main.data.workspace.clipboard.paste_transit_props_50303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50305,meta50304__$1){
var self__ = this;
var _50305__$1 = this;
return (new app.main.data.workspace.clipboard.paste_transit_props_50303(self__.pdata,self__.upload_media,self__.update_image_data,self__.upload_images,meta50304__$1));
}));

(app.main.data.workspace.clipboard.paste_transit_props_50303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50305){
var self__ = this;
var _50305__$1 = this;
return self__.meta50304;
}));

(app.main.data.workspace.clipboard.paste_transit_props_50303.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_transit_props_50303.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336));
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(app.main.data.workspace.clipboard.paste_data_valid_QMARK_(self__.pdata))){
app.common.features.check_paste_features_BANG_(features__$1,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(self__.pdata));

var G__50306 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.pdata);
var G__50306__$1 = (((G__50306 instanceof cljs.core.Keyword))?G__50306.fqn:null);
switch (G__50306__$1) {
case "copied-props":
return beicon.v2.core.concat(beicon.v2.core.map((function (){
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(selected,(function (shape,objects){
return app.common.types.shape.patch_props(shape,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(self__.pdata),objects);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null));
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.upload_images,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state)),beicon.v2.core.of(self__.pdata))),beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),selected], null))));

break;
default:
return beicon.v2.core.empty();

}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.clipboard.paste_transit_props_50303(pdata,upload_media,update_image_data,upload_images,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.paste_shapes = (function app$main$data$workspace$clipboard$paste_shapes(p__50337){
var map__50338 = p__50337;
var map__50338__$1 = cljs.core.__destructure_map(map__50338);
var pdata = map__50338__$1;
var in_viewport_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50338__$1,new cljs.core.Keyword(null,"in-viewport","in-viewport",-45347096));
var translate_media = (function app$main$data$workspace$clipboard$paste_shapes_$_translate_media(mdata,media_idx,attr){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mdata,attr));
var mobj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(media_idx,id);
if(cljs.core.truth_(mobj)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(mdata,attr,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mobj));
} else {
return mdata;
}
});
var add_obj_QMARK_ = (function app$main$data$workspace$clipboard$paste_shapes_$_add_obj_QMARK_(chg){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(chg),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983));
});
var process_rchange_shape = (function app$main$data$workspace$clipboard$paste_shapes_$_process_rchange_shape(obj,media_idx){
var translate_fill_image = (function (p1__50308_SHARP_){
return translate_media(p1__50308_SHARP_,media_idx,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848));
});
var translate_stroke_image = (function (p1__50309_SHARP_){
return translate_media(p1__50309_SHARP_,media_idx,new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214));
});
var translate_fills = (function (p1__50310_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translate_fill_image,p1__50310_SHARP_);
});
var translate_strokes = (function (p1__50311_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(translate_stroke_image,p1__50311_SHARP_);
});
var process_text_node = (function (p1__50312_SHARP_){
return app.common.data.update_when(p1__50312_SHARP_,new cljs.core.Keyword(null,"fills","fills",902966780),translate_fills);
});
return app.common.data.update_when(app.common.data.update_when(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(obj,new cljs.core.Keyword(null,"fills","fills",902966780),translate_fills),new cljs.core.Keyword(null,"strokes","strokes",-1645650952),translate_strokes),new cljs.core.Keyword(null,"content","content",15833224),(function (p1__50313_SHARP_){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$2(process_text_node,p1__50313_SHARP_);
})),new cljs.core.Keyword(null,"position-data","position-data",-499622376),(function (p1__50314_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(process_text_node,p1__50314_SHARP_);
}));
});
var process_rchange = (function app$main$data$workspace$clipboard$paste_shapes_$_process_rchange(media_idx,change){
if(cljs.core.truth_(add_obj_QMARK_(change))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(change,new cljs.core.Keyword(null,"obj","obj",981763962),process_rchange_shape,media_idx);
} else {
return change;
}
});
var calculate_paste_position = (function app$main$data$workspace$clipboard$paste_shapes_$_calculate_paste_position(state,pobjects,selected,position){
var page_objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected_objs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(pobjects),selected);
var first_selected_obj = cljs.core.first(selected_objs);
var page_selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var wrapper = app.common.geom.shapes.shapes__GT_rect(selected_objs);
var orig_pos = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(wrapper),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(wrapper));
var frame_id = cljs.core.first(page_selected);
var frame_object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_objects,frame_id);
var base = app.common.files.helpers.get_base_shape(page_objects,page_selected);
var index = app.common.files.helpers.get_position_on_parent(page_objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base));
var tree_root = app.main.data.workspace.clipboard.get_tree_root_shapes(pobjects);
var only_one_root_shape_QMARK_ = ((((1) < cljs.core.count(pobjects))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(tree_root))));
if(((app.main.data.workspace.clipboard.selected_frame_QMARK_(state)) && (((app.main.data.workspace.clipboard.any_same_frame_from_selected_QMARK_(state,cljs.core.keys(pobjects))) || (((only_one_root_shape_QMARK_) && (app.main.data.workspace.clipboard.frame_same_size_QMARK_(pobjects,cljs.core.first(tree_root))))))))){
var selected_frame_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_objects,cljs.core.first(page_selected));
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(base);
var paste_x = ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selected_frame_obj) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selected_frame_obj)) + (50));
var paste_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selected_frame_obj);
var delta = app.common.geom.point.subtract(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(paste_x,paste_y),orig_pos);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,delta,index], null);
} else {
if(app.main.data.workspace.clipboard.selected_frame_QMARK_(state)){
var selected_frame_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_objects,cljs.core.first(page_selected));
var origin_frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(first_selected_obj);
var origin_frame_object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_objects,origin_frame_id);
var margin_x = (function (){var x__5113__auto__ = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(origin_frame_object) - (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wrapper) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper)));
var y__5114__auto__ = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame_object) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var margin_y = (function (){var x__5113__auto__ = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(origin_frame_object) - (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wrapper) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper)));
var y__5114__auto__ = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame_object) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var paste_x = ((((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper) + new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(wrapper)) > new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame_object)))?((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame_object) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(orig_pos)) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame_object) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper)) - margin_x)):new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame_object));
var paste_y = ((((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper) + new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(wrapper)) > new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame_object)))?((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame_object) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(orig_pos)) + ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame_object) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper)) - margin_y)):new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame_object));
var delta = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin_frame_id,app.common.uuid.zero))?app.common.geom.point.subtract(app.common.geom.shapes.shape__GT_center(frame_object),app.common.geom.rect.rect__GT_center(wrapper)):app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(paste_x,paste_y));
var target_index = ((((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(selected_frame_obj)) && (app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1(selected_frame_obj))))?((0) - (1)):cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(selected_frame_obj)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id,delta,target_index], null);
} else {
if(cljs.core.empty_QMARK_(page_selected)){
var frame_id__$1 = app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$2(page_objects,position);
var delta = app.common.geom.point.subtract(position,orig_pos);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id__$1,delta], null);
} else {
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(base);
var delta = (cljs.core.truth_(in_viewport_QMARK_)?app.common.geom.point.subtract(position,orig_pos):app.common.geom.point.subtract(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(base)),orig_pos));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,delta,index], null);

}
}
}
});
var change_add_obj_index = (function app$main$data$workspace$clipboard$paste_shapes_$_change_add_obj_index(objects,selected,index,change){
var index__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(index,(-1));
var set_index = (function (p__50384,id){
var vec__50385 = p__50384;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50385,(0),null);
var index__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50385,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,id,index__$2),(index__$2 + (1))], null);
});
var map_ids = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(set_index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,(index__$1 + (1))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50318_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50318_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}),selected)));
if(cljs.core.truth_((function (){var and__5023__auto__ = add_obj_QMARK_(change);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.contains_QMARK_(map_ids,new cljs.core.Keyword(null,"old-id","old-id",-512581150).cljs$core$IFn$_invoke$arity$1(change));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(change,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.get.cljs$core$IFn$_invoke$arity$2(map_ids,new cljs.core.Keyword(null,"old-id","old-id",-512581150).cljs$core$IFn$_invoke$arity$1(change)));
} else {
return change;
}
});
var process_shape = (function app$main$data$workspace$clipboard$paste_shapes_$_process_shape(file_id,frame_id,parent_id,shape){
var G__50388 = shape;
var G__50388__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50388,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id], 0))
;
var G__50388__$2 = ((((((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.common.files.helpers.bool_shape_QMARK_(shape)))) && ((new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50388__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY):G__50388__$1);
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.common.types.typography.remove_external_typographies(G__50388__$2,file_id);
} else {
return G__50388__$2;
}
});
if((typeof app.main.data.workspace.clipboard.paste_shapes_50389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_shapes_50389 = (function (calculate_paste_position,in_viewport_QMARK_,process_rchange,map__50338,process_rchange_shape,pdata,add_obj_QMARK_,p__50337,process_shape,translate_media,change_add_obj_index,meta50390){
this.calculate_paste_position = calculate_paste_position;
this.in_viewport_QMARK_ = in_viewport_QMARK_;
this.process_rchange = process_rchange;
this.map__50338 = map__50338;
this.process_rchange_shape = process_rchange_shape;
this.pdata = pdata;
this.add_obj_QMARK_ = add_obj_QMARK_;
this.p__50337 = p__50337;
this.process_shape = process_shape;
this.translate_media = translate_media;
this.change_add_obj_index = change_add_obj_index;
this.meta50390 = meta50390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_shapes_50389.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_shapes_50389.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-shapes","app.main.data.workspace.clipboard/paste-shapes",307773185);
}));

(app.main.data.workspace.clipboard.paste_shapes_50389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50391,meta50390__$1){
var self__ = this;
var _50391__$1 = this;
return (new app.main.data.workspace.clipboard.paste_shapes_50389(self__.calculate_paste_position,self__.in_viewport_QMARK_,self__.process_rchange,self__.map__50338,self__.process_rchange_shape,self__.pdata,self__.add_obj_QMARK_,self__.p__50337,self__.process_shape,self__.translate_media,self__.change_add_obj_index,meta50390__$1));
}));

(app.main.data.workspace.clipboard.paste_shapes_50389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50391){
var self__ = this;
var _50391__$1 = this;
return self__.meta50390;
}));

(app.main.data.workspace.clipboard.paste_shapes_50389.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_shapes_50389.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var media_idx = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prev-id","prev-id",1028193202),new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(self__.pdata));
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.pdata);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(self__.pdata);
var variant_props = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(self__.pdata);
var position = cljs.core.deref(app.main.streams.mouse_position);
var vec__50392 = (self__.calculate_paste_position.cljs$core$IFn$_invoke$arity$4 ? self__.calculate_paste_position.cljs$core$IFn$_invoke$arity$4(state,objects,selected,position) : self__.calculate_paste_position.call(null,state,objects,selected,position));
var candidate_parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50392,(0),null);
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50392,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50392,(2),null);
var page_objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var libraries = app.main.data.helpers.lookup_libraries(state);
var ldata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var vec__50395 = app.common.types.container.find_valid_parent_and_frame_ids.cljs$core$IFn$_invoke$arity$5(candidate_parent_id,page_objects,cljs.core.vals(objects),true,libraries);
var parent_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50395,(0),null);
var frame_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50395,(1),null);
var index__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(candidate_parent_id,parent_id))?index:(0));
var index__$2 = (cljs.core.truth_(index__$1)?index__$1:(cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_objects,parent_id),new cljs.core.Keyword(null,"shapes","shapes",1897594879))) - (1)));
var selected__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(page_objects,parent_id);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$2(page_objects,parent_id));
} else {
return and__5023__auto__;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.reverse(selected)):selected);
var objects__$1 = cljs.core.update_vals(objects,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(self__.process_shape,file_id,frame_id,parent_id));
var all_objects = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_objects,objects__$1], 0));
var drop_cell = (cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(all_objects,parent_id))?app.common.geom.shapes.grid_layout.get_drop_cell(frame_id,all_objects,position):null);
var changes = app.common.files.changes_builder.amend_changes(app.common.files.changes_builder.amend_changes(app.common.logic.libraries.generate_duplicate_changes.cljs$core$IFn$_invoke$arity$variadic(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),all_objects,page,selected__$1,delta,libraries,ldata,file_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant-props","variant-props",1890974034),variant_props], null)], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.process_rchange,media_idx)),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(self__.change_add_obj_index,objects__$1,selected__$1,index__$2));
var changes__$1 = app.common.files.changes_builder.resize_parents(changes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(self__.add_obj_QMARK_,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes))));
var orig_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(all_objects),selected__$1);
var children_after = cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.get_objects(changes__$1),parent_id),new cljs.core.Keyword(null,"shapes","shapes",1897594879)));
var selected__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(self__.add_obj_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"obj","obj",981763962))),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__50322_SHARP_){
return cljs.core.contains_QMARK_(children_after,p1__50322_SHARP_);
}))),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes__$1));
var changes__$2 = (function (){var G__50401 = changes__$1;
if((!((drop_cell == null)))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__50401,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),(function (p1__50323_SHARP_){
return app.common.types.shape.layout.add_children_to_cell(p1__50323_SHARP_,selected__$2,all_objects,drop_cell);
}));
} else {
return G__50401;
}
})();
var add_component_to_variant_QMARK_ = (function (){var and__5023__auto__ = cljs.core.some(app.common.types.component.instance_head_QMARK_,orig_shapes);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.some(app.common.types.component.is_variant_QMARK_,app.common.files.helpers.get_parents_with_self(page_objects,parent_id));
} else {
return and__5023__auto__;
}
})();
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.map((function (shape){
var parent_type = app.common.files.helpers.get_shape_type(all_objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var external_lib_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape));
var component = app.common.types.container.get_component_from_shape(shape,libraries);
var origin = "workspace:paste";
if(app.common.types.component.instance_head_QMARK_(shape)){
return app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"use-library-component",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"is-external-library","is-external-library",-1562006393),external_lib_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"parent-type","parent-type",1460910476),parent_type,new cljs.core.Keyword(null,"is-variant","is-variant",-1643856989),app.common.types.component.is_variant_QMARK_(component)], null));
} else {
if(app.common.files.helpers.has_layout_QMARK_(objects__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape))){
return app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"layout-add-element",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"parent-type","parent-type",1460910476),parent_type], null));
} else {
return app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-shape",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"parent-type","parent-type",1460910476),parent_type], null));
}
}
}),beicon.v2.core.from(orig_shapes)),beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$2),app.main.data.workspace.selection.select_shapes(selected__$2),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id),(cljs.core.truth_(add_component_to_variant_QMARK_)?potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-component-to-variant"], null)):null)));
}));
}

return (new app.main.data.workspace.clipboard.paste_shapes_50389(calculate_paste_position,in_viewport_QMARK_,process_rchange,map__50338__$1,process_rchange_shape,pdata,add_obj_QMARK_,p__50337,process_shape,translate_media,change_add_obj_index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.as_content = (function app$main$data$workspace$clipboard$as_content(text){
var paragraphs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50402_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"children","children",-940561982)],["paragraph",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.get_default_text_attrs(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),p1__50402_SHARP_], null)], 0))], null)]);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cuerdas.core.trim,cuerdas.core.lines(text)));
if(app.common.data.not_empty_QMARK_(paragraphs)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"root",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph-set",new cljs.core.Keyword(null,"children","children",-940561982),paragraphs], null)], null)], null);
} else {
return null;
}
});
app.main.data.workspace.clipboard.calculate_paste_position = (function app$main$data$workspace$clipboard$calculate_paste_position(state){
if(app.main.data.workspace.clipboard.selected_frame_QMARK_(state)){
var page_selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var page_objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var frame_id = cljs.core.first(page_selected);
var frame_object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_objects,frame_id);
return app.common.geom.shapes.shape__GT_center(frame_object);
} else {
return cljs.core.deref(app.main.streams.mouse_position);

}
});
app.main.data.workspace.clipboard.paste_html_text = (function app$main$data$workspace$clipboard$paste_html_text(html){
if(typeof html === 'string'){
} else {
throw (new Error("Assert failed: (string? html)"));
}

if((typeof app.main.data.workspace.clipboard.paste_html_text_50404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_html_text_50404 = (function (html,meta50405){
this.html = html;
this.meta50405 = meta50405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_html_text_50404.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_html_text_50404.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-html-text","app.main.data.workspace.clipboard/paste-html-text",4281609);
}));

(app.main.data.workspace.clipboard.paste_html_text_50404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50406,meta50405__$1){
var self__ = this;
var _50406__$1 = this;
return (new app.main.data.workspace.clipboard.paste_html_text_50404(self__.html,meta50405__$1));
}));

(app.main.data.workspace.clipboard.paste_html_text_50404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50406){
var self__ = this;
var _50406__$1 = this;
return self__.meta50405;
}));

(app.main.data.workspace.clipboard.paste_html_text_50404.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_html_text_50404.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var style = cljs.core.deref(app.main.refs.workspace_clipboard_style);
var root = app.main.data.workspace.texts.create_root_from_html(self__.html,style,app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2-html-paste"));
var text = root.textContent;
var content = app.util.text.content.dom__GT_cljs(root);
if(cljs.core.truth_(app.common.types.shape.text.valid_content_QMARK_(content))){
var id = app.common.uuid.next();
var width = (function (){var x__5110__auto__ = (8);
var y__5111__auto__ = (function (){var x__5113__auto__ = ((7) * cljs.core.count(text));
var y__5114__auto__ = (700);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var height = (16);
var map__50425 = app.main.data.workspace.clipboard.calculate_paste_position(state);
var map__50425__$1 = cljs.core.__destructure_map(map__50425);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50425__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50425__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var shape = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[y,(((cljs.core.count(text) > (100)))?new cljs.core.Keyword(null,"auto-height","auto-height",-960519663):new cljs.core.Keyword(null,"auto-width","auto-width",-992925188)),content,app.common.types.text.generate_shape_name(text),width,new cljs.core.Keyword(null,"text","text",-1790561697),id,x,height]);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.create_and_add_shape(new cljs.core.Keyword(null,"text","text",-1790561697),x,y,shape),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.clipboard.paste_html_text_50404(html,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.paste_text = (function app$main$data$workspace$clipboard$paste_text(text){
app.common.data.macros.runtime_assert("expr assert: (string? text)",(function (){
return typeof text === 'string';
}));

if((typeof app.main.data.workspace.clipboard.paste_text_50439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_text_50439 = (function (text,meta50440){
this.text = text;
this.meta50440 = meta50440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_text_50439.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_text_50439.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-text","app.main.data.workspace.clipboard/paste-text",729394274);
}));

(app.main.data.workspace.clipboard.paste_text_50439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50441,meta50440__$1){
var self__ = this;
var _50441__$1 = this;
return (new app.main.data.workspace.clipboard.paste_text_50439(self__.text,meta50440__$1));
}));

(app.main.data.workspace.clipboard.paste_text_50439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50441){
var self__ = this;
var _50441__$1 = this;
return self__.meta50440;
}));

(app.main.data.workspace.clipboard.paste_text_50439.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_text_50439.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var id = app.common.uuid.next();
var width = (function (){var x__5110__auto__ = (8);
var y__5111__auto__ = (function (){var x__5113__auto__ = ((7) * cljs.core.count(self__.text));
var y__5114__auto__ = (700);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var height = (16);
var map__50446 = app.main.data.workspace.clipboard.calculate_paste_position(state);
var map__50446__$1 = cljs.core.__destructure_map(map__50446);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50446__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50446__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var shape = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[y,(((cljs.core.count(self__.text) > (100)))?new cljs.core.Keyword(null,"auto-height","auto-height",-960519663):new cljs.core.Keyword(null,"auto-width","auto-width",-992925188)),app.main.data.workspace.clipboard.as_content(self__.text),app.common.types.text.generate_shape_name(self__.text),width,new cljs.core.Keyword(null,"text","text",-1790561697),id,x,height]);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.create_and_add_shape(new cljs.core.Keyword(null,"text","text",-1790561697),x,y,shape),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.clipboard.paste_text_50439(text,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.paste_svg_text = (function app$main$data$workspace$clipboard$paste_svg_text(text){
app.common.data.macros.runtime_assert("expr assert: (string? text)",(function (){
return typeof text === 'string';
}));

if((typeof app.main.data.workspace.clipboard.paste_svg_text_50459 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_svg_text_50459 = (function (text,meta50460){
this.text = text;
this.meta50460 = meta50460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_svg_text_50459.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_svg_text_50459.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-svg-text","app.main.data.workspace.clipboard/paste-svg-text",-566155277);
}));

(app.main.data.workspace.clipboard.paste_svg_text_50459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50461,meta50460__$1){
var self__ = this;
var _50461__$1 = this;
return (new app.main.data.workspace.clipboard.paste_svg_text_50459(self__.text,meta50460__$1));
}));

(app.main.data.workspace.clipboard.paste_svg_text_50459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50461){
var self__ = this;
var _50461__$1 = this;
return self__.meta50460;
}));

(app.main.data.workspace.clipboard.paste_svg_text_50459.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_svg_text_50459.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var position = app.main.data.workspace.clipboard.calculate_paste_position(state);
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.map((function (p1__50454_SHARP_){
return app.main.data.workspace.media.svg_uploaded(p1__50454_SHARP_,file_id,position);
}),app.main.data.workspace.media.svg__GT_clj(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["svg",self__.text], null)));
}));
}

return (new app.main.data.workspace.clipboard.paste_svg_text_50459(text,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.paste_image = (function app$main$data$workspace$clipboard$paste_image(image){
if((typeof app.main.data.workspace.clipboard.paste_image_50478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.paste_image_50478 = (function (image,meta50479){
this.image = image;
this.meta50479 = meta50479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.paste_image_50478.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_image_50478.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","paste-image","app.main.data.workspace.clipboard/paste-image",-1049201927);
}));

(app.main.data.workspace.clipboard.paste_image_50478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50480,meta50479__$1){
var self__ = this;
var _50480__$1 = this;
return (new app.main.data.workspace.clipboard.paste_image_50478(self__.image,meta50479__$1));
}));

(app.main.data.workspace.clipboard.paste_image_50478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50480){
var self__ = this;
var _50480__$1 = this;
return self__.meta50479;
}));

(app.main.data.workspace.clipboard.paste_image_50478.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.paste_image_50478.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var position = app.main.data.workspace.clipboard.calculate_paste_position(state);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"blobs","blobs",-1606355916),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.image], null),new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
return beicon.v2.core.of(app.main.data.workspace.media.upload_media_workspace(params));
}));
}

return (new app.main.data.workspace.clipboard.paste_image_50478(image,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.clipboard.copy_link_to_clipboard = (function app$main$data$workspace$clipboard$copy_link_to_clipboard(){
if((typeof app.main.data.workspace.clipboard.copy_link_to_clipboard_50482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.clipboard.copy_link_to_clipboard_50482 = (function (meta50483){
this.meta50483 = meta50483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.clipboard.copy_link_to_clipboard_50482.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_link_to_clipboard_50482.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.clipboard","copy-link-to-clipboard","app.main.data.workspace.clipboard/copy-link-to-clipboard",-2034235592);
}));

(app.main.data.workspace.clipboard.copy_link_to_clipboard_50482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50484,meta50483__$1){
var self__ = this;
var _50484__$1 = this;
return (new app.main.data.workspace.clipboard.copy_link_to_clipboard_50482(meta50483__$1));
}));

(app.main.data.workspace.clipboard.copy_link_to_clipboard_50482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50484){
var self__ = this;
var _50484__$1 = this;
return self__.meta50483;
}));

(app.main.data.workspace.clipboard.copy_link_to_clipboard_50482.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.clipboard.copy_link_to_clipboard_50482.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return app.util.clipboard.to_clipboard(app.main.router.get_current_href());
}));
}

return (new app.main.data.workspace.clipboard.copy_link_to_clipboard_50482(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.clipboard.js.map
