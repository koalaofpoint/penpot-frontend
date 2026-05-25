import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.schema.js";
import "./app.common.types.color.js";
import "./app.common.uuid.js";
import "./app.main.data.comments.js";
import "./app.main.data.common.js";
import "./app.main.data.plugins.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.guides.js";
import "./app.main.data.workspace.interactions.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.plugins.comments.js";
import "./app.plugins.format.js";
import "./app.plugins.parser.js";
import "./app.plugins.register.js";
import "./app.plugins.ruler_guides.js";
import "./app.plugins.shape.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
goog.provide('app.plugins.page');
app.plugins.page.flow_proxy_QMARK_ = (function app$plugins$page$flow_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"FlowProxy");
});
app.plugins.page.flow_proxy = (function app$plugins$page$flow_proxy(plugin_id,file_id,page_id,id){
var obj_62988 = ({});
var to_string_62987 = (function (){
return "FlowProxy";
});
var obj_62988_target_62992_63997 = obj_62988;
var prop_get_fn__63032_63998 = (function (){
var obj_62988_this_62991 = this;
var internal_fn__63026 = to_string_62987;
return internal_fn__63026.call(obj_62988_this_62991);
});
var prop_get_fn__63044_63999 = (function (){
var obj_62988_this_62991 = this;
var internal_fn__63038 = to_string_62987;
return internal_fn__63038.call(obj_62988_this_62991);
});
var prop_get_fn_plugin_63051_64000 = (function (){
var obj_62988_this_62991 = this;
var internal_fn_plugin_63045 = (function (){
return plugin_id;
});
return internal_fn_plugin_63045.call(obj_62988_this_62991);
});
var prop_get_fn_file_63058_64001 = (function (){
var obj_62988_this_62991 = this;
var internal_fn_file_63052 = (function (){
return file_id;
});
return internal_fn_file_63052.call(obj_62988_this_62991);
});
var prop_get_fn_page_63065_64002 = (function (){
var obj_62988_this_62991 = this;
var internal_fn_page_63059 = (function (){
return page_id;
});
return internal_fn_page_63059.call(obj_62988_this_62991);
});
var prop_get_fn_id_63072_64003 = (function (){
var obj_62988_this_62991 = this;
var internal_fn_id_63066 = (function (){
return id;
});
return internal_fn_id_63066.call(obj_62988_this_62991);
});
var prop_get_fn_page_63079_64004 = (function (){
var obj_62988_this_62991 = this;
var internal_fn_page_63073 = (function (){
return (app.plugins.page.page_proxy.cljs$core$IFn$_invoke$arity$3 ? app.plugins.page.page_proxy.cljs$core$IFn$_invoke$arity$3(plugin_id,file_id,page_id) : app.plugins.page.page_proxy.call(null,plugin_id,file_id,page_id));
});
return internal_fn_page_63073.call(obj_62988_this_62991);
});
var prop_get_fn_name_63086_64005 = (function (){
var obj_62988_this_62991 = this;
var internal_fn_name_63080 = (function (p1__62984_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_flow(p1__62984_SHARP_));
});
return internal_fn_name_63080.call(obj_62988_this_62991,obj_62988_this_62991);
});
var schema_name_63083_64006 = null;
var coercer_fn_name_63081_64007 = (((((!((schema_name_63083_64006 == null)))) && ((!(cljs.core.fn_QMARK_(schema_name_63083_64006))))))?app.common.schema.coercer(schema_name_63083_64006):null);
var decode_fn_name_63082_64008 = app.common.json.__GT_clj;
var prop_set_fn_name_63087_64009 = (function (val_name_63085){
var obj_62988_this_62991 = this;
var internal_fn_name_63080 = (function (_,value){
if((((!(typeof value === 'string'))) || (cljs.core.empty_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),value);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.update_flow(page_id,id,(function (p1__62985_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62985_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),value);
})));

}
});
return internal_fn_name_63080.call(obj_62988_this_62991,obj_62988_this_62991,val_name_63085);
});
var prop_get_fn_startingboard_63094_64010 = (function (){
var obj_62988_this_62991 = this;
var internal_fn_startingboard_63088 = (function (self){
var temp__5825__auto__ = new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_flow(self));
if(cljs.core.truth_(temp__5825__auto__)){
var frame = temp__5825__auto__;
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$3(file_id,page_id,frame);
} else {
return null;
}
});
return internal_fn_startingboard_63088.call(obj_62988_this_62991,obj_62988_this_62991);
});
var schema_startingboard_63091_64011 = null;
var coercer_fn_startingboard_63089_64012 = (((((!((schema_startingboard_63091_64011 == null)))) && ((!(cljs.core.fn_QMARK_(schema_startingboard_63091_64011))))))?app.common.schema.coercer(schema_startingboard_63091_64011):null);
var decode_fn_startingboard_63090_64013 = app.common.json.__GT_clj;
var prop_set_fn_startingboard_63095_64014 = (function (val_startingboard_63093){
var obj_62988_this_62991 = this;
var internal_fn_startingboard_63088 = (function (_,value){
if((!(app.plugins.shape.shape_proxy_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"startingBoard","startingBoard",979547215),value);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.update_flow(page_id,id,(function (p1__62986_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62986_SHARP_,new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271),app.util.object.get.cljs$core$IFn$_invoke$arity$2(value,"$id"));
})));

}
});
return internal_fn_startingboard_63088.call(obj_62988_this_62991,obj_62988_this_62991,val_startingboard_63093);
});
var schema_remove_63100_64015 = null;
var coercer_fn_remove_63098_64016 = (((((!((schema_remove_63100_64015 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_63100_64015))))))?app.common.schema.coercer(schema_remove_63100_64015):null);
var decode_fn_remove_63099_64017 = app.common.json.__GT_clj;
var prop_get_fn_remove_63103_64018 = (function (){
var obj_62988_this_62991 = this;
var internal_fn_remove_63097 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.remove_flow.cljs$core$IFn$_invoke$arity$2(page_id,id));
});
var internal_fn_remove_63097__$1 = internal_fn_remove_63097.bind(obj_62988_this_62991);
return internal_fn_remove_63097__$1;
});
Object.defineProperty(obj_62988_target_62992_63997,Symbol.toStringTag,(function (){var obj63124 = ({"enumerable":false,"get":prop_get_fn__63032_63998});
return obj63124;
})());

