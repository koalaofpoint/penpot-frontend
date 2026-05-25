import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.notifications');
app.main.data.notifications.default_timeout = (7000);
app.main.data.notifications.schema_COLON_notification = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Notification"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"info","info",-317069002),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hide","hide",-596913169),null,new cljs.core.Keyword(null,"visible","visible",-1024216805),null], null), null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"floating","floating",-1978091029),null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),null,new cljs.core.Keyword(null,"inline","inline",1399884222),null], null), null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toast","toast",68598129),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"inline","inline",1399884222),null], null), null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bottom-actions","bottom-actions",-2121294335),null,new cljs.core.Keyword(null,"close","close",1835149582),null,new cljs.core.Keyword(null,"inline-actions","inline-actions",-1590886374),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword("app.common.schema","fn","app.common.schema/fn",-520191477)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel","cancel",-1964088360),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword("app.common.schema","fn","app.common.schema/fn",-520191477)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword("app.common.schema","fn","app.common.schema/fn",-520191477)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword("app.common.schema","fn","app.common.schema/fn",-520191477)], null)], null)], null)], null)], null);
app.main.data.notifications.check_notification = app.common.schema.check_fn(app.main.data.notifications.schema_COLON_notification);
app.main.data.notifications.show = (function app$main$data$notifications$show(data){
if(cljs.core.truth_(app.main.data.notifications.check_notification(data))){
} else {
throw (new Error(["Assert failed: ","expected valid notification map","\n","(check-notification data)"].join('')));
}

if((typeof app.main.data.notifications.show_51252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.notifications.show_51252 = (function (data,meta51253){
this.data = data;
this.meta51253 = meta51253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.notifications.show_51252.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.notifications.show_51252.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.notifications","show","app.main.data.notifications/show",-2058845717);
}));

(app.main.data.notifications.show_51252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51254,meta51253__$1){
var self__ = this;
var _51254__$1 = this;
return (new app.main.data.notifications.show_51252(self__.data,meta51253__$1));
}));

(app.main.data.notifications.show_51252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51254){
var self__ = this;
var _51254__$1 = this;
return self__.meta51253;
}));

(app.main.data.notifications.show_51252.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.notifications.show_51252.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var notification = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.data,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"visible","visible",-1024216805));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"notification","notification",-222338233),notification);
}));

(app.main.data.notifications.show_51252.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.notifications.show_51252.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
return beicon.v2.core.merge((function (){var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.notifications","hide","app.main.data.notifications/hide",-465940781)),stream);
var route_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"route","route",329891309)),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"name","name",1843675177));
return beicon.v2.core.take_until(stopper,beicon.v2.core.map(app.main.data.notifications.hide,beicon.v2.core.filter((function (p1__51249_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(route_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51249_SHARP_));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.router","navigate","app.main.router/navigate",-477162538)),stream)))));
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(self__.data))?(function (){var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.notifications","show","app.main.data.notifications/show",-2058845717)),stream);
return beicon.v2.core.take_until(stopper,beicon.v2.core.delay(new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(self__.data),beicon.v2.core.of((app.main.data.notifications.hide.cljs$core$IFn$_invoke$arity$0 ? app.main.data.notifications.hide.cljs$core$IFn$_invoke$arity$0() : app.main.data.notifications.hide.call(null)))));
})():null));
}));
}

