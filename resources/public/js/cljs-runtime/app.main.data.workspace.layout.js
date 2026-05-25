import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.data.event.js";
import "./app.util.storage.js";
import "./clojure.set.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.layout');
app.main.data.workspace.layout.valid_flags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"sitemap","sitemap",-1803284096),null,new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517),null,new cljs.core.Keyword(null,"scale-text","scale-text",302781380),null,new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602),null,new cljs.core.Keyword(null,"show-pixel-grid","show-pixel-grid",-247932281),null,new cljs.core.Keyword(null,"assets","assets",210278279),null,new cljs.core.Keyword(null,"document-history","document-history",1908608999),null,new cljs.core.Keyword(null,"snap-guides","snap-guides",-1395069816),null,new cljs.core.Keyword(null,"comments","comments",-293346423),null,new cljs.core.Keyword(null,"display-artboard-names","display-artboard-names",-579016150),null,new cljs.core.Keyword(null,"rulers","rulers",756731282),null,new cljs.core.Keyword(null,"snap-ruler-guides","snap-ruler-guides",-1478768942),null,new cljs.core.Keyword(null,"dynamic-alignment","dynamic-alignment",-1699946765),null,new cljs.core.Keyword(null,"display-guides","display-guides",-1025684907),null,new cljs.core.Keyword(null,"hide-palettes","hide-palettes",-1168299178),null,new cljs.core.Keyword(null,"layers","layers",1944875032),null,new cljs.core.Keyword(null,"element-options","element-options",134701240),null], null), null);
app.main.data.workspace.layout.presets = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sitemap","sitemap",-1803284096),null,new cljs.core.Keyword(null,"document-history","document-history",1908608999),null,new cljs.core.Keyword(null,"layers","layers",1944875032),null], null), null),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assets","assets",210278279),null], null), null)], null),new cljs.core.Keyword(null,"document-history","document-history",1908608999),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sitemap","sitemap",-1803284096),null,new cljs.core.Keyword(null,"assets","assets",210278279),null,new cljs.core.Keyword(null,"layers","layers",1944875032),null], null), null),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"document-history","document-history",1908608999),null], null), null)], null),new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assets","assets",210278279),null,new cljs.core.Keyword(null,"document-history","document-history",1908608999),null], null), null),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sitemap","sitemap",-1803284096),null,new cljs.core.Keyword(null,"layers","layers",1944875032),null], null), null)], null),new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sitemap","sitemap",-1803284096),null,new cljs.core.Keyword(null,"assets","assets",210278279),null,new cljs.core.Keyword(null,"document-history","document-history",1908608999),null,new cljs.core.Keyword(null,"layers","layers",1944875032),null], null), null),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),null], null), null)], null)], null);
app.main.data.workspace.layout.valid_options_mode = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inspect","inspect",688794057),null,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),null,new cljs.core.Keyword(null,"design","design",1241338903),null], null), null);
app.main.data.workspace.layout.default_layout = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"sitemap","sitemap",-1803284096),null,new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602),null,new cljs.core.Keyword(null,"show-pixel-grid","show-pixel-grid",-247932281),null,new cljs.core.Keyword(null,"snap-guides","snap-guides",-1395069816),null,new cljs.core.Keyword(null,"display-artboard-names","display-artboard-names",-579016150),null,new cljs.core.Keyword(null,"rulers","rulers",756731282),null,new cljs.core.Keyword(null,"snap-ruler-guides","snap-ruler-guides",-1478768942),null,new cljs.core.Keyword(null,"dynamic-alignment","dynamic-alignment",-1699946765),null,new cljs.core.Keyword(null,"display-guides","display-guides",-1025684907),null,new cljs.core.Keyword(null,"layers","layers",1944875032),null,new cljs.core.Keyword(null,"element-options","element-options",134701240),null], null), null);
app.main.data.workspace.layout.default_global = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options-mode","options-mode",-1788898697),new cljs.core.Keyword(null,"design","design",1241338903)], null);
app.main.data.workspace.layout.ensure_layout = (function app$main$data$workspace$layout$ensure_layout(name){
if((typeof app.main.data.workspace.layout.ensure_layout_67567 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.layout.ensure_layout_67567 = (function (name,meta67568){
this.name = name;
this.meta67568 = meta67568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.layout.ensure_layout_67567.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.ensure_layout_67567.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.layout","ensure-layout","app.main.data.workspace.layout/ensure-layout",1851046511);
}));

(app.main.data.workspace.layout.ensure_layout_67567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67569,meta67568__$1){
var self__ = this;
var _67569__$1 = this;
return (new app.main.data.workspace.layout.ensure_layout_67567(self__.name,meta67568__$1));
}));

(app.main.data.workspace.layout.ensure_layout_67567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67569){
var self__ = this;
var _67569__$1 = this;
return self__.meta67568;
}));

