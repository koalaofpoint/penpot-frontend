import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.util.globals.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.util.theme');
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.theme !== 'undefined') && (typeof app.util.theme.color_scheme_media_query !== 'undefined')){
} else {
app.util.theme.color_scheme_media_query = app.util.globals.window.matchMedia("(prefers-color-scheme: dark)");
}
app.util.theme.default$ = "dark";
app.util.theme.get_system_theme = (function app$util$theme$get_system_theme(){
if(app.util.theme.color_scheme_media_query.matches){
return "dark";
} else {
return "light";
}
});
app.util.theme.set_color_scheme = (function app$util$theme$set_color_scheme(color){
var node = document.querySelector("body");
var class$ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,"dark"))?"default":"light");
node.removeAttribute("class");

return node.classList.add(class$);
});
app.util.theme.use_initialize = (function app$util$theme$use_initialize(p__73696){
var map__73698 = p__73696;
var map__73698__$1 = cljs.core.__destructure_map(map__73698);
var profile_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73698__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var system_theme_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.util.theme.get_system_theme);
var system_theme = cljs.core.deref(system_theme_STAR_);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var s = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p1__73695_SHARP_){
return cljs.core.reset_BANG_(system_theme_STAR_,p1__73695_SHARP_);
}),beicon.v2.core.map((function (p1__73694_SHARP_){
if(cljs.core.truth_(p1__73694_SHARP_.matches)){
return "dark";
} else {
return "light";
}
}),beicon.v2.core.from_event(app.util.theme.color_scheme_media_query,"change")));
return (function (){
return beicon.v2.core.dispose_BANG_(s);
});
}));

return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(system_theme),rumext.v2.adapt(profile_theme)],(function (){
return app.util.theme.set_color_scheme(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile_theme,"system"))?system_theme:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile_theme,"default"))?"dark":app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(profile_theme,"dark")
)));
}));
});

//# sourceMappingURL=app.util.theme.js.map
