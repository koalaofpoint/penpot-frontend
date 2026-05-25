import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.point.js";
import "./app.common.types.path.helpers.js";
goog.provide('app.common.types.path.subpath');
/**
 * Check if two points are close
 */
app.common.types.path.subpath.pt_EQ_ = (function app$common$types$path$subpath$pt_EQ_(p1,p2){
return (app.common.geom.point.distance(p1,p2) < 0.1);
});
/**
 * Creates a subpath either from a single command or with all the data
 */
app.common.types.path.subpath.make_subpath = (function app$common$types$path$subpath$make_subpath(var_args){
var G__49597 = arguments.length;
switch (G__49597) {
case 1:
return app.common.types.path.subpath.make_subpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return app.common.types.path.subpath.make_subpath.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.path.subpath.make_subpath.cljs$core$IFn$_invoke$arity$1 = (function (command){
var p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(command);
return app.common.types.path.subpath.make_subpath.cljs$core$IFn$_invoke$arity$3(p,p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [command], null));
}));

(app.common.types.path.subpath.make_subpath.cljs$core$IFn$_invoke$arity$3 = (function (from,to,data){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"data","data",-232669377),data], null);
}));

(app.common.types.path.subpath.make_subpath.cljs$lang$maxFixedArity = 3);

/**
 * Adds a command to the subpath
 */
app.common.types.path.subpath.add_subpath_command = (function app$common$types$path$subpath$add_subpath_command(subpath,command){
var command__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-path","close-path",1220079654),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(command)))?app.common.types.path.helpers.make_line_to(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(subpath)):command);
var p = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(command__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(subpath,new cljs.core.Keyword(null,"to","to",192099007),p),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj,command__$1);
});
/**
 * Reverses a single command
 */
app.common.types.path.subpath.reverse_command = (function app$common$types$path$subpath$reverse_command(command,prev){
var map__49600 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(prev);
var map__49600__$1 = cljs.core.__destructure_map(map__49600);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49600__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__49601 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(command);
var map__49601__$1 = cljs.core.__destructure_map(map__49601);
var c1x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49601__$1,new cljs.core.Keyword(null,"c1x","c1x",-1789291378));
var c1y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49601__$1,new cljs.core.Keyword(null,"c1y","c1y",-1210747344));
var c2x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49601__$1,new cljs.core.Keyword(null,"c2x","c2x",-699963108));
var c2y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49601__$1,new cljs.core.Keyword(null,"c2y","c2y",1361944924));
var G__49602 = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(command,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(command))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__49602,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"c1x","c1x",-1789291378),c2x,new cljs.core.Keyword(null,"c1y","c1y",-1210747344),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c2y,new cljs.core.Keyword(null,"c2x","c2x",-699963108),c1x,new cljs.core.Keyword(null,"c2y","c2y",1361944924),c1y], 0));
} else {
return G__49602;
}
});
/**
 * Reverses a subpath starting with move-to
 */
app.common.types.path.subpath.reverse_subpath = (function app$common$types$path$subpath$reverse_subpath(subpath){
var reverse_commands = (function (result,p__49607){
var vec__49608 = p__49607;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49608,(0),null);
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49608,(1),null);
if((!((prev == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,app.common.types.path.subpath.reverse_command(command,prev));
} else {
return result;
}
});
var new_data = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reverse_commands,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.helpers.make_move_to(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(subpath))], null),cljs.core.reverse(app.common.data.with_prev(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(subpath))));
return app.common.types.path.subpath.make_subpath.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(subpath),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(subpath),new_data);
});
/**
 * Retrieves every subpath inside the current content
 */
