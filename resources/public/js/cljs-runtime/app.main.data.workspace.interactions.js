import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.logic.shapes.js";
import "./app.common.types.page.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.interactions.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.streams.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.interactions');
app.main.data.workspace.interactions.add_flow = (function app$main$data$workspace$interactions$add_flow(var_args){
var G__50582 = arguments.length;
switch (G__50582) {
case 1:
return app.main.data.workspace.interactions.add_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return app.main.data.workspace.interactions.add_flow.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.interactions.add_flow.cljs$core$IFn$_invoke$arity$1 = (function (starting_frame){
return app.main.data.workspace.interactions.add_flow.cljs$core$IFn$_invoke$arity$4(null,null,null,starting_frame);
}));

(app.main.data.workspace.interactions.add_flow.cljs$core$IFn$_invoke$arity$4 = (function (flow_id,page_id,name,starting_frame){
app.common.data.macros.runtime_assert("expect uuid",(function (){
return cljs.core.uuid_QMARK_(starting_frame);
}));

if((typeof app.main.data.workspace.interactions.add_flow_50608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.add_flow_50608 = (function (flow_id,page_id,name,starting_frame,meta50609){
this.flow_id = flow_id;
this.page_id = page_id;
this.name = name;
this.starting_frame = starting_frame;
this.meta50609 = meta50609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.add_flow_50608.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.add_flow_50608.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","add-flow","app.main.data.workspace.interactions/add-flow",1321840081);
}));

(app.main.data.workspace.interactions.add_flow_50608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50610,meta50609__$1){
var self__ = this;
var _50610__$1 = this;
return (new app.main.data.workspace.interactions.add_flow_50608(self__.flow_id,self__.page_id,self__.name,self__.starting_frame,meta50609__$1));
}));

(app.main.data.workspace.interactions.add_flow_50608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50610){
var self__ = this;
var _50610__$1 = this;
return self__.meta50609;
}));

(app.main.data.workspace.interactions.add_flow_50608.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.add_flow_50608.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = (cljs.core.truth_(self__.page_id)?app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$2(state,self__.page_id):app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state));
var unames = app.common.files.helpers.get_used_names(cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"flows","flows",-1369576628))));
var name__$1 = (function (){var or__5025__auto__ = self__.name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic("Flow",unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"immediate-suffix?","immediate-suffix?",-127830647),true], 0));
}
})();
var flow_id__$1 = (function (){var or__5025__auto__ = self__.flow_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})();
var flow = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),flow_id__$1,new cljs.core.Keyword(null,"name","name",1843675177),name__$1,new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271),self__.starting_frame], null);
return beicon.v2.core.of(app.main.data.changes.commit_changes(app.common.files.changes_builder.set_flow(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page),flow_id__$1,flow)));
}));
}

return (new app.main.data.workspace.interactions.add_flow_50608(flow_id,page_id,name,starting_frame,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.interactions.add_flow.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.interactions.add_flow_selected_frame = (function app$main$data$workspace$interactions$add_flow_selected_frame(){
if((typeof app.main.data.workspace.interactions.add_flow_selected_frame_50624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.add_flow_selected_frame_50624 = (function (meta50625){
this.meta50625 = meta50625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.add_flow_selected_frame_50624.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.add_flow_selected_frame_50624.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","add-flow-selected-frame","app.main.data.workspace.interactions/add-flow-selected-frame",-93942544);
}));

(app.main.data.workspace.interactions.add_flow_selected_frame_50624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50626,meta50625__$1){
var self__ = this;
var _50626__$1 = this;
return (new app.main.data.workspace.interactions.add_flow_selected_frame_50624(meta50625__$1));
}));

(app.main.data.workspace.interactions.add_flow_selected_frame_50624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50626){
var self__ = this;
var _50626__$1 = this;
return self__.meta50625;
}));

(app.main.data.workspace.interactions.add_flow_selected_frame_50624.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.add_flow_selected_frame_50624.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-prototype-interaction"], null);
}));

(app.main.data.workspace.interactions.add_flow_selected_frame_50624.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.add_flow_selected_frame_50624.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.interactions.add_flow.cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected)));
}));
}

