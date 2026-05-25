import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.matrix.js";
import "./app.main.data.workspace.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.ds.product.panel_title.js";
import "./debug.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.debug_shape_info');
app.main.ui.workspace.sidebar.debug_shape_info.display_attrs = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"component-root","component-root",-485271026),new cljs.core.Keyword(null,"main-instance","main-instance",476264761),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576)], null);
app.main.ui.workspace.sidebar.debug_shape_info.remove_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null);
app.main.ui.workspace.sidebar.debug_shape_info.vertical_layout_attrs = cljs.core.PersistentHashSet.EMPTY;
app.main.ui.workspace.sidebar.debug_shape_info.get_attrs = (function app$main$ui$workspace$sidebar$debug_shape_info$get_attrs(shape){
var shape_attrs = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.debug_shape_info.remove_attrs,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(app.main.ui.workspace.sidebar.debug_shape_info.display_attrs),cljs.core.keys(shape))));
var $ = app.main.ui.workspace.sidebar.debug_shape_info.display_attrs;
var $__$1 = app.common.data.removev((function (p1__55233_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,p1__55233_SHARP_) == null);
}),$);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2($__$1,shape_attrs);
});
app.main.ui.workspace.sidebar.debug_shape_info.custom_renderer = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"shapes","shapes",1897594879)],[new cljs.core.Keyword(null,"matrix-render","matrix-render",278382090),new cljs.core.Keyword(null,"cells-render","cells-render",-828771788),new cljs.core.Keyword(null,"points-render","points-render",-2103762292),new cljs.core.Keyword(null,"shape-link","shape-link",-1110484325),new cljs.core.Keyword(null,"matrix-render","matrix-render",278382090),new cljs.core.Keyword(null,"shape-link","shape-link",-1110484325),new cljs.core.Keyword(null,"shape-link","shape-link",-1110484325),new cljs.core.Keyword(null,"rect-render","rect-render",164934616),new cljs.core.Keyword(null,"shape-list","shape-list",-226178330)]);
app.main.ui.workspace.sidebar.debug_shape_info.shape_link = (function app$main$ui$workspace$sidebar$debug_shape_info$shape_link(props_55234){
var map__55236 = rumext.v2.util.wrap_props(props_55234);
var map__55236__$1 = cljs.core.__destructure_map(map__55236);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55236__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55236__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
return rumext.v2.jsx("a",{'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shape.cljs$core$IFn$_invoke$arity$1(id));
}),'className':"main_ui_workspace_sidebar_debug_shape_info__shape-link",'children':""+(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"name","name",1843675177)) ?? "")+" #"+(id ?? "")});
});

(app.main.ui.workspace.sidebar.debug_shape_info.shape_link.displayName = "shape-link");

app.main.ui.workspace.sidebar.debug_shape_info.cells_render = (function app$main$ui$workspace$sidebar$debug_shape_info$cells_render(props_55237){
var map__55238 = rumext.v2.util.wrap_props(props_55237);
var map__55238__$1 = cljs.core.__destructure_map(map__55238);
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55238__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55238__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__cells-render",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55239){
var vec__55240 = p__55239;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55240,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55240,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__cell-container",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__cell-position",'children':""+"("+(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(cell) ?? "")+", "+(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cell) ?? "")+") -> ("+((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(cell) + (new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(cell) - (1))) ?? "")+", "+((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cell) + (new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(cell) - (1))) ?? "")+")"}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__cell-shape",'children':((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell)))?rumext.v2.jsx("div",{'children':"<empty>"}):rumext.v2.jsx(app.main.ui.workspace.sidebar.debug_shape_info.shape_link,{'id':cljs.core.first(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell)),'objects':objects}))})]},""+"cell-"+(id ?? "")));

return out_arr__35152__auto__;
}),[],cells)});
});

(app.main.ui.workspace.sidebar.debug_shape_info.cells_render.displayName = "cells-render");

