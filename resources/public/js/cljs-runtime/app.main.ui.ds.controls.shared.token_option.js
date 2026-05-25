import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.tooltip.tooltip.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.shared.token_option');
app.main.ui.ds.controls.shared.token_option.schema_COLON_token_option = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optiona","optiona",-154621963),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),cljs.core.some_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolved","resolved",968763567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"float","float",-1732389368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.ds.controls.shared.token_option.token_option_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.shared.token_option.schema_COLON_token_option);

app.main.ui.ds.controls.shared.token_option.token_option_STAR_ = (function app$main$ui$ds$controls$shared$token_option$token_option_STAR_(props_74549){
// ===== start props checking =====;

var res__47117__auto___74550 = app.main.ui.ds.controls.shared.token_option.token_option_STAR__validator(props_74549);
if((!((res__47117__auto___74550 == null)))){
var items__47118__auto___74551 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___74550);
var msg__47122__auto___74552 = ["invalid props on component token-option*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___74551),"\n"].join('');
throw (new Error(msg__47122__auto___74552));
} else {
}

// ===== end props checking =====;

var selected = undefined;
var ref = undefined;
var name = undefined;
var resolved = undefined;
var on_click = undefined;
var focused = undefined;
var id = undefined;
var props = undefined;
var {"id": id, "name": name, "onClick": on_click, "selected": selected, "ref": ref, "focused": focused, "resolved": resolved, ...props} = props_74549;

var internal_id = rumext.v2.use_id();
var id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(id,internal_id);
var element_ref = rumext.v2.use_ref(null);
return rumext.v2.jsxs("li",{'role':"option",'className':"main_ui_ds_controls_shared_token_option__token-option"+" "+"main_ui_ds_controls_shared_token_option__option-with-pill"+" "+(cljs.core.truth_(selected)?"main_ui_ds_controls_shared_token_option__option-selected-token":"")+" "+(cljs.core.truth_(focused)?"main_ui_ds_controls_shared_token_option__option-current":""),'children':[(cljs.core.truth_(selected)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_ds_controls_shared_token_option__option-check",'aria-hidden':(cljs.core.truth_(name)?true:null)}):rumext.v2.jsx("span",{'className':"main_ui_ds_controls_shared_token_option__icon-placeholder"})),rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip.tooltip_STAR_,{'content':name,'triggerRef':element_ref,'id':""+(id__$1 ?? "")+"-name",'className':"main_ui_ds_controls_shared_token_option__option-text",'children':rumext.v2.jsx("span",{'aria-labelledby':""+(id__$1 ?? "")+"-name",'ref':element_ref,'children':name})}),(cljs.core.truth_(resolved)?rumext.v2.jsx("span",{'className':"main_ui_ds_controls_shared_token_option__option-pill",'children':resolved}):null)],'id':id__$1,'data-testid':"dropdown-option",'value':id__$1,'data-id':id__$1,'onClick':on_click,'ref':ref,'aria-selected':selected});
});

(app.main.ui.ds.controls.shared.token_option.token_option_STAR_.displayName = "token-option*");


//# sourceMappingURL=app.main.ui.ds.controls.shared.token_option.js.map
