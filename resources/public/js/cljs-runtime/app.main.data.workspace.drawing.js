import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.common.js";
import "./app.main.data.workspace.drawing.box.js";
import "./app.main.data.workspace.drawing.common.js";
import "./app.main.data.workspace.drawing.curve.js";
import "./app.main.data.workspace.path.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.drawing');
app.main.data.workspace.drawing.select_for_drawing = (function app$main$data$workspace$drawing$select_for_drawing(tool){
if((typeof app.main.data.workspace.drawing.select_for_drawing_50137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.select_for_drawing_50137 = (function (tool,meta50138){
this.tool = tool;
this.meta50138 = meta50138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.select_for_drawing_50137.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.select_for_drawing_50137.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing","select-for-drawing","app.main.data.workspace.drawing/select-for-drawing",-937062938);
}));

(app.main.data.workspace.drawing.select_for_drawing_50137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50139,meta50138__$1){
var self__ = this;
var _50139__$1 = this;
return (new app.main.data.workspace.drawing.select_for_drawing_50137(self__.tool,meta50138__$1));
}));

(app.main.data.workspace.drawing.select_for_drawing_50137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50139){
var self__ = this;
var _50139__$1 = this;
return self__.meta50138;
}));

(app.main.data.workspace.drawing.select_for_drawing_50137.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.select_for_drawing_50137.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173),(function (workspace_layout){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tool,new cljs.core.Keyword(null,"comments","comments",-293346423))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(workspace_layout,new cljs.core.Keyword(null,"document-history","document-history",1908608999));
} else {
return workspace_layout;
}
})),new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),cljs.core.assoc,new cljs.core.Keyword(null,"tool","tool",-1298696470),self__.tool),new cljs.core.Keyword(null,"workspace-layout","workspace-layout",420938173),cljs.core.disj,new cljs.core.Keyword(null,"scale-text","scale-text",302781380));
}));

(app.main.data.workspace.drawing.select_for_drawing_50137.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.select_for_drawing_50137.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.merge(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tool,new cljs.core.Keyword(null,"path","path",-188191168)))?beicon.v2.core.of((app.main.data.workspace.drawing.start_drawing.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.drawing.start_drawing.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168)) : app.main.data.workspace.drawing.start_drawing.call(null,new cljs.core.Keyword(null,"path","path",-188191168)))):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tool,new cljs.core.Keyword(null,"curve","curve",-569677866)))?(function (){var stopper = beicon.v2.core.filter(app.main.data.workspace.common.interrupt_QMARK_,stream);
return beicon.v2.core.take_until(stopper,beicon.v2.core.map(app.main.data.workspace.drawing.select_for_drawing,beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.take((1),beicon.v2.core.map(cljs.core.constantly(self__.tool),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.drawing.common","handle-finish-drawing","app.main.data.workspace.drawing.common/handle-finish-drawing",605061012)),stream))))));
})():null),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.tool,new cljs.core.Keyword(null,"comments","comments",-293346423))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.tool,new cljs.core.Keyword(null,"path","path",-188191168)))))?(function (){var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.drawing","clear-drawing","app.main.data.workspace.drawing/clear-drawing",-691958826)),stream);
return beicon.v2.core.take_until(stopper,beicon.v2.core.map(app.main.data.workspace.drawing.common.clear_drawing,beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.workspace.common.interrupt_QMARK_,stream))));
})():null));
}));
}

return (new app.main.data.workspace.drawing.select_for_drawing_50137(tool,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.drawing.start_drawing = (function app$main$data$workspace$drawing$start_drawing(type){
app.common.data.macros.runtime_assert("expr assert: (keyword? type)",(function (){
return (type instanceof cljs.core.Keyword);
}));

var lock_id = app.common.uuid.next();
if((typeof app.main.data.workspace.drawing.start_drawing_50185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.start_drawing_50185 = (function (type,lock_id,meta50186){
this.type = type;
this.lock_id = lock_id;
this.meta50186 = meta50186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.start_drawing_50185.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.start_drawing_50185.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing","start-drawing","app.main.data.workspace.drawing/start-drawing",-1115834775);
}));

(app.main.data.workspace.drawing.start_drawing_50185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50187,meta50186__$1){
var self__ = this;
var _50187__$1 = this;
return (new app.main.data.workspace.drawing.start_drawing_50185(self__.type,self__.lock_id,meta50186__$1));
}));

(app.main.data.workspace.drawing.start_drawing_50185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50187){
var self__ = this;
var _50187__$1 = this;
return self__.meta50186;
}));

(app.main.data.workspace.drawing.start_drawing_50185.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.start_drawing_50185.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"lock","lock",-488188066)], null),(function (p1__50184_SHARP_){
if((p1__50184_SHARP_ == null)){
return self__.lock_id;
} else {
return p1__50184_SHARP_;
}
}));
}));

