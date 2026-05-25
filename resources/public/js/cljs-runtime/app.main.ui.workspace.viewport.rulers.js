import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.hooks.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.rulers');
app.main.ui.workspace.viewport.rulers.rulers_pos = (15);
app.main.ui.workspace.viewport.rulers.rulers_size = (4);
app.main.ui.workspace.viewport.rulers.rulers_width = (1);
app.main.ui.workspace.viewport.rulers.ruler_area_size = (22);
app.main.ui.workspace.viewport.rulers.ruler_area_half_size = (app.main.ui.workspace.viewport.rulers.ruler_area_size / (2));
app.main.ui.workspace.viewport.rulers.rulers_background = "var(--panel-background-color)";
app.main.ui.workspace.viewport.rulers.selection_area_color = "var(--color-accent-tertiary)";
app.main.ui.workspace.viewport.rulers.selection_area_opacity = 0.3;
app.main.ui.workspace.viewport.rulers.over_number_size = (100);
app.main.ui.workspace.viewport.rulers.over_number_opacity = 0.8;
app.main.ui.workspace.viewport.rulers.over_number_percent = 0.75;
app.main.ui.workspace.viewport.rulers.font_size = (12);
app.main.ui.workspace.viewport.rulers.font_family = "worksans";
app.main.ui.workspace.viewport.rulers.font_color = "var(--layer-row-foreground-color)";
app.main.ui.workspace.viewport.rulers.canvas_border_radius = (12);
app.main.ui.workspace.viewport.rulers.calculate_step_size = (function app$main$ui$workspace$viewport$rulers$calculate_step_size(zoom){
if(((((0) < zoom)) && ((zoom < 0.008)))){
return (10000);
} else {
if((((0.008 < zoom)) && ((zoom < 0.015)))){
return (5000);
} else {
if((((0.015 < zoom)) && ((zoom < 0.04)))){
return (2500);
} else {
if((((0.04 < zoom)) && ((zoom < 0.07)))){
return (1000);
} else {
if((((0.07 < zoom)) && ((zoom < 0.2)))){
return (500);
} else {
if((((0.2 < zoom)) && ((zoom < 0.5)))){
return (250);
} else {
if((((0.5 < zoom)) && ((zoom < (1))))){
return (100);
} else {
if(((((1) <= zoom)) && ((zoom <= (2))))){
return (50);
} else {
if(((((2) < zoom)) && ((zoom < (4))))){
return (25);
} else {
if(((((4) < zoom)) && ((zoom < (6))))){
return (10);
} else {
if(((((6) < zoom)) && ((zoom < (15))))){
return (5);
} else {
if(((((15) < zoom)) && ((zoom < (25))))){
return (2);
} else {
if(((25) < zoom)){
return (1);
} else {
return (1);

}
}
}
}
}
}
}
}
}
}
}
}
}
});
app.main.ui.workspace.viewport.rulers.get_clip_area = (function app$main$ui$workspace$viewport$rulers$get_clip_area(vbox,zoom_inverse,axis){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
var x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + ((25) * zoom_inverse));
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox);
var width = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox) - ((21) * zoom_inverse));
var height = ((25) * zoom_inverse);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
} else {
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox);
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + ((25) * zoom_inverse));
var width = ((25) * zoom_inverse);
var height = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox) - ((21) * zoom_inverse));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
}
});
app.main.ui.workspace.viewport.rulers.get_background_area = (function app$main$ui$workspace$viewport$rulers$get_background_area(vbox,zoom_inverse,axis){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox);
var height = (app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
} else {
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox);
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + (app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse));
var width = (app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse);
var height = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox) - ((21) * zoom_inverse));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
}
});
app.main.ui.workspace.viewport.rulers.get_ruler_params = (function app$main$ui$workspace$viewport$rulers$get_ruler_params(vbox,axis){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
var start = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox);
var end = (start + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null);
} else {
var start = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox);
var end = (start + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null);
}
});
app.main.ui.workspace.viewport.rulers.get_ruler_axis = (function app$main$ui$workspace$viewport$rulers$get_ruler_axis(val,vbox,zoom_inverse,axis){
var rulers_pos = (app.main.ui.workspace.viewport.rulers.rulers_pos * zoom_inverse);
var rulers_size = (app.main.ui.workspace.viewport.rulers.rulers_size * zoom_inverse);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text-x","text-x",-1791964043),val,new cljs.core.Keyword(null,"text-y","text-y",-1680264360),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + ((-1) * zoom_inverse)),new cljs.core.Keyword(null,"line-x1","line-x1",-1747192142),val,new cljs.core.Keyword(null,"line-y1","line-y1",-790998869),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + ((2) * zoom_inverse)),new cljs.core.Keyword(null,"line-x2","line-x2",678649845),val,new cljs.core.Keyword(null,"line-y2","line-y2",1362883497),(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + ((2) * zoom_inverse)) + rulers_size)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text-x","text-x",-1791964043),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + ((-1) * zoom_inverse)),new cljs.core.Keyword(null,"text-y","text-y",-1680264360),val,new cljs.core.Keyword(null,"line-x1","line-x1",-1747192142),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + ((2) * zoom_inverse)),new cljs.core.Keyword(null,"line-y1","line-y1",-790998869),val,new cljs.core.Keyword(null,"line-x2","line-x2",678649845),(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + rulers_pos) + ((2) * zoom_inverse)) + rulers_size),new cljs.core.Keyword(null,"line-y2","line-y2",1362883497),val], null);
}
});
/**
 * Path data for the viewport outside
 */
