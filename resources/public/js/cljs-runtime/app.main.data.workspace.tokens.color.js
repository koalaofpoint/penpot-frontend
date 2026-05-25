import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.tokens.js";
import "./app.config.js";
import "./app.main.data.tinycolor.js";
import "./app.main.data.tokenscript.js";
goog.provide('app.main.data.workspace.tokens.color');
app.main.data.workspace.tokens.color.color_bullet_color = (function app$main$data$workspace$tokens$color$color_bullet_color(token_color_value){
var temp__5825__auto__ = app.main.data.tinycolor.valid_color(token_color_value);
if(cljs.core.truth_(temp__5825__auto__)){
var tc = temp__5825__auto__;
if(cljs.core.truth_(app.main.data.tinycolor.alpha(tc))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),app.main.data.tinycolor.__GT_hex_string(tc),new cljs.core.Keyword(null,"opacity","opacity",397153780),app.main.data.tinycolor.alpha(tc)], null);
} else {
return app.main.data.tinycolor.__GT_hex_string(tc);
}
} else {
return null;
}
});
app.main.data.workspace.tokens.color.resolved_token_bullet_color = (function app$main$data$workspace$tokens$color$resolved_token_bullet_color(p__79349){
var map__79351 = p__79349;
var map__79351__$1 = cljs.core.__destructure_map(map__79351);
var token = map__79351__$1;
var resolved_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79351__$1,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500))){
if(cljs.core.truth_((function (){var and__5023__auto__ = resolved_value;
if(cljs.core.truth_(and__5023__auto__)){
return app.main.data.tokenscript.color_symbol_QMARK_(resolved_value);
} else {
return and__5023__auto__;
}
})())){
return app.main.data.tokenscript.color_symbol__GT_penpot_color(resolved_value);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = resolved_value;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.files.tokens.color_token_QMARK_(token);
} else {
return and__5023__auto__;
}
})())){
return app.main.data.workspace.tokens.color.color_bullet_color(resolved_value);
} else {
return null;
}
}
});

//# sourceMappingURL=app.main.data.workspace.tokens.color.js.map
