import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.common.uuid.js";
import "./app.main.ui.formats.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.measurements');
app.main.ui.measurements.font_size = (11);
app.main.ui.measurements.selection_rect_width = (1);
app.main.ui.measurements.select_color = "var(--color-accent-tertiary)";
app.main.ui.measurements.select_guide_width = (1);
app.main.ui.measurements.select_guide_dasharray = (5);
app.main.ui.measurements.hover_color = "var(--color-accent-quaternary)";
app.main.ui.measurements.size_display_color = "var(--app-white)";
app.main.ui.measurements.size_display_opacity = 0.7;
app.main.ui.measurements.size_display_text_color = "var(--app-black)";
app.main.ui.measurements.size_display_width_min = (50);
app.main.ui.measurements.size_display_width_max = (75);
app.main.ui.measurements.size_display_height = (16);
app.main.ui.measurements.distance_color = "var(--color-accent-quaternary)";
app.main.ui.measurements.distance_text_color = "var(--app-white)";
app.main.ui.measurements.distance_border_radius = (2);
app.main.ui.measurements.distance_pill_width = (50);
app.main.ui.measurements.distance_pill_height = (16);
app.main.ui.measurements.distance_line_stroke = (1);
app.main.ui.measurements.bound__GT_selrect = (function app$main$ui$measurements$bound__GT_selrect(bounds){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"x2","x2",-1362513475),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds)),new cljs.core.Keyword(null,"y2","y2",-718691301),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds)),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds)], null);
});
/**
 * Calculates coordinates for the selection guides
 */
app.main.ui.measurements.calculate_guides = (function app$main$ui$measurements$calculate_guides(bounds,selrect){
var map__74773 = bounds;
var map__74773__$1 = cljs.core.__destructure_map(map__74773);
var bounds_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74773__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var bounds_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74773__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__74774 = selrect;
var map__74774__$1 = cljs.core.__destructure_map(map__74774);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74774__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74774__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74774__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74774__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds),y,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds) + bounds_width),y], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds),(y + height),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds) + bounds_width),(y + height)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds),x,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds) + bounds_height)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + width),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds),(x + width),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds) + bounds_height)], null)], null);
});
/**
 * Given a start/end from two shapes gives the distance lines
 */
app.main.ui.measurements.calculate_distance_lines = (function app$main$ui$measurements$calculate_distance_lines(from_s,from_e,to_s,to_e){
var ss = (to_s - from_s);
var se = (to_e - from_s);
var es = (to_s - from_e);
var ee = (to_e - from_e);
var G__74775 = cljs.core.PersistentVector.EMPTY;
var G__74775__$1 = (((((((ss < (0))) && ((se > (0))))) || ((((((ss > (0))) && ((ee < (0))))) || ((((ss < (0))) && ((ss > se))))))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74775,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_s,(from_s + ss)], null)):G__74775);
var G__74775__$2 = (((((se < (0))) && ((ss <= se))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74775__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_s,(from_s + se)], null)):G__74775__$1);
var G__74775__$3 = (((((es > (0))) && ((es <= ee))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74775__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_e,(from_e + es)], null)):G__74775__$2);
if((((((ee > (0))) && ((es < (0))))) || ((((((ee < (0))) && ((ss > (0))))) || ((((ee > (0))) && ((ee < es)))))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__74775__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_e,(from_e + ee)], null));
} else {
return G__74775__$3;
}
});
app.main.ui.measurements.size_display = (function app$main$ui$measurements$size_display(props_74784){
var map__74787 = rumext.v2.util.wrap_props(props_74784);
var map__74787__$1 = cljs.core.__destructure_map(map__74787);
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74787__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74787__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__74788 = selrect;
var map__74788__$1 = cljs.core.__destructure_map(map__74788);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74788__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74788__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74788__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74788__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var size_label = ""+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(width) ?? "")+" x "+(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(height) ?? "");
var rect_height = (app.main.ui.measurements.size_display_height / zoom);
var rect_width = ((((cljs.core.count(size_label) <= (9)))?app.main.ui.measurements.size_display_width_min:app.main.ui.measurements.size_display_width_max) / zoom);
var text_padding = ((4) / zoom);
return rumext.v2.jsxs("g",{'className':"size-display",'children':[rumext.v2.jsx("rect",{'x':((x + (width / (2))) + (- (rect_width / (2)))),'y':((y + height) - rect_height),'width':rect_width,'height':rect_height,'style':{'fill':app.main.ui.measurements.size_display_color,'fillOpacity':app.main.ui.measurements.size_display_opacity}}),rumext.v2.jsx("text",{'x':(((x + (width / (2))) + (- (rect_width / (2)))) + (rect_width / (2))),'y':(((y + height) + (text_padding + (rect_height / (2)))) - rect_height),'width':rect_width,'height':rect_height,'textAnchor':"middle",'style':{'fill':app.main.ui.measurements.size_display_text_color,'fontSize':(app.main.ui.measurements.font_size / zoom)},'children':size_label})]});
});

