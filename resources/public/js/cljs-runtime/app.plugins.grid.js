import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.store.js";
import "./app.plugins.format.js";
import "./app.plugins.register.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
import "./potok.v2.core.js";
goog.provide('app.plugins.grid');
app.plugins.grid.shape_proxy_QMARK_ = null;
app.plugins.grid.grid_layout_proxy_QMARK_ = (function app$plugins$grid$grid_layout_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"GridLayoutProxy");
});
app.plugins.grid.grid_layout_proxy = (function app$plugins$grid$grid_layout_proxy(plugin_id,file_id,page_id,id){
var obj_59181 = ({});
var to_string_59180 = (function (){
return "GridLayoutProxy";
});
var obj_59181_target_59185_60277 = obj_59181;
var prop_get_fn__59193_60278 = (function (){
var obj_59181_this_59184 = this;
var internal_fn__59187 = to_string_59180;
return internal_fn__59187.call(obj_59181_this_59184);
});
var prop_get_fn__59200_60279 = (function (){
var obj_59181_this_59184 = this;
var internal_fn__59194 = to_string_59180;
return internal_fn__59194.call(obj_59181_this_59184);
});
var prop_get_fn_plugin_59207_60280 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_plugin_59201 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_59201.call(obj_59181_this_59184);
});
var prop_get_fn_id_59214_60281 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_id_59208 = cljs.core.constantly(id);
return internal_fn_id_59208.call(obj_59181_this_59184);
});
var prop_get_fn_file_59221_60282 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_file_59215 = cljs.core.constantly(file_id);
return internal_fn_file_59215.call(obj_59181_this_59184);
});
var prop_get_fn_page_59228_60283 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_page_59222 = cljs.core.constantly(page_id);
return internal_fn_page_59222.call(obj_59181_this_59184);
});
var prop_get_fn_dir_59235_60284 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_dir_59229 = (function (p1__59165_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59165_SHARP_)));
});
return internal_fn_dir_59229.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_dir_59232_60285 = null;
var coercer_fn_dir_59230_60286 = (((((!((schema_dir_59232_60285 == null)))) && ((!(cljs.core.fn_QMARK_(schema_dir_59232_60285))))))?app.common.schema.coercer(schema_dir_59232_60285):null);
var decode_fn_dir_59231_60287 = app.common.json.__GT_clj;
var prop_set_fn_dir_59236_60288 = (function (val_dir_59234){
var obj_59181_this_59184 = this;
var internal_fn_dir_59229 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_direction_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"dir","dir",1734754661),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"dir","dir",1734754661),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),value__$1], null)));

}
}
});
return internal_fn_dir_59229.call(obj_59181_this_59184,obj_59181_this_59184,val_dir_59234);
});
var prop_get_fn_rows_59243_60289 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_rows_59237 = (function (p1__59166_SHARP_){
return app.plugins.format.format_tracks(new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59166_SHARP_)));
});
return internal_fn_rows_59237.call(obj_59181_this_59184,obj_59181_this_59184);
});
var prop_get_fn_columns_59250_60290 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_columns_59244 = (function (p1__59167_SHARP_){
return app.plugins.format.format_tracks(new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59167_SHARP_)));
});
return internal_fn_columns_59244.call(obj_59181_this_59184,obj_59181_this_59184);
});
var prop_get_fn_alignitems_59257_60291 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_alignitems_59251 = (function (p1__59168_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59168_SHARP_)));
});
return internal_fn_alignitems_59251.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_alignitems_59254_60292 = null;
var coercer_fn_alignitems_59252_60293 = (((((!((schema_alignitems_59254_60292 == null)))) && ((!(cljs.core.fn_QMARK_(schema_alignitems_59254_60292))))))?app.common.schema.coercer(schema_alignitems_59254_60292):null);
var decode_fn_alignitems_59253_60294 = app.common.json.__GT_clj;
var prop_set_fn_alignitems_59258_60295 = (function (val_alignitems_59256){
var obj_59181_this_59184 = this;
var internal_fn_alignitems_59251 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.align_items_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignItems","alignItems",410331199),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),value__$1], null)));

}
}
});
return internal_fn_alignitems_59251.call(obj_59181_this_59184,obj_59181_this_59184,val_alignitems_59256);
});
var prop_get_fn_aligncontent_59265_60296 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_aligncontent_59259 = (function (p1__59169_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59169_SHARP_)));
});
return internal_fn_aligncontent_59259.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_aligncontent_59262_60297 = null;
var coercer_fn_aligncontent_59260_60298 = (((((!((schema_aligncontent_59262_60297 == null)))) && ((!(cljs.core.fn_QMARK_(schema_aligncontent_59262_60297))))))?app.common.schema.coercer(schema_aligncontent_59262_60297):null);
var decode_fn_aligncontent_59261_60299 = app.common.json.__GT_clj;
var prop_set_fn_aligncontent_59266_60300 = (function (val_aligncontent_59264){
var obj_59181_this_59184 = this;
var internal_fn_aligncontent_59259 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.align_content_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignContent","alignContent",403294922),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignContent","alignContent",403294922),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),value__$1], null)));

}
}
});
return internal_fn_aligncontent_59259.call(obj_59181_this_59184,obj_59181_this_59184,val_aligncontent_59264);
});
var prop_get_fn_justifyitems_59273_60301 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_justifyitems_59267 = (function (p1__59170_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59170_SHARP_)));
});
return internal_fn_justifyitems_59267.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_justifyitems_59270_60302 = null;
var coercer_fn_justifyitems_59268_60303 = (((((!((schema_justifyitems_59270_60302 == null)))) && ((!(cljs.core.fn_QMARK_(schema_justifyitems_59270_60302))))))?app.common.schema.coercer(schema_justifyitems_59270_60302):null);
var decode_fn_justifyitems_59269_60304 = app.common.json.__GT_clj;
var prop_set_fn_justifyitems_59274_60305 = (function (val_justifyitems_59272){
var obj_59181_this_59184 = this;
var internal_fn_justifyitems_59267 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.justify_items_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"justifyItems","justifyItems",710685366),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"justifyItems","justifyItems",710685366),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),value__$1], null)));

}
}
});
return internal_fn_justifyitems_59267.call(obj_59181_this_59184,obj_59181_this_59184,val_justifyitems_59272);
});
var prop_get_fn_justifycontent_59281_60306 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_justifycontent_59275 = (function (p1__59171_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59171_SHARP_)));
});
return internal_fn_justifycontent_59275.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_justifycontent_59278_60307 = null;
var coercer_fn_justifycontent_59276_60308 = (((((!((schema_justifycontent_59278_60307 == null)))) && ((!(cljs.core.fn_QMARK_(schema_justifycontent_59278_60307))))))?app.common.schema.coercer(schema_justifycontent_59278_60307):null);
var decode_fn_justifycontent_59277_60309 = app.common.json.__GT_clj;
var prop_set_fn_justifycontent_59282_60310 = (function (val_justifycontent_59280){
var obj_59181_this_59184 = this;
var internal_fn_justifycontent_59275 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.justify_content_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),value__$1], null)));

}
}
});
return internal_fn_justifycontent_59275.call(obj_59181_this_59184,obj_59181_this_59184,val_justifycontent_59280);
});
var prop_get_fn_rowgap_59289_60311 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_rowgap_59283 = (function (p1__59172_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59172_SHARP_))),(0));
});
return internal_fn_rowgap_59283.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_rowgap_59286_60312 = null;
var coercer_fn_rowgap_59284_60313 = (((((!((schema_rowgap_59286_60312 == null)))) && ((!(cljs.core.fn_QMARK_(schema_rowgap_59286_60312))))))?app.common.schema.coercer(schema_rowgap_59286_60312):null);
var decode_fn_rowgap_59285_60314 = app.common.json.__GT_clj;
var prop_set_fn_rowgap_59290_60315 = (function (val_rowgap_59288){
var obj_59181_this_59184 = this;
var internal_fn_rowgap_59283 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rowGap","rowGap",1869424743),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rowGap","rowGap",1869424743),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),value], null)], null)));

}
}
});
return internal_fn_rowgap_59283.call(obj_59181_this_59184,obj_59181_this_59184,val_rowgap_59288);
});
var prop_get_fn_columngap_59297_60316 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_columngap_59291 = (function (p1__59173_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59173_SHARP_))),(0));
});
return internal_fn_columngap_59291.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_columngap_59294_60317 = null;
var coercer_fn_columngap_59292_60318 = (((((!((schema_columngap_59294_60317 == null)))) && ((!(cljs.core.fn_QMARK_(schema_columngap_59294_60317))))))?app.common.schema.coercer(schema_columngap_59294_60317):null);
var decode_fn_columngap_59293_60319 = app.common.json.__GT_clj;
var prop_set_fn_columngap_59298_60320 = (function (val_columngap_59296){
var obj_59181_this_59184 = this;
var internal_fn_columngap_59291 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"columnGap","columnGap",-376837767),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"columnGap","columnGap",-376837767),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),value], null)], null)));

}
}
});
return internal_fn_columngap_59291.call(obj_59181_this_59184,obj_59181_this_59184,val_columngap_59296);
});
var prop_get_fn_verticalpadding_59305_60321 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_verticalpadding_59299 = (function (p1__59174_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59174_SHARP_))),(0));
});
return internal_fn_verticalpadding_59299.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_verticalpadding_59302_60322 = null;
var coercer_fn_verticalpadding_59300_60323 = (((((!((schema_verticalpadding_59302_60322 == null)))) && ((!(cljs.core.fn_QMARK_(schema_verticalpadding_59302_60322))))))?app.common.schema.coercer(schema_verticalpadding_59302_60322):null);
var decode_fn_verticalpadding_59301_60324 = app.common.json.__GT_clj;
var prop_set_fn_verticalpadding_59306_60325 = (function (val_verticalpadding_59304){
var obj_59181_this_59184 = this;
var internal_fn_verticalpadding_59299 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalPadding","verticalPadding",-116062864),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalPadding","verticalPadding",-116062864),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",-936759954),value,new cljs.core.Keyword(null,"p3","p3",1731040739),value], null)], null)));

}
}
});
return internal_fn_verticalpadding_59299.call(obj_59181_this_59184,obj_59181_this_59184,val_verticalpadding_59304);
});
var prop_get_fn_horizontalpadding_59313_60326 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_horizontalpadding_59307 = (function (p1__59175_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59175_SHARP_))),(0));
});
return internal_fn_horizontalpadding_59307.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_horizontalpadding_59310_60327 = null;
var coercer_fn_horizontalpadding_59308_60328 = (((((!((schema_horizontalpadding_59310_60327 == null)))) && ((!(cljs.core.fn_QMARK_(schema_horizontalpadding_59310_60327))))))?app.common.schema.coercer(schema_horizontalpadding_59310_60327):null);
var decode_fn_horizontalpadding_59309_60329 = app.common.json.__GT_clj;
var prop_set_fn_horizontalpadding_59314_60330 = (function (val_horizontalpadding_59312){
var obj_59181_this_59184 = this;
var internal_fn_horizontalpadding_59307 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalPadding","horizontalPadding",513951974),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalPadding","horizontalPadding",513951974),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p2","p2",905500641),value,new cljs.core.Keyword(null,"p4","p4",-1090126814),value], null)], null)));

}
}
});
return internal_fn_horizontalpadding_59307.call(obj_59181_this_59184,obj_59181_this_59184,val_horizontalpadding_59312);
});
var prop_get_fn_toppadding_59321_60331 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_toppadding_59315 = (function (p1__59176_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59176_SHARP_))),(0));
});
return internal_fn_toppadding_59315.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_toppadding_59318_60332 = null;
var coercer_fn_toppadding_59316_60333 = (((((!((schema_toppadding_59318_60332 == null)))) && ((!(cljs.core.fn_QMARK_(schema_toppadding_59318_60332))))))?app.common.schema.coercer(schema_toppadding_59318_60332):null);
var decode_fn_toppadding_59317_60334 = app.common.json.__GT_clj;
var prop_set_fn_toppadding_59322_60335 = (function (val_toppadding_59320){
var obj_59181_this_59184 = this;
var internal_fn_toppadding_59315 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"topPadding","topPadding",453548852),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"topPadding","topPadding",453548852),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p1","p1",-936759954),value], null)], null)));

}
}
});
return internal_fn_toppadding_59315.call(obj_59181_this_59184,obj_59181_this_59184,val_toppadding_59320);
});
var prop_get_fn_rightpadding_59329_60336 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_rightpadding_59323 = (function (p1__59177_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59177_SHARP_))),(0));
});
return internal_fn_rightpadding_59323.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_rightpadding_59326_60337 = null;
var coercer_fn_rightpadding_59324_60338 = (((((!((schema_rightpadding_59326_60337 == null)))) && ((!(cljs.core.fn_QMARK_(schema_rightpadding_59326_60337))))))?app.common.schema.coercer(schema_rightpadding_59326_60337):null);
var decode_fn_rightpadding_59325_60339 = app.common.json.__GT_clj;
var prop_set_fn_rightpadding_59330_60340 = (function (val_rightpadding_59328){
var obj_59181_this_59184 = this;
var internal_fn_rightpadding_59323 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rightPadding","rightPadding",553025942),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"righPadding","righPadding",422429811),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p2","p2",905500641),value], null)], null)));

}
}
});
return internal_fn_rightpadding_59323.call(obj_59181_this_59184,obj_59181_this_59184,val_rightpadding_59328);
});
var prop_get_fn_bottompadding_59337_60341 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_bottompadding_59331 = (function (p1__59178_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59178_SHARP_))),(0));
});
return internal_fn_bottompadding_59331.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_bottompadding_59334_60342 = null;
var coercer_fn_bottompadding_59332_60343 = (((((!((schema_bottompadding_59334_60342 == null)))) && ((!(cljs.core.fn_QMARK_(schema_bottompadding_59334_60342))))))?app.common.schema.coercer(schema_bottompadding_59334_60342):null);
var decode_fn_bottompadding_59333_60344 = app.common.json.__GT_clj;
var prop_set_fn_bottompadding_59338_60345 = (function (val_bottompadding_59336){
var obj_59181_this_59184 = this;
var internal_fn_bottompadding_59331 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"bottomPadding","bottomPadding",-646451636),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"bottomPadding","bottomPadding",-646451636),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p3","p3",1731040739),value], null)], null)));

}
}
});
return internal_fn_bottompadding_59331.call(obj_59181_this_59184,obj_59181_this_59184,val_bottompadding_59336);
});
var prop_get_fn_leftpadding_59345_60346 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_leftpadding_59339 = (function (p1__59179_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59179_SHARP_))),(0));
});
return internal_fn_leftpadding_59339.call(obj_59181_this_59184,obj_59181_this_59184);
});
var schema_leftpadding_59342_60347 = null;
var coercer_fn_leftpadding_59340_60348 = (((((!((schema_leftpadding_59342_60347 == null)))) && ((!(cljs.core.fn_QMARK_(schema_leftpadding_59342_60347))))))?app.common.schema.coercer(schema_leftpadding_59342_60347):null);
var decode_fn_leftpadding_59341_60349 = app.common.json.__GT_clj;
var prop_set_fn_leftpadding_59346_60350 = (function (val_leftpadding_59344){
var obj_59181_this_59184 = this;
var internal_fn_leftpadding_59339 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"leftPadding","leftPadding",-550857795),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"leftPadding","leftPadding",-550857795),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p4","p4",-1090126814),value], null)], null)));

}
}
});
return internal_fn_leftpadding_59339.call(obj_59181_this_59184,obj_59181_this_59184,val_leftpadding_59344);
});
var schema_addrow_59350_60351 = null;
var coercer_fn_addrow_59348_60352 = (((((!((schema_addrow_59350_60351 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addrow_59350_60351))))))?app.common.schema.coercer(schema_addrow_59350_60351):null);
var decode_fn_addrow_59349_60353 = app.common.json.__GT_clj;
var prop_get_fn_addrow_59353_60354 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_addrow_59347 = (function (type,value){
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_track_types,type__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRow-type","addRow-type",1581806272),type__$1);
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"percent","percent",2031453817),type__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),type__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),type__$1)))))) && (cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRow-value","addRow-value",-1889184769),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRow","addRow",-1526940876),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"value","value",305978217),value], null)));

}
}
}
});
var internal_fn_addrow_59347__$1 = internal_fn_addrow_59347.bind(obj_59181_this_59184);
return internal_fn_addrow_59347__$1;
});
var schema_addrowatindex_59357_60355 = null;
var coercer_fn_addrowatindex_59355_60356 = (((((!((schema_addrowatindex_59357_60355 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addrowatindex_59357_60355))))))?app.common.schema.coercer(schema_addrowatindex_59357_60355):null);
var decode_fn_addrowatindex_59356_60357 = app.common.json.__GT_clj;
var prop_get_fn_addrowatindex_59360_60358 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_addrowatindex_59354 = (function (index,type,value){
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(index))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRowAtIndex-index","addRowAtIndex-index",-1679866381),index);
} else {
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_track_types,type__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRowAtIndex-type","addRowAtIndex-type",1831710979),type__$1);
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"percent","percent",2031453817),type__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),type__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),type__$1)))))) && (cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRowAtIndex-value","addRowAtIndex-value",-515836114),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRowAtIndex","addRowAtIndex",-909836310),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"value","value",305978217),value], null),index));

}
}
}
}
});
var internal_fn_addrowatindex_59354__$1 = internal_fn_addrowatindex_59354.bind(obj_59181_this_59184);
return internal_fn_addrowatindex_59354__$1;
});
var schema_addcolumn_59364_60359 = null;
var coercer_fn_addcolumn_59362_60360 = (((((!((schema_addcolumn_59364_60359 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addcolumn_59364_60359))))))?app.common.schema.coercer(schema_addcolumn_59364_60359):null);
var decode_fn_addcolumn_59363_60361 = app.common.json.__GT_clj;
var prop_get_fn_addcolumn_59367_60362 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_addcolumn_59361 = (function (type,value){
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_track_types,type__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addColumn-type","addColumn-type",369510652),type__$1);
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"percent","percent",2031453817),type__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),type__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lex","lex",1572323917),type__$1)))))) && (cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addColumn-value","addColumn-value",-154426043),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addColumn","addColumn",-1515461232),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"value","value",305978217),value], null)));

}
}
}
});
var internal_fn_addcolumn_59361__$1 = internal_fn_addcolumn_59361.bind(obj_59181_this_59184);
return internal_fn_addcolumn_59361__$1;
});
var schema_addcolumnatindex_59371_60363 = null;
var coercer_fn_addcolumnatindex_59369_60364 = (((((!((schema_addcolumnatindex_59371_60363 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addcolumnatindex_59371_60363))))))?app.common.schema.coercer(schema_addcolumnatindex_59371_60363):null);
var decode_fn_addcolumnatindex_59370_60365 = app.common.json.__GT_clj;
var prop_get_fn_addcolumnatindex_59374_60366 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_addcolumnatindex_59368 = (function (index,type,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(index))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addColumnAtIndex-index","addColumnAtIndex-index",1508798879),index);
} else {
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_track_types,type)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addColumnAtIndex-type","addColumnAtIndex-type",-990488622),type);
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"percent","percent",2031453817),type)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),type)))))) && (cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addColumnAtIndex-value","addColumnAtIndex-value",-1084618681),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addColumnAtIndex","addColumnAtIndex",316866004),"Plugin doesn't have 'content:write' permission");
} else {
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"value","value",305978217),value], null),index));

}
}
}
}
});
var internal_fn_addcolumnatindex_59368__$1 = internal_fn_addcolumnatindex_59368.bind(obj_59181_this_59184);
return internal_fn_addcolumnatindex_59368__$1;
});
var schema_removerow_59378_60367 = null;
var coercer_fn_removerow_59376_60368 = (((((!((schema_removerow_59378_60367 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removerow_59378_60367))))))?app.common.schema.coercer(schema_removerow_59378_60367):null);
var decode_fn_removerow_59377_60369 = app.common.json.__GT_clj;
var prop_get_fn_removerow_59381_60370 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_removerow_59375 = (function (index){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(index))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeRow","removeRow",453086520),index);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeRow","removeRow",453086520),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.remove_layout_track(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"row","row",-570139521),index));

}
}
});
var internal_fn_removerow_59375__$1 = internal_fn_removerow_59375.bind(obj_59181_this_59184);
return internal_fn_removerow_59375__$1;
});
var schema_removecolumn_59385_60371 = null;
var coercer_fn_removecolumn_59383_60372 = (((((!((schema_removecolumn_59385_60371 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removecolumn_59385_60371))))))?app.common.schema.coercer(schema_removecolumn_59385_60371):null);
var decode_fn_removecolumn_59384_60373 = app.common.json.__GT_clj;
var prop_get_fn_removecolumn_59388_60374 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_removecolumn_59382 = (function (index){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(index))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeColumn","removeColumn",-1624774294),index);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeColumn","removeColumn",-1624774294),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.remove_layout_track(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"column","column",2078222095),index));

}
}
});
var internal_fn_removecolumn_59382__$1 = internal_fn_removecolumn_59382.bind(obj_59181_this_59184);
return internal_fn_removecolumn_59382__$1;
});
var schema_setcolumn_59392_60375 = null;
var coercer_fn_setcolumn_59390_60376 = (((((!((schema_setcolumn_59392_60375 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setcolumn_59392_60375))))))?app.common.schema.coercer(schema_setcolumn_59392_60375):null);
var decode_fn_setcolumn_59391_60377 = app.common.json.__GT_clj;
var prop_get_fn_setcolumn_59395_60378 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_setcolumn_59389 = (function (index,type,value){
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(index))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setColumn-index","setColumn-index",-1846647314),index);
} else {
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_track_types,type__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setColumn-type","setColumn-type",373633885),type__$1);
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"percent","percent",2031453817),type__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),type__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),type__$1)))))) && (cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setColumn-value","setColumn-value",748250994),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setColumn","setColumn",1194844473),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.change_layout_track(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"column","column",2078222095),index,app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"value","value",305978217),value], null))));

}
}
}
}
});
var internal_fn_setcolumn_59389__$1 = internal_fn_setcolumn_59389.bind(obj_59181_this_59184);
return internal_fn_setcolumn_59389__$1;
});
var schema_setrow_59399_60379 = null;
var coercer_fn_setrow_59397_60380 = (((((!((schema_setrow_59399_60379 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setrow_59399_60379))))))?app.common.schema.coercer(schema_setrow_59399_60379):null);
var decode_fn_setrow_59398_60381 = app.common.json.__GT_clj;
var prop_get_fn_setrow_59402_60382 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_setrow_59396 = (function (index,type,value){
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(index))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setRow-index","setRow-index",1430875983),index);
} else {
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_track_types,type__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setRow-type","setRow-type",1456587126),type__$1);
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"percent","percent",2031453817),type__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),type__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),type__$1)))))) && (cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setRow-value","setRow-value",-11319580),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setRow","setRow",959178877),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.change_layout_track(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"row","row",-570139521),index,app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"value","value",305978217),value], null))));

}
}
}
}
});
var internal_fn_setrow_59396__$1 = internal_fn_setrow_59396.bind(obj_59181_this_59184);
return internal_fn_setrow_59396__$1;
});
var schema_remove_59406_60383 = null;
var coercer_fn_remove_59404_60384 = (((((!((schema_remove_59406_60383 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_59406_60383))))))?app.common.schema.coercer(schema_remove_59406_60383):null);
var decode_fn_remove_59405_60385 = app.common.json.__GT_clj;
var prop_get_fn_remove_59409_60386 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_remove_59403 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"remove","remove",-131428414),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.remove_layout(cljs.core.PersistentHashSet.createAsIfByAssoc([id])));

}
});
var internal_fn_remove_59403__$1 = internal_fn_remove_59403.bind(obj_59181_this_59184);
return internal_fn_remove_59403__$1;
});
var schema_appendchild_59413_60387 = null;
var coercer_fn_appendchild_59411_60388 = (((((!((schema_appendchild_59413_60387 == null)))) && ((!(cljs.core.fn_QMARK_(schema_appendchild_59413_60387))))))?app.common.schema.coercer(schema_appendchild_59413_60387):null);
var decode_fn_appendchild_59412_60389 = app.common.json.__GT_clj;
var prop_get_fn_appendchild_59416_60390 = (function (){
var obj_59181_this_59184 = this;
var internal_fn_appendchild_59410 = (function (child,row,column){
if(cljs.core.not((app.plugins.grid.shape_proxy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? app.plugins.grid.shape_proxy_QMARK_.cljs$core$IFn$_invoke$arity$1(child) : app.plugins.grid.shape_proxy_QMARK_.call(null,child)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"appendChild-child","appendChild-child",-568841985),child);
} else {
if((((row < (0))) || (cljs.core.not(app.common.schema.valid_safe_int_QMARK_(row))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"appendChild-row","appendChild-row",420578043),row);
} else {
if((((column < (0))) || (cljs.core.not(app.common.schema.valid_safe_int_QMARK_(column))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"appendChild-column","appendChild-column",-2018830626),column);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"appendChild","appendChild",1287125270),"Plugin doesn't have 'content:write' permission");
} else {
var child_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"$id");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.transforms.move_shapes_to_frame(cljs.core.PersistentHashSet.createAsIfByAssoc([child_id]),id,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null))], 0));

}
}
}
}
});
var internal_fn_appendchild_59410__$1 = internal_fn_appendchild_59410.bind(obj_59181_this_59184);
return internal_fn_appendchild_59410__$1;
});
Object.defineProperty(obj_59181_target_59185_60277,Symbol.toStringTag,(function (){var obj59726 = ({"enumerable":false,"get":prop_get_fn__59193_60278});
return obj59726;
})());

