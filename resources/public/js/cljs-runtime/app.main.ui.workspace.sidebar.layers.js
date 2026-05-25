import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.types.shape.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.search_bar.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.notifications.badge.js";
import "./app.main.ui.workspace.sidebar.layer_item.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.rxops.js";
import "./app.util.shape_icon.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.main.ui.workspace.sidebar.layers');
app.main.ui.workspace.sidebar.layers.frame_wrapper = (function app$main$ui$workspace$sidebar$layers$frame_wrapper(props_55291){
var selected = props_55291.selected;
var props = props_55291;
var pending_selected = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(selected);
var current_selected = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(selected);
var props__$1 = {...props, 'selected':cljs.core.deref(current_selected)};
var set_selected = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.rxops.throttle_fn((50),(function (){
var temp__5825__auto__ = cljs.core.deref(pending_selected);
if(cljs.core.truth_(temp__5825__auto__)){
var pending_selected__$1 = temp__5825__auto__;
return cljs.core.reset_BANG_(current_selected,pending_selected__$1);
} else {
return null;
}
}));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(set_selected)],(function (){
cljs.core.reset_BANG_(pending_selected,selected);

(set_selected.cljs$core$IFn$_invoke$arity$0 ? set_selected.cljs$core$IFn$_invoke$arity$0() : set_selected.call(null));

return (function (){
cljs.core.reset_BANG_(pending_selected,null);

return (function (){
return beicon.v2.core.dispose_BANG_(set_selected);
});
});
}));

return rumext.v2.create_element(app.main.ui.workspace.sidebar.layer_item.layer_item,props__$1);
});

(app.main.ui.workspace.sidebar.layers.frame_wrapper.displayName = "frame-wrapper");

app.main.ui.workspace.sidebar.layers.layers_tree = (function (p1__55313_SHARP_){
return rumext.v2.throttle(p1__55313_SHARP_,(200));
})(rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$layers$layers_tree(props_55314){
var objects = props_55314.objects;
var parent_size = (props_55314["parent-size"]);
var filtered_QMARK_ = (props_55314["filtered?"]);
var props = props_55314;
var selected = rumext.v2.deref(app.main.refs.selected_shapes);
var selected__$1 = app.main.ui.hooks.use_equal_memo(selected);
var highlighted = rumext.v2.deref(app.main.refs.highlighted_shapes);
var highlighted__$1 = app.main.ui.hooks.use_equal_memo(highlighted);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.zero);
return rumext.v2.jsx("div",{'data-testid':"layer-item",'className':"main_ui_workspace_sidebar_layers__element-list",'children':rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55315){
var vec__55316 = p__55315;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55316,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55316,(1),null);
out_arr__35152__auto__.push((function (){var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(temp__5825__auto__)){
var obj = temp__5825__auto__;
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(obj)){
return rumext.v2.jsx(app.main.ui.workspace.sidebar.layers.frame_wrapper,{'selected':selected__$1,'index':index,'objects':objects,'item':obj,'highlighted':highlighted__$1,'sortable?':true,'parent-size':parent_size,'depth':(-1),'filtered?':filtered_QMARK_},id);
} else {
return rumext.v2.jsx(app.main.ui.workspace.sidebar.layer_item.layer_item,{'selected':selected__$1,'index':index,'objects':objects,'item':obj,'highlighted':highlighted__$1,'sortable?':true,'parent-size':parent_size,'depth':(-1),'filtered?':filtered_QMARK_},id);
}
} else {
return null;
}
})());

return out_arr__35152__auto__;
}),[],cljs.core.reverse(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(root))))})});
})));

(app.main.ui.workspace.sidebar.layers.layers_tree.displayName = "layers-tree");