return (new app.main.data.workspace.interactions.add_flow_selected_frame_50624(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.interactions.remove_flow = (function app$main$data$workspace$interactions$remove_flow(var_args){
var G__50628 = arguments.length;
switch (G__50628) {
case 1:
return app.main.data.workspace.interactions.remove_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.interactions.remove_flow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.interactions.remove_flow.cljs$core$IFn$_invoke$arity$1 = (function (flow_id){
return app.main.data.workspace.interactions.remove_flow.cljs$core$IFn$_invoke$arity$2(null,flow_id);
}));

(app.main.data.workspace.interactions.remove_flow.cljs$core$IFn$_invoke$arity$2 = (function (page_id,flow_id){
app.common.data.macros.runtime_assert("expr assert: (uuid? flow-id)",(function (){
return cljs.core.uuid_QMARK_(flow_id);
}));

if((typeof app.main.data.workspace.interactions.remove_flow_50629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.remove_flow_50629 = (function (page_id,flow_id,meta50630){
this.page_id = page_id;
this.flow_id = flow_id;
this.meta50630 = meta50630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.remove_flow_50629.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.remove_flow_50629.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","remove-flow","app.main.data.workspace.interactions/remove-flow",-1699904987);
}));

(app.main.data.workspace.interactions.remove_flow_50629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50631,meta50630__$1){
var self__ = this;
var _50631__$1 = this;
return (new app.main.data.workspace.interactions.remove_flow_50629(self__.page_id,self__.flow_id,meta50630__$1));
}));

(app.main.data.workspace.interactions.remove_flow_50629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50631){
var self__ = this;
var _50631__$1 = this;
return self__.meta50630;
}));

(app.main.data.workspace.interactions.remove_flow_50629.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.remove_flow_50629.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = (cljs.core.truth_(self__.page_id)?app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$2(state,self__.page_id):app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.of(app.main.data.changes.commit_changes(app.common.files.changes_builder.set_flow(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page),self__.flow_id,null)));
}));
}

return (new app.main.data.workspace.interactions.remove_flow_50629(page_id,flow_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.interactions.remove_flow.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.interactions.update_flow = (function app$main$data$workspace$interactions$update_flow(page_id,flow_id,update_fn){
if(cljs.core.uuid_QMARK_(flow_id)){
} else {
throw (new Error(["Assert failed: ","expect valid flow-id","\n","(uuid? flow-id)"].join('')));
}

if(cljs.core.uuid_QMARK_(page_id)){
} else {
throw (new Error(["Assert failed: ","expect valid page-id","\n","(uuid? page-id)"].join('')));
}

if((typeof app.main.data.workspace.interactions.update_flow_50632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.update_flow_50632 = (function (page_id,flow_id,update_fn,meta50633){
this.page_id = page_id;
this.flow_id = flow_id;
this.update_fn = update_fn;
this.meta50633 = meta50633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.update_flow_50632.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.update_flow_50632.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","update-flow","app.main.data.workspace.interactions/update-flow",207732240);
}));

(app.main.data.workspace.interactions.update_flow_50632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50634,meta50633__$1){
var self__ = this;
var _50634__$1 = this;
return (new app.main.data.workspace.interactions.update_flow_50632(self__.page_id,self__.flow_id,self__.update_fn,meta50633__$1));
}));

(app.main.data.workspace.interactions.update_flow_50632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50634){
var self__ = this;
var _50634__$1 = this;
return self__.meta50633;
}));

(app.main.data.workspace.interactions.update_flow_50632.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.update_flow_50632.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = (cljs.core.truth_(self__.page_id)?app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$2(state,self__.page_id):app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state));
var flow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"flows","flows",-1369576628)),self__.flow_id);
var flow__$1 = (function (){var G__50635 = flow;
if((G__50635 == null)){
return null;
} else {
return (self__.update_fn.cljs$core$IFn$_invoke$arity$1 ? self__.update_fn.cljs$core$IFn$_invoke$arity$1(G__50635) : self__.update_fn.call(null,G__50635));
}
})();
if((!((flow__$1 == null)))){
return beicon.v2.core.of(app.main.data.changes.commit_changes(app.common.files.changes_builder.set_flow(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page),self__.flow_id,flow__$1)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.interactions.update_flow_50632(page_id,flow_id,update_fn,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.interactions.rename_flow = (function app$main$data$workspace$interactions$rename_flow(flow_id,name){
if(cljs.core.uuid_QMARK_(flow_id)){
} else {
throw (new Error(["Assert failed: ","expected valid flow-id","\n","(uuid? flow-id)"].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error(["Assert failed: ","expected valid name","\n","(string? name)"].join('')));
}

if((typeof app.main.data.workspace.interactions.rename_flow_50637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.rename_flow_50637 = (function (flow_id,name,meta50638){
this.flow_id = flow_id;
this.name = name;
this.meta50638 = meta50638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.rename_flow_50637.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.rename_flow_50637.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","rename-flow","app.main.data.workspace.interactions/rename-flow",423387319);
}));

(app.main.data.workspace.interactions.rename_flow_50637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50639,meta50638__$1){
var self__ = this;
var _50639__$1 = this;
return (new app.main.data.workspace.interactions.rename_flow_50637(self__.flow_id,self__.name,meta50638__$1));
}));

(app.main.data.workspace.interactions.rename_flow_50637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50639){
var self__ = this;
var _50639__$1 = this;
return self__.meta50638;
}));

(app.main.data.workspace.interactions.rename_flow_50637.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.rename_flow_50637.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.interactions.update_flow(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),self__.flow_id,(function (p1__50636_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50636_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),self__.name);
})));
}));
}

