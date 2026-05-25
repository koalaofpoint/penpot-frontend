import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.product.empty_state.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.history');
app.main.ui.workspace.sidebar.history.workspace_undo = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),app.main.store.state);
/**
 * Searches for a shape inside the objects list or inside the undo history
 */
app.main.ui.workspace.sidebar.history.get_object = (function app$main$ui$workspace$sidebar$history$get_object(id,entries,objects){
var search_deleted_shape = (function (id__$1,entries__$1){
var search_obj = (function (obj){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj),id__$1)));
});
var search_delete_entry = (function (p__55273){
var map__55274 = p__55273;
var map__55274__$1 = cljs.core.__destructure_map(map__55274);
var undo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55274__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692));
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55274__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
var or__5025__auto__ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(search_obj,undo_changes);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2(search_obj,redo_changes);
}
});
var map__55272 = search_delete_entry(app.common.data.seek.cljs$core$IFn$_invoke$arity$2(search_delete_entry,entries__$1));
var map__55272__$1 = cljs.core.__destructure_map(map__55272);
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55272__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
return obj;
});
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return search_deleted_shape(id,entries);
}
});
/**
 * Generalizes the type of operation for different types of change
 */
app.main.ui.workspace.sidebar.history.extract_operation = (function app$main$ui$workspace$sidebar$history$extract_operation(change){
var G__55275 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(change);
var G__55275__$1 = (((G__55275 instanceof cljs.core.Keyword))?G__55275.fqn:null);
switch (G__55275__$1) {
case "add-obj":
case "add-page":
case "add-color":
case "add-media":
case "add-component":
case "add-typography":
return new cljs.core.Keyword(null,"new","new",-2085437848);

break;
case "mod-obj":
case "mod-page":
case "mod-color":
case "mod-media":
case "mod-component":
case "mod-typography":
return new cljs.core.Keyword(null,"modify","modify",-1261040869);

break;
case "del-obj":
case "del-page":
case "del-color":
case "del-media":
case "del-component":
case "del-typography":
return new cljs.core.Keyword(null,"delete","delete",-1768633620);

break;
case "mov-objects":
return new cljs.core.Keyword(null,"move","move",-2110884309);

break;
default:
return null;

}
});
/**
 * Given a single change parses the information into an uniform map
 */
app.main.ui.workspace.sidebar.history.parse_change = (function app$main$ui$workspace$sidebar$history$parse_change(change){
var r = (function (type,id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"operation","operation",-1267664310),app.main.ui.workspace.sidebar.history.extract_operation(change),new cljs.core.Keyword(null,"detail","detail",-1545345025),new cljs.core.Keyword(null,"operations","operations",1630691895).cljs$core$IFn$_invoke$arity$1(change),new cljs.core.Keyword(null,"id","id",-1388402092),((((cljs.core.coll_QMARK_(id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(id)))))?cljs.core.first(id):((cljs.core.coll_QMARK_(id))?new cljs.core.Keyword(null,"multiple","multiple",1244445549):id
))], null);
});
var G__55276 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(change);
var G__55276__$1 = (((G__55276 instanceof cljs.core.Keyword))?G__55276.fqn:null);
switch (G__55276__$1) {
case "set-option":
return r(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(change));

break;
case "add-obj":
case "mod-obj":
case "del-obj":
return r(new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change));

break;
case "reg-objects":
return null;

break;
case "mov-objects":
return r(new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(change));

break;
case "add-page":
case "mod-page":
case "del-page":
case "mov-page":
return r(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change));

break;
case "add-color":
case "mod-color":
return r(new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(change,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));

break;
case "del-color":
return r(new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change));

break;
case "add-recent-color":
return null;

break;
case "add-media":
case "mod-media":
return r(new cljs.core.Keyword(null,"media","media",-1066138403),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(change,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));

break;
case "del-media":
return r(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change));

break;
case "add-component":
case "mod-component":
case "del-component":
return r(new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change));

break;
case "add-typography":
case "mod-typography":
return r(new cljs.core.Keyword(null,"typography","typography",-399568138),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(change,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));

break;
case "del-typography":
return r(new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change));

break;
default:
return null;

}
});
/**
 * Retrieve the type to be shown to the user
 */
