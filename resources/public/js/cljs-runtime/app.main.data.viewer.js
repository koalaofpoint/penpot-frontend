import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.features.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.schema.js";
import "./app.common.transit.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.interactions.js";
import "./app.common.uuid.js";
import "./app.main.data.comments.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.fonts.js";
import "./app.main.features.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.util.globals.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.viewer');
app.main.data.viewer.default_local_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"comments-mode","comments-mode",-590013405),new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.Keyword(null,"file-comments-users","file-comments-users",1002954415),new cljs.core.Keyword(null,"interactions-mode","interactions-mode",-1234827377),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"show-interactions","show-interactions",622664467),new cljs.core.Keyword(null,"share-id","share-id",795821204),new cljs.core.Keyword(null,"comments-show","comments-show",1040621660)],[(1),new cljs.core.Keyword(null,"all","all",892129742),false,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"show-on-click","show-on-click",1549930356),null,false,"",new cljs.core.Keyword(null,"unresolved","unresolved",833458441)]);
app.main.data.viewer.schema_COLON_initialize = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"initialize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"share-id","share-id",795821204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null);
app.main.data.viewer.initialize = (function app$main$data$viewer$initialize(p__52699){
var map__52700 = p__52699;
var map__52700__$1 = cljs.core.__destructure_map(map__52700);
var params = map__52700__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52700__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var share_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52700__$1,new cljs.core.Keyword(null,"share-id","share-id",795821204));
app.common.data.macros.runtime_assert("expected valid params",(function (){
return app.common.schema.check(app.main.data.viewer.schema_COLON_initialize,params);
}));

if((typeof app.main.data.viewer.initialize_52701 !== 'undefined')){
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
app.main.data.viewer.initialize_52701 = (function (p__52699,map__52700,params,file_id,share_id,meta52702){
this.p__52699 = p__52699;
this.map__52700 = map__52700;
this.params = params;
this.file_id = file_id;
this.share_id = share_id;
this.meta52702 = meta52702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.initialize_52701.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.initialize_52701.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","initialize","app.main.data.viewer/initialize",-1196715997);
}));

(app.main.data.viewer.initialize_52701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52703,meta52702__$1){
var self__ = this;
var _52703__$1 = this;
return (new app.main.data.viewer.initialize_52701(self__.p__52699,self__.map__52700,self__.params,self__.file_id,self__.share_id,meta52702__$1));
}));

(app.main.data.viewer.initialize_52701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52703){
var self__ = this;
var _52703__$1 = this;
return self__.meta52702;
}));

(app.main.data.viewer.initialize_52701.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.initialize_52701.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404),self__.file_id),new cljs.core.Keyword(null,"current-share-id","current-share-id",-280704217),self__.share_id),new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),(function (lstate){
if((lstate == null)){
return app.main.data.viewer.default_local_state;
} else {
return lstate;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"share-id","share-id",795821204)], null),self__.share_id);
}));

(app.main.data.viewer.initialize_52701.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.initialize_52701.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.of((function (){var G__52706 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(self__.params);
return (app.main.data.viewer.fetch_bundle.cljs$core$IFn$_invoke$arity$1 ? app.main.data.viewer.fetch_bundle.cljs$core$IFn$_invoke$arity$1(G__52706) : app.main.data.viewer.fetch_bundle.call(null,G__52706));
})(),(((!((new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(state) == null))))?(app.main.data.viewer.fetch_comment_threads.cljs$core$IFn$_invoke$arity$1 ? app.main.data.viewer.fetch_comment_threads.cljs$core$IFn$_invoke$arity$1(self__.params) : app.main.data.viewer.fetch_comment_threads.call(null,self__.params)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(self__.params))?beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"shared-prototipe-visited"], null))):null));
}));

(app.main.data.viewer.initialize_52701.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.initialize_52701.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var name = ["viewer-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.file_id)].join('');
return (app.util.globals.global["name"] = name);
}));
}

return (new app.main.data.viewer.initialize_52701(p__52699,map__52700__$1,params,file_id,share_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.finalize = (function app$main$data$viewer$finalize(_){
if((typeof app.main.data.viewer.finalize_52713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.finalize_52713 = (function (_,meta52714){
this._ = _;
this.meta52714 = meta52714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.finalize_52713.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.finalize_52713.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","finalize","app.main.data.viewer/finalize",654031499);
}));

(app.main.data.viewer.finalize_52713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52715,meta52714__$1){
var self__ = this;
var _52715__$1 = this;
return (new app.main.data.viewer.finalize_52713(self__._,meta52714__$1));
}));

(app.main.data.viewer.finalize_52713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52715){
var self__ = this;
var _52715__$1 = this;
return self__.meta52714;
}));

(app.main.data.viewer.finalize_52713.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.finalize_52713.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (___$1,state){
var self__ = this;
var ___$2 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
}));
}

return (new app.main.data.viewer.finalize_52713(_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.schema_COLON_fetch_bundle = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"fetch-bundle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"share-id","share-id",795821204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null);
app.main.data.viewer.fetch_bundle = (function app$main$data$viewer$fetch_bundle(p__52717){
var map__52718 = p__52717;
var map__52718__$1 = cljs.core.__destructure_map(map__52718);
var params = map__52718__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52718__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var share_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52718__$1,new cljs.core.Keyword(null,"share-id","share-id",795821204));
app.common.data.macros.runtime_assert("expected valid params",(function (){
return app.common.schema.check(app.main.data.viewer.schema_COLON_fetch_bundle,params);
}));

if((typeof app.main.data.viewer.fetch_bundle_52719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.fetch_bundle_52719 = (function (p__52717,map__52718,params,file_id,share_id,meta52720){
this.p__52717 = p__52717;
this.map__52718 = map__52718;
this.params = params;
this.file_id = file_id;
this.share_id = share_id;
this.meta52720 = meta52720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.fetch_bundle_52719.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.fetch_bundle_52719.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","fetch-bundle","app.main.data.viewer/fetch-bundle",273986653);
}));

(app.main.data.viewer.fetch_bundle_52719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52721,meta52720__$1){
var self__ = this;
var _52721__$1 = this;
return (new app.main.data.viewer.fetch_bundle_52719(self__.p__52717,self__.map__52718,self__.params,self__.file_id,self__.share_id,meta52720__$1));
}));

(app.main.data.viewer.fetch_bundle_52719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52721){
var self__ = this;
var _52721__$1 = this;
return self__.meta52720;
}));

(app.main.data.viewer.fetch_bundle_52719.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.fetch_bundle_52719.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var features__$1 = app.common.features.supported_features;
var params_SINGLEQUOTE_ = (function (){var G__52728 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1], null);
if(cljs.core.uuid_QMARK_(self__.share_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52728,new cljs.core.Keyword(null,"share-id","share-id",795821204),self__.share_id);
} else {
return G__52728;
}
})();
var resolve = (function (p__52729){
var vec__52731 = p__52729;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(0),null);
var pointer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(1),null);
var params__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"fragment-id","fragment-id",216690564),cljs.core.deref(pointer)], null);
var params__$2 = (function (){var G__52734 = params__$1;
if(cljs.core.uuid_QMARK_(self__.share_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52734,new cljs.core.Keyword(null,"share-id","share-id",795821204),self__.share_id);
} else {
return G__52734;
}
})();
return beicon.v2.core.map((function (p1__52716_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__52716_SHARP_],null));
}),beicon.v2.core.map(new cljs.core.Keyword(null,"data","data",-232669377),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-fragment","get-file-fragment",-1236282386),params__$2)));
});
return beicon.v2.core.mapcat((function (p__52735){
var map__52736 = p__52735;
var map__52736__$1 = cljs.core.__destructure_map(map__52736);
var bundle = map__52736__$1;
var fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736__$1,new cljs.core.Keyword(null,"fonts","fonts",1683167295));
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52736__$1,new cljs.core.Keyword(null,"team","team",1355747699));
return beicon.v2.core.of(app.main.data.fonts.fonts_fetched(fonts),app.main.features.initialize(new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(team)),(function (){var G__52738 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bundle,self__.params], 0));
return (app.main.data.viewer.bundle_fetched.cljs$core$IFn$_invoke$arity$1 ? app.main.data.viewer.bundle_fetched.cljs$core$IFn$_invoke$arity$1(G__52738) : app.main.data.viewer.bundle_fetched.call(null,G__52738));
})());
}),beicon.v2.core.mapcat((function (bundle){
return beicon.v2.core.map((function (data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(bundle,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),data);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.merge_map((function (p__52740){
var vec__52741 = p__52740;
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52741,(0),null);
var object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52741,(1),null);
var kp = vec__52741;
if(app.common.transit.pointer_QMARK_(object)){
return resolve(kp);
} else {
return beicon.v2.core.of(kp);
}
}),beicon.v2.core.from(cljs.core.seq(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(bundle)))))));
}),beicon.v2.core.mapcat((function (bundle){
return beicon.v2.core.map((function (pages_index){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(bundle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.assoc,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),pages_index);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.merge_map((function (p__52745){
var vec__52746 = p__52745;
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52746,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52746,(1),null);
var kp = vec__52746;
if(app.common.transit.pointer_QMARK_(page)){
return resolve(kp);
} else {
return beicon.v2.core.of(kp);
}
}),beicon.v2.core.from(cljs.core.seq(new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(bundle))))))));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-view-only-bundle","get-view-only-bundle",477015725),params_SINGLEQUOTE_))));
}));
}

