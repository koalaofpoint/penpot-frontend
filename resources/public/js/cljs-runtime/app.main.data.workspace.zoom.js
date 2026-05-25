import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.align.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.streams.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.zoom');
app.main.data.workspace.zoom.impl_update_zoom = (function app$main$data$workspace$zoom$impl_update_zoom(p__66936,center,zoom){
var map__66937 = p__66936;
var map__66937__$1 = cljs.core.__destructure_map(map__66937);
var local = map__66937__$1;
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66937__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var new_zoom = ((cljs.core.fn_QMARK_(zoom))?(function (){var G__66938 = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(local);
return (zoom.cljs$core$IFn$_invoke$arity$1 ? zoom.cljs$core$IFn$_invoke$arity$1(G__66938) : zoom.call(null,G__66938));
})():zoom);
var old_zoom = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(local);
var center__$1 = (cljs.core.truth_(center)?center:app.common.geom.rect.rect__GT_center(vbox));
var scale = (old_zoom / new_zoom);
var mtx = app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$2(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(scale),center__$1);
var vbox_SINGLEQUOTE_ = app.common.geom.shapes.transform_rect(vbox,mtx);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new_zoom),new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179),((1) / new_zoom)),new cljs.core.Keyword(null,"vbox","vbox",-492787765),cljs.core.merge,cljs.core.select_keys(vbox_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null)));
});
app.main.data.workspace.zoom.increase_zoom = (function app$main$data$workspace$zoom$increase_zoom(var_args){
var G__66950 = arguments.length;
switch (G__66950) {
case 0:
return app.main.data.workspace.zoom.increase_zoom.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.zoom.increase_zoom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.zoom.increase_zoom.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.zoom.increase_zoom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.zoom","auto","app.main.data.workspace.zoom/auto",1266077460));
}));

(app.main.data.workspace.zoom.increase_zoom.cljs$core$IFn$_invoke$arity$1 = (function (center){
if((typeof app.main.data.workspace.zoom.increase_zoom_66954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {app.main.data.event.PerformanceEvent}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom.increase_zoom_66954 = (function (center,meta66955){
this.center = center;
this.meta66955 = meta66955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom.increase_zoom_66954.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.increase_zoom_66954.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.zoom","increase-zoom","app.main.data.workspace.zoom/increase-zoom",-572099255);
}));

(app.main.data.workspace.zoom.increase_zoom_66954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66956,meta66955__$1){
var self__ = this;
var _66956__$1 = this;
return (new app.main.data.workspace.zoom.increase_zoom_66954(self__.center,meta66955__$1));
}));

(app.main.data.workspace.zoom.increase_zoom_66954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66956){
var self__ = this;
var _66956__$1 = this;
return self__.meta66955;
}));

(app.main.data.workspace.zoom.increase_zoom_66954.prototype.app$main$data$event$PerformanceEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.increase_zoom_66954.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.increase_zoom_66954.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var center__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.center,new cljs.core.Keyword("app.main.data.workspace.zoom","auto","app.main.data.workspace.zoom/auto",1266077460)))?cljs.core.deref(app.main.streams.mouse_position):self__.center);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p1__66940_SHARP_){
return app.main.data.workspace.zoom.impl_update_zoom(p1__66940_SHARP_,center__$1,(function (z){
var x__5113__auto__ = (z * 1.3);
var y__5114__auto__ = (200);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
}));
}));
}));
}

