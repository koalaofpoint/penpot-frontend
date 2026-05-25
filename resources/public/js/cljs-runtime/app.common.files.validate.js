import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.files.helpers.js";
import "./app.common.files.variant.js";
import "./app.common.path_names.js";
import "./app.common.schema.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.pages_list.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.variant.js";
import "./app.common.uuid.js";
import "./cuerdas.core.js";
goog.provide('app.common.files.validate');
app.common.files.validate.error_codes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 45, [new cljs.core.Keyword(null,"child-not-found","child-not-found",1723767489),null,new cljs.core.Keyword(null,"invalid-main-instance-id","invalid-main-instance-id",-584539934),null,new cljs.core.Keyword(null,"invalid-main-instance-page","invalid-main-instance-page",-2135139325),null,new cljs.core.Keyword(null,"misplaced-slot","misplaced-slot",-272544637),null,new cljs.core.Keyword(null,"root-main-not-allowed","root-main-not-allowed",1386008676),null,new cljs.core.Keyword(null,"should-be-component-root","should-be-component-root",-1019597852),null,new cljs.core.Keyword(null,"ref-shape-is-not-head","ref-shape-is-not-head",1548958917),null,new cljs.core.Keyword(null,"component-duplicate-slot","component-duplicate-slot",-981521019),null,new cljs.core.Keyword(null,"not-head-main-not-allowed","not-head-main-not-allowed",-1213809819),null,new cljs.core.Keyword(null,"variant-not-main","variant-not-main",-1470670810),null,new cljs.core.Keyword(null,"frame-not-found","frame-not-found",1905603142),null,new cljs.core.Keyword(null,"invalid-variant-id","invalid-variant-id",1217967624),null,new cljs.core.Keyword(null,"variant-bad-name","variant-bad-name",1075263625),null,new cljs.core.Keyword(null,"ref-shape-not-found","ref-shape-not-found",1014790633),null,new cljs.core.Keyword(null,"invalid-geometry","invalid-geometry",437001578),null,new cljs.core.Keyword(null,"parent-not-found","parent-not-found",451342282),null,new cljs.core.Keyword(null,"duplicated-children","duplicated-children",-504084340),null,new cljs.core.Keyword(null,"shape-ref-cycle","shape-ref-cycle",-1233535891),null,new cljs.core.Keyword(null,"nested-copy-not-allowed","nested-copy-not-allowed",-425843986),null,new cljs.core.Keyword(null,"component-not-found","component-not-found",482222671),null,new cljs.core.Keyword(null,"component-main-external","component-main-external",-1426309457),null,new cljs.core.Keyword(null,"invalid-text-touched","invalid-text-touched",-603175216),null,new cljs.core.Keyword(null,"variant-component-bad-id","variant-component-bad-id",1038925937),null,new cljs.core.Keyword(null,"component-nil-objects-not-allowed","component-nil-objects-not-allowed",1630110673),null,new cljs.core.Keyword(null,"not-a-variant","not-a-variant",596614706),null,new cljs.core.Keyword(null,"instance-head-not-frame","instance-head-not-frame",829436563),null,new cljs.core.Keyword(null,"component-not-main","component-not-main",-1388012781),null,new cljs.core.Keyword(null,"variant-component-bad-name","variant-component-bad-name",550703572),null,new cljs.core.Keyword(null,"variant-bad-variant-name","variant-bad-variant-name",-995497356),null,new cljs.core.Keyword(null,"invalid-variant-properties","invalid-variant-properties",128877781),null,new cljs.core.Keyword(null,"missing-slot","missing-slot",-1465143531),null,new cljs.core.Keyword(null,"component-main","component-main",-462144619),null,new cljs.core.Keyword(null,"root-copy-not-allowed","root-copy-not-allowed",-829410346),null,new cljs.core.Keyword(null,"child-not-in-parent","child-not-in-parent",969396311),null,new cljs.core.Keyword(null,"invalid-frame","invalid-frame",-1077960585),null,new cljs.core.Keyword(null,"should-not-be-component-root","should-not-be-component-root",-1750007912),null,new cljs.core.Keyword(null,"invalid-parent","invalid-parent",-882875239),null,new cljs.core.Keyword(null,"invalid-main-instance","invalid-main-instance",1361049883),null,new cljs.core.Keyword(null,"ref-shape-is-head","ref-shape-is-head",842662811),null,new cljs.core.Keyword(null,"not-component-not-allowed","not-component-not-allowed",-90463620),null,new cljs.core.Keyword(null,"not-head-copy-not-allowed","not-head-copy-not-allowed",1731476124),null,new cljs.core.Keyword(null,"parent-not-variant","parent-not-variant",-2092115268),null,new cljs.core.Keyword(null,"duplicate-slot","duplicate-slot",1321081054),null,new cljs.core.Keyword(null,"nested-main-not-allowed","nested-main-not-allowed",1962230911),null,new cljs.core.Keyword(null,"shape-ref-in-main","shape-ref-in-main",-671464993),null], null), null);
app.common.files.validate.schema_COLON_error = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ValidationError"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.files.validate.error_codes], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),false], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null);
app.common.files.validate.check_error = app.common.schema.check_fn(app.common.files.validate.schema_COLON_error);
app.common.files.validate._STAR_errors_STAR_ = null;
app.common.files.validate.library_exists_QMARK_ = (function app$common$files$validate$library_exists_QMARK_(file,libraries,shape){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file))) || (cljs.core.contains_QMARK_(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape))));
});
app.common.files.validate.report_error = (function app$common$files$validate$report_error(var_args){
var args__5755__auto__ = [];
var len__5749__auto___74247 = arguments.length;
var i__5750__auto___74248 = (0);
while(true){
if((i__5750__auto___74248 < len__5749__auto___74247)){
args__5755__auto__.push((arguments[i__5750__auto___74248]));

var G__74249 = (i__5750__auto___74248 + (1));
i__5750__auto___74248 = G__74249;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((5) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((5)),(0),null)):null);
return app.common.files.validate.report_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5756__auto__);
});

(app.common.files.validate.report_error.cljs$core$IFn$_invoke$arity$variadic = (function (code,hint,shape,file,page,p__73790){
var map__73791 = p__73790;
var map__73791__$1 = cljs.core.__destructure_map(map__73791);
var args = map__73791__$1;
var error = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"hint","hint",439639918),hint,new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"args","args",1315556576),args], null));
if((!((app.common.files.validate._STAR_errors_STAR_ == null)))){
} else {
throw (new Error(["Assert failed: ","expected a valid `*errors*` dynamic binding","\n","(some? *errors*)"].join('')));
}

if(cljs.core.truth_(app.common.files.validate.check_error(error))){
} else {
throw (new Error("Assert failed: (check-error error)"));
}

return cljs.core._vreset_BANG_(app.common.files.validate._STAR_errors_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(app.common.files.validate._STAR_errors_STAR_),error));
}));

