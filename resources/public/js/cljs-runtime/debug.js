import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.files.repair.js";
import "./app.common.files.validate.js";
import "./app.common.json.js";
import "./app.common.logging.js";
import "./app.common.pprint.js";
import "./app.common.transit.js";
import "./app.common.types.file.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.shortcuts.js";
import "./app.main.data.helpers.js";
import "./app.main.data.preview.js";
import "./app.main.data.viewer.shortcuts.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.common.js";
import "./app.main.data.workspace.path.shortcuts.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.errors.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.http.js";
import "./app.util.object.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./cljs.pprint.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./promesa.core.js";
goog.provide('debug');
app.common.logging.loggers.set("debug",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"debug","debug",-1608172596)));
debug.set_logging = (function debug$set_logging(var_args){
var G__53000 = arguments.length;
switch (G__53000) {
case 1:
return debug.set_logging.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return debug.set_logging.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('debug.set_logging', debug.set_logging);

(debug.set_logging.cljs$core$IFn$_invoke$arity$1 = (function (level){
return app.common.logging.loggers.set(new cljs.core.Keyword(null,"app","app",-560961707),app.common.logging.level__GT_int(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level)));
}));

(debug.set_logging.cljs$core$IFn$_invoke$arity$2 = (function (ns,level){
return app.common.logging.loggers.set(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ns),app.common.logging.level__GT_int(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(level)));
}));

(debug.set_logging.cljs$lang$maxFixedArity = 2);

debug.debug_exclude_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.workspace.notifications","handle-pointer-update","app.main.data.workspace.notifications/handle-pointer-update",614124289),null,new cljs.core.Keyword("app.main.data.workspace.selection","change-hover-state","app.main.data.workspace.selection/change-hover-state",972605989),null,new cljs.core.Keyword("app.main.data.workspace.notifications","handle-pointer-send","app.main.data.workspace.notifications/handle-pointer-send",-1463250994),null,new cljs.core.Keyword("app.main.data.websocket","send-message","app.main.data.websocket/send-message",1713313880),null], null), null);
debug.enable_BANG_ = (function debug$enable_BANG_(option){
app.util.debug.enable_BANG_(option);

var G__53004_53065 = option;
var G__53004_53066__$1 = (((G__53004_53065 instanceof cljs.core.Keyword))?G__53004_53065.fqn:null);
switch (G__53004_53066__$1) {
case "events":
(app.main.store._STAR_debug_events_STAR_ = true);

break;
case "events-times":
(app.main.store._STAR_debug_events_time_STAR_ = true);

break;
default:

}

return app.main.reinit();
});
debug.disable_BANG_ = (function debug$disable_BANG_(option){
app.util.debug.disable_BANG_(option);

var G__53005_53068 = option;
var G__53005_53069__$1 = (((G__53005_53068 instanceof cljs.core.Keyword))?G__53005_53068.fqn:null);
switch (G__53005_53069__$1) {
case "events":
(app.main.store._STAR_debug_events_STAR_ = false);

break;
case "events-times":
(app.main.store._STAR_debug_events_time_STAR_ = false);

break;
default:

}

return app.main.reinit();
});
debug.toggle_debug = (function debug$toggle_debug(name){
var option = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);
if(app.util.debug.enabled_QMARK_(option)){
return debug.disable_BANG_(option);
} else {
return debug.enable_BANG_(option);
}
});
goog.exportSymbol('debug.toggle_debug', debug.toggle_debug);
debug.debug_all = (function debug$debug_all(){
cljs.core.reset_BANG_(app.util.debug.state,app.util.debug.options);

return app.main.reinit();
});
goog.exportSymbol('debug.debug_all', debug.debug_all);
debug.debug_none = (function debug$debug_none(){
cljs.core.reset_BANG_(app.util.debug.state,cljs.core.PersistentHashSet.EMPTY);

return app.main.reinit();
});
goog.exportSymbol('debug.debug_none', debug.debug_none);
/**
 * Transducer function that can execute a side-effect `effect-fn` per input
 */
