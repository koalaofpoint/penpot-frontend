import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.tokens.js";
import "./app.common.types.component.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.shape.radius.js";
import "./app.common.types.shape.token.js";
import "./app.common.types.stroke.js";
import "./app.common.types.text.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.common.types.typography.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.notifications.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.data.tinycolor.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.data.workspace.wasm_text.js";
import "./app.main.features.js";
import "./app.main.fonts.js";
import "./app.main.store.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.tokens.application');
app.main.data.workspace.tokens.application.update_shape_radius_all = (function app$main$data$workspace$tokens$application$update_shape_radius_all(var_args){
var G__51986 = arguments.length;
switch (G__51986) {
case 3:
return app.main.data.workspace.tokens.application.update_shape_radius_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_shape_radius_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_shape_radius_all.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_shape_radius_all.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_shape_radius_all.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if(typeof value === 'number'){
var value__$1 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = value;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(shape_ids,(function (shape){
return app.common.types.shape.radius.set_radius_to_all_corners(shape,value__$1);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.token.border_radius_keys], null));
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_shape_radius_all.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_shape_radius_for_corners = (function app$main$data$workspace$tokens$application$update_shape_radius_for_corners(var_args){
var G__52003 = arguments.length;
switch (G__52003) {
case 3:
return app.main.data.workspace.tokens.application.update_shape_radius_for_corners.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_shape_radius_for_corners.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_shape_radius_for_corners.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_shape_radius_for_corners.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_shape_radius_for_corners.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if(typeof value === 'number'){
var value__$1 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = value;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(shape_ids,(function (shape){
return app.common.types.shape.radius.set_radius_for_corners(shape,attributes,value__$1);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.token.border_radius_keys], null));
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_shape_radius_for_corners.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_opacity = (function app$main$data$workspace$tokens$application$update_opacity(var_args){
var G__52015 = arguments.length;
switch (G__52015) {
case 3:
return app.main.data.workspace.tokens.application.update_opacity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_opacity.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_opacity.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_opacity.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_opacity.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if(((((0) <= value)) && ((value <= (1))))){
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(shape_ids,(function (p1__52013_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52013_SHARP_,new cljs.core.Keyword(null,"opacity","opacity",397153780),value);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null));
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_opacity.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_rotation = (function app$main$data$workspace$tokens$application$update_rotation(var_args){
var G__52020 = arguments.length;
switch (G__52020) {
case 3:
return app.main.data.workspace.tokens.application.update_rotation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_rotation.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_rotation.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_rotation.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_rotation.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.update_shape_rotation_52024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.update_shape_rotation_52024 = (function (value,shape_ids,_attributes,page_id,meta52025){
this.value = value;
this.shape_ids = shape_ids;
this._attributes = _attributes;
this.page_id = page_id;
this.meta52025 = meta52025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.update_shape_rotation_52024.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_shape_rotation_52024.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","update-shape-rotation","app.main.data.workspace.tokens.application/update-shape-rotation",-436751301);
}));

(app.main.data.workspace.tokens.application.update_shape_rotation_52024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52026,meta52025__$1){
var self__ = this;
var _52026__$1 = this;
return (new app.main.data.workspace.tokens.application.update_shape_rotation_52024(self__.value,self__.shape_ids,self__._attributes,self__.page_id,meta52025__$1));
}));

(app.main.data.workspace.tokens.application.update_shape_rotation_52024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52026){
var self__ = this;
var _52026__$1 = this;
return self__.meta52025;
}));

(app.main.data.workspace.tokens.application.update_shape_rotation_52024.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_shape_rotation_52024.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(typeof self__.value === 'number'){
return beicon.v2.core.of(app.main.data.workspace.trigger_bounding_box_cloaking(self__.shape_ids),app.main.data.workspace.increase_rotation.cljs$core$IFn$_invoke$arity$variadic(self__.shape_ids,self__.value,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)], 0)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.update_shape_rotation_52024(value,shape_ids,_attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.update_rotation.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_stroke_width = (function app$main$data$workspace$tokens$application$update_stroke_width(var_args){
var G__52031 = arguments.length;
switch (G__52031) {
case 3:
return app.main.data.workspace.tokens.application.update_stroke_width.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_stroke_width.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_stroke_width.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_stroke_width.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_stroke_width.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if(typeof value === 'number'){
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(shape_ids,(function (shape){
if(cljs.core.seq(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(0),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435)], null),value);
} else {
var stroke = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.stroke.default_stroke,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),value);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stroke], null));
}
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952)], null)], null));
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_stroke_width.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_color = (function app$main$data$workspace$tokens$application$update_color(f,value,shape_ids,page_id){
var temp__5825__auto__ = app.main.data.tinycolor.valid_color(value);
if(cljs.core.truth_(temp__5825__auto__)){
var tc = temp__5825__auto__;
var hex = app.main.data.tinycolor.__GT_hex_string(tc);
var opacity = app.main.data.tinycolor.alpha(tc);
var G__52038 = shape_ids;
var G__52039 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),hex,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity], null);
var G__52040 = (0);
var G__52041 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__52038,G__52039,G__52040,G__52041) : f.call(null,G__52038,G__52039,G__52040,G__52041));
} else {
return null;
}
});
/**
 * Transform a token color value into penpot color data structure
 */
app.main.data.workspace.tokens.application.value__GT_color = (function app$main$data$workspace$tokens$application$value__GT_color(color){
var temp__5825__auto__ = app.main.data.tinycolor.valid_color(color);
if(cljs.core.truth_(temp__5825__auto__)){
var tc = temp__5825__auto__;
var hex = app.main.data.tinycolor.__GT_hex_string(tc);
var opacity = app.main.data.tinycolor.alpha(tc);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),hex,new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity], null);
} else {
return null;
}
});
app.main.data.workspace.tokens.application.update_fill = (function app$main$data$workspace$tokens$application$update_fill(var_args){
var G__52045 = arguments.length;
switch (G__52045) {
case 3:
return app.main.data.workspace.tokens.application.update_fill.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_fill.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_fill.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_fill.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_fill.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.update_fill_52046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.update_fill_52046 = (function (value,shape_ids,_attributes,page_id,meta52047){
this.value = value;
this.shape_ids = shape_ids;
this._attributes = _attributes;
this.page_id = page_id;
this.meta52047 = meta52047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.update_fill_52046.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_fill_52046.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","update-fill","app.main.data.workspace.tokens.application/update-fill",-364177809);
}));

(app.main.data.workspace.tokens.application.update_fill_52046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52048,meta52047__$1){
var self__ = this;
var _52048__$1 = this;
return (new app.main.data.workspace.tokens.application.update_fill_52046(self__.value,self__.shape_ids,self__._attributes,self__.page_id,meta52047__$1));
}));

(app.main.data.workspace.tokens.application.update_fill_52046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52048){
var self__ = this;
var _52048__$1 = this;
return self__.meta52047;
}));

(app.main.data.workspace.tokens.application.update_fill_52046.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_fill_52046.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = app.main.data.workspace.tokens.application.value__GT_color(self__.value);
if(cljs.core.truth_(temp__5825__auto__)){
var color = temp__5825__auto__;
var update_fn = (function (p1__52042_SHARP_,p2__52043_SHARP_){
return app.main.data.workspace.colors.assoc_shape_fill(p1__52042_SHARP_,(0),p2__52043_SHARP_);
});
return app.main.data.workspace.colors.transform_fill.cljs$core$IFn$_invoke$arity$5(state,self__.shape_ids,color,update_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.update_fill_52046(value,shape_ids,_attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.update_fill.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_stroke_color = (function app$main$data$workspace$tokens$application$update_stroke_color(var_args){
var G__52052 = arguments.length;
switch (G__52052) {
case 3:
return app.main.data.workspace.tokens.application.update_stroke_color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_stroke_color.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_stroke_color.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_stroke_color.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_stroke_color.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
var temp__5825__auto__ = app.main.data.workspace.tokens.application.value__GT_color(value);
if(cljs.core.truth_(temp__5825__auto__)){
var color = temp__5825__auto__;
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(shape_ids,(function (p1__52050_SHARP_){
return app.main.data.workspace.colors.update_shape_stroke_color(p1__52050_SHARP_,(0),color);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"changed-sub-attr","changed-sub-attr",280796634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)], null)], null));
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_stroke_color.cljs$lang$maxFixedArity = 4);

/**
 * Transform a token shadow value into penpot shadow data structure
 */
app.main.data.workspace.tokens.application.value__GT_shadow = (function app$main$data$workspace$tokens$application$value__GT_shadow(value){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__52054){
var map__52055 = p__52054;
var map__52055__$1 = cljs.core.__destructure_map(map__52055);
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52055__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52055__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52055__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52055__$1,new cljs.core.Keyword(null,"spread","spread",862337191));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52055__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var inset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52055__$1,new cljs.core.Keyword(null,"inset","inset",-396367740));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),offset_x,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),offset_y,new cljs.core.Keyword(null,"blur","blur",-453500461),blur,new cljs.core.Keyword(null,"color","color",1011675173),app.main.data.workspace.tokens.application.value__GT_color(color),new cljs.core.Keyword(null,"spread","spread",862337191),spread,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__52056 = inset;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__52056)){
return new cljs.core.Keyword(null,"inner-shadow","inner-shadow",-548982250);
} else {
return new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332);

}
})()], null);
}),value);
});
app.main.data.workspace.tokens.application.update_shadow = (function app$main$data$workspace$tokens$application$update_shadow(var_args){
var G__52059 = arguments.length;
switch (G__52059) {
case 3:
return app.main.data.workspace.tokens.application.update_shadow.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_shadow.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_shadow.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_shadow.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_shadow.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if(cljs.core.sequential_QMARK_(value)){
var shadows = app.main.data.workspace.tokens.application.value__GT_shadow(value);
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(shape_ids,(function (p1__52057_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52057_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadows);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803)], null)], null));
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_shadow.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_fill_stroke = (function app$main$data$workspace$tokens$application$update_fill_stroke(var_args){
var G__52066 = arguments.length;
switch (G__52066) {
case 3:
return app.main.data.workspace.tokens.application.update_fill_stroke.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_fill_stroke.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_fill_stroke.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_fill_stroke.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_fill_stroke.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.update_fill_stroke_52067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.update_fill_stroke_52067 = (function (value,shape_ids,attributes,page_id,meta52068){
this.value = value;
this.shape_ids = shape_ids;
this.attributes = attributes;
this.page_id = page_id;
this.meta52068 = meta52068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.update_fill_stroke_52067.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_fill_stroke_52067.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","update-fill-stroke","app.main.data.workspace.tokens.application/update-fill-stroke",-1851616297);
}));

(app.main.data.workspace.tokens.application.update_fill_stroke_52067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52069,meta52068__$1){
var self__ = this;
var _52069__$1 = this;
return (new app.main.data.workspace.tokens.application.update_fill_stroke_52067(self__.value,self__.shape_ids,self__.attributes,self__.page_id,meta52068__$1));
}));

