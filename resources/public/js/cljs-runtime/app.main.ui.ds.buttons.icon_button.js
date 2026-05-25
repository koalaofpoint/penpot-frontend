import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.tooltip.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.buttons.icon_button');
app.main.ui.ds.buttons.icon_button.schema_COLON_icon_button = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip-class","tooltip-class",-1272053458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon-class","icon-class",-216197803),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__72434_SHARP_){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.assets.icon.icon_list,p1__72434_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip-placement","tooltip-placement",1392194953),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"top","bottom","left","right","top-right","bottom-right","bottom-left","top-left"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"primary","secondary","ghost","destructive","action"], null)], null)], null)], null);
app.main.ui.ds.buttons.icon_button.icon_button_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.buttons.icon_button.schema_COLON_icon_button);

app.main.ui.ds.buttons.icon_button.icon_button_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$ds$buttons$icon_button$icon_button_STAR_(props_72436){
// ===== start props checking =====;

var res__47117__auto___72444 = app.main.ui.ds.buttons.icon_button.icon_button_STAR__validator(props_72436);
if((!((res__47117__auto___72444 == null)))){
var items__47118__auto___72445 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___72444);
var msg__47122__auto___72446 = ["invalid props on component icon-button*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___72445),"\n"].join('');
throw (new Error(msg__47122__auto___72446));
} else {
}

// ===== end props checking =====;

var aria_label = undefined;
var children = undefined;
var variant = undefined;
var tooltip_placement = undefined;
var icon = undefined;
var tooltip_class = undefined;
var class$ = undefined;
var icon_class = undefined;
var props = undefined;
var {"className": class$, "icon": icon, "iconClass": icon_class, "variant": variant, "aria-label": aria_label, "children": children, "tooltipPlacement": tooltip_placement, "tooltipClass": tooltip_class, ...props} = props_72436;

var variant__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(variant,"primary");
var button_ref = rumext.v2.use_ref(null);
var tooltip_id = rumext.v2.use_id();
var button_class = "main_ui_ds_buttons_icon_button__icon-button"+" "+(((variant__$1 === "primary"))?"main_ui_ds_buttons_icon_button__icon-button-primary":"")+" "+(((variant__$1 === "secondary"))?"main_ui_ds_buttons_icon_button__icon-button-secondary":"")+" "+(((variant__$1 === "ghost"))?"main_ui_ds_buttons_icon_button__icon-button-ghost":"")+" "+(((variant__$1 === "action"))?"main_ui_ds_buttons_icon_button__icon-button-action":"")+" "+(((variant__$1 === "destructive"))?"main_ui_ds_buttons_icon_button__icon-button-destructive":"");
var props__$1 = {...props, 'className':(class$ ?? "")+" "+(button_class ?? ""),'ref':button_ref,'aria-labelledby':tooltip_id};
return rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip_STAR_,{'content':aria_label,'className':tooltip_class,'triggerRef':button_ref,'placement':tooltip_placement,'id':tooltip_id,'children':rumext.v2.create_element("button",props__$1,rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'aria-hidden':true,'className':icon_class}),children)});
}));

(app.main.ui.ds.buttons.icon_button.icon_button_STAR_.displayName = "icon-button*");


//# sourceMappingURL=app.main.ui.ds.buttons.icon_button.js.map
