import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.common.schema.js";
import "./app.common.types.component.js";
import "./app.common.types.file.js";
import "./app.common.types.path.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.tokens_lib.js";
import "./app.common.uuid.js";
import "./clojure.datafy.js";
goog.provide('app.common.files.changes_builder');
app.common.files.changes_builder.schema_COLON_changes = app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"changes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.seq_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.common.schema","type","app.common.schema/type",-418801773),new cljs.core.Keyword("app.common.files.changes-builder","changes","app.common.files.changes-builder/changes",-1192369556)], null)));
app.common.files.changes_builder.check_changes = app.common.schema.check_fn(app.common.files.changes_builder.schema_COLON_changes);
app.common.files.changes_builder.empty_changes = (function app$common$files$changes_builder$empty_changes(var_args){
var G__55573 = arguments.length;
switch (G__55573) {
case 2:
return app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 0:
return app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2 = (function (origin,page_id){
var changes = app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(origin);
return cljs.core.with_meta(changes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764),page_id], null));
}));

(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.List.EMPTY], null);
}));

(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1 = (function (origin){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"origin","origin",1037372088),origin], null);
}));

(app.common.files.changes_builder.empty_changes.cljs$lang$maxFixedArity = 2);

app.common.files.changes_builder.set_save_undo_QMARK_ = (function app$common$files$changes_builder$set_save_undo_QMARK_(changes,save_undo_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),save_undo_QMARK_);
});
app.common.files.changes_builder.set_stack_undo_QMARK_ = (function app$common$files$changes_builder$set_stack_undo_QMARK_(changes,stack_undo_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),stack_undo_QMARK_);
});
app.common.files.changes_builder.set_undo_group = (function app$common$files$changes_builder$set_undo_group(changes,undo_group){
var G__55575 = changes;
if((!((undo_group == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55575,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),undo_group);
} else {
return G__55575;
}
});
app.common.files.changes_builder.with_page = (function app$common$files$changes_builder$with_page(changes,page){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(changes,cljs.core.assoc,new cljs.core.Keyword("app.common.files.changes-builder","page","app.common.files.changes-builder/page",-623448303),page,new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page));
});
app.common.files.changes_builder.with_page_id = (function app$common$files$changes_builder$with_page_id(changes,page_id){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(changes,cljs.core.assoc,new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764),page_id);
});
app.common.files.changes_builder.with_container = (function app$common$files$changes_builder$with_container(changes,container){
if(app.common.files.helpers.page_QMARK_(container)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(changes,cljs.core.assoc,new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(changes,cljs.core.assoc,new cljs.core.Keyword("app.common.files.changes-builder","component-id","app.common.files.changes-builder/component-id",1959593011),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container));
}
});
app.common.files.changes_builder.with_objects = (function app$common$files$changes_builder$with_objects(changes,objects){
var fdata = app.common.types.file.make_file_data.cljs$core$IFn$_invoke$arity$2(app.common.uuid.next(),app.common.uuid.zero);
var fdata__$1 = cljs.core.assoc_in(fdata,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),app.common.uuid.zero,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),objects);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(changes,cljs.core.assoc,new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875),fdata__$1,new cljs.core.Keyword("app.common.files.changes-builder","applied-changes-count","app.common.files.changes-builder/applied-changes-count",-1830540901),(0));
});
app.common.files.changes_builder.with_file_data = (function app$common$files$changes_builder$with_file_data(changes,fdata){
var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var fdata__$1 = cljs.core.assoc_in(fdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),app.common.uuid.zero], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null)));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(changes,cljs.core.assoc,new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875),fdata__$1,new cljs.core.Keyword("app.common.files.changes-builder","applied-changes-count","app.common.files.changes-builder/applied-changes-count",-1830540901),(0));
});
app.common.files.changes_builder.with_library_data = (function app$common$files$changes_builder$with_library_data(changes,data){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(changes,cljs.core.assoc,new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329),data);
});
/**
 * Modify the last redo-changes added with an update function.
 */
app.common.files.changes_builder.amend_last_change = (function app$common$files$changes_builder$amend_last_change(changes,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),(function (p1__55576_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(p1__55576_SHARP_),(function (){var G__55577 = cljs.core.peek(p1__55576_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55577) : f.call(null,G__55577));
})());
}));
});
/**
 * Modify all redo-changes with an update function.
 */
