import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.main.ui.ds.utilities.date.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.product.milestone_group');
app.main.ui.ds.product.milestone_group.schema_COLON_milestone_group = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null)], null)], null);
app.main.ui.ds.product.milestone_group.milestone_group_STAR__validator = rumext.v2.validation.validator(app.common.schema.schema(app.main.ui.ds.product.milestone_group.schema_COLON_milestone_group));

app.main.ui.ds.product.milestone_group.milestone_group_STAR_ = (function app$main$ui$ds$product$milestone_group$milestone_group_STAR_(props_79263){
// ===== start props checking =====;

var res__47117__auto___79268 = app.main.ui.ds.product.milestone_group.milestone_group_STAR__validator(props_79263);
if((!((res__47117__auto___79268 == null)))){
var items__47118__auto___79269 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___79268);
var msg__47122__auto___79270 = ["invalid props on component milestone-group*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___79269),"\n"].join('');
throw (new Error(msg__47122__auto___79270));
} else {
}

// ===== end props checking =====;

var on_menu_click = undefined;
var active = undefined;
var label = undefined;
var class$ = undefined;
var snapshots = undefined;
var props = undefined;
var {"className": class$, "active": active, "label": label, "snapshots": snapshots, "onMenuClick": on_menu_click, ...props} = props_79263;

var class_SINGLEQUOTE_ = "main_ui_ds_product_milestone_group__milestone"+" "+(cljs.core.truth_(active)?"main_ui_ds_product_milestone_group__is-selected":"");
var props__$1 = {...props, 'className':(class$ ?? "")+" "+(class_SINGLEQUOTE_ ?? ""),'data-testid':"milestone"};
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var open_QMARK_ = cljs.core.deref(open_STAR_);
var on_toggle_visibility = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_STAR_,cljs.core.not);
}));
var on_menu_click__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_menu_click)],(function (event){
var index = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"index"));
if(cljs.core.fn_QMARK_(on_menu_click)){
return (on_menu_click.cljs$core$IFn$_invoke$arity$2 ? on_menu_click.cljs$core$IFn$_invoke$arity$2(index,event) : on_menu_click.call(null,index,event));
} else {
return null;
}
}));
var snapshots__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(snapshots)],(function (){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,date){
return app.common.data.vec2(date,index);
}),snapshots);
}));
return rumext.v2.create_element("div",props__$1,rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':app.main.ui.ds.foundations.typography.body_small,'className':"main_ui_ds_product_milestone_group__name",'children':label}),rumext.v2.jsxs("div",{'className':"main_ui_ds_product_milestone_group__snapshots",'children':[rumext.v2.jsxs("button",{'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.expand-snapshot"),'onClick':on_toggle_visibility,'className':"main_ui_ds_product_milestone_group__toggle-snapshots",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.clock,'className':"main_ui_ds_product_milestone_group__icon-clock"}),rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':app.main.ui.ds.foundations.typography.body_medium,'className':"main_ui_ds_product_milestone_group__toggle-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.versions.autosaved.entry",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(snapshots__$1)], 0))}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow,'className':"main_ui_ds_product_milestone_group__icon-arrow"+" "+(cljs.core.truth_(open_QMARK_)?"main_ui_ds_product_milestone_group__icon-arrow-toggled":"")})]}),((open_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__79264){
var vec__79265 = p__79264;
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79265,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79265,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_ds_product_milestone_group__version-entry",'children':[rumext.v2.jsx(app.main.ui.ds.utilities.date.date_STAR_,{'date':date,'className':"main_ui_ds_product_milestone_group__date",'typography':app.main.ui.ds.foundations.typography.body_small}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'className':"main_ui_ds_product_milestone_group__entry-button",'variant':"ghost",'icon':app.main.ui.ds.foundations.assets.icon.menu,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.version-menu"),'data-index':index,'onClick':on_menu_click__$1})]},""+"entry-"+(index ?? "")));

return out_arr__46744__auto__;
}),[],snapshots__$1):null)]}));
});

(app.main.ui.ds.product.milestone_group.milestone_group_STAR_.displayName = "milestone-group*");


//# sourceMappingURL=app.main.ui.ds.product.milestone_group.js.map
