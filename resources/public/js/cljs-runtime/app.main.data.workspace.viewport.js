import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.align.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.viewport');
app.main.data.workspace.viewport.initialize_viewport = (function app$main$data$workspace$viewport$initialize_viewport(p__71206){
var map__71207 = p__71206;
var map__71207__$1 = cljs.core.__destructure_map(map__71207);
var size = map__71207__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71207__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71207__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(app.common.geom.rect.rect_QMARK_(size)){
} else {
throw (new Error(["Assert failed: ","expected `size` to be a rect instance","\n","(gpr/rect? size)"].join('')));
}

var update_STAR_ = (function app$main$data$workspace$viewport$initialize_viewport_$_update_STAR_(p__71212){
var map__71213 = p__71212;
var map__71213__$1 = cljs.core.__destructure_map(map__71213);
var local = map__71213__$1;
var vport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71213__$1,new cljs.core.Keyword(null,"vport","vport",-1317419022));
var wprop = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vport) / width);
var hprop = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vport) / height);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local,new cljs.core.Keyword(null,"vport","vport",-1317419022),size),new cljs.core.Keyword(null,"vbox","vbox",-492787765),(function (vbox){
return app.common.geom.rect.update_rect(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vbox,new cljs.core.Keyword(null,"width","width",-384071477),(function (p1__71204_SHARP_){
return (p1__71204_SHARP_ / wprop);
})),new cljs.core.Keyword(null,"height","height",1025178622),(function (p1__71205_SHARP_){
return (p1__71205_SHARP_ / hprop);
})),new cljs.core.Keyword(null,"size","size",1098693007));
}));
});
var initialize = (function app$main$data$workspace$viewport$initialize_viewport_$_initialize(state,local){
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shapes = app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$1(objects);
var srect = app.common.geom.shapes.shapes__GT_rect(shapes);
var local__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(local,new cljs.core.Keyword(null,"vport","vport",-1317419022),size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1),new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179),(1),new cljs.core.Keyword(null,"hide-toolbar","hide-toolbar",-1320052666),false], 0));
if(((cljs.core.not(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect)))) || (cljs.core.not(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(srect)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(size,new cljs.core.Keyword(null,"x","x",2099068185),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(0)], 0)));
} else {
if((((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect) > width)) || ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(srect) > height)))){
var srect__$1 = app.common.geom.align.adjust_to_viewport.cljs$core$IFn$_invoke$arity$3(size,srect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(40),new cljs.core.Keyword(null,"min-zoom","min-zoom",1063884318),0.01], null));
var zoom = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect__$1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom),new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179),((1) / zoom)),new cljs.core.Keyword(null,"vbox","vbox",-492787765),(function (vbox){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vbox,srect__$1], 0)));
}));
} else {
var vx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(srect) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect) - width) / (2)));
var vy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(srect) + ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(srect) - height) / (2)));
var vbox = app.common.geom.rect.update_rect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(size,new cljs.core.Keyword(null,"x","x",2099068185),vx),new cljs.core.Keyword(null,"y","y",-1757859776),vy),new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765),vbox);

}
}
});
var setup = (function app$main$data$workspace$viewport$initialize_viewport_$_setup(state,local){
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"vbox","vbox",-492787765).cljs$core$IFn$_invoke$arity$1(local);
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"vport","vport",-1317419022).cljs$core$IFn$_invoke$arity$1(local);
} else {
return and__5023__auto__;
}
})())){
return update_STAR_(local);
} else {
return initialize(state,local);
}
});
if((typeof app.main.data.workspace.viewport.initialize_viewport_71216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.viewport.initialize_viewport_71216 = (function (p__71206,map__71207,size,width,height,update_STAR_,initialize,setup,meta71217){
this.p__71206 = p__71206;
this.map__71207 = map__71207;
this.size = size;
this.width = width;
this.height = height;
this.update_STAR_ = update_STAR_;
this.initialize = initialize;
this.setup = setup;
this.meta71217 = meta71217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.viewport.initialize_viewport_71216.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.initialize_viewport_71216.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.viewport","initialize-viewport","app.main.data.workspace.viewport/initialize-viewport",1754018350);
}));

(app.main.data.workspace.viewport.initialize_viewport_71216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71218,meta71217__$1){
var self__ = this;
var _71218__$1 = this;
return (new app.main.data.workspace.viewport.initialize_viewport_71216(self__.p__71206,self__.map__71207,self__.size,self__.width,self__.height,self__.update_STAR_,self__.initialize,self__.setup,meta71217__$1));
}));