debug.tap = (function debug$tap(effect_fn){
return (function (rf){
return (function() {
var G__53071 = null;
var G__53071__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53071__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__53071__2 = (function (result,input){
(effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(input) : effect_fn.call(null,input));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
});
G__53071 = function(result,input){
switch(arguments.length){
case 0:
return G__53071__0.call(this);
case 1:
return G__53071__1.call(this,result);
case 2:
return G__53071__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53071.cljs$core$IFn$_invoke$arity$0 = G__53071__0;
G__53071.cljs$core$IFn$_invoke$arity$1 = G__53071__1;
G__53071.cljs$core$IFn$_invoke$arity$2 = G__53071__2;
return G__53071;
})()
});
});
goog.exportSymbol('debug.tap', debug.tap);
debug.logjs = (function debug$logjs(var_args){
var G__53009 = arguments.length;
switch (G__53009) {
case 1:
return debug.logjs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return debug.logjs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('debug.logjs', debug.logjs);

(debug.logjs.cljs$core$IFn$_invoke$arity$1 = (function (str){
return debug.tap(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(debug.logjs,str));
}));

(debug.logjs.cljs$core$IFn$_invoke$arity$2 = (function (str,val){
console.log(str,app.common.json.__GT_js(val));

return val;
}));

(debug.logjs.cljs$lang$maxFixedArity = 2);

if((typeof window !== 'undefined')){
(window.dbg = app.common.json.__GT_js);

(window.pp = cljs.pprint.pprint);
} else {
}
if((typeof debug !== 'undefined') && (typeof debug.widget_style !== 'undefined')){
} else {
debug.widget_style = "\n  background: black;\n  bottom: 10px;\n  color: white;\n  height: 20px;\n  padding-left: 8px;\n  position: absolute;\n  right: 10px;\n  width: 40px;\n  z-index: 99999;\n  opacity: 0.5;\n";
}
/**
 * Adds a widget to keep track of the average FPS's
 */
debug.fps = (function debug$fps(){
var last = cljs.core.volatile_BANG_(performance.now());
var avg = cljs.core.volatile_BANG_((0));
var node = app.util.object.set_BANG_(app.util.object.set_BANG_(document.createElement("div"),"id","fps"),"style",debug.widget_style);
var body = app.util.object.get.cljs$core$IFn$_invoke$arity$2(document,"body");
var do_thing = (function debug$fps_$_do_thing(){
return app.util.timers.raf((function (){
var cur = performance.now();
var ts = ((1000) / ((cur - cljs.core.deref(last))));
var val = (cljs.core.deref(avg) + ((ts - cljs.core.deref(avg)) * 0.1));
app.util.object.set_BANG_(node,"innerText",val);

cljs.core.vreset_BANG_(last,cur);

cljs.core.vreset_BANG_(avg,val);

return debug$fps_$_do_thing();
}));
});
body.appendChild(node);

return do_thing();
});
goog.exportSymbol('debug.fps', debug.fps);
debug.dump_state = (function debug$dump_state(){
debug.logjs.cljs$core$IFn$_invoke$arity$2("state",cljs.core.deref(app.main.store.state));

return null;
});
goog.exportSymbol('debug.dump_state', debug.dump_state);
debug.dump_data = (function debug$dump_data(){
var fdata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),new cljs.core.Keyword(null,"data","data",-232669377));
debug.logjs.cljs$core$IFn$_invoke$arity$2("file-data",fdata);

return null;
});
goog.exportSymbol('debug.dump_data', debug.dump_data);
debug.dump_buffer = (function debug$dump_buffer(){
debug.logjs.cljs$core$IFn$_invoke$arity$2("last-events",cljs.core.deref(app.main.store.last_events));

return null;
});
goog.exportSymbol('debug.dump_buffer', debug.dump_buffer);
debug.get_state = (function debug$get_state(str_path){
var path_53073 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.read_string,cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(str_path," ")));
console.log(cljs.core.clj__GT_js(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),path_53073)));

return null;
});
goog.exportSymbol('debug.get_state', debug.get_state);
debug.dump_objects_SINGLEQUOTE_ = (function debug$dump_objects_SINGLEQUOTE_(state){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
debug.logjs.cljs$core$IFn$_invoke$arity$2("objects",objects);

return null;
});
debug.dump_objects = (function debug$dump_objects(){
return debug.dump_objects_SINGLEQUOTE_(cljs.core.deref(app.main.store.state));
});
goog.exportSymbol('debug.dump_objects', debug.dump_objects);
debug.get_object = (function debug$get_object(state,name){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var result = (function (){var or__5025__auto__ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (shape){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape));
}),cljs.core.vals(objects));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.parse(name));
}
})();
return result;
});
debug.dump_object = (function debug$dump_object(name){
return cljs.core.clj__GT_js(debug.get_object(cljs.core.deref(app.main.store.state),name));
});
goog.exportSymbol('debug.dump_object', debug.dump_object);
debug.get_selected = (function debug$get_selected(state){
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
});
debug.dump_selected = (function debug$dump_selected(){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var result = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53021_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__53021_SHARP_);
}),debug.get_selected(cljs.core.deref(app.main.store.state)));
debug.logjs.cljs$core$IFn$_invoke$arity$2("selected",result);