Object.defineProperty(obj_59181_target_59185_60277,Symbol["for"]("penpot.reify:type"),(function (){var obj59729 = ({"enumerable":false,"get":prop_get_fn__59200_60279});
return obj59729;
})());

Object.defineProperty(obj_59181_target_59185_60277,"$plugin",(function (){var obj59736 = ({"enumerable":false,"get":prop_get_fn_plugin_59207_60280});
return obj59736;
})());

Object.defineProperty(obj_59181_target_59185_60277,"$id",(function (){var obj59808 = ({"enumerable":false,"get":prop_get_fn_id_59214_60281});
return obj59808;
})());

Object.defineProperty(obj_59181_target_59185_60277,"$file",(function (){var obj59889 = ({"enumerable":false,"get":prop_get_fn_file_59221_60282});
return obj59889;
})());

Object.defineProperty(obj_59181_target_59185_60277,"$page",(function (){var obj59914 = ({"enumerable":false,"get":prop_get_fn_page_59228_60283});
return obj59914;
})());

Object.defineProperty(obj_59181_target_59185_60277,"dir",(function (){var obj59916 = ({"enumerable":true,"get":prop_get_fn_dir_59235_60284,"set":prop_set_fn_dir_59236_60288});
return obj59916;
})());

Object.defineProperty(obj_59181_target_59185_60277,"rows",(function (){var obj59922 = ({"enumerable":true,"get":prop_get_fn_rows_59243_60289});
return obj59922;
})());