(app.main.data.workspace.layout.ensure_layout_67567.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.ensure_layout_67567.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173),(function (stored){
var todel = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.layout.presets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.name,new cljs.core.Keyword(null,"del","del",574975584)], null),cljs.core.PersistentHashSet.EMPTY);
var toadd = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.layout.presets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.name,new cljs.core.Keyword(null,"add","add",235287739)], null),cljs.core.PersistentHashSet.EMPTY);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(stored,todel),toadd);
}));
}));
}

return (new app.main.data.workspace.layout.ensure_layout_67567(name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.layout.toggle_layout_flag = (function app$main$data$workspace$layout$toggle_layout_flag(var_args){
var args__5755__auto__ = [];
var len__5749__auto___67723 = arguments.length;
var i__5750__auto___67724 = (0);
while(true){
if((i__5750__auto___67724 < len__5749__auto___67723)){
args__5755__auto__.push((arguments[i__5750__auto___67724]));

var G__67725 = (i__5750__auto___67724 + (1));
i__5750__auto___67724 = G__67725;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.layout.toggle_layout_flag.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.layout.toggle_layout_flag.cljs$core$IFn$_invoke$arity$variadic = (function (flag,p__67584){
var map__67585 = p__67584;
var map__67585__$1 = cljs.core.__destructure_map(map__67585);
var opts = map__67585__$1;
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67585__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));
if((typeof app.main.data.workspace.layout.toggle_layout_flag_67586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.layout.toggle_layout_flag_67586 = (function (flag,p__67584,map__67585,opts,force_QMARK_,meta67587){
this.flag = flag;
this.p__67584 = p__67584;
this.map__67585 = map__67585;
this.opts = opts;
this.force_QMARK_ = force_QMARK_;
this.meta67587 = meta67587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.layout","toggle-layout-flag","app.main.data.workspace.layout/toggle-layout-flag",143616395);
}));

(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67588,meta67587__$1){
var self__ = this;
var _67588__$1 = this;
return (new app.main.data.workspace.layout.toggle_layout_flag_67586(self__.flag,self__.p__67584,self__.map__67585,self__.opts,self__.force_QMARK_,meta67587__$1));
}));

(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67588){
var self__ = this;
var _67588__$1 = this;
return self__.meta67587;
}));

(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),self__.flag], null);
}));

(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173),(function (flags){
if(cljs.core.truth_(self__.force_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(flags,self__.flag);
} else {
if(cljs.core.contains_QMARK_(flags,self__.flag)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(flags,self__.flag);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(flags,self__.flag);
}
}
}));
}));

(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.toggle_layout_flag_67586.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var flags = new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173).cljs$core$IFn$_invoke$arity$1(state);
return (app.main.data.workspace.layout.persist_layout_flags_BANG_.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.layout.persist_layout_flags_BANG_.cljs$core$IFn$_invoke$arity$1(flags) : app.main.data.workspace.layout.persist_layout_flags_BANG_.call(null,flags));
}));
}

