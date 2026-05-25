import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.files.shapes_helpers.js";
import "./app.common.geom.point.js";
import "./app.common.logging.js";
import "./app.common.logic.libraries.js";
import "./app.common.logic.shapes.js";
import "./app.common.logic.variants.js";
import "./app.common.path_names.js";
import "./app.common.time.js";
import "./app.common.types.color.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.library.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.typography.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.changes.js";
import "./app.main.data.comments.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.workspace.groups.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.specialized_panel.js";
import "./app.main.data.workspace.thumbnails.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.data.workspace.wasm_text.js";
import "./app.main.data.workspace.zoom.js";
import "./app.main.features.js";
import "./app.main.features.pointer_map.js";
import "./app.main.refs.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.util.color.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.libraries');
app.common.logging.loggers.set("app.main.data.workspace.libraries",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.data.workspace.libraries.debug_pretty_file = (function app$main$data$workspace$libraries$debug_pretty_file(file_id,state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state))){
return "<local>";
} else {
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),file_id,new cljs.core.Keyword(null,"name","name",1843675177)], null))),">"].join('');
}
});
app.main.data.workspace.libraries.log_changes = (function app$main$data$workspace$libraries$log_changes(changes,file){
var extract_change = (function (change){
var shape = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change))?(cljs.core.truth_(new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(change))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(change),new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change)], null)):(cljs.core.truth_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(change))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(change),new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change)], null)):null
)):null);
var prefix = (cljs.core.truth_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(change))?"[C] ":"[P] ");
var extract = (function (){var G__49388 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(change),new cljs.core.Keyword(null,"raw-change","raw-change",1940823897),change], null);
var G__49388__$1 = (cljs.core.truth_(shape)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__49388,new cljs.core.Keyword(null,"shape","shape",1190694006),[prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shape-id","shape-id",981169327),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))], 0)):G__49388);
var G__49388__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(change))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__49388__$1,new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(change)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"obj-id","obj-id",1871733713),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(change))], 0)):G__49388__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"operations","operations",1630691895).cljs$core$IFn$_invoke$arity$1(change))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49388__$2,new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.Keyword(null,"operations","operations",1630691895).cljs$core$IFn$_invoke$arity$1(change));
} else {
return G__49388__$2;
}
})();
return extract;
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(extract_change,changes);
});
app.main.data.workspace.libraries.extract_path_if_missing = (function app$main$data$workspace$libraries$extract_path_if_missing(item){
var vec__49390 = app.common.path_names.split_group_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49390,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49390,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),name)) && (cljs.core.contains_QMARK_(item,new cljs.core.Keyword(null,"path","path",-188191168))))){
return item;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"path","path",-188191168),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name], 0));
}
});
app.main.data.workspace.libraries.add_color = (function app$main$data$workspace$libraries$add_color(var_args){
var G__49397 = arguments.length;
switch (G__49397) {
case 1:
return app.main.data.workspace.libraries.add_color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.libraries.add_color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.add_color.cljs$core$IFn$_invoke$arity$1 = (function (color){
return app.main.data.workspace.libraries.add_color.cljs$core$IFn$_invoke$arity$2(color,null);
}));

(app.main.data.workspace.libraries.add_color.cljs$core$IFn$_invoke$arity$2 = (function (color,p__49402){
var map__49403 = p__49402;
var map__49403__$1 = cljs.core.__destructure_map(map__49403);
var rename_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49403__$1,new cljs.core.Keyword(null,"rename?","rename?",-1728043099),true);
var color__$1 = app.common.types.color.check_library_color(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__49395_SHARP_){
var or__5025__auto__ = p1__49395_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})),new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.util.color.gradient_type__GT_string(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"type","type",1174270348)], null)));
}
}
})())));
if((typeof app.main.data.workspace.libraries.add_color_49404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.add_color_49404 = (function (color,p__49402,map__49403,rename_QMARK_,meta49405){
this.color = color;
this.p__49402 = p__49402;
this.map__49403 = map__49403;
this.rename_QMARK_ = rename_QMARK_;
this.meta49405 = meta49405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.add_color_49404.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_color_49404.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","add-color","app.main.data.workspace.libraries/add-color",-136560140);
}));

(app.main.data.workspace.libraries.add_color_49404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49406,meta49405__$1){
var self__ = this;
var _49406__$1 = this;
return (new app.main.data.workspace.libraries.add_color_49404(self__.color,self__.p__49402,self__.map__49403,self__.rename_QMARK_,meta49405__$1));
}));

(app.main.data.workspace.libraries.add_color_49404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49406){
var self__ = this;
var _49406__$1 = this;
return self__.meta49405;
}));

(app.main.data.workspace.libraries.add_color_49404.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_color_49404.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.color;
}));

(app.main.data.workspace.libraries.add_color_49404.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_color_49404.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,_,___$1){
var self__ = this;
var it__$1 = this;
var changes = app.common.files.changes_builder.add_color(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),self__.color);
return beicon.v2.core.of((cljs.core.truth_(self__.rename_QMARK_)?(function (state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"color-for-rename","color-for-rename",-1584502786)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.color));
}):null),app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.libraries.add_color_49404(color__$1,p__49402,map__49403__$1,rename_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.add_color.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.libraries.clear_color_for_rename = (function (){
if((typeof app.main.data.workspace.libraries.clear_color_for_rename_49407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.clear_color_for_rename_49407 = (function (meta49408){
this.meta49408 = meta49408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.clear_color_for_rename_49407.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.clear_color_for_rename_49407.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","clear-color-for-rename","app.main.data.workspace.libraries/clear-color-for-rename",-1233782195);
}));

(app.main.data.workspace.libraries.clear_color_for_rename_49407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49409,meta49408__$1){
var self__ = this;
var _49409__$1 = this;
return (new app.main.data.workspace.libraries.clear_color_for_rename_49407(meta49408__$1));
}));

(app.main.data.workspace.libraries.clear_color_for_rename_49407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49409){
var self__ = this;
var _49409__$1 = this;
return self__.meta49408;
}));

(app.main.data.workspace.libraries.clear_color_for_rename_49407.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.clear_color_for_rename_49407.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"color-for-rename","color-for-rename",-1584502786)], null),null);
}));
}

return (new app.main.data.workspace.libraries.clear_color_for_rename_49407(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.libraries.update_color_STAR_ = (function app$main$data$workspace$libraries$update_color_STAR_(it,state,color,file_id){
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var vec__49410 = app.common.path_names.split_group_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49410,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49410,(1),null);
var color__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(color,new cljs.core.Keyword(null,"path","path",-188191168),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name], 0));
var changes = app.common.files.changes_builder.update_color(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it),data),color__$1);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),(function (){var G__49413 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data);
var G__49414 = file_id;
var G__49415 = new cljs.core.Keyword(null,"colors","colors",1157174732);
var G__49416 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color__$1);
return (app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4 ? app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4(G__49413,G__49414,G__49415,G__49416) : app.main.data.workspace.libraries.sync_file.call(null,G__49413,G__49414,G__49415,G__49416));
})(),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
});
app.main.data.workspace.libraries.update_color = (function app$main$data$workspace$libraries$update_color(color,file_id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","expected a uuid instance for `file-id`","\n","(uuid? file-id)"].join('')));
}

var color__$1 = app.common.types.color.check_library_color(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(color));
if((typeof app.main.data.workspace.libraries.update_color_49417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.update_color_49417 = (function (color,file_id,meta49418){
this.color = color;
this.file_id = file_id;
this.meta49418 = meta49418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.update_color_49417.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_color_49417.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","update-color","app.main.data.workspace.libraries/update-color",1151050694);
}));

(app.main.data.workspace.libraries.update_color_49417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49419,meta49418__$1){
var self__ = this;
var _49419__$1 = this;
return (new app.main.data.workspace.libraries.update_color_49417(self__.color,self__.file_id,meta49418__$1));
}));

(app.main.data.workspace.libraries.update_color_49417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49419){
var self__ = this;
var _49419__$1 = this;
return self__.meta49418;
}));

(app.main.data.workspace.libraries.update_color_49417.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_color_49417.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
return app.main.data.workspace.libraries.update_color_STAR_(it__$1,state,self__.color,self__.file_id);
}));
}

return (new app.main.data.workspace.libraries.update_color_49417(color__$1,file_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Update color data without affecting the path location
 */
app.main.data.workspace.libraries.update_color_data = (function app$main$data$workspace$libraries$update_color_data(color,file_id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","expected a uuid instance for `file-id`","\n","(uuid? file-id)"].join('')));
}

var color__$1 = app.common.types.color.check_library_color(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(color));
if((typeof app.main.data.workspace.libraries.update_color_data_49424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.update_color_data_49424 = (function (color,file_id,meta49425){
this.color = color;
this.file_id = file_id;
this.meta49425 = meta49425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.update_color_data_49424.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_color_data_49424.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","update-color-data","app.main.data.workspace.libraries/update-color-data",-874532473);
}));

(app.main.data.workspace.libraries.update_color_data_49424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49426,meta49425__$1){
var self__ = this;
var _49426__$1 = this;
return (new app.main.data.workspace.libraries.update_color_data_49424(self__.color,self__.file_id,meta49425__$1));
}));

(app.main.data.workspace.libraries.update_color_data_49424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49426){
var self__ = this;
var _49426__$1 = this;
return self__.meta49425;
}));

(app.main.data.workspace.libraries.update_color_data_49424.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_color_data_49424.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var color__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.color,new cljs.core.Keyword(null,"name","name",1843675177),""+(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(self__.color) ?? "")+"/"+(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.color) ?? ""));
return app.main.data.workspace.libraries.update_color_STAR_(it__$1,state,color__$1,self__.file_id);
}));
}

return (new app.main.data.workspace.libraries.update_color_data_49424(color__$1,file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.rename_color = (function app$main$data$workspace$libraries$rename_color(file_id,id,new_name){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid instance for `id`","\n","(uuid? id)"].join('')));
}

if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","expected a uuid instance for `file-id`","\n","(uuid? file-id)"].join('')));
}

if(typeof new_name === 'string'){
} else {
throw (new Error(["Assert failed: ","expected a string instance for `new-name`","\n","(string? new-name)"].join('')));
}

if((typeof app.main.data.workspace.libraries.rename_color_49435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.rename_color_49435 = (function (file_id,id,new_name,meta49436){
this.file_id = file_id;
this.id = id;
this.new_name = new_name;
this.meta49436 = meta49436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.rename_color_49435.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_color_49435.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","rename-color","app.main.data.workspace.libraries/rename-color",-1436624502);
}));

(app.main.data.workspace.libraries.rename_color_49435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49437,meta49436__$1){
var self__ = this;
var _49437__$1 = this;
return (new app.main.data.workspace.libraries.rename_color_49435(self__.file_id,self__.id,self__.new_name,meta49436__$1));
}));

(app.main.data.workspace.libraries.rename_color_49435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49437){
var self__ = this;
var _49437__$1 = this;
return self__.meta49436;
}));

(app.main.data.workspace.libraries.rename_color_49435.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_color_49435.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var new_name__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(self__.new_name);
if(cuerdas.core.empty_QMARK_(new_name__$1)){
return beicon.v2.core.empty();
} else {
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var color = app.common.types.color.check_library_color(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.library.get_color(data,self__.id),new cljs.core.Keyword(null,"name","name",1843675177),new_name__$1)));
return app.main.data.workspace.libraries.update_color_STAR_(it__$1,state,color,self__.file_id);
}
}));
}

return (new app.main.data.workspace.libraries.rename_color_49435(file_id,id,new_name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.delete_color = (function app$main$data$workspace$libraries$delete_color(p__49438){
var map__49439 = p__49438;
var map__49439__$1 = cljs.core.__destructure_map(map__49439);
var params = map__49439__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid instance for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.libraries.delete_color_49440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.delete_color_49440 = (function (p__49438,map__49439,params,id,meta49441){
this.p__49438 = p__49438;
this.map__49439 = map__49439;
this.params = params;
this.id = id;
this.meta49441 = meta49441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.delete_color_49440.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_color_49440.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","delete-color","app.main.data.workspace.libraries/delete-color",997486262);
}));

(app.main.data.workspace.libraries.delete_color_49440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49442,meta49441__$1){
var self__ = this;
var _49442__$1 = this;
return (new app.main.data.workspace.libraries.delete_color_49440(self__.p__49438,self__.map__49439,self__.params,self__.id,meta49441__$1));
}));

(app.main.data.workspace.libraries.delete_color_49440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49442){
var self__ = this;
var _49442__$1 = this;
return self__.meta49441;
}));

(app.main.data.workspace.libraries.delete_color_49440.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_color_49440.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null);
}));

(app.main.data.workspace.libraries.delete_color_49440.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_color_49440.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.delete_color(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.id);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.libraries.delete_color_49440(p__49438,map__49439__$1,params,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.add_media = (function app$main$data$workspace$libraries$add_media(media){
var media__$1 = app.common.types.file.check_file_media(media);
if((typeof app.main.data.workspace.libraries.add_media_49444 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.add_media_49444 = (function (media,meta49445){
this.media = media;
this.meta49445 = meta49445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.add_media_49444.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_media_49444.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","add-media","app.main.data.workspace.libraries/add-media",1356597669);
}));

(app.main.data.workspace.libraries.add_media_49444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49446,meta49445__$1){
var self__ = this;
var _49446__$1 = this;
return (new app.main.data.workspace.libraries.add_media_49444(self__.media,meta49445__$1));
}));

(app.main.data.workspace.libraries.add_media_49444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49446){
var self__ = this;
var _49446__$1 = this;
return self__.meta49445;
}));

(app.main.data.workspace.libraries.add_media_49444.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_media_49444.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.media;
}));

