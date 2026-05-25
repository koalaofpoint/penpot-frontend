import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.variant.js";
import "./app.common.geom.point.js";
import "./app.common.schema.js";
import "./app.common.types.color.js";
import "./app.common.types.component.js";
import "./app.common.types.file.js";
import "./app.common.types.typography.js";
import "./app.common.uuid.js";
import "./app.main.data.event.js";
import "./app.main.data.plugins.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.data.workspace.variants.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.plugins.format.js";
import "./app.plugins.parser.js";
import "./app.plugins.register.js";
import "./app.plugins.shape.js";
import "./app.plugins.text.js";
import "./app.plugins.tokens.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.plugins.library');
app.plugins.library.lib_color_proxy_QMARK_ = (function app$plugins$library$lib_color_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"LibraryColorProxy");
});
app.plugins.library.lib_color_proxy = (function app$plugins$library$lib_color_proxy(plugin_id,file_id,id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error("Assert failed: (uuid? file-id)"));
}

if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error("Assert failed: (uuid? id)"));
}

var obj_64182 = ({});
var to_string_64181 = (function (){
return "LibraryColorProxy";
});
var obj_64182_target_64186_65826 = obj_64182;
var prop_get_fn__64194_65827 = (function (){
var obj_64182_this_64185 = this;
var internal_fn__64188 = to_string_64181;
return internal_fn__64188.call(obj_64182_this_64185);
});
var prop_get_fn__64201_65828 = (function (){
var obj_64182_this_64185 = this;
var internal_fn__64195 = to_string_64181;
return internal_fn__64195.call(obj_64182_this_64185);
});
var prop_get_fn_plugin_64208_65829 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_plugin_64202 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_64202.call(obj_64182_this_64185);
});
var prop_get_fn_id_64215_65830 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_id_64209 = cljs.core.constantly(id);
return internal_fn_id_64209.call(obj_64182_this_64185);
});
var prop_get_fn_file_64222_65831 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_file_64216 = cljs.core.constantly(file_id);
return internal_fn_file_64216.call(obj_64182_this_64185);
});
var prop_get_fn_id_64229_65832 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_id_64223 = (function (){
return ""+(id ?? "");
});
return internal_fn_id_64223.call(obj_64182_this_64185);
});
var prop_get_fn_fileid_64236_65833 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_fileid_64230 = (function (){
return ""+(file_id ?? "");
});
return internal_fn_fileid_64230.call(obj_64182_this_64185);
});
var prop_get_fn_name_64243_65834 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_name_64237 = (function (p1__64151_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_color(p1__64151_SHARP_));
});
return internal_fn_name_64237.call(obj_64182_this_64185,obj_64182_this_64185);
});
var schema_name_64240_65835 = null;
var coercer_fn_name_64238_65836 = (((((!((schema_name_64240_65835 == null)))) && ((!(cljs.core.fn_QMARK_(schema_name_64240_65835))))))?app.common.schema.coercer(schema_name_64240_65835):null);
var decode_fn_name_64239_65837 = app.common.json.__GT_clj;
var prop_set_fn_name_64244_65838 = (function (val_name_64242){
var obj_64182_this_64185 = this;
var internal_fn_name_64237 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),"Plugin doesn't have 'library:write' permission");
} else {
var color = app.plugins.utils.proxy__GT_library_color(self);
var value__$1 = ""+(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(color),"") ?? "")+" / "+(value ?? "");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.rename_color(file_id,id,value__$1));

}
}
});
return internal_fn_name_64237.call(obj_64182_this_64185,obj_64182_this_64185,val_name_64242);
});
var prop_get_fn_path_64251_65839 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_path_64245 = (function (p1__64152_SHARP_){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_color(p1__64152_SHARP_));
});
return internal_fn_path_64245.call(obj_64182_this_64185,obj_64182_this_64185);
});
var schema_path_64248_65840 = null;
var coercer_fn_path_64246_65841 = (((((!((schema_path_64248_65840 == null)))) && ((!(cljs.core.fn_QMARK_(schema_path_64248_65840))))))?app.common.schema.coercer(schema_path_64248_65840):null);
var decode_fn_path_64247_65842 = app.common.json.__GT_clj;
var prop_set_fn_path_64252_65843 = (function (val_path_64250){
var obj_64182_this_64185 = this;
var internal_fn_path_64245 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"path","path",-188191168),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"path","path",-188191168),"Plugin doesn't have 'library:write' permission");
} else {
var color = cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_color(self),new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__64153_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64153_SHARP_)].join('');
}));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_color(color,file_id));

}
}
});
return internal_fn_path_64245.call(obj_64182_this_64185,obj_64182_this_64185,val_path_64250);
});
var prop_get_fn_color_64259_65844 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_color_64253 = (function (p1__64154_SHARP_){
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_color(p1__64154_SHARP_));
});
return internal_fn_color_64253.call(obj_64182_this_64185,obj_64182_this_64185);
});
var schema_color_64256_65845 = null;
var coercer_fn_color_64254_65846 = (((((!((schema_color_64256_65845 == null)))) && ((!(cljs.core.fn_QMARK_(schema_color_64256_65845))))))?app.common.schema.coercer(schema_color_64256_65845):null);
var decode_fn_color_64255_65847 = app.common.json.__GT_clj;
var prop_set_fn_color_64260_65848 = (function (val_color_64258){
var obj_64182_this_64185 = this;
var internal_fn_color_64253 = (function (self,value){
if((((!(typeof value === 'string'))) || ((!(app.common.types.color.valid_hex_color_QMARK_(value)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"color","color",1011675173),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"color","color",1011675173),"Plugin doesn't have 'library:write' permission");
} else {
var color = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_color(self),new cljs.core.Keyword(null,"color","color",1011675173),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_color_data(color,file_id));

}
}
});
return internal_fn_color_64253.call(obj_64182_this_64185,obj_64182_this_64185,val_color_64258);
});
var prop_get_fn_opacity_64267_65849 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_opacity_64261 = (function (p1__64155_SHARP_){
return new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_color(p1__64155_SHARP_));
});
return internal_fn_opacity_64261.call(obj_64182_this_64185,obj_64182_this_64185);
});
var schema_opacity_64264_65850 = null;
var coercer_fn_opacity_64262_65851 = (((((!((schema_opacity_64264_65850 == null)))) && ((!(cljs.core.fn_QMARK_(schema_opacity_64264_65850))))))?app.common.schema.coercer(schema_opacity_64264_65850):null);
var decode_fn_opacity_64263_65852 = app.common.json.__GT_clj;
var prop_set_fn_opacity_64268_65853 = (function (val_opacity_64266){
var obj_64182_this_64185 = this;
var internal_fn_opacity_64261 = (function (self,value){
if((((!(typeof value === 'number'))) || ((((value < (0))) || ((value > (1))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"opacity","opacity",397153780),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"opacity","opacity",397153780),"Plugin doesn't have 'library:write' permission");
} else {
var color = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_color(self),new cljs.core.Keyword(null,"opacity","opacity",397153780),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_color_data(color,file_id));

}
}
});
return internal_fn_opacity_64261.call(obj_64182_this_64185,obj_64182_this_64185,val_opacity_64266);
});
var prop_get_fn_gradient_64275_65854 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_gradient_64269 = (function (p1__64156_SHARP_){
return app.plugins.format.format_gradient(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_color(p1__64156_SHARP_)));
});
return internal_fn_gradient_64269.call(obj_64182_this_64185,obj_64182_this_64185);
});
var schema_gradient_64272_65855 = null;
var coercer_fn_gradient_64270_65856 = (((((!((schema_gradient_64272_65855 == null)))) && ((!(cljs.core.fn_QMARK_(schema_gradient_64272_65855))))))?app.common.schema.coercer(schema_gradient_64272_65855):null);
var decode_fn_gradient_64271_65857 = app.common.json.__GT_clj;
var prop_set_fn_gradient_64276_65858 = (function (val_gradient_64274){
var obj_64182_this_64185 = this;
var internal_fn_gradient_64269 = (function (self,value){
var value__$1 = app.plugins.parser.parse_gradient(value);
if(cljs.core.not(app.common.schema.validate(app.common.types.color.schema_COLON_gradient,value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"gradient","gradient",-1983908971),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"gradient","gradient",-1983908971),"Plugin doesn't have 'library:write' permission");
} else {
var color = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_color(self),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),value__$1);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_color_data(color,file_id));

}
}
});
return internal_fn_gradient_64269.call(obj_64182_this_64185,obj_64182_this_64185,val_gradient_64274);
});
var prop_get_fn_image_64283_65859 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_image_64277 = (function (p1__64157_SHARP_){
return app.plugins.format.format_image(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_color(p1__64157_SHARP_)));
});
return internal_fn_image_64277.call(obj_64182_this_64185,obj_64182_this_64185);
});
var schema_image_64280_65860 = null;
var coercer_fn_image_64278_65861 = (((((!((schema_image_64280_65860 == null)))) && ((!(cljs.core.fn_QMARK_(schema_image_64280_65860))))))?app.common.schema.coercer(schema_image_64280_65860):null);
var decode_fn_image_64279_65862 = app.common.json.__GT_clj;
var prop_set_fn_image_64284_65863 = (function (val_image_64282){
var obj_64182_this_64185 = this;
var internal_fn_image_64277 = (function (self,value){
var value__$1 = app.plugins.parser.parse_image_data(value);
if(cljs.core.not(app.common.schema.validate(app.common.types.color.schema_COLON_image,value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"image","image",-58725096),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"image","image",-58725096),"Plugin doesn't have 'library:write' permission");
} else {
var color = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_color(self),new cljs.core.Keyword(null,"image","image",-58725096),value__$1);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_color_data(color,file_id));

}
}
});
return internal_fn_image_64277.call(obj_64182_this_64185,obj_64182_this_64185,val_image_64282);
});
var schema_remove_64288_65864 = null;
var coercer_fn_remove_64286_65865 = (((((!((schema_remove_64288_65864 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_64288_65864))))))?app.common.schema.coercer(schema_remove_64288_65864):null);
var decode_fn_remove_64287_65866 = app.common.json.__GT_clj;
var prop_get_fn_remove_64291_65867 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_remove_64285 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"remove","remove",-131428414),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.delete_color(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));

}
});
var internal_fn_remove_64285__$1 = internal_fn_remove_64285.bind(obj_64182_this_64185);
return internal_fn_remove_64285__$1;
});
var schema_clone_64295_65868 = null;
var coercer_fn_clone_64293_65869 = (((((!((schema_clone_64295_65868 == null)))) && ((!(cljs.core.fn_QMARK_(schema_clone_64295_65868))))))?app.common.schema.coercer(schema_clone_64295_65868):null);
var decode_fn_clone_64294_65870 = app.common.json.__GT_clj;
var prop_get_fn_clone_64298_65871 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_clone_64292 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"clone","clone",711747572),"Plugin doesn't have 'library:write' permission");
} else {
var color_id = app.common.uuid.next();
var color = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.locate_library_color(file_id,id),new cljs.core.Keyword(null,"id","id",-1388402092),color_id);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_color.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rename?","rename?",-1728043099),false], null)));