(app.main.data.workspace.viewport.initialize_viewport_71216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71218){
var self__ = this;
var _71218__$1 = this;
return self__.meta71217;
}));

(app.main.data.workspace.viewport.initialize_viewport_71216.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.initialize_viewport_71216.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (local){
return (self__.setup.cljs$core$IFn$_invoke$arity$2 ? self__.setup.cljs$core$IFn$_invoke$arity$2(state,local) : self__.setup.call(null,state,local));
}));
}));
}

return (new app.main.data.workspace.viewport.initialize_viewport_71216(p__71206,map__71207__$1,size,width,height,update_STAR_,initialize,setup,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Updates the viewbox coordinates for a given center position
 */
app.main.data.workspace.viewport.calculate_centered_viewbox = (function app$main$data$workspace$viewport$calculate_centered_viewbox(local,position){
var vbox = new cljs.core.Keyword(null,"vbox","vbox",-492787765).cljs$core$IFn$_invoke$arity$1(local);
var nw = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox) / (2));
var nh = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox) / (2));
var nx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position) - nw);
var ny = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position) - nh);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(local,new cljs.core.Keyword(null,"vbox","vbox",-492787765),cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ny], 0));
});
app.main.data.workspace.viewport.update_viewport_position_center = (function app$main$data$workspace$viewport$update_viewport_position_center(position){
if(app.common.geom.point.point_QMARK_(position)){
} else {
throw (new Error(["Assert failed: ","expected a point instance for `position` param","\n","(gpt/point? position)"].join('')));
}

if((typeof app.main.data.workspace.viewport.update_viewport_position_center_71219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.viewport.update_viewport_position_center_71219 = (function (position,meta71220){
this.position = position;
this.meta71220 = meta71220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.viewport.update_viewport_position_center_71219.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.update_viewport_position_center_71219.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.viewport","update-viewport-position-center","app.main.data.workspace.viewport/update-viewport-position-center",-954554951);
}));

(app.main.data.workspace.viewport.update_viewport_position_center_71219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71221,meta71220__$1){
var self__ = this;
var _71221__$1 = this;
return (new app.main.data.workspace.viewport.update_viewport_position_center_71219(self__.position,meta71220__$1));
}));

(app.main.data.workspace.viewport.update_viewport_position_center_71219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71221){
var self__ = this;
var _71221__$1 = this;
return self__.meta71220;
}));

(app.main.data.workspace.viewport.update_viewport_position_center_71219.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.update_viewport_position_center_71219.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),app.main.data.workspace.viewport.calculate_centered_viewbox,self__.position);
}));
}

return (new app.main.data.workspace.viewport.update_viewport_position_center_71219(position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.viewport.update_viewport_position = (function app$main$data$workspace$viewport$update_viewport_position(p__71222){
var map__71223 = p__71222;
var map__71223__$1 = cljs.core.__destructure_map(map__71223);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71223__$1,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.identity);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71223__$1,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.identity);
app.common.data.macros.runtime_assert("expected function for `x`",(function (){
return cljs.core.fn_QMARK_(x);
}));

app.common.data.macros.runtime_assert("expected function for `y`",(function (){
return cljs.core.fn_QMARK_(y);
}));

if((typeof app.main.data.workspace.viewport.update_viewport_position_71224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {app.main.data.event.PerformanceEvent}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.viewport.update_viewport_position_71224 = (function (p__71222,map__71223,x,y,meta71225){
this.p__71222 = p__71222;
this.map__71223 = map__71223;
this.x = x;
this.y = y;
this.meta71225 = meta71225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.viewport.update_viewport_position_71224.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.update_viewport_position_71224.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.viewport","update-viewport-position","app.main.data.workspace.viewport/update-viewport-position",-47991104);
}));

(app.main.data.workspace.viewport.update_viewport_position_71224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71226,meta71225__$1){
var self__ = this;
var _71226__$1 = this;
return (new app.main.data.workspace.viewport.update_viewport_position_71224(self__.p__71222,self__.map__71223,self__.x,self__.y,meta71225__$1));
}));

(app.main.data.workspace.viewport.update_viewport_position_71224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71226){
var self__ = this;
var _71226__$1 = this;
return self__.meta71225;
}));

