import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.releases.common.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.releases.v2_1');
app.main.ui.releases.common.render_release_notes.cljs$core$IMultiFn$_add_method$arity$3(null,"2.1",(function (p__82976){
var map__82977 = p__82976;
var map__82977__$1 = cljs.core.__destructure_map(map__82977);
var slide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82977__$1,new cljs.core.Keyword(null,"slide","slide",142491892));
var klass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82977__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var finish = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82977__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82977__$1,new cljs.core.Keyword(null,"version","version",425292698));
var G__82978 = slide;
var G__82978__$1 = (((G__82978 instanceof cljs.core.Keyword))?G__82978.fqn:null);
switch (G__82978__$1) {
case "start":
return rumext.v2.jsx("div",{'className':"main_ui_releases_v2_1__modal-overlay",'children':rumext.v2.jsx("div",{'className':"animated"+" "+(klass ?? ""),'children':rumext.v2.jsxs("div",{'className':"main_ui_releases_v2_1__modal-container",'children':[rumext.v2.jsx("img",{'src':"images/features/2.0-intro-image.png",'border':"0",'alt':"A graphic illustration with Penpot style",'className':"main_ui_releases_v2_1__start-image"}),rumext.v2.jsxs("div",{'className':"main_ui_releases_v2_1__modal-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_releases_v2_1__modal-header",'children':[rumext.v2.jsx("h1",{'className':"main_ui_releases_v2_1__modal-title",'children':"What's new in Penpot? "}),rumext.v2.jsx("div",{'className':"main_ui_releases_v2_1__version-tag",'children':""+"Version "+(version ?? "")})]}),rumext.v2.jsxs("div",{'className':"main_ui_releases_v2_1__features-block",'children':[rumext.v2.jsx("p",{'className':"main_ui_releases_v2_1__feature-content",'children':"Penpot 2.1 brings improvements to the authentication system, path editing, real-time persistence, and comments system among other enhancements. We\u2019ve improved the stability of the platform by fixing a bunch of bugs, a lot of them raised by our amazing community <3."}),rumext.v2.jsx("p",{'className':"main_ui_releases_v2_1__feature-content",'children':"This minor release comes shortly after our amazing Penpot 2.0 and it shows the way to long-expected capabilities like the incoming new plugin system!"}),rumext.v2.jsx("p",{'className':"main_ui_releases_v2_1__feature-content",'children':" Ready to dive in? Let 's get started!"})]}),rumext.v2.jsx("div",{'className':"main_ui_releases_v2_1__navigation",'children':rumext.v2.jsx("button",{'onClick':finish,'className':"main_ui_releases_v2_1__next-btn",'children':"Let's go"})})]})]})})});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82978__$1)].join('')));

}
}));

//# sourceMappingURL=app.main.ui.releases.v2_1.js.map
