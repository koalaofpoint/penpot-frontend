import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.weak.js";
import "./app.common.buffer.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./app.common.schema.openapi.js";
import "./app.common.svg.path.js";
import "./app.common.transit.js";
import "./cuerdas.core.js";
import "./goog.string.stringbuffer.js";
goog.provide('app.common.types.path.impl');
app.common.types.path.impl.SEGMENT_U8_SIZE = (28);
/**
 * Normalize a coordinate value to be within safe integer bounds.
 * Clamps values greater than max-safe-int to max-safe-int,
 * and values less than min-safe-int to min-safe-int.
 * Always returns a double.
 */
app.common.types.path.impl.normalize_coord = (function app$common$types$path$impl$normalize_coord(v){
if((v > app.common.schema.max_safe_int)){
return app.common.schema.max_safe_int;
} else {
if((v < app.common.schema.min_safe_int)){
return app.common.schema.min_safe_int;
} else {
return v;

}
}
});
app.common.types.path.impl.SEGMENT_U32_SIZE = ((28) / (4));

/**
 * @interface
 */
app.common.types.path.impl.IPathData = function(){};

var app$common$types$path$impl$IPathData$_write_to$dyn_49719 = (function (_,buffer,offset){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.path.impl._write_to[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,buffer,offset) : m__5374__auto__.call(null,_,buffer,offset));
} else {
var m__5372__auto__ = (app.common.types.path.impl._write_to["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,buffer,offset) : m__5372__auto__.call(null,_,buffer,offset));
} else {
throw cljs.core.missing_protocol("IPathData.-write-to",_);
}
}
});
/**
 * write the content to the specified buffer
 */
app.common.types.path.impl._write_to = (function app$common$types$path$impl$_write_to(_,buffer,offset){
if((((!((_ == null)))) && ((!((_.app$common$types$path$impl$IPathData$_write_to$arity$3 == null)))))){
return _.app$common$types$path$impl$IPathData$_write_to$arity$3(_,buffer,offset);
} else {
return app$common$types$path$impl$IPathData$_write_to$dyn_49719(_,buffer,offset);
}
});

var app$common$types$path$impl$IPathData$_get_byte_size$dyn_49721 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.path.impl._get_byte_size[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.path.impl._get_byte_size["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IPathData.-get-byte-size",_);
}
}
});
/**
 * get byte size
 */
app.common.types.path.impl._get_byte_size = (function app$common$types$path$impl$_get_byte_size(_){
if((((!((_ == null)))) && ((!((_.app$common$types$path$impl$IPathData$_get_byte_size$arity$1 == null)))))){
return _.app$common$types$path$impl$IPathData$_get_byte_size$arity$1(_);
} else {
return app$common$types$path$impl$IPathData$_get_byte_size$dyn_49721(_);
}
});


/**
 * @interface
 */
app.common.types.path.impl.ITransformable = function(){};

var app$common$types$path$impl$ITransformable$_transform$dyn_49722 = (function (_,m){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.path.impl._transform[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5374__auto__.call(null,_,m));
} else {
var m__5372__auto__ = (app.common.types.path.impl._transform["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__5372__auto__.call(null,_,m));
} else {
throw cljs.core.missing_protocol("ITransformable.-transform",_);
}
}
});
/**
 * apply a transform
 */
app.common.types.path.impl._transform = (function app$common$types$path$impl$_transform(_,m){
if((((!((_ == null)))) && ((!((_.app$common$types$path$impl$ITransformable$_transform$arity$2 == null)))))){
return _.app$common$types$path$impl$ITransformable$_transform$arity$2(_,m);
} else {
return app$common$types$path$impl$ITransformable$_transform$dyn_49722(_,m);
}
});

var app$common$types$path$impl$ITransformable$_lookup$dyn_49723 = (function (_,index,f){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.path.impl._lookup[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,index,f) : m__5374__auto__.call(null,_,index,f));
} else {
var m__5372__auto__ = (app.common.types.path.impl._lookup["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,index,f) : m__5372__auto__.call(null,_,index,f));
} else {
throw cljs.core.missing_protocol("ITransformable.-lookup",_);
}
}
});
app.common.types.path.impl._lookup = (function app$common$types$path$impl$_lookup(_,index,f){
if((((!((_ == null)))) && ((!((_.app$common$types$path$impl$ITransformable$_lookup$arity$3 == null)))))){
return _.app$common$types$path$impl$ITransformable$_lookup$arity$3(_,index,f);
} else {
return app$common$types$path$impl$ITransformable$_lookup$dyn_49723(_,index,f);
}
});

