import "./cljs_env.js";
import "./cljs.core.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
goog.provide('app.util.avatars');
app.util.avatars.generate_STAR_ = (function app$util$avatars$generate_STAR_(p__44971){
var map__44972 = p__44971;
var map__44972__$1 = cljs.core.__destructure_map(map__44972);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44972__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44972__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44972__$1,new cljs.core.Keyword(null,"size","size",1098693007),(128));
var parts = cuerdas.core.words.cljs$core$IFn$_invoke$arity$1(cuerdas.core.upper(name));
var letters = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(parts)))?cljs.core.ffirst(parts):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(parts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.second(parts)))].join(''));
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
var text_color = (cljs.core.truth_(color)?"#2e3434":"#fff");
var color__$1 = (function (){var or__5025__auto__ = color;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "#000000";
}
})();
app.util.object.set_BANG_(canvas,"width",size);

app.util.object.set_BANG_(canvas,"height",size);

app.util.object.set_BANG_(context,"fillStyle",color__$1);

context.fillRect((0),(0),size,size);

app.util.object.set_BANG_(context,"font",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((size / (2))),"px Arial"].join(''));

app.util.object.set_BANG_(context,"textAlign","center");

app.util.object.set_BANG_(context,"fillStyle",text_color);

context.fillText(letters,(size / (2)),(size / 1.5));

return canvas.toDataURL();
});
app.util.avatars.generate = cljs.core.memoize(app.util.avatars.generate_STAR_);

//# sourceMappingURL=app.util.avatars.js.map