(app.common.files.validate.report_error.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(app.common.files.validate.report_error.cljs$lang$applyTo = (function (seq73784){
var G__73785 = cljs.core.first(seq73784);
var seq73784__$1 = cljs.core.next(seq73784);
var G__73786 = cljs.core.first(seq73784__$1);
var seq73784__$2 = cljs.core.next(seq73784__$1);
var G__73787 = cljs.core.first(seq73784__$2);
var seq73784__$3 = cljs.core.next(seq73784__$2);
var G__73788 = cljs.core.first(seq73784__$3);
var seq73784__$4 = cljs.core.next(seq73784__$3);
var G__73789 = cljs.core.first(seq73784__$4);
var seq73784__$5 = cljs.core.next(seq73784__$4);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73785,G__73786,G__73787,G__73788,G__73789,seq73784__$5);
}));

/**
 * Validate that the shape has valid coordinates, selrect and points.
 */
app.common.files.validate.check_geometry = (function app$common$files$validate$check_geometry(shape,file,page){
if((((!(((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.common.files.helpers.bool_shape_QMARK_(shape)))))) && ((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) == null)) || ((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) == null)) || ((((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape) == null)) || ((((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape) == null)) || ((((new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape) == null)) || ((new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape) == null)))))))))))))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-geometry","invalid-geometry",437001578),"Shape geometry is invalid",shape,file,page);
} else {
return null;
}
});
/**
 * Validate parent and children exists, and the link is bidirectional.
 */
app.common.files.validate.check_parent_children = (function app$common$files$validate$check_parent_children(shape,file,page){
var parent = app.common.types.shape_tree.get_shape(page,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var shapes = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape);
if((parent == null)){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"parent-not-found","parent-not-found",451342282),""+"Parent "+(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" not found",shape,file,page);
} else {
if(app.common.files.helpers.root_QMARK_(shape)){
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__73795_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_id,p1__73795_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent)))){
} else {
app.common.files.validate.report_error(new cljs.core.Keyword(null,"child-not-in-parent","child-not-in-parent",969396311),""+"Shape "+(shape_id ?? "")+" not in parent's children list",shape,file,page);
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(shapes)))){
} else {
app.common.files.validate.report_error(new cljs.core.Keyword(null,"duplicated-children","duplicated-children",-504084340),""+"Shape "+(shape_id ?? "")+" has duplicated children",shape,file,page);
}

var seq__73805 = cljs.core.seq(shapes);
var chunk__73806 = null;
var count__73807 = (0);
var i__73808 = (0);
while(true){
if((i__73808 < count__73807)){
var child_id = chunk__73806.cljs$core$IIndexed$_nth$arity$2(null,i__73808);
var child_74250 = app.common.types.shape_tree.get_shape(page,child_id);
if((child_74250 == null)){
app.common.files.validate.report_error.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"child-not-found","child-not-found",1723767489),""+"Child "+(child_id ?? "")+" not found in parent "+(shape_id ?? ""),shape,file,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),shape_id,new cljs.core.Keyword(null,"child-id","child-id",1325542429),child_id], 0));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(child_74250),shape_id)){
app.common.files.validate.report_error.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-parent","invalid-parent",-882875239),""+"Child "+(child_id ?? "")+" has invalid parent "+(shape_id ?? ""),child_74250,file,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),shape_id], 0));
} else {
}
}


var G__74251 = seq__73805;
var G__74252 = chunk__73806;
var G__74253 = count__73807;
var G__74254 = (i__73808 + (1));
seq__73805 = G__74251;
chunk__73806 = G__74252;
count__73807 = G__74253;
i__73808 = G__74254;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__73805);
if(temp__5825__auto__){
var seq__73805__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73805__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__73805__$1);
var G__74255 = cljs.core.chunk_rest(seq__73805__$1);
var G__74256 = c__5548__auto__;
var G__74257 = cljs.core.count(c__5548__auto__);
var G__74258 = (0);
seq__73805 = G__74255;
chunk__73806 = G__74256;
count__73807 = G__74257;
i__73808 = G__74258;
continue;
} else {
var child_id = cljs.core.first(seq__73805__$1);
var child_74259 = app.common.types.shape_tree.get_shape(page,child_id);
if((child_74259 == null)){
app.common.files.validate.report_error.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"child-not-found","child-not-found",1723767489),""+"Child "+(child_id ?? "")+" not found in parent "+(shape_id ?? ""),shape,file,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),shape_id,new cljs.core.Keyword(null,"child-id","child-id",1325542429),child_id], 0));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(child_74259),shape_id)){
app.common.files.validate.report_error.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-parent","invalid-parent",-882875239),""+"Child "+(child_id ?? "")+" has invalid parent "+(shape_id ?? ""),child_74259,file,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),shape_id], 0));
} else {
}
}


var G__74260 = cljs.core.next(seq__73805__$1);
var G__74261 = null;
var G__74262 = (0);
var G__74263 = (0);
seq__73805 = G__74260;
chunk__73806 = G__74261;
count__73807 = G__74262;
i__73808 = G__74263;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * Validate that the frame-id shape exists and is indeed a frame. Also
 *   it must point to the parent shape (if this is a frame) or to the
 *   frame-id of the parent (if not).
 */
app.common.files.validate.check_frame = (function app$common$files$validate$check_frame(p__73876,file,page){
var map__73881 = p__73876;
var map__73881__$1 = cljs.core.__destructure_map(map__73881);
var shape = map__73881__$1;
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73881__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var frame = app.common.types.shape_tree.get_shape(page,frame_id);
if((frame == null)){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"frame-not-found","frame-not-found",1905603142),""+"Frame "+(frame_id ?? "")+" not found",shape,file,page);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"frame","frame",-1711082588))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-frame","invalid-frame",-1077960585),""+"Frame "+(frame_id ?? "")+" is not actually a frame",shape,file,page);
} else {
var parent = app.common.types.shape_tree.get_shape(page,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
if((!((parent == null)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"frame","frame",-1711082588))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frame_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent))){
return null;
} else {
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-frame","invalid-frame",-1077960585),""+"Frame-id should point to parent "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent) ?? ""),shape,file,page);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frame_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(parent))){
return null;
} else {
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-frame","invalid-frame",-1077960585),""+"Frame-id should point to parent frame "+(frame_id ?? ""),shape,file,page);
}
}
} else {
return null;
}
}
}
});
/**
 * Validate shape is a main instance head, component exists
 *   and its main-instance points to this shape.
 */
app.common.files.validate.check_component_main_head = (function app$common$files$validate$check_component_main_head(shape,file,page,libraries){
if((new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(shape) == null)){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-not-main","component-not-main",-1388012781),"Shape expected to be main instance",shape,file,page);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file))){
} else {
app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-main-external","component-main-external",-1426309457),"Main instance should refer to a component in the same file",shape,file,page);
}

var component = app.common.types.file.resolve_component.cljs$core$IFn$_invoke$arity$variadic(shape,file,libraries,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], 0));
if((component == null)){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-not-found","component-not-found",482222671),""+"Component "+(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" not found in file "+(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape) ?? ""),shape,file,page);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))){
} else {
app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-main-instance-id","invalid-main-instance-id",-584539934),""+"Main instance id of component "+(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" is not valid",shape,file,page);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page))){
return null;
} else {
var component_page = app.common.types.file.get_component_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),component);
var main_component = app.common.types.shape_tree.get_shape(component_page,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component));
if(cljs.core.truth_(new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(main_component))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-main","component-main",-462144619),"Shape not expected to be main instance",shape,file,page);
} else {
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-main-instance-page","invalid-main-instance-page",-2135139325),""+"Main instance page of component "+(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" is not valid",shape,file,page);
}
}
}
});
/**
 * Validate shape is a not-main instance head, component
 *   exists and its main-instance does not point to this
 *   shape.
 */