(app.main.data.workspace.libraries.add_media_49444.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_media_49444.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,_,___$1){
var self__ = this;
var it__$1 = this;
var obj = cljs.core.select_keys(self__.media,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"mtype","mtype",-1724656120)], null));
var changes = app.common.files.changes_builder.add_media(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),obj);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.libraries.add_media_49444(media__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.rename_media = (function app$main$data$workspace$libraries$rename_media(id,new_name){
app.common.data.macros.runtime_assert("expected valid uuid for `id`",(function (){
return cljs.core.uuid_QMARK_(id);
}));

app.common.data.macros.runtime_assert("expected valid string for `new-name`",(function (){
return typeof new_name === 'string';
}));

if((typeof app.main.data.workspace.libraries.rename_media_49448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.rename_media_49448 = (function (id,new_name,meta49449){
this.id = id;
this.new_name = new_name;
this.meta49449 = meta49449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.rename_media_49448.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_media_49448.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","rename-media","app.main.data.workspace.libraries/rename-media",1565706713);
}));

(app.main.data.workspace.libraries.rename_media_49448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49450,meta49449__$1){
var self__ = this;
var _49450__$1 = this;
return (new app.main.data.workspace.libraries.rename_media_49448(self__.id,self__.new_name,meta49449__$1));
}));

(app.main.data.workspace.libraries.rename_media_49448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49450){
var self__ = this;
var _49450__$1 = this;
return self__.meta49449;
}));

(app.main.data.workspace.libraries.rename_media_49448.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_media_49448.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var new_name__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(self__.new_name);
if(cuerdas.core.empty_QMARK_(new_name__$1)){
return beicon.v2.core.empty();
} else {
var vec__49451 = app.common.path_names.split_group_name(new_name__$1);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49451,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49451,(1),null);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var object = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media","media",-1066138403),self__.id], null));
var new_object = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(object,new cljs.core.Keyword(null,"path","path",-188191168),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name], 0));
var changes = app.common.files.changes_builder.update_media(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),new_object);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}
}));
}

return (new app.main.data.workspace.libraries.rename_media_49448(id,new_name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.delete_media = (function app$main$data$workspace$libraries$delete_media(p__49454){
var map__49455 = p__49454;
var map__49455__$1 = cljs.core.__destructure_map(map__49455);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49455__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.libraries.delete_media_49456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.delete_media_49456 = (function (p__49454,map__49455,id,meta49457){
this.p__49454 = p__49454;
this.map__49455 = map__49455;
this.id = id;
this.meta49457 = meta49457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.delete_media_49456.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_media_49456.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","delete-media","app.main.data.workspace.libraries/delete-media",-1252997417);
}));

(app.main.data.workspace.libraries.delete_media_49456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49458,meta49457__$1){
var self__ = this;
var _49458__$1 = this;
return (new app.main.data.workspace.libraries.delete_media_49456(self__.p__49454,self__.map__49455,self__.id,meta49457__$1));
}));

(app.main.data.workspace.libraries.delete_media_49456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49458){
var self__ = this;
var _49458__$1 = this;
return self__.meta49457;
}));

(app.main.data.workspace.libraries.delete_media_49456.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_media_49456.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null);
}));

(app.main.data.workspace.libraries.delete_media_49456.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_media_49456.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.delete_media(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.id);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.libraries.delete_media_49456(p__49454,map__49455__$1,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.add_typography = (function app$main$data$workspace$libraries$add_typography(var_args){
var G__49462 = arguments.length;
switch (G__49462) {
case 1:
return app.main.data.workspace.libraries.add_typography.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.libraries.add_typography.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.add_typography.cljs$core$IFn$_invoke$arity$1 = (function (typography){
return app.main.data.workspace.libraries.add_typography.cljs$core$IFn$_invoke$arity$2(typography,true);
}));

(app.main.data.workspace.libraries.add_typography.cljs$core$IFn$_invoke$arity$2 = (function (typography,edit_QMARK_){
var typography__$1 = app.common.types.typography.check_typography(cljs.core.update.cljs$core$IFn$_invoke$arity$3(typography,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__49459_SHARP_){
var or__5025__auto__ = p1__49459_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})));
if((typeof app.main.data.workspace.libraries.add_typography_49463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.add_typography_49463 = (function (typography,edit_QMARK_,meta49464){
this.typography = typography;
this.edit_QMARK_ = edit_QMARK_;
this.meta49464 = meta49464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.add_typography_49463.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_typography_49463.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","add-typography","app.main.data.workspace.libraries/add-typography",-1016874370);
}));

(app.main.data.workspace.libraries.add_typography_49463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49465,meta49464__$1){
var self__ = this;
var _49465__$1 = this;
return (new app.main.data.workspace.libraries.add_typography_49463(self__.typography,self__.edit_QMARK_,meta49464__$1));
}));

(app.main.data.workspace.libraries.add_typography_49463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49465){
var self__ = this;
var _49465__$1 = this;
return self__.meta49464;
}));

(app.main.data.workspace.libraries.add_typography_49463.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_typography_49463.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.typography;
}));

(app.main.data.workspace.libraries.add_typography_49463.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_typography_49463.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,_,___$1){
var self__ = this;
var it__$1 = this;
var changes = app.common.files.changes_builder.add_typography(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),self__.typography);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),(function (p1__49460_SHARP_){
var G__49466 = p1__49460_SHARP_;
if(cljs.core.truth_(self__.edit_QMARK_)){
return cljs.core.assoc_in(G__49466,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"edit-typography","edit-typography",-679697712)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.typography));
} else {
return G__49466;
}
}));
}));
}

return (new app.main.data.workspace.libraries.add_typography_49463(typography__$1,edit_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.add_typography.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.libraries.do_update_tipography = (function app$main$data$workspace$libraries$do_update_tipography(it,state,typography,file_id){
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var typography__$1 = app.main.data.workspace.libraries.extract_path_if_missing(typography);
var changes = app.common.files.changes_builder.update_typography(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it),data),typography__$1);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),(function (){var G__49467 = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var G__49468 = file_id;
var G__49469 = new cljs.core.Keyword(null,"typographies","typographies",-482095730);
var G__49470 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography__$1);
return (app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4 ? app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4(G__49467,G__49468,G__49469,G__49470) : app.main.data.workspace.libraries.sync_file.call(null,G__49467,G__49468,G__49469,G__49470));
})(),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
});
app.main.data.workspace.libraries.update_typography = (function app$main$data$workspace$libraries$update_typography(typography,file_id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `file-id`","\n","(uuid? file-id)"].join('')));
}

var typography__$1 = app.common.types.typography.check_typography(typography);
if((typeof app.main.data.workspace.libraries.update_typography_49471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.update_typography_49471 = (function (typography,file_id,meta49472){
this.typography = typography;
this.file_id = file_id;
this.meta49472 = meta49472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.update_typography_49471.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_typography_49471.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","update-typography","app.main.data.workspace.libraries/update-typography",-2118297692);
}));

(app.main.data.workspace.libraries.update_typography_49471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49473,meta49472__$1){
var self__ = this;
var _49473__$1 = this;
return (new app.main.data.workspace.libraries.update_typography_49471(self__.typography,self__.file_id,meta49472__$1));
}));

(app.main.data.workspace.libraries.update_typography_49471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49473){
var self__ = this;
var _49473__$1 = this;
return self__.meta49472;
}));

(app.main.data.workspace.libraries.update_typography_49471.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_typography_49471.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
return app.main.data.workspace.libraries.do_update_tipography(it__$1,state,self__.typography,self__.file_id);
}));
}

return (new app.main.data.workspace.libraries.update_typography_49471(typography__$1,file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.rename_typography = (function app$main$data$workspace$libraries$rename_typography(file_id,id,new_name){
app.common.data.macros.runtime_assert("expr assert: (uuid? file-id)",(function (){
return cljs.core.uuid_QMARK_(file_id);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

app.common.data.macros.runtime_assert("expr assert: (string? new-name)",(function (){
return typeof new_name === 'string';
}));

if((typeof app.main.data.workspace.libraries.rename_typography_49477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.rename_typography_49477 = (function (file_id,id,new_name,meta49478){
this.file_id = file_id;
this.id = id;
this.new_name = new_name;
this.meta49478 = meta49478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.rename_typography_49477.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_typography_49477.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","rename-typography","app.main.data.workspace.libraries/rename-typography",1632768510);
}));

(app.main.data.workspace.libraries.rename_typography_49477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49479,meta49478__$1){
var self__ = this;
var _49479__$1 = this;
return (new app.main.data.workspace.libraries.rename_typography_49477(self__.file_id,self__.id,self__.new_name,meta49478__$1));
}));

(app.main.data.workspace.libraries.rename_typography_49477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49479){
var self__ = this;
var _49479__$1 = this;
return self__.meta49478;
}));

(app.main.data.workspace.libraries.rename_typography_49477.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_typography_49477.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),self__.new_name], null);
}));

(app.main.data.workspace.libraries.rename_typography_49477.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_typography_49477.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
if((((!((self__.new_name == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",self__.new_name)))){
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var vec__49480 = app.common.path_names.split_group_name(self__.new_name);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49480,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49480,(1),null);
var object = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typographies","typographies",-482095730),self__.id], null));
var new_object = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(object,new cljs.core.Keyword(null,"path","path",-188191168),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name], 0));
return app.main.data.workspace.libraries.do_update_tipography(it__$1,state,new_object,self__.file_id);
} else {
return null;
}
}));
}

return (new app.main.data.workspace.libraries.rename_typography_49477(file_id,id,new_name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.delete_typography = (function app$main$data$workspace$libraries$delete_typography(id){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.libraries.delete_typography_49483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.delete_typography_49483 = (function (id,meta49484){
this.id = id;
this.meta49484 = meta49484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.delete_typography_49483.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_typography_49483.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","delete-typography","app.main.data.workspace.libraries/delete-typography",-554111820);
}));

(app.main.data.workspace.libraries.delete_typography_49483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49485,meta49484__$1){
var self__ = this;
var _49485__$1 = this;
return (new app.main.data.workspace.libraries.delete_typography_49483(self__.id,meta49484__$1));
}));

(app.main.data.workspace.libraries.delete_typography_49483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49485){
var self__ = this;
var _49485__$1 = this;
return self__.meta49484;
}));

(app.main.data.workspace.libraries.delete_typography_49483.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_typography_49483.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null);
}));

(app.main.data.workspace.libraries.delete_typography_49483.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_typography_49483.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.delete_typography(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.id);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.libraries.delete_typography_49483(id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * This is the second step of the component creation.
 */
app.main.data.workspace.libraries.add_component2 = (function app$main$data$workspace$libraries$add_component2(var_args){
var G__49488 = arguments.length;
switch (G__49488) {
case 1:
return app.main.data.workspace.libraries.add_component2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.libraries.add_component2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.add_component2.cljs$core$IFn$_invoke$arity$1 = (function (selected){
return app.main.data.workspace.libraries.add_component2.cljs$core$IFn$_invoke$arity$2(null,selected);
}));

(app.main.data.workspace.libraries.add_component2.cljs$core$IFn$_invoke$arity$2 = (function (id_ref,selected){
if((typeof app.main.data.workspace.libraries.add_component2_49490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.add_component2_49490 = (function (id_ref,selected,meta49491){
this.id_ref = id_ref;
this.selected = selected;
this.meta49491 = meta49491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.add_component2_49490.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_component2_49490.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","add-component2","app.main.data.workspace.libraries/add-component2",405951852);
}));

(app.main.data.workspace.libraries.add_component2_49490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49492,meta49491__$1){
var self__ = this;
var _49492__$1 = this;
return (new app.main.data.workspace.libraries.add_component2_49490(self__.id_ref,self__.selected,meta49491__$1));
}));

(app.main.data.workspace.libraries.add_component2_49490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49492){
var self__ = this;
var _49492__$1 = this;
return self__.meta49491;
}));

(app.main.data.workspace.libraries.add_component2_49490.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_component2_49490.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-component",new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.count(self__.selected)], null);
}));

(app.main.data.workspace.libraries.add_component2_49490.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_component2_49490.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3(state,file_id,page_id);
var shapes = app.main.data.workspace.groups.shapes_for_grouping(objects,self__.selected);
var parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)),shapes);
if(cljs.core.empty_QMARK_(shapes)){
return null;
} else {
var vec__49493 = app.common.logic.libraries.generate_add_component(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),shapes,objects,page_id,file_id,app.common.files.shapes_helpers.prepare_create_artboard_from_selection);
var root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49493,(0),null);
var component_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49493,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49493,(2),null);
if(cljs.core.truth_(self__.id_ref)){
cljs.core.reset_BANG_(self__.id_ref,component_id);
} else {
}

if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes))){
return null;
} else {
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.selection.select_shapes(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root))),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),parents], null)));
}
}
}));
}