(app.main.data.workspace.tokens.application.update_fill_stroke_52067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52069){
var self__ = this;
var _52069__$1 = this;
return self__.meta52068;
}));

(app.main.data.workspace.tokens.application.update_fill_stroke_52067.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_fill_stroke_52067.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of((cljs.core.truth_(new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(self__.attributes))?app.main.data.workspace.tokens.application.update_fill.cljs$core$IFn$_invoke$arity$4(self__.value,self__.shape_ids,self__.attributes,self__.page_id):null),(cljs.core.truth_(new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(self__.attributes))?app.main.data.workspace.tokens.application.update_stroke_color.cljs$core$IFn$_invoke$arity$4(self__.value,self__.shape_ids,self__.attributes,self__.page_id):null));
}));
}

return (new app.main.data.workspace.tokens.application.update_fill_stroke_52067(value,shape_ids,attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.update_fill_stroke.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.attributes__GT_layout_gap = (function app$main$data$workspace$tokens$application$attributes__GT_layout_gap(attributes,value){
var layout_gap = cljs.core.zipmap(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),null,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),null], null), null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(value));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),layout_gap], null);
});
app.main.data.workspace.tokens.application.shape_ids_with_layout = (function app$main$data$workspace$tokens$application$shape_ids_with_layout(state,page_id,shape_ids){
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.layout.any_layout_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),app.main.data.helpers.lookup_shapes.cljs$core$IFn$_invoke$arity$3(state,page_id,shape_ids)], 0));
});
app.main.data.workspace.tokens.application.shape_ids_with_layout_parent = (function app$main$data$workspace$tokens$application$shape_ids_with_layout_parent(state,page_id,shape_ids){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__52077_SHARP_){
return app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,p1__52077_SHARP_);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),app.main.data.helpers.lookup_shapes.cljs$core$IFn$_invoke$arity$3(state,page_id,shape_ids)], 0));
});
app.main.data.workspace.tokens.application.update_layout_item_margin = (function app$main$data$workspace$tokens$application$update_layout_item_margin(var_args){
var G__52080 = arguments.length;
switch (G__52080) {
case 3:
return app.main.data.workspace.tokens.application.update_layout_item_margin.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_layout_item_margin.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_layout_item_margin.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attrs){
return app.main.data.workspace.tokens.application.update_layout_item_margin.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attrs,null);
}));

(app.main.data.workspace.tokens.application.update_layout_item_margin.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attrs,page_id){
if((typeof app.main.data.workspace.tokens.application.update_layout_item_margin_52081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.update_layout_item_margin_52081 = (function (value,shape_ids,attrs,page_id,meta52082){
this.value = value;
this.shape_ids = shape_ids;
this.attrs = attrs;
this.page_id = page_id;
this.meta52082 = meta52082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.update_layout_item_margin_52081.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_layout_item_margin_52081.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","update-layout-item-margin","app.main.data.workspace.tokens.application/update-layout-item-margin",740999564);
}));

(app.main.data.workspace.tokens.application.update_layout_item_margin_52081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52083,meta52082__$1){
var self__ = this;
var _52083__$1 = this;
return (new app.main.data.workspace.tokens.application.update_layout_item_margin_52081(self__.value,self__.shape_ids,self__.attrs,self__.page_id,meta52082__$1));
}));

(app.main.data.workspace.tokens.application.update_layout_item_margin_52081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52083){
var self__ = this;
var _52083__$1 = this;
return self__.meta52082;
}));

(app.main.data.workspace.tokens.application.update_layout_item_margin_52081.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_layout_item_margin_52081.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(typeof self__.value === 'number'){
var ids_with_layout_parent = app.main.data.workspace.tokens.application.shape_ids_with_layout_parent(state,(function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})(),self__.shape_ids);
return beicon.v2.core.of(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$3(ids_with_layout_parent,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),cljs.core.zipmap(self__.attrs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(self__.value))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.update_layout_item_margin_52081(value,shape_ids,attrs,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.update_layout_item_margin.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_layout_padding = (function app$main$data$workspace$tokens$application$update_layout_padding(var_args){
var G__52087 = arguments.length;
switch (G__52087) {
case 3:
return app.main.data.workspace.tokens.application.update_layout_padding.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_layout_padding.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_layout_padding.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attrs){
return app.main.data.workspace.tokens.application.update_layout_padding.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attrs,null);
}));

(app.main.data.workspace.tokens.application.update_layout_padding.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attrs,page_id){
if((typeof app.main.data.workspace.tokens.application.update_layout_padding_52089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.update_layout_padding_52089 = (function (value,shape_ids,attrs,page_id,meta52090){
this.value = value;
this.shape_ids = shape_ids;
this.attrs = attrs;
this.page_id = page_id;
this.meta52090 = meta52090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.update_layout_padding_52089.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_layout_padding_52089.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","update-layout-padding","app.main.data.workspace.tokens.application/update-layout-padding",1814449754);
}));

(app.main.data.workspace.tokens.application.update_layout_padding_52089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52091,meta52090__$1){
var self__ = this;
var _52091__$1 = this;
return (new app.main.data.workspace.tokens.application.update_layout_padding_52089(self__.value,self__.shape_ids,self__.attrs,self__.page_id,meta52090__$1));
}));

(app.main.data.workspace.tokens.application.update_layout_padding_52089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52091){
var self__ = this;
var _52091__$1 = this;
return self__.meta52090;
}));

(app.main.data.workspace.tokens.application.update_layout_padding_52089.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_layout_padding_52089.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(typeof self__.value === 'number'){
var ids_with_layout = app.main.data.workspace.tokens.application.shape_ids_with_layout(state,(function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})(),self__.shape_ids);
return beicon.v2.core.of(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$3(ids_with_layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),cljs.core.zipmap(self__.attrs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(self__.value))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.update_layout_padding_52089(value,shape_ids,attrs,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.update_layout_padding.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_shape_position = (function app$main$data$workspace$tokens$application$update_shape_position(var_args){
var G__52097 = arguments.length;
switch (G__52097) {
case 3:
return app.main.data.workspace.tokens.application.update_shape_position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_shape_position.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_shape_position.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_shape_position.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_shape_position.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.update_shape_position_52098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.update_shape_position_52098 = (function (value,shape_ids,attributes,page_id,meta52099){
this.value = value;
this.shape_ids = shape_ids;
this.attributes = attributes;
this.page_id = page_id;
this.meta52099 = meta52099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.update_shape_position_52098.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_shape_position_52098.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","update-shape-position","app.main.data.workspace.tokens.application/update-shape-position",-465108657);
}));

(app.main.data.workspace.tokens.application.update_shape_position_52098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52100,meta52099__$1){
var self__ = this;
var _52100__$1 = this;
return (new app.main.data.workspace.tokens.application.update_shape_position_52098(self__.value,self__.shape_ids,self__.attributes,self__.page_id,meta52099__$1));
}));

(app.main.data.workspace.tokens.application.update_shape_position_52098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52100){
var self__ = this;
var _52100__$1 = this;
return self__.meta52099;
}));

(app.main.data.workspace.tokens.application.update_shape_position_52098.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_shape_position_52098.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(typeof self__.value === 'number'){
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
}
})();
return beicon.v2.core.map((function (p1__52095_SHARP_){
return app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$3(p1__52095_SHARP_,cljs.core.zipmap(self__.attributes,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(self__.value)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id__$1], null));
}),beicon.v2.core.from(self__.shape_ids));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.update_shape_position_52098(value,shape_ids,attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.update_shape_position.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_layout_gap = (function app$main$data$workspace$tokens$application$update_layout_gap(value,shape_ids,attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.update_layout_gap_52104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.update_layout_gap_52104 = (function (value,shape_ids,attributes,page_id,meta52105){
this.value = value;
this.shape_ids = shape_ids;
this.attributes = attributes;
this.page_id = page_id;
this.meta52105 = meta52105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.update_layout_gap_52104.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_layout_gap_52104.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","update-layout-gap","app.main.data.workspace.tokens.application/update-layout-gap",1668695045);
}));

(app.main.data.workspace.tokens.application.update_layout_gap_52104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52106,meta52105__$1){
var self__ = this;
var _52106__$1 = this;
return (new app.main.data.workspace.tokens.application.update_layout_gap_52104(self__.value,self__.shape_ids,self__.attributes,self__.page_id,meta52105__$1));
}));

