import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.plugins.js";
import "./app.common.types.text.js";
import "./app.common.uuid.js";
goog.provide('app.common.types.typography');
app.common.types.typography.schema_COLON_typography = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Typography"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.plugins.schema_COLON_plugin_data], null)], null);
app.common.types.typography.check_typography = app.common.schema.check_fn(app.common.types.typography.schema_COLON_typography);
app.common.types.typography.make_typography = (function app$common$types$typography$make_typography(p__53141){
var map__53142 = p__53141;
var map__53142__$1 = cljs.core.__destructure_map(map__53142);
var letter_spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767));
var font_family = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"font-family","font-family",-667419874));
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var font_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"font-style","font-style",-773672352));
var text_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"text-transform","text-transform",1685000676));
var font_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"font-id","font-id",-390084123));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var font_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var font_variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53142__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],[(function (){var or__5025__auto__ = line_height;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "1.2";
}
})(),path,(function (){var or__5025__auto__ = font_style;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "normal";
}
})(),(function (){var or__5025__auto__ = text_transform;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "none";
}
})(),(function (){var or__5025__auto__ = font_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "sourcesanspro";
}
})(),(function (){var or__5025__auto__ = font_size;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "14";
}
})(),(function (){var or__5025__auto__ = font_weight;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "480";
}
})(),(function (){var or__5025__auto__ = name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Typography 1";
}
})(),(function (){var or__5025__auto__ = font_variant_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "regular";
}
})(),(function (){var or__5025__auto__ = id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})(),(function (){var or__5025__auto__ = letter_spacing;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "0";
}
})(),(function (){var or__5025__auto__ = font_family;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "sourcesanspro";
}
})()]));
});
/**
 * Check if the shape uses any typography in the given library.
 */
app.common.types.typography.uses_library_typographies_QMARK_ = (function app$common$types$typography$uses_library_typographies_QMARK_(shape,library_id){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"text","text",-1790561697))) && (app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2((function (p1__53150_SHARP_){
return (((!((new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(p1__53150_SHARP_) == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(p1__53150_SHARP_),library_id)));
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))));
});
/**
 * Check if the shape uses the given library typography.
 */
app.common.types.typography.uses_library_typography_QMARK_ = (function app$common$types$typography$uses_library_typography_QMARK_(shape,library_id,typography_id){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"text","text",-1790561697))) && (app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2((function (p1__53161_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(p1__53161_SHARP_),typography_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(p1__53161_SHARP_),library_id)));
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))));
});
/**
 * Change the shape so that any use of the given typography now points to
 *   the given library.
 */
app.common.types.typography.remap_typographies = (function app$common$types$typography$remap_typographies(shape,library_id,typography){
var remap_typography = (function (p1__53162_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53162_SHARP_,new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),library_id);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),(function (content){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3((function (p1__53163_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(p1__53163_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography));
}),remap_typography,content);
}));
});
/**
 * Remove the typography reference from a node.
 */
app.common.types.typography.remove_typography_from_node = (function app$common$types$typography$remove_typography_from_node(node){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356)], 0));
});
/**
 * Change the shape so that any use of an external typography now is removed
 */
app.common.types.typography.remove_external_typographies = (function app$common$types$typography$remove_external_typographies(shape,file_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),(function (content){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3((function (p1__53167_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(p1__53167_SHARP_),file_id);
}),app.common.types.typography.remove_typography_from_node,content);
}));
});

//# sourceMappingURL=app.common.types.typography.js.map
