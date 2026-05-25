import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.uuid_impl.js";
import "./app.common.data.macros.js";
goog.provide('app.common.uuid');
app.common.uuid.regex = /^[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]-[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]-[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]-[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]-[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]$/;
/**
 * Creates an UUID instance from string, expectes valid uuid strings,
 *   the existense of validation is implementation detail.
 * 
 *   UNSAFE: this can accept invalid uuids or incomplete uuids
 */
app.common.uuid.uuid = (function app$common$uuid$uuid(s){
return cljs.core.uuid(s);
});
/**
 * Parse string uuid representation into proper UUID instance, validates input
 */
app.common.uuid.parse = (function app$common$uuid$parse(s){
if(((typeof s === 'string') && (cljs.core.re_matches(app.common.uuid.regex,s)))){
return app.common.uuid.uuid(s);
} else {
var message = ["invalid string '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"' for uuid"].join('');
throw (new Error(message));
}
});
/**
 * Exception safe version of `parse`.
 */
app.common.uuid.parse_STAR_ = (function app$common$uuid$parse_STAR_(s){
try{return app.common.uuid.parse(s);
}catch (e34472){var _cause = e34472;
return null;
}});
app.common.uuid.next = (function app$common$uuid$next(){
return app.common.uuid.uuid(app.common.uuid_impl.v8());
});
/**
 * Alias for clj-uuid/v4.
 */
app.common.uuid.random = (function app$common$uuid$random(){
return app.common.uuid.uuid(app.common.uuid_impl.v4());
});
app.common.uuid.custom = (function app$common$uuid$custom(var_args){
var G__34478 = arguments.length;
switch (G__34478) {
case 1:
return app.common.uuid.custom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.uuid.custom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.uuid.custom.cljs$core$IFn$_invoke$arity$1 = (function (a){
return app.common.uuid.uuid(app.common.uuid_impl.custom((0),a));
}));

(app.common.uuid.custom.cljs$core$IFn$_invoke$arity$2 = (function (b,a){
return app.common.uuid.uuid(app.common.uuid_impl.custom(b,a));
}));

(app.common.uuid.custom.cljs$lang$maxFixedArity = 2);

app.common.uuid.zero = app.common.uuid.uuid("00000000-0000-0000-0000-000000000000");
app.common.uuid.zero_QMARK_ = (function app$common$uuid$zero_QMARK_(v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,v);
});
app.common.uuid.get_word_high = (function app$common$uuid$get_word_high(id){
return app.common.uuid_impl.getHi(id.uuid);
});
app.common.uuid.get_word_low = (function app$common$uuid$get_word_low(id){
return app.common.uuid_impl.getLo(id.uuid);
});
app.common.uuid.get_bytes = (function app$common$uuid$get_bytes(o){
return app.common.uuid_impl.getBytes(o.uuid);
});
app.common.uuid.from_bytes = (function app$common$uuid$from_bytes(o){
return app.common.uuid.uuid(app.common.uuid_impl.fromBytes(o));
});
/**
 * Return a shorter string of a safe subset of bytes of an uuid encoded
 *   with base62. It is only safe to use with uuid v4 and penpot custom v8
 */
app.common.uuid.uuid__GT_short_id = (function app$common$uuid$uuid__GT_short_id(id){
return app.common.uuid_impl.shortV8(""+(id ?? ""));
});
/**
 * Get a Uint32 array of length 4 that represents the UUID, needed
 *   for interact with wasm
 */
app.common.uuid.get_unsigned_parts = (function app$common$uuid$get_unsigned_parts(this$){
return app.common.uuid_impl.getUnsignedParts(this$.uuid);
});
app.common.uuid.from_unsigned_parts = (function app$common$uuid$from_unsigned_parts(a,b,c,d){
return app.common.uuid.uuid(app.common.uuid_impl.fromUnsignedParts(a,b,c,d));
});
/**
 * A cached variant of get-unsigned-parts
 */
app.common.uuid.get_u32 = (function app$common$uuid$get_u32(this$){
var buffer = (this$["__u32_buffer"]);
if((buffer == null)){
var buffer__$1 = app.common.uuid.get_unsigned_parts(this$);
(this$["__u32_buffer"] = buffer__$1);

return buffer__$1;
} else {
return buffer;
}
});

//# sourceMappingURL=app.common.uuid.js.map