return (new app.main.data.viewer.fetch_bundle_52719(p__52717,map__52718__$1,params,file_id,share_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.bundle_fetched = (function app$main$data$viewer$bundle_fetched(p__52749){
var map__52750 = p__52749;
var map__52750__$1 = cljs.core.__destructure_map(map__52750);
var bundle = map__52750__$1;
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"team","team",1355747699));
var share_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"share-links","share-links",-307384490));
var libraries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"libraries","libraries",-303286011));
var users = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52750__$1,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572));
var pages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page_id){
var data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"frames","frames",1765687497),app.common.types.shape_tree.get_viewer_frames.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-frames","all-frames",-524337179),app.common.types.shape_tree.get_viewer_frames.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-frames?","all-frames?",-104533347),true], null))], 0))], null);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"pages","pages",-285406513))));
if((typeof app.main.data.viewer.bundle_fetched_52751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.bundle_fetched_52751 = (function (map__52750,p__52749,users,permissions,libraries,file,bundle,thumbnails,pages,project,team,share_links,meta52752){
this.map__52750 = map__52750;
this.p__52749 = p__52749;
this.users = users;
this.permissions = permissions;
this.libraries = libraries;
this.file = file;
this.bundle = bundle;
this.thumbnails = thumbnails;
this.pages = pages;
this.project = project;
this.team = team;
this.share_links = share_links;
this.meta52752 = meta52752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.bundle_fetched_52751.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.bundle_fetched_52751.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","bundle-fetched","app.main.data.viewer/bundle-fetched",-1017688155);
}));

(app.main.data.viewer.bundle_fetched_52751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52753,meta52752__$1){
var self__ = this;
var _52753__$1 = this;
return (new app.main.data.viewer.bundle_fetched_52751(self__.map__52750,self__.p__52749,self__.users,self__.permissions,self__.libraries,self__.file,self__.bundle,self__.thumbnails,self__.pages,self__.project,self__.team,self__.share_links,meta52752__$1));
}));

(app.main.data.viewer.bundle_fetched_52751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52753){
var self__ = this;
var _52753__$1 = this;
return self__.meta52752;
}));

(app.main.data.viewer.bundle_fetched_52751.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.bundle_fetched_52751.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var team_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.team);
var team__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.team,new cljs.core.Keyword(null,"members","members",159001018),self__.users);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"share-links","share-links",-307384490),self__.share_links),new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995),team_id),new cljs.core.Keyword(null,"teams","teams",1677714510),cljs.core.PersistentArrayMap.createAsIfByAssoc([team_id,team__$1])),new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),self__.libraries),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.file),self__.file)),new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"libraries","libraries",-303286011),app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),self__.libraries),new cljs.core.Keyword(null,"users","users",-713552705),app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),self__.users),new cljs.core.Keyword(null,"permissions","permissions",67803075),self__.permissions,new cljs.core.Keyword(null,"project","project",1124394579),self__.project,new cljs.core.Keyword(null,"pages","pages",-285406513),self__.pages,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),self__.thumbnails,new cljs.core.Keyword(null,"file","file",-1269645878),self__.file], null));
}));

(app.main.data.viewer.bundle_fetched_52751.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.bundle_fetched_52751.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state);
var qparams = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var index = (function (){var G__52754 = app.main.router.get_query_param(qparams,new cljs.core.Keyword(null,"index","index",-1531685915));
if((G__52754 == null)){
return null;
} else {
return cljs.core.parse_long(G__52754);
}
})();
var frame_id = (function (){var G__52755 = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(qparams);
if((G__52755 == null)){
return null;
} else {
return app.common.uuid.parse(G__52755);
}
})();
return beicon.v2.core.merge(beicon.v2.core.of((function (){var G__52756 = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(qparams);
switch (G__52756) {
case "fit":
return app.main.data.viewer.zoom_to_fit;

break;
case "fill":
return app.main.data.viewer.zoom_to_fill;

break;
default:
return null;

}
})()),beicon.v2.core.of((((!((frame_id == null))))?(app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$1 ? app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$1(frame_id) : app.main.data.viewer.go_to_frame.call(null,frame_id)):(((!((index == null))))?(app.main.data.viewer.go_to_frame_by_index.cljs$core$IFn$_invoke$arity$1 ? app.main.data.viewer.go_to_frame_by_index.cljs$core$IFn$_invoke$arity$1(index) : app.main.data.viewer.go_to_frame_by_index.call(null,index)):(app.main.data.viewer.go_to_frame_auto.cljs$core$IFn$_invoke$arity$0 ? app.main.data.viewer.go_to_frame_auto.cljs$core$IFn$_invoke$arity$0() : app.main.data.viewer.go_to_frame_auto.call(null))
))));
}));
}

return (new app.main.data.viewer.bundle_fetched_52751(map__52750__$1,p__52749,users,permissions,libraries,file,bundle,thumbnails,pages,project,team,share_links,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.fetch_comment_threads = (function app$main$data$viewer$fetch_comment_threads(p__52759){
var map__52760 = p__52759;
var map__52760__$1 = cljs.core.__destructure_map(map__52760);
var params = map__52760__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var share_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"share-id","share-id",795821204));
var fetched = (function app$main$data$viewer$fetch_comment_threads_$_fetched(data,state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52757_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__52757_SHARP_));
}),data)));
});
var on_error = (function app$main$data$viewer$fetch_comment_threads_$_on_error(p__52763){
var map__52764 = p__52763;
var map__52764__$1 = cljs.core.__destructure_map(map__52764);
var err = map__52764__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"authentication","authentication",1746273042),type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-found","not-found",-629079980),type)))){
return beicon.v2.core.empty();
} else {
return beicon.v2.core.throw$(err);
}
});
if((typeof app.main.data.viewer.fetch_comment_threads_52765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.fetch_comment_threads_52765 = (function (p__52759,map__52760,params,file_id,page_id,share_id,fetched,on_error,meta52766){
this.p__52759 = p__52759;
this.map__52760 = map__52760;
this.params = params;
this.file_id = file_id;
this.page_id = page_id;
this.share_id = share_id;
this.fetched = fetched;
this.on_error = on_error;
this.meta52766 = meta52766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.fetch_comment_threads_52765.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.fetch_comment_threads_52765.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","fetch-comment-threads","app.main.data.viewer/fetch-comment-threads",1999699180);
}));

(app.main.data.viewer.fetch_comment_threads_52765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52767,meta52766__$1){
var self__ = this;
var _52767__$1 = this;
return (new app.main.data.viewer.fetch_comment_threads_52765(self__.p__52759,self__.map__52760,self__.params,self__.file_id,self__.page_id,self__.share_id,self__.fetched,self__.on_error,meta52766__$1));
}));

(app.main.data.viewer.fetch_comment_threads_52765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52767){
var self__ = this;
var _52767__$1 = this;
return self__.meta52766;
}));

(app.main.data.viewer.fetch_comment_threads_52765.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.fetch_comment_threads_52765.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(self__.on_error,beicon.v2.core.map((function (p1__52758_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.fetched,p1__52758_SHARP_);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comment-threads","get-comment-threads",-138542175),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),self__.share_id], null))));
}));
}

return (new app.main.data.viewer.fetch_comment_threads_52765(p__52759,map__52760__$1,params,file_id,page_id,share_id,fetched,on_error,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.refresh_comment_thread = (function app$main$data$viewer$refresh_comment_thread(p__52769){
var map__52770 = p__52769;
var map__52770__$1 = cljs.core.__destructure_map(map__52770);
var thread = map__52770__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52770__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52770__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var fetched = (function app$main$data$viewer$refresh_comment_thread_$_fetched(thread__$1,state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),id], null),thread__$1);
});
if((typeof app.main.data.viewer.refresh_comment_thread_52771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.refresh_comment_thread_52771 = (function (p__52769,map__52770,thread,id,file_id,fetched,meta52772){
this.p__52769 = p__52769;
this.map__52770 = map__52770;
this.thread = thread;
this.id = id;
this.file_id = file_id;
this.fetched = fetched;
this.meta52772 = meta52772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.refresh_comment_thread_52771.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.refresh_comment_thread_52771.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","refresh-comment-thread","app.main.data.viewer/refresh-comment-thread",1116361530);
}));

(app.main.data.viewer.refresh_comment_thread_52771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52773,meta52772__$1){
var self__ = this;
var _52773__$1 = this;
return (new app.main.data.viewer.refresh_comment_thread_52771(self__.p__52769,self__.map__52770,self__.thread,self__.id,self__.file_id,self__.fetched,meta52772__$1));
}));

(app.main.data.viewer.refresh_comment_thread_52771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52773){
var self__ = this;
var _52773__$1 = this;
return self__.meta52772;
}));

(app.main.data.viewer.refresh_comment_thread_52771.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.refresh_comment_thread_52771.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map((function (p1__52768_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.fetched,p1__52768_SHARP_);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comment-thread","get-comment-thread",-378373473),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)));
}));
}