app.main.ui.workspace.viewport.rulers.rulers_outside_path = (function app$main$ui$workspace$viewport$rulers$rulers_outside_path(x1,y1,x2,y2){
return ""+"M"+(x1 ?? "")+","+(y1 ?? "")+"L"+(x2 ?? "")+","+(y1 ?? "")+"L"+(x2 ?? "")+","+(y2 ?? "")+"L"+(x1 ?? "")+","+(y2 ?? "")+"Z";
});
/**
 * Calculates the path for the inside of the viewport frame
 */
app.main.ui.workspace.viewport.rulers.rulers_inside_path = (function app$main$ui$workspace$viewport$rulers$rulers_inside_path(x1,y1,x2,y2,br,bw){
return ""+"M"+((x1 + bw) ?? "")+","+(((y1 + bw) + br) ?? "")+"Q"+((x1 + bw) ?? "")+","+((y1 + bw) ?? "")+","+(((x1 + bw) + br) ?? "")+","+((y1 + bw) ?? "")+"L"+((x2 - br) ?? "")+","+((y1 + bw) ?? "")+"Q"+(x2 ?? "")+","+((y1 + bw) ?? "")+","+(x2 ?? "")+","+(((y1 + bw) + br) ?? "")+"L"+(x2 ?? "")+","+((y2 - br) ?? "")+"Q"+(x2 ?? "")+","+(y2 ?? "")+","+((x2 - br) ?? "")+","+(y2 ?? "")+"L"+(((x1 + bw) + br) ?? "")+","+(y2 ?? "")+"Q"+((x1 + bw) ?? "")+","+(y2 ?? "")+","+((x1 + bw) ?? "")+","+((y2 - br) ?? "")+"Z";
});
/**
 * Draws the text for the rulers in a specific axis
 */