(app.main.data.workspace.drawing.start_drawing_50185.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.start_drawing_50185.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var lock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973)),new cljs.core.Keyword(null,"lock","lock",-488188066));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lock,self__.lock_id)){
return beicon.v2.core.merge(beicon.v2.core.of((app.main.data.workspace.drawing.handle_drawing.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.drawing.handle_drawing.cljs$core$IFn$_invoke$arity$1(self__.type) : app.main.data.workspace.drawing.handle_drawing.call(null,self__.type))),beicon.v2.core.map((function (){
return (function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),cljs.core.dissoc,new cljs.core.Keyword(null,"lock","lock",-488188066));
});
}),beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.drawing.common","handle-finish-drawing","app.main.data.workspace.drawing.common/handle-finish-drawing",605061012)),stream))));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.drawing.start_drawing_50185(type,lock_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.drawing.handle_drawing = (function app$main$data$workspace$drawing$handle_drawing(type){
if((typeof app.main.data.workspace.drawing.handle_drawing_50188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.handle_drawing_50188 = (function (type,meta50189){
this.type = type;
this.meta50189 = meta50189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.handle_drawing_50188.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.handle_drawing_50188.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing","handle-drawing","app.main.data.workspace.drawing/handle-drawing",124524270);
}));

(app.main.data.workspace.drawing.handle_drawing_50188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50190,meta50189__$1){
var self__ = this;
var _50190__$1 = this;
return (new app.main.data.workspace.drawing.handle_drawing_50188(self__.type,meta50189__$1));
}));

(app.main.data.workspace.drawing.handle_drawing_50188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50190){
var self__ = this;
var _50190__$1 = this;
return self__.meta50189;
}));

(app.main.data.workspace.drawing.handle_drawing_50188.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.handle_drawing_50188.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of((function (){var G__50191 = self__.type;
var G__50191__$1 = (((G__50191 instanceof cljs.core.Keyword))?G__50191.fqn:null);
switch (G__50191__$1) {
case "path":
return app.main.data.workspace.path.handle_drawing();

break;
case "curve":
return app.main.data.workspace.drawing.curve.handle_drawing();

break;
default:
return app.main.data.workspace.drawing.box.handle_drawing(self__.type);

}
})());
}));
}

return (new app.main.data.workspace.drawing.handle_drawing_50188(type,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.drawing.change_orientation = (function app$main$data$workspace$drawing$change_orientation(orientation){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),null,new cljs.core.Keyword(null,"vertical","vertical",718696748),null], null), null),orientation)){
} else {
throw (new Error(["Assert failed: ","expected valid orientation","\n","(contains? #{:horizontal :vertical} orientation)"].join('')));
}

if((typeof app.main.data.workspace.drawing.change_orientation_50192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.change_orientation_50192 = (function (orientation,meta50193){
this.orientation = orientation;
this.meta50193 = meta50193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.change_orientation_50192.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.change_orientation_50192.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing","change-orientation","app.main.data.workspace.drawing/change-orientation",1702793855);
}));

(app.main.data.workspace.drawing.change_orientation_50192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50194,meta50193__$1){
var self__ = this;
var _50194__$1 = this;
return (new app.main.data.workspace.drawing.change_orientation_50192(self__.orientation,meta50193__$1));
}));

(app.main.data.workspace.drawing.change_orientation_50192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50194){
var self__ = this;
var _50194__$1 = this;
return self__.meta50193;
}));

(app.main.data.workspace.drawing.change_orientation_50192.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.change_orientation_50192.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var map__50195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973));
var map__50195__$1 = cljs.core.__destructure_map(map__50195);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50195__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50195__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?Math.min(width,height):Math.max(width,height));
var height_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?Math.max(width,height):Math.min(width,height));
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),width_SINGLEQUOTE_,new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([height_SINGLEQUOTE_], 0));
}));
}

return (new app.main.data.workspace.drawing.change_orientation_50192(orientation,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.drawing.set_default_size = (function app$main$data$workspace$drawing$set_default_size(width,height){
if((typeof app.main.data.workspace.drawing.change_preset_50198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.change_preset_50198 = (function (width,height,meta50199){
this.width = width;
this.height = height;
this.meta50199 = meta50199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.change_preset_50198.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.change_preset_50198.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing","change-preset","app.main.data.workspace.drawing/change-preset",1353790695);
}));

(app.main.data.workspace.drawing.change_preset_50198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50200,meta50199__$1){
var self__ = this;
var _50200__$1 = this;
return (new app.main.data.workspace.drawing.change_preset_50198(self__.width,self__.height,meta50199__$1));
}));

(app.main.data.workspace.drawing.change_preset_50198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50200){
var self__ = this;
var _50200__$1 = this;
return self__.meta50199;
}));

(app.main.data.workspace.drawing.change_preset_50198.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.change_preset_50198.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),self__.width,new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.height], 0));
}));
}

return (new app.main.data.workspace.drawing.change_preset_50198(width,height,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.drawing.js.map
