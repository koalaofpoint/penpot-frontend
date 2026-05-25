import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.main.store.js";
import "./app.util.dom.js";
import "./app.util.mouse.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.main.ui.workspace.viewport.viewport_ref');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.workspace !== 'undefined') && (typeof app.main.ui.workspace.viewport !== 'undefined') && (typeof app.main.ui.workspace.viewport.viewport_ref !== 'undefined') && (typeof app.main.ui.workspace.viewport.viewport_ref.viewport_ref !== 'undefined')){
} else {
app.main.ui.workspace.viewport.viewport_ref.viewport_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.workspace !== 'undefined') && (typeof app.main.ui.workspace.viewport !== 'undefined') && (typeof app.main.ui.workspace.viewport.viewport_ref !== 'undefined') && (typeof app.main.ui.workspace.viewport.viewport_ref.current_observer !== 'undefined')){
} else {
app.main.ui.workspace.viewport.viewport_ref.current_observer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.workspace !== 'undefined') && (typeof app.main.ui.workspace.viewport !== 'undefined') && (typeof app.main.ui.workspace.viewport.viewport_ref !== 'undefined') && (typeof app.main.ui.workspace.viewport.viewport_ref.viewport_brect !== 'undefined')){
} else {
app.main.ui.workspace.viewport.viewport_ref.viewport_brect = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.main.ui.workspace.viewport.viewport_ref.init_observer = (function app$main$ui$workspace$viewport$viewport_ref$init_observer(node,on_change_bounds){
var observer = (new ResizeObserver(on_change_bounds));
if((!((cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.current_observer) == null)))){
cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.current_observer).disconnect();
} else {
}

cljs.core.reset_BANG_(app.main.ui.workspace.viewport.viewport_ref.current_observer,observer);

if((!((node == null)))){
return observer.observe(node);
} else {
return null;
}
});
app.main.ui.workspace.viewport.viewport_ref.on_change_bounds = (function app$main$ui$workspace$viewport$viewport_ref$on_change_bounds(_){
if(cljs.core.truth_(cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.viewport_ref))){
var brect = app.util.dom.get_bounding_rect(cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.viewport_ref));
var brect__$1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(brect)),app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(brect)));
return cljs.core.reset_BANG_(app.main.ui.workspace.viewport.viewport_ref.viewport_brect,brect__$1);
} else {
return null;
}
});
app.main.ui.workspace.viewport.viewport_ref.create_viewport_ref = (function app$main$ui$workspace$viewport$viewport_ref$create_viewport_ref(){
var ref = rumext.v2.use_ref(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return (function (node){
rumext.v2.set_ref_val_BANG_(ref,node);

cljs.core.reset_BANG_(app.main.ui.workspace.viewport.viewport_ref.viewport_ref,node);

if((!((node == null)))){
goog.events.listen(node,goog.events.EventType.MOUSELEAVE,(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.mouse.__GT_BlurEvent());
}));
} else {
}

return app.main.ui.workspace.viewport.viewport_ref.init_observer(node,app.main.ui.workspace.viewport.viewport_ref.on_change_bounds);
});
}))], null);
});
app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport = (function app$main$ui$workspace$viewport$viewport_ref$point__GT_viewport(pt){
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1));
if((((!((cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.viewport_ref) == null)))) && ((!((cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.viewport_brect) == null)))))){
var vbox = cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.viewport_ref).viewBox.baseVal;
var brect = cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.viewport_brect);
var box = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(vbox.x,vbox.y);
var zoom__$1 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(zoom);
return app.common.geom.point.add(app.common.geom.point.divide(app.common.geom.point.subtract(pt,brect),zoom__$1),box);
} else {
return null;
}
});
/**
 * Convert client coordinates to viewport-relative coordinates.
 * Unlike point->viewport, this does NOT convert to canvas coordinates -
 * it just subtracts the viewport's bounding rect offset.
 */
app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport_relative = (function app$main$ui$workspace$viewport$viewport_ref$point__GT_viewport_relative(pt){
if((!((cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.viewport_brect) == null)))){
return app.common.geom.point.subtract(pt,cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.viewport_brect));
} else {
return null;
}
});
app.main.ui.workspace.viewport.viewport_ref.inside_viewport_QMARK_ = (function app$main$ui$workspace$viewport$viewport_ref$inside_viewport_QMARK_(target){
return app.util.dom.is_child_QMARK_(cljs.core.deref(app.main.ui.workspace.viewport.viewport_ref.viewport_ref),target);
});

//# sourceMappingURL=app.main.ui.workspace.viewport.viewport_ref.js.map