return (new app.main.data.viewer.refresh_comment_thread_52771(p__52769,map__52770__$1,thread,id,file_id,fetched,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.fetch_comments = (function app$main$data$viewer$fetch_comments(p__52775){
var map__52776 = p__52775;
var map__52776__$1 = cljs.core.__destructure_map(map__52776);
var thread_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52776__$1,new cljs.core.Keyword(null,"thread-id","thread-id",895608538));
if(cljs.core.uuid_QMARK_(thread_id)){
} else {
throw (new Error("Assert failed: (uuid? thread-id)"));
}

var fetched = (function app$main$data$viewer$fetch_comments_$_fetched(comments,state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.assoc,thread_id,app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),comments));
});
if((typeof app.main.data.viewer.retrieve_comments_52777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.retrieve_comments_52777 = (function (p__52775,map__52776,thread_id,fetched,meta52778){
this.p__52775 = p__52775;
this.map__52776 = map__52776;
this.thread_id = thread_id;
this.fetched = fetched;
this.meta52778 = meta52778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.retrieve_comments_52777.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.retrieve_comments_52777.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","retrieve-comments","app.main.data.viewer/retrieve-comments",-959966362);
}));

(app.main.data.viewer.retrieve_comments_52777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52779,meta52778__$1){
var self__ = this;
var _52779__$1 = this;
return (new app.main.data.viewer.retrieve_comments_52777(self__.p__52775,self__.map__52776,self__.thread_id,self__.fetched,meta52778__$1));
}));

(app.main.data.viewer.retrieve_comments_52777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52779){
var self__ = this;
var _52779__$1 = this;
return self__.meta52778;
}));

(app.main.data.viewer.retrieve_comments_52777.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.retrieve_comments_52777.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map((function (p1__52774_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.fetched,p1__52774_SHARP_);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comments","get-comments",1914340167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),self__.thread_id], null)));
}));
}

return (new app.main.data.viewer.retrieve_comments_52777(p__52775,map__52776__$1,thread_id,fetched,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.update_zoom_querystring = (function (){
if((typeof app.main.data.viewer.update_zoom_querystring_52782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.update_zoom_querystring_52782 = (function (meta52783){
this.meta52783 = meta52783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.update_zoom_querystring_52782.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.update_zoom_querystring_52782.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","update-zoom-querystring","app.main.data.viewer/update-zoom-querystring",-567729030);
}));

(app.main.data.viewer.update_zoom_querystring_52782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52784,meta52783__$1){
var self__ = this;
var _52784__$1 = this;
return (new app.main.data.viewer.update_zoom_querystring_52782(meta52783__$1));
}));

(app.main.data.viewer.update_zoom_querystring_52782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52784){
var self__ = this;
var _52784__$1 = this;
return self__.meta52783;
}));

(app.main.data.viewer.update_zoom_querystring_52782.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.update_zoom_querystring_52782.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var zoom_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom-type","zoom-type",-1936775769)], null));
var params = app.main.router.get_params(state);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom_type)));
}));
}

return (new app.main.data.viewer.update_zoom_querystring_52782(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.increase_zoom = (function (){
if((typeof app.main.data.viewer.increase_zoom_52786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.increase_zoom_52786 = (function (meta52787){
this.meta52787 = meta52787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.increase_zoom_52786.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.increase_zoom_52786.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","increase-zoom","app.main.data.viewer/increase-zoom",-1630925657);
}));

(app.main.data.viewer.increase_zoom_52786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52788,meta52787__$1){
var self__ = this;
var _52788__$1 = this;
return (new app.main.data.viewer.increase_zoom_52786(meta52787__$1));
}));

(app.main.data.viewer.increase_zoom_52786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52788){
var self__ = this;
var _52788__$1 = this;
return self__.meta52787;
}));

(app.main.data.viewer.increase_zoom_52786.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.increase_zoom_52786.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var increase = (function (p1__52785_SHARP_){
var x__5113__auto__ = (p1__52785_SHARP_ * 1.3);
var y__5114__auto__ = (200);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
});
return app.common.data.dissoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(increase,(1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom-type","zoom-type",-1936775769)], null));
}));
}

return (new app.main.data.viewer.increase_zoom_52786(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.decrease_zoom = (function (){
if((typeof app.main.data.viewer.decrease_zoom_52791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.decrease_zoom_52791 = (function (meta52792){
this.meta52792 = meta52792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.decrease_zoom_52791.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.decrease_zoom_52791.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","decrease-zoom","app.main.data.viewer/decrease-zoom",-2129972803);
}));

(app.main.data.viewer.decrease_zoom_52791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52793,meta52792__$1){
var self__ = this;
var _52793__$1 = this;
return (new app.main.data.viewer.decrease_zoom_52791(meta52792__$1));
}));

(app.main.data.viewer.decrease_zoom_52791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52793){
var self__ = this;
var _52793__$1 = this;
return self__.meta52792;
}));

(app.main.data.viewer.decrease_zoom_52791.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.decrease_zoom_52791.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var decrease = (function (p1__52790_SHARP_){
var x__5110__auto__ = (p1__52790_SHARP_ / 1.3);
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
});
return app.common.data.dissoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(decrease,(1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom-type","zoom-type",-1936775769)], null));
}));
}

return (new app.main.data.viewer.decrease_zoom_52791(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.reset_zoom = (function (){
if((typeof app.main.data.viewer.reset_zoom_52794 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.reset_zoom_52794 = (function (meta52795){
this.meta52795 = meta52795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.reset_zoom_52794.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.reset_zoom_52794.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","reset-zoom","app.main.data.viewer/reset-zoom",-869768188);
}));

(app.main.data.viewer.reset_zoom_52794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52796,meta52795__$1){
var self__ = this;
var _52796__$1 = this;
return (new app.main.data.viewer.reset_zoom_52794(meta52795__$1));
}));

(app.main.data.viewer.reset_zoom_52794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52796){
var self__ = this;
var _52796__$1 = this;
return self__.meta52795;
}));

(app.main.data.viewer.reset_zoom_52794.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.reset_zoom_52794.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.dissoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom-type","zoom-type",-1936775769)], null));
}));
}

return (new app.main.data.viewer.reset_zoom_52794(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.zoom_to_fit = (function (){
if((typeof app.main.data.viewer.zoom_to_fit_52797 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.zoom_to_fit_52797 = (function (meta52798){
this.meta52798 = meta52798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.zoom_to_fit_52797.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.zoom_to_fit_52797.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","zoom-to-fit","app.main.data.viewer/zoom-to-fit",-1525509635);
}));

(app.main.data.viewer.zoom_to_fit_52797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52799,meta52798__$1){
var self__ = this;
var _52799__$1 = this;
return (new app.main.data.viewer.zoom_to_fit_52797(meta52798__$1));
}));

(app.main.data.viewer.zoom_to_fit_52797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52799){
var self__ = this;
var _52799__$1 = this;
return self__.meta52798;
}));

(app.main.data.viewer.zoom_to_fit_52797.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.zoom_to_fit_52797.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var params = app.main.router.get_params(state);
var page_id = (function (){var G__52800 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(params);
if((G__52800 == null)){
return null;
} else {
return app.common.uuid.parse(G__52800);
}
})();
var index = (function (){var G__52802 = app.main.router.get_query_param(params,new cljs.core.Keyword(null,"index","index",-1531685915));
if((G__52802 == null)){
return null;
} else {
return cljs.core.parse_long(G__52802);
}
})();
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer","viewer",-783949853)),new cljs.core.Keyword(null,"pages","pages",-285406513)),page_id),new cljs.core.Keyword(null,"frames","frames",1765687497));
var index__$1 = (function (){var x__5113__auto__ = (function (){var or__5025__auto__ = index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var y__5114__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (cljs.core.count(frames) - (1));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var srect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frames,index__$1),new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var osize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498)),new cljs.core.Keyword(null,"viewport-size","viewport-size",-1787032748));
var wdiff = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(osize) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect));
var hdiff = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(osize) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(srect));
var minzoom = (function (){var x__5113__auto__ = wdiff;
var y__5114__auto__ = hdiff;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),minzoom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom-type","zoom-type",-1936775769)], null),new cljs.core.Keyword(null,"fit","fit",869444807));
}));

(app.main.data.viewer.zoom_to_fit_52797.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.zoom_to_fit_52797.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.viewer.update_zoom_querystring);
}));
}

return (new app.main.data.viewer.zoom_to_fit_52797(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.zoom_to_fill = (function (){
if((typeof app.main.data.viewer.zoom_to_fill_52806 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.zoom_to_fill_52806 = (function (meta52807){
this.meta52807 = meta52807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.zoom_to_fill_52806.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.zoom_to_fill_52806.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","zoom-to-fill","app.main.data.viewer/zoom-to-fill",-1543797260);
}));

(app.main.data.viewer.zoom_to_fill_52806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52808,meta52807__$1){
var self__ = this;
var _52808__$1 = this;
return (new app.main.data.viewer.zoom_to_fill_52806(meta52807__$1));
}));

(app.main.data.viewer.zoom_to_fill_52806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52808){
var self__ = this;
var _52808__$1 = this;
return self__.meta52807;
}));

(app.main.data.viewer.zoom_to_fill_52806.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.zoom_to_fill_52806.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var params = app.main.router.get_params(state);
var page_id = (function (){var G__52811 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(params);
if((G__52811 == null)){
return null;
} else {
return app.common.uuid.parse(G__52811);
}
})();
var index = (function (){var G__52813 = app.main.router.get_query_param(params,new cljs.core.Keyword(null,"index","index",-1531685915));
if((G__52813 == null)){
return null;
} else {
return cljs.core.parse_long(G__52813);
}
})();
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer","viewer",-783949853)),new cljs.core.Keyword(null,"pages","pages",-285406513)),page_id),new cljs.core.Keyword(null,"frames","frames",1765687497));
var index__$1 = (function (){var x__5113__auto__ = (function (){var or__5025__auto__ = index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var y__5114__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (cljs.core.count(frames) - (1));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var srect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frames,index__$1),new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var osize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498)),new cljs.core.Keyword(null,"viewport-size","viewport-size",-1787032748));
var wdiff = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(osize) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect));
var hdiff = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(osize) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(srect));
var maxzoom = (function (){var x__5110__auto__ = wdiff;
var y__5111__auto__ = hdiff;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),maxzoom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom-type","zoom-type",-1936775769)], null),new cljs.core.Keyword(null,"fill","fill",883462889));
}));

