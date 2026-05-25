import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.uuid.js";
import "./app.render_wasm.helpers.js";
import "./app.render_wasm.mem.js";
import "./app.render_wasm.serializers.js";
import "./app.render_wasm.wasm.js";
goog.provide('app.render_wasm.api.shapes');
app.render_wasm.api.shapes.BASE_PROPS_SIZE = (104);
app.render_wasm.api.shapes.FLAG_CLIP_CONTENT = (1);
app.render_wasm.api.shapes.FLAG_HIDDEN = (2);
app.render_wasm.api.shapes.CONSTRAINT_NONE = (255);
/**
 * Write a UUID to the heap at the given byte offset using DataView.
 */
app.render_wasm.api.shapes.write_uuid_to_heap = (function app$render_wasm$api$shapes$write_uuid_to_heap(dview,offset,id){
var buffer = app.common.uuid.get_u32(id);
dview.setUint32(offset,(buffer[(0)]),true);

dview.setUint32((offset + (4)),(buffer[(1)]),true);

dview.setUint32((offset + (8)),(buffer[(2)]),true);

return dview.setUint32((offset + (12)),(buffer[(3)]),true);
});
/**
 * Extract transform matrix values, defaulting to identity matrix.
 */
app.render_wasm.api.shapes.serialize_transform = (function app$render_wasm$api$shapes$serialize_transform(transform){
if((!((transform == null)))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(transform?.a?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"a","a",-2123407586))),(transform?.b?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"b","b",1482224470))),(transform?.c?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"c","c",-1763192079))),(transform?.d?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"d","d",1972142424))),(transform?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"e","e",1381269198))),(transform?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transform,new cljs.core.Keyword(null,"f","f",-1597136552)))], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0,0.0,1.0,0.0,0.0], null);
}
});
/**
 * Extract selrect values.
 */
app.render_wasm.api.shapes.serialize_selrect = (function app$render_wasm$api$shapes$serialize_selrect(selrect){
if((!((selrect == null)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(selrect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x1","x1",-1863922247))),(selrect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y1","y1",589123466))),(selrect?.x2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x2","x2",-1362513475))),(selrect?.y2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y2","y2",-718691301)))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0,0.0,0.0], null);
}
});
/**
 * Set all base shape properties in a single WASM call.
 * 
 * This replaces the following individual calls:
 * - use-shape
 * - set-parent-id
 * - set-shape-type
 * - set-shape-clip-content
 * - set-shape-rotation
 * - set-shape-transform
 * - set-shape-blend-mode
 * - set-shape-opacity
 * - set-shape-hidden
 * - set-shape-selrect
 * - set-shape-corners
 * - set-shape-constraints (clear + h + v)
 * 
 * Returns nil.
 */
app.render_wasm.api.shapes.set_shape_base_props = (function app$render_wasm$api$shapes$set_shape_base_props(shape){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var shape_type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var clip_content = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_type,new cljs.core.Keyword(null,"frame","frame",-1711082588)))?cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"show-content","show-content",-878000465))):false);
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false);
var flags = (function (){var G__55122 = (0);
var G__55122__$1 = ((clip_content)?(G__55122 | (1)):G__55122);
if(cljs.core.truth_(hidden)){
return (G__55122__$1 | (2));
} else {
return G__55122__$1;
}
})();
var blend_mode = app.render_wasm.serializers.translate_blend_mode(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224)));
var constraint_h = (function (){var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452));
if((!((c == null)))){
return app.render_wasm.serializers.translate_constraint_h(c);
} else {
return (255);
}
})();
var constraint_v = (function (){var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122));
if((!((c == null)))){
return app.render_wasm.serializers.translate_constraint_v(c);
} else {
return (255);
}
})();
var opacity = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"opacity","opacity",397153780)),1.0);
var rotation = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)),0.0);
var vec__55116 = app.render_wasm.api.shapes.serialize_transform(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"transform","transform",1381301764)));
var ta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55116,(0),null);
var tb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55116,(1),null);
var tc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55116,(2),null);
var td = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55116,(3),null);
var te = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55116,(4),null);
var tf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55116,(5),null);
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var vec__55119 = app.render_wasm.api.shapes.serialize_selrect(selrect);
var sx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55119,(0),null);
var sy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55119,(1),null);
var sx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55119,(2),null);
var sy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55119,(3),null);
var r1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"r1","r1",690974900)),0.0);
var r2 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"r2","r2",252844174)),0.0);
var r3 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"r3","r3",-2027148174)),0.0);
var r4 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"r4","r4",1134323163)),0.0);
var offset = app.render_wasm.mem.alloc((104));
var heap = app.render_wasm.mem.get_heap_u8();
var dview = (new DataView(heap.buffer));
app.render_wasm.api.shapes.write_uuid_to_heap(dview,offset,id);

app.render_wasm.api.shapes.write_uuid_to_heap(dview,(offset + (16)),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(parent_id,app.common.uuid.zero));

dview.setUint8((offset + (32)),app.render_wasm.serializers.translate_shape_type(shape_type));

dview.setUint8((offset + (33)),flags);

dview.setUint8((offset + (34)),blend_mode);

dview.setUint8((offset + (35)),constraint_h);

dview.setUint8((offset + (36)),constraint_v);

dview.setFloat32((offset + (40)),opacity,true);

dview.setFloat32((offset + (44)),rotation,true);

dview.setFloat32((offset + (48)),ta,true);

dview.setFloat32((offset + (52)),tb,true);

dview.setFloat32((offset + (56)),tc,true);

dview.setFloat32((offset + (60)),td,true);

dview.setFloat32((offset + (64)),te,true);

dview.setFloat32((offset + (68)),tf,true);

dview.setFloat32((offset + (72)),sx1,true);

dview.setFloat32((offset + (76)),sy1,true);

dview.setFloat32((offset + (80)),sx2,true);

dview.setFloat32((offset + (84)),sy2,true);

dview.setFloat32((offset + (88)),r1,true);

dview.setFloat32((offset + (92)),r2,true);

dview.setFloat32((offset + (96)),r3,true);

dview.setFloat32((offset + (100)),r4,true);

var fn_55141_55160 = (app.render_wasm.wasm.internal_module["_set_shape_base_props"]);
fn_55141_55160();

return null;
} else {
return null;
}
});

//# sourceMappingURL=app.render_wasm.api.shapes.js.map
