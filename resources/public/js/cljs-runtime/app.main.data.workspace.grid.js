import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.types.grid.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.shapes.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.grid');
app.main.data.workspace.grid.add_frame_grid = (function app$main$data$workspace$grid$add_frame_grid(frame_id){
app.common.data.macros.runtime_assert("expr assert: (uuid? frame-id)",(function (){
return cljs.core.uuid_QMARK_(frame_id);
}));

if((typeof app.main.data.workspace.grid.add_frame_grid_55833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid.add_frame_grid_55833 = (function (frame_id,meta55834){
this.frame_id = frame_id;
this.meta55834 = meta55834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid.add_frame_grid_55833.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid.add_frame_grid_55833.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid","add-frame-grid","app.main.data.workspace.grid/add-frame-grid",-1083498650);
}));

(app.main.data.workspace.grid.add_frame_grid_55833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55835,meta55834__$1){
var self__ = this;
var _55835__$1 = this;
return (new app.main.data.workspace.grid.add_frame_grid_55833(self__.frame_id,meta55834__$1));
}));

(app.main.data.workspace.grid.add_frame_grid_55833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55835){
var self__ = this;
var _55835__$1 = this;
return self__.meta55834;
}));

(app.main.data.workspace.grid.add_frame_grid_55833.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid.add_frame_grid_55833.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var params = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"default-grids","default-grids",-2097814871)),new cljs.core.Keyword(null,"square","square",812434677));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"square","square",812434677).cljs$core$IFn$_invoke$arity$1(app.common.types.grid.default_grid_params);
}
})();
var grid = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"display","display",242065432),true], null);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.frame_id], null),(function (obj){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(obj,new cljs.core.Keyword(null,"grids","grids",44187194),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__55832_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__55832_SHARP_,grid);
}),cljs.core.PersistentVector.EMPTY));
})));
}));
}

return (new app.main.data.workspace.grid.add_frame_grid_55833(frame_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid.remove_frame_grid = (function app$main$data$workspace$grid$remove_frame_grid(frame_id,index){
if((typeof app.main.data.workspace.grid.remove_frame_grid_55837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid.remove_frame_grid_55837 = (function (frame_id,index,meta55838){
this.frame_id = frame_id;
this.index = index;
this.meta55838 = meta55838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid.remove_frame_grid_55837.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid.remove_frame_grid_55837.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid","remove-frame-grid","app.main.data.workspace.grid/remove-frame-grid",-1269415708);
}));

(app.main.data.workspace.grid.remove_frame_grid_55837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55839,meta55838__$1){
var self__ = this;
var _55839__$1 = this;
return (new app.main.data.workspace.grid.remove_frame_grid_55837(self__.frame_id,self__.index,meta55838__$1));
}));

(app.main.data.workspace.grid.remove_frame_grid_55837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55839){
var self__ = this;
var _55839__$1 = this;
return self__.meta55838;
}));

(app.main.data.workspace.grid.remove_frame_grid_55837.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid.remove_frame_grid_55837.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.frame_id], null),(function (o){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(o,new cljs.core.Keyword(null,"grids","grids",44187194),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__55836_SHARP_){
return app.common.data.remove_at_index(p1__55836_SHARP_,self__.index);
}),cljs.core.PersistentVector.EMPTY));
})));
}));
}

return (new app.main.data.workspace.grid.remove_frame_grid_55837(frame_id,index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid.set_frame_grid = (function app$main$data$workspace$grid$set_frame_grid(frame_id,index,data){
if((typeof app.main.data.workspace.grid.set_frame_grid_55841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid.set_frame_grid_55841 = (function (frame_id,index,data,meta55842){
this.frame_id = frame_id;
this.index = index;
this.data = data;
this.meta55842 = meta55842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid.set_frame_grid_55841.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid.set_frame_grid_55841.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid","set-frame-grid","app.main.data.workspace.grid/set-frame-grid",577735205);
}));

(app.main.data.workspace.grid.set_frame_grid_55841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55843,meta55842__$1){
var self__ = this;
var _55843__$1 = this;
return (new app.main.data.workspace.grid.set_frame_grid_55841(self__.frame_id,self__.index,self__.data,meta55842__$1));
}));

(app.main.data.workspace.grid.set_frame_grid_55841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55843){
var self__ = this;
var _55843__$1 = this;
return self__.meta55842;
}));

(app.main.data.workspace.grid.set_frame_grid_55841.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid.set_frame_grid_55841.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.frame_id], null),(function (p1__55840_SHARP_){
return cljs.core.assoc_in(p1__55840_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grids","grids",44187194),self__.index], null),self__.data);
})));
}));
}

return (new app.main.data.workspace.grid.set_frame_grid_55841(frame_id,index,data,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid.set_default_grid = (function app$main$data$workspace$grid$set_default_grid(type,params){
if((typeof app.main.data.workspace.grid.set_default_grid_55844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid.set_default_grid_55844 = (function (type,params,meta55845){
this.type = type;
this.params = params;
this.meta55845 = meta55845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid.set_default_grid_55844.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid.set_default_grid_55844.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid","set-default-grid","app.main.data.workspace.grid/set-default-grid",1437308643);
}));

(app.main.data.workspace.grid.set_default_grid_55844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55846,meta55845__$1){
var self__ = this;
var _55846__$1 = this;
return (new app.main.data.workspace.grid.set_default_grid_55844(self__.type,self__.params,meta55845__$1));
}));

(app.main.data.workspace.grid.set_default_grid_55844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55846){
var self__ = this;
var _55846__$1 = this;
return self__.meta55845;
}));

(app.main.data.workspace.grid.set_default_grid_55844.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid.set_default_grid_55844.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.changes.commit_changes(app.common.files.changes_builder.set_default_grid(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),page),self__.type,self__.params)));
}));
}

return (new app.main.data.workspace.grid.set_default_grid_55844(type,params,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.grid.js.map