return (new app.main.data.workspace.libraries.add_component2_49490(id_ref,selected,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.add_component2.cljs$lang$maxFixedArity = 2);

/**
 * Add a new component to current file library, from the currently selected shapes.
 *   This operation is made in two steps, first one for calculate the
 *   shapes that will be part of the component and the second one with
 *   the component creation.
 */
app.main.data.workspace.libraries.add_component = (function app$main$data$workspace$libraries$add_component(var_args){
var G__49500 = arguments.length;
switch (G__49500) {
case 0:
return app.main.data.workspace.libraries.add_component.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return app.main.data.workspace.libraries.add_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.add_component.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.libraries.add_component.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(app.main.data.workspace.libraries.add_component.cljs$core$IFn$_invoke$arity$2 = (function (id_ref,ids){
if((typeof app.main.data.workspace.libraries.add_component_49502 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.add_component_49502 = (function (id_ref,ids,meta49503){
this.id_ref = id_ref;
this.ids = ids;
this.meta49503 = meta49503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.add_component_49502.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_component_49502.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","add-component","app.main.data.workspace.libraries/add-component",-135663634);
}));

(app.main.data.workspace.libraries.add_component_49502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49504,meta49503__$1){
var self__ = this;
var _49504__$1 = this;
return (new app.main.data.workspace.libraries.add_component_49502(self__.id_ref,self__.ids,meta49503__$1));
}));

(app.main.data.workspace.libraries.add_component_49502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49504){
var self__ = this;
var _49504__$1 = this;
return self__.meta49503;
}));

(app.main.data.workspace.libraries.add_component_49502.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_component_49502.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = app.common.files.helpers.clean_loops(objects,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.ids,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state)));
var selected_objects = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49496_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49496_SHARP_);
}),selected);
var can_make_component = cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49497_SHARP_){
return app.common.types.container.valid_shape_for_component_QMARK_(objects,p1__49497_SHARP_);
}),selected_objects));
if(can_make_component){
return beicon.v2.core.of(app.main.data.workspace.libraries.add_component2.cljs$core$IFn$_invoke$arity$2(self__.id_ref,selected));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.libraries.add_component_49502(id_ref,ids,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.add_component.cljs$lang$maxFixedArity = 2);

/**
 * Add several new components to current file library, from the currently selected shapes.
 */
app.main.data.workspace.libraries.add_multiple_components = (function app$main$data$workspace$libraries$add_multiple_components(){
if((typeof app.main.data.workspace.libraries.add_multiple_components_49508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.add_multiple_components_49508 = (function (meta49509){
this.meta49509 = meta49509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.add_multiple_components_49508.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_multiple_components_49508.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","add-multiple-components","app.main.data.workspace.libraries/add-multiple-components",1001418593);
}));

(app.main.data.workspace.libraries.add_multiple_components_49508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49510,meta49509__$1){
var self__ = this;
var _49510__$1 = this;
return (new app.main.data.workspace.libraries.add_multiple_components_49508(meta49509__$1));
}));

(app.main.data.workspace.libraries.add_multiple_components_49508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49510){
var self__ = this;
var _49510__$1 = this;
return self__.meta49509;
}));

(app.main.data.workspace.libraries.add_multiple_components_49508.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.add_multiple_components_49508.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = app.common.files.helpers.clean_loops(objects,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var selected_objects = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49506_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49506_SHARP_);
}),selected);
var can_make_component = cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49507_SHARP_){
return app.common.types.container.valid_shape_for_component_QMARK_(objects,p1__49507_SHARP_);
}),selected_objects));
var added_components = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return cljs.core.with_meta(app.main.data.workspace.libraries.add_component2.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),true], null));
}),selected);
var undo_id = Symbol();
if(can_make_component){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.from(added_components),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.libraries.add_multiple_components_49508(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Rename the component with the given id, in the current file library.
 */
app.main.data.workspace.libraries.rename_component = (function app$main$data$workspace$libraries$rename_component(id,new_name){
app.common.data.macros.runtime_assert("expected an uuid instance",(function (){
return cljs.core.uuid_QMARK_(id);
}));

app.common.data.macros.runtime_assert("expected string for new-name",(function (){
return typeof new_name === 'string';
}));

if((typeof app.main.data.workspace.libraries.rename_component_49511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.rename_component_49511 = (function (id,new_name,meta49512){
this.id = id;
this.new_name = new_name;
this.meta49512 = meta49512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.rename_component_49511.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_component_49511.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","rename-component","app.main.data.workspace.libraries/rename-component",-451245762);
}));

(app.main.data.workspace.libraries.rename_component_49511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49513,meta49512__$1){
var self__ = this;
var _49513__$1 = this;
return (new app.main.data.workspace.libraries.rename_component_49511(self__.id,self__.new_name,meta49512__$1));
}));

(app.main.data.workspace.libraries.rename_component_49511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49513){
var self__ = this;
var _49513__$1 = this;
return self__.meta49512;
}));

(app.main.data.workspace.libraries.rename_component_49511.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_component_49511.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var new_name__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(self__.new_name);
if(cuerdas.core.empty_QMARK_(new_name__$1)){
return beicon.v2.core.empty();
} else {
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.logic.libraries.generate_rename_component(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),self__.id,new_name__$1,data);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}
}));
}

return (new app.main.data.workspace.libraries.rename_component_49511(id,new_name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.rename_component_and_main_instance = (function app$main$data$workspace$libraries$rename_component_and_main_instance(component_id,name){
if((typeof app.main.data.workspace.libraries.rename_component_and_main_instance_49515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.rename_component_and_main_instance_49515 = (function (component_id,name,meta49516){
this.component_id = component_id;
this.name = name;
this.meta49516 = meta49516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.rename_component_and_main_instance_49515.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_component_and_main_instance_49515.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","rename-component-and-main-instance","app.main.data.workspace.libraries/rename-component-and-main-instance",1096064141);
}));

(app.main.data.workspace.libraries.rename_component_and_main_instance_49515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49517,meta49516__$1){
var self__ = this;
var _49517__$1 = this;
return (new app.main.data.workspace.libraries.rename_component_and_main_instance_49515(self__.component_id,self__.name,meta49516__$1));
}));

(app.main.data.workspace.libraries.rename_component_and_main_instance_49515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49517){
var self__ = this;
var _49517__$1 = this;
return self__.meta49516;
}));

(app.main.data.workspace.libraries.rename_component_and_main_instance_49515.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.rename_component_and_main_instance_49515.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var name__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(self__.name);
var clean_name = app.common.path_names.clean_path(name__$1);
var valid_QMARK_ = (((!(cuerdas.core.ends_with_QMARK_(name__$1,"/")))) && (((typeof clean_name === 'string') && ((!(cuerdas.core.blank_QMARK_(clean_name)))))));
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"components","components",-1073188942)),self__.component_id);
if(cljs.core.truth_((function (){var and__5023__auto__ = valid_QMARK_;
if(and__5023__auto__){
return component;
} else {
return and__5023__auto__;
}
})())){
var shape_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.libraries.rename_component(self__.component_id,clean_name)),(cljs.core.truth_((function (){var and__5023__auto__ = shape_id;
if(cljs.core.truth_(and__5023__auto__)){
return page_id;
} else {
return and__5023__auto__;
}
})())?beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (p1__49514_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49514_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),clean_name);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),true], null))):null));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.libraries.rename_component_and_main_instance_49515(component_id,name,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Create a new component copied from the one with the given id.
 */
app.main.data.workspace.libraries.duplicate_component = (function app$main$data$workspace$libraries$duplicate_component(var_args){
var G__49519 = arguments.length;
switch (G__49519) {
case 2:
return app.main.data.workspace.libraries.duplicate_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.libraries.duplicate_component.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.duplicate_component.cljs$core$IFn$_invoke$arity$2 = (function (library_id,component_id){
return app.main.data.workspace.libraries.duplicate_component.cljs$core$IFn$_invoke$arity$3(library_id,component_id,app.common.uuid.next());
}));

(app.main.data.workspace.libraries.duplicate_component.cljs$core$IFn$_invoke$arity$3 = (function (library_id,component_id,new_component_id){
if((typeof app.main.data.workspace.libraries.duplicate_component_49520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.duplicate_component_49520 = (function (library_id,component_id,new_component_id,meta49521){
this.library_id = library_id;
this.component_id = component_id;
this.new_component_id = new_component_id;
this.meta49521 = meta49521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.duplicate_component_49520.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.duplicate_component_49520.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","duplicate-component","app.main.data.workspace.libraries/duplicate-component",-736658175);
}));

(app.main.data.workspace.libraries.duplicate_component_49520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49522,meta49521__$1){
var self__ = this;
var _49522__$1 = this;
return (new app.main.data.workspace.libraries.duplicate_component_49520(self__.library_id,self__.component_id,self__.new_component_id,meta49521__$1));
}));

(app.main.data.workspace.libraries.duplicate_component_49520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49522){
var self__ = this;
var _49522__$1 = this;
return self__.meta49521;
}));

(app.main.data.workspace.libraries.duplicate_component_49520.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.duplicate_component_49520.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var libraries = app.main.data.helpers.lookup_libraries(state);
var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,self__.library_id);
var vec__49523 = app.common.logic.libraries.generate_duplicate_component(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,null),library,self__.component_id,self__.new_component_id);
var main_instance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49523,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49523,(1),null);
return beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main_instance)], null)], null)),app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.libraries.duplicate_component_49520(library_id,component_id,new_component_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.duplicate_component.cljs$lang$maxFixedArity = 3);

/**
 * Delete the component with the given id, from the current file library.
 */
app.main.data.workspace.libraries.delete_component = (function app$main$data$workspace$libraries$delete_component(p__49526){
var map__49527 = p__49526;
var map__49527__$1 = cljs.core.__destructure_map(map__49527);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49527__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
app.common.data.macros.runtime_assert("expected valid uuid for `id`",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.libraries.delete_component_49528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.delete_component_49528 = (function (p__49526,map__49527,id,meta49529){
this.p__49526 = p__49526;
this.map__49527 = map__49527;
this.id = id;
this.meta49529 = meta49529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.delete_component_49528.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_component_49528.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","delete-component","app.main.data.workspace.libraries/delete-component",1399838040);
}));

(app.main.data.workspace.libraries.delete_component_49528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49530,meta49529__$1){
var self__ = this;
var _49530__$1 = this;
return (new app.main.data.workspace.libraries.delete_component_49528(self__.p__49526,self__.map__49527,self__.id,meta49529__$1));
}));

(app.main.data.workspace.libraries.delete_component_49528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49530){
var self__ = this;
var _49530__$1 = this;
return self__.meta49529;
}));

(app.main.data.workspace.libraries.delete_component_49528.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.delete_component_49528.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(fdata,self__.id);
var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
var root_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
var page = app.main.data.helpers.get_page(fdata,page_id);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var undo_group = app.common.uuid.next();
var undo_id = Symbol();
var vec__49531 = app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$6(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),fdata,page,objects,cljs.core.PersistentHashSet.createAsIfByAssoc([root_id]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),undo_group,new cljs.core.Keyword(null,"undo-id","undo-id",-650073754),undo_id], null));
var all_parents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49531,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49531,(1),null);
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state),page_id,root_id,"component"),app.main.data.comments.detach_comment_thread(cljs.core.PersistentHashSet.createAsIfByAssoc([root_id])),app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),all_parents,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),undo_group], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.libraries.delete_component_49528(p__49526,map__49527__$1,id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Restore a deleted component, with the given id, in the given file library.
 */
app.main.data.workspace.libraries.restore_component = (function app$main$data$workspace$libraries$restore_component(library_id,component_id){
app.common.data.macros.runtime_assert("expr assert: (uuid? library-id)",(function (){
return cljs.core.uuid_QMARK_(library_id);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? component-id)",(function (){
return cljs.core.uuid_QMARK_(component_id);
}));

if((typeof app.main.data.workspace.libraries.restore_component_49534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.restore_component_49534 = (function (library_id,component_id,meta49535){
this.library_id = library_id;
this.component_id = component_id;
this.meta49535 = meta49535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.restore_component_49534.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.restore_component_49534.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","restore-component","app.main.data.workspace.libraries/restore-component",606822092);
}));

(app.main.data.workspace.libraries.restore_component_49534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49536,meta49535__$1){
var self__ = this;
var _49536__$1 = this;
return (new app.main.data.workspace.libraries.restore_component_49534(self__.library_id,self__.component_id,meta49535__$1));
}));

(app.main.data.workspace.libraries.restore_component_49534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49536){
var self__ = this;
var _49536__$1 = this;
return self__.meta49535;
}));

(app.main.data.workspace.libraries.restore_component_49534.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.restore_component_49534.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var current_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var local_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_file_id,self__.library_id);
var ldata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,self__.library_id);
var component = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ldata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_id], null));
var comp_page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
var comp_page = app.main.data.helpers.get_page(ldata,comp_page_id);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(comp_page);
var changes = app.common.logic.libraries.generate_restore_component(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),ldata,self__.component_id,self__.library_id,comp_page,objects);
var page_id = cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes)));
var frames = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes));
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),((local_QMARK_)?potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"ids","ids",-998535796),frames], null)):null));
}));
}

