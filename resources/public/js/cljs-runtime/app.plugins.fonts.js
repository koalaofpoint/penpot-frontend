import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.fonts.js";
import "./app.main.store.js";
import "./app.plugins.format.js";
import "./app.plugins.register.js";
import "./app.plugins.shape.js";
import "./app.plugins.text.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
goog.provide('app.plugins.fonts');
app.plugins.fonts.font_variant_proxy_QMARK_ = (function app$plugins$fonts$font_variant_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"FontVariantProxy");
});
app.plugins.fonts.font_variant_proxy = (function app$plugins$fonts$font_variant_proxy(name,id,weight,style){
var obj_62363 = ({});
var to_string_62362 = (function (){
return "FontVariantProxy";
});
var obj_62363_target_62367_62806 = obj_62363;
var prop_get_fn__62375_62807 = (function (){
var obj_62363_this_62366 = this;
var internal_fn__62369 = to_string_62362;
return internal_fn__62369.call(obj_62363_this_62366);
});
var prop_get_fn__62382_62808 = (function (){
var obj_62363_this_62366 = this;
var internal_fn__62376 = to_string_62362;
return internal_fn__62376.call(obj_62363_this_62366);
});
var prop_get_fn_name_62389_62809 = (function (){
var obj_62363_this_62366 = this;
var internal_fn_name_62383 = (function (){
return name;
});
return internal_fn_name_62383.call(obj_62363_this_62366);
});
var prop_get_fn_fontvariantid_62396_62810 = (function (){
var obj_62363_this_62366 = this;
var internal_fn_fontvariantid_62390 = (function (){
return id;
});
return internal_fn_fontvariantid_62390.call(obj_62363_this_62366);
});
var prop_get_fn_fontweight_62403_62811 = (function (){
var obj_62363_this_62366 = this;
var internal_fn_fontweight_62397 = (function (){
return weight;
});
return internal_fn_fontweight_62397.call(obj_62363_this_62366);
});
var prop_get_fn_fontstyle_62410_62812 = (function (){
var obj_62363_this_62366 = this;
var internal_fn_fontstyle_62404 = (function (){
return style;
});
return internal_fn_fontstyle_62404.call(obj_62363_this_62366);
});
Object.defineProperty(obj_62363_target_62367_62806,Symbol.toStringTag,(function (){var obj62412 = ({"enumerable":false,"get":prop_get_fn__62375_62807});
return obj62412;
})());

Object.defineProperty(obj_62363_target_62367_62806,Symbol["for"]("penpot.reify:type"),(function (){var obj62416 = ({"enumerable":false,"get":prop_get_fn__62382_62808});
return obj62416;
})());

Object.defineProperty(obj_62363_target_62367_62806,"name",(function (){var obj62418 = ({"enumerable":true,"get":prop_get_fn_name_62389_62809});
return obj62418;
})());

Object.defineProperty(obj_62363_target_62367_62806,"fontVariantId",(function (){var obj62420 = ({"enumerable":true,"get":prop_get_fn_fontvariantid_62396_62810});
return obj62420;
})());

Object.defineProperty(obj_62363_target_62367_62806,"fontWeight",(function (){var obj62424 = ({"enumerable":true,"get":prop_get_fn_fontweight_62403_62811});
return obj62424;
})());

Object.defineProperty(obj_62363_target_62367_62806,"fontStyle",(function (){var obj62428 = ({"enumerable":true,"get":prop_get_fn_fontstyle_62410_62812});
return obj62428;
})());


return obj_62363;
});
app.plugins.fonts.font_proxy_QMARK_ = (function app$plugins$fonts$font_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"FontProxy");
});
app.plugins.fonts.font_proxy = (function app$plugins$fonts$font_proxy(p__62447){
var map__62448 = p__62447;
var map__62448__$1 = cljs.core.__destructure_map(map__62448);
var font = map__62448__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62448__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var family = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62448__$1,new cljs.core.Keyword(null,"family","family",-1313145692));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62448__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variants = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62448__$1,new cljs.core.Keyword(null,"variants","variants",-176391100));
if((!((font == null)))){
var default_variant = app.main.fonts.get_default_variant(font);
var obj_62450 = ({});
var to_string_62449 = (function (){
return "FontProxy";
});
var obj_62450_target_62455_62846 = obj_62450;
var prop_get_fn__62463_62847 = (function (){
var obj_62450_this_62454 = this;
var internal_fn__62457 = to_string_62449;
return internal_fn__62457.call(obj_62450_this_62454);
});
var prop_get_fn__62470_62848 = (function (){
var obj_62450_this_62454 = this;
var internal_fn__62464 = to_string_62449;
return internal_fn__62464.call(obj_62450_this_62454);
});
var prop_get_fn_name_62477_62849 = (function (){
var obj_62450_this_62454 = this;
var internal_fn_name_62471 = (function (){
return name;
});
return internal_fn_name_62471.call(obj_62450_this_62454);
});
var prop_get_fn_fontid_62484_62850 = (function (){
var obj_62450_this_62454 = this;
var internal_fn_fontid_62478 = (function (){
return id;
});
return internal_fn_fontid_62478.call(obj_62450_this_62454);
});
var prop_get_fn_fontfamily_62492_62851 = (function (){
var obj_62450_this_62454 = this;
var internal_fn_fontfamily_62485 = (function (){
return family;
});
return internal_fn_fontfamily_62485.call(obj_62450_this_62454);
});
var prop_get_fn_fontstyle_62499_62852 = (function (){
var obj_62450_this_62454 = this;
var internal_fn_fontstyle_62493 = (function (){
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(default_variant);
});
return internal_fn_fontstyle_62493.call(obj_62450_this_62454);
});
var prop_get_fn_fontvariantid_62506_62853 = (function (){
var obj_62450_this_62454 = this;
var internal_fn_fontvariantid_62500 = (function (){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(default_variant);
});
return internal_fn_fontvariantid_62500.call(obj_62450_this_62454);
});
var prop_get_fn_fontweight_62513_62854 = (function (){
var obj_62450_this_62454 = this;
var internal_fn_fontweight_62507 = (function (){
return new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(default_variant);
});
return internal_fn_fontweight_62507.call(obj_62450_this_62454);
});
var prop_get_fn_variants_62520_62855 = (function (){
var obj_62450_this_62454 = this;
var internal_fn_variants_62514 = (function (){
return app.plugins.format.format_array((function (p__62649){
var map__62650 = p__62649;
var map__62650__$1 = cljs.core.__destructure_map(map__62650);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62650__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62650__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62650__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62650__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return app.plugins.fonts.font_variant_proxy(name__$1,id__$1,weight,style);
}),variants);
});
return internal_fn_variants_62514.call(obj_62450_this_62454);
});
var schema_applytotext_62524_62856 = null;
var coercer_fn_applytotext_62522_62857 = (((((!((schema_applytotext_62524_62856 == null)))) && ((!(cljs.core.fn_QMARK_(schema_applytotext_62524_62856))))))?app.common.schema.coercer(schema_applytotext_62524_62856):null);
var decode_fn_applytotext_62523_62858 = app.common.json.__GT_clj;
var prop_get_fn_applytotext_62527_62859 = (function (){
var obj_62450_this_62454 = this;
var internal_fn_applytotext_62521 = (function (text,variant){
if((!(app.plugins.shape.shape_proxy_QMARK_(text)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToText","applyToText",-2123120633),text);
} else {
if((!(app.plugins.register.check_permission(app.util.object.get.cljs$core$IFn$_invoke$arity$2(text,"$plugin"),"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToText","applyToText",-2123120633),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(text,"$id");
var values = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),id__$1,new cljs.core.Keyword(null,"font-family","font-family",-667419874),family,new cljs.core.Keyword(null,"font-style","font-style",-773672352),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(variant,"fontStyle"),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(default_variant)),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(variant,"fontVariantId"),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(default_variant)),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(variant,"fontWeight"),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(default_variant))], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id__$1,values));

}
}
});
var internal_fn_applytotext_62521__$1 = internal_fn_applytotext_62521.bind(obj_62450_this_62454);
return internal_fn_applytotext_62521__$1;
});
var schema_applytorange_62531_62860 = null;
var coercer_fn_applytorange_62529_62861 = (((((!((schema_applytorange_62531_62860 == null)))) && ((!(cljs.core.fn_QMARK_(schema_applytorange_62531_62860))))))?app.common.schema.coercer(schema_applytorange_62531_62860):null);
var decode_fn_applytorange_62530_62862 = app.common.json.__GT_clj;
var prop_get_fn_applytorange_62534_62863 = (function (){
var obj_62450_this_62454 = this;
var internal_fn_applytorange_62528 = (function (range,variant){
if((!(app.plugins.text.text_range_proxy_QMARK_(range)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToRange","applyToRange",1653614162),range);
} else {
if((!(app.plugins.register.check_permission(app.util.object.get.cljs$core$IFn$_invoke$arity$2(range,"$plugin"),"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToRange","applyToRange",1653614162),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(range,"$id");
var start = app.util.object.get.cljs$core$IFn$_invoke$arity$2(range,"start");
var end = app.util.object.get.cljs$core$IFn$_invoke$arity$2(range,"end");
var values = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),id__$1,new cljs.core.Keyword(null,"font-family","font-family",-667419874),family,new cljs.core.Keyword(null,"font-style","font-style",-773672352),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(variant,"fontStyle"),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(default_variant)),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(variant,"fontVariantId"),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(default_variant)),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(variant,"fontWeight"),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(default_variant))], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(id__$1,start,end,values));

}
}
});
var internal_fn_applytorange_62528__$1 = internal_fn_applytorange_62528.bind(obj_62450_this_62454);
return internal_fn_applytorange_62528__$1;
});
Object.defineProperty(obj_62450_target_62455_62846,Symbol.toStringTag,(function (){var obj62652 = ({"enumerable":false,"get":prop_get_fn__62463_62847});
return obj62652;
})());

