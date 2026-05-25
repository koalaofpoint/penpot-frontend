import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.main.data.workspace.viewport.js";
import "./app.main.data.workspace.zoom.js";
import "./app.main.store.js";
import "./app.plugins.format.js";
import "./app.plugins.shape.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
goog.provide('app.plugins.viewport');
app.plugins.viewport.viewport_proxy_QMARK_ = (function app$plugins$viewport$viewport_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"ViewportProxy");
});
app.plugins.viewport.viewport_proxy = (function app$plugins$viewport$viewport_proxy(plugin_id){
var obj_65087 = ({});
var to_string_65086 = (function (){
return "ViewportProxy";
});
var obj_65087_target_65096_65281 = obj_65087;
var prop_get_fn__65113_65282 = (function (){
var obj_65087_this_65094 = this;
var internal_fn__65101 = to_string_65086;
return internal_fn__65101.call(obj_65087_this_65094);
});
var prop_get_fn__65127_65283 = (function (){
var obj_65087_this_65094 = this;
var internal_fn__65115 = to_string_65086;
return internal_fn__65115.call(obj_65087_this_65094);
});
var prop_get_fn_plugin_65141_65284 = (function (){
var obj_65087_this_65094 = this;
var internal_fn_plugin_65129 = (function (){
return plugin_id;
});
return internal_fn_plugin_65129.call(obj_65087_this_65094);
});
var prop_get_fn_center_65148_65285 = (function (){
var obj_65087_this_65094 = this;
var internal_fn_center_65142 = (function (){
var vp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vp) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vp) / (2)));
var y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vp) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vp) / (2)));
return Object.freeze(({"x": x, "y": y}));
});
return internal_fn_center_65142.call(obj_65087_this_65094);
});
var schema_center_65145_65286 = null;
var coercer_fn_center_65143_65287 = (((((!((schema_center_65145_65286 == null)))) && ((!(cljs.core.fn_QMARK_(schema_center_65145_65286))))))?app.common.schema.coercer(schema_center_65145_65286):null);
var decode_fn_center_65144_65288 = app.common.json.__GT_clj;
var prop_set_fn_center_65159_65289 = (function (val_center_65147){
var obj_65087_this_65094 = this;
var internal_fn_center_65142 = (function (value){
var new_x = app.util.object.get.cljs$core$IFn$_invoke$arity$2(value,"x");
var new_y = app.util.object.get.cljs$core$IFn$_invoke$arity$2(value,"y");
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(new_x))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"center-x","center-x",2109659472),new_x);
} else {
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(new_y))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"center-y","center-y",-233780987),new_y);
} else {
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var old_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vb) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vb) / (2)));
var old_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vb) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vb) / (2)));
var delta_x = (new_x - old_x);
var delta_y = (new_y - old_y);
var to_position = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__65083_SHARP_){
return (p1__65083_SHARP_ + delta_x);
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__65084_SHARP_){
return (p1__65084_SHARP_ + delta_y);
})], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.viewport.update_viewport_position(to_position));

}
}
});
return internal_fn_center_65142.call(obj_65087_this_65094,val_center_65147);
});
var prop_get_fn_zoom_65233_65290 = (function (){
var obj_65087_this_65094 = this;
var internal_fn_zoom_65227 = (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
});
return internal_fn_zoom_65227.call(obj_65087_this_65094);
});
var schema_zoom_65230_65291 = null;
var coercer_fn_zoom_65228_65292 = (((((!((schema_zoom_65230_65291 == null)))) && ((!(cljs.core.fn_QMARK_(schema_zoom_65230_65291))))))?app.common.schema.coercer(schema_zoom_65230_65291):null);
var decode_fn_zoom_65229_65293 = app.common.json.__GT_clj;
var prop_set_fn_zoom_65234_65294 = (function (val_zoom_65232){
var obj_65087_this_65094 = this;
var internal_fn_zoom_65227 = (function (value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"zoom","zoom",-1827487038),value);
} else {
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$1((value / z)));

}
});
return internal_fn_zoom_65227.call(obj_65087_this_65094,val_zoom_65232);
});
var prop_get_fn_bounds_65241_65295 = (function (){
var obj_65087_this_65094 = this;
var internal_fn_bounds_65235 = (function (){
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"vbox","vbox",-492787765));
return Object.freeze(app.plugins.format.format_bounds(vbox));
});
return internal_fn_bounds_65235.call(obj_65087_this_65094);
});
var schema_zoomreset_65245_65296 = null;
var coercer_fn_zoomreset_65243_65297 = (((((!((schema_zoomreset_65245_65296 == null)))) && ((!(cljs.core.fn_QMARK_(schema_zoomreset_65245_65296))))))?app.common.schema.coercer(schema_zoomreset_65245_65296):null);
var decode_fn_zoomreset_65244_65298 = app.common.json.__GT_clj;
var prop_get_fn_zoomreset_65248_65299 = (function (){
var obj_65087_this_65094 = this;
var internal_fn_zoomreset_65242 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom.reset_zoom);
});
var internal_fn_zoomreset_65242__$1 = internal_fn_zoomreset_65242.bind(obj_65087_this_65094);
return internal_fn_zoomreset_65242__$1;
});
var schema_zoomtofitall_65252_65300 = null;
var coercer_fn_zoomtofitall_65250_65301 = (((((!((schema_zoomtofitall_65252_65300 == null)))) && ((!(cljs.core.fn_QMARK_(schema_zoomtofitall_65252_65300))))))?app.common.schema.coercer(schema_zoomtofitall_65252_65300):null);
var decode_fn_zoomtofitall_65251_65302 = app.common.json.__GT_clj;
var prop_get_fn_zoomtofitall_65255_65303 = (function (){
var obj_65087_this_65094 = this;
var internal_fn_zoomtofitall_65249 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom.zoom_to_fit_all);
});
var internal_fn_zoomtofitall_65249__$1 = internal_fn_zoomtofitall_65249.bind(obj_65087_this_65094);
return internal_fn_zoomtofitall_65249__$1;
});
var schema_zoomintoview_65259_65304 = null;
var coercer_fn_zoomintoview_65257_65305 = (((((!((schema_zoomintoview_65259_65304 == null)))) && ((!(cljs.core.fn_QMARK_(schema_zoomintoview_65259_65304))))))?app.common.schema.coercer(schema_zoomintoview_65259_65304):null);
var decode_fn_zoomintoview_65258_65306 = app.common.json.__GT_clj;
var prop_get_fn_zoomintoview_65262_65307 = (function (){
var obj_65087_this_65094 = this;
var internal_fn_zoomintoview_65256 = (function (shapes){
if((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,shapes)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"zoomIntoView","zoomIntoView",-898042566),"Argument should be valid shapes");
} else {
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (shape){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(shape,"$id");
}),shapes);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom.fit_to_shapes(ids));

}
});
var internal_fn_zoomintoview_65256__$1 = internal_fn_zoomintoview_65256.bind(obj_65087_this_65094);
return internal_fn_zoomintoview_65256__$1;
});
Object.defineProperty(obj_65087_target_65096_65281,Symbol.toStringTag,(function (){var obj65264 = ({"enumerable":false,"get":prop_get_fn__65113_65282});
return obj65264;
})());