Object.defineProperty(obj_59181_target_59185_60277,"columns",(function (){var obj59924 = ({"enumerable":true,"get":prop_get_fn_columns_59250_60290});
return obj59924;
})());

Object.defineProperty(obj_59181_target_59185_60277,"alignItems",(function (){var obj59926 = ({"enumerable":true,"get":prop_get_fn_alignitems_59257_60291,"set":prop_set_fn_alignitems_59258_60295});
return obj59926;
})());

Object.defineProperty(obj_59181_target_59185_60277,"alignContent",(function (){var obj59928 = ({"enumerable":true,"get":prop_get_fn_aligncontent_59265_60296,"set":prop_set_fn_aligncontent_59266_60300});
return obj59928;
})());

Object.defineProperty(obj_59181_target_59185_60277,"justifyItems",(function (){var obj59930 = ({"enumerable":true,"get":prop_get_fn_justifyitems_59273_60301,"set":prop_set_fn_justifyitems_59274_60305});
return obj59930;
})());

Object.defineProperty(obj_59181_target_59185_60277,"justifyContent",(function (){var obj59932 = ({"enumerable":true,"get":prop_get_fn_justifycontent_59281_60306,"set":prop_set_fn_justifycontent_59282_60310});
return obj59932;
})());

Object.defineProperty(obj_59181_target_59185_60277,"rowGap",(function (){var obj59934 = ({"enumerable":true,"get":prop_get_fn_rowgap_59289_60311,"set":prop_set_fn_rowgap_59290_60315});
return obj59934;
})());