(app.main.data.workspace.tokens.application.update_layout_gap_52104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52106){
var self__ = this;
var _52106__$1 = this;
return self__.meta52105;
}));

(app.main.data.workspace.tokens.application.update_layout_gap_52104.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_layout_gap_52104.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(typeof self__.value === 'number'){
var ids_with_layout = app.main.data.workspace.tokens.application.shape_ids_with_layout(state,(function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})(),self__.shape_ids);
var layout_attributes = app.main.data.workspace.tokens.application.attributes__GT_layout_gap(self__.attributes,self__.value);
return beicon.v2.core.of(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$3(ids_with_layout,layout_attributes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.update_layout_gap_52104(value,shape_ids,attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.application.update_layout_sizing_limits = (function app$main$data$workspace$tokens$application$update_layout_sizing_limits(var_args){
var G__52112 = arguments.length;
switch (G__52112) {
case 3:
return app.main.data.workspace.tokens.application.update_layout_sizing_limits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_layout_sizing_limits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_layout_sizing_limits.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_layout_sizing_limits.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_layout_sizing_limits.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118 = (function (value,shape_ids,attributes,page_id,meta52119){
this.value = value;
this.shape_ids = shape_ids;
this.attributes = attributes;
this.page_id = page_id;
this.meta52119 = meta52119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","update-layout-sizing-limits","app.main.data.workspace.tokens.application/update-layout-sizing-limits",1587363227);
}));

(app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52120,meta52119__$1){
var self__ = this;
var _52120__$1 = this;
return (new app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118(self__.value,self__.shape_ids,self__.attributes,self__.page_id,meta52119__$1));
}));

(app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52120){
var self__ = this;
var _52120__$1 = this;
return self__.meta52119;
}));

(app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(typeof self__.value === 'number'){
var props = cljs.core.select_keys(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),self__.value,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),self__.value,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),self__.value,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),self__.value], null),self__.attributes);
return beicon.v2.core.of(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$3(self__.shape_ids,props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.update_layout_sizing_limits_52118(value,shape_ids,attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.update_layout_sizing_limits.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.generate_text_shape_update = (function app$main$data$workspace$tokens$application$generate_text_shape_update(txt_attrs,shape_ids,page_id){
var update_node_QMARK_ = (function (node){
return ((app.common.types.text.is_text_node_QMARK_(node)) || (app.common.types.text.is_paragraph_node_QMARK_(node)));
});
var update_fn = (function (node,_){
return app.common.types.typography.remove_typography_from_node(app.common.data.txt_merge(node,txt_attrs));
});
var affects_layout_QMARK_ = cljs.core.some((function (p1__52122_SHARP_){
return cljs.core.contains_QMARK_(txt_attrs,p1__52122_SHARP_);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null));
if((typeof app.main.data.workspace.tokens.application.generate_text_shape_update_52124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.generate_text_shape_update_52124 = (function (txt_attrs,shape_ids,page_id,update_node_QMARK_,update_fn,affects_layout_QMARK_,meta52125){
this.txt_attrs = txt_attrs;
this.shape_ids = shape_ids;
this.page_id = page_id;
this.update_node_QMARK_ = update_node_QMARK_;
this.update_fn = update_fn;
this.affects_layout_QMARK_ = affects_layout_QMARK_;
this.meta52125 = meta52125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.generate_text_shape_update_52124.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.generate_text_shape_update_52124.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","generate-text-shape-update","app.main.data.workspace.tokens.application/generate-text-shape-update",210687731);
}));

(app.main.data.workspace.tokens.application.generate_text_shape_update_52124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52126,meta52125__$1){
var self__ = this;
var _52126__$1 = this;
return (new app.main.data.workspace.tokens.application.generate_text_shape_update_52124(self__.txt_attrs,self__.shape_ids,self__.page_id,self__.update_node_QMARK_,self__.update_fn,self__.affects_layout_QMARK_,meta52125__$1));
}));

(app.main.data.workspace.tokens.application.generate_text_shape_update_52124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52126){
var self__ = this;
var _52126__$1 = this;
return self__.meta52125;
}));

(app.main.data.workspace.tokens.application.generate_text_shape_update_52124.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.generate_text_shape_update_52124.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var G__52128 = beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.shape_ids,(function (p1__52123_SHARP_){
return app.common.types.text.update_text_content(p1__52123_SHARP_,self__.update_node_QMARK_,self__.update_fn,null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)));
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.affects_layout_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return app.main.features.active_feature_QMARK_(state,"render-wasm/v1");
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.merge(G__52128,beicon.v2.core.of(app.main.data.workspace.wasm_text.resize_wasm_text_all(self__.shape_ids)));
} else {
return G__52128;
}
}));
}

return (new app.main.data.workspace.tokens.application.generate_text_shape_update_52124(txt_attrs,shape_ids,page_id,update_node_QMARK_,update_fn,affects_layout_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.application.update_line_height = (function app$main$data$workspace$tokens$application$update_line_height(var_args){
var G__52130 = arguments.length;
switch (G__52130) {
case 3:
return app.main.data.workspace.tokens.application.update_line_height.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_line_height.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_line_height.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_line_height.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_line_height.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if(typeof value === 'number'){
return app.main.data.workspace.tokens.application.generate_text_shape_update(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),value], null),shape_ids,page_id);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_line_height.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_letter_spacing = (function app$main$data$workspace$tokens$application$update_letter_spacing(var_args){
var G__52134 = arguments.length;
switch (G__52134) {
case 3:
return app.main.data.workspace.tokens.application.update_letter_spacing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_letter_spacing.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_letter_spacing.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_letter_spacing.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_letter_spacing.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if(typeof value === 'number'){
return app.main.data.workspace.tokens.application.generate_text_shape_update(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null),shape_ids,page_id);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_letter_spacing.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.warn_font_variant_not_found_BANG_ = (function app$main$data$workspace$tokens$application$warn_font_variant_not_found_BANG_(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.font-variant-not-found"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(7000)], null)));
});
app.main.data.workspace.tokens.application.update_closest_font_variant_id_by_weight = (function app$main$data$workspace$tokens$application$update_closest_font_variant_id_by_weight(txt_attrs,target_variant,font_id,on_mismatch){
var font = app.main.fonts.get_font_data(font_id);
var variant = (cljs.core.truth_(font)?app.main.fonts.find_closest_variant(font,new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(target_variant),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(target_variant)):null);
var call_on_mismatch_QMARK_ = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.fn_QMARK_(on_mismatch);
if(and__5023__auto__){
return variant;
} else {
return and__5023__auto__;
}
})())?(function (){var or__5025__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(target_variant),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(variant));
if(or__5025__auto__){
return or__5025__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(target_variant))){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(target_variant),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(variant));
} else {
return null;
}
}
})():null);
if(cljs.core.truth_(call_on_mismatch_QMARK_)){
(on_mismatch.cljs$core$IFn$_invoke$arity$0 ? on_mismatch.cljs$core$IFn$_invoke$arity$0() : on_mismatch.call(null));
} else {
}

var G__52140 = txt_attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(variant))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52140,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(variant));
} else {
return G__52140;
}
});
app.main.data.workspace.tokens.application.generate_font_family_text_shape_update = (function app$main$data$workspace$tokens$application$generate_font_family_text_shape_update(txt_attrs,shape_ids,page_id,on_mismatch){
var not_found_font = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(txt_attrs),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.uuid.zero));
var update_node_QMARK_ = (function (node){
return ((app.common.types.text.is_text_node_QMARK_(node)) || (app.common.types.text.is_paragraph_node_QMARK_(node)));
});
var update_fn = (function (node,find_closest_weight_QMARK_){
var font_id = ((not_found_font)?new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(node):new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(txt_attrs));
var txt_attrs__$1 = (function (){var G__52142 = txt_attrs;
if(cljs.core.truth_(find_closest_weight_QMARK_)){
return app.main.data.workspace.tokens.application.update_closest_font_variant_id_by_weight(G__52142,node,font_id,on_mismatch);
} else {
return G__52142;
}
})();
return app.common.types.typography.remove_typography_from_node(app.common.data.txt_merge(node,txt_attrs__$1));
});
if((typeof app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143 = (function (txt_attrs,shape_ids,page_id,on_mismatch,not_found_font,update_node_QMARK_,update_fn,meta52144){
this.txt_attrs = txt_attrs;
this.shape_ids = shape_ids;
this.page_id = page_id;
this.on_mismatch = on_mismatch;
this.not_found_font = not_found_font;
this.update_node_QMARK_ = update_node_QMARK_;
this.update_fn = update_fn;
this.meta52144 = meta52144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","generate-font-family-text-shape-update","app.main.data.workspace.tokens.application/generate-font-family-text-shape-update",1321671565);
}));

(app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52145,meta52144__$1){
var self__ = this;
var _52145__$1 = this;
return (new app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143(self__.txt_attrs,self__.shape_ids,self__.page_id,self__.on_mismatch,self__.not_found_font,self__.update_node_QMARK_,self__.update_fn,meta52144__$1));
}));