Object.defineProperty(obj_62450_target_62455_62846,Symbol["for"]("penpot.reify:type"),(function (){var obj62654 = ({"enumerable":false,"get":prop_get_fn__62470_62848});
return obj62654;
})());

Object.defineProperty(obj_62450_target_62455_62846,"name",(function (){var obj62656 = ({"enumerable":true,"get":prop_get_fn_name_62477_62849});
return obj62656;
})());

Object.defineProperty(obj_62450_target_62455_62846,"fontId",(function (){var obj62658 = ({"enumerable":true,"get":prop_get_fn_fontid_62484_62850});
return obj62658;
})());

Object.defineProperty(obj_62450_target_62455_62846,"fontFamily",(function (){var obj62660 = ({"enumerable":true,"get":prop_get_fn_fontfamily_62492_62851});
return obj62660;
})());

Object.defineProperty(obj_62450_target_62455_62846,"fontStyle",(function (){var obj62662 = ({"enumerable":true,"get":prop_get_fn_fontstyle_62499_62852});
return obj62662;
})());

Object.defineProperty(obj_62450_target_62455_62846,"fontVariantId",(function (){var obj62664 = ({"enumerable":true,"get":prop_get_fn_fontvariantid_62506_62853});
return obj62664;
})());

Object.defineProperty(obj_62450_target_62455_62846,"fontWeight",(function (){var obj62666 = ({"enumerable":true,"get":prop_get_fn_fontweight_62513_62854});
return obj62666;
})());