Object.defineProperty(obj_59181_target_59185_60277,"columnGap",(function (){var obj59936 = ({"enumerable":true,"get":prop_get_fn_columngap_59297_60316,"set":prop_set_fn_columngap_59298_60320});
return obj59936;
})());

Object.defineProperty(obj_59181_target_59185_60277,"verticalPadding",(function (){var obj59938 = ({"enumerable":true,"get":prop_get_fn_verticalpadding_59305_60321,"set":prop_set_fn_verticalpadding_59306_60325});
return obj59938;
})());

Object.defineProperty(obj_59181_target_59185_60277,"horizontalPadding",(function (){var obj59940 = ({"enumerable":true,"get":prop_get_fn_horizontalpadding_59313_60326,"set":prop_set_fn_horizontalpadding_59314_60330});
return obj59940;
})());

Object.defineProperty(obj_59181_target_59185_60277,"topPadding",(function (){var obj59942 = ({"enumerable":true,"get":prop_get_fn_toppadding_59321_60331,"set":prop_set_fn_toppadding_59322_60335});
return obj59942;
})());

Object.defineProperty(obj_59181_target_59185_60277,"rightPadding",(function (){var obj59944 = ({"enumerable":true,"get":prop_get_fn_rightpadding_59329_60336,"set":prop_set_fn_rightpadding_59330_60340});
return obj59944;
})());