var app$common$types$path$impl$ITransformable$_walk$dyn_49724 = (function (_,f,initial){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.path.impl._walk[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,f,initial) : m__5374__auto__.call(null,_,f,initial));
} else {
var m__5372__auto__ = (app.common.types.path.impl._walk["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,f,initial) : m__5372__auto__.call(null,_,f,initial));
} else {
throw cljs.core.missing_protocol("ITransformable.-walk",_);
}
}
});
app.common.types.path.impl._walk = (function app$common$types$path$impl$_walk(_,f,initial){
if((((!((_ == null)))) && ((!((_.app$common$types$path$impl$ITransformable$_walk$arity$3 == null)))))){
return _.app$common$types$path$impl$ITransformable$_walk$arity$3(_,f,initial);
} else {
return app$common$types$path$impl$ITransformable$_walk$dyn_49724(_,f,initial);
}
});

var app$common$types$path$impl$ITransformable$_reduce$dyn_49725 = (function (_,f,initial){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.path.impl._reduce[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,f,initial) : m__5374__auto__.call(null,_,f,initial));
} else {
var m__5372__auto__ = (app.common.types.path.impl._reduce["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,f,initial) : m__5372__auto__.call(null,_,f,initial));
} else {
throw cljs.core.missing_protocol("ITransformable.-reduce",_);
}
}
});
app.common.types.path.impl._reduce = (function app$common$types$path$impl$_reduce(_,f,initial){
if((((!((_ == null)))) && ((!((_.app$common$types$path$impl$ITransformable$_reduce$arity$3 == null)))))){
return _.app$common$types$path$impl$ITransformable$_reduce$arity$3(_,f,initial);
} else {
return app$common$types$path$impl$ITransformable$_reduce$dyn_49725(_,f,initial);
}
});

/**
 * Apply a transformation to a segment located under specified offset
 */
