import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.grid.js";
import "./app.common.geom.rect.js";
import "./app.common.math.js";
import "./app.common.types.shape_tree.js";
import "./app.common.uuid.js";
import "./app.main.refs.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.frame_grid');
app.main.ui.workspace.viewport.frame_grid.square_grid = (function app$main$ui$workspace$viewport$frame_grid$square_grid(props_80207){
var map__80208 = rumext.v2.util.wrap_props(props_80207);
var map__80208__$1 = cljs.core.__destructure_map(map__80208);
var props = map__80208__$1;
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80208__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80208__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80208__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var grid_id = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return app.common.uuid.next();
}));
var map__80209 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(grid);
var map__80209__$1 = cljs.core.__destructure_map(map__80209);
var params = map__80209__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80209__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__80210 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(grid));
var map__80210__$1 = cljs.core.__destructure_map(map__80210);
var color_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80210__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var color_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80210__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var color_value__$1 = (function (){var or__5025__auto__ = color_value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"value","value",305978217)], null)));
}
})();
return rumext.v2.jsxs("g",{'className':"grid",'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx("pattern",{'id':grid_id,'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame),'width':size,'height':size,'patternUnits':"userSpaceOnUse",'children':rumext.v2.jsx("path",{'d':["M ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ","L ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," "].join(''),'style':{'fill':"none",'stroke':color_value__$1,'strokeOpacity':color_opacity,'strokeWidth':cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) / zoom))}})})}),rumext.v2.jsx("rect",{'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame),'fill':["url(#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grid_id),")"].join('')})]});
});

(app.main.ui.workspace.viewport.frame_grid.square_grid.displayName = "square-grid");

app.main.ui.workspace.viewport.frame_grid.layout_grid = (function app$main$ui$workspace$viewport$frame_grid$layout_grid(props_80211){
var map__80212 = rumext.v2.util.wrap_props(props_80211);
var map__80212__$1 = cljs.core.__destructure_map(map__80212);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80212__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80212__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80212__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80212__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__80213 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(grid));
var map__80213__$1 = cljs.core.__destructure_map(map__80213);
var color_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80213__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var color_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80213__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var color_value__$1 = (function (){var or__5025__auto__ = color_value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"value","value",305978217)], null)));
}
})();
var gutter = app.common.geom.grid.grid_gutter(frame,grid);
var gutter_QMARK_ = (((!((gutter == null)))) && ((!(app.common.math.almost_zero_QMARK_(gutter)))));
return rumext.v2.jsx("g",{'className':"grid",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__80215){
var vec__80216 = p__80215;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80216,(0),null);
var map__80219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80216,(1),null);
var map__80219__$1 = cljs.core.__destructure_map(map__80219);
var area = map__80219__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80219__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80219__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80219__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80219__$1,new cljs.core.Keyword(null,"height","height",1025178622));
out_arr__46744__auto__.push(((gutter_QMARK_)?rumext.v2.jsx("rect",{'x':x,'y':y,'width':((x + width) - x),'height':((y + height) - y),'style':{'fill':color_value__$1,'strokeWidth':(0),'opacity':color_opacity}},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('')):(((((!(gutter_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(grid)))))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0)))?rumext.v2.jsx("line",{'x1':x,'y1':y,'x2':x,'y2':(y + height),'style':{'stroke':color_value__$1,'strokeWidth':((1) / zoom),'strokeOpacity':color_opacity,'fill':"none"}},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-start"].join('')):null),rumext.v2.jsx("line",{'x1':(x + width),'y1':y,'x2':(x + width),'y2':(y + height),'style':{'stroke':color_value__$1,'strokeWidth':((1) / zoom),'strokeOpacity':color_opacity,'fill':"none"}},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-end"].join(''))]}):(((((!(gutter_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(grid)))))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0)))?rumext.v2.jsx("line",{'x1':x,'y1':y,'x2':(x + width),'y2':y,'style':{'stroke':color_value__$1,'strokeWidth':((1) / zoom),'strokeOpacity':color_opacity,'fill':"none"}},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-start"].join('')):null),rumext.v2.jsx("line",{'x1':x,'y1':(y + height),'x2':(x + width),'y2':(y + height),'style':{'stroke':color_value__$1,'strokeWidth':((1) / zoom),'strokeOpacity':color_opacity,'fill':"none"}},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"-end"].join(''))]}):null))));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(app.common.geom.grid.grid_areas(frame,grid)))});
});

(app.main.ui.workspace.viewport.frame_grid.layout_grid.displayName = "layout-grid");