app.common.files.changes_builder.amend_changes = (function app$common$files$changes_builder$amend_changes(changes,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),(function (p1__55578_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,p1__55578_SHARP_);
}));
});
app.common.files.changes_builder.concat_changes = (function app$common$files$changes_builder$concat_changes(changes1,changes2){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),app.common.data.concat_vec,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes2)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),(function (p1__55580_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692).cljs$core$IFn$_invoke$arity$1(changes2),p1__55580_SHARP_);
}));
});
app.common.files.changes_builder.assert_page_id_BANG_ = (function app$common$files$changes_builder$assert_page_id_BANG_(changes){
if(cljs.core.contains_QMARK_(cljs.core.meta(changes),new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764))){
return null;
} else {
throw (new Error(["Assert failed: ","Give a page-id or call (with-page) before using this function","\n","(contains? (meta changes) :app.common.files.changes-builder/page-id)"].join('')));
}
});
app.common.files.changes_builder.assert_page_BANG_ = (function app$common$files$changes_builder$assert_page_BANG_(changes){
if(cljs.core.contains_QMARK_(cljs.core.meta(changes),new cljs.core.Keyword("app.common.files.changes-builder","page","app.common.files.changes-builder/page",-623448303))){
return null;
} else {
throw (new Error(["Assert failed: ","Give a page or call (with-page) before using this function","\n","(contains? (meta changes) :app.common.files.changes-builder/page)"].join('')));
}
});
app.common.files.changes_builder.assert_container_id_BANG_ = (function app$common$files$changes_builder$assert_container_id_BANG_(changes){
if(((cljs.core.contains_QMARK_(cljs.core.meta(changes),new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764))) || (cljs.core.contains_QMARK_(cljs.core.meta(changes),new cljs.core.Keyword("app.common.files.changes-builder","component-id","app.common.files.changes-builder/component-id",1959593011))))){
return null;
} else {
throw (new Error(["Assert failed: ","Give a page-id or call (with-container) before using this function","\n","(or (contains? (meta changes) :app.common.files.changes-builder/page-id) (contains? (meta changes) :app.common.files.changes-builder/component-id))"].join('')));
}
});
app.common.files.changes_builder.assert_objects_BANG_ = (function app$common$files$changes_builder$assert_objects_BANG_(changes){
if(cljs.core.contains_QMARK_(cljs.core.meta(changes),new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875))){
return null;
} else {
throw (new Error(["Assert failed: ","Call (with-objects) before using this function","\n","(contains? (meta changes) :app.common.files.changes-builder/file-data)"].join('')));
}
});
app.common.files.changes_builder.assert_library_BANG_ = (function app$common$files$changes_builder$assert_library_BANG_(changes){
if(cljs.core.contains_QMARK_(cljs.core.meta(changes),new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329))){
return null;
} else {
throw (new Error(["Assert failed: ","Call (with-library-data) before using this function","\n","(contains? (meta changes) :app.common.files.changes-builder/library-data)"].join('')));
}
});
app.common.files.changes_builder.assert_file_data_BANG_ = (function app$common$files$changes_builder$assert_file_data_BANG_(changes){
if(cljs.core.contains_QMARK_(cljs.core.meta(changes),new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875))){
return null;
} else {
throw (new Error(["Assert failed: ","Call (with-file-data) before using this function","\n","(contains? (meta changes) :app.common.files.changes-builder/file-data)"].join('')));
}
});
app.common.files.changes_builder.lookup_objects = (function app$common$files$changes_builder$lookup_objects(changes){
var data = new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),app.common.uuid.zero),new cljs.core.Keyword(null,"objects","objects",2099713734));
});
app.common.files.changes_builder.apply_changes_local = (function app$common$files$changes_builder$apply_changes_local(var_args){
var args__5755__auto__ = [];
var len__5749__auto___55897 = arguments.length;
var i__5750__auto___55898 = (0);
while(true){
if((i__5750__auto___55898 < len__5749__auto___55897)){
args__5755__auto__.push((arguments[i__5750__auto___55898]));

var G__55899 = (i__5750__auto___55898 + (1));
i__5750__auto___55898 = G__55899;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.files.changes_builder.apply_changes_local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.files.changes_builder.apply_changes_local.cljs$core$IFn$_invoke$arity$variadic = (function (changes,p__55586){
var map__55587 = p__55586;
var map__55587__$1 = cljs.core.__destructure_map(map__55587);
var apply_to_library_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55587__$1,new cljs.core.Keyword(null,"apply-to-library?","apply-to-library?",-440115882));
if(cljs.core.truth_(app.common.files.changes_builder.check_changes(changes))){
} else {
throw (new Error(["Assert failed: ","expected valid changes","\n","(check-changes changes)"].join('')));
}

var temp__5823__auto__ = new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
if(cljs.core.truth_(temp__5823__auto__)){
var file_data = temp__5823__auto__;
var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var index = new cljs.core.Keyword("app.common.files.changes-builder","applied-changes-count","app.common.files.changes-builder/applied-changes-count",-1830540901).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var redo_changes = new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes);
var new_changes = (((index < cljs.core.count(redo_changes)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55583_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55583_SHARP_,new cljs.core.Keyword(null,"page-id","page-id",-872941168),app.common.uuid.zero),new cljs.core.Keyword(null,"component-id","component-id",1551113783));
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes),index)):cljs.core.PersistentVector.EMPTY);
var new_file_data = app.common.files.changes.process_changes.cljs$core$IFn$_invoke$arity$2(file_data,new_changes);
var new_library_data = (cljs.core.truth_(apply_to_library_QMARK_)?app.common.files.changes.process_changes.cljs$core$IFn$_invoke$arity$2(library_data,new_changes):library_data);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$variadic(changes,cljs.core.assoc,new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875),new_file_data,new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329),new_library_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.common.files.changes-builder","applied-changes-count","app.common.files.changes-builder/applied-changes-count",-1830540901),cljs.core.count(redo_changes)], 0));
} else {
return changes;
}
}));

(app.common.files.changes_builder.apply_changes_local.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.files.changes_builder.apply_changes_local.cljs$lang$applyTo = (function (seq55584){
var G__55585 = cljs.core.first(seq55584);
var seq55584__$1 = cljs.core.next(seq55584);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55585,seq55584__$1);
}));

app.common.files.changes_builder.add_empty_page = (function app$common$files$changes_builder$add_empty_page(changes,id,name){
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-page","add-page",304111762),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-page","del-page",-1821214846),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));
});
app.common.files.changes_builder.add_page = (function app$common$files$changes_builder$add_page(changes,id,page){
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-page","add-page",304111762),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"page","page",849072397),page], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-page","del-page",-1821214846),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));
});
app.common.files.changes_builder.mod_page = (function app$common$files$changes_builder$mod_page(var_args){
var G__55593 = arguments.length;
switch (G__55593) {
case 2:
return app.common.files.changes_builder.mod_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.files.changes_builder.mod_page.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.changes_builder.mod_page.cljs$core$IFn$_invoke$arity$2 = (function (changes,options){
app.common.files.changes_builder.assert_page_BANG_(changes);

var page = new cljs.core.Keyword("app.common.files.changes-builder","page","app.common.files.changes-builder/page",-623448303).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
return app.common.files.changes_builder.mod_page.cljs$core$IFn$_invoke$arity$3(changes,page,options);
}));

(app.common.files.changes_builder.mod_page.cljs$core$IFn$_invoke$arity$3 = (function (changes,page,p__55594){
var map__55595 = p__55594;
var map__55595__$1 = cljs.core.__destructure_map(map__55595);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55595__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55595__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var change = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-page","mod-page",1847006799),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page)], null);
var redo = (function (){var G__55596 = change;
var G__55596__$1 = (((!((name == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55596,new cljs.core.Keyword(null,"name","name",1843675177),name):G__55596);
if((!((background == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55596__$1,new cljs.core.Keyword(null,"background","background",-863952629),background);
} else {
return G__55596__$1;
}
})();
var undo = (function (){var G__55597 = change;
var G__55597__$1 = (((!((name == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55597,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page)):G__55597);
if((!((background == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55597__$1,new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(page));
} else {
return G__55597__$1;
}
})();
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,redo),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,undo));
}));

(app.common.files.changes_builder.mod_page.cljs$lang$maxFixedArity = 3);

app.common.files.changes_builder.set_plugin_data = (function app$common$files$changes_builder$set_plugin_data(var_args){
var G__55601 = arguments.length;
switch (G__55601) {
case 4:
return app.common.files.changes_builder.set_plugin_data.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return app.common.files.changes_builder.set_plugin_data.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return app.common.files.changes_builder.set_plugin_data.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.changes_builder.set_plugin_data.cljs$core$IFn$_invoke$arity$4 = (function (changes,namespace,key,value){
return app.common.files.changes_builder.set_plugin_data.cljs$core$IFn$_invoke$arity$7(changes,new cljs.core.Keyword(null,"file","file",-1269645878),null,null,namespace,key,value);
}));

(app.common.files.changes_builder.set_plugin_data.cljs$core$IFn$_invoke$arity$6 = (function (changes,type,id,namespace,key,value){
return app.common.files.changes_builder.set_plugin_data.cljs$core$IFn$_invoke$arity$7(changes,type,id,null,namespace,key,value);
}));

(app.common.files.changes_builder.set_plugin_data.cljs$core$IFn$_invoke$arity$7 = (function (changes,type,id,page_id,namespace,key,value){
app.common.files.changes_builder.assert_file_data_BANG_(changes);

var data = new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var old_val = (function (){var G__55606 = type;
var G__55606__$1 = (((G__55606 instanceof cljs.core.Keyword))?G__55606.fqn:null);
switch (G__55606__$1) {
case "file":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),namespace),key);

break;
case "page":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),id),new cljs.core.Keyword(null,"options","options",99638489)),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),namespace),key);

break;
case "shape":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),page_id),new cljs.core.Keyword(null,"objects","objects",2099713734)),id),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),namespace),key);