Object.defineProperty(obj_59181_target_59185_60277,"bottomPadding",(function (){var obj59946 = ({"enumerable":true,"get":prop_get_fn_bottompadding_59337_60341,"set":prop_set_fn_bottompadding_59338_60345});
return obj59946;
})());

Object.defineProperty(obj_59181_target_59185_60277,"leftPadding",(function (){var obj59948 = ({"enumerable":true,"get":prop_get_fn_leftpadding_59345_60346,"set":prop_set_fn_leftpadding_59346_60350});
return obj59948;
})());

Object.defineProperty(obj_59181_target_59185_60277,"addRow",(function (){var obj59951 = ({"enumerable":false,"get":prop_get_fn_addrow_59353_60354});
return obj59951;
})());

Object.defineProperty(obj_59181_target_59185_60277,"addRowAtIndex",(function (){var obj59953 = ({"enumerable":false,"get":prop_get_fn_addrowatindex_59360_60358});
return obj59953;
})());

Object.defineProperty(obj_59181_target_59185_60277,"addColumn",(function (){var obj59955 = ({"enumerable":false,"get":prop_get_fn_addcolumn_59367_60362});
return obj59955;
})());

Object.defineProperty(obj_59181_target_59185_60277,"addColumnAtIndex",(function (){var obj59957 = ({"enumerable":false,"get":prop_get_fn_addcolumnatindex_59374_60366});
return obj59957;
})());