return (app.plugins.library.lib_color_proxy.cljs$core$IFn$_invoke$arity$3 ? app.plugins.library.lib_color_proxy.cljs$core$IFn$_invoke$arity$3(plugin_id,id,color_id) : app.plugins.library.lib_color_proxy.call(null,plugin_id,id,color_id));

}
});
var internal_fn_clone_64292__$1 = internal_fn_clone_64292.bind(obj_64182_this_64185);
return internal_fn_clone_64292__$1;
});
var schema_asfill_64302_65872 = null;
var coercer_fn_asfill_64300_65873 = (((((!((schema_asfill_64302_65872 == null)))) && ((!(cljs.core.fn_QMARK_(schema_asfill_64302_65872))))))?app.common.schema.coercer(schema_asfill_64302_65872):null);
var decode_fn_asfill_64301_65874 = app.common.json.__GT_clj;
var prop_get_fn_asfill_64305_65875 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_asfill_64299 = (function (){
var color = app.plugins.utils.locate_library_color(file_id,id);
return app.plugins.format.format_fill(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),file_id,new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),id,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color)], null));
});
var internal_fn_asfill_64299__$1 = internal_fn_asfill_64299.bind(obj_64182_this_64185);
return internal_fn_asfill_64299__$1;
});
var schema_asstroke_64309_65876 = null;
var coercer_fn_asstroke_64307_65877 = (((((!((schema_asstroke_64309_65876 == null)))) && ((!(cljs.core.fn_QMARK_(schema_asstroke_64309_65876))))))?app.common.schema.coercer(schema_asstroke_64309_65876):null);
var decode_fn_asstroke_64308_65878 = app.common.json.__GT_clj;
var prop_get_fn_asstroke_64312_65879 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_asstroke_64306 = (function (){
var color = app.plugins.utils.locate_library_color(file_id,id);
return app.plugins.format.format_stroke(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260),new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279),file_id,new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761),id,new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),new cljs.core.Keyword(null,"inner","inner",-1383171215)], null));
});
var internal_fn_asstroke_64306__$1 = internal_fn_asstroke_64306.bind(obj_64182_this_64185);
return internal_fn_asstroke_64306__$1;
});
var schema_getplugindata_64316_65880 = null;
var coercer_fn_getplugindata_64314_65881 = (((((!((schema_getplugindata_64316_65880 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindata_64316_65880))))))?app.common.schema.coercer(schema_getplugindata_64316_65880):null);
var decode_fn_getplugindata_64315_65882 = app.common.json.__GT_clj;
var prop_get_fn_getplugindata_64319_65883 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_getplugindata_64313 = (function (key){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getPluginData-key","getPluginData-key",-1372143031),key);
} else {
var color = app.plugins.utils.locate_library_color(file_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id))),key);

}
});
var internal_fn_getplugindata_64313__$1 = internal_fn_getplugindata_64313.bind(obj_64182_this_64185);
return internal_fn_getplugindata_64313__$1;
});
var schema_setplugindata_64323_65884 = null;
var coercer_fn_setplugindata_64321_65885 = (((((!((schema_setplugindata_64323_65884 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setplugindata_64323_65884))))))?app.common.schema.coercer(schema_setplugindata_64323_65884):null);
var decode_fn_setplugindata_64322_65886 = app.common.json.__GT_clj;
var prop_get_fn_setplugindata_64326_65887 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_setplugindata_64320 = (function (key,value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-non-local-library","setPluginData-non-local-library",-839915494),file_id);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-key","setPluginData-key",437211756),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-value","setPluginData-value",281004073),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData","setPluginData",2049380387),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6(file_id,new cljs.core.Keyword(null,"color","color",1011675173),id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)),key,value));

}
}
}
}
});
var internal_fn_setplugindata_64320__$1 = internal_fn_setplugindata_64320.bind(obj_64182_this_64185);
return internal_fn_setplugindata_64320__$1;
});
var schema_getplugindatakeys_64330_65888 = null;
var coercer_fn_getplugindatakeys_64328_65889 = (((((!((schema_getplugindatakeys_64330_65888 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindatakeys_64330_65888))))))?app.common.schema.coercer(schema_getplugindatakeys_64330_65888):null);
var decode_fn_getplugindatakeys_64329_65890 = app.common.json.__GT_clj;
var prop_get_fn_getplugindatakeys_64333_65891 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_getplugindatakeys_64327 = (function (){
var color = app.plugins.utils.locate_library_color(file_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)))));
});
var internal_fn_getplugindatakeys_64327__$1 = internal_fn_getplugindatakeys_64327.bind(obj_64182_this_64185);
return internal_fn_getplugindatakeys_64327__$1;
});
var schema_getsharedplugindata_64337_65892 = null;
var coercer_fn_getsharedplugindata_64335_65893 = (((((!((schema_getsharedplugindata_64337_65892 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindata_64337_65892))))))?app.common.schema.coercer(schema_getsharedplugindata_64337_65892):null);
var decode_fn_getsharedplugindata_64336_65894 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindata_64340_65895 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_getsharedplugindata_64334 = (function (namespace,key){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginData-namespace","getSharedPluginData-namespace",823864288),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginData-key","getSharedPluginData-key",1393856585),key);
} else {
var color = app.plugins.utils.locate_library_color(file_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace)),key);

}
}
});
var internal_fn_getsharedplugindata_64334__$1 = internal_fn_getsharedplugindata_64334.bind(obj_64182_this_64185);
return internal_fn_getsharedplugindata_64334__$1;
});
var schema_setsharedplugindata_64344_65896 = null;
var coercer_fn_setsharedplugindata_64342_65897 = (((((!((schema_setsharedplugindata_64344_65896 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setsharedplugindata_64344_65896))))))?app.common.schema.coercer(schema_setsharedplugindata_64344_65896):null);
var decode_fn_setsharedplugindata_64343_65898 = app.common.json.__GT_clj;
var prop_get_fn_setsharedplugindata_64347_65899 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_setsharedplugindata_64341 = (function (namespace,key,value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-non-local-library","setSharedPluginData-non-local-library",331868634),file_id);
} else {
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-namespace","setSharedPluginData-namespace",807971852),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-key","setSharedPluginData-key",-1257676988),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-value","setSharedPluginData-value",1942190613),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData","setSharedPluginData",-324251591),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6(file_id,new cljs.core.Keyword(null,"color","color",1011675173),id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace),key,value));

}
}
}
}
}
});
var internal_fn_setsharedplugindata_64341__$1 = internal_fn_setsharedplugindata_64341.bind(obj_64182_this_64185);
return internal_fn_setsharedplugindata_64341__$1;
});
var schema_getsharedplugindatakeys_64351_65900 = null;
var coercer_fn_getsharedplugindatakeys_64349_65901 = (((((!((schema_getsharedplugindatakeys_64351_65900 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindatakeys_64351_65900))))))?app.common.schema.coercer(schema_getsharedplugindatakeys_64351_65900):null);
var decode_fn_getsharedplugindatakeys_64350_65902 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindatakeys_64354_65903 = (function (){
var obj_64182_this_64185 = this;
var internal_fn_getsharedplugindatakeys_64348 = (function (namespace){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginDataKeys-namespace","getSharedPluginDataKeys-namespace",207404581),namespace);
} else {
var color = app.plugins.utils.locate_library_color(file_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace))));

}
});
var internal_fn_getsharedplugindatakeys_64348__$1 = internal_fn_getsharedplugindatakeys_64348.bind(obj_64182_this_64185);
return internal_fn_getsharedplugindatakeys_64348__$1;
});
Object.defineProperty(obj_64182_target_64186_65826,Symbol.toStringTag,(function (){var obj64760 = ({"enumerable":false,"get":prop_get_fn__64194_65827});
return obj64760;
})());

Object.defineProperty(obj_64182_target_64186_65826,Symbol["for"]("penpot.reify:type"),(function (){var obj64762 = ({"enumerable":false,"get":prop_get_fn__64201_65828});
return obj64762;
})());

Object.defineProperty(obj_64182_target_64186_65826,"$plugin",(function (){var obj64764 = ({"enumerable":false,"get":prop_get_fn_plugin_64208_65829});
return obj64764;
})());

Object.defineProperty(obj_64182_target_64186_65826,"$id",(function (){var obj64766 = ({"enumerable":false,"get":prop_get_fn_id_64215_65830});
return obj64766;
})());

Object.defineProperty(obj_64182_target_64186_65826,"$file",(function (){var obj64768 = ({"enumerable":false,"get":prop_get_fn_file_64222_65831});
return obj64768;
})());

Object.defineProperty(obj_64182_target_64186_65826,"id",(function (){var obj64770 = ({"enumerable":true,"get":prop_get_fn_id_64229_65832});
return obj64770;
})());

Object.defineProperty(obj_64182_target_64186_65826,"fileId",(function (){var obj64772 = ({"enumerable":true,"get":prop_get_fn_fileid_64236_65833});
return obj64772;
})());

Object.defineProperty(obj_64182_target_64186_65826,"name",(function (){var obj64774 = ({"enumerable":true,"get":prop_get_fn_name_64243_65834,"set":prop_set_fn_name_64244_65838});
return obj64774;
})());

Object.defineProperty(obj_64182_target_64186_65826,"path",(function (){var obj64776 = ({"enumerable":true,"get":prop_get_fn_path_64251_65839,"set":prop_set_fn_path_64252_65843});
return obj64776;
})());

Object.defineProperty(obj_64182_target_64186_65826,"color",(function (){var obj64778 = ({"enumerable":true,"get":prop_get_fn_color_64259_65844,"set":prop_set_fn_color_64260_65848});
return obj64778;
})());

Object.defineProperty(obj_64182_target_64186_65826,"opacity",(function (){var obj64780 = ({"enumerable":true,"get":prop_get_fn_opacity_64267_65849,"set":prop_set_fn_opacity_64268_65853});
return obj64780;
})());

Object.defineProperty(obj_64182_target_64186_65826,"gradient",(function (){var obj64782 = ({"enumerable":true,"get":prop_get_fn_gradient_64275_65854,"set":prop_set_fn_gradient_64276_65858});
return obj64782;
})());

Object.defineProperty(obj_64182_target_64186_65826,"image",(function (){var obj64784 = ({"enumerable":true,"get":prop_get_fn_image_64283_65859,"set":prop_set_fn_image_64284_65863});
return obj64784;
})());

Object.defineProperty(obj_64182_target_64186_65826,"remove",(function (){var obj64786 = ({"enumerable":false,"get":prop_get_fn_remove_64291_65867});
return obj64786;
})());

Object.defineProperty(obj_64182_target_64186_65826,"clone",(function (){var obj64788 = ({"enumerable":false,"get":prop_get_fn_clone_64298_65871});
return obj64788;
})());

Object.defineProperty(obj_64182_target_64186_65826,"asFill",(function (){var obj64790 = ({"enumerable":false,"get":prop_get_fn_asfill_64305_65875});
return obj64790;
})());

Object.defineProperty(obj_64182_target_64186_65826,"asStroke",(function (){var obj64792 = ({"enumerable":false,"get":prop_get_fn_asstroke_64312_65879});
return obj64792;
})());

Object.defineProperty(obj_64182_target_64186_65826,"getPluginData",(function (){var obj64794 = ({"enumerable":false,"get":prop_get_fn_getplugindata_64319_65883});
return obj64794;
})());

Object.defineProperty(obj_64182_target_64186_65826,"setPluginData",(function (){var obj64796 = ({"enumerable":false,"get":prop_get_fn_setplugindata_64326_65887});
return obj64796;
})());

Object.defineProperty(obj_64182_target_64186_65826,"getPluginDataKeys",(function (){var obj64798 = ({"enumerable":false,"get":prop_get_fn_getplugindatakeys_64333_65891});
return obj64798;
})());

Object.defineProperty(obj_64182_target_64186_65826,"getSharedPluginData",(function (){var obj64800 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindata_64340_65895});
return obj64800;
})());

Object.defineProperty(obj_64182_target_64186_65826,"setSharedPluginData",(function (){var obj64802 = ({"enumerable":false,"get":prop_get_fn_setsharedplugindata_64347_65899});
return obj64802;
})());

Object.defineProperty(obj_64182_target_64186_65826,"getSharedPluginDataKeys",(function (){var obj64804 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindatakeys_64354_65903});
return obj64804;
})());


return obj_64182;
});
app.plugins.library.lib_typography_proxy_QMARK_ = (function app$plugins$library$lib_typography_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"LibraryTypographyProxy");
});
app.plugins.library.lib_typography_proxy = (function app$plugins$library$lib_typography_proxy(plugin_id,file_id,id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error("Assert failed: (uuid? file-id)"));
}

if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error("Assert failed: (uuid? id)"));
}