app.common.files.validate.check_component_not_main_head = (function app$common$files$validate$check_component_not_main_head(shape,file,page,libraries){
if(new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(shape) === true){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-not-main","component-not-main",-1388012781),"Shape not expected to be main instance",shape,file,page);
} else {
}

var library_exists = app.common.files.validate.library_exists_QMARK_(file,libraries,shape);
var component = ((library_exists)?app.common.types.file.resolve_component.cljs$core$IFn$_invoke$arity$variadic(shape,file,libraries,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0)):null);
if((component == null)){
if(library_exists){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-not-found","component-not-found",482222671),""+"Component "+(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" not found in file "+(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape) ?? ""),shape,file,page);
} else {
return null;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page))))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-main-instance","invalid-main-instance",1361049883),""+"Main instance of component "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component) ?? "")+" should not be this shape",shape,file,page);
} else {
return null;
}
}
});
/**
 * Validate that this shape is not main instance and not head.
 */
app.common.files.validate.check_component_not_main_not_head = (function app$common$files$validate$check_component_not_main_not_head(shape,file,page){
if(new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(shape) === true){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-main","component-main",-462144619),"Shape not expected to be main instance",shape,file,page);
} else {
}

if((((!((new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) == null)))) || ((!((new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape) == null)))))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-main","component-main",-462144619),"Shape not expected to be component head",shape,file,page);
} else {
return null;
}
});
/**
 * Validate that this shape is an instance root.
 */
app.common.files.validate.check_component_root = (function app$common$files$validate$check_component_root(shape,file,page){
if((new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape) == null)){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"should-be-component-root","should-be-component-root",-1019597852),"Shape should be component root",shape,file,page);
} else {
return null;
}
});
/**
 * Validate that this shape is not an instance root.
 */
app.common.files.validate.check_component_not_root = (function app$common$files$validate$check_component_not_root(shape,file,page){
if(new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape) === true){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"should-not-be-component-root","should-not-be-component-root",-1750007912),"Shape should not be component root",shape,file,page);
} else {
return null;
}
});
/**
 * Validate that the referenced shape exists in the near component.
 */
app.common.files.validate.check_component_ref = (function app$common$files$validate$check_component_ref(shape,file,page,libraries){
var library_exists = app.common.files.validate.library_exists_QMARK_(file,libraries,shape);
var ref_shape = ((library_exists)?app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(file,page,libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], 0)):null);
if(((library_exists) && ((ref_shape == null)))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"ref-shape-not-found","ref-shape-not-found",1014790633),""+"Referenced shape "+(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" not found in near component",shape,file,page);
} else {
return null;
}
});
/**
 * Validate that this shape does not reference other one.
 */
app.common.files.validate.check_component_not_ref = (function app$common$files$validate$check_component_not_ref(shape,file,page){
if((!((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) == null)))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"shape-ref-in-main","shape-ref-in-main",-671464993),"Shape inside main instance should not have shape-ref",shape,file,page);
} else {
return null;
}
});
/**
 * Validate that the referenced shape is not a nested copy root.
 */
app.common.files.validate.check_ref_is_not_head = (function app$common$files$validate$check_ref_is_not_head(shape,file,page,libraries){
var ref_shape = app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(file,page,libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], 0));
if((((!((ref_shape == null)))) && (app.common.types.component.instance_head_QMARK_(ref_shape)))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"ref-shape-is-head","ref-shape-is-head",842662811),""+"Referenced shape "+(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" is a component, so the copy must also be",shape,file,page);
} else {
return null;
}
});
/**
 * Validate that the referenced shape is a nested copy root.
 */
app.common.files.validate.check_ref_is_head = (function app$common$files$validate$check_ref_is_head(shape,file,page,libraries){
var ref_shape = app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(file,page,libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], 0));
if((((!((ref_shape == null)))) && ((!(app.common.types.component.instance_head_QMARK_(ref_shape)))))){
return app.common.files.validate.report_error.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"ref-shape-is-not-head","ref-shape-is-not-head",1548958917),""+"Referenced shape "+(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" of a head copy must also be a head",shape,file,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(ref_shape),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(ref_shape)], 0));
} else {
return null;
}
});
/**
 * Validate that this shape does not have any swap slot.
 */
app.common.files.validate.check_empty_swap_slot = (function app$common$files$validate$check_empty_swap_slot(shape,file,page){
if((!((app.common.types.component.get_swap_slot(shape) == null)))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"misplaced-slot","misplaced-slot",-272544637),"This shape should not have swap slot",shape,file,page);
} else {
return null;
}
});
app.common.files.validate.has_duplicate_swap_slot_QMARK_ = (function app$common$files$validate$has_duplicate_swap_slot_QMARK_(shape,container){
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74070_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),p1__74070_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
var slots = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74071_SHARP_){
return app.common.types.component.get_swap_slot(p1__74071_SHARP_);
}),shapes));
var counts = cljs.core.frequencies(slots);
return cljs.core.some((function (p__74105){
var vec__74108 = p__74105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74108,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74108,(1),null);
return (count > (1));
}),counts);
});
/**
 * Validate that the children of this shape does not have duplicated slots.
 */
app.common.files.validate.check_duplicate_swap_slot = (function app$common$files$validate$check_duplicate_swap_slot(shape,file,page){
if(cljs.core.truth_(app.common.files.validate.has_duplicate_swap_slot_QMARK_(shape,page))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"duplicate-slot","duplicate-slot",1321081054),"This shape has children with the same swap slot",shape,file,page);
} else {
return null;
}
});
/**
 * Validate that the text touched flags are coherent.
 */
app.common.files.validate.check_valid_touched = (function app$common$files$validate$check_valid_touched(shape,file,page){
var touched_groups = app.common.types.component.normal_touched_groups(shape);
var content_touched_QMARK_ = (touched_groups.cljs$core$IFn$_invoke$arity$1 ? touched_groups.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content-group","content-group",-531031163)) : touched_groups.call(null,new cljs.core.Keyword(null,"content-group","content-group",-531031163)));
var text_touched_QMARK_ = (function (){var or__5025__auto__ = (touched_groups.cljs$core$IFn$_invoke$arity$1 ? touched_groups.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411)) : touched_groups.call(null,new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (touched_groups.cljs$core$IFn$_invoke$arity$1 ? touched_groups.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884)) : touched_groups.call(null,new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884)));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (touched_groups.cljs$core$IFn$_invoke$arity$1 ? touched_groups.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684)) : touched_groups.call(null,new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684)));
}
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = text_touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(content_touched_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-text-touched","invalid-text-touched",-603175216),"This thape has text type touched but not content touched",shape,file,page);
} else {
return null;
}
});
/**
 * Root shape of a top main instance:
 * 
 * - :main-instance
 * - :component-id
 * - :component-file
 * - :component-root
 */