Object.defineProperty(obj_62988_target_62992_63997,Symbol["for"]("penpot.reify:type"),(function (){var obj63129 = ({"enumerable":false,"get":prop_get_fn__63044_63999});
return obj63129;
})());

Object.defineProperty(obj_62988_target_62992_63997,"$plugin",(function (){var obj63137 = ({"enumerable":false,"get":prop_get_fn_plugin_63051_64000});
return obj63137;
})());

Object.defineProperty(obj_62988_target_62992_63997,"$file",(function (){var obj63145 = ({"enumerable":false,"get":prop_get_fn_file_63058_64001});
return obj63145;
})());

Object.defineProperty(obj_62988_target_62992_63997,"$page",(function (){var obj63153 = ({"enumerable":false,"get":prop_get_fn_page_63065_64002});
return obj63153;
})());

Object.defineProperty(obj_62988_target_62992_63997,"$id",(function (){var obj63163 = ({"enumerable":false,"get":prop_get_fn_id_63072_64003});
return obj63163;
})());

Object.defineProperty(obj_62988_target_62992_63997,"page",(function (){var obj63171 = ({"enumerable":false,"get":prop_get_fn_page_63079_64004});
return obj63171;
})());

Object.defineProperty(obj_62988_target_62992_63997,"name",(function (){var obj63173 = ({"enumerable":true,"get":prop_get_fn_name_63086_64005,"set":prop_set_fn_name_63087_64009});
return obj63173;
})());

Object.defineProperty(obj_62988_target_62992_63997,"startingBoard",(function (){var obj63175 = ({"enumerable":true,"get":prop_get_fn_startingboard_63094_64010,"set":prop_set_fn_startingboard_63095_64014});
return obj63175;
})());

Object.defineProperty(obj_62988_target_62992_63997,"remove",(function (){var obj63177 = ({"enumerable":false,"get":prop_get_fn_remove_63103_64018});
return obj63177;
})());