var obj_64820 = ({});
var to_string_64819 = (function (){
return "LibraryTypographyProxy";
});
var obj_64820_target_64824_65904 = obj_64820;
var prop_get_fn__64832_65905 = (function (){
var obj_64820_this_64823 = this;
var internal_fn__64826 = to_string_64819;
return internal_fn__64826.call(obj_64820_this_64823);
});
var prop_get_fn__64839_65906 = (function (){
var obj_64820_this_64823 = this;
var internal_fn__64833 = to_string_64819;
return internal_fn__64833.call(obj_64820_this_64823);
});
var prop_get_fn_plugin_64846_65907 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_plugin_64840 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_64840.call(obj_64820_this_64823);
});
var prop_get_fn_id_64853_65908 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_id_64847 = cljs.core.constantly(id);
return internal_fn_id_64847.call(obj_64820_this_64823);
});
var prop_get_fn_file_64860_65909 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_file_64854 = cljs.core.constantly(file_id);
return internal_fn_file_64854.call(obj_64820_this_64823);
});
var prop_get_fn_id_64867_65910 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_id_64861 = (function (){
return ""+(id ?? "");
});
return internal_fn_id_64861.call(obj_64820_this_64823);
});
var prop_get_fn_name_64874_65911 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_name_64868 = (function (p1__64805_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64805_SHARP_));
});
return internal_fn_name_64868.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_name_64871_65912 = null;
var coercer_fn_name_64869_65913 = (((((!((schema_name_64871_65912 == null)))) && ((!(cljs.core.fn_QMARK_(schema_name_64871_65912))))))?app.common.schema.coercer(schema_name_64871_65912):null);
var decode_fn_name_64870_65914 = app.common.json.__GT_clj;
var prop_set_fn_name_64875_65915 = (function (val_name_64873){
var obj_64820_this_64823 = this;
var internal_fn_name_64868 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),"Plugin doesn't have 'library:write' permission");
} else {
var typo = app.plugins.utils.proxy__GT_library_typography(self);
var value__$1 = ""+(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(typo),"") ?? "")+" / "+(value ?? "");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.rename_typography(file_id,id,value__$1));

}
}
});
return internal_fn_name_64868.call(obj_64820_this_64823,obj_64820_this_64823,val_name_64873);
});
var prop_get_fn_path_64882_65916 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_path_64876 = (function (p1__64806_SHARP_){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64806_SHARP_));
});
return internal_fn_path_64876.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_path_64879_65917 = null;
var coercer_fn_path_64877_65918 = (((((!((schema_path_64879_65917 == null)))) && ((!(cljs.core.fn_QMARK_(schema_path_64879_65917))))))?app.common.schema.coercer(schema_path_64879_65917):null);
var decode_fn_path_64878_65919 = app.common.json.__GT_clj;
var prop_set_fn_path_64883_65920 = (function (val_path_64881){
var obj_64820_this_64823 = this;
var internal_fn_path_64876 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"path","path",-188191168),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"path","path",-188191168),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__64807_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64807_SHARP_)].join('');
}));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_path_64876.call(obj_64820_this_64823,obj_64820_this_64823,val_path_64881);
});
var prop_get_fn_fontid_64890_65921 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_fontid_64884 = (function (p1__64808_SHARP_){
return new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64808_SHARP_));
});
return internal_fn_fontid_64884.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_fontid_64887_65922 = null;
var coercer_fn_fontid_64885_65923 = (((((!((schema_fontid_64887_65922 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontid_64887_65922))))))?app.common.schema.coercer(schema_fontid_64887_65922):null);
var decode_fn_fontid_64886_65924 = app.common.json.__GT_clj;
var prop_set_fn_fontid_64891_65925 = (function (val_fontid_64889){
var obj_64820_this_64823 = this;
var internal_fn_fontid_64884 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontId","fontId",-474874285),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontId","fontId",-474874285),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"font-id","font-id",-390084123),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_fontid_64884.call(obj_64820_this_64823,obj_64820_this_64823,val_fontid_64889);
});
var prop_get_fn_fontfamily_64898_65926 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_fontfamily_64892 = (function (p1__64809_SHARP_){
return new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64809_SHARP_));
});
return internal_fn_fontfamily_64892.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_fontfamily_64895_65927 = null;
var coercer_fn_fontfamily_64893_65928 = (((((!((schema_fontfamily_64895_65927 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontfamily_64895_65927))))))?app.common.schema.coercer(schema_fontfamily_64895_65927):null);
var decode_fn_fontfamily_64894_65929 = app.common.json.__GT_clj;
var prop_set_fn_fontfamily_64899_65930 = (function (val_fontfamily_64897){
var obj_64820_this_64823 = this;
var internal_fn_fontfamily_64892 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"font-family","font-family",-667419874),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_fontfamily_64892.call(obj_64820_this_64823,obj_64820_this_64823,val_fontfamily_64897);
});
var prop_get_fn_fontvariantid_64906_65931 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_fontvariantid_64900 = (function (p1__64810_SHARP_){
return new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64810_SHARP_));
});
return internal_fn_fontvariantid_64900.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_fontvariantid_64903_65932 = null;
var coercer_fn_fontvariantid_64901_65933 = (((((!((schema_fontvariantid_64903_65932 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontvariantid_64903_65932))))))?app.common.schema.coercer(schema_fontvariantid_64903_65932):null);
var decode_fn_fontvariantid_64902_65934 = app.common.json.__GT_clj;
var prop_set_fn_fontvariantid_64907_65935 = (function (val_fontvariantid_64905){
var obj_64820_this_64823 = this;
var internal_fn_fontvariantid_64900 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontVariantId","fontVariantId",-598111105),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontVariantId","fontVariantId",-598111105),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_fontvariantid_64900.call(obj_64820_this_64823,obj_64820_this_64823,val_fontvariantid_64905);
});
var prop_get_fn_fontsize_64914_65936 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_fontsize_64908 = (function (p1__64811_SHARP_){
return new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64811_SHARP_));
});
return internal_fn_fontsize_64908.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_fontsize_64911_65937 = null;
var coercer_fn_fontsize_64909_65938 = (((((!((schema_fontsize_64911_65937 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontsize_64911_65937))))))?app.common.schema.coercer(schema_fontsize_64911_65937):null);
var decode_fn_fontsize_64910_65939 = app.common.json.__GT_clj;
var prop_set_fn_fontsize_64915_65940 = (function (val_fontsize_64913){
var obj_64820_this_64823 = this;
var internal_fn_fontsize_64908 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontSize","fontSize",919623033),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_fontsize_64908.call(obj_64820_this_64823,obj_64820_this_64823,val_fontsize_64913);
});
var prop_get_fn_fontweight_64922_65941 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_fontweight_64916 = (function (p1__64812_SHARP_){
return new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64812_SHARP_));
});
return internal_fn_fontweight_64916.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_fontweight_64919_65942 = null;
var coercer_fn_fontweight_64917_65943 = (((((!((schema_fontweight_64919_65942 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontweight_64919_65942))))))?app.common.schema.coercer(schema_fontweight_64919_65942):null);
var decode_fn_fontweight_64918_65944 = app.common.json.__GT_clj;
var prop_set_fn_fontweight_64923_65945 = (function (val_fontweight_64921){
var obj_64820_this_64823 = this;
var internal_fn_fontweight_64916 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_fontweight_64916.call(obj_64820_this_64823,obj_64820_this_64823,val_fontweight_64921);
});
var prop_get_fn_fontstyle_64930_65946 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_fontstyle_64924 = (function (p1__64813_SHARP_){
return new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64813_SHARP_));
});
return internal_fn_fontstyle_64924.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_fontstyle_64927_65947 = null;
var coercer_fn_fontstyle_64925_65948 = (((((!((schema_fontstyle_64927_65947 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fontstyle_64927_65947))))))?app.common.schema.coercer(schema_fontstyle_64927_65947):null);
var decode_fn_fontstyle_64926_65949 = app.common.json.__GT_clj;
var prop_set_fn_fontstyle_64931_65950 = (function (val_fontstyle_64929){
var obj_64820_this_64823 = this;
var internal_fn_fontstyle_64924 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"font-style","font-style",-773672352),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_fontstyle_64924.call(obj_64820_this_64823,obj_64820_this_64823,val_fontstyle_64929);
});
var prop_get_fn_lineheight_64938_65951 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_lineheight_64932 = (function (p1__64814_SHARP_){
return new cljs.core.Keyword(null,"font-height","font-height",49078273).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64814_SHARP_));
});
return internal_fn_lineheight_64932.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_lineheight_64935_65952 = null;
var coercer_fn_lineheight_64933_65953 = (((((!((schema_lineheight_64935_65952 == null)))) && ((!(cljs.core.fn_QMARK_(schema_lineheight_64935_65952))))))?app.common.schema.coercer(schema_lineheight_64935_65952):null);
var decode_fn_lineheight_64934_65954 = app.common.json.__GT_clj;
var prop_set_fn_lineheight_64939_65955 = (function (val_lineheight_64937){
var obj_64820_this_64823 = this;
var internal_fn_lineheight_64932 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"font-height","font-height",49078273),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_lineheight_64932.call(obj_64820_this_64823,obj_64820_this_64823,val_lineheight_64937);
});
var prop_get_fn_letterspacing_64946_65956 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_letterspacing_64940 = (function (p1__64815_SHARP_){
return new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64815_SHARP_));
});
return internal_fn_letterspacing_64940.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_letterspacing_64943_65957 = null;
var coercer_fn_letterspacing_64941_65958 = (((((!((schema_letterspacing_64943_65957 == null)))) && ((!(cljs.core.fn_QMARK_(schema_letterspacing_64943_65957))))))?app.common.schema.coercer(schema_letterspacing_64943_65957):null);
var decode_fn_letterspacing_64942_65959 = app.common.json.__GT_clj;
var prop_set_fn_letterspacing_64947_65960 = (function (val_letterspacing_64945){
var obj_64820_this_64823 = this;
var internal_fn_letterspacing_64940 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"letterSpacing","letterSpacing",-1331934989),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"letterSpacing","letterSpacing",-1331934989),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_letterspacing_64940.call(obj_64820_this_64823,obj_64820_this_64823,val_letterspacing_64945);
});
var prop_get_fn_texttransform_64954_65961 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_texttransform_64948 = (function (p1__64816_SHARP_){
return new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_typography(p1__64816_SHARP_));
});
return internal_fn_texttransform_64948.call(obj_64820_this_64823,obj_64820_this_64823);
});
var schema_texttransform_64951_65962 = null;
var coercer_fn_texttransform_64949_65963 = (((((!((schema_texttransform_64951_65962 == null)))) && ((!(cljs.core.fn_QMARK_(schema_texttransform_64951_65962))))))?app.common.schema.coercer(schema_texttransform_64951_65962):null);
var decode_fn_texttransform_64950_65964 = app.common.json.__GT_clj;
var prop_set_fn_texttransform_64955_65965 = (function (val_texttransform_64953){
var obj_64820_this_64823 = this;
var internal_fn_texttransform_64948 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textTransform","textTransform",-1959669529),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"textTransform","textTransform",-1959669529),"Plugin doesn't have 'library:write' permission");
} else {
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.proxy__GT_library_typography(self),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(typo,file_id));

}
}
});
return internal_fn_texttransform_64948.call(obj_64820_this_64823,obj_64820_this_64823,val_texttransform_64953);
});
var schema_remove_64959_65966 = null;
var coercer_fn_remove_64957_65967 = (((((!((schema_remove_64959_65966 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_64959_65966))))))?app.common.schema.coercer(schema_remove_64959_65966):null);
var decode_fn_remove_64958_65968 = app.common.json.__GT_clj;
var prop_get_fn_remove_64962_65969 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_remove_64956 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"remove","remove",-131428414),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.delete_typography(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));

}
});
var internal_fn_remove_64956__$1 = internal_fn_remove_64956.bind(obj_64820_this_64823);
return internal_fn_remove_64956__$1;
});
var schema_clone_64966_65970 = null;
var coercer_fn_clone_64964_65971 = (((((!((schema_clone_64966_65970 == null)))) && ((!(cljs.core.fn_QMARK_(schema_clone_64966_65970))))))?app.common.schema.coercer(schema_clone_64966_65970):null);
var decode_fn_clone_64965_65972 = app.common.json.__GT_clj;
var prop_get_fn_clone_64969_65973 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_clone_64963 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"clone","clone",711747572),"Plugin doesn't have 'library:write' permission");
} else {
var typo_id = app.common.uuid.next();
var typo = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.plugins.utils.locate_library_typography(file_id,id),new cljs.core.Keyword(null,"id","id",-1388402092),typo_id);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_typography.cljs$core$IFn$_invoke$arity$2(typo,false));