app.common.files.validate.check_shape_main_root_top = (function app$common$files$validate$check_shape_main_root_top(shape,file,page,libraries){
app.common.files.validate.check_component_main_head(shape,file,page,libraries);

app.common.files.validate.check_component_root(shape,file,page);

app.common.files.validate.check_component_not_ref(shape,file,page);

app.common.files.validate.check_empty_swap_slot(shape,file,page);

app.common.files.validate.check_duplicate_swap_slot(shape,file,page);

return cljs.core.run_BANG_((function (p1__74131_SHARP_){
return (app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6(p1__74131_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"main-top","main-top",1522428454)) : app.common.files.validate.check_shape.call(null,p1__74131_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"main-top","main-top",1522428454)));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Root shape of a nested main instance
 * - :main-instance
 * - :component-id
 * - :component-file
 */
app.common.files.validate.check_shape_main_root_nested = (function app$common$files$validate$check_shape_main_root_nested(shape,file,page,libraries){
app.common.files.validate.check_component_main_head(shape,file,page,libraries);

app.common.files.validate.check_component_not_root(shape,file,page);

app.common.files.validate.check_component_not_ref(shape,file,page);

app.common.files.validate.check_empty_swap_slot(shape,file,page);

return cljs.core.run_BANG_((function (p1__74136_SHARP_){
return (app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6(p1__74136_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"main-nested","main-nested",-707473388)) : app.common.files.validate.check_shape.call(null,p1__74136_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"main-nested","main-nested",-707473388)));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Root shape of a top copy instance
 * - :component-id
 * - :component-file
 * - :component-root
 * - :shape-ref
 */
app.common.files.validate.check_shape_copy_root_top = (function app$common$files$validate$check_shape_copy_root_top(shape,file,page,libraries){
var library_exists = app.common.files.validate.library_exists_QMARK_(file,libraries,shape);
app.common.files.validate.check_component_not_main_head(shape,file,page,libraries);

app.common.files.validate.check_component_root(shape,file,page);

app.common.files.validate.check_component_ref(shape,file,page,libraries);

app.common.files.validate.check_ref_is_head(shape,file,page,libraries);

app.common.files.validate.check_empty_swap_slot(shape,file,page);

app.common.files.validate.check_duplicate_swap_slot(shape,file,page);

app.common.files.validate.check_valid_touched(shape,file,page);

return cljs.core.run_BANG_((function (p1__74145_SHARP_){
return (app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$8 ? app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$8(p1__74145_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"copy-top","copy-top",-817189511),new cljs.core.Keyword(null,"library-exists","library-exists",390234417),library_exists) : app.common.files.validate.check_shape.call(null,p1__74145_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"copy-top","copy-top",-817189511),new cljs.core.Keyword(null,"library-exists","library-exists",390234417),library_exists));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Root shape of a nested copy instance
 * - :component-id
 * - :component-file
 * - :shape-ref
 */
app.common.files.validate.check_shape_copy_root_nested = (function app$common$files$validate$check_shape_copy_root_nested(shape,file,page,libraries,library_exists){
app.common.files.validate.check_component_not_main_head(shape,file,page,libraries);

app.common.files.validate.check_component_not_root(shape,file,page);

app.common.files.validate.check_valid_touched(shape,file,page);

if(cljs.core.truth_(library_exists)){
app.common.files.validate.check_component_ref(shape,file,page,libraries);

app.common.files.validate.check_ref_is_head(shape,file,page,libraries);
} else {
}

return cljs.core.run_BANG_((function (p1__74150_SHARP_){
return (app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6(p1__74150_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"copy-nested","copy-nested",-718678662)) : app.common.files.validate.check_shape.call(null,p1__74150_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"copy-nested","copy-nested",-718678662)));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Not-root shape of a main instance (not any attribute)
 */
app.common.files.validate.check_shape_main_not_root = (function app$common$files$validate$check_shape_main_not_root(shape,file,page,libraries){
app.common.files.validate.check_component_not_main_not_head(shape,file,page);

app.common.files.validate.check_component_not_root(shape,file,page);

app.common.files.validate.check_component_not_ref(shape,file,page);

app.common.files.validate.check_empty_swap_slot(shape,file,page);

return cljs.core.run_BANG_((function (p1__74155_SHARP_){
return (app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6(p1__74155_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"main-any","main-any",1012350127)) : app.common.files.validate.check_shape.call(null,p1__74155_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"main-any","main-any",1012350127)));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Not-root shape of a copy instance :shape-ref
 */
app.common.files.validate.check_shape_copy_not_root = (function app$common$files$validate$check_shape_copy_not_root(shape,file,page,libraries){
app.common.files.validate.check_component_not_main_not_head(shape,file,page);

app.common.files.validate.check_component_not_root(shape,file,page);

app.common.files.validate.check_component_ref(shape,file,page,libraries);

app.common.files.validate.check_ref_is_not_head(shape,file,page,libraries);

app.common.files.validate.check_empty_swap_slot(shape,file,page);

app.common.files.validate.check_valid_touched(shape,file,page);

return cljs.core.run_BANG_((function (p1__74159_SHARP_){
return (app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6(p1__74159_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"copy-any","copy-any",2079055581)) : app.common.files.validate.check_shape.call(null,p1__74159_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"copy-any","copy-any",2079055581)));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Shape is not in a component or is a fostered children (not any
 *   attribute)
 */
app.common.files.validate.check_shape_not_component = (function app$common$files$validate$check_shape_not_component(shape,file,page,libraries){
app.common.files.validate.check_component_not_main_not_head(shape,file,page);

app.common.files.validate.check_component_not_root(shape,file,page);

app.common.files.validate.check_component_not_ref(shape,file,page);

app.common.files.validate.check_empty_swap_slot(shape,file,page);

return cljs.core.run_BANG_((function (p1__74164_SHARP_){
return (app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$6(p1__74164_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"not-component","not-component",-384260224)) : app.common.files.validate.check_shape.call(null,p1__74164_SHARP_,file,page,libraries,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"not-component","not-component",-384260224)));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
});
/**
 * Shape is a variant container, so:
 *   -all its children should be variants with variant-id equals to the shape-id
 *   -all the components should have the same properties
 * 
 */
app.common.files.validate.check_variant_container = (function app$common$files$validate$check_variant_container(shape,file,page){
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var shapes = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape);
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74166_SHARP_){
return app.common.types.shape_tree.get_shape(page,p1__74166_SHARP_);
}),shapes);
var prop_names = app.common.files.variant.extract_properties_names(cljs.core.first(children),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file));
var seq__74175 = cljs.core.seq(children);
var chunk__74176 = null;
var count__74177 = (0);
var i__74178 = (0);
while(true){
if((i__74178 < count__74177)){
var child = chunk__74176.cljs$core$IIndexed$_nth$arity$2(null,i__74178);
if(cljs.core.truth_(child)){
if((!(app.common.types.component.is_variant_QMARK_(child)))){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"not-a-variant","not-a-variant",596614706),""+"Shape "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child) ?? "")+" should be a variant",child,file,page);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(child),shape_id)){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-variant-id","invalid-variant-id",1217967624),""+"Variant "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child) ?? "")+" has invalid variant-id "+(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(child) ?? ""),child,file,page);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prop_names,app.common.files.variant.extract_properties_names(child,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file)))){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-variant-properties","invalid-variant-properties",128877781),""+"Variant "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child) ?? "")+" has invalid properties "+(cljs.core.vec(prop_names) ?? ""),child,file,page);
} else {
}
}
} else {
}


var G__74264 = seq__74175;
var G__74265 = chunk__74176;
var G__74266 = count__74177;
var G__74267 = (i__74178 + (1));
seq__74175 = G__74264;
chunk__74176 = G__74265;
count__74177 = G__74266;
i__74178 = G__74267;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__74175);
if(temp__5825__auto__){
var seq__74175__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74175__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__74175__$1);
var G__74268 = cljs.core.chunk_rest(seq__74175__$1);
var G__74269 = c__5548__auto__;
var G__74270 = cljs.core.count(c__5548__auto__);
var G__74271 = (0);
seq__74175 = G__74268;
chunk__74176 = G__74269;
count__74177 = G__74270;
i__74178 = G__74271;
continue;
} else {
var child = cljs.core.first(seq__74175__$1);
if(cljs.core.truth_(child)){
if((!(app.common.types.component.is_variant_QMARK_(child)))){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"not-a-variant","not-a-variant",596614706),""+"Shape "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child) ?? "")+" should be a variant",child,file,page);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(child),shape_id)){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-variant-id","invalid-variant-id",1217967624),""+"Variant "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child) ?? "")+" has invalid variant-id "+(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(child) ?? ""),child,file,page);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prop_names,app.common.files.variant.extract_properties_names(child,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file)))){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"invalid-variant-properties","invalid-variant-properties",128877781),""+"Variant "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child) ?? "")+" has invalid properties "+(cljs.core.vec(prop_names) ?? ""),child,file,page);
} else {
}
}
} else {
}


var G__74272 = cljs.core.next(seq__74175__$1);
var G__74273 = null;
var G__74274 = (0);
var G__74275 = (0);
seq__74175 = G__74272;
chunk__74176 = G__74273;
count__74177 = G__74274;
i__74178 = G__74275;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Shape is a variant, so
 *   -it should be a main component
 *   -its parent should be a variant-container
 *   -its variant-name is derived from the properties
 *   -its name should be tha same as its parent's
 * 
 */
app.common.files.validate.check_variant = (function app$common$files$validate$check_variant(shape,file,page){
var parent = app.common.types.shape_tree.get_shape(page,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),true);
var name = app.common.types.variant.properties_to_name(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component));
if(app.common.types.component.main_instance_QMARK_(shape)){
} else {
app.common.files.validate.report_error(new cljs.core.Keyword(null,"variant-not-main","variant-not-main",-1470670810),""+"Variant "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" is not a main instance",shape,file,page);
}

if(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(parent))){
} else {
app.common.files.validate.report_error(new cljs.core.Keyword(null,"parent-not-variant","parent-not-variant",-2092115268),""+"Variant "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" has an invalid parent",shape,file,page);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622).cljs$core$IFn$_invoke$arity$1(shape))){
} else {
app.common.files.validate.report_error(new cljs.core.Keyword(null,"variant-bad-variant-name","variant-bad-variant-name",-995497356),""+"Variant "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" has an invalid variant-name",shape,file,page);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape))){
} else {
app.common.files.validate.report_error(new cljs.core.Keyword(null,"variant-bad-name","variant-bad-name",1075263625),""+"Variant "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" has an invalid name",shape,file,page);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(parent),app.common.path_names.merge_path_item(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component)))){
} else {
app.common.files.validate.report_error(new cljs.core.Keyword(null,"variant-component-bad-name","variant-component-bad-name",550703572),""+"Component "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" has an invalid name",shape,file,page);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(shape))){
return null;
} else {
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"variant-component-bad-id","variant-component-bad-id",1038925937),""+"Variant "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+" has adifferent variant-id than its component",shape,file,page);
}
});
/**
 * Validate referential integrity and semantic coherence of
 *   a shape and all its children. Report all errors found.
 * 
 *   The context is the situation of the parent in respect to components:
 * - :not-component
 * - :main-top
 * - :main-nested
 * - :copy-top
 * - :copy-nested
 * - :main-any
 * - :copy-any
 *   
 */