(app.main.ui.measurements.size_display.displayName = "size-display");

app.main.ui.measurements.distance_display_pill = (function app$main$ui$measurements$distance_display_pill(props_74793){
var map__74794 = rumext.v2.util.wrap_props(props_74793);
var map__74794__$1 = cljs.core.__destructure_map(map__74794);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74794__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74794__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74794__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74794__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74794__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var distance_pill_width = (app.main.ui.measurements.distance_pill_width / zoom);
var distance_pill_height = (app.main.ui.measurements.distance_pill_height / zoom);
var font_size = (app.main.ui.measurements.font_size / zoom);
var text_padding = ((3) / zoom);
var distance_border_radius = (app.main.ui.measurements.distance_border_radius / zoom);
var map__74795 = bounds;
var map__74795__$1 = cljs.core.__destructure_map(map__74795);
var bounds_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74795__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var bounds_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74795__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var rect_x = (x - (distance_pill_width / (2)));
var rect_y = (y - (distance_pill_height / (2)));
var text_x = x;
var text_y = (y + text_padding);
var offset_x = (((rect_x < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds)))?(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds) - rect_x):((((rect_x + distance_pill_width) > (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds) + bounds_width)))?((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds) + bounds_width) - (rect_x + distance_pill_width)):(0)
));
var offset_y = (((rect_y < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds)))?(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds) - rect_y):((((rect_y + distance_pill_height) > (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds) + bounds_height)))?((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds) + bounds_height) - ((rect_y + distance_pill_height) + (distance_pill_height / (2)))):(0)
));
return rumext.v2.jsxs("g",{'className':"distance-pill",'children':[rumext.v2.jsx("rect",{'x':(rect_x + offset_x),'y':(rect_y + offset_y),'rx':distance_border_radius,'ry':distance_border_radius,'width':distance_pill_width,'height':distance_pill_height,'style':{'fill':app.main.ui.measurements.distance_color}}),rumext.v2.jsx("text",{'width':distance_pill_width,'height':distance_pill_height,'children':app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(distance),'x':(text_x + offset_x),'style':{'fill':app.main.ui.measurements.distance_text_color,'fontSize':font_size},'ry':distance_border_radius,'rx':distance_border_radius,'y':(text_y + offset_y),'textAnchor':"middle"})]});
});

(app.main.ui.measurements.distance_display_pill.displayName = "distance-display-pill");

app.main.ui.measurements.selection_rect = (function app$main$ui$measurements$selection_rect(props_74797){
var map__74798 = rumext.v2.util.wrap_props(props_74797);
var map__74798__$1 = cljs.core.__destructure_map(map__74798);
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74798__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74798__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__74799 = selrect;
var map__74799__$1 = cljs.core.__destructure_map(map__74799);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74799__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74799__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74799__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74799__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var selection_rect_width = (app.main.ui.measurements.selection_rect_width / zoom);
return rumext.v2.jsx("g",{'className':"selection-rect",'children':rumext.v2.jsx("rect",{'x':x,'y':y,'width':width,'height':height,'style':{'fill':"none",'stroke':app.main.ui.measurements.hover_color,'strokeWidth':selection_rect_width}})});
});

(app.main.ui.measurements.selection_rect.displayName = "selection-rect");

app.main.ui.measurements.distance_display = (function app$main$ui$measurements$distance_display(props_74800){
var map__74801 = rumext.v2.util.wrap_props(props_74800);
var map__74801__$1 = cljs.core.__destructure_map(map__74801);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74801__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74801__$1,new cljs.core.Keyword(null,"to","to",192099007));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74801__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74801__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var fixed_x = ((app.common.geom.shapes.fully_contained_QMARK_(from,to))?(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(to) / (2))):(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(from) / (2))));
var fixed_y = ((app.common.geom.shapes.fully_contained_QMARK_(from,to))?(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(to) / (2))):(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(from) / (2))));
var v_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74802){
var vec__74803 = p__74802;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74803,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74803,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixed_x,start,fixed_x,end], null);
}),app.main.ui.measurements.calculate_distance_lines(new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(from),new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(from),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(to),new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(to)));
var h_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74806){
var vec__74807 = p__74806;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74807,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74807,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,fixed_y,end,fixed_y], null);
}),app.main.ui.measurements.calculate_distance_lines(new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(from),new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(from),new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(to),new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(to)));
var lines = app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(v_lines,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([h_lines], 0));
var distance_line_stroke = (app.main.ui.measurements.distance_line_stroke / zoom);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74810){
var vec__74811 = p__74810;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74811,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74811,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74811,(2),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74811,(3),null);
out_arr__46744__auto__.push((function (){var center_x = (x1 + ((x2 - x1) / (2)));
var center_y = (y1 + ((y2 - y1) / (2)));
var distance = app.common.geom.point.distance(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x1,y1),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x2,y2));
if(app.common.math.almost_zero_QMARK_(distance)){
return null;
} else {
return rumext.v2.jsxs("g",{'className':"distance-line",'children':[rumext.v2.jsx("line",{'x1':x1,'y1':y1,'x2':x2,'y2':y2,'style':{'stroke':app.main.ui.measurements.distance_color,'strokeWidth':distance_line_stroke}}),rumext.v2.jsx(app.main.ui.measurements.distance_display_pill,{'x':center_x,'y':center_y,'zoom':zoom,'distance':distance,'bounds':bounds})]},""+"line-"+(x1 ?? "")+"-"+(y1 ?? "")+"-"+(x2 ?? "")+"-"+(y2 ?? ""));
}
})());

