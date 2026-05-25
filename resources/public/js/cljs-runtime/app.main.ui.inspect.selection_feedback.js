import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.shapes.js";
import "./app.main.ui.measurements.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.selection_feedback');
app.main.ui.inspect.selection_feedback.select_color = "var(--color-accent-tertiary)";
app.main.ui.inspect.selection_feedback.selection_rect_width = (1);
app.main.ui.inspect.selection_feedback.select_guide_width = (1);
app.main.ui.inspect.selection_feedback.select_guide_dasharray = (5);
app.main.ui.inspect.selection_feedback.resolve_shapes = (function app$main$ui$inspect$selection_feedback$resolve_shapes(objects,ids){
var resolve_shape = app.common.data.getf(objects);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(resolve_shape),ids);
});
app.main.ui.inspect.selection_feedback.frame__GT_bounds = (function app$main$ui$inspect$selection_feedback$frame__GT_bounds(frame){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame)], null);
});
app.main.ui.inspect.selection_feedback.selection_rect = (function app$main$ui$inspect$selection_feedback$selection_rect(props_74841){
var map__74842 = rumext.v2.util.wrap_props(props_74841);
var map__74842__$1 = cljs.core.__destructure_map(map__74842);
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74842__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74842__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__74843 = selrect;
var map__74843__$1 = cljs.core.__destructure_map(map__74843);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74843__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74843__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74843__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74843__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var selection_rect_width = (app.main.ui.inspect.selection_feedback.selection_rect_width / zoom);
return rumext.v2.jsx("g",{'className':"selection-rect",'children':rumext.v2.jsx("rect",{'x':x,'y':y,'width':width,'height':height,'style':{'fill':"none",'stroke':app.main.ui.inspect.selection_feedback.select_color,'strokeWidth':selection_rect_width}})});
});

(app.main.ui.inspect.selection_feedback.selection_rect.displayName = "selection-rect");

app.main.ui.inspect.selection_feedback.selection_feedback = (function app$main$ui$inspect$selection_feedback$selection_feedback(props_74844){
var map__74845 = rumext.v2.util.wrap_props(props_74844);
var map__74845__$1 = cljs.core.__destructure_map(map__74845);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74845__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74845__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74845__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74845__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__74846 = local;
var map__74846__$1 = cljs.core.__destructure_map(map__74846);
var hover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74846__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74846__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74846__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var shapes = app.main.ui.inspect.selection_feedback.resolve_shapes(objects,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hover], null));
var hover_shape = (function (){var or__5025__auto__ = cljs.core.first(shapes);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return frame;
}
})();
var selected_shapes = app.main.ui.inspect.selection_feedback.resolve_shapes(objects,selected);
var selrect = app.common.geom.shapes.shapes__GT_rect(selected_shapes);
if(app.common.data.not_empty_QMARK_(selected_shapes)){
return rumext.v2.jsxs("g",{'className':"selection-feedback",'pointerEvents':"none",'children':[rumext.v2.jsxs("g",{'className':"selected-shapes",'children':[rumext.v2.jsx(app.main.ui.inspect.selection_feedback.selection_rect,{'selrect':selrect,'zoom':zoom}),rumext.v2.jsx(app.main.ui.measurements.size_display,{'selrect':selrect,'zoom':zoom})]}),rumext.v2.jsx(app.main.ui.measurements.measurement,{'bounds':cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(size,new cljs.core.Keyword(null,"x","x",2099068185),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(0)], 0)),'selected-shapes':selected_shapes,'hover-shape':hover_shape,'zoom':zoom})]});
} else {
return null;
}
});

(app.main.ui.inspect.selection_feedback.selection_feedback.displayName = "selection-feedback");


//# sourceMappingURL=app.main.ui.inspect.selection_feedback.js.map
