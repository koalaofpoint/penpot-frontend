import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.common.media.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./app.common.time.js";
import "./app.common.types.plugins.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
goog.provide('app.common.types.color');
/**
 * A set used for proper check if color should contain only one of the
 *   attrs listed in this set.
 */
app.common.types.color.required_color_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"gradient","gradient",-1983908971),null,new cljs.core.Keyword(null,"image","image",-58725096),null], null), null);
/**
 * Check if color has correct color attrs
 */
app.common.types.color.has_valid_color_attrs_QMARK_ = (function app$common$types$color$has_valid_color_attrs_QMARK_(color){
var attrs = cljs.core.set(cljs.core.keys(color));
var result = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(attrs,app.common.types.color.required_color_attrs);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(result));
});
app.common.types.color.hex_color_rx = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
app.common.types.color.hex_color_generator = app.common.schema.generators.fmap((function (_){
var r = cljs.core.rand_int((255));
var g = cljs.core.rand_int((255));
var b = cljs.core.rand_int((255));
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r.toString((16)).padStart((2),"0")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g.toString((16)).padStart((2),"0")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b.toString((16)).padStart((2),"0"))].join('');
}),app.common.schema.generators.int$);
app.common.types.color.hex_color_string_QMARK_ = (function app$common$types$color$hex_color_string_QMARK_(o){
return ((typeof o === 'string') && ((!((cljs.core.re_matches(app.common.types.color.hex_color_rx,o) == null)))));
});
app.common.types.color.schema_COLON_hex_color = app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.types.color","hex-color","app.common.types.color/hex-color",905576833),new cljs.core.Keyword(null,"pred","pred",1927423397),app.common.types.color.hex_color_string_QMARK_,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"HexColor",new cljs.core.Keyword(null,"description","description",-1428560544),"HEX Color String",new cljs.core.Keyword("error","message","error/message",-502809098),"expected a valid HEX color",new cljs.core.Keyword("error","code","error/code",-1740032098),"errors.invalid-hex-color",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.types.color.hex_color_generator,new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),"string",new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),"rgb"], null)], null));
app.common.types.color.schema_COLON_plain_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"PlainColorAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.types.color.schema_COLON_hex_color], null)], null);
app.common.types.color.schema_COLON_image = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ImageColor",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.int$], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.int$], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtype","mtype",-1724656120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.elements(app.common.media.image_types)], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
/**
 * A set of attrs that corresponds to image data type
 */
app.common.types.color.image_attrs = app.common.schema.keys(app.common.types.color.schema_COLON_image);
app.common.types.color.schema_COLON_image_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ImageColorAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),app.common.types.color.schema_COLON_image], null)], null);
app.common.types.color.gradient_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radial","radial",-1334240714),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null);
app.common.types.color.schema_COLON_gradient = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Gradient",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.color.gradient_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-x","start-x",-193941684),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-y","start-y",-771244577),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-x","end-x",-1323983821),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-y","end-y",859881965),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stops","stops",-1205459005),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword("gen","max","gen/max",61264228),(2)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"GradientStop"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.types.color.schema_COLON_hex_color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","number","app.common.schema/number",-157963053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","number","app.common.schema/number",-157963053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1)], null)], null)], null)], null)], null)], null)], null);
/**
 * A set of attrs that corresponds to gradient data type
 */
app.common.types.color.gradient_attrs = app.common.schema.keys(app.common.types.color.schema_COLON_gradient);
app.common.types.color.schema_COLON_gradient_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"GradientColorAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradient","gradient",-1983908971),app.common.types.color.schema_COLON_gradient], null)], null);
app.common.types.color.schema_COLON_color_attrs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"GenericColorAttrs",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","number","app.common.schema/number",-157963053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-file","ref-file",255004238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null);
app.common.types.color.schema_COLON_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Color"], null),app.common.types.color.schema_COLON_color_attrs,app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$1(app.common.types.color.schema_COLON_plain_color),app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$1(app.common.types.color.schema_COLON_gradient_color),app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$1(app.common.types.color.schema_COLON_image_color)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.color.has_valid_color_attrs_QMARK_], null)], null);
app.common.types.color.color_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.types.color.required_color_attrs,app.common.schema.keys(app.common.types.color.schema_COLON_color_attrs));
app.common.types.color.schema_COLON_library_color_attrs = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"LibraryColorAttrs",new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","number","app.common.schema/number",-157963053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.plugins.schema_COLON_plugin_data], null)], null);
/**
 * Used for in-transit representation of a color (per example when user
 *   clicks a color on assets sidebar, the color should be properly identified with
 *   the file-id where it belongs)
 */
