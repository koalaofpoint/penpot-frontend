import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.logging.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.pages_list.js";
import "./app.common.types.shape.js";
import "./app.common.uuid.js";
goog.provide('app.common.files.repair');
app.common.logging.loggers.set("app.common.files.repair",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"debug","debug",-1608172596)));
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.files !== 'undefined') && (typeof app.common.files.repair !== 'undefined') && (typeof app.common.files.repair.repair_error !== 'undefined')){
} else {
app.common.files.repair.repair_error = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__73719 = cljs.core.get_global_hierarchy;
return (fexpr__73719.cljs$core$IFn$_invoke$arity$0 ? fexpr__73719.cljs$core$IFn$_invoke$arity$0() : fexpr__73719.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.files.repair","repair-error"),(function (code,_error,_file_data,_libraries){
return code;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-geometry","invalid-geometry",437001578),(function (_,p__73720,file_data,___$1){
var map__73721 = p__73720;
var map__73721__$1 = cljs.core.__destructure_map(map__73721);
var error = map__73721__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73721__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73721__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> reset geometry"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.shape.setup_rect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0)),new cljs.core.Keyword(null,"y","y",-1757859776),(0)),new cljs.core.Keyword(null,"width","width",-384071477),0.01),new cljs.core.Keyword(null,"height","height",1025178622),0.01));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :invalid-geometry"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"parent-not-found","parent-not-found",451342282),(function (_,p__73722,file_data,___$1){
var map__73723 = p__73722;
var map__73723__$1 = cljs.core.__destructure_map(map__73723);
var error = map__73723__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73723__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73723__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set to "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),app.common.uuid.zero], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),app.common.uuid.zero);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :parent-not-found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"child-not-in-parent","child-not-in-parent",969396311),(function (_,p__73724,file_data,___$1){
var map__73725 = p__73724;
var map__73725__$1 = cljs.core.__destructure_map(map__73725);
var error = map__73725__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73725__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73725__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (parent_shape){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> add children to"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent_shape)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.update.cljs$core$IFn$_invoke$arity$4(parent_shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :child-not-in-parent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"duplicated-children","duplicated-children",-504084340),(function (_,p__73726,file_data,___$1){
var map__73727 = p__73726;
var map__73727__$1 = cljs.core.__destructure_map(map__73727);
var error = map__73727__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73727__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73727__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> remove duplicated children"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.distinct);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :duplicated-children"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"child-not-found","child-not-found",1723767489),(function (_,p__73733,file_data,___$1){
var map__73734 = p__73733;
var map__73734__$1 = cljs.core.__destructure_map(map__73734);
var error = map__73734__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73734__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73734__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73734__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var repair_shape = (function (parent_shape){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> remove child"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-id","child-id",1325542429),new cljs.core.Keyword(null,"child-id","child-id",1325542429).cljs$core$IFn$_invoke$arity$1(args)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.update.cljs$core$IFn$_invoke$arity$3(parent_shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (shapes){
return app.common.data.removev((function (p1__73732_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"child-id","child-id",1325542429).cljs$core$IFn$_invoke$arity$1(args),p1__73732_SHARP_);
}),shapes);
}));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :child-not-found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-parent","invalid-parent",-882875239),(function (_,p__73735,file_data,___$1){
var map__73736 = p__73735;
var map__73736__$1 = cljs.core.__destructure_map(map__73736);
var error = map__73736__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73736__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73736__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73736__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :invalid-parent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$5(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true], null));
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"frame-not-found","frame-not-found",1905603142),(function (_,p__73737,file_data,___$1){
var map__73738 = p__73737;
var map__73738__$1 = cljs.core.__destructure_map(map__73738);
var error = map__73738__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73738__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73738__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
var page = app.common.types.pages_list.get_page(file_data,page_id);
var frame = app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1));
var frame_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.zero;
}
})();
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set to "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :frame-not-found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-frame","invalid-frame",-1077960585),(function (_,p__73739,file_data,___$1){
var map__73740 = p__73739;
var map__73740__$1 = cljs.core.__destructure_map(map__73740);
var error = map__73740__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73740__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73740__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
var page = app.common.types.pages_list.get_page(file_data,page_id);
var frame = app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1));
var frame_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.zero;
}
})();
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set to "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :invalid-frame"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"component-not-main","component-not-main",-1388012781),(function (_,p__73745,file_data,___$1){
var map__73746 = p__73745;
var map__73746__$1 = cljs.core.__destructure_map(map__73746);
var error = map__73746__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73746__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73746__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set :main-instance"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"main-instance","main-instance",476264761),true);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :component-not-main"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"component-main-external","component-main-external",-1426309457),(function (_,p__73747,file_data,___$1){
var map__73748 = p__73747;
var map__73748__$1 = cljs.core.__destructure_map(map__73748);
var error = map__73748__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73748__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73748__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set :component-file to local file"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :component-main-external"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"component-not-found","component-not-found",482222671),(function (_,p__73749,file_data,___$1){
var map__73751 = p__73749;
var map__73751__$1 = cljs.core.__destructure_map(map__73751);
var error = map__73751__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73751__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73751__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var page = app.common.types.pages_list.get_page(file_data,page_id);
var shape_ids = app.common.files.helpers.get_children_ids_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> detach shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.detach_shape(shape__$1);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :component-not-found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),shape_ids,repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-main-instance-id","invalid-main-instance-id",-584539934),(function (_,p__73766,file_data,___$1){
var map__73768 = p__73766;
var map__73768__$1 = cljs.core.__destructure_map(map__73768);
var error = map__73768__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73768__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73768__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(file_data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape));
var repair_component = (function (component__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> assign main-instance-id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component__$1)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component__$1,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
});
var detach_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> detach shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.detach_shape(shape__$1);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :invalid-main-instance-id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


if((((!((component == null)))) && (cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))))){
return app.common.files.changes_builder.update_component(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),repair_component);
} else {
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),detach_shape);
}
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-main-instance-page","invalid-main-instance-page",-2135139325),(function (_,p__73782,file_data,___$1){
var map__73783 = p__73782;
var map__73783__$1 = cljs.core.__destructure_map(map__73783);
var error = map__73783__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73783__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73783__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_component = (function (component){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> assign main-instance-page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),page_id);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :invalid-main-instance-page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_component(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),repair_component);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-main-instance","invalid-main-instance",1361049883),(function (_,p__73793,file_data,___$1){
var map__73794 = p__73793;
var map__73794__$1 = cljs.core.__destructure_map(map__73794);
var error = map__73794__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73794__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73794__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> CANNOT REPAIR THIS AUTOMATICALLY."], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


