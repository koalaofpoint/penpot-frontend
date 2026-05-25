import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.uuid.js";
goog.provide('app.render_wasm.deserializers');
app.render_wasm.deserializers.read_modifier_entry = (function app$render_wasm$deserializers$read_modifier_entry(heapu32,heapf32,offset){
var id1 = (heapu32[(offset + (0))]);
var id2 = (heapu32[(offset + (1))]);
var id3 = (heapu32[(offset + (2))]);
var id4 = (heapu32[(offset + (3))]);
var a = (heapf32[(offset + (4))]);
var b = (heapf32[(offset + (5))]);
var c = (heapf32[(offset + (6))]);
var d = (heapf32[(offset + (7))]);
var e = (heapf32[(offset + (8))]);
var f = (heapf32[(offset + (9))]);
return app.common.data.vec2(app.common.uuid.from_unsigned_parts(id1,id2,id3,id4),app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f));
});
app.render_wasm.deserializers.read_selection_rect = (function app$render_wasm$deserializers$read_selection_rect(heapf32,offset){
var width = (heapf32[(offset + (0))]);
var height = (heapf32[(offset + (1))]);
var cx = (heapf32[(offset + (2))]);
var cy = (heapf32[(offset + (3))]);
var a = (heapf32[(offset + (4))]);
var b = (heapf32[(offset + (5))]);
var c = (heapf32[(offset + (6))]);
var d = (heapf32[(offset + (7))]);
var e = (heapf32[(offset + (8))]);
var f = (heapf32[(offset + (9))]);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"center","center",-748944368),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cx,cy),new cljs.core.Keyword(null,"transform","transform",1381301764),app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f)], null);
});
app.render_wasm.deserializers.read_position_data_entry = (function app$render_wasm$deserializers$read_position_data_entry(heapu32,heapf32,offset){
var paragraph = (heapu32[(offset + (0))]);
var span = (heapu32[(offset + (1))]);
var start_pos = (heapu32[(offset + (2))]);
var end_pos = (heapu32[(offset + (3))]);
var x = (heapf32[(offset + (4))]);
var y = (heapf32[(offset + (5))]);
var width = (heapf32[(offset + (6))]);
var height = (heapf32[(offset + (7))]);
var direction = (heapu32[(offset + (8))]);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"paragraph","paragraph",296707709),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"span","span",1394872991)],[y,end_pos,width,x,paragraph,direction,start_pos,height,span]);
});
app.render_wasm.deserializers.translate_direction = (function app$render_wasm$deserializers$translate_direction(direction){
var G__55163 = direction;
switch (G__55163) {
case (0):
return "rtl";

break;
default:
return "ltr";

}
});

//# sourceMappingURL=app.render_wasm.deserializers.js.map