return null;
});
goog.exportSymbol('debug.dump_selected', debug.dump_selected);
debug.dump_selected_edn = (function debug$dump_selected_edn(){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var result = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53023_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__53023_SHARP_);
}),debug.get_selected(cljs.core.deref(app.main.store.state)));
app.common.pprint.pprint.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),(30),new cljs.core.Keyword(null,"level","level",1290497552),(30)], null)], 0));

return null;
});
goog.exportSymbol('debug.dump_selected_edn', debug.dump_selected_edn);
debug.preview_selected = (function debug$preview_selected(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.preview.open_preview_selected());
});
goog.exportSymbol('debug.preview_selected', debug.preview_selected);
debug.parent = (function debug$parent(){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var selected_id = cljs.core.first(app.main.data.helpers.get_selected_ids(cljs.core.deref(app.main.store.state)));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,selected_id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var temp__5825__auto___53074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
if(cljs.core.truth_(temp__5825__auto___53074)){
var parent_53075 = temp__5825__auto___53074;
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(parent_53075))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent_53075))].join(''));
} else {
}

return null;
});
goog.exportSymbol('debug.parent', debug.parent);
debug.frame = (function debug$frame(){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var selected_id = cljs.core.first(app.main.data.helpers.get_selected_ids(cljs.core.deref(app.main.store.state)));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,selected_id),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var temp__5825__auto___53076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(cljs.core.truth_(temp__5825__auto___53076)){
var frame_53077 = temp__5825__auto___53076;
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame_53077))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame_53077))].join(''));
} else {
}

return null;
});
goog.exportSymbol('debug.frame', debug.frame);
debug.select_by_object_id = (function debug$select_by_object_id(object_id){
var vec__53024 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(object_id,/\//);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53024,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53024,(1),null);
var shape_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53024,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53024,(3),null);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-id","page-id",-872941168),app.common.uuid.parse(page_id)], 0)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(app.common.uuid.parse(shape_id)));
});
goog.exportSymbol('debug.select_by_object_id', debug.select_by_object_id);
debug.select_by_id = (function debug$select_by_id(shape_id){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(app.common.uuid.parse(shape_id)));
});
goog.exportSymbol('debug.select_by_id', debug.select_by_id);
debug.dump_tree_SINGLEQUOTE_ = (function debug$dump_tree_SINGLEQUOTE_(var_args){
var G__53029 = arguments.length;
switch (G__53029) {
case 1:
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4(state,false,false,false);
}));

(debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (state,show_ids){
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4(state,show_ids,false,false);
}));

(debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (state,show_ids,show_touched){
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4(state,show_ids,show_touched,false);
}));

(debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4 = (function (state,show_ids,show_touched,show_modified){
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(state);
var libraries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450));
return app.common.types.file.dump_tree(file,page_id,libraries,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-ids","show-ids",1853916915),show_ids,new cljs.core.Keyword(null,"show-touched","show-touched",2135884991),show_touched,new cljs.core.Keyword(null,"show-modified","show-modified",-1388936404),show_modified], null));
}));

(debug.dump_tree_SINGLEQUOTE_.cljs$lang$maxFixedArity = 4);