return (app.plugins.library.lib_typography_proxy.cljs$core$IFn$_invoke$arity$3 ? app.plugins.library.lib_typography_proxy.cljs$core$IFn$_invoke$arity$3(plugin_id,id,typo_id) : app.plugins.library.lib_typography_proxy.call(null,plugin_id,id,typo_id));

}
});
var internal_fn_clone_64963__$1 = internal_fn_clone_64963.bind(obj_64820_this_64823);
return internal_fn_clone_64963__$1;
});
var schema_applytotext_64973_65974 = null;
var coercer_fn_applytotext_64971_65975 = (((((!((schema_applytotext_64973_65974 == null)))) && ((!(cljs.core.fn_QMARK_(schema_applytotext_64973_65974))))))?app.common.schema.coercer(schema_applytotext_64973_65974):null);
var decode_fn_applytotext_64972_65976 = app.common.json.__GT_clj;
var prop_get_fn_applytotext_64976_65977 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_applytotext_64970 = (function (shape){
if((!(app.plugins.shape.shape_proxy_QMARK_(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToText","applyToText",-2123120633),shape);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToText","applyToText",-2123120633),"Plugin doesn't have 'content:write' permission");
} else {
var shape_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(shape,"$id");
var typography = app.plugins.utils.locate_library_typography(file_id,id);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.apply_typography.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([shape_id]),typography,file_id));

}
}
});
var internal_fn_applytotext_64970__$1 = internal_fn_applytotext_64970.bind(obj_64820_this_64823);
return internal_fn_applytotext_64970__$1;
});
var schema_applytotextrange_64980_65978 = null;
var coercer_fn_applytotextrange_64978_65979 = (((((!((schema_applytotextrange_64980_65978 == null)))) && ((!(cljs.core.fn_QMARK_(schema_applytotextrange_64980_65978))))))?app.common.schema.coercer(schema_applytotextrange_64980_65978):null);
var decode_fn_applytotextrange_64979_65980 = app.common.json.__GT_clj;
var prop_get_fn_applytotextrange_64983_65981 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_applytotextrange_64977 = (function (range){
if((!(app.plugins.text.text_range_proxy_QMARK_(range)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToText","applyToText",-2123120633),range);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToText","applyToText",-2123120633),"Plugin doesn't have 'content:write' permission");
} else {
var shape_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(range,"$id");
var start = app.util.object.get.cljs$core$IFn$_invoke$arity$2(range,"start");
var end = app.util.object.get.cljs$core$IFn$_invoke$arity$2(range,"end");
var typography = app.plugins.utils.locate_library_typography(file_id,id);
var attrs = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(typography,new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),file_id),new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_range(shape_id,start,end,attrs));

}
}
});
var internal_fn_applytotextrange_64977__$1 = internal_fn_applytotextrange_64977.bind(obj_64820_this_64823);
return internal_fn_applytotextrange_64977__$1;
});
var schema_getplugindata_64987_65982 = null;
var coercer_fn_getplugindata_64985_65983 = (((((!((schema_getplugindata_64987_65982 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindata_64987_65982))))))?app.common.schema.coercer(schema_getplugindata_64987_65982):null);
var decode_fn_getplugindata_64986_65984 = app.common.json.__GT_clj;
var prop_get_fn_getplugindata_64990_65985 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_getplugindata_64984 = (function (key){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"typography-plugin-data-key","typography-plugin-data-key",1398110804),key);
} else {
var typography = app.plugins.utils.locate_library_typography(file_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(typography,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id))),key);

}
});
var internal_fn_getplugindata_64984__$1 = internal_fn_getplugindata_64984.bind(obj_64820_this_64823);
return internal_fn_getplugindata_64984__$1;
});
var schema_setplugindata_64994_65986 = null;
var coercer_fn_setplugindata_64992_65987 = (((((!((schema_setplugindata_64994_65986 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setplugindata_64994_65986))))))?app.common.schema.coercer(schema_setplugindata_64994_65986):null);
var decode_fn_setplugindata_64993_65988 = app.common.json.__GT_clj;
var prop_get_fn_setplugindata_64997_65989 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_setplugindata_64991 = (function (key,value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-non-local-library","setPluginData-non-local-library",-839915494),file_id);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-key","setPluginData-key",437211756),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-value","setPluginData-value",281004073),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData","setPluginData",2049380387),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6(file_id,new cljs.core.Keyword(null,"typography","typography",-399568138),id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)),key,value));

}
}
}
}
});
var internal_fn_setplugindata_64991__$1 = internal_fn_setplugindata_64991.bind(obj_64820_this_64823);
return internal_fn_setplugindata_64991__$1;
});
var schema_getplugindatakeys_65001_65990 = null;
var coercer_fn_getplugindatakeys_64999_65991 = (((((!((schema_getplugindatakeys_65001_65990 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindatakeys_65001_65990))))))?app.common.schema.coercer(schema_getplugindatakeys_65001_65990):null);
var decode_fn_getplugindatakeys_65000_65992 = app.common.json.__GT_clj;
var prop_get_fn_getplugindatakeys_65004_65993 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_getplugindatakeys_64998 = (function (){
var typography = app.plugins.utils.locate_library_typography(file_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(typography,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)))));
});
var internal_fn_getplugindatakeys_64998__$1 = internal_fn_getplugindatakeys_64998.bind(obj_64820_this_64823);
return internal_fn_getplugindatakeys_64998__$1;
});
var schema_getsharedplugindata_65008_65994 = null;
var coercer_fn_getsharedplugindata_65006_65995 = (((((!((schema_getsharedplugindata_65008_65994 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindata_65008_65994))))))?app.common.schema.coercer(schema_getsharedplugindata_65008_65994):null);
var decode_fn_getsharedplugindata_65007_65996 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindata_65011_65997 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_getsharedplugindata_65005 = (function (namespace,key){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginData-namespace","getSharedPluginData-namespace",823864288),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginData-key","getSharedPluginData-key",1393856585),key);
} else {
var typography = app.plugins.utils.locate_library_typography(file_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(typography,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace)),key);

}
}
});
var internal_fn_getsharedplugindata_65005__$1 = internal_fn_getsharedplugindata_65005.bind(obj_64820_this_64823);
return internal_fn_getsharedplugindata_65005__$1;
});
var schema_setsharedplugindata_65015_65998 = null;
var coercer_fn_setsharedplugindata_65013_65999 = (((((!((schema_setsharedplugindata_65015_65998 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setsharedplugindata_65015_65998))))))?app.common.schema.coercer(schema_setsharedplugindata_65015_65998):null);
var decode_fn_setsharedplugindata_65014_66000 = app.common.json.__GT_clj;
var prop_get_fn_setsharedplugindata_65018_66001 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_setsharedplugindata_65012 = (function (namespace,key,value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-non-local-library","setSharedPluginData-non-local-library",331868634),file_id);
} else {
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-namespace","setSharedPluginData-namespace",807971852),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-key","setSharedPluginData-key",-1257676988),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-value","setSharedPluginData-value",1942190613),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData","setSharedPluginData",-324251591),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6(file_id,new cljs.core.Keyword(null,"typography","typography",-399568138),id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace),key,value));

}
}
}
}
}
});
var internal_fn_setsharedplugindata_65012__$1 = internal_fn_setsharedplugindata_65012.bind(obj_64820_this_64823);
return internal_fn_setsharedplugindata_65012__$1;
});
var schema_getsharedplugindatakeys_65022_66002 = null;
var coercer_fn_getsharedplugindatakeys_65020_66003 = (((((!((schema_getsharedplugindatakeys_65022_66002 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindatakeys_65022_66002))))))?app.common.schema.coercer(schema_getsharedplugindatakeys_65022_66002):null);
var decode_fn_getsharedplugindatakeys_65021_66004 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindatakeys_65025_66005 = (function (){
var obj_64820_this_64823 = this;
var internal_fn_getsharedplugindatakeys_65019 = (function (namespace){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginDataKeys-namespace","getSharedPluginDataKeys-namespace",207404581),namespace);
} else {
var typography = app.plugins.utils.locate_library_typography(file_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(typography,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace))));

}
});
var internal_fn_getsharedplugindatakeys_65019__$1 = internal_fn_getsharedplugindatakeys_65019.bind(obj_64820_this_64823);
return internal_fn_getsharedplugindatakeys_65019__$1;
});
Object.defineProperty(obj_64820_target_64824_65904,Symbol.toStringTag,(function (){var obj65029 = ({"enumerable":false,"get":prop_get_fn__64832_65905});
return obj65029;
})());

Object.defineProperty(obj_64820_target_64824_65904,Symbol["for"]("penpot.reify:type"),(function (){var obj65031 = ({"enumerable":false,"get":prop_get_fn__64839_65906});
return obj65031;
})());

Object.defineProperty(obj_64820_target_64824_65904,"$plugin",(function (){var obj65033 = ({"enumerable":false,"get":prop_get_fn_plugin_64846_65907});
return obj65033;
})());

Object.defineProperty(obj_64820_target_64824_65904,"$id",(function (){var obj65035 = ({"enumerable":false,"get":prop_get_fn_id_64853_65908});
return obj65035;
})());

Object.defineProperty(obj_64820_target_64824_65904,"$file",(function (){var obj65037 = ({"enumerable":false,"get":prop_get_fn_file_64860_65909});
return obj65037;
})());

Object.defineProperty(obj_64820_target_64824_65904,"id",(function (){var obj65039 = ({"enumerable":true,"get":prop_get_fn_id_64867_65910});
return obj65039;
})());

Object.defineProperty(obj_64820_target_64824_65904,"name",(function (){var obj65041 = ({"enumerable":true,"get":prop_get_fn_name_64874_65911,"set":prop_set_fn_name_64875_65915});
return obj65041;
})());

Object.defineProperty(obj_64820_target_64824_65904,"path",(function (){var obj65043 = ({"enumerable":true,"get":prop_get_fn_path_64882_65916,"set":prop_set_fn_path_64883_65920});
return obj65043;
})());

Object.defineProperty(obj_64820_target_64824_65904,"fontId",(function (){var obj65045 = ({"enumerable":true,"get":prop_get_fn_fontid_64890_65921,"set":prop_set_fn_fontid_64891_65925});
return obj65045;
})());

Object.defineProperty(obj_64820_target_64824_65904,"fontFamily",(function (){var obj65047 = ({"enumerable":true,"get":prop_get_fn_fontfamily_64898_65926,"set":prop_set_fn_fontfamily_64899_65930});
return obj65047;
})());

Object.defineProperty(obj_64820_target_64824_65904,"fontVariantId",(function (){var obj65049 = ({"enumerable":true,"get":prop_get_fn_fontvariantid_64906_65931,"set":prop_set_fn_fontvariantid_64907_65935});
return obj65049;
})());

Object.defineProperty(obj_64820_target_64824_65904,"fontSize",(function (){var obj65051 = ({"enumerable":true,"get":prop_get_fn_fontsize_64914_65936,"set":prop_set_fn_fontsize_64915_65940});
return obj65051;
})());

Object.defineProperty(obj_64820_target_64824_65904,"fontWeight",(function (){var obj65053 = ({"enumerable":true,"get":prop_get_fn_fontweight_64922_65941,"set":prop_set_fn_fontweight_64923_65945});
return obj65053;
})());

Object.defineProperty(obj_64820_target_64824_65904,"fontStyle",(function (){var obj65055 = ({"enumerable":true,"get":prop_get_fn_fontstyle_64930_65946,"set":prop_set_fn_fontstyle_64931_65950});
return obj65055;
})());

Object.defineProperty(obj_64820_target_64824_65904,"lineHeight",(function (){var obj65057 = ({"enumerable":true,"get":prop_get_fn_lineheight_64938_65951,"set":prop_set_fn_lineheight_64939_65955});
return obj65057;
})());

Object.defineProperty(obj_64820_target_64824_65904,"letterSpacing",(function (){var obj65059 = ({"enumerable":true,"get":prop_get_fn_letterspacing_64946_65956,"set":prop_set_fn_letterspacing_64947_65960});
return obj65059;
})());

Object.defineProperty(obj_64820_target_64824_65904,"textTransform",(function (){var obj65061 = ({"enumerable":true,"get":prop_get_fn_texttransform_64954_65961,"set":prop_set_fn_texttransform_64955_65965});
return obj65061;
})());

Object.defineProperty(obj_64820_target_64824_65904,"remove",(function (){var obj65063 = ({"enumerable":false,"get":prop_get_fn_remove_64962_65969});
return obj65063;
})());

Object.defineProperty(obj_64820_target_64824_65904,"clone",(function (){var obj65065 = ({"enumerable":false,"get":prop_get_fn_clone_64969_65973});
return obj65065;
})());

Object.defineProperty(obj_64820_target_64824_65904,"applyToText",(function (){var obj65067 = ({"enumerable":false,"get":prop_get_fn_applytotext_64976_65977});
return obj65067;
})());

Object.defineProperty(obj_64820_target_64824_65904,"applyToTextRange",(function (){var obj65069 = ({"enumerable":false,"get":prop_get_fn_applytotextrange_64983_65981});
return obj65069;
})());

Object.defineProperty(obj_64820_target_64824_65904,"getPluginData",(function (){var obj65071 = ({"enumerable":false,"get":prop_get_fn_getplugindata_64990_65985});
return obj65071;
})());

Object.defineProperty(obj_64820_target_64824_65904,"setPluginData",(function (){var obj65073 = ({"enumerable":false,"get":prop_get_fn_setplugindata_64997_65989});
return obj65073;
})());

Object.defineProperty(obj_64820_target_64824_65904,"getPluginDataKeys",(function (){var obj65075 = ({"enumerable":false,"get":prop_get_fn_getplugindatakeys_65004_65993});
return obj65075;
})());

Object.defineProperty(obj_64820_target_64824_65904,"getSharedPluginData",(function (){var obj65077 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindata_65011_65997});
return obj65077;
})());

Object.defineProperty(obj_64820_target_64824_65904,"setSharedPluginData",(function (){var obj65079 = ({"enumerable":false,"get":prop_get_fn_setsharedplugindata_65018_66001});
return obj65079;
})());

Object.defineProperty(obj_64820_target_64824_65904,"getSharedPluginDataKeys",(function (){var obj65081 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindatakeys_65025_66005});
return obj65081;
})());


