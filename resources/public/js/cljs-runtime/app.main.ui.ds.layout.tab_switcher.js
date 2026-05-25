import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./rumext.v2.js";
import "./rumext.v2.util.js";
goog.provide('app.main.ui.ds.layout.tab_switcher');
app.main.ui.ds.layout.tab_switcher.tab_STAR_ = (function app$main$ui$ds$layout$tab_switcher$tab_STAR_(props_71614){
var aria_label = undefined;
var selected = undefined;
var ref = undefined;
var icon = undefined;
var label = undefined;
var id = undefined;
var props = undefined;
var {"selected": selected, "icon": icon, "label": label, "aria-label": aria_label, "id": id, "ref": ref, ...props} = props_71614;

var class$ = "main_ui_ds_layout_tab_switcher__tab"+" "+(cljs.core.truth_(selected)?"main_ui_ds_layout_tab_switcher__selected":"");
var props__$1 = {...props, 'className':class$,'role':"tab",'aria-selected':selected,'title':(function (){var or__5025__auto__ = label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return aria_label;
}
})(),'tabIndex':(cljs.core.truth_(selected)?null:(-1)),'ref':ref,'data-id':id,'id':id};
return rumext.v2.jsx("li",{'children':rumext.v2.create_element("button",props__$1,(((!((icon == null))))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'aria-hidden':(cljs.core.truth_(label)?true:null),'aria-label':((cljs.core.not(label))?aria_label:null)}):null),((typeof label === 'string')?rumext.v2.jsx("span",{'className':"main_ui_ds_layout_tab_switcher__tab-text"+" "+(cljs.core.truth_(icon)?"main_ui_ds_layout_tab_switcher__tab-text-and-icon":""),'children':label}):null))});
});

(app.main.ui.ds.layout.tab_switcher.tab_STAR_.displayName = "tab*");

app.main.ui.ds.layout.tab_switcher.tab_nav_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$ds$layout$tab_switcher$tab_nav_STAR_(props_71623){
var selected = undefined;
var action_button = undefined;
var tabs = undefined;
var ref = undefined;
var on_click = undefined;
var button_position = undefined;
var props = undefined;
var {"ref": ref, "tabs": tabs, "selected": selected, "onClick": on_click, "buttonPosition": button_position, "actionButton": action_button, ...props} = props_71623;

var nav_class = "main_ui_ds_layout_tab_switcher__tab-nav"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("start",button_position))?"main_ui_ds_layout_tab_switcher__tab-nav-start":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("end",button_position))?"main_ui_ds_layout_tab_switcher__tab-nav-end":"");
var props__$1 = {...props, 'className':"main_ui_ds_layout_tab_switcher__tab-list",'role':"tablist",'aria-orientation':"horizontal"};
return rumext.v2.jsxs("nav",{'className':nav_class,'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button_position,"start"))?action_button:null),rumext.v2.create_element("ul",props__$1,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,element){
out_arr__46744__auto__.push((function (){var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"label","label",1718410804));
var aria_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"aria-label","aria-label",455891514));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"id","id",-1388402092));
return rumext.v2.jsx(app.main.ui.ds.layout.tab_switcher.tab_STAR_,{'icon':icon,'label':label,'aria-label':aria_label,'selected':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,selected),'onClick':on_click,'ref':ref,'id':id},id);
})());

return out_arr__46744__auto__;
}),[],tabs)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button_position,"end"))?action_button:null)]});
}));

(app.main.ui.ds.layout.tab_switcher.tab_nav_STAR_.displayName = "tab-nav*");

app.main.ui.ds.layout.tab_switcher.schema_COLON_tab_attrs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"tab"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__71624_SHARP_){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.assets.icon.icon_list,p1__71624_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.ui.ds.layout.tab_switcher.schema_COLON_tab = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),app.main.ui.ds.layout.tab_switcher.schema_COLON_tab_attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"invalid data: missing required props"], null),(function (tab){
return ((((cljs.core.contains_QMARK_(tab,new cljs.core.Keyword(null,"icon","icon",1679606541))) && (((cljs.core.contains_QMARK_(tab,new cljs.core.Keyword(null,"label","label",1718410804))) || (cljs.core.contains_QMARK_(tab,new cljs.core.Keyword(null,"aria-label","aria-label",455891514))))))) || (cljs.core.contains_QMARK_(tab,new cljs.core.Keyword(null,"label","label",1718410804))));
})], null)], null);
app.main.ui.ds.layout.tab_switcher.schema_COLON_tab_switcher = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),app.main.ui.ds.layout.tab_switcher.schema_COLON_tab], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scrollable-panel","scrollable-panel",-696349968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.some_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-button-position","action-button-position",-1319567778),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"start","end"], null)], null)], null)], null);
app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.layout.tab_switcher.schema_COLON_tab_switcher);