(app.main.data.viewer.zoom_to_fill_52806.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.zoom_to_fill_52806.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.viewer.update_zoom_querystring);
}));
}

return (new app.main.data.viewer.zoom_to_fill_52806(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.toggle_zoom_style = (function (){
if((typeof app.main.data.viewer.toggle_zoom_style_52816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.toggle_zoom_style_52816 = (function (meta52817){
this.meta52817 = meta52817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.toggle_zoom_style_52816.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_zoom_style_52816.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","toggle-zoom-style","app.main.data.viewer/toggle-zoom-style",349756229);
}));

(app.main.data.viewer.toggle_zoom_style_52816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52818,meta52817__$1){
var self__ = this;
var _52818__$1 = this;
return (new app.main.data.viewer.toggle_zoom_style_52816(meta52817__$1));
}));

(app.main.data.viewer.toggle_zoom_style_52816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52818){
var self__ = this;
var _52818__$1 = this;
return self__.meta52817;
}));

(app.main.data.viewer.toggle_zoom_style_52816.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_zoom_style_52816.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var zoom_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"zoom-type","zoom-type",-1936775769)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zoom_type,new cljs.core.Keyword(null,"fit","fit",869444807))){
return beicon.v2.core.of(app.main.data.viewer.zoom_to_fill);
} else {
return beicon.v2.core.of(app.main.data.viewer.zoom_to_fit);
}
}));
}

return (new app.main.data.viewer.toggle_zoom_style_52816(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.toggle_fullscreen = (function (){
if((typeof app.main.data.viewer.toggle_fullscreen_52819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.toggle_fullscreen_52819 = (function (meta52820){
this.meta52820 = meta52820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.toggle_fullscreen_52819.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_fullscreen_52819.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","toggle-fullscreen","app.main.data.viewer/toggle-fullscreen",-237211555);
}));

(app.main.data.viewer.toggle_fullscreen_52819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52821,meta52820__$1){
var self__ = this;
var _52821__$1 = this;
return (new app.main.data.viewer.toggle_fullscreen_52819(meta52820__$1));
}));

(app.main.data.viewer.toggle_fullscreen_52819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52821){
var self__ = this;
var _52821__$1 = this;
return self__.meta52820;
}));

(app.main.data.viewer.toggle_fullscreen_52819.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_fullscreen_52819.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820)], null),cljs.core.not);
}));
}

return (new app.main.data.viewer.toggle_fullscreen_52819(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.exit_fullscreen = (function app$main$data$viewer$exit_fullscreen(){
if((typeof app.main.data.viewer.exit_fullscreen_52823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.exit_fullscreen_52823 = (function (meta52824){
this.meta52824 = meta52824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.exit_fullscreen_52823.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.exit_fullscreen_52823.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","exit-fullscreen","app.main.data.viewer/exit-fullscreen",2035238371);
}));

(app.main.data.viewer.exit_fullscreen_52823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52825,meta52824__$1){
var self__ = this;
var _52825__$1 = this;
return (new app.main.data.viewer.exit_fullscreen_52823(meta52824__$1));
}));

(app.main.data.viewer.exit_fullscreen_52823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52825){
var self__ = this;
var _52825__$1 = this;
return self__.meta52824;
}));

(app.main.data.viewer.exit_fullscreen_52823.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.exit_fullscreen_52823.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820)], null),false);
}));
}

return (new app.main.data.viewer.exit_fullscreen_52823(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.set_viewport_size = (function app$main$data$viewer$set_viewport_size(p__52826){
var map__52827 = p__52826;
var map__52827__$1 = cljs.core.__destructure_map(map__52827);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52827__$1,new cljs.core.Keyword(null,"size","size",1098693007));
if((typeof app.main.data.viewer.set_viewport_size_52828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.set_viewport_size_52828 = (function (p__52826,map__52827,size,meta52829){
this.p__52826 = p__52826;
this.map__52827 = map__52827;
this.size = size;
this.meta52829 = meta52829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.set_viewport_size_52828.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.set_viewport_size_52828.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","set-viewport-size","app.main.data.viewer/set-viewport-size",-2131805670);
}));

(app.main.data.viewer.set_viewport_size_52828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52830,meta52829__$1){
var self__ = this;
var _52830__$1 = this;
return (new app.main.data.viewer.set_viewport_size_52828(self__.p__52826,self__.map__52827,self__.size,meta52829__$1));
}));

(app.main.data.viewer.set_viewport_size_52828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52830){
var self__ = this;
var _52830__$1 = this;
return self__.meta52829;
}));

(app.main.data.viewer.set_viewport_size_52828.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.set_viewport_size_52828.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"viewport-size","viewport-size",-1787032748)], null),self__.size);
}));
}

return (new app.main.data.viewer.set_viewport_size_52828(p__52826,map__52827__$1,size,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.toggle_thumbnails_panel = (function (){
if((typeof app.main.data.viewer.toggle_thumbnails_panel_52831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.toggle_thumbnails_panel_52831 = (function (meta52832){
this.meta52832 = meta52832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.toggle_thumbnails_panel_52831.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_thumbnails_panel_52831.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","toggle-thumbnails-panel","app.main.data.viewer/toggle-thumbnails-panel",-1804516951);
}));

(app.main.data.viewer.toggle_thumbnails_panel_52831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52833,meta52832__$1){
var self__ = this;
var _52833__$1 = this;
return (new app.main.data.viewer.toggle_thumbnails_panel_52831(meta52832__$1));
}));

(app.main.data.viewer.toggle_thumbnails_panel_52831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52833){
var self__ = this;
var _52833__$1 = this;
return self__.meta52832;
}));

(app.main.data.viewer.toggle_thumbnails_panel_52831.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_thumbnails_panel_52831.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"show-thumbnails","show-thumbnails",405341805)], null),cljs.core.not);
}));
}

return (new app.main.data.viewer.toggle_thumbnails_panel_52831(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.close_thumbnails_panel = (function (){
if((typeof app.main.data.viewer.close_thumbnails_panel_52837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.close_thumbnails_panel_52837 = (function (meta52838){
this.meta52838 = meta52838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.close_thumbnails_panel_52837.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.close_thumbnails_panel_52837.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","close-thumbnails-panel","app.main.data.viewer/close-thumbnails-panel",846917843);
}));

(app.main.data.viewer.close_thumbnails_panel_52837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52839,meta52838__$1){
var self__ = this;
var _52839__$1 = this;
return (new app.main.data.viewer.close_thumbnails_panel_52837(meta52838__$1));
}));

(app.main.data.viewer.close_thumbnails_panel_52837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52839){
var self__ = this;
var _52839__$1 = this;
return self__.meta52838;
}));

(app.main.data.viewer.close_thumbnails_panel_52837.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.close_thumbnails_panel_52837.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"show-thumbnails","show-thumbnails",405341805)], null),false);
}));
}

return (new app.main.data.viewer.close_thumbnails_panel_52837(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.select_prev_frame = (function (){
if((typeof app.main.data.viewer.select_prev_frame_52840 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.select_prev_frame_52840 = (function (meta52841){
this.meta52841 = meta52841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.select_prev_frame_52840.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_prev_frame_52840.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","select-prev-frame","app.main.data.viewer/select-prev-frame",-1525895540);
}));

(app.main.data.viewer.select_prev_frame_52840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52842,meta52841__$1){
var self__ = this;
var _52842__$1 = this;
return (new app.main.data.viewer.select_prev_frame_52840(meta52841__$1));
}));

(app.main.data.viewer.select_prev_frame_52840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52842){
var self__ = this;
var _52842__$1 = this;
return self__.meta52841;
}));

(app.main.data.viewer.select_prev_frame_52840.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_prev_frame_52840.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer-animations","viewer-animations",-575904375)),new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928),cljs.core.PersistentVector.EMPTY);
}));

(app.main.data.viewer.select_prev_frame_52840.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_prev_frame_52840.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = app.main.router.get_params(state);
var index = (function (){var G__52843 = app.main.router.get_query_param(params,new cljs.core.Keyword(null,"index","index",-1531685915));
if((G__52843 == null)){
return null;
} else {
return cljs.core.parse_long(G__52843);
}
})();
if((index > (0))){
return beicon.v2.core.of(app.main.data.comments.close_thread(),app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"index","index",-1531685915),(index - (1)))));
} else {
return null;
}
}));
}

return (new app.main.data.viewer.select_prev_frame_52840(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.select_next_frame = (function (){
if((typeof app.main.data.viewer.select_next_frame_52844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.select_next_frame_52844 = (function (meta52845){
this.meta52845 = meta52845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.select_next_frame_52844.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_next_frame_52844.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","select-next-frame","app.main.data.viewer/select-next-frame",-259216972);
}));

(app.main.data.viewer.select_next_frame_52844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52846,meta52845__$1){
var self__ = this;
var _52846__$1 = this;
return (new app.main.data.viewer.select_next_frame_52844(meta52845__$1));
}));

(app.main.data.viewer.select_next_frame_52844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52846){
var self__ = this;
var _52846__$1 = this;
return self__.meta52845;
}));

(app.main.data.viewer.select_next_frame_52844.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_next_frame_52844.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer-animations","viewer-animations",-575904375)),new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928),cljs.core.PersistentVector.EMPTY);
}));