return shape__$1;
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :invalid-main-instance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"component-main","component-main",-462144619),(function (_,p__73851,file_data,___$1){
var map__73854 = p__73851;
var map__73854__$1 = cljs.core.__destructure_map(map__73854);
var error = map__73854__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73854__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73854__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> unset :main-instance"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"main-instance","main-instance",476264761));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :component-main"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"should-be-component-root","should-be-component-root",-1019597852),(function (_,p__73922,file_data,___$1){
var map__73923 = p__73922;
var map__73923__$1 = cljs.core.__destructure_map(map__73923);
var error = map__73923__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73923__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73923__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set :component-root"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"component-root","component-root",-485271026),true);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :should-be-component-root"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"should-not-be-component-root","should-not-be-component-root",-1750007912),(function (_,p__74008,file_data,___$1){
var map__74016 = p__74008;
var map__74016__$1 = cljs.core.__destructure_map(map__74016);
var error = map__74016__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74016__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74016__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> unset :component-root"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"component-root","component-root",-485271026));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :should-not-be-component-root"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ref-shape-not-found","ref-shape-not-found",1014790633),(function (_,p__74068,file_data,libraries){
var map__74069 = p__74068;
var map__74069__$1 = cljs.core.__destructure_map(map__74069);
var error = map__74069__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74069__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74069__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var matching_shape = (function (){var page = app.common.types.pages_list.get_page(file_data,page_id);
var root_shape = app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),shape);
var component_file = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(root_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data)))?file_data:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(root_shape))));
var component = (cljs.core.truth_(component_file)?app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(component_file,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(root_shape),true):null);
var component_shapes = app.common.types.file.get_component_shapes(file_data,component);
var temp__5823__auto__ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__74065_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(p1__74065_SHARP_),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape));
}),component_shapes);
if(cljs.core.truth_(temp__5823__auto__)){
var near_shape_1 = temp__5823__auto__;
return near_shape_1;
} else {
var temp__5825__auto__ = app.common.types.container.get_shape(page,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(temp__5825__auto__)){
var random_shape = temp__5825__auto__;
var temp__5823__auto____$1 = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__74066_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__74066_SHARP_),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(random_shape));
}),component_shapes);
if(cljs.core.truth_(temp__5823__auto____$1)){
var near_shape_2 = temp__5823__auto____$1;
return near_shape_2;
} else {
var head_shape = app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),shape);
var component_file__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(head_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data)))?file_data:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(head_shape))));
var component__$1 = (cljs.core.truth_(component_file__$1)?app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(component_file__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(head_shape),true):null);
var component_shapes__$1 = app.common.types.file.get_component_shapes(file_data,component__$1);
var temp__5823__auto____$2 = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__74067_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__74067_SHARP_),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(random_shape));
}),component_shapes__$1);
if(cljs.core.truth_(temp__5823__auto____$2)){
var near_shape_3 = temp__5823__auto____$2;
return near_shape_3;
} else {
return null;
}
}
} else {
return null;
}
}
})();
var reassign_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> reassign shape-ref to"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(matching_shape)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(matching_shape));
});
var detach_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> detach shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.detach_shape(shape__$1);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :ref-shape-not-found"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