app.common.types.path.impl.impl_transform_segment = (function app$common$types$path$impl$impl_transform_segment(buffer,offset,a,b,c,d,e,f){
var t = buffer.getInt16(offset,true);
var G__49616 = t;
switch (G__49616) {
case (1):
case (2):
var x = buffer.getFloat32((offset + (20)),true);
var y = buffer.getFloat32((offset + (24)),true);
var x_SINGLEQUOTE_ = (((x * a) + (y * c)) + e);
var y_SINGLEQUOTE_ = (((x * b) + (y * d)) + f);
buffer.setFloat32((offset + (20)),x_SINGLEQUOTE_,true);

return buffer.setFloat32((offset + (24)),y_SINGLEQUOTE_,true);

break;
case (3):
var c1x = buffer.getFloat32((offset + (4)),true);
var c1y = buffer.getFloat32((offset + (8)),true);
var c2x = buffer.getFloat32((offset + (12)),true);
var c2y = buffer.getFloat32((offset + (16)),true);
var x = buffer.getFloat32((offset + (20)),true);
var y = buffer.getFloat32((offset + (24)),true);
var c1x_SINGLEQUOTE_ = (((c1x * a) + (c1y * c)) + e);
var c1y_SINGLEQUOTE_ = (((c1x * b) + (c1y * d)) + f);
var c2x_SINGLEQUOTE_ = (((c2x * a) + (c2y * c)) + e);
var c2y_SINGLEQUOTE_ = (((c2x * b) + (c2y * d)) + f);
var x_SINGLEQUOTE_ = (((x * a) + (y * c)) + e);
var y_SINGLEQUOTE_ = (((x * b) + (y * d)) + f);
buffer.setFloat32((offset + (4)),c1x_SINGLEQUOTE_,true);

buffer.setFloat32((offset + (8)),c1y_SINGLEQUOTE_,true);

buffer.setFloat32((offset + (12)),c2x_SINGLEQUOTE_,true);

buffer.setFloat32((offset + (16)),c2y_SINGLEQUOTE_,true);

buffer.setFloat32((offset + (20)),x_SINGLEQUOTE_,true);

return buffer.setFloat32((offset + (24)),y_SINGLEQUOTE_,true);

break;
default:
return null;

}
});
app.common.types.path.impl.impl_transform = (function app$common$types$path$impl$impl_transform(buffer,m,size){
var a = (m?.a?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"a","a",-2123407586)));
var b = (m?.b?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"b","b",1482224470)));
var c = (m?.c?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"c","c",-1763192079)));
var d = (m?.d?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"d","d",1972142424)));
var e = (m?.e?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"e","e",1381269198)));
var f = (m?.f?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"f","f",-1597136552)));
var index = (0);
while(true){
if((index < size)){
var offset = (index * (28));
app.common.types.path.impl.impl_transform_segment(buffer,offset,a,b,c,d,e,f);

var G__49728 = (index + (1));
index = G__49728;
continue;
} else {
return null;
}
break;
}
});
app.common.types.path.impl.impl_walk = (function app$common$types$path$impl$impl_walk(buffer,f,initial,size){
var index = (0);
var result = cljs.core.transient$(initial);
while(true){
if((index < size)){
var offset = (index * (28));
var type = buffer.getInt16(offset,true);
var c1x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (4)),true));
var c1y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (8)),true));
var c2x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (12)),true));
var c2y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (16)),true));
var x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (20)),true));
var y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (24)),true));
var type__$1 = (function (){var G__49620 = type;
switch (G__49620) {
case (1):
return new cljs.core.Keyword(null,"move-to","move-to",-127537048);

break;
case (2):
return new cljs.core.Keyword(null,"line-to","line-to",1332939595);

break;
case (3):
return new cljs.core.Keyword(null,"curve-to","curve-to",-936461191);

break;
case (4):
return new cljs.core.Keyword(null,"close-path","close-path",1220079654);

break;
default:
return null;

}
})();
var res = (((!((type__$1 == null))))?(f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(type__$1,c1x,c1y,c2x,c2y,x,y) : f.call(null,type__$1,c1x,c1y,c2x,c2y,x,y)):null);
var G__49730 = (index + (1));
var G__49731 = (((!((res == null))))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,res):result);
index = G__49730;
result = G__49731;
continue;
} else {
return cljs.core.persistent_BANG_(result);
}
break;
}
});
app.common.types.path.impl.impl_reduce = (function app$common$types$path$impl$impl_reduce(buffer,f,initial,size){
var index = (0);
var result = initial;
while(true){
if((index < size)){
var offset = (index * (28));
var type = buffer.getInt16(offset,true);
var c1x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (4)),true));
var c1y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (8)),true));
var c2x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (12)),true));
var c2y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (16)),true));
var x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (20)),true));
var y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (24)),true));
var type__$1 = (function (){var G__49628 = type;
switch (G__49628) {
case (1):
return new cljs.core.Keyword(null,"move-to","move-to",-127537048);

break;
case (2):
return new cljs.core.Keyword(null,"line-to","line-to",1332939595);

break;
case (3):
return new cljs.core.Keyword(null,"curve-to","curve-to",-936461191);

break;
case (4):
return new cljs.core.Keyword(null,"close-path","close-path",1220079654);

break;
default:
return null;

}
})();
var result__$1 = (((!((type__$1 == null))))?(f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(result,index,type__$1,c1x,c1y,c2x,c2y,x,y) : f.call(null,result,index,type__$1,c1x,c1y,c2x,c2y,x,y)):result);
if(cljs.core.reduced_QMARK_(result__$1)){
return result__$1;
} else {
var G__49740 = (index + (1));
var G__49741 = result__$1;
index = G__49740;
result = G__49741;
continue;
}
} else {
return result;
}
break;
}
});
app.common.types.path.impl.impl_lookup = (function app$common$types$path$impl$impl_lookup(buffer,index,f){
var offset = (index * (28));
var type = buffer.getInt16(offset,true);
var c1x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (4)),true));
var c1y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (8)),true));
var c2x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (12)),true));
var c2y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (16)),true));
var x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (20)),true));
var y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (24)),true));
var type__$1 = (function (){var G__49631 = type;
switch (G__49631) {
case (1):
return new cljs.core.Keyword(null,"move-to","move-to",-127537048);

break;
case (2):
return new cljs.core.Keyword(null,"line-to","line-to",1332939595);

break;
case (3):
return new cljs.core.Keyword(null,"curve-to","curve-to",-936461191);

break;
case (4):
return new cljs.core.Keyword(null,"close-path","close-path",1220079654);

break;
default:
return null;

}
})();
if((!((type__$1 == null)))){
return f(type__$1,c1x,c1y,c2x,c2y,x,y);
} else {
return null;
}
});
app.common.types.path.impl.to_string_segment_STAR_ = (function app$common$types$path$impl$to_string_segment_STAR_(buffer,offset,type,builder){
var G__49639 = cljs.core.long$(type);
switch (G__49639) {
case (1):
var x = buffer.getFloat32((offset + (20)),true);
var y = buffer.getFloat32((offset + (24)),true);
var G__49640 = builder;
G__49640.append("M");

G__49640.append(x);

G__49640.append(",");

G__49640.append(y);

return G__49640;

break;
case (2):
var x = buffer.getFloat32((offset + (20)),true);
var y = buffer.getFloat32((offset + (24)),true);
var G__49641 = builder;
G__49641.append("L");

G__49641.append(x);

G__49641.append(",");

G__49641.append(y);

return G__49641;

break;
case (3):
var c1x = buffer.getFloat32((offset + (4)),true);
var c1y = buffer.getFloat32((offset + (8)),true);
var c2x = buffer.getFloat32((offset + (12)),true);
var c2y = buffer.getFloat32((offset + (16)),true);
var x = buffer.getFloat32((offset + (20)),true);
var y = buffer.getFloat32((offset + (24)),true);
var G__49645 = builder;
G__49645.append("C");

G__49645.append(c1x);

G__49645.append(",");

G__49645.append(c1y);

G__49645.append(",");

G__49645.append(c2x);

G__49645.append(",");

G__49645.append(c2y);

G__49645.append(",");

G__49645.append(x);

G__49645.append(",");

G__49645.append(y);

return G__49645;

break;
case (4):
var G__49646 = builder;
G__49646.append("Z");

return G__49646;

break;
default:
return null;

}
});
/**
 * Format the path data structure to string
 */