(app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52145){
var self__ = this;
var _52145__$1 = this;
return self__.meta52144;
}));

(app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var G__52146 = beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.shape_ids,(function (shape){
return app.common.types.text.update_text_content(shape,self__.update_node_QMARK_,(function (p1__52141_SHARP_){
var G__52147 = p1__52141_SHARP_;
var G__52148 = app.common.types.shape.token.font_weight_applied_QMARK_(shape);
return (self__.update_fn.cljs$core$IFn$_invoke$arity$2 ? self__.update_fn.cljs$core$IFn$_invoke$arity$2(G__52147,G__52148) : self__.update_fn.call(null,G__52147,G__52148));
}),null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.merge(G__52146,beicon.v2.core.of(app.main.data.workspace.wasm_text.resize_wasm_text_all(self__.shape_ids)));
} else {
return G__52146;
}
}));
}

return (new app.main.data.workspace.tokens.application.generate_font_family_text_shape_update_52143(txt_attrs,shape_ids,page_id,on_mismatch,not_found_font,update_node_QMARK_,update_fn,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.application.create_font_family_text_attrs = (function app$main$data$workspace$tokens$application$create_font_family_text_attrs(value){
var font_family = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2(cljs.core.first(value),/[\"']/);
var font = (function (){var G__52149 = font_family;
if((G__52149 == null)){
return null;
} else {
return app.main.fonts.find_font_family(G__52149);
}
})();
if(cljs.core.truth_(font)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"family","family",-1313145692).cljs$core$IFn$_invoke$arity$1(font)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.uuid.zero),new cljs.core.Keyword(null,"font-family","font-family",-667419874),font_family], null);
}
});
app.main.data.workspace.tokens.application.update_font_family = (function app$main$data$workspace$tokens$application$update_font_family(var_args){
var G__52151 = arguments.length;
switch (G__52151) {
case 3:
return app.main.data.workspace.tokens.application.update_font_family.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_font_family.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_font_family.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_font_family.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_font_family.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
var temp__5825__auto__ = app.main.data.workspace.tokens.application.create_font_family_text_attrs(value);
if(cljs.core.truth_(temp__5825__auto__)){
var text_attrs = temp__5825__auto__;
return app.main.data.workspace.tokens.application.generate_font_family_text_shape_update(text_attrs,shape_ids,page_id,null);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_font_family.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_font_family_interactive = (function app$main$data$workspace$tokens$application$update_font_family_interactive(var_args){
var G__52156 = arguments.length;
switch (G__52156) {
case 3:
return app.main.data.workspace.tokens.application.update_font_family_interactive.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_font_family_interactive.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_font_family_interactive.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_font_family_interactive.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_font_family_interactive.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
var temp__5825__auto__ = app.main.data.workspace.tokens.application.create_font_family_text_attrs(value);
if(cljs.core.truth_(temp__5825__auto__)){
var text_attrs = temp__5825__auto__;
return app.main.data.workspace.tokens.application.generate_font_family_text_shape_update(text_attrs,shape_ids,page_id,app.main.data.workspace.tokens.application.warn_font_variant_not_found_BANG_);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_font_family_interactive.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_font_size = (function app$main$data$workspace$tokens$application$update_font_size(var_args){
var G__52158 = arguments.length;
switch (G__52158) {
case 3:
return app.main.data.workspace.tokens.application.update_font_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_font_size.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_font_size.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_font_size.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_font_size.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if(typeof value === 'number'){
return app.main.data.workspace.tokens.application.generate_text_shape_update(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null),shape_ids,page_id);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_font_size.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_text_case = (function app$main$data$workspace$tokens$application$update_text_case(var_args){
var G__52163 = arguments.length;
switch (G__52163) {
case 3:
return app.main.data.workspace.tokens.application.update_text_case.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_text_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_text_case.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_text_case.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_text_case.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if(typeof value === 'string'){
return app.main.data.workspace.tokens.application.generate_text_shape_update(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),value], null),shape_ids,page_id);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_text_case.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_text_decoration = (function app$main$data$workspace$tokens$application$update_text_decoration(var_args){
var G__52167 = arguments.length;
switch (G__52167) {
case 3:
return app.main.data.workspace.tokens.application.update_text_decoration.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_text_decoration.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_text_decoration.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_text_decoration.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_text_decoration.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
if(cljs.core.truth_(app.common.types.token.valid_text_decoration(value))){
var css_value = (function (){var G__52168 = value;
switch (G__52168) {
case "strike-through":
return "line-through";

break;
default:
return value;

}
})();
return app.main.data.workspace.tokens.application.generate_text_shape_update(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),css_value], null),shape_ids,page_id);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_text_decoration.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_text_decoration_interactive = (function app$main$data$workspace$tokens$application$update_text_decoration_interactive(var_args){
var G__52170 = arguments.length;
switch (G__52170) {
case 3:
return app.main.data.workspace.tokens.application.update_text_decoration_interactive.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_text_decoration_interactive.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_text_decoration_interactive.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_text_decoration_interactive.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_text_decoration_interactive.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if(cljs.core.truth_(app.common.types.token.valid_text_decoration(value))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expand-text-more-options","expand-text-more-options",1399966572)));

return app.main.data.workspace.tokens.application.update_text_decoration.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,page_id);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_text_decoration_interactive.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update = (function app$main$data$workspace$tokens$application$generate_font_weight_text_shape_update(font_variant,shape_ids,page_id,on_mismatch){
var font_variant__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(font_variant,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font_variant),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(font_variant)], 0));
var update_node_QMARK_ = (function (node){
return ((app.common.types.text.is_text_node_QMARK_(node)) || (app.common.types.text.is_paragraph_node_QMARK_(node)));
});
var update_fn = (function (node,_){
var txt_attrs = app.main.data.workspace.tokens.application.update_closest_font_variant_id_by_weight(font_variant__$1,font_variant__$1,new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(node),on_mismatch);
return app.common.types.typography.remove_typography_from_node(app.common.data.txt_merge(node,txt_attrs));
});
if((typeof app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174 = (function (font_variant,shape_ids,page_id,on_mismatch,update_node_QMARK_,update_fn,meta52175){
this.font_variant = font_variant;
this.shape_ids = shape_ids;
this.page_id = page_id;
this.on_mismatch = on_mismatch;
this.update_node_QMARK_ = update_node_QMARK_;
this.update_fn = update_fn;
this.meta52175 = meta52175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","generate-font-weight-text-shape-update","app.main.data.workspace.tokens.application/generate-font-weight-text-shape-update",-1706226523);
}));

(app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52176,meta52175__$1){
var self__ = this;
var _52176__$1 = this;
return (new app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174(self__.font_variant,self__.shape_ids,self__.page_id,self__.on_mismatch,self__.update_node_QMARK_,self__.update_fn,meta52175__$1));
}));

(app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52176){
var self__ = this;
var _52176__$1 = this;
return self__.meta52175;
}));

(app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var G__52177 = beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.shape_ids,(function (p1__52172_SHARP_){
return app.common.types.text.update_text_content(p1__52172_SHARP_,self__.update_node_QMARK_,self__.update_fn,null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.merge(G__52177,beicon.v2.core.of(app.main.data.workspace.wasm_text.resize_wasm_text_all(self__.shape_ids)));
} else {
return G__52177;
}
}));
}

return (new app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update_52174(font_variant__$1,shape_ids,page_id,on_mismatch,update_node_QMARK_,update_fn,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.application.update_font_weight = (function app$main$data$workspace$tokens$application$update_font_weight(var_args){
var G__52179 = arguments.length;
switch (G__52179) {
case 3:
return app.main.data.workspace.tokens.application.update_font_weight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_font_weight.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_font_weight.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_font_weight.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_font_weight.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
var temp__5825__auto__ = app.common.types.token.valid_font_weight_variant(value);
if(cljs.core.truth_(temp__5825__auto__)){
var font_variant = temp__5825__auto__;
return app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update(font_variant,shape_ids,page_id,null);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_font_weight.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_font_weight_interactive = (function app$main$data$workspace$tokens$application$update_font_weight_interactive(var_args){
var G__52181 = arguments.length;
switch (G__52181) {
case 3:
return app.main.data.workspace.tokens.application.update_font_weight_interactive.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_font_weight_interactive.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_font_weight_interactive.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_font_weight_interactive.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_font_weight_interactive.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,_attributes,page_id){
var temp__5825__auto__ = app.common.types.token.valid_font_weight_variant(value);
if(cljs.core.truth_(temp__5825__auto__)){
var font_variant = temp__5825__auto__;
return app.main.data.workspace.tokens.application.generate_font_weight_text_shape_update(font_variant,shape_ids,page_id,app.main.data.workspace.tokens.application.warn_font_variant_not_found_BANG_);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_font_weight_interactive.cljs$lang$maxFixedArity = 4);

/**
 * Apply map of functions `fs` to a map of values `vs` using `args`.
 *   The keys for both must match to be applied with an non-nil value in `vs`.
 *   Returns a vector of the resulting values.
 * 
 *   E.g.: `(apply-functions {:a + :b -} {:a 1 :b nil :c 10} [1 1]) => [3]`
 */
app.main.data.workspace.tokens.application.apply_functions_map = (function app$main$data$workspace$tokens$application$apply_functions_map(fs,vs,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52182){
var vec__52183 = p__52182;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52183,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52183,(1),null);
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,k);
if(cljs.core.truth_(temp__5825__auto__)){
var v = temp__5825__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args);
} else {
return null;
}
}),fs);
});
app.main.data.workspace.tokens.application.update_typography = (function app$main$data$workspace$tokens$application$update_typography(var_args){
var G__52187 = arguments.length;
switch (G__52187) {
case 3:
return app.main.data.workspace.tokens.application.update_typography.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_typography.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_typography.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_typography.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_typography.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if(cljs.core.map_QMARK_(value)){
return beicon.v2.core.merge(app.main.data.workspace.tokens.application.apply_functions_map(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),app.main.data.workspace.tokens.application.update_font_size,new cljs.core.Keyword(null,"font-family","font-family",-667419874),app.main.data.workspace.tokens.application.update_font_family,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),app.main.data.workspace.tokens.application.update_font_weight,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),app.main.data.workspace.tokens.application.update_letter_spacing,new cljs.core.Keyword(null,"text-case","text-case",1049419399),app.main.data.workspace.tokens.application.update_text_case,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),app.main.data.workspace.tokens.application.update_text_decoration,new cljs.core.Keyword(null,"line-height","line-height",1870784992),app.main.data.workspace.tokens.application.update_line_height], null),value,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_ids,attributes,page_id], null)));
} else {
return null;
}
}));

(app.main.data.workspace.tokens.application.update_typography.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.update_shape_dimensions = (function app$main$data$workspace$tokens$application$update_shape_dimensions(var_args){
var G__52190 = arguments.length;
switch (G__52190) {
case 3:
return app.main.data.workspace.tokens.application.update_shape_dimensions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.update_shape_dimensions.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.update_shape_dimensions.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.update_shape_dimensions.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.update_shape_dimensions.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.update_shape_dimensions_52192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.update_shape_dimensions_52192 = (function (value,shape_ids,attributes,page_id,meta52193){
this.value = value;
this.shape_ids = shape_ids;
this.attributes = attributes;
this.page_id = page_id;
this.meta52193 = meta52193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.update_shape_dimensions_52192.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_shape_dimensions_52192.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","update-shape-dimensions","app.main.data.workspace.tokens.application/update-shape-dimensions",-1097951426);
}));

(app.main.data.workspace.tokens.application.update_shape_dimensions_52192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52194,meta52193__$1){
var self__ = this;
var _52194__$1 = this;
return (new app.main.data.workspace.tokens.application.update_shape_dimensions_52192(self__.value,self__.shape_ids,self__.attributes,self__.page_id,meta52193__$1));
}));

(app.main.data.workspace.tokens.application.update_shape_dimensions_52192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52194){
var self__ = this;
var _52194__$1 = this;
return self__.meta52193;
}));

(app.main.data.workspace.tokens.application.update_shape_dimensions_52192.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.update_shape_dimensions_52192.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(typeof self__.value === 'number'){
return beicon.v2.core.of((cljs.core.truth_(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.attributes))?app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$4(self__.shape_ids,new cljs.core.Keyword(null,"width","width",-384071477),self__.value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.attributes))?app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$4(self__.shape_ids,new cljs.core.Keyword(null,"height","height",1025178622),self__.value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], null)):null));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.update_shape_dimensions_52192(value,shape_ids,attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.update_shape_dimensions.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.attributes__GT_actions = (function app$main$data$workspace$tokens$application$attributes__GT_actions(p__52196){
var map__52197 = p__52196;
var map__52197__$1 = cljs.core.__destructure_map(map__52197);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52197__$1,new cljs.core.Keyword(null,"value","value",305978217));
var shape_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52197__$1,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52197__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52197__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var G__52198 = cljs.core.PersistentVector.EMPTY;
var G__52198__$1 = (cljs.core.truth_(cljs.core.some(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52198,(function (){
return app.main.data.workspace.tokens.application.update_shape_dimensions.cljs$core$IFn$_invoke$arity$4(value,shape_ids,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null))),page_id);
})):G__52198);
var G__52198__$2 = (cljs.core.truth_(cljs.core.some(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52198__$1,(function (){
return app.main.data.workspace.tokens.application.update_shape_position.cljs$core$IFn$_invoke$arity$4(value,shape_ids,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null))),page_id);
})):G__52198__$1);
var G__52198__$3 = (cljs.core.truth_(cljs.core.some(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p2","p2",905500641),null,new cljs.core.Keyword(null,"p4","p4",-1090126814),null,new cljs.core.Keyword(null,"p3","p3",1731040739),null,new cljs.core.Keyword(null,"p1","p1",-936759954),null], null), null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52198__$2,(function (){
return app.main.data.workspace.tokens.application.update_layout_padding.cljs$core$IFn$_invoke$arity$4(value,shape_ids,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p2","p2",905500641),null,new cljs.core.Keyword(null,"p4","p4",-1090126814),null,new cljs.core.Keyword(null,"p3","p3",1731040739),null,new cljs.core.Keyword(null,"p1","p1",-936759954),null], null), null))),page_id);
})):G__52198__$2);
var G__52198__$4 = (cljs.core.truth_(cljs.core.some(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m3","m3",-703635357),null,new cljs.core.Keyword(null,"m4","m4",-1624571215),null,new cljs.core.Keyword(null,"m2","m2",-587003306),null,new cljs.core.Keyword(null,"m1","m1",-108094626),null], null), null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52198__$3,(function (){
return app.main.data.workspace.tokens.application.update_layout_item_margin.cljs$core$IFn$_invoke$arity$4(value,shape_ids,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m3","m3",-703635357),null,new cljs.core.Keyword(null,"m4","m4",-1624571215),null,new cljs.core.Keyword(null,"m2","m2",-587003306),null,new cljs.core.Keyword(null,"m1","m1",-108094626),null], null), null))),page_id);
})):G__52198__$3);
var G__52198__$5 = (cljs.core.truth_(cljs.core.some(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),null,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),null], null), null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52198__$4,(function (){
return app.main.data.workspace.tokens.application.update_layout_gap(value,shape_ids,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),null,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),null], null), null))),page_id);
})):G__52198__$4);
var G__52198__$6 = (cljs.core.truth_(cljs.core.some(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r2","r2",252844174),null,new cljs.core.Keyword(null,"r3","r3",-2027148174),null,new cljs.core.Keyword(null,"r1","r1",690974900),null,new cljs.core.Keyword(null,"r4","r4",1134323163),null], null), null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52198__$5,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r2","r2",252844174),null,new cljs.core.Keyword(null,"r3","r3",-2027148174),null,new cljs.core.Keyword(null,"r1","r1",690974900),null,new cljs.core.Keyword(null,"r4","r4",1134323163),null], null), null))){
return app.main.data.workspace.tokens.application.update_shape_radius_all.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,page_id);
} else {
return app.main.data.workspace.tokens.application.update_shape_radius_for_corners.cljs$core$IFn$_invoke$arity$4(value,shape_ids,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r2","r2",252844174),null,new cljs.core.Keyword(null,"r3","r3",-2027148174),null,new cljs.core.Keyword(null,"r1","r1",690974900),null,new cljs.core.Keyword(null,"r4","r4",1134323163),null], null), null))),page_id);
}
})):G__52198__$5);
var G__52198__$7 = (cljs.core.truth_(cljs.core.some(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52198__$6,(function (){
return app.main.data.workspace.tokens.application.update_stroke_width.cljs$core$IFn$_invoke$arity$4(value,shape_ids,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null),page_id);
})):G__52198__$6);
if(cljs.core.truth_(cljs.core.some(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),null,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),null,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),null,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),null,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),null,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),null], null), null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52198__$7,(function (){
return app.main.data.workspace.tokens.application.update_layout_sizing_limits.cljs$core$IFn$_invoke$arity$4(value,shape_ids,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(attributes,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),null,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),null,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),null,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),null,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),null,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),null], null), null))),page_id);
}));
} else {
return G__52198__$7;
}
});
app.main.data.workspace.tokens.application.apply_dimensions_token = (function app$main$data$workspace$tokens$application$apply_dimensions_token(var_args){
var G__52204 = arguments.length;
switch (G__52204) {
case 3:
return app.main.data.workspace.tokens.application.apply_dimensions_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.apply_dimensions_token.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.apply_dimensions_token.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.apply_dimensions_token.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.apply_dimensions_token.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.apply_dimensions_token_52207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.apply_dimensions_token_52207 = (function (value,shape_ids,attributes,page_id,meta52208){
this.value = value;
this.shape_ids = shape_ids;
this.attributes = attributes;
this.page_id = page_id;
this.meta52208 = meta52208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.apply_dimensions_token_52207.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_dimensions_token_52207.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","apply-dimensions-token","app.main.data.workspace.tokens.application/apply-dimensions-token",880823234);
}));

(app.main.data.workspace.tokens.application.apply_dimensions_token_52207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52209,meta52208__$1){
var self__ = this;
var _52209__$1 = this;
return (new app.main.data.workspace.tokens.application.apply_dimensions_token_52207(self__.value,self__.shape_ids,self__.attributes,self__.page_id,meta52208__$1));
}));

