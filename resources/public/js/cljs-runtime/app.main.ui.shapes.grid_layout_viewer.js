import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.grid_layout.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.types.shape.layout.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.grid_layout_viewer');
app.main.ui.shapes.grid_layout_viewer.grid_cell_area_label = (function app$main$ui$shapes$grid_layout_viewer$grid_cell_area_label(props_54710){
var props = props_54710;
var cell_origin = (props["origin"]);
var cell_width = (props["width"]);
var text = (props["text"]);
var area_width = ((10) * cljs.core.count(text));
var area_height = (25);
var area_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin) + cell_width) - area_width);
var area_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin);
var area_text_x = (area_x + (area_width / (2)));
var area_text_y = (area_y + (area_height / (2)));
return rumext.v2.jsxs("g",{'pointerEvents':"none",'children':[rumext.v2.jsx("rect",{'x':area_x,'y':area_y,'width':area_width,'height':area_height,'style':{'fill':"var(--color-accent-quaternary)",'fillOpacity':0.3}}),rumext.v2.jsx("text",{'x':area_text_x,'y':area_text_y,'style':{'fill':"var(--color-accent-quaternary)",'fontFamily':"worksans",'fontWeight':(600),'fontSize':(14),'alignmentBaseline':"central",'textAnchor':"middle"},'children':text})]});
});

(app.main.ui.shapes.grid_layout_viewer.grid_cell_area_label.displayName = "grid-cell-area-label");

app.main.ui.shapes.grid_layout_viewer.grid_cell = (function app$main$ui$shapes$grid_layout_viewer$grid_cell(props_54711){
var props = props_54711;
var shape = (props["shape"]);
var cell = (props["cell"]);
var layout_data = (props["layout-data"]);
var cell_bounds = app.common.geom.shapes.grid_layout.cell_bounds(layout_data,cell);
var cell_origin = app.common.geom.shapes.points.origin(cell_bounds);
var cell_width = app.common.geom.shapes.points.width_points(cell_bounds);
var cell_height = app.common.geom.shapes.points.height_points(cell_bounds);
var cell_center = app.common.geom.shapes.points__GT_center(cell_bounds);
var cell_origin__$1 = app.common.geom.point.transform(cell_origin,app.common.geom.matrix.transform_in(cell_center,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(shape)));
return rumext.v2.jsxs("g",{'className':"cell",'children':[rumext.v2.jsx("rect",{'transform':""+(app.common.geom.matrix.transform_in(cell_center,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape)) ?? ""),'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell_origin__$1),'width':cell_width,'height':cell_height,'style':{'stroke':"var(--color-accent-quaternary)",'strokeWidth':1.5,'fill':"none"}}),(cljs.core.truth_(new cljs.core.Keyword(null,"area-name","area-name",-496581211).cljs$core$IFn$_invoke$arity$1(cell))?rumext.v2.jsx(app.main.ui.shapes.grid_layout_viewer.grid_cell_area_label,{'origin':cell_origin__$1,'width':cell_width,'text':new cljs.core.Keyword(null,"area-name","area-name",-496581211).cljs$core$IFn$_invoke$arity$1(cell)}):null)]});
});

(app.main.ui.shapes.grid_layout_viewer.grid_cell.displayName = "grid-cell");

app.main.ui.shapes.grid_layout_viewer.grid_layout_viewer = (function app$main$ui$shapes$grid_layout_viewer$grid_layout_viewer(props_54714){
var props = props_54714;
var shape = (props["shape"]);
var objects = (props["objects"]);
var bounds = app.common.data.lazy_map(cljs.core.keys(objects),(function (p1__54712_SHARP_){
return app.common.geom.shapes.shape__GT_points(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__54712_SHARP_));
}));
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54713_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[app.common.geom.shapes.points.parent_coords_bounds(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p1__54713_SHARP_),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)),p1__54713_SHARP_],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))));
var layout_data = app.common.geom.shapes.grid_layout.calc_layout_data.cljs$core$IFn$_invoke$arity$5(shape,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),children,bounds,objects);
return rumext.v2.jsx("g",{'className':"cells",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,cell){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.shapes.grid_layout_viewer.grid_cell,{'shape':shape,'layout-data':layout_data,'cell':cell},""+"cell-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell) ?? "")));

return out_arr__46744__auto__;
}),[],app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort?","sort?",-567661924),true], null)))});
});

(app.main.ui.shapes.grid_layout_viewer.grid_layout_viewer.displayName = "grid-layout-viewer");


//# sourceMappingURL=app.main.ui.shapes.grid_layout_viewer.js.map