if((!((matching_shape == null)))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),reassign_shape);
} else {
var page = app.common.types.pages_list.get_page(file_data,page_id);
var shape_ids = app.common.files.helpers.get_children_ids_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),shape_ids,detach_shape);
}
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ref-shape-is-not-head","ref-shape-is-not-head",1548958917),(function (_,p__74114,file_data,___$1){
var map__74115 = p__74114;
var map__74115__$1 = cljs.core.__destructure_map(map__74115);
var error = map__74115__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74115__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74115__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> unhead shape"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.unhead_shape(shape__$1);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :shape-ref-is-not-head"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ref-shape-is-head","ref-shape-is-head",842662811),(function (_,p__74120,file_data,___$1){
var map__74121 = p__74120;
var map__74121__$1 = cljs.core.__destructure_map(map__74121);
var error = map__74121__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74121__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74121__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74121__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> reroot shape"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.rehead_shape(shape__$1,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(args));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :shape-ref-is-head"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"shape-ref-cycle","shape-ref-cycle",-1233535891),(function (_,p__74125,file_data,___$1){
var map__74126 = p__74125;
var map__74126__$1 = cljs.core.__destructure_map(map__74126);
var error = map__74126__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74126__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74126__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var repair_component = (function (component){
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component);
var to_detach = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__74124_SHARP_){
return app.common.types.container.get_children_in_instance(objects,p1__74124_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74123_SHARP_){
return app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$2(objects,p1__74123_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74122_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__74122_SHARP_);
}),new cljs.core.Keyword(null,"cycles-ids","cycles-ids",-532391784).cljs$core$IFn$_invoke$arity$1(args)))))], 0))));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(component,new cljs.core.Keyword(null,"objects","objects",2099713734),(function (objects__$1){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.contains_QMARK_(to_detach,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,app.common.types.component.detach_shape(v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,objects__$1);
}));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing component :shape-ref-cycle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_component(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,null),file_data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),repair_component);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"shape-ref-in-main","shape-ref-in-main",-671464993),(function (_,p__74127,file_data,___$1){
var map__74128 = p__74127;
var map__74128__$1 = cljs.core.__destructure_map(map__74128);
var error = map__74128__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74128__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74128__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> unset :shape-ref"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :shape-ref-in-main"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"root-main-not-allowed","root-main-not-allowed",1386008676),(function (_,p__74129,file_data,___$1){
var map__74130 = p__74129;
var map__74130__$1 = cljs.core.__destructure_map(map__74130);
var error = map__74130__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74130__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74130__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> unset :component-root"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"component-root","component-root",-485271026));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :root-main-not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nested-main-not-allowed","nested-main-not-allowed",1962230911),(function (_,p__74132,file_data,___$1){
var map__74133 = p__74132;
var map__74133__$1 = cljs.core.__destructure_map(map__74133);
var error = map__74133__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74133__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74133__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set :component-root"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"component-root","component-root",-485271026),true);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :nested-main-not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$5(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape),app.common.uuid.zero,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true], null));
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"root-copy-not-allowed","root-copy-not-allowed",-829410346),(function (_,p__74134,file_data,___$1){
var map__74135 = p__74134;
var map__74135__$1 = cljs.core.__destructure_map(map__74135);
var error = map__74135__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74135__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74135__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> unset :component-root"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"component-root","component-root",-485271026));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :root-copy-not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nested-copy-not-allowed","nested-copy-not-allowed",-425843986),(function (_,p__74137,file_data,___$1){
var map__74138 = p__74137;
var map__74138__$1 = cljs.core.__destructure_map(map__74138);
var error = map__74138__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74138__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74138__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set :component-root"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"component-root","component-root",-485271026),true);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :nested-copy-not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-head-main-not-allowed","not-head-main-not-allowed",-1213809819),(function (_,p__74139,file_data,___$1){
var map__74140 = p__74139;
var map__74140__$1 = cljs.core.__destructure_map(map__74140);
var error = map__74140__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74140__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74140__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> detach shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.detach_shape(shape__$1);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :not-head-main-not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-head-copy-not-allowed","not-head-copy-not-allowed",1731476124),(function (_,p__74141,file_data,___$1){
var map__74142 = p__74141;
var map__74142__$1 = cljs.core.__destructure_map(map__74142);
var error = map__74142__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74142__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74142__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> detach shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.detach_shape(shape__$1);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :not-head-copy-not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-component-not-allowed","not-component-not-allowed",-90463620),(function (_,p__74143,file_data,___$1){
var map__74144 = p__74143;
var map__74144__$1 = cljs.core.__destructure_map(map__74144);
var error = map__74144__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74144__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74144__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> CANNOT REPAIR THIS AUTOMATICALLY."], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


return shape__$1;
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :not-component-not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instance-head-not-frame","instance-head-not-frame",829436563),(function (_,p__74146,file_data,___$1){
var map__74147 = p__74146;
var map__74147__$1 = cljs.core.__destructure_map(map__74147);
var error = map__74147__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74147__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74147__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set :type :frame"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),true,new cljs.core.Keyword(null,"r1","r1",690974900),(0),new cljs.core.Keyword(null,"r2","r2",252844174),(0),new cljs.core.Keyword(null,"r3","r3",-2027148174),(0),new cljs.core.Keyword(null,"r4","r4",1134323163),(0)], 0));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :instance-head-not-frame"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"component-nil-objects-not-allowed","component-nil-objects-not-allowed",1630110673),(function (_,p__74148,file_data,___$1){
var map__74149 = p__74148;
var map__74149__$1 = cljs.core.__destructure_map(map__74149);
var error = map__74149__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74149__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var repair_component = (function (component){
if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> set :objects {}"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> remove :objects"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"objects","objects",2099713734));
}
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing component :component-nil-objects-not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_component(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(null),file_data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),repair_component);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-text-touched","invalid-text-touched",-603175216),(function (_,p__74151,file_data,___$1){
var map__74152 = p__74151;
var map__74152__$1 = cljs.core.__destructure_map(map__74152);
var error = map__74152__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74152__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74152__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> add :content-group to :touched-groups"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape__$1,new cljs.core.Keyword(null,"touched","touched",-609134419),app.common.types.component.set_touched_group,new cljs.core.Keyword(null,"content-group","content-group",-531031163));
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :invalid-text-touched"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"misplaced-slot","misplaced-slot",-272544637),(function (_,p__74153,file_data,___$1){
var map__74154 = p__74153;
var map__74154__$1 = cljs.core.__destructure_map(map__74154);
var error = map__74154__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74154__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74154__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> remove swap-slot"], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.remove_swap_slot(shape__$1);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :misplaced-slot"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"duplicate-slot","duplicate-slot",1321081054),(function (_,p__74157,file_data,___$1){
var map__74158 = p__74157;
var map__74158__$1 = cljs.core.__destructure_map(map__74158);
var error = map__74158__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74158__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74158__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var page = app.common.types.pages_list.get_page(file_data,page_id);
var childs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74156_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),p1__74156_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
var child_with_duplicate = (function (){var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__74160,item){
var vec__74161 = p__74160;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74161,(0),null);
var duplicates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74161,(1),null);
var swap_slot = app.common.types.component.get_swap_slot(item);
if(cljs.core.contains_QMARK_(seen,swap_slot)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(duplicates,item)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,swap_slot),duplicates], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),childs);
return cljs.core.second(result);
})();
var repair_shape = (function (shape__$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"  -> remove swap-slot"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-id","child-id",1325542429),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.remove_swap_slot(shape__$1);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :duplicated-slot"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),child_with_duplicate),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"component-duplicate-slot","component-duplicate-slot",-981521019),(function (_,p__74167,file_data,___$1){
var map__74168 = p__74167;
var map__74168__$1 = cljs.core.__destructure_map(map__74168);
var error = map__74168__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74168__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var main_shape = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(shape)], null));
var childs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74165_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(shape),p1__74165_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(main_shape));
var childs_with_duplicate = (function (){var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__74169,item){
var vec__74170 = p__74169;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74170,(0),null);
var duplicates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74170,(1),null);
var swap_slot = app.common.types.component.get_swap_slot(item);
if(cljs.core.contains_QMARK_(seen,swap_slot)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(duplicates,item)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,swap_slot),duplicates], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),childs);
return cljs.core.second(result);
})();
var duplicated_ids = cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),childs_with_duplicate));
var repair_component = (function (component){
var objects = cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.contains_QMARK_(duplicated_ids,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,app.common.types.component.remove_swap_slot(v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,new cljs.core.Keyword(null,"objects","objects",2099713734),objects);
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing component :component-duplicated-slot"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_component(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(null),file_data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),repair_component);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"missing-slot","missing-slot",-1465143531),(function (_,p__74173,file_data,___$1){
var map__74174 = p__74173;
var map__74174__$1 = cljs.core.__destructure_map(map__74174);
var error = map__74174__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74174__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74174__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74174__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var repair_shape = (function (shape__$1){
var slot = new cljs.core.Keyword(null,"swap-slot","swap-slot",-1698060244).cljs$core$IFn$_invoke$arity$1(args);
if((!((slot == null)))){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),["  -> set swap-slot to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.types.component.set_swap_slot(shape__$1,slot);
} else {
return null;
}
});
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing shape :missing-slot"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(null,page_id),file_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),repair_shape);
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not-a-variant","not-a-variant",596614706),(function (_,error,file,___$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Variant error code, we don't want to auto repair it for now"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return file;
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-variant-id","invalid-variant-id",1217967624),(function (_,error,file,___$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Variant error code, we don't want to auto repair it for now"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return file;
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-variant-properties","invalid-variant-properties",128877781),(function (_,error,file,___$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Variant error code, we don't want to auto repair it for now"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return file;
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"variant-not-main","variant-not-main",-1470670810),(function (_,error,file,___$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Variant error code, we don't want to auto repair it for now"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return file;
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"parent-not-variant","parent-not-variant",-2092115268),(function (_,error,file,___$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Variant error code, we don't want to auto repair it for now"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return file;
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"variant-bad-name","variant-bad-name",1075263625),(function (_,error,file,___$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Variant error code, we don't want to auto repair it for now"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return file;
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"variant-bad-variant-name","variant-bad-variant-name",-995497356),(function (_,error,file,___$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Variant error code, we don't want to auto repair it for now"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return file;
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"variant-component-bad-name","variant-component-bad-name",550703572),(function (_,error,file,___$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Variant error code, we don't want to auto repair it for now"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return file;
}));
app.common.files.repair.repair_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,error,file,___$1){
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"Unknown error code, don't know how to repair"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return file;
}));
app.common.files.repair.repair_file = (function app$common$files$repair$repair_file(p__74182,libraries,errors){
var map__74183 = p__74182;
var map__74183__$1 = cljs.core.__destructure_map(map__74183);
var file = map__74183__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74183__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74183__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(app.common.logging.enabled_QMARK_("app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"repairing file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.count(errors)], null)], null);
}),null)),null,null,"app.common.files.repair",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


var map__74184 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes,error){
return app.common.files.changes_builder.concat_changes(changes,app.common.files.repair.repair_error.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error),error,data,libraries));
}),app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(null),errors);
var map__74184__$1 = cljs.core.__destructure_map(map__74184);
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74184__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
return redo_changes;
});

//# sourceMappingURL=app.common.files.repair.js.map