app.common.types.color.schema_COLON_library_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),app.common.types.color.schema_COLON_library_color_attrs,app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$1(app.common.types.color.schema_COLON_plain_color),app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$1(app.common.types.color.schema_COLON_gradient_color),app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$1(app.common.types.color.schema_COLON_image_color)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.color.has_valid_color_attrs_QMARK_], null)], null);
app.common.types.color.library_color_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.types.color.required_color_attrs,app.common.schema.keys(app.common.types.color.schema_COLON_library_color_attrs));
app.common.types.color.valid_color_QMARK_ = app.common.schema.lazy_validator(app.common.types.color.schema_COLON_color);
app.common.types.color.valid_library_color_QMARK_ = app.common.schema.lazy_validator(app.common.types.color.schema_COLON_library_color);
app.common.types.color.check_color = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.color.schema_COLON_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid color"], 0));
app.common.types.color.check_library_color = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.color.schema_COLON_library_color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid color"], 0));
app.common.types.color.black = "#000000";
app.common.types.color.default_layout = "#DE4762";
app.common.types.color.gray_20 = "#B1B2B5";
app.common.types.color.info = "#59B9E2";
app.common.types.color.test = "#fabada";
app.common.types.color.white = "#FFFFFF";
app.common.types.color.warning = "#FC8802";
app.common.types.color.new_primary = "#7efff5";
app.common.types.color.new_danger = "#ff3277";
app.common.types.color.new_warning = "#fe4811";
app.common.types.color.new_primary_light = "#6911d4";
app.common.types.color.background_quaternary = "#2e3434";
app.common.types.color.background_quaternary_light = "#eef0f2";
app.common.types.color.canvas = "#E8E9EA";
app.common.types.color.names = cljs.core.PersistentHashMap.fromArrays(["springgreen","aqua","blue","olivedrab","lightskyblue","greenyellow","ivory","navajowhite","cyan","mediumturquoise","darkslateblue","lawngreen","saddlebrown","white","silver","purple","gainsboro","plum","midnightblue","magenta","paleturquoise","hotpink","mediumorchid","gold","powderblue","papayawhip","bisque","salmon","forestgreen","blanchedalmond","grey","crimson","darkturquoise","steelblue","mediumvioletred","aquamarine","darkgoldenrod","orange","darkgray","lime","cornflowerblue","aliceblue","lightgoldenrodyellow","lemonchiffon","lightsalmon","deepskyblue","lightgreen","palegoldenrod","darkred","violet","gray","goldenrod","darksalmon","skyblue","darkviolet","fuchsia","lightcoral","moccasin","darkgreen","lightyellow","lavenderblush","sienna","burlywood","ghostwhite","coral","linen","lightslategray","azure","darkolivegreen","floralwhite","yellow","beige","wheat","slategray","darkmagenta","darkcyan","dodgerblue","mediumseagreen","darkgrey","mediumblue","pink","mistyrose","teal","olive","navy","darkkhaki","green","darkblue","red","maroon","limegreen","brown","seashell","chocolate","antiquewhite","tan","seagreen","palevioletred","rosybrown","cornsilk","lavender","mediumpurple","black","snow","lightseagreen","palegreen","deeppink","dimgray","blueviolet","cadetblue","slateblue","mediumspringgreen","lightpink","firebrick","dimgrey","khaki","royalblue","sandybrown","orangered","darkslategray","orchid","indianred","darkorchid","honeydew","oldlace","whitesmoke","mediumaquamarine","lightgrey","peru","chartreuse","lightcyan","lightblue","tomato","mintcream","peachpuff","thistle","lightsteelblue","mediumslateblue","darkslategrey","turquoise","slategrey","indigo","lightslategrey","darkorange","yellowgreen","lightgray","darkseagreen"],["#00ff7f","#00ffff","#0000ff","#6b8e23","#87cefa","#adff2f","#fffff0","#ffdead","#00ffff","#48d1cc","#483d8b","#7cfc00","#8b4513","#ffffff","#c0c0c0","#800080","#dcdcdc","#dda0dd","#191970","#ff00ff","#afeeee","#ff69b4","#ba55d3","#ffd700","#b0e0e6","#ffefd5","#ffe4c4","#fa8072","#228b22","#ffebcd","#808080","#dc143c","#00ced1","#4682b4","#c71585","#7fffd4","#b8860b","#ffa500","#a9a9a9","#00ff00","#6495ed","#f0f8ff","#fafad2","#fffacd","#ffa07a","#00bfff","#90ee90","#eee8aa","#8b0000","#ee82ee","#808080","#daa520","#e9967a","#87ceeb","#9400d3","#ff00ff","#f08080","#ffe4b5","#006400","#ffffe0","#fff0f5","#a0522d","#deb887","#f8f8ff","#ff7f50","#faf0e6","#778899","#f0ffff","#556b2f","#fffaf0","#ffff00","#f5f5dc","#f5deb3","#708090","#8b008b","#008b8b","#1e90ff","#3cb371","#a9a9a9","#0000cd","#ffc0cb","#ffe4e1","#008080","#808000","#000080","#bdb76b","#008000","#00008b","#ff0000","#800000","#32cd32","#a52a2a","#fff5ee","#d2691e","#faebd7","#d2b48c","#2e8b57","#db7093","#bc8f8f","#fff8dc","#e6e6fa","#9370db","#000000","#fffafa","#20b2aa","#98fb98","#ff1493","#696969","#8a2be2","#5f9ea0","#6a5acd","#00fa9a","#ffb6c1","#b22222","#696969","#f0e68c","#4169e1","#f4a460","#ff4500","#2f4f4f","#da70d6","#cd5c5c","#9932cc","#f0fff0","#fdf5e6","#f5f5f5","#66cdaa","#d3d3d3","#cd853f","#7fff00","#e0ffff","#add8e6","#ff6347","#f5fffa","#ffdab9","#d8bfd8","#b0c4de","#7b68ee","#2f4f4f","#40e0d0","#708090","#4b0082","#778899","#ff8c00","#9acd32","#d3d3d3","#8fbc8f"]);
/**
 * Converts a library color data structure to a plain color data structure
 */