app.main.ui.workspace.sidebar.debug_shape_info.debug_shape_attr = (function app$main$ui$workspace$sidebar$debug_shape_info$debug_shape_attr(props_55247){
var map__55248 = rumext.v2.util.wrap_props(props_55247);
var map__55248__$1 = cljs.core.__destructure_map(map__55248);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55248__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55248__$1,new cljs.core.Keyword(null,"value","value",305978217));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55248__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var G__55249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.debug_shape_info.custom_renderer,attr);
var G__55249__$1 = (((G__55249 instanceof cljs.core.Keyword))?G__55249.fqn:null);
switch (G__55249__$1) {
case "shape-link":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.debug_shape_info.shape_link,{'id':value,'objects':objects});

break;
case "shape-list":
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__shape-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,id){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.debug_shape_info.shape_link,{'id':id,'objects':objects},""+"child-"+(id ?? "")));

return out_arr__35152__auto__;
}),[],value)});

break;
case "matrix-render":
return rumext.v2.jsx("div",{'children':""+(app.common.geom.matrix.format_precision(value,(2)) ?? "")});

break;
case "rect-render":
return rumext.v2.jsx("div",{'children':""+"X:"+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(value) ?? "")+" Y:"+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(value) ?? "")+" W:"+(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(value) ?? "")+" H:"+(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(value) ?? "")});

break;
case "points-render":
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__point-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55250){
var vec__55251 = p__55250;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55251,(0),null);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55251,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx("div",{'children':""+"("+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(point) ?? "")+", "+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(point) ?? "")+")"},""+"point-"+(idx ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(value))});

break;
case "cells-render":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.debug_shape_info.cells_render,{'cells':value,'objects':objects});

break;
default:
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__attrs-container-value",'children':cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)});

}
});

(app.main.ui.workspace.sidebar.debug_shape_info.debug_shape_attr.displayName = "debug-shape-attr");

app.main.ui.workspace.sidebar.debug_shape_info.debug_shape_info_STAR_ = (function app$main$ui$workspace$sidebar$debug_shape_info$debug_shape_info_STAR_(props_55254){
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var selected = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),rumext.v2.deref(app.main.refs.selected_shapes));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__shape-info",'children':[rumext.v2.jsx(app.main.ui.ds.product.panel_title.panel_title_STAR_,{'className':"main_ui_workspace_sidebar_debug_shape_info__shape-info-title",'text':"Debug",'onClose':(function (){
return debug.disable_BANG_(new cljs.core.Keyword(null,"shape-panel","shape-panel",-2139910340));
})}),((cljs.core.empty_QMARK_(selected))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__attrs-container",'children':"No shapes selected"}):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55255){
var vec__55256 = p__55255;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55256,(0),null);
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55256,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__attrs-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__shape-title",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__shape-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current)}),rumext.v2.jsx("button",{'onClick':(function (){
return debug.dump_object(""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current) ?? ""));
}),'children':"object"}),rumext.v2.jsx("button",{'onClick':(function (){
return debug.dump_subtree.cljs$core$IFn$_invoke$arity$2(""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current) ?? ""),true);
}),'children':"tree"})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__shape-attrs",'children':(function (){var attrs = app.main.ui.workspace.sidebar.debug_shape_info.get_attrs(current);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto____$1,attr){
out_arr__35152__auto____$1.push((function (){var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,attr);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__attrs-container-attr"+" "+((cljs.core.contains_QMARK_(app.main.ui.workspace.sidebar.debug_shape_info.vertical_layout_attrs,attr))?"main_ui_workspace_sidebar_debug_shape_info__vertical-layout":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_debug_shape_info__attrs-container-name",'children':app.common.data.name(attr)}),rumext.v2.jsx(app.main.ui.workspace.sidebar.debug_shape_info.debug_shape_attr,{'attr':attr,'value':value,'objects':objects})]},""+"att-"+(idx ?? "")+"-"+(attr ?? ""));
} else {
return null;
}
})());

return out_arr__35152__auto____$1;
}),[],attrs);
})()})]},""+"shape"+(idx ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(selected)))]});
});

(app.main.ui.workspace.sidebar.debug_shape_info.debug_shape_info_STAR_.displayName = "debug-shape-info*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.debug_shape_info.js.map