return obj_62988;
});
app.plugins.page.page_proxy_QMARK_ = (function app$plugins$page$page_proxy_QMARK_(proxy){
return app.util.object.type_of_QMARK_(proxy,"PageProxy");
});
app.plugins.page.page_proxy = (function app$plugins$page$page_proxy(plugin_id,file_id,id){
var obj_63313 = ({});
var to_string_63312 = (function (){
return "PageProxy";
});
var obj_63313_target_63318_64019 = obj_63313;
var prop_get_fn__63326_64020 = (function (){
var obj_63313_this_63317 = this;
var internal_fn__63320 = to_string_63312;
return internal_fn__63320.call(obj_63313_this_63317);
});
var prop_get_fn__63333_64021 = (function (){
var obj_63313_this_63317 = this;
var internal_fn__63327 = to_string_63312;
return internal_fn__63327.call(obj_63313_this_63317);
});
var prop_get_fn_plugin_63340_64022 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_plugin_63334 = (function (){
return plugin_id;
});
return internal_fn_plugin_63334.call(obj_63313_this_63317);
});
var prop_get_fn_file_63347_64023 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_file_63341 = (function (){
return file_id;
});
return internal_fn_file_63341.call(obj_63313_this_63317);
});
var prop_get_fn_id_63354_64024 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_id_63348 = (function (){
return id;
});
return internal_fn_id_63348.call(obj_63313_this_63317);
});
var prop_get_fn_id_63361_64025 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_id_63355 = (function (){
return ""+(id ?? "");
});
return internal_fn_id_63355.call(obj_63313_this_63317);
});
var prop_get_fn_name_63368_64026 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_name_63362 = (function (p1__63201_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_page(p1__63201_SHARP_));
});
return internal_fn_name_63362.call(obj_63313_this_63317,obj_63313_this_63317);
});
var schema_name_63365_64027 = null;
var coercer_fn_name_63363_64028 = (((((!((schema_name_63365_64027 == null)))) && ((!(cljs.core.fn_QMARK_(schema_name_63365_64027))))))?app.common.schema.coercer(schema_name_63365_64027):null);
var decode_fn_name_63364_64029 = app.common.json.__GT_clj;
var prop_set_fn_name_63369_64030 = (function (val_name_63367){
var obj_63313_this_63317 = this;
var internal_fn_name_63362 = (function (_,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.rename_page(id,value));

}
}
});
return internal_fn_name_63362.call(obj_63313_this_63317,obj_63313_this_63317,val_name_63367);
});
var schema_getroot_63373_64031 = null;
var coercer_fn_getroot_63371_64032 = (((((!((schema_getroot_63373_64031 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getroot_63373_64031))))))?app.common.schema.coercer(schema_getroot_63373_64031):null);
var decode_fn_getroot_63372_64033 = app.common.json.__GT_clj;
var prop_get_fn_getroot_63376_64034 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_getroot_63370 = (function (){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,id,app.common.uuid.zero);
});
var internal_fn_getroot_63370__$1 = internal_fn_getroot_63370.bind(obj_63313_this_63317);
return internal_fn_getroot_63370__$1;
});
var prop_get_fn_root_63383_64035 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_root_63377 = (function (p1__63203_SHARP_){
return p1__63203_SHARP_.getRoot();
});
return internal_fn_root_63377.call(obj_63313_this_63317,obj_63313_this_63317);
});
var prop_get_fn_background_63390_64036 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_background_63384 = (function (p1__63204_SHARP_){
var or__5025__auto__ = new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_page(p1__63204_SHARP_));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "#E8E9EA";
}
});
return internal_fn_background_63384.call(obj_63313_this_63317,obj_63313_this_63317);
});
var schema_background_63387_64037 = null;
var coercer_fn_background_63385_64038 = (((((!((schema_background_63387_64037 == null)))) && ((!(cljs.core.fn_QMARK_(schema_background_63387_64037))))))?app.common.schema.coercer(schema_background_63387_64037):null);
var decode_fn_background_63386_64039 = app.common.json.__GT_clj;
var prop_set_fn_background_63391_64040 = (function (val_background_63389){
var obj_63313_this_63317 = this;
var internal_fn_background_63384 = (function (_,value){
if((((!(typeof value === 'string'))) || ((!(app.common.types.color.valid_hex_color_QMARK_(value)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"background","background",-863952629),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"background","background",-863952629),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.change_canvas_color.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),value], null)));

}
}
});
return internal_fn_background_63384.call(obj_63313_this_63317,obj_63313_this_63317,val_background_63389);
});
var prop_get_fn_flows_63398_64041 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_flows_63392 = (function (self){
var flows = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_page(self)),cljs.core.PersistentVector.EMPTY);
return app.plugins.format.format_array((function (p1__63214_SHARP_){
return app.plugins.page.flow_proxy(plugin_id,file_id,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63214_SHARP_));
}),cljs.core.vals(flows));
});
return internal_fn_flows_63392.call(obj_63313_this_63317,obj_63313_this_63317);
});
var prop_get_fn_rulerguides_63405_64042 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_rulerguides_63399 = (function (self){
var guides = new cljs.core.Keyword(null,"guides","guides",-1398390510).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_page(self));
return app.plugins.format.format_array((function (p1__63251_SHARP_){
return app.plugins.ruler_guides.ruler_guide_proxy(plugin_id,file_id,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63251_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63244_SHARP_){
return (new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(p1__63244_SHARP_) == null);
}),cljs.core.vals(guides)));
});
return internal_fn_rulerguides_63399.call(obj_63313_this_63317,obj_63313_this_63317);
});
var schema_getshapebyid_63410_64043 = null;
var coercer_fn_getshapebyid_63408_64044 = (((((!((schema_getshapebyid_63410_64043 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getshapebyid_63410_64043))))))?app.common.schema.coercer(schema_getshapebyid_63410_64043):null);
var decode_fn_getshapebyid_63409_64045 = app.common.json.__GT_clj;
var prop_get_fn_getshapebyid_63413_64046 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_getshapebyid_63407 = (function (shape_id){
if((!(typeof shape_id === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getShapeById","getShapeById",1762718316),shape_id);
} else {
var shape_id__$1 = app.common.uuid.parse(shape_id);
var shape = app.plugins.utils.locate_shape(file_id,id,shape_id__$1);
if((!((shape == null)))){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,id,shape_id__$1);
} else {
return null;
}

}
});
var internal_fn_getshapebyid_63407__$1 = internal_fn_getshapebyid_63407.bind(obj_63313_this_63317);
return internal_fn_getshapebyid_63407__$1;
});
var schema_findshapes_63417_64047 = null;
var coercer_fn_findshapes_63415_64048 = (((((!((schema_findshapes_63417_64047 == null)))) && ((!(cljs.core.fn_QMARK_(schema_findshapes_63417_64047))))))?app.common.schema.coercer(schema_findshapes_63417_64047):null);
var decode_fn_findshapes_63416_64049 = app.common.json.__GT_clj;
var prop_get_fn_findshapes_63420_64050 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_findshapes_63414 = (function (criteria){
var criteria__$1 = app.plugins.parser.parse_criteria(criteria);
var match_criteria_QMARK_ = (((!((criteria__$1 == null))))?(function (p__63736){
var vec__63739 = p__63736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63739,(0),null);
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63739,(1),null);
var and__5023__auto__ = ((cljs.core.not(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(criteria__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(criteria__$1)),cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)))));
if(and__5023__auto__){
var and__5023__auto____$1 = (function (){var or__5025__auto__ = cljs.core.not(new cljs.core.Keyword(null,"name-like","name-like",244303068).cljs$core$IFn$_invoke$arity$1(criteria__$1));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)),cuerdas.core.lower(new cljs.core.Keyword(null,"name-like","name-like",244303068).cljs$core$IFn$_invoke$arity$1(criteria__$1)));
}
})();
if(cljs.core.truth_(and__5023__auto____$1)){
return ((cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(criteria__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(criteria__$1),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}):cljs.core.identity);
if((((!((file_id == null)))) && ((!((id == null)))))){
var page = app.plugins.utils.locate_page(file_id,id);
var xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match_criteria_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__63301_SHARP_){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,id,cljs.core.first(p1__63301_SHARP_));
})));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)));
} else {
return null;
}
});
var internal_fn_findshapes_63414__$1 = internal_fn_findshapes_63414.bind(obj_63313_this_63317);
return internal_fn_findshapes_63414__$1;
});
var schema_getplugindata_63424_64051 = null;
var coercer_fn_getplugindata_63422_64052 = (((((!((schema_getplugindata_63424_64051 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindata_63424_64051))))))?app.common.schema.coercer(schema_getplugindata_63424_64051):null);
var decode_fn_getplugindata_63423_64053 = app.common.json.__GT_clj;
var prop_get_fn_getplugindata_63427_64054 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_getplugindata_63421 = (function (key){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"page-plugin-data-key","page-plugin-data-key",936190759),key);
} else {
var page = app.plugins.utils.locate_page(file_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id))),key);

}
});
var internal_fn_getplugindata_63421__$1 = internal_fn_getplugindata_63421.bind(obj_63313_this_63317);
return internal_fn_getplugindata_63421__$1;
});
var schema_setplugindata_63435_64055 = null;
var coercer_fn_setplugindata_63433_64056 = (((((!((schema_setplugindata_63435_64055 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setplugindata_63435_64055))))))?app.common.schema.coercer(schema_setplugindata_63435_64055):null);
var decode_fn_setplugindata_63434_64057 = app.common.json.__GT_clj;
var prop_get_fn_setplugindata_63438_64058 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_setplugindata_63428 = (function (key,value){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-key","setPluginData-key",437211756),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-value","setPluginData-value",281004073),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData","setPluginData",2049380387),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6(file_id,new cljs.core.Keyword(null,"page","page",849072397),id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)),key,value));

}
}
}
});
var internal_fn_setplugindata_63428__$1 = internal_fn_setplugindata_63428.bind(obj_63313_this_63317);
return internal_fn_setplugindata_63428__$1;
});
var schema_getplugindatakeys_63442_64059 = null;
var coercer_fn_getplugindatakeys_63440_64060 = (((((!((schema_getplugindatakeys_63442_64059 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindatakeys_63442_64059))))))?app.common.schema.coercer(schema_getplugindatakeys_63442_64059):null);
var decode_fn_getplugindatakeys_63441_64061 = app.common.json.__GT_clj;
var prop_get_fn_getplugindatakeys_63445_64062 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_getplugindatakeys_63439 = (function (){
var page = app.plugins.utils.locate_page(file_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)))));
});
var internal_fn_getplugindatakeys_63439__$1 = internal_fn_getplugindatakeys_63439.bind(obj_63313_this_63317);
return internal_fn_getplugindatakeys_63439__$1;
});
var schema_getsharedplugindata_63449_64063 = null;
var coercer_fn_getsharedplugindata_63447_64064 = (((((!((schema_getsharedplugindata_63449_64063 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindata_63449_64063))))))?app.common.schema.coercer(schema_getsharedplugindata_63449_64063):null);
var decode_fn_getsharedplugindata_63448_64065 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindata_63452_64066 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_getsharedplugindata_63446 = (function (namespace,key){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"page-plugin-data-namespace","page-plugin-data-namespace",-699256157),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"page-plugin-data-key","page-plugin-data-key",936190759),key);
} else {
var page = app.plugins.utils.locate_page(file_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace)),key);

}
}
});
var internal_fn_getsharedplugindata_63446__$1 = internal_fn_getsharedplugindata_63446.bind(obj_63313_this_63317);
return internal_fn_getsharedplugindata_63446__$1;
});
var schema_setsharedplugindata_63457_64067 = null;
var coercer_fn_setsharedplugindata_63455_64068 = (((((!((schema_setsharedplugindata_63457_64067 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setsharedplugindata_63457_64067))))))?app.common.schema.coercer(schema_setsharedplugindata_63457_64067):null);
var decode_fn_setsharedplugindata_63456_64069 = app.common.json.__GT_clj;
var prop_get_fn_setsharedplugindata_63460_64070 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_setsharedplugindata_63454 = (function (namespace,key,value){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-namespace","setSharedPluginData-namespace",807971852),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-key","setSharedPluginData-key",-1257676988),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-value","setSharedPluginData-value",1942190613),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData","setSharedPluginData",-324251591),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6(file_id,new cljs.core.Keyword(null,"page","page",849072397),id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace),key,value));

}
}
}
}
});
var internal_fn_setsharedplugindata_63454__$1 = internal_fn_setsharedplugindata_63454.bind(obj_63313_this_63317);
return internal_fn_setsharedplugindata_63454__$1;
});
var schema_getsharedplugindatakeys_63464_64071 = null;
var coercer_fn_getsharedplugindatakeys_63462_64072 = (((((!((schema_getsharedplugindatakeys_63464_64071 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindatakeys_63464_64071))))))?app.common.schema.coercer(schema_getsharedplugindatakeys_63464_64071):null);
var decode_fn_getsharedplugindatakeys_63463_64073 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindatakeys_63467_64074 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_getsharedplugindatakeys_63461 = (function (self,namespace){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"page-plugin-data-namespace","page-plugin-data-namespace",-699256157),namespace);
} else {
var page = app.plugins.utils.proxy__GT_page(self);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace))));

}
});
var internal_fn_getsharedplugindatakeys_63461__$1 = internal_fn_getsharedplugindatakeys_63461.bind(obj_63313_this_63317);
return internal_fn_getsharedplugindatakeys_63461__$1;
});
var schema_openpage_63471_64075 = null;
var coercer_fn_openpage_63469_64076 = (((((!((schema_openpage_63471_64075 == null)))) && ((!(cljs.core.fn_QMARK_(schema_openpage_63471_64075))))))?app.common.schema.coercer(schema_openpage_63471_64075):null);
var decode_fn_openpage_63470_64077 = app.common.json.__GT_clj;
var prop_get_fn_openpage_63475_64078 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_openpage_63468 = (function (new_window){
if((!(app.plugins.register.check_permission(plugin_id,"content:read")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"openPage","openPage",136412439),"Plugin doesn't have 'content:read' permission");
} else {
var new_window__$1 = ((cljs.core.boolean_QMARK_(new_window))?new_window:false);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-id","page-id",-872941168),id,new cljs.core.Keyword("app.main.router","new-window","app.main.router/new-window",1705407424),new_window__$1], 0)));

}
});
var internal_fn_openpage_63468__$1 = internal_fn_openpage_63468.bind(obj_63313_this_63317);
return internal_fn_openpage_63468__$1;
});
var schema_createflow_63479_64079 = null;
var coercer_fn_createflow_63477_64080 = (((((!((schema_createflow_63479_64079 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createflow_63479_64079))))))?app.common.schema.coercer(schema_createflow_63479_64079):null);
var decode_fn_createflow_63478_64081 = app.common.json.__GT_clj;
var prop_get_fn_createflow_63482_64082 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_createflow_63476 = (function (name,frame){
if((((!(typeof name === 'string'))) || (cljs.core.empty_QMARK_(name)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createFlow-name","createFlow-name",88270356),name);
} else {
if((!(app.plugins.shape.shape_proxy_QMARK_(frame)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createFlow-frame","createFlow-frame",-1759152297),frame);
} else {
var flow_id = app.common.uuid.next();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.add_flow.cljs$core$IFn$_invoke$arity$4(flow_id,id,name,app.util.object.get.cljs$core$IFn$_invoke$arity$2(frame,"$id")));

return app.plugins.page.flow_proxy(plugin_id,file_id,id,flow_id);

}
}
});
var internal_fn_createflow_63476__$1 = internal_fn_createflow_63476.bind(obj_63313_this_63317);
return internal_fn_createflow_63476__$1;
});
var schema_removeflow_63486_64083 = null;
var coercer_fn_removeflow_63484_64084 = (((((!((schema_removeflow_63486_64083 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removeflow_63486_64083))))))?app.common.schema.coercer(schema_removeflow_63486_64083):null);
var decode_fn_removeflow_63485_64085 = app.common.json.__GT_clj;
var prop_get_fn_removeflow_63489_64086 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_removeflow_63483 = (function (flow){
if((!(app.plugins.page.flow_proxy_QMARK_(flow)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeFlow-flow","removeFlow-flow",1839197888),flow);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.remove_flow.cljs$core$IFn$_invoke$arity$2(id,app.util.object.get.cljs$core$IFn$_invoke$arity$2(flow,"$id")));

}
});
var internal_fn_removeflow_63483__$1 = internal_fn_removeflow_63483.bind(obj_63313_this_63317);
return internal_fn_removeflow_63483__$1;
});
var schema_addrulerguide_63493_64087 = null;
var coercer_fn_addrulerguide_63491_64088 = (((((!((schema_addrulerguide_63493_64087 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addrulerguide_63493_64087))))))?app.common.schema.coercer(schema_addrulerguide_63493_64087):null);
var decode_fn_addrulerguide_63492_64089 = app.common.json.__GT_clj;
var prop_get_fn_addrulerguide_63496_64090 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_addrulerguide_63490 = (function (orientation,value,board){
var shape = app.plugins.utils.proxy__GT_shape(board);
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRulerGuide","addRulerGuide",1837252654),"Value not a safe number");
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["vertical",null,"horizontal",null], null), null),orientation)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRulerGuide","addRulerGuide",1837252654),"Orientation should be either 'vertical' or 'horizontal'");
} else {
if((((!((shape == null)))) && ((((!(app.plugins.shape.shape_proxy_QMARK_(board)))) || ((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRulerGuide","addRulerGuide",1837252654),"The shape is not a board");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRulerGuide","addRulerGuide",1837252654),"Plugin doesn't have 'content:write' permission");
} else {
var ruler_id = app.common.uuid.next();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.guides.update_guides(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),ruler_id,new cljs.core.Keyword(null,"axis","axis",-1215390822),app.plugins.parser.orientation__GT_axis(orientation),new cljs.core.Keyword(null,"position","position",-2011731912),value,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),(cljs.core.truth_(board)?app.util.object.get.cljs$core$IFn$_invoke$arity$2(board,"$id"):null)], null))));

