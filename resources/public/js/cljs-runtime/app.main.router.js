import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.uri.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.util.browser_history.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./goog.events.events.js";
import "./potok.v2.core.js";
import "./reitit.core.js";
goog.provide('app.main.router');
app.main.router.map__GT_Match = (function app$main$router$map__GT_Match(data){
return reitit.core.map__GT_Match(data);
});
app.main.router.resolve = (function app$main$router$resolve(var_args){
var G__37647 = arguments.length;
switch (G__37647) {
case 2:
return app.main.router.resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.router.resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.router.resolve.cljs$core$IFn$_invoke$arity$2 = (function (router,id){
return app.main.router.resolve.cljs$core$IFn$_invoke$arity$3(router,id,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.main.router.resolve.cljs$core$IFn$_invoke$arity$3 = (function (router,id,params){
if(cljs.core.truth_(router)){
var temp__5825__auto__ = reitit.core.match_by_name(router,id);
if(cljs.core.truth_(temp__5825__auto__)){
var match = temp__5825__auto__;
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,params);
} else {
return null;
}
} else {
return null;
}
}));

(app.main.router.resolve.cljs$lang$maxFixedArity = 3);

app.main.router.create = (function app$main$router$create(routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$1(routes);
});
app.main.router.initialize_router = (function app$main$router$initialize_router(routes){
if((typeof app.main.router.initialize_router_37648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.router.initialize_router_37648 = (function (routes,meta37649){
this.routes = routes;
this.meta37649 = meta37649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.router.initialize_router_37648.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.initialize_router_37648.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.router","initialize-router","app.main.router/initialize-router",-1818163306);
}));

(app.main.router.initialize_router_37648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37650,meta37649__$1){
var self__ = this;
var _37650__$1 = this;
return (new app.main.router.initialize_router_37648(self__.routes,meta37649__$1));
}));

(app.main.router.initialize_router_37648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37650){
var self__ = this;
var _37650__$1 = this;
return self__.meta37649;
}));

(app.main.router.initialize_router_37648.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.initialize_router_37648.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"router","router",1091916230),app.main.router.create(self__.routes));
}));
}

return (new app.main.router.initialize_router_37648(routes,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.router.encode_url = (function app$main$router$encode_url(url){
return encodeURIComponent(url);
});
/**
 * Given routing tree and current path, return match with possibly
 *   coerced parameters. Return nil if no match found.
 */
app.main.router.match = (function app$main$router$match(router,path){
var uri = app.common.uri.uri(path);
var temp__5825__auto__ = reitit.core.match_by_path(router,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(uri));
if(cljs.core.truth_(temp__5825__auto__)){
var match = temp__5825__auto__;
var query_params = app.common.uri.query_string__GT_map(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(uri));
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"query","query",-1288509510),query_params], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"params","params",710516235),params),new cljs.core.Keyword(null,"query-params","query-params",900640534),query_params);
} else {
return null;
}
});
app.main.router.navigated = (function app$main$router$navigated(match,send_event_info_QMARK_){
if((typeof app.main.router.navigated_37651 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.router.navigated_37651 = (function (match,send_event_info_QMARK_,meta37652){
this.match = match;
this.send_event_info_QMARK_ = send_event_info_QMARK_;
this.meta37652 = meta37652;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.router.navigated_37651.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.navigated_37651.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.router","navigated","app.main.router/navigated",-343379749);
}));

(app.main.router.navigated_37651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37653,meta37652__$1){
var self__ = this;
var _37653__$1 = this;
return (new app.main.router.navigated_37651(self__.match,self__.send_event_info_QMARK_,meta37652__$1));
}));

(app.main.router.navigated_37651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37653){
var self__ = this;
var _37653__$1 = this;
return self__.meta37652;
}));

(app.main.router.navigated_37651.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.match;
}));

(app.main.router.navigated_37651.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.navigated_37651.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.send_event_info_QMARK_)){
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.match,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.match,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"navigate",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"route","route",329891309),cljs.core.name(route)], 0))));
} else {
return null;
}
}));

(app.main.router.navigated_37651.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.navigated_37651.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"route","route",329891309),self__.match),new cljs.core.Keyword(null,"exception","exception",-335277064));
}));
}