return (new app.main.data.workspace.libraries.restore_component_49534(library_id,component_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Restore multiple deleted component definded by a map with the component id as key and the component library as value
 */
app.main.data.workspace.libraries.restore_components = (function app$main$data$workspace$libraries$restore_components(components_data){
app.common.data.macros.runtime_assert("expr assert: (map? components-data)",(function (){
return cljs.core.map_QMARK_(components_data);
}));

if((typeof app.main.data.workspace.libraries.restore_components_49538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.restore_components_49538 = (function (components_data,meta49539){
this.components_data = components_data;
this.meta49539 = meta49539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.restore_components_49538.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.restore_components_49538.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","restore-components","app.main.data.workspace.libraries/restore-components",-2011030502);
}));

(app.main.data.workspace.libraries.restore_components_49538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49540,meta49539__$1){
var self__ = this;
var _49540__$1 = this;
return (new app.main.data.workspace.libraries.restore_components_49538(self__.components_data,meta49539__$1));
}));

(app.main.data.workspace.libraries.restore_components_49538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49540){
var self__ = this;
var _49540__$1 = this;
return self__.meta49539;
}));

(app.main.data.workspace.libraries.restore_components_49538.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.restore_components_49538.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.map((function (p1__49537_SHARP_){
return app.main.data.workspace.libraries.restore_component(cljs.core.val(p1__49537_SHARP_),cljs.core.key(p1__49537_SHARP_));
}),beicon.v2.core.from(self__.components_data)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.libraries.restore_components_49538(components_data,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Create a new shape in the current page, from the component with the given id
 *   in the given file library. Then selects the newly created instance.
 */
app.main.data.workspace.libraries.instantiate_component = (function app$main$data$workspace$libraries$instantiate_component(var_args){
var G__49542 = arguments.length;
switch (G__49542) {
case 3:
return app.main.data.workspace.libraries.instantiate_component.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.libraries.instantiate_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.instantiate_component.cljs$core$IFn$_invoke$arity$3 = (function (file_id,component_id,position){
return app.main.data.workspace.libraries.instantiate_component.cljs$core$IFn$_invoke$arity$4(file_id,component_id,position,null);
}));

(app.main.data.workspace.libraries.instantiate_component.cljs$core$IFn$_invoke$arity$4 = (function (file_id,component_id,position,p__49543){
var map__49544 = p__49543;
var map__49544__$1 = cljs.core.__destructure_map(map__49544);
var start_move_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49544__$1,new cljs.core.Keyword(null,"start-move?","start-move?",952844762));
var initial_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49544__$1,new cljs.core.Keyword(null,"initial-point","initial-point",-1460665937));
var id_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49544__$1,new cljs.core.Keyword(null,"id-ref","id-ref",349210285));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49544__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
app.common.data.macros.runtime_assert("expr assert: (uuid? file-id)",(function (){
return cljs.core.uuid_QMARK_(file_id);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? component-id)",(function (){
return cljs.core.uuid_QMARK_(component_id);
}));

app.common.data.macros.runtime_assert("expr assert: (gpt/point? position)",(function (){
return app.common.geom.point.point_QMARK_(position);
}));

if((typeof app.main.data.workspace.libraries.instantiate_component_49545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.instantiate_component_49545 = (function (start_move_QMARK_,file_id,map__49544,id_ref,initial_point,p__49543,component_id,origin,position,meta49546){
this.start_move_QMARK_ = start_move_QMARK_;
this.file_id = file_id;
this.map__49544 = map__49544;
this.id_ref = id_ref;
this.initial_point = initial_point;
this.p__49543 = p__49543;
this.component_id = component_id;
this.origin = origin;
this.position = position;
this.meta49546 = meta49546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.instantiate_component_49545.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.instantiate_component_49545.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","instantiate-component","app.main.data.workspace.libraries/instantiate-component",1762375279);
}));

(app.main.data.workspace.libraries.instantiate_component_49545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49547,meta49546__$1){
var self__ = this;
var _49547__$1 = this;
return (new app.main.data.workspace.libraries.instantiate_component_49545(self__.start_move_QMARK_,self__.file_id,self__.map__49544,self__.id_ref,self__.initial_point,self__.p__49543,self__.component_id,self__.origin,self__.position,meta49546__$1));
}));

(app.main.data.workspace.libraries.instantiate_component_49545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49547){
var self__ = this;
var _49547__$1 = this;
return self__.meta49546;
}));

(app.main.data.workspace.libraries.instantiate_component_49545.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.instantiate_component_49545.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var libraries = app.main.data.helpers.lookup_libraries(state);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var changes = app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page)),objects);
var current_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var vec__49548 = app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$7(changes,objects,self__.file_id,self__.component_id,self__.position,page,libraries);
var new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49548,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49548,(1),null);
var component = app.common.types.container.get_component_from_shape(new_shape,libraries);
var undo_id = Symbol();
if(cljs.core.truth_(self__.id_ref)){
cljs.core.reset_BANG_(self__.id_ref,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape));
} else {
}

return beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"use-library-component",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),self__.origin,new cljs.core.Keyword(null,"external-library","external-library",93332093),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.file_id,current_file_id),new cljs.core.Keyword(null,"is-variant","is-variant",-1643856989),app.common.types.component.is_variant_QMARK_(component)], null)),app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$1),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape)], null)], null)),app.main.data.workspace.selection.select_shapes(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape))),(cljs.core.truth_(self__.start_move_QMARK_)?app.main.data.workspace.transforms.start_move.cljs$core$IFn$_invoke$arity$2(self__.initial_point,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape)])):null),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.libraries.instantiate_component_49545(start_move_QMARK_,file_id,map__49544__$1,id_ref,initial_point,p__49543,component_id,origin,position,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.instantiate_component.cljs$lang$maxFixedArity = 4);

/**
 * Remove all references to components in the shape with the given id,
 *   and all its children, at the current page.
 */
app.main.data.workspace.libraries.detach_component = (function app$main$data$workspace$libraries$detach_component(id){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.libraries.detach_component_49551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.detach_component_49551 = (function (id,meta49552){
this.id = id;
this.meta49552 = meta49552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.detach_component_49551.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_component_49551.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","detach-component","app.main.data.workspace.libraries/detach-component",-292547169);
}));

(app.main.data.workspace.libraries.detach_component_49551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49553,meta49552__$1){
var self__ = this;
var _49553__$1 = this;
return (new app.main.data.workspace.libraries.detach_component_49551(self__.id,meta49552__$1));
}));

(app.main.data.workspace.libraries.detach_component_49551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49553){
var self__ = this;
var _49553__$1 = this;
return self__.meta49552;
}));

(app.main.data.workspace.libraries.detach_component_49551.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_component_49551.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var libraries = app.main.data.helpers.lookup_libraries(state);
var changes = app.common.logic.libraries.generate_detach_component(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),self__.id,fdata,page_id,libraries);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.libraries.detach_component_49551(id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Remove all references to components in the shapes with the given ids
 */
app.main.data.workspace.libraries.detach_components = (function app$main$data$workspace$libraries$detach_components(ids){
app.common.data.macros.runtime_assert("expr assert: (seq ids)",(function (){
return cljs.core.seq(ids);
}));

if((typeof app.main.data.workspace.libraries.detach_components_49555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.detach_components_49555 = (function (ids,meta49556){
this.ids = ids;
this.meta49556 = meta49556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.detach_components_49555.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_components_49555.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","detach-components","app.main.data.workspace.libraries/detach-components",-1294365757);
}));

(app.main.data.workspace.libraries.detach_components_49555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49557,meta49556__$1){
var self__ = this;
var _49557__$1 = this;
return (new app.main.data.workspace.libraries.detach_components_49555(self__.ids,meta49556__$1));
}));

(app.main.data.workspace.libraries.detach_components_49555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49557){
var self__ = this;
var _49557__$1 = this;
return self__.meta49556;
}));

(app.main.data.workspace.libraries.detach_components_49555.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_components_49555.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.map((function (p1__49554_SHARP_){
return app.main.data.workspace.libraries.detach_component(p1__49554_SHARP_);
}),beicon.v2.core.from(self__.ids)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.libraries.detach_components_49555(ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.detach_selected_components = (function (){
if((typeof app.main.data.workspace.libraries.detach_selected_components_49560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.detach_selected_components_49560 = (function (meta49561){
this.meta49561 = meta49561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.detach_selected_components_49560.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_selected_components_49560.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","detach-selected-components","app.main.data.workspace.libraries/detach-selected-components",952152488);
}));

(app.main.data.workspace.libraries.detach_selected_components_49560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49562,meta49561__$1){
var self__ = this;
var _49562__$1 = this;
return (new app.main.data.workspace.libraries.detach_selected_components_49560(meta49561__$1));
}));

(app.main.data.workspace.libraries.detach_selected_components_49560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49562){
var self__ = this;
var _49562__$1 = this;
return self__.meta49561;
}));

(app.main.data.workspace.libraries.detach_selected_components_49560.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_selected_components_49560.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var libraries = app.main.data.helpers.lookup_libraries(state);
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var selected = app.common.files.helpers.clean_loops(objects,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var selected_objects = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49558_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49558_SHARP_);
}),selected);
var copies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.component.in_component_copy_QMARK_,selected_objects);
var can_detach_QMARK_ = ((cljs.core.seq(copies)) && (cljs.core.every_QMARK_((function (p1__49559_SHARP_){
return cljs.core.not(app.common.types.container.has_any_copy_parent_QMARK_(objects,p1__49559_SHARP_));
}),selected_objects)));
var changes = ((can_detach_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes,id){
return app.common.logic.libraries.generate_detach_component(changes,id,fdata,page_id,libraries);
}),app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),selected):null);
return beicon.v2.core.of(((can_detach_QMARK_)?app.main.data.changes.commit_changes(changes):null));
}));
}

return (new app.main.data.workspace.libraries.detach_selected_components_49560(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.libraries.go_to_component_file = (function app$main$data$workspace$libraries$go_to_component_file(file_id,component,update_layout_QMARK_){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","expected an uuid for `file-id`","\n","(uuid? file-id)"].join('')));
}

if(cljs.core.truth_(app.common.types.component.check_component(component))){
} else {
throw (new Error(["Assert failed: ","expected a valid component","\n","(ctk/check-component component)"].join('')));
}

if((typeof app.main.data.workspace.libraries.nav_to_component_file_49563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.nav_to_component_file_49563 = (function (file_id,component,update_layout_QMARK_,meta49564){
this.file_id = file_id;
this.component = component;
this.update_layout_QMARK_ = update_layout_QMARK_;
this.meta49564 = meta49564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.nav_to_component_file_49563.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.nav_to_component_file_49563.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","nav-to-component-file","app.main.data.workspace.libraries/nav-to-component-file",-98499692);
}));

(app.main.data.workspace.libraries.nav_to_component_file_49563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49565,meta49564__$1){
var self__ = this;
var _49565__$1 = this;
return (new app.main.data.workspace.libraries.nav_to_component_file_49563(self__.file_id,self__.component,self__.update_layout_QMARK_,meta49564__$1));
}));

(app.main.data.workspace.libraries.nav_to_component_file_49563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49565){
var self__ = this;
var _49565__$1 = this;
return self__.meta49564;
}));

(app.main.data.workspace.libraries.nav_to_component_file_49563.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.nav_to_component_file_49563.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.router.get_params(state),new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(self__.component)),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.component)),new cljs.core.Keyword(null,"update-layout","update-layout",-1904092183),self__.update_layout_QMARK_);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.main.router","new-window","app.main.router/new-window",1705407424),true], 0)));
}));
}

return (new app.main.data.workspace.libraries.nav_to_component_file_49563(file_id,component,update_layout_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.go_to_local_component = (function app$main$data$workspace$libraries$go_to_local_component(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49917 = arguments.length;
var i__5750__auto___49918 = (0);
while(true){
if((i__5750__auto___49918 < len__5749__auto___49917)){
args__5755__auto__.push((arguments[i__5750__auto___49918]));

var G__49919 = (i__5750__auto___49918 + (1));
i__5750__auto___49918 = G__49919;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.workspace.libraries.go_to_local_component.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.workspace.libraries.go_to_local_component.cljs$core$IFn$_invoke$arity$variadic = (function (p__49569){
var map__49570 = p__49569;
var map__49570__$1 = cljs.core.__destructure_map(map__49570);
var options = map__49570__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49570__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var additional_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49570__$1,new cljs.core.Keyword(null,"additional-ids","additional-ids",1987201277));
var update_layout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49570__$1,new cljs.core.Keyword(null,"update-layout?","update-layout?",-2012814935));
var retries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49570__$1,new cljs.core.Keyword(null,"retries","retries",1888092808),(0));
if((typeof app.main.data.workspace.libraries.go_to_local_component_49571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.go_to_local_component_49571 = (function (p__49569,map__49570,options,id,additional_ids,update_layout_QMARK_,retries,meta49572){
this.p__49569 = p__49569;
this.map__49570 = map__49570;
this.options = options;
this.id = id;
this.additional_ids = additional_ids;
this.update_layout_QMARK_ = update_layout_QMARK_;
this.retries = retries;
this.meta49572 = meta49572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.go_to_local_component_49571.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.go_to_local_component_49571.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","go-to-local-component","app.main.data.workspace.libraries/go-to-local-component",1322939461);
}));

(app.main.data.workspace.libraries.go_to_local_component_49571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49573,meta49572__$1){
var self__ = this;
var _49573__$1 = this;
return (new app.main.data.workspace.libraries.go_to_local_component_49571(self__.p__49569,self__.map__49570,self__.options,self__.id,self__.additional_ids,self__.update_layout_QMARK_,self__.retries,meta49572__$1));
}));

(app.main.data.workspace.libraries.go_to_local_component_49571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49573){
var self__ = this;
var _49573__$1 = this;
return self__.meta49572;
}));

(app.main.data.workspace.libraries.go_to_local_component_49571.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.go_to_local_component_49571.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var current_page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,current_page_id);
var select_and_zoom = (function (ids){
var parent_ids = (cljs.core.truth_(self__.update_layout_QMARK_)?cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__49566_SHARP_){
return new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__49566_SHARP_));
}),ids):null);
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.update_layout_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.empty_QMARK_(parent_ids)) && ((self__.retries < (8))));
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.delay((250),beicon.v2.core.of(app.main.data.workspace.libraries.go_to_local_component.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.options,new cljs.core.Keyword(null,"retries","retries",1888092808),(self__.retries + (1)))], 0))));
} else {
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.selection.select_shapes(ids),app.main.data.workspace.zoom.zoom_to_selected_shape),(cljs.core.truth_(self__.update_layout_QMARK_)?beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),parent_ids], null))):null));
}
});
var redirect_to_page = (function (page_id,ids){
return beicon.v2.core.merge(beicon.v2.core.mapcat((function (___$2){
return select_and_zoom(ids);
}),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.pages","initialize-page","app.main.data.workspace.pages/initialize-page",-80938988)),stream)))),beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], 0))));
});
var get_main_instance_id = (function (id__$1,page_id){
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"components","components",-1073188942)),id__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component),page_id)){
return new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
} else {
return null;
}
});
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"components","components",-1073188942)),self__.id);
if(cljs.core.truth_(temp__5825__auto__)){
var component = temp__5825__auto__;
var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
var shape_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
var additional_shape_ids = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__49567_SHARP_){
return get_main_instance_id(p1__49567_SHARP_,page_id);
}),self__.additional_ids);
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(shape_id),additional_shape_ids);
if((!((page_id == null)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,current_page_id)){
return select_and_zoom(ids);
} else {
return redirect_to_page(page_id,ids);
}
} else {
return null;
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.libraries.go_to_local_component_49571(p__49569,map__49570__$1,options,id,additional_ids,update_layout_QMARK_,retries,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.go_to_local_component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.workspace.libraries.go_to_local_component.cljs$lang$applyTo = (function (seq49568){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49568));
}));