return obj_64820;
});
app.plugins.library.get_variant_components = (function app$plugins$library$get_variant_components(file_id,variant_id){
return app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_file(file_id)),variant_id);
});
app.plugins.library.variant_proxy = (function app$plugins$library$variant_proxy(plugin_id,file_id,id){
var obj_65089 = ({});
var to_string_65088 = (function (){
return "VariantProxy";
});
var obj_65089_target_65097_66006 = obj_65089;
var prop_get_fn__65112_66007 = (function (){
var obj_65089_this_65095 = this;
var internal_fn__65100 = to_string_65088;
return internal_fn__65100.call(obj_65089_this_65095);
});
var prop_get_fn__65126_66008 = (function (){
var obj_65089_this_65095 = this;
var internal_fn__65114 = to_string_65088;
return internal_fn__65114.call(obj_65089_this_65095);
});
var prop_get_fn_plugin_65140_66009 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_plugin_65128 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_65128.call(obj_65089_this_65095);
});
var prop_get_fn_file_65155_66010 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_file_65149 = cljs.core.constantly(file_id);
return internal_fn_file_65149.call(obj_65089_this_65095);
});
var prop_get_fn_id_65163_66011 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_id_65156 = cljs.core.constantly(id);
return internal_fn_id_65156.call(obj_65089_this_65095);
});
var prop_get_fn_id_65170_66012 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_id_65164 = (function (){
return ""+(id ?? "");
});
return internal_fn_id_65164.call(obj_65089_this_65095);
});
var prop_get_fn_libraryid_65177_66013 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_libraryid_65171 = (function (){
return ""+(file_id ?? "");
});
return internal_fn_libraryid_65171.call(obj_65089_this_65095);
});
var prop_get_fn_properties_65184_66014 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_properties_65178 = (function (_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.plugins.library.get_variant_components(file_id,id)], 0)))));
});
return internal_fn_properties_65178.call(obj_65089_this_65095,obj_65089_this_65095);
});
var schema_currentvalues_65188_66015 = null;
var coercer_fn_currentvalues_65186_66016 = (((((!((schema_currentvalues_65188_66015 == null)))) && ((!(cljs.core.fn_QMARK_(schema_currentvalues_65188_66015))))))?app.common.schema.coercer(schema_currentvalues_65188_66015):null);
var decode_fn_currentvalues_65187_66017 = app.common.json.__GT_clj;
var prop_get_fn_currentvalues_65191_66018 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_currentvalues_65185 = (function (property){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65308){
var map__65309 = p__65308;
var map__65309__$1 = cljs.core.__destructure_map(map__65309);
var variant_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65309__$1,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490));
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__65082_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__65082_SHARP_),property);
}),variant_properties);
}),app.plugins.library.get_variant_components(file_id,id)))));
});
var internal_fn_currentvalues_65185__$1 = internal_fn_currentvalues_65185.bind(obj_65089_this_65095);
return internal_fn_currentvalues_65185__$1;
});
var schema_variantcomponents_65195_66019 = null;
var coercer_fn_variantcomponents_65193_66020 = (((((!((schema_variantcomponents_65195_66019 == null)))) && ((!(cljs.core.fn_QMARK_(schema_variantcomponents_65195_66019))))))?app.common.schema.coercer(schema_variantcomponents_65195_66019):null);
var decode_fn_variantcomponents_65194_66021 = app.common.json.__GT_clj;
var prop_get_fn_variantcomponents_65198_66022 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_variantcomponents_65192 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65085_SHARP_){
return (app.plugins.library.lib_component_proxy.cljs$core$IFn$_invoke$arity$3 ? app.plugins.library.lib_component_proxy.cljs$core$IFn$_invoke$arity$3(plugin_id,file_id,p1__65085_SHARP_) : app.plugins.library.lib_component_proxy.call(null,plugin_id,file_id,p1__65085_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),app.plugins.library.get_variant_components(file_id,id))));
});
var internal_fn_variantcomponents_65192__$1 = internal_fn_variantcomponents_65192.bind(obj_65089_this_65095);
return internal_fn_variantcomponents_65192__$1;
});
var schema_addvariant_65202_66023 = null;
var coercer_fn_addvariant_65200_66024 = (((((!((schema_addvariant_65202_66023 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addvariant_65202_66023))))))?app.common.schema.coercer(schema_addvariant_65202_66023):null);
var decode_fn_addvariant_65201_66025 = app.common.json.__GT_clj;
var prop_get_fn_addvariant_65205_66026 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_addvariant_65199 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"plugin:add-variant"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1(id)], 0));
});
var internal_fn_addvariant_65199__$1 = internal_fn_addvariant_65199.bind(obj_65089_this_65095);
return internal_fn_addvariant_65199__$1;
});
var schema_addproperty_65209_66027 = null;
var coercer_fn_addproperty_65207_66028 = (((((!((schema_addproperty_65209_66027 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addproperty_65209_66027))))))?app.common.schema.coercer(schema_addproperty_65209_66027):null);
var decode_fn_addproperty_65208_66029 = app.common.json.__GT_clj;
var prop_get_fn_addproperty_65212_66030 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_addproperty_65206 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-property",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"plugin:add-property"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_property.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-value","property-value",1516163307),"Value 1"], null)], 0))], 0));
});
var internal_fn_addproperty_65206__$1 = internal_fn_addproperty_65206.bind(obj_65089_this_65095);
return internal_fn_addproperty_65206__$1;
});
var schema_removeproperty_65216_66031 = null;
var coercer_fn_removeproperty_65214_66032 = (((((!((schema_removeproperty_65216_66031 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removeproperty_65216_66031))))))?app.common.schema.coercer(schema_removeproperty_65216_66031):null);
var decode_fn_removeproperty_65215_66033 = app.common.json.__GT_clj;
var prop_get_fn_removeproperty_65219_66034 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_removeproperty_65213 = (function (pos){
if((!(cljs.core.nat_int_QMARK_(pos)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"pos","pos",-864607220),pos);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"remove-property",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"plugin:remove-property"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.remove_property(id,pos)], 0));
}
});
var internal_fn_removeproperty_65213__$1 = internal_fn_removeproperty_65213.bind(obj_65089_this_65095);
return internal_fn_removeproperty_65213__$1;
});
var schema_renameproperty_65223_66035 = null;
var coercer_fn_renameproperty_65221_66036 = (((((!((schema_renameproperty_65223_66035 == null)))) && ((!(cljs.core.fn_QMARK_(schema_renameproperty_65223_66035))))))?app.common.schema.coercer(schema_renameproperty_65223_66035):null);
var decode_fn_renameproperty_65222_66037 = app.common.json.__GT_clj;
var prop_get_fn_renameproperty_65226_66038 = (function (){
var obj_65089_this_65095 = this;
var internal_fn_renameproperty_65220 = (function (pos,name){
if((!(cljs.core.nat_int_QMARK_(pos)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"pos","pos",-864607220),pos);
} else {
if((!(typeof name === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),name);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.update_property_name(id,pos,name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",103466139),"plugin:rename-property"], null)));

}
}
});
var internal_fn_renameproperty_65220__$1 = internal_fn_renameproperty_65220.bind(obj_65089_this_65095);
return internal_fn_renameproperty_65220__$1;
});
Object.defineProperty(obj_65089_target_65097_66006,Symbol.toStringTag,(function (){var obj65311 = ({"enumerable":false,"get":prop_get_fn__65112_66007});
return obj65311;
})());

Object.defineProperty(obj_65089_target_65097_66006,Symbol["for"]("penpot.reify:type"),(function (){var obj65313 = ({"enumerable":false,"get":prop_get_fn__65126_66008});
return obj65313;
})());

Object.defineProperty(obj_65089_target_65097_66006,"$plugin",(function (){var obj65315 = ({"enumerable":false,"get":prop_get_fn_plugin_65140_66009});
return obj65315;
})());

Object.defineProperty(obj_65089_target_65097_66006,"$file",(function (){var obj65317 = ({"enumerable":false,"get":prop_get_fn_file_65155_66010});
return obj65317;
})());

Object.defineProperty(obj_65089_target_65097_66006,"$id",(function (){var obj65319 = ({"enumerable":false,"get":prop_get_fn_id_65163_66011});
return obj65319;
})());

Object.defineProperty(obj_65089_target_65097_66006,"id",(function (){var obj65321 = ({"enumerable":true,"get":prop_get_fn_id_65170_66012});
return obj65321;
})());

Object.defineProperty(obj_65089_target_65097_66006,"libraryId",(function (){var obj65323 = ({"enumerable":true,"get":prop_get_fn_libraryid_65177_66013});
return obj65323;
})());

Object.defineProperty(obj_65089_target_65097_66006,"properties",(function (){var obj65325 = ({"enumerable":true,"get":prop_get_fn_properties_65184_66014});
return obj65325;
})());

Object.defineProperty(obj_65089_target_65097_66006,"currentValues",(function (){var obj65327 = ({"enumerable":false,"get":prop_get_fn_currentvalues_65191_66018});
return obj65327;
})());

Object.defineProperty(obj_65089_target_65097_66006,"variantComponents",(function (){var obj65329 = ({"enumerable":false,"get":prop_get_fn_variantcomponents_65198_66022});
return obj65329;
})());

Object.defineProperty(obj_65089_target_65097_66006,"addVariant",(function (){var obj65331 = ({"enumerable":false,"get":prop_get_fn_addvariant_65205_66026});
return obj65331;
})());

Object.defineProperty(obj_65089_target_65097_66006,"addProperty",(function (){var obj65333 = ({"enumerable":false,"get":prop_get_fn_addproperty_65212_66030});
return obj65333;
})());

Object.defineProperty(obj_65089_target_65097_66006,"removeProperty",(function (){var obj65335 = ({"enumerable":false,"get":prop_get_fn_removeproperty_65219_66034});
return obj65335;
})());

Object.defineProperty(obj_65089_target_65097_66006,"renameProperty",(function (){var obj65337 = ({"enumerable":false,"get":prop_get_fn_renameproperty_65226_66038});
return obj65337;
})());


return obj_65089;
});
(app.plugins.shape.variant_proxy = app.plugins.library.variant_proxy);
app.plugins.library.lib_component_proxy_QMARK_ = (function app$plugins$library$lib_component_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"LibraryComponentProxy");
});
app.plugins.library.lib_component_proxy = (function app$plugins$library$lib_component_proxy(plugin_id,file_id,id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error("Assert failed: (uuid? file-id)"));
}

if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error("Assert failed: (uuid? id)"));
}

