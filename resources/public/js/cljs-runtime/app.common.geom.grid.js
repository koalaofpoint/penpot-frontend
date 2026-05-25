import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.point.js";
import "./app.common.math.js";
goog.provide('app.common.geom.grid');
app.common.geom.grid.default_items = (12);
/**
 * Calculates the item-length so the default number of items fits inside the frame-length
 */
app.common.geom.grid.calculate_default_item_length = (function app$common$geom$grid$calculate_default_item_length(frame_length,margin,gutter){
return (((frame_length - (margin + (margin - gutter))) - (gutter * app.common.geom.grid.default_items)) / app.common.geom.grid.default_items);
});
/**
 * Calculates the number of rows/columns given the other grid parameters
 */
app.common.geom.grid.calculate_size = (function app$common$geom$grid$calculate_size(frame_length,item_length,margin,gutter){
var item_length__$1 = (function (){var or__5025__auto__ = item_length;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.grid.calculate_default_item_length(frame_length,margin,gutter);
}
})();
var frame_length_no_margins = (frame_length - (margin + (margin - gutter)));
return app.common.math.floor((frame_length_no_margins / (item_length__$1 + gutter)));
});
app.common.geom.grid.calculate_generic_grid = (function app$common$geom$grid$calculate_generic_grid(v,total_length,p__78914){
var map__78915 = p__78914;
var map__78915__$1 = cljs.core.__destructure_map(map__78915);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78915__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var gutter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78915__$1,new cljs.core.Keyword(null,"gutter","gutter",1047805662));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78915__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var item_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78915__$1,new cljs.core.Keyword(null,"item-length","item-length",-2094673604));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78915__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size__$1 = ((typeof size === 'number')?size:app.common.geom.grid.calculate_size(total_length,item_length,margin,gutter));
var parts = (total_length / size__$1);
var item_length__$1 = ((typeof item_length === 'number')?item_length:(((parts + (- gutter)) + (gutter / size__$1)) + (- ((margin * (2)) / size__$1))));
var offset = (function (){var G__78916 = type;
var G__78916__$1 = (((G__78916 instanceof cljs.core.Keyword))?G__78916.fqn:null);
switch (G__78916__$1) {
case "right":
return (((total_length - (item_length__$1 * size__$1)) - (gutter * (size__$1 - (1)))) - margin);

break;
case "center":
return (((total_length - (item_length__$1 * size__$1)) - (gutter * (size__$1 - (1)))) / (2));

break;
default:
return margin;

}
})();
var gutter__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stretch","stretch",-1888837380),type))?(function (){var gutter__$1 = (function (){var x__5110__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = gutter;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5111__auto__ = (((total_length - (item_length__$1 * size__$1)) - (margin * (2))) / (size__$1 - (1)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(gutter__$1))){
return gutter__$1;
} else {
return (0);
}
})():gutter);
var next_v = (function (cur_val){
return ((offset + v) + ((item_length__$1 + gutter__$1) * cur_val));
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [size__$1,item_length__$1,next_v,gutter__$1], null);
});
app.common.geom.grid.calculate_column_grid = (function app$common$geom$grid$calculate_column_grid(p__78917,params){
var map__78918 = p__78917;
var map__78918__$1 = cljs.core.__destructure_map(map__78918);
var frame = map__78918__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78918__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78918__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78918__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78918__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__78919 = app.common.geom.grid.calculate_generic_grid(x,width,params);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78919,(0),null);
var width__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78919,(1),null);
var next_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78919,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,width__$1,height,next_x,cljs.core.constantly(y)], null);
});
app.common.geom.grid.calculate_row_grid = (function app$common$geom$grid$calculate_row_grid(p__78922,params){
var map__78923 = p__78922;
var map__78923__$1 = cljs.core.__destructure_map(map__78923);
var frame = map__78923__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78923__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78923__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78923__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78923__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__78924 = app.common.geom.grid.calculate_generic_grid(y,height,params);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78924,(0),null);
var height__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78924,(1),null);
var next_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78924,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,width,height__$1,cljs.core.constantly(x),next_y], null);
});
app.common.geom.grid.calculate_square_grid = (function app$common$geom$grid$calculate_square_grid(p__78927,p__78928){
var map__78929 = p__78927;
var map__78929__$1 = cljs.core.__destructure_map(map__78929);
var frame = map__78929__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78929__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78929__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78929__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78929__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__78930 = p__78928;
var map__78930__$1 = cljs.core.__destructure_map(map__78930);
var params = map__78930__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78930__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var col_size = cljs.core.quot(width,size);
var row_size = cljs.core.quot(height,size);
var as_row_col = (function (value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot(value,col_size),cljs.core.rem(value,col_size)], null);
});
var next_x = (function (cur_val){
var vec__78931 = as_row_col(cur_val);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78931,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78931,(1),null);
return (x + (col * size));
});
var next_y = (function (cur_val){
var vec__78934 = as_row_col(cur_val);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78934,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78934,(1),null);
return (y + (row * size));
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(col_size * row_size),size,size,next_x,next_y], null);
});
app.common.geom.grid.grid_gutter = (function app$common$geom$grid$grid_gutter(p__78937,p__78938){
var map__78939 = p__78937;
var map__78939__$1 = cljs.core.__destructure_map(map__78939);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78939__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78939__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78939__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78939__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__78940 = p__78938;
var map__78940__$1 = cljs.core.__destructure_map(map__78940);
var grid = map__78940__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78940__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78940__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__78941 = type;
var G__78941__$1 = (((G__78941 instanceof cljs.core.Keyword))?G__78941.fqn:null);
switch (G__78941__$1) {
case "column":
var vec__78942 = app.common.geom.grid.calculate_generic_grid(x,width,params);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78942,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78942,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78942,(2),null);
var gutter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78942,(3),null);
return gutter;

break;
case "row":
var vec__78945 = app.common.geom.grid.calculate_generic_grid(y,height,params);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78945,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78945,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78945,(2),null);
var gutter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78945,(3),null);
return gutter;