app.main.data.workspace.libraries.library_thumbnails_fetched = (function app$main$data$workspace$libraries$library_thumbnails_fetched(thumbnails){
if((typeof app.main.data.workspace.libraries.library_thumbnails_fetched_49574 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.library_thumbnails_fetched_49574 = (function (thumbnails,meta49575){
this.thumbnails = thumbnails;
this.meta49575 = meta49575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.library_thumbnails_fetched_49574.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.library_thumbnails_fetched_49574.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","library-thumbnails-fetched","app.main.data.workspace.libraries/library-thumbnails-fetched",-1756832726);
}));

(app.main.data.workspace.libraries.library_thumbnails_fetched_49574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49576,meta49575__$1){
var self__ = this;
var _49576__$1 = this;
return (new app.main.data.workspace.libraries.library_thumbnails_fetched_49574(self__.thumbnails,meta49575__$1));
}));

(app.main.data.workspace.libraries.library_thumbnails_fetched_49574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49576){
var self__ = this;
var _49576__$1 = this;
return self__.meta49575;
}));

(app.main.data.workspace.libraries.library_thumbnails_fetched_49574.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.library_thumbnails_fetched_49574.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),cljs.core.merge,self__.thumbnails);
}));
}

return (new app.main.data.workspace.libraries.library_thumbnails_fetched_49574(thumbnails,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.fetch_library_thumbnails = (function app$main$data$workspace$libraries$fetch_library_thumbnails(library_id){
if((typeof app.main.data.workspace.libraries.fetch_library_thumbnails_49577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.fetch_library_thumbnails_49577 = (function (library_id,meta49578){
this.library_id = library_id;
this.meta49578 = meta49578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.fetch_library_thumbnails_49577.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.fetch_library_thumbnails_49577.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","fetch-library-thumbnails","app.main.data.workspace.libraries/fetch-library-thumbnails",-946653266);
}));

(app.main.data.workspace.libraries.fetch_library_thumbnails_49577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49579,meta49578__$1){
var self__ = this;
var _49579__$1 = this;
return (new app.main.data.workspace.libraries.fetch_library_thumbnails_49577(self__.library_id,meta49578__$1));
}));

(app.main.data.workspace.libraries.fetch_library_thumbnails_49577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49579){
var self__ = this;
var _49579__$1 = this;
return self__.meta49578;
}));

(app.main.data.workspace.libraries.fetch_library_thumbnails_49577.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.fetch_library_thumbnails_49577.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.workspace.libraries.library_thumbnails_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-object-thumbnails","get-file-object-thumbnails",574280650),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.library_id,new cljs.core.Keyword(null,"tag","tag",-1290361223),"component"], null)));
}));
}

return (new app.main.data.workspace.libraries.fetch_library_thumbnails_49577(library_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.ext_library_changed = (function app$main$data$workspace$libraries$ext_library_changed(library_id,modified_at,revn,changes){
if(cljs.core.uuid_QMARK_(library_id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for library-id","\n","(uuid? library-id)"].join('')));
}

if(cljs.core.truth_(app.common.files.changes.check_changes(changes))){
} else {
throw (new Error(["Assert failed: ","expected valid changes vector","\n","(ch/check-changes changes)"].join('')));
}

if((typeof app.main.data.workspace.libraries.ext_library_changed_49580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.ext_library_changed_49580 = (function (library_id,modified_at,revn,changes,meta49581){
this.library_id = library_id;
this.modified_at = modified_at;
this.revn = revn;
this.changes = changes;
this.meta49581 = meta49581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.ext_library_changed_49580.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.ext_library_changed_49580.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","ext-library-changed","app.main.data.workspace.libraries/ext-library-changed",278123498);
}));

(app.main.data.workspace.libraries.ext_library_changed_49580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49582,meta49581__$1){
var self__ = this;
var _49582__$1 = this;
return (new app.main.data.workspace.libraries.ext_library_changed_49580(self__.library_id,self__.modified_at,self__.revn,self__.changes,meta49581__$1));
}));

(app.main.data.workspace.libraries.ext_library_changed_49580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49582){
var self__ = this;
var _49582__$1 = this;
return self__.meta49581;
}));

(app.main.data.workspace.libraries.ext_library_changed_49580.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.ext_library_changed_49580.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.library_id], null),cljs.core.assoc,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),self__.modified_at,new cljs.core.Keyword(null,"revn","revn",-633391765),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.revn], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.library_id,new cljs.core.Keyword(null,"data","data",-232669377)], null),app.common.files.changes.process_changes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.changes], 0));
}));

(app.main.data.workspace.libraries.ext_library_changed_49580.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.ext_library_changed_49580.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper_s = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.libraries","ext-library-changed","app.main.data.workspace.libraries/ext-library-changed",278123498)),stream);
return beicon.v2.core.take_until(stopper_s,beicon.v2.core.merge(beicon.v2.core.map(app.main.data.workspace.libraries.fetch_library_thumbnails,beicon.v2.core.delay((5000),beicon.v2.core.of(self__.library_id)))));
}));
}

return (new app.main.data.workspace.libraries.ext_library_changed_49580(library_id,modified_at,revn,changes,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Cancels all modifications in the shape with the given id, and all its children, in
 *   the current page. Set all attributes equal to the ones in the linked component,
 *   and untouched.
 */
app.main.data.workspace.libraries.reset_component = (function app$main$data$workspace$libraries$reset_component(id){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.libraries.reset_component_49583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.reset_component_49583 = (function (id,meta49584){
this.id = id;
this.meta49584 = meta49584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.reset_component_49583.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.reset_component_49583.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","reset-component","app.main.data.workspace.libraries/reset-component",603206836);
}));

(app.main.data.workspace.libraries.reset_component_49583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49585,meta49584__$1){
var self__ = this;
var _49585__$1 = this;
return (new app.main.data.workspace.libraries.reset_component_49583(self__.id,meta49584__$1));
}));

(app.main.data.workspace.libraries.reset_component_49583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49585){
var self__ = this;
var _49585__$1 = this;
return self__.meta49584;
}));

(app.main.data.workspace.libraries.reset_component_49583.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.reset_component_49583.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"RESET-COMPONENT of shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id)], null)], null);
}),null)),null,null,"app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


var libraries = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(state);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file);
var container = app.common.types.container.get_container(data,new cljs.core.Keyword(null,"page","page",849072397),page_id);
var undo_id = Symbol();
var changes = app.common.logic.libraries.generate_reset_component(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),file,libraries,container,self__.id);
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"RESET-COMPONENT finished"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("js","rchanges","js/rchanges",1482699978),app.main.data.workspace.libraries.log_changes(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes),file)], null)], null);
}),null)),null,null,"app.main.data.workspace.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.libraries.reset_component_49583(id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Cancels all modifications in the shapes with the given ids
 */
app.main.data.workspace.libraries.reset_components = (function app$main$data$workspace$libraries$reset_components(ids){
app.common.data.macros.runtime_assert("expr assert: (seq ids)",(function (){
return cljs.core.seq(ids);
}));

if((typeof app.main.data.workspace.libraries.reset_components_49587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.reset_components_49587 = (function (ids,meta49588){
this.ids = ids;
this.meta49588 = meta49588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.reset_components_49587.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.reset_components_49587.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","reset-components","app.main.data.workspace.libraries/reset-components",2087889209);
}));

(app.main.data.workspace.libraries.reset_components_49587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49589,meta49588__$1){
var self__ = this;
var _49589__$1 = this;
return (new app.main.data.workspace.libraries.reset_components_49587(self__.ids,meta49588__$1));
}));

(app.main.data.workspace.libraries.reset_components_49587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49589){
var self__ = this;
var _49589__$1 = this;
return self__.meta49588;
}));

(app.main.data.workspace.libraries.reset_components_49587.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.reset_components_49587.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.map((function (p1__49586_SHARP_){
return app.main.data.workspace.libraries.reset_component(p1__49586_SHARP_);
}),beicon.v2.core.from(self__.ids)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.libraries.reset_components_49587(ids,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Modify the component linked to the shape with the given id, in the
 *   current page, so that all attributes of its shapes are equal to the
 *   shape and its children. Also set all attributes of the shape
 *   untouched.
 * 
 *   NOTE: It's possible that the component to update is defined in an
 *   external library file, so this function may cause to modify a file
 *   different of that the one we are currently editing.
 */
app.main.data.workspace.libraries.update_component = (function app$main$data$workspace$libraries$update_component(var_args){
var G__49597 = arguments.length;
switch (G__49597) {
case 1:
return app.main.data.workspace.libraries.update_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.libraries.update_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.update_component.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.main.data.workspace.libraries.update_component.cljs$core$IFn$_invoke$arity$2(id,null);
}));

(app.main.data.workspace.libraries.update_component.cljs$core$IFn$_invoke$arity$2 = (function (id,undo_group){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.libraries.update_component_49598 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.update_component_49598 = (function (id,undo_group,meta49599){
this.id = id;
this.undo_group = undo_group;
this.meta49599 = meta49599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.update_component_49598.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_component_49598.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","update-component","app.main.data.workspace.libraries/update-component",-1052916500);
}));

(app.main.data.workspace.libraries.update_component_49598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49600,meta49599__$1){
var self__ = this;
var _49600__$1 = this;
return (new app.main.data.workspace.libraries.update_component_49598(self__.id,self__.undo_group,meta49599__$1));
}));

(app.main.data.workspace.libraries.update_component_49598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49600){
var self__ = this;
var _49600__$1 = this;
return self__.meta49599;
}));

(app.main.data.workspace.libraries.update_component_49598.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_component_49598.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"UPDATE-COMPONENT of shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),self__.undo_group], null)], null);
}),null)),null,null,"app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var libraries = app.main.data.helpers.lookup_libraries(state);
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(state);
var fdata = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file);
var container = app.common.types.container.get_container(fdata,new cljs.core.Keyword(null,"page","page",849072397),page_id);
var shape = app.common.types.container.get_shape(container,self__.id);
if(app.common.types.component.instance_head_QMARK_(shape)){
var changes = app.common.logic.libraries.generate_sync_shape_inverse(app.common.files.changes_builder.with_container(app.common.files.changes_builder.set_undo_group(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),self__.undo_group),container),fdata,libraries,container,self__.id);
var ldata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape));
var xf_filter = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-change?","local-change?",619740746)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__49590_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49590_SHARP_,new cljs.core.Keyword(null,"local-change?","local-change?",619740746));
})));
var local_changes = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),(function (p1__49591_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf_filter,p1__49591_SHARP_);
})),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),(function (p1__49592_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf_filter,p1__49592_SHARP_);
}));
var xf_remove = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-change?","local-change?",619740746)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__49593_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49593_SHARP_,new cljs.core.Keyword(null,"local-change?","local-change?",619740746));
})));
var nonlocal_changes = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),(function (p1__49594_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf_remove,p1__49594_SHARP_);
})),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),(function (p1__49595_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf_remove,p1__49595_SHARP_);
}));
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"UPDATE-COMPONENT finished"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("js","local-changes","js/local-changes",936763287),app.main.data.workspace.libraries.log_changes(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(local_changes),fdata)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("js","nonlocal-changes","js/nonlocal-changes",-147626396),app.main.data.workspace.libraries.log_changes(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(nonlocal_changes),fdata)], null)], null);
}),null)),null,null,"app.main.data.workspace.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return beicon.v2.core.of(((cljs.core.seq(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(local_changes)))?app.main.data.changes.commit_changes(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local_changes,new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file))):null),((cljs.core.seq(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(nonlocal_changes)))?app.main.data.changes.commit_changes(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nonlocal_changes,new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ldata))):null));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.libraries.update_component_49598(id,undo_group,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.update_component.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.libraries.update_component_thumbnail_sync = (function app$main$data$workspace$libraries$update_component_thumbnail_sync(state,component_id,file_id,tag){
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(data,component_id);
var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
var root_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
return app.main.data.workspace.thumbnails.update_thumbnail(file_id,page_id,root_id,tag,"update-component-thumbnail-sync");
});
app.main.data.workspace.libraries.update_component_sync = (function app$main$data$workspace$libraries$update_component_sync(var_args){
var G__49602 = arguments.length;
switch (G__49602) {
case 2:
return app.main.data.workspace.libraries.update_component_sync.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.libraries.update_component_sync.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.update_component_sync.cljs$core$IFn$_invoke$arity$2 = (function (shape_id,file_id){
return app.main.data.workspace.libraries.update_component_sync.cljs$core$IFn$_invoke$arity$3(shape_id,file_id,null);
}));

(app.main.data.workspace.libraries.update_component_sync.cljs$core$IFn$_invoke$arity$3 = (function (shape_id,file_id,undo_group){
if((typeof app.main.data.workspace.libraries.update_component_sync_49603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.update_component_sync_49603 = (function (shape_id,file_id,undo_group,meta49604){
this.shape_id = shape_id;
this.file_id = file_id;
this.undo_group = undo_group;
this.meta49604 = meta49604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.update_component_sync_49603.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_component_sync_49603.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","update-component-sync","app.main.data.workspace.libraries/update-component-sync",1255755566);
}));

(app.main.data.workspace.libraries.update_component_sync_49603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49605,meta49604__$1){
var self__ = this;
var _49605__$1 = this;
return (new app.main.data.workspace.libraries.update_component_sync_49603(self__.shape_id,self__.file_id,self__.undo_group,meta49604__$1));
}));

(app.main.data.workspace.libraries.update_component_sync_49603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49605){
var self__ = this;
var _49605__$1 = this;
return self__.meta49604;
}));

(app.main.data.workspace.libraries.update_component_sync_49603.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_component_sync_49603.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var current_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var current_file_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_file_id,self__.file_id);
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var shape = app.common.types.container.get_shape(page,self__.shape_id);
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.libraries.update_component.cljs$core$IFn$_invoke$arity$2(self__.shape_id,self__.undo_group),app.main.data.workspace.libraries.update_component_thumbnail_sync(state,component_id,self__.file_id,"frame"),app.main.data.workspace.libraries.update_component_thumbnail_sync(state,component_id,self__.file_id,"component"),(app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5 ? app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5(current_file_id,self__.file_id,new cljs.core.Keyword(null,"components","components",-1073188942),component_id,self__.undo_group) : app.main.data.workspace.libraries.sync_file.call(null,current_file_id,self__.file_id,new cljs.core.Keyword(null,"components","components",-1073188942),component_id,self__.undo_group)),(((!(current_file_QMARK_)))?(app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5 ? app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5(self__.file_id,self__.file_id,new cljs.core.Keyword(null,"components","components",-1073188942),component_id,self__.undo_group) : app.main.data.workspace.libraries.sync_file.call(null,self__.file_id,self__.file_id,new cljs.core.Keyword(null,"components","components",-1073188942),component_id,self__.undo_group)):null),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.libraries.update_component_sync_49603(shape_id,file_id,undo_group,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.update_component_sync.cljs$lang$maxFixedArity = 3);

/**
 * Launch a sync of the current file and of the library file of the given component.
 */
app.main.data.workspace.libraries.launch_component_sync = (function app$main$data$workspace$libraries$launch_component_sync(var_args){
var G__49607 = arguments.length;
switch (G__49607) {
case 2:
return app.main.data.workspace.libraries.launch_component_sync.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.libraries.launch_component_sync.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.launch_component_sync.cljs$core$IFn$_invoke$arity$2 = (function (component_id,file_id){
return app.main.data.workspace.libraries.launch_component_sync.cljs$core$IFn$_invoke$arity$3(component_id,file_id,null);
}));

(app.main.data.workspace.libraries.launch_component_sync.cljs$core$IFn$_invoke$arity$3 = (function (component_id,file_id,undo_group){
if((typeof app.main.data.workspace.libraries.launch_component_sync_49608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.launch_component_sync_49608 = (function (component_id,file_id,undo_group,meta49609){
this.component_id = component_id;
this.file_id = file_id;
this.undo_group = undo_group;
this.meta49609 = meta49609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.launch_component_sync_49608.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.launch_component_sync_49608.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","launch-component-sync","app.main.data.workspace.libraries/launch-component-sync",-468570781);
}));

(app.main.data.workspace.libraries.launch_component_sync_49608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49610,meta49609__$1){
var self__ = this;
var _49610__$1 = this;
return (new app.main.data.workspace.libraries.launch_component_sync_49608(self__.component_id,self__.file_id,self__.undo_group,meta49609__$1));
}));

(app.main.data.workspace.libraries.launch_component_sync_49608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49610){
var self__ = this;
var _49610__$1 = this;
return self__.meta49609;
}));

(app.main.data.workspace.libraries.launch_component_sync_49608.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.launch_component_sync_49608.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var current_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),(app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5 ? app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5(current_file_id,self__.file_id,new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_id,self__.undo_group) : app.main.data.workspace.libraries.sync_file.call(null,current_file_id,self__.file_id,new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_id,self__.undo_group)),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_file_id,self__.file_id))?(app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5 ? app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5(self__.file_id,self__.file_id,new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_id,self__.undo_group) : app.main.data.workspace.libraries.sync_file.call(null,self__.file_id,self__.file_id,new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_id,self__.undo_group)):null),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.libraries.launch_component_sync_49608(component_id,file_id,undo_group,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.launch_component_sync.cljs$lang$maxFixedArity = 3);

/**
 * Update the thumbnail of the component with the given id, in the
 * current file and in the imported libraries.
 */
app.main.data.workspace.libraries.update_component_thumbnail = (function app$main$data$workspace$libraries$update_component_thumbnail(component_id,file_id){
if((typeof app.main.data.workspace.libraries.update_component_thumbnail_49611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.update_component_thumbnail_49611 = (function (component_id,file_id,meta49612){
this.component_id = component_id;
this.file_id = file_id;
this.meta49612 = meta49612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.update_component_thumbnail_49611.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_component_thumbnail_49611.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","update-component-thumbnail","app.main.data.workspace.libraries/update-component-thumbnail",1224427096);
}));

(app.main.data.workspace.libraries.update_component_thumbnail_49611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49613,meta49612__$1){
var self__ = this;
var _49613__$1 = this;
return (new app.main.data.workspace.libraries.update_component_thumbnail_49611(self__.component_id,self__.file_id,meta49612__$1));
}));

(app.main.data.workspace.libraries.update_component_thumbnail_49611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49613){
var self__ = this;
var _49613__$1 = this;
return self__.meta49612;
}));