app.main.ui.workspace.viewport.rulers.rulers_text = (function app$main$ui$workspace$viewport$rulers$rulers_text(props_80329){
var map__80330 = rumext.v2.util.wrap_props(props_80329);
var map__80330__$1 = cljs.core.__destructure_map(map__80330);
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80330__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80330__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80330__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80330__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
var zoom_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80330__$1,new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179));
var clip_id = ["clip-ruler-",app.common.data.name(axis)].join('');
var map__80331 = app.main.ui.workspace.viewport.rulers.get_ruler_params(vbox,axis);
var map__80331__$1 = cljs.core.__destructure_map(map__80331);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80331__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80331__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var minv = (function (){var x__5110__auto__ = start;
var y__5111__auto__ = (-100000);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var minv__$1 = (app.common.math.ceil((minv / step)) * step);
var maxv = (function (){var x__5113__auto__ = end;
var y__5114__auto__ = (100000);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var maxv__$1 = (app.common.math.floor((maxv / step)) * step);
var minv__$2 = (minv__$1 + cljs.core.mod(offset,step));
var maxv__$2 = (maxv__$1 + cljs.core.mod(offset,step));
var rulers_width = (app.main.ui.workspace.viewport.rulers.rulers_width * zoom_inverse);
return rumext.v2.jsxs("g",{'className':"rulers",'clipPath':["url(#",clip_id,")"].join(''),'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx("clipPath",{'id':clip_id,'children':(function (){var map__80332 = app.main.ui.workspace.viewport.rulers.get_clip_area(vbox,zoom_inverse,axis);
var map__80332__$1 = cljs.core.__destructure_map(map__80332);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80332__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80332__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80332__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80332__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return rumext.v2.jsx("rect",{'x':x,'y':y,'width':width,'height':height});
})()})}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,step_val){
out_arr__46744__auto__.push((function (){var map__80335 = app.main.ui.workspace.viewport.rulers.get_ruler_axis(step_val,vbox,zoom_inverse,axis);
var map__80335__$1 = cljs.core.__destructure_map(map__80335);
var text_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80335__$1,new cljs.core.Keyword(null,"text-x","text-x",-1791964043));
var text_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80335__$1,new cljs.core.Keyword(null,"text-y","text-y",-1680264360));
var line_x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80335__$1,new cljs.core.Keyword(null,"line-x1","line-x1",-1747192142));
var line_y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80335__$1,new cljs.core.Keyword(null,"line-y1","line-y1",-790998869));
var line_x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80335__$1,new cljs.core.Keyword(null,"line-x2","line-x2",678649845));
var line_y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80335__$1,new cljs.core.Keyword(null,"line-y2","line-y2",1362883497));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("text",{'x':text_x,'y':text_y,'textAnchor':"middle",'transform':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"y","y",-1757859776)))?["rotate(-90 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_y),")"].join(''):null),'style':{'fontSize':(app.main.ui.workspace.viewport.rulers.font_size * zoom_inverse),'fontFamily':app.main.ui.workspace.viewport.rulers.font_family,'fill':app.main.ui.workspace.viewport.rulers.font_color},'children':app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((step_val - offset))}),rumext.v2.jsx("line",{'x1':line_x1,'y1':line_y1,'x2':line_x2,'y2':line_y2,'style':{'stroke':app.main.ui.workspace.viewport.rulers.font_color,'strokeWidth':rulers_width}},["line-",app.common.data.name(axis),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step_val)].join(''))]},""+"text-"+(app.common.data.name(axis) ?? "")+"-"+(step_val ?? ""));
})());

return out_arr__46744__auto__;
}),[],cljs.core.range.cljs$core$IFn$_invoke$arity$3(minv__$2,(maxv__$2 + (1)),step))]});
});

(app.main.ui.workspace.viewport.rulers.rulers_text.displayName = "rulers-text");