return (new app.main.router.navigated_37651(match,send_event_info_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.router.navigate = (function app$main$router$navigate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37716 = arguments.length;
var i__5750__auto___37717 = (0);
while(true){
if((i__5750__auto___37717 < len__5749__auto___37716)){
args__5755__auto__.push((arguments[i__5750__auto___37717]));

var G__37724 = (i__5750__auto___37717 + (1));
i__5750__auto___37717 = G__37724;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.main.router.navigate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.main.router.navigate.cljs$core$IFn$_invoke$arity$variadic = (function (id,params,p__37657){
var map__37658 = p__37657;
var map__37658__$1 = cljs.core.__destructure_map(map__37658);
var options = map__37658__$1;
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37658__$1,new cljs.core.Keyword("app.main.router","replace","app.main.router/replace",466128885));
var new_window = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37658__$1,new cljs.core.Keyword("app.main.router","new-window","app.main.router/new-window",1705407424));
if((typeof app.main.router.navigate_37659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.router.navigate_37659 = (function (id,params,p__37657,map__37658,options,replace,new_window,meta37660){
this.id = id;
this.params = params;
this.p__37657 = p__37657;
this.map__37658 = map__37658;
this.options = options;
this.replace = replace;
this.new_window = new_window;
this.meta37660 = meta37660;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.router.navigate_37659.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.navigate_37659.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.router","navigate","app.main.router/navigate",-477162538);
}));

(app.main.router.navigate_37659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37661,meta37660__$1){
var self__ = this;
var _37661__$1 = this;
return (new app.main.router.navigate_37659(self__.id,self__.params,self__.p__37657,self__.map__37658,self__.options,self__.replace,self__.new_window,meta37660__$1));
}));

(app.main.router.navigate_37659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37661){
var self__ = this;
var _37661__$1 = this;
return self__.meta37660;
}));

(app.main.router.navigate_37659.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"params","params",710516235),self__.params,new cljs.core.Keyword(null,"options","options",99638489),self__.options], null);
}));

(app.main.router.navigate_37659.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.navigate_37659.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var router = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
var history__$1 = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state);
var path = app.main.router.resolve.cljs$core$IFn$_invoke$arity$3(router,self__.id,self__.params);
if(self__.new_window){
var name = (function (){var or__5025__auto__ = new cljs.core.Keyword("app.main.router","window-name","app.main.router/window-name",321663835).cljs$core$IFn$_invoke$arity$1(self__.options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "_blank";
}
})();
var uri = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.config.public_uri,new cljs.core.Keyword(null,"fragment","fragment",826775688),path);
return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$3(uri,name,null);
} else {
return app.util.timers.asap((function (){
if(self__.replace){
return app.util.browser_history.replace_token_BANG_(history__$1,path);
} else {
return app.util.browser_history.set_token_BANG_(history__$1,path);
}
}));
}
}));
}

return (new app.main.router.navigate_37659(id,params,p__37657,map__37658__$1,options,replace,new_window,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.router.navigate.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.main.router.navigate.cljs$lang$applyTo = (function (seq37654){
var G__37655 = cljs.core.first(seq37654);
var seq37654__$1 = cljs.core.next(seq37654);
var G__37656 = cljs.core.first(seq37654__$1);
var seq37654__$2 = cljs.core.next(seq37654__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37655,G__37656,seq37654__$2);
}));

app.main.router.assign_exception = (function app$main$router$assign_exception(error){
if((typeof app.main.router.assign_exception_37662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.router.assign_exception_37662 = (function (error,meta37663){
this.error = error;
this.meta37663 = meta37663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.router.assign_exception_37662.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.assign_exception_37662.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.router","assign-exception","app.main.router/assign-exception",-192148203);
}));

(app.main.router.assign_exception_37662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37664,meta37663__$1){
var self__ = this;
var _37664__$1 = this;
return (new app.main.router.assign_exception_37662(self__.error,meta37663__$1));
}));

(app.main.router.assign_exception_37662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37664){
var self__ = this;
var _37664__$1 = this;
return self__.meta37663;
}));

(app.main.router.assign_exception_37662.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.assign_exception_37662.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if((self__.error == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"exception","exception",-335277064));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"exception","exception",-335277064),self__.error);
}
}));
}