app.common.types.path.subpath.get_subpaths = (function app$common$types$path$subpath$get_subpaths(content){
var reduce_subpath = (function (subpaths,current){
var is_move_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(current));
var last_idx = (cljs.core.count(subpaths) - (1));
if(is_move_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(subpaths,app.common.types.path.subpath.make_subpath.cljs$core$IFn$_invoke$arity$1(current));
} else {
if((last_idx >= (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(subpaths,last_idx,app.common.types.path.subpath.add_subpath_command,current);
} else {
return subpaths;

}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reduce_subpath,cljs.core.PersistentVector.EMPTY,content);
});
/**
 * Join two subpaths together when the first finish where the second starts
 */
app.common.types.path.subpath.subpaths_join = (function app$common$types$path$subpath$subpaths_join(subpath,other){
if(app.common.types.path.subpath.pt_EQ_(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(subpath),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(other))){
} else {
throw (new Error("Assert failed: (pt= (:to subpath) (:from other))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(subpath,new cljs.core.Keyword(null,"data","data",-232669377),app.common.data.concat_vec,cljs.core.rest(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(other))),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(other));
});
/**
 * Tries to merge into candidate the subpaths. Will return the candidate with the subpaths merged
 *   and removed from subpaths the subpaths merged
 */
app.common.types.path.subpath.merge_paths = (function app$common$types$path$subpath$merge_paths(candidate,subpaths){
var merge_with_candidate = (function (p__49654,current){
var vec__49655 = p__49654;
var candidate__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49655,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49655,(1),null);
if(app.common.types.path.subpath.pt_EQ_(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(current))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [candidate__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,current)], null);
} else {
if(app.common.types.path.subpath.pt_EQ_(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(candidate__$1),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(current))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.subpath.subpaths_join(candidate__$1,current),result], null);
} else {
if(app.common.types.path.subpath.pt_EQ_(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(candidate__$1),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(current))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.subpath.subpaths_join(current,candidate__$1),result], null);
} else {
if(app.common.types.path.subpath.pt_EQ_(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(candidate__$1),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(current))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.subpath.subpaths_join(candidate__$1,app.common.types.path.subpath.reverse_subpath(current)),result], null);
} else {
if(app.common.types.path.subpath.pt_EQ_(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(candidate__$1),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(current))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.path.subpath.subpaths_join(app.common.types.path.subpath.reverse_subpath(current),candidate__$1),result], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [candidate__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,current)], null);

}
}
}
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_with_candidate,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [candidate,cljs.core.PersistentVector.EMPTY], null),subpaths);
});
app.common.types.path.subpath.is_closed_QMARK_ = (function app$common$types$path$subpath$is_closed_QMARK_(subpath){
return app.common.types.path.subpath.pt_EQ_(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(subpath),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(subpath));
});
app.common.types.path.subpath.xf_mapcat_data = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377));
/**
 * Searches a path for possible subpaths that can create closed loops and merge them
 */
app.common.types.path.subpath.close_subpaths = (function app$common$types$path$subpath$close_subpaths(content){
var subpaths = app.common.types.path.subpath.get_subpaths(content);
var closed_subpaths = (function (){var result = cljs.core.PersistentVector.EMPTY;
var current = cljs.core.first(subpaths);
var subpaths__$1 = cljs.core.rest(subpaths);
while(true){
if((!((current == null)))){
var vec__49664 = ((app.common.types.path.subpath.is_closed_QMARK_(current))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,subpaths__$1], null):app.common.types.path.subpath.merge_paths(current,subpaths__$1));
var new_current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49664,(0),null);
var new_subpaths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49664,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,new_current)){
var G__49679 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new_current);
var G__49680 = cljs.core.first(new_subpaths);
var G__49681 = cljs.core.rest(new_subpaths);
result = G__49679;
current = G__49680;
subpaths__$1 = G__49681;
continue;
} else {
var G__49682 = result;
var G__49683 = new_current;
var G__49684 = new_subpaths;
result = G__49682;
current = G__49683;
subpaths__$1 = G__49684;
continue;
}
} else {
return result;
}
break;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.types.path.subpath.xf_mapcat_data,closed_subpaths);
});
/**
 * Given a content reverse the order of the commands
 */
app.common.types.path.subpath.reverse_content = (function app$common$types$path$subpath$reverse_content(content){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.types.path.subpath.xf_mapcat_data,cljs.core.reverse(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.types.path.subpath.reverse_subpath,app.common.types.path.subpath.get_subpaths(content))));
});
/**
 * Check whether the first subpath is clockwise or counter-clock wise
 */
app.common.types.path.subpath.clockwise_QMARK_ = (function app$common$types$path$subpath$clockwise_QMARK_(content){
var subpath = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(app.common.types.path.subpath.get_subpaths(content)));
var current = cljs.core.first(subpath);
var subpath__$1 = cljs.core.rest(subpath);
var first_point = null;
var signed_area = (0);
while(true){
if((current == null)){
return (signed_area > (0));
} else {
var map__49669 = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(current);
var map__49669__$1 = cljs.core.__destructure_map(map__49669);
var p = map__49669__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49669__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49669__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var last_QMARK_ = (cljs.core.first(subpath__$1) == null);
var first_point__$1 = (((first_point == null))?p:first_point);
var map__49670 = ((last_QMARK_)?first_point__$1:app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cljs.core.first(subpath__$1)));
var map__49670__$1 = cljs.core.__destructure_map(map__49670);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49670__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49670__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var signed_area__$1 = (signed_area + ((x1 * y2) - (x2 * y1)));
var G__49689 = cljs.core.first(subpath__$1);
var G__49690 = cljs.core.rest(subpath__$1);
var G__49691 = first_point__$1;
var G__49692 = signed_area__$1;
current = G__49689;
subpath__$1 = G__49690;
first_point = G__49691;
signed_area = G__49692;
continue;
}
break;
}
});

//# sourceMappingURL=app.common.types.path.subpath.js.map