break;
case "color":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"colors","colors",1157174732)),id),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),namespace),key);

break;
case "typography":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"typographies","typographies",-482095730)),id),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),namespace),key);

break;
case "component":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"components","components",-1073188942)),id),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),namespace),key);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55606__$1)].join('')));

}
})();
var redo_change = (function (){var G__55608 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-plugin-data","set-plugin-data",379252905),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),type,new cljs.core.Keyword(null,"namespace","namespace",-377510372),namespace,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var G__55608__$1 = ((cljs.core.uuid_QMARK_(id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55608,new cljs.core.Keyword(null,"object-id","object-id",-754527291),id):G__55608);
if(cljs.core.uuid_QMARK_(page_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55608__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id);
} else {
return G__55608__$1;
}
})();
var undo_change = (function (){var G__55610 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-plugin-data","set-plugin-data",379252905),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),type,new cljs.core.Keyword(null,"namespace","namespace",-377510372),namespace,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),old_val], null);
var G__55610__$1 = ((cljs.core.uuid_QMARK_(id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55610,new cljs.core.Keyword(null,"object-id","object-id",-754527291),id):G__55610);
if(cljs.core.uuid_QMARK_(page_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55610__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id);
} else {
return G__55610__$1;
}
})();
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,redo_change),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,undo_change));
}));

(app.common.files.changes_builder.set_plugin_data.cljs$lang$maxFixedArity = 7);

app.common.files.changes_builder.del_page = (function app$common$files$changes_builder$del_page(changes,page){
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-page","del-page",-1821214846),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page)], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-page","add-page",304111762),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"page","page",849072397),page], null)));
});
app.common.files.changes_builder.move_page = (function app$common$files$changes_builder$move_page(changes,page_id,index,prev_index){
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mov-page","mov-page",799279210),new cljs.core.Keyword(null,"id","id",-1388402092),page_id,new cljs.core.Keyword(null,"index","index",-1531685915),index], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mov-page","mov-page",799279210),new cljs.core.Keyword(null,"id","id",-1388402092),page_id,new cljs.core.Keyword(null,"index","index",-1531685915),prev_index], null)));
});
app.common.files.changes_builder.set_guide = (function app$common$files$changes_builder$set_guide(changes,id,guide){
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_page_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var page = new cljs.core.Keyword("app.common.files.changes-builder","page","app.common.files.changes-builder/page",-623448303).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var old_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"guides","guides",-1398390510)),id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-guide","set-guide",-793086394),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"params","params",710516235),guide], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-guide","set-guide",-793086394),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"params","params",710516235),old_val], null));
});
app.common.files.changes_builder.set_flow = (function app$common$files$changes_builder$set_flow(changes,id,flow){
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_page_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var page = new cljs.core.Keyword("app.common.files.changes-builder","page","app.common.files.changes-builder/page",-623448303).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var old_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"flows","flows",-1369576628)),id);
var changes__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-flow","set-flow",-468241463),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"params","params",710516235),flow], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-flow","set-flow",-468241463),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"params","params",710516235),old_val], null));
return app.common.files.changes_builder.apply_changes_local(changes__$1);
});
app.common.files.changes_builder.set_comment_thread_position = (function app$common$files$changes_builder$set_comment_thread_position(changes,p__55617){
var map__55620 = p__55617;
var map__55620__$1 = cljs.core.__destructure_map(map__55620);
var thread = map__55620__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55620__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55620__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55620__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_page_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var page = new cljs.core.Keyword("app.common.files.changes-builder","page","app.common.files.changes-builder/page",-623448303).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var old_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078)),id);
var changes__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-comment-thread-position","set-comment-thread-position",1716614827),new cljs.core.Keyword(null,"comment-thread-id","comment-thread-id",239314476),id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,new cljs.core.Keyword(null,"position","position",-2011731912),position], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-comment-thread-position","set-comment-thread-position",1716614827),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"comment-thread-id","comment-thread-id",239314476),id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(old_val),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(old_val)], null));
return app.common.files.changes_builder.apply_changes_local(changes__$1);
});
app.common.files.changes_builder.set_default_grid = (function app$common$files$changes_builder$set_default_grid(changes,type,params){
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_page_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var page = new cljs.core.Keyword("app.common.files.changes-builder","page","app.common.files.changes-builder/page",-623448303).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var old_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"grids","grids",44187194)),type);
var changes__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-default-grid","set-default-grid",-1968413784),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"grid-type","grid-type",2068412029),type,new cljs.core.Keyword(null,"params","params",710516235),params], null));
var changes__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-default-grid","set-default-grid",-1968413784),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"grid-type","grid-type",2068412029),type,new cljs.core.Keyword(null,"params","params",710516235),old_val], null));
return app.common.files.changes_builder.apply_changes_local(changes__$2);
});
app.common.files.changes_builder.add_object = (function app$common$files$changes_builder$add_object(var_args){
var G__55637 = arguments.length;
switch (G__55637) {
case 2:
return app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$2 = (function (changes,obj){
return app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(changes,obj,null);
}));

(app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3 = (function (changes,obj,p__55648){
var map__55649 = p__55648;
var map__55649__$1 = cljs.core.__destructure_map(map__55649);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55649__$1,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("app.common.files.changes-builder","undefined","app.common.files.changes-builder/undefined",-486440736));
var ignore_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55649__$1,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),false);
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_objects_BANG_(changes);

var obj__$1 = (function (){var G__55657 = obj;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,new cljs.core.Keyword("app.common.files.changes-builder","undefined","app.common.files.changes-builder/undefined",-486440736))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55657,new cljs.core.Keyword("app.common.files.changes-builder","index","app.common.files.changes-builder/index",1293712905),index);
} else {
return G__55657;
}
})();
var objects = app.common.files.changes_builder.lookup_objects(changes);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj__$1));
var add_change = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj__$1),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes)),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj__$1),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(obj__$1),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("app.common.files.changes-builder","index","app.common.files.changes-builder/index",1293712905).cljs$core$IFn$_invoke$arity$1(obj__$1),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),ignore_touched,new cljs.core.Keyword(null,"obj","obj",981763962),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(obj__$1,new cljs.core.Keyword("app.common.files.changes-builder","index","app.common.files.changes-builder/index",1293712905))], null);
var del_change = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj__$1),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes))], null);
var restore_touched_change = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(parent)], null)], null)], null);
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4((function (){var G__55660 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,add_change);
if(((app.common.types.component.in_component_copy_QMARK_(parent)) && (cljs.core.not(ignore_touched)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__55660,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,restore_touched_change);
} else {
return G__55660;
}
})(),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,del_change));
}));

