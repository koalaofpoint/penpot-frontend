import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.constraints');
app.main.ui.workspace.sidebar.options.menus.constraints.constraint_attrs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)], null);
app.main.ui.workspace.sidebar.options.menus.constraints.constraints_menu = (function app$main$ui$workspace$sidebar$options$menus$constraints$constraints_menu(props_55617){
var map__55618 = rumext.v2.util.wrap_props(props_55617);
var map__55618__$1 = cljs.core.__destructure_map(map__55618);
var props = map__55618__$1;
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55618__$1,new cljs.core.Keyword(null,"values","values",372645556));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var open_QMARK_ = cljs.core.deref(state_STAR_);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,cljs.core.not);
}));
var old_shapes = cljs.core.deref(app.main.refs.objects_by_id(ids));
var frames = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55612_SHARP_){
return cljs.core.deref(app.main.refs.object_by_id(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(p1__55612_SHARP_)));
}),old_shapes);
var shapes = (function (){var $ = old_shapes;
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(app.common.geom.shapes.translate_to_frame,$,frames);
})();
var values__$1 = (function (){var map__55619 = app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes)));
var map__55619__$1 = cljs.core.__destructure_map(map__55619);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55619__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55619__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__55620 = values;
var G__55620__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55620,new cljs.core.Keyword(null,"x","x",2099068185),x):G__55620);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55620__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y);
} else {
return G__55620__$1;
}
})();
var values__$2 = (function (){var map__55621 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes));
var map__55621__$1 = cljs.core.__destructure_map(map__55621);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55621__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55621__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__55622 = values__$1;
var G__55622__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(values__$1),new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55622,new cljs.core.Keyword(null,"width","width",-384071477),width):G__55622);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(values__$1),new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55622__$1,new cljs.core.Keyword(null,"height","height",1025178622),height);
} else {
return G__55622__$1;
}
})();
var in_frame_QMARK_ = (((!((ids == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(values__$2),app.common.uuid.zero)));
var first_level_QMARK_ = ((in_frame_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(values__$2),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(values__$2))));
var constraints_h = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.shapes.default_constraints_h(values__$2);
}
})();
var constraints_v = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.shapes.default_constraints_v(values__$2);
}
})();
var on_constraint_button_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(values__$2)],(function (event){
var button = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
var constraints_h__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(values__$2,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"scale","scale",-230427353));
var constraints_v__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(values__$2,new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"scale","scale",-230427353));
var vec__55623 = (function (){var G__55626 = button;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),G__55626)){
var G__55627 = constraints_v__$1;
var G__55627__$1 = (((G__55627 instanceof cljs.core.Keyword))?G__55627.fqn:null);
switch (G__55627__$1) {
case "top":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"scale","scale",-230427353)], null);

break;
case "topbottom":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"bottom","bottom",-1550509018)], null);

break;
case "bottom":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"topbottom","topbottom",207067417)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"top","top",-1856271961)], null);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),G__55626)){
var G__55628 = constraints_v__$1;
var G__55628__$1 = (((G__55628 instanceof cljs.core.Keyword))?G__55628.fqn:null);
switch (G__55628__$1) {
case "bottom":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"scale","scale",-230427353)], null);

break;
case "topbottom":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"top","top",-1856271961)], null);

break;
case "top":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"topbottom","topbottom",207067417)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"bottom","bottom",-1550509018)], null);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),G__55626)){
var G__55629 = constraints_h__$1;
var G__55629__$1 = (((G__55629 instanceof cljs.core.Keyword))?G__55629.fqn:null);
switch (G__55629__$1) {
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"scale","scale",-230427353)], null);

break;
case "leftright":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"right","right",-452581833)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"leftright","leftright",1894963129)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"left","left",-399115937)], null);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833),G__55626)){
var G__55630 = constraints_h__$1;
var G__55630__$1 = (((G__55630 instanceof cljs.core.Keyword))?G__55630.fqn:null);
switch (G__55630__$1) {
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"scale","scale",-230427353)], null);

