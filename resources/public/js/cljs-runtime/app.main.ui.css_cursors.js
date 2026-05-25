import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.cursors.js";
import "./app.util.css.js";
goog.provide('app.main.ui.css_cursors');
app.main.ui.css_cursors.angle_step = (10);
/**
 * Returns the class name of a static cursor
 */
app.main.ui.css_cursors.get_static = (function app$main$ui$css_cursors$get_static(name){
return ""+"cursor-"+(name ?? "");
});
/**
 * Returns the class name of a dynamic cursor (with rotation)
 */
app.main.ui.css_cursors.get_dynamic = (function app$main$ui$css_cursors$get_dynamic(name,rotation){
return ""+"cursor-"+(name ?? "")+"-"+(cljs.core.mod((Math.floor((rotation / app.main.ui.css_cursors.angle_step)) * app.main.ui.css_cursors.angle_step),(360)) ?? "");
});
/**
 * Initializes a static cursor style
 */
app.main.ui.css_cursors.init_static_cursor_style = (function app$main$ui$css_cursors$init_static_cursor_style(style,name,value){
return style.add(""+".cursor-"+(name ?? ""),(function (){var obj73589 = ({"cursor":""+(value ?? "")+" !important"});
return obj73589;
})());
});
/**
 * Initializes a dynamic cursor style
 */
app.main.ui.css_cursors.init_dynamic_cursor_style = (function app$main$ui$css_cursors$init_dynamic_cursor_style(style,name,fn){
var rotations = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),app.main.ui.css_cursors.angle_step));
var seq__73590 = cljs.core.seq(rotations);
var chunk__73591 = null;
var count__73592 = (0);
var i__73593 = (0);
while(true){
if((i__73593 < count__73592)){
var rotation = chunk__73591.cljs$core$IIndexed$_nth$arity$2(null,i__73593);
style.add(""+".cursor-"+(name ?? "")+"-"+(rotation ?? ""),(function (){var obj73599 = ({"cursor":""+((fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(rotation) : fn.call(null,rotation)) ?? "")+" !important"});
return obj73599;
})());


var G__73602 = seq__73590;
var G__73603 = chunk__73591;
var G__73604 = count__73592;
var G__73605 = (i__73593 + (1));
seq__73590 = G__73602;
chunk__73591 = G__73603;
count__73592 = G__73604;
i__73593 = G__73605;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__73590);
if(temp__5825__auto__){
var seq__73590__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73590__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__73590__$1);
var G__73606 = cljs.core.chunk_rest(seq__73590__$1);
var G__73607 = c__5548__auto__;
var G__73608 = cljs.core.count(c__5548__auto__);
var G__73609 = (0);
seq__73590 = G__73606;
chunk__73591 = G__73607;
count__73592 = G__73608;
i__73593 = G__73609;
continue;
} else {
var rotation = cljs.core.first(seq__73590__$1);
style.add(""+".cursor-"+(name ?? "")+"-"+(rotation ?? ""),(function (){var obj73601 = ({"cursor":""+((fn.cljs$core$IFn$_invoke$arity$1 ? fn.cljs$core$IFn$_invoke$arity$1(rotation) : fn.call(null,rotation)) ?? "")+" !important"});
return obj73601;
})());


var G__73610 = cljs.core.next(seq__73590__$1);
var G__73611 = null;
var G__73612 = (0);
var G__73613 = (0);
seq__73590 = G__73610;
chunk__73591 = G__73611;
count__73592 = G__73612;
i__73593 = G__73613;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Initializes all cursor styles
 */
app.main.ui.css_cursors.init_styles = (function app$main$ui$css_cursors$init_styles(){
var style = app.util.css.create_style("css-cursors");
app.main.ui.css_cursors.init_static_cursor_style(style,"comments",app.main.ui.cursors.comments);

app.main.ui.css_cursors.init_static_cursor_style(style,"create-artboard",app.main.ui.cursors.create_artboard);

app.main.ui.css_cursors.init_static_cursor_style(style,"create-ellipse",app.main.ui.cursors.create_ellipse);

app.main.ui.css_cursors.init_static_cursor_style(style,"create-polygon",app.main.ui.cursors.create_polygon);

app.main.ui.css_cursors.init_static_cursor_style(style,"create-rectangle",app.main.ui.cursors.create_rectangle);

app.main.ui.css_cursors.init_static_cursor_style(style,"create-shape",app.main.ui.cursors.create_shape);

app.main.ui.css_cursors.init_static_cursor_style(style,"duplicate",app.main.ui.cursors.duplicate);

app.main.ui.css_cursors.init_static_cursor_style(style,"hand",app.main.ui.cursors.hand);

app.main.ui.css_cursors.init_static_cursor_style(style,"move-pointer",app.main.ui.cursors.move_pointer);

app.main.ui.css_cursors.init_static_cursor_style(style,"pen",app.main.ui.cursors.pen);

app.main.ui.css_cursors.init_static_cursor_style(style,"pen-node",app.main.ui.cursors.pen_node);

app.main.ui.css_cursors.init_static_cursor_style(style,"pencil",app.main.ui.cursors.pencil);

app.main.ui.css_cursors.init_static_cursor_style(style,"picker",app.main.ui.cursors.picker);

app.main.ui.css_cursors.init_static_cursor_style(style,"pointer-inner",app.main.ui.cursors.pointer_inner);

app.main.ui.css_cursors.init_static_cursor_style(style,"pointer-move",app.main.ui.cursors.pointer_move);

app.main.ui.css_cursors.init_static_cursor_style(style,"pointer-node",app.main.ui.cursors.pointer_node);

app.main.ui.css_cursors.init_static_cursor_style(style,"resize-alt",app.main.ui.cursors.resize_alt);

app.main.ui.css_cursors.init_static_cursor_style(style,"zoom",app.main.ui.cursors.zoom);

app.main.ui.css_cursors.init_static_cursor_style(style,"zoom-in",app.main.ui.cursors.zoom_in);

app.main.ui.css_cursors.init_static_cursor_style(style,"zoom-out",app.main.ui.cursors.zoom_out);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"resize-ew",app.main.ui.cursors.resize_ew);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"resize-nesw",app.main.ui.cursors.resize_nesw);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"resize-ns",app.main.ui.cursors.resize_ns);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"resize-nwse",app.main.ui.cursors.resize_nwse);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"rotate",app.main.ui.cursors.rotate);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"text",app.main.ui.cursors.text);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"scale-ew",app.main.ui.cursors.scale_ew);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"scale-nesw",app.main.ui.cursors.scale_nesw);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"scale-ns",app.main.ui.cursors.scale_ns);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"scale-nwse",app.main.ui.cursors.scale_nwse);

app.main.ui.css_cursors.init_dynamic_cursor_style(style,"resize-ew-2",app.main.ui.cursors.resize_ew_2);

return app.main.ui.css_cursors.init_dynamic_cursor_style(style,"resize-ns-2",app.main.ui.cursors.resize_ns_2);
});

//# sourceMappingURL=app.main.ui.css_cursors.js.map