return (new app.main.router.assign_exception_37662(error,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.router.nav = (function app$main$router$nav(var_args){
var G__37669 = arguments.length;
switch (G__37669) {
case 1:
return app.main.router.nav.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.router.nav.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___37760 = arguments.length;
var i__5750__auto___37761 = (0);
while(true){
if((i__5750__auto___37761 < len__5749__auto___37760)){
args_arr__5774__auto__.push((arguments[i__5750__auto___37761]));

var G__37763 = (i__5750__auto___37761 + (1));
i__5750__auto___37761 = G__37763;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.main.router.nav.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.main.router.navigate(id,null);
}));

(app.main.router.nav.cljs$core$IFn$_invoke$arity$2 = (function (id,params){
return app.main.router.navigate(id,params);
}));

(app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic = (function (id,params,p__37670){
var map__37671 = p__37670;
var map__37671__$1 = cljs.core.__destructure_map(map__37671);
var options = map__37671__$1;
return app.main.router.navigate.cljs$core$IFn$_invoke$arity$variadic(id,params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

/** @this {Function} */
(app.main.router.nav.cljs$lang$applyTo = (function (seq37666){
var G__37667 = cljs.core.first(seq37666);
var seq37666__$1 = cljs.core.next(seq37666);
var G__37668 = cljs.core.first(seq37666__$1);
var seq37666__$2 = cljs.core.next(seq37666__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37667,G__37668,seq37666__$2);
}));

(app.main.router.nav.cljs$lang$maxFixedArity = (2));

app.main.router.lookup_name = (function app$main$router$lookup_name(state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"route","route",329891309)),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"name","name",1843675177));
});
app.main.router.get_params = (function app$main$router$get_params(state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"route","route",329891309)),new cljs.core.Keyword(null,"params","params",710516235)),new cljs.core.Keyword(null,"query","query",-1288509510));
});
/**
 * Safely extracts a scalar value for a query param key from a params
 *   map. When the same key appears multiple times in a URL,
 *   query-string->map returns a vector for that key; this function
 *   always returns a single (last) element in that case, so downstream
 *   consumers such as parse-long always receive a plain string or nil.
 */
app.main.router.get_query_param = (function app$main$router$get_query_param(params,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k);
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.peek(v);
} else {
return v;
}
});
app.main.router.nav_back = (function app$main$router$nav_back(){
if((typeof app.main.router.nav_back_37672 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.router.nav_back_37672 = (function (meta37673){
this.meta37673 = meta37673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.router.nav_back_37672.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.nav_back_37672.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.router","nav-back","app.main.router/nav-back",1728663407);
}));

(app.main.router.nav_back_37672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37674,meta37673__$1){
var self__ = this;
var _37674__$1 = this;
return (new app.main.router.nav_back_37672(meta37673__$1));
}));

(app.main.router.nav_back_37672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37674){
var self__ = this;
var _37674__$1 = this;
return self__.meta37673;
}));

(app.main.router.nav_back_37672.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.nav_back_37672.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return app.util.timers.asap(app.util.dom.browser_back);
}));
}

return (new app.main.router.nav_back_37672(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Navigate back only if the previous page is in penpot app.
 */
app.main.router.nav_back_local = (function app$main$router$nav_back_local(){
var location__$1 = document.location;
var referrer = app.common.uri.uri(document.referrer);
if((((new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(referrer) == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location__$1.hostname,new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(referrer))))){
return app.main.router.nav_back();
} else {
return null;
}
});
/**
 * Navigate to the root page.
 */
app.main.router.nav_root = (function app$main$router$nav_root(){
if((typeof app.main.router.nav_root_37675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.router.nav_root_37675 = (function (meta37676){
this.meta37676 = meta37676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.router.nav_root_37675.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.nav_root_37675.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.router","nav-root","app.main.router/nav-root",-948084258);
}));

(app.main.router.nav_root_37675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37677,meta37676__$1){
var self__ = this;
var _37677__$1 = this;
return (new app.main.router.nav_root_37675(meta37676__$1));
}));

(app.main.router.nav_root_37675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37677){
var self__ = this;
var _37677__$1 = this;
return self__.meta37676;
}));

(app.main.router.nav_root_37675.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.nav_root_37675.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return (app.util.globals.location.href = "/");
}));
}

return (new app.main.router.nav_root_37675(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.router.reload = (function app$main$router$reload(force_QMARK_){
if((typeof app.main.router.reload_37678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.router.reload_37678 = (function (force_QMARK_,meta37679){
this.force_QMARK_ = force_QMARK_;
this.meta37679 = meta37679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.router.reload_37678.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.reload_37678.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.router","reload","app.main.router/reload",1848509416);
}));

(app.main.router.reload_37678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37680,meta37679__$1){
var self__ = this;
var _37680__$1 = this;
return (new app.main.router.reload_37678(self__.force_QMARK_,meta37679__$1));
}));

(app.main.router.reload_37678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37680){
var self__ = this;
var _37680__$1 = this;
return self__.meta37679;
}));

(app.main.router.reload_37678.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.reload_37678.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return app.util.timers.asap(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.util.dom.reload_current_window,self__.force_QMARK_));
}));
}