return (new app.main.data.workspace.zoom.increase_zoom_66954(center,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.zoom.increase_zoom.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.zoom.decrease_zoom = (function app$main$data$workspace$zoom$decrease_zoom(var_args){
var G__66960 = arguments.length;
switch (G__66960) {
case 0:
return app.main.data.workspace.zoom.decrease_zoom.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.zoom.decrease_zoom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.zoom.decrease_zoom.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.zoom.decrease_zoom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.zoom","auto","app.main.data.workspace.zoom/auto",1266077460));
}));

(app.main.data.workspace.zoom.decrease_zoom.cljs$core$IFn$_invoke$arity$1 = (function (center){
if((typeof app.main.data.workspace.zoom.decrease_zoom_66961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {app.main.data.event.PerformanceEvent}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom.decrease_zoom_66961 = (function (center,meta66962){
this.center = center;
this.meta66962 = meta66962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom.decrease_zoom_66961.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.decrease_zoom_66961.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.zoom","decrease-zoom","app.main.data.workspace.zoom/decrease-zoom",1109846343);
}));

(app.main.data.workspace.zoom.decrease_zoom_66961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66963,meta66962__$1){
var self__ = this;
var _66963__$1 = this;
return (new app.main.data.workspace.zoom.decrease_zoom_66961(self__.center,meta66962__$1));
}));

(app.main.data.workspace.zoom.decrease_zoom_66961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66963){
var self__ = this;
var _66963__$1 = this;
return self__.meta66962;
}));

(app.main.data.workspace.zoom.decrease_zoom_66961.prototype.app$main$data$event$PerformanceEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.decrease_zoom_66961.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.decrease_zoom_66961.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var center__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.center,new cljs.core.Keyword("app.main.data.workspace.zoom","auto","app.main.data.workspace.zoom/auto",1266077460)))?cljs.core.deref(app.main.streams.mouse_position):self__.center);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p1__66958_SHARP_){
return app.main.data.workspace.zoom.impl_update_zoom(p1__66958_SHARP_,center__$1,(function (z){
var x__5110__auto__ = (z / 1.3);
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
}));
}));
}));
}

return (new app.main.data.workspace.zoom.decrease_zoom_66961(center,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.zoom.decrease_zoom.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.zoom.set_zoom = (function app$main$data$workspace$zoom$set_zoom(var_args){
var G__66975 = arguments.length;
switch (G__66975) {
case 1:
return app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$1 = (function (scale){
return app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$2(null,scale);
}));

(app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$2 = (function (center,scale){
if((typeof app.main.data.workspace.zoom.set_zoom_66982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {app.main.data.event.PerformanceEvent}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom.set_zoom_66982 = (function (center,scale,meta66983){
this.center = center;
this.scale = scale;
this.meta66983 = meta66983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom.set_zoom_66982.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.set_zoom_66982.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.zoom","set-zoom","app.main.data.workspace.zoom/set-zoom",-1730670049);
}));

(app.main.data.workspace.zoom.set_zoom_66982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66984,meta66983__$1){
var self__ = this;
var _66984__$1 = this;
return (new app.main.data.workspace.zoom.set_zoom_66982(self__.center,self__.scale,meta66983__$1));
}));

(app.main.data.workspace.zoom.set_zoom_66982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66984){
var self__ = this;
var _66984__$1 = this;
return self__.meta66983;
}));

(app.main.data.workspace.zoom.set_zoom_66982.prototype.app$main$data$event$PerformanceEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.set_zoom_66982.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.set_zoom_66982.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var vp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vp) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vp) / (2)));
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vp) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vp) / (2)));
var center__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.center,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p1__66973_SHARP_){
return app.main.data.workspace.zoom.impl_update_zoom(p1__66973_SHARP_,center__$1,(function (z){
var x__5113__auto__ = (function (){var x__5110__auto__ = (z * self__.scale);
var y__5111__auto__ = 0.01;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5114__auto__ = (200);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
}));
}));
}));
}

return (new app.main.data.workspace.zoom.set_zoom_66982(center,scale,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.zoom.set_zoom.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.zoom.reset_zoom = (function (){
if((typeof app.main.data.workspace.zoom.reset_zoom_66986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom.reset_zoom_66986 = (function (meta66987){
this.meta66987 = meta66987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom.reset_zoom_66986.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.reset_zoom_66986.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.zoom","reset-zoom","app.main.data.workspace.zoom/reset-zoom",192130986);
}));

(app.main.data.workspace.zoom.reset_zoom_66986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66988,meta66987__$1){
var self__ = this;
var _66988__$1 = this;
return (new app.main.data.workspace.zoom.reset_zoom_66986(meta66987__$1));
}));

(app.main.data.workspace.zoom.reset_zoom_66986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66988){
var self__ = this;
var _66988__$1 = this;
return self__.meta66987;
}));

(app.main.data.workspace.zoom.reset_zoom_66986.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.reset_zoom_66986.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p1__66985_SHARP_){
return app.main.data.workspace.zoom.impl_update_zoom(p1__66985_SHARP_,null,(1));
}));
}));
}