app.common.types.color.library_color__GT_color = (function app$common$types$color$library_color__GT_color(lcolor,file_id){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(lcolor,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"opacity","opacity",397153780)], null)),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcolor,new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"ref-file","ref-file",255004238),file_id),cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcolor,new cljs.core.Keyword(null,"path","path",-188191168)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcolor,new cljs.core.Keyword(null,"name","name",1843675177)));
});
app.common.types.color.stroke__GT_color = (function app$common$types$color$stroke__GT_color(stroke){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),cuerdas.core.lower(new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(stroke)),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(stroke),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260).cljs$core$IFn$_invoke$arity$1(stroke),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(stroke),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761).cljs$core$IFn$_invoke$arity$1(stroke),new cljs.core.Keyword(null,"ref-file","ref-file",255004238),new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279).cljs$core$IFn$_invoke$arity$1(stroke)], null));
});
app.common.types.color.shadow__GT_color = (function app$common$types$color$shadow__GT_color(shadow__$1){
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shadow__$1);
});
app.common.types.color.grid__GT_color = (function app$common$types$color$grid__GT_color(grid){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(grid));
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"ref-file","ref-file",255004238),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(color)], null));
});
app.common.types.color.hex_color_re = /\#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/;
app.common.types.color.rgb_color_re = /(?:|rgb)\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\)/;
app.common.types.color.valid_hex_color_QMARK_ = (function app$common$types$color$valid_hex_color_QMARK_(color){
return ((typeof color === 'string') && ((!((cljs.core.re_matches(app.common.types.color.hex_color_re,color) == null)))));
});
app.common.types.color.parse_rgb = (function app$common$types$color$parse_rgb(color){
var result = cljs.core.re_matches(app.common.types.color.rgb_color_re,color);
if((!((result == null)))){
var r = cljs.core.parse_long(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(1)));
var g = cljs.core.parse_long(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(2)));
var b = cljs.core.parse_long(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(3)));
if(((((((0) <= r)) && ((r <= (255))))) && (((((((0) <= g)) && ((g <= (255))))) && (((((0) <= b)) && ((b <= (255))))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
} else {
return null;
}
} else {
return null;
}
});
app.common.types.color.valid_rgb_color_QMARK_ = (function app$common$types$color$valid_rgb_color_QMARK_(color){
if(typeof color === 'string'){
var result = app.common.types.color.parse_rgb(color);
return (!((result == null)));
} else {
return false;
}
});
app.common.types.color.normalize_hex = (function app$common$types$color$normalize_hex(color){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(color),(4))){
return cuerdas.core.lower(cuerdas.core.replace(color,/\#(.)(.)(.)/,"#$1$1$2$2$3$3"));
} else {
return cuerdas.core.lower(color);
}
});
app.common.types.color.rgb__GT_str = (function app$common$types$color$rgb__GT_str(p__47849){
var vec__47853 = p__47849;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(3),null);
if((!((a == null)))){
return ""+"rgba("+(r ?? "")+","+(g ?? "")+","+(b ?? "")+","+(a ?? "")+")";
} else {
return ""+"rgb("+(r ?? "")+","+(g ?? "")+","+(b ?? "")+")";
}
});
app.common.types.color.rgb__GT_hsv = (function app$common$types$color$rgb__GT_hsv(p__47876){
var vec__47879 = p__47876;
var red = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47879,(0),null);
var green = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47879,(1),null);
var blue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47879,(2),null);
var max = app.common.data.max.cljs$core$IFn$_invoke$arity$3(red,green,blue);
var min = app.common.data.min.cljs$core$IFn$_invoke$arity$3(red,green,blue);
var val = max;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),val], null);
} else {
var delta = (max - min);
var sat = (delta / max);
var hue = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(red,max))?((green - blue) / delta):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(green,max))?((2) + ((blue - red) / delta)):((4) + ((red - green) / delta))));
var hue__$1 = ((60) * hue);
var hue__$2 = (((hue__$1 < (0)))?(hue__$1 + (360)):hue__$1);
var hue__$3 = (((hue__$2 > (360)))?(hue__$2 - (360)):hue__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue__$3,sat,val], null);
}
});
app.common.types.color.hsv__GT_rgb = (function app$common$types$color$hsv__GT_rgb(p__47921){
var vec__47924 = p__47921;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(1),null);
var brightness = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brightness,brightness,brightness], null);
} else {
var sextant = (app.common.math.floor((h / (60))) | (0));
var remainder = ((h / (60)) - sextant);
var brightness__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(brightness,(0));
var val1 = ((brightness__$1 * ((1) - s)) | (0));
var val2 = ((brightness__$1 * ((1) - (s * remainder))) | (0));
var val3 = ((brightness__$1 * ((1) - (s * ((1) - remainder)))) | (0));
var G__47940 = sextant;
switch (G__47940) {
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val2,brightness__$1,val1], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val1,brightness__$1,val3], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val1,val2,brightness__$1], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [val3,val1,brightness__$1], null);