app.common.files.validate.check_shape = (function app$common$files$validate$check_shape(var_args){
var args__5755__auto__ = [];
var len__5749__auto___74276 = arguments.length;
var i__5750__auto___74277 = (0);
while(true){
if((i__5750__auto___74277 < len__5749__auto___74276)){
args__5755__auto__.push((arguments[i__5750__auto___74277]));

var G__74278 = (i__5750__auto___74277 + (1));
i__5750__auto___74277 = G__74278;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(app.common.files.validate.check_shape.cljs$core$IFn$_invoke$arity$variadic = (function (shape_id,file,page,libraries,p__74194){
var map__74195 = p__74194;
var map__74195__$1 = cljs.core.__destructure_map(map__74195);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74195__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"not-component","not-component",-384260224));
var library_exists = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74195__$1,new cljs.core.Keyword(null,"library-exists","library-exists",390234417),false);
var shape = app.common.types.shape_tree.get_shape(page,shape_id);
if((!((shape == null)))){
app.common.files.validate.check_geometry(shape,file,page);

app.common.files.validate.check_parent_children(shape,file,page);

app.common.files.validate.check_frame(shape,file,page);

if(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(shape))){
app.common.files.validate.check_variant_container(shape,file,page);
} else {
}

if(app.common.types.component.is_variant_QMARK_(shape)){
app.common.files.validate.check_variant(shape,file,page);
} else {
}

if(app.common.types.component.instance_head_QMARK_(shape)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"instance-head-not-frame","instance-head-not-frame",829436563),"Instance head should be a frame",shape,file,page);
} else {
if(app.common.types.component.instance_root_QMARK_(shape)){
if(app.common.types.component.main_instance_QMARK_(shape)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"not-component","not-component",-384260224))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"root-main-not-allowed","root-main-not-allowed",1386008676),"Root main component not allowed inside other component",shape,file,page);
} else {
return app.common.files.validate.check_shape_main_root_top(shape,file,page,libraries);
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"not-component","not-component",-384260224))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"root-copy-not-allowed","root-copy-not-allowed",-829410346),"Root copy component not allowed inside other component",shape,file,page);
} else {
return app.common.files.validate.check_shape_copy_root_top(shape,file,page,libraries);
}
}
} else {
if(app.common.types.component.main_instance_QMARK_(shape)){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"not-component","not-component",-384260224))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"main-top","main-top",1522428454))))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"nested-main-not-allowed","nested-main-not-allowed",1962230911),"Component main not allowed inside other component",shape,file,page);
} else {
return app.common.files.validate.check_shape_main_root_nested(shape,file,page,libraries);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"not-component","not-component",-384260224))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"nested-copy-not-allowed","nested-copy-not-allowed",-425843986),"Nested copy component only allowed inside other component",shape,file,page);
} else {
return app.common.files.validate.check_shape_copy_root_nested(shape,file,page,libraries,library_exists);
}
}
}
}
} else {
if(app.common.types.component.in_component_copy_QMARK_(shape)){
if(cljs.core.not((function (){var fexpr__74198 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"copy-top","copy-top",-817189511),null,new cljs.core.Keyword(null,"copy-nested","copy-nested",-718678662),null,new cljs.core.Keyword(null,"copy-any","copy-any",2079055581),null], null), null);
return (fexpr__74198.cljs$core$IFn$_invoke$arity$1 ? fexpr__74198.cljs$core$IFn$_invoke$arity$1(context) : fexpr__74198.call(null,context));
})())){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"not-head-copy-not-allowed","not-head-copy-not-allowed",1731476124),"Non-root copy only allowed inside a copy",shape,file,page);
} else {
return app.common.files.validate.check_shape_copy_not_root(shape,file,page,libraries);
}
} else {
if(cljs.core.truth_(app.common.types.container.inside_component_main_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),shape))){
if(cljs.core.not((function (){var fexpr__74199 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"main-top","main-top",1522428454),null,new cljs.core.Keyword(null,"main-any","main-any",1012350127),null,new cljs.core.Keyword(null,"main-nested","main-nested",-707473388),null], null), null);
return (fexpr__74199.cljs$core$IFn$_invoke$arity$1 ? fexpr__74199.cljs$core$IFn$_invoke$arity$1(context) : fexpr__74199.call(null,context));
})())){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"not-head-main-not-allowed","not-head-main-not-allowed",-1213809819),"Non-root main only allowed inside a main component",shape,file,page);
} else {
return app.common.files.validate.check_shape_main_not_root(shape,file,page,libraries);
}
} else {
if(cljs.core.truth_((function (){var fexpr__74200 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"main-top","main-top",1522428454),null,new cljs.core.Keyword(null,"main-any","main-any",1012350127),null,new cljs.core.Keyword(null,"main-nested","main-nested",-707473388),null], null), null);
return (fexpr__74200.cljs$core$IFn$_invoke$arity$1 ? fexpr__74200.cljs$core$IFn$_invoke$arity$1(context) : fexpr__74200.call(null,context));
})())){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"not-component-not-allowed","not-component-not-allowed",-90463620),"Not compoments are not allowed inside a main",shape,file,page);
} else {
return app.common.files.validate.check_shape_not_component(shape,file,page,libraries);
}
}
}
}
} else {
return null;
}
}));

