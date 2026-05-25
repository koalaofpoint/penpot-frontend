import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.uuid.js";
import "./app.render_wasm.wasm.js";
import "./cuerdas.core.js";
goog.provide('app.render_wasm.serializers');
app.render_wasm.serializers.u8 = (function app$render_wasm$serializers$u8(value){
var u8_arr = (new Uint8Array((1)));
(u8_arr[(0)] = value);

return u8_arr;
});
app.render_wasm.serializers.f32__GT_u8 = (function app$render_wasm$serializers$f32__GT_u8(value){
var f32_arr = (new Float32Array((1)));
(f32_arr[(0)] = value);

return (new Uint8Array(f32_arr.buffer));
});
app.render_wasm.serializers.i32__GT_u8 = (function app$render_wasm$serializers$i32__GT_u8(value){
var i32_arr = (new Int32Array((1)));
(i32_arr[(0)] = value);

return (new Uint8Array(i32_arr.buffer));
});
app.render_wasm.serializers.bool__GT_u8 = (function app$render_wasm$serializers$bool__GT_u8(value){
var result = (new Uint8Array((1)));
(result[(0)] = (cljs.core.truth_(value)?(1):(0)));

return result;
});
app.render_wasm.serializers.uuid__GT_u8 = (function app$render_wasm$serializers$uuid__GT_u8(id){
var buffer = app.common.uuid.get_u32(id);
var u32_arr = (new Uint32Array((4)));
(u32_arr[(0)] = (buffer[(0)]));

(u32_arr[(1)] = (buffer[(1)]));

(u32_arr[(2)] = (buffer[(2)]));

(u32_arr[(3)] = (buffer[(3)]));

return (new Uint8Array(u32_arr.buffer));
});
app.render_wasm.serializers.serialize_uuid = (function app$render_wasm$serializers$serialize_uuid(id){
try{if((id == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.uuid.zero], null);
} else {
var as_uuid = app.common.uuid.uuid(id);
return app.common.uuid.get_u32(as_uuid);
}
}catch (e55085){var _e = e55085;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.uuid.zero], null);
}});
app.render_wasm.serializers.translate_shape_type = (function app$render_wasm$serializers$translate_shape_type(type){
var values = (app.render_wasm.wasm.serializers["shape-type"]);
var default$ = (values["rect"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(type)]),default$);
});
app.render_wasm.serializers.translate_stroke_linecap = (function app$render_wasm$serializers$translate_stroke_linecap(stroke_linecap){
var values = (app.render_wasm.wasm.serializers["stroke-linecap"]);
var default$ = (values["butt"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(stroke_linecap)]),default$);
});
app.render_wasm.serializers.translate_stroke_linejoin = (function app$render_wasm$serializers$translate_stroke_linejoin(stroke_linejoin){
var values = (app.render_wasm.wasm.serializers["stroke-linejoin"]);
var default$ = (values["miter"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(stroke_linejoin)]),default$);
});
app.render_wasm.serializers.translate_fill_rule = (function app$render_wasm$serializers$translate_fill_rule(fill_rule){
var values = (app.render_wasm.wasm.serializers["fill-rule"]);
var default$ = (values["nonzero"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(fill_rule)]),default$);
});
app.render_wasm.serializers.translate_stroke_style = (function app$render_wasm$serializers$translate_stroke_style(stroke_style){
var values = (app.render_wasm.wasm.serializers["stroke-style"]);
var default$ = (values["solid"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(stroke_style)]),default$);
});
app.render_wasm.serializers.translate_stroke_cap = (function app$render_wasm$serializers$translate_stroke_cap(stroke_cap){
var values = (app.render_wasm.wasm.serializers["stroke-cap"]);
var default$ = (values["none"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(stroke_cap)]),default$);
});
app.render_wasm.serializers.serialize_path_attrs = (function app$render_wasm$serializers$serialize_path_attrs(svg_attrs){
return cljs.core.reduce_kv((function (acc,key,value){
return ""+(acc ?? "")+(cuerdas.core.kebab(key) ?? "")+"\u0000"+(value ?? "")+"\u0000";
}),"",svg_attrs);
});
app.render_wasm.serializers.translate_blend_mode = (function app$render_wasm$serializers$translate_blend_mode(blend_mode){
var values = (app.render_wasm.wasm.serializers["blend-mode"]);
var default$ = (values["normal"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(blend_mode)]),default$);
});
app.render_wasm.serializers.translate_constraint_h = (function app$render_wasm$serializers$translate_constraint_h(type){
var values = (app.render_wasm.wasm.serializers["constraint-h"]);
var default$ = (5);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(type)]),default$);
});
app.render_wasm.serializers.translate_constraint_v = (function app$render_wasm$serializers$translate_constraint_v(type){
var values = (app.render_wasm.wasm.serializers["constraint-v"]);
var default$ = (5);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(type)]),default$);
});
app.render_wasm.serializers.translate_bool_type = (function app$render_wasm$serializers$translate_bool_type(bool_type){
var values = (app.render_wasm.wasm.serializers["bool-type"]);
var default$ = (values["union"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(bool_type)]),default$);
});
app.render_wasm.serializers.translate_blur_type = (function app$render_wasm$serializers$translate_blur_type(blur_type){
var values = (app.render_wasm.wasm.serializers["blur-type"]);
var default$ = (values["layer-blur"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(blur_type)]),default$);
});
app.render_wasm.serializers.translate_layout_flex_dir = (function app$render_wasm$serializers$translate_layout_flex_dir(flex_dir){
var values = (app.render_wasm.wasm.serializers["flex-direction"]);
return (values[app.common.data.name(flex_dir)]);
});
app.render_wasm.serializers.translate_layout_grid_dir = (function app$render_wasm$serializers$translate_layout_grid_dir(grid_dir){
var values = (app.render_wasm.wasm.serializers["grid-direction"]);
return (values[app.common.data.name(grid_dir)]);
});
app.render_wasm.serializers.translate_layout_align_items = (function app$render_wasm$serializers$translate_layout_align_items(align_items){
var values = (app.render_wasm.wasm.serializers["align-items"]);
var default$ = (values["start"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(align_items)]),default$);
});
app.render_wasm.serializers.translate_layout_align_content = (function app$render_wasm$serializers$translate_layout_align_content(align_content){
var values = (app.render_wasm.wasm.serializers["align-content"]);
var default$ = (values["stretch"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(align_content)]),default$);
});
app.render_wasm.serializers.translate_layout_justify_items = (function app$render_wasm$serializers$translate_layout_justify_items(justify_items){
var values = (app.render_wasm.wasm.serializers["justify-items"]);
var default$ = (values["start"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(justify_items)]),default$);
});
app.render_wasm.serializers.translate_layout_justify_content = (function app$render_wasm$serializers$translate_layout_justify_content(justify_content){
var values = (app.render_wasm.wasm.serializers["justify-content"]);
var default$ = (values["stretch"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(justify_content)]),default$);
});
app.render_wasm.serializers.translate_layout_wrap_type = (function app$render_wasm$serializers$translate_layout_wrap_type(wrap_type){
var values = (app.render_wasm.wasm.serializers["wrap-type"]);
var default$ = (values["nowrap"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(wrap_type)]),default$);
});
app.render_wasm.serializers.translate_grid_track_type = (function app$render_wasm$serializers$translate_grid_track_type(type){
var values = (app.render_wasm.wasm.serializers["grid-track-type"]);
return (values[app.common.data.name(type)]);
});
app.render_wasm.serializers.translate_layout_sizing = (function app$render_wasm$serializers$translate_layout_sizing(sizing){
var values = (app.render_wasm.wasm.serializers["sizing"]);
var default$ = (values["fix"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(sizing)]),default$);
});
app.render_wasm.serializers.translate_align_self = (function app$render_wasm$serializers$translate_align_self(align_self){
var values = (app.render_wasm.wasm.serializers["align-self"]);
var default$ = (values["none"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(align_self)]),default$);
});
app.render_wasm.serializers.translate_justify_self = (function app$render_wasm$serializers$translate_justify_self(justify_self){
var values = (app.render_wasm.wasm.serializers["justify-self"]);
var default$ = (values["none"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(justify_self)]),default$);
});
app.render_wasm.serializers.translate_shadow_style = (function app$render_wasm$serializers$translate_shadow_style(style){
var values = (app.render_wasm.wasm.serializers["shadow-style"]);
var default$ = (values["drop-shadow"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(style)]),default$);
});
app.render_wasm.serializers.translate_structure_modifier_type = (function app$render_wasm$serializers$translate_structure_modifier_type(type){
var G__55091 = type;
var G__55091__$1 = (((G__55091 instanceof cljs.core.Keyword))?G__55091.fqn:null);
switch (G__55091__$1) {
case "remove-children":
return (1);

break;
case "add-children":
return (2);

break;
case "scale-content":
return (3);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55091__$1)].join('')));

}
});
app.render_wasm.serializers.translate_grow_type = (function app$render_wasm$serializers$translate_grow_type(grow_type){
var values = (app.render_wasm.wasm.serializers["grow-type"]);
var default$ = (values["fixed"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(grow_type)]),default$);
});
app.render_wasm.serializers.translate_vertical_align = (function app$render_wasm$serializers$translate_vertical_align(vertical_align){
var values = (app.render_wasm.wasm.serializers["vertical-align"]);
var default$ = (values["top"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(vertical_align)]),default$);
});
app.render_wasm.serializers.translate_text_align = (function app$render_wasm$serializers$translate_text_align(text_align){
var values = (app.render_wasm.wasm.serializers["text-align"]);
var default$ = (values["left"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(text_align)]),default$);
});
app.render_wasm.serializers.translate_text_transform = (function app$render_wasm$serializers$translate_text_transform(text_transform){
var values = (app.render_wasm.wasm.serializers["text-transform"]);
var default$ = (values["none"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(text_transform)]),default$);
});
app.render_wasm.serializers.translate_text_decoration = (function app$render_wasm$serializers$translate_text_decoration(text_decoration){
var values = (app.render_wasm.wasm.serializers["text-decoration"]);
var default$ = (values["none"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(text_decoration)]),default$);
});
app.render_wasm.serializers.translate_text_direction = (function app$render_wasm$serializers$translate_text_direction(text_direction){
var values = (app.render_wasm.wasm.serializers["text-direction"]);
var default$ = (values["ltr"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(text_direction)]),default$);
});
app.render_wasm.serializers.translate_font_style = (function app$render_wasm$serializers$translate_font_style(font_style){
var values = (app.render_wasm.wasm.serializers["font-style"]);
var default$ = (values["normal"]);
var G__55092 = font_style;
switch (G__55092) {
case "normal":
return (values["normal"]);

break;
case "regular":
return (values["normal"]);

break;
case "italic":
return (values["italic"]);

break;
default:
return default$;

}
});
app.render_wasm.serializers.translate_browser = (function app$render_wasm$serializers$translate_browser(browser){
var G__55093 = browser;
var G__55093__$1 = (((G__55093 instanceof cljs.core.Keyword))?G__55093.fqn:null);
switch (G__55093__$1) {
case "firefox":
return (0);

break;
case "chrome":
return (1);

break;
case "safari":
return (2);

break;
case "edge":
return (3);

break;
case "unknown":
return (4);

break;
default:
return (4);

}
});
app.render_wasm.serializers.translate_transform_entry_kind = (function app$render_wasm$serializers$translate_transform_entry_kind(kind){
var values = (app.render_wasm.wasm.serializers["transform-entry-kind"]);
var default$ = (values["parent"]);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((values[app.common.data.name(kind)]),default$);
});

//# sourceMappingURL=app.render_wasm.serializers.js.map