app.common.types.path.impl.to_string = (function app$common$types$path$impl$to_string(buffer,size){
var builder = (new goog.string.StringBuffer());
var index_49746 = (0);
while(true){
if((index_49746 < size)){
var offset_49747 = (index_49746 * (28));
var type_49748 = buffer.getInt16(offset_49747,true);
app.common.types.path.impl.to_string_segment_STAR_(buffer,offset_49747,type_49748,builder);

var G__49749 = (index_49746 + (1));
index_49746 = G__49749;
continue;
} else {
}
break;
}

return builder.toString();
});
/**
 * Read segment from binary buffer at specified index. Returns nil for
 *   corrupted/invalid segment types.
 */
app.common.types.path.impl.read_segment = (function app$common$types$path$impl$read_segment(buffer,index){
var offset = (index * (28));
var type = buffer.getInt16(offset,true);
var G__49648 = cljs.core.long$(type);
switch (G__49648) {
case (1):
var x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (20)),true));
var y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (24)),true));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"move-to","move-to",-127537048),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)], null);

break;
case (2):
var x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (20)),true));
var y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (24)),true));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"line-to","line-to",1332939595),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)], null);

break;
case (3):
var c1x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (4)),true));
var c1y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (8)),true));
var c2x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (12)),true));
var c2y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (16)),true));
var x = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (20)),true));
var y = app.common.types.path.impl.normalize_coord(buffer.getFloat32((offset + (24)),true));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"c1x","c1x",-1789291378),c1x,new cljs.core.Keyword(null,"c1y","c1y",-1210747344),c1y,new cljs.core.Keyword(null,"c2x","c2x",-699963108),c2x,new cljs.core.Keyword(null,"c2y","c2y",1361944924),c2y], null)], null);

break;
case (4):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"close-path","close-path",1220079654),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null);

break;
default:
return null;

}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {app.common.types.path.impl.ITransformable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {app.common.types.path.impl.IPathData}
 * @implements {cljs.core.IReduce}
*/
app.common.types.path.impl.PathData = (function (size,buffer,cache,__hash){
this.size = size;
this.buffer = buffer;
this.cache = cache;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179465234;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.common.types.path.impl.PathData.prototype.app$common$types$path$impl$IPathData$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.path.impl.PathData.prototype.app$common$types$path$impl$IPathData$_get_byte_size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buffer.byteLength;
}));

(app.common.types.path.impl.PathData.prototype.app$common$types$path$impl$IPathData$_write_to$arity$3 = (function (_,into_buffer,offset){
var self__ = this;
var ___$1 = this;
if((into_buffer instanceof ArrayBuffer)){
} else {
throw (new Error("Assert failed: (instance? js/ArrayBuffer into-buffer)"));
}

var size__$1 = self__.buffer.byteLength;
var src_off = self__.buffer.byteOffset;
var mem = (new Uint8Array(into_buffer,offset,size__$1));
return mem.set((new Uint8Array(self__.buffer.buffer,src_off,size__$1)));
}));

