import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.persistence.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.thumbnails.js";
import "./app.main.refs.js";
import "./app.main.repo.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.versions');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.data !== 'undefined') && (typeof app.main.data.workspace !== 'undefined') && (typeof app.main.data.workspace.versions !== 'undefined') && (typeof app.main.data.workspace.versions.default_state !== 'undefined')){
} else {
app.main.data.workspace.versions.default_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"data","data",-232669377),null,new cljs.core.Keyword(null,"editing","editing",1365491601),null], null);
}
app.main.data.workspace.versions.init_versions_state = (function app$main$data$workspace$versions$init_versions_state(){
if((typeof app.main.data.workspace.versions.init_versions_state_52419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.init_versions_state_52419 = (function (meta52420){
this.meta52420 = meta52420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.init_versions_state_52419.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.init_versions_state_52419.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","init-versions-state","app.main.data.workspace.versions/init-versions-state",-1179770191);
}));

(app.main.data.workspace.versions.init_versions_state_52419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52421,meta52420__$1){
var self__ = this;
var _52421__$1 = this;
return (new app.main.data.workspace.versions.init_versions_state_52419(meta52420__$1));
}));

(app.main.data.workspace.versions.init_versions_state_52419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52421){
var self__ = this;
var _52421__$1 = this;
return self__.meta52420;
}));

(app.main.data.workspace.versions.init_versions_state_52419.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.init_versions_state_52419.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-versions","workspace-versions",-347907449),app.main.data.workspace.versions.default_state);
}));

(app.main.data.workspace.versions.init_versions_state_52419.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.init_versions_state_52419.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of((app.main.data.workspace.versions.fetch_versions.cljs$core$IFn$_invoke$arity$0 ? app.main.data.workspace.versions.fetch_versions.cljs$core$IFn$_invoke$arity$0() : app.main.data.workspace.versions.fetch_versions.call(null)));
}));
}

return (new app.main.data.workspace.versions.init_versions_state_52419(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.update_versions_state = (function app$main$data$workspace$versions$update_versions_state(version_state){
if((typeof app.main.data.workspace.versions.update_versions_state_52423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.update_versions_state_52423 = (function (version_state,meta52424){
this.version_state = version_state;
this.meta52424 = meta52424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.update_versions_state_52423.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.update_versions_state_52423.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","update-versions-state","app.main.data.workspace.versions/update-versions-state",-403020738);
}));

(app.main.data.workspace.versions.update_versions_state_52423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52425,meta52424__$1){
var self__ = this;
var _52425__$1 = this;
return (new app.main.data.workspace.versions.update_versions_state_52423(self__.version_state,meta52424__$1));
}));

(app.main.data.workspace.versions.update_versions_state_52423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52425){
var self__ = this;
var _52425__$1 = this;
return self__.meta52424;
}));

(app.main.data.workspace.versions.update_versions_state_52423.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.update_versions_state_52423.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-versions","workspace-versions",-347907449),cljs.core.merge,self__.version_state);
}));
}