return (new app.main.data.workspace.interactions.rename_flow_50637(flow_id,name,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Check if some frame is origin or destination of any navigate interaction
 *   in the page
 */
app.main.data.workspace.interactions.connected_frame_QMARK_ = (function app$main$data$workspace$interactions$connected_frame_QMARK_(objects,frame_id){
var children = app.common.files.helpers.get_children_with_self(objects,frame_id);
var or__5025__auto__ = cljs.core.some(app.common.types.shape.interactions.flow_origin_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"interactions","interactions",550841811),children));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.some((function (p1__50646_SHARP_){
return app.common.types.shape.interactions.flow_to_QMARK_(p1__50646_SHARP_,frame_id);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"interactions","interactions",550841811),cljs.core.vals(objects)));
}
});
app.main.data.workspace.interactions.add_interaction = (function app$main$data$workspace$interactions$add_interaction(page_id,shape_id,interaction){
if((typeof app.main.data.workspace.interactions.add_interaction_50648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.add_interaction_50648 = (function (page_id,shape_id,interaction,meta50649){
this.page_id = page_id;
this.shape_id = shape_id;
this.interaction = interaction;
this.meta50649 = meta50649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.add_interaction_50648.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.add_interaction_50648.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","add-interaction","app.main.data.workspace.interactions/add-interaction",-1145468509);
}));

(app.main.data.workspace.interactions.add_interaction_50648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50650,meta50649__$1){
var self__ = this;
var _50650__$1 = this;
return (new app.main.data.workspace.interactions.add_interaction_50648(self__.page_id,self__.shape_id,self__.interaction,meta50649__$1));
}));

(app.main.data.workspace.interactions.add_interaction_50648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50650){
var self__ = this;
var _50650__$1 = this;
return self__.meta50649;
}));

(app.main.data.workspace.interactions.add_interaction_50648.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.add_interaction_50648.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.shape_id], null),(function (shape){
return app.common.logic.shapes.add_new_interaction(shape,self__.interaction);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id__$1], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(self__.interaction))?app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(self__.interaction)], null),app.common.logic.shapes.show_in_viewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id__$1], null)):null));
}));
}