app.main.ui.workspace.sidebar.history.resolve_shape_types = (function app$main$ui$workspace$sidebar$history$resolve_shape_types(entries,objects){
var resolve_type = (function (p__55277){
var map__55278 = p__55277;
var map__55278__$1 = cljs.core.__destructure_map(map__55278);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55278__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55278__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"shape","shape",1190694006))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"multiple","multiple",1244445549))))){
return type;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.history.get_object(id,entries,objects));
}
});
var map_fn = (function (entry){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"shape","shape",1190694006))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"multiple","multiple",1244445549))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"type","type",1174270348),resolve_type(entry));
} else {
return entry;
}
});
return (function (entries__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(map_fn,entries__$1);
});
});
/**
 * Formats the message that will be displayed to the user
 */
app.main.ui.workspace.sidebar.history.entry_type__GT_message = (function app$main$ui$workspace$sidebar$history$entry_type__GT_message(type,multiple_QMARK_){
var arity = (cljs.core.truth_(multiple_QMARK_)?"multiple":"single");
var attribute = cljs.core.name((function (){var or__5025__auto__ = type;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"multiple","multiple",1244445549);
}
})());
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("workspace.undo.entry.%s.%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arity,attribute], 0)));
});
app.main.ui.workspace.sidebar.history.entry__GT_message = (function app$main$ui$workspace$sidebar$history$entry__GT_message(entry){
var value = app.main.ui.workspace.sidebar.history.entry_type__GT_message(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry)));
var G__55279 = new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(entry);
var G__55279__$1 = (((G__55279 instanceof cljs.core.Keyword))?G__55279.fqn:null);
switch (G__55279__$1) {
case "new":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.undo.entry.new",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

break;
case "modify":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.undo.entry.modify",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

break;
case "delete":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.undo.entry.delete",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

break;
case "move":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.undo.entry.move",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

break;
default:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.undo.entry.unknown",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

}
});
app.main.ui.workspace.sidebar.history.entry__GT_icon = (function app$main$ui$workspace$sidebar$history$entry__GT_icon(p__55280){
var map__55281 = p__55280;
var map__55281__$1 = cljs.core.__destructure_map(map__55281);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55281__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__55282 = type;
var G__55282__$1 = (((G__55282 instanceof cljs.core.Keyword))?G__55282.fqn:null);
switch (G__55282__$1) {
case "page":
return app.main.ui.icons.document;

break;
case "shape":
return app.main.ui.icons.svg;

break;
case "rect":
return app.main.ui.icons.rectangle;

break;
case "circle":
return app.main.ui.icons.elipse;

break;
case "text":
return app.main.ui.icons.text;

break;
case "path":
return app.main.ui.icons.path;

break;
case "frame":
return app.main.ui.icons.board;

break;
case "group":
return app.main.ui.icons.group;

break;
case "color":
return app.main.ui.icons.drop_icon;

break;
case "typography":
return app.main.ui.icons.text_palette;

break;
case "component":
return app.main.ui.icons.component;

break;
case "media":
return app.main.ui.icons.img;

break;
case "image":
return app.main.ui.icons.img;

break;
default:
return app.main.ui.icons.svg;

}
});
app.main.ui.workspace.sidebar.history.is_shape_QMARK_ = (function app$main$ui$workspace$sidebar$history$is_shape_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"frame","frame",-1711082588),null,new cljs.core.Keyword(null,"circle","circle",1903212362),null,new cljs.core.Keyword(null,"shape","shape",1190694006),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),type);
});
app.main.ui.workspace.sidebar.history.parse_entry = (function app$main$ui$workspace$sidebar$history$parse_entry(p__55283){
var map__55284 = p__55283;
var map__55284__$1 = cljs.core.__destructure_map(map__55284);
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55284__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.history.parse_change,redo_changes);
});
app.main.ui.workspace.sidebar.history.safe_name = (function app$main$ui$workspace$sidebar$history$safe_name(maybe_keyword){
if((maybe_keyword instanceof cljs.core.Keyword)){
return cljs.core.name(maybe_keyword);
} else {
return maybe_keyword;
}
});
/**
 * Selects the entry the user will see inside a list of possible entries.
 *   Sometimes the result will be a combination.
 */
