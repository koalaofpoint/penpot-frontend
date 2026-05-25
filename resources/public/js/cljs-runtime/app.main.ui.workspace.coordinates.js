import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.streams.js";
import "./app.main.ui.hooks.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.coordinates');
app.main.ui.workspace.coordinates.coordinates = (function app$main$ui$workspace$coordinates$coordinates(props_77814){
var map__77815 = rumext.v2.util.wrap_props(props_77814);
var map__77815__$1 = cljs.core.__destructure_map(map__77815);
var colorpalette_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77815__$1,new cljs.core.Keyword(null,"colorpalette?","colorpalette?",-706812758));
var coords = app.main.ui.hooks.use_rxsub(app.main.streams.mouse_position);
return rumext.v2.jsxs("div",{'className':(cljs.core.truth_(colorpalette_QMARK_)?"main_ui_workspace_coordinates__container-color-palette-open":"")+" "+"main_ui_workspace_coordinates__container",'children':[rumext.v2.jsx("span",{'alt':"x",'className':"main_ui_workspace_coordinates__coordinate",'children':["X: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(coords,"-"))].join('')}),rumext.v2.jsx("span",{'alt':"y",'className':"main_ui_workspace_coordinates__coordinate",'children':["Y: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(coords,"-"))].join('')})]});
});

(app.main.ui.workspace.coordinates.coordinates.displayName = "coordinates");


//# sourceMappingURL=app.main.ui.workspace.coordinates.js.map