(app.common.files.validate.check_shape.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(app.common.files.validate.check_shape.cljs$lang$applyTo = (function (seq74188){
var G__74190 = cljs.core.first(seq74188);
var seq74188__$1 = cljs.core.next(seq74188);
var G__74191 = cljs.core.first(seq74188__$1);
var seq74188__$2 = cljs.core.next(seq74188__$1);
var G__74192 = cljs.core.first(seq74188__$2);
var seq74188__$3 = cljs.core.next(seq74188__$2);
var G__74193 = cljs.core.first(seq74188__$3);
var seq74188__$4 = cljs.core.next(seq74188__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74190,G__74191,G__74192,G__74193,seq74188__$4);
}));

app.common.files.validate.check_component_duplicate_swap_slot = (function app$common$files$validate$check_component_duplicate_swap_slot(component,file){
var shape = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component)], null));
if(cljs.core.truth_(app.common.files.validate.has_duplicate_swap_slot_QMARK_(shape,component))){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-duplicate-slot","component-duplicate-slot",-981521019),"This deleted component has children with the same swap slot",component,file,null);
} else {
return null;
}
});
app.common.files.validate.check_ref_cycles = (function app$common$files$validate$check_ref_cycles(component,file){
var cycles_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74202_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__74202_SHARP_),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(p1__74202_SHARP_));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component))));
if(cljs.core.seq(cycles_ids)){
return app.common.files.validate.report_error.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"shape-ref-cycle","shape-ref-cycle",-1233535891),"This deleted component has shapes with shape-ref pointing to self",component,file,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cycles-ids","cycles-ids",-532391784),cycles_ids], 0));
} else {
return null;
}
});
/**
 * Component is a variant, so:
 *   -Its main should be a variant
 *   -It should have at least one variant property
 */
app.common.files.validate.check_variant_component = (function app$common$files$validate$check_variant_component(component,file){
var component_page = app.common.types.file.get_component_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),component);
var main_component = (cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"objects","objects",2099713734)),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component)):app.common.types.shape_tree.get_shape(component_page,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component)));
if(cljs.core.truth_((function (){var and__5023__auto__ = main_component;
if(cljs.core.truth_(and__5023__auto__)){
return (!(app.common.types.component.is_variant_QMARK_(main_component)));
} else {
return and__5023__auto__;
}
})())){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"not-a-variant","not-a-variant",596614706),""+"Shape "+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main_component) ?? "")+" should be a variant",main_component,file,component_page);
} else {
return null;
}
});
app.common.files.validate.check_main_inside_main = (function app$common$files$validate$check_main_inside_main(component,file){
var component_page = app.common.types.file.get_component_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),component);
var main_instance = app.common.types.shape_tree.get_shape(component_page,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component));
var main_parents_QMARK_ = cljs.core.boolean$(cljs.core.some(app.common.types.component.main_instance_QMARK_,app.common.files.helpers.get_parents(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component_page),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main_instance))));
if(main_parents_QMARK_){
return app.common.files.validate.report_error(new cljs.core.Keyword(null,"nested-main-not-allowed","nested-main-not-allowed",1962230911),"Component main not allowed inside other component",main_instance,file,component_page);
} else {
return null;
}
});
/**
 * Validate semantic coherence of a component. Report all errors found.
 */
app.common.files.validate.check_component = (function app$common$files$validate$check_component(component,file){
if(((cljs.core.contains_QMARK_(component,new cljs.core.Keyword(null,"objects","objects",2099713734))) && ((new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component) == null)))){
app.common.files.validate.report_error(new cljs.core.Keyword(null,"component-nil-objects-not-allowed","component-nil-objects-not-allowed",1630110673),"Objects list cannot be nil",component,file,null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
} else {
app.common.files.validate.check_main_inside_main(component,file);
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
app.common.files.validate.check_component_duplicate_swap_slot(component,file);

app.common.files.validate.check_ref_cycles(component,file);
} else {
}

if(app.common.types.component.is_variant_QMARK_(component)){
return app.common.files.validate.check_variant_component(component,file);
} else {
return null;
}
});
app.common.files.validate.get_orphan_shapes = (function app$common$files$validate$get_orphan_shapes(p__74209){
var map__74210 = p__74209;
var map__74210__$1 = cljs.core.__destructure_map(map__74210);
var page = map__74210__$1;
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74210__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__74203_SHARP_){
return cljs.core.contains_QMARK_(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__74203_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf,cljs.core.vals(objects));
});
/**
 * Validate full referential integrity and semantic coherence on file data.
 * 
 *   Return a list of errors or `nil`
 */