(app.main.data.viewer.select_next_frame_52844.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_next_frame_52844.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = app.main.router.get_params(state);
var index = (function (){var G__52847 = app.main.router.get_query_param(params,new cljs.core.Keyword(null,"index","index",-1531685915));
if((G__52847 == null)){
return null;
} else {
return cljs.core.parse_long(G__52847);
}
})();
var page_id = (function (){var G__52848 = params;
var G__52848__$1 = (((G__52848 == null))?null:new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(G__52848));
if((G__52848__$1 == null)){
return null;
} else {
return app.common.uuid.parse(G__52848__$1);
}
})();
var total = cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"frames","frames",1765687497)], null)));
if((index < (total - (1)))){
return beicon.v2.core.of(app.main.data.comments.close_thread(),app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"index","index",-1531685915),(index + (1)))));
} else {
return null;
}
}));
}

return (new app.main.data.viewer.select_next_frame_52844(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.select_first_frame = (function (){
if((typeof app.main.data.viewer.select_first_frame_52849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.select_first_frame_52849 = (function (meta52850){
this.meta52850 = meta52850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.select_first_frame_52849.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_first_frame_52849.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","select-first-frame","app.main.data.viewer/select-first-frame",383131704);
}));

(app.main.data.viewer.select_first_frame_52849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52851,meta52850__$1){
var self__ = this;
var _52851__$1 = this;
return (new app.main.data.viewer.select_first_frame_52849(meta52850__$1));
}));

(app.main.data.viewer.select_first_frame_52849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52851){
var self__ = this;
var _52851__$1 = this;
return self__.meta52850;
}));

(app.main.data.viewer.select_first_frame_52849.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_first_frame_52849.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = app.main.router.get_params(state);
return beicon.v2.core.of(app.main.data.comments.close_thread(),app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"index","index",-1531685915),(0))));
}));
}

return (new app.main.data.viewer.select_first_frame_52849(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.valid_interaction_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hide","hide",-596913169),null,new cljs.core.Keyword(null,"show-on-click","show-on-click",1549930356),null,new cljs.core.Keyword(null,"show","show",-576705889),null], null), null);
app.main.data.viewer.set_interactions_mode = (function app$main$data$viewer$set_interactions_mode(mode){
app.common.data.macros.runtime_assert("expected valid interaction mode",(function (){
return cljs.core.contains_QMARK_(app.main.data.viewer.valid_interaction_modes,mode);
}));

if((typeof app.main.data.viewer.set_interactions_mode_52852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.set_interactions_mode_52852 = (function (mode,meta52853){
this.mode = mode;
this.meta52853 = meta52853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.set_interactions_mode_52852.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.set_interactions_mode_52852.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","set-interactions-mode","app.main.data.viewer/set-interactions-mode",-620916070);
}));

(app.main.data.viewer.set_interactions_mode_52852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52854,meta52853__$1){
var self__ = this;
var _52854__$1 = this;
return (new app.main.data.viewer.set_interactions_mode_52852(self__.mode,meta52853__$1));
}));

(app.main.data.viewer.set_interactions_mode_52852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52854){
var self__ = this;
var _52854__$1 = this;
return self__.meta52853;
}));

(app.main.data.viewer.set_interactions_mode_52852.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.set_interactions_mode_52852.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"interactions-mode","interactions-mode",-1234827377)], null),self__.mode),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"show-interactions","show-interactions",622664467)], null),(function (){var G__52857 = self__.mode;
var G__52857__$1 = (((G__52857 instanceof cljs.core.Keyword))?G__52857.fqn:null);
switch (G__52857__$1) {
case "hide":
return false;

break;
case "show":
return true;

break;
case "show-on-click":
return false;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52857__$1)].join('')));

}
})());
}));

(app.main.data.viewer.set_interactions_mode_52852.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.set_interactions_mode_52852.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = app.main.router.get_params(state);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"interactions-mode","interactions-mode",-1234827377),self__.mode)));
}));
}

return (new app.main.data.viewer.set_interactions_mode_52852(mode,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.flash_interactions = (function app$main$data$viewer$flash_interactions(){
if((typeof app.main.data.viewer.flash_interactions_52859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.flash_interactions_52859 = (function (meta52860){
this.meta52860 = meta52860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.flash_interactions_52859.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.flash_interactions_52859.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","flash-interactions","app.main.data.viewer/flash-interactions",1108194904);
}));

(app.main.data.viewer.flash_interactions_52859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52861,meta52860__$1){
var self__ = this;
var _52861__$1 = this;
return (new app.main.data.viewer.flash_interactions_52859(meta52860__$1));
}));

(app.main.data.viewer.flash_interactions_52859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52861){
var self__ = this;
var _52861__$1 = this;
return self__.meta52860;
}));

(app.main.data.viewer.flash_interactions_52859.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.flash_interactions_52859.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"show-interactions","show-interactions",622664467)], null),true);
}));

(app.main.data.viewer.flash_interactions_52859.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.flash_interactions_52859.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.viewer","flash-interactions","app.main.data.viewer/flash-interactions",1108194904)),stream);
return beicon.v2.core.take_until(stopper,beicon.v2.core.delay((500),beicon.v2.core.of(app.main.data.viewer.flash_done)));
}));
}

return (new app.main.data.viewer.flash_interactions_52859(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.flash_done = (function (){
if((typeof app.main.data.viewer.flash_done_52862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.flash_done_52862 = (function (meta52863){
this.meta52863 = meta52863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.flash_done_52862.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.flash_done_52862.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","flash-done","app.main.data.viewer/flash-done",-1842223531);
}));

(app.main.data.viewer.flash_done_52862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52864,meta52863__$1){
var self__ = this;
var _52864__$1 = this;
return (new app.main.data.viewer.flash_done_52862(meta52863__$1));
}));

(app.main.data.viewer.flash_done_52862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52864){
var self__ = this;
var _52864__$1 = this;
return self__.meta52863;
}));

(app.main.data.viewer.flash_done_52862.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.flash_done_52862.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"show-interactions","show-interactions",622664467)], null),false);
}));
}

return (new app.main.data.viewer.flash_done_52862(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.viewer.set_nav_scroll = (function app$main$data$viewer$set_nav_scroll(scroll){
if((typeof app.main.data.viewer.set_nav_scroll_52865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.set_nav_scroll_52865 = (function (scroll,meta52866){
this.scroll = scroll;
this.meta52866 = meta52866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.set_nav_scroll_52865.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.set_nav_scroll_52865.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","set-nav-scroll","app.main.data.viewer/set-nav-scroll",1095276888);
}));

(app.main.data.viewer.set_nav_scroll_52865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52867,meta52866__$1){
var self__ = this;
var _52867__$1 = this;
return (new app.main.data.viewer.set_nav_scroll_52865(self__.scroll,meta52866__$1));
}));

(app.main.data.viewer.set_nav_scroll_52865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52867){
var self__ = this;
var _52867__$1 = this;
return self__.meta52866;
}));

(app.main.data.viewer.set_nav_scroll_52865.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.set_nav_scroll_52865.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"nav-scroll","nav-scroll",1125136089)], null),self__.scroll);
}));
}

return (new app.main.data.viewer.set_nav_scroll_52865(scroll,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.reset_nav_scroll = (function app$main$data$viewer$reset_nav_scroll(){
if((typeof app.main.data.viewer.reset_nav_scroll_52868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.reset_nav_scroll_52868 = (function (meta52869){
this.meta52869 = meta52869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.reset_nav_scroll_52868.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.reset_nav_scroll_52868.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","reset-nav-scroll","app.main.data.viewer/reset-nav-scroll",428495406);
}));

(app.main.data.viewer.reset_nav_scroll_52868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52870,meta52869__$1){
var self__ = this;
var _52870__$1 = this;
return (new app.main.data.viewer.reset_nav_scroll_52868(meta52869__$1));
}));

(app.main.data.viewer.reset_nav_scroll_52868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52870){
var self__ = this;
var _52870__$1 = this;
return self__.meta52869;
}));

(app.main.data.viewer.reset_nav_scroll_52868.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.reset_nav_scroll_52868.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.dissoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"nav-scroll","nav-scroll",1125136089)], null));
}));
}

return (new app.main.data.viewer.reset_nav_scroll_52868(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.complete_animation = (function app$main$data$viewer$complete_animation(){
if((typeof app.main.data.viewer.complete_animation_52871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.complete_animation_52871 = (function (meta52872){
this.meta52872 = meta52872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.complete_animation_52871.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.complete_animation_52871.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","complete-animation","app.main.data.viewer/complete-animation",-1327497536);
}));

(app.main.data.viewer.complete_animation_52871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52873,meta52872__$1){
var self__ = this;
var _52873__$1 = this;
return (new app.main.data.viewer.complete_animation_52871(meta52872__$1));
}));

(app.main.data.viewer.complete_animation_52871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52873){
var self__ = this;
var _52873__$1 = this;
return self__.meta52872;
}));

(app.main.data.viewer.complete_animation_52871.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.complete_animation_52871.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer-animations","viewer-animations",-575904375));
}));
}