Object.defineProperty(obj_62450_target_62455_62846,"variants",(function (){var obj62668 = ({"enumerable":true,"get":prop_get_fn_variants_62520_62855});
return obj62668;
})());

Object.defineProperty(obj_62450_target_62455_62846,"applyToText",(function (){var obj62670 = ({"enumerable":false,"get":prop_get_fn_applytotext_62527_62859});
return obj62670;
})());

Object.defineProperty(obj_62450_target_62455_62846,"applyToRange",(function (){var obj62672 = ({"enumerable":false,"get":prop_get_fn_applytorange_62534_62863});
return obj62672;
})());


return obj_62450;
} else {
return null;
}
});
app.plugins.fonts.fonts_subcontext = (function app$plugins$fonts$fonts_subcontext(plugin_id){
var obj_62677 = ({});
var to_string_62676 = (function (){
return "PenpotFontsSubcontext";
});
var obj_62677_target_62681_62864 = obj_62677;
var prop_get_fn__62689_62865 = (function (){
var obj_62677_this_62680 = this;
var internal_fn__62683 = to_string_62676;
return internal_fn__62683.call(obj_62677_this_62680);
});
var prop_get_fn__62696_62866 = (function (){
var obj_62677_this_62680 = this;
var internal_fn__62690 = to_string_62676;
return internal_fn__62690.call(obj_62677_this_62680);
});
var prop_get_fn_plugin_62703_62867 = (function (){
var obj_62677_this_62680 = this;
var internal_fn_plugin_62697 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_62697.call(obj_62677_this_62680);
});
var prop_get_fn_all_62710_62868 = (function (){
var obj_62677_this_62680 = this;
var internal_fn_all_62704 = (function (){
return app.plugins.format.format_array(app.plugins.fonts.font_proxy,cljs.core.vals(cljs.core.deref(app.main.fonts.fontsdb)));
});
return internal_fn_all_62704.call(obj_62677_this_62680);
});
var schema_findbyid_62714_62869 = null;
var coercer_fn_findbyid_62712_62870 = (((((!((schema_findbyid_62714_62869 == null)))) && ((!(cljs.core.fn_QMARK_(schema_findbyid_62714_62869))))))?app.common.schema.coercer(schema_findbyid_62714_62869):null);
var decode_fn_findbyid_62713_62871 = app.common.json.__GT_clj;
var prop_get_fn_findbyid_62717_62872 = (function (){
var obj_62677_this_62680 = this;
var internal_fn_findbyid_62711 = (function (id){
if((!(typeof id === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"findbyId","findbyId",681438060),id);
} else {
return app.plugins.fonts.font_proxy(app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__62673_SHARP_){
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__62673_SHARP_)),cuerdas.core.lower(id));
}),cljs.core.vals(cljs.core.deref(app.main.fonts.fontsdb))));

}
});
var internal_fn_findbyid_62711__$1 = internal_fn_findbyid_62711.bind(obj_62677_this_62680);
return internal_fn_findbyid_62711__$1;
});
var schema_findbyname_62721_62873 = null;
var coercer_fn_findbyname_62719_62874 = (((((!((schema_findbyname_62721_62873 == null)))) && ((!(cljs.core.fn_QMARK_(schema_findbyname_62721_62873))))))?app.common.schema.coercer(schema_findbyname_62721_62873):null);
var decode_fn_findbyname_62720_62875 = app.common.json.__GT_clj;
var prop_get_fn_findbyname_62724_62876 = (function (){
var obj_62677_this_62680 = this;
var internal_fn_findbyname_62718 = (function (name){
if((!(typeof name === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"findByName","findByName",-1135437361),name);
} else {
return app.plugins.fonts.font_proxy(app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__62674_SHARP_){
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__62674_SHARP_)),cuerdas.core.lower(name));
}),cljs.core.vals(cljs.core.deref(app.main.fonts.fontsdb))));

}
});
var internal_fn_findbyname_62718__$1 = internal_fn_findbyname_62718.bind(obj_62677_this_62680);
return internal_fn_findbyname_62718__$1;
});
var schema_findallbyid_62728_62877 = null;
var coercer_fn_findallbyid_62726_62878 = (((((!((schema_findallbyid_62728_62877 == null)))) && ((!(cljs.core.fn_QMARK_(schema_findallbyid_62728_62877))))))?app.common.schema.coercer(schema_findallbyid_62728_62877):null);
var decode_fn_findallbyid_62727_62879 = app.common.json.__GT_clj;
var prop_get_fn_findallbyid_62731_62880 = (function (){
var obj_62677_this_62680 = this;
var internal_fn_findallbyid_62725 = (function (id){
if((!(typeof id === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"findAllById","findAllById",-633206720),cljs.core.name);
} else {
return app.plugins.format.format_array((function (font){
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font)),cuerdas.core.lower(id)))){
return app.plugins.fonts.font_proxy(font);
} else {
return null;
}
}),cljs.core.vals(cljs.core.deref(app.main.fonts.fontsdb)));

}
});
var internal_fn_findallbyid_62725__$1 = internal_fn_findallbyid_62725.bind(obj_62677_this_62680);
return internal_fn_findallbyid_62725__$1;
});
var schema_findallbyname_62735_62881 = null;
var coercer_fn_findallbyname_62733_62882 = (((((!((schema_findallbyname_62735_62881 == null)))) && ((!(cljs.core.fn_QMARK_(schema_findallbyname_62735_62881))))))?app.common.schema.coercer(schema_findallbyname_62735_62881):null);
var decode_fn_findallbyname_62734_62883 = app.common.json.__GT_clj;
var prop_get_fn_findallbyname_62738_62884 = (function (){
var obj_62677_this_62680 = this;
var internal_fn_findallbyname_62732 = (function (name){
if((!(typeof name === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"findAllByName","findAllByName",1530295653),name);
} else {
return app.plugins.format.format_array((function (font){
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font)),cuerdas.core.lower(name)))){
return app.plugins.fonts.font_proxy(font);
} else {
return null;
}
}),cljs.core.vals(cljs.core.deref(app.main.fonts.fontsdb)));

}
});
var internal_fn_findallbyname_62732__$1 = internal_fn_findallbyname_62732.bind(obj_62677_this_62680);
return internal_fn_findallbyname_62732__$1;
});
Object.defineProperty(obj_62677_target_62681_62864,Symbol.toStringTag,(function (){var obj62771 = ({"enumerable":false,"get":prop_get_fn__62689_62865});
return obj62771;
})());