app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR_ = (function app$main$ui$ds$layout$tab_switcher$tab_switcher_STAR_(props_71626){
// ===== start props checking =====;

var res__47117__auto___71638 = app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR__validator(props_71626);
if((!((res__47117__auto___71638 == null)))){
var items__47118__auto___71639 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___71638);
var msg__47122__auto___71640 = ["invalid props on component tab-switcher*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___71639),"\n"].join('');
throw (new Error(msg__47122__auto___71640));
} else {
}

// ===== end props checking =====;

var on_change = undefined;
var action_button_position = undefined;
var children = undefined;
var selected = undefined;
var action_button = undefined;
var tabs = undefined;
var scrollable_panel = undefined;
var class$ = undefined;
var props = undefined;
var {"tabs": tabs, "className": class$, "onChange": on_change, "selected": selected, "actionButtonPosition": action_button_position, "actionButton": action_button, "children": children, "scrollablePanel": scrollable_panel, ...props} = props_71626;

var nodes_ref = rumext.v2.use_ref(null);
var scrollable_panel__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(scrollable_panel,false);
var tabs__$1 = ((cljs.core.array_QMARK_(tabs))?rumext.v2.util.bean(tabs):tabs);
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (event){
var node = app.util.dom.get_current_target(event);
var id = app.util.dom.get_data(node,"id");
if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
}));
var on_ref = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (node){
var state = rumext.v2.ref_val(nodes_ref);
var state__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(state,({}));
var id = app.util.dom.get_data(node,"id");
var state__$2 = app.util.object.set_BANG_(state__$1,id,node);
rumext.v2.set_ref_val_BANG_(nodes_ref,state__$2);

return (function (){
var state__$3 = rumext.v2.ref_val(nodes_ref);
var state__$4 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(state__$3,({}));
var id__$1 = app.util.dom.get_data(node,"id");
var state__$5 = app.util.object.unset_BANG_(state__$4,id__$1);
return rumext.v2.set_ref_val_BANG_(nodes_ref,state__$5);
});
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(tabs__$1),rumext.v2.adapt(on_change)],(function (event){
var len = cljs.core.count(tabs__$1);
var sel_QMARK_ = (function (p1__71625_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__71625_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
});
var id = (cljs.core.truth_(app.util.keyboard.home_QMARK_(event))?(function (){var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tabs__$1,(0));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"id","id",-1388402092));
})():(cljs.core.truth_(app.util.keyboard.left_arrow_QMARK_(event))?(function (){var index = app.common.data.index_of_pred(tabs__$1,sel_QMARK_);
var index__$1 = cljs.core.mod((index - (1)),len);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tabs__$1,index__$1);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"id","id",-1388402092));
})():(cljs.core.truth_(app.util.keyboard.right_arrow_QMARK_(event))?(function (){var index = app.common.data.index_of_pred(tabs__$1,sel_QMARK_);
var index__$1 = cljs.core.mod((index + (1)),len);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tabs__$1,index__$1);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"id","id",-1388402092));
})():null)));
if((!((id == null)))){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

var nodes = rumext.v2.ref_val(nodes_ref);
var node = app.util.object.get.cljs$core$IFn$_invoke$arity$2(nodes,id);
return app.util.dom.focus_BANG_(node);
} else {
return null;
}
}));
var props__$1 = {...props, 'className':(class$ ?? "")+" "+("main_ui_ds_layout_tab_switcher__tabs" ?? "")};
return rumext.v2.create_element("div",props__$1,rumext.v2.jsx("div",{'className':"main_ui_ds_layout_tab_switcher__padding-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.layout.tab_switcher.tab_nav_STAR_,{'buttonPosition':action_button_position,'actionButton':action_button,'tabs':tabs__$1,'ref':on_ref,'selected':selected,'onKeyDown':on_key_down,'onClick':on_click})}),rumext.v2.jsx("section",{'tabIndex':(0),'role':"tabpanel",'aria-labelledby':selected,'className':"main_ui_ds_layout_tab_switcher__tab-panel"+" "+(cljs.core.truth_(scrollable_panel__$1)?"main_ui_ds_layout_tab_switcher__scrollable-panel":""),'children':children}));
});

(app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR_.displayName = "tab-switcher*");


//# sourceMappingURL=app.main.ui.ds.layout.tab_switcher.js.map
