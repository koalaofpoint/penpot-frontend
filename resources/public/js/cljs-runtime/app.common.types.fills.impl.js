import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.weak.js";
import "./app.common.buffer.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.math.js";
import "./app.common.transit.js";
goog.provide('app.common.types.fills.impl');
app.common.types.fills.impl.MAX_GRADIENT_STOPS = (16);
app.common.types.fills.impl.MAX_FILLS = (8);
app.common.types.fills.impl.GRADIENT_STOP_U8_SIZE = (8);
app.common.types.fills.impl.GRADIENT_U8_SIZE = (156);
app.common.types.fills.impl.SOLID_U8_SIZE = (4);
app.common.types.fills.impl.IMAGE_U8_SIZE = (36);
app.common.types.fills.impl.METADATA_U8_SIZE = (36);
app.common.types.fills.impl.FILL_U8_SIZE = ((4) + Math.max((156),(36),(4)));
app.common.types.fills.impl.xf_COLON_take_stops = cljs.core.take.cljs$core$IFn$_invoke$arity$1((16));
app.common.types.fills.impl.xf_COLON_take_fills = cljs.core.take.cljs$core$IFn$_invoke$arity$1((8));

/**
 * @interface
 */
app.common.types.fills.impl.IHeapWritable = function(){};

var app$common$types$fills$impl$IHeapWritable$_write_to$dyn_48341 = (function (_,buffer,offset){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.fills.impl._write_to[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,buffer,offset) : m__5374__auto__.call(null,_,buffer,offset));
} else {
var m__5372__auto__ = (app.common.types.fills.impl._write_to["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,buffer,offset) : m__5372__auto__.call(null,_,buffer,offset));
} else {
throw cljs.core.missing_protocol("IHeapWritable.-write-to",_);
}
}
});
/**
 * write the content to the specified buffer
 */
app.common.types.fills.impl._write_to = (function app$common$types$fills$impl$_write_to(_,buffer,offset){
if((((!((_ == null)))) && ((!((_.app$common$types$fills$impl$IHeapWritable$_write_to$arity$3 == null)))))){
return _.app$common$types$fills$impl$IHeapWritable$_write_to$arity$3(_,buffer,offset);
} else {
return app$common$types$fills$impl$IHeapWritable$_write_to$dyn_48341(_,buffer,offset);
}
});

var app$common$types$fills$impl$IHeapWritable$_get_byte_size$dyn_48342 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.fills.impl._get_byte_size[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.fills.impl._get_byte_size["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeapWritable.-get-byte-size",_);
}
}
});
/**
 * get byte size
 */
app.common.types.fills.impl._get_byte_size = (function app$common$types$fills$impl$_get_byte_size(_){
if((((!((_ == null)))) && ((!((_.app$common$types$fills$impl$IHeapWritable$_get_byte_size$arity$1 == null)))))){
return _.app$common$types$fills$impl$IHeapWritable$_get_byte_size$arity$1(_);
} else {
return app$common$types$fills$impl$IHeapWritable$_get_byte_size$dyn_48342(_);
}
});


/**
 * @interface
 */
app.common.types.fills.impl.IBinaryFills = function(){};

var app$common$types$fills$impl$IBinaryFills$_get_image_ids$dyn_48343 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.fills.impl._get_image_ids[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.fills.impl._get_image_ids["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBinaryFills.-get-image-ids",_);
}
}
});
/**
 * get referenced image ids
 */
app.common.types.fills.impl._get_image_ids = (function app$common$types$fills$impl$_get_image_ids(_){
if((((!((_ == null)))) && ((!((_.app$common$types$fills$impl$IBinaryFills$_get_image_ids$arity$1 == null)))))){
return _.app$common$types$fills$impl$IBinaryFills$_get_image_ids$arity$1(_);
} else {
return app$common$types$fills$impl$IBinaryFills$_get_image_ids$dyn_48343(_);
}
});

/**
 * Encode an hex string as rgb (int32)
 */
app.common.types.fills.impl.hex__GT_rgb = (function app$common$types$fills$impl$hex__GT_rgb(hex){
var hex__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex,(1));
return parseInt(hex__$1,(16));
});
/**
 * Use the first 2 bytes of in32 for encode the alpha channel
 */
