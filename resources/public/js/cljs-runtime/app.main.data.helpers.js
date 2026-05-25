import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.path.js";
goog.provide('app.main.data.helpers');
app.main.data.helpers.lookup_profile = (function app$main$data$helpers$lookup_profile(var_args){
var G__50703 = arguments.length;
switch (G__50703) {
case 1:
return app.main.data.helpers.lookup_profile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.helpers.lookup_profile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_profile.cljs$core$IFn$_invoke$arity$1 = (function (state){
return new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(state);
}));

(app.main.data.helpers.lookup_profile.cljs$core$IFn$_invoke$arity$2 = (function (state,profile_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"profiles","profiles",507634713)),profile_id);
}));

(app.main.data.helpers.lookup_profile.cljs$lang$maxFixedArity = 2);

/**
 * Retrieve all libraries, including the local file.
 */
app.main.data.helpers.lookup_libraries = (function app$main$data$helpers$lookup_libraries(state){
return new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(state);
});
app.main.data.helpers.lookup_file = (function app$main$data$helpers$lookup_file(var_args){
var G__50713 = arguments.length;
switch (G__50713) {
case 1:
return app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1 = (function (state){
return app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state));
}));

(app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2 = (function (state,file_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450)),file_id);
}));

(app.main.data.helpers.lookup_file.cljs$lang$maxFixedArity = 2);

app.main.data.helpers.lookup_file_data = (function app$main$data$helpers$lookup_file_data(var_args){
var G__50725 = arguments.length;
switch (G__50725) {
case 1:
return app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1 = (function (state){
return app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state));
}));

(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2 = (function (state,file_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450)),file_id),new cljs.core.Keyword(null,"data","data",-232669377));
}));

(app.main.data.helpers.lookup_file_data.cljs$lang$maxFixedArity = 2);

app.main.data.helpers.get_page = (function app$main$data$helpers$get_page(fdata,page_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fdata,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),page_id);
});
app.main.data.helpers.lookup_page = (function app$main$data$helpers$lookup_page(var_args){
var G__50739 = arguments.length;
switch (G__50739) {
case 1:
return app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1 = (function (state){
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
return app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3(state,file_id,page_id);
}));

(app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$2 = (function (state,page_id){
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3(state,file_id,page_id);
}));

(app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3 = (function (state,file_id,page_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450)),file_id),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),page_id);
}));

(app.main.data.helpers.lookup_page.cljs$lang$maxFixedArity = 3);

app.main.data.helpers.lookup_page_objects = (function app$main$data$helpers$lookup_page_objects(var_args){
var G__50741 = arguments.length;
switch (G__50741) {
case 1:
return app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1 = (function (state){
return app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state));
}));

(app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2 = (function (state,page_id){
return app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state),page_id);
}));

(app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3 = (function (state,file_id,page_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3(state,file_id,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
}));

(app.main.data.helpers.lookup_page_objects.cljs$lang$maxFixedArity = 3);

app.main.data.helpers.process_selected = (function app$main$data$helpers$process_selected(var_args){
var G__50743 = arguments.length;
switch (G__50743) {
case 2:
return app.main.data.helpers.process_selected.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.helpers.process_selected.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.process_selected.cljs$core$IFn$_invoke$arity$2 = (function (objects,selected){
return app.main.data.helpers.process_selected.cljs$core$IFn$_invoke$arity$3(objects,selected,null);
}));

(app.main.data.helpers.process_selected.cljs$core$IFn$_invoke$arity$3 = (function (objects,selected,p__50744){
var map__50745 = p__50744;
var map__50745__$1 = cljs.core.__destructure_map(map__50745);
var omit_blocked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50745__$1,new cljs.core.Keyword(null,"omit-blocked?","omit-blocked?",558115876),false);
var selectable_QMARK_ = (function (id){
return ((cljs.core.contains_QMARK_(objects,id)) && (((cljs.core.not(omit_blocked_QMARK_)) || (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"blocked","blocked",181326681),false))))));
});
var selected__$1 = app.common.files.helpers.clean_loops(objects,selected);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(selectable_QMARK_),selected__$1);
}));

