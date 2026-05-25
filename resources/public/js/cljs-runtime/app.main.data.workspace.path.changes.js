import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.types.path.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.path.state.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.changes');
/**
 * Generates changes to update the new content of the shape
 */
app.main.data.workspace.path.changes.generate_path_changes = (function app$main$data$workspace$path$changes$generate_path_changes(it,objects,page_id,shape,old_content,new_content){
if(app.common.types.path.content_QMARK_(old_content)){
} else {
throw (new Error("Assert failed: (path/content? old-content)"));
}

if(app.common.types.path.content_QMARK_(new_content)){
} else {
throw (new Error("Assert failed: (path/content? new-content)"));
}

var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var objects__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(objects,shape_id,(function (shape__$1){
return app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),old_content));
}));
var changes = app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it,page_id),objects__$1);
var new_content__$1 = app.common.types.path.content(new_content);
if((shape_id == null)){
return changes;
} else {
if(cljs.core.empty_QMARK_(new_content__$1)){
return app.common.files.changes_builder.resize_parents(app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2(changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null));
} else {
return app.common.files.changes_builder.resize_parents(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (shape__$1){
return app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),new_content__$1));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null));

}
}
});
app.main.data.workspace.path.changes.save_path_content = (function app$main$data$workspace$path$changes$save_path_content(var_args){
var G__49428 = arguments.length;
switch (G__49428) {
case 0:
return app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$1 = (function (p__49429){
var map__49430 = p__49429;
var map__49430__$1 = cljs.core.__destructure_map(map__49430);
var preserve_move_to = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49430__$1,new cljs.core.Keyword(null,"preserve-move-to","preserve-move-to",1880571212),false);
if((typeof app.main.data.workspace.path.changes.save_path_content_49432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.changes.save_path_content_49432 = (function (p__49429,map__49430,preserve_move_to,meta49433){
this.p__49429 = p__49429;
this.map__49430 = map__49430;
this.preserve_move_to = preserve_move_to;
this.meta49433 = meta49433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.changes.save_path_content_49432.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.changes.save_path_content_49432.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.changes","save-path-content","app.main.data.workspace.path.changes/save-path-content",-863862726);
}));

(app.main.data.workspace.path.changes.save_path_content_49432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49434,meta49433__$1){
var self__ = this;
var _49434__$1 = this;
return (new app.main.data.workspace.path.changes.save_path_content_49432(self__.p__49429,self__.map__49430,self__.preserve_move_to,meta49433__$1));
}));

(app.main.data.workspace.path.changes.save_path_content_49432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49434){
var self__ = this;
var _49434__$1 = this;
return self__.meta49433;
}));

(app.main.data.workspace.path.changes.save_path_content_49432.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.changes.save_path_content_49432.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var content__$1 = ((((cljs.core.not(self__.preserve_move_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.last(content)),new cljs.core.Keyword(null,"move-to","move-to",-127537048)))))?app.common.types.path.content(cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(content) - (1)),content)):app.common.types.path.content(content));
return app.main.data.workspace.path.state.set_content(state,content__$1);
}));

(app.main.data.workspace.path.changes.save_path_content_49432.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.changes.save_path_content_49432.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(local,new cljs.core.Keyword(null,"edition","edition",1337508089));
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(temp__5825__auto__)){
var shape = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(local,new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"old-content","old-content",1851086779));
if(cljs.core.truth_(temp__5825__auto____$1)){
var old_content = temp__5825__auto____$1;
var new_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224));
var changes = app.main.data.workspace.path.changes.generate_path_changes(it__$1,objects,page_id,shape,old_content,new_content);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
} else {
return null;
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.path.changes.save_path_content_49432(p__49429,map__49430__$1,preserve_move_to,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.path.changes.save_path_content.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.main.data.workspace.path.changes.js.map