break;
case "leftright":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"left","left",-399115937)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"leftright","leftright",1894963129)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"right","right",-452581833)], null);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"centerv","centerv",-45511012),G__55626)){
var G__55631 = constraints_v__$1;
var G__55631__$1 = (((G__55631 instanceof cljs.core.Keyword))?G__55631.fqn:null);
switch (G__55631__$1) {
case "center":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"scale","scale",-230427353)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"center","center",-748944368)], null);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"centerh","centerh",463637087),G__55626)){
var G__55632 = constraints_h__$1;
var G__55632__$1 = (((G__55632 instanceof cljs.core.Keyword))?G__55632.fqn:null);
switch (G__55632__$1) {
case "center":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"scale","scale",-230427353)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"center","center",-748944368)], null);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__55626)){
return cljs.core.List.EMPTY;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55626)].join('')));

}
}
}
}
}
}
}
})();
var constraint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55623,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55623,(1),null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (p1__55613_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55613_SHARP_,constraint,new_value);
})));
}));
var on_constraint_h_select_changed = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
if(cuerdas.core.empty_QMARK_(value)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (p1__55614_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55614_SHARP_,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value));
})));
}
}));
var on_constraint_v_select_changed = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
if(cuerdas.core.empty_QMARK_(value)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (p1__55615_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55615_SHARP_,new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value));
})));
}
}));
var on_fixed_scroll_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (p1__55616_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__55616_SHARP_,new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691),cljs.core.not);
})));
}));
var options_h = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(constraints_h)],(function (){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_h,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple")], null)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"left",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.left")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"right",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.right")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"leftright",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.leftright")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"center",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.center")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"scale",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.scale")], null)], null)], 0));
}));
var options_v = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(constraints_v)],(function (){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_v,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple")], null)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"top",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.top")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bottom",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.bottom")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"topbottom",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.topbottom")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"center",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.center")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"scale",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.scale")], null)], null)], 0));
}));
if(in_frame_QMARK_){
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':true,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints")})}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__element-set-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__constraints-widget",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__constraints-top",'children':rumext.v2.jsx("button",{'data-value':"top",'onClick':on_constraint_button_clicked,'className':"main_ui_workspace_sidebar_options_menus_constraints__constraint-btn"+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_v,new cljs.core.Keyword(null,"top","top",-1856271961))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_v,new cljs.core.Keyword(null,"topbottom","topbottom",207067417)))))?"main_ui_workspace_sidebar_options_menus_constraints__active":""),'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_constraints__resalted-area"})})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__constraints-left",'children':rumext.v2.jsx("button",{'data-value':"left",'onClick':on_constraint_button_clicked,'className':"main_ui_workspace_sidebar_options_menus_constraints__constraint-btn"+" "+"main_ui_workspace_sidebar_options_menus_constraints__constraint-btn-rotated"+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_h,new cljs.core.Keyword(null,"left","left",-399115937))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_h,new cljs.core.Keyword(null,"leftright","leftright",1894963129)))))?"main_ui_workspace_sidebar_options_menus_constraints__active":""),'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_constraints__resalted-area"})})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__constraints-center",'children':[rumext.v2.jsx("button",{'data-value':"centerv",'onClick':on_constraint_button_clicked,'className':"main_ui_workspace_sidebar_options_menus_constraints__constraint-btn"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_v,new cljs.core.Keyword(null,"center","center",-748944368)))?"main_ui_workspace_sidebar_options_menus_constraints__active":""),'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_constraints__resalted-area"})}),rumext.v2.jsx("button",{'data-value':"centerh",'onClick':on_constraint_button_clicked,'className':"main_ui_workspace_sidebar_options_menus_constraints__constraint-btn-special"+" "+"main_ui_workspace_sidebar_options_menus_constraints__constraint-btn-rotated"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_h,new cljs.core.Keyword(null,"center","center",-748944368)))?"main_ui_workspace_sidebar_options_menus_constraints__active":""),'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_constraints__resalted-area"})})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__constraints-right",'children':rumext.v2.jsx("button",{'data-value':"right",'onClick':on_constraint_button_clicked,'className':"main_ui_workspace_sidebar_options_menus_constraints__constraint-btn"+" "+"main_ui_workspace_sidebar_options_menus_constraints__constraint-btn-rotated"+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_h,new cljs.core.Keyword(null,"right","right",-452581833))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_h,new cljs.core.Keyword(null,"leftright","leftright",1894963129)))))?"main_ui_workspace_sidebar_options_menus_constraints__active":""),'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_constraints__resalted-area"})})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__constraints-bottom",'children':rumext.v2.jsx("button",{'data-value':"bottom",'onClick':on_constraint_button_clicked,'className':"main_ui_workspace_sidebar_options_menus_constraints__constraint-btn"+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_v,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constraints_v,new cljs.core.Keyword(null,"topbottom","topbottom",207067417)))))?"main_ui_workspace_sidebar_options_menus_constraints__active":""),'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_constraints__resalted-area"})})})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__constraints-selects",'children':[rumext.v2.jsx("div",{'data-testid':"constraint-h-select",'className':"main_ui_workspace_sidebar_options_menus_constraints__horizontal-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(constraints_h,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.common.data.name(constraints_h),"scale"):""),'options':options_h,'on-change':on_constraint_h_select_changed})}),rumext.v2.jsx("div",{'data-testid':"constraint-v-select",'className':"main_ui_workspace_sidebar_options_menus_constraints__vertical-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(constraints_v,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.common.data.name(constraints_v),"scale"):""),'options':options_v,'on-change':on_constraint_v_select_changed})}),((first_level_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_constraints__checkbox",'children':rumext.v2.jsxs("label",{'htmlFor':"fixed-on-scroll",'className':(cljs.core.truth_(new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691).cljs$core$IFn$_invoke$arity$1(values__$2))?"main_ui_workspace_sidebar_options_menus_constraints__checked":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_constraints__check-mark"+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691).cljs$core$IFn$_invoke$arity$1(values__$2))?"main_ui_workspace_sidebar_options_menus_constraints__checked":""),'children':(cljs.core.truth_(new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691).cljs$core$IFn$_invoke$arity$1(values__$2))?app.main.ui.icons.status_tick:null)}),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.constraints.fix-when-scrolling"),rumext.v2.jsx("input",{'type':"checkbox",'id':"fixed-on-scroll",'checked':new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691).cljs$core$IFn$_invoke$arity$1(values__$2),'onChange':on_fixed_scroll_clicked})]})}):null)]})]}):null)]});
} else {
return null;
}
});

(app.main.ui.workspace.sidebar.options.menus.constraints.constraints_menu.displayName = "constraints-menu");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.constraints.js.map
