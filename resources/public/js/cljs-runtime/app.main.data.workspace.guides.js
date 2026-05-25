import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.page.js";
import "./app.main.data.changes.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.guides');
app.main.data.workspace.guides.update_guides = (function app$main$data$workspace$guides$update_guides(p__50420){
var map__50421 = p__50420;
var map__50421__$1 = cljs.core.__destructure_map(map__50421);
var guide = map__50421__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50421__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
app.common.data.macros.runtime_assert("expected valid guide",(function (){
return app.common.types.page.valid_guide_QMARK_(guide);
}));

if((typeof app.main.data.workspace.guides.update_guides_50422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.guides.update_guides_50422 = (function (p__50420,map__50421,guide,id,meta50423){
this.p__50420 = p__50420;
this.map__50421 = map__50421;
this.guide = guide;
this.id = id;
this.meta50423 = meta50423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.guides.update_guides_50422.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.update_guides_50422.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.guides","update-guides","app.main.data.workspace.guides/update-guides",1416907688);
}));

(app.main.data.workspace.guides.update_guides_50422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50424,meta50423__$1){
var self__ = this;
var _50424__$1 = this;
return (new app.main.data.workspace.guides.update_guides_50422(self__.p__50420,self__.map__50421,self__.guide,self__.id,meta50423__$1));
}));

(app.main.data.workspace.guides.update_guides_50422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50424){
var self__ = this;
var _50424__$1 = this;
return self__.meta50423;
}));

(app.main.data.workspace.guides.update_guides_50422.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.update_guides_50422.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.guide,new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"update-guide");
}));

(app.main.data.workspace.guides.update_guides_50422.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.update_guides_50422.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.set_guide(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page),self__.id,self__.guide);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.guides.update_guides_50422(p__50420,map__50421__$1,guide,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.guides.remove_guide = (function app$main$data$workspace$guides$remove_guide(p__50468){
var map__50469 = p__50468;
var map__50469__$1 = cljs.core.__destructure_map(map__50469);
var guide = map__50469__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50469__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
app.common.data.macros.runtime_assert("expected valid guide",(function (){
return app.common.types.page.valid_guide_QMARK_(guide);
}));

if((typeof app.main.data.workspace.guides.remove_guide_50472 !== 'undefined')){
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
app.main.data.workspace.guides.remove_guide_50472 = (function (p__50468,map__50469,guide,id,meta50473){
this.p__50468 = p__50468;
this.map__50469 = map__50469;
this.guide = guide;
this.id = id;
this.meta50473 = meta50473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.guides.remove_guide_50472.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.remove_guide_50472.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.guides","remove-guide","app.main.data.workspace.guides/remove-guide",1176689377);
}));

(app.main.data.workspace.guides.remove_guide_50472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50474,meta50473__$1){
var self__ = this;
var _50474__$1 = this;
return (new app.main.data.workspace.guides.remove_guide_50472(self__.p__50468,self__.map__50469,self__.guide,self__.id,meta50473__$1));
}));

(app.main.data.workspace.guides.remove_guide_50472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50474){
var self__ = this;
var _50474__$1 = this;
return self__.meta50473;
}));

(app.main.data.workspace.guides.remove_guide_50472.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.remove_guide_50472.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.guide;
}));

(app.main.data.workspace.guides.remove_guide_50472.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.remove_guide_50472.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var sdisj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-guides","workspace-guides",-728045274),new cljs.core.Keyword(null,"hover","hover",-341141711)], null),sdisj,self__.id);
}));

(app.main.data.workspace.guides.remove_guide_50472.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.remove_guide_50472.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.set_guide(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page),self__.id,null);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.guides.remove_guide_50472(p__50468,map__50469__$1,guide,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.guides.remove_guides = (function app$main$data$workspace$guides$remove_guides(ids){
app.common.data.macros.runtime_assert("expected a set of ids",(function (){
return cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids);
}));

if((typeof app.main.data.workspace.guides.remove_guides_50490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.guides.remove_guides_50490 = (function (ids,meta50491){
this.ids = ids;
this.meta50491 = meta50491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.guides.remove_guides_50490.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.remove_guides_50490.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.guides","remove-guides","app.main.data.workspace.guides/remove-guides",737489793);
}));

(app.main.data.workspace.guides.remove_guides_50490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50492,meta50491__$1){
var self__ = this;
var _50492__$1 = this;
return (new app.main.data.workspace.guides.remove_guides_50490(self__.ids,meta50491__$1));
}));

(app.main.data.workspace.guides.remove_guides_50490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50492){
var self__ = this;
var _50492__$1 = this;
return self__.meta50491;
}));