Object.defineProperty(obj_59181_target_59185_60277,"removeRow",(function (){var obj59960 = ({"enumerable":false,"get":prop_get_fn_removerow_59381_60370});
return obj59960;
})());

Object.defineProperty(obj_59181_target_59185_60277,"removeColumn",(function (){var obj59962 = ({"enumerable":false,"get":prop_get_fn_removecolumn_59388_60374});
return obj59962;
})());

Object.defineProperty(obj_59181_target_59185_60277,"setColumn",(function (){var obj59964 = ({"enumerable":false,"get":prop_get_fn_setcolumn_59395_60378});
return obj59964;
})());

Object.defineProperty(obj_59181_target_59185_60277,"setRow",(function (){var obj59966 = ({"enumerable":false,"get":prop_get_fn_setrow_59402_60382});
return obj59966;
})());

Object.defineProperty(obj_59181_target_59185_60277,"remove",(function (){var obj59968 = ({"enumerable":false,"get":prop_get_fn_remove_59409_60386});
return obj59968;
})());

Object.defineProperty(obj_59181_target_59185_60277,"appendChild",(function (){var obj59971 = ({"enumerable":false,"get":prop_get_fn_appendchild_59416_60390});
return obj59971;
})());


return obj_59181;
});
app.plugins.grid.layout_cell_proxy_QMARK_ = (function app$plugins$grid$layout_cell_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"GridCellProxy");
});
app.plugins.grid.layout_cell_proxy = (function app$plugins$grid$layout_cell_proxy(plugin_id,file_id,page_id,id){
var locate_cell = (function app$plugins$grid$layout_cell_proxy_$_locate_cell(_){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
var parent = app.plugins.utils.locate_shape(file_id,page_id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
return app.common.types.shape.layout.get_cell_by_shape_id(parent,id);
});
var obj_59989 = ({});
var to_string_59988 = (function (){
return "GridCellProxy";
});
var obj_59989_target_59994_60560 = obj_59989;
var prop_get_fn__60002_60561 = (function (){
var obj_59989_this_59993 = this;
var internal_fn__59996 = to_string_59988;
return internal_fn__59996.call(obj_59989_this_59993);
});
var prop_get_fn__60009_60562 = (function (){
var obj_59989_this_59993 = this;
var internal_fn__60003 = to_string_59988;
return internal_fn__60003.call(obj_59989_this_59993);
});
var prop_get_fn_plugin_60016_60563 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_plugin_60010 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_60010.call(obj_59989_this_59993);
});
var prop_get_fn_id_60023_60564 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_id_60017 = cljs.core.constantly(id);
return internal_fn_id_60017.call(obj_59989_this_59993);
});
var prop_get_fn_file_60030_60565 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_file_60024 = cljs.core.constantly(file_id);
return internal_fn_file_60024.call(obj_59989_this_59993);
});
var prop_get_fn_page_60037_60566 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_page_60031 = cljs.core.constantly(page_id);
return internal_fn_page_60031.call(obj_59989_this_59993);
});
var prop_get_fn_row_60045_60567 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_row_60038 = (function (p1__59973_SHARP_){
return new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(locate_cell(p1__59973_SHARP_));
});
return internal_fn_row_60038.call(obj_59989_this_59993,obj_59989_this_59993);
});
var schema_row_60041_60568 = null;
var coercer_fn_row_60039_60569 = (((((!((schema_row_60041_60568 == null)))) && ((!(cljs.core.fn_QMARK_(schema_row_60041_60568))))))?app.common.schema.coercer(schema_row_60041_60568):null);
var decode_fn_row_60040_60570 = app.common.json.__GT_clj;
var prop_set_fn_row_60046_60571 = (function (val_row_60043){
var obj_59989_this_59993 = this;
var internal_fn_row_60038 = (function (self,value){
var cell = locate_cell(self);
var shape = app.plugins.utils.proxy__GT_shape(self);
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"row-value","row-value",-1067843622),value);
} else {
if((cell == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"row-cell","row-cell",1612632022),"cell not found");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"row","row",-570139521),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cell_position(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),value], null)));

}
}
}
});
return internal_fn_row_60038.call(obj_59989_this_59993,obj_59989_this_59993,val_row_60043);
});
var prop_get_fn_rowspan_60053_60572 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_rowspan_60047 = (function (p1__59975_SHARP_){
return new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(locate_cell(p1__59975_SHARP_));
});
return internal_fn_rowspan_60047.call(obj_59989_this_59993,obj_59989_this_59993);
});
var schema_rowspan_60050_60573 = null;
var coercer_fn_rowspan_60048_60574 = (((((!((schema_rowspan_60050_60573 == null)))) && ((!(cljs.core.fn_QMARK_(schema_rowspan_60050_60573))))))?app.common.schema.coercer(schema_rowspan_60050_60573):null);
var decode_fn_rowspan_60049_60575 = app.common.json.__GT_clj;
var prop_set_fn_rowspan_60054_60576 = (function (val_rowspan_60052){
var obj_59989_this_59993 = this;
var internal_fn_rowspan_60047 = (function (self,value){
var shape = app.plugins.utils.proxy__GT_shape(self);
var cell = locate_cell(self);
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rowSpan-value","rowSpan-value",-2081956858),value);
} else {
if((cell == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rowSpan-cell","rowSpan-cell",-2040199739),"cell not found");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cell_position(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),value], null)));

}
}
}
});
return internal_fn_rowspan_60047.call(obj_59989_this_59993,obj_59989_this_59993,val_rowspan_60052);
});
var prop_get_fn_column_60061_60577 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_column_60055 = (function (p1__59977_SHARP_){
return new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(locate_cell(p1__59977_SHARP_));
});
return internal_fn_column_60055.call(obj_59989_this_59993,obj_59989_this_59993);
});
var schema_column_60058_60578 = null;
var coercer_fn_column_60056_60579 = (((((!((schema_column_60058_60578 == null)))) && ((!(cljs.core.fn_QMARK_(schema_column_60058_60578))))))?app.common.schema.coercer(schema_column_60058_60578):null);
var decode_fn_column_60057_60580 = app.common.json.__GT_clj;
var prop_set_fn_column_60062_60581 = (function (val_column_60060){
var obj_59989_this_59993 = this;
var internal_fn_column_60055 = (function (self,value){
var shape = app.plugins.utils.proxy__GT_shape(self);
var cell = locate_cell(self);
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"column-value","column-value",1145304215),value);
} else {
if((cell == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"column-cell","column-cell",-497688888),"cell not found");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"column","column",2078222095),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cell_position(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column","column",2078222095),value], null)));

}
}
}
});
return internal_fn_column_60055.call(obj_59989_this_59993,obj_59989_this_59993,val_column_60060);
});
var prop_get_fn_columnspan_60069_60582 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_columnspan_60063 = (function (p1__59978_SHARP_){
return new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(locate_cell(p1__59978_SHARP_));
});
return internal_fn_columnspan_60063.call(obj_59989_this_59993,obj_59989_this_59993);
});
var schema_columnspan_60066_60583 = null;
var coercer_fn_columnspan_60064_60584 = (((((!((schema_columnspan_60066_60583 == null)))) && ((!(cljs.core.fn_QMARK_(schema_columnspan_60066_60583))))))?app.common.schema.coercer(schema_columnspan_60066_60583):null);
var decode_fn_columnspan_60065_60585 = app.common.json.__GT_clj;
var prop_set_fn_columnspan_60070_60586 = (function (val_columnspan_60068){
var obj_59989_this_59993 = this;
var internal_fn_columnspan_60063 = (function (self,value){
var shape = app.plugins.utils.proxy__GT_shape(self);
var cell = locate_cell(self);
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"columnSpan-value","columnSpan-value",2076747203),value);
} else {
if((cell == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"columnSpan-cell","columnSpan-cell",-149218441),"cell not found");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"columnSpan","columnSpan",-1065100091),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cell_position(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column-span","column-span",1302376857),value], null)));

}
}
}
});
return internal_fn_columnspan_60063.call(obj_59989_this_59993,obj_59989_this_59993,val_columnspan_60068);
});
var prop_get_fn_areaname_60077_60587 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_areaname_60071 = (function (p1__59980_SHARP_){
return new cljs.core.Keyword(null,"area-name","area-name",-496581211).cljs$core$IFn$_invoke$arity$1(locate_cell(p1__59980_SHARP_));
});
return internal_fn_areaname_60071.call(obj_59989_this_59993,obj_59989_this_59993);
});
var schema_areaname_60074_60588 = null;
var coercer_fn_areaname_60072_60589 = (((((!((schema_areaname_60074_60588 == null)))) && ((!(cljs.core.fn_QMARK_(schema_areaname_60074_60588))))))?app.common.schema.coercer(schema_areaname_60074_60588):null);
var decode_fn_areaname_60073_60590 = app.common.json.__GT_clj;
var prop_set_fn_areaname_60078_60591 = (function (val_areaname_60076){
var obj_59989_this_59993 = this;
var internal_fn_areaname_60071 = (function (self,value){
var shape = app.plugins.utils.proxy__GT_shape(self);
var cell = locate_cell(self);
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"areaName-value","areaName-value",982496147),value);
} else {
if((cell == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"areaName-cell","areaName-cell",303279412),"cell not found");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"areaName","areaName",-785186640),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cells(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"area-name","area-name",-496581211),value], null)));

}
}
}
});
return internal_fn_areaname_60071.call(obj_59989_this_59993,obj_59989_this_59993,val_areaname_60076);
});
var prop_get_fn_position_60085_60592 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_position_60079 = (function (p1__59981_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(locate_cell(p1__59981_SHARP_)));
});
return internal_fn_position_60079.call(obj_59989_this_59993,obj_59989_this_59993);
});
var schema_position_60082_60593 = null;
var coercer_fn_position_60080_60594 = (((((!((schema_position_60082_60593 == null)))) && ((!(cljs.core.fn_QMARK_(schema_position_60082_60593))))))?app.common.schema.coercer(schema_position_60082_60593):null);
var decode_fn_position_60081_60595 = app.common.json.__GT_clj;
var prop_set_fn_position_60086_60596 = (function (val_position_60084){
var obj_59989_this_59993 = this;
var internal_fn_position_60079 = (function (self,value){
var shape = app.plugins.utils.proxy__GT_shape(self);
var cell = locate_cell(self);
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_position_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"position-value","position-value",-1598412318),value__$1);
} else {
if((cell == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"position-cell","position-cell",-608152505),"cell not found");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"position","position",-2011731912),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.change_cells_mode(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)]),value__$1));

}
}
}
});
return internal_fn_position_60079.call(obj_59989_this_59993,obj_59989_this_59993,val_position_60084);
});
var prop_get_fn_alignself_60093_60597 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_alignself_60087 = (function (p1__59982_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"align-self","align-self",1475936794).cljs$core$IFn$_invoke$arity$1(locate_cell(p1__59982_SHARP_)));
});
return internal_fn_alignself_60087.call(obj_59989_this_59993,obj_59989_this_59993);
});
var schema_alignself_60090_60598 = null;
var coercer_fn_alignself_60088_60599 = (((((!((schema_alignself_60090_60598 == null)))) && ((!(cljs.core.fn_QMARK_(schema_alignself_60090_60598))))))?app.common.schema.coercer(schema_alignself_60090_60598):null);
var decode_fn_alignself_60089_60600 = app.common.json.__GT_clj;
var prop_set_fn_alignself_60094_60601 = (function (val_alignself_60092){
var obj_59989_this_59993 = this;
var internal_fn_alignself_60087 = (function (self,value){
var shape = app.plugins.utils.proxy__GT_shape(self);
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
var cell = locate_cell(self);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_cell_align_self_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignSelf-value","alignSelf-value",1581687155),value__$1);
} else {
if((cell == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignSelf-cell","alignSelf-cell",702748092),"cell not found");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignSelf","alignSelf",-1666557725),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cells(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),value__$1], null)));

}
}
}
});
return internal_fn_alignself_60087.call(obj_59989_this_59993,obj_59989_this_59993,val_alignself_60092);
});
var prop_get_fn_justifyself_60102_60602 = (function (){
var obj_59989_this_59993 = this;
var internal_fn_justifyself_60095 = (function (p1__59984_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605).cljs$core$IFn$_invoke$arity$1(locate_cell(p1__59984_SHARP_)));
});
return internal_fn_justifyself_60095.call(obj_59989_this_59993,obj_59989_this_59993);
});
var schema_justifyself_60098_60603 = null;
var coercer_fn_justifyself_60096_60604 = (((((!((schema_justifyself_60098_60603 == null)))) && ((!(cljs.core.fn_QMARK_(schema_justifyself_60098_60603))))))?app.common.schema.coercer(schema_justifyself_60098_60603):null);
var decode_fn_justifyself_60097_60605 = app.common.json.__GT_clj;
var prop_set_fn_justifyself_60103_60606 = (function (val_justifyself_60100){
var obj_59989_this_59993 = this;
var internal_fn_justifyself_60095 = (function (self,value){
var shape = app.plugins.utils.proxy__GT_shape(self);
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
var cell = locate_cell(self);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.grid_cell_justify_self_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"justifySelf-value","justifySelf-value",131913092),value__$1);
} else {
if((cell == null)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"justifySelf-cell","justifySelf-cell",1644610466),"cell not found");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"justifySelf","justifySelf",-894439176),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cells(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),value__$1], null)));

}
}
}
});
return internal_fn_justifyself_60095.call(obj_59989_this_59993,obj_59989_this_59993,val_justifyself_60100);
});
Object.defineProperty(obj_59989_target_59994_60560,Symbol.toStringTag,(function (){var obj60250 = ({"enumerable":false,"get":prop_get_fn__60002_60561});
return obj60250;
})());