(app.main.data.helpers.process_selected.cljs$lang$maxFixedArity = 3);

/**
 * Split text shapes from non-text shapes
 */
app.main.data.helpers.split_text_shapes = (function app$main$data$helpers$split_text_shapes(objects,ids){
var ids__$1 = cljs.core.seq(ids);
var text_ids = cljs.core.PersistentVector.EMPTY;
var shape_ids = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(ids__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
var G__50805 = cljs.core.rest(ids__$1);
var G__50806 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(text_ids,id);
var G__50807 = shape_ids;
ids__$1 = G__50805;
text_ids = G__50806;
shape_ids = G__50807;
continue;
} else {
var G__50808 = cljs.core.rest(ids__$1);
var G__50809 = text_ids;
var G__50810 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shape_ids,id);
ids__$1 = G__50808;
text_ids = G__50809;
shape_ids = G__50810;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text_ids,shape_ids], null);
}
break;
}
});
app.main.data.helpers.lookup_selected_raw = (function app$main$data$helpers$lookup_selected_raw(state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"selected","selected",574897764));
});
app.main.data.helpers.get_selected_ids = (function app$main$data$helpers$get_selected_ids(state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"selected","selected",574897764));
});
app.main.data.helpers.lookup_selected = (function app$main$data$helpers$lookup_selected(var_args){
var G__50747 = arguments.length;
switch (G__50747) {
case 1:
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1 = (function (state){
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state),null);
}));

(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$2 = (function (state,options){
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state),options);
}));

(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$3 = (function (state,page_id,options){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"selected","selected",574897764));
return app.main.data.helpers.process_selected.cljs$core$IFn$_invoke$arity$3(objects,selected,options);
}));

(app.main.data.helpers.lookup_selected.cljs$lang$maxFixedArity = 3);

app.main.data.helpers.lookup_shape = (function app$main$data$helpers$lookup_shape(var_args){
var G__50750 = arguments.length;
switch (G__50750) {
case 2:
return app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$2 = (function (state,id){
return app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state),id);
}));

(app.main.data.helpers.lookup_shape.cljs$core$IFn$_invoke$arity$3 = (function (state,page_id,id){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
}));

(app.main.data.helpers.lookup_shape.cljs$lang$maxFixedArity = 3);

app.main.data.helpers.lookup_shapes = (function app$main$data$helpers$lookup_shapes(var_args){
var G__50754 = arguments.length;
switch (G__50754) {
case 2:
return app.main.data.helpers.lookup_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.helpers.lookup_shapes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_shapes.cljs$core$IFn$_invoke$arity$2 = (function (state,ids){
return app.main.data.helpers.lookup_shapes.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state),ids);
}));

(app.main.data.helpers.lookup_shapes.cljs$core$IFn$_invoke$arity$3 = (function (state,page_id,ids){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),ids);
}));

(app.main.data.helpers.lookup_shapes.cljs$lang$maxFixedArity = 3);

app.main.data.helpers.update_file = (function app$main$data$helpers$update_file(var_args){
var G__50764 = arguments.length;
switch (G__50764) {
case 2:
return app.main.data.helpers.update_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.helpers.update_file.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.update_file.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return app.main.data.helpers.update_file.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state),f);
}));

(app.main.data.helpers.update_file.cljs$core$IFn$_invoke$arity$3 = (function (state,file_id,f){
return app.common.data.update_in_when(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),file_id], null),f);
}));

(app.main.data.helpers.update_file.cljs$lang$maxFixedArity = 3);

app.main.data.helpers.update_page = (function app$main$data$helpers$update_page(var_args){
var G__50766 = arguments.length;
switch (G__50766) {
case 2:
return app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state),f);
}));

(app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$3 = (function (state,page_id,f){
return app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state),page_id,f);
}));

(app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$4 = (function (state,file_id,page_id,f){
return app.common.data.update_in_when(state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),file_id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),f);
}));

(app.main.data.helpers.update_page.cljs$lang$maxFixedArity = 4);