return (new app.main.data.workspace.versions.update_versions_state_52423(version_state,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.fetch_versions = (function app$main$data$workspace$versions$fetch_versions(){
if((typeof app.main.data.workspace.versions.fetch_versions_52429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.fetch_versions_52429 = (function (meta52430){
this.meta52430 = meta52430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.fetch_versions_52429.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.fetch_versions_52429.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","fetch-versions","app.main.data.workspace.versions/fetch-versions",575668956);
}));

(app.main.data.workspace.versions.fetch_versions_52429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52431,meta52430__$1){
var self__ = this;
var _52431__$1 = this;
return (new app.main.data.workspace.versions.fetch_versions_52429(meta52430__$1));
}));

(app.main.data.workspace.versions.fetch_versions_52429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52431){
var self__ = this;
var _52431__$1 = this;
return self__.meta52430;
}));

(app.main.data.workspace.versions.fetch_versions_52429.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.fetch_versions_52429.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var file_id = temp__5825__auto__;
return beicon.v2.core.map((function (p1__52428_SHARP_){
return app.main.data.workspace.versions.update_versions_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"loaded","loaded",-1246482293),new cljs.core.Keyword(null,"data","data",-232669377),p1__52428_SHARP_], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-snapshots","get-file-snapshots",1534053253),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.versions.fetch_versions_52429(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.create_version = (function app$main$data$workspace$versions$create_version(){
if((typeof app.main.data.workspace.versions.create_version_52433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.create_version_52433 = (function (meta52434){
this.meta52434 = meta52434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.create_version_52433.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.create_version_52433.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","create-version","app.main.data.workspace.versions/create-version",981657945);
}));

(app.main.data.workspace.versions.create_version_52433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52435,meta52434__$1){
var self__ = this;
var _52435__$1 = this;
return (new app.main.data.workspace.versions.create_version_52433(meta52434__$1));
}));

(app.main.data.workspace.versions.create_version_52433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52435){
var self__ = this;
var _52435__$1 = this;
return self__.meta52434;
}));

(app.main.data.workspace.versions.create_version_52433.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.create_version_52433.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var label = app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(app.common.time.now(),new cljs.core.Keyword(null,"localized-date","localized-date",-1568818775));
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.concat(beicon.v2.core.of(new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199),potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-version"], null))),beicon.v2.core.mapcat((function (p__52437){
var map__52438 = p__52437;
var map__52438__$1 = cljs.core.__destructure_map(map__52438);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52438__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return beicon.v2.core.of(app.main.data.workspace.versions.update_versions_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),id], null)),app.main.data.workspace.versions.fetch_versions());
}),beicon.v2.core.mapcat((function (){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-file-snapshot","create-file-snapshot",-501759469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"label","label",1718410804),label], null));
}),beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__52432_SHARP_){
return (((p1__52432_SHARP_ == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"saved","saved",288760660),p1__52432_SHARP_)));
}),beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.persistence_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null)))))));
}));
}

return (new app.main.data.workspace.versions.create_version_52433(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.rename_version = (function app$main$data$workspace$versions$rename_version(id,label){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if(cljs.core.truth_((app.common.schema.valid_text_QMARK_.cljs$core$IFn$_invoke$arity$1 ? app.common.schema.valid_text_QMARK_.cljs$core$IFn$_invoke$arity$1(label) : app.common.schema.valid_text_QMARK_.call(null,label)))){
} else {
throw (new Error(["Assert failed: ","expected not empty string for `label`","\n","(sm/valid-text? label)"].join('')));
}

if((typeof app.main.data.workspace.versions.rename_version_52439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.rename_version_52439 = (function (id,label,meta52440){
this.id = id;
this.label = label;
this.meta52440 = meta52440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.rename_version_52439.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.rename_version_52439.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","rename-version","app.main.data.workspace.versions/rename-version",-1166823355);
}));

(app.main.data.workspace.versions.rename_version_52439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52441,meta52440__$1){
var self__ = this;
var _52441__$1 = this;
return (new app.main.data.workspace.versions.rename_version_52439(self__.id,self__.label,meta52440__$1));
}));

(app.main.data.workspace.versions.rename_version_52439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52441){
var self__ = this;
var _52441__$1 = this;
return self__.meta52440;
}));

(app.main.data.workspace.versions.rename_version_52439.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.rename_version_52439.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.workspace.versions.update_versions_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),null], null)),potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"rename-version",new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null))),beicon.v2.core.map(app.main.data.workspace.versions.fetch_versions,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-file-snapshot","update-file-snapshot",149964604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"label","label",1718410804),self__.label], null))));
}));
}