debug.dump_tree = (function debug$dump_tree(var_args){
var G__53031 = arguments.length;
switch (G__53031) {
case 0:
return debug.dump_tree.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return debug.dump_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return debug.dump_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return debug.dump_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('debug.dump_tree', debug.dump_tree);

(debug.dump_tree.cljs$core$IFn$_invoke$arity$0 = (function (){
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
}));

(debug.dump_tree.cljs$core$IFn$_invoke$arity$1 = (function (show_ids){
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(app.main.store.state),show_ids,false,false);
}));

(debug.dump_tree.cljs$core$IFn$_invoke$arity$2 = (function (show_ids,show_touched){
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(app.main.store.state),show_ids,show_touched,false);
}));

(debug.dump_tree.cljs$core$IFn$_invoke$arity$3 = (function (show_ids,show_touched,show_modified){
return debug.dump_tree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(app.main.store.state),show_ids,show_touched,show_modified);
}));

(debug.dump_tree.cljs$lang$maxFixedArity = 3);

debug.dump_subtree_SINGLEQUOTE_ = (function debug$dump_subtree_SINGLEQUOTE_(var_args){
var G__53035 = arguments.length;
switch (G__53035) {
case 2:
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('debug.dump_subtree_SINGLEQUOTE_', debug.dump_subtree_SINGLEQUOTE_);

(debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (state,shape_id){
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$5(state,shape_id,false,false,false);
}));

(debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (state,shape_id,show_ids){
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$5(state,shape_id,show_ids,false,false);
}));

(debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$4 = (function (state,shape_id,show_ids,show_touched){
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$5(state,shape_id,show_ids,show_touched,false);
}));

(debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$5 = (function (state,shape_id,show_ids,show_touched,show_modified){
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(state);
var libraries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450));
var shape_id__$1 = (((!((shape_id == null))))?app.common.uuid.parse(shape_id):cljs.core.first(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state)));
if((!((shape_id__$1 == null)))){
return app.common.types.file.dump_subtree(file,page_id,shape_id__$1,libraries,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-ids","show-ids",1853916915),show_ids,new cljs.core.Keyword(null,"show-touched","show-touched",2135884991),show_touched,new cljs.core.Keyword(null,"show-modified","show-modified",-1388936404),show_modified], null));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no selected shape"], 0));
}
}));

(debug.dump_subtree_SINGLEQUOTE_.cljs$lang$maxFixedArity = 5);

debug.dump_subtree = (function debug$dump_subtree(var_args){
var G__53037 = arguments.length;
switch (G__53037) {
case 1:
return debug.dump_subtree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return debug.dump_subtree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return debug.dump_subtree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return debug.dump_subtree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('debug.dump_subtree', debug.dump_subtree);

(debug.dump_subtree.cljs$core$IFn$_invoke$arity$1 = (function (shape_id){
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),shape_id);
}));

(debug.dump_subtree.cljs$core$IFn$_invoke$arity$2 = (function (shape_id,show_ids){
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(app.main.store.state),shape_id,show_ids,false,false);
}));

(debug.dump_subtree.cljs$core$IFn$_invoke$arity$3 = (function (shape_id,show_ids,show_touched){
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(app.main.store.state),shape_id,show_ids,show_touched,false);
}));

(debug.dump_subtree.cljs$core$IFn$_invoke$arity$4 = (function (shape_id,show_ids,show_touched,show_modified){
return debug.dump_subtree_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(app.main.store.state),shape_id,show_ids,show_touched,show_modified);
}));

(debug.dump_subtree.cljs$lang$maxFixedArity = 4);

/**
 * Takes a Transit JSON changes
 */
