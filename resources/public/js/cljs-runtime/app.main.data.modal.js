import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.uuid.js";
import "./app.main.data.event.js";
import "./app.main.store.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.modal');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.data !== 'undefined') && (typeof app.main.data.modal !== 'undefined') && (typeof app.main.data.modal.components !== 'undefined')){
} else {
app.main.data.modal.components = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
app.main.data.modal.show = (function app$main$data$modal$show(var_args){
var G__52772 = arguments.length;
switch (G__52772) {
case 1:
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1 = (function (props){
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$3(app.common.uuid.next(),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props),props);
}));

(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$3(app.common.uuid.next(),type,props);
}));

(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$3 = (function (id,type,props){
if((typeof app.main.data.modal.show_modal_52787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.modal.show_modal_52787 = (function (id,type,props,meta52788){
this.id = id;
this.type = type;
this.props = props;
this.meta52788 = meta52788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.modal.show_modal_52787.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.modal.show_modal_52787.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.modal","show-modal","app.main.data.modal/show-modal",-1770734394);
}));

(app.main.data.modal.show_modal_52787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52789,meta52788__$1){
var self__ = this;
var _52789__$1 = this;
return (new app.main.data.modal.show_modal_52787(self__.id,self__.type,self__.props,meta52788__$1));
}));

(app.main.data.modal.show_modal_52787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52789){
var self__ = this;
var _52789__$1 = this;
return self__.meta52788;
}));

(app.main.data.modal.show_modal_52787.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.modal.show_modal_52787.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.props,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"name","name",1843675177),self__.type);
}));

(app.main.data.modal.show_modal_52787.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.modal.show_modal_52787.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("app.main.data.modal","modal","app.main.data.modal/modal",2103156851),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"type","type",1174270348),self__.type,new cljs.core.Keyword(null,"props","props",453281727),self__.props,new cljs.core.Keyword(null,"allow-click-outside","allow-click-outside",624193625),false], null));
}));
}

return (new app.main.data.modal.show_modal_52787(id,type,props,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.modal.show.cljs$lang$maxFixedArity = 3);

app.main.data.modal.update_props = (function app$main$data$modal$update_props(_type,props){
if((typeof app.main.data.modal.update_modal_props_52809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.modal.update_modal_props_52809 = (function (_type,props,meta52810){
this._type = _type;
this.props = props;
this.meta52810 = meta52810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.modal.update_modal_props_52809.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.modal.update_modal_props_52809.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.modal","update-modal-props","app.main.data.modal/update-modal-props",-1646685110);
}));

(app.main.data.modal.update_modal_props_52809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52811,meta52810__$1){
var self__ = this;
var _52811__$1 = this;
return (new app.main.data.modal.update_modal_props_52809(self__._type,self__.props,meta52810__$1));
}));

(app.main.data.modal.update_modal_props_52809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52811){
var self__ = this;
var _52811__$1 = this;
return self__.meta52810;
}));

(app.main.data.modal.update_modal_props_52809.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.modal.update_modal_props_52809.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var G__52819 = state;
if(cljs.core.truth_(new cljs.core.Keyword("app.main.data.modal","modal","app.main.data.modal/modal",2103156851).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__52819,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.main.data.modal","modal","app.main.data.modal/modal",2103156851),new cljs.core.Keyword(null,"props","props",453281727)], null),cljs.core.merge,self__.props);
} else {
return G__52819;
}
}));
}

return (new app.main.data.modal.update_modal_props_52809(_type,props,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.modal.hide = (function app$main$data$modal$hide(){
if((typeof app.main.data.modal.hide_modal_52823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.modal.hide_modal_52823 = (function (meta52824){
this.meta52824 = meta52824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.modal.hide_modal_52823.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.modal.hide_modal_52823.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.modal","hide-modal","app.main.data.modal/hide-modal",-1613895013);
}));

(app.main.data.modal.hide_modal_52823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52825,meta52824__$1){
var self__ = this;
var _52825__$1 = this;
return (new app.main.data.modal.hide_modal_52823(meta52824__$1));
}));

(app.main.data.modal.hide_modal_52823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52825){
var self__ = this;
var _52825__$1 = this;
return self__.meta52824;
}));

(app.main.data.modal.hide_modal_52823.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.modal.hide_modal_52823.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("app.main.data.modal","modal","app.main.data.modal/modal",2103156851));
}));
}

return (new app.main.data.modal.hide_modal_52823(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.modal.update = (function app$main$data$modal$update(options){
if((typeof app.main.data.modal.update_modal_52827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.modal.update_modal_52827 = (function (options,meta52828){
this.options = options;
this.meta52828 = meta52828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.modal.update_modal_52827.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.modal.update_modal_52827.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.modal","update-modal","app.main.data.modal/update-modal",-1545911932);
}));

(app.main.data.modal.update_modal_52827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52829,meta52828__$1){
var self__ = this;
var _52829__$1 = this;
return (new app.main.data.modal.update_modal_52827(self__.options,meta52828__$1));
}));

(app.main.data.modal.update_modal_52827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52829){
var self__ = this;
var _52829__$1 = this;
return self__.meta52828;
}));

(app.main.data.modal.update_modal_52827.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.modal.update_modal_52827.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var G__52830 = state;
if(cljs.core.truth_(new cljs.core.Keyword("app.main.data.modal","modal","app.main.data.modal/modal",2103156851).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52830,new cljs.core.Keyword("app.main.data.modal","modal","app.main.data.modal/modal",2103156851),cljs.core.merge,self__.options);
} else {
return G__52830;
}
}));
}

return (new app.main.data.modal.update_modal_52827(options,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.modal.show_BANG_ = (function app$main$data$modal$show_BANG_(var_args){
var G__52832 = arguments.length;
switch (G__52832) {
case 1:
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (props){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(props));
}));

(app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(type,props));
}));

(app.main.data.modal.show_BANG_.cljs$lang$maxFixedArity = 2);

app.main.data.modal.update_props_BANG_ = (function app$main$data$modal$update_props_BANG_(type,props){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.update_props(type,props));
});
app.main.data.modal.allow_click_outside_BANG_ = (function app$main$data$modal$allow_click_outside_BANG_(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.update(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-click-outside","allow-click-outside",624193625),true], null)));
});
app.main.data.modal.disallow_click_outside_BANG_ = (function app$main$data$modal$disallow_click_outside_BANG_(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.update(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-click-outside","allow-click-outside",624193625),false], null)));
});
app.main.data.modal.hide_BANG_ = (function app$main$data$modal$hide_BANG_(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
});

//# sourceMappingURL=app.main.data.modal.js.map