app.main.data.helpers.filter_shapes = (function app$main$data$helpers$filter_shapes(var_args){
var G__50771 = arguments.length;
switch (G__50771) {
case 2:
return app.main.data.helpers.filter_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.helpers.filter_shapes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.filter_shapes.cljs$core$IFn$_invoke$arity$2 = (function (state,filter_fn){
return app.main.data.helpers.filter_shapes.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state),filter_fn);
}));

(app.main.data.helpers.filter_shapes.cljs$core$IFn$_invoke$arity$3 = (function (state,page_id,filter_fn){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(filter_fn),cljs.core.vals(objects));
}));

(app.main.data.helpers.filter_shapes.cljs$lang$maxFixedArity = 3);

app.main.data.helpers.select_bool_children = (function app$main$data$helpers$select_bool_children(state,parent_id){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape_modifiers = new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828).cljs$core$IFn$_invoke$arity$1(state);
var content_modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,id){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(temp__5823__auto__)){
var shape = temp__5823__auto__;
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape_modifiers,id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var shape__$1 = (((!((modifiers == null))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers):shape);
var modifiers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(content_modifiers,id),new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480));
var shape__$2 = (((!((modifiers__$1 == null))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape__$1,new cljs.core.Keyword(null,"content","content",15833224),app.common.types.path.apply_content_modifiers,modifiers__$1):shape__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,id,shape__$2);
} else {
return result;
}
}),cljs.core.PersistentArrayMap.EMPTY,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,parent_id));
});
app.main.data.helpers.get_viewport_center = (function app$main$data$helpers$get_viewport_center(state){
var temp__5825__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"vbox","vbox",-492787765)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var map__50777 = temp__5825__auto__;
var map__50777__$1 = cljs.core.__destructure_map(map__50777);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50777__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50777__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50777__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50777__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + (width / (2))),(y + (height / (2))));
} else {
return null;
}
});
app.main.data.helpers.lookup_team_files = (function app$main$data$helpers$lookup_team_files(var_args){
var G__50783 = arguments.length;
switch (G__50783) {
case 1:
return app.main.data.helpers.lookup_team_files.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.helpers.lookup_team_files.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_team_files.cljs$core$IFn$_invoke$arity$1 = (function (state){
return app.main.data.helpers.lookup_team_files.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state));
}));

(app.main.data.helpers.lookup_team_files.cljs$core$IFn$_invoke$arity$2 = (function (state,team_id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50781_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(team_id,new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(cljs.core.val(p1__50781_SHARP_)));
}),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(state)));
}));

(app.main.data.helpers.lookup_team_files.cljs$lang$maxFixedArity = 2);

app.main.data.helpers.lookup_team_projects = (function app$main$data$helpers$lookup_team_projects(var_args){
var G__50786 = arguments.length;
switch (G__50786) {
case 1:
return app.main.data.helpers.lookup_team_projects.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.helpers.lookup_team_projects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.helpers.lookup_team_projects.cljs$core$IFn$_invoke$arity$1 = (function (state){
return app.main.data.helpers.lookup_team_projects.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state));
}));

(app.main.data.helpers.lookup_team_projects.cljs$core$IFn$_invoke$arity$2 = (function (state,team_id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50784_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(team_id,new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(cljs.core.val(p1__50784_SHARP_)));
}),new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(state)));
}));

(app.main.data.helpers.lookup_team_projects.cljs$lang$maxFixedArity = 2);

app.main.data.helpers.get_selrect = (function app$main$data$helpers$get_selrect(selrect_transform,shape){
if((!((selrect_transform == null)))){
var map__50787 = selrect_transform;
var map__50787__$1 = cljs.core.__destructure_map(map__50787);
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787__$1,new cljs.core.Keyword(null,"center","center",-748944368));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50787__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.shapes.center__GT_rect.cljs$core$IFn$_invoke$arity$3(center,width,height),app.common.geom.matrix.transform_in(center,transform)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292))),app.common.geom.shapes.transform_matrix.cljs$core$IFn$_invoke$arity$1(shape)], null);
}
});

//# sourceMappingURL=app.main.data.helpers.js.map