(app.main.data.workspace.guides.remove_guides_50490.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.remove_guides_50490.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var map__50499 = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var map__50499__$1 = cljs.core.__destructure_map(map__50499);
var page = map__50499__$1;
var guides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50499__$1,new cljs.core.Keyword(null,"guides","guides",-1398390510));
var guides__$1 = cljs.core.vals(cljs.core.select_keys(guides,self__.ids));
return beicon.v2.core.from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.guides.remove_guide,guides__$1));
}));
}

return (new app.main.data.workspace.guides.remove_guides_50490(ids,cljs.core.PersistentArrayMap.EMPTY));
});
potok.v2.core.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.main.data.workspace.guides","move-frame-guides","app.main.data.workspace.guides/move-frame-guides",1545364171),(function (_,args){
app.common.data.macros.runtime_assert("expected a coll of uuids",(function (){
return cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(args));
}));

if((typeof app.main.data.workspace.guides.move_frame_guides_50503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.guides.move_frame_guides_50503 = (function (_,args,meta50504){
this._ = _;
this.args = args;
this.meta50504 = meta50504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.guides.move_frame_guides_50503.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.move_frame_guides_50503.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.guides","move-frame-guides","app.main.data.workspace.guides/move-frame-guides",1545364171);
}));

(app.main.data.workspace.guides.move_frame_guides_50503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50505,meta50504__$1){
var self__ = this;
var _50505__$1 = this;
return (new app.main.data.workspace.guides.move_frame_guides_50503(self__._,self__.args,meta50504__$1));
}));

(app.main.data.workspace.guides.move_frame_guides_50503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50505){
var self__ = this;
var _50505__$1 = this;
return self__.meta50504;
}));

(app.main.data.workspace.guides.move_frame_guides_50503.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.move_frame_guides_50503.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (___$1,state,___$2){
var self__ = this;
var ___$3 = this;
var ids = new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(self__.args);
var object_modifiers = new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(self__.args);
var object_transforms = new cljs.core.Keyword(null,"transforms","transforms",793344554).cljs$core$IFn$_invoke$arity$1(self__.args);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var is_frame_QMARK_ = (function (id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"type","type",1174270348)], null)));
});
var frame_ids_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(is_frame_QMARK_),ids);
var build_move_event = (function (guide){
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(guide);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var modifier = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(object_modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(object_transforms,frame_id);
var frame_SINGLEQUOTE_ = (function (){var G__50511 = frame;
var G__50511__$1 = (((!((modifier == null))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__50511,modifier):G__50511);
if((!((transform == null)))){
return app.common.geom.shapes.apply_transform(G__50511__$1,transform);
} else {
return G__50511__$1;
}
})();
var moved = app.common.geom.point.to_vec(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame_SINGLEQUOTE_),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame_SINGLEQUOTE_)));
var guide__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(guide,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core._PLUS_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(moved,new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(guide)));
return app.main.data.workspace.guides.update_guides(guide__$1);
});
var guides = cljs.core.vals(new cljs.core.Keyword(null,"guides","guides",-1398390510).cljs$core$IFn$_invoke$arity$1(app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state)));
return beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_move_event,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frame_ids_QMARK_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)),guides)));
}));
}

return (new app.main.data.workspace.guides.move_frame_guides_50503(_,args,cljs.core.PersistentArrayMap.EMPTY));
}));
app.main.data.workspace.guides.set_hover_guide = (function app$main$data$workspace$guides$set_hover_guide(id,hover_QMARK_){
if((typeof app.main.data.workspace.guides.set_hover_guide_50514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.guides.set_hover_guide_50514 = (function (id,hover_QMARK_,meta50515){
this.id = id;
this.hover_QMARK_ = hover_QMARK_;
this.meta50515 = meta50515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.guides.set_hover_guide_50514.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.set_hover_guide_50514.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.guides","set-hover-guide","app.main.data.workspace.guides/set-hover-guide",-1998691670);
}));

(app.main.data.workspace.guides.set_hover_guide_50514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50516,meta50515__$1){
var self__ = this;
var _50516__$1 = this;
return (new app.main.data.workspace.guides.set_hover_guide_50514(self__.id,self__.hover_QMARK_,meta50515__$1));
}));

(app.main.data.workspace.guides.set_hover_guide_50514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50516){
var self__ = this;
var _50516__$1 = this;
return self__.meta50515;
}));

(app.main.data.workspace.guides.set_hover_guide_50514.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.guides.set_hover_guide_50514.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var sconj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
var sdisj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(self__.hover_QMARK_)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-guides","workspace-guides",-728045274),new cljs.core.Keyword(null,"hover","hover",-341141711)], null),sconj,self__.id);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-guides","workspace-guides",-728045274),new cljs.core.Keyword(null,"hover","hover",-341141711)], null),sdisj,self__.id);
}
}));
}

return (new app.main.data.workspace.guides.set_hover_guide_50514(id,hover_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.guides.js.map