return (new app.main.data.notifications.show_51252(data,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.notifications.hide = (function app$main$data$notifications$hide(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51311 = arguments.length;
var i__5750__auto___51312 = (0);
while(true){
if((i__5750__auto___51312 < len__5749__auto___51311)){
args__5755__auto__.push((arguments[i__5750__auto___51312]));

var G__51313 = (i__5750__auto___51312 + (1));
i__5750__auto___51312 = G__51313;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.notifications.hide.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.notifications.hide.cljs$core$IFn$_invoke$arity$variadic = (function (p__51261){
var map__51262 = p__51261;
var map__51262__$1 = cljs.core.__destructure_map(map__51262);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51262__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if((typeof app.main.data.notifications.hide_51263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.notifications.hide_51263 = (function (p__51261,map__51262,tag,meta51264){
this.p__51261 = p__51261;
this.map__51262 = map__51262;
this.tag = tag;
this.meta51264 = meta51264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.notifications.hide_51263.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.notifications.hide_51263.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.notifications","hide","app.main.data.notifications/hide",-465940781);
}));

(app.main.data.notifications.hide_51263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51265,meta51264__$1){
var self__ = this;
var _51265__$1 = this;
return (new app.main.data.notifications.hide_51263(self__.p__51261,self__.map__51262,self__.tag,meta51264__$1));
}));

(app.main.data.notifications.hide_51263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51265){
var self__ = this;
var _51265__$1 = this;
return self__.meta51264;
}));

(app.main.data.notifications.hide_51263.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.notifications.hide_51263.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if((!((self__.tag == null)))){
var notification = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"notification","notification",-222338233));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tag,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(notification))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"notification","notification",-222338233));
} else {
return state;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"notification","notification",-222338233));
}
}));
}

return (new app.main.data.notifications.hide_51263(p__51261,map__51262__$1,tag,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.notifications.hide.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.notifications.hide.cljs$lang$applyTo = (function (seq51260){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51260));
}));

app.main.data.notifications.error = (function app$main$data$notifications$error(content){
return app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358)], null));
});
app.main.data.notifications.info = (function app$main$data$notifications$info(var_args){
var G__51273 = arguments.length;
switch (G__51273) {
case 1:
return app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$1 = (function (content){
return app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$2(content,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$2 = (function (content,p__51274){
var map__51275 = p__51274;
var map__51275__$1 = cljs.core.__destructure_map(map__51275);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51275__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),app.main.data.notifications.default_timeout);
return app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout], null));
}));

(app.main.data.notifications.info.cljs$lang$maxFixedArity = 2);

app.main.data.notifications.success = (function app$main$data$notifications$success(var_args){
var G__51277 = arguments.length;
switch (G__51277) {
case 1:
return app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1 = (function (content){
return app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$2(content,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$2 = (function (content,p__51278){
var map__51281 = p__51278;
var map__51281__$1 = cljs.core.__destructure_map(map__51281);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51281__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),app.main.data.notifications.default_timeout);
return app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout], null));
}));

(app.main.data.notifications.success.cljs$lang$maxFixedArity = 2);

app.main.data.notifications.warn = (function app$main$data$notifications$warn(var_args){
var G__51285 = arguments.length;
switch (G__51285) {
case 1:
return app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$1 = (function (content){
return app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$2(content,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$2 = (function (content,p__51286){
var map__51287 = p__51286;
var map__51287__$1 = cljs.core.__destructure_map(map__51287);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51287__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),app.main.data.notifications.default_timeout);
return app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout], null));
}));

(app.main.data.notifications.warn.cljs$lang$maxFixedArity = 2);

app.main.data.notifications.dialog = (function app$main$data$notifications$dialog(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51321 = arguments.length;
var i__5750__auto___51322 = (0);
while(true){
if((i__5750__auto___51322 < len__5749__auto___51321)){
args__5755__auto__.push((arguments[i__5750__auto___51322]));

var G__51323 = (i__5750__auto___51322 + (1));
i__5750__auto___51322 = G__51323;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.notifications.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.notifications.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (p__51290){
var map__51291 = p__51290;
var map__51291__$1 = cljs.core.__destructure_map(map__51291);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword(null,"content","content",15833224));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword(null,"accept","accept",1874130431));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51291__$1,new cljs.core.Keyword(null,"links","links",-654507394));
return app.main.data.notifications.show(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"accept","accept",1874130431),accept,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),cancel,new cljs.core.Keyword(null,"links","links",-654507394),links,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null)));
}));

(app.main.data.notifications.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.notifications.dialog.cljs$lang$applyTo = (function (seq51288){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51288));
}));


//# sourceMappingURL=app.main.data.notifications.js.map