break;
case (5):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brightness__$1,val1,val2], null);

break;
case (6):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brightness__$1,val3,val1], null);

break;
case (0):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brightness__$1,val3,val1], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47940)].join('')));

}
}
});
app.common.types.color.hex__GT_rgb = (function app$common$types$color$hex__GT_rgb(color){
try{var rgb = parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(color,(1)),(16));
var r = (rgb >> (16));
var g = ((rgb >> (8)) & (255));
var b = (rgb & (255));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
}catch (e47945){var _cause = e47945;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}});
app.common.types.color.hex__GT_lum = (function app$common$types$color$hex__GT_lum(color){
var vec__47948 = app.common.types.color.hex__GT_rgb(color);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47948,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47948,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47948,(2),null);
return app.common.math.sqrt((((0.241 * r) + (0.691 * g)) + (0.068 * b)));
});
/**
 * Convert integer to hex string
 */
app.common.types.color.int__GT_hex = (function app$common$types$color$int__GT_hex(v){
return v.toString((16));
});
app.common.types.color.rgb__GT_hex = (function app$common$types$color$rgb__GT_hex(p__47956){
var vec__47958 = p__47956;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47958,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47958,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47958,(2),null);
var r__$1 = (r | (0));
var g__$1 = (g | (0));
var b__$1 = (b | (0));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r__$1,(r__$1 & (255)))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(g__$1,(g__$1 & (255)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b__$1,(b__$1 & (255)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("not valid rgb",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),r__$1,new cljs.core.Keyword(null,"g","g",1738089905),g__$1,new cljs.core.Keyword(null,"b","b",1482224470),b__$1], null));
} else {
var rgb = (((r__$1 << (16)) | (g__$1 << (8))) | b__$1);
if((r__$1 < (16))){
return ""+"#"+(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(app.common.types.color.int__GT_hex(((16777216) | rgb)),(1)) ?? "");
} else {
return ""+"#"+(app.common.types.color.int__GT_hex(rgb) ?? "");
}
}
});
app.common.types.color.rgb__GT_hsl = (function app$common$types$color$rgb__GT_hsl(p__47968){
var vec__47969 = p__47968;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969,(2),null);
var norm_r = (r / 255.0);
var norm_g = (g / 255.0);
var norm_b = (b / 255.0);
var max = app.common.data.max.cljs$core$IFn$_invoke$arity$3(norm_r,norm_g,norm_b);
var min = app.common.data.min.cljs$core$IFn$_invoke$arity$3(norm_r,norm_g,norm_b);
var l = ((max + min) / 2.0);
var h = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,min))?(0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,norm_r))?((60) * ((norm_g - norm_b) / (max - min))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,norm_g))?((120) + ((60) * ((norm_b - norm_r) / (max - min)))):((240) + ((60) * ((norm_r - norm_g) / (max - min)))))));
var s = (((((l > (0))) && ((l <= 0.5))))?((max - min) / ((2) * l)):((max - min) / ((2) - ((2) * l))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((h + (360)),(360)),s,l], null);
});
app.common.types.color.hex__GT_hsv = (function app$common$types$color$hex__GT_hsv(v){
return app.common.types.color.rgb__GT_hsv(app.common.types.color.hex__GT_rgb(v));
});
app.common.types.color.hex__GT_rgba = (function app$common$types$color$hex__GT_rgba(data,opacity){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(app.common.types.color.hex__GT_rgb(data),opacity);
});
app.common.types.color.hex__GT_hsl = (function app$common$types$color$hex__GT_hsl(hex){
try{return app.common.types.color.rgb__GT_hsl(app.common.types.color.hex__GT_rgb(hex));
}catch (e47979){var _e = e47979;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}});
app.common.types.color.hex__GT_hsla = (function app$common$types$color$hex__GT_hsla(data,opacity){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(app.common.types.color.hex__GT_hsl(data),opacity);
});
app.common.types.color.format_hsla = (function app$common$types$color$format_hsla(p__47992){
var vec__47994 = p__47992;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47994,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47994,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47994,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47994,(3),null);
var precision = (2);
var rounded_h = (h | (0));
var rounded_s = app.common.data.format_number.cljs$core$IFn$_invoke$arity$2(((100) * s),precision);
var rounded_l = app.common.data.format_number.cljs$core$IFn$_invoke$arity$2(((100) * l),precision);
var rounded_a = app.common.data.format_number.cljs$core$IFn$_invoke$arity$2(a,precision);
return ""+""+(rounded_h ?? "")+", "+(rounded_s ?? "")+"%, "+(rounded_l ?? "")+"%, "+(rounded_a ?? "");
});
app.common.types.color.format_rgba = (function app$common$types$color$format_rgba(p__48007){
var vec__48008 = p__48007;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48008,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48008,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48008,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48008,(3),null);
var precision = (2);
var rounded_a = app.common.data.format_number.cljs$core$IFn$_invoke$arity$2(a,precision);
return ""+(r ?? "")+", "+(g ?? "")+", "+(b ?? "")+", "+(rounded_a ?? "");
});
/**
 * Helper for hsl->rgb
 */