(app.common.files.changes_builder.add_object.cljs$lang$maxFixedArity = 3);

app.common.files.changes_builder.add_objects = (function app$common$files$changes_builder$add_objects(var_args){
var G__55664 = arguments.length;
switch (G__55664) {
case 2:
return app.common.files.changes_builder.add_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.files.changes_builder.add_objects.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.changes_builder.add_objects.cljs$core$IFn$_invoke$arity$2 = (function (changes,objects){
return app.common.files.changes_builder.add_objects.cljs$core$IFn$_invoke$arity$3(changes,objects,null);
}));

(app.common.files.changes_builder.add_objects.cljs$core$IFn$_invoke$arity$3 = (function (changes,objects,params){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__55661_SHARP_,p2__55662_SHARP_){
return app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(p1__55661_SHARP_,p2__55662_SHARP_,params);
}),changes,objects);
}));

(app.common.files.changes_builder.add_objects.cljs$lang$maxFixedArity = 3);

app.common.files.changes_builder.change_parent = (function app$common$files$changes_builder$change_parent(var_args){
var G__55667 = arguments.length;
switch (G__55667) {
case 3:
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$3 = (function (changes,parent_id,shapes){
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$5(changes,parent_id,shapes,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4 = (function (changes,parent_id,shapes,index){
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$5(changes,parent_id,shapes,index,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$5 = (function (changes,parent_id,shapes,index,options){
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_objects_BANG_(changes);

var objects = app.common.files.changes_builder.lookup_objects(changes);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var set_parent_change = (function (){var G__55672 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes)),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.reverse(shapes))], null);
var G__55672__$1 = (((!((index == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55672,new cljs.core.Keyword(null,"index","index",-1531685915),index):G__55672);
var G__55672__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967).cljs$core$IFn$_invoke$arity$1(options))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55672__$1,new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true):G__55672__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55672__$2,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true);
} else {
return G__55672__$2;
}
})();
var mk_undo_change = (function (undo_changes,shape){
var prev_sibling = app.common.files.helpers.get_prev_sibling(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(undo_changes,(function (){var G__55675 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes)),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.Keyword(null,"after-shape","after-shape",2054601304),prev_sibling,new cljs.core.Keyword(null,"index","index",-1531685915),(0)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55675,new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true);
} else {
return G__55675;
}
})());
});
var restore_touched_change = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(parent)], null)], null)], null);
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__55676 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,set_parent_change);
if(app.common.types.component.in_component_copy_QMARK_(parent)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__55676,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,restore_touched_change);
} else {
return G__55676;
}
})(),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),(function (p1__55665_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mk_undo_change,p1__55665_SHARP_,shapes);
})));
}));

(app.common.files.changes_builder.change_parent.cljs$lang$maxFixedArity = 5);

/**
 * Returns the list of attributes that will change when `update-fn` is applied
 */
app.common.files.changes_builder.changed_attrs = (function app$common$files$changes_builder$changed_attrs(object,objects,update_fn,p__55677){
var map__55678 = p__55677;
var map__55678__$1 = cljs.core.__destructure_map(map__55678);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var with_objects_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55678__$1,new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428));
var changed_QMARK_ = (function (old,new$,attr){
var old_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,attr);
var new_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new$,attr);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_val,new_val);
});
var new_obj = (cljs.core.truth_(with_objects_QMARK_)?(update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(object,objects) : update_fn.call(null,object,objects)):(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(object) : update_fn.call(null,object)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(object,new_obj)){
return null;
} else {
var attrs__$1 = (function (){var or__5025__auto__ = attrs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.data.concat_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(object),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keys(new_obj)], 0));
}
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(changed_QMARK_,object,new_obj),attrs__$1);
}
});
/**
 * Calculate the changes and undos to be done when a function is applied to a
 *   single object
 */
app.common.files.changes_builder.update_shapes = (function app$common$files$changes_builder$update_shapes(var_args){
var G__55682 = arguments.length;
switch (G__55682) {
case 3:
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3 = (function (changes,ids,update_fn){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(changes,ids,update_fn,null);
}));

(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4 = (function (changes,ids,update_fn,p__55683){
var map__55684 = p__55683;
var map__55684__$1 = cljs.core.__destructure_map(map__55684);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var ignore_geometry_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55684__$1,new cljs.core.Keyword(null,"ignore-geometry?","ignore-geometry?",836794794),false);
var ignore_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55684__$1,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),false);
var with_objects_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55684__$1,new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),false);
app.common.files.changes_builder.assert_container_id_BANG_(changes);

app.common.files.changes_builder.assert_objects_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var component_id = new cljs.core.Keyword("app.common.files.changes-builder","component-id","app.common.files.changes-builder/component-id",1959593011).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var objects = app.common.files.changes_builder.lookup_objects(changes);
var generate_operations = (function (attrs__$1,old,new$){
var rops = cljs.core.PersistentVector.EMPTY;
var uops = cljs.core.List.EMPTY;
var attrs__$2 = cljs.core.seq(attrs__$1);
while(true){
var temp__5823__auto__ = cljs.core.first(attrs__$2);
if(cljs.core.truth_(temp__5823__auto__)){
var attr = temp__5823__auto__;
var old_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,attr);
var new_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new$,attr);
var changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_val,new_val);
var rops__$1 = (function (){var G__55692 = rops;
if(changed_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55692,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"val","val",128701612),new_val,new cljs.core.Keyword(null,"ignore-geometry","ignore-geometry",1630780695),ignore_geometry_QMARK_,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),ignore_touched], null));
} else {
return G__55692;
}
})();
var uops__$1 = (function (){var G__55694 = uops;
if(changed_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55694,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"val","val",128701612),old_val,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
} else {
return G__55694;
}
})();
var G__55943 = rops__$1;
var G__55944 = uops__$1;
var G__55945 = cljs.core.rest(attrs__$2);
rops = G__55943;
uops = G__55944;
attrs__$2 = G__55945;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rops,uops], null);
}
break;
}
});
var update_shape = (function (changes__$1,id){
var old_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var new_obj = (cljs.core.truth_(with_objects_QMARK_)?(update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(old_obj,objects) : update_fn.call(null,old_obj,objects)):(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(old_obj) : update_fn.call(null,old_obj)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_obj,new_obj)){
return changes__$1;
} else {
var vec__55699 = generate_operations((function (){var or__5025__auto__ = attrs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.data.concat_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(old_obj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keys(new_obj)], 0));
}
})(),old_obj,new_obj);
var rops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55699,(0),null);
var uops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55699,(1),null);
var uops__$1 = (function (){var G__55702 = uops;
if(cljs.core.seq(uops)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55702,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(old_obj)], null));
} else {
return G__55702;
}
})();
var change = (function (){var G__55703 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
var G__55703__$1 = (((!((page_id == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55703,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id):G__55703);
if((!((component_id == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55703__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id);
} else {
return G__55703__$1;
}
})();
var G__55704 = changes__$1;
var G__55704__$1 = ((cljs.core.seq(rops))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__55704,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(change,new cljs.core.Keyword(null,"operations","operations",1630691895),rops)):G__55704);
if(cljs.core.seq(uops__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__55704__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(change,new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.vec(uops__$1)));
} else {
return G__55704__$1;
}
}
});
return app.common.files.changes_builder.apply_changes_local(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_shape,changes,ids));
}));