(app.main.data.workspace.libraries.update_component_thumbnail_49611.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.update_component_thumbnail_49611.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.of(app.main.data.workspace.libraries.update_component_thumbnail_sync(state,self__.component_id,self__.file_id,"component"));
}));
}

return (new app.main.data.workspace.libraries.update_component_thumbnail_49611(component_id,file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.find_shape_index = (function app$main$data$workspace$libraries$find_shape_index(objects,id,shape_id){
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(object)){
var shapes = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(object);
var or__5025__auto__ = cljs.core.second(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49614_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_id,cljs.core.first(p1__49614_SHARP_));
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,shape){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape,index], null);
}),shapes))));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
} else {
return null;
}
});
/**
 * Swaps a component with another one
 */
app.main.data.workspace.libraries.component_swap = (function app$main$data$workspace$libraries$component_swap(shape,file_id,id_new_component,keep_touched_QMARK_){
app.common.data.macros.runtime_assert("expr assert: (uuid? id-new-component)",(function (){
return cljs.core.uuid_QMARK_(id_new_component);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? file-id)",(function (){
return cljs.core.uuid_QMARK_(file_id);
}));

if((typeof app.main.data.workspace.libraries.component_swap_49615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.component_swap_49615 = (function (shape,file_id,id_new_component,keep_touched_QMARK_,meta49616){
this.shape = shape;
this.file_id = file_id;
this.id_new_component = id_new_component;
this.keep_touched_QMARK_ = keep_touched_QMARK_;
this.meta49616 = meta49616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.component_swap_49615.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.component_swap_49615.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","component-swap","app.main.data.workspace.libraries/component-swap",-1342940411);
}));

(app.main.data.workspace.libraries.component_swap_49615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49617,meta49616__$1){
var self__ = this;
var _49617__$1 = this;
return (new app.main.data.workspace.libraries.component_swap_49615(self__.shape,self__.file_id,self__.id_new_component,self__.keep_touched_QMARK_,meta49616__$1));
}));

(app.main.data.workspace.libraries.component_swap_49615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49617){
var self__ = this;
var _49617__$1 = this;
return self__.meta49616;
}));

(app.main.data.workspace.libraries.component_swap_49615.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.component_swap_49615.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var libraries = app.main.data.helpers.lookup_libraries(state);
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(self__.shape));
var ldata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,self__.file_id);
var orig_shapes = (cljs.core.truth_(self__.keep_touched_QMARK_)?app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape)):null);
var target_cell = ((app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))?app.common.types.shape.layout.get_cell_by_shape_id(parent,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape)):null);
var index = app.main.data.workspace.libraries.find_shape_index(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(self__.shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape));
var keep_props_values = cljs.core.select_keys(self__.shape,app.common.types.component.swap_keep_attrs);
var undo_id = Symbol();
var undo_group = app.common.uuid.next();
var vec__49618 = app.common.logic.libraries.generate_component_swap(app.common.files.changes_builder.set_undo_group(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page)),undo_group),objects,self__.shape,ldata,page,libraries,self__.id_new_component,index,target_cell,keep_props_values,self__.keep_touched_QMARK_);
var new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49618,(0),null);
var all_parents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49618,(1),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49618,(2),null);
var updated_objects = app.common.files.changes_builder.get_objects(changes);
var new_children_ids = app.common.files.helpers.get_children_ids_with_self(updated_objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape));
var new_text_ids = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(updated_objects,id);
if(cljs.core.truth_(temp__5825__auto__)){
var child = temp__5825__auto__;
if(((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(child))))){
return id;
} else {
return null;
}
} else {
return null;
}
}),new_children_ids));
var vec__49621 = (cljs.core.truth_(self__.keep_touched_QMARK_)?app.common.logic.variants.generate_keep_touched(changes,new_shape,self__.shape,orig_shapes,page,libraries,ldata):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [changes,cljs.core.PersistentVector.EMPTY], null));
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49621,(0),null);
var parents_of_swapped = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49621,(1),null);
var update_layout_ids = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(all_parents,parents_of_swapped,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_children_ids], 0));
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$1),(cljs.core.truth_((function (){var and__5023__auto__ = app.main.features.active_feature_QMARK_(state,"render-wasm/v1");
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(new_text_ids);
} else {
return and__5023__auto__;
}
})())?app.main.data.workspace.wasm_text.resize_wasm_text_all(new_text_ids):null),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),update_layout_ids,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),undo_group], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id),app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape),false));
}));
}

return (new app.main.data.workspace.libraries.component_swap_49615(shape,file_id,id_new_component,keep_touched_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Swaps several components with another one
 */
app.main.data.workspace.libraries.component_multi_swap = (function app$main$data$workspace$libraries$component_multi_swap(shapes,file_id,id_new_component){
app.common.data.macros.runtime_assert("expr assert: (seq shapes)",(function (){
return cljs.core.seq(shapes);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? id-new-component)",(function (){
return cljs.core.uuid_QMARK_(id_new_component);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? file-id)",(function (){
return cljs.core.uuid_QMARK_(file_id);
}));

if((typeof app.main.data.workspace.libraries.component_multi_swap_49625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.component_multi_swap_49625 = (function (shapes,file_id,id_new_component,meta49626){
this.shapes = shapes;
this.file_id = file_id;
this.id_new_component = id_new_component;
this.meta49626 = meta49626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.component_multi_swap_49625.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.component_multi_swap_49625.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","component-multi-swap","app.main.data.workspace.libraries/component-multi-swap",-63161346);
}));

(app.main.data.workspace.libraries.component_multi_swap_49625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49627,meta49626__$1){
var self__ = this;
var _49627__$1 = this;
return (new app.main.data.workspace.libraries.component_multi_swap_49625(self__.shapes,self__.file_id,self__.id_new_component,meta49626__$1));
}));

(app.main.data.workspace.libraries.component_multi_swap_49625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49627){
var self__ = this;
var _49627__$1 = this;
return self__.meta49626;
}));

(app.main.data.workspace.libraries.component_multi_swap_49625.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.component_multi_swap_49625.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"component-swap"], null);
}));

(app.main.data.workspace.libraries.component_multi_swap_49625.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.component_multi_swap_49625.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var undo_id = Symbol();
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"COMPONENT-SWAP"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),app.main.data.workspace.libraries.debug_pretty_file(self__.file_id,state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id-new-component","id-new-component",-1833761545),self__.id_new_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-id","undo-id",-650073754),undo_id], null)], null);
}),null)),null,null,"app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.map((function (p1__49624_SHARP_){
return app.main.data.workspace.libraries.component_swap(p1__49624_SHARP_,self__.file_id,self__.id_new_component,false);
}),beicon.v2.core.from(self__.shapes)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)),beicon.v2.core.of(app.main.data.workspace.specialized_panel.open_specialized_panel(new cljs.core.Keyword(null,"component-swap","component-swap",-190693695))));
}));
}

return (new app.main.data.workspace.libraries.component_multi_swap_49625(shapes,file_id,id_new_component,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.valid_asset_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colors","colors",1157174732),null,new cljs.core.Keyword(null,"typographies","typographies",-482095730),null,new cljs.core.Keyword(null,"components","components",-1073188942),null], null), null);
app.main.data.workspace.libraries.set_updating_library = (function app$main$data$workspace$libraries$set_updating_library(updating_QMARK_){
if((typeof app.main.data.workspace.libraries.set_updating_library_49628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.set_updating_library_49628 = (function (updating_QMARK_,meta49629){
this.updating_QMARK_ = updating_QMARK_;
this.meta49629 = meta49629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.set_updating_library_49628.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.set_updating_library_49628.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","set-updating-library","app.main.data.workspace.libraries/set-updating-library",-1008288470);
}));

(app.main.data.workspace.libraries.set_updating_library_49628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49630,meta49629__$1){
var self__ = this;
var _49630__$1 = this;
return (new app.main.data.workspace.libraries.set_updating_library_49628(self__.updating_QMARK_,meta49629__$1));
}));

(app.main.data.workspace.libraries.set_updating_library_49628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49630){
var self__ = this;
var _49630__$1 = this;
return self__.meta49629;
}));

(app.main.data.workspace.libraries.set_updating_library_49628.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.set_updating_library_49628.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.updating_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"updating-library","updating-library",1829693573),true);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"updating-library","updating-library",1829693573));
}
}));
}

