import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.releases.common.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.releases.v1_10');
app.main.ui.releases.common.render_release_notes.cljs$core$IMultiFn$_add_method$arity$3(null,"1.10",(function (p__82926){
var map__82927 = p__82926;
var map__82927__$1 = cljs.core.__destructure_map(map__82927);
var klass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82927__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var finish = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82927__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82927__$1,new cljs.core.Keyword(null,"version","version",425292698));
return rumext.v2.jsx("div",{'className':"modal-overlay",'children':rumext.v2.jsx("div",{'className':"animated"+" "+(klass ?? ""),'children':rumext.v2.jsxs("div",{'className':"modal-container onboarding feature",'children':[rumext.v2.jsx("div",{'className':"modal-left",'children':rumext.v2.jsx("img",{'src':"images/beta-on.jpg",'border':"0",'alt':"Penpot is now BETA"})}),rumext.v2.jsxs("div",{'className':"modal-right",'children':[rumext.v2.jsx("div",{'className':"modal-title",'children':rumext.v2.jsx("h2",{'children':"Penpot is now BETA"})}),rumext.v2.jsxs("span",{'className':"release",'children':["Beta version ",version]}),rumext.v2.jsxs("div",{'className':"modal-content",'children':[rumext.v2.jsx("p",{'children':"Penpot\u2019s officially beta!"}),rumext.v2.jsx("p",{'children':"We carefully analyzed everything important to us before taking this step. And now we\u2019re ready to move forward onto the beta version.  Have a play around if you haven\u2019t yet."}),rumext.v2.jsx("a",{'href':"https://penpot.app/why-beta",'target':"_blank",'children':"Learn why we made this decision."})]}),rumext.v2.jsx("div",{'className':"modal-navigation",'children':rumext.v2.jsx("button",{'className':"btn-secondary",'onClick':finish,'children':"Explore Penpot Beta 1.10"})})]}),rumext.v2.jsx("img",{'className':"deco",'src':"images/deco-left.png",'border':"0"}),rumext.v2.jsx("img",{'className':"deco right",'src':"images/deco-right.png",'border':"0"})]})})});
}));

//# sourceMappingURL=app.main.ui.releases.v1_10.js.map