(app.common.types.path.impl.PathData.prototype.toString = (function (){
var self__ = this;
var _ = this;
return app.common.types.path.impl.to_string(self__.buffer,self__.size);
}));

(app.common.types.path.impl.PathData.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
if(app.common.data.in_range_QMARK_(self__.size,i)){
return app.common.types.path.impl.read_segment(self__.buffer,i);
} else {
return null;
}
}));

(app.common.types.path.impl.PathData.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,default$){
var self__ = this;
var ___$1 = this;
if(app.common.data.in_range_QMARK_(self__.size,i)){
return app.common.types.path.impl.read_segment(self__.buffer,i);
} else {
return default$;
}
}));

(app.common.types.path.impl.PathData.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
if((other instanceof app.common.types.path.impl.PathData)){
return app.common.buffer.equals_QMARK_(self__.buffer,other.buffer);
} else {
return false;
}
}));

(app.common.types.path.impl.PathData.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
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

(app.common.types.path.impl.PathData.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.size;
}));

(app.common.types.path.impl.PathData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.size > (0))){
return (function app$common$types$path$impl$next_seq(i){
if((i < self__.size)){
var segment = app.common.types.path.impl.read_segment(self__.buffer,i);
if((!((segment == null)))){
return cljs.core.cons(segment,(new cljs.core.LazySeq(null,(function (){
return app$common$types$path$impl$next_seq((i + (1)));
}),null,null)));
} else {
return app$common$types$path$impl$next_seq((i + (1)));
}
} else {
return null;
}
})((0));
} else {
return null;
}
}));

(app.common.types.path.impl.PathData.prototype.app$common$types$path$impl$ITransformable$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.path.impl.PathData.prototype.app$common$types$path$impl$ITransformable$_transform$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
var buffer__$1 = app.common.buffer.clone(self__.buffer);
app.common.types.path.impl.impl_transform(buffer__$1,m,self__.size);

return (new app.common.types.path.impl.PathData(self__.size,buffer__$1,app.common.weak.weak_value_map(),null));
}));

(app.common.types.path.impl.PathData.prototype.app$common$types$path$impl$ITransformable$_walk$arity$3 = (function (_,f,initial){
var self__ = this;
var ___$1 = this;
return app.common.types.path.impl.impl_walk(self__.buffer,f,initial,self__.size);
}));

(app.common.types.path.impl.PathData.prototype.app$common$types$path$impl$ITransformable$_reduce$arity$3 = (function (_,f,initial){
var self__ = this;
var ___$1 = this;
return app.common.types.path.impl.impl_reduce(self__.buffer,f,initial,self__.size);
}));

(app.common.types.path.impl.PathData.prototype.app$common$types$path$impl$ITransformable$_lookup$arity$3 = (function (_,index,f){
var self__ = this;
var ___$1 = this;
if(((((0) <= index)) && ((index < self__.size)))){
return app.common.types.path.impl.impl_lookup(self__.buffer,index,f);
} else {
return null;
}
}));

(app.common.types.path.impl.PathData.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#penpot/path-data \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1.toString()),"\""].join(''));
}));

(app.common.types.path.impl.PathData.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
var index = (1);
var result = (((self__.size > (0)))?app.common.types.path.impl.read_segment(self__.buffer,(0)):null);
while(true){
if((index < self__.size)){
var segment = app.common.types.path.impl.read_segment(self__.buffer,index);
var result__$1 = (((!((segment == null))))?(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(result,segment) : f.call(null,result,segment)):result);
if(cljs.core.reduced_QMARK_(result__$1)){
return cljs.core.deref(result__$1);
} else {
var G__49759 = (index + (1));
var G__49760 = result__$1;
index = G__49759;
result = G__49760;
continue;
}
} else {
return result;
}
break;
}
}));

(app.common.types.path.impl.PathData.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,start){
var self__ = this;
var ___$1 = this;
var index = (0);
var result = start;
while(true){
if((index < self__.size)){
var segment = app.common.types.path.impl.read_segment(self__.buffer,index);
var result__$1 = (((!((segment == null))))?(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(result,segment) : f.call(null,result,segment)):result);
if(cljs.core.reduced_QMARK_(result__$1)){
return cljs.core.deref(result__$1);
} else {
var G__49761 = (index + (1));
var G__49762 = result__$1;
index = G__49761;
result = G__49762;
continue;
}
} else {
return result;
}
break;
}
}));