return (new app.main.data.workspace.libraries.set_updating_library_49628(updating_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Synchronize the given file from the given library. Walk through all
 *   shapes in all pages in the file that use some color, typography or
 *   component of the library, and copy the new values to the shapes. Do
 *   it also for shapes inside components of the local file library.
 * 
 *   If it's known that only one asset has changed, you can give its
 *   type and id, and only shapes that use it will be synced, thus avoiding
 *   a lot of unneeded checks.
 */
app.main.data.workspace.libraries.sync_file = (function app$main$data$workspace$libraries$sync_file(var_args){
var G__49633 = arguments.length;
switch (G__49633) {
case 2:
return app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$2 = (function (file_id,library_id){
return app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4(file_id,library_id,null,null);
}));

(app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$4 = (function (file_id,library_id,asset_type,asset_id){
return app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5(file_id,library_id,asset_type,asset_id,null);
}));

(app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$5 = (function (file_id,library_id,asset_type,asset_id,undo_group){
app.common.data.macros.runtime_assert("expr assert: (uuid? file-id)",(function (){
return cljs.core.uuid_QMARK_(file_id);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? library-id)",(function (){
return cljs.core.uuid_QMARK_(library_id);
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? asset-type) (contains? valid-asset-types asset-type))",(function (){
return (((asset_type == null)) || (cljs.core.contains_QMARK_(app.main.data.workspace.libraries.valid_asset_types,asset_type)));
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? asset-id) (uuid? asset-id))",(function (){
return (((asset_id == null)) || (cljs.core.uuid_QMARK_(asset_id)));
}));

if((typeof app.main.data.workspace.libraries.sync_file_49634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.sync_file_49634 = (function (file_id,library_id,asset_type,asset_id,undo_group,meta49635){
this.file_id = file_id;
this.library_id = library_id;
this.asset_type = asset_type;
this.asset_id = asset_id;
this.undo_group = undo_group;
this.meta49635 = meta49635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.sync_file_49634.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.sync_file_49634.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","sync-file","app.main.data.workspace.libraries/sync-file",-2095175456);
}));

(app.main.data.workspace.libraries.sync_file_49634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49636,meta49635__$1){
var self__ = this;
var _49636__$1 = this;
return (new app.main.data.workspace.libraries.sync_file_49634(self__.file_id,self__.library_id,self__.asset_type,self__.asset_id,self__.undo_group,meta49635__$1));
}));

(app.main.data.workspace.libraries.sync_file_49634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49636){
var self__ = this;
var _49636__$1 = this;
return self__.meta49635;
}));

(app.main.data.workspace.libraries.sync_file_49634.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.sync_file_49634.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.library_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state))) && ((self__.asset_id == null)))){
return app.common.data.assoc_in_when(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.library_id,new cljs.core.Keyword(null,"synced-at","synced-at",98622459)], null),app.common.time.now());
} else {
return state;
}
}));

(app.main.data.workspace.libraries.sync_file_49634.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.sync_file_49634.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
if((((!((self__.file_id == null)))) && ((!((self__.library_id == null)))))){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"SYNC-FILE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),app.main.data.workspace.libraries.debug_pretty_file(self__.file_id,state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),app.main.data.workspace.libraries.debug_pretty_file(self__.library_id,state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),self__.asset_type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset-id","asset-id",249736185),self__.asset_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),self__.undo_group], null)], null);
}),null)),null,null,"app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


var ldata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,self__.file_id);
var libraries = app.main.data.helpers.lookup_libraries(state);
var current_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.logic.libraries.generate_sync_file_changes(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),self__.undo_group,self__.asset_type,self__.file_id,self__.asset_id,self__.library_id,libraries,current_file_id);
var find_frames = (function (change){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49631_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49631_SHARP_,new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(change));
}),app.common.files.changes.frames_changed.cljs$core$IFn$_invoke$arity$2(ldata,change));
});
var updated_frames = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(find_frames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes)], 0)));
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"SYNC-FILE finished"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("js","rchanges","js/rchanges",1482699978),app.main.data.workspace.libraries.log_changes(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes),ldata)], null)], null);
}),null)),null,null,"app.main.data.workspace.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.libraries.set_updating_library(false),app.main.data.notifications.hide.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"sync-dialog","sync-dialog",918022418)], null)], 0))),((cljs.core.seq(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes)))?beicon.v2.core.of(app.main.data.changes.commit_changes(changes)):null),((cljs.core.empty_QMARK_(updated_frames))?null:(function (){var frames_by_page = cljs.core.group_by(new cljs.core.Keyword(null,"page-id","page-id",-872941168),updated_frames);
return beicon.v2.core.merge(beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49637){
var vec__49638 = p__49637;
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49638,(0),null);
var frames = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49638,(1),null);
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),frames),new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),self__.undo_group], null));
}),frames_by_page)),beicon.v2.core.mapcat((function (shape){
return beicon.v2.core.of(app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$4(self__.file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),"frame"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape),app.common.uuid.zero))?null:app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$4(self__.file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape),"frame")));
}),beicon.v2.core.from(updated_frames)));
})()),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.file_id,self__.library_id))?beicon.v2.core.concat(beicon.v2.core.timer((3000)),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-file-library-sync-status","update-file-library-sync-status",-1000632019),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"library-id","library-id",1790650983),self__.library_id], null))):null));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.libraries.sync_file_49634(file_id,library_id,asset_type,asset_id,undo_group,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.libraries.sync_file.cljs$lang$maxFixedArity = 5);

/**
 * Mark the file as ignore syncs. All library changes before this moment will not
 * ber notified to sync.
 */
app.main.data.workspace.libraries.ignore_sync = (function (){
if((typeof app.main.data.workspace.libraries.ignore_sync_49641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.ignore_sync_49641 = (function (meta49642){
this.meta49642 = meta49642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.ignore_sync_49641.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.ignore_sync_49641.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","ignore-sync","app.main.data.workspace.libraries/ignore-sync",1151565753);
}));

(app.main.data.workspace.libraries.ignore_sync_49641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49643,meta49642__$1){
var self__ = this;
var _49643__$1 = this;
return (new app.main.data.workspace.libraries.ignore_sync_49641(meta49642__$1));
}));

(app.main.data.workspace.libraries.ignore_sync_49641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49643){
var self__ = this;
var _49643__$1 = this;
return self__.meta49642;
}));

(app.main.data.workspace.libraries.ignore_sync_49641.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.ignore_sync_49641.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),file_id,new cljs.core.Keyword(null,"ignore-sync-until","ignore-sync-until",-722845166)], null),app.common.time.now());
}));

(app.main.data.workspace.libraries.ignore_sync_49641.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.ignore_sync_49641.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ignore-file-library-sync-status","ignore-file-library-sync-status",317750129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"date","date",-1463434462),app.common.time.now()], null)));
}));
}

return (new app.main.data.workspace.libraries.ignore_sync_49641(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Get a lazy sequence of all the assets of each type in the library that have
 *   been modified after the last sync of the library. The sync date may be
 *   overriden by providing a ignore-until parameter.
 */
app.main.data.workspace.libraries.assets_need_sync = (function app$main$data$workspace$libraries$assets_need_sync(var_args){
var G__49645 = arguments.length;
switch (G__49645) {
case 2:
return app.main.data.workspace.libraries.assets_need_sync.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.libraries.assets_need_sync.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.libraries.assets_need_sync.cljs$core$IFn$_invoke$arity$2 = (function (library,file_data){
return app.main.data.workspace.libraries.assets_need_sync.cljs$core$IFn$_invoke$arity$3(library,file_data,null);
}));

(app.main.data.workspace.libraries.assets_need_sync.cljs$core$IFn$_invoke$arity$3 = (function (library,file_data,ignore_until){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data))){
var sync_date = (function (){var x__5110__auto__ = new cljs.core.Keyword(null,"synced-at","synced-at",98622459).cljs$core$IFn$_invoke$arity$1(library);
var y__5111__auto__ = (function (){var or__5025__auto__ = ignore_until;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
if((new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(library) > sync_date)){
return app.common.types.file.used_assets_changed_since(file_data,library,sync_date);
} else {
return null;
}
} else {
return null;
}
}));

(app.main.data.workspace.libraries.assets_need_sync.cljs$lang$maxFixedArity = 3);

/**
 * Notify the user that there are updates in the libraries used by the
 * current file, and ask if he wants to update them now.
 */
app.main.data.workspace.libraries.notify_sync_file = (function app$main$data$workspace$libraries$notify_sync_file(){
if((typeof app.main.data.workspace.libraries.notify_sync_file_49649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.notify_sync_file_49649 = (function (meta49650){
this.meta49650 = meta49650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.notify_sync_file_49649.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.notify_sync_file_49649.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","notify-sync-file","app.main.data.workspace.libraries/notify-sync-file",-2008415410);
}));

(app.main.data.workspace.libraries.notify_sync_file_49649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49651,meta49650__$1){
var self__ = this;
var _49651__$1 = this;
return (new app.main.data.workspace.libraries.notify_sync_file_49649(meta49650__$1));
}));

(app.main.data.workspace.libraries.notify_sync_file_49649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49651){
var self__ = this;
var _49651__$1 = this;
return self__.meta49650;
}));

(app.main.data.workspace.libraries.notify_sync_file_49649.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.notify_sync_file_49649.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(state,file_id);
var file_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377));
var ignore_until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"ignore-sync-until","ignore-sync-until",-722845166));
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(state);
var libraries_need_sync = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49647_SHARP_){
return cljs.core.seq(app.main.data.workspace.libraries.assets_need_sync.cljs$core$IFn$_invoke$arity$3(p1__49647_SHARP_,file_data,ignore_until));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49646_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"library-of","library-of",-2050526569).cljs$core$IFn$_invoke$arity$1(p1__49646_SHARP_),file_id);
}),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450)))));
var do_more_info = (function (){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"libraries-dialog","libraries-dialog",-29719008),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"starting-tab","starting-tab",-1478861215),"updates",new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null));
});
var do_update = (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (library){
return app.main.data.workspace.libraries.sync_file.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library));
}),libraries_need_sync));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.hide());
});
var do_dismiss = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.libraries.ignore_sync,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.notifications.hide()], 0));
});
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(libraries_need_sync);
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(app.main.data.notifications.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.updates.there-are-updates"),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"inline-actions","inline-actions",-1590886374),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.updates.more-info"),new cljs.core.Keyword(null,"callback","callback",-705136228),do_more_info], null)], null),new cljs.core.Keyword(null,"cancel","cancel",-1964088360),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.updates.dismiss"),new cljs.core.Keyword(null,"callback","callback",-705136228),do_dismiss], null),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.updates.update"),new cljs.core.Keyword(null,"callback","callback",-705136228),do_update], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"sync-dialog","sync-dialog",918022418)], 0)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.libraries.notify_sync_file_49649(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Update the modified-at attribute of the component to now
 */
app.main.data.workspace.libraries.touch_component = (function app$main$data$workspace$libraries$touch_component(id){
app.common.data.macros.runtime_assert("expected valid uuid for `id`",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.libraries.touch_component_49661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.touch_component_49661 = (function (id,meta49662){
this.id = id;
this.meta49662 = meta49662;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.touch_component_49661.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.touch_component_49661.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","touch-component","app.main.data.workspace.libraries/touch-component",1998603176);
}));

(app.main.data.workspace.libraries.touch_component_49661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49663,meta49662__$1){
var self__ = this;
var _49663__$1 = this;
return (new app.main.data.workspace.libraries.touch_component_49661(self__.id,meta49662__$1));
}));

(app.main.data.workspace.libraries.touch_component_49661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49663){
var self__ = this;
var _49663__$1 = this;
return self__.meta49662;
}));

(app.main.data.workspace.libraries.touch_component_49661.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null);
}));

(app.main.data.workspace.libraries.touch_component_49661.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.touch_component_49661.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.update_component(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.id,(function (p1__49657_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49657_SHARP_,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),app.common.time.now());
}));
return beicon.v2.core.of(app.main.data.changes.commit_changes(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"origin","origin",1037372088),it__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false], null)));
}));
}

return (new app.main.data.workspace.libraries.touch_component_49661(id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Notify that the component with the given id has changed, so it needs to be updated
 * in the current file and in the copies. And also update its thumbnails.
 */
app.main.data.workspace.libraries.component_changed = (function app$main$data$workspace$libraries$component_changed(component_id,file_id,undo_group){
if((typeof app.main.data.workspace.libraries.component_changed_49667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.component_changed_49667 = (function (component_id,file_id,undo_group,meta49668){
this.component_id = component_id;
this.file_id = file_id;
this.undo_group = undo_group;
this.meta49668 = meta49668;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.component_changed_49667.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.component_changed_49667.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","component-changed","app.main.data.workspace.libraries/component-changed",242163013);
}));

(app.main.data.workspace.libraries.component_changed_49667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49669,meta49668__$1){
var self__ = this;
var _49669__$1 = this;
return (new app.main.data.workspace.libraries.component_changed_49667(self__.component_id,self__.file_id,self__.undo_group,meta49668__$1));
}));

(app.main.data.workspace.libraries.component_changed_49667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49669){
var self__ = this;
var _49669__$1 = this;
return self__.meta49668;
}));

(app.main.data.workspace.libraries.component_changed_49667.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.component_id,self__.file_id], null);
}));

(app.main.data.workspace.libraries.component_changed_49667.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.component_changed_49667.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.libraries.touch_component(self__.component_id),app.main.data.workspace.libraries.launch_component_sync.cljs$core$IFn$_invoke$arity$3(self__.component_id,self__.file_id,self__.undo_group));
}));
}