app.main.ui.workspace.sidebar.history.select_entry = (function app$main$ui$workspace$sidebar$history$select_entry(candidates){
var entries = cljs.core.group_by((function (p1__55285_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__55285_SHARP_),new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(p1__55285_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55285_SHARP_)],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,candidates));
var single_QMARK_ = (function (coll){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
});
var types = cljs.core.group_by(cljs.core.first,cljs.core.keys(entries));
var operations = cljs.core.group_by(cljs.core.second,cljs.core.keys(entries));
var selected_entry = ((single_QMARK_(entries))?cljs.core.last(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,cljs.core.first(cljs.core.keys(entries)))):((single_QMARK_(new cljs.core.Keyword(null,"new","new",-2085437848).cljs$core$IFn$_invoke$arity$1(operations)))?cljs.core.last(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,cljs.core.first(new cljs.core.Keyword(null,"new","new",-2085437848).cljs$core$IFn$_invoke$arity$1(operations)))):((single_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55286_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.first(p1__55286_SHARP_));
}),new cljs.core.Keyword(null,"delete","delete",-1768633620).cljs$core$IFn$_invoke$arity$1(operations))))?cljs.core.last(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55287_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.first(p1__55287_SHARP_));
}),new cljs.core.Keyword(null,"delete","delete",-1768633620).cljs$core$IFn$_invoke$arity$1(operations))))):((single_QMARK_(new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(operations)))?cljs.core.last(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,cljs.core.first(new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(operations)))):((single_QMARK_(operations))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core.every_QMARK_(app.main.ui.workspace.sidebar.history.is_shape_QMARK_,cljs.core.keys(types)))?new cljs.core.Keyword(null,"shape","shape",1190694006):new cljs.core.Keyword(null,"multiple","multiple",1244445549)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.first(cljs.core.keys(operations))], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"multiple","multiple",1244445549)], null)
)))));
var detail = (function (){var G__55290 = new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(selected_entry);
var G__55290__$1 = (((G__55290 instanceof cljs.core.Keyword))?G__55290.fqn:null);
switch (G__55290__$1) {
case "new":
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected_entry);

break;
case "modify":
return app.common.data.mapm.cljs$core$IFn$_invoke$arity$2((function (_,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.history.safe_name,new cljs.core.Keyword(null,"attr","attr",-604132353)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"detail","detail",-1545345025),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)))));
}),cljs.core.group_by(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55288_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modify","modify",-1261040869),new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(p1__55288_SHARP_));
}),candidates)));

break;
case "delete":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55289_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(p1__55289_SHARP_));
}),candidates));

break;
default:
return candidates;

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(selected_entry,new cljs.core.Keyword(null,"detail","detail",-1545345025),detail);
});
app.main.ui.workspace.sidebar.history.parse_entries = (function app$main$ui$workspace$sidebar$history$parse_entries(entries,objects){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.history.select_entry,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.history.resolve_shape_types(entries,objects),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.history.parse_entry,entries)));
});
app.main.ui.workspace.sidebar.history.history_entry_details = (function app$main$ui$workspace$sidebar$history$history_entry_details(props_55292){
var map__55293 = rumext.v2.util.wrap_props(props_55292);
var map__55293__$1 = cljs.core.__destructure_map(map__55293);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55293__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var map__55294 = rumext.v2.deref(app.main.ui.workspace.sidebar.history.workspace_undo);
var map__55294__$1 = cljs.core.__destructure_map(map__55294);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55294__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_history__history-entry-detail",'children':(function (){var G__55295 = new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(entry);
var G__55295__$1 = (((G__55295 instanceof cljs.core.Keyword))?G__55295.fqn:null);
switch (G__55295__$1) {
case "new":
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.history.get_object(new cljs.core.Keyword(null,"detail","detail",-1545345025).cljs$core$IFn$_invoke$arity$1(entry),entries,objects));

break;
case "delete":
return rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_history__history-entry-details-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,id){
out_arr__35152__auto__.push((function (){var shape_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.history.get_object(id,entries,objects));
return rumext.v2.jsx("li",{'children':shape_name},id);
})());

return out_arr__35152__auto__;
}),[],new cljs.core.Keyword(null,"detail","detail",-1545345025).cljs$core$IFn$_invoke$arity$1(entry))});

break;
case "modify":
return rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_history__history-entry-details-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55296){
var vec__55297 = p__55296;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55297,(0),null);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55297,(1),null);
out_arr__35152__auto__.push((function (){var shape_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.history.get_object(id,entries,objects));
return rumext.v2.jsxs("li",{'children':[rumext.v2.jsx("div",{'children':shape_name}),rumext.v2.jsx("div",{'children':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",attributes)})]},id);
})());

return out_arr__35152__auto__;
}),[],new cljs.core.Keyword(null,"detail","detail",-1545345025).cljs$core$IFn$_invoke$arity$1(entry))});