debug.apply_changes = (function debug$apply_changes(changes_STAR_){
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var changes = app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(changes_STAR_);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.changes.commit_changes(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),changes,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),true,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null)));
});
goog.exportSymbol('debug.apply_changes', debug.apply_changes);
debug.fetch_apply = (function debug$fetch_apply(url){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.impl.resolved(null),(function (___34309__auto__){
return promesa.protocols._mcat(promesa.impl.coerce(fetch(url)),(function (response){
return promesa.impl.coerce(response.text());
}));
})),debug.apply_changes);
});
goog.exportSymbol('debug.fetch_apply', debug.fetch_apply);
debug.reset_viewport = (function debug$reset_viewport(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.reset_zoom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.update_viewport_position(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.constantly((0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.constantly((0))], null))], 0));
});
goog.exportSymbol('debug.reset_viewport', debug.reset_viewport);
debug.hide_ui = (function debug$hide_ui(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"hide-ui","hide-ui",834012905)));
});
goog.exportSymbol('debug.hide_ui', debug.hide_ui);
debug.shortcuts = (function debug$shortcuts(){
var print_shortcuts = (function debug$shortcuts_$_print_shortcuts(shortcuts){
return console.table(cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53043){
var vec__53044 = p__53043;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(0),null);
var map__53047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(1),null);
var map__53047__$1 = cljs.core.__destructure_map(map__53047);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53047__$1,new cljs.core.Keyword(null,"command","command",-894540724));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.data.name(key),((cljs.core.vector_QMARK_(command))?cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" | ",command):command)], null);
}),shortcuts))));
});
var style_53082 = "font-weight: bold; font-size: 1.25rem;";
console.log("%c Dashboard",style_53082);

print_shortcuts(app.main.data.dashboard.shortcuts.shortcuts);

console.log("%c Workspace",style_53082);

print_shortcuts(app.main.data.workspace.shortcuts.shortcuts);

console.log("%c Path",style_53082);

print_shortcuts(app.main.data.workspace.path.shortcuts.shortcuts);

console.log("%c Viewer",style_53082);

print_shortcuts(app.main.data.viewer.shortcuts.shortcuts);

return null;
});
goog.exportSymbol('debug.shortcuts', debug.shortcuts);
debug.nodeStats = (function debug$nodeStats(){
var root_node = app.util.dom.query.cljs$core$IFn$_invoke$arity$1(".viewport .render-shapes");
var num_nodes = cljs.core.count(app.util.dom.seq_nodes(root_node));
return ({"number": num_nodes});
});
goog.exportSymbol('debug.nodeStats', debug.nodeStats);
debug.modif__GT_js = (function debug$modif__GT_js(modif_tree,objects){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__53048){
var vec__53049 = p__53048;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53049,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53049,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"name","name",1843675177)], null)),v], null);
})),modif_tree));
});
debug.dump_modifiers = (function debug$dump_modifiers(){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var modifiers = new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
console.log(debug.modif__GT_js(modifiers,objects));

return null;
});
goog.exportSymbol('debug.dump_modifiers', debug.dump_modifiers);
debug.set_workspace_read_only = (function debug$set_workspace_read_only(read_only_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.common.set_workspace_read_only(read_only_QMARK_));
});
goog.exportSymbol('debug.set_workspace_read_only', debug.set_workspace_read_only);
debug.validate = (function debug$validate(var_args){
var G__53053 = arguments.length;
switch (G__53053) {
case 0:
return debug.validate.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return debug.validate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('debug.validate', debug.validate);

(debug.validate.cljs$core$IFn$_invoke$arity$0 = (function (){
return debug.validate.cljs$core$IFn$_invoke$arity$1(null);
}));

(debug.validate.cljs$core$IFn$_invoke$arity$1 = (function (shape_id){
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var libraries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"files","files",-472457450));
try{return cljs.core.clj__GT_js(cljs.core.group_by(new cljs.core.Keyword(null,"code","code",1586293142),(function (){var temp__5823__auto__ = (function (){var G__53055 = shape_id;
if((G__53055 == null)){
return null;
} else {
return app.common.uuid.parse(G__53055);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var shape_id__$1 = temp__5823__auto__;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425)));
return app.common.files.validate.validate_shape(shape_id__$1,file,page,libraries);
} else {
return app.common.files.validate.validate_file(file,libraries);
}
})()));
}catch (e53054){var cause = e53054;
return app.common.exceptions.print_throwable(cause);
}}));

(debug.validate.cljs$lang$maxFixedArity = 1);