return app.plugins.ruler_guides.ruler_guide_proxy(plugin_id,file_id,id,ruler_id);

}
}
}
}
});
var internal_fn_addrulerguide_63490__$1 = internal_fn_addrulerguide_63490.bind(obj_63313_this_63317);
return internal_fn_addrulerguide_63490__$1;
});
var schema_removerulerguide_63500_64091 = null;
var coercer_fn_removerulerguide_63498_64092 = (((((!((schema_removerulerguide_63500_64091 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removerulerguide_63500_64091))))))?app.common.schema.coercer(schema_removerulerguide_63500_64091):null);
var decode_fn_removerulerguide_63499_64093 = app.common.json.__GT_clj;
var prop_get_fn_removerulerguide_63503_64094 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_removerulerguide_63497 = (function (value){
if((!(app.plugins.ruler_guides.ruler_guide_proxy_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeRulerGuide","removeRulerGuide",-1323808559),"Guide not provided");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeRulerGuide","removeRulerGuide",-1323808559),"Plugin doesn't have 'comment:write' permission");
} else {
var guide = app.plugins.utils.proxy__GT_ruler_guide(value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.guides.remove_guide(guide));

}
}
});
var internal_fn_removerulerguide_63497__$1 = internal_fn_removerulerguide_63497.bind(obj_63313_this_63317);
return internal_fn_removerulerguide_63497__$1;
});
var schema_addcommentthread_63507_64095 = null;
var coercer_fn_addcommentthread_63505_64096 = (((((!((schema_addcommentthread_63507_64095 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addcommentthread_63507_64095))))))?app.common.schema.coercer(schema_addcommentthread_63507_64095):null);
var decode_fn_addcommentthread_63506_64097 = app.common.json.__GT_clj;
var prop_get_fn_addcommentthread_63510_64098 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_addcommentthread_63504 = (function (content,position,board){
var shape = (cljs.core.truth_(board)?app.plugins.utils.proxy__GT_shape(board):null);
var position__$1 = app.plugins.parser.parse_point(position);
if((((!(typeof content === 'string'))) || (cljs.core.empty_QMARK_(content)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addCommentThread","addCommentThread",11455178),"Content not valid");
} else {
if(((cljs.core.not(app.common.schema.valid_safe_number_QMARK_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position__$1)))) || (cljs.core.not(app.common.schema.valid_safe_number_QMARK_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position__$1)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addCommentThread","addCommentThread",11455178),"Position not valid");
} else {
if((((!((board == null)))) && ((((!(app.plugins.shape.shape_proxy_QMARK_(board)))) || ((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addCommentThread","addCommentThread",11455178),"Board not valid");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"comment:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addCommentThread","addCommentThread",11455178),"Plugin doesn't have 'comment:write' permission");
} else {
var position__$2 = (function (){var G__63856 = position__$1;
if((!((board == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__63856,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(board));
} else {
return G__63856;
}
})();
return (new Promise((function (resolve){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.create_thread_on_workspace.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),id,new cljs.core.Keyword(null,"position","position",-2011731912),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(position__$2),new cljs.core.Keyword(null,"content","content",15833224),content], null),(function (data){
var G__63857 = app.plugins.comments.comment_thread_proxy(plugin_id,file_id,id,data);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__63857) : resolve.call(null,G__63857));
}),false));
})));

}
}
}
}
});
var internal_fn_addcommentthread_63504__$1 = internal_fn_addcommentthread_63504.bind(obj_63313_this_63317);
return internal_fn_addcommentthread_63504__$1;
});
var schema_removecommentthread_63514_64099 = null;
var coercer_fn_removecommentthread_63512_64100 = (((((!((schema_removecommentthread_63514_64099 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removecommentthread_63514_64099))))))?app.common.schema.coercer(schema_removecommentthread_63514_64099):null);
var decode_fn_removecommentthread_63513_64101 = app.common.json.__GT_clj;
var prop_get_fn_removecommentthread_63517_64102 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_removecommentthread_63511 = (function (thread){
if((!(app.plugins.comments.comment_thread_proxy_QMARK_(thread)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeCommentThread","removeCommentThread",-1296576721),"Comment thread not valid");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"comment:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeCommentThread","removeCommentThread",-1296576721),"Plugin doesn't have 'content:write' permission");
} else {
return (new Promise((function (resolve){
var thread_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(thread,"$id");
return (new Promise(app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.delete_comment_thread_on_workspace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),thread_id], null),(function (){
return (resolve.cljs$core$IFn$_invoke$arity$0 ? resolve.cljs$core$IFn$_invoke$arity$0() : resolve.call(null));
})))));
})));

}
}
});
var internal_fn_removecommentthread_63511__$1 = internal_fn_removecommentthread_63511.bind(obj_63313_this_63317);
return internal_fn_removecommentthread_63511__$1;
});
var schema_findcommentthreads_63522_64103 = null;
var coercer_fn_findcommentthreads_63520_64104 = (((((!((schema_findcommentthreads_63522_64103 == null)))) && ((!(cljs.core.fn_QMARK_(schema_findcommentthreads_63522_64103))))))?app.common.schema.coercer(schema_findcommentthreads_63522_64103):null);
var decode_fn_findcommentthreads_63521_64105 = app.common.json.__GT_clj;
var prop_get_fn_findcommentthreads_63525_64106 = (function (){
var obj_63313_this_63317 = this;
var internal_fn_findcommentthreads_63518 = (function (criteria){
var only_yours = cljs.core.boolean$(app.util.object.get.cljs$core$IFn$_invoke$arity$3(criteria,"onlyYours",false));
var show_resolved = cljs.core.boolean$(app.util.object.get.cljs$core$IFn$_invoke$arity$3(criteria,"showResolved",true));
var user_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
return (new Promise((function (resolve,reject){
if((!(app.plugins.register.check_permission(plugin_id,"comment:read")))){
app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"findCommentThreads","findCommentThreads",1948881022),"Plugin doesn't have 'comment:read' permission");

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1("Plugin doesn't have 'comment:read' permission") : reject.call(null,"Plugin doesn't have 'comment:read' permission"));
} else {
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (threads){
var threads__$1 = (function (){var G__63900 = threads;
var G__63900__$1 = (((!(show_resolved)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551)),G__63900):G__63900);
if(only_yours){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63308_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"participants","participants",673603367).cljs$core$IFn$_invoke$arity$1(p1__63308_SHARP_),user_id);
}),G__63900__$1);
} else {
return G__63900__$1;
}
})();
var G__63901 = app.plugins.format.format_array((function (p1__63309_SHARP_){
return app.plugins.comments.comment_thread_proxy(plugin_id,file_id,id,p1__63309_SHARP_);
}),threads__$1);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__63901) : resolve.call(null,G__63901));
}),reject,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comment-threads","get-comment-threads",-138542175),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null)));

}
})));
});
var internal_fn_findcommentthreads_63518__$1 = internal_fn_findcommentthreads_63518.bind(obj_63313_this_63317);
return internal_fn_findcommentthreads_63518__$1;
});
Object.defineProperty(obj_63313_target_63318_64019,Symbol.toStringTag,(function (){var obj63903 = ({"enumerable":false,"get":prop_get_fn__63326_64020});
return obj63903;
})());