return (new app.main.router.reload_37678(force_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.router.nav_raw = (function app$main$router$nav_raw(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37784 = arguments.length;
var i__5750__auto___37785 = (0);
while(true){
if((i__5750__auto___37785 < len__5749__auto___37784)){
args__5755__auto__.push((arguments[i__5750__auto___37785]));

var G__37786 = (i__5750__auto___37785 + (1));
i__5750__auto___37785 = G__37786;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic = (function (p__37682){
var map__37683 = p__37682;
var map__37683__$1 = cljs.core.__destructure_map(map__37683);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37683__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37683__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
if((typeof app.main.router.nav_raw_37684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.router.nav_raw_37684 = (function (p__37682,map__37683,href,uri,meta37685){
this.p__37682 = p__37682;
this.map__37683 = map__37683;
this.href = href;
this.uri = uri;
this.meta37685 = meta37685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.router.nav_raw_37684.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.nav_raw_37684.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.router","nav-raw","app.main.router/nav-raw",-70793015);
}));

(app.main.router.nav_raw_37684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37686,meta37685__$1){
var self__ = this;
var _37686__$1 = this;
return (new app.main.router.nav_raw_37684(self__.p__37682,self__.map__37683,self__.href,self__.uri,meta37685__$1));
}));

(app.main.router.nav_raw_37684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37686){
var self__ = this;
var _37686__$1 = this;
return self__.meta37685;
}));

(app.main.router.nav_raw_37684.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.nav_raw_37684.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(typeof self__.uri === 'string'){
return app.util.globals.location.replace(self__.uri);
} else {
if(typeof self__.href === 'string'){
return (app.util.globals.location.href = self__.href);
} else {
return null;
}
}
}));
}

return (new app.main.router.nav_raw_37684(p__37682,map__37683__$1,href,uri,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.router.nav_raw.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.router.nav_raw.cljs$lang$applyTo = (function (seq37681){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37681));
}));

app.main.router.get_current_href = (function app$main$router$get_current_href(){
return app.util.globals.location.href;
});
app.main.router.get_current_path = (function app$main$router$get_current_path(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.globals.location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.globals.location.search)].join('');
});
app.main.router.send_event_info_QMARK_ = (function app$main$router$send_event_info_QMARK_(old_url,new_url){
var params = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"team-id","team-id",-14505725)], null);
var new_uri = app.common.uri.uri(new_url);
var new_path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new_uri);
var new_params = cljs.core.select_keys(app.common.uri.query_string__GT_map(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(new_uri)),params);
var old_uri = app.common.uri.uri(old_url);
var old_path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(old_uri);
var old_params = cljs.core.select_keys(app.common.uri.query_string__GT_map(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(old_uri)),params);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_path,new_path)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_params,old_params)));
});
app.main.router.initialize_history = (function app$main$router$initialize_history(on_change){
if((typeof app.main.router.initialize_history_37689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.router.initialize_history_37689 = (function (on_change,meta37690){
this.on_change = on_change;
this.meta37690 = meta37690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.router.initialize_history_37689.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.initialize_history_37689.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.router","initialize-history","app.main.router/initialize-history",377149557);
}));

(app.main.router.initialize_history_37689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37691,meta37690__$1){
var self__ = this;
var _37691__$1 = this;
return (new app.main.router.initialize_history_37689(self__.on_change,meta37690__$1));
}));

(app.main.router.initialize_history_37689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37691){
var self__ = this;
var _37691__$1 = this;
return self__.meta37690;
}));

(app.main.router.initialize_history_37689.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.initialize_history_37689.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var history__$1 = app.util.browser_history.create();
app.util.browser_history.enable_BANG_(history__$1);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"history","history",-247395220),history__$1);
}));

(app.main.router.initialize_history_37689.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.router.initialize_history_37689.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.router","initialize-history","app.main.router/initialize-history",377149557)),stream);
var history__$1 = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(state);
var router = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var G__37705 = router;
var G__37706 = history__$1.getToken();
var G__37707 = true;
return (self__.on_change.cljs$core$IFn$_invoke$arity$3 ? self__.on_change.cljs$core$IFn$_invoke$arity$3(G__37705,G__37706,G__37707) : self__.on_change.call(null,G__37705,G__37706,G__37707));
}));

return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__37708){
var vec__37709 = p__37708;
var old_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709,(0),null);
var new_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709,(1),null);
if((!((new_url == null)))){
var send_QMARK_ = (((old_url == null)) || (app.main.router.send_event_info_QMARK_(old_url,new_url)));
return (self__.on_change.cljs$core$IFn$_invoke$arity$3 ? self__.on_change.cljs$core$IFn$_invoke$arity$3(router,new_url,send_QMARK_) : self__.on_change.call(null,router,new_url,send_QMARK_));
} else {
return null;
}
}),beicon.v2.core.take_until(stopper,beicon.v2.core.buffer.cljs$core$IFn$_invoke$arity$3((2),(1),beicon.v2.core.concat(beicon.v2.core.of(null,null),beicon.v2.core.create((function (subs){
var key = goog.events.listen(history__$1,"navigate",(function (o){
return subs.next(o.token);
}));
return (function (){
app.util.browser_history.disable_BANG_(history__$1);

return goog.events.unlistenByKey(key);
});
}))))));
}));
}

return (new app.main.router.initialize_history_37689(on_change,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.router.js.map