var obj_65341 = ({});
var to_string_65340 = (function (){
return "LibraryComponentProxy";
});
var obj_65341_target_65345_66039 = obj_65341;
var prop_get_fn__65353_66040 = (function (){
var obj_65341_this_65344 = this;
var internal_fn__65347 = to_string_65340;
return internal_fn__65347.call(obj_65341_this_65344);
});
var prop_get_fn__65360_66041 = (function (){
var obj_65341_this_65344 = this;
var internal_fn__65354 = to_string_65340;
return internal_fn__65354.call(obj_65341_this_65344);
});
var prop_get_fn_plugin_65367_66042 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_plugin_65361 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_65361.call(obj_65341_this_65344);
});
var prop_get_fn_id_65374_66043 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_id_65368 = cljs.core.constantly(id);
return internal_fn_id_65368.call(obj_65341_this_65344);
});
var prop_get_fn_file_65381_66044 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_file_65375 = cljs.core.constantly(file_id);
return internal_fn_file_65375.call(obj_65341_this_65344);
});
var prop_get_fn_id_65388_66045 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_id_65382 = (function (){
return ""+(id ?? "");
});
return internal_fn_id_65382.call(obj_65341_this_65344);
});
var prop_get_fn_name_65395_66046 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_name_65389 = (function (p1__65338_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_component(p1__65338_SHARP_));
});
return internal_fn_name_65389.call(obj_65341_this_65344,obj_65341_this_65344);
});
var schema_name_65392_66047 = null;
var coercer_fn_name_65390_66048 = (((((!((schema_name_65392_66047 == null)))) && ((!(cljs.core.fn_QMARK_(schema_name_65392_66047))))))?app.common.schema.coercer(schema_name_65392_66047):null);
var decode_fn_name_65391_66049 = app.common.json.__GT_clj;
var prop_set_fn_name_65396_66050 = (function (val_name_65394){
var obj_65341_this_65344 = this;
var internal_fn_name_65389 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),"Plugin doesn't have 'library:write' permission");
} else {
var component = app.plugins.utils.proxy__GT_library_component(self);
var value__$1 = ""+(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component),"") ?? "")+" / "+(value ?? "");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.rename_comp_or_variant_and_main(id,value__$1));

}
}
});
return internal_fn_name_65389.call(obj_65341_this_65344,obj_65341_this_65344,val_name_65394);
});
var prop_get_fn_path_65403_66051 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_path_65397 = (function (p1__65339_SHARP_){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_library_component(p1__65339_SHARP_));
});
return internal_fn_path_65397.call(obj_65341_this_65344,obj_65341_this_65344);
});
var schema_path_65400_66052 = null;
var coercer_fn_path_65398_66053 = (((((!((schema_path_65400_66052 == null)))) && ((!(cljs.core.fn_QMARK_(schema_path_65400_66052))))))?app.common.schema.coercer(schema_path_65400_66052):null);
var decode_fn_path_65399_66054 = app.common.json.__GT_clj;
var prop_set_fn_path_65404_66055 = (function (val_path_65402){
var obj_65341_this_65344 = this;
var internal_fn_path_65397 = (function (self,value){
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"path","path",-188191168),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"path","path",-188191168),"Plugin doesn't have 'library:write' permission");
} else {
var component = app.plugins.utils.proxy__GT_library_component(self);
var value__$1 = ""+(value ?? "")+" / "+(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component) ?? "");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.rename_component(id,value__$1));

}
}
});
return internal_fn_path_65397.call(obj_65341_this_65344,obj_65341_this_65344,val_path_65402);
});
var schema_remove_65408_66056 = null;
var coercer_fn_remove_65406_66057 = (((((!((schema_remove_65408_66056 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_65408_66056))))))?app.common.schema.coercer(schema_remove_65408_66056):null);
var decode_fn_remove_65407_66058 = app.common.json.__GT_clj;
var prop_get_fn_remove_65411_66059 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_remove_65405 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"remove","remove",-131428414),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.delete_component(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));

}
});
var internal_fn_remove_65405__$1 = internal_fn_remove_65405.bind(obj_65341_this_65344);
return internal_fn_remove_65405__$1;
});
var schema_instance_65415_66060 = null;
var coercer_fn_instance_65413_66061 = (((((!((schema_instance_65415_66060 == null)))) && ((!(cljs.core.fn_QMARK_(schema_instance_65415_66060))))))?app.common.schema.coercer(schema_instance_65415_66060):null);
var decode_fn_instance_65414_66062 = app.common.json.__GT_clj;
var prop_get_fn_instance_65418_66063 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_instance_65412 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"instance","instance",-2121349050),"Plugin doesn't have 'content:write' permission");
} else {
var id_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.instantiate_component.cljs$core$IFn$_invoke$arity$4(file_id,id,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id-ref","id-ref",349210285),id_ref,new cljs.core.Keyword(null,"origin","origin",1037372088),"plugin"], null)));

return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$2(plugin_id,cljs.core.deref(id_ref));

}
});
var internal_fn_instance_65412__$1 = internal_fn_instance_65412.bind(obj_65341_this_65344);
return internal_fn_instance_65412__$1;
});
var schema_getplugindata_65422_66064 = null;
var coercer_fn_getplugindata_65420_66065 = (((((!((schema_getplugindata_65422_66064 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindata_65422_66064))))))?app.common.schema.coercer(schema_getplugindata_65422_66064):null);
var decode_fn_getplugindata_65421_66066 = app.common.json.__GT_clj;
var prop_get_fn_getplugindata_65425_66067 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_getplugindata_65419 = (function (key){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"component-plugin-data-key","component-plugin-data-key",-1960216489),key);
} else {
var component = app.plugins.utils.locate_library_component(file_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id))),key);

}
});
var internal_fn_getplugindata_65419__$1 = internal_fn_getplugindata_65419.bind(obj_65341_this_65344);
return internal_fn_getplugindata_65419__$1;
});
var schema_setplugindata_65429_66068 = null;
var coercer_fn_setplugindata_65427_66069 = (((((!((schema_setplugindata_65429_66068 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setplugindata_65429_66068))))))?app.common.schema.coercer(schema_setplugindata_65429_66068):null);
var decode_fn_setplugindata_65428_66070 = app.common.json.__GT_clj;
var prop_get_fn_setplugindata_65432_66071 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_setplugindata_65426 = (function (key,value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-non-local-library","setPluginData-non-local-library",-839915494),file_id);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-key","setPluginData-key",437211756),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-value","setPluginData-value",281004073),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData","setPluginData",2049380387),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6(file_id,new cljs.core.Keyword(null,"component","component",1555936782),id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)),key,value));

}
}
}
}
});
var internal_fn_setplugindata_65426__$1 = internal_fn_setplugindata_65426.bind(obj_65341_this_65344);
return internal_fn_setplugindata_65426__$1;
});
var schema_getplugindatakeys_65436_66072 = null;
var coercer_fn_getplugindatakeys_65434_66073 = (((((!((schema_getplugindatakeys_65436_66072 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindatakeys_65436_66072))))))?app.common.schema.coercer(schema_getplugindatakeys_65436_66072):null);
var decode_fn_getplugindatakeys_65435_66074 = app.common.json.__GT_clj;
var prop_get_fn_getplugindatakeys_65439_66075 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_getplugindatakeys_65433 = (function (){
var component = app.plugins.utils.locate_library_component(file_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)))));
});
var internal_fn_getplugindatakeys_65433__$1 = internal_fn_getplugindatakeys_65433.bind(obj_65341_this_65344);
return internal_fn_getplugindatakeys_65433__$1;
});
var schema_getsharedplugindata_65443_66076 = null;
var coercer_fn_getsharedplugindata_65441_66077 = (((((!((schema_getsharedplugindata_65443_66076 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindata_65443_66076))))))?app.common.schema.coercer(schema_getsharedplugindata_65443_66076):null);
var decode_fn_getsharedplugindata_65442_66078 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindata_65446_66079 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_getsharedplugindata_65440 = (function (namespace,key){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"component-plugin-data-namespace","component-plugin-data-namespace",-953872153),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"component-plugin-data-key","component-plugin-data-key",-1960216489),key);
} else {
var component = app.plugins.utils.locate_library_component(file_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace)),key);

}
}
});
var internal_fn_getsharedplugindata_65440__$1 = internal_fn_getsharedplugindata_65440.bind(obj_65341_this_65344);
return internal_fn_getsharedplugindata_65440__$1;
});
var schema_setsharedplugindata_65450_66080 = null;
var coercer_fn_setsharedplugindata_65448_66081 = (((((!((schema_setsharedplugindata_65450_66080 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setsharedplugindata_65450_66080))))))?app.common.schema.coercer(schema_setsharedplugindata_65450_66080):null);
var decode_fn_setsharedplugindata_65449_66082 = app.common.json.__GT_clj;
var prop_get_fn_setsharedplugindata_65453_66083 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_setsharedplugindata_65447 = (function (namespace,key,value){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-non-local-library","setSharedPluginData-non-local-library",331868634),file_id);
} else {
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-namespace","setSharedPluginData-namespace",807971852),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-key","setSharedPluginData-key",-1257676988),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-value","setSharedPluginData-value",1942190613),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData","setSharedPluginData",-324251591),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6(file_id,new cljs.core.Keyword(null,"component","component",1555936782),id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace),key,value));

}
}
}
}
}
});
var internal_fn_setsharedplugindata_65447__$1 = internal_fn_setsharedplugindata_65447.bind(obj_65341_this_65344);
return internal_fn_setsharedplugindata_65447__$1;
});
var schema_getsharedplugindatakeys_65457_66084 = null;
var coercer_fn_getsharedplugindatakeys_65455_66085 = (((((!((schema_getsharedplugindatakeys_65457_66084 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindatakeys_65457_66084))))))?app.common.schema.coercer(schema_getsharedplugindatakeys_65457_66084):null);
var decode_fn_getsharedplugindatakeys_65456_66086 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindatakeys_65460_66087 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_getsharedplugindatakeys_65454 = (function (namespace){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"component-plugin-data-namespace","component-plugin-data-namespace",-953872153),namespace);
} else {
var component = app.plugins.utils.locate_library_component(file_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace))));

}
});
var internal_fn_getsharedplugindatakeys_65454__$1 = internal_fn_getsharedplugindatakeys_65454.bind(obj_65341_this_65344);
return internal_fn_getsharedplugindatakeys_65454__$1;
});
var schema_maininstance_65464_66088 = null;
var coercer_fn_maininstance_65462_66089 = (((((!((schema_maininstance_65464_66088 == null)))) && ((!(cljs.core.fn_QMARK_(schema_maininstance_65464_66088))))))?app.common.schema.coercer(schema_maininstance_65464_66088):null);
var decode_fn_maininstance_65463_66090 = app.common.json.__GT_clj;
var prop_get_fn_maininstance_65467_66091 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_maininstance_65461 = (function (){
var file = app.plugins.utils.locate_file(file_id);
var component = app.plugins.utils.locate_library_component(file_id,id);
var root = app.common.types.file.get_component_root(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),component);
if((!((root == null)))){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root));
} else {
return null;
}
});
var internal_fn_maininstance_65461__$1 = internal_fn_maininstance_65461.bind(obj_65341_this_65344);
return internal_fn_maininstance_65461__$1;
});
var schema_isvariant_65471_66092 = null;
var coercer_fn_isvariant_65469_66093 = (((((!((schema_isvariant_65471_66092 == null)))) && ((!(cljs.core.fn_QMARK_(schema_isvariant_65471_66092))))))?app.common.schema.coercer(schema_isvariant_65471_66092):null);
var decode_fn_isvariant_65470_66094 = app.common.json.__GT_clj;
var prop_get_fn_isvariant_65474_66095 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_isvariant_65468 = (function (){
var component = app.plugins.utils.locate_library_component(file_id,id);
return app.common.types.component.is_variant_QMARK_(component);
});
var internal_fn_isvariant_65468__$1 = internal_fn_isvariant_65468.bind(obj_65341_this_65344);
return internal_fn_isvariant_65468__$1;
});
var prop_get_fn_variants_65481_66096 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_variants_65475 = (function (){
var component = app.plugins.utils.locate_library_component(file_id,id);
if(app.common.types.component.is_variant_QMARK_(component)){
return app.plugins.library.variant_proxy(plugin_id,file_id,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component));
} else {
return null;
}
});
return internal_fn_variants_65475.call(obj_65341_this_65344);
});
var prop_get_fn_variantprops_65488_66097 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_variantprops_65482 = (function (){
var component = app.plugins.utils.locate_library_component(file_id,id);
if(app.common.types.component.is_variant_QMARK_(component)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__65517){
var map__65518 = p__65517;
var map__65518__$1 = cljs.core.__destructure_map(map__65518);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65518__$1,new cljs.core.Keyword(null,"value","value",305978217));
return app.util.object.set_BANG_(acc,name,value);
}),({}),new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component));
} else {
return null;
}
});
return internal_fn_variantprops_65482.call(obj_65341_this_65344);
});
var prop_get_fn_varianterror_65495_66098 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_varianterror_65489 = (function (){
var file = app.plugins.utils.locate_file(file_id);
var component = app.plugins.utils.locate_library_component(file_id,id);
var root = app.common.types.file.get_component_root(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),component);
if(app.common.types.component.is_variant_QMARK_(component)){
return new cljs.core.Keyword(null,"variant-error","variant-error",-42521934).cljs$core$IFn$_invoke$arity$1(root);
} else {
return null;
}
});
return internal_fn_varianterror_65489.call(obj_65341_this_65344);
});
var schema_transforminvariant_65499_66099 = null;
var coercer_fn_transforminvariant_65497_66100 = (((((!((schema_transforminvariant_65499_66099 == null)))) && ((!(cljs.core.fn_QMARK_(schema_transforminvariant_65499_66099))))))?app.common.schema.coercer(schema_transforminvariant_65499_66099):null);
var decode_fn_transforminvariant_65498_66101 = app.common.json.__GT_clj;
var prop_get_fn_transforminvariant_65502_66102 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_transforminvariant_65496 = (function (){
var component = app.plugins.utils.locate_library_component(file_id,id);
if(cljs.core.truth_((function (){var and__5023__auto__ = component;
if(cljs.core.truth_(and__5023__auto__)){
return (!(app.common.types.component.is_variant_QMARK_(component)));
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"transform-in-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"plugin:transform-in-variant"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component))], 0));
} else {
return null;
}
});
var internal_fn_transforminvariant_65496__$1 = internal_fn_transforminvariant_65496.bind(obj_65341_this_65344);
return internal_fn_transforminvariant_65496__$1;
});
var schema_addvariant_65506_66103 = null;
var coercer_fn_addvariant_65504_66104 = (((((!((schema_addvariant_65506_66103 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addvariant_65506_66103))))))?app.common.schema.coercer(schema_addvariant_65506_66103):null);
var decode_fn_addvariant_65505_66105 = app.common.json.__GT_clj;
var prop_get_fn_addvariant_65509_66106 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_addvariant_65503 = (function (){
var component = app.plugins.utils.locate_library_component(file_id,id);
if(cljs.core.truth_((function (){var and__5023__auto__ = component;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.component.is_variant_QMARK_(component);
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"plugin:add-variant-from-component"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component))], 0));
} else {
return null;
}
});
var internal_fn_addvariant_65503__$1 = internal_fn_addvariant_65503.bind(obj_65341_this_65344);
return internal_fn_addvariant_65503__$1;
});
var schema_setvariantproperty_65513_66107 = null;
var coercer_fn_setvariantproperty_65511_66108 = (((((!((schema_setvariantproperty_65513_66107 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setvariantproperty_65513_66107))))))?app.common.schema.coercer(schema_setvariantproperty_65513_66107):null);
var decode_fn_setvariantproperty_65512_66109 = app.common.json.__GT_clj;
var prop_get_fn_setvariantproperty_65516_66110 = (function (){
var obj_65341_this_65344 = this;
var internal_fn_setvariantproperty_65510 = (function (pos,value){
if((!(cljs.core.nat_int_QMARK_(pos)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos));
} else {
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),value);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"variant-edit-property-value",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"plugin:edit-property-value"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.update_property_value(id,pos,value)], 0));

}
}
});
var internal_fn_setvariantproperty_65510__$1 = internal_fn_setvariantproperty_65510.bind(obj_65341_this_65344);
return internal_fn_setvariantproperty_65510__$1;
});
Object.defineProperty(obj_65341_target_65345_66039,Symbol.toStringTag,(function (){var obj65520 = ({"enumerable":false,"get":prop_get_fn__65353_66040});
return obj65520;
})());