app.main.ui.workspace.viewport.rulers.viewport_frame = (function app$main$ui$workspace$viewport$rulers$viewport_frame(props_80340){
var map__80344 = rumext.v2.util.wrap_props(props_80340);
var map__80344__$1 = cljs.core.__destructure_map(map__80344);
var show_rulers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80344__$1,new cljs.core.Keyword(null,"show-rulers?","show-rulers?",1630765732));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80344__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var zoom_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80344__$1,new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179));
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80344__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80344__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80344__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var map__80345 = vbox;
var map__80345__$1 = cljs.core.__destructure_map(map__80345);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80345__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80345__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80345__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80345__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x2 = (x1 + width);
var y2 = (y1 + height);
var bw = (cljs.core.truth_(show_rulers_QMARK_)?(app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse):(0));
var br = (app.main.ui.workspace.viewport.rulers.canvas_border_radius / zoom);
var bs = ((4) * zoom_inverse);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("g",{'className':"viewport-frame-background",'children':[rumext.v2.jsx("rect",{'x':(0),'y':(0),'width':(1),'height':(1),'fill':"none",'strokeWidth':0.1,'stroke':"rgba(0,0,0,0)"}),rumext.v2.jsx("path",{'d':app.main.ui.workspace.viewport.rulers.rulers_inside_path(x1,y1,x2,y2,br,bw),'fill':"none",'strokeWidth':bs,'stroke':"var(--panel-border-color)"}),rumext.v2.jsx("path",{'d':""+(app.main.ui.workspace.viewport.rulers.rulers_outside_path(x1,y1,x2,y2) ?? "")+(app.main.ui.workspace.viewport.rulers.rulers_inside_path(x1,y1,x2,y2,br,bw) ?? ""),'fillRule':"evenodd",'fill':app.main.ui.workspace.viewport.rulers.rulers_background})]}),(cljs.core.truth_(show_rulers_QMARK_)?(function (){var step = app.main.ui.workspace.viewport.rulers.calculate_step_size(zoom);
return rumext.v2.jsxs("g",{'className':"viewport-frame-rulers",'children':[rumext.v2.jsx(app.main.ui.workspace.viewport.rulers.rulers_text,{'vbox':vbox,'offset':offset_x,'step':step,'zoom-inverse':zoom_inverse,'axis':new cljs.core.Keyword(null,"x","x",2099068185)}),rumext.v2.jsx(app.main.ui.workspace.viewport.rulers.rulers_text,{'vbox':vbox,'offset':offset_y,'step':step,'zoom-inverse':zoom_inverse,'axis':new cljs.core.Keyword(null,"y","y",-1757859776)})]});
})():null)]});
});

(app.main.ui.workspace.viewport.rulers.viewport_frame.displayName = "viewport-frame");