app.common.types.fills.impl.rgb__GT_rgba = (function app$common$types$fills$impl$rgb__GT_rgba(n,alpha){
var result = app.common.math.floor((alpha * (255)));
var result__$1 = cljs.core.unchecked_int(result);
var result__$2 = (result__$1 << (24));
var result__$3 = (result__$2 | n);
return result__$3;
});
app.common.types.fills.impl.get_color_hex = (function app$common$types$fills$impl$get_color_hex(n){
var n__$1 = (n & (16777215));
var n__$2 = n__$1.toString((16));
return ""+"#"+(n__$2.padStart((6),"0") ?? "");
});
app.common.types.fills.impl.get_color_alpha = (function app$common$types$fills$impl$get_color_alpha(rgb){
var n = (rgb & (4278190080));
var n__$1 = (n >>> (24));
return app.common.math.precision((n__$1 / (255)),(2));
});
app.common.types.fills.impl.write_solid_fill = (function app$common$types$fills$impl$write_solid_fill(offset,buffer,opacity,color){
buffer.setInt8((offset + (0)),(0),true);

buffer.setInt32((offset + (4)),app.common.types.fills.impl.rgb__GT_rgba(app.common.types.fills.impl.hex__GT_rgb(color),opacity),true);

return (offset + app.common.types.fills.impl.FILL_U8_SIZE);
});
app.common.types.fills.impl.write_gradient_fill = (function app$common$types$fills$impl$write_gradient_fill(offset,buffer,opacity,gradient){
var start_x = new cljs.core.Keyword(null,"start-x","start-x",-193941684).cljs$core$IFn$_invoke$arity$1(gradient);
var start_y = new cljs.core.Keyword(null,"start-y","start-y",-771244577).cljs$core$IFn$_invoke$arity$1(gradient);
var end_x = new cljs.core.Keyword(null,"end-x","end-x",-1323983821).cljs$core$IFn$_invoke$arity$1(gradient);
var end_y = new cljs.core.Keyword(null,"end-y","end-y",859881965).cljs$core$IFn$_invoke$arity$1(gradient);
var alpha = app.common.math.floor((opacity * (255)));
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(gradient,(0));
var stops = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.types.fills.impl.xf_COLON_take_stops,new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(gradient));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient),new cljs.core.Keyword(null,"linear","linear",872268697)))?(1):(2));
buffer.setInt8((offset + (0)),type,true);

buffer.setFloat32((offset + (4)),start_x,true);

buffer.setFloat32((offset + (8)),start_y,true);

buffer.setFloat32((offset + (12)),end_x,true);

buffer.setFloat32((offset + (16)),end_y,true);

buffer.setInt8((offset + (20)),alpha,true);

buffer.setFloat32((offset + (24)),width,true);

buffer.setInt8((offset + (28)),cljs.core.count(stops),true);

var stops__$1 = cljs.core.seq(stops);
var offset_SINGLEQUOTE_ = (offset + (32));
while(true){
var temp__5823__auto__ = cljs.core.first(stops__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var stop = temp__5823__auto__;
var color = app.common.types.fills.impl.rgb__GT_rgba(app.common.types.fills.impl.hex__GT_rgb(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(stop)),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$2(stop,(1)));
buffer.setInt32((offset_SINGLEQUOTE_ + (0)),color,true);

buffer.setFloat32((offset_SINGLEQUOTE_ + (4)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(stop),true);

var G__48344 = cljs.core.rest(stops__$1);
var G__48345 = (offset_SINGLEQUOTE_ + (8));
stops__$1 = G__48344;
offset_SINGLEQUOTE_ = G__48345;
continue;
} else {
return (offset + app.common.types.fills.impl.FILL_U8_SIZE);
}
break;
}
});
app.common.types.fills.impl.write_image_fill = (function app$common$types$fills$impl$write_image_fill(offset,buffer,opacity,image){
var image_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(image,new cljs.core.Keyword(null,"id","id",-1388402092));
var image_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(image,new cljs.core.Keyword(null,"width","width",-384071477));
var image_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(image,new cljs.core.Keyword(null,"height","height",1025178622));
var alpha = app.common.math.floor((opacity * (255)));
var keep_aspect_ratio = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(image,new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727),false))?(1):(0));
var flags = (keep_aspect_ratio | (0));
buffer.setInt8((offset + (0)),(3),true);

var barray__48070__auto___48346 = app.common.uuid.get_u32(image_id);
buffer.setUint32(((offset + (4)) + (0)),(barray__48070__auto___48346[(0)]),true);

