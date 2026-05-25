import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.shared.option');
/**
 * A schema for option* component props
 */
app.main.ui.ds.controls.shared.option.schema_COLON_option = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dimmed","dimmed",-791586346),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"invalid data: missing required props"], null),(function (props){
return ((((cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"icon","icon",1679606541))) && (((cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"label","label",1718410804))) || (cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"aria-label","aria-label",455891514))))))) || (cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"label","label",1718410804))));
})], null)], null);
app.main.ui.ds.controls.shared.option.option_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.shared.option.schema_COLON_option);

app.main.ui.ds.controls.shared.option.option_STAR_ = (function app$main$ui$ds$controls$shared$option$option_STAR_(props_74533){
// ===== start props checking =====;

var res__47117__auto___74537 = app.main.ui.ds.controls.shared.option.option_STAR__validator(props_74533);
if((!((res__47117__auto___74537 == null)))){
var items__47118__auto___74538 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___74537);
var msg__47122__auto___74539 = ["invalid props on component option*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___74538),"\n"].join('');
throw (new Error(msg__47122__auto___74539));
} else {
}

// ===== end props checking =====;

var aria_label = undefined;
var selected = undefined;
var ref = undefined;
var icon = undefined;
var on_click = undefined;
var focused = undefined;
var label = undefined;
var id = undefined;
var dimmed = undefined;
var props = undefined;
var {"aria-label": aria_label, "selected": selected, "ref": ref, "icon": icon, "onClick": on_click, "focused": focused, "label": label, "id": id, "dimmed": dimmed, ...props} = props_74533;

var class$ = "main_ui_ds_controls_shared_option__option"+" "+(((!((icon == null))))?"main_ui_ds_controls_shared_option__option-with-icon":"")+" "+(cljs.core.truth_(selected)?"main_ui_ds_controls_shared_option__option-selected":"")+" "+(cljs.core.truth_(focused)?"main_ui_ds_controls_shared_option__option-current":"");
return rumext.v2.jsxs("li",{'role':"option",'className':class$,'children':[(((!((icon == null))))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'size':"s",'className':"main_ui_ds_controls_shared_option__option-icon",'aria-hidden':(cljs.core.truth_(label)?true:null),'aria-label':((cljs.core.not(label))?aria_label:null)}):null),rumext.v2.jsx("span",{'className':"main_ui_ds_controls_shared_option__option-text"+" "+(cljs.core.truth_(dimmed)?"main_ui_ds_controls_shared_option__option-text-dimmed":""),'children':label}),((selected)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_ds_controls_shared_option__option-check",'aria-hidden':((label)?true:null)}):null)],'id':id,'data-testid':"dropdown-option",'value':id,'data-id':id,'onClick':on_click,'ref':ref,'aria-selected':selected});
});

(app.main.ui.ds.controls.shared.option.option_STAR_.displayName = "option*");


//# sourceMappingURL=app.main.ui.ds.controls.shared.option.js.map