(app.common.types.path.impl.PathData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(app.common.types.path.impl.PathData.cljs$lang$type = true);

(app.common.types.path.impl.PathData.cljs$lang$ctorStr = "app.common.types.path.impl/PathData");

(app.common.types.path.impl.PathData.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.types.path.impl/PathData");
}));

/**
 * Positional factory function for app.common.types.path.impl/PathData.
 */
app.common.types.path.impl.__GT_PathData = (function app$common$types$path$impl$__GT_PathData(size,buffer,cache,__hash){
return (new app.common.types.path.impl.PathData(size,buffer,cache,__hash));
});

app.common.types.path.impl.schema_COLON_safe_number = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.small_int.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"min","min",444991522),(-100)], 0))], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null);
app.common.types.path.impl.schema_COLON_line_to_segment = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"line-to","line-to",1332939595)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),app.common.types.path.impl.schema_COLON_safe_number], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),app.common.types.path.impl.schema_COLON_safe_number], null)], null)], null)], null);
app.common.types.path.impl.schema_COLON_close_path_segment = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"close-path","close-path",1220079654)], null)], null)], null);
app.common.types.path.impl.schema_COLON_move_to_segment = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"move-to","move-to",-127537048)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),app.common.types.path.impl.schema_COLON_safe_number], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),app.common.types.path.impl.schema_COLON_safe_number], null)], null)], null)], null);
app.common.types.path.impl.schema_COLON_curve_to_segment = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"curve-to","curve-to",-936461191)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),app.common.types.path.impl.schema_COLON_safe_number], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776),app.common.types.path.impl.schema_COLON_safe_number], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c1x","c1x",-1789291378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.path.impl.schema_COLON_safe_number], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c1y","c1y",-1210747344),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.path.impl.schema_COLON_safe_number], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c2x","c2x",-699963108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.path.impl.schema_COLON_safe_number], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c2y","c2y",1361944924),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.path.impl.schema_COLON_safe_number], null)], null)], null)], null);
app.common.types.path.impl.schema_COLON_segment = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"PathSegment",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword("decode","json","decode/json",468276044),(function (p1__49678_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__49678_SHARP_,new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.keyword);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-to","line-to",1332939595),app.common.types.path.impl.schema_COLON_line_to_segment], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-path","close-path",1220079654),app.common.types.path.impl.schema_COLON_close_path_segment], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-to","move-to",-127537048),app.common.types.path.impl.schema_COLON_move_to_segment], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curve-to","curve-to",-936461191),app.common.types.path.impl.schema_COLON_curve_to_segment], null)], null);
app.common.types.path.impl.schema_COLON_segments = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.filter((function (p__49685){
var vec__49686 = p__49685;
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49686,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(e1),new cljs.core.Keyword(null,"move-to","move-to",-127537048));
}),app.common.schema.generators.filter(cljs.core.not_empty,app.common.schema.generators.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.path.impl.schema_COLON_segment)], 0))))], null),app.common.types.path.impl.schema_COLON_segment], null);
app.common.types.path.impl.path_data_QMARK_ = (function app$common$types$path$impl$path_data_QMARK_(o){
return (o instanceof app.common.types.path.impl.PathData);
});
app.common.types.path.impl.schema_COLON_content = app.common.schema.type_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.types.path","content","app.common.types.path/content",1349685944),new cljs.core.Keyword(null,"compile","compile",608186429),(function (_,___$1,___$2){
var decoder = (new cljs.core.Delay((function (){
return app.common.schema.decoder.cljs$core$IFn$_invoke$arity$2(app.common.types.path.impl.schema_COLON_segments,app.common.schema.json_transformer);
}),null));
var generator = app.common.schema.generators.fmap(app.common.types.path.impl.from_plain,app.common.schema.generators.filter(cljs.core.not_empty,app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.path.impl.schema_COLON_segments)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),app.common.types.path.impl.path_data_QMARK_,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),"string",new cljs.core.Keyword("gen","gen","gen/gen",142743606),generator,new cljs.core.Keyword("encode","json","encode/json",303857460),cljs.core.identity,new cljs.core.Keyword("decode","json","decode/json",468276044),(function (s){
if(typeof s === 'string'){
if(cuerdas.core.empty_QMARK_(s)){
var G__49693 = cljs.core.PersistentVector.EMPTY;
return (app.common.types.path.impl.from_plain.cljs$core$IFn$_invoke$arity$1 ? app.common.types.path.impl.from_plain.cljs$core$IFn$_invoke$arity$1(G__49693) : app.common.types.path.impl.from_plain.call(null,G__49693));
} else {
return (app.common.types.path.impl.from_string.cljs$core$IFn$_invoke$arity$1 ? app.common.types.path.impl.from_string.cljs$core$IFn$_invoke$arity$1(s) : app.common.types.path.impl.from_string.call(null,s));
}
} else {
if(cljs.core.vector_QMARK_(s)){
var decode_fn = cljs.core.deref(decoder);
var G__49697 = (decode_fn.cljs$core$IFn$_invoke$arity$1 ? decode_fn.cljs$core$IFn$_invoke$arity$1(s) : decode_fn.call(null,s));
return (app.common.types.path.impl.from_plain.cljs$core$IFn$_invoke$arity$1 ? app.common.types.path.impl.from_plain.cljs$core$IFn$_invoke$arity$1(G__49697) : app.common.types.path.impl.from_plain.call(null,G__49697));
} else {
return s;

}
}
})], null)], null);
})], null)], 0));
app.common.types.path.impl.check_plain_content = app.common.schema.check_fn(app.common.types.path.impl.schema_COLON_segments);
app.common.types.path.impl.check_segment = app.common.schema.check_fn(app.common.types.path.impl.schema_COLON_segment);
app.common.types.path.impl.check_content = app.common.schema.check_fn(app.common.types.path.impl.schema_COLON_content);
app.common.types.path.impl.decode_segments = app.common.schema.lazy_decoder(app.common.types.path.impl.schema_COLON_segments,app.common.schema.json_transformer);
app.common.types.path.impl.from_string = (function app$common$types$path$impl$from_string(s){
var G__49698 = app.common.svg.path.parse(s);
return (app.common.types.path.impl.from_plain.cljs$core$IFn$_invoke$arity$1 ? app.common.types.path.impl.from_plain.cljs$core$IFn$_invoke$arity$1(G__49698) : app.common.types.path.impl.from_plain.call(null,G__49698));
});
app.common.types.path.impl.from_bytes = (function app$common$types$path$impl$from_bytes(buffer){
if((buffer instanceof ArrayBuffer)){
var size = buffer.byteLength;
var count = cljs.core.long$((size / (28)));
return (new app.common.types.path.impl.PathData(count,(new DataView(buffer)),app.common.weak.weak_value_map(),null));
} else {
if((buffer instanceof DataView)){
var size = buffer.byteLength;
var count = cljs.core.long$((size / (28)));
return (new app.common.types.path.impl.PathData(count,buffer,app.common.weak.weak_value_map(),null));
} else {
if((buffer instanceof Uint8Array)){
var ab = buffer.buffer;
var offset = buffer.byteOffset;
var size = buffer.byteLength;
var G__49701 = (new DataView(ab,offset,size));
return (app.common.types.path.impl.from_bytes.cljs$core$IFn$_invoke$arity$1 ? app.common.types.path.impl.from_bytes.cljs$core$IFn$_invoke$arity$1(G__49701) : app.common.types.path.impl.from_bytes.call(null,G__49701));
} else {
if((buffer instanceof Uint32Array)){
var ab = buffer.buffer;
var offset = buffer.byteOffset;
var size = buffer.byteLength;
var G__49702 = (new DataView(ab,offset,size));
return (app.common.types.path.impl.from_bytes.cljs$core$IFn$_invoke$arity$1 ? app.common.types.path.impl.from_bytes.cljs$core$IFn$_invoke$arity$1(G__49702) : app.common.types.path.impl.from_bytes.call(null,G__49702));
} else {
if((buffer instanceof Int8Array)){
var ab = buffer.buffer;
var offset = buffer.byteOffset;
var size = buffer.byteLength;
var G__49703 = (new DataView(ab,offset,size));
return (app.common.types.path.impl.from_bytes.cljs$core$IFn$_invoke$arity$1 ? app.common.types.path.impl.from_bytes.cljs$core$IFn$_invoke$arity$1(G__49703) : app.common.types.path.impl.from_bytes.call(null,G__49703));
} else {
throw (new Error("invalid data provided"));

}
}
}
}
}
});
/**
 * Create a PathData instance from plain data structures
 */