return (new app.main.data.workspace.versions.rename_version_52439(id,label,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.restore_version = (function app$main$data$workspace$versions$restore_version(id,origin){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.versions.restore_version_52450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.restore_version_52450 = (function (id,origin,meta52451){
this.id = id;
this.origin = origin;
this.meta52451 = meta52451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.restore_version_52450.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.restore_version_52450.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","restore-version","app.main.data.workspace.versions/restore-version",-271431225);
}));

(app.main.data.workspace.versions.restore_version_52450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52452,meta52451__$1){
var self__ = this;
var _52452__$1 = this;
return (new app.main.data.workspace.versions.restore_version_52450(self__.id,self__.origin,meta52451__$1));
}));

(app.main.data.workspace.versions.restore_version_52450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52452){
var self__ = this;
var _52452__$1 = this;
return self__.meta52451;
}));

(app.main.data.workspace.versions.restore_version_52450.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.restore_version_52450.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.concat(beicon.v2.core.of(new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199),app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"document-history","document-history",1908608999))),beicon.v2.core.map((function (){
return app.main.data.workspace.initialize_workspace(team_id,file_id);
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
return app.main.data.workspace.thumbnails.clear_queue_BANG_();
}),beicon.v2.core.mapcat((function (){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-file-snapshot","restore-file-snapshot",1965192434),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null));
}),beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__52449_SHARP_){
return (((p1__52449_SHARP_ == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"saved","saved",288760660),p1__52449_SHARP_)));
}),beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.persistence_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null))))))),(function (){var G__52453 = self__.origin;
var G__52453__$1 = (((G__52453 instanceof cljs.core.Keyword))?G__52453.fqn:null);
switch (G__52453__$1) {
case "version":
return beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"restore-pin-version"], null)));

break;
case "snapshot":
return beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"restore-autosave"], null)));

break;
case "plugin":
return beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"restore-version-plugin"], null)));

break;
default:
return beicon.v2.core.empty();

}
})());
}));
}

return (new app.main.data.workspace.versions.restore_version_52450(id,origin,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.delete_version = (function app$main$data$workspace$versions$delete_version(id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.versions.delete_version_52455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.delete_version_52455 = (function (id,meta52456){
this.id = id;
this.meta52456 = meta52456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.delete_version_52455.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.delete_version_52455.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","delete-version","app.main.data.workspace.versions/delete-version",-947424824);
}));

(app.main.data.workspace.versions.delete_version_52455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52457,meta52456__$1){
var self__ = this;
var _52457__$1 = this;
return (new app.main.data.workspace.versions.delete_version_52455(self__.id,meta52456__$1));
}));

(app.main.data.workspace.versions.delete_version_52455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52457){
var self__ = this;
var _52457__$1 = this;
return self__.meta52456;
}));

(app.main.data.workspace.versions.delete_version_52455.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.delete_version_52455.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.workspace.versions.fetch_versions,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-file-snapshot","delete-file-snapshot",-364018056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)));
}));
}

return (new app.main.data.workspace.versions.delete_version_52455(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.pin_version = (function app$main$data$workspace$versions$pin_version(id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.versions.pin_version_52462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.pin_version_52462 = (function (id,meta52463){
this.id = id;
this.meta52463 = meta52463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.pin_version_52462.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.pin_version_52462.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","pin-version","app.main.data.workspace.versions/pin-version",-1713491836);
}));

(app.main.data.workspace.versions.pin_version_52462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52464,meta52463__$1){
var self__ = this;
var _52464__$1 = this;
return (new app.main.data.workspace.versions.pin_version_52462(self__.id,meta52463__$1));
}));

(app.main.data.workspace.versions.pin_version_52462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52464){
var self__ = this;
var _52464__$1 = this;
return self__.meta52463;
}));