Object.defineProperty(obj_65341_target_65345_66039,Symbol["for"]("penpot.reify:type"),(function (){var obj65522 = ({"enumerable":false,"get":prop_get_fn__65360_66041});
return obj65522;
})());

Object.defineProperty(obj_65341_target_65345_66039,"$plugin",(function (){var obj65524 = ({"enumerable":false,"get":prop_get_fn_plugin_65367_66042});
return obj65524;
})());

Object.defineProperty(obj_65341_target_65345_66039,"$id",(function (){var obj65526 = ({"enumerable":false,"get":prop_get_fn_id_65374_66043});
return obj65526;
})());

Object.defineProperty(obj_65341_target_65345_66039,"$file",(function (){var obj65528 = ({"enumerable":false,"get":prop_get_fn_file_65381_66044});
return obj65528;
})());

Object.defineProperty(obj_65341_target_65345_66039,"id",(function (){var obj65530 = ({"enumerable":true,"get":prop_get_fn_id_65388_66045});
return obj65530;
})());

Object.defineProperty(obj_65341_target_65345_66039,"name",(function (){var obj65532 = ({"enumerable":true,"get":prop_get_fn_name_65395_66046,"set":prop_set_fn_name_65396_66050});
return obj65532;
})());

Object.defineProperty(obj_65341_target_65345_66039,"path",(function (){var obj65534 = ({"enumerable":true,"get":prop_get_fn_path_65403_66051,"set":prop_set_fn_path_65404_66055});
return obj65534;
})());

Object.defineProperty(obj_65341_target_65345_66039,"remove",(function (){var obj65536 = ({"enumerable":false,"get":prop_get_fn_remove_65411_66059});
return obj65536;
})());

Object.defineProperty(obj_65341_target_65345_66039,"instance",(function (){var obj65538 = ({"enumerable":false,"get":prop_get_fn_instance_65418_66063});
return obj65538;
})());

Object.defineProperty(obj_65341_target_65345_66039,"getPluginData",(function (){var obj65540 = ({"enumerable":false,"get":prop_get_fn_getplugindata_65425_66067});
return obj65540;
})());

Object.defineProperty(obj_65341_target_65345_66039,"setPluginData",(function (){var obj65542 = ({"enumerable":false,"get":prop_get_fn_setplugindata_65432_66071});
return obj65542;
})());

Object.defineProperty(obj_65341_target_65345_66039,"getPluginDataKeys",(function (){var obj65544 = ({"enumerable":false,"get":prop_get_fn_getplugindatakeys_65439_66075});
return obj65544;
})());

Object.defineProperty(obj_65341_target_65345_66039,"getSharedPluginData",(function (){var obj65546 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindata_65446_66079});
return obj65546;
})());

Object.defineProperty(obj_65341_target_65345_66039,"setSharedPluginData",(function (){var obj65548 = ({"enumerable":false,"get":prop_get_fn_setsharedplugindata_65453_66083});
return obj65548;
})());

Object.defineProperty(obj_65341_target_65345_66039,"getSharedPluginDataKeys",(function (){var obj65550 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindatakeys_65460_66087});
return obj65550;
})());

Object.defineProperty(obj_65341_target_65345_66039,"mainInstance",(function (){var obj65552 = ({"enumerable":false,"get":prop_get_fn_maininstance_65467_66091});
return obj65552;
})());

Object.defineProperty(obj_65341_target_65345_66039,"isVariant",(function (){var obj65554 = ({"enumerable":false,"get":prop_get_fn_isvariant_65474_66095});
return obj65554;
})());

Object.defineProperty(obj_65341_target_65345_66039,"variants",(function (){var obj65556 = ({"enumerable":false,"get":prop_get_fn_variants_65481_66096});
return obj65556;
})());

Object.defineProperty(obj_65341_target_65345_66039,"variantProps",(function (){var obj65558 = ({"enumerable":true,"get":prop_get_fn_variantprops_65488_66097});
return obj65558;
})());

Object.defineProperty(obj_65341_target_65345_66039,"variantError",(function (){var obj65560 = ({"enumerable":true,"get":prop_get_fn_varianterror_65495_66098});
return obj65560;
})());

Object.defineProperty(obj_65341_target_65345_66039,"transformInVariant",(function (){var obj65562 = ({"enumerable":false,"get":prop_get_fn_transforminvariant_65502_66102});
return obj65562;
})());

Object.defineProperty(obj_65341_target_65345_66039,"addVariant",(function (){var obj65564 = ({"enumerable":false,"get":prop_get_fn_addvariant_65509_66106});
return obj65564;
})());

Object.defineProperty(obj_65341_target_65345_66039,"setVariantProperty",(function (){var obj65566 = ({"enumerable":false,"get":prop_get_fn_setvariantproperty_65516_66110});
return obj65566;
})());


return obj_65341;
});
app.plugins.library.library_proxy_QMARK_ = (function app$plugins$library$library_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"LibraryProxy");
});
app.plugins.library.library_proxy = (function app$plugins$library$library_proxy(plugin_id,file_id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error(["Assert failed: ","File id not valid","\n","(uuid? file-id)"].join('')));
}

var obj_65575 = ({});
var to_string_65574 = (function (){
return "LibraryProxy";
});
var obj_65575_target_65579_66504 = obj_65575;
var prop_get_fn__65587_66505 = (function (){
var obj_65575_this_65578 = this;
var internal_fn__65581 = to_string_65574;
return internal_fn__65581.call(obj_65575_this_65578);
});
var prop_get_fn__65594_66506 = (function (){
var obj_65575_this_65578 = this;
var internal_fn__65588 = to_string_65574;
return internal_fn__65588.call(obj_65575_this_65578);
});
var prop_get_fn_plugin_65601_66507 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_plugin_65595 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_65595.call(obj_65575_this_65578);
});
var prop_get_fn_id_65608_66508 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_id_65602 = cljs.core.constantly(file_id);
return internal_fn_id_65602.call(obj_65575_this_65578);
});
var prop_get_fn_id_65615_66509 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_id_65609 = (function (p1__65567_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_file(p1__65567_SHARP_)));
});
return internal_fn_id_65609.call(obj_65575_this_65578,obj_65575_this_65578);
});
var prop_get_fn_name_65622_66510 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_name_65616 = (function (p1__65568_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_file(p1__65568_SHARP_));
});
return internal_fn_name_65616.call(obj_65575_this_65578,obj_65575_this_65578);
});
var prop_get_fn_colors_65629_66511 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_colors_65623 = (function (_){
var file = app.plugins.utils.locate_file(file_id);
var colors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65569_SHARP_){
return app.plugins.library.lib_color_proxy(plugin_id,file_id,p1__65569_SHARP_);
}),cljs.core.keys(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,colors);
});
return internal_fn_colors_65623.call(obj_65575_this_65578,obj_65575_this_65578);
});
var prop_get_fn_typographies_65636_66512 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_typographies_65630 = (function (_){
var file = app.plugins.utils.locate_file(file_id);
var typographies = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65570_SHARP_){
return app.plugins.library.lib_typography_proxy(plugin_id,file_id,p1__65570_SHARP_);
}),cljs.core.keys(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,typographies);
});
return internal_fn_typographies_65630.call(obj_65575_this_65578,obj_65575_this_65578);
});
var prop_get_fn_components_65643_66513 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_components_65637 = (function (_){
var file = app.plugins.utils.locate_file(file_id);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file);
var components = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65572_SHARP_){
return app.plugins.library.lib_component_proxy(plugin_id,file_id,p1__65572_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__65571_SHARP_){
return app.common.files.variant.is_secondary_variant_QMARK_(p1__65571_SHARP_,data);
}),cljs.core.second),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted","deleted",-510100639),cljs.core.second),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(data)))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,components);
});
return internal_fn_components_65637.call(obj_65575_this_65578,obj_65575_this_65578);
});
var prop_get_fn_tokens_65650_66514 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_tokens_65644 = (function (_){
return app.plugins.tokens.tokens_catalog(plugin_id,file_id);
});
return internal_fn_tokens_65644.call(obj_65575_this_65578,obj_65575_this_65578);
});
var schema_createcolor_65654_66515 = null;
var coercer_fn_createcolor_65652_66516 = (((((!((schema_createcolor_65654_66515 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createcolor_65654_66515))))))?app.common.schema.coercer(schema_createcolor_65654_66515):null);
var decode_fn_createcolor_65653_66517 = app.common.json.__GT_clj;
var prop_get_fn_createcolor_65657_66518 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_createcolor_65651 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createColor","createColor",-414553580),"Plugin doesn't have 'library:write' permission");
} else {
var color_id = app.common.uuid.next();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_color.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),color_id,new cljs.core.Keyword(null,"name","name",1843675177),"Color",new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rename?","rename?",-1728043099),false], null)));

return app.plugins.library.lib_color_proxy(plugin_id,file_id,color_id);

}
});
var internal_fn_createcolor_65651__$1 = internal_fn_createcolor_65651.bind(obj_65575_this_65578);
return internal_fn_createcolor_65651__$1;
});
var schema_createtypography_65661_66519 = null;
var coercer_fn_createtypography_65659_66520 = (((((!((schema_createtypography_65661_66519 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createtypography_65661_66519))))))?app.common.schema.coercer(schema_createtypography_65661_66519):null);
var decode_fn_createtypography_65660_66521 = app.common.json.__GT_clj;
var prop_get_fn_createtypography_65664_66522 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_createtypography_65658 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createTypography","createTypography",1413714480),"Plugin doesn't have 'library:write' permission");
} else {
var typography_id = app.common.uuid.next();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_typography.cljs$core$IFn$_invoke$arity$2(app.common.types.typography.make_typography(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),typography_id,new cljs.core.Keyword(null,"name","name",1843675177),"Typography"], null)),false));

return app.plugins.library.lib_typography_proxy(plugin_id,file_id,typography_id);

}
});
var internal_fn_createtypography_65658__$1 = internal_fn_createtypography_65658.bind(obj_65575_this_65578);
return internal_fn_createtypography_65658__$1;
});
var schema_createcomponent_65668_66523 = null;
var coercer_fn_createcomponent_65666_66524 = (((((!((schema_createcomponent_65668_66523 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createcomponent_65668_66523))))))?app.common.schema.coercer(schema_createcomponent_65668_66523):null);
var decode_fn_createcomponent_65667_66525 = app.common.json.__GT_clj;
var prop_get_fn_createcomponent_65671_66526 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_createcomponent_65665 = (function (shapes){
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createComponent","createComponent",-2141156902),"Plugin doesn't have 'library:write' permission");
} else {
var id_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__65573_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__65573_SHARP_,"$id");
})),shapes);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_component.cljs$core$IFn$_invoke$arity$2(id_ref,ids));