buffer.setUint32(((offset + (4)) + (4)),(barray__48070__auto___48346[(1)]),true);

buffer.setUint32(((offset + (4)) + (8)),(barray__48070__auto___48346[(2)]),true);

buffer.setUint32(((offset + (4)) + (12)),(barray__48070__auto___48346[(3)]),true);

buffer.setInt8((offset + (20)),alpha,true);

buffer.setInt8((offset + (21)),flags,true);

buffer.setInt16((offset + (22)),(0),true);

buffer.setInt32((offset + (24)),image_width,true);

buffer.setInt32((offset + (28)),image_height,true);

return (offset + app.common.types.fills.impl.FILL_U8_SIZE);
});
app.common.types.fills.impl.write_metadata = (function app$common$types$fills$impl$write_metadata(offset,buffer,fill){
var ref_id = new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098).cljs$core$IFn$_invoke$arity$1(fill);
var ref_file = new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255).cljs$core$IFn$_invoke$arity$1(fill);
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fill,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848)),new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
if(cljs.core.truth_(mtype)){
var val_48347 = (function (){var G__48194 = mtype;
switch (G__48194) {
case "image/jpeg":
return (1);

break;
case "image/png":
return (2);

break;
case "image/gif":
return (3);

break;
case "image/webp":
return (4);

break;
case "image/svg+xml":
return (5);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48194)].join('')));

}
})();
buffer.setInt16((offset + (2)),val_48347,true);
} else {
}

if((((!((ref_file == null)))) && ((!((ref_id == null)))))){
buffer.setInt8((offset + (0)),(1)
,true);

var barray__48070__auto___48349 = app.common.uuid.get_u32(ref_file);
buffer.setUint32(((offset + (4)) + (0)),(barray__48070__auto___48349[(0)]),true);

buffer.setUint32(((offset + (4)) + (4)),(barray__48070__auto___48349[(1)]),true);

buffer.setUint32(((offset + (4)) + (8)),(barray__48070__auto___48349[(2)]),true);

buffer.setUint32(((offset + (4)) + (12)),(barray__48070__auto___48349[(3)]),true);

var barray__48070__auto__ = app.common.uuid.get_u32(ref_id);
buffer.setUint32(((offset + (20)) + (0)),(barray__48070__auto__[(0)]),true);

buffer.setUint32(((offset + (20)) + (4)),(barray__48070__auto__[(1)]),true);

buffer.setUint32(((offset + (20)) + (8)),(barray__48070__auto__[(2)]),true);

return buffer.setUint32(((offset + (20)) + (12)),(barray__48070__auto__[(3)]),true);
} else {
return buffer.setInt8((offset + (0)),(0)
,true);
}
});
app.common.types.fills.impl.read_stop = (function app$common$types$fills$impl$read_stop(buffer,offset){
var rgba = buffer.getInt32((offset + (0)),true);
var soff = buffer.getFloat32((offset + (4)),true);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.types.fills.impl.get_color_hex(rgba),new cljs.core.Keyword(null,"opacity","opacity",397153780),app.common.types.fills.impl.get_color_alpha(rgba),new cljs.core.Keyword(null,"offset","offset",296498311),app.common.math.precision(soff,(2))], null);
});
/**
 * Read segment from binary buffer at specified index
 */