return (new app.main.data.workspace.layout.toggle_layout_flag_67586(flag,p__67584,map__67585__$1,opts,force_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.layout.toggle_layout_flag.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.layout.toggle_layout_flag.cljs$lang$applyTo = (function (seq67582){
var G__67583 = cljs.core.first(seq67582);
var seq67582__$1 = cljs.core.next(seq67582);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67583,seq67582__$1);
}));

app.main.data.workspace.layout.remove_layout_flag = (function app$main$data$workspace$layout$remove_layout_flag(flag){
if((typeof app.main.data.workspace.layout.remove_layout_flag_67600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.layout.remove_layout_flag_67600 = (function (flag,meta67601){
this.flag = flag;
this.meta67601 = meta67601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.layout.remove_layout_flag_67600.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.remove_layout_flag_67600.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.layout","remove-layout-flag","app.main.data.workspace.layout/remove-layout-flag",-513988996);
}));

(app.main.data.workspace.layout.remove_layout_flag_67600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67602,meta67601__$1){
var self__ = this;
var _67602__$1 = this;
return (new app.main.data.workspace.layout.remove_layout_flag_67600(self__.flag,meta67601__$1));
}));

(app.main.data.workspace.layout.remove_layout_flag_67600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67602){
var self__ = this;
var _67602__$1 = this;
return self__.meta67601;
}));

(app.main.data.workspace.layout.remove_layout_flag_67600.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.remove_layout_flag_67600.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173),(function (flags){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(flags,self__.flag);
}));
}));

(app.main.data.workspace.layout.remove_layout_flag_67600.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.remove_layout_flag_67600.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var flags = new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173).cljs$core$IFn$_invoke$arity$1(state);
return (app.main.data.workspace.layout.persist_layout_flags_BANG_.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.layout.persist_layout_flags_BANG_.cljs$core$IFn$_invoke$arity$1(flags) : app.main.data.workspace.layout.persist_layout_flags_BANG_.call(null,flags));
}));
}

return (new app.main.data.workspace.layout.remove_layout_flag_67600(flag,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.layout.set_options_mode = (function app$main$data$workspace$layout$set_options_mode(mode){
app.common.data.macros.runtime_assert("expected valid options mode",(function (){
return cljs.core.contains_QMARK_(app.main.data.workspace.layout.valid_options_mode,mode);
}));

if((typeof app.main.data.workspace.layout.set_options_mode_67620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.layout.set_options_mode_67620 = (function (mode,meta67621){
this.mode = mode;
this.meta67621 = meta67621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.layout.set_options_mode_67620.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.set_options_mode_67620.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.layout","set-options-mode","app.main.data.workspace.layout/set-options-mode",641151177);
}));

(app.main.data.workspace.layout.set_options_mode_67620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67622,meta67621__$1){
var self__ = this;
var _67622__$1 = this;
return (new app.main.data.workspace.layout.set_options_mode_67620(self__.mode,meta67621__$1));
}));

(app.main.data.workspace.layout.set_options_mode_67620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67622){
var self__ = this;
var _67622__$1 = this;
return self__.meta67621;
}));

(app.main.data.workspace.layout.set_options_mode_67620.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.set_options_mode_67620.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:sidebar",new cljs.core.Keyword(null,"mode","mode",654403691),app.common.data.name(self__.mode)], null);
}));

(app.main.data.workspace.layout.set_options_mode_67620.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layout.set_options_mode_67620.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"options-mode","options-mode",-1788898697)], null),self__.mode);
}));
}

