import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.modal.js";
import "./app.main.store.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./goog.events.events.js";
import "./okulary.core.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.main.ui.modal');
app.main.ui.modal.on_esc_clicked = (function app$main$ui$modal$on_esc_clicked(event,allow_click_outside){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.util.keyboard.esc_QMARK_(event);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(allow_click_outside);
} else {
return and__5023__auto__;
}
})())){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
} else {
return null;
}
});
app.main.ui.modal.on_pop_state = (function app$main$ui$modal$on_pop_state(event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

return history.forward();
});
app.main.ui.modal.on_click_outside = (function app$main$ui$modal$on_click_outside(event,wrapper_ref,type,allow_click_outside){
var wrapper = rumext.v2.ref_val(wrapper_ref);
var current = app.util.dom.get_target(event);
if(cljs.core.truth_((function (){var and__5023__auto__ = wrapper;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(allow_click_outside)) && (((cljs.core.not(wrapper.contains(current))) && ((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(current,"allow-click-modal")))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.button,(0))))))));
} else {
return and__5023__auto__;
}
})())){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
} else {
return null;
}
});
app.main.ui.modal.modal_wrapper_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$modal$modal_wrapper_STAR_(props_71360){
var data = props_71360.data;
var wrapper_ref = rumext.v2.use_ref(null);
var components = rumext.v2.deref(app.main.data.modal.components);
var allow_click_outside = new cljs.core.Keyword(null,"allow-click-outside","allow-click-outside",624193625).cljs$core$IFn$_invoke$arity$1(data);
var handle_click_outside = (function (event){
return app.main.ui.modal.on_click_outside(event,wrapper_ref,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),allow_click_outside);
});
var handle_keydown = (function (event){
return app.main.ui.modal.on_esc_clicked(event,allow_click_outside);
});
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(allow_click_outside)],(function (){
var keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(window,goog.events.EventType.POPSTATE,app.main.ui.modal.on_pop_state),goog.events.listen(document,goog.events.EventType.KEYDOWN,handle_keydown),goog.events.listen(app.util.dom.get_root(),goog.events.EventType.POINTERDOWN,handle_click_outside),goog.events.listen(document,goog.events.EventType.CONTEXTMENU,handle_click_outside)], null);
return (function (){
return cljs.core.run_BANG_(goog.events.unlistenByKey,keys);
});
}));

var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(components,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5825__auto__)){
var component = temp__5825__auto__;
return rumext.v2.jsx("div",{'ref':wrapper_ref,'className':"main_ui_modal__modal-wrapper",'children':rumext.v2.element.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(data))});
} else {
return null;
}
}));

(app.main.ui.modal.modal_wrapper_STAR_.displayName = "modal-wrapper*");

app.main.ui.modal.ref_COLON_modal = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.modal","modal","app.main.data.modal/modal",2103156851),app.main.store.state);
app.main.ui.modal.modal_container_STAR_ = (function app$main$ui$modal$modal_container_STAR_(props_71371){
var container = app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modal","modal",-1031880850));
var temp__5825__auto__ = rumext.v2.deref(app.main.ui.modal.ref_COLON_modal);
if(cljs.core.truth_(temp__5825__auto__)){
var modal = temp__5825__auto__;
return rumext.v2.portal(rumext.v2.jsx(app.main.ui.modal.modal_wrapper_STAR_,{'data':modal},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(modal) ?? "")),container);
} else {
return null;
}
});

(app.main.ui.modal.modal_container_STAR_.displayName = "modal-container*");


//# sourceMappingURL=app.main.ui.modal.js.map