(app.main.data.workspace.tokens.application.apply_dimensions_token_52207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52209){
var self__ = this;
var _52209__$1 = this;
return self__.meta52208;
}));

(app.main.data.workspace.tokens.application.apply_dimensions_token_52207.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_dimensions_token_52207.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(typeof self__.value === 'number'){
var actions = app.main.data.workspace.tokens.application.attributes__GT_actions(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),self__.value,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),self__.shape_ids,new cljs.core.Keyword(null,"attributes","attributes",-74013604),self__.attributes,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id,new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.of,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52202_SHARP_){
return (p1__52202_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__52202_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__52202_SHARP_.call(null));
}),actions));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.apply_dimensions_token_52207(value,shape_ids,attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.apply_dimensions_token.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.apply_spacing_token = (function app$main$data$workspace$tokens$application$apply_spacing_token(var_args){
var G__52213 = arguments.length;
switch (G__52213) {
case 3:
return app.main.data.workspace.tokens.application.apply_spacing_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.apply_spacing_token.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.apply_spacing_token.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.apply_spacing_token.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.apply_spacing_token.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.apply_spacing_token_52215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.apply_spacing_token_52215 = (function (value,shape_ids,attributes,page_id,meta52216){
this.value = value;
this.shape_ids = shape_ids;
this.attributes = attributes;
this.page_id = page_id;
this.meta52216 = meta52216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.apply_spacing_token_52215.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_spacing_token_52215.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","apply-spacing-token","app.main.data.workspace.tokens.application/apply-spacing-token",-105474155);
}));

(app.main.data.workspace.tokens.application.apply_spacing_token_52215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52217,meta52216__$1){
var self__ = this;
var _52217__$1 = this;
return (new app.main.data.workspace.tokens.application.apply_spacing_token_52215(self__.value,self__.shape_ids,self__.attributes,self__.page_id,meta52216__$1));
}));

(app.main.data.workspace.tokens.application.apply_spacing_token_52215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52217){
var self__ = this;
var _52217__$1 = this;
return self__.meta52216;
}));