return (new app.main.data.viewer.complete_animation_52871(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.go_to_frame_by_index = (function app$main$data$viewer$go_to_frame_by_index(index){
if((typeof app.main.data.viewer.go_to_frame_by_index_52874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.go_to_frame_by_index_52874 = (function (index,meta52875){
this.index = index;
this.meta52875 = meta52875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.go_to_frame_by_index_52874.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_frame_by_index_52874.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","go-to-frame-by-index","app.main.data.viewer/go-to-frame-by-index",1308227509);
}));

(app.main.data.viewer.go_to_frame_by_index_52874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52876,meta52875__$1){
var self__ = this;
var _52876__$1 = this;
return (new app.main.data.viewer.go_to_frame_by_index_52874(self__.index,meta52875__$1));
}));

(app.main.data.viewer.go_to_frame_by_index_52874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52876){
var self__ = this;
var _52876__$1 = this;
return self__.meta52875;
}));

(app.main.data.viewer.go_to_frame_by_index_52874.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_frame_by_index_52874.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928),cljs.core.PersistentVector.EMPTY);
}));

(app.main.data.viewer.go_to_frame_by_index_52874.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_frame_by_index_52874.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = app.main.router.get_params(state);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"index","index",-1531685915),self__.index)));
}));
}

return (new app.main.data.viewer.go_to_frame_by_index_52874(index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.go_to_frame = (function app$main$data$viewer$go_to_frame(var_args){
var G__52879 = arguments.length;
switch (G__52879) {
case 1:
return app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$1 = (function (frame_id){
return app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$2(frame_id,null);
}));

(app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$2 = (function (frame_id,animation){
app.common.data.macros.runtime_assert("expected valid parameters",(function (){
var and__5023__auto__ = cljs.core.uuid_QMARK_(frame_id);
if(and__5023__auto__){
var or__5025__auto__ = (animation == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.shape.interactions.check_animation_BANG_(animation);
}
} else {
return and__5023__auto__;
}
}));

if((typeof app.main.data.viewer.go_to_frame_52880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.go_to_frame_52880 = (function (frame_id,animation,meta52881){
this.frame_id = frame_id;
this.animation = animation;
this.meta52881 = meta52881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.go_to_frame_52880.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_frame_52880.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","go-to-frame","app.main.data.viewer/go-to-frame",-2013221731);
}));

(app.main.data.viewer.go_to_frame_52880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52882,meta52881__$1){
var self__ = this;
var _52882__$1 = this;
return (new app.main.data.viewer.go_to_frame_52880(self__.frame_id,self__.animation,meta52881__$1));
}));

(app.main.data.viewer.go_to_frame_52880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52882){
var self__ = this;
var _52882__$1 = this;
return self__.meta52881;
}));

(app.main.data.viewer.go_to_frame_52880.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_frame_52880.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state);
var qparams = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var page_id = (function (){var G__52883 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(qparams);
if((G__52883 == null)){
return null;
} else {
return app.common.uuid.parse(G__52883);
}
})();
var index = (function (){var G__52884 = app.main.router.get_query_param(qparams,new cljs.core.Keyword(null,"index","index",-1531685915));
if((G__52884 == null)){
return null;
} else {
return cljs.core.parse_long(G__52884);
}
})();
var frames = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"frames","frames",1765687497)], null));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frames,index);
var G__52885 = state;
var G__52885__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52885,new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928),cljs.core.PersistentVector.EMPTY)
;
if((!((self__.animation == null)))){
return cljs.core.assoc_in(G__52885__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-animations","viewer-animations",-575904375),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"go-to-frame","go-to-frame",466960655),new cljs.core.Keyword(null,"orig-frame-id","orig-frame-id",525378580),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"animation","animation",-1248293244),self__.animation], null));
} else {
return G__52885__$1;
}
}));

(app.main.data.viewer.go_to_frame_52880.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_frame_52880.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state);
var qparams = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var page_id = (function (){var G__52892 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(qparams);
if((G__52892 == null)){
return null;
} else {
return app.common.uuid.parse(G__52892);
}
})();
var frames = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"frames","frames",1765687497)], null));
var index = app.common.data.index_of_pred(frames,(function (p1__52877_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52877_SHARP_),self__.frame_id);
}));
return beicon.v2.core.of(app.main.data.viewer.go_to_frame_by_index((function (){var or__5025__auto__ = index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})()));
}));
}

return (new app.main.data.viewer.go_to_frame_52880(frame_id,animation,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.viewer.go_to_frame.cljs$lang$maxFixedArity = 2);

app.main.data.viewer.go_to_frame_auto = (function app$main$data$viewer$go_to_frame_auto(){
if((typeof app.main.data.viewer.go_to_frame_auto_52895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.go_to_frame_auto_52895 = (function (meta52896){
this.meta52896 = meta52896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.go_to_frame_auto_52895.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_frame_auto_52895.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","go-to-frame-auto","app.main.data.viewer/go-to-frame-auto",-879855067);
}));

(app.main.data.viewer.go_to_frame_auto_52895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52897,meta52896__$1){
var self__ = this;
var _52897__$1 = this;
return (new app.main.data.viewer.go_to_frame_auto_52895(meta52896__$1));
}));

(app.main.data.viewer.go_to_frame_auto_52895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52897){
var self__ = this;
var _52897__$1 = this;
return self__.meta52896;
}));

(app.main.data.viewer.go_to_frame_auto_52895.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_frame_auto_52895.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state);
var qparams = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var page_id = (function (){var G__52923 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(qparams);
if((G__52923 == null)){
return null;
} else {
return app.common.uuid.parse(G__52923);
}
})();
var flows = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"flows","flows",-1369576628)], null));
if(cljs.core.seq(flows)){
var frame_id = new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271).cljs$core$IFn$_invoke$arity$1(cljs.core.first(flows));
return beicon.v2.core.of(app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$1(frame_id));
} else {
return beicon.v2.core.of(app.main.data.viewer.go_to_frame_by_index((0)));
}
}));
}

return (new app.main.data.viewer.go_to_frame_auto_52895(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.go_to_section = (function app$main$data$viewer$go_to_section(section){
if((typeof app.main.data.viewer.go_to_section_52926 !== 'undefined')){
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
app.main.data.viewer.go_to_section_52926 = (function (section,meta52927){
this.section = section;
this.meta52927 = meta52927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.go_to_section_52926.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_section_52926.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","go-to-section","app.main.data.viewer/go-to-section",1726546114);
}));

(app.main.data.viewer.go_to_section_52926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52928,meta52927__$1){
var self__ = this;
var _52928__$1 = this;
return (new app.main.data.viewer.go_to_section_52926(self__.section,meta52927__$1));
}));

(app.main.data.viewer.go_to_section_52926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52928){
var self__ = this;
var _52928__$1 = this;
return self__.meta52927;
}));

(app.main.data.viewer.go_to_section_52926.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_section_52926.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"viewer",new cljs.core.Keyword(null,"section","section",-300141526),cljs.core.name(self__.section)], null);
}));

(app.main.data.viewer.go_to_section_52926.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_section_52926.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928),cljs.core.PersistentVector.EMPTY);
}));

(app.main.data.viewer.go_to_section_52926.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_section_52926.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = app.main.router.get_params(state);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"section","section",-300141526),self__.section)));
}));
}

return (new app.main.data.viewer.go_to_section_52926(section,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.open_overlay_STAR_ = (function app$main$data$viewer$open_overlay_STAR_(state,frame,position,snap_to,close_click_outside,background_overlay,animation,fixed_source_QMARK_){
var G__52932 = state;
var G__52932__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52932,new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"snap-to","snap-to",922955891),snap_to,new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612),close_click_outside,new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424),background_overlay,new cljs.core.Keyword(null,"animation","animation",-1248293244),animation,new cljs.core.Keyword(null,"fixed-source?","fixed-source?",1767450450),fixed_source_QMARK_], null))
;
if((!((animation == null)))){
return cljs.core.assoc_in(G__52932__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-animations","viewer-animations",-575904375),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651),new cljs.core.Keyword(null,"overlay-id","overlay-id",-1525970518),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"animation","animation",-1248293244),animation], null));
} else {
return G__52932__$1;
}
});
app.main.data.viewer.close_overlay_STAR_ = (function app$main$data$viewer$close_overlay_STAR_(state,frame_id,animation){
if((animation == null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928),(function (overlays){
return app.common.data.removev((function (p1__52933_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(p1__52933_SHARP_)),frame_id);
}),overlays);
}));
} else {
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-animations","viewer-animations",-575904375),frame_id], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518),new cljs.core.Keyword(null,"overlay-id","overlay-id",-1525970518),frame_id,new cljs.core.Keyword(null,"animation","animation",-1248293244),animation], null));
}
});
app.main.data.viewer.open_overlay = (function app$main$data$viewer$open_overlay(frame_id,position,snap_to,close_click_outside,background_overlay,animation,fixed_source_QMARK_){
app.common.data.macros.runtime_assert("expr assert: (uuid? frame-id)",(function (){
return cljs.core.uuid_QMARK_(frame_id);
}));

app.common.data.macros.runtime_assert("expr assert: (gpt/point? position)",(function (){
return app.common.geom.point.point_QMARK_(position);
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? close-click-outside) (boolean? close-click-outside))",(function (){
return (((close_click_outside == null)) || (cljs.core.boolean_QMARK_(close_click_outside)));
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? background-overlay) (boolean? background-overlay))",(function (){
return (((background_overlay == null)) || (cljs.core.boolean_QMARK_(background_overlay)));
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? animation) (ctsi/check-animation! animation))",(function (){
var or__5025__auto__ = (animation == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.shape.interactions.check_animation_BANG_(animation);
}
}));