app.common.files.validate.validate_file = (function app$common$files$validate$validate_file(p__74214,libraries){
var map__74215 = p__74214;
var map__74215__$1 = cljs.core.__destructure_map(map__74215);
var file = map__74215__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74215__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74215__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
if(cljs.core.contains_QMARK_(features__$1,"components/v2")){
var _STAR_errors_STAR__orig_val__74217 = app.common.files.validate._STAR_errors_STAR_;
var _STAR_errors_STAR__temp_val__74218 = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
(app.common.files.validate._STAR_errors_STAR_ = _STAR_errors_STAR__temp_val__74218);

try{var seq__74219_74279 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),app.common.types.pages_list.pages_seq(data)));
var chunk__74220_74280 = null;
var count__74221_74281 = (0);
var i__74222_74282 = (0);
while(true){
if((i__74222_74282 < count__74221_74281)){
var page_74283 = chunk__74220_74280.cljs$core$IIndexed$_nth$arity$2(null,i__74222_74282);
app.common.files.validate.check_shape(app.common.uuid.zero,file,page_74283,libraries);

if(cljs.core.truth_(cuerdas.core.includes_QMARK_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file),"check-swap-slot"))){
(app.common.files.validate.check_swap_slots.cljs$core$IFn$_invoke$arity$4 ? app.common.files.validate.check_swap_slots.cljs$core$IFn$_invoke$arity$4(app.common.uuid.zero,file,page_74283,libraries) : app.common.files.validate.check_swap_slots.call(null,app.common.uuid.zero,file,page_74283,libraries));
} else {
}

cljs.core.run_BANG_(((function (seq__74219_74279,chunk__74220_74280,count__74221_74281,i__74222_74282,page_74283,_STAR_errors_STAR__orig_val__74217,_STAR_errors_STAR__temp_val__74218,map__74215,map__74215__$1,file,data,features__$1){
return (function (p1__74212_SHARP_){
return app.common.files.validate.check_shape(p1__74212_SHARP_,file,page_74283,libraries);
});})(seq__74219_74279,chunk__74220_74280,count__74221_74281,i__74222_74282,page_74283,_STAR_errors_STAR__orig_val__74217,_STAR_errors_STAR__temp_val__74218,map__74215,map__74215__$1,file,data,features__$1))
,app.common.files.validate.get_orphan_shapes(page_74283));


var G__74284 = seq__74219_74279;
var G__74285 = chunk__74220_74280;
var G__74286 = count__74221_74281;
var G__74287 = (i__74222_74282 + (1));
seq__74219_74279 = G__74284;
chunk__74220_74280 = G__74285;
count__74221_74281 = G__74286;
i__74222_74282 = G__74287;
continue;
} else {
var temp__5825__auto___74288 = cljs.core.seq(seq__74219_74279);
if(temp__5825__auto___74288){
var seq__74219_74289__$1 = temp__5825__auto___74288;
if(cljs.core.chunked_seq_QMARK_(seq__74219_74289__$1)){
var c__5548__auto___74290 = cljs.core.chunk_first(seq__74219_74289__$1);
var G__74291 = cljs.core.chunk_rest(seq__74219_74289__$1);
var G__74292 = c__5548__auto___74290;
var G__74293 = cljs.core.count(c__5548__auto___74290);
var G__74294 = (0);
seq__74219_74279 = G__74291;
chunk__74220_74280 = G__74292;
count__74221_74281 = G__74293;
i__74222_74282 = G__74294;
continue;
} else {
var page_74295 = cljs.core.first(seq__74219_74289__$1);
app.common.files.validate.check_shape(app.common.uuid.zero,file,page_74295,libraries);

if(cljs.core.truth_(cuerdas.core.includes_QMARK_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file),"check-swap-slot"))){
(app.common.files.validate.check_swap_slots.cljs$core$IFn$_invoke$arity$4 ? app.common.files.validate.check_swap_slots.cljs$core$IFn$_invoke$arity$4(app.common.uuid.zero,file,page_74295,libraries) : app.common.files.validate.check_swap_slots.call(null,app.common.uuid.zero,file,page_74295,libraries));
} else {
}

cljs.core.run_BANG_(((function (seq__74219_74279,chunk__74220_74280,count__74221_74281,i__74222_74282,page_74295,seq__74219_74289__$1,temp__5825__auto___74288,_STAR_errors_STAR__orig_val__74217,_STAR_errors_STAR__temp_val__74218,map__74215,map__74215__$1,file,data,features__$1){
return (function (p1__74212_SHARP_){
return app.common.files.validate.check_shape(p1__74212_SHARP_,file,page_74295,libraries);
});})(seq__74219_74279,chunk__74220_74280,count__74221_74281,i__74222_74282,page_74295,seq__74219_74289__$1,temp__5825__auto___74288,_STAR_errors_STAR__orig_val__74217,_STAR_errors_STAR__temp_val__74218,map__74215,map__74215__$1,file,data,features__$1))
,app.common.files.validate.get_orphan_shapes(page_74295));


var G__74296 = cljs.core.next(seq__74219_74289__$1);
var G__74297 = null;
var G__74298 = (0);
var G__74299 = (0);
seq__74219_74279 = G__74296;
chunk__74220_74280 = G__74297;
count__74221_74281 = G__74298;
i__74222_74282 = G__74299;
continue;
}
} else {
}
}
break;
}

cljs.core.run_BANG_((function (p1__74213_SHARP_){
return app.common.files.validate.check_component(p1__74213_SHARP_,file);
}),cljs.core.vals(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(data)));

return cljs.core.not_empty(cljs.core.deref(app.common.files.validate._STAR_errors_STAR_));
}finally {(app.common.files.validate._STAR_errors_STAR_ = _STAR_errors_STAR__orig_val__74217);
}} else {
return null;
}
});
/**
 * Validate a shape and all its children. Returns a list of errors.
 */
app.common.files.validate.validate_shape = (function app$common$files$validate$validate_shape(shape_id,file,page,libraries){
var _STAR_errors_STAR__orig_val__74225 = app.common.files.validate._STAR_errors_STAR_;
var _STAR_errors_STAR__temp_val__74226 = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
(app.common.files.validate._STAR_errors_STAR_ = _STAR_errors_STAR__temp_val__74226);

try{app.common.files.validate.check_shape(shape_id,file,page,libraries);

return cljs.core.deref(app.common.files.validate._STAR_errors_STAR_);
}finally {(app.common.files.validate._STAR_errors_STAR_ = _STAR_errors_STAR__orig_val__74225);
}});
/**
 * Validate a component. Returns a list of errors.
 */