(app.main.data.workspace.tokens.application.apply_spacing_token_52215.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_spacing_token_52215.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var spacing_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"p2","p2",905500641),null,new cljs.core.Keyword(null,"p4","p4",-1090126814),null,new cljs.core.Keyword(null,"m3","m3",-703635357),null,new cljs.core.Keyword(null,"p3","p3",1731040739),null,new cljs.core.Keyword(null,"p1","p1",-936759954),null,new cljs.core.Keyword(null,"column-gap","column-gap",384822863),null,new cljs.core.Keyword(null,"m4","m4",-1624571215),null,new cljs.core.Keyword(null,"m2","m2",-587003306),null,new cljs.core.Keyword(null,"m1","m1",-108094626),null,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),null], null), null);
if(((typeof self__.value === 'number') && (((cljs.core.set_QMARK_(self__.attributes)) && (clojure.set.subset_QMARK_(self__.attributes,spacing_attrs)))))){
var actions = app.main.data.workspace.tokens.application.attributes__GT_actions(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),self__.value,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),self__.shape_ids,new cljs.core.Keyword(null,"attributes","attributes",-74013604),self__.attributes,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id,new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.of,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52211_SHARP_){
return (p1__52211_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__52211_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__52211_SHARP_.call(null));
}),actions));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.apply_spacing_token_52215(value,shape_ids,attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.apply_spacing_token.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.tokens.application.apply_sizing_token = (function app$main$data$workspace$tokens$application$apply_sizing_token(var_args){
var G__52226 = arguments.length;
switch (G__52226) {
case 3:
return app.main.data.workspace.tokens.application.apply_sizing_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.tokens.application.apply_sizing_token.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.application.apply_sizing_token.cljs$core$IFn$_invoke$arity$3 = (function (value,shape_ids,attributes){
return app.main.data.workspace.tokens.application.apply_sizing_token.cljs$core$IFn$_invoke$arity$4(value,shape_ids,attributes,null);
}));

(app.main.data.workspace.tokens.application.apply_sizing_token.cljs$core$IFn$_invoke$arity$4 = (function (value,shape_ids,attributes,page_id){
if((typeof app.main.data.workspace.tokens.application.apply_sizing_token_52227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.apply_sizing_token_52227 = (function (value,shape_ids,attributes,page_id,meta52228){
this.value = value;
this.shape_ids = shape_ids;
this.attributes = attributes;
this.page_id = page_id;
this.meta52228 = meta52228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.apply_sizing_token_52227.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_sizing_token_52227.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","apply-sizing-token","app.main.data.workspace.tokens.application/apply-sizing-token",-1119191447);
}));

(app.main.data.workspace.tokens.application.apply_sizing_token_52227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52229,meta52228__$1){
var self__ = this;
var _52229__$1 = this;
return (new app.main.data.workspace.tokens.application.apply_sizing_token_52227(self__.value,self__.shape_ids,self__.attributes,self__.page_id,meta52228__$1));
}));

(app.main.data.workspace.tokens.application.apply_sizing_token_52227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52229){
var self__ = this;
var _52229__$1 = this;
return self__.meta52228;
}));

(app.main.data.workspace.tokens.application.apply_sizing_token_52227.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_sizing_token_52227.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var sizing_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null);
if(((typeof self__.value === 'number') && (((cljs.core.set_QMARK_(self__.attributes)) && (clojure.set.subset_QMARK_(self__.attributes,sizing_attrs)))))){
var actions = app.main.data.workspace.tokens.application.attributes__GT_actions(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),self__.value,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),self__.shape_ids,new cljs.core.Keyword(null,"attributes","attributes",-74013604),self__.attributes,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id,new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.of,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52223_SHARP_){
return (p1__52223_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__52223_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__52223_SHARP_.call(null));
}),actions));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.application.apply_sizing_token_52227(value,shape_ids,attributes,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.application.apply_sizing_token.cljs$lang$maxFixedArity = 4);

/**
 * Apply `attributes` that match `token` for `shape-ids`.
 * 
 *   Optionally remove attributes from `attributes-to-remove`,
 *   this is useful for applying a single attribute from an attributes set
 *   while removing other applied tokens from this set.
 */
app.main.data.workspace.tokens.application.apply_token = (function app$main$data$workspace$tokens$application$apply_token(p__52277){
var map__52278 = p__52277;
var map__52278__$1 = cljs.core.__destructure_map(map__52278);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var attributes_to_remove = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"attributes-to-remove","attributes-to-remove",1017662650));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var shape_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806));
var on_update_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52278__$1,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523));
if((typeof app.main.data.workspace.tokens.application.apply_token_52279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.apply_token_52279 = (function (p__52277,map__52278,attributes,attributes_to_remove,token,shape_ids,on_update_shape,meta52280){
this.p__52277 = p__52277;
this.map__52278 = map__52278;
this.attributes = attributes;
this.attributes_to_remove = attributes_to_remove;
this.token = token;
this.shape_ids = shape_ids;
this.on_update_shape = on_update_shape;
this.meta52280 = meta52280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.apply_token_52279.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_token_52279.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","apply-token","app.main.data.workspace.tokens.application/apply-token",-1326070806);
}));

(app.main.data.workspace.tokens.application.apply_token_52279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52281,meta52280__$1){
var self__ = this;
var _52281__$1 = this;
return (new app.main.data.workspace.tokens.application.apply_token_52279(self__.p__52277,self__.map__52278,self__.attributes,self__.attributes_to_remove,self__.token,self__.shape_ids,self__.on_update_shape,meta52280__$1));
}));

(app.main.data.workspace.tokens.application.apply_token_52279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52281){
var self__ = this;
var _52281__$1 = this;
return self__.meta52280;
}));