Object.defineProperty(obj_63313_target_63318_64019,Symbol["for"]("penpot.reify:type"),(function (){var obj63905 = ({"enumerable":false,"get":prop_get_fn__63333_64021});
return obj63905;
})());

Object.defineProperty(obj_63313_target_63318_64019,"$plugin",(function (){var obj63907 = ({"enumerable":false,"get":prop_get_fn_plugin_63340_64022});
return obj63907;
})());

Object.defineProperty(obj_63313_target_63318_64019,"$file",(function (){var obj63909 = ({"enumerable":false,"get":prop_get_fn_file_63347_64023});
return obj63909;
})());

Object.defineProperty(obj_63313_target_63318_64019,"$id",(function (){var obj63911 = ({"enumerable":false,"get":prop_get_fn_id_63354_64024});
return obj63911;
})());

Object.defineProperty(obj_63313_target_63318_64019,"id",(function (){var obj63913 = ({"enumerable":true,"get":prop_get_fn_id_63361_64025});
return obj63913;
})());

Object.defineProperty(obj_63313_target_63318_64019,"name",(function (){var obj63915 = ({"enumerable":true,"get":prop_get_fn_name_63368_64026,"set":prop_set_fn_name_63369_64030});
return obj63915;
})());

Object.defineProperty(obj_63313_target_63318_64019,"getRoot",(function (){var obj63917 = ({"enumerable":false,"get":prop_get_fn_getroot_63376_64034});
return obj63917;
})());