app.common.files.validate.validate_component = (function app$common$files$validate$validate_component(component,file){
var _STAR_errors_STAR__orig_val__74228 = app.common.files.validate._STAR_errors_STAR_;
var _STAR_errors_STAR__temp_val__74229 = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
(app.common.files.validate._STAR_errors_STAR_ = _STAR_errors_STAR__temp_val__74229);

try{app.common.files.validate.check_component(component,file);

return cljs.core.deref(app.common.files.validate._STAR_errors_STAR_);
}finally {(app.common.files.validate._STAR_errors_STAR_ = _STAR_errors_STAR__orig_val__74228);
}});
/**
 * Validates the file itself, without external dependencies, it
 *   performs the schema checking and some semantical validation of the
 *   content.
 */
app.common.files.validate.validate_file_schema_BANG_ = (function app$common$files$validate$validate_file_schema_BANG_(file){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"data","data",-232669377),app.common.types.file.check_file_data);
});
/**
 * Validate full referential integrity and semantic coherence on file data.
 * 
 *   Raises an exception
 */
app.common.files.validate.validate_file_BANG_ = (function app$common$files$validate$validate_file_BANG_(file,libraries){
var temp__5825__auto__ = app.common.files.validate.validate_file(file,libraries);
if(cljs.core.truth_(temp__5825__auto__)){
var errors = temp__5825__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("error on validating file referential integrity",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"referential-integrity","referential-integrity",1392203270),new cljs.core.Keyword(null,"hint","hint",439639918),"error on validating file referential integrity",new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"details","details",1956795411),errors], null),null], 0)),null);
} else {
return null;
}
});
app.common.files.validate.check_swap_slots = (function app$common$files$validate$check_swap_slots(shape_id,file,page,libraries){
var shape = app.common.types.shape_tree.get_shape(page,shape_id);
if(((app.common.types.component.instance_root_QMARK_(shape)) && (app.common.types.component.in_component_copy_QMARK_(shape)))){
var ref_shape = app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(file,page,libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true,new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),true], 0));
var container = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref_shape));
if((!((ref_shape == null)))){
return (app.common.files.validate.compare_slots.cljs$core$IFn$_invoke$arity$5 ? app.common.files.validate.compare_slots.cljs$core$IFn$_invoke$arity$5(shape,ref_shape,file,page,container) : app.common.files.validate.compare_slots.call(null,shape,ref_shape,file,page,container));
} else {
return null;
}
} else {
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$common$files$validate$check_swap_slots_$_iter__74233(s__74234){
return (new cljs.core.LazySeq(null,(function (){
var s__74234__$1 = s__74234;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__74234__$1);
if(temp__5825__auto__){
var s__74234__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74234__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__74234__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__74236 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__74235 = (0);
while(true){
if((i__74235 < size__5502__auto__)){
var child_id = cljs.core._nth(c__5501__auto__,i__74235);
cljs.core.chunk_append(b__74236,(app.common.files.validate.check_swap_slots.cljs$core$IFn$_invoke$arity$4 ? app.common.files.validate.check_swap_slots.cljs$core$IFn$_invoke$arity$4(child_id,file,page,libraries) : app.common.files.validate.check_swap_slots.call(null,child_id,file,page,libraries)));

var G__74300 = (i__74235 + (1));
i__74235 = G__74300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74236),app$common$files$validate$check_swap_slots_$_iter__74233(cljs.core.chunk_rest(s__74234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74236),null);
}
} else {
var child_id = cljs.core.first(s__74234__$2);
return cljs.core.cons((app.common.files.validate.check_swap_slots.cljs$core$IFn$_invoke$arity$4 ? app.common.files.validate.check_swap_slots.cljs$core$IFn$_invoke$arity$4(child_id,file,page,libraries) : app.common.files.validate.check_swap_slots.call(null,child_id,file,page,libraries)),app$common$files$validate$check_swap_slots_$_iter__74233(cljs.core.rest(s__74234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
})());
}
});
app.common.files.validate.compare_slots = (function app$common$files$validate$compare_slots(shape_copy,shape_main,file,container_copy,container_main){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape_copy),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_main))) && ((app.common.types.component.get_swap_slot(shape_copy) == null)))){
return app.common.files.validate.report_error.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"missing-slot","missing-slot",-1465143531),"Shape has been swapped, should have swap slot",shape_copy,file,container_copy,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"swap-slot","swap-slot",-1698060244),(function (){var or__5025__auto__ = app.common.types.component.get_swap_slot(shape_main);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_main);
}
})()], 0));
} else {
if((app.common.types.component.get_swap_slot(shape_copy) == null)){
var children_id_pairs = app.common.data.zip_all(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape_copy),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape_main));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$common$files$validate$compare_slots_$_iter__74237(s__74238){
return (new cljs.core.LazySeq(null,(function (){
var s__74238__$1 = s__74238;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__74238__$1);
if(temp__5825__auto__){
var s__74238__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74238__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__74238__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__74240 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__74239 = (0);
while(true){
if((i__74239 < size__5502__auto__)){
var vec__74241 = cljs.core._nth(c__5501__auto__,i__74239);
var child_copy_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74241,(0),null);
var child_main_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74241,(1),null);
cljs.core.chunk_append(b__74240,(function (){var child_copy = app.common.types.shape_tree.get_shape(container_copy,child_copy_id);
var child_main = app.common.types.shape_tree.get_shape(container_main,child_main_id);
if((((!((child_copy == null)))) && ((!((child_main == null)))))){
return (app.common.files.validate.compare_slots.cljs$core$IFn$_invoke$arity$5 ? app.common.files.validate.compare_slots.cljs$core$IFn$_invoke$arity$5(child_copy,child_main,file,container_copy,container_main) : app.common.files.validate.compare_slots.call(null,child_copy,child_main,file,container_copy,container_main));
} else {
return null;
}
})());

var G__74301 = (i__74239 + (1));
i__74239 = G__74301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74240),app$common$files$validate$compare_slots_$_iter__74237(cljs.core.chunk_rest(s__74238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74240),null);
}
} else {
var vec__74244 = cljs.core.first(s__74238__$2);
var child_copy_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74244,(0),null);
var child_main_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74244,(1),null);
return cljs.core.cons((function (){var child_copy = app.common.types.shape_tree.get_shape(container_copy,child_copy_id);
var child_main = app.common.types.shape_tree.get_shape(container_main,child_main_id);
if((((!((child_copy == null)))) && ((!((child_main == null)))))){
return (app.common.files.validate.compare_slots.cljs$core$IFn$_invoke$arity$5 ? app.common.files.validate.compare_slots.cljs$core$IFn$_invoke$arity$5(child_copy,child_main,file,container_copy,container_main) : app.common.files.validate.compare_slots.call(null,child_copy,child_main,file,container_copy,container_main));
} else {
return null;
}
})(),app$common$files$validate$compare_slots_$_iter__74237(cljs.core.rest(s__74238__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(children_id_pairs);
})());
} else {
return null;
}
}
});

//# sourceMappingURL=app.common.files.validate.js.map