return (new app.main.data.workspace.zoom.reset_zoom_66986(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.zoom.zoom_to_fit_all = (function (){
if((typeof app.main.data.workspace.zoom.zoom_to_fit_all_66992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom.zoom_to_fit_all_66992 = (function (meta66993){
this.meta66993 = meta66993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom.zoom_to_fit_all_66992.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.zoom_to_fit_all_66992.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.zoom","zoom-to-fit-all","app.main.data.workspace.zoom/zoom-to-fit-all",906260964);
}));

(app.main.data.workspace.zoom.zoom_to_fit_all_66992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66994,meta66993__$1){
var self__ = this;
var _66994__$1 = this;
return (new app.main.data.workspace.zoom.zoom_to_fit_all_66992(meta66993__$1));
}));

(app.main.data.workspace.zoom.zoom_to_fit_all_66992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66994){
var self__ = this;
var _66994__$1 = this;
return self__.meta66993;
}));

(app.main.data.workspace.zoom.zoom_to_fit_all_66992.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.zoom_to_fit_all_66992.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shapes = app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$1(objects);
var srect = app.common.geom.shapes.shapes__GT_rect(shapes);
if(cljs.core.empty_QMARK_(shapes)){
return state;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p__67000){
var map__67001 = p__67000;
var map__67001__$1 = cljs.core.__destructure_map(map__67001);
var local = map__67001__$1;
var vport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67001__$1,new cljs.core.Keyword(null,"vport","vport",-1317419022));
var srect__$1 = app.common.geom.align.adjust_to_viewport.cljs$core$IFn$_invoke$arity$3(vport,srect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(160),new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318),0.01], null));
var zoom = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vport) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect__$1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom),new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179),((1) / zoom)),new cljs.core.Keyword(null,"vbox","vbox",-492787765),cljs.core.merge,srect__$1);
}));
}
}));
}

return (new app.main.data.workspace.zoom.zoom_to_fit_all_66992(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.zoom.zoom_to_selected_shape = (function (){
if((typeof app.main.data.workspace.zoom.zoom_to_selected_shape_67004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom.zoom_to_selected_shape_67004 = (function (meta67005){
this.meta67005 = meta67005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom.zoom_to_selected_shape_67004.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.zoom_to_selected_shape_67004.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.zoom","zoom-to-selected-shape","app.main.data.workspace.zoom/zoom-to-selected-shape",1169962919);
}));

(app.main.data.workspace.zoom.zoom_to_selected_shape_67004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67006,meta67005__$1){
var self__ = this;
var _67006__$1 = this;
return (new app.main.data.workspace.zoom.zoom_to_selected_shape_67004(meta67005__$1));
}));

(app.main.data.workspace.zoom.zoom_to_selected_shape_67004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67006){
var self__ = this;
var _67006__$1 = this;
return self__.meta67005;
}));

(app.main.data.workspace.zoom.zoom_to_selected_shape_67004.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.zoom_to_selected_shape_67004.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.empty_QMARK_(selected)){
return state;
} else {
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var srect = app.common.geom.shapes.shapes__GT_rect(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67002_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__67002_SHARP_);
}),selected));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p__67010){
var map__67011 = p__67010;
var map__67011__$1 = cljs.core.__destructure_map(map__67011);
var local = map__67011__$1;
var vport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67011__$1,new cljs.core.Keyword(null,"vport","vport",-1317419022));
var srect__$1 = app.common.geom.align.adjust_to_viewport.cljs$core$IFn$_invoke$arity$3(vport,srect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(40),new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318),0.01], null));
var zoom = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vport) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect__$1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom),new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179),((1) / zoom)),new cljs.core.Keyword(null,"vbox","vbox",-492787765),cljs.core.merge,srect__$1);
}));
}
}));
}