Object.defineProperty(obj_63313_target_63318_64019,"root",(function (){var obj63919 = ({"enumerable":false,"get":prop_get_fn_root_63383_64035});
return obj63919;
})());

Object.defineProperty(obj_63313_target_63318_64019,"background",(function (){var obj63921 = ({"enumerable":true,"get":prop_get_fn_background_63390_64036,"set":prop_set_fn_background_63391_64040});
return obj63921;
})());

Object.defineProperty(obj_63313_target_63318_64019,"flows",(function (){var obj63923 = ({"enumerable":true,"get":prop_get_fn_flows_63398_64041});
return obj63923;
})());

Object.defineProperty(obj_63313_target_63318_64019,"rulerGuides",(function (){var obj63925 = ({"enumerable":true,"get":prop_get_fn_rulerguides_63405_64042});
return obj63925;
})());

Object.defineProperty(obj_63313_target_63318_64019,"getShapeById",(function (){var obj63927 = ({"enumerable":false,"get":prop_get_fn_getshapebyid_63413_64046});
return obj63927;
})());

Object.defineProperty(obj_63313_target_63318_64019,"findShapes",(function (){var obj63929 = ({"enumerable":false,"get":prop_get_fn_findshapes_63420_64050});
return obj63929;
})());

Object.defineProperty(obj_63313_target_63318_64019,"getPluginData",(function (){var obj63931 = ({"enumerable":false,"get":prop_get_fn_getplugindata_63427_64054});
return obj63931;
})());

