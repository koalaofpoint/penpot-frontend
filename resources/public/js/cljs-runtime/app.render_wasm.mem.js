import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.buffer.js";
import "./app.render_wasm.helpers.js";
import "./app.render_wasm.wasm.js";
goog.provide('app.render_wasm.mem');
/**
 * Convert a 8-bit (1 byte) offset to a 32-bit (4 bytes) offset
 */
app.render_wasm.mem.__GT_offset_32 = (function app$render_wasm$mem$__GT_offset_32(value){
return (value >> (2));
});
/**
 * Calculate allocation size for a sequential collection of identical
 *   objects of the specified size.
 */
app.render_wasm.mem.get_alloc_size = (function app$render_wasm$mem$get_alloc_size(coll,item_size){
if(cljs.core.counted_QMARK_(coll)){
} else {
throw (new Error(["Assert failed: ","`coll` should be constant time countable","\n","(counted? coll)"].join('')));
}

return (item_size * cljs.core.count(coll));
});
/**
 * Allocates an arbitrary amount of bytes (aligned to 4 bytes).
 *   Returns an offset of 8 bits (1 byte) size.
 */
app.render_wasm.mem.alloc = (function app$render_wasm$mem$alloc(size){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size,(0))){
console.trace("Tried to allocate 0 bytes");
} else {
}

var fn_55088 = (app.render_wasm.wasm.internal_module["_alloc_bytes"]);
return fn_55088(size);
});
/**
 * Allocates an arbitrary amount of bytes (aligned to 4 bytes).
 *   Returns an offset of 32 bits (4 bytes) size.
 */
app.render_wasm.mem.alloc__GT_offset_32 = (function app$render_wasm$mem$alloc__GT_offset_32(size){
return app.render_wasm.mem.__GT_offset_32(app.render_wasm.mem.alloc(size));
});
/**
 * Returns a Uint8Array view of the heap
 */
app.render_wasm.mem.get_heap_u8 = (function app$render_wasm$mem$get_heap_u8(){
return (app.render_wasm.wasm.internal_module["HEAPU8"]);
});
/**
 * Returns a Uint32Array view of the heap
 */
app.render_wasm.mem.get_heap_u32 = (function app$render_wasm$mem$get_heap_u32(){
return (app.render_wasm.wasm.internal_module["HEAPU32"]);
});
/**
 * Returns a Uint32Array view of the heap
 */
app.render_wasm.mem.get_heap_i32 = (function app$render_wasm$mem$get_heap_i32(){
return (app.render_wasm.wasm.internal_module["HEAP32"]);
});
/**
 * Returns a Float32Array view of the heap
 */
app.render_wasm.mem.get_heap_f32 = (function app$render_wasm$mem$get_heap_f32(){
return (app.render_wasm.wasm.internal_module["HEAPF32"]);
});
app.render_wasm.mem.free = (function app$render_wasm$mem$free(){
var fn_55089 = (app.render_wasm.wasm.internal_module["_free_bytes"]);
return fn_55089();
});
/**
 * Read a UTF-8 string from WASM memory given a byte pointer/offset.
 * Uses Emscripten's UTF8ToString to decode the string.
 */
app.render_wasm.mem.read_string = (function app$render_wasm$mem$read_string(ptr){
var fn_55090 = (app.render_wasm.wasm.internal_module["UTF8ToString"]);
return fn_55090(ptr);
});
/**
 * Read a null-terminated UTF-8 string from WASM memory.
 * Manually reads bytes until null terminator and decodes using TextDecoder.
 */