app.main.ui.workspace.viewport.rulers.selection_area = (function app$main$ui$workspace$viewport$rulers$selection_area(props_80348){
var map__80358 = rumext.v2.util.wrap_props(props_80348);
var map__80358__$1 = cljs.core.__destructure_map(map__80358);
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80358__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var zoom_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80358__$1,new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179));
var selection_rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80358__$1,new cljs.core.Keyword(null,"selection-rect","selection-rect",-1035077680));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80358__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80358__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
return rumext.v2.jsxs("g",{'className':"selection-area",'children':[rumext.v2.jsxs("defs",{'children':[rumext.v2.jsxs("linearGradient",{'id':"selection-gradient-start",'children':[rumext.v2.jsx("stop",{'offset':"0%",'stopColor':app.main.ui.workspace.viewport.rulers.rulers_background,'stopOpacity':(0)}),rumext.v2.jsx("stop",{'offset':"40%",'stopColor':app.main.ui.workspace.viewport.rulers.rulers_background,'stopOpacity':(1)}),rumext.v2.jsx("stop",{'offset':"100%",'stopColor':app.main.ui.workspace.viewport.rulers.rulers_background,'stopOpacity':(1)})]}),rumext.v2.jsxs("linearGradient",{'id':"selection-gradient-end",'children':[rumext.v2.jsx("stop",{'offset':"0%",'stopColor':app.main.ui.workspace.viewport.rulers.rulers_background,'stopOpacity':(1)}),rumext.v2.jsx("stop",{'offset':"60%",'stopColor':app.main.ui.workspace.viewport.rulers.rulers_background,'stopOpacity':(1)}),rumext.v2.jsx("stop",{'offset':"100%",'stopColor':app.main.ui.workspace.viewport.rulers.rulers_background,'stopOpacity':(0)})]})]}),rumext.v2.jsxs("g",{'children':[rumext.v2.jsx("rect",{'x':(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selection_rect) - ((app.main.ui.workspace.viewport.rulers.over_number_size * app.main.ui.workspace.viewport.rulers.over_number_percent) * zoom_inverse)),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox),'width':(app.main.ui.workspace.viewport.rulers.over_number_size * zoom_inverse),'height':(app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse),'fill':"url('#selection-gradient-start')"}),rumext.v2.jsx("rect",{'x':(new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(selection_rect) - (app.main.ui.workspace.viewport.rulers.over_number_size * ((1) - app.main.ui.workspace.viewport.rulers.over_number_percent))),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox),'width':(app.main.ui.workspace.viewport.rulers.over_number_size * zoom_inverse),'height':(app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse),'fill':"url('#selection-gradient-end')"}),rumext.v2.jsx("rect",{'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selection_rect),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selection_rect),'height':(app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse),'style':{'fill':app.main.ui.workspace.viewport.rulers.selection_area_color,'fillOpacity':app.main.ui.workspace.viewport.rulers.selection_area_opacity}}),rumext.v2.jsx("text",{'x':(new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(selection_rect) - ((4) * zoom_inverse)),'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + (13.6 * zoom_inverse)),'textAnchor':"end",'style':{'fontSize':(app.main.ui.workspace.viewport.rulers.font_size * zoom_inverse),'fontFamily':app.main.ui.workspace.viewport.rulers.font_family,'fill':app.main.ui.workspace.viewport.rulers.selection_area_color},'children':app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(selection_rect) - offset_x))}),rumext.v2.jsx("text",{'x':(new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(selection_rect) + ((4) * zoom_inverse)),'y':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox) + (13.6 * zoom_inverse)),'textAnchor':"start",'style':{'fontSize':(app.main.ui.workspace.viewport.rulers.font_size * zoom_inverse),'fontFamily':app.main.ui.workspace.viewport.rulers.font_family,'fill':app.main.ui.workspace.viewport.rulers.selection_area_color},'children':app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(selection_rect) - offset_x))})]}),(function (){var center_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox) + (app.main.ui.workspace.viewport.rulers.ruler_area_half_size * zoom_inverse));
var center_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selection_rect) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selection_rect) / (2))) - (app.main.ui.workspace.viewport.rulers.ruler_area_half_size * zoom_inverse));
return rumext.v2.jsxs("g",{'transform':["rotate(-90 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(center_x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(center_y),")"].join(''),'children':[rumext.v2.jsx("rect",{'x':((center_x - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selection_rect) / (2))) - (app.main.ui.workspace.viewport.rulers.ruler_area_half_size * zoom_inverse)),'y':(center_y - (app.main.ui.workspace.viewport.rulers.ruler_area_half_size * zoom_inverse)),'width':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selection_rect),'height':(app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse),'style':{'fill':app.main.ui.workspace.viewport.rulers.selection_area_color,'fillOpacity':app.main.ui.workspace.viewport.rulers.selection_area_opacity}}),rumext.v2.jsx("rect",{'x':(((center_x - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selection_rect) / (2))) - (app.main.ui.workspace.viewport.rulers.ruler_area_half_size * zoom_inverse)) - (app.main.ui.workspace.viewport.rulers.over_number_size * zoom_inverse)),'y':(center_y - (app.main.ui.workspace.viewport.rulers.ruler_area_half_size * zoom_inverse)),'width':(app.main.ui.workspace.viewport.rulers.over_number_size * zoom_inverse),'height':(app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse),'style':{'fill':app.main.ui.workspace.viewport.rulers.rulers_background,'fillOpacity':app.main.ui.workspace.viewport.rulers.over_number_opacity}}),rumext.v2.jsx("rect",{'x':(((center_x - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selection_rect) / (2))) - (app.main.ui.workspace.viewport.rulers.ruler_area_half_size * zoom_inverse)) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selection_rect)),'y':(center_y - (app.main.ui.workspace.viewport.rulers.ruler_area_half_size * zoom_inverse)),'width':(app.main.ui.workspace.viewport.rulers.over_number_size * zoom_inverse),'height':(app.main.ui.workspace.viewport.rulers.ruler_area_size * zoom_inverse),'style':{'fill':app.main.ui.workspace.viewport.rulers.rulers_background,'fillOpacity':app.main.ui.workspace.viewport.rulers.over_number_opacity}}),rumext.v2.jsx("text",{'x':((center_x - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selection_rect) / (2))) - ((15) * zoom_inverse)),'y':(center_y + ((4) * zoom_inverse)),'textAnchor':"end",'style':{'fontSize':(app.main.ui.workspace.viewport.rulers.font_size * zoom_inverse),'fontFamily':app.main.ui.workspace.viewport.rulers.font_family,'fill':app.main.ui.workspace.viewport.rulers.selection_area_color},'children':app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(selection_rect) - offset_y))}),rumext.v2.jsx("text",{'x':(center_x + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selection_rect) / (2))),'y':(center_y + ((4) * zoom_inverse)),'textAnchor':"start",'style':{'fontSize':(app.main.ui.workspace.viewport.rulers.font_size * zoom_inverse),'fontFamily':app.main.ui.workspace.viewport.rulers.font_family,'fill':app.main.ui.workspace.viewport.rulers.selection_area_color},'children':app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(selection_rect) - offset_y))})]});
})()]});
});

