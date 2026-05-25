import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.common.types.profile.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.main.ui.ds.product.avatar.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.product.milestone');
app.main.ui.ds.product.milestone.schema_COLON_callback = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.fn_QMARK_], null)], null);
app.main.ui.ds.product.milestone.schema_COLON_milestone = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing","editing",1365491601),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locked","locked",-1658763820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.profile.schema_COLON_profile], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-open-menu","on-open-menu",948968468),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.main.ui.ds.product.milestone.schema_COLON_callback], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-focus-menu","on-focus-menu",-1724753502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.main.ui.ds.product.milestone.schema_COLON_callback], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-blur-menu","on-blur-menu",2126865162),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.main.ui.ds.product.milestone.schema_COLON_callback], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-key-down-input","on-key-down-input",698705869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.main.ui.ds.product.milestone.schema_COLON_callback], null)], null);
app.main.ui.ds.product.milestone.milestone_STAR__validator = rumext.v2.validation.validator(app.common.schema.schema(app.main.ui.ds.product.milestone.schema_COLON_milestone));

app.main.ui.ds.product.milestone.milestone_STAR_ = (function app$main$ui$ds$product$milestone$milestone_STAR_(props_79254){
// ===== start props checking =====;

var res__47117__auto___79255 = app.main.ui.ds.product.milestone.milestone_STAR__validator(props_79254);
if((!((res__47117__auto___79255 == null)))){
var items__47118__auto___79256 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___79255);
var msg__47122__auto___79257 = ["invalid props on component milestone*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___79256),"\n"].join('');
throw (new Error(msg__47122__auto___79257));
} else {
}

// ===== end props checking =====;

var created_at = undefined;
var profile = undefined;
var on_blur_input = undefined;
var on_key_down_input = undefined;
var on_focus_input = undefined;
var editing = undefined;
var active = undefined;
var locked = undefined;
var label = undefined;
var class$ = undefined;
var on_open_menu = undefined;
var props = undefined;
var {"createdAt": created_at, "profile": profile, "onBlurInput": on_blur_input, "onKeyDownInput": on_key_down_input, "onFocusInput": on_focus_input, "editing": editing, "active": active, "locked": locked, "label": label, "className": class$, "onOpenMenu": on_open_menu, ...props} = props_79254;

var class_SINGLEQUOTE_ = "main_ui_ds_product_milestone__milestone"+" "+(cljs.core.truth_(active)?"main_ui_ds_product_milestone__is-selected":"");
var props__$1 = {...props, 'className':(class$ ?? "")+" "+(class_SINGLEQUOTE_ ?? ""),'data-testid':"milestone"};
var created_at__$1 = ((app.common.time.inst_QMARK_(created_at))?created_at:app.common.time.inst(created_at));
return rumext.v2.create_element("div",props__$1,rumext.v2.jsx(app.main.ui.ds.product.avatar.avatar_STAR_,{'profile':profile,'variant':"S",'className':"main_ui_ds_product_milestone__avatar"}),((editing)?rumext.v2.jsx(app.main.ui.ds.controls.input.input_STAR_,{'className':"main_ui_ds_product_milestone__name-input",'variant':"seamless",'defaultValue':label,'autoFocus':true,'onFocus':on_focus_input,'onBlur':on_blur_input,'onKeyDown':on_key_down_input}):rumext.v2.jsxs("div",{'className':"main_ui_ds_product_milestone__name-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':app.main.ui.ds.foundations.typography.body_small,'className':"main_ui_ds_product_milestone__name",'children':label}),(cljs.core.truth_(locked)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.lock,'className':"main_ui_ds_product_milestone__lock-icon"}):null)]})),rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("time",{'dateTime':app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(created_at__$1,new cljs.core.Keyword(null,"iso","iso",-1366207543)),'className':"main_ui_ds_product_milestone__date",'children':app.common.time.timeago(created_at__$1)}),rumext.v2.jsx("div",{'className':"main_ui_ds_product_milestone__milestone-buttons",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'className':"main_ui_ds_product_milestone__menu-button",'variant':"ghost",'icon':app.main.ui.ds.foundations.assets.icon.menu,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.version-menu"),'onClick':on_open_menu})})]}));
});

(app.main.ui.ds.product.milestone.milestone_STAR_.displayName = "milestone*");


//# sourceMappingURL=app.main.ui.ds.product.milestone.js.map