return (new app.main.data.workspace.interactions.add_interaction_50648(page_id,shape_id,interaction,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.interactions.add_new_interaction = (function app$main$data$workspace$interactions$add_new_interaction(var_args){
var G__50653 = arguments.length;
switch (G__50653) {
case 1:
return app.main.data.workspace.interactions.add_new_interaction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.interactions.add_new_interaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.interactions.add_new_interaction.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.main.data.workspace.interactions.add_new_interaction.cljs$core$IFn$_invoke$arity$2(shape,null);
}));

(app.main.data.workspace.interactions.add_new_interaction.cljs$core$IFn$_invoke$arity$2 = (function (shape,destination){
if((typeof app.main.data.workspace.interactions.add_new_interaction_50655 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.add_new_interaction_50655 = (function (shape,destination,meta50656){
this.shape = shape;
this.destination = destination;
this.meta50656 = meta50656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.add_new_interaction_50655.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.add_new_interaction_50655.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","add-new-interaction","app.main.data.workspace.interactions/add-new-interaction",455178270);
}));

(app.main.data.workspace.interactions.add_new_interaction_50655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50657,meta50656__$1){
var self__ = this;
var _50657__$1 = this;
return (new app.main.data.workspace.interactions.add_new_interaction_50655(self__.shape,self__.destination,meta50656__$1));
}));

(app.main.data.workspace.interactions.add_new_interaction_50655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50657){
var self__ = this;
var _50657__$1 = this;
return self__.meta50656;
}));

(app.main.data.workspace.interactions.add_new_interaction_50655.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.add_new_interaction_50655.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$2(state,page_id);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"objects","objects",2099713734));
var frame = app.common.files.helpers.get_root_frame(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape));
var first_QMARK_ = cljs.core.not_any_QMARK_((function (p1__50651_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(p1__50651_SHARP_));
}),cljs.core.vals(objects));
var flows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"flows","flows",-1369576628));
var flow = app.common.types.page.get_frame_flow(flows,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape)], null),(function (shape__$1){
var new_interaction = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.shape.interactions.set_destination(app.common.types.shape.interactions.default_interaction,self__.destination),new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1));
return app.common.logic.shapes.add_new_interaction(shape__$1,new_interaction);
}))),(cljs.core.truth_(self__.destination)?beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.destination], null),app.common.logic.shapes.show_in_viewer)):null),((((cljs.core.not(app.main.data.workspace.interactions.connected_frame_QMARK_(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)))) && ((flow == null))))?beicon.v2.core.of(app.main.data.workspace.interactions.add_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame))):null),((first_QMARK_)?beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-prototype"], null))):beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-prototype-interaction"], null)))));
}));
}

return (new app.main.data.workspace.interactions.add_new_interaction_50655(shape,destination,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.interactions.add_new_interaction.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.interactions.remove_interaction = (function app$main$data$workspace$interactions$remove_interaction(var_args){
var G__50664 = arguments.length;
switch (G__50664) {
case 2:
return app.main.data.workspace.interactions.remove_interaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.interactions.remove_interaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.interactions.remove_interaction.cljs$core$IFn$_invoke$arity$2 = (function (shape,index){
return app.main.data.workspace.interactions.remove_interaction.cljs$core$IFn$_invoke$arity$3(null,shape,index);
}));

(app.main.data.workspace.interactions.remove_interaction.cljs$core$IFn$_invoke$arity$3 = (function (page_id,shape,index){
if((typeof app.main.data.workspace.interactions.remove_interaction_50665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.remove_interaction_50665 = (function (page_id,shape,index,meta50666){
this.page_id = page_id;
this.shape = shape;
this.index = index;
this.meta50666 = meta50666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.remove_interaction_50665.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.remove_interaction_50665.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","remove-interaction","app.main.data.workspace.interactions/remove-interaction",-171927642);
}));

(app.main.data.workspace.interactions.remove_interaction_50665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50667,meta50666__$1){
var self__ = this;
var _50667__$1 = this;
return (new app.main.data.workspace.interactions.remove_interaction_50665(self__.page_id,self__.shape,self__.index,meta50666__$1));
}));

(app.main.data.workspace.interactions.remove_interaction_50665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50667){
var self__ = this;
var _50667__$1 = this;
return self__.meta50666;
}));

(app.main.data.workspace.interactions.remove_interaction_50665.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.remove_interaction_50665.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape)], null),(function (shape__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape__$1,new cljs.core.Keyword(null,"interactions","interactions",550841811),app.common.types.shape.interactions.remove_interaction,self__.index);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)));
}));
}