app.common.types.path.impl.from_plain = (function app$common$types$path$impl$from_plain(segments){
var total = cljs.core.count(segments);
var buffer = app.common.buffer.allocate((total * (28)));
var index_49797 = (0);
while(true){
if((index_49797 < total)){
var segment_49798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(segments,index_49797);
var offset_49799 = (index_49797 * (28));
var G__49707_49800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(segment_49798,new cljs.core.Keyword(null,"command","command",-894540724));
var G__49707_49801__$1 = (((G__49707_49800 instanceof cljs.core.Keyword))?G__49707_49800.fqn:null);
switch (G__49707_49801__$1) {
case "move-to":
var params_49803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(segment_49798,new cljs.core.Keyword(null,"params","params",710516235));
var x_49804 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params_49803,new cljs.core.Keyword(null,"x","x",2099068185)));
var y_49805 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params_49803,new cljs.core.Keyword(null,"y","y",-1757859776)));
buffer.setInt16(offset_49799,(1),true);

buffer.setFloat32((offset_49799 + (20)),x_49804,true);

buffer.setFloat32((offset_49799 + (24)),y_49805,true);

break;
case "line-to":
var params_49812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(segment_49798,new cljs.core.Keyword(null,"params","params",710516235));
var x_49813 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params_49812,new cljs.core.Keyword(null,"x","x",2099068185)));
var y_49814 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params_49812,new cljs.core.Keyword(null,"y","y",-1757859776)));
buffer.setInt16(offset_49799,(2),true);