app.common.types.color.hue__GT_rgb = (function app$common$types$color$hue__GT_rgb(v1,v2,vh){
var vh__$1 = (((vh < (0)))?(vh + (1)):(((vh > (1)))?(vh - (1)):vh));
if((((6) * vh__$1) < (1))){
return (v1 + (((v2 - v1) * (6)) * vh__$1));
} else {
if((((2) * vh__$1) < (1))){
return v2;
} else {
if((((3) * vh__$1) < (2))){
return (v1 + (((v2 - v1) * (((2) / (3)) - vh__$1)) * (6)));
} else {
return v1;

}
}
}
});
app.common.types.color.hsl__GT_rgb = (function app$common$types$color$hsl__GT_rgb(p__48027){
var vec__48029 = p__48027;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48029,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48029,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48029,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,(0))){
var o = (l * (255));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,o,o], null);
} else {
var norm_h = (h / 360.0);
var temp2 = (((l < 0.5))?(l * ((1) + s)):((l + s) - (s * l)));
var temp1 = ((l * (2)) - temp2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.math.round.cljs$core$IFn$_invoke$arity$1(((255) * app.common.types.color.hue__GT_rgb(temp1,temp2,(norm_h + ((1) / (3)))))),app.common.math.round.cljs$core$IFn$_invoke$arity$1(((255) * app.common.types.color.hue__GT_rgb(temp1,temp2,norm_h))),app.common.math.round.cljs$core$IFn$_invoke$arity$1(((255) * app.common.types.color.hue__GT_rgb(temp1,temp2,(norm_h - ((1) / (3))))))], null);
}
});
app.common.types.color.hsl__GT_hex = (function app$common$types$color$hsl__GT_hex(v){
return app.common.types.color.rgb__GT_hex(app.common.types.color.hsl__GT_rgb(v));
});
app.common.types.color.hsl__GT_hsv = (function app$common$types$color$hsl__GT_hsv(hsl){
return app.common.types.color.rgb__GT_hsv(app.common.types.color.hsl__GT_rgb(hsl));
});
app.common.types.color.hsv__GT_hex = (function app$common$types$color$hsv__GT_hex(hsv){
return app.common.types.color.rgb__GT_hex(app.common.types.color.hsv__GT_rgb(hsv));
});
app.common.types.color.hsv__GT_hsl = (function app$common$types$color$hsv__GT_hsl(hsv){
return app.common.types.color.hex__GT_hsl(app.common.types.color.hsv__GT_hex(hsv));
});
app.common.types.color.expand_hex = (function app$common$types$color$expand_hex(v){
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9A-Fa-f]$/,v))){
return ""+(v ?? "")+(v ?? "")+(v ?? "")+(v ?? "")+(v ?? "")+(v ?? "");
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9A-Fa-f]{2}$/,v))){
return ""+(v ?? "")+(v ?? "")+(v ?? "");
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9A-Fa-f]{3}$/,v))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2));
return ""+(a ?? "")+(a ?? "")+(b ?? "")+(b ?? "")+(c ?? "")+(c ?? "");
} else {
return v;

}
}
}
});
app.common.types.color.prepend_hash = (function app$common$types$color$prepend_hash(color){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(color,(0),(1)))){
return color;
} else {
return ""+"#"+(color ?? "");
}
});
app.common.types.color.remove_hash = (function app$common$types$color$remove_hash(color){
if(cuerdas.core.starts_with_QMARK_(color,"#")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(color,(1));
} else {
return color;
}
});
app.common.types.color.color_string_QMARK_ = (function app$common$types$color$color_string_QMARK_(color){
return ((typeof color === 'string') && (((app.common.types.color.valid_hex_color_QMARK_(color)) || (((app.common.types.color.valid_rgb_color_QMARK_(color)) || (cljs.core.contains_QMARK_(app.common.types.color.names,color)))))));
});
app.common.types.color.parse = (function app$common$types$color$parse(color){
if(typeof color === 'string'){
if(((app.common.types.color.valid_hex_color_QMARK_(color)) || (app.common.types.color.valid_hex_color_QMARK_(""+"#"+(color ?? ""))))){
return app.common.types.color.normalize_hex(color);
} else {
var or__5025__auto__ = (function (){var G__48058 = app.common.types.color.parse_rgb(color);
if((G__48058 == null)){
return null;
} else {
return app.common.types.color.rgb__GT_hex(G__48058);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.color.names,cuerdas.core.lower(color));
}
}
} else {
return null;
}
});
app.common.types.color.color_names = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keys(app.common.types.color.names));
app.common.types.color.empty_color = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48061_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__48061_SHARP_,null],null));
})),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"opacity","opacity",397153780)], null));
/**
 * Given a color in rgb returns the next color
 */