app.common.types.fills.impl.read_fill = (function app$common$types$fills$impl$read_fill(dbuffer,mbuffer,index){
var doffset = ((4) + (index * app.common.types.fills.impl.FILL_U8_SIZE));
var moffset = (index * (36));
var type = dbuffer.getInt8(doffset,true);
var refs_QMARK_ = ((1) === mbuffer.getInt8((moffset + (0)),true));
var fill = (function (){var G__48212 = type;
switch (G__48212) {
case (0):
var rgba = dbuffer.getInt32((doffset + (4)),true);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),app.common.types.fills.impl.get_color_hex(rgba),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),app.common.types.fills.impl.get_color_alpha(rgba)], null);

break;
case (1):
case (2):
var start_x = dbuffer.getFloat32((doffset + (4)),true);
var start_y = dbuffer.getFloat32((doffset + (8)),true);
var end_x = dbuffer.getFloat32((doffset + (12)),true);
var end_y = dbuffer.getFloat32((doffset + (16)),true);
var alpha = dbuffer.getUint8((doffset + (20)),true);
var width = dbuffer.getFloat32((doffset + (24)),true);
var stops = dbuffer.getInt8((doffset + (28)),true);
var opacity = app.common.math.precision((alpha / (255)),(2));
var type__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,(1)))?new cljs.core.Keyword(null,"linear","linear",872268697):new cljs.core.Keyword(null,"radial","radial",-1334240714));
var stops__$1 = (function (){var index__$1 = (0);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if((index__$1 < stops)){
var G__48359 = (index__$1 + (1));
var G__48360 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,app.common.types.fills.impl.read_stop(dbuffer,((doffset + (32)) + ((8) * index__$1))));
index__$1 = G__48359;
result = G__48360;
continue;
} else {
return result;
}
break;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),opacity,new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"start-x","start-x",-193941684),start_x,new cljs.core.Keyword(null,"start-y","start-y",-771244577),start_y,new cljs.core.Keyword(null,"end-x","end-x",-1323983821),end_x,new cljs.core.Keyword(null,"end-y","end-y",859881965),end_y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"stops","stops",-1205459005),stops__$1,new cljs.core.Keyword(null,"type","type",1174270348),type__$1], null)], null);

break;
case (3):
var id = (function (){var a__47912__auto__ = dbuffer.getUint32(((doffset + (4)) + (0)),true);
var b__47913__auto__ = dbuffer.getUint32(((doffset + (4)) + (4)),true);
var c__47914__auto__ = dbuffer.getUint32(((doffset + (4)) + (8)),true);
var d__47915__auto__ = dbuffer.getUint32(((doffset + (4)) + (12)),true);
return app.common.uuid.from_unsigned_parts(a__47912__auto__,b__47913__auto__,c__47914__auto__,d__47915__auto__);
})();
var alpha = dbuffer.getUint8((doffset + (20)),true);
var opacity = app.common.math.precision((alpha / (255)),(2));
var flags = dbuffer.getUint8((doffset + (21)),true);
var ratio = cljs.core.boolean$((flags & (1)));
var width = dbuffer.getInt32((doffset + (24)),true);
var height = dbuffer.getInt32((doffset + (28)),true);
var mtype = mbuffer.getInt16((moffset + (2)),true);
var mtype__$1 = (function (){var G__48235 = mtype;
switch (G__48235) {
case (1):
return "image/jpeg";

break;
case (2):
return "image/png";

break;
case (3):
return "image/gif";

break;
case (4):
return "image/webp";

break;
case (5):
return "image/svg+xml";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48235)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),opacity,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"mtype","mtype",-1724656120),mtype__$1,new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727),ratio,new cljs.core.Keyword(null,"name","name",1843675177),"sample"], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48212)].join('')));

}
})();
if(refs_QMARK_){
var ref_file = (function (){var a__47912__auto__ = mbuffer.getUint32(((moffset + (4)) + (0)),true);
var b__47913__auto__ = mbuffer.getUint32(((moffset + (4)) + (4)),true);
var c__47914__auto__ = mbuffer.getUint32(((moffset + (4)) + (8)),true);
var d__47915__auto__ = mbuffer.getUint32(((moffset + (4)) + (12)),true);
return app.common.uuid.from_unsigned_parts(a__47912__auto__,b__47913__auto__,c__47914__auto__,d__47915__auto__);
})();
var ref_id = (function (){var a__47912__auto__ = mbuffer.getUint32(((moffset + (20)) + (0)),true);
var b__47913__auto__ = mbuffer.getUint32(((moffset + (20)) + (4)),true);
var c__47914__auto__ = mbuffer.getUint32(((moffset + (20)) + (8)),true);
var d__47915__auto__ = mbuffer.getUint32(((moffset + (20)) + (12)),true);
return app.common.uuid.from_unsigned_parts(a__47912__auto__,b__47913__auto__,c__47914__auto__,d__47915__auto__);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fill,new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),ref_id),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),ref_file);
} else {
return fill;
}
});

