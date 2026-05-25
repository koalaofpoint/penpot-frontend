import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.time.js";
import "./app.common.types.text.js";
goog.provide('app.common.types.typographies_list');
app.common.types.typographies_list.typographies_seq = (function app$common$types$typographies_list$typographies_seq(file_data){
return cljs.core.vals(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(file_data));
});
app.common.types.typographies_list.touch = (function app$common$types$typographies_list$touch(typography){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(typography,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),app.common.time.now());
});
app.common.types.typographies_list.add_typography = (function app$common$types$typographies_list$add_typography(file_data,typography){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(file_data,new cljs.core.Keyword(null,"typographies","typographies",-482095730),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography),app.common.types.typographies_list.touch(typography));
});
app.common.types.typographies_list.get_typography = (function app$common$types$typographies_list$get_typography(file_data,typography_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typographies","typographies",-482095730),typography_id], null));
});
app.common.types.typographies_list.get_ref_typography = (function app$common$types$typographies_list$get_ref_typography(library_data,typography){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(typography),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library_data))){
return app.common.types.typographies_list.get_typography(library_data,new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(typography));
} else {
return null;
}
});
app.common.types.typographies_list.set_typography = (function app$common$types$typographies_list$set_typography(file_data,typography){
return app.common.data.assoc_in_when(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typographies","typographies",-482095730),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography)], null),app.common.types.typographies_list.touch(typography));
});
app.common.types.typographies_list.update_typography = (function app$common$types$typographies_list$update_typography(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53138 = arguments.length;
var i__5750__auto___53139 = (0);
while(true){
if((i__5750__auto___53139 < len__5749__auto___53138)){
args__5755__auto__.push((arguments[i__5750__auto___53139]));

var G__53140 = (i__5750__auto___53139 + (1));
i__5750__auto___53139 = G__53140;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.typographies_list.update_typography.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.typographies_list.update_typography.cljs$core$IFn$_invoke$arity$variadic = (function (file_data,typography_id,f,args){
return app.common.data.update_in_when(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typographies","typographies",-482095730),typography_id], null),(function (p1__53090_SHARP_){
return app.common.types.typographies_list.touch(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__53090_SHARP_,args));
}));
}));

(app.common.types.typographies_list.update_typography.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.typographies_list.update_typography.cljs$lang$applyTo = (function (seq53096){
var G__53097 = cljs.core.first(seq53096);
var seq53096__$1 = cljs.core.next(seq53096);
var G__53098 = cljs.core.first(seq53096__$1);
var seq53096__$2 = cljs.core.next(seq53096__$1);
var G__53099 = cljs.core.first(seq53096__$2);
var seq53096__$3 = cljs.core.next(seq53096__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53097,G__53098,G__53099,seq53096__$3);
}));

app.common.types.typographies_list.delete_typography = (function app$common$types$typographies_list$delete_typography(file_data,typography_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(file_data,new cljs.core.Keyword(null,"typographies","typographies",-482095730),cljs.core.dissoc,typography_id);
});
/**
 * Find all usages of any typography in the library by the given shape, of
 * typographies that have ben modified after the date..
 */
app.common.types.typographies_list.used_typographies_changed_since = (function app$common$types$typographies_list$used_typographies_changed_since(shape,library,since_date){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"asset-id","asset-id",249736185),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),new cljs.core.Keyword(null,"typography","typography",-399568138)], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53116_SHARP_){
return (new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(p1__53116_SHARP_) < since_date);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__53115_SHARP_){
return app.common.types.typographies_list.get_ref_typography(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),p1__53115_SHARP_);
}),app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape)))));
});

//# sourceMappingURL=app.common.types.typographies_list.js.map