buffer.setFloat32((offset_49799 + (20)),x_49813,true);

buffer.setFloat32((offset_49799 + (24)),y_49814,true);

break;
case "curve-to":
var params_49819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(segment_49798,new cljs.core.Keyword(null,"params","params",710516235));
var x_49820 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params_49819,new cljs.core.Keyword(null,"x","x",2099068185)));
var y_49821 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params_49819,new cljs.core.Keyword(null,"y","y",-1757859776)));
var c1x_49822 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$3(params_49819,new cljs.core.Keyword(null,"c1x","c1x",-1789291378),x_49820));
var c1y_49823 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$3(params_49819,new cljs.core.Keyword(null,"c1y","c1y",-1210747344),y_49821));
var c2x_49824 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$3(params_49819,new cljs.core.Keyword(null,"c2x","c2x",-699963108),x_49820));
var c2y_49825 = app.common.types.path.impl.normalize_coord(cljs.core.get.cljs$core$IFn$_invoke$arity$3(params_49819,new cljs.core.Keyword(null,"c2y","c2y",1361944924),y_49821));
buffer.setInt16(offset_49799,(3),true);

buffer.setFloat32((offset_49799 + (4)),c1x_49822,true);

buffer.setFloat32((offset_49799 + (8)),c1y_49823,true);

buffer.setFloat32((offset_49799 + (12)),c2x_49824,true);

buffer.setFloat32((offset_49799 + (16)),c2y_49825,true);

buffer.setFloat32((offset_49799 + (20)),x_49820,true);

buffer.setFloat32((offset_49799 + (24)),y_49821,true);

break;
case "close-path":
buffer.setInt16(offset_49799,(4),true);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49707_49801__$1)].join('')));

}

var G__49831 = (index_49797 + (1));
index_49797 = G__49831;
continue;
} else {
}
break;
}

return app.common.types.path.impl.from_bytes(buffer);
});
/**
 * Create an instance of PathData, returns itself if it is already
 *   PathData instance
 */
app.common.types.path.impl.path_data = (function app$common$types$path$impl$path_data(data){
if(app.common.types.path.impl.path_data_QMARK_(data)){
return data;
} else {
if((data == null)){
return app.common.types.path.impl.from_plain(cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.sequential_QMARK_(data)){
return app.common.types.path.impl.from_plain(data);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unexpected data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null));

}
}
}
});
app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"penpot/path-data",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.types.path.impl.PathData,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),(function (pdata){
var buffer = pdata.buffer;
return (new Uint8Array(buffer.buffer,buffer.byteOffset,buffer.byteLength));
}),new cljs.core.Keyword(null,"rfn","rfn",-990883444),app.common.types.path.impl.from_bytes], null)], 0));

//# sourceMappingURL=app.common.types.path.impl.js.map
