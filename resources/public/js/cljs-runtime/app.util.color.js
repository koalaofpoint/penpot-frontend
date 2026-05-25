import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
goog.provide('app.util.color');
app.util.color.gradient__GT_css = (function app$util$color$gradient__GT_css(p__54766){
var map__54767 = p__54766;
var map__54767__$1 = cljs.core.__destructure_map(map__54767);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54767__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var stops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54767__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var parse_stop = (function (p__54768){
var map__54769 = p__54768;
var map__54769__$1 = cljs.core.__destructure_map(map__54769);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54769__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54769__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54769__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var vec__54770 = app.common.types.color.hex__GT_rgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54770,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54770,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54770,(2),null);
var G__54773 = "rgba(%s, %s, %s, %s) %s";
var G__54774 = r;
var G__54775 = g;
var G__54776 = b;
var G__54777 = opacity;
var G__54778 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * (100))),"%"].join('');
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$6 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$6(G__54773,G__54774,G__54775,G__54776,G__54777,G__54778) : cuerdas.core.fmt.call(null,G__54773,G__54774,G__54775,G__54776,G__54777,G__54778));
});
var stops_css = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse_stop,stops));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"linear","linear",872268697))){
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2("linear-gradient(to bottom, %s)",stops_css) : cuerdas.core.fmt.call(null,"linear-gradient(to bottom, %s)",stops_css));
} else {
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2("radial-gradient(circle, %s)",stops_css) : cuerdas.core.fmt.call(null,"radial-gradient(circle, %s)",stops_css));
}
});
app.util.color.gradient_type__GT_string = (function app$util$color$gradient_type__GT_string(type){
var G__54780 = type;
var G__54780__$1 = (((G__54780 instanceof cljs.core.Keyword))?G__54780.fqn:null);
switch (G__54780__$1) {
case "linear":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.gradients.linear");

break;
case "radial":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.gradients.radial");

break;
default:
return null;

}
});
app.util.color.color__GT_background = (function app$util$color$color__GT_background(p__54781){
var map__54782 = p__54781;
var map__54782__$1 = cljs.core.__destructure_map(map__54782);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54782__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54782__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54782__$1,new cljs.core.Keyword(null,"gradient","gradient",-1983908971));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54782__$1,new cljs.core.Keyword(null,"value","value",305978217));
var color__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(color,value);
var opacity__$1 = (function (){var or__5025__auto__ = opacity;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = gradient;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),gradient);
} else {
return and__5023__auto__;
}
})())){
return app.util.color.gradient__GT_css(gradient);
} else {
if((((!((color__$1 == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(color__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549))))){
var color__$2 = app.common.types.color.prepend_hash(app.common.types.color.expand_hex(cuerdas.core.replace(color__$1,"#","")));
var vec__54783 = app.common.types.color.hex__GT_rgb(color__$2);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54783,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54783,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54783,(2),null);
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$5 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$5("rgba(%s, %s, %s, %s)",r,g,b,opacity__$1) : cuerdas.core.fmt.call(null,"rgba(%s, %s, %s, %s)",r,g,b,opacity__$1));
} else {
return "transparent";

}
}
});
app.util.color.color__GT_format__GT_background = (function app$util$color$color__GT_format__GT_background(p__54786,format){
var map__54788 = p__54786;
var map__54788__$1 = cljs.core.__destructure_map(map__54788);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54788__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54788__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54788__$1,new cljs.core.Keyword(null,"gradient","gradient",-1983908971));
var opacity__$1 = (function (){var or__5025__auto__ = opacity;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = gradient;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),gradient);
} else {
return and__5023__auto__;
}
})())){
return app.util.color.gradient__GT_css(gradient);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
var G__54789 = format;
var G__54789__$1 = (((G__54789 instanceof cljs.core.Keyword))?G__54789.fqn:null);
switch (G__54789__$1) {
case "rgba":
var vec__54790 = app.common.types.color.hex__GT_rgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54790,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54790,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54790,(2),null);
var G__54794 = "rgba(%s)";
var G__54795 = app.common.types.color.format_rgba(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,opacity__$1], null));
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2(G__54794,G__54795) : cuerdas.core.fmt.call(null,G__54794,G__54795));

break;
case "hsla":
var vec__54796 = app.common.types.color.hex__GT_hsl(color);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54796,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54796,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54796,(2),null);
var G__54799 = "hsla(%s)";
var G__54800 = app.common.types.color.format_hsla(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,opacity__$1], null));
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2(G__54799,G__54800) : cuerdas.core.fmt.call(null,G__54799,G__54800));

break;
case "hex":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.upper(app.common.data.opacity_to_hex(opacity__$1)))].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54789__$1)].join('')));

}
} else {
return "transparent";

}
}
});
app.util.color.multiple_QMARK_ = (function app$util$color$multiple_QMARK_(p__54801){
var map__54802 = p__54801;
var map__54802__$1 = cljs.core.__destructure_map(map__54802);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54802__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54802__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54802__$1,new cljs.core.Keyword(null,"value","value",305978217));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54802__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54802__$1,new cljs.core.Keyword(null,"gradient","gradient",-1983908971));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gradient,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"multiple","multiple",1244445549))))))))));
});
app.util.color.get_color_name = (function app$util$color$get_color_name(color){
var or__5025__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(color));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return app.util.color.gradient_type__GT_string(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color)));
}
}
}
});
app.util.color.random_color = (function app$util$color$random_color(){
return ""+"rgb("+(app.common.math.floor((Math.random() * (256))) ?? "")+", "+(app.common.math.floor((Math.random() * (256))) ?? "")+", "+(app.common.math.floor((Math.random() * (256))) ?? "")+")";
});

//# sourceMappingURL=app.util.color.js.map
