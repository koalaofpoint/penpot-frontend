import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.auth.js";
import "./app.main.store.js";
import "./app.main.ui.auth.login.js";
import "./app.main.ui.auth.recovery.js";
import "./app.main.ui.auth.recovery_request.js";
import "./app.main.ui.auth.register.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.auth');
app.main.ui.auth.auth_STAR_ = (function app$main$ui$auth$auth_STAR_(props_58599){
var route = props_58599.route;
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"name","name",1843675177));
var is_register = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"auth-register","auth-register",826284239))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"auth-register-validate","auth-register-validate",1333056214))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"register-validate-page","register-validate-page",2093054747))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"auth-register-success","auth-register-success",-965924859))))))));
var params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route);
var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(params);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("title.default"));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(error)],(function (){
if(cljs.core.truth_(error)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.show_redirect_error(error));
} else {
return null;
}
}));

return rumext.v2.jsxs("main",{'className':"main_ui_auth__auth-section"+" "+((is_register)?"main_ui_auth__register":""),'children':[rumext.v2.jsx("h1",{'className':"main_ui_auth__logo-container",'children':rumext.v2.jsx("a",{'href':"#/",'title':"Penpot",'className':"main_ui_auth__logo-btn",'children':app.main.ui.icons.logo})}),rumext.v2.jsx("div",{'className':"main_ui_auth__login-illustration",'children':rumext.v2.jsx("img",{'src':"images/registration-illustration.png"})}),rumext.v2.jsxs("section",{'className':"main_ui_auth__auth-content",'children':[(function (){var G__58600 = section;
var G__58600__$1 = (((G__58600 instanceof cljs.core.Keyword))?G__58600.fqn:null);
switch (G__58600__$1) {
case "auth-register":
return rumext.v2.jsx(app.main.ui.auth.register.register_page_STAR_,{'params':params});

break;
case "auth-register-success":
return rumext.v2.jsx(app.main.ui.auth.register.register_success_page_STAR_,{'params':params});

break;
case "auth-register-validate":
return rumext.v2.jsx(app.main.ui.auth.register.register_validate_page_STAR_,{'params':params});

break;
case "auth-login":
return rumext.v2.jsx(app.main.ui.auth.login.login_page,{'params':params});

break;
case "auth-recovery-request":
return rumext.v2.jsx(app.main.ui.auth.recovery_request.recovery_request_page,{});

break;
case "auth-recovery":
return rumext.v2.jsx(app.main.ui.auth.recovery.recovery_page,{'params':params});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58600__$1)].join('')));

}
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"auth-register","auth-register",826284239)))?rumext.v2.jsx(app.main.ui.auth.register.terms_register_STAR_,{}):null)]})]});
});

(app.main.ui.auth.auth_STAR_.displayName = "auth*");

app.main.ui.auth.auth_page_STAR_ = (function app$main$ui$auth$auth_page_STAR_(props_58601){
var props = props_58601;
return rumext.v2.create_element(app.main.ui.auth.auth_STAR_,props);
});

(app.main.ui.auth.auth_page_STAR_.displayName = "auth-page*");


//# sourceMappingURL=app.main.ui.auth.js.map