Object.defineProperty(obj_62677_target_62681_62864,Symbol["for"]("penpot.reify:type"),(function (){var obj62773 = ({"enumerable":false,"get":prop_get_fn__62696_62866});
return obj62773;
})());

Object.defineProperty(obj_62677_target_62681_62864,"$plugin",(function (){var obj62775 = ({"enumerable":false,"get":prop_get_fn_plugin_62703_62867});
return obj62775;
})());

Object.defineProperty(obj_62677_target_62681_62864,"all",(function (){var obj62777 = ({"enumerable":true,"get":prop_get_fn_all_62710_62868});
return obj62777;
})());

Object.defineProperty(obj_62677_target_62681_62864,"findById",(function (){var obj62779 = ({"enumerable":false,"get":prop_get_fn_findbyid_62717_62872});
return obj62779;
})());

Object.defineProperty(obj_62677_target_62681_62864,"findByName",(function (){var obj62781 = ({"enumerable":false,"get":prop_get_fn_findbyname_62724_62876});
return obj62781;
})());

Object.defineProperty(obj_62677_target_62681_62864,"findAllById",(function (){var obj62783 = ({"enumerable":false,"get":prop_get_fn_findallbyid_62731_62880});
return obj62783;
})());

Object.defineProperty(obj_62677_target_62681_62864,"findAllByName",(function (){var obj62791 = ({"enumerable":false,"get":prop_get_fn_findallbyname_62738_62884});
return obj62791;
})());


return obj_62677;
});

//# sourceMappingURL=app.plugins.fonts.js.map