(app.main.data.workspace.tokens.application.apply_token_52279.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_token_52279.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-editor-state","workspace-editor-state",-794384251)))){
var attributes_to_remove__$1 = (cljs.core.truth_((function (){var G__52283 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.token);
return (app.common.types.token.typography_token_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.typography_token_keys.cljs$core$IFn$_invoke$arity$1(G__52283) : app.common.types.token.typography_token_keys.call(null,G__52283));
})())?clojure.set.union.cljs$core$IFn$_invoke$arity$2(self__.attributes_to_remove,app.common.types.token.typography_keys):(cljs.core.truth_((function (){var G__52284 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.token);
return (app.common.types.token.typography_keys.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.typography_keys.cljs$core$IFn$_invoke$arity$1(G__52284) : app.common.types.token.typography_keys.call(null,G__52284));
})())?clojure.set.union.cljs$core$IFn$_invoke$arity$2(self__.attributes_to_remove,app.common.types.token.typography_token_keys):self__.attributes_to_remove
));
var temp__5825__auto__ = (function (){var G__52286 = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var G__52286__$1 = (((G__52286 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__52286,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991)));
if((G__52286__$1 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_tokens_in_active_sets(G__52286__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var tokens = temp__5825__auto__;
return beicon.v2.core.mapcat((function (resolved_tokens){
var undo_id = Symbol();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected_shapes = cljs.core.select_keys(objects,self__.shape_ids);
var shapes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52287){
var vec__52288 = p__52287;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52288,(0),null);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52288,(1),null);
var or__5025__auto__ = (function (){var and__5023__auto__ = app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape);
if(and__5023__auto__){
return cljs.core.some(app.common.types.token.spacing_margin_keys,self__.attributes);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = app.common.types.token.any_appliable_attr_for_shape_QMARK_(self__.attributes,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shape));
if(and__5023__auto__){
var G__52291 = self__.attributes;
var G__52292 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.token);
return (app.main.data.workspace.tokens.application.all_attrs_appliable_for_token_QMARK_.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.tokens.application.all_attrs_appliable_for_token_QMARK_.cljs$core$IFn$_invoke$arity$2(G__52291,G__52292) : app.main.data.workspace.tokens.application.all_attrs_appliable_for_token_QMARK_.call(null,G__52291,G__52292));
} else {
return and__5023__auto__;
}
}
}),selected_shapes);
var shape_ids__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(shapes),cljs.core.PersistentVector.EMPTY);
var any_variant_QMARK_ = cljs.core.boolean$(cljs.core.some(app.common.types.component.is_variant_QMARK_,cljs.core.vals(shapes)));
var resolved_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resolved_tokens,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.files.tokens.token_identifier(self__.token),new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626)], null));
var resolved_value__$1 = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit(resolved_value):resolved_value);
var tokenized_attributes = app.common.files.tokens.attributes_map(self__.attributes,self__.token);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.token);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"apply-tokens",new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"applied-to","applied-to",1142736910),self__.attributes,new cljs.core.Keyword(null,"applied-to-variant","applied-to-variant",1933509599),any_variant_QMARK_], null))),app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(shape_ids__$1,(function (shape){
var G__52293 = shape;
var G__52293__$1 = (cljs.core.truth_(attributes_to_remove__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__52293,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),(function (p1__52276_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc,p1__52276_SHARP_),attributes_to_remove__$1);
})):G__52293);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52293__$1,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),cljs.core.merge,tokenized_attributes);

}))),(cljs.core.truth_(self__.on_update_shape)?(function (){var res = (self__.on_update_shape.cljs$core$IFn$_invoke$arity$3 ? self__.on_update_shape.cljs$core$IFn$_invoke$arity$3(resolved_value__$1,shape_ids__$1,self__.attributes) : self__.on_update_shape.call(null,resolved_value__$1,shape_ids__$1,self__.attributes));
if(beicon.v2.core.observable_QMARK_(res)){
return res;
} else {
return beicon.v2.core.of(res);
}
})():null),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?beicon.v2.core.of(app.main.data.tokenscript.resolve_tokens(tokens)):app.main.data.style_dictionary.resolve_tokens(tokens)));
} else {
return null;
}
} else {
return beicon.v2.core.of(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.error-text-edition"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null)));
}
}));
}

return (new app.main.data.workspace.tokens.application.apply_token_52279(p__52277,map__52278__$1,attributes,attributes_to_remove,token,shape_ids,on_update_shape,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Handles edge-case for spacing token when applying token via toggle button.
 *   Splits out `shape-ids` into seperate default actions:
 *   - Layouts take the `default` update function
 *   - Shapes inside layout will only take margin
 */
app.main.data.workspace.tokens.application.apply_spacing_token_separated = (function app$main$data$workspace$tokens$application$apply_spacing_token_separated(p__52295){
var map__52296 = p__52295;
var map__52296__$1 = cljs.core.__destructure_map(map__52296);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52296__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52296__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52296__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((typeof app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298 = (function (p__52295,map__52296,token,shapes,attr,meta52299){
this.p__52295 = p__52295;
this.map__52296 = map__52296;
this.token = token;
this.shapes = shapes;
this.attr = attr;
this.meta52299 = meta52299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","apply-spacing-token-separated","app.main.data.workspace.tokens.application/apply-spacing-token-separated",655352797);
}));

(app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52300,meta52299__$1){
var self__ = this;
var _52300__$1 = this;
return (new app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298(self__.p__52295,self__.map__52296,self__.token,self__.shapes,self__.attr,meta52299__$1));
}));

(app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52300){
var self__ = this;
var _52300__$1 = this;
return self__.meta52299;
}));

(app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var map__52302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.tokens.application.token_properties,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.token));
var map__52302__$1 = cljs.core.__destructure_map(map__52302);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52302__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var on_update_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52302__$1,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523));
var map__52303 = cljs.core.group_by((function (p1__52294_SHARP_){
if(app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,p1__52294_SHARP_)){
return new cljs.core.Keyword(null,"frame-children","frame-children",-1877478373);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);
}
}),self__.shapes);
var map__52303__$1 = cljs.core.__destructure_map(map__52303);
var other = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52303__$1,new cljs.core.Keyword(null,"other","other",995793544));
var frame_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52303__$1,new cljs.core.Keyword(null,"frame-children","frame-children",-1877478373));
return beicon.v2.core.of(app.main.data.workspace.tokens.application.apply_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),(function (){var or__5025__auto__ = self__.attr;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return attributes;
}
})(),new cljs.core.Keyword(null,"token","token",-1211463215),self__.token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),other),new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),on_update_shape], null)),app.main.data.workspace.tokens.application.apply_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.spacing_margin_keys,new cljs.core.Keyword(null,"token","token",-1211463215),self__.token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),frame_children),new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_layout_item_margin], null)));
}));
}

return (new app.main.data.workspace.tokens.application.apply_spacing_token_separated_52298(p__52295,map__52296__$1,token,shapes,attr,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Removes `attributes` that match `token` for `shape-ids`.
 * 
 *   Doesn't update shape attributes.
 */
app.main.data.workspace.tokens.application.unapply_token = (function app$main$data$workspace$tokens$application$unapply_token(p__52306){
var map__52307 = p__52306;
var map__52307__$1 = cljs.core.__destructure_map(map__52307);
var _props = map__52307__$1;
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52307__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var token_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52307__$1,new cljs.core.Keyword(null,"token-name","token-name",1766556933));
var shape_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52307__$1,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806));
if((typeof app.main.data.workspace.tokens.application.unapply_token_52308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.unapply_token_52308 = (function (p__52306,map__52307,_props,attributes,token_name,shape_ids,meta52309){
this.p__52306 = p__52306;
this.map__52307 = map__52307;
this._props = _props;
this.attributes = attributes;
this.token_name = token_name;
this.shape_ids = shape_ids;
this.meta52309 = meta52309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.unapply_token_52308.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.unapply_token_52308.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","unapply-token","app.main.data.workspace.tokens.application/unapply-token",-990592613);
}));

(app.main.data.workspace.tokens.application.unapply_token_52308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52310,meta52309__$1){
var self__ = this;
var _52310__$1 = this;
return (new app.main.data.workspace.tokens.application.unapply_token_52308(self__.p__52306,self__.map__52307,self__._props,self__.attributes,self__.token_name,self__.shape_ids,meta52309__$1));
}));

(app.main.data.workspace.tokens.application.unapply_token_52308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52310){
var self__ = this;
var _52310__$1 = this;
return self__.meta52309;
}));

(app.main.data.workspace.tokens.application.unapply_token_52308.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.unapply_token_52308.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of((function (){var remove_token = (function (p1__52304_SHARP_){
if(cljs.core.truth_(p1__52304_SHARP_)){
return app.common.files.tokens.remove_attributes_for_token(self__.attributes,self__.token_name,p1__52304_SHARP_);
} else {
return null;
}
});
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(self__.shape_ids,(function (shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),remove_token);
}));
})());
}));
}

return (new app.main.data.workspace.tokens.application.unapply_token_52308(p__52306,map__52307__$1,_props,attributes,token_name,shape_ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.application.toggle_token = (function app$main$data$workspace$tokens$application$toggle_token(p__52312){
var map__52313 = p__52312;
var map__52313__$1 = cljs.core.__destructure_map(map__52313);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52313__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52313__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var shape_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52313__$1,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806));
var expand_with_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52313__$1,new cljs.core.Keyword(null,"expand-with-children","expand-with-children",-1923116463));
if((typeof app.main.data.workspace.tokens.application.on_toggle_token_52314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.on_toggle_token_52314 = (function (p__52312,map__52313,token,attrs,shape_ids,expand_with_children,meta52315){
this.p__52312 = p__52312;
this.map__52313 = map__52313;
this.token = token;
this.attrs = attrs;
this.shape_ids = shape_ids;
this.expand_with_children = expand_with_children;
this.meta52315 = meta52315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.on_toggle_token_52314.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.on_toggle_token_52314.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","on-toggle-token","app.main.data.workspace.tokens.application/on-toggle-token",-1824967338);
}));

(app.main.data.workspace.tokens.application.on_toggle_token_52314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52316,meta52315__$1){
var self__ = this;
var _52316__$1 = this;
return (new app.main.data.workspace.tokens.application.on_toggle_token_52314(self__.p__52312,self__.map__52313,self__.token,self__.attrs,self__.shape_ids,self__.expand_with_children,meta52315__$1));
}));

