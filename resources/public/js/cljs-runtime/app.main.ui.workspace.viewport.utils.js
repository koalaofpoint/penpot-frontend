import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.math.js";
import "./app.main.ui.css_cursors.js";
import "./app.main.ui.formats.js";
goog.provide('app.main.ui.workspace.viewport.utils');
/**
 * Format a viewbox to a string
 */
app.main.ui.workspace.viewport.utils.format_viewbox = (function app$main$ui$workspace$viewport$utils$format_viewbox(vbox){
return ""+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(vbox,(0))) ?? "")+" "+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(vbox,(0))) ?? "")+" "+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(vbox,(0))) ?? "")+" "+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(vbox,(0))) ?? "");
});
app.main.ui.workspace.viewport.utils.get_cursor = (function app$main$ui$workspace$viewport$utils$get_cursor(cursor){
var G__73614 = cursor;
var G__73614__$1 = (((G__73614 instanceof cljs.core.Keyword))?G__73614.fqn:null);
switch (G__73614__$1) {
case "hand":
return app.main.ui.css_cursors.get_static("hand");

break;
case "comments":
return app.main.ui.css_cursors.get_static("comments");

break;
case "create-artboard":
return app.main.ui.css_cursors.get_static("create-artboard");

break;
case "create-rectangle":
return app.main.ui.css_cursors.get_static("create-rectangle");

break;
case "create-ellipse":
return app.main.ui.css_cursors.get_static("create-ellipse");

break;
case "pen":
return app.main.ui.css_cursors.get_static("pen");

break;
case "pencil":
return app.main.ui.css_cursors.get_static("pencil");

break;
case "create-shape":
return app.main.ui.css_cursors.get_static("create-shape");

break;
case "duplicate":
return app.main.ui.css_cursors.get_static("duplicate");

break;
case "zoom":
return app.main.ui.css_cursors.get_static("zoom");

break;
case "zoom-in":
return app.main.ui.css_cursors.get_static("zoom-in");

break;
case "zoom-out":
return app.main.ui.css_cursors.get_static("zoom-out");

break;
default:
return app.main.ui.css_cursors.get_static("pointer-inner");

}
});
app.main.ui.workspace.viewport.utils.text_transform = (function app$main$ui$workspace$viewport$utils$text_transform(p__73615,zoom){
var map__73616 = p__73615;
var map__73616__$1 = cljs.core.__destructure_map(map__73616);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73616__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73616__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inv_zoom = ((1) / zoom);
return ""+"scale("+(inv_zoom ?? "")+", "+(inv_zoom ?? "")+") translate("+((zoom * x) ?? "")+", "+((zoom * y) ?? "")+")";
});
app.main.ui.workspace.viewport.utils.left_QMARK_ = (function app$main$ui$workspace$viewport$utils$left_QMARK_(cur,cand){
var closex_QMARK_ = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cand),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cur),0.01);
if(((closex_QMARK_) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cand) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cur))))){
return cand;
} else {
if(closex_QMARK_){
return cur;
} else {
if((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cand) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cur))){
return cand;
} else {
return cur;

}
}
}
});
app.main.ui.workspace.viewport.utils.top_QMARK_ = (function app$main$ui$workspace$viewport$utils$top_QMARK_(cur,cand){
var closey_QMARK_ = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cand),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cur));
if(cljs.core.truth_((function (){var and__5023__auto__ = closey_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cand) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cur));
} else {
return and__5023__auto__;
}
})())){
return cand;
} else {
if(cljs.core.truth_(closey_QMARK_)){
return cur;
} else {
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cand) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cur))){
return cand;
} else {
return cur;

}
}
}
});
app.main.ui.workspace.viewport.utils.right_QMARK_ = (function app$main$ui$workspace$viewport$utils$right_QMARK_(cur,cand){
var closex_QMARK_ = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cand),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cur));
if(cljs.core.truth_((function (){var and__5023__auto__ = closex_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cand) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cur));
} else {
return and__5023__auto__;
}
})())){
return cand;
} else {
if(cljs.core.truth_(closex_QMARK_)){
return cur;
} else {
if((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cand) > new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cur))){
return cand;
} else {
return cur;

}
}
}
});
app.main.ui.workspace.viewport.utils.title_transform = (function app$main$ui$workspace$viewport$utils$title_transform(p__73617,zoom,grid_edition_QMARK_){
var map__73618 = p__73617;
var map__73618__$1 = cljs.core.__destructure_map(map__73618);
var shape = map__73618__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73618__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var leftmost = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.viewport.utils.left_QMARK_,points);
var topmost = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.viewport.utils.top_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([leftmost]),points));
var rightmost = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.viewport.utils.right_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([topmost,leftmost]),points));
if((((!((leftmost == null)))) && ((((!((topmost == null)))) && ((!((rightmost == null)))))))){
var left_top = app.common.geom.point.to_vec(leftmost,topmost);
var left_top_angle = app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$1(left_top);
var top_right = app.common.geom.point.to_vec(topmost,rightmost);
var top_right_angle = app.common.geom.point.angle.cljs$core$IFn$_invoke$arity$1(top_right);
var vec__73619 = (((app.common.math.abs(left_top_angle) < app.common.math.abs(top_right_angle)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [leftmost,left_top_angle,left_top,app.common.geom.point.perpendicular(left_top)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [topmost,top_right_angle,top_right,app.common.geom.point.perpendicular(top_right)], null));
var label_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73619,(0),null);
var angle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73619,(1),null);
var h_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73619,(2),null);
var v_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73619,(3),null);
var delta_x = (cljs.core.truth_(grid_edition_QMARK_)?(40):(0));
var delta_y = (cljs.core.truth_(grid_edition_QMARK_)?(50):(10));
var label_pos__$1 = app.common.geom.point.subtract(app.common.geom.point.subtract(label_pos,app.common.geom.point.scale(app.common.geom.point.unit(v_pos),(delta_y / zoom))),app.common.geom.point.scale(app.common.geom.point.unit(h_pos),(delta_x / zoom)));
return ""+"rotate("+(angle ?? "")+" "+(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(label_pos__$1) ?? "")+","+(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(label_pos__$1) ?? "")+") scale("+(((1) / zoom) ?? "")+", "+(((1) / zoom) ?? "")+") translate("+((zoom * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(label_pos__$1)) ?? "")+", "+((zoom * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(label_pos__$1)) ?? "")+")";
} else {
return null;
}
});

//# sourceMappingURL=app.main.ui.workspace.viewport.utils.js.map