break;
default:
return null;

}
})()});
});

(app.main.ui.workspace.sidebar.history.history_entry_details.displayName = "history-entry-details");

app.main.ui.workspace.sidebar.history.history_entry = (function app$main$ui$workspace$sidebar$history$history_entry(props_55300){
var disabled_QMARK_ = (props_55300["disabled?"]);
var current_QMARK_ = (props_55300["current?"]);
var idx_entry = (props_55300["idx-entry"]);
var entry = props_55300.entry;
var hover_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_detail_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var toggle_show_detail = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var has_entry_QMARK_ = cljs.core.parse_boolean(app.util.dom.get_data(app.util.dom.get_current_target(event),"has-entry"));
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(has_entry_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_detail_QMARK_,cljs.core.not);
} else {
return null;
}
}));
return rumext.v2.jsxs("div",{'onPointerEnter':(function (){
return cljs.core.reset_BANG_(hover_QMARK_,true);
}),'onPointerLeave':(function (){
return cljs.core.reset_BANG_(hover_QMARK_,false);
}),'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.undo_to_index(idx_entry));
}),'className':"main_ui_workspace_sidebar_history__history-entry"+" "+(cljs.core.truth_(disabled_QMARK_)?"main_ui_workspace_sidebar_history__disabled":"")+" "+(cljs.core.truth_(current_QMARK_)?"main_ui_workspace_sidebar_history__current":"")+" "+(cljs.core.truth_(cljs.core.deref(hover_QMARK_))?"main_ui_workspace_sidebar_history__hover":"")+" "+(cljs.core.truth_(cljs.core.deref(show_detail_QMARK_))?"main_ui_workspace_sidebar_history__show-detail":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_history__history-entry-summary",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_history__history-entry-summary-icon",'children':app.main.ui.workspace.sidebar.history.entry__GT_icon(entry)}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_history__history-entry-summary-text",'children':app.main.ui.workspace.sidebar.history.entry__GT_message(entry)}),(cljs.core.truth_(new cljs.core.Keyword(null,"detail","detail",-1545345025).cljs$core$IFn$_invoke$arity$1(entry))?rumext.v2.jsx("div",{'onClick':toggle_show_detail,'data-has-entry':""+((!((new cljs.core.Keyword(null,"detail","detail",-1545345025).cljs$core$IFn$_invoke$arity$1(entry) == null))) ?? ""),'className':"main_ui_workspace_sidebar_history__history-entry-summary-button"+" "+(cljs.core.truth_(cljs.core.deref(show_detail_QMARK_))?"main_ui_workspace_sidebar_history__button-opened":""),'children':app.main.ui.icons.arrow}):null)]}),(cljs.core.truth_(cljs.core.deref(show_detail_QMARK_))?rumext.v2.jsx(app.main.ui.workspace.sidebar.history.history_entry_details,{'entry':entry}):null)]});
});

(app.main.ui.workspace.sidebar.history.history_entry.displayName = "history-entry");

app.main.ui.workspace.sidebar.history.history_toolbox_STAR_ = (function app$main$ui$workspace$sidebar$history$history_toolbox_STAR_(props_55301){
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var map__55302 = rumext.v2.deref(app.main.ui.workspace.sidebar.history.workspace_undo);
var map__55302__$1 = cljs.core.__destructure_map(map__55302);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55302__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55302__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var entries = app.main.ui.workspace.sidebar.history.parse_entries(items,objects);
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_history__history-toolbox",'children':((cljs.core.empty_QMARK_(entries))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_history__history-entry-empty",'children':rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.history,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.undo.empty")})}):rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_history__history-entries",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55303){
var vec__55304 = p__55303;
var idx_entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55304,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55304,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.history.history_entry,{'entry':entry,'idx-entry':idx_entry,'current?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx_entry,index),'disabled?':(idx_entry > index)},["entry-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_entry)].join('')));

return out_arr__35152__auto__;
}),[],cljs.core.reverse(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,entries)))}))});
});

(app.main.ui.workspace.sidebar.history.history_toolbox_STAR_.displayName = "history-toolbox*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.history.js.map