(app.common.files.changes_builder.update_shapes.cljs$lang$maxFixedArity = 4);

app.common.files.changes_builder.remove_objects = (function app$common$files$changes_builder$remove_objects(var_args){
var G__55711 = arguments.length;
switch (G__55711) {
case 2:
return app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2 = (function (changes,ids){
return app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$3(changes,ids,null);
}));

(app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$3 = (function (changes,ids,p__55716){
var map__55717 = p__55716;
var map__55717__$1 = cljs.core.__destructure_map(map__55717);
var ignore_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55717__$1,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),false);
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_objects_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var objects = app.common.files.changes_builder.lookup_objects(changes);
var add_redo_change = (function (change_set,id){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(change_set,(function (){var G__55721 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
if(cljs.core.truth_(ignore_touched)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55721,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true);
} else {
return G__55721;
}
})());
});
var add_undo_change_shape = (function (change_set,id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(change_set,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"index","index",-1531685915),app.common.files.helpers.get_position_on_parent(objects,id),new cljs.core.Keyword(null,"obj","obj",981763962),(function (){var G__55722 = shape;
if(cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"shapes","shapes",1897594879))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55722,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY);
} else {
return G__55722;
}
})()], null));
});
var add_undo_change_parent = (function (change_set,id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var prev_sibling = app.common.files.helpers.get_prev_sibling(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(change_set,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.Keyword(null,"after-shape","after-shape",2054601304),prev_sibling,new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
});
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),(function (p1__55707_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_redo_change,p1__55707_SHARP_,ids);
})),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),(function (p1__55708_SHARP_){
var $ = p1__55708_SHARP_;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_undo_change_parent,$,ids);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_undo_change_shape,$__$1,ids);
})));
}));

(app.common.files.changes_builder.remove_objects.cljs$lang$maxFixedArity = 3);

app.common.files.changes_builder.resize_parents = (function app$common$files$changes_builder$resize_parents(changes,ids){
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_objects_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var objects = app.common.files.changes_builder.lookup_objects(changes);
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__55725_SHARP_){
return cljs.core.cons(p1__55725_SHARP_,app.common.files.helpers.get_parent_ids(objects,p1__55725_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__55726_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"bool","bool",1444635321),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__55726_SHARP_));
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0));
var all_parents = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(xform,ids);
var generate_operation = (function (operations,attr,old,new$){
var old_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,attr);
var new_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new$,attr);
var equal_QMARK_ = ((((typeof old_val === 'number') && (typeof new_val === 'number')))?app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(old_val,new_val):((((app.common.geom.matrix.matrix_QMARK_(old_val)) && (app.common.geom.matrix.matrix_QMARK_(new_val))))?app.common.geom.matrix.close_QMARK_(old_val,new_val):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"points","points",-1486596883)))?cljs.core.every_QMARK_((function (p1__55727_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.point.close_QMARK_,p1__55727_SHARP_);
}),app.common.data.zip(old_val,new_val)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"selrect","selrect",1966287292)))?app.common.geom.rect.close_rect_QMARK_(old_val,new_val):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_val,new_val)
))));
if(cljs.core.truth_(equal_QMARK_)){
return operations;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(operations,new cljs.core.Keyword(null,"rops","rops",-1261038322),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"val","val",128701612),new_val,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)),new cljs.core.Keyword(null,"uops","uops",-1510697393),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"val","val",128701612),old_val,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
}
});
var resize_parent = (function (changes__$1,parent){
var objects__$1 = app.common.files.changes_builder.lookup_objects(changes__$1);
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects__$1),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent));
var resized_parent = ((cljs.core.empty_QMARK_(children))?null:((app.common.files.helpers.bool_shape_QMARK_(parent))?app.common.types.path.update_bool_shape(parent,objects__$1):((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))?(cljs.core.truth_(new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(parent))?app.common.geom.shapes.update_mask_selrect(parent,children):app.common.geom.shapes.update_group_selrect(parent,children)):null)));
if(cljs.core.truth_(resized_parent)){
var map__55733 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__55728_SHARP_,p2__55729_SHARP_){
return generate_operation(p1__55728_SHARP_,p2__55729_SHARP_,parent,resized_parent);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rops","rops",-1261038322),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"uops","uops",-1510697393),cljs.core.PersistentVector.EMPTY], null),cljs.core.keys(parent));
var map__55733__$1 = cljs.core.__destructure_map(map__55733);
var rops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55733__$1,new cljs.core.Keyword(null,"rops","rops",-1261038322));
var uops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55733__$1,new cljs.core.Keyword(null,"uops","uops",-1510697393));
var change = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent)], null);
if(cljs.core.seq(rops)){
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(change,new cljs.core.Keyword(null,"operations","operations",1630691895),rops)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(change,new cljs.core.Keyword(null,"operations","operations",1630691895),uops)));
} else {
return changes__$1;
}
} else {
return changes__$1;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(resize_parent,changes,all_parents);
});
app.common.files.changes_builder.add_color = (function app$common$files$changes_builder$add_color(changes,color){
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-color","add-color",2130863672),new cljs.core.Keyword(null,"color","color",1011675173),color], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-color","del-color",-1547350867),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color)], null)));
});
app.common.files.changes_builder.update_color = (function app$common$files$changes_builder$update_color(changes,color){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_color = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color)], null));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-color","mod-color",1087466354),new cljs.core.Keyword(null,"color","color",1011675173),color], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-color","mod-color",1087466354),new cljs.core.Keyword(null,"color","color",1011675173),prev_color], null)));
});
app.common.files.changes_builder.delete_color = (function app$common$files$changes_builder$delete_color(changes,color_id){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_color = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),color_id], null));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-color","del-color",-1547350867),new cljs.core.Keyword(null,"id","id",-1388402092),color_id], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-color","add-color",2130863672),new cljs.core.Keyword(null,"color","color",1011675173),prev_color], null)));
});
app.common.files.changes_builder.add_media = (function app$common$files$changes_builder$add_media(changes,object){
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-media","add-media",1778802009),new cljs.core.Keyword(null,"object","object",1474613949),object], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-media","del-media",-149779060),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)], null)));
});
app.common.files.changes_builder.update_media = (function app$common$files$changes_builder$update_media(changes,object){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_object = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)], null));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-media","mod-media",556146292),new cljs.core.Keyword(null,"object","object",1474613949),object], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-media","mod-media",556146292),new cljs.core.Keyword(null,"object","object",1474613949),prev_object], null)));
});
app.common.files.changes_builder.delete_media = (function app$common$files$changes_builder$delete_media(changes,id){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_object = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media","media",-1066138403),id], null));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-media","del-media",-149779060),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-media","add-media",1778802009),new cljs.core.Keyword(null,"object","object",1474613949),prev_object], null)));
});
app.common.files.changes_builder.add_typography = (function app$common$files$changes_builder$add_typography(changes,typography){
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-typography","add-typography",187539002),new cljs.core.Keyword(null,"typography","typography",-399568138),typography], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-typography","del-typography",553672868),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography)], null)));
});
app.common.files.changes_builder.update_typography = (function app$common$files$changes_builder$update_typography(changes,typography){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_typography = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typographies","typographies",-482095730),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography)], null));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-typography","mod-typography",55947030),new cljs.core.Keyword(null,"typography","typography",-399568138),typography], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-typography","mod-typography",55947030),new cljs.core.Keyword(null,"typography","typography",-399568138),prev_typography], null)));
});
app.common.files.changes_builder.delete_typography = (function app$common$files$changes_builder$delete_typography(changes,typography_id){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_typography = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typographies","typographies",-482095730),typography_id], null));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-typography","del-typography",553672868),new cljs.core.Keyword(null,"id","id",-1388402092),typography_id], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-typography","add-typography",187539002),new cljs.core.Keyword(null,"typography","typography",-399568138),prev_typography], null)));
});
app.common.files.changes_builder.add_component = (function app$common$files$changes_builder$add_component(var_args){
var G__55763 = arguments.length;
switch (G__55763) {
case 7:
return app.common.files.changes_builder.add_component.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return app.common.files.changes_builder.add_component.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___55972 = arguments.length;
var i__5750__auto___55973 = (0);
while(true){
if((i__5750__auto___55973 < len__5749__auto___55972)){
args_arr__5774__auto__.push((arguments[i__5750__auto___55973]));

var G__55974 = (i__5750__auto___55973 + (1));
i__5750__auto___55973 = G__55974;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((10) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((10)),(0),null)):null);
return app.common.files.changes_builder.add_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),argseq__5775__auto__);

}
});

