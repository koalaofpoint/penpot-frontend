import "./cljs_env.js";
import "./cljs.core.js";
import "./devtools.prefs.js";
import "./devtools.hints.js";
import "./devtools.defaults.js";
import "./devtools.formatters.js";
import "./devtools.async.js";
import "./devtools.toolbox.js";
import "./devtools.context.js";
import "./devtools.util.js";
goog.provide('devtools.core');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__28263 = feature;
var G__28263__$1 = (((G__28263 instanceof cljs.core.Keyword))?G__28263.fqn:null);
switch (G__28263__$1) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28263__$1)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var G__28266 = arguments.length;
switch (G__28266) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
}));

(devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features__$1 = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_(features__$1)){
return false;
} else {
return cljs.core.every_QMARK_(devtools.core.is_feature_available_QMARK_,features__$1);
}
}));

(devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1);

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__28269 = feature;
var G__28269__$1 = (((G__28269 instanceof cljs.core.Keyword))?G__28269.fqn:null);
switch (G__28269__$1) {
case "formatters":
return devtools.formatters.installed_QMARK_();

break;
case "hints":
return devtools.hints.installed_QMARK_();

break;
case "async":
return devtools.async.installed_QMARK_();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28269__$1)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var G__28274 = arguments.length;
switch (G__28274) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
}));

(devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features__$1 = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_(features__$1)){
return false;
} else {
return cljs.core.every_QMARK_(devtools.core.is_feature_installed_QMARK_,features__$1);
}
}));

(devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1);

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var G__28280 = arguments.length;
switch (G__28280) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
}));

(devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
if(cljs.core.truth_(devtools.util.under_advanced_build_QMARK_())){
return devtools.util.display_advanced_build_warning_if_needed_BANG_();
} else {
var features__$1 = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
devtools.util.display_banner_if_needed_BANG_(features__$1,cljs.core.deref(devtools.defaults.feature_groups));

devtools.util.print_config_overrides_if_requested_BANG_("config overrides prior install:\n");

devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features__$1,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"hints","hints",-991113151),features__$1,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"async","async",1050769601),features__$1,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
}
}));

(devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1);

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_();

devtools.hints.uninstall_BANG_();

return devtools.async.uninstall_BANG_();
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_(new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs();
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_(pref,val);
});

//# sourceMappingURL=devtools.core.js.map
