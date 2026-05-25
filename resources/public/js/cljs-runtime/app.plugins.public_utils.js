import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.plugins.format.js";
import "./app.plugins.shape.js";
import "./app.plugins.utils.js";
goog.provide('app.plugins.public_utils');
app.plugins.public_utils.centerShapes = (function app$plugins$public_utils$centerShapes(shapes){
if((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"centerShapes","centerShapes",-1359078552),shapes);
} else {
var shapes__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.plugins.utils.proxy__GT_shape,shapes);
return app.plugins.format.format_point(app.common.geom.rect.rect__GT_center(app.common.geom.shapes.shapes__GT_rect(shapes__$1)));

}
});
goog.exportSymbol('app.plugins.public_utils.centerShapes', app.plugins.public_utils.centerShapes);

//# sourceMappingURL=app.plugins.public_utils.js.map
