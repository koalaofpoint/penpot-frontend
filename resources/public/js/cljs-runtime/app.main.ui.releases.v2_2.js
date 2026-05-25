import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.releases.common.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.releases.v2_2');
app.main.ui.releases.common.render_release_notes.cljs$core$IMultiFn$_add_method$arity$3(null,"2.2",(function (p__82991){
var map__82992 = p__82991;
var map__82992__$1 = cljs.core.__destructure_map(map__82992);
var slide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82992__$1,new cljs.core.Keyword(null,"slide","slide",142491892));
var klass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82992__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var finish = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82992__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82992__$1,new cljs.core.Keyword(null,"version","version",425292698));
var G__82994 = slide;
var G__82994__$1 = (((G__82994 instanceof cljs.core.Keyword))?G__82994.fqn:null);
switch (G__82994__$1) {
case "start":
return rumext.v2.jsx("div",{'className':"main_ui_releases_v2_2__modal-overlay",'children':rumext.v2.jsx("div",{'className':"animated"+" "+(klass ?? ""),'children':rumext.v2.jsxs("div",{'className':"main_ui_releases_v2_2__modal-container",'children':[rumext.v2.jsx("img",{'src':"images/features/2.0-intro-image.png",'border':"0",'alt':"A graphic illustration with Penpot style",'className':"main_ui_releases_v2_2__start-image"}),rumext.v2.jsxs("div",{'className':"main_ui_releases_v2_2__modal-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_releases_v2_2__modal-header",'children':[rumext.v2.jsx("h1",{'className':"main_ui_releases_v2_2__modal-title",'children':"What's new in Penpot? "}),rumext.v2.jsx("div",{'className':"main_ui_releases_v2_2__version-tag",'children':""+"Version "+(version ?? "")})]}),rumext.v2.jsxs("div",{'className':"main_ui_releases_v2_2__features-block",'children':[rumext.v2.jsx("p",{'className':"main_ui_releases_v2_2__feature-content",'children':"This Penpot 2.2 release focuses on internal changes that are laying out the ground for the upcoming plugin system and substantial performance improvements."}),rumext.v2.jsx("p",{'className':"main_ui_releases_v2_2__feature-content",'children':"This version also adds full JSON API interoperability and the brand-new Penpot\u2019s Storybook!"}),rumext.v2.jsx("p",{'className':"main_ui_releases_v2_2__feature-content",'children':"Self-hosted Penpot installations will benefit from better file data storage and Penpot admins can now use the improved automatic snapshotting process when recovering old files."}),rumext.v2.jsx("p",{'className':"main_ui_releases_v2_2__feature-content",'children':"Thanks again to our awesome community for their amazing contributions to this release!"})]}),rumext.v2.jsx("div",{'className':"main_ui_releases_v2_2__navigation",'children':rumext.v2.jsx("button",{'onClick':finish,'className':"main_ui_releases_v2_2__next-btn",'children':"Let's go"})})]})]})})});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82994__$1)].join('')));

}
}));

//# sourceMappingURL=app.main.ui.releases.v2_2.js.map
