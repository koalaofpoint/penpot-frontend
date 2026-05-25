import "./cljs_env.js";
import "./cljs.core.js";
import "./app.config.js";
import "./app.util.color.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.color_bullet');
app.main.ui.components.color_bullet.color_title = (function app$main$ui$components$color_bullet$color_title(color_item){
var map__72585 = cljs.core.meta(color_item);
var map__72585__$1 = cljs.core.__destructure_map(map__72585);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72585__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_and_name = (cljs.core.truth_(path)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
var gradient = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color_item);
var image = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color_item);
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color_item);
if((!((name == null)))){
if((!((color == null)))){
return ""+(path_and_name ?? "")+" ("+(color ?? "")+")";
} else {
if((!((gradient == null)))){
return ""+(path_and_name ?? "")+" ("+(app.util.color.gradient_type__GT_string(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient)) ?? "")+")";
} else {
if((!((image == null)))){
return ""+(path_and_name ?? "")+" ("+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image") ?? "")+")";
} else {
return path_and_name;

}
}
}
} else {
if((!((color == null)))){
return color;
} else {
if((!((gradient == null)))){
return app.util.color.gradient_type__GT_string(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient));
} else {
if((!((image == null)))){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image");
} else {
return null;
}
}
}
}
});
app.main.ui.components.color_bullet.breakable_color_title = (function app$main$ui$components$color_bullet$breakable_color_title(title){
return cuerdas.core.replace(title,".",".\u200B");
});
app.main.ui.components.color_bullet.color_bullet = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$components$color_bullet$color_bullet(props_72590){
var color = props_72590.color;
var mini = props_72590.mini;
var on_click = (props_72590["on-click"]);
var area = props_72590.area;
var read_only_QMARK_ = (on_click == null);
var on_click__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color),rumext.v2.adapt(on_click)],(function (event){
if(cljs.core.fn_QMARK_(on_click)){
return on_click(color,event);
} else {
return null;
}
}));
if(app.util.color.multiple_QMARK_(color)){
return rumext.v2.jsx("div",{'onClick':on_click__$1,'title':app.main.ui.components.color_bullet.color_title(color),'className':"main_ui_components_color_bullet__color-bullet main_ui_components_color_bullet__multiple"});
} else {
var color__$1 = ((typeof color === 'string')?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null):color);
var id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(color__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color__$1);
}
})();
var gradient = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color__$1);
var opacity = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color__$1);
var image = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color__$1);
return rumext.v2.jsx("div",{'role':"button",'data-readonly':cljs.core.str.cljs$core$IFn$_invoke$arity$1(read_only_QMARK_),'onClick':on_click__$1,'title':app.main.ui.components.color_bullet.color_title(color__$1),'className':"main_ui_components_color_bullet__color-bullet"+" "+(cljs.core.truth_(mini)?"main_ui_components_color_bullet__mini":"")+" "+(((!((id == null))))?"main_ui_components_color_bullet__is-library-color":"")+" "+(((id == null))?"main_ui_components_color_bullet__is-not-library-color":"")+" "+(((!((gradient == null))))?"main_ui_components_color_bullet__is-gradient":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = opacity;
if(cljs.core.truth_(and__5023__auto__)){
return ((1) > opacity);
} else {
return and__5023__auto__;
}
})())?"main_ui_components_color_bullet__is-transparent":"")+" "+(cljs.core.truth_(area)?"main_ui_components_color_bullet__grid-area":"")+" "+((read_only_QMARK_)?"main_ui_components_color_bullet__read-only":""),'children':(((!((gradient == null))))?rumext.v2.jsx("div",{'style':{'background':app.util.color.color__GT_background(color__$1)},'className':"main_ui_components_color_bullet__color-bullet-wrapper"}):(((!((image == null))))?(function (){var uri = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(image);
return rumext.v2.jsx("div",{'style':{'backgroundImage':""+"url("+(uri ?? "")+")"},'className':"main_ui_components_color_bullet__color-bullet-wrapper"});
})():rumext.v2.jsxs("div",{'className':"main_ui_components_color_bullet__color-bullet-wrapper",'children':[rumext.v2.jsx("div",{'style':{'background':app.util.color.color__GT_background(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)))},'className':"main_ui_components_color_bullet__color-bullet-left"}),rumext.v2.jsx("div",{'style':{'background':app.util.color.color__GT_background(color__$1)},'className':"main_ui_components_color_bullet__color-bullet-right"})]})
))});
}
}));

(app.main.ui.components.color_bullet.color_bullet.displayName = "color-bullet");

app.main.ui.components.color_bullet.color_name = (function app$main$ui$components$color_bullet$color_name(props_72597){
var color = props_72597.color;
var on_click = (props_72597["on-click"]);
var size = props_72597.size;
var on_double_click = (props_72597["on-double-click"]);
var origin = props_72597.origin;
var map__72601 = cljs.core.meta(color);
var map__72601__$1 = cljs.core.__destructure_map(map__72601);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72601__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__72602 = ((typeof color === 'string')?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null):color);
var map__72602__$1 = cljs.core.__destructure_map(map__72602);
var color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72602__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72602__$1,new cljs.core.Keyword(null,"gradient","gradient",-1983908971));
if(((cljs.core.not(size)) || ((size > (64))))){
return rumext.v2.jsx("span",{'title':name,'onClick':on_click,'onDoubleClick':on_double_click,'className':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"palette","palette",-456203511))) && ((size < (72)))))?"main_ui_components_color_bullet__color-text":"")+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"palette","palette",-456203511))) && ((((size >= (64))) && ((size < (72)))))))?"main_ui_components_color_bullet__small-text":"")+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"palette","palette",-456203511))) && ((size >= (72)))))?"main_ui_components_color_bullet__big-text":"")+" "+(((!((gradient == null))))?"main_ui_components_color_bullet__gradient":"")+" "+((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"palette","palette",-456203511)))?"main_ui_components_color_bullet__color-row-name":""),'children':app.main.ui.components.color_bullet.breakable_color_title((function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = color__$1;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.util.color.gradient_type__GT_string(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient));
}
}
})())});
} else {
return null;
}
});

(app.main.ui.components.color_bullet.color_name.displayName = "color-name");


//# sourceMappingURL=app.main.ui.components.color_bullet.js.map