return (new app.main.data.workspace.interactions.remove_interaction_50665(page_id,shape,index,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.interactions.remove_interaction.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.interactions.update_interaction = (function app$main$data$workspace$interactions$update_interaction(var_args){
var G__50670 = arguments.length;
switch (G__50670) {
case 3:
return app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$3 = (function (shape,index,update_fn){
return app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$4(shape,index,update_fn,null);
}));

(app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$4 = (function (shape,index,update_fn,options){
if((typeof app.main.data.workspace.interactions.update_interaction_50671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.update_interaction_50671 = (function (shape,index,update_fn,options,meta50672){
this.shape = shape;
this.index = index;
this.update_fn = update_fn;
this.options = options;
this.meta50672 = meta50672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.update_interaction_50671.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.update_interaction_50671.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","update-interaction","app.main.data.workspace.interactions/update-interaction",-1731234551);
}));

(app.main.data.workspace.interactions.update_interaction_50671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50673,meta50672__$1){
var self__ = this;
var _50673__$1 = this;
return (new app.main.data.workspace.interactions.update_interaction_50671(self__.shape,self__.index,self__.update_fn,self__.options,meta50672__$1));
}));

(app.main.data.workspace.interactions.update_interaction_50671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50673){
var self__ = this;
var _50673__$1 = this;
return self__.meta50672;
}));

(app.main.data.workspace.interactions.update_interaction_50671.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.update_interaction_50671.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var interactions = app.common.types.shape.interactions.update_interaction(new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(self__.shape),self__.index,self__.update_fn);
var interaction = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(interactions,self__.index);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.shape)], null),(function (shape__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(shape__$1,new cljs.core.Keyword(null,"interactions","interactions",550841811),app.common.types.shape.interactions.update_interaction,self__.index,self__.update_fn);
}),self__.options),(((!((new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction) == null))))?app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction)], null),app.common.logic.shapes.show_in_viewer,self__.options):null));
}));
}

return (new app.main.data.workspace.interactions.update_interaction_50671(shape,index,update_fn,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.interactions.update_interaction.cljs$lang$maxFixedArity = 4);

/**
 * Remove all interactions that navigate to the given frame.
 */
app.main.data.workspace.interactions.remove_all_interactions_nav_to = (function app$main$data$workspace$interactions$remove_all_interactions_nav_to(frame_id){
if((typeof app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676 = (function (frame_id,meta50677){
this.frame_id = frame_id;
this.meta50677 = meta50677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","remove-all-interactions-nav-to","app.main.data.workspace.interactions/remove-all-interactions-nav-to",-1166281130);
}));

(app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50678,meta50677__$1){
var self__ = this;
var _50678__$1 = this;
return (new app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676(self__.frame_id,meta50677__$1));
}));

(app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50678){
var self__ = this;
var _50678__$1 = this;
return self__.meta50677;
}));

(app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var remove_interactions_shape = (function (shape){
var interactions = new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape);
var new_interactions = app.common.types.shape.interactions.remove_interactions((function (p1__50675_SHARP_){
return app.common.types.shape.interactions.navs_to_QMARK_(p1__50675_SHARP_,self__.frame_id);
}),interactions);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(interactions),cljs.core.count(new_interactions))){
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),(function (shape__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"interactions","interactions",550841811),new_interactions);
}));
} else {
return null;
}
});
return beicon.v2.core.from(app.common.data.vec_without_nils(cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_interactions_shape,cljs.core.vals(objects))));
}));
}

return (new app.main.data.workspace.interactions.remove_all_interactions_nav_to_50676(frame_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.interactions.start_edit_interaction = (function app$main$data$workspace$interactions$start_edit_interaction(index){
if((typeof app.main.data.workspace.interactions.start_edit_interaction_50680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.start_edit_interaction_50680 = (function (index,meta50681){
this.index = index;
this.meta50681 = meta50681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.start_edit_interaction_50680.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.start_edit_interaction_50680.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","start-edit-interaction","app.main.data.workspace.interactions/start-edit-interaction",-740776923);
}));

(app.main.data.workspace.interactions.start_edit_interaction_50680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50682,meta50681__$1){
var self__ = this;
var _50682__$1 = this;
return (new app.main.data.workspace.interactions.start_edit_interaction_50680(self__.index,meta50681__$1));
}));

(app.main.data.workspace.interactions.start_edit_interaction_50680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50682){
var self__ = this;
var _50682__$1 = this;
return self__.meta50681;
}));

(app.main.data.workspace.interactions.start_edit_interaction_50680.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.start_edit_interaction_50680.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"editing-interaction-index","editing-interaction-index",1202734402)], null),self__.index);
}));

