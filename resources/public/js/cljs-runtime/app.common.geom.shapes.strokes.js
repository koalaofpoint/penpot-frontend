import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('app.common.geom.shapes.strokes');
app.common.geom.shapes.strokes.update_stroke_width = (function app$common$geom$shapes$strokes$update_stroke_width(stroke,scale){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(stroke,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),cljs.core._STAR_,scale);
});
app.common.geom.shapes.strokes.update_strokes_width = (function app$common$geom$shapes$strokes$update_strokes_width(shape,scale){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(function (strokes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47414_SHARP_){
return app.common.geom.shapes.strokes.update_stroke_width(p1__47414_SHARP_,scale);
}),strokes);
}));
});

//# sourceMappingURL=app.common.geom.shapes.strokes.js.map