return (new app.main.data.workspace.layout.set_options_mode_67620(mode,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A map of layout flags that should be persisted in local storage; the
 *   value corresponds to the key that will be used for save the data in
 *   storage object. It should be namespace qualified.
 */
app.main.data.workspace.layout.layout_flags_persistence_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hide-palettes","hide-palettes",-1168299178),new cljs.core.Keyword("app.main.data.workspace","hide-palettes?","app.main.data.workspace/hide-palettes?",196615363),new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517),new cljs.core.Keyword("app.main.data.workspace","show-colorpalette?","app.main.data.workspace/show-colorpalette?",1262958508),new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868),new cljs.core.Keyword("app.main.data.workspace","show-textpalette?","app.main.data.workspace/show-textpalette?",-591861084),new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.Keyword("app.main.data.workspace","show-rulers?","app.main.data.workspace/show-rulers?",1922241389)], null);
/**
 * Given the current layout flags, and updates them with the data
 *   stored in Storage.
 */
app.main.data.workspace.layout.load_layout_flags = (function app$main$data$workspace$layout$load_layout_flags(layout){
var layout__$1 = cljs.core.set((function (){var or__5025__auto__ = layout;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})());
return cljs.core.reduce_kv((function (layout__$2,flag,key){
var pred__67623 = cljs.core._EQ_;
var expr__67624 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.util.storage.user,key,new cljs.core.Keyword("app.main.data.workspace.layout","none","app.main.data.workspace.layout/none",1099104099));
if(cljs.core.truth_((pred__67623.cljs$core$IFn$_invoke$arity$2 ? pred__67623.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.layout","none","app.main.data.workspace.layout/none",1099104099),expr__67624) : pred__67623.call(null,new cljs.core.Keyword("app.main.data.workspace.layout","none","app.main.data.workspace.layout/none",1099104099),expr__67624)))){
return layout__$2;
} else {
if(cljs.core.truth_((pred__67623.cljs$core$IFn$_invoke$arity$2 ? pred__67623.cljs$core$IFn$_invoke$arity$2(false,expr__67624) : pred__67623.call(null,false,expr__67624)))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(layout__$2,flag);
} else {
if(cljs.core.truth_((pred__67623.cljs$core$IFn$_invoke$arity$2 ? pred__67623.cljs$core$IFn$_invoke$arity$2(true,expr__67624) : pred__67623.call(null,true,expr__67624)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(layout__$2,flag);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__67624)].join('')));
}
}
}
}),layout__$1,app.main.data.workspace.layout.layout_flags_persistence_mapping);
});
/**
 * Given a set of layout flags, and persist a subset of them to the Storage.
 */
app.main.data.workspace.layout.persist_layout_flags_BANG_ = (function app$main$data$workspace$layout$persist_layout_flags_BANG_(layout){
var seq__67626 = cljs.core.seq(app.main.data.workspace.layout.layout_flags_persistence_mapping);
var chunk__67627 = null;
var count__67628 = (0);
var i__67629 = (0);
while(true){
if((i__67629 < count__67628)){
var vec__67643 = chunk__67627.cljs$core$IIndexed$_nth$arity$2(null,i__67629);
var flag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67643,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67643,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,key,cljs.core.contains_QMARK_(layout,flag));


var G__67732 = seq__67626;
var G__67733 = chunk__67627;
var G__67734 = count__67628;
var G__67735 = (i__67629 + (1));
seq__67626 = G__67732;
chunk__67627 = G__67733;
count__67628 = G__67734;
i__67629 = G__67735;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67626);
if(temp__5825__auto__){
var seq__67626__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67626__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67626__$1);
var G__67736 = cljs.core.chunk_rest(seq__67626__$1);
var G__67737 = c__5548__auto__;
var G__67738 = cljs.core.count(c__5548__auto__);
var G__67739 = (0);
seq__67626 = G__67736;
chunk__67627 = G__67737;
count__67628 = G__67738;
i__67629 = G__67739;
continue;
} else {
var vec__67649 = cljs.core.first(seq__67626__$1);
var flag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67649,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67649,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,key,cljs.core.contains_QMARK_(layout,flag));


var G__67740 = cljs.core.next(seq__67626__$1);
var G__67741 = null;
var G__67742 = (0);
var G__67743 = (0);
seq__67626 = G__67740;
chunk__67627 = G__67741;
count__67628 = G__67742;
i__67629 = G__67743;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * A mapping of keys that need to be persisted from `:workspace-global` into Storage.
 */
app.main.data.workspace.layout.layout_state_persistence_mapping = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected-palette","selected-palette",-928747602),new cljs.core.Keyword("app.main.data.workspace","selected-palette","app.main.data.workspace/selected-palette",-1157185963),new cljs.core.Keyword(null,"selected-palette-colorpicker","selected-palette-colorpicker",1737136573),new cljs.core.Keyword("app.main.data.workspace","selected-palette-colorpicker","app.main.data.workspace/selected-palette-colorpicker",1592339174)], null);
/**
 * Given state (the :workspace-global) and update it with layout related
 *   props that are previously persisted in the Storage.
 */
app.main.data.workspace.layout.load_layout_state = (function app$main$data$workspace$layout$load_layout_state(state){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,p__67658){
var vec__67661 = p__67658;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67661,(0),null);
var skey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67661,(1),null);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.util.storage.user,skey,new cljs.core.Keyword("app.main.data.workspace.layout","none","app.main.data.workspace.layout/none",1099104099));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("app.main.data.workspace.layout","none","app.main.data.workspace.layout/none",1099104099))){
return state__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,key,val);
}
}),state,app.main.data.workspace.layout.layout_state_persistence_mapping);
});
/**
 * Given state (the :workspace-global) and persists a subset of layout
 *   related props to the Storage.
 */
