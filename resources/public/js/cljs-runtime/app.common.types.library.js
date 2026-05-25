import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.time.js";
import "./app.common.types.shape.js";
goog.provide('app.common.types.library');
app.common.types.library.get_colors = (function app$common$types$library$get_colors(file_data){
return new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(file_data);
});
app.common.types.library.get_color = (function app$common$types$library$get_color(file_data,color_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_data,new cljs.core.Keyword(null,"colors","colors",1157174732)),color_id);
});
app.common.types.library.get_ref_color = (function app$common$types$library$get_ref_color(library_data,color){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-file","ref-file",255004238).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library_data))){
return app.common.types.library.get_color(library_data,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(color));
} else {
return null;
}
});
app.common.types.library.touch = (function app$common$types$library$touch(color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),app.common.time.now());
});
app.common.types.library.add_color = (function app$common$types$library$add_color(file_data,color){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(file_data,new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color),app.common.types.library.touch(color));
});
app.common.types.library.set_color = (function app$common$types$library$set_color(file_data,color){
return app.common.data.assoc_in_when(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color)], null),app.common.types.library.touch(color));
});
app.common.types.library.update_color = (function app$common$types$library$update_color(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53120 = arguments.length;
var i__5750__auto___53121 = (0);
while(true){
if((i__5750__auto___53121 < len__5749__auto___53120)){
args__5755__auto__.push((arguments[i__5750__auto___53121]));

var G__53122 = (i__5750__auto___53121 + (1));
i__5750__auto___53121 = G__53122;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.library.update_color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.library.update_color.cljs$core$IFn$_invoke$arity$variadic = (function (file_data,color_id,f,args){
return app.common.data.update_in_when(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),color_id], null),(function (p1__53091_SHARP_){
return app.common.types.library.touch(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__53091_SHARP_,args));
}));
}));

(app.common.types.library.update_color.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.library.update_color.cljs$lang$applyTo = (function (seq53092){
var G__53093 = cljs.core.first(seq53092);
var seq53092__$1 = cljs.core.next(seq53092);
var G__53094 = cljs.core.first(seq53092__$1);
var seq53092__$2 = cljs.core.next(seq53092__$1);
var G__53095 = cljs.core.first(seq53092__$2);
var seq53092__$3 = cljs.core.next(seq53092__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53093,G__53094,G__53095,seq53092__$3);
}));

app.common.types.library.delete_color = (function app$common$types$library$delete_color(file_data,color_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(file_data,new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.dissoc,color_id);
});
/**
 * Find all usages of any color in the library by the given shape, of colors
 * that have ben modified after the date.
 */
app.common.types.library.used_colors_changed_since = (function app$common$types$library$used_colors_changed_since(shape,library,since_date){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (color){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"asset-id","asset-id",249736185),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),new cljs.core.Keyword(null,"color","color",1011675173)], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53101_SHARP_){
return (new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(p1__53101_SHARP_) < since_date);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__53100_SHARP_){
return app.common.types.library.get_ref_color(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),p1__53100_SHARP_);
}),app.common.types.shape.get_all_colors(shape))));
});
/**
 * Look for usage of any color of the given library inside the shape,
 *   and, in this case, copy the library color into the shape.
 */
app.common.types.library.sync_colors = (function app$common$types$library$sync_colors(shape,library_id,library_colors){
var sync_color = (function app$common$types$library$sync_colors_$_sync_color(shape__$1,position,shape_color,set_fn,_,detach_fn){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref-file","ref-file",255004238).cljs$core$IFn$_invoke$arity$1(shape_color),library_id)){
var library_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(library_colors,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(shape_color));
if((!((library_color == null)))){
var G__53108 = shape__$1;
var G__53109 = position;
var G__53110 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(library_color);
var G__53111 = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(library_color);
var G__53112 = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(library_color);
var G__53113 = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(library_color);
return (set_fn.cljs$core$IFn$_invoke$arity$6 ? set_fn.cljs$core$IFn$_invoke$arity$6(G__53108,G__53109,G__53110,G__53111,G__53112,G__53113) : set_fn.call(null,G__53108,G__53109,G__53110,G__53111,G__53112,G__53113));
} else {
return (detach_fn.cljs$core$IFn$_invoke$arity$2 ? detach_fn.cljs$core$IFn$_invoke$arity$2(shape__$1,position) : detach_fn.call(null,shape__$1,position));
}
} else {
return shape__$1;
}
});
return app.common.types.shape.process_shape_colors(shape,sync_color);
});

//# sourceMappingURL=app.common.types.library.js.map
