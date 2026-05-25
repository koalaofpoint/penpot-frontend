import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.path.shape_to_path.js";
goog.provide('app.main.data.workspace.path.state');
/**
 * Retrieves the currently editing path id
 */
app.main.data.workspace.path.state.get_path_id = (function app$main$data$workspace$path$state$get_path_id(state){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973)),new cljs.core.Keyword(null,"object","object",1474613949)),new cljs.core.Keyword(null,"id","id",-1388402092));
}
});
app.main.data.workspace.path.state.get_path_location = (function app$main$data$workspace$path$state$get_path_location(var_args){
var args__5755__auto__ = [];
var len__5749__auto___66684 = arguments.length;
var i__5750__auto___66685 = (0);
while(true){
if((i__5750__auto___66685 < len__5749__auto___66684)){
args__5755__auto__.push((arguments[i__5750__auto___66685]));

var G__66690 = (i__5750__auto___66685 + (1));
i__5750__auto___66685 = G__66690;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.path.state.get_path_location.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.path.state.get_path_location.cljs$core$IFn$_invoke$arity$variadic = (function (state,ks){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
if(cljs.core.truth_(temp__5823__auto__)){
var edit_id = temp__5823__auto__;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),file_id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id,new cljs.core.Keyword(null,"objects","objects",2099713734),edit_id], null),ks);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949)], null),ks);
}
}));

(app.main.data.workspace.path.state.get_path_location.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.path.state.get_path_location.cljs$lang$applyTo = (function (seq66584){
var G__66585 = cljs.core.first(seq66584);
var seq66584__$1 = cljs.core.next(seq66584);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66585,seq66584__$1);
}));

/**
 * Retrieves the location of the path object and additionally can pass
 *   the arguments. This location can be used in get-in, assoc-in... functions
 */
app.main.data.workspace.path.state.get_path = (function app$main$data$workspace$path$state$get_path(var_args){
var args__5755__auto__ = [];
var len__5749__auto___66695 = arguments.length;
var i__5750__auto___66696 = (0);
while(true){
if((i__5750__auto___66696 < len__5749__auto___66695)){
args__5755__auto__.push((arguments[i__5750__auto___66696]));

var G__66698 = (i__5750__auto___66696 + (1));
i__5750__auto___66696 = G__66698;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic = (function (state,ks){
var path_loc = app.main.data.workspace.path.state.get_path_location(state);
var shape = app.common.types.path.shape_to_path.convert_to_path(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,path_loc),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.empty_QMARK_(ks)){
return shape;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,ks);
}
}));

(app.main.data.workspace.path.state.get_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.path.state.get_path.cljs$lang$applyTo = (function (seq66623){
var G__66624 = cljs.core.first(seq66623);
var seq66623__$1 = cljs.core.next(seq66623);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66624,seq66623__$1);
}));

app.main.data.workspace.path.state.set_content = (function app$main$data$workspace$path$state$set_content(state,content){
var path_loc = app.main.data.workspace.path.state.get_path_location.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
return cljs.core.assoc_in(state,path_loc,content);
});

//# sourceMappingURL=app.main.data.workspace.path.state.js.map