Object.defineProperty(obj_63313_target_63318_64019,"setPluginData",(function (){var obj63933 = ({"enumerable":false,"get":prop_get_fn_setplugindata_63438_64058});
return obj63933;
})());

Object.defineProperty(obj_63313_target_63318_64019,"getPluginDataKeys",(function (){var obj63935 = ({"enumerable":false,"get":prop_get_fn_getplugindatakeys_63445_64062});
return obj63935;
})());

Object.defineProperty(obj_63313_target_63318_64019,"getSharedPluginData",(function (){var obj63937 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindata_63452_64066});
return obj63937;
})());

Object.defineProperty(obj_63313_target_63318_64019,"setSharedPluginData",(function (){var obj63939 = ({"enumerable":false,"get":prop_get_fn_setsharedplugindata_63460_64070});
return obj63939;
})());

Object.defineProperty(obj_63313_target_63318_64019,"getSharedPluginDataKeys",(function (){var obj63941 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindatakeys_63467_64074});
return obj63941;
})());

Object.defineProperty(obj_63313_target_63318_64019,"openPage",(function (){var obj63943 = ({"enumerable":false,"get":prop_get_fn_openpage_63475_64078});
return obj63943;
})());

Object.defineProperty(obj_63313_target_63318_64019,"createFlow",(function (){var obj63945 = ({"enumerable":false,"get":prop_get_fn_createflow_63482_64082});
return obj63945;
})());

