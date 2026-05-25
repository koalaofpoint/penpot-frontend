import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.math.js";
goog.provide('app.render_wasm.serializers.color');
/**
 * Takes a hex color in #rrggbb format, and an opacity value from 0 to 1 and returns its 32-bit argb representation
 */
app.render_wasm.serializers.color.hex__GT_u32argb = (function app$render_wasm$serializers$color$hex__GT_u32argb(hex,opacity){
var rgb = parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex,(1)),(16));
var a = app.common.math.floor(((function (){var or__5025__auto__ = opacity;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})() * (255)));
return (((a << (24)) | rgb) >>> (0));
});

//# sourceMappingURL=app.render_wasm.serializers.color.js.map