(app.main.data.workspace.versions.pin_version_52462.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.pin_version_52462.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__52461_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52461_SHARP_),self__.id);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-versions","workspace-versions",-347907449)),new cljs.core.Keyword(null,"data","data",-232669377)));
if(cljs.core.truth_(temp__5825__auto__)){
var version = temp__5825__auto__;
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"label","label",1718410804),app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(version),new cljs.core.Keyword(null,"localized-date","localized-date",-1568818775))], null);
return beicon.v2.core.mapcat((function (___$3){
return beicon.v2.core.of(app.main.data.workspace.versions.update_versions_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),self__.id], null)),app.main.data.workspace.versions.fetch_versions(),potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"pin-version"], null)));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-file-snapshot","update-file-snapshot",149964604),params));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.versions.pin_version_52462(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.lock_version = (function app$main$data$workspace$versions$lock_version(id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.versions.lock_version_52465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.lock_version_52465 = (function (id,meta52466){
this.id = id;
this.meta52466 = meta52466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.lock_version_52465.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.lock_version_52465.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","lock-version","app.main.data.workspace.versions/lock-version",1380868749);
}));

(app.main.data.workspace.versions.lock_version_52465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52467,meta52466__$1){
var self__ = this;
var _52467__$1 = this;
return (new app.main.data.workspace.versions.lock_version_52465(self__.id,meta52466__$1));
}));

(app.main.data.workspace.versions.lock_version_52465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52467){
var self__ = this;
var _52467__$1 = this;
return self__.meta52466;
}));

(app.main.data.workspace.versions.lock_version_52465.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.lock_version_52465.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.workspace.versions.fetch_versions,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lock-file-snapshot","lock-file-snapshot",641874912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)));
}));
}

return (new app.main.data.workspace.versions.lock_version_52465(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.unlock_version = (function app$main$data$workspace$versions$unlock_version(id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.versions.unlock_version_52469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.unlock_version_52469 = (function (id,meta52470){
this.id = id;
this.meta52470 = meta52470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.unlock_version_52469.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.unlock_version_52469.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","unlock-version","app.main.data.workspace.versions/unlock-version",-689564215);
}));

(app.main.data.workspace.versions.unlock_version_52469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52471,meta52470__$1){
var self__ = this;
var _52471__$1 = this;
return (new app.main.data.workspace.versions.unlock_version_52469(self__.id,meta52470__$1));
}));

(app.main.data.workspace.versions.unlock_version_52469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52471){
var self__ = this;
var _52471__$1 = this;
return self__.meta52470;
}));

(app.main.data.workspace.versions.unlock_version_52469.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.unlock_version_52469.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.workspace.versions.fetch_versions,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unlock-file-snapshot","unlock-file-snapshot",1862162537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)));
}));
}

return (new app.main.data.workspace.versions.unlock_version_52469(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.wait_persisted_status = (function app$main$data$workspace$versions$wait_persisted_status(){
return beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__52478_SHARP_){
return (((p1__52478_SHARP_ == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"saved","saved",288760660),p1__52478_SHARP_)));
}),beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.persistence_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null))));
});
app.main.data.workspace.versions.create_version_from_plugins = (function app$main$data$workspace$versions$create_version_from_plugins(file_id,label,resolve,reject){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `file-id`","\n","(uuid? file-id)"].join('')));
}

if(cljs.core.truth_((app.common.schema.valid_text_QMARK_.cljs$core$IFn$_invoke$arity$1 ? app.common.schema.valid_text_QMARK_.cljs$core$IFn$_invoke$arity$1(label) : app.common.schema.valid_text_QMARK_.call(null,label)))){
} else {
throw (new Error(["Assert failed: ","expected not empty string for `label`","\n","(sm/valid-text? label)"].join('')));
}

if((typeof app.main.data.workspace.versions.create_version_from_plugins_52503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.create_version_from_plugins_52503 = (function (file_id,label,resolve,reject,meta52504){
this.file_id = file_id;
this.label = label;
this.resolve = resolve;
this.reject = reject;
this.meta52504 = meta52504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.create_version_from_plugins_52503.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.create_version_from_plugins_52503.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","create-version-from-plugins","app.main.data.workspace.versions/create-version-from-plugins",1775351294);
}));

(app.main.data.workspace.versions.create_version_from_plugins_52503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52505,meta52504__$1){
var self__ = this;
var _52505__$1 = this;
return (new app.main.data.workspace.versions.create_version_from_plugins_52503(self__.file_id,self__.label,self__.resolve,self__.reject,meta52504__$1));
}));

