import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.weak.js";
import "./app.main.ui.ds.controls.shared.option.js";
import "./app.main.ui.ds.controls.shared.token_option.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.controls.shared.options_dropdown');
app.main.ui.ds.controls.shared.options_dropdown.schema_COLON_icon_list = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"invalid data: invalid icon"], null),(function (p1__74571_SHARP_){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.assets.icon.icon_list,p1__74571_SHARP_);
})], null)], null);
/**
 * A schema for the option data structure expected to receive on props
 *   for the `options-dropdown*` component.
 */
app.main.ui.ds.controls.shared.options_dropdown.schema_COLON_option = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"float","float",-1732389368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.main.ui.ds.controls.shared.options_dropdown.schema_COLON_icon_list], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.ui.ds.controls.shared.options_dropdown.schema_COLON_options_dropdown = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.main.ui.ds.controls.shared.options_dropdown.schema_COLON_option], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-to-end","empty-to-end",1724235985),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null)], null)], null);
app.main.ui.ds.controls.shared.options_dropdown.xf_COLON_filter_blank_id = cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__74574_SHARP_){
return cuerdas.core.blank_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__74574_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}));
app.main.ui.ds.controls.shared.options_dropdown.xf_COLON_filter_non_blank_id = cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__74575_SHARP_){
return cuerdas.core.blank_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__74575_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}));
app.main.ui.ds.controls.shared.options_dropdown.render_option = (function app$main$ui$ds$controls$shared$options_dropdown$render_option(option,ref,on_click,selected,focused){
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"type","type",1174270348));
var G__74587 = type;
var G__74587__$1 = (((G__74587 instanceof cljs.core.Keyword))?G__74587.fqn:null);
switch (G__74587__$1) {
case "group":
return rumext.v2.jsxs("li",{'className':"main_ui_ds_controls_shared_options_dropdown__group-option",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_down,'size':"m",'className':"main_ui_ds_controls_shared_options_dropdown__option-check",'aria-hidden':(cljs.core.truth_(name)?true:null)}),app.common.data.name(name)]},app.common.weak.weak_key(option));

break;
case "separator":
return rumext.v2.jsx("hr",{'className':"main_ui_ds_controls_shared_options_dropdown__option-separator"},app.common.weak.weak_key(option));

break;
case "empty":
return rumext.v2.jsx("li",{'className':"main_ui_ds_controls_shared_options_dropdown__option-empty",'children':cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"label","label",1718410804))},app.common.weak.weak_key(option));

break;
case "token":
return rumext.v2.jsx(app.main.ui.ds.controls.shared.token_option.token_option_STAR_,{'selected':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,selected),'id':id,'name':name,'resolved':cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626)),'ref':ref,'focused':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focused),'onClick':on_click},app.common.weak.weak_key(option));

break;
default:
return rumext.v2.jsx(app.main.ui.ds.controls.shared.option.option_STAR_,{'selected':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,selected),'aria-label':cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"aria-label","aria-label",455891514)),'label':cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"label","label",1718410804)),'id':id,'focused':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focused),'dimmed':new cljs.core.Keyword(null,"dimmed","dimmed",-791586346).cljs$core$IFn$_invoke$arity$1(option) === true,'onClick':on_click,'ref':ref,'icon':cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"icon","icon",1679606541))},app.common.weak.weak_key(option));

}
});
app.main.ui.ds.controls.shared.options_dropdown.options_dropdown_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.shared.options_dropdown.schema_COLON_options_dropdown);

app.main.ui.ds.controls.shared.options_dropdown.options_dropdown_STAR_ = (function app$main$ui$ds$controls$shared$options_dropdown$options_dropdown_STAR_(props_74598){
// ===== start props checking =====;

var res__47117__auto___74607 = app.main.ui.ds.controls.shared.options_dropdown.options_dropdown_STAR__validator(props_74598);
if((!((res__47117__auto___74607 == null)))){
var items__47118__auto___74608 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___74607);
var msg__47122__auto___74609 = ["invalid props on component options-dropdown*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___74608),"\n"].join('');
throw (new Error(msg__47122__auto___74609));
} else {
}

// ===== end props checking =====;

var options = undefined;
var align = undefined;
var selected = undefined;
var ref = undefined;
var on_click = undefined;
var empty_to_end = undefined;
var focused = undefined;
var props = undefined;
var {"ref": ref, "onClick": on_click, "options": options, "selected": selected, "focused": focused, "emptyToEnd": empty_to_end, "align": align, ...props} = props_74598;

var align__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(align,new cljs.core.Keyword(null,"left","left",-399115937));
var props__$1 = {...props, 'className':"main_ui_ds_controls_shared_options_dropdown__option-list"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(align__$1,new cljs.core.Keyword(null,"left","left",-399115937)))?"main_ui_ds_controls_shared_options_dropdown__left-align":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(align__$1,new cljs.core.Keyword(null,"right","right",-452581833)))?"main_ui_ds_controls_shared_options_dropdown__right-align":""),'tabIndex':"-1",'role':"listbox"};
var options_blank = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(empty_to_end),rumext.v2.adapt(options)],(function (){
if(empty_to_end){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.ui.ds.controls.shared.options_dropdown.xf_COLON_filter_blank_id,options);
} else {
return null;
}
}));
var options__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(empty_to_end),rumext.v2.adapt(options)],(function (){
if(empty_to_end){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.ui.ds.controls.shared.options_dropdown.xf_COLON_filter_non_blank_id,options);
} else {
return options;
}
}));
return rumext.v2.create_element("ul",props__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,option){
out_arr__46744__auto__.push(app.main.ui.ds.controls.shared.options_dropdown.render_option(option,ref,on_click,selected,focused));

return out_arr__46744__auto__;
}),[],options__$1),((cljs.core.seq(options_blank))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core.seq(options__$1))?rumext.v2.jsx("hr",{'className':"main_ui_ds_controls_shared_options_dropdown__option-separator"}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,option){
out_arr__46744__auto__.push(app.main.ui.ds.controls.shared.options_dropdown.render_option(option,ref,on_click,selected,focused));

return out_arr__46744__auto__;
}),[],options_blank)]}):null));
});

(app.main.ui.ds.controls.shared.options_dropdown.options_dropdown_STAR_.displayName = "options-dropdown*");


//# sourceMappingURL=app.main.ui.ds.controls.shared.options_dropdown.js.map