(app.main.data.workspace.viewport.update_viewport_position_71224.prototype.app$main$data$event$PerformanceEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.update_viewport_position_71224.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.update_viewport_position_71224.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"vbox","vbox",-492787765)], null),(function (vbox){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vbox,new cljs.core.Keyword(null,"x","x",2099068185),self__.x),new cljs.core.Keyword(null,"y","y",-1757859776),self__.y);
}));
}));
}

return (new app.main.data.workspace.viewport.update_viewport_position_71224(p__71222,map__71223__$1,x,y,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.viewport.update_viewport_size = (function app$main$data$workspace$viewport$update_viewport_size(resize_type,p__71227){
var map__71228 = p__71227;
var map__71228__$1 = cljs.core.__destructure_map(map__71228);
var size = map__71228__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71228__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71228__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((typeof app.main.data.workspace.viewport.update_viewport_size_71229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.viewport.update_viewport_size_71229 = (function (resize_type,p__71227,map__71228,size,width,height,meta71230){
this.resize_type = resize_type;
this.p__71227 = p__71227;
this.map__71228 = map__71228;
this.size = size;
this.width = width;
this.height = height;
this.meta71230 = meta71230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.viewport.update_viewport_size_71229.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.update_viewport_size_71229.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.viewport","update-viewport-size","app.main.data.workspace.viewport/update-viewport-size",1719826927);
}));

(app.main.data.workspace.viewport.update_viewport_size_71229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71231,meta71230__$1){
var self__ = this;
var _71231__$1 = this;
return (new app.main.data.workspace.viewport.update_viewport_size_71229(self__.resize_type,self__.p__71227,self__.map__71228,self__.size,self__.width,self__.height,meta71230__$1));
}));

(app.main.data.workspace.viewport.update_viewport_size_71229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71231){
var self__ = this;
var _71231__$1 = this;
return self__.meta71230;
}));

(app.main.data.workspace.viewport.update_viewport_size_71229.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.update_viewport_size_71229.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p__71232){
var map__71233 = p__71232;
var map__71233__$1 = cljs.core.__destructure_map(map__71233);
var local = map__71233__$1;
var vport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71233__$1,new cljs.core.Keyword(null,"vport","vport",-1317419022));
if((((vport == null)) || (((app.common.math.almost_zero_QMARK_(self__.width)) || (app.common.math.almost_zero_QMARK_(self__.height)))))){
return local;
} else {
var wprop = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vport) / self__.width);
var hprop = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vport) / self__.height);
var vbox = new cljs.core.Keyword(null,"vbox","vbox",-492787765).cljs$core$IFn$_invoke$arity$1(local);
var vbox_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox);
var vbox_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox);
var vbox_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox);
var vbox_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox);
var vbox_width_SINGLEQUOTE_ = (vbox_width / wprop);
var vbox_height_SINGLEQUOTE_ = (vbox_height / hprop);
var vbox_x_SINGLEQUOTE_ = (function (){var G__71237 = self__.resize_type;
var G__71237__$1 = (((G__71237 instanceof cljs.core.Keyword))?G__71237.fqn:null);
switch (G__71237__$1) {
case "left":
return (vbox_x + (vbox_width - vbox_width_SINGLEQUOTE_));

break;
case "right":
return vbox_x;

break;
default:
return (vbox_x + ((vbox_width - vbox_width_SINGLEQUOTE_) / (2)));

}
})();
var vbox_y_SINGLEQUOTE_ = (function (){var G__71238 = self__.resize_type;
var G__71238__$1 = (((G__71238 instanceof cljs.core.Keyword))?G__71238.fqn:null);
switch (G__71238__$1) {
case "top":
return (vbox_y + (vbox_height - vbox_height_SINGLEQUOTE_));

break;
case "bottom":
return vbox_y;

break;
default:
return (vbox_y + ((vbox_height - vbox_height_SINGLEQUOTE_) / (2)));

}
})();
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local,new cljs.core.Keyword(null,"vport","vport",-1317419022),self__.size),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vbox","vbox",-492787765),new cljs.core.Keyword(null,"x","x",2099068185)], null),vbox_x_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vbox","vbox",-492787765),new cljs.core.Keyword(null,"y","y",-1757859776)], null),vbox_y_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vbox","vbox",-492787765),new cljs.core.Keyword(null,"width","width",-384071477)], null),vbox_width_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vbox","vbox",-492787765),new cljs.core.Keyword(null,"height","height",1025178622)], null),vbox_height_SINGLEQUOTE_);
}
}));
}));
}