Object.defineProperty(obj_65087_target_65096_65281,Symbol["for"]("penpot.reify:type"),(function (){var obj65266 = ({"enumerable":false,"get":prop_get_fn__65127_65283});
return obj65266;
})());

Object.defineProperty(obj_65087_target_65096_65281,"$plugin",(function (){var obj65268 = ({"enumerable":false,"get":prop_get_fn_plugin_65141_65284});
return obj65268;
})());

Object.defineProperty(obj_65087_target_65096_65281,"center",(function (){var obj65270 = ({"enumerable":true,"get":prop_get_fn_center_65148_65285,"set":prop_set_fn_center_65159_65289});
return obj65270;
})());

Object.defineProperty(obj_65087_target_65096_65281,"zoom",(function (){var obj65272 = ({"enumerable":true,"get":prop_get_fn_zoom_65233_65290,"set":prop_set_fn_zoom_65234_65294});
return obj65272;
})());

Object.defineProperty(obj_65087_target_65096_65281,"bounds",(function (){var obj65274 = ({"enumerable":true,"get":prop_get_fn_bounds_65241_65295});
return obj65274;
})());

Object.defineProperty(obj_65087_target_65096_65281,"zoomReset",(function (){var obj65276 = ({"enumerable":false,"get":prop_get_fn_zoomreset_65248_65299});
return obj65276;
})());

Object.defineProperty(obj_65087_target_65096_65281,"zoomToFitAll",(function (){var obj65278 = ({"enumerable":false,"get":prop_get_fn_zoomtofitall_65255_65303});
return obj65278;
})());

Object.defineProperty(obj_65087_target_65096_65281,"zoomIntoView",(function (){var obj65280 = ({"enumerable":false,"get":prop_get_fn_zoomintoview_65262_65307});
return obj65280;
})());


return obj_65087;
});

//# sourceMappingURL=app.plugins.viewport.js.map