app.common.types.color.next_rgb = (function app$common$types$color$next_rgb(p__48062){
var vec__48064 = p__48062;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48064,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48064,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48064,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),r)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),g)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),b)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot get next color",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),g)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),b)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r + (1)),(0),(0)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((255),b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(g + (1)),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,(b + (1))], null);

}
}
}
});
app.common.types.color.reduce_range = (function app$common$types$color$reduce_range(value,range){
return (app.common.math.floor((value * range)) / range);
});
app.common.types.color.sort_colors = (function app$common$types$color$sort_colors(a,b){
var vec__48072 = app.common.types.color.hex__GT_hsv(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(a));
var ah = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48072,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48072,(1),null);
var av = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48072,(2),null);
var vec__48075 = app.common.types.color.hex__GT_hsv(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(b));
var bh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48075,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48075,(1),null);
var bv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48075,(2),null);
var ah__$1 = app.common.types.color.reduce_range((ah / (60)),(8));
var bh__$1 = app.common.types.color.reduce_range((bh / (60)),(8));
var av__$1 = (av / (255));
var bv__$1 = (bv / (255));
var a__$1 = ((ah__$1 * (100)) + (av__$1 * (10)));
var b__$1 = ((bh__$1 * (100)) + (bv__$1 * (10)));
return cljs.core.compare(a__$1,b__$1);
});
app.common.types.color.interpolate_color = (function app$common$types$color$interpolate_color(c1,c2,offset){
if((offset <= new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(c1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c1,new cljs.core.Keyword(null,"offset","offset",296498311),offset);
} else {
if((offset >= new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(c2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c2,new cljs.core.Keyword(null,"offset","offset",296498311),offset);
} else {
var tr_offset = ((offset - new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(c1)) / (new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(c2) - new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(c1)));
var vec__48090 = app.common.types.color.hex__GT_rgb(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(c1));
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48090,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48090,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48090,(2),null);
var vec__48093 = app.common.types.color.hex__GT_rgb(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(c2));
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093,(2),null);
var a1 = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(c1);
var a2 = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(c2);
var r = (r1 + ((r2 - r1) * tr_offset));
var g = (g1 + ((g2 - g1) * tr_offset));
var b = (b1 + ((b2 - b1) * tr_offset));
var a = (a1 + ((a2 - a1) * tr_offset));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.types.color.rgb__GT_hex(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),new cljs.core.Keyword(null,"opacity","opacity",397153780),a,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a,new cljs.core.Keyword(null,"offset","offset",296498311),offset], null);

}
}
});
app.common.types.color.offset_spread = (function app$common$types$color$offset_spread(from,to,num){
if((num <= (1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48097_SHARP_){
return app.common.math.precision((from + (((to - from) / (num - (1))) * p1__48097_SHARP_)),(2));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),num));
}
});
/**
 * Checks if the gradient stops are spread uniformly
 */