return (new app.main.data.workspace.libraries.component_changed_49667(component_id,file_id,undo_group,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Watch the state for changes that affect to any main instance. If a change is detected will throw
 *   an update-component-sync, so changes are immediately propagated to the component and copies.
 */
app.main.data.workspace.libraries.watch_component_changes = (function app$main$data$workspace$libraries$watch_component_changes(){
if((typeof app.main.data.workspace.libraries.watch_component_changes_49677 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.watch_component_changes_49677 = (function (meta49678){
this.meta49678 = meta49678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.watch_component_changes_49677.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.watch_component_changes_49677.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","watch-component-changes","app.main.data.workspace.libraries/watch-component-changes",726349778);
}));

(app.main.data.workspace.libraries.watch_component_changes_49677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49679,meta49678__$1){
var self__ = this;
var _49679__$1 = this;
return (new app.main.data.workspace.libraries.watch_component_changes_49677(meta49678__$1));
}));

(app.main.data.workspace.libraries.watch_component_changes_49677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49679){
var self__ = this;
var _49679__$1 = this;
return self__.meta49678;
}));

(app.main.data.workspace.libraries.watch_component_changes_49677.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.watch_component_changes_49677.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper_s = beicon.v2.core.filter((function (p1__49670_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.pages","finalize-page","app.main.data.workspace.pages/finalize-page",526513034),potok.v2.core.type(p1__49670_SHARP_))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.libraries","watch-component-changes","app.main.data.workspace.libraries/watch-component-changes",726349778),potok.v2.core.type(p1__49670_SHARP_))));
}),stream);
var workspace_data_s = beicon.v2.core.share(beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.workspace_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null)));
var workspace_buffer_s = beicon.v2.core.buffer.cljs$core$IFn$_invoke$arity$3((3),(1),beicon.v2.core.concat(beicon.v2.core.take((1),workspace_data_s),beicon.v2.core.take((1),workspace_data_s),workspace_data_s));
var changes_s = beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.filter((function (p1__49674_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__49674_SHARP_));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(app.main.data.changes.commit_QMARK_,stream))));
var check_changes = (function (p__49683){
var vec__49687 = p__49683;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49687,(0),null);
var vec__49690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49687,(1),null);
var old_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49690,(0),null);
var _mid_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49690,(1),null);
var _new_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49690,(2),null);
if(cljs.core.truth_(old_data)){
var map__49693 = event;
var map__49693__$1 = cljs.core.__destructure_map(map__49693);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var save_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853));
var undo_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846));
var changed_components = (((((file_id == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_data)))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.changes.components_changed,old_data),changes)):null);
if(app.common.data.not_empty_QMARK_(changed_components)){
if(cljs.core.truth_(save_undo_QMARK_)){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"detected component changes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,changed_components)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),undo_group], null)], null);
}),null)),null,null,"app.main.data.workspace.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return beicon.v2.core.map((function (p1__49675_SHARP_){
return app.main.data.workspace.libraries.component_changed(p1__49675_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_data),undo_group);
}),beicon.v2.core.from(changed_components));
} else {
return beicon.v2.core.map(app.main.data.workspace.libraries.touch_component,beicon.v2.core.from(changed_components));
}
} else {
return beicon.v2.core.empty();
}
} else {
return null;
}
});
var changes_s__$1 = beicon.v2.core.share(beicon.v2.core.mapcat(check_changes,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(workspace_buffer_s,changes_s)));
var notifier_s = beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"buffer initialized"], null)], null);
}),null)),null,null,"app.main.data.workspace.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

return null;
}),beicon.v2.core.debounce((5000),changes_s__$1));
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"component-thumbnails","component-thumbnails",96380471))){
return beicon.v2.core.take_until(stopper_s,beicon.v2.core.merge(changes_s__$1,beicon.v2.core.map((function (p__49695){
var vec__49696 = p__49695;
var component_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49696,(0),null);
var file_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49696,(1),null);
return app.main.data.workspace.libraries.update_component_thumbnail(component_id,file_id);
}),beicon.v2.core.mapcat((function (p1__49676_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,p1__49676_SHARP_);
}),beicon.v2.core.buffer_until(notifier_s,beicon.v2.core.map(cljs.core.deref,changes_s__$1))))));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.libraries.watch_component_changes_49677(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.set_file_shared = (function app$main$data$workspace$libraries$set_file_shared(id,is_shared){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error("Assert failed: (uuid? id)"));
}

if(cljs.core.boolean_QMARK_(is_shared)){
} else {
throw (new Error("Assert failed: (boolean? is-shared)"));
}

if((typeof app.main.data.workspace.libraries.set_file_shared_49699 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.set_file_shared_49699 = (function (id,is_shared,meta49700){
this.id = id;
this.is_shared = is_shared;
this.meta49700 = meta49700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.set_file_shared_49699.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.set_file_shared_49699.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","set-file-shared","app.main.data.workspace.libraries/set-file-shared",116618641);
}));

(app.main.data.workspace.libraries.set_file_shared_49699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49701,meta49700__$1){
var self__ = this;
var _49701__$1 = this;
return (new app.main.data.workspace.libraries.set_file_shared_49699(self__.id,self__.is_shared,meta49700__$1));
}));

(app.main.data.workspace.libraries.set_file_shared_49699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49701){
var self__ = this;
var _49701__$1 = this;
return self__.meta49700;
}));

(app.main.data.workspace.libraries.set_file_shared_49699.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.set_file_shared_49699.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace",new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"shared","shared",-384145993),self__.is_shared], null);
}));

(app.main.data.workspace.libraries.set_file_shared_49699.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.set_file_shared_49699.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.id], null),cljs.core.assoc,new cljs.core.Keyword(null,"is-shared","is-shared",2126511925),self__.is_shared);
}));

(app.main.data.workspace.libraries.set_file_shared_49699.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.set_file_shared_49699.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"is-shared","is-shared",2126511925),self__.is_shared], null);
return beicon.v2.core.concat(beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-file-shared","set-file-shared",1102909653),params)),(cljs.core.truth_(self__.is_shared)?(function (){var has_variants_QMARK_ = cljs.core.some(app.common.types.component.is_variant_QMARK_,cljs.core.vals(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state))));
if(cljs.core.truth_(has_variants_QMARK_)){
return beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"set-file-variants-shared",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace"], null)));
} else {
return beicon.v2.core.empty();
}
})():null));
}));
}

return (new app.main.data.workspace.libraries.set_file_shared_49699(id,is_shared,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.libraries_fetched = (function app$main$data$workspace$libraries$libraries_fetched(file_id,libraries){
if((typeof app.main.data.workspace.libraries.libraries_fetched_49703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.libraries_fetched_49703 = (function (file_id,libraries,meta49704){
this.file_id = file_id;
this.libraries = libraries;
this.meta49704 = meta49704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.libraries_fetched_49703.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.libraries_fetched_49703.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","libraries-fetched","app.main.data.workspace.libraries/libraries-fetched",626857502);
}));

(app.main.data.workspace.libraries.libraries_fetched_49703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49705,meta49704__$1){
var self__ = this;
var _49705__$1 = this;
return (new app.main.data.workspace.libraries.libraries_fetched_49703(self__.file_id,self__.libraries,meta49704__$1));
}));

(app.main.data.workspace.libraries.libraries_fetched_49703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49705){
var self__ = this;
var _49705__$1 = this;
return self__.meta49704;
}));

(app.main.data.workspace.libraries.libraries_fetched_49703.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.libraries_fetched_49703.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.merge,app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49702_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49702_SHARP_,new cljs.core.Keyword(null,"library-of","library-of",-2050526569),self__.file_id);
}),self__.libraries)));
}));
}

return (new app.main.data.workspace.libraries.libraries_fetched_49703(file_id,libraries,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.load_library_file = (function app$main$data$workspace$libraries$load_library_file(file_id,library_id){
if((typeof app.main.data.workspace.libraries.load_library_file_49706 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.load_library_file_49706 = (function (file_id,library_id,meta49707){
this.file_id = file_id;
this.library_id = library_id;
this.meta49707 = meta49707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.load_library_file_49706.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.load_library_file_49706.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","load-library-file","app.main.data.workspace.libraries/load-library-file",-1827833053);
}));

(app.main.data.workspace.libraries.load_library_file_49706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49708,meta49707__$1){
var self__ = this;
var _49708__$1 = this;
return (new app.main.data.workspace.libraries.load_library_file_49706(self__.file_id,self__.library_id,meta49707__$1));
}));

(app.main.data.workspace.libraries.load_library_file_49706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49708){
var self__ = this;
var _49708__$1 = this;
return self__.meta49707;
}));

(app.main.data.workspace.libraries.load_library_file_49706.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.load_library_file_49706.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336));
return beicon.v2.core.merge(beicon.v2.core.map((function (file){
return app.main.data.workspace.libraries.libraries_fetched(self__.file_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null));
}),beicon.v2.core.merge_map(app.main.features.pointer_map.resolve_file,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file","get-file",-588292783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.library_id,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1], null)))),beicon.v2.core.map((function (thumbnails){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),cljs.core.merge,thumbnails);
});
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-object-thumbnails","get-file-object-thumbnails",574280650),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.library_id,new cljs.core.Keyword(null,"tag","tag",-1290361223),"component"], null))));
}));
}

return (new app.main.data.workspace.libraries.load_library_file_49706(file_id,library_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.link_file_to_library = (function app$main$data$workspace$libraries$link_file_to_library(file_id,library_id){
if((typeof app.main.data.workspace.libraries.attach_library_49710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.attach_library_49710 = (function (file_id,library_id,meta49711){
this.file_id = file_id;
this.library_id = library_id;
this.meta49711 = meta49711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.attach_library_49710.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.attach_library_49710.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","attach-library","app.main.data.workspace.libraries/attach-library",245542385);
}));

(app.main.data.workspace.libraries.attach_library_49710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49712,meta49711__$1){
var self__ = this;
var _49712__$1 = this;
return (new app.main.data.workspace.libraries.attach_library_49710(self__.file_id,self__.library_id,meta49711__$1));
}));

(app.main.data.workspace.libraries.attach_library_49710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49712){
var self__ = this;
var _49712__$1 = this;
return self__.meta49711;
}));

(app.main.data.workspace.libraries.attach_library_49710.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.attach_library_49710.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"attach-library",new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"library-id","library-id",1790650983),self__.library_id], null);
}));

(app.main.data.workspace.libraries.attach_library_49710.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.attach_library_49710.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var libraries = new cljs.core.Keyword(null,"shared-files","shared-files",-929120284).cljs$core$IFn$_invoke$arity$1(state);
var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,self__.library_id);
var variants_count = cljs.core.count(new cljs.core.Keyword(null,"variants","variants",-176391100).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"library-summary","library-summary",908431551).cljs$core$IFn$_invoke$arity$1(library)));
var loaded_libraries = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49713){
var vec__49714 = p__49713;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49714,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49714,(1),null);
return (((new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(lib) == null)) || (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(lib))));
}),app.main.data.helpers.lookup_libraries(state))));
return beicon.v2.core.concat(beicon.v2.core.merge(beicon.v2.core.merge_map((function (libraries_to_load){
var $ = libraries_to_load;
var $__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(loaded_libraries,$);
var $__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2($__$1,self__.library_id);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49709_SHARP_){
return app.main.data.workspace.libraries.load_library_file(self__.file_id,p1__49709_SHARP_);
}),$__$2);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-file-to-library","link-file-to-library",448879413),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"library-id","library-id",1790650983),self__.library_id], null)))),beicon.v2.core.of((function (){
if((typeof app.main.data.workspace.libraries.attach_library_finished_49717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.attach_library_finished_49717 = (function (loaded_libraries,file_id,libraries,meta49711,library_id,_,state,library,variants_count,meta49718){
this.loaded_libraries = loaded_libraries;
this.file_id = file_id;
this.libraries = libraries;
this.meta49711 = meta49711;
this.library_id = library_id;
this._ = _;
this.state = state;
this.library = library;
this.variants_count = variants_count;
this.meta49718 = meta49718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.attach_library_finished_49717.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.attach_library_finished_49717.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","attach-library-finished","app.main.data.workspace.libraries/attach-library-finished",-109043980);
}));

(app.main.data.workspace.libraries.attach_library_finished_49717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49719,meta49718__$1){
var self__ = this;
var _49719__$1 = this;
return (new app.main.data.workspace.libraries.attach_library_finished_49717(self__.loaded_libraries,self__.file_id,self__.libraries,self__.meta49711,self__.library_id,self__._,self__.state,self__.library,self__.variants_count,meta49718__$1));
}));

(app.main.data.workspace.libraries.attach_library_finished_49717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49719){
var self__ = this;
var _49719__$1 = this;
return self__.meta49718;
}));
}

return (new app.main.data.workspace.libraries.attach_library_finished_49717(loaded_libraries,self__.file_id,libraries,self__.meta49711,self__.library_id,___$2,state,library,variants_count,cljs.core.PersistentArrayMap.EMPTY));
})()
),(((variants_count > (0)))?beicon.v2.core.map((function (library_usage){
return potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"attach-library-variants",new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"library-id","library-id",1790650983),self__.library_id,new cljs.core.Keyword(null,"variants-count","variants-count",-147525642),variants_count,new cljs.core.Keyword(null,"library-used-in","library-used-in",1633557054),new cljs.core.Keyword(null,"used-in","used-in",641553323).cljs$core$IFn$_invoke$arity$1(library_usage)], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-library-usage","get-library-usage",-1890750106),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.library_id], null))):null));
}));
}

return (new app.main.data.workspace.libraries.attach_library_49710(file_id,library_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.libraries.unlink_file_from_library = (function app$main$data$workspace$libraries$unlink_file_from_library(file_id,library_id){
if((typeof app.main.data.workspace.libraries.detach_library_49720 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.libraries.detach_library_49720 = (function (file_id,library_id,meta49721){
this.file_id = file_id;
this.library_id = library_id;
this.meta49721 = meta49721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.libraries.detach_library_49720.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_library_49720.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.libraries","detach-library","app.main.data.workspace.libraries/detach-library",527267229);
}));

(app.main.data.workspace.libraries.detach_library_49720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49722,meta49721__$1){
var self__ = this;
var _49722__$1 = this;
return (new app.main.data.workspace.libraries.detach_library_49720(self__.file_id,self__.library_id,meta49721__$1));
}));

(app.main.data.workspace.libraries.detach_library_49720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49722){
var self__ = this;
var _49722__$1 = this;
return self__.meta49721;
}));

(app.main.data.workspace.libraries.detach_library_49720.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_library_49720.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"detach-library",new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"library-id","library-id",1790650983),self__.library_id], null);
}));

(app.main.data.workspace.libraries.detach_library_49720.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_library_49720.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.dissoc,self__.library_id);
}));

(app.main.data.workspace.libraries.detach_library_49720.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.libraries.detach_library_49720.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"library-id","library-id",1790650983),self__.library_id], null);
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unlink-file-from-library","unlink-file-from-library",576056185),params));
}));
}

return (new app.main.data.workspace.libraries.detach_library_49720(file_id,library_id,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.libraries.js.map