return app.plugins.library.lib_component_proxy(plugin_id,file_id,cljs.core.deref(id_ref));

}
});
var internal_fn_createcomponent_65665__$1 = internal_fn_createcomponent_65665.bind(obj_65575_this_65578);
return internal_fn_createcomponent_65665__$1;
});
var schema_getplugindata_65675_66527 = null;
var coercer_fn_getplugindata_65673_66528 = (((((!((schema_getplugindata_65675_66527 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindata_65675_66527))))))?app.common.schema.coercer(schema_getplugindata_65675_66527):null);
var decode_fn_getplugindata_65674_66529 = app.common.json.__GT_clj;
var prop_get_fn_getplugindata_65678_66530 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_getplugindata_65672 = (function (key){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"file-plugin-data-key","file-plugin-data-key",-1008870444),key);
} else {
var file = app.plugins.utils.locate_file(file_id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id))),key);

}
});
var internal_fn_getplugindata_65672__$1 = internal_fn_getplugindata_65672.bind(obj_65575_this_65578);
return internal_fn_getplugindata_65672__$1;
});
var schema_setplugindata_65682_66531 = null;
var coercer_fn_setplugindata_65680_66532 = (((((!((schema_setplugindata_65682_66531 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setplugindata_65682_66531))))))?app.common.schema.coercer(schema_setplugindata_65682_66531):null);
var decode_fn_setplugindata_65681_66533 = app.common.json.__GT_clj;
var prop_get_fn_setplugindata_65685_66534 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_setplugindata_65679 = (function (key,value){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-key","setPluginData-key",437211756),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-value","setPluginData-value",281004073),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData","setPluginData",2049380387),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$5(file_id,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)),key,value));

}
}
}
});
var internal_fn_setplugindata_65679__$1 = internal_fn_setplugindata_65679.bind(obj_65575_this_65578);
return internal_fn_setplugindata_65679__$1;
});
var schema_getplugindatakeys_65689_66535 = null;
var coercer_fn_getplugindatakeys_65687_66536 = (((((!((schema_getplugindatakeys_65689_66535 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindatakeys_65689_66535))))))?app.common.schema.coercer(schema_getplugindatakeys_65689_66535):null);
var decode_fn_getplugindatakeys_65688_66537 = app.common.json.__GT_clj;
var prop_get_fn_getplugindatakeys_65692_66538 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_getplugindatakeys_65686 = (function (){
var file = app.plugins.utils.locate_file(file_id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)))));
});
var internal_fn_getplugindatakeys_65686__$1 = internal_fn_getplugindatakeys_65686.bind(obj_65575_this_65578);
return internal_fn_getplugindatakeys_65686__$1;
});
var schema_getsharedplugindata_65696_66539 = null;
var coercer_fn_getsharedplugindata_65694_66540 = (((((!((schema_getsharedplugindata_65696_66539 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindata_65696_66539))))))?app.common.schema.coercer(schema_getsharedplugindata_65696_66539):null);
var decode_fn_getsharedplugindata_65695_66541 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindata_65699_66542 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_getsharedplugindata_65693 = (function (namespace,key){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"file-plugin-data-namespace","file-plugin-data-namespace",1778425062),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"file-plugin-data-key","file-plugin-data-key",-1008870444),key);
} else {
var file = app.plugins.utils.locate_file(file_id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace)),key);

}
}
});
var internal_fn_getsharedplugindata_65693__$1 = internal_fn_getsharedplugindata_65693.bind(obj_65575_this_65578);
return internal_fn_getsharedplugindata_65693__$1;
});
var schema_setsharedplugindata_65703_66543 = null;
var coercer_fn_setsharedplugindata_65701_66544 = (((((!((schema_setsharedplugindata_65703_66543 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setsharedplugindata_65703_66543))))))?app.common.schema.coercer(schema_setsharedplugindata_65703_66543):null);
var decode_fn_setsharedplugindata_65702_66545 = app.common.json.__GT_clj;
var prop_get_fn_setsharedplugindata_65706_66546 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_setsharedplugindata_65700 = (function (namespace,key,value){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-namespace","setSharedPluginData-namespace",807971852),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-key","setSharedPluginData-key",-1257676988),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-value","setSharedPluginData-value",1942190613),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData","setSharedPluginData",-324251591),"Plugin doesn't have 'library:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$5(file_id,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace),key,value));

}
}
}
}
});
var internal_fn_setsharedplugindata_65700__$1 = internal_fn_setsharedplugindata_65700.bind(obj_65575_this_65578);
return internal_fn_setsharedplugindata_65700__$1;
});
var schema_getsharedplugindatakeys_65710_66547 = null;
var coercer_fn_getsharedplugindatakeys_65708_66548 = (((((!((schema_getsharedplugindatakeys_65710_66547 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindatakeys_65710_66547))))))?app.common.schema.coercer(schema_getsharedplugindatakeys_65710_66547):null);
var decode_fn_getsharedplugindatakeys_65709_66549 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindatakeys_65713_66550 = (function (){
var obj_65575_this_65578 = this;
var internal_fn_getsharedplugindatakeys_65707 = (function (namespace){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"namespace","namespace",-377510372),namespace);
} else {
var file = app.plugins.utils.locate_file(file_id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace))));

}
});
var internal_fn_getsharedplugindatakeys_65707__$1 = internal_fn_getsharedplugindatakeys_65707.bind(obj_65575_this_65578);
return internal_fn_getsharedplugindatakeys_65707__$1;
});
Object.defineProperty(obj_65575_target_65579_66504,Symbol.toStringTag,(function (){var obj65715 = ({"enumerable":false,"get":prop_get_fn__65587_66505});
return obj65715;
})());

Object.defineProperty(obj_65575_target_65579_66504,Symbol["for"]("penpot.reify:type"),(function (){var obj65717 = ({"enumerable":false,"get":prop_get_fn__65594_66506});
return obj65717;
})());

Object.defineProperty(obj_65575_target_65579_66504,"$plugin",(function (){var obj65719 = ({"enumerable":false,"get":prop_get_fn_plugin_65601_66507});
return obj65719;
})());

Object.defineProperty(obj_65575_target_65579_66504,"$id",(function (){var obj65721 = ({"enumerable":false,"get":prop_get_fn_id_65608_66508});
return obj65721;
})());

Object.defineProperty(obj_65575_target_65579_66504,"id",(function (){var obj65723 = ({"enumerable":true,"get":prop_get_fn_id_65615_66509});
return obj65723;
})());

Object.defineProperty(obj_65575_target_65579_66504,"name",(function (){var obj65725 = ({"enumerable":true,"get":prop_get_fn_name_65622_66510});
return obj65725;
})());

Object.defineProperty(obj_65575_target_65579_66504,"colors",(function (){var obj65727 = ({"enumerable":true,"get":prop_get_fn_colors_65629_66511});
return obj65727;
})());

Object.defineProperty(obj_65575_target_65579_66504,"typographies",(function (){var obj65729 = ({"enumerable":true,"get":prop_get_fn_typographies_65636_66512});
return obj65729;
})());

Object.defineProperty(obj_65575_target_65579_66504,"components",(function (){var obj65731 = ({"enumerable":true,"get":prop_get_fn_components_65643_66513});
return obj65731;
})());

Object.defineProperty(obj_65575_target_65579_66504,"tokens",(function (){var obj65733 = ({"enumerable":true,"get":prop_get_fn_tokens_65650_66514});
return obj65733;
})());

Object.defineProperty(obj_65575_target_65579_66504,"createColor",(function (){var obj65735 = ({"enumerable":false,"get":prop_get_fn_createcolor_65657_66518});
return obj65735;
})());

Object.defineProperty(obj_65575_target_65579_66504,"createTypography",(function (){var obj65737 = ({"enumerable":false,"get":prop_get_fn_createtypography_65664_66522});
return obj65737;
})());

Object.defineProperty(obj_65575_target_65579_66504,"createComponent",(function (){var obj65739 = ({"enumerable":false,"get":prop_get_fn_createcomponent_65671_66526});
return obj65739;
})());

Object.defineProperty(obj_65575_target_65579_66504,"getPluginData",(function (){var obj65741 = ({"enumerable":false,"get":prop_get_fn_getplugindata_65678_66530});
return obj65741;
})());

Object.defineProperty(obj_65575_target_65579_66504,"setPluginData",(function (){var obj65743 = ({"enumerable":false,"get":prop_get_fn_setplugindata_65685_66534});
return obj65743;
})());

Object.defineProperty(obj_65575_target_65579_66504,"getPluginDataKeys",(function (){var obj65745 = ({"enumerable":false,"get":prop_get_fn_getplugindatakeys_65692_66538});
return obj65745;
})());

Object.defineProperty(obj_65575_target_65579_66504,"getSharedPluginData",(function (){var obj65747 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindata_65699_66542});
return obj65747;
})());

Object.defineProperty(obj_65575_target_65579_66504,"setSharedPluginData",(function (){var obj65749 = ({"enumerable":false,"get":prop_get_fn_setsharedplugindata_65706_66546});
return obj65749;
})());

Object.defineProperty(obj_65575_target_65579_66504,"getSharedPluginDataKeys",(function (){var obj65751 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindatakeys_65713_66550});
return obj65751;
})());


return obj_65575;
});
app.plugins.library.library_subcontext = (function app$plugins$library$library_subcontext(plugin_id){
var obj_65754 = ({});
var to_string_65753 = (function (){
return "PenpotLibrarySubcontext";
});
var obj_65754_target_65758_66554 = obj_65754;
var prop_get_fn__65766_66555 = (function (){
var obj_65754_this_65757 = this;
var internal_fn__65760 = to_string_65753;
return internal_fn__65760.call(obj_65754_this_65757);
});
var prop_get_fn__65773_66556 = (function (){
var obj_65754_this_65757 = this;
var internal_fn__65767 = to_string_65753;
return internal_fn__65767.call(obj_65754_this_65757);
});
var prop_get_fn_plugin_65780_66557 = (function (){
var obj_65754_this_65757 = this;
var internal_fn_plugin_65774 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_65774.call(obj_65754_this_65757);
});
var prop_get_fn_local_65787_66558 = (function (){
var obj_65754_this_65757 = this;
var internal_fn_local_65781 = (function (){
return app.plugins.library.library_proxy(plugin_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)));
});
return internal_fn_local_65781.call(obj_65754_this_65757);
});
var prop_get_fn_connected_65794_66559 = (function (){
var obj_65754_this_65757 = this;
var internal_fn_connected_65788 = (function (){
var libraries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"files","files",-472457450));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.plugins.library.library_proxy,plugin_id),cljs.core.keys(libraries)));
});
return internal_fn_connected_65788.call(obj_65754_this_65757);
});
var schema_availablelibraries_65798_66560 = null;
var coercer_fn_availablelibraries_65796_66561 = (((((!((schema_availablelibraries_65798_66560 == null)))) && ((!(cljs.core.fn_QMARK_(schema_availablelibraries_65798_66560))))))?app.common.schema.coercer(schema_availablelibraries_65798_66560):null);
var decode_fn_availablelibraries_65797_66562 = app.common.json.__GT_clj;
var prop_get_fn_availablelibraries_65801_66563 = (function (){
var obj_65754_this_65757 = this;
var internal_fn_availablelibraries_65795 = (function (){
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
return (new Promise((function (resolve,reject){
var current_libs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"files","files",-472457450)));
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.map((function (result){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65809){
var map__65810 = p__65809;
var map__65810__$1 = cljs.core.__destructure_map(map__65810);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65810__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65810__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var library_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65810__$1,new cljs.core.Keyword(null,"library-summary","library-summary",908431551));
return ({"id": ""+(id ?? ""), "name": name, "numColors": new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(library_summary)), "numComponents": new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(library_summary)), "numTypographies": new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(library_summary))});
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__65752_SHARP_){
return (!(cljs.core.contains_QMARK_(current_libs,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__65752_SHARP_))));
}),result)));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-shared-files","get-team-shared-files",1195206608),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null))));
})));
});
var internal_fn_availablelibraries_65795__$1 = internal_fn_availablelibraries_65795.bind(obj_65754_this_65757);
return internal_fn_availablelibraries_65795__$1;
});
var schema_connectlibrary_65805_66564 = null;
var coercer_fn_connectlibrary_65803_66565 = (((((!((schema_connectlibrary_65805_66564 == null)))) && ((!(cljs.core.fn_QMARK_(schema_connectlibrary_65805_66564))))))?app.common.schema.coercer(schema_connectlibrary_65805_66564):null);
var decode_fn_connectlibrary_65804_66566 = app.common.json.__GT_clj;
var prop_get_fn_connectlibrary_65808_66567 = (function (){
var obj_65754_this_65757 = this;
var internal_fn_connectlibrary_65802 = (function (library_id){
if((!(app.plugins.register.check_permission(plugin_id,"library:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"connectLibrary","connectLibrary",606055059),"Plugin doesn't have 'library:write' permission");
} else {
return (new Promise((function (resolve,reject){
if((!(typeof library_id === 'string'))){
app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"connectLibrary","connectLibrary",606055059),library_id);

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(null) : reject.call(null,null));
} else {
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var library_id__$1 = app.common.uuid.parse(library_id);
beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (){
var G__65811 = app.plugins.library.library_proxy(plugin_id,library_id__$1);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__65811) : resolve.call(null,G__65811));
}),reject,beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.libraries","attach-library-finished","app.main.data.workspace.libraries/attach-library-finished",-109043980)),app.main.store.stream)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.link_file_to_library(file_id,library_id__$1));

}
})));

}
});
var internal_fn_connectlibrary_65802__$1 = internal_fn_connectlibrary_65802.bind(obj_65754_this_65757);
return internal_fn_connectlibrary_65802__$1;
});
Object.defineProperty(obj_65754_target_65758_66554,Symbol.toStringTag,(function (){var obj65813 = ({"enumerable":false,"get":prop_get_fn__65766_66555});
return obj65813;
})());

Object.defineProperty(obj_65754_target_65758_66554,Symbol["for"]("penpot.reify:type"),(function (){var obj65815 = ({"enumerable":false,"get":prop_get_fn__65773_66556});
return obj65815;
})());

Object.defineProperty(obj_65754_target_65758_66554,"$plugin",(function (){var obj65817 = ({"enumerable":false,"get":prop_get_fn_plugin_65780_66557});
return obj65817;
})());

Object.defineProperty(obj_65754_target_65758_66554,"local",(function (){var obj65819 = ({"enumerable":true,"get":prop_get_fn_local_65787_66558});
return obj65819;
})());

Object.defineProperty(obj_65754_target_65758_66554,"connected",(function (){var obj65821 = ({"enumerable":true,"get":prop_get_fn_connected_65794_66559});
return obj65821;
})());

Object.defineProperty(obj_65754_target_65758_66554,"availableLibraries",(function (){var obj65823 = ({"enumerable":false,"get":prop_get_fn_availablelibraries_65801_66563});
return obj65823;
})());

Object.defineProperty(obj_65754_target_65758_66554,"connectLibrary",(function (){var obj65825 = ({"enumerable":false,"get":prop_get_fn_connectlibrary_65808_66567});
return obj65825;
})());


return obj_65754;
});

//# sourceMappingURL=app.plugins.library.js.map
