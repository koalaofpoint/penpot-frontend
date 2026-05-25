import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.data.profile.js";
import "./app.main.store.js";
import "./app.main.ui.releases.common.js";
import "./app.main.ui.releases.v1_10.js";
import "./app.main.ui.releases.v1_11.js";
import "./app.main.ui.releases.v1_12.js";
import "./app.main.ui.releases.v1_13.js";
import "./app.main.ui.releases.v1_14.js";
import "./app.main.ui.releases.v1_15.js";
import "./app.main.ui.releases.v1_16.js";
import "./app.main.ui.releases.v1_17.js";
import "./app.main.ui.releases.v1_18.js";
import "./app.main.ui.releases.v1_19.js";
import "./app.main.ui.releases.v1_4.js";
import "./app.main.ui.releases.v1_5.js";
import "./app.main.ui.releases.v1_6.js";
import "./app.main.ui.releases.v1_7.js";
import "./app.main.ui.releases.v1_8.js";
import "./app.main.ui.releases.v1_9.js";
import "./app.main.ui.releases.v2_0.js";
import "./app.main.ui.releases.v2_1.js";
import "./app.main.ui.releases.v2_10.js";
import "./app.main.ui.releases.v2_11.js";
import "./app.main.ui.releases.v2_12.js";
import "./app.main.ui.releases.v2_13.js";
import "./app.main.ui.releases.v2_14.js";
import "./app.main.ui.releases.v2_2.js";
import "./app.main.ui.releases.v2_3.js";
import "./app.main.ui.releases.v2_4.js";
import "./app.main.ui.releases.v2_5.js";
import "./app.main.ui.releases.v2_6.js";
import "./app.main.ui.releases.v2_7.js";
import "./app.main.ui.releases.v2_8.js";
import "./app.main.ui.releases.v2_9.js";
import "./app.util.object.js";
import "./app.util.timers.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.releases');
app.main.ui.releases.release_notes = (function app$main$ui$releases$release_notes(props_58863){
var version = props_58863.version;
var slide_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981));
var slide = cljs.core.deref(slide_STAR_);
var klass_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("fadeInDown");
var klass = cljs.core.deref(klass_STAR_);
var navigate = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__58862_SHARP_){
return cljs.core.reset_BANG_(slide_STAR_,p1__58862_SHARP_);
}));
var next = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(slide)],(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slide,new cljs.core.Keyword(null,"start","start",-355208981))){
return (navigate.cljs$core$IFn$_invoke$arity$1 ? navigate.cljs$core$IFn$_invoke$arity$1((0)) : navigate.call(null,(0)));
} else {
var G__58864 = (slide + (1));
return (navigate.cljs$core$IFn$_invoke$arity$1 ? navigate.cljs$core$IFn$_invoke$arity$1(G__58864) : navigate.call(null,G__58864));
}
}));
var finish = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(version)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.modal.hide(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.profile.mark_onboarding_as_viewed.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),version], null))], 0));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.mark_onboarding_as_viewed.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),version], null)));
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(slide)],(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),slide)){
cljs.core.reset_BANG_(klass_STAR_,"fadeIn");
} else {
}

var sem = app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((300),(function (){
return cljs.core.reset_BANG_(klass_STAR_,null);
}));
return (function (){
cljs.core.reset_BANG_(klass_STAR_,null);

return app.util.timers.dispose_BANG_(sem);
});
}));

return app.main.ui.releases.common.render_release_notes.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"next","next",-117701485),next,new cljs.core.Keyword(null,"navigate","navigate",657596805),navigate,new cljs.core.Keyword(null,"finish","finish",-586688046),finish,new cljs.core.Keyword(null,"klass","klass",-1386752349),klass,new cljs.core.Keyword(null,"slide","slide",142491892),slide,new cljs.core.Keyword(null,"version","version",425292698),version], null));
});

(app.main.ui.releases.release_notes.displayName = "release-notes");

app.main.ui.releases.release_notes_modal = (function app$main$ui$releases$release_notes_modal(props_58865){
var props = props_58865;
var versions = cljs.core.methods$(app.main.ui.releases.common.render_release_notes);
var version = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"version");
if(cljs.core.contains_QMARK_(versions,version)){
return rumext.v2.jsx("div",{'className':"relnotes",'children':rumext.v2.create_element(app.main.ui.releases.release_notes,props)});
} else {
return null;
}
});

(app.main.ui.releases.release_notes_modal.displayName = "release-notes-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"release-notes","release-notes",1238210686),app.main.ui.releases.release_notes_modal);
}));
app.main.ui.releases.common.render_release_notes.cljs$core$IMultiFn$_add_method$arity$3(null,"0.0",(function (params){
return app.main.ui.releases.common.render_release_notes.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"version","version",425292698),"2.14"));
}));

//# sourceMappingURL=app.main.ui.releases.js.map