(app.common.files.changes_builder.add_component.cljs$core$IFn$_invoke$arity$7 = (function (changes,id,path,name,updated_shapes,main_instance_id,main_instance_page){
return app.common.files.changes_builder.add_component(changes,id,path,name,updated_shapes,main_instance_id,main_instance_page,null,null,null);
}));

(app.common.files.changes_builder.add_component.cljs$core$IFn$_invoke$arity$8 = (function (changes,id,path,name,updated_shapes,main_instance_id,main_instance_page,annotation){
return app.common.files.changes_builder.add_component(changes,id,path,name,updated_shapes,main_instance_id,main_instance_page,annotation,null,null);
}));

(app.common.files.changes_builder.add_component.cljs$core$IFn$_invoke$arity$variadic = (function (changes,id,path,name,updated_shapes,main_instance_id,main_instance_page,annotation,variant_id,variant_properties,p__55768){
var map__55769 = p__55768;
var map__55769__$1 = cljs.core.__destructure_map(map__55769);
var apply_changes_local_library_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55769__$1,new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630));
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_objects_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var objects = app.common.files.changes_builder.lookup_objects(changes);
var lookupf = app.common.data.getf(objects);
var mk_change = (function (shape){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"component-root","component-root",-485271026),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"main-instance","main-instance",476264761),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape)], null)], null)], null);
});
return app.common.files.changes_builder.apply_changes_local.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),(function (redo_changes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(redo_changes,(function (){var G__55772 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-component","add-component",1053805610),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),main_instance_id,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),main_instance_page,new cljs.core.Keyword(null,"annotation","annotation",-344661666),annotation], null);
var G__55772__$1 = (((!((variant_id == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55772,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),variant_id):G__55772);
if(cljs.core.seq(variant_properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55772__$1,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),variant_properties);
} else {
return G__55772__$1;
}
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$1(mk_change),updated_shapes);
})),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),(function (undo_changes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(undo_changes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-component","del-component",-883241442),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"skip-undelete?","skip-undelete?",2065473489),true], null)),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(lookupf),cljs.core.map.cljs$core$IFn$_invoke$arity$1(mk_change)),updated_shapes);
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-to-library?","apply-to-library?",-440115882),apply_changes_local_library_QMARK_], null)], 0));
}));

/** @this {Function} */
(app.common.files.changes_builder.add_component.cljs$lang$applyTo = (function (seq55751){
var G__55752 = cljs.core.first(seq55751);
var seq55751__$1 = cljs.core.next(seq55751);
var G__55753 = cljs.core.first(seq55751__$1);
var seq55751__$2 = cljs.core.next(seq55751__$1);
var G__55754 = cljs.core.first(seq55751__$2);
var seq55751__$3 = cljs.core.next(seq55751__$2);
var G__55755 = cljs.core.first(seq55751__$3);
var seq55751__$4 = cljs.core.next(seq55751__$3);
var G__55756 = cljs.core.first(seq55751__$4);
var seq55751__$5 = cljs.core.next(seq55751__$4);
var G__55757 = cljs.core.first(seq55751__$5);
var seq55751__$6 = cljs.core.next(seq55751__$5);
var G__55758 = cljs.core.first(seq55751__$6);
var seq55751__$7 = cljs.core.next(seq55751__$6);
var G__55759 = cljs.core.first(seq55751__$7);
var seq55751__$8 = cljs.core.next(seq55751__$7);
var G__55760 = cljs.core.first(seq55751__$8);
var seq55751__$9 = cljs.core.next(seq55751__$8);
var G__55761 = cljs.core.first(seq55751__$9);
var seq55751__$10 = cljs.core.next(seq55751__$9);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55752,G__55753,G__55754,G__55755,G__55756,G__55757,G__55758,G__55759,G__55760,G__55761,seq55751__$10);
}));

(app.common.files.changes_builder.add_component.cljs$lang$maxFixedArity = (10));

