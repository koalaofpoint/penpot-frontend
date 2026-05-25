import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.helpers.js";
import "./app.main.store.js";
import "./app.plugins.file.js";
import "./app.plugins.page.js";
import "./app.plugins.parser.js";
import "./app.plugins.shape.js";
import "./app.util.object.js";
import "./app.util.theme.js";
import "./goog.functions.functions.js";
goog.provide('app.plugins.events');
if((typeof app !== 'undefined') && (typeof app.plugins !== 'undefined') && (typeof app.plugins.events !== 'undefined') && (typeof app.plugins.events.handle_state_change !== 'undefined')){
} else {
app.plugins.events.handle_state_change = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__65026 = cljs.core.get_global_hierarchy;
return (fexpr__65026.cljs$core$IFn$_invoke$arity$0 ? fexpr__65026.cljs$core$IFn$_invoke$arity$0() : fexpr__65026.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.plugins.events","handle-state-change"),(function (type,_){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.plugins.events.handle_state_change.cljs$core$IMultiFn$_add_method$arity$3(null,"finish",(function (_,___$1,old_val,new_val,___$2){
var old_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(old_val);
var new_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(new_val);
if((((!((old_file_id == null)))) && ((new_file_id == null)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_file_id);
} else {
return new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509);
}
}));
app.plugins.events.handle_state_change.cljs$core$IMultiFn$_add_method$arity$3(null,"filechange",(function (_,plugin_id,old_val,new_val,___$1){
var old_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(old_val);
var new_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(new_val);
if((old_file_id === new_file_id)){
return new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509);
} else {
return app.plugins.file.file_proxy(plugin_id,new_file_id);
}
}));
app.plugins.events.handle_state_change.cljs$core$IMultiFn$_add_method$arity$3(null,"pagechange",(function (_,plugin_id,old_val,new_val,___$1){
var old_page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(old_val);
var new_page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(new_val);
if((old_page_id === new_page_id)){
return new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509);
} else {
return app.plugins.page.page_proxy(plugin_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(new_val),new_page_id);
}
}));
app.plugins.events.handle_state_change.cljs$core$IMultiFn$_add_method$arity$3(null,"selectionchange",(function (_,___$1,old_val,new_val,___$2){
var old_selection = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
var new_selection = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
if((old_selection === new_selection)){
return new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new_selection));
}
}));
app.plugins.events.get_theme = (function app$plugins$events$get_theme(state){
var theme = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null));
if(((cljs.core.not(theme)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"system")))){
return app.util.theme.get_system_theme();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"default")){
return "dark";
} else {
return theme;

}
}
});
app.plugins.events.handle_state_change.cljs$core$IMultiFn$_add_method$arity$3(null,"themechange",(function (_,___$1,old_val,new_val,___$2){
var old_theme = app.plugins.events.get_theme(old_val);
var new_theme = app.plugins.events.get_theme(new_val);
if((old_theme === new_theme)){
return new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_theme,"default")){
return "dark";
} else {
return new_theme;
}
}
}));
app.plugins.events.handle_state_change.cljs$core$IMultiFn$_add_method$arity$3(null,"shapechange",(function (_,plugin_id,old_val,new_val,props){
var temp__5823__auto__ = app.plugins.parser.parse_id(app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shapeId"));
if(cljs.core.truth_(temp__5823__auto__)){
var shape_id = temp__5823__auto__;
var old_shape = app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$2(old_val,shape_id);
var new_shape = app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$2(new_val,shape_id);
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(new_val);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(new_val);
if((((old_shape === new_shape)) && ((((!((plugin_id == null)))) && ((((!((file_id == null)))) && ((((!((page_id == null)))) && ((!((shape_id == null)))))))))))){
return new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509);
} else {
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,page_id,shape_id);
}
} else {
return new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509);
}
}));
app.plugins.events.handle_state_change.cljs$core$IMultiFn$_add_method$arity$3(null,"contentsave",(function (_,___$1,old_val,new_val,___$2){
var old_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_val,new cljs.core.Keyword(null,"persistence","persistence",-203044807)),new cljs.core.Keyword(null,"status","status",-1997798413));
var new_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_val,new cljs.core.Keyword(null,"persistence","persistence",-203044807)),new cljs.core.Keyword(null,"status","status",-1997798413));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"saved","saved",288760660),new_status)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_status,old_status)))){
return new cljs.core.Keyword("app.plugins.events","void","app.plugins.events/void",1229710245);
} else {
return new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509);
}
}));
app.plugins.events.handle_state_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,___$2,___$3){
return new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509);
}));
app.plugins.events.add_listener = (function app$plugins$events$add_listener(type,plugin_id,callback,props){
var plugin_id__$1 = app.plugins.parser.parse_id(plugin_id);
var key = Symbol();
var safe_callback = (function (value){
try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.plugins.events","void","app.plugins.events/void",1229710245),value)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(value) : callback.call(null,value));
}
}catch (e65027){var cause = e65027;
return console.error(cause);
}});
var debounced_callback = goog.functions.debounce(safe_callback,(10));
cljs.core.add_watch(app.main.store.state,key,(function (_,___$1,old_val,new_val){
var result = app.plugins.events.handle_state_change.cljs$core$IFn$_invoke$arity$5(type,plugin_id__$1,old_val,new_val,props);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.plugins.events","not-changed","app.plugins.events/not-changed",1296884509),result)){
return (debounced_callback.cljs$core$IFn$_invoke$arity$1 ? debounced_callback.cljs$core$IFn$_invoke$arity$1(result) : debounced_callback.call(null,result));
} else {
return null;
}
}));

return key;
});
app.plugins.events.remove_listener = (function app$plugins$events$remove_listener(key){
return cljs.core.remove_watch(app.main.store.state,key);
});

//# sourceMappingURL=app.plugins.events.js.map
