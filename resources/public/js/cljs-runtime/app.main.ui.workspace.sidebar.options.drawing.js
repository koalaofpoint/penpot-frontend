import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.workspace.sidebar.options.drawing.frame.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.drawing');
app.main.ui.workspace.sidebar.options.drawing.drawing_options_STAR_ = (function (p1__55341_SHARP_){
return rumext.v2.throttle(p1__55341_SHARP_,(60));
})((function app$main$ui$workspace$sidebar$options$drawing$drawing_options_STAR_(props_55342){
var drawing_state = props_55342.drawingState;
var props = props_55342;
var G__55343 = new cljs.core.Keyword(null,"tool","tool",-1298696470).cljs$core$IFn$_invoke$arity$1(drawing_state);
var G__55343__$1 = (((G__55343 instanceof cljs.core.Keyword))?G__55343.fqn:null);
switch (G__55343__$1) {
case "frame":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.drawing.frame.options_STAR_,{'drawingState':drawing_state});

break;
default:
return null;

}
}));

(app.main.ui.workspace.sidebar.options.drawing.drawing_options_STAR_.displayName = "drawing-options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.drawing.js.map
