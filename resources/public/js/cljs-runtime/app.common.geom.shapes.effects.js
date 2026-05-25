import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('app.common.geom.shapes.effects');
app.common.geom.shapes.effects.update_shadow_scale = (function app$common$geom$shapes$effects$update_shadow_scale(shadow__$1,scale){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(shadow__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),cljs.core._STAR_,scale),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),cljs.core._STAR_,scale),new cljs.core.Keyword(null,"spread","spread",862337191),cljs.core._STAR_,scale),new cljs.core.Keyword(null,"blur","blur",-453500461),cljs.core._STAR_,scale);
});
app.common.geom.shapes.effects.update_shadows_scale = (function app$common$geom$shapes$effects$update_shadows_scale(shape,scale){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803),(function (shadow__$1){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47375_SHARP_){
return app.common.geom.shapes.effects.update_shadow_scale(p1__47375_SHARP_,scale);
}),shadow__$1);
}));
});
app.common.geom.shapes.effects.update_blur_scale = (function app$common$geom$shapes$effects$update_blur_scale(shape,scale){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._STAR_,scale);
});

//# sourceMappingURL=app.common.geom.shapes.effects.js.map
