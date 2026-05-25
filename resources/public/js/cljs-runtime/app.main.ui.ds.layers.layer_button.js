import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.layers.layer_button');
app.main.ui.ds.layers.layer_button.schema_COLON_layer_button = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expandable","expandable",-704609097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-toggle-expand","on-toggle-expand",227315372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null)], null);
app.main.ui.ds.layers.layer_button.layer_button_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.layers.layer_button.schema_COLON_layer_button);

app.main.ui.ds.layers.layer_button.layer_button_STAR_ = (function app$main$ui$ds$layers$layer_button$layer_button_STAR_(props_79348){
// ===== start props checking =====;

var res__47117__auto___79352 = app.main.ui.ds.layers.layer_button.layer_button_STAR__validator(props_79348);
if((!((res__47117__auto___79352 == null)))){
var items__47118__auto___79353 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___79352);
var msg__47122__auto___79354 = ["invalid props on component layer-button*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___79353),"\n"].join('');
throw (new Error(msg__47122__auto___79354));
} else {
}

// ===== end props checking =====;

var expanded = undefined;
var description = undefined;
var children = undefined;
var is_expandable = undefined;
var on_toggle_expand = undefined;
var on_context_menu = undefined;
var icon = undefined;
var label = undefined;
var class$ = undefined;
var props = undefined;
var {"expanded": expanded, "description": description, "children": children, "isExpandable": is_expandable, "onToggleExpand": on_toggle_expand, "onContextMenu": on_context_menu, "icon": icon, "label": label, "className": class$, ...props} = props_79348;

var button_props = {...props, 'className':(class$ ?? "")+" "+("main_ui_ds_layers_layer_button__layer-button"+" "+(cljs.core.truth_(is_expandable)?"main_ui_ds_layers_layer_button__layer-button--expandable":"")+" "+(cljs.core.truth_(expanded)?"main_ui_ds_layers_layer_button__layer-button--expanded":"") ?? ""),'type':"button",'onClick':on_toggle_expand,'onContextMenu':on_context_menu};
return rumext.v2.jsxs("div",{'className':"main_ui_ds_layers_layer_button__layer-button-wrapper",'children':[rumext.v2.create_element("button",button_props,rumext.v2.jsxs("div",{'className':"main_ui_ds_layers_layer_button__layer-button-content",'children':[(cljs.core.truth_(is_expandable)?(cljs.core.truth_(expanded)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_down,'className':"main_ui_ds_layers_layer_button__folder-node-icon"}):rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_right,'className':"main_ui_ds_layers_layer_button__folder-node-icon"})):null),(cljs.core.truth_(icon)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'className':"main_ui_ds_layers_layer_button__layer-button-icon"}):null),rumext.v2.jsx("span",{'className':"main_ui_ds_layers_layer_button__layer-button-name",'children':label}),(cljs.core.truth_(description)?rumext.v2.jsx("span",{'className':"main_ui_ds_layers_layer_button__layer-button-description",'children':description}):null),rumext.v2.jsx("span",{'className':"main_ui_ds_layers_layer_button__layer-button-quantity"})]})),rumext.v2.jsx("div",{'className':"main_ui_ds_layers_layer_button__layer-button-actions",'children':children})]});
});

(app.main.ui.ds.layers.layer_button.layer_button_STAR_.displayName = "layer-button*");


//# sourceMappingURL=app.main.ui.ds.layers.layer_button.js.map