(app.main.data.workspace.versions.create_version_from_plugins_52503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52505){
var self__ = this;
var _52505__$1 = this;
return self__.meta52504;
}));

(app.main.data.workspace.versions.create_version_from_plugins_52503.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.create_version_from_plugins_52503.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var current_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (error){
(self__.reject.cljs$core$IFn$_invoke$arity$1 ? self__.reject.cljs$core$IFn$_invoke$arity$1(error) : self__.reject.call(null,error));

return beicon.v2.core.empty();
}),beicon.v2.core.concat(beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"plugins",new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-version"], null))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.file_id,current_file_id))?beicon.v2.core.of(new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199)):null),beicon.v2.core.ignore(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(self__.resolve,beicon.v2.core.mapcat((function (p__52506){
var map__52507 = p__52506;
var map__52507__$1 = cljs.core.__destructure_map(map__52507);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52507__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return beicon.v2.core.map((function (versions){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__52502_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52502_SHARP_));
}),versions);
}),beicon.v2.core.take((1),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-snapshots","get-file-snapshots",1534053253),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], null))));
}),beicon.v2.core.mapcat((function (___$3){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-file-snapshot","create-file-snapshot",-501759469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"label","label",1718410804),self__.label], null));
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.file_id,current_file_id))?app.main.data.workspace.versions.wait_persisted_status():beicon.v2.core.of(new cljs.core.Keyword(null,"nothing","nothing",-1022703296)))))))));
}));
}

return (new app.main.data.workspace.versions.create_version_from_plugins_52503(file_id,label,resolve,reject,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.versions.restore_version_from_plugin = (function app$main$data$workspace$versions$restore_version_from_plugin(file_id,id,resolve,_reject){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.versions.restore_version_from_plugins_52516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.versions.restore_version_from_plugins_52516 = (function (file_id,id,resolve,_reject,meta52517){
this.file_id = file_id;
this.id = id;
this.resolve = resolve;
this._reject = _reject;
this.meta52517 = meta52517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.versions.restore_version_from_plugins_52516.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.restore_version_from_plugins_52516.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.versions","restore-version-from-plugins","app.main.data.workspace.versions/restore-version-from-plugins",-1455971033);
}));

(app.main.data.workspace.versions.restore_version_from_plugins_52516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52518,meta52517__$1){
var self__ = this;
var _52518__$1 = this;
return (new app.main.data.workspace.versions.restore_version_from_plugins_52516(self__.file_id,self__.id,self__.resolve,self__._reject,meta52517__$1));
}));

(app.main.data.workspace.versions.restore_version_from_plugins_52516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52518){
var self__ = this;
var _52518__$1 = this;
return self__.meta52517;
}));

(app.main.data.workspace.versions.restore_version_from_plugins_52516.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.versions.restore_version_from_plugins_52516.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(state,self__.file_id);
var team_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
}
})();
return beicon.v2.core.concat(beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"restore-version-plugin"], null)),new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199)),beicon.v2.core.map((function (){
return app.main.data.workspace.initialize_workspace(team_id,self__.file_id);
}),beicon.v2.core.mapcat((function (){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-file-snapshot","restore-file-snapshot",1965192434),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null));
}),beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__52515_SHARP_){
return (((p1__52515_SHARP_ == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"saved","saved",288760660),p1__52515_SHARP_)));
}),beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.persistence_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null)))))),beicon.v2.core.ignore(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(self__.resolve,beicon.v2.core.of((1)))));
}));
}

return (new app.main.data.workspace.versions.restore_version_from_plugins_52516(file_id,id,resolve,_reject,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.versions.js.map