(app.main.data.workspace.interactions.start_edit_interaction_50680.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.start_edit_interaction_50680.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var initial_pos = cljs.core.deref(app.main.streams.mouse_position);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))){
return beicon.v2.core.concat(beicon.v2.core.map((function (p1__50679_SHARP_){
return (app.main.data.workspace.interactions.move_edit_interaction.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.interactions.move_edit_interaction.cljs$core$IFn$_invoke$arity$2(initial_pos,p1__50679_SHARP_) : app.main.data.workspace.interactions.move_edit_interaction.call(null,initial_pos,p1__50679_SHARP_));
}),beicon.v2.core.take_until(stopper,app.main.streams.mouse_position)),beicon.v2.core.of((app.main.data.workspace.interactions.finish_edit_interaction.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.interactions.finish_edit_interaction.cljs$core$IFn$_invoke$arity$2(self__.index,initial_pos) : app.main.data.workspace.interactions.finish_edit_interaction.call(null,self__.index,initial_pos))));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.interactions.start_edit_interaction_50680(index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.interactions.get_target_frame = (function app$main$data$workspace$interactions$get_target_frame(state,position){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var from_id = cljs.core.first(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var from_shape = app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$2(state,from_id);
var from_frame_id = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(from_shape))?from_id:new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(from_shape));
var target_frame = cljs.core.last(app.common.types.shape_tree.get_frames_by_position.cljs$core$IFn$_invoke$arity$2(objects,position));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_frame),app.common.uuid.zero)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_frame),from_frame_id)))){
return target_frame;
} else {
return null;
}
});
app.main.data.workspace.interactions.move_edit_interaction = (function app$main$data$workspace$interactions$move_edit_interaction(_initial_pos,position){
if((typeof app.main.data.workspace.interactions.move_edit_interaction_50683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.move_edit_interaction_50683 = (function (_initial_pos,position,meta50684){
this._initial_pos = _initial_pos;
this.position = position;
this.meta50684 = meta50684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.move_edit_interaction_50683.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.move_edit_interaction_50683.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","move-edit-interaction","app.main.data.workspace.interactions/move-edit-interaction",1984185751);
}));

(app.main.data.workspace.interactions.move_edit_interaction_50683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50685,meta50684__$1){
var self__ = this;
var _50685__$1 = this;
return (new app.main.data.workspace.interactions.move_edit_interaction_50683(self__._initial_pos,self__.position,meta50684__$1));
}));

(app.main.data.workspace.interactions.move_edit_interaction_50683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50685){
var self__ = this;
var _50685__$1 = this;
return self__.meta50684;
}));

(app.main.data.workspace.interactions.move_edit_interaction_50683.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.move_edit_interaction_50683.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var end_frame = app.main.data.workspace.interactions.get_target_frame(state,self__.position);
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"draw-interaction-to","draw-interaction-to",-518719969)], null),self__.position),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"draw-interaction-to-frame","draw-interaction-to-frame",1468971233)], null),end_frame);
}));
}

return (new app.main.data.workspace.interactions.move_edit_interaction_50683(_initial_pos,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.interactions.finish_edit_interaction = (function app$main$data$workspace$interactions$finish_edit_interaction(index,initial_pos){
if((typeof app.main.data.workspace.interactions.finish_edit_interaction_50687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.finish_edit_interaction_50687 = (function (index,initial_pos,meta50688){
this.index = index;
this.initial_pos = initial_pos;
this.meta50688 = meta50688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.finish_edit_interaction_50687.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.finish_edit_interaction_50687.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","finish-edit-interaction","app.main.data.workspace.interactions/finish-edit-interaction",1799182220);
}));

(app.main.data.workspace.interactions.finish_edit_interaction_50687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50689,meta50688__$1){
var self__ = this;
var _50689__$1 = this;
return (new app.main.data.workspace.interactions.finish_edit_interaction_50687(self__.index,self__.initial_pos,meta50688__$1));
}));

(app.main.data.workspace.interactions.finish_edit_interaction_50687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50689){
var self__ = this;
var _50689__$1 = this;
return self__.meta50688;
}));

(app.main.data.workspace.interactions.finish_edit_interaction_50687.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.finish_edit_interaction_50687.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"editing-interaction-index","editing-interaction-index",1202734402)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"draw-interaction-to","draw-interaction-to",-518719969)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"draw-interaction-to-frame","draw-interaction-to-frame",1468971233)], null),null);
}));

