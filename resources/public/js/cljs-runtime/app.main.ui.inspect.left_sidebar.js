import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.component.js";
import "./app.main.data.viewer.js";
import "./app.main.store.js";
import "./app.main.ui.workspace.sidebar.layer_item.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.left_sidebar');
app.main.ui.inspect.left_sidebar.make_collapsed_iref = (function app$main$ui$inspect$left_sidebar$make_collapsed_iref(id){
return (function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),id], null)),app.main.store.state);
});
});
app.main.ui.inspect.left_sidebar.layer_item = (function app$main$ui$inspect$left_sidebar$layer_item(props_58629){
var map__58631 = rumext.v2.util.wrap_props(props_58629);
var map__58631__$1 = cljs.core.__destructure_map(map__58631);
var props = map__58631__$1;
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"item","item",249373802));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var component_child_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"component-child?","component-child?",166589243));
var hide_toggle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"hide-toggle?","hide-toggle?",-1874012773));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(item);
var selected_QMARK_ = cljs.core.contains_QMARK_(selected,id);
var item_ref = rumext.v2.use_ref(null);
var depth__$1 = (depth + (1));
var component_tree_QMARK_ = (function (){var or__5025__auto__ = component_child_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((app.common.types.component.instance_root_QMARK_(item)) || (app.common.types.component.instance_head_QMARK_(item)));
}
})();
var collapsed_iref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],app.main.ui.inspect.left_sidebar.make_collapsed_iref(id));
var expanded_QMARK_ = cljs.core.not(rumext.v2.deref(collapsed_iref));
var toggle_collapse = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.toggle_collapse(id));
}));
var select_shape = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (event){
app.util.dom.prevent_default(event);

if(app.util.keyboard.mod_QMARK_(event)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.toggle_selection(id));
} else {
if(app.util.keyboard.shift_QMARK_(event)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.shift_select_to(id));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.select_shape(id));

}
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected)],(function (){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected),(1))) && (selected_QMARK_))){
return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$2(rumext.v2.ref_val(item_ref),true);
} else {
return null;
}
}));

return rumext.v2.jsx(app.main.ui.workspace.sidebar.layer_item.layer_item_inner,{'children':(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__5023__auto__)){
return expanded_QMARK_;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("div",{'data-testid':""+"children-"+(id ?? ""),'className':"main_ui_inspect_left_sidebar__element-children"+" "+((selected_QMARK_)?"main_ui_inspect_left_sidebar__parent-selected":""),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__58633){
var vec__58634 = p__58633;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58634,(0),null);
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58634,(1),null);
out_arr__35152__auto__.push((function (){var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var item__$1 = temp__5825__auto__;
return rumext.v2.jsx(app$main$ui$inspect$left_sidebar$layer_item,{'item':item__$1,'selected':selected,'index':index,'objects':objects,'depth':depth__$1,'component-child?':component_tree_QMARK_},""+(id__$1 ?? ""));
} else {
return null;
}
})());

return out_arr__35152__auto__;
}),[],cljs.core.reverse(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(item))))}):null),'on-select-shape':select_shape,'ref':item_ref,'expanded?':expanded_QMARK_,'item':item,'highlighted?':false,'on-toggle-collapse':toggle_collapse,'hidden?':hidden_QMARK_,'read-only?':true,'depth':depth__$1,'filtered?':false,'hide-toggle?':hide_toggle_QMARK_,'selected?':selected_QMARK_,'component-tree?':component_tree_QMARK_});
});

(app.main.ui.inspect.left_sidebar.layer_item.displayName = "layer-item");

app.main.ui.inspect.left_sidebar.left_sidebar = (function app$main$ui$inspect$left_sidebar$left_sidebar(props_58644){
var map__58645 = rumext.v2.util.wrap_props(props_58644);
var map__58645__$1 = cljs.core.__destructure_map(map__58645);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword(null,"page","page",849072397));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(local);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
return rumext.v2.jsx("aside",{'className':"main_ui_inspect_left_sidebar__settings-bar-left",'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_left_sidebar__settings-bar-inside",'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_left_sidebar__element-list",'children':rumext.v2.jsx(app.main.ui.inspect.left_sidebar.layer_item,{'item':frame,'selected':selected,'index':(0),'objects':objects,'sortable?':false,'filtered?':false,'depth':(-2),'hide-toggle?':true})})})});
});

(app.main.ui.inspect.left_sidebar.left_sidebar.displayName = "left-sidebar");


//# sourceMappingURL=app.main.ui.inspect.left_sidebar.js.map