Object.defineProperty(obj_63313_target_63318_64019,"removeFlow",(function (){var obj63947 = ({"enumerable":false,"get":prop_get_fn_removeflow_63489_64086});
return obj63947;
})());

Object.defineProperty(obj_63313_target_63318_64019,"addRulerGuide",(function (){var obj63988 = ({"enumerable":false,"get":prop_get_fn_addrulerguide_63496_64090});
return obj63988;
})());

Object.defineProperty(obj_63313_target_63318_64019,"removeRulerGuide",(function (){var obj63990 = ({"enumerable":false,"get":prop_get_fn_removerulerguide_63503_64094});
return obj63990;
})());

Object.defineProperty(obj_63313_target_63318_64019,"addCommentThread",(function (){var obj63992 = ({"enumerable":false,"get":prop_get_fn_addcommentthread_63510_64098});
return obj63992;
})());

Object.defineProperty(obj_63313_target_63318_64019,"removeCommentThread",(function (){var obj63994 = ({"enumerable":false,"get":prop_get_fn_removecommentthread_63517_64102});
return obj63994;
})());

Object.defineProperty(obj_63313_target_63318_64019,"findCommentThreads",(function (){var obj63996 = ({"enumerable":false,"get":prop_get_fn_findcommentthreads_63525_64106});
return obj63996;
})());


return obj_63313;
});

//# sourceMappingURL=app.plugins.page.js.map
