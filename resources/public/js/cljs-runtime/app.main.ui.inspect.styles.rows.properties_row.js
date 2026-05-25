import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.workspace.tokens.format.js";
import "./app.main.ui.ds.tooltip.js";
import "./app.main.ui.inspect.styles.property_detail_copiable.js";
import "./app.util.clipboard.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.rows.properties_row');
app.main.ui.inspect.styles.rows.properties_row.schema_COLON_properties_row = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"detail","detail",-1545345025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copiable","copiable",828892749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR__validator = rumext.v2.validation.validator(app.main.ui.inspect.styles.rows.properties_row.schema_COLON_properties_row);

app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_ = (function app$main$ui$inspect$styles$rows$properties_row$properties_row_STAR_(props_74847){
// ===== start props checking =====;

var res__47117__auto___74864 = app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR__validator(props_74847);
if((!((res__47117__auto___74864 == null)))){
var items__47118__auto___74865 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___74864);
var msg__47122__auto___74866 = ["invalid props on component properties-row*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___74865),"\n"].join('');
throw (new Error(msg__47122__auto___74866));
} else {
}

// ===== end props checking =====;

var detail = props_74847.detail;
var property = props_74847.property;
var copiable = props_74847.copiable;
var term = props_74847.term;
var token = props_74847.token;
var class$ = props_74847.className;
var copiable_QMARK_ = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(copiable,false);
var detail_QMARK_ = (!((((detail == null)) || (cuerdas.core.blank_QMARK_(detail)))));
var detail__$1 = ((detail_QMARK_)?detail:"-");
var copied_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var copied = cljs.core.deref(copied_STAR_);
var copiable_value = (((!((token == null))))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token):property);
var row_ref = rumext.v2.use_ref(null);
var copy_attr = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(copied)],(function (){
cljs.core.reset_BANG_(copied_STAR_,true);

app.util.clipboard.to_clipboard(copiable_value);

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((1000),(function (){
return cljs.core.reset_BANG_(copied_STAR_,false);
}));
}));
return rumext.v2.jsxs("dl",{'data-testid':"property-row",'className':("main_ui_inspect_styles_rows_properties_row__property-row" ?? "")+" "+(class$ ?? ""),'children':[rumext.v2.jsx("dt",{'className':"main_ui_inspect_styles_rows_properties_row__property-term",'children':term}),rumext.v2.jsx("dd",{'className':"main_ui_inspect_styles_rows_properties_row__property-detail",'children':(cljs.core.truth_(copiable_QMARK_)?(cljs.core.truth_(token)?(function (){var token_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
return rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip_STAR_,{'id':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),'className':"main_ui_inspect_styles_rows_properties_row__tooltip-token-wrapper",'triggerRef':row_ref,'content':(function (){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_styles_rows_properties_row__tooltip-token",'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_rows_properties_row__tooltip-token-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.tabs.styles.token-resolved-value")}),rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_rows_properties_row__tooltip-token-value",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typography","typography",-399568138),token_type))?rumext.v2.jsx("ul",{'className':"main_ui_inspect_styles_rows_properties_row__tooltip-token-resolved-values",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74848){
var vec__74849 = p__74848;
var property__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74849,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74849,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx("li",{'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1(property__$1) : app.main.data.workspace.tokens.format.category_dictionary.call(null,property__$1))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.format.format_token_value(value))].join('')},property__$1));

return out_arr__46744__auto__;
}),[],new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(token))}):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shadow","shadow",873231803),token_type))?rumext.v2.jsx("ul",{'className':"main_ui_inspect_styles_rows_properties_row__tooltip-token-resolved-values",'children':cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$main$ui$inspect$styles$rows$properties_row$properties_row_STAR__$_iter__74852(s__74853){
return (new cljs.core.LazySeq(null,(function (){
var s__74853__$1 = s__74853;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__74853__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var property__$1 = cljs.core.first(xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__74853__$1,property__$1,xs__6385__auto__,temp__5825__auto__,token_type,copiable_QMARK_,detail_QMARK_,detail__$1,copied_STAR_,copied,copiable_value,row_ref,copy_attr,detail,property,copiable,term,token,class$){
return (function app$main$ui$inspect$styles$rows$properties_row$properties_row_STAR__$_iter__74852_$_iter__74854(s__74855){
return (new cljs.core.LazySeq(null,((function (s__74853__$1,property__$1,xs__6385__auto__,temp__5825__auto__,token_type,copiable_QMARK_,detail_QMARK_,detail__$1,copied_STAR_,copied,copiable_value,row_ref,copy_attr,detail,property,copiable,term,token,class$){
return (function (){
var s__74855__$1 = s__74855;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__74855__$1);
if(temp__5825__auto____$1){
var s__74855__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74855__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__74855__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__74857 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__74856 = (0);
while(true){
if((i__74856 < size__5502__auto__)){
var vec__74858 = cljs.core._nth(c__5501__auto__,i__74856);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74858,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74858,(1),null);
cljs.core.chunk_append(b__74857,rumext.v2.jsx("li",{'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1(key) : app.main.data.workspace.tokens.format.category_dictionary.call(null,key))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.format.format_token_value(value))].join('')},key));

var G__74867 = (i__74856 + (1));
i__74856 = G__74867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74857),app$main$ui$inspect$styles$rows$properties_row$properties_row_STAR__$_iter__74852_$_iter__74854(cljs.core.chunk_rest(s__74855__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74857),null);
}
} else {
var vec__74861 = cljs.core.first(s__74855__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74861,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74861,(1),null);
return cljs.core.cons(rumext.v2.jsx("li",{'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1((app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1(key) : app.main.data.workspace.tokens.format.category_dictionary.call(null,key))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.format.format_token_value(value))].join('')},key),app$main$ui$inspect$styles$rows$properties_row$properties_row_STAR__$_iter__74852_$_iter__74854(cljs.core.rest(s__74855__$2)));
}
} else {
return null;
}
break;
}
});})(s__74853__$1,property__$1,xs__6385__auto__,temp__5825__auto__,token_type,copiable_QMARK_,detail_QMARK_,detail__$1,copied_STAR_,copied,copiable_value,row_ref,copy_attr,detail,property,copiable,term,token,class$))
,null,null));
});})(s__74853__$1,property__$1,xs__6385__auto__,temp__5825__auto__,token_type,copiable_QMARK_,detail_QMARK_,detail__$1,copied_STAR_,copied,copiable_value,row_ref,copy_attr,detail,property,copiable,term,token,class$))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(property__$1));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,app$main$ui$inspect$styles$rows$properties_row$properties_row_STAR__$_iter__74852(cljs.core.rest(s__74853__$1)));
} else {
var G__74868 = cljs.core.rest(s__74853__$1);
s__74853__$1 = G__74868;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(token));
})())}):new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(token)
))})]});
}),'children':rumext.v2.jsx(app.main.ui.inspect.styles.property_detail_copiable.property_detail_copiable_STAR_,{'token':token,'copied':copied,'ref':row_ref,'onClick':copy_attr,'children':detail__$1})});
})():rumext.v2.jsx(app.main.ui.inspect.styles.property_detail_copiable.property_detail_copiable_STAR_,{'copied':copied,'onClick':copy_attr,'children':detail__$1})):detail__$1)})]});
});

(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_.displayName = "properties-row*");


//# sourceMappingURL=app.main.ui.inspect.styles.rows.properties_row.js.map