if((typeof app.main.data.viewer.open_overlay_52936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.open_overlay_52936 = (function (frame_id,position,snap_to,close_click_outside,background_overlay,animation,fixed_source_QMARK_,meta52937){
this.frame_id = frame_id;
this.position = position;
this.snap_to = snap_to;
this.close_click_outside = close_click_outside;
this.background_overlay = background_overlay;
this.animation = animation;
this.fixed_source_QMARK_ = fixed_source_QMARK_;
this.meta52937 = meta52937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.open_overlay_52936.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.open_overlay_52936.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","open-overlay","app.main.data.viewer/open-overlay",-456952813);
}));

(app.main.data.viewer.open_overlay_52936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52938,meta52937__$1){
var self__ = this;
var _52938__$1 = this;
return (new app.main.data.viewer.open_overlay_52936(self__.frame_id,self__.position,self__.snap_to,self__.close_click_outside,self__.background_overlay,self__.animation,self__.fixed_source_QMARK_,meta52937__$1));
}));

(app.main.data.viewer.open_overlay_52936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52938){
var self__ = this;
var _52938__$1 = this;
return self__.meta52937;
}));

(app.main.data.viewer.open_overlay_52936.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.open_overlay_52936.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state);
var qparams = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var page_id = (function (){var G__52939 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(qparams);
if((G__52939 == null)){
return null;
} else {
return app.common.uuid.parse(G__52939);
}
})();
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer","viewer",-783949853)),new cljs.core.Keyword(null,"pages","pages",-285406513)),page_id),new cljs.core.Keyword(null,"all-frames","all-frames",-524337179));
var frame = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__52934_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52934_SHARP_),self__.frame_id);
}),frames);
var overlays = new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.not(cljs.core.some((function (p1__52935_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(p1__52935_SHARP_),frame);
}),overlays))){
return app.main.data.viewer.open_overlay_STAR_(state,frame,self__.position,self__.snap_to,self__.close_click_outside,self__.background_overlay,self__.animation,self__.fixed_source_QMARK_);
} else {
return state;
}
}));
}

return (new app.main.data.viewer.open_overlay_52936(frame_id,position,snap_to,close_click_outside,background_overlay,animation,fixed_source_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.toggle_overlay = (function app$main$data$viewer$toggle_overlay(frame_id,position,snap_to,close_click_outside,background_overlay,animation,fixed_source_QMARK_){
app.common.data.macros.runtime_assert("expr assert: (uuid? frame-id)",(function (){
return cljs.core.uuid_QMARK_(frame_id);
}));

app.common.data.macros.runtime_assert("expr assert: (gpt/point? position)",(function (){
return app.common.geom.point.point_QMARK_(position);
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? close-click-outside) (boolean? close-click-outside))",(function (){
return (((close_click_outside == null)) || (cljs.core.boolean_QMARK_(close_click_outside)));
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? background-overlay) (boolean? background-overlay))",(function (){
return (((background_overlay == null)) || (cljs.core.boolean_QMARK_(background_overlay)));
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? animation) (ctsi/check-animation! animation))",(function (){
var or__5025__auto__ = (animation == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.shape.interactions.check_animation_BANG_(animation);
}
}));

if((typeof app.main.data.viewer.toggle_overlay_52943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.toggle_overlay_52943 = (function (frame_id,position,snap_to,close_click_outside,background_overlay,animation,fixed_source_QMARK_,meta52944){
this.frame_id = frame_id;
this.position = position;
this.snap_to = snap_to;
this.close_click_outside = close_click_outside;
this.background_overlay = background_overlay;
this.animation = animation;
this.fixed_source_QMARK_ = fixed_source_QMARK_;
this.meta52944 = meta52944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.toggle_overlay_52943.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_overlay_52943.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","toggle-overlay","app.main.data.viewer/toggle-overlay",-748340857);
}));

(app.main.data.viewer.toggle_overlay_52943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52945,meta52944__$1){
var self__ = this;
var _52945__$1 = this;
return (new app.main.data.viewer.toggle_overlay_52943(self__.frame_id,self__.position,self__.snap_to,self__.close_click_outside,self__.background_overlay,self__.animation,self__.fixed_source_QMARK_,meta52944__$1));
}));

(app.main.data.viewer.toggle_overlay_52943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52945){
var self__ = this;
var _52945__$1 = this;
return self__.meta52944;
}));

(app.main.data.viewer.toggle_overlay_52943.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_overlay_52943.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state);
var qparams = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var page_id = (function (){var G__52947 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(qparams);
if((G__52947 == null)){
return null;
} else {
return app.common.uuid.parse(G__52947);
}
})();
var frames = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"all-frames","all-frames",-524337179)], null));
var frame = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__52940_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52940_SHARP_),self__.frame_id);
}),frames);
var overlays = new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.not(cljs.core.some((function (p1__52941_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(p1__52941_SHARP_),frame);
}),overlays))){
return app.main.data.viewer.open_overlay_STAR_(state,frame,self__.position,self__.snap_to,self__.close_click_outside,self__.background_overlay,self__.animation,self__.fixed_source_QMARK_);
} else {
return app.main.data.viewer.close_overlay_STAR_(state,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),app.common.types.shape.interactions.invert_direction(self__.animation));
}
}));
}

return (new app.main.data.viewer.toggle_overlay_52943(frame_id,position,snap_to,close_click_outside,background_overlay,animation,fixed_source_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.close_overlay = (function app$main$data$viewer$close_overlay(var_args){
var G__52950 = arguments.length;
switch (G__52950) {
case 1:
return app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$1 = (function (frame_id){
return app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$2(frame_id,null);
}));

(app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$2 = (function (frame_id,animation){
app.common.data.macros.runtime_assert("expr assert: (uuid? frame-id)",(function (){
return cljs.core.uuid_QMARK_(frame_id);
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? animation) (ctsi/check-animation! animation))",(function (){
var or__5025__auto__ = (animation == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.shape.interactions.check_animation_BANG_(animation);
}
}));

if((typeof app.main.data.viewer.close_overlay_52951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.close_overlay_52951 = (function (frame_id,animation,meta52952){
this.frame_id = frame_id;
this.animation = animation;
this.meta52952 = meta52952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.close_overlay_52951.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.close_overlay_52951.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","close-overlay","app.main.data.viewer/close-overlay",-1269949120);
}));

(app.main.data.viewer.close_overlay_52951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52953,meta52952__$1){
var self__ = this;
var _52953__$1 = this;
return (new app.main.data.viewer.close_overlay_52951(self__.frame_id,self__.animation,meta52952__$1));
}));

(app.main.data.viewer.close_overlay_52951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52953){
var self__ = this;
var _52953__$1 = this;
return self__.meta52952;
}));

(app.main.data.viewer.close_overlay_52951.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.close_overlay_52951.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.main.data.viewer.close_overlay_STAR_(state,self__.frame_id,self__.animation);
}));
}

return (new app.main.data.viewer.close_overlay_52951(frame_id,animation,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.viewer.close_overlay.cljs$lang$maxFixedArity = 2);

app.main.data.viewer.deselect_all = (function app$main$data$viewer$deselect_all(){
if((typeof app.main.data.viewer.deselect_all_52954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.deselect_all_52954 = (function (meta52955){
this.meta52955 = meta52955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.deselect_all_52954.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.deselect_all_52954.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","deselect-all","app.main.data.viewer/deselect-all",-716882182);
}));

(app.main.data.viewer.deselect_all_52954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52956,meta52955__$1){
var self__ = this;
var _52956__$1 = this;
return (new app.main.data.viewer.deselect_all_52954(meta52955__$1));
}));

(app.main.data.viewer.deselect_all_52954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52956){
var self__ = this;
var _52956__$1 = this;
return self__.meta52955;
}));

(app.main.data.viewer.deselect_all_52954.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.deselect_all_52954.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.PersistentHashSet.EMPTY);
}));
}

return (new app.main.data.viewer.deselect_all_52954(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.select_shape = (function app$main$data$viewer$select_shape(id){
if((typeof app.main.data.viewer.select_shape_52957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.select_shape_52957 = (function (id,meta52958){
this.id = id;
this.meta52958 = meta52958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.select_shape_52957.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_shape_52957.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","select-shape","app.main.data.viewer/select-shape",-1797220962);
}));

(app.main.data.viewer.select_shape_52957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52959,meta52958__$1){
var self__ = this;
var _52959__$1 = this;
return (new app.main.data.viewer.select_shape_52957(self__.id,meta52958__$1));
}));

(app.main.data.viewer.select_shape_52957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52959){
var self__ = this;
var _52959__$1 = this;
return self__.meta52958;
}));

(app.main.data.viewer.select_shape_52957.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_shape_52957.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([self__.id]));
}));
}

return (new app.main.data.viewer.select_shape_52957(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.toggle_selection = (function app$main$data$viewer$toggle_selection(id){
if((typeof app.main.data.viewer.toggle_selection_52960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.toggle_selection_52960 = (function (id,meta52961){
this.id = id;
this.meta52961 = meta52961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.toggle_selection_52960.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_selection_52960.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","toggle-selection","app.main.data.viewer/toggle-selection",1667521467);
}));

(app.main.data.viewer.toggle_selection_52960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52962,meta52961__$1){
var self__ = this;
var _52962__$1 = this;
return (new app.main.data.viewer.toggle_selection_52960(self__.id,meta52961__$1));
}));

(app.main.data.viewer.toggle_selection_52960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52962){
var self__ = this;
var _52962__$1 = this;
return self__.meta52961;
}));

(app.main.data.viewer.toggle_selection_52960.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_selection_52960.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var selected = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
var G__52963 = state;
var G__52963__$1 = ((cljs.core.not((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(self__.id) : selected.call(null,self__.id))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__52963,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.conj,self__.id):G__52963);
if(cljs.core.truth_((selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(self__.id) : selected.call(null,self__.id)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__52963__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.disj,self__.id);
} else {
return G__52963__$1;
}
}));
}