break;
default:
return null;

}
});
/**
 * Given a frame and the grid parameters returns the areas defined on the grid
 */
app.common.geom.grid.grid_areas = (function app$common$geom$grid$grid_areas(frame,grid){
var grid_fn = (function (){var G__78952 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(grid);
var G__78952__$1 = (((G__78952 instanceof cljs.core.Keyword))?G__78952.fqn:null);
switch (G__78952__$1) {
case "column":
return app.common.geom.grid.calculate_column_grid;

break;
case "row":
return app.common.geom.grid.calculate_row_grid;

break;
case "square":
return app.common.geom.grid.calculate_square_grid;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78952__$1)].join('')));

}
})();
var vec__78949 = (function (){var G__78953 = frame;
var G__78954 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(grid);
return (grid_fn.cljs$core$IFn$_invoke$arity$2 ? grid_fn.cljs$core$IFn$_invoke$arity$2(G__78953,G__78954) : grid_fn.call(null,G__78953,G__78954));
})();
var num_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78949,(0),null);
var item_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78949,(1),null);
var item_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78949,(2),null);
var next_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78949,(3),null);
var next_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78949,(4),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78948_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)],[(next_x.cljs$core$IFn$_invoke$arity$1 ? next_x.cljs$core$IFn$_invoke$arity$1(p1__78948_SHARP_) : next_x.call(null,p1__78948_SHARP_)),(next_y.cljs$core$IFn$_invoke$arity$1 ? next_y.cljs$core$IFn$_invoke$arity$1(p1__78948_SHARP_) : next_y.call(null,p1__78948_SHARP_)),item_width,item_height]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),num_items));
});
app.common.geom.grid.grid_area_points = (function app$common$geom$grid$grid_area_points(p__78955){
var map__78956 = p__78955;
var map__78956__$1 = cljs.core.__destructure_map(map__78956);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78956__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78956__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78956__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78956__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + width),y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + width),(y + height)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,(y + height))], null);
});
/**
 * Returns the snap points for a given grid
 */
app.common.geom.grid.grid_snap_points = (function app$common$geom$grid$grid_snap_points(shape,p__78959,coord){
var map__78960 = p__78959;
var map__78960__$1 = cljs.core.__destructure_map(map__78960);
var grid = map__78960__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78960__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78960__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(grid))){
var G__78961 = type;
var G__78961__$1 = (((G__78961 instanceof cljs.core.Keyword))?G__78961.fqn:null);
switch (G__78961__$1) {
case "square":
var map__78962 = shape;
var map__78962__$1 = cljs.core.__destructure_map(map__78962);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78962__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78962__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78962__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78962__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(params);
if((size > (0))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__78957_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + p1__78957_SHARP_),y),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + p1__78957_SHARP_),(y + height))],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$3(size,width,size)], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__78958_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,(y + p1__78958_SHARP_)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + width),(y + p1__78958_SHARP_))],null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$3(size,height,size)], 0));
}
} else {
return null;
}

break;
case "column":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"x","x",2099068185))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.common.geom.grid.grid_area_points,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.geom.grid.grid_areas(shape,grid)], 0));
} else {
return null;
}

break;
case "row":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,new cljs.core.Keyword(null,"y","y",-1757859776))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.common.geom.grid.grid_area_points,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.geom.grid.grid_areas(shape,grid)], 0));
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78961__$1)].join('')));

}
} else {
return null;
}
});

//# sourceMappingURL=app.common.geom.grid.js.map