(app.main.data.workspace.interactions.finish_edit_interaction_50687.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.finish_edit_interaction_50687.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var position = cljs.core.deref(app.main.streams.mouse_position);
var target_frame = app.main.data.workspace.interactions.get_target_frame(state,position);
var shape_id = cljs.core.first(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var shape = app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$2(state,shape_id);
var change_interaction = (function (interaction){
var G__50690 = interaction;
var G__50690__$1 = ((cljs.core.not(app.common.types.shape.interactions.has_destination(interaction)))?app.common.types.shape.interactions.set_action_type(G__50690,new cljs.core.Keyword(null,"navigate","navigate",657596805)):G__50690);
return app.common.types.shape.interactions.set_destination(G__50690__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_frame));

});
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312).cljs$core$IFn$_invoke$arity$1(target_frame))?app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_frame)], null),(function (p1__50686_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50686_SHARP_,new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312));
})):null),(((((shape == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,self__.initial_pos)) || ((((self__.index == null)) && ((target_frame == null))))))))?null:(((((!((self__.index == null)))) && ((target_frame == null))))?app.main.data.workspace.interactions.remove_interaction.cljs$core$IFn$_invoke$arity$2(shape,self__.index):(((self__.index == null))?app.main.data.workspace.interactions.add_new_interaction.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_frame)):app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$3(shape,self__.index,change_interaction)
))),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.interactions.finish_edit_interaction_50687(index,initial_pos,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.interactions.start_move_overlay_pos = (function app$main$data$workspace$interactions$start_move_overlay_pos(index){
if((typeof app.main.data.workspace.interactions.start_move_overlay_pos_50697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.start_move_overlay_pos_50697 = (function (index,meta50698){
this.index = index;
this.meta50698 = meta50698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.start_move_overlay_pos_50697.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.start_move_overlay_pos_50697.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","start-move-overlay-pos","app.main.data.workspace.interactions/start-move-overlay-pos",-1138313803);
}));

(app.main.data.workspace.interactions.start_move_overlay_pos_50697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50699,meta50698__$1){
var self__ = this;
var _50699__$1 = this;
return (new app.main.data.workspace.interactions.start_move_overlay_pos_50697(self__.index,meta50698__$1));
}));

(app.main.data.workspace.interactions.start_move_overlay_pos_50697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50699){
var self__ = this;
var _50699__$1 = this;
return self__.meta50698;
}));

(app.main.data.workspace.interactions.start_move_overlay_pos_50697.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.start_move_overlay_pos_50697.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"move-overlay-to","move-overlay-to",1237478707)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"move-overlay-index","move-overlay-index",1594879653)], null),self__.index);
}));