return (new app.main.data.viewer.toggle_selection_52960(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.shift_select_to = (function app$main$data$viewer$shift_select_to(id){
if((typeof app.main.data.viewer.shift_select_to_52964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.shift_select_to_52964 = (function (id,meta52965){
this.id = id;
this.meta52965 = meta52965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.shift_select_to_52964.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.shift_select_to_52964.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","shift-select-to","app.main.data.viewer/shift-select-to",-1698238213);
}));

(app.main.data.viewer.shift_select_to_52964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52966,meta52965__$1){
var self__ = this;
var _52966__$1 = this;
return (new app.main.data.viewer.shift_select_to_52964(self__.id,meta52965__$1));
}));

(app.main.data.viewer.shift_select_to_52964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52966){
var self__ = this;
var _52966__$1 = this;
return self__.meta52965;
}));

(app.main.data.viewer.shift_select_to_52964.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.shift_select_to_52964.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state);
var qparams = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var page_id = (function (){var G__52967 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(qparams);
if((G__52967 == null)){
return null;
} else {
return app.common.uuid.parse(G__52967);
}
})();
var objects = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null));
var selection = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.PersistentHashSet.EMPTY),self__.id);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"selected","selected",574897764)], null),app.common.files.helpers.expand_region_selection(objects,selection));
}));
}

return (new app.main.data.viewer.shift_select_to_52964(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.select_all = (function app$main$data$viewer$select_all(){
if((typeof app.main.data.viewer.select_all_52969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.select_all_52969 = (function (meta52970){
this.meta52970 = meta52970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.select_all_52969.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_all_52969.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","select-all","app.main.data.viewer/select-all",427508670);
}));

(app.main.data.viewer.select_all_52969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52971,meta52970__$1){
var self__ = this;
var _52971__$1 = this;
return (new app.main.data.viewer.select_all_52969(meta52970__$1));
}));

(app.main.data.viewer.select_all_52969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52971){
var self__ = this;
var _52971__$1 = this;
return self__.meta52970;
}));

(app.main.data.viewer.select_all_52969.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.select_all_52969.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(state);
var qparams = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var page_id = (function (){var G__52972 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(qparams);
if((G__52972 == null)){
return null;
} else {
return app.common.uuid.parse(G__52972);
}
})();
var index = (function (){var G__52973 = app.main.router.get_query_param(qparams,new cljs.core.Keyword(null,"index","index",-1531685915));
if((G__52973 == null)){
return null;
} else {
return cljs.core.parse_long(G__52973);
}
})();
var objects = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null));
var frame_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"frames","frames",1765687497),index,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var selection = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([frame_id]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52968_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__52968_SHARP_)),frame_id);
}),objects)));
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"selected","selected",574897764)], null),selection);
}));
}

return (new app.main.data.viewer.select_all_52969(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.toggle_collapse = (function app$main$data$viewer$toggle_collapse(id){
if((typeof app.main.data.viewer.toggle_collapse_52974 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.toggle_collapse_52974 = (function (id,meta52975){
this.id = id;
this.meta52975 = meta52975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.toggle_collapse_52974.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_collapse_52974.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","toggle-collapse","app.main.data.viewer/toggle-collapse",1666263275);
}));

(app.main.data.viewer.toggle_collapse_52974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52976,meta52975__$1){
var self__ = this;
var _52976__$1 = this;
return (new app.main.data.viewer.toggle_collapse_52974(self__.id,meta52975__$1));
}));

(app.main.data.viewer.toggle_collapse_52974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52976){
var self__ = this;
var _52976__$1 = this;
return self__.meta52975;
}));

(app.main.data.viewer.toggle_collapse_52974.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.toggle_collapse_52974.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var toggled_QMARK_ = cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)], null)),self__.id);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523)], null),((toggled_QMARK_)?cljs.core.disj:cljs.core.conj),self__.id);
}));
}

return (new app.main.data.viewer.toggle_collapse_52974(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.hover_shape = (function app$main$data$viewer$hover_shape(id,hover_QMARK_){
if((typeof app.main.data.viewer.hover_shape_52977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.hover_shape_52977 = (function (id,hover_QMARK_,meta52978){
this.id = id;
this.hover_QMARK_ = hover_QMARK_;
this.meta52978 = meta52978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.hover_shape_52977.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.hover_shape_52977.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","hover-shape","app.main.data.viewer/hover-shape",84002923);
}));

(app.main.data.viewer.hover_shape_52977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52979,meta52978__$1){
var self__ = this;
var _52979__$1 = this;
return (new app.main.data.viewer.hover_shape_52977(self__.id,self__.hover_QMARK_,meta52978__$1));
}));

(app.main.data.viewer.hover_shape_52977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52979){
var self__ = this;
var _52979__$1 = this;
return self__.meta52978;
}));

(app.main.data.viewer.hover_shape_52977.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.hover_shape_52977.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"hover","hover",-341141711)], null),(cljs.core.truth_(self__.hover_QMARK_)?self__.id:null));
}));
}

return (new app.main.data.viewer.hover_shape_52977(id,hover_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.go_to_dashboard = (function app$main$data$viewer$go_to_dashboard(){
if((typeof app.main.data.viewer.go_to_dashboard_52980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.go_to_dashboard_52980 = (function (meta52981){
this.meta52981 = meta52981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.go_to_dashboard_52980.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_dashboard_52980.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","go-to-dashboard","app.main.data.viewer/go-to-dashboard",-1938263263);
}));

(app.main.data.viewer.go_to_dashboard_52980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52982,meta52981__$1){
var self__ = this;
var _52982__$1 = this;
return (new app.main.data.viewer.go_to_dashboard_52980(meta52981__$1));
}));

(app.main.data.viewer.go_to_dashboard_52980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52982){
var self__ = this;
var _52982__$1 = this;
return self__.meta52981;
}));

(app.main.data.viewer.go_to_dashboard_52980.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_dashboard_52980.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"team-id","team-id",-14505725)], null));
return beicon.v2.core.of(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));
}));
}

return (new app.main.data.viewer.go_to_dashboard_52980(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.go_to_page = (function app$main$data$viewer$go_to_page(page_id){
if((typeof app.main.data.viewer.go_to_page_52983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.go_to_page_52983 = (function (page_id,meta52984){
this.page_id = page_id;
this.meta52984 = meta52984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.go_to_page_52983.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_page_52983.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","go-to-page","app.main.data.viewer/go-to-page",-599885403);
}));

(app.main.data.viewer.go_to_page_52983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52985,meta52984__$1){
var self__ = this;
var _52985__$1 = this;
return (new app.main.data.viewer.go_to_page_52983(self__.page_id,meta52984__$1));
}));

(app.main.data.viewer.go_to_page_52983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52985){
var self__ = this;
var _52985__$1 = this;
return self__.meta52984;
}));

(app.main.data.viewer.go_to_page_52983.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_page_52983.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"overlays","overlays",-1346586303)], null),cljs.core.PersistentVector.EMPTY);
}));

(app.main.data.viewer.go_to_page_52983.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_page_52983.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.router.get_params(state),new cljs.core.Keyword(null,"index","index",-1531685915),(0)),new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),params));
}));
}

return (new app.main.data.viewer.go_to_page_52983(page_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.viewer.go_to_workspace = (function app$main$data$viewer$go_to_workspace(var_args){
var G__52987 = arguments.length;
switch (G__52987) {
case 0:
return app.main.data.viewer.go_to_workspace.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.viewer.go_to_workspace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.viewer.go_to_workspace.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.viewer.go_to_workspace.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.viewer.go_to_workspace.cljs$core$IFn$_invoke$arity$1 = (function (page_id){
if((typeof app.main.data.viewer.go_to_workspace_52988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.viewer.go_to_workspace_52988 = (function (page_id,meta52989){
this.page_id = page_id;
this.meta52989 = meta52989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.viewer.go_to_workspace_52988.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_workspace_52988.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.viewer","go-to-workspace","app.main.data.viewer/go-to-workspace",-2073521677);
}));

(app.main.data.viewer.go_to_workspace_52988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52990,meta52989__$1){
var self__ = this;
var _52990__$1 = this;
return (new app.main.data.viewer.go_to_workspace_52988(self__.page_id,meta52989__$1));
}));

(app.main.data.viewer.go_to_workspace_52988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52990){
var self__ = this;
var _52990__$1 = this;
return self__.meta52989;
}));

(app.main.data.viewer.go_to_workspace_52988.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.viewer.go_to_workspace_52988.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = app.main.router.get_params(state);
var file_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var team_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"team-id","team-id",-14505725)], null));
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__52991 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(params);
if((G__52991 == null)){
return null;
} else {
return app.common.uuid.parse(G__52991);
}
}
})();
var params__$1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null);
var name = ""+"workspace-"+(file_id ?? "");
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),params__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.main.router","new-window","app.main.router/new-window",1705407424),true,new cljs.core.Keyword("app.main.router","window-name","app.main.router/window-name",321663835),name], 0)));
}));
}

return (new app.main.data.viewer.go_to_workspace_52988(page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.viewer.go_to_workspace.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.main.data.viewer.js.map