Object.defineProperty(obj_59989_target_59994_60560,Symbol["for"]("penpot.reify:type"),(function (){var obj60252 = ({"enumerable":false,"get":prop_get_fn__60009_60562});
return obj60252;
})());

Object.defineProperty(obj_59989_target_59994_60560,"$plugin",(function (){var obj60254 = ({"enumerable":false,"get":prop_get_fn_plugin_60016_60563});
return obj60254;
})());

Object.defineProperty(obj_59989_target_59994_60560,"$id",(function (){var obj60256 = ({"enumerable":false,"get":prop_get_fn_id_60023_60564});
return obj60256;
})());

Object.defineProperty(obj_59989_target_59994_60560,"$file",(function (){var obj60258 = ({"enumerable":false,"get":prop_get_fn_file_60030_60565});
return obj60258;
})());

Object.defineProperty(obj_59989_target_59994_60560,"$page",(function (){var obj60260 = ({"enumerable":false,"get":prop_get_fn_page_60037_60566});
return obj60260;
})());

Object.defineProperty(obj_59989_target_59994_60560,"row",(function (){var obj60262 = ({"enumerable":true,"get":prop_get_fn_row_60045_60567,"set":prop_set_fn_row_60046_60571});
return obj60262;
})());

Object.defineProperty(obj_59989_target_59994_60560,"rowSpan",(function (){var obj60264 = ({"enumerable":true,"get":prop_get_fn_rowspan_60053_60572,"set":prop_set_fn_rowspan_60054_60576});
return obj60264;
})());