app.main.ui.workspace.viewport.frame_grid.frame_clip_area = (function app$main$ui$workspace$viewport$frame_grid$frame_clip_area(p__80224,parents){
var map__80225 = p__80224;
var map__80225__$1 = cljs.core.__destructure_map(map__80225);
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80225__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sr,parent){
var G__80228 = sr;
if((((!(app.common.files.helpers.root_QMARK_(parent)))) && (((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) && (cljs.core.not(new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(parent))))))){
return app.common.geom.rect.clip_rect(G__80228,new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(parent));
} else {
return G__80228;
}
}),selrect,parents);
});
app.main.ui.workspace.viewport.frame_grid.grid_display_frame = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$frame_grid$grid_display_frame(props_80231){
var map__80235 = rumext.v2.util.wrap_props(props_80231);
var map__80235__$1 = cljs.core.__destructure_map(map__80235);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80235__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80235__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var transforming = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80235__$1,new cljs.core.Keyword(null,"transforming","transforming",-464205588));
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
var parents_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id)],(function (){
return app.main.refs.shape_parents(frame_id);
}));
var parents = rumext.v2.deref(parents_ref);
var clip_area = app.main.ui.workspace.viewport.frame_grid.frame_clip_area(frame,parents);
var clip_id = ""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame) ?? "")+"-grid-clip";
var transform_QMARK_ = (function (){var or__5025__auto__ = cljs.core.contains_QMARK_(transforming,frame_id);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.some((function (p1__80230_SHARP_){
return cljs.core.contains_QMARK_(transforming,p1__80230_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),parents));
}
})();
if(cljs.core.truth_(transform_QMARK_)){
return null;
} else {
return rumext.v2.jsxs("g",{'clipPath':""+"url(#"+(clip_id ?? "")+")",'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx("clipPath",{'id':clip_id,'children':rumext.v2.jsx("rect",{'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(clip_area),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(clip_area),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(clip_area),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(clip_area)})})}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__80237){
var vec__80238 = p__80237;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80238,(0),null);
var grid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80238,(1),null);
out_arr__46744__auto__.push((function (){var props = ({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)),"-grid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''), "frame": frame, "zoom": zoom, "grid": grid});
var G__80242 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(grid);
var G__80242__$1 = (((G__80242 instanceof cljs.core.Keyword))?G__80242.fqn:null);
switch (G__80242__$1) {
case "square":
return rumext.v2.create_element(app.main.ui.workspace.viewport.frame_grid.square_grid,props);

break;
case "column":
return rumext.v2.create_element(app.main.ui.workspace.viewport.frame_grid.layout_grid,props);

break;
case "row":
return rumext.v2.create_element(app.main.ui.workspace.viewport.frame_grid.layout_grid,props);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80242__$1)].join('')));

}
})());

return out_arr__46744__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grids","grids",44187194).cljs$core$IFn$_invoke$arity$1(frame))))]});
}
}));

(app.main.ui.workspace.viewport.frame_grid.grid_display_frame.displayName = "grid-display-frame");

app.main.ui.workspace.viewport.frame_grid.has_grid_QMARK_ = (function app$main$ui$workspace$viewport$frame_grid$has_grid_QMARK_(p__80243){
var map__80244 = p__80243;
var map__80244__$1 = cljs.core.__destructure_map(map__80244);
var grids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80244__$1,new cljs.core.Keyword(null,"grids","grids",44187194));
return (((!((grids == null)))) && (app.common.data.not_empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display","display",242065432),grids))));
});
app.main.ui.workspace.viewport.frame_grid.frame_grid = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$frame_grid$frame_grid(props_80247){
var map__80248 = rumext.v2.util.wrap_props(props_80247);
var map__80248__$1 = cljs.core.__destructure_map(map__80248);
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80248__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80248__$1,new cljs.core.Keyword(null,"transform","transform",1381301764));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80248__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80248__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var frames = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.viewport.frame_grid.has_grid_QMARK_,rumext.v2.deref(app.main.refs.workspace_frames));
var transforming = (((!((transform == null))))?selected:null);
return rumext.v2.jsx("g",{'className':"grid-display",'style':{'pointerEvents':"none"},'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,frame){
out_arr__46744__auto__.push((((((!(app.common.types.shape_tree.rotated_frame_QMARK_(frame)))) && (((cljs.core.empty_QMARK_(focus)) || (cljs.core.contains_QMARK_(focus,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)))))))?rumext.v2.jsx(app.main.ui.workspace.viewport.frame_grid.grid_display_frame,{'zoom':zoom,'frame':frame,'transforming':transforming},["grid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame))].join('')):null));

return out_arr__46744__auto__;
}),[],frames)});
}));

(app.main.ui.workspace.viewport.frame_grid.frame_grid.displayName = "frame-grid");


//# sourceMappingURL=app.main.ui.workspace.viewport.frame_grid.js.map