return (new app.main.data.workspace.zoom.zoom_to_selected_shape_67004(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.zoom.fit_to_shapes = (function app$main$data$workspace$zoom$fit_to_shapes(ids){
if((typeof app.main.data.workspace.zoom.fit_to_shapes_67013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom.fit_to_shapes_67013 = (function (ids,meta67014){
this.ids = ids;
this.meta67014 = meta67014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom.fit_to_shapes_67013.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.fit_to_shapes_67013.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.zoom","fit-to-shapes","app.main.data.workspace.zoom/fit-to-shapes",-433351605);
}));

(app.main.data.workspace.zoom.fit_to_shapes_67013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67015,meta67014__$1){
var self__ = this;
var _67015__$1 = this;
return (new app.main.data.workspace.zoom.fit_to_shapes_67013(self__.ids,meta67014__$1));
}));

(app.main.data.workspace.zoom.fit_to_shapes_67013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67015){
var self__ = this;
var _67015__$1 = this;
return self__.meta67014;
}));

(app.main.data.workspace.zoom.fit_to_shapes_67013.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.fit_to_shapes_67013.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.empty_QMARK_(self__.ids)){
return state;
} else {
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var srect = app.common.geom.shapes.shapes__GT_rect(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67012_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__67012_SHARP_);
}),self__.ids));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p__67019){
var map__67023 = p__67019;
var map__67023__$1 = cljs.core.__destructure_map(map__67023);
var local = map__67023__$1;
var vport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67023__$1,new cljs.core.Keyword(null,"vport","vport",-1317419022));
var srect__$1 = app.common.geom.align.adjust_to_viewport.cljs$core$IFn$_invoke$arity$3(vport,srect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(40),new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318),0.01], null));
var zoom = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vport) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect__$1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom),new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179),((1) / zoom)),new cljs.core.Keyword(null,"vbox","vbox",-492787765),cljs.core.merge,srect__$1);
}));
}
}));
}

return (new app.main.data.workspace.zoom.fit_to_shapes_67013(ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.zoom.start_zooming = (function app$main$data$workspace$zoom$start_zooming(pt){
if((typeof app.main.data.workspace.zoom.start_zooming_67026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom.start_zooming_67026 = (function (pt,meta67027){
this.pt = pt;
this.meta67027 = meta67027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom.start_zooming_67026.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.start_zooming_67026.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.zoom","start-zooming","app.main.data.workspace.zoom/start-zooming",850336251);
}));

(app.main.data.workspace.zoom.start_zooming_67026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67028,meta67027__$1){
var self__ = this;
var _67028__$1 = this;
return (new app.main.data.workspace.zoom.start_zooming_67026(self__.pt,meta67027__$1));
}));

(app.main.data.workspace.zoom.start_zooming_67026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67028){
var self__ = this;
var _67028__$1 = this;
return self__.meta67027;
}));

(app.main.data.workspace.zoom.start_zooming_67026.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.start_zooming_67026.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.zoom","finish-zooming","app.main.data.workspace.zoom/finish-zooming",-355347318)),stream);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zooming","zooming",719822603)], null)))){
return null;
} else {
return beicon.v2.core.concat(beicon.v2.core.of((function (p1__67024_SHARP_){
return cljs.core.assoc_in(p1__67024_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zooming","zooming",719822603)], null),true);
})),beicon.v2.core.map((function (delta){
var scale = ((1) + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(delta) / (100)));
return app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$2(self__.pt,scale);
}),beicon.v2.core.take_until(stopper,beicon.v2.core.map(new cljs.core.Keyword(null,"pt","pt",556460867),beicon.v2.core.filter((function (p1__67025_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__67025_SHARP_));
}),beicon.v2.core.filter(app.util.mouse.pointer_event_QMARK_,stream))))));
}
}));
}

return (new app.main.data.workspace.zoom.start_zooming_67026(pt,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.zoom.finish_zooming = (function app$main$data$workspace$zoom$finish_zooming(){
if((typeof app.main.data.workspace.zoom.finish_zooming_67037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.zoom.finish_zooming_67037 = (function (meta67038){
this.meta67038 = meta67038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.zoom.finish_zooming_67037.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.finish_zooming_67037.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.zoom","finish-zooming","app.main.data.workspace.zoom/finish-zooming",-355347318);
}));

(app.main.data.workspace.zoom.finish_zooming_67037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67039,meta67038__$1){
var self__ = this;
var _67039__$1 = this;
return (new app.main.data.workspace.zoom.finish_zooming_67037(meta67038__$1));
}));

(app.main.data.workspace.zoom.finish_zooming_67037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67039){
var self__ = this;
var _67039__$1 = this;
return self__.meta67038;
}));

(app.main.data.workspace.zoom.finish_zooming_67037.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.zoom.finish_zooming_67037.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"zooming","zooming",719822603));
}));
}

return (new app.main.data.workspace.zoom.finish_zooming_67037(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.zoom.js.map