(app.main.data.workspace.tokens.application.on_toggle_token_52314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52316){
var self__ = this;
var _52316__$1 = this;
return self__.meta52315;
}));

(app.main.data.workspace.tokens.application.on_toggle_token_52314.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.on_toggle_token_52314.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),self__.shape_ids);
var shapes__$1 = (cljs.core.truth_(self__.expand_with_children)?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"group","group",582596132))){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null);
}
})),shapes):shapes);
var map__52319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.tokens.application.token_properties,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.token));
var map__52319__$1 = cljs.core.__destructure_map(map__52319);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52319__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var all_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52319__$1,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763));
var on_update_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52319__$1,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523));
var unapply_tokens_QMARK_ = app.common.files.tokens.shapes_token_applied_QMARK_(self__.token,shapes__$1,(function (){var or__5025__auto__ = self__.attrs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = all_attributes;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return attributes;
}
}
})());
var shape_ids__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes__$1);
if(cljs.core.truth_(unapply_tokens_QMARK_)){
return beicon.v2.core.of(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),(function (){var or__5025__auto__ = self__.attrs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = all_attributes;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return attributes;
}
}
})(),new cljs.core.Keyword(null,"token-name","token-name",1766556933),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.token),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids__$1], null)));
} else {
return beicon.v2.core.of(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.token),new cljs.core.Keyword(null,"spacing","spacing",204422175))) && ((self__.attrs == null))))?app.main.data.workspace.tokens.application.apply_spacing_token_separated(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),self__.token,new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attrs,new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes__$1], null)):app.main.data.workspace.tokens.application.apply_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),((cljs.core.empty_QMARK_(self__.attrs))?attributes:self__.attrs),new cljs.core.Keyword(null,"token","token",-1211463215),self__.token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids__$1,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),on_update_shape], null))
));
}
}));
}

return (new app.main.data.workspace.tokens.application.on_toggle_token_52314(p__52312,map__52313__$1,token,attrs,shape_ids,expand_with_children,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.application.apply_token_on_selected = (function app$main$data$workspace$tokens$application$apply_token_on_selected(color_operations,token){
if((typeof app.main.data.workspace.tokens.application.apply_token_on_selected_52322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.application.apply_token_on_selected_52322 = (function (color_operations,token,meta52323){
this.color_operations = color_operations;
this.token = token;
this.meta52323 = meta52323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.application.apply_token_on_selected_52322.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_token_on_selected_52322.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.application","apply-token-on-selected","app.main.data.workspace.tokens.application/apply-token-on-selected",-438255360);
}));

(app.main.data.workspace.tokens.application.apply_token_on_selected_52322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52324,meta52323__$1){
var self__ = this;
var _52324__$1 = this;
return (new app.main.data.workspace.tokens.application.apply_token_on_selected_52322(self__.color_operations,self__.token,meta52323__$1));
}));

(app.main.data.workspace.tokens.application.apply_token_on_selected_52322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52324){
var self__ = this;
var _52324__$1 = this;
return self__.meta52323;
}));

(app.main.data.workspace.tokens.application.apply_token_on_selected_52322.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.application.apply_token_on_selected_52322.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.map((function (cop){
var shape_ids = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327).cljs$core$IFn$_invoke$arity$1(cop)], null);
var G__52325 = new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(cop);
var G__52325__$1 = (((G__52325 instanceof cljs.core.Keyword))?G__52325.fqn:null);
switch (G__52325__$1) {
case "fill":
return app.main.data.workspace.tokens.application.apply_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null),new cljs.core.Keyword(null,"token","token",-1211463215),self__.token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_fill], null));

break;
case "stroke":
return app.main.data.workspace.tokens.application.apply_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null], null), null),new cljs.core.Keyword(null,"token","token",-1211463215),self__.token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_stroke_color], null));

break;
case "content":
return app.main.data.workspace.tokens.application.apply_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null),new cljs.core.Keyword(null,"token","token",-1211463215),self__.token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_fill], null));

break;
case "shadow":
return beicon.v2.core.empty();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52325__$1)].join('')));

}
}),beicon.v2.core.from(self__.color_operations)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.tokens.application.apply_token_on_selected_52322(color_operations,token,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A map of default properties by token type
 */
app.main.data.workspace.tokens.application.token_properties = app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Border Radius",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.border_radius_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_shape_radius_all,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","border-radius","tokens/border-radius",-465372495),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Border Radius",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], null)], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Shadow",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.shadow_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_shadow,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","shadow","tokens/shadow",1716253537),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Shadow",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"shadow","shadow",873231803)], null)], null)], null)], null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Color",new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null),new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),app.common.types.token.color_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_fill_stroke,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","color","tokens/color",1619883579),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Color",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"color","color",1011675173)], null)], null)], null)], null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Font Size",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.font_size_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_font_size,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","font-size","tokens/font-size",1578840480),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Font Size",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null)], null)], null)], null),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Letter Spacing",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.letter_spacing_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_letter_spacing,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","letter-spacing","tokens/letter-spacing",70255795),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Letter Spacing",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767)], null)], null)], null)], null),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Font Family",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.font_family_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_font_family_interactive,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","font-family","tokens/font-family",-461865292),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Font Family",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"font-family","font-family",-667419874)], null)], null)], null)], null),new cljs.core.Keyword(null,"text-case","text-case",1049419399),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Text Case",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.text_case_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_text_case,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","text-case","tokens/text-case",181298221),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Text Case",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"text-case","text-case",1049419399)], null)], null)], null)], null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Font Weight",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.font_weight_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_font_weight_interactive,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","font-weight","tokens/font-weight",-2003804083),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Font Weight",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583)], null)], null)], null)], null),new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Typography",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.typography_token_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_typography,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","typography","tokens/typography",468555404),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Typography",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"typography","typography",-399568138)], null)], null)], null)], null),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Text Decoration",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.text_decoration_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_text_decoration_interactive,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","text-decoration","tokens/text-decoration",-1724115927),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Text Decoration",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207)], null)], null)], null)], null),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Stroke Width",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.stroke_width_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_stroke_width,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","stroke-width","tokens/stroke-width",1459195033),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Stroke Width",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435)], null)], null)], null)], null),new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Sizing",new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),app.common.types.token.sizing_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.apply_sizing_token,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","sizing","tokens/sizing",1684518093),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Sizing",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"sizing","sizing",-1868029885)], null)], null)], null)], null),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Dimensions",new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.spacing_keys,app.common.types.token.sizing_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.token.border_radius_keys,app.common.types.token.axis_keys,app.common.types.token.stroke_width_keys], 0)),new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.apply_dimensions_token,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","dimensions","tokens/dimensions",-1123009431),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Dimensions",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)], null)], null)], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Opacity",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.opacity_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_opacity,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","opacity","tokens/opacity",1131118906),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Opacity",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"opacity","opacity",397153780)], null)], null)], null)], null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Number",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.rotation_keys,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),app.common.types.token.number_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_rotation,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","number","tokens/number",1767411312),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Number",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Rotation",new cljs.core.Keyword(null,"attributes","attributes",-74013604),app.common.types.token.rotation_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_rotation,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","rotation","tokens/rotation",-717190454),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Rotation",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null)], null)], null)], null),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Spacing",new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),null,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),null], null), null),new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763),app.common.types.token.spacing_keys,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.apply_spacing_token,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("tokens","spacing","tokens/spacing",-697448015),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Spacing",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"spacing","spacing",204422175)], null)], null)], null)], null)], 0));
app.main.data.workspace.tokens.application.get_token_properties = (function app$main$data$workspace$tokens$application$get_token_properties(token){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.tokens.application.token_properties,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token));
});
/**
 * Get the function that updates the attributes of a shape if this token is applied.
 */
app.main.data.workspace.tokens.application.get_update_shape_fn = (function app$main$data$workspace$tokens$application$get_update_shape_fn(token){
if(cljs.core.truth_(token)){
return new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523).cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.get_token_properties(token));
} else {
return null;
}
});
/**
 * Get the attributes to which this token type can be applied.
 */
app.main.data.workspace.tokens.application.appliable_attributes_for_token = (function app$main$data$workspace$tokens$application$appliable_attributes_for_token(token_type){
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.tokens.application.token_properties,token_type);
var or__5025__auto__ = new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(props);
}
});
/**
 * Check if any of the given attributes can be applied for the given token type.
 */
app.main.data.workspace.tokens.application.all_attrs_appliable_for_token_QMARK_ = (function app$main$data$workspace$tokens$application$all_attrs_appliable_for_token_QMARK_(attributes,token_type){
return clojure.set.subset_QMARK_(attributes,app.main.data.workspace.tokens.application.appliable_attributes_for_token(token_type));
});

//# sourceMappingURL=app.main.data.workspace.tokens.application.js.map