/**
* @constructor
 * @implements {app.common.types.fills.impl.IHeapWritable}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {app.common.types.fills.impl.IBinaryFills}
 * @implements {cljs.core.IEncodeJS}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IReduce}
*/
app.common.types.fills.impl.Fills = (function (size,dbuffer,mbuffer,image_ids,cache,__hash){
this.size = size;
this.dbuffer = dbuffer;
this.mbuffer = mbuffer;
this.image_ids = image_ids;
this.cache = cache;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179465746;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.common.types.fills.impl.Fills.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
if(app.common.data.in_range_QMARK_(self__.size,i)){
return app.common.types.fills.impl.read_fill(self__.dbuffer,self__.mbuffer,i);
} else {
return null;
}
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,default$){
var self__ = this;
var ___$1 = this;
if(app.common.data.in_range_QMARK_(self__.size,i)){
return app.common.types.fills.impl.read_fill(self__.dbuffer,self__.mbuffer,i);
} else {
return default$;
}
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
if((other instanceof app.common.types.fills.impl.Fills)){
return ((app.common.buffer.equals_QMARK_(other.dbuffer,self__.dbuffer)) && (app.common.buffer.equals_QMARK_(other.mbuffer,self__.mbuffer)));
} else {
return false;
}
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.common.types.fills.impl.Fills.prototype.app$common$types$fills$impl$IBinaryFills$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.fills.impl.Fills.prototype.app$common$types$fills$impl$IBinaryFills$_get_image_ids$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.image_ids;
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.size;
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.size > (0))){
return (function app$common$types$fills$impl$next_seq(i){
if((i < self__.size)){
return cljs.core.cons(app.common.types.fills.impl.read_fill(self__.dbuffer,self__.mbuffer,i),(new cljs.core.LazySeq(null,(function (){
return app$common$types$fills$impl$next_seq((i + (1)));
}),null,null)));
} else {
return null;
}
})((0));
} else {
return null;
}
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$IEncodeJS$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.fills.impl.Fills.prototype.cljs$core$IEncodeJS$_clj__GT_js$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.clj__GT_js(cljs.core.vec(this$__$1));
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
var _STAR_print_dup_STAR__orig_val__48283 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_dup_STAR__temp_val__48284 = true;
(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__48284);

try{return cljs.core._write(writer,["#penpot/fills \"",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(this$__$1)], 0)),"\""].join(''));
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__48283);
}}));

(app.common.types.fills.impl.Fills.prototype.app$common$types$fills$impl$IHeapWritable$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.fills.impl.Fills.prototype.app$common$types$fills$impl$IHeapWritable$_get_byte_size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((4) + (self__.size * app.common.types.fills.impl.FILL_U8_SIZE));
}));

(app.common.types.fills.impl.Fills.prototype.app$common$types$fills$impl$IHeapWritable$_write_to$arity$3 = (function (_,heap,offset){
var self__ = this;
var ___$1 = this;
var buffer_SINGLEQUOTE_ = self__.dbuffer.buffer;
var byte_size = ((4) + (self__.size * app.common.types.fills.impl.FILL_U8_SIZE));
var u32_array = (new Uint32Array(buffer_SINGLEQUOTE_,(0),(byte_size / (4))));
return heap.set(u32_array,offset);
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
var G__48289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(coll__$1),k,v);
return (app.common.types.fills.impl.from_plain.cljs$core$IFn$_invoke$arity$1 ? app.common.types.fills.impl.from_plain.cljs$core$IFn$_invoke$arity$1(G__48289) : app.common.types.fills.impl.from_plain.call(null,G__48289));
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if(cljs.core.integer_QMARK_(k)){
return ((((0) <= k)) && ((k < self__.size)));
} else {
return false;
}
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
var index = (1);
var result = (((self__.size > (0)))?app.common.types.fills.impl.read_fill(self__.dbuffer,self__.mbuffer,(0)):null);
while(true){
if((index < self__.size)){
var result__$1 = (function (){var G__48305 = result;
var G__48306 = app.common.types.fills.impl.read_fill(self__.dbuffer,self__.mbuffer,index);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48305,G__48306) : f.call(null,G__48305,G__48306));
})();
if(cljs.core.reduced_QMARK_(result__$1)){
return cljs.core.deref(result__$1);
} else {
var G__48371 = (index + (1));
var G__48372 = result__$1;
index = G__48371;
result = G__48372;
continue;
}
} else {
return result;
}
break;
}
}));

(app.common.types.fills.impl.Fills.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,start){
var self__ = this;
var ___$1 = this;
var index = (0);
var result = start;
while(true){
if((index < self__.size)){
var result__$1 = (function (){var G__48310 = result;
var G__48311 = app.common.types.fills.impl.read_fill(self__.dbuffer,self__.mbuffer,index);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48310,G__48311) : f.call(null,G__48310,G__48311));
})();
if(cljs.core.reduced_QMARK_(result__$1)){
return cljs.core.deref(result__$1);
} else {
var G__48373 = (index + (1));
var G__48374 = result__$1;
index = G__48373;
result = G__48374;
continue;
}
} else {
return result;
}
break;
}
}));

