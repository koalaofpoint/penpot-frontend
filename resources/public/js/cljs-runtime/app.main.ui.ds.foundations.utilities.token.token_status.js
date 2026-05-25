import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.foundations.utilities.token.token_status');
app.main.ui.ds.foundations.utilities.token.token_status.token_status_partial = "token-status-partial";
app.main.ui.ds.foundations.utilities.token.token_status.token_status_full = "token-status-full";
app.main.ui.ds.foundations.utilities.token.token_status.token_status_non_applied = "token-status-non-applied";
/**
 * A collection of all status
 */
app.main.ui.ds.foundations.utilities.token.token_status.token_status_list = cljs.core.set(cljs.core.list("token-status-partial","token-status-full","token-status-non-applied"));
app.main.ui.ds.foundations.utilities.token.token_status.schema_COLON_token_status_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon-id","icon-id",-1671266652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__79355_SHARP_){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.utilities.token.token_status.token_status_list,p1__79355_SHARP_);
})], null)], null)], null)], null);
app.main.ui.ds.foundations.utilities.token.token_status.token_status_icon_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.foundations.utilities.token.token_status.schema_COLON_token_status_icon);

app.main.ui.ds.foundations.utilities.token.token_status.token_status_icon_STAR_ = (function app$main$ui$ds$foundations$utilities$token$token_status$token_status_icon_STAR_(props_79356){
// ===== start props checking =====;

var res__47117__auto___79357 = app.main.ui.ds.foundations.utilities.token.token_status.token_status_icon_STAR__validator(props_79356);
if((!((res__47117__auto___79357 == null)))){
var items__47118__auto___79358 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___79357);
var msg__47122__auto___79359 = ["invalid props on component token-status-icon*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___79358),"\n"].join('');
throw (new Error(msg__47122__auto___79359));
} else {
}

// ===== end props checking =====;

var icon_id = undefined;
var class$ = undefined;
var props = undefined;
var {"iconId": icon_id, "className": class$, ...props} = props_79356;

var class$__$1 = ""+((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})() ?? "")+" "+("main_ui_ds_foundations_utilities_token_token_status__token-icon" ?? "");
var props__$1 = {...props, 'className':class$__$1,'width':"14px",'height':"14px"};
var offset = (0);
return rumext.v2.create_element("svg",props__$1,rumext.v2.jsx("use",{'href':""+"#icon-"+(icon_id ?? ""),'width':"14px",'height':"14px",'x':offset,'y':offset}));
});

(app.main.ui.ds.foundations.utilities.token.token_status.token_status_icon_STAR_.displayName = "token-status-icon*");


//# sourceMappingURL=app.main.ui.ds.foundations.utilities.token.token_status.js.map