(app.main.ui.workspace.viewport.rulers.selection_area.displayName = "selection-area");

app.main.ui.workspace.viewport.rulers.rulers = (function (p1__80360_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__80360_SHARP_,(function (new_props_80362,old_props_80363){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_80362.zoom,old_props_80363.zoom)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_80362.vbox,old_props_80363.vbox)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_80362["selected-shapes"]),(old_props_80363["selected-shapes"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_80362["show-rulers?"]),(old_props_80363["show-rulers?"]))))))));
}));
})((function app$main$ui$workspace$viewport$rulers$rulers(props_80361){
var props = props_80361;
var zoom = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"zoom");
var zoom_inverse = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"zoom-inverse");
var vbox = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"vbox");
var offset_x = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"offset-x");
var offset_y = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"offset-y");
var selected_shapes = app.main.ui.hooks.use_equal_memo(app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"selected-shapes"));
var show_rulers_QMARK_ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"show-rulers?");
var selection_rect = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_shapes)],(function (){
if(app.common.data.not_empty_QMARK_(selected_shapes)){
return app.common.geom.shapes.shapes__GT_rect(selected_shapes);
} else {
return null;
}
}));
if((!((vbox == null)))){
return rumext.v2.jsxs("g",{'className':"viewport-frame",'pointerEvents':"none",'children':[rumext.v2.jsx(app.main.ui.workspace.viewport.rulers.viewport_frame,{'show-rulers?':show_rulers_QMARK_,'zoom':zoom,'zoom-inverse':zoom_inverse,'vbox':vbox,'offset-x':offset_x,'offset-y':offset_y}),(cljs.core.truth_((function (){var and__5023__auto__ = show_rulers_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!((selection_rect == null)));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.viewport.rulers.selection_area,{'zoom':zoom,'zoom-inverse':zoom_inverse,'vbox':vbox,'selection-rect':selection_rect,'offset-x':offset_x,'offset-y':offset_y}):null)]});
} else {
return null;
}
}));

(app.main.ui.workspace.viewport.rulers.rulers.displayName = "rulers");


//# sourceMappingURL=app.main.ui.workspace.viewport.rulers.js.map