(app.common.types.fills.impl.Fills.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"dbuffer","dbuffer",1815898686,null),new cljs.core.Symbol(null,"mbuffer","mbuffer",602032730,null),new cljs.core.Symbol(null,"image-ids","image-ids",1110605878,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(app.common.types.fills.impl.Fills.cljs$lang$type = true);

(app.common.types.fills.impl.Fills.cljs$lang$ctorStr = "app.common.types.fills.impl/Fills");

(app.common.types.fills.impl.Fills.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.types.fills.impl/Fills");
}));

/**
 * Positional factory function for app.common.types.fills.impl/Fills.
 */
app.common.types.fills.impl.__GT_Fills = (function app$common$types$fills$impl$__GT_Fills(size,dbuffer,mbuffer,image_ids,cache,__hash){
return (new app.common.types.fills.impl.Fills(size,dbuffer,mbuffer,image_ids,cache,__hash));
});

app.common.types.fills.impl.from_plain = (function app$common$types$fills$impl$from_plain(fills){
var fills__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.types.fills.impl.xf_COLON_take_fills,fills);
var total = cljs.core.count(fills__$1);
var dbuffer = app.common.buffer.allocate(((4) + ((8) * app.common.types.fills.impl.FILL_U8_SIZE)));
var mbuffer = app.common.buffer.allocate((total * (36)));
dbuffer.setInt8((0),total,true);

var index = (0);
var image_ids = cljs.core.PersistentHashSet.EMPTY;
while(true){
if((index < total)){
var fill = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fills__$1,index);
var doffset = ((4) + (index * app.common.types.fills.impl.FILL_U8_SIZE));
var moffset = (index * (36));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fill,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1));
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fill,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
if(cljs.core.truth_(temp__5823__auto__)){
var color = temp__5823__auto__;
app.common.types.fills.impl.write_solid_fill(doffset,dbuffer,opacity,color);

app.common.types.fills.impl.write_metadata(moffset,mbuffer,fill);

var G__48377 = (index + (1));
var G__48378 = image_ids;
index = G__48377;
image_ids = G__48378;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fill,new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870));
if(cljs.core.truth_(temp__5823__auto____$1)){
var gradient = temp__5823__auto____$1;
app.common.types.fills.impl.write_gradient_fill(doffset,dbuffer,opacity,gradient);

app.common.types.fills.impl.write_metadata(moffset,mbuffer,fill);

var G__48381 = (index + (1));
var G__48382 = image_ids;
index = G__48381;
image_ids = G__48382;
continue;
} else {
var temp__5823__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fill,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848));
if(cljs.core.truth_(temp__5823__auto____$2)){
var image = temp__5823__auto____$2;
app.common.types.fills.impl.write_image_fill(doffset,dbuffer,opacity,image);

app.common.types.fills.impl.write_metadata(moffset,mbuffer,fill);

var G__48383 = (index + (1));
var G__48384 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(image_ids,cljs.core.get.cljs$core$IFn$_invoke$arity$2(image,new cljs.core.Keyword(null,"id","id",-1388402092)));
index = G__48383;
image_ids = G__48384;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("found invalid fill on encoding fills to binary format",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invalid-fill","invalid-fill",88906591),new cljs.core.Keyword(null,"hint","hint",439639918),"found invalid fill on encoding fills to binary format"], null),null], 0)),null);
}
}
}
} else {
return (new app.common.types.fills.impl.Fills(total,dbuffer,mbuffer,image_ids,app.common.weak.weak_value_map(),null));
}
break;
}
});
app.common.types.fills.impl.fills_QMARK_ = (function app$common$types$fills$impl$fills_QMARK_(o){
return (o instanceof app.common.types.fills.impl.Fills);
});
app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"penpot/fills",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.types.fills.impl.Fills,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),(function (fills){
return cljs.core.vec(fills);
}),new cljs.core.Keyword(null,"rfn","rfn",-990883444),app.common.types.fills.impl.from_plain], null)], 0));

//# sourceMappingURL=app.common.types.fills.impl.js.map
