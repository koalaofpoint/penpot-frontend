import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.helpers.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.specialized_panel');
app.main.data.workspace.specialized_panel.interrupt_QMARK_ = (function app$main$data$workspace$specialized_panel$interrupt_QMARK_(e){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword("app.main.data.workspace.specialized-panel","interrupt","app.main.data.workspace.specialized-panel/interrupt",-2063805375))));
});
app.main.data.workspace.specialized_panel.clear_specialized_panel = (function app$main$data$workspace$specialized_panel$clear_specialized_panel(){
if((typeof app.main.data.workspace.specialized_panel.clear_specialized_panel_68001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.specialized_panel.clear_specialized_panel_68001 = (function (meta68002){
this.meta68002 = meta68002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.specialized_panel.clear_specialized_panel_68001.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.specialized_panel.clear_specialized_panel_68001.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.specialized-panel","clear-specialized-panel","app.main.data.workspace.specialized-panel/clear-specialized-panel",1527860029);
}));

(app.main.data.workspace.specialized_panel.clear_specialized_panel_68001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68003,meta68002__$1){
var self__ = this;
var _68003__$1 = this;
return (new app.main.data.workspace.specialized_panel.clear_specialized_panel_68001(meta68002__$1));
}));

(app.main.data.workspace.specialized_panel.clear_specialized_panel_68001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68003){
var self__ = this;
var _68003__$1 = this;
return self__.meta68002;
}));

(app.main.data.workspace.specialized_panel.clear_specialized_panel_68001.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.specialized_panel.clear_specialized_panel_68001.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"specialized-panel","specialized-panel",2140639966));
}));
}

return (new app.main.data.workspace.specialized_panel.clear_specialized_panel_68001(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.specialized_panel.open_specialized_panel = (function app$main$data$workspace$specialized_panel$open_specialized_panel(type){
if((typeof app.main.data.workspace.specialized_panel.open_specialized_panel_68004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.specialized_panel.open_specialized_panel_68004 = (function (type,meta68005){
this.type = type;
this.meta68005 = meta68005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.specialized_panel.open_specialized_panel_68004.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.specialized_panel.open_specialized_panel_68004.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.specialized-panel","open-specialized-panel","app.main.data.workspace.specialized-panel/open-specialized-panel",2095004192);
}));

(app.main.data.workspace.specialized_panel.open_specialized_panel_68004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68006,meta68005__$1){
var self__ = this;
var _68006__$1 = this;
return (new app.main.data.workspace.specialized_panel.open_specialized_panel_68004(self__.type,meta68005__$1));
}));

(app.main.data.workspace.specialized_panel.open_specialized_panel_68004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68006){
var self__ = this;
var _68006__$1 = this;
return self__.meta68005;
}));

(app.main.data.workspace.specialized_panel.open_specialized_panel_68004.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.specialized_panel.open_specialized_panel_68004.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected_ids = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var selected_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected_ids);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"specialized-panel","specialized-panel",2140639966),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),self__.type,new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected_shapes], null));
}));

(app.main.data.workspace.specialized_panel.open_specialized_panel_68004.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.specialized_panel.open_specialized_panel_68004.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.map(app.main.data.workspace.specialized_panel.clear_specialized_panel,beicon.v2.core.take((1),beicon.v2.core.merge(beicon.v2.core.filter(app.main.data.workspace.specialized_panel.interrupt_QMARK_,stream),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.common","undo","app.main.data.workspace.common/undo",-1459605934)),stream))));
}));
}

return (new app.main.data.workspace.specialized_panel.open_specialized_panel_68004(type,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.specialized_panel.js.map
