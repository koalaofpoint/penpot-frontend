import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.math.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.shapes.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.layers');
app.main.data.workspace.layers.calculate_opacity = (function app$main$data$workspace$layers$calculate_opacity(numbers){
var total = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("",numbers));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(numbers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))){
return (1);
} else {
return (total / app.common.math.pow((10),cljs.core.count(numbers)));
}
});
app.main.data.workspace.layers.set_opacity = (function app$main$data$workspace$layers$set_opacity(opacity){
if((typeof app.main.data.workspace.layers.set_opacity_50586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.layers.set_opacity_50586 = (function (opacity,meta50587){
this.opacity = opacity;
this.meta50587 = meta50587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.layers.set_opacity_50586.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layers.set_opacity_50586.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.layers","set-opacity","app.main.data.workspace.layers/set-opacity",86390947);
}));

(app.main.data.workspace.layers.set_opacity_50586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50588,meta50587__$1){
var self__ = this;
var _50588__$1 = this;
return (new app.main.data.workspace.layers.set_opacity_50586(self__.opacity,meta50587__$1));
}));

(app.main.data.workspace.layers.set_opacity_50586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50588){
var self__ = this;
var _50588__$1 = this;
return self__.meta50587;
}));

(app.main.data.workspace.layers.set_opacity_50586.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layers.set_opacity_50586.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"omit-blocked?","omit-blocked?",558115876),true], null));
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50584_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__50584_SHARP_);
}),selected);
var shapes_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(shapes_ids,(function (p1__50585_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50585_SHARP_,new cljs.core.Keyword(null,"opacity","opacity",397153780),self__.opacity);
})));
}));
}

return (new app.main.data.workspace.layers.set_opacity_50586(opacity,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.layers.pressed_opacity = (function app$main$data$workspace$layers$pressed_opacity(opacity){
var same_event = Symbol("same-event");
if((typeof app.main.data.workspace.layers.pressed_opacity_50621 !== 'undefined')){
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
app.main.data.workspace.layers.pressed_opacity_50621 = (function (opacity,same_event,meta50622){
this.opacity = opacity;
this.same_event = same_event;
this.meta50622 = meta50622;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.layers.pressed_opacity_50621.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layers.pressed_opacity_50621.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.layers","pressed-opacity","app.main.data.workspace.layers/pressed-opacity",52482405);
}));

(app.main.data.workspace.layers.pressed_opacity_50621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50623,meta50622__$1){
var self__ = this;
var _50623__$1 = this;
return (new app.main.data.workspace.layers.pressed_opacity_50621(self__.opacity,self__.same_event,meta50622__$1));
}));

(app.main.data.workspace.layers.pressed_opacity_50621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50623){
var self__ = this;
var _50623__$1 = this;
return self__.meta50622;
}));

(app.main.data.workspace.layers.pressed_opacity_50621.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opacity;
}));

(app.main.data.workspace.layers.pressed_opacity_50621.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layers.pressed_opacity_50621.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if((new cljs.core.Keyword(null,"press-opacity-id","press-opacity-id",-774656842).cljs$core$IFn$_invoke$arity$1(state) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"press-opacity-id","press-opacity-id",-774656842),self__.same_event);
} else {
return state;
}
}));

(app.main.data.workspace.layers.pressed_opacity_50621.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.layers.pressed_opacity_50621.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.same_event,new cljs.core.Keyword(null,"press-opacity-id","press-opacity-id",-774656842).cljs$core$IFn$_invoke$arity$1(state))){
return beicon.v2.core.empty();
} else {
var opacity_events = beicon.v2.core.map((function (p1__50620_SHARP_){
return app.main.data.workspace.layers.set_opacity(app.main.data.workspace.layers.calculate_opacity(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,p1__50620_SHARP_)));
}),beicon.v2.core.take((1),beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$2((600),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.layers","pressed-opacity","app.main.data.workspace.layers/pressed-opacity",52482405)),stream))));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.layers.set_opacity(app.main.data.workspace.layers.calculate_opacity(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.opacity], null)))),beicon.v2.core.merge(opacity_events,beicon.v2.core.of((app.main.data.workspace.layers.pressed_opacity.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.layers.pressed_opacity.cljs$core$IFn$_invoke$arity$1(self__.opacity) : app.main.data.workspace.layers.pressed_opacity.call(null,self__.opacity)))),beicon.v2.core.of((function (state__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"press-opacity-id","press-opacity-id",-774656842));
})));
}
}));
}

return (new app.main.data.workspace.layers.pressed_opacity_50621(opacity,same_event,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.layers.js.map