app.common.files.changes_builder.update_component = (function app$common$files$changes_builder$update_component(var_args){
var args__5755__auto__ = [];
var len__5749__auto___55982 = arguments.length;
var i__5750__auto___55983 = (0);
while(true){
if((i__5750__auto___55983 < len__5749__auto___55982)){
args__5755__auto__.push((arguments[i__5750__auto___55983]));

var G__55984 = (i__5750__auto___55983 + (1));
i__5750__auto___55983 = G__55984;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.files.changes_builder.update_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.files.changes_builder.update_component.cljs$core$IFn$_invoke$arity$variadic = (function (changes,id,update_fn,p__55777){
var map__55778 = p__55777;
var map__55778__$1 = cljs.core.__destructure_map(map__55778);
var apply_changes_local_library_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55778__$1,new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630));
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_component = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null));
var new_component = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(prev_component) : update_fn.call(null,prev_component));
if(cljs.core.truth_(prev_component)){
var G__55781 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__55783 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"annotation","annotation",-344661666)],[new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new_component),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(new_component),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(new_component),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new_component),new cljs.core.Keyword(null,"mod-component","mod-component",335097879),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(new_component),new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(new_component),id,new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(new_component)]);
var G__55783__$1 = (((!((new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(new_component) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55783,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(new_component)):G__55783);
var G__55783__$2 = (((new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(new_component) == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55783__$1,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270)):G__55783__$1);
var G__55783__$3 = ((cljs.core.seq(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(new_component)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55783__$2,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(new_component)):G__55783__$2);
if(cljs.core.not(cljs.core.seq(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(new_component)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55783__$3,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490));
} else {
return G__55783__$3;
}
})()),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,(function (){var G__55785 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-component","mod-component",335097879),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prev_component),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(prev_component),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(prev_component),new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(prev_component),new cljs.core.Keyword(null,"annotation","annotation",-344661666),new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(prev_component),new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(prev_component)], null);
var G__55785__$1 = (((!((new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(prev_component) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55785,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(prev_component)):G__55785);
var G__55785__$2 = (((new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(prev_component) == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55785__$1,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270)):G__55785__$1);
var G__55785__$3 = ((cljs.core.seq(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(prev_component)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55785__$2,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(prev_component)):G__55785__$2);
if(cljs.core.not(cljs.core.seq(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(prev_component)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55785__$3,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490));
} else {
return G__55785__$3;
}
})());
if(cljs.core.truth_(apply_changes_local_library_QMARK_)){
return app.common.files.changes_builder.apply_changes_local.cljs$core$IFn$_invoke$arity$variadic(G__55781,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-to-library?","apply-to-library?",-440115882),true], null)], 0));
} else {
return G__55781;
}
} else {
return changes;
}
}));

(app.common.files.changes_builder.update_component.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.files.changes_builder.update_component.cljs$lang$applyTo = (function (seq55773){
var G__55774 = cljs.core.first(seq55773);
var seq55773__$1 = cljs.core.next(seq55773);
var G__55775 = cljs.core.first(seq55773__$1);
var seq55773__$2 = cljs.core.next(seq55773__$1);
var G__55776 = cljs.core.first(seq55773__$2);
var seq55773__$3 = cljs.core.next(seq55773__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55774,G__55775,G__55776,seq55773__$3);
}));

app.common.files.changes_builder.delete_component = (function app$common$files$changes_builder$delete_component(changes,id,page_id){
app.common.files.changes_builder.assert_library_BANG_(changes);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-component","del-component",-883241442),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restore-component","restore-component",-354059544),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null));
});
app.common.files.changes_builder.restore_component = (function app$common$files$changes_builder$restore_component(changes,id,page_id,delta){
app.common.files.changes_builder.assert_library_BANG_(changes);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"restore-component","restore-component",-354059544),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-component","del-component",-883241442),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"delta","delta",108939957),delta], null));
});
app.common.files.changes_builder.set_tokens_lib = (function app$common$files$changes_builder$set_tokens_lib(changes,tokens_lib){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_tokens_lib = cljs.core.get.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-tokens-lib","set-tokens-lib",276527580),new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),tokens_lib], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-tokens-lib","set-tokens-lib",276527580),new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),prev_tokens_lib], null)));
});
app.common.files.changes_builder.set_token = (function app$common$files$changes_builder$set_token(changes,set_id,token_id,token){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_token = (function (){var G__55792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
if((G__55792 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_token(G__55792,set_id,token_id);
}
})();
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-token","set-token",1378179451),new cljs.core.Keyword(null,"set-id","set-id",675256473),set_id,new cljs.core.Keyword(null,"token-id","token-id",-764089526),token_id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),clojure.datafy.datafy(token)], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-token","set-token",1378179451),new cljs.core.Keyword(null,"set-id","set-id",675256473),set_id,new cljs.core.Keyword(null,"token-id","token-id",-764089526),token_id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),clojure.datafy.datafy(prev_token)], null)));
});
app.common.files.changes_builder.set_token_set = (function app$common$files$changes_builder$set_token_set(changes,id,token_set){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_token_set = (function (){var G__55794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
if((G__55794 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_set(G__55794,id);
}
})();
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-token-set","set-token-set",-1146185413),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),clojure.datafy.datafy(token_set)], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-token-set","set-token-set",-1146185413),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),clojure.datafy.datafy(prev_token_set)], null)));
});
app.common.files.changes_builder.rename_token_set = (function app$common$files$changes_builder$rename_token_set(changes,id,new_name){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_token_set = (function (){var G__55798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
if((G__55798 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_set(G__55798,id);
}
})();
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-token-set","set-token-set",-1146185413),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),clojure.datafy.datafy(app.common.types.tokens_lib.rename(prev_token_set,new_name))], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-token-set","set-token-set",-1146185413),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),clojure.datafy.datafy(prev_token_set)], null)));
});
app.common.files.changes_builder.set_token_theme = (function app$common$files$changes_builder$set_token_theme(changes,id,theme){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_theme = (function (){var G__55801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
if((G__55801 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_theme(G__55801,id);
}
})();
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-token-theme","set-token-theme",-1994995543),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),clojure.datafy.datafy(theme)], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-token-theme","set-token-theme",-1994995543),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),clojure.datafy.datafy(prev_theme)], null)));
});
app.common.files.changes_builder.set_active_token_themes = (function app$common$files$changes_builder$set_active_token_themes(changes,active_theme_paths){
app.common.files.changes_builder.assert_library_BANG_(changes);

var library_data = new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var prev_active_theme_paths = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((function (){var G__55803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(library_data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
if((G__55803 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_active_theme_paths(G__55803);
}
})(),cljs.core.PersistentHashSet.EMPTY);
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-active-token-themes","set-active-token-themes",-1825247552),new cljs.core.Keyword(null,"theme-paths","theme-paths",1306140239),active_theme_paths], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-active-token-themes","set-active-token-themes",-1825247552),new cljs.core.Keyword(null,"theme-paths","theme-paths",1306140239),prev_active_theme_paths], null)));
});
app.common.files.changes_builder.rename_token_set_group = (function app$common$files$changes_builder$rename_token_set_group(changes,set_group_path,set_group_fname){
var undo_path = app.common.types.tokens_lib.replace_last_path_name(set_group_path,set_group_fname);
var undo_fname = cljs.core.last(set_group_path);
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rename-token-set-group","rename-token-set-group",696993584),new cljs.core.Keyword(null,"set-group-path","set-group-path",1404470053),set_group_path,new cljs.core.Keyword(null,"set-group-fname","set-group-fname",1422836316),set_group_fname], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rename-token-set-group","rename-token-set-group",696993584),new cljs.core.Keyword(null,"set-group-path","set-group-path",1404470053),undo_path,new cljs.core.Keyword(null,"set-group-fname","set-group-fname",1422836316),undo_fname], null)));
});
app.common.files.changes_builder.move_token_set = (function app$common$files$changes_builder$move_token_set(changes,p__55806){
var map__55807 = p__55806;
var map__55807__$1 = cljs.core.__destructure_map(map__55807);
var opts = map__55807__$1;
var from_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55807__$1,new cljs.core.Keyword(null,"from-path","from-path",-1111581224));
var to_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55807__$1,new cljs.core.Keyword(null,"to-path","to-path",-1087845742));
var before_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55807__$1,new cljs.core.Keyword(null,"before-path","before-path",-1341220519));
var before_group_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55807__$1,new cljs.core.Keyword(null,"before-group?","before-group?",1667453550));
var prev_before_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55807__$1,new cljs.core.Keyword(null,"prev-before-path","prev-before-path",788140603));
var prev_before_group_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55807__$1,new cljs.core.Keyword(null,"prev-before-group?","prev-before-group?",1113354384));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move-token-set","move-token-set",1469939284),new cljs.core.Keyword(null,"from-path","from-path",-1111581224),from_path,new cljs.core.Keyword(null,"to-path","to-path",-1087845742),to_path,new cljs.core.Keyword(null,"before-path","before-path",-1341220519),before_path,new cljs.core.Keyword(null,"before-group","before-group",1198330267),before_group_QMARK_], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move-token-set","move-token-set",1469939284),new cljs.core.Keyword(null,"from-path","from-path",-1111581224),to_path,new cljs.core.Keyword(null,"to-path","to-path",-1087845742),from_path,new cljs.core.Keyword(null,"before-path","before-path",-1341220519),prev_before_path,new cljs.core.Keyword(null,"before-group","before-group",1198330267),prev_before_group_QMARK_], null)));
});
app.common.files.changes_builder.move_token_set_group = (function app$common$files$changes_builder$move_token_set_group(changes,p__55808){
var map__55809 = p__55808;
var map__55809__$1 = cljs.core.__destructure_map(map__55809);
var from_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword(null,"from-path","from-path",-1111581224));
var to_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword(null,"to-path","to-path",-1087845742));
var before_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword(null,"before-path","before-path",-1341220519));
var before_group_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword(null,"before-group?","before-group?",1667453550));
var prev_before_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword(null,"prev-before-path","prev-before-path",788140603));
var prev_before_group_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55809__$1,new cljs.core.Keyword(null,"prev-before-group?","prev-before-group?",1113354384));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move-token-set-group","move-token-set-group",132768939),new cljs.core.Keyword(null,"from-path","from-path",-1111581224),from_path,new cljs.core.Keyword(null,"to-path","to-path",-1087845742),to_path,new cljs.core.Keyword(null,"before-path","before-path",-1341220519),before_path,new cljs.core.Keyword(null,"before-group","before-group",1198330267),before_group_QMARK_], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"move-token-set-group","move-token-set-group",132768939),new cljs.core.Keyword(null,"from-path","from-path",-1111581224),to_path,new cljs.core.Keyword(null,"to-path","to-path",-1087845742),from_path,new cljs.core.Keyword(null,"before-path","before-path",-1341220519),prev_before_path,new cljs.core.Keyword(null,"before-group","before-group",1198330267),prev_before_group_QMARK_], null)));
});
app.common.files.changes_builder.set_base_font_size = (function app$common$files$changes_builder$set_base_font_size(changes,new_base_font_size){
app.common.files.changes_builder.assert_file_data_BANG_(changes);

var file_data = new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var previous_font_size = app.common.types.file.get_base_font_size(file_data);
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-base-font-size","set-base-font-size",-1438596312),new cljs.core.Keyword(null,"base-font-size","base-font-size",-701078258),new_base_font_size], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-base-font-size","set-base-font-size",-1438596312),new cljs.core.Keyword(null,"base-font-size","base-font-size",-701078258),previous_font_size], null)));
});
app.common.files.changes_builder.reorder_children = (function app$common$files$changes_builder$reorder_children(changes,id,children){
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_objects_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var objects = app.common.files.changes_builder.lookup_objects(changes);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var old_children = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape);
var redo_change = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reorder-children","reorder-children",-522450648),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879),children], null);
var undo_change = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reorder-children","reorder-children",-522450648),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879),old_children], null);
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,redo_change),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,undo_change));
});
app.common.files.changes_builder.reorder_grid_children = (function app$common$files$changes_builder$reorder_grid_children(changes,ids){
app.common.files.changes_builder.assert_page_id_BANG_(changes);

app.common.files.changes_builder.assert_objects_BANG_(changes);

var page_id = new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
var objects = app.common.files.changes_builder.lookup_objects(changes);
var reorder_grid = (function (changes__$1,grid){
var old_shapes = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(grid);
var grid__$1 = app.common.types.shape.layout.reorder_grid_children(grid);
var new_shapes = cljs.core.filterv((function (p1__55812_SHARP_){
return cljs.core.contains_QMARK_(objects,p1__55812_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(grid__$1));
var redo_change = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reorder-children","reorder-children",-522450648),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(grid__$1),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879),new_shapes], null);
var undo_change = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reorder-children","reorder-children",-522450648),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(grid__$1),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879),old_shapes], null);
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,redo_change),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,undo_change));
});
var changes__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reorder_grid,changes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.grid_layout_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),ids)));
return changes__$1;
});
app.common.files.changes_builder.get_library_data = (function app$common$files$changes_builder$get_library_data(changes){
return new cljs.core.Keyword("app.common.files.changes-builder","library-data","app.common.files.changes-builder/library-data",351936329).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
});
app.common.files.changes_builder.get_objects = (function app$common$files$changes_builder$get_objects(changes){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.files.changes-builder","file-data","app.common.files.changes-builder/file-data",-1399858875).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes)),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),app.common.uuid.zero),new cljs.core.Keyword(null,"objects","objects",2099713734));
});
app.common.files.changes_builder.get_page = (function app$common$files$changes_builder$get_page(changes){
return new cljs.core.Keyword("app.common.files.changes-builder","page","app.common.files.changes-builder/page",-623448303).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
});
app.common.files.changes_builder.get_page_id = (function app$common$files$changes_builder$get_page_id(changes){
return new cljs.core.Keyword("app.common.files.changes-builder","page-id","app.common.files.changes-builder/page-id",-522011764).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(changes));
});

//# sourceMappingURL=app.common.files.changes_builder.js.map