app.main.data.workspace.layout.persist_layout_state_BANG_ = (function app$main$data$workspace$layout$persist_layout_state_BANG_(state){
var seq__67671 = cljs.core.seq(app.main.data.workspace.layout.layout_state_persistence_mapping);
var chunk__67672 = null;
var count__67673 = (0);
var i__67674 = (0);
while(true){
if((i__67674 < count__67673)){
var vec__67694 = chunk__67672.cljs$core$IIndexed$_nth$arity$2(null,i__67674);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67694,(0),null);
var skey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67694,(1),null);
var val_67746 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,key,new cljs.core.Keyword("app.main.data.workspace.layout","does-not-exist","app.main.data.workspace.layout/does-not-exist",-431015942));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_67746,new cljs.core.Keyword("app.main.data.workspace.layout","does-not-exist","app.main.data.workspace.layout/does-not-exist",-431015942))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.storage.user,cljs.core.dissoc,skey);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,skey,val_67746);
}


var G__67747 = seq__67671;
var G__67748 = chunk__67672;
var G__67749 = count__67673;
var G__67750 = (i__67674 + (1));
seq__67671 = G__67747;
chunk__67672 = G__67748;
count__67673 = G__67749;
i__67674 = G__67750;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__67671);
if(temp__5825__auto__){
var seq__67671__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67671__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__67671__$1);
var G__67751 = cljs.core.chunk_rest(seq__67671__$1);
var G__67752 = c__5548__auto__;
var G__67753 = cljs.core.count(c__5548__auto__);
var G__67754 = (0);
seq__67671 = G__67751;
chunk__67672 = G__67752;
count__67673 = G__67753;
i__67674 = G__67754;
continue;
} else {
var vec__67705 = cljs.core.first(seq__67671__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67705,(0),null);
var skey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67705,(1),null);
var val_67755 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,key,new cljs.core.Keyword("app.main.data.workspace.layout","does-not-exist","app.main.data.workspace.layout/does-not-exist",-431015942));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_67755,new cljs.core.Keyword("app.main.data.workspace.layout","does-not-exist","app.main.data.workspace.layout/does-not-exist",-431015942))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.util.storage.user,cljs.core.dissoc,skey);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,skey,val_67755);
}


var G__67756 = cljs.core.next(seq__67671__$1);
var G__67757 = null;
var G__67758 = (0);
var G__67759 = (0);
seq__67671 = G__67756;
chunk__67672 = G__67757;
count__67673 = G__67758;
i__67674 = G__67759;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=app.main.data.workspace.layout.js.map