return out_arr__46744__auto__;
}),[],lines);
});

(app.main.ui.measurements.distance_display.displayName = "distance-display");

app.main.ui.measurements.selection_guides = (function app$main$ui$measurements$selection_guides(props_74814){
var map__74815 = rumext.v2.util.wrap_props(props_74814);
var map__74815__$1 = cljs.core.__destructure_map(map__74815);
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74815__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74815__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74815__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
return rumext.v2.jsx("g",{'className':"selection-guides",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74816){
var vec__74817 = p__74816;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74817,(0),null);
var vec__74820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74817,(1),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74820,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74820,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74820,(2),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74820,(3),null);
out_arr__46744__auto__.push(rumext.v2.jsx("line",{'x1':x1,'y1':y1,'x2':x2,'y2':y2,'style':{'stroke':app.main.ui.measurements.select_color,'strokeWidth':(app.main.ui.measurements.select_guide_width / zoom),'strokeDasharray':(app.main.ui.measurements.select_guide_dasharray / zoom)}},""+"guide-"+(idx ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(app.main.ui.measurements.calculate_guides(bounds,selrect)))});
});

(app.main.ui.measurements.selection_guides.displayName = "selection-guides");

app.main.ui.measurements.measurement = (function app$main$ui$measurements$measurement(props_74823){
var map__74824 = rumext.v2.util.wrap_props(props_74823);
var map__74824__$1 = cljs.core.__destructure_map(map__74824);
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74824__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74824__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var selected_shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74824__$1,new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010));
var hover_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74824__$1,new cljs.core.Keyword(null,"hover-shape","hover-shape",1763258041));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74824__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var selected_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),selected_shapes);
var selected_selrect = app.common.geom.shapes.shapes__GT_rect(selected_shapes);
var hover_selrect = app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(hover_shape));
var bounds_selrect = app.main.ui.measurements.bound__GT_selrect(bounds);
var hover_selected_shape_QMARK_ = (!(cljs.core.contains_QMARK_(selected_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hover_shape))));
if(cljs.core.seq(selected_shapes)){
return rumext.v2.jsxs("g",{'className':"measurement-feedback",'pointerEvents':"none",'children':[rumext.v2.jsx(app.main.ui.measurements.selection_guides,{'selrect':selected_selrect,'bounds':bounds,'zoom':zoom}),rumext.v2.jsx(app.main.ui.measurements.size_display,{'selrect':selected_selrect,'zoom':zoom}),((((cljs.core.not(hover_shape)) || ((!(hover_selected_shape_QMARK_)))))?(cljs.core.truth_((function (){var and__5023__auto__ = frame;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame));
} else {
return and__5023__auto__;
}
})())?(function (){var frame_bb = app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(frame));
return rumext.v2.jsxs("g",{'className':"hover-shapes",'children':[rumext.v2.jsx(app.main.ui.measurements.selection_rect,{'type':new cljs.core.Keyword(null,"hover","hover",-341141711),'selrect':frame_bb,'zoom':zoom}),rumext.v2.jsx(app.main.ui.measurements.distance_display,{'from':frame_bb,'to':selected_selrect,'zoom':zoom,'bounds':bounds_selrect})]});
})():null):rumext.v2.jsxs("g",{'className':"hover-shapes",'children':[rumext.v2.jsx(app.main.ui.measurements.selection_rect,{'type':new cljs.core.Keyword(null,"hover","hover",-341141711),'selrect':hover_selrect,'zoom':zoom}),rumext.v2.jsx(app.main.ui.measurements.size_display,{'selrect':hover_selrect,'zoom':zoom}),rumext.v2.jsx(app.main.ui.measurements.distance_display,{'from':hover_selrect,'to':selected_selrect,'zoom':zoom,'bounds':bounds_selrect})]}))]});
} else {
return null;
}
});

(app.main.ui.measurements.measurement.displayName = "measurement");


//# sourceMappingURL=app.main.ui.measurements.js.map