Object.defineProperty(obj_59989_target_59994_60560,"column",(function (){var obj60266 = ({"enumerable":true,"get":prop_get_fn_column_60061_60577,"set":prop_set_fn_column_60062_60581});
return obj60266;
})());

Object.defineProperty(obj_59989_target_59994_60560,"columnSpan",(function (){var obj60268 = ({"enumerable":true,"get":prop_get_fn_columnspan_60069_60582,"set":prop_set_fn_columnspan_60070_60586});
return obj60268;
})());

Object.defineProperty(obj_59989_target_59994_60560,"areaName",(function (){var obj60270 = ({"enumerable":true,"get":prop_get_fn_areaname_60077_60587,"set":prop_set_fn_areaname_60078_60591});
return obj60270;
})());

Object.defineProperty(obj_59989_target_59994_60560,"position",(function (){var obj60272 = ({"enumerable":true,"get":prop_get_fn_position_60085_60592,"set":prop_set_fn_position_60086_60596});
return obj60272;
})());

Object.defineProperty(obj_59989_target_59994_60560,"alignSelf",(function (){var obj60274 = ({"enumerable":true,"get":prop_get_fn_alignself_60093_60597,"set":prop_set_fn_alignself_60094_60601});
return obj60274;
})());

Object.defineProperty(obj_59989_target_59994_60560,"justifySelf",(function (){var obj60276 = ({"enumerable":true,"get":prop_get_fn_justifyself_60102_60602,"set":prop_set_fn_justifyself_60103_60606});
return obj60276;
})());


return obj_59989;
});

//# sourceMappingURL=app.plugins.grid.js.map