debug.validate_schema = (function debug$validate_schema(){
try{var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
return app.common.files.validate.validate_file_schema_BANG_(file);
}catch (e53056){var cause = e53056;
return app.common.exceptions.print_throwable(cause);
}});
goog.exportSymbol('debug.validate_schema', debug.validate_schema);
debug.repair = (function debug$repair(reload_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
if((typeof debug.repair_current_file_53057 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
debug.repair_current_file_53057 = (function (reload_QMARK_,meta53058){
this.reload_QMARK_ = reload_QMARK_;
this.meta53058 = meta53058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(debug.repair_current_file_53057.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(debug.repair_current_file_53057.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("debug","repair-current-file","debug/repair-current-file",-71878210);
}));

(debug.repair_current_file_53057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53059,meta53058__$1){
var self__ = this;
var _53059__$1 = this;
return (new debug.repair_current_file_53057(self__.reload_QMARK_,meta53058__$1));
}));

(debug.repair_current_file_53057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53059){
var self__ = this;
var _53059__$1 = this;
return self__.meta53058;
}));

(debug.repair_current_file_53057.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(debug.repair_current_file_53057.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var features__$1 = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(state);
var sid = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(state);
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(state);
var libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450));
var errors = app.common.files.validate.validate_file(file,libs);
var ___$3 = (function (){
if(app.common.logging.enabled_QMARK_("debug",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repair current file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.count(errors)], null)], null);
}),null)),null,null,"debug",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

return null;
})()
;
var changes = app.common.files.repair.repair_file(file,libs,errors);
var params = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"revn","revn",-633391765),new cljs.core.Keyword(null,"revn","revn",-633391765).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"vern","vern",2071435888),new cljs.core.Keyword(null,"vern","vern",2071435888).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"session-id","session-id",-1147060351),sid,new cljs.core.Keyword(null,"changes","changes",1492088),changes,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1,new cljs.core.Keyword(null,"skip-validate","skip-validate",1937218253),true], null);
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (___$4){
if(cljs.core.truth_(self__.reload_QMARK_)){
return app.util.dom.reload_current_window.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
}),(function (cause){
return app.common.exceptions.print_throwable(cause);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-file","update-file",-511736043),params));
}));
}

return (new debug.repair_current_file_53057(reload_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
goog.exportSymbol('debug.repair', debug.repair);
debug.fix_orphan_shapes = (function debug$fix_orphan_shapes(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.fix_orphan_shapes());
});
goog.exportSymbol('debug.fix_orphan_shapes', debug.fix_orphan_shapes);
debug.find_components_norefs = (function debug$find_components_norefs(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.find_components_norefs());
});
goog.exportSymbol('debug.find_components_norefs', debug.find_components_norefs);
debug.set_shape_ref_STAR_ = (function debug$set_shape_ref_STAR_(id,shape_ref){
if((typeof debug.set_shape_ref_53060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
debug.set_shape_ref_53060 = (function (id,shape_ref,meta53061){
this.id = id;
this.shape_ref = shape_ref;
this.meta53061 = meta53061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(debug.set_shape_ref_53060.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(debug.set_shape_ref_53060.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("debug","set-shape-ref","debug/set-shape-ref",1401889739);
}));

(debug.set_shape_ref_53060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53062,meta53061__$1){
var self__ = this;
var _53062__$1 = this;
return (new debug.set_shape_ref_53060(self__.id,self__.shape_ref,meta53061__$1));
}));

(debug.set_shape_ref_53060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53062){
var self__ = this;
var _53062__$1 = this;
return self__.meta53061;
}));

(debug.set_shape_ref_53060.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(debug.set_shape_ref_53060.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var shape_id = app.common.uuid.parse(self__.id);
var shape_ref__$1 = app.common.uuid.parse(self__.shape_ref);
return beicon.v2.core.of(app.main.data.workspace.update_shape(shape_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),shape_ref__$1], null)));
}));
}

return (new debug.set_shape_ref_53060(id,shape_ref,cljs.core.PersistentArrayMap.EMPTY));
});
debug.set_shape_ref = (function debug$set_shape_ref(id,shape_ref){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(debug.set_shape_ref_STAR_(id,shape_ref));
});
goog.exportSymbol('debug.set_shape_ref', debug.set_shape_ref);
debug.network_averages = (function debug$network_averages(){
return console.log(cljs.core.clj__GT_js(cljs.core.deref(app.util.http.network_averages)));
});
goog.exportSymbol('debug.network_averages', debug.network_averages);
debug.print_last_exception = (function debug$print_last_exception(){
var G__53063 = app.main.errors.last_exception;
if((G__53063 == null)){
return null;
} else {
return app.common.exceptions.print_throwable(G__53063);
}
});

//# sourceMappingURL=debug.js.map
