import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$tinycolor2$default.js";
import "./cuerdas.core.js";
goog.provide('app.main.data.tinycolor');
app.main.data.tinycolor.tinycolor_QMARK_ = (function app$main$data$tinycolor$tinycolor_QMARK_(x){
var and__5023__auto__ = (x instanceof shadow.js.shim.module$tinycolor2$default);
if(and__5023__auto__){
return x.isValid();
} else {
return and__5023__auto__;
}
});
app.main.data.tinycolor.hex_QMARK_ = (function app$main$data$tinycolor$hex_QMARK_(tc){
return cuerdas.core.starts_with_QMARK_(tc.getFormat(),"hex");
});
/**
 * Checks if `color-str` is a valid css color.
 */
app.main.data.tinycolor.valid_color = (function app$main$data$tinycolor$valid_color(color_str){
var tc = shadow.js.shim.module$tinycolor2$default(color_str);
if(cljs.core.truth_((function (){var and__5023__auto__ = tc.isValid();
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = tc.getFormat();
if(cljs.core.truth_(and__5023__auto____$1)){
if(app.main.data.tinycolor.hex_QMARK_(tc)){
return cuerdas.core.starts_with_QMARK_(tc.getOriginalInput(),"#");
} else {
return true;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return tc;
} else {
return null;
}
});
app.main.data.tinycolor.hex_without_hash_prefix_QMARK_ = (function app$main$data$tinycolor$hex_without_hash_prefix_QMARK_(color_str){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(color_str))){
var tc = shadow.js.shim.module$tinycolor2$default(color_str);
return cuerdas.core.starts_with_QMARK_(tc.getFormat(),"hex");
} else {
return null;
}
});
/**
 * Stringify `tc` to `format`, uses `hex` as per default.
 */
app.main.data.tinycolor.__GT_string = (function app$main$data$tinycolor$__GT_string(tc,format){
var format_SINGLEQUOTE_ = (function (){var G__71804 = format;
switch (G__71804) {
case "rgba":
return "rgb";

break;
case "hsva":
return "hsv";

break;
case "rgb":
return "rgb";

break;
case "hsv":
return "hsv";

break;
default:
return "hex";

}
})();
return tc.toString(format_SINGLEQUOTE_);
});
app.main.data.tinycolor.__GT_hex_string = (function app$main$data$tinycolor$__GT_hex_string(tc){
if(cljs.core.truth_(app.main.data.tinycolor.tinycolor_QMARK_(tc))){
} else {
throw (new Error("Assert failed: (tinycolor? tc)"));
}

return tc.toHexString();
});
app.main.data.tinycolor.color_format = (function app$main$data$tinycolor$color_format(tc){
if(cljs.core.truth_(app.main.data.tinycolor.tinycolor_QMARK_(tc))){
} else {
throw (new Error("Assert failed: (tinycolor? tc)"));
}

return tc.getFormat();
});
app.main.data.tinycolor.alpha = (function app$main$data$tinycolor$alpha(tc){
if(cljs.core.truth_(app.main.data.tinycolor.tinycolor_QMARK_(tc))){
} else {
throw (new Error("Assert failed: (tinycolor? tc)"));
}

return tc.getAlpha();
});
app.main.data.tinycolor.set_alpha = (function app$main$data$tinycolor$set_alpha(tc,alpha){
if(cljs.core.truth_(app.main.data.tinycolor.tinycolor_QMARK_(tc))){
} else {
throw (new Error("Assert failed: (tinycolor? tc)"));
}

return tc.setAlpha(alpha);
});

//# sourceMappingURL=app.main.data.tinycolor.js.map