app.render_wasm.mem.read_null_terminated_string = (function app$render_wasm$mem$read_null_terminated_string(ptr){
if(cljs.core.truth_((function (){var and__5023__auto__ = ptr;
if(cljs.core.truth_(and__5023__auto__)){
return (!((ptr === (0))));
} else {
return and__5023__auto__;
}
})())){
var heap = app.render_wasm.mem.get_heap_u8();
var end_idx = (function (){var idx = ptr;
while(true){
if(((heap[idx]) === (0))){
return idx;
} else {
var G__55100 = (idx + (1));
idx = G__55100;
continue;
}
break;
}
})();
var bytes = heap.slice(ptr,end_idx);
var decoder = (new TextDecoder("utf-8"));
return decoder.decode(bytes);
} else {
return null;
}
});
/**
 * Returns a copy of a portion of a typed array into a new typed array
 *   object selected from start to end.
 */
app.render_wasm.mem.slice = (function app$render_wasm$mem$slice(heap,offset,size){
return heap.slice(offset,(offset + size));
});
/**
 * Returns a heap wrapped in a DataView for surgical write operations
 */
app.render_wasm.mem.get_data_view = (function app$render_wasm$mem$get_data_view(){
return app.common.buffer.wrap(app.render_wasm.mem.get_heap_u8());
});
/**
 * Write unsigned int8. Expects a DataView instance
 */
app.render_wasm.mem.write_u8 = (function app$render_wasm$mem$write_u8(offset,target,value){
target.setUint8(offset,value,true);

return (offset + (1));
});
/**
 * Write float32. Expects a DataView instance
 */
app.render_wasm.mem.write_f32 = (function app$render_wasm$mem$write_f32(offset,target,value){
target.setFloat32(offset,value,true);

return (offset + (4));
});
/**
 * Write int32. Expects a DataView instance
 */
app.render_wasm.mem.write_i32 = (function app$render_wasm$mem$write_i32(offset,target,value){
target.setInt32(offset,value,true);

return (offset + (4));
});
/**
 * Write int32. Expects a DataView instance
 */
app.render_wasm.mem.write_u32 = (function app$render_wasm$mem$write_u32(offset,target,value){
target.setInt32(offset,value,true);

return (offset + (4));
});
/**
 * Write int32. Expects a DataView instance
 */
app.render_wasm.mem.write_bool = (function app$render_wasm$mem$write_bool(offset,target,value){
target.setInt8(offset,(cljs.core.truth_(value)?(1):(0)),true);

return (offset + (1));
});
/**
 * Write uuid. Expects a DataView instance
 */
app.render_wasm.mem.write_uuid = (function app$render_wasm$mem$write_uuid(offset,target,value){
var barray__48070__auto___55103 = app.common.uuid.get_u32(value);
target.setUint32((offset + (0)),(barray__48070__auto___55103[(0)]),true);

target.setUint32((offset + (4)),(barray__48070__auto___55103[(1)]),true);

target.setUint32((offset + (8)),(barray__48070__auto___55103[(2)]),true);

target.setUint32((offset + (12)),(barray__48070__auto___55103[(3)]),true);

return (offset + (16));
});
app.render_wasm.mem.write_buffer = (function app$render_wasm$mem$write_buffer(offset,target,value){
if((target instanceof Uint8Array)){
} else {
throw (new Error(["Assert failed: ","target should be u8 addressable heap","\n","(instance? js/Uint8Array target)"].join('')));
}

var value__$1 = (((value instanceof ArrayBuffer))?(new Uint8Array(value)):(((value instanceof Uint8Array))?value:(function(){throw (new Error("unexpected type"))})()
));
target.set(value__$1,offset);

return (offset + value__$1.byteLength);
});
app.render_wasm.mem.assert_written = (function app$render_wasm$mem$assert_written(final_offset,prev_offset,expected){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected,(final_offset - prev_offset))){
} else {
throw (new Error(["Assert failed: ",["expected to be written ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)," but finally writted ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((final_offset - prev_offset))].join(''),"\n","(= expected (- final-offset prev-offset))"].join('')));
}

return final_offset;
});
/**
 * Get buffer size
 */
app.render_wasm.mem.size = (function app$render_wasm$mem$size(o){
return o.byteLength;
});

//# sourceMappingURL=app.render_wasm.mem.js.map