app.main.ui.workspace.sidebar.layers.filters_tree = (function (p1__55319_SHARP_){
return rumext.v2.throttle(p1__55319_SHARP_,(200));
})(rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$layers$filters_tree(props_55320){
var objects = props_55320.objects;
var parent_size = (props_55320["parent-size"]);
var selected = rumext.v2.deref(app.main.refs.selected_shapes);
var selected__$1 = app.main.ui.hooks.use_equal_memo(selected);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.zero);
return rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_layers__element-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55321){
var vec__55322 = p__55321;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(1),null);
out_arr__35152__auto__.push((function (){var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(temp__5825__auto__)){
var obj = temp__5825__auto__;
return rumext.v2.jsx(app.main.ui.workspace.sidebar.layer_item.layer_item,{'selected':selected__$1,'index':index,'objects':objects,'item':obj,'sortable?':false,'parent-size':parent_size,'depth':(-1),'filtered?':true},id);
} else {
return null;
}
})());

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(root)))});
})));

(app.main.ui.workspace.sidebar.layers.filters_tree.displayName = "filters-tree");

app.main.ui.workspace.sidebar.layers.calc_reparented_objects = (function app$main$ui$workspace$sidebar$layers$calc_reparented_objects(objects){
var reparented_objects = app.common.data.mapm.cljs$core$IFn$_invoke$arity$2((function (_,val){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(val,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),app.common.uuid.zero,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879),null], 0));
}),objects);
var reparented_shapes = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55325_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,p1__55325_SHARP_);
}),cljs.core.keys(reparented_objects)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(reparented_objects,app.common.uuid.zero,cljs.core.assoc,new cljs.core.Keyword(null,"shapes","shapes",1897594879),reparented_shapes);
});
app.main.ui.workspace.sidebar.layers.match_filters_QMARK_ = (function app$main$ui$workspace$sidebar$layers$match_filters_QMARK_(state,p__55327){
var vec__55328 = p__55327;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55328,(0),null);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55328,(1),null);
var search = new cljs.core.Keyword(null,"search-text","search-text",1559451259).cljs$core$IFn$_invoke$arity$1(state);
var filters = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(state);
var filters__$1 = (function (){var G__55331 = filters;
if(cljs.core.contains_QMARK_(filters,new cljs.core.Keyword(null,"shape","shape",1190694006))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__55331,new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"bool","bool",1444635321)], 0));
} else {
return G__55331;
}
})();
var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,id);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = (function (){var or__5025__auto____$1 = cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)),cuerdas.core.lower(search));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622).cljs$core$IFn$_invoke$arity$1(shape)),cuerdas.core.lower(search));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var and__5023__auto__ = cljs.core._STAR_assert_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return cuerdas.core.includes_QMARK_(""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? ""),cuerdas.core.lower(search));
} else {
return and__5023__auto__;
}
}
}
})();
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto____$1 = cljs.core.empty_QMARK_(filters__$1);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = ((cljs.core.contains_QMARK_(filters__$1,new cljs.core.Keyword(null,"component","component",1555936782))) && (cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"component-id","component-id",1551113783))));
if(or__5025__auto____$2){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = ((cljs.core.contains_QMARK_(filters__$1,new cljs.core.Keyword(null,"image","image",-58725096))) && ((!((app.common.types.shape.has_images_QMARK_(shape) == null)))));
if(or__5025__auto____$3){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = (function (){var direct_filters = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"frame","frame",-1711082588),null,new cljs.core.Keyword(null,"circle","circle",1903212362),null,new cljs.core.Keyword(null,"bool","bool",1444635321),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null)),filters__$1);
return cljs.core.contains_QMARK_(direct_filters,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
})();
if(or__5025__auto____$4){
return or__5025__auto____$4;
} else {
return ((((cljs.core.contains_QMARK_(filters__$1,new cljs.core.Keyword(null,"group","group",582596132))) && (((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && ((((!(cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"component-id","component-id",1551113783))))) && ((((!(cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"masked-group","masked-group",1899947873))))) || (new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(shape) === false))))))))) || (((cljs.core.contains_QMARK_(filters__$1,new cljs.core.Keyword(null,"mask","mask",-585748447))) && (new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(shape) === true))));
}
}
}
}
} else {
return and__5023__auto__;
}
}
});
app.main.ui.workspace.sidebar.layers.use_search = (function app$main$ui$workspace$sidebar$layers$use_search(page,objects){
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show-search","show-search",266138187),false,new cljs.core.Keyword(null,"show-menu","show-menu",14072792),false,new cljs.core.Keyword(null,"search-text","search-text",1559451259),"",new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"num-items","num-items",-887909266),(100)], null);
}));
var state = cljs.core.deref(state_STAR_);
var current_filters = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(state);
var current_items = new cljs.core.Keyword(null,"num-items","num-items",-887909266).cljs$core$IFn$_invoke$arity$1(state);
var current_search = new cljs.core.Keyword(null,"search-text","search-text",1559451259).cljs$core$IFn$_invoke$arity$1(state);
var show_menu_QMARK_ = new cljs.core.Keyword(null,"show-menu","show-menu",14072792).cljs$core$IFn$_invoke$arity$1(state);
var show_search_QMARK_ = new cljs.core.Keyword(null,"show-search","show-search",266138187).cljs$core$IFn$_invoke$arity$1(state);
var clear_search_text = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"search-text","search-text",1559451259),"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"num-items","num-items",-887909266),(100)], 0));
}));
var toggle_filters = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"show-menu","show-menu",14072792),cljs.core.not);
}));
var on_toggle_filters_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return (toggle_filters.cljs$core$IFn$_invoke$arity$0 ? toggle_filters.cljs$core$IFn$_invoke$arity$0() : toggle_filters.call(null));
}));
var hide_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"show-menu","show-menu",14072792),false);
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return (hide_menu.cljs$core$IFn$_invoke$arity$0 ? hide_menu.cljs$core$IFn$_invoke$arity$0() : hide_menu.call(null));
} else {
return null;
}
}));
var update_search_text = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (value,_event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"search-text","search-text",1559451259),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"num-items","num-items",-887909266),(100)], 0));
}));
var toggle_search = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var node = app.util.dom.get_current_target(event);
app.util.dom.blur_BANG_(node);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,(function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"search-text","search-text",1559451259),""),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"show-menu","show-menu",14072792),false),new cljs.core.Keyword(null,"num-items","num-items",-887909266),(100)),new cljs.core.Keyword(null,"show-search","show-search",266138187),cljs.core.not);
}));
}));
var remove_filter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var fkey = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"filter"));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,(function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.disj,fkey),new cljs.core.Keyword(null,"num-items","num-items",-887909266),(100));
}));
}));
var add_filter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"filter"));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,(function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.conj,key),new cljs.core.Keyword(null,"show-menu","show-menu",14072792),cljs.core.not),new cljs.core.Keyword(null,"num-items","num-items",-887909266),(100));
}));
}));
var active_QMARK_ = ((show_search_QMARK_) && (((app.common.data.not_empty_QMARK_(current_search)) || (app.common.data.not_empty_QMARK_(current_filters)))));
var filtered_objects_all = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(active_QMARK_),rumext.v2.adapt(objects),rumext.v2.adapt(state)],(function (){
if(active_QMARK_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.layers.match_filters_QMARK_,state)),objects);
} else {
return null;
}
}));
var filtered_objects_total = cljs.core.count(filtered_objects_all);
var filtered_objects = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(active_QMARK_),rumext.v2.adapt(filtered_objects_all),rumext.v2.adapt(current_items)],(function (){
if(active_QMARK_){
return app.main.ui.workspace.sidebar.layers.calc_reparented_objects(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(current_items),filtered_objects_all));
} else {
return null;
}
}));
var handle_show_more = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(filtered_objects_total),rumext.v2.adapt(current_items)],(function (_){
if((current_items <= filtered_objects_total)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"num-items","num-items",-887909266),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(100)], 0));
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var keys = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(app.util.globals.document,goog.events.EventType.KEYDOWN,on_key_down),goog.events.listen(app.util.globals.document,goog.events.EventType.CLICK,hide_menu)], null);
return (function (){
var seq__55332 = cljs.core.seq(keys);
var chunk__55333 = null;
var count__55334 = (0);
var i__55335 = (0);
while(true){
if((i__55335 < count__55334)){
var key = chunk__55333.cljs$core$IIndexed$_nth$arity$2(null,i__55335);
goog.events.unlistenByKey(key);


var G__55348 = seq__55332;
var G__55349 = chunk__55333;
var G__55350 = count__55334;
var G__55351 = (i__55335 + (1));
seq__55332 = G__55348;
chunk__55333 = G__55349;
count__55334 = G__55350;
i__55335 = G__55351;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__55332);
if(temp__5825__auto__){
var seq__55332__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55332__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__55332__$1);
var G__55352 = cljs.core.chunk_rest(seq__55332__$1);
var G__55353 = c__5548__auto__;
var G__55354 = cljs.core.count(c__5548__auto__);
var G__55355 = (0);
seq__55332 = G__55352;
chunk__55333 = G__55353;
count__55334 = G__55354;
i__55335 = G__55355;
continue;
} else {
var key = cljs.core.first(seq__55332__$1);
goog.events.unlistenByKey(key);


var G__55356 = cljs.core.next(seq__55332__$1);
var G__55357 = null;
var G__55358 = (0);
var G__55359 = (0);
seq__55332 = G__55356;
chunk__55333 = G__55357;
count__55334 = G__55358;
i__55335 = G__55359;
continue;
}
} else {
return null;
}
}
break;
}
});
}));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filtered_objects,handle_show_more,(function (){
if(cljs.core.truth_(show_search_QMARK_)){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layers__tool-window-bar main_ui_workspace_sidebar_layers__search",'children':[rumext.v2.jsx(app.main.ui.components.search_bar.search_bar_STAR_,{'onChange':update_search_text,'value':current_search,'onClear':clear_search_text,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.search"),'children':rumext.v2.jsx("button",{'onClick':on_toggle_filters_click,'className':"main_ui_workspace_sidebar_layers__filter-button"+" "+(cljs.core.truth_(show_menu_QMARK_)?"main_ui_workspace_sidebar_layers__opened":"")+" "+((active_QMARK_)?"main_ui_workspace_sidebar_layers__active":""),'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.filter})})}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'onClick':toggle_search,'icon':app.main.ui.ds.foundations.assets.icon.close})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_layers__active-filters",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,fkey){
out_arr__35152__auto__.push((function (){var fname = app.common.data.name(fkey);
var name = (function (){var G__55336 = fkey;
var G__55336__$1 = (((G__55336 instanceof cljs.core.Keyword))?G__55336.fqn:null);
switch (G__55336__$1) {
case "frame":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.frames");

break;
case "group":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.groups");

break;
case "mask":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.masks");

break;
case "component":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.components");

break;
case "text":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.texts");

break;
case "image":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.images");

break;
case "shape":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.shapes");

break;
default:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(fkey);

}
})();
var filter_icon = app.util.shape_icon.get_shape_icon_by_type(fkey);
return rumext.v2.jsxs("button",{'data-filter':fname,'onClick':remove_filter,'className':"main_ui_workspace_sidebar_layers__layer-filter",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':filter_icon,'size':"s",'className':"main_ui_workspace_sidebar_layers__layer-filter-icon"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layers__layer-filter-name",'children':name}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.close_small,'className':"main_ui_workspace_sidebar_layers__layer-filter-close"})]},fname);
})());

return out_arr__35152__auto__;
}),[],current_filters)}),((show_menu_QMARK_)?rumext.v2.jsxs("ul",{'className':"main_ui_workspace_sidebar_layers__filters-container",'children':[rumext.v2.jsxs("li",{'data-filter':"frame",'onClick':add_filter,'className':"main_ui_workspace_sidebar_layers__filter-menu-item"+" "+((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"frame","frame",-1711082588)))?"main_ui_workspace_sidebar_layers__selected":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.board,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-icon"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.frames")})]}),((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"frame","frame",-1711082588)))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-tick"}):null)]}),rumext.v2.jsxs("li",{'data-filter':"group",'onClick':add_filter,'className':"main_ui_workspace_sidebar_layers__filter-menu-item"+" "+((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"group","group",582596132)))?"main_ui_workspace_sidebar_layers__selected":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.group,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-icon"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.groups")})]}),((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"group","group",582596132)))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-tick"}):null)]}),rumext.v2.jsxs("li",{'data-filter':"mask",'onClick':add_filter,'className':"main_ui_workspace_sidebar_layers__filter-menu-item"+" "+((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"mask","mask",-585748447)))?"main_ui_workspace_sidebar_layers__selected":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.mask,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-icon"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.masks")})]}),((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"mask","mask",-585748447)))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-tick"}):null)]}),rumext.v2.jsxs("li",{'data-filter':"component",'onClick':add_filter,'className':"main_ui_workspace_sidebar_layers__filter-menu-item"+" "+((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"component","component",1555936782)))?"main_ui_workspace_sidebar_layers__selected":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.component,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-icon"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.components")})]}),((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"component","component",1555936782)))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-tick"}):null)]}),rumext.v2.jsxs("li",{'data-filter':"text",'onClick':add_filter,'className':"main_ui_workspace_sidebar_layers__filter-menu-item"+" "+((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"text","text",-1790561697)))?"main_ui_workspace_sidebar_layers__selected":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.text,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-icon"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.texts")})]}),((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"text","text",-1790561697)))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-tick"}):null)]}),rumext.v2.jsxs("li",{'data-filter':"image",'onClick':add_filter,'className':"main_ui_workspace_sidebar_layers__filter-menu-item"+" "+((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"image","image",-58725096)))?"main_ui_workspace_sidebar_layers__selected":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.img,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-icon"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.images")})]}),((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"image","image",-58725096)))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-tick"}):null)]}),rumext.v2.jsxs("li",{'data-filter':"shape",'onClick':add_filter,'className':"main_ui_workspace_sidebar_layers__filter-menu-item"+" "+((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"shape","shape",1190694006)))?"main_ui_workspace_sidebar_layers__selected":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.path,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-icon"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layers__filter-menu-item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers.shapes")})]}),((cljs.core.contains_QMARK_(current_filters,new cljs.core.Keyword(null,"shape","shape",1190694006)))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_workspace_sidebar_layers__filter-menu-item-tick"}):null)]})]}):null)]});
} else {
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_layers__tool-window-bar",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':false,'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page),'onBtnClick':toggle_search,'btnIcon':"search",'btnTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.search")})});
}
})], null);
});
app.main.ui.workspace.sidebar.layers.on_scroll = (function app$main$ui$workspace$sidebar$layers$on_scroll(event){
var children = app.util.dom.get_elements_by_class.cljs$core$IFn$_invoke$arity$1("sticky-children");
var length = children.length;
if((length > (0))){
var target = app.util.dom.get_target(event);
var target_top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(app.util.dom.get_bounding_rect(target));
var frames = app.util.dom.get_elements_by_class.cljs$core$IFn$_invoke$arity$1("root-board");
var last_hidden_frame = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55337_SHARP_){
return ((new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(app.util.dom.get_bounding_rect(p1__55337_SHARP_)) - target_top) <= (0));
}),frames));
var frame_id = app.util.dom.get_attribute(last_hidden_frame,"id");
var last_hidden_children = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55338_SHARP_){
return ((new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(app.util.dom.get_bounding_rect(p1__55338_SHARP_)) - target_top) < (0));
}),children));
var is_children_shown_QMARK_ = (function (){var and__5023__auto__ = last_hidden_children;
if(cljs.core.truth_(and__5023__auto__)){
return ((new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(app.util.dom.get_bounding_rect(last_hidden_children)) - target_top) > (0));
} else {
return and__5023__auto__;
}
})();
var children_frame_id = app.util.dom.get_attribute(last_hidden_children,"data-id");
var sticky_QMARK_ = (function (){var and__5023__auto__ = last_hidden_frame;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = is_children_shown_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frame_id,children_frame_id);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
cljs.core.run_BANG_((function (p1__55339_SHARP_){
return app.util.dom.remove_class_BANG_(p1__55339_SHARP_,"sticky");
}),frames);

if(cljs.core.truth_(sticky_QMARK_)){
return app.util.dom.add_class_BANG_(last_hidden_frame,"sticky");
} else {
return null;
}
} else {
return null;
}
});
app.main.ui.workspace.sidebar.layers.layers_toolbox_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$layers$layers_toolbox_STAR_(props_55340){
var size_parent = props_55340.sizeParent;
var page = rumext.v2.deref(app.main.refs.workspace_page);
var focus = rumext.v2.deref(app.main.refs.workspace_focus_selected);
var objects = app.main.ui.hooks.with_focus_objects.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),focus);
var title = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(focus)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(focus)),new cljs.core.Keyword(null,"name","name",1843675177)):null);
var observer_var = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var lazy_load_ref = rumext.v2.use_ref(null);
var vec__55344 = app.main.ui.workspace.sidebar.layers.use_search(page,objects);
var filtered_objects = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55344,(0),null);
var show_more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55344,(1),null);
var filter_component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55344,(2),null);
var intersection_callback = (function (entries){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.first(entries).isIntersecting;
if(cljs.core.truth_(and__5023__auto__)){
return (!((show_more == null)));
} else {
return and__5023__auto__;
}
})())){
return (show_more.cljs$core$IFn$_invoke$arity$0 ? show_more.cljs$core$IFn$_invoke$arity$0() : show_more.call(null));
} else {
return null;
}
});
var on_render_container = (function (element){
var temp__5825__auto__ = rumext.v2.ref_val(lazy_load_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var lazy_node = temp__5825__auto__;
if((((!((element == null)))) && ((!((!((cljs.core.deref(observer_var) == null)))))))){
var observer = (new IntersectionObserver(intersection_callback,({"root": element})));
observer.observe(lazy_node);

return cljs.core.reset_BANG_(observer_var,observer);
} else {
if((((element == null)) && ((!((cljs.core.deref(observer_var) == null)))))){
cljs.core.deref(observer_var).disconnect();

return cljs.core.reset_BANG_(observer_var,null);
} else {
return null;
}
}
} else {
return null;
}
});
var toogle_focus_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_focus_mode());
}));
return rumext.v2.jsxs("div",{'id':"layers",'data-testid':"layer-tree",'className':"main_ui_workspace_sidebar_layers__layers",'children':[((app.common.data.not_empty_QMARK_(focus))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_layers__tool-window-bar",'children':rumext.v2.jsxs("button",{'onClick':toogle_focus_mode,'className':"main_ui_workspace_sidebar_layers__focus-title",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layers__back-button",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_layers__focus-name",'children':(function (){var or__5025__auto__ = title;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers");
}
})()}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_layers__focus-mode-tag-wrapper",'children':rumext.v2.jsx(app.main.ui.notifications.badge.badge_notification,{'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.focus.focus-mode"),'size':new cljs.core.Keyword(null,"small","small",2133478704),'is-focus':true})})]})}):(filter_component.cljs$core$IFn$_invoke$arity$0 ? filter_component.cljs$core$IFn$_invoke$arity$0() : filter_component.call(null))),(((!((filtered_objects == null))))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'data-scroll-container':true,'ref':on_render_container,'className':"main_ui_workspace_sidebar_layers__tool-window-content",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.layers.filters_tree,{'objects':filtered_objects,'parent-size':size_parent},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page) ?? "")),rumext.v2.jsx("div",{'ref':lazy_load_ref})]}),rumext.v2.jsx("div",{'onScroll':app.main.ui.workspace.sidebar.layers.on_scroll,'data-scroll-container':true,'style':{'display':(((!((filtered_objects == null))))?"none":null)},'className':"main_ui_workspace_sidebar_layers__tool-window-content",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.layers.layers_tree,{'objects':filtered_objects,'filtered?':true,'parent-size':size_parent},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page) ?? ""))})]}):rumext.v2.jsx("div",{'onScroll':app.main.ui.workspace.sidebar.layers.on_scroll,'data-scroll-container':true,'style':{'display':(((!((filtered_objects == null))))?"none":null)},'className':"main_ui_workspace_sidebar_layers__tool-window-content",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.layers.layers_tree,{'objects':objects,'filtered?':false,'parent-size':size_parent},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page) ?? ""))}))]});
}));

(app.main.ui.workspace.sidebar.layers.layers_toolbox_STAR_.displayName = "layers-toolbox*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.layers.js.map