(app.main.data.workspace.interactions.start_move_overlay_pos_50697.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.start_move_overlay_pos_50697.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var initial_pos = cljs.core.deref(app.main.streams.mouse_position);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))){
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state)));
var overlay_pos = new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interactions","interactions",550841811),self__.index], null)));
var orig_frame = app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(objects,shape);
var frame_pos = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(orig_frame),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(orig_frame));
var offset = app.common.geom.point.subtract(app.common.geom.point.subtract(initial_pos,overlay_pos),frame_pos);
return beicon.v2.core.concat(beicon.v2.core.map((function (p1__50695_SHARP_){
return (app.main.data.workspace.interactions.move_overlay_pos.cljs$core$IFn$_invoke$arity$3 ? app.main.data.workspace.interactions.move_overlay_pos.cljs$core$IFn$_invoke$arity$3(p1__50695_SHARP_,frame_pos,offset) : app.main.data.workspace.interactions.move_overlay_pos.call(null,p1__50695_SHARP_,frame_pos,offset));
}),beicon.v2.core.take_until(stopper,app.main.streams.mouse_position)),beicon.v2.core.of((app.main.data.workspace.interactions.finish_move_overlay_pos.cljs$core$IFn$_invoke$arity$3 ? app.main.data.workspace.interactions.finish_move_overlay_pos.cljs$core$IFn$_invoke$arity$3(self__.index,frame_pos,offset) : app.main.data.workspace.interactions.finish_move_overlay_pos.call(null,self__.index,frame_pos,offset))));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.interactions.start_move_overlay_pos_50697(index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.interactions.move_overlay_pos = (function app$main$data$workspace$interactions$move_overlay_pos(pos,frame_pos,offset){
if((typeof app.main.data.workspace.interactions.move_overlay_pos_50710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.move_overlay_pos_50710 = (function (pos,frame_pos,offset,meta50711){
this.pos = pos;
this.frame_pos = frame_pos;
this.offset = offset;
this.meta50711 = meta50711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.move_overlay_pos_50710.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.move_overlay_pos_50710.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","move-overlay-pos","app.main.data.workspace.interactions/move-overlay-pos",-610980627);
}));

(app.main.data.workspace.interactions.move_overlay_pos_50710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50712,meta50711__$1){
var self__ = this;
var _50712__$1 = this;
return (new app.main.data.workspace.interactions.move_overlay_pos_50710(self__.pos,self__.frame_pos,self__.offset,meta50711__$1));
}));

(app.main.data.workspace.interactions.move_overlay_pos_50710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50712){
var self__ = this;
var _50712__$1 = this;
return self__.meta50711;
}));

(app.main.data.workspace.interactions.move_overlay_pos_50710.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.move_overlay_pos_50710.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var pos__$1 = app.common.geom.point.subtract(app.common.geom.point.subtract(self__.pos,self__.frame_pos),self__.offset);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"move-overlay-to","move-overlay-to",1237478707)], null),pos__$1);
}));
}

return (new app.main.data.workspace.interactions.move_overlay_pos_50710(pos,frame_pos,offset,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.interactions.finish_move_overlay_pos = (function app$main$data$workspace$interactions$finish_move_overlay_pos(index,frame_pos,offset){
if((typeof app.main.data.workspace.interactions.finish_move_overlay_pos_50719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.interactions.finish_move_overlay_pos_50719 = (function (index,frame_pos,offset,meta50720){
this.index = index;
this.frame_pos = frame_pos;
this.offset = offset;
this.meta50720 = meta50720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.interactions.finish_move_overlay_pos_50719.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.finish_move_overlay_pos_50719.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.interactions","finish-move-overlay-pos","app.main.data.workspace.interactions/finish-move-overlay-pos",-1111758434);
}));

(app.main.data.workspace.interactions.finish_move_overlay_pos_50719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50721,meta50720__$1){
var self__ = this;
var _50721__$1 = this;
return (new app.main.data.workspace.interactions.finish_move_overlay_pos_50719(self__.index,self__.frame_pos,self__.offset,meta50720__$1));
}));

(app.main.data.workspace.interactions.finish_move_overlay_pos_50719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50721){
var self__ = this;
var _50721__$1 = this;
return self__.meta50720;
}));

(app.main.data.workspace.interactions.finish_move_overlay_pos_50719.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.finish_move_overlay_pos_50719.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.dissoc_in(app.common.data.dissoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"move-overlay-to","move-overlay-to",1237478707)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"move-overlay-index","move-overlay-index",1594879653)], null));
}));

(app.main.data.workspace.interactions.finish_move_overlay_pos_50719.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.interactions.finish_move_overlay_pos_50719.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var pos = cljs.core.deref(app.main.streams.mouse_position);
var overlay_pos = app.common.geom.point.subtract(app.common.geom.point.subtract(pos,self__.frame_pos),self__.offset);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state)));
var interactions = new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(shape);
var new_interactions = cljs.core.update.cljs$core$IFn$_invoke$arity$3(interactions,self__.index,(function (p1__50717_SHARP_){
return app.common.types.shape.interactions.set_overlay_position(p1__50717_SHARP_,overlay_pos);
}));
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),(function (p1__50718_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__50718_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactions","interactions",550841811),new_interactions], null)], 0));
})));
}));
}

return (new app.main.data.workspace.interactions.finish_move_overlay_pos_50719(index,frame_pos,offset,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.interactions.js.map
