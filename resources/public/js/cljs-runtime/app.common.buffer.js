import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.uuid.js";
goog.provide('app.common.buffer');
app.common.buffer.wrap = (function app$common$buffer$wrap(data){
return (new DataView(data.buffer));
});
app.common.buffer.allocate = (function app$common$buffer$allocate(size){
return (new DataView((new ArrayBuffer(size))));
});
app.common.buffer.clone = (function app$common$buffer$clone(buffer){
var src_off = buffer.byteOffset;
var src_len = buffer.byteLength;
var src_buf = buffer.buffer;
var src_view = (new Uint8Array(src_buf,src_off,src_len));
var dst_buff = (new ArrayBuffer(src_len));
var dst_view = (new Uint8Array(dst_buff));
dst_view.set(src_view);

return (new DataView(dst_buff));
});
app.common.buffer.equals_QMARK_ = (function app$common$buffer$equals_QMARK_(buffer_a,buffer_b){
var len_a = buffer_a.byteLength;
var len_b = buffer_b.byteLength;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len_a,len_b)){
var cb = (new Uint8Array(buffer_a.buffer,buffer_a.byteOffset,len_a));
var ob = (new Uint8Array(buffer_b.buffer,buffer_b.byteOffset,len_b));
var sz = cb.length;
var i = (0);
while(true){
if((i < sz)){
if(((ob[i]) === (cb[i]))){
var G__48148 = (i + (1));
i = G__48148;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
});
app.common.buffer.buffer_QMARK_ = (function app$common$buffer$buffer_QMARK_(o){
return (o instanceof DataView);
});
app.common.buffer.slice = (function app$common$buffer$slice(buffer,offset,size){
var offset__$1 = (buffer.byteOffset + offset);
return (new DataView(buffer.buffer,offset__$1,size));
});
app.common.buffer.size = (function app$common$buffer$size(o){
return o.byteLength;
});

//# sourceMappingURL=app.common.buffer.js.map