return (new app.main.data.workspace.viewport.update_viewport_size_71229(resize_type,p__71227,map__71228__$1,size,width,height,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.viewport.start_panning = (function app$main$data$workspace$viewport$start_panning(){
if((typeof app.main.data.workspace.viewport.start_panning_71243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.viewport.start_panning_71243 = (function (meta71244){
this.meta71244 = meta71244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.viewport.start_panning_71243.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.start_panning_71243.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.viewport","start-panning","app.main.data.workspace.viewport/start-panning",299875625);
}));

(app.main.data.workspace.viewport.start_panning_71243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71245,meta71244__$1){
var self__ = this;
var _71245__$1 = this;
return (new app.main.data.workspace.viewport.start_panning_71243(meta71244__$1));
}));

(app.main.data.workspace.viewport.start_panning_71243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71245){
var self__ = this;
var _71245__$1 = this;
return self__.meta71244;
}));

(app.main.data.workspace.viewport.start_panning_71243.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.start_panning_71243.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.viewport","finish-panning","app.main.data.workspace.viewport/finish-panning",52976006)),stream);
var zoom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"panning","panning",-1931627491)], null)))){
return null;
} else {
return beicon.v2.core.concat(beicon.v2.core.of((function (p1__71239_SHARP_){
return cljs.core.assoc_in(p1__71239_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"panning","panning",-1931627491)], null),true);
})),beicon.v2.core.map((function (event){
var delta = (event?.pt?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"pt","pt",556460867)));
return app.main.data.workspace.viewport.update_viewport_position(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__71241_SHARP_){
return (p1__71241_SHARP_ - (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(delta) / zoom));
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__71242_SHARP_){
return (p1__71242_SHARP_ - (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(delta) / zoom));
})], null));
}),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"af","af",1448016173),beicon.v2.core.take_until(stopper,beicon.v2.core.filter((function (p1__71240_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__71240_SHARP_));
}),beicon.v2.core.filter(app.util.mouse.pointer_event_QMARK_,stream))))));
}
}));
}

return (new app.main.data.workspace.viewport.start_panning_71243(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.viewport.finish_panning = (function app$main$data$workspace$viewport$finish_panning(){
if((typeof app.main.data.workspace.viewport.finish_panning_71246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.viewport.finish_panning_71246 = (function (meta71247){
this.meta71247 = meta71247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.viewport.finish_panning_71246.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.finish_panning_71246.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.viewport","finish-panning","app.main.data.workspace.viewport/finish-panning",52976006);
}));

(app.main.data.workspace.viewport.finish_panning_71246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71248,meta71247__$1){
var self__ = this;
var _71248__$1 = this;
return (new app.main.data.workspace.viewport.finish_panning_71246(meta71247__$1));
}));

(app.main.data.workspace.viewport.finish_panning_71246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71248){
var self__ = this;
var _71248__$1 = this;
return self__.meta71247;
}));

(app.main.data.workspace.viewport.finish_panning_71246.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.viewport.finish_panning_71246.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"panning","panning",-1931627491));
}));
}

return (new app.main.data.workspace.viewport.finish_panning_71246(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.viewport.js.map
