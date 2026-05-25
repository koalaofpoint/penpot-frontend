import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.releases.common.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.releases.v1_19');
app.main.ui.releases.common.render_release_notes.cljs$core$IMultiFn$_add_method$arity$3(null,"1.19",(function (p__82949){
var map__82950 = p__82949;
var map__82950__$1 = cljs.core.__destructure_map(map__82950);
var slide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"slide","slide",142491892));
var klass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var finish = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"finish","finish",-586688046));
var navigate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"navigate","navigate",657596805));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82950__$1,new cljs.core.Keyword(null,"version","version",425292698));
var G__82953 = slide;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),G__82953)){
return rumext.v2.jsx("div",{'className':"modal-overlay",'children':rumext.v2.jsx("div",{'className':"animated"+" "+(klass ?? ""),'children':rumext.v2.jsxs("div",{'className':"modal-container onboarding feature",'children':[rumext.v2.jsx("div",{'className':"modal-left",'children':rumext.v2.jsx("img",{'src':"images/onboarding-version.jpg",'border':"0",'alt':"What's new release 1.19"})}),rumext.v2.jsxs("div",{'className':"modal-right",'children':[rumext.v2.jsx("div",{'className':"modal-title",'children':rumext.v2.jsx("h2",{'children':"What's new?"})}),rumext.v2.jsxs("span",{'className':"release",'children':["Version ",version]}),rumext.v2.jsxs("div",{'className':"modal-content",'children':[rumext.v2.jsxs("p",{'children':["On this 1.19 release, we bring Access Tokens, which ","will enable Penpot to connect with other services, ","another gateway to community creativity!"]}),rumext.v2.jsxs("p",{'children':["We\u2019ve also published performance improvements and tons ","of enhancements, a lot of them from our beloved community ","contributors <3"]})]}),rumext.v2.jsx("div",{'className':"modal-navigation",'children':rumext.v2.jsx("button",{'className':"btn-secondary",'onClick':next,'children':"Continue"})})]}),rumext.v2.jsx("img",{'className':"deco",'src':"images/deco-left.png",'border':"0"}),rumext.v2.jsx("img",{'className':"deco right",'src':"images/deco-right.png",'border':"0"})]})})});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__82953)){
return rumext.v2.jsx("div",{'className':"modal-overlay",'children':rumext.v2.jsx("div",{'className':"animated"+" "+(klass ?? ""),'children':rumext.v2.jsxs("div",{'className':"modal-container onboarding feature",'children':[rumext.v2.jsx("div",{'className':"modal-left",'children':rumext.v2.jsx("img",{'src':"images/features/1.19-contributions.png",'border':"0",'alt':"Community code contributions"})}),rumext.v2.jsxs("div",{'className':"modal-right",'children':[rumext.v2.jsx("div",{'className':"modal-title",'children':rumext.v2.jsx("h2",{'children':"Community code contributions"})}),rumext.v2.jsxs("div",{'className':"modal-content",'children':[rumext.v2.jsxs("p",{'children':["By far, this is the Penpot release that has the most ","code contributions. We cannot emphasize enough how happy ","we are to see how Penpot is more and more  a product of ","the community."]}),rumext.v2.jsxs("p",{'children':["Let\u2019s give kudos to ",rumext.v2.jsx("a",{'href':"https://github.com/astudentinearth",'target':"_blank",'rel':"noopener noreferrer",'children':"@astudentinearth"}),", ",rumext.v2.jsx("a",{'href':"https://github.com/dfelinto",'target':"_blank",'rel':"noopener noreferrer",'children':"@dfelinto"}),", ",rumext.v2.jsx("a",{'href':"https://github.com/akshay-gupta7",'target':"_blank",'rel':"noopener noreferrer",'children':"@akshay-gupta7"}),", ",rumext.v2.jsx("a",{'href':"https://github.com/ondrejkonec",'target':"_blank",'rel':"noopener noreferrer",'children':"@ondrejkonec"})," and ",rumext.v2.jsx("a",{'href':"https://github.com/ryanbreen",'target':"_blank",'rel':"noopener noreferrer",'children':"@ryanbreen"})," in particular and the Penpot community as a whole!"]})]}),rumext.v2.jsxs("div",{'className':"modal-navigation",'children':[rumext.v2.jsx("button",{'className':"btn-secondary",'onClick':next,'children':"Continue"}),rumext.v2.jsx(app.main.ui.releases.common.navigation_bullets,{'slide':slide,'navigate':navigate,'total':(2)})]})]})]})})});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__82953)){
return rumext.v2.jsx("div",{'className':"modal-overlay",'children':rumext.v2.jsx("div",{'className':"animated"+" "+(klass ?? ""),'children':rumext.v2.jsxs("div",{'className':"modal-container onboarding feature",'children':[rumext.v2.jsx("div",{'className':"modal-left",'children':rumext.v2.jsx("img",{'src':"images/features/1.19-tokens.gif",'border':"0",'alt':"Access Tokens"})}),rumext.v2.jsxs("div",{'className':"modal-right",'children':[rumext.v2.jsx("div",{'className':"modal-title",'children':rumext.v2.jsx("h2",{'children':"Access Tokens"})}),rumext.v2.jsxs("div",{'className':"modal-content",'children':[rumext.v2.jsxs("p",{'children':["Personal access tokens function like an alternative to ","our login/password authentication system and can be used ","to allow an application to access the internal Penpot API."]}),rumext.v2.jsxs("p",{'children':["This opens up a wide range of possibilities in terms of ","integrations and is an important step on the critical path ","to the Penpot\u2019s plugins system."]})]}),rumext.v2.jsxs("div",{'className':"modal-navigation",'children':[rumext.v2.jsx("button",{'className':"btn-secondary",'onClick':finish,'children':"Start!"}),rumext.v2.jsx(app.main.ui.releases.common.navigation_bullets,{'slide':slide,'navigate':navigate,'total':(2)})]})]})]})})});
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82953)].join('')));

}
}
}
}));

//# sourceMappingURL=app.main.ui.releases.v1_19.js.map
