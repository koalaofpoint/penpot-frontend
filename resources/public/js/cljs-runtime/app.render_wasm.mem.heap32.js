import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.uuid.js";
goog.provide('app.render_wasm.mem.heap32');
app.render_wasm.mem.heap32.write_u32 = (function app$render_wasm$mem$heap32$write_u32(offset,heap,value){
if((heap instanceof Uint32Array)){
} else {
throw (new Error(["Assert failed: ","expected Uint32Array instance for `heap`","\n","(instance? js/Uint32Array heap)"].join('')));
}

(heap[offset] = value);

return (offset + (1));
});
app.render_wasm.mem.heap32.write_f32 = (function app$render_wasm$mem$heap32$write_f32(offset,heap,value){
if((heap instanceof Float32Array)){
} else {
throw (new Error(["Assert failed: ","expected Float32Array instance for `heap`","\n","(instance? js/Float32Array heap)"].join('')));
}

(heap[offset] = value);

return (offset + (1));
});
/**
 * Write a uuid to 32 bits addressed heap and return the offset
 *   after write.
 */
app.render_wasm.mem.heap32.write_uuid = (function app$render_wasm$mem$heap32$write_uuid(offset,heap,id){
if((heap instanceof Uint32Array)){
} else {
throw (new Error(["Assert failed: ","expected Uint32Array instance for `heap`","\n","(instance? js/Uint32Array heap)"].join('')));
}

var buffer = app.common.uuid.get_u32(id);
heap.set(buffer,offset);

return (offset + (4));
});
/**
 * Write a matrix to 32 bits addressed heap and return the offset
 *   after write.
 */
app.render_wasm.mem.heap32.write_matrix = (function app$render_wasm$mem$heap32$write_matrix(offset,heap,matrix){
if((heap instanceof Float32Array)){
} else {
throw (new Error(["Assert failed: ","expected Float32Array instance for `heap`","\n","(instance? js/Float32Array heap)"].join('')));
}

var a = (matrix?.a?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,new cljs.core.Keyword(null,"a","a",-2123407586)));
var b = (matrix?.b?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,new cljs.core.Keyword(null,"b","b",1482224470)));
var c = (matrix?.c?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,new cljs.core.Keyword(null,"c","c",-1763192079)));
var d = (matrix?.d?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,new cljs.core.Keyword(null,"d","d",1972142424)));
var e = (matrix?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,new cljs.core.Keyword(null,"e","e",1381269198)));
var f = (matrix?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,new cljs.core.Keyword(null,"f","f",-1597136552)));
(heap[(offset + (0))] = a);

(heap[(offset + (1))] = b);

(heap[(offset + (2))] = c);

(heap[(offset + (3))] = d);

(heap[(offset + (4))] = e);

(heap[(offset + (5))] = f);

return (offset + (6));
});

//# sourceMappingURL=app.render_wasm.mem.heap32.js.map
