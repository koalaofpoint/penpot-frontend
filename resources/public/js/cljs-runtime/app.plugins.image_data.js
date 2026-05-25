import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.config.js";
import "./app.util.http.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
goog.provide('app.plugins.image_data');
app.plugins.image_data.create_image_data = (function app$plugins$image_data$create_image_data(p__83108){
var map__83109 = p__83108;
var map__83109__$1 = cljs.core.__destructure_map(map__83109);
var entry = map__83109__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83109__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83109__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83109__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83109__$1,new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83109__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var keep_aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83109__$1,new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727));
var obj_83111 = ({});
var to_string_83110 = (function (){
return "ImageData";
});
var obj_83111_target_83115_83200 = obj_83111;
var prop_get_fn__83123_83201 = (function (){
var obj_83111_this_83114 = this;
var internal_fn__83117 = to_string_83110;
return internal_fn__83117.call(obj_83111_this_83114);
});
var prop_get_fn__83130_83202 = (function (){
var obj_83111_this_83114 = this;
var internal_fn__83124 = to_string_83110;
return internal_fn__83124.call(obj_83111_this_83114);
});
var prop_get_fn_name_83137_83203 = (function (){
var obj_83111_this_83114 = this;
var internal_fn_name_83131 = cljs.core.constantly(name);
return internal_fn_name_83131.call(obj_83111_this_83114);
});
var prop_get_fn_width_83144_83204 = (function (){
var obj_83111_this_83114 = this;
var internal_fn_width_83138 = cljs.core.constantly(width);
return internal_fn_width_83138.call(obj_83111_this_83114);
});
var prop_get_fn_height_83151_83205 = (function (){
var obj_83111_this_83114 = this;
var internal_fn_height_83145 = cljs.core.constantly(height);
return internal_fn_height_83145.call(obj_83111_this_83114);
});
var prop_get_fn_mtype_83158_83206 = (function (){
var obj_83111_this_83114 = this;
var internal_fn_mtype_83152 = cljs.core.constantly(mtype);
return internal_fn_mtype_83152.call(obj_83111_this_83114);
});
var prop_get_fn_id_83165_83207 = (function (){
var obj_83111_this_83114 = this;
var internal_fn_id_83159 = (function (){
if(cljs.core.truth_(id)){
return ""+(id ?? "");
} else {
return null;
}
});
return internal_fn_id_83159.call(obj_83111_this_83114);
});
var prop_get_fn_keepaspectratio_83172_83208 = (function (){
var obj_83111_this_83114 = this;
var internal_fn_keepaspectratio_83166 = cljs.core.constantly(keep_aspect_ratio);
return internal_fn_keepaspectratio_83166.call(obj_83111_this_83114);
});
var schema_data_83176_83209 = null;
var coercer_fn_data_83174_83210 = (((((!((schema_data_83176_83209 == null)))) && ((!(cljs.core.fn_QMARK_(schema_data_83176_83209))))))?app.common.schema.coercer(schema_data_83176_83209):null);
var decode_fn_data_83175_83211 = app.common.json.__GT_clj;
var prop_get_fn_data_83179_83212 = (function (){
var obj_83111_this_83114 = this;
var internal_fn_data_83173 = (function (){
var url = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(entry);
return (new Promise((function (resolve,reject){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.map((function (p1__83107_SHARP_){
return (new Uint8Array(p1__83107_SHARP_));
}),beicon.v2.core.mapcat((function (p1__83106_SHARP_){
return p1__83106_SHARP_.arrayBuffer();
}),beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),url,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233)], null))))));
})));
});
var internal_fn_data_83173__$1 = internal_fn_data_83173.bind(obj_83111_this_83114);
return internal_fn_data_83173__$1;
});
Object.defineProperty(obj_83111_target_83115_83200,Symbol.toStringTag,(function (){var obj83182 = ({"enumerable":false,"get":prop_get_fn__83123_83201});
return obj83182;
})());

Object.defineProperty(obj_83111_target_83115_83200,Symbol["for"]("penpot.reify:type"),(function (){var obj83184 = ({"enumerable":false,"get":prop_get_fn__83130_83202});
return obj83184;
})());

Object.defineProperty(obj_83111_target_83115_83200,"name",(function (){var obj83186 = ({"enumerable":true,"get":prop_get_fn_name_83137_83203});
return obj83186;
})());

Object.defineProperty(obj_83111_target_83115_83200,"width",(function (){var obj83188 = ({"enumerable":true,"get":prop_get_fn_width_83144_83204});
return obj83188;
})());

Object.defineProperty(obj_83111_target_83115_83200,"height",(function (){var obj83190 = ({"enumerable":true,"get":prop_get_fn_height_83151_83205});
return obj83190;
})());

Object.defineProperty(obj_83111_target_83115_83200,"mtype",(function (){var obj83193 = ({"enumerable":true,"get":prop_get_fn_mtype_83158_83206});
return obj83193;
})());

Object.defineProperty(obj_83111_target_83115_83200,"id",(function (){var obj83195 = ({"enumerable":true,"get":prop_get_fn_id_83165_83207});
return obj83195;
})());

Object.defineProperty(obj_83111_target_83115_83200,"keepAspectRatio",(function (){var obj83197 = ({"enumerable":true,"get":prop_get_fn_keepaspectratio_83172_83208});
return obj83197;
})());

Object.defineProperty(obj_83111_target_83115_83200,"data",(function (){var obj83199 = ({"enumerable":false,"get":prop_get_fn_data_83179_83212});
return obj83199;
})());


return obj_83111;
});

//# sourceMappingURL=app.plugins.image_data.js.map