app.common.types.color.uniform_spread_QMARK_ = (function app$common$types$color$uniform_spread_QMARK_(stops){
var cs = cljs.core.count(stops);
var from = cljs.core.first(stops);
var to = cljs.core.last(stops);
var expect_vals = app.common.types.color.offset_spread(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(from),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(to),cs);
var calculate_expected = (function (expected_offset,stop){
var and__5023__auto__ = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(stop),expected_offset);
if(cljs.core.truth_(and__5023__auto__)){
var ec = app.common.types.color.interpolate_color(from,to,expected_offset);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(ec),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(stop))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(ec),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(stop))));
} else {
return and__5023__auto__;
}
});
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(calculate_expected,expect_vals,stops));
});
/**
 * Assign an uniform spread to the offset values for the gradient
 */
app.common.types.color.uniform_spread = (function app$common$types$color$uniform_spread(from,to,num_stops){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (offset){
return app.common.types.color.interpolate_color(from,to,offset);
}),app.common.types.color.offset_spread(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(from),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(to),num_stops));
});
app.common.types.color.interpolate_gradient = (function app$common$types$color$interpolate_gradient(stops,offset){
var idx = app.common.data.index_of_pred(stops,(function (p1__48102_SHARP_){
return (offset <= new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(p1__48102_SHARP_));
}));
var start = (((idx == null))?cljs.core.last(stops):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0)))?cljs.core.first(stops):cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,(idx - (1)))
));
var end = (((idx == null))?cljs.core.last(stops):cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,idx));
return app.common.types.color.interpolate_color(start,end,offset);
});

//# sourceMappingURL=app.common.types.color.js.map
