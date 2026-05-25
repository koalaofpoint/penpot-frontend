import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.store.js";
import "./app.plugins.flags.js";
import "./app.plugins.register.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
goog.provide('app.plugins.flex');
app.plugins.flex.shape_proxy_QMARK_ = null;
app.plugins.flex.flex_layout_proxy_QMARK_ = (function app$plugins$flex$flex_layout_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"FlexLayoutProxy");
});
app.plugins.flex.flex_layout_proxy = (function app$plugins$flex$flex_layout_proxy(plugin_id,file_id,page_id,id){
var obj_58896 = ({});
var to_string_58895 = (function (){
return "FlexLayoutProxy";
});
var obj_58896_target_58902_60154 = obj_58896;
var prop_get_fn__58915_60155 = (function (){
var obj_58896_this_58901 = this;
var internal_fn__58909 = to_string_58895;
return internal_fn__58909.call(obj_58896_this_58901);
});
var prop_get_fn__58922_60156 = (function (){
var obj_58896_this_58901 = this;
var internal_fn__58916 = to_string_58895;
return internal_fn__58916.call(obj_58896_this_58901);
});
var prop_get_fn_plugin_58929_60157 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_plugin_58923 = (function (){
return plugin_id;
});
return internal_fn_plugin_58923.call(obj_58896_this_58901);
});
var prop_get_fn_id_58936_60158 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_id_58930 = (function (){
return id;
});
return internal_fn_id_58930.call(obj_58896_this_58901);
});
var prop_get_fn_file_58943_60159 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_file_58937 = (function (){
return file_id;
});
return internal_fn_file_58937.call(obj_58896_this_58901);
});
var prop_get_fn_page_58950_60160 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_page_58944 = (function (){
return page_id;
});
return internal_fn_page_58944.call(obj_58896_this_58901);
});
var prop_get_fn_dir_58957_60161 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_dir_58951 = (function (p1__58878_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58878_SHARP_)));
});
return internal_fn_dir_58951.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_dir_58954_60162 = null;
var coercer_fn_dir_58952_60163 = (((((!((schema_dir_58954_60162 == null)))) && ((!(cljs.core.fn_QMARK_(schema_dir_58954_60162))))))?app.common.schema.coercer(schema_dir_58954_60162):null);
var decode_fn_dir_58953_60164 = app.common.json.__GT_clj;
var prop_set_fn_dir_58958_60165 = (function (val_dir_58956){
var obj_58896_this_58901 = this;
var internal_fn_dir_58951 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.flex_direction_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"dir","dir",1734754661),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"dir","dir",1734754661),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),value__$1], null)));

}
}
});
return internal_fn_dir_58951.call(obj_58896_this_58901,obj_58896_this_58901,val_dir_58956);
});
var prop_get_fn_wrap_58965_60166 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_wrap_58959 = (function (p1__58879_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58879_SHARP_)));
});
return internal_fn_wrap_58959.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_wrap_58962_60167 = null;
var coercer_fn_wrap_58960_60168 = (((((!((schema_wrap_58962_60167 == null)))) && ((!(cljs.core.fn_QMARK_(schema_wrap_58962_60167))))))?app.common.schema.coercer(schema_wrap_58962_60167):null);
var decode_fn_wrap_58961_60169 = app.common.json.__GT_clj;
var prop_set_fn_wrap_58966_60170 = (function (val_wrap_58964){
var obj_58896_this_58901 = this;
var internal_fn_wrap_58959 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.wrap_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"wrap","wrap",851669987),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"wrap","wrap",851669987),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),value__$1], null)));

}
}
});
return internal_fn_wrap_58959.call(obj_58896_this_58901,obj_58896_this_58901,val_wrap_58964);
});
var prop_get_fn_alignitems_58979_60171 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_alignitems_58967 = (function (p1__58880_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58880_SHARP_)));
});
return internal_fn_alignitems_58967.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_alignitems_58970_60172 = null;
var coercer_fn_alignitems_58968_60173 = (((((!((schema_alignitems_58970_60172 == null)))) && ((!(cljs.core.fn_QMARK_(schema_alignitems_58970_60172))))))?app.common.schema.coercer(schema_alignitems_58970_60172):null);
var decode_fn_alignitems_58969_60174 = app.common.json.__GT_clj;
var prop_set_fn_alignitems_58987_60175 = (function (val_alignitems_58973){
var obj_58896_this_58901 = this;
var internal_fn_alignitems_58967 = (function (_,value){
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
return internal_fn_alignitems_58967.call(obj_58896_this_58901,obj_58896_this_58901,val_alignitems_58973);
});
var prop_get_fn_aligncontent_59002_60176 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_aligncontent_58989 = (function (p1__58881_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58881_SHARP_)));
});
return internal_fn_aligncontent_58989.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_aligncontent_58996_60177 = null;
var coercer_fn_aligncontent_58991_60178 = (((((!((schema_aligncontent_58996_60177 == null)))) && ((!(cljs.core.fn_QMARK_(schema_aligncontent_58996_60177))))))?app.common.schema.coercer(schema_aligncontent_58996_60177):null);
var decode_fn_aligncontent_58993_60179 = app.common.json.__GT_clj;
var prop_set_fn_aligncontent_59006_60180 = (function (val_aligncontent_59000){
var obj_58896_this_58901 = this;
var internal_fn_aligncontent_58989 = (function (_,value){
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
return internal_fn_aligncontent_58989.call(obj_58896_this_58901,obj_58896_this_58901,val_aligncontent_59000);
});
var prop_get_fn_justifyitems_59024_60181 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_justifyitems_59010 = (function (p1__58882_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58882_SHARP_)));
});
return internal_fn_justifyitems_59010.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_justifyitems_59017_60182 = null;
var coercer_fn_justifyitems_59012_60183 = (((((!((schema_justifyitems_59017_60182 == null)))) && ((!(cljs.core.fn_QMARK_(schema_justifyitems_59017_60182))))))?app.common.schema.coercer(schema_justifyitems_59017_60182):null);
var decode_fn_justifyitems_59014_60184 = app.common.json.__GT_clj;
var prop_set_fn_justifyitems_59029_60185 = (function (val_justifyitems_59022){
var obj_58896_this_58901 = this;
var internal_fn_justifyitems_59010 = (function (_,value){
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
return internal_fn_justifyitems_59010.call(obj_58896_this_58901,obj_58896_this_58901,val_justifyitems_59022);
});
var prop_get_fn_justifycontent_59047_60186 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_justifycontent_59033 = (function (p1__58883_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58883_SHARP_)));
});
return internal_fn_justifycontent_59033.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_justifycontent_59043_60187 = null;
var coercer_fn_justifycontent_59035_60188 = (((((!((schema_justifycontent_59043_60187 == null)))) && ((!(cljs.core.fn_QMARK_(schema_justifycontent_59043_60187))))))?app.common.schema.coercer(schema_justifycontent_59043_60187):null);
var decode_fn_justifycontent_59041_60189 = app.common.json.__GT_clj;
var prop_set_fn_justifycontent_59050_60190 = (function (val_justifycontent_59046){
var obj_58896_this_58901 = this;
var internal_fn_justifycontent_59033 = (function (_,value){
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
return internal_fn_justifycontent_59033.call(obj_58896_this_58901,obj_58896_this_58901,val_justifycontent_59046);
});
var prop_get_fn_rowgap_59062_60191 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_rowgap_59053 = (function (p1__58884_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58884_SHARP_))),(0));
});
return internal_fn_rowgap_59053.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_rowgap_59059_60192 = null;
var coercer_fn_rowgap_59055_60193 = (((((!((schema_rowgap_59059_60192 == null)))) && ((!(cljs.core.fn_QMARK_(schema_rowgap_59059_60192))))))?app.common.schema.coercer(schema_rowgap_59059_60192):null);
var decode_fn_rowgap_59057_60194 = app.common.json.__GT_clj;
var prop_set_fn_rowgap_59065_60195 = (function (val_rowgap_59061){
var obj_58896_this_58901 = this;
var internal_fn_rowgap_59053 = (function (_,value){
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
return internal_fn_rowgap_59053.call(obj_58896_this_58901,obj_58896_this_58901,val_rowgap_59061);
});
var prop_get_fn_columngap_59078_60196 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_columngap_59069 = (function (p1__58885_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58885_SHARP_))),(0));
});
return internal_fn_columngap_59069.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_columngap_59074_60197 = null;
var coercer_fn_columngap_59071_60198 = (((((!((schema_columngap_59074_60197 == null)))) && ((!(cljs.core.fn_QMARK_(schema_columngap_59074_60197))))))?app.common.schema.coercer(schema_columngap_59074_60197):null);
var decode_fn_columngap_59073_60199 = app.common.json.__GT_clj;
var prop_set_fn_columngap_59082_60200 = (function (val_columngap_59077){
var obj_58896_this_58901 = this;
var internal_fn_columngap_59069 = (function (_,value){
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
return internal_fn_columngap_59069.call(obj_58896_this_58901,obj_58896_this_58901,val_columngap_59077);
});
var prop_get_fn_verticalpadding_59093_60201 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_verticalpadding_59086 = (function (p1__58886_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58886_SHARP_))),(0));
});
return internal_fn_verticalpadding_59086.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_verticalpadding_59090_60202 = null;
var coercer_fn_verticalpadding_59087_60203 = (((((!((schema_verticalpadding_59090_60202 == null)))) && ((!(cljs.core.fn_QMARK_(schema_verticalpadding_59090_60202))))))?app.common.schema.coercer(schema_verticalpadding_59090_60202):null);
var decode_fn_verticalpadding_59088_60204 = app.common.json.__GT_clj;
var prop_set_fn_verticalpadding_59094_60205 = (function (val_verticalpadding_59092){
var obj_58896_this_58901 = this;
var internal_fn_verticalpadding_59086 = (function (_,value){
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
return internal_fn_verticalpadding_59086.call(obj_58896_this_58901,obj_58896_this_58901,val_verticalpadding_59092);
});
var prop_get_fn_horizontalpadding_59101_60206 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_horizontalpadding_59095 = (function (p1__58887_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58887_SHARP_))),(0));
});
return internal_fn_horizontalpadding_59095.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_horizontalpadding_59098_60207 = null;
var coercer_fn_horizontalpadding_59096_60208 = (((((!((schema_horizontalpadding_59098_60207 == null)))) && ((!(cljs.core.fn_QMARK_(schema_horizontalpadding_59098_60207))))))?app.common.schema.coercer(schema_horizontalpadding_59098_60207):null);
var decode_fn_horizontalpadding_59097_60209 = app.common.json.__GT_clj;
var prop_set_fn_horizontalpadding_59102_60210 = (function (val_horizontalpadding_59100){
var obj_58896_this_58901 = this;
var internal_fn_horizontalpadding_59095 = (function (_,value){
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
return internal_fn_horizontalpadding_59095.call(obj_58896_this_58901,obj_58896_this_58901,val_horizontalpadding_59100);
});
var prop_get_fn_toppadding_59109_60211 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_toppadding_59103 = (function (p1__58888_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58888_SHARP_))),(0));
});
return internal_fn_toppadding_59103.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_toppadding_59106_60212 = null;
var coercer_fn_toppadding_59104_60213 = (((((!((schema_toppadding_59106_60212 == null)))) && ((!(cljs.core.fn_QMARK_(schema_toppadding_59106_60212))))))?app.common.schema.coercer(schema_toppadding_59106_60212):null);
var decode_fn_toppadding_59105_60214 = app.common.json.__GT_clj;
var prop_set_fn_toppadding_59110_60215 = (function (val_toppadding_59108){
var obj_58896_this_58901 = this;
var internal_fn_toppadding_59103 = (function (_,value){
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
return internal_fn_toppadding_59103.call(obj_58896_this_58901,obj_58896_this_58901,val_toppadding_59108);
});
var prop_get_fn_rightpadding_59117_60216 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_rightpadding_59111 = (function (p1__58889_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58889_SHARP_))),(0));
});
return internal_fn_rightpadding_59111.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_rightpadding_59114_60217 = null;
var coercer_fn_rightpadding_59112_60218 = (((((!((schema_rightpadding_59114_60217 == null)))) && ((!(cljs.core.fn_QMARK_(schema_rightpadding_59114_60217))))))?app.common.schema.coercer(schema_rightpadding_59114_60217):null);
var decode_fn_rightpadding_59113_60219 = app.common.json.__GT_clj;
var prop_set_fn_rightpadding_59118_60220 = (function (val_rightpadding_59116){
var obj_58896_this_58901 = this;
var internal_fn_rightpadding_59111 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rightPadding","rightPadding",553025942),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rightPadding","rightPadding",553025942),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p2","p2",905500641),value], null)], null)));

}
}
});
return internal_fn_rightpadding_59111.call(obj_58896_this_58901,obj_58896_this_58901,val_rightpadding_59116);
});
var prop_get_fn_bottompadding_59125_60221 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_bottompadding_59119 = (function (p1__58890_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58890_SHARP_))),(0));
});
return internal_fn_bottompadding_59119.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_bottompadding_59122_60222 = null;
var coercer_fn_bottompadding_59120_60223 = (((((!((schema_bottompadding_59122_60222 == null)))) && ((!(cljs.core.fn_QMARK_(schema_bottompadding_59122_60222))))))?app.common.schema.coercer(schema_bottompadding_59122_60222):null);
var decode_fn_bottompadding_59121_60224 = app.common.json.__GT_clj;
var prop_set_fn_bottompadding_59126_60225 = (function (val_bottompadding_59124){
var obj_58896_this_58901 = this;
var internal_fn_bottompadding_59119 = (function (_,value){
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
return internal_fn_bottompadding_59119.call(obj_58896_this_58901,obj_58896_this_58901,val_bottompadding_59124);
});
var prop_get_fn_leftpadding_59133_60226 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_leftpadding_59127 = (function (p1__58891_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58891_SHARP_))),(0));
});
return internal_fn_leftpadding_59127.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_leftpadding_59130_60227 = null;
var coercer_fn_leftpadding_59128_60228 = (((((!((schema_leftpadding_59130_60227 == null)))) && ((!(cljs.core.fn_QMARK_(schema_leftpadding_59130_60227))))))?app.common.schema.coercer(schema_leftpadding_59130_60227):null);
var decode_fn_leftpadding_59129_60229 = app.common.json.__GT_clj;
var prop_set_fn_leftpadding_59134_60230 = (function (val_leftpadding_59132){
var obj_58896_this_58901 = this;
var internal_fn_leftpadding_59127 = (function (_,value){
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
return internal_fn_leftpadding_59127.call(obj_58896_this_58901,obj_58896_this_58901,val_leftpadding_59132);
});
var schema_remove_59138_60231 = null;
var coercer_fn_remove_59136_60232 = (((((!((schema_remove_59138_60231 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_59138_60231))))))?app.common.schema.coercer(schema_remove_59138_60231):null);
var decode_fn_remove_59137_60233 = app.common.json.__GT_clj;
var prop_get_fn_remove_59141_60234 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_remove_59135 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.remove_layout(cljs.core.PersistentHashSet.createAsIfByAssoc([id])));
});
var internal_fn_remove_59135__$1 = internal_fn_remove_59135.bind(obj_58896_this_58901);
return internal_fn_remove_59135__$1;
});
var schema_appendchild_59145_60235 = null;
var coercer_fn_appendchild_59143_60236 = (((((!((schema_appendchild_59145_60235 == null)))) && ((!(cljs.core.fn_QMARK_(schema_appendchild_59145_60235))))))?app.common.schema.coercer(schema_appendchild_59145_60235):null);
var decode_fn_appendchild_59144_60237 = app.common.json.__GT_clj;
var prop_get_fn_appendchild_59148_60238 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_appendchild_59142 = (function (child){
if(cljs.core.not((app.plugins.flex.shape_proxy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? app.plugins.flex.shape_proxy_QMARK_.cljs$core$IFn$_invoke$arity$1(child) : app.plugins.flex.shape_proxy_QMARK_.call(null,child)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"appendChild","appendChild",1287125270),child);
} else {
var child_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"$id");
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
var index = ((((app.plugins.flags.natural_child_ordering_QMARK_(plugin_id)) && ((!(app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))))?(0):cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.relocate_shapes(cljs.core.PersistentHashSet.createAsIfByAssoc([child_id]),id,index));

}
});
var internal_fn_appendchild_59142__$1 = internal_fn_appendchild_59142.bind(obj_58896_this_58901);
return internal_fn_appendchild_59142__$1;
});
var prop_get_fn_horizontalsizing_59155_60239 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_horizontalsizing_59149 = (function (p1__58892_SHARP_){
return app.common.data.name(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58892_SHARP_)),new cljs.core.Keyword(null,"fix","fix",-1031773329)));
});
return internal_fn_horizontalsizing_59149.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_horizontalsizing_59152_60240 = null;
var coercer_fn_horizontalsizing_59150_60241 = (((((!((schema_horizontalsizing_59152_60240 == null)))) && ((!(cljs.core.fn_QMARK_(schema_horizontalsizing_59152_60240))))))?app.common.schema.coercer(schema_horizontalsizing_59152_60240):null);
var decode_fn_horizontalsizing_59151_60242 = app.common.json.__GT_clj;
var prop_set_fn_horizontalsizing_59156_60243 = (function (val_horizontalsizing_59154){
var obj_58896_this_58901 = this;
var internal_fn_horizontalsizing_59149 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.item_h_sizing_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalSizing","horizontalSizing",1922240218),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalSizing","horizontalSizing",1922240218),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),value__$1], null)));

}
}
});
return internal_fn_horizontalsizing_59149.call(obj_58896_this_58901,obj_58896_this_58901,val_horizontalsizing_59154);
});
var prop_get_fn_verticalsizing_59163_60244 = (function (){
var obj_58896_this_58901 = this;
var internal_fn_verticalsizing_59157 = (function (p1__58893_SHARP_){
return app.common.data.name(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__58893_SHARP_)),new cljs.core.Keyword(null,"fix","fix",-1031773329)));
});
return internal_fn_verticalsizing_59157.call(obj_58896_this_58901,obj_58896_this_58901);
});
var schema_verticalsizing_59160_60245 = null;
var coercer_fn_verticalsizing_59158_60246 = (((((!((schema_verticalsizing_59160_60245 == null)))) && ((!(cljs.core.fn_QMARK_(schema_verticalsizing_59160_60245))))))?app.common.schema.coercer(schema_verticalsizing_59160_60245):null);
var decode_fn_verticalsizing_59159_60247 = app.common.json.__GT_clj;
var prop_set_fn_verticalsizing_59164_60248 = (function (val_verticalsizing_59162){
var obj_58896_this_58901 = this;
var internal_fn_verticalsizing_59157 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.item_v_sizing_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalSizing","verticalSizing",911089716),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalSizing","verticalSizing",911089716),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),value__$1], null)));

}
}
});
return internal_fn_verticalsizing_59157.call(obj_58896_this_58901,obj_58896_this_58901,val_verticalsizing_59162);
});
Object.defineProperty(obj_58896_target_58902_60154,Symbol.toStringTag,(function (){var obj59476 = ({"enumerable":false,"get":prop_get_fn__58915_60155});
return obj59476;
})());

Object.defineProperty(obj_58896_target_58902_60154,Symbol["for"]("penpot.reify:type"),(function (){var obj59478 = ({"enumerable":false,"get":prop_get_fn__58922_60156});
return obj59478;
})());

Object.defineProperty(obj_58896_target_58902_60154,"$plugin",(function (){var obj59480 = ({"enumerable":false,"get":prop_get_fn_plugin_58929_60157});
return obj59480;
})());

Object.defineProperty(obj_58896_target_58902_60154,"$id",(function (){var obj59482 = ({"enumerable":false,"get":prop_get_fn_id_58936_60158});
return obj59482;
})());

Object.defineProperty(obj_58896_target_58902_60154,"$file",(function (){var obj59484 = ({"enumerable":false,"get":prop_get_fn_file_58943_60159});
return obj59484;
})());

Object.defineProperty(obj_58896_target_58902_60154,"$page",(function (){var obj59486 = ({"enumerable":false,"get":prop_get_fn_page_58950_60160});
return obj59486;
})());

Object.defineProperty(obj_58896_target_58902_60154,"dir",(function (){var obj59488 = ({"enumerable":true,"get":prop_get_fn_dir_58957_60161,"set":prop_set_fn_dir_58958_60165});
return obj59488;
})());

Object.defineProperty(obj_58896_target_58902_60154,"wrap",(function (){var obj59490 = ({"enumerable":true,"get":prop_get_fn_wrap_58965_60166,"set":prop_set_fn_wrap_58966_60170});
return obj59490;
})());

Object.defineProperty(obj_58896_target_58902_60154,"alignItems",(function (){var obj59492 = ({"enumerable":true,"get":prop_get_fn_alignitems_58979_60171,"set":prop_set_fn_alignitems_58987_60175});
return obj59492;
})());

Object.defineProperty(obj_58896_target_58902_60154,"alignContent",(function (){var obj59494 = ({"enumerable":true,"get":prop_get_fn_aligncontent_59002_60176,"set":prop_set_fn_aligncontent_59006_60180});
return obj59494;
})());

Object.defineProperty(obj_58896_target_58902_60154,"justifyItems",(function (){var obj59496 = ({"enumerable":true,"get":prop_get_fn_justifyitems_59024_60181,"set":prop_set_fn_justifyitems_59029_60185});
return obj59496;
})());

Object.defineProperty(obj_58896_target_58902_60154,"justifyContent",(function (){var obj59498 = ({"enumerable":true,"get":prop_get_fn_justifycontent_59047_60186,"set":prop_set_fn_justifycontent_59050_60190});
return obj59498;
})());

Object.defineProperty(obj_58896_target_58902_60154,"rowGap",(function (){var obj59500 = ({"enumerable":true,"get":prop_get_fn_rowgap_59062_60191,"set":prop_set_fn_rowgap_59065_60195});
return obj59500;
})());

Object.defineProperty(obj_58896_target_58902_60154,"columnGap",(function (){var obj59502 = ({"enumerable":true,"get":prop_get_fn_columngap_59078_60196,"set":prop_set_fn_columngap_59082_60200});
return obj59502;
})());

Object.defineProperty(obj_58896_target_58902_60154,"verticalPadding",(function (){var obj59504 = ({"enumerable":true,"get":prop_get_fn_verticalpadding_59093_60201,"set":prop_set_fn_verticalpadding_59094_60205});
return obj59504;
})());

Object.defineProperty(obj_58896_target_58902_60154,"horizontalPadding",(function (){var obj59506 = ({"enumerable":true,"get":prop_get_fn_horizontalpadding_59101_60206,"set":prop_set_fn_horizontalpadding_59102_60210});
return obj59506;
})());

Object.defineProperty(obj_58896_target_58902_60154,"topPadding",(function (){var obj59508 = ({"enumerable":true,"get":prop_get_fn_toppadding_59109_60211,"set":prop_set_fn_toppadding_59110_60215});
return obj59508;
})());

Object.defineProperty(obj_58896_target_58902_60154,"rightPadding",(function (){var obj59510 = ({"enumerable":true,"get":prop_get_fn_rightpadding_59117_60216,"set":prop_set_fn_rightpadding_59118_60220});
return obj59510;
})());

Object.defineProperty(obj_58896_target_58902_60154,"bottomPadding",(function (){var obj59512 = ({"enumerable":true,"get":prop_get_fn_bottompadding_59125_60221,"set":prop_set_fn_bottompadding_59126_60225});
return obj59512;
})());

Object.defineProperty(obj_58896_target_58902_60154,"leftPadding",(function (){var obj59514 = ({"enumerable":true,"get":prop_get_fn_leftpadding_59133_60226,"set":prop_set_fn_leftpadding_59134_60230});
return obj59514;
})());

Object.defineProperty(obj_58896_target_58902_60154,"remove",(function (){var obj59516 = ({"enumerable":false,"get":prop_get_fn_remove_59141_60234});
return obj59516;
})());

Object.defineProperty(obj_58896_target_58902_60154,"appendChild",(function (){var obj59518 = ({"enumerable":false,"get":prop_get_fn_appendchild_59148_60238});
return obj59518;
})());

Object.defineProperty(obj_58896_target_58902_60154,"horizontalSizing",(function (){var obj59520 = ({"enumerable":true,"get":prop_get_fn_horizontalsizing_59155_60239,"set":prop_set_fn_horizontalsizing_59156_60243});
return obj59520;
})());

Object.defineProperty(obj_58896_target_58902_60154,"verticalSizing",(function (){var obj59522 = ({"enumerable":true,"get":prop_get_fn_verticalsizing_59163_60244,"set":prop_set_fn_verticalsizing_59164_60248});
return obj59522;
})());


return obj_58896;
});
app.plugins.flex.layout_child_proxy_QMARK_ = (function app$plugins$flex$layout_child_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"LayoutChildProxy");
});
app.plugins.flex.layout_child_proxy = (function app$plugins$flex$layout_child_proxy(plugin_id,file_id,page_id,id){
var obj_59540 = ({});
var to_string_59539 = (function (){
return "LayoutChildProxy";
});
var obj_59540_target_59544_60450 = obj_59540;
var prop_get_fn__59552_60451 = (function (){
var obj_59540_this_59543 = this;
var internal_fn__59546 = to_string_59539;
return internal_fn__59546.call(obj_59540_this_59543);
});
var prop_get_fn__59559_60452 = (function (){
var obj_59540_this_59543 = this;
var internal_fn__59553 = to_string_59539;
return internal_fn__59553.call(obj_59540_this_59543);
});
var prop_get_fn_plugin_59566_60453 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_plugin_59560 = (function (){
return plugin_id;
});
return internal_fn_plugin_59560.call(obj_59540_this_59543);
});
var prop_get_fn_id_59573_60454 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_id_59567 = (function (){
return id;
});
return internal_fn_id_59567.call(obj_59540_this_59543);
});
var prop_get_fn_file_59580_60455 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_file_59574 = (function (){
return file_id;
});
return internal_fn_file_59574.call(obj_59540_this_59543);
});
var prop_get_fn_page_59587_60456 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_page_59581 = (function (){
return page_id;
});
return internal_fn_page_59581.call(obj_59540_this_59543);
});
var prop_get_fn_absolute_59594_60457 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_absolute_59588 = (function (p1__59524_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59524_SHARP_)));
});
return internal_fn_absolute_59588.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_absolute_59591_60458 = null;
var coercer_fn_absolute_59589_60459 = (((((!((schema_absolute_59591_60458 == null)))) && ((!(cljs.core.fn_QMARK_(schema_absolute_59591_60458))))))?app.common.schema.coercer(schema_absolute_59591_60458):null);
var decode_fn_absolute_59590_60460 = app.common.json.__GT_clj;
var prop_set_fn_absolute_59595_60461 = (function (val_absolute_59593){
var obj_59540_this_59543 = this;
var internal_fn_absolute_59588 = (function (_,value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"absolute","absolute",1655386478),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"absolute","absolute",1655386478),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),value], null)));

}
}
});
return internal_fn_absolute_59588.call(obj_59540_this_59543,obj_59540_this_59543,val_absolute_59593);
});
var prop_get_fn_zindex_59602_60462 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_zindex_59596 = (function (p1__59525_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59525_SHARP_)),(0));
});
return internal_fn_zindex_59596.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_zindex_59599_60463 = null;
var coercer_fn_zindex_59597_60464 = (((((!((schema_zindex_59599_60463 == null)))) && ((!(cljs.core.fn_QMARK_(schema_zindex_59599_60463))))))?app.common.schema.coercer(schema_zindex_59599_60463):null);
var decode_fn_zindex_59598_60465 = app.common.json.__GT_clj;
var prop_set_fn_zindex_59603_60466 = (function (val_zindex_59601){
var obj_59540_this_59543 = this;
var internal_fn_zindex_59596 = (function (_,value){
if(cljs.core.truth_(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455),value], null)));

}
}
});
return internal_fn_zindex_59596.call(obj_59540_this_59543,obj_59540_this_59543,val_zindex_59601);
});
var prop_get_fn_horizontalsizing_59610_60467 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_horizontalsizing_59604 = (function (p1__59526_SHARP_){
return app.common.data.name(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59526_SHARP_)),new cljs.core.Keyword(null,"fix","fix",-1031773329)));
});
return internal_fn_horizontalsizing_59604.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_horizontalsizing_59607_60468 = null;
var coercer_fn_horizontalsizing_59605_60469 = (((((!((schema_horizontalsizing_59607_60468 == null)))) && ((!(cljs.core.fn_QMARK_(schema_horizontalsizing_59607_60468))))))?app.common.schema.coercer(schema_horizontalsizing_59607_60468):null);
var decode_fn_horizontalsizing_59606_60470 = app.common.json.__GT_clj;
var prop_set_fn_horizontalsizing_59611_60471 = (function (val_horizontalsizing_59609){
var obj_59540_this_59543 = this;
var internal_fn_horizontalsizing_59604 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.item_h_sizing_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalPadding","horizontalPadding",513951974),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalPadding","horizontalPadding",513951974),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),value__$1], null)));

}
}
});
return internal_fn_horizontalsizing_59604.call(obj_59540_this_59543,obj_59540_this_59543,val_horizontalsizing_59609);
});
var prop_get_fn_verticalsizing_59618_60472 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_verticalsizing_59612 = (function (p1__59527_SHARP_){
return app.common.data.name(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59527_SHARP_)),new cljs.core.Keyword(null,"fix","fix",-1031773329)));
});
return internal_fn_verticalsizing_59612.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_verticalsizing_59615_60473 = null;
var coercer_fn_verticalsizing_59613_60474 = (((((!((schema_verticalsizing_59615_60473 == null)))) && ((!(cljs.core.fn_QMARK_(schema_verticalsizing_59615_60473))))))?app.common.schema.coercer(schema_verticalsizing_59615_60473):null);
var decode_fn_verticalsizing_59614_60475 = app.common.json.__GT_clj;
var prop_set_fn_verticalsizing_59619_60476 = (function (val_verticalsizing_59617){
var obj_59540_this_59543 = this;
var internal_fn_verticalsizing_59612 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.item_v_sizing_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalSizing","verticalSizing",911089716),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalSizing","verticalSizing",911089716),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),value__$1], null)));

}
}
});
return internal_fn_verticalsizing_59612.call(obj_59540_this_59543,obj_59540_this_59543,val_verticalsizing_59617);
});
var prop_get_fn_alignself_59626_60477 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_alignself_59620 = (function (p1__59528_SHARP_){
return app.common.data.name(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59528_SHARP_)),new cljs.core.Keyword(null,"auto","auto",-566279492)));
});
return internal_fn_alignself_59620.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_alignself_59623_60478 = null;
var coercer_fn_alignself_59621_60479 = (((((!((schema_alignself_59623_60478 == null)))) && ((!(cljs.core.fn_QMARK_(schema_alignself_59623_60478))))))?app.common.schema.coercer(schema_alignself_59623_60478):null);
var decode_fn_alignself_59622_60480 = app.common.json.__GT_clj;
var prop_set_fn_alignself_59627_60481 = (function (val_alignself_59625){
var obj_59540_this_59543 = this;
var internal_fn_alignself_59620 = (function (_,value){
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.layout.item_align_self_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignSelf","alignSelf",-1666557725),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"alignSelf","alignSelf",-1666557725),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692),value__$1], null)));

}
}
});
return internal_fn_alignself_59620.call(obj_59540_this_59543,obj_59540_this_59543,val_alignself_59625);
});
var prop_get_fn_verticalmargin_59634_60482 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_verticalmargin_59628 = (function (p1__59529_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59529_SHARP_))),(0));
});
return internal_fn_verticalmargin_59628.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_verticalmargin_59631_60483 = null;
var coercer_fn_verticalmargin_59629_60484 = (((((!((schema_verticalmargin_59631_60483 == null)))) && ((!(cljs.core.fn_QMARK_(schema_verticalmargin_59631_60483))))))?app.common.schema.coercer(schema_verticalmargin_59631_60483):null);
var decode_fn_verticalmargin_59630_60485 = app.common.json.__GT_clj;
var prop_set_fn_verticalmargin_59635_60486 = (function (val_verticalmargin_59633){
var obj_59540_this_59543 = this;
var internal_fn_verticalmargin_59628 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalMargin","verticalMargin",2098722016),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalMargin","verticalMargin",2098722016),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m1","m1",-108094626),value,new cljs.core.Keyword(null,"m3","m3",-703635357),value], null)], null)));

}
}
});
return internal_fn_verticalmargin_59628.call(obj_59540_this_59543,obj_59540_this_59543,val_verticalmargin_59633);
});
var prop_get_fn_horizontalmargin_59642_60487 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_horizontalmargin_59636 = (function (p1__59530_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59530_SHARP_))),(0));
});
return internal_fn_horizontalmargin_59636.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_horizontalmargin_59639_60488 = null;
var coercer_fn_horizontalmargin_59637_60489 = (((((!((schema_horizontalmargin_59639_60488 == null)))) && ((!(cljs.core.fn_QMARK_(schema_horizontalmargin_59639_60488))))))?app.common.schema.coercer(schema_horizontalmargin_59639_60488):null);
var decode_fn_horizontalmargin_59638_60490 = app.common.json.__GT_clj;
var prop_set_fn_horizontalmargin_59643_60491 = (function (val_horizontalmargin_59641){
var obj_59540_this_59543 = this;
var internal_fn_horizontalmargin_59636 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalMargin","horizontalMargin",606533049),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalMargin","horizontalMargin",606533049),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m2","m2",-587003306),value,new cljs.core.Keyword(null,"m4","m4",-1624571215),value], null)], null)));

}
}
});
return internal_fn_horizontalmargin_59636.call(obj_59540_this_59543,obj_59540_this_59543,val_horizontalmargin_59641);
});
var prop_get_fn_topmargin_59651_60492 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_topmargin_59645 = (function (p1__59531_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59531_SHARP_))),(0));
});
return internal_fn_topmargin_59645.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_topmargin_59648_60493 = null;
var coercer_fn_topmargin_59646_60494 = (((((!((schema_topmargin_59648_60493 == null)))) && ((!(cljs.core.fn_QMARK_(schema_topmargin_59648_60493))))))?app.common.schema.coercer(schema_topmargin_59648_60493):null);
var decode_fn_topmargin_59647_60495 = app.common.json.__GT_clj;
var prop_set_fn_topmargin_59652_60496 = (function (val_topmargin_59650){
var obj_59540_this_59543 = this;
var internal_fn_topmargin_59645 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"topMargin","topMargin",1454522636),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"topMargin","topMargin",1454522636),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m1","m1",-108094626),value], null)], null)));

}
}
});
return internal_fn_topmargin_59645.call(obj_59540_this_59543,obj_59540_this_59543,val_topmargin_59650);
});
var prop_get_fn_rightmargin_59659_60497 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_rightmargin_59653 = (function (p1__59532_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59532_SHARP_))),(0));
});
return internal_fn_rightmargin_59653.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_rightmargin_59656_60498 = null;
var coercer_fn_rightmargin_59654_60499 = (((((!((schema_rightmargin_59656_60498 == null)))) && ((!(cljs.core.fn_QMARK_(schema_rightmargin_59656_60498))))))?app.common.schema.coercer(schema_rightmargin_59656_60498):null);
var decode_fn_rightmargin_59655_60500 = app.common.json.__GT_clj;
var prop_set_fn_rightmargin_59660_60501 = (function (val_rightmargin_59658){
var obj_59540_this_59543 = this;
var internal_fn_rightmargin_59653 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rightMargin","rightMargin",1199553501),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rightMargin","rightMargin",1199553501),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m2","m2",-587003306),value], null)], null)));

}
}
});
return internal_fn_rightmargin_59653.call(obj_59540_this_59543,obj_59540_this_59543,val_rightmargin_59658);
});
var prop_get_fn_bottommargin_59667_60502 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_bottommargin_59661 = (function (p1__59533_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59533_SHARP_))),(0));
});
return internal_fn_bottommargin_59661.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_bottommargin_59664_60503 = null;
var coercer_fn_bottommargin_59662_60504 = (((((!((schema_bottommargin_59664_60503 == null)))) && ((!(cljs.core.fn_QMARK_(schema_bottommargin_59664_60503))))))?app.common.schema.coercer(schema_bottommargin_59664_60503):null);
var decode_fn_bottommargin_59663_60505 = app.common.json.__GT_clj;
var prop_set_fn_bottommargin_59668_60506 = (function (val_bottommargin_59666){
var obj_59540_this_59543 = this;
var internal_fn_bottommargin_59661 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"bottomMargin","bottomMargin",459661842),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"bottomMargin","bottomMargin",459661842),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m3","m3",-703635357),value], null)], null)));

}
}
});
return internal_fn_bottommargin_59661.call(obj_59540_this_59543,obj_59540_this_59543,val_bottommargin_59666);
});
var prop_get_fn_leftmargin_59675_60507 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_leftmargin_59669 = (function (p1__59534_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59534_SHARP_))),(0));
});
return internal_fn_leftmargin_59669.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_leftmargin_59672_60508 = null;
var coercer_fn_leftmargin_59670_60509 = (((((!((schema_leftmargin_59672_60508 == null)))) && ((!(cljs.core.fn_QMARK_(schema_leftmargin_59672_60508))))))?app.common.schema.coercer(schema_leftmargin_59672_60508):null);
var decode_fn_leftmargin_59671_60510 = app.common.json.__GT_clj;
var prop_set_fn_leftmargin_59676_60511 = (function (val_leftmargin_59674){
var obj_59540_this_59543 = this;
var internal_fn_leftmargin_59669 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"leftMargin","leftMargin",-427217148),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"leftMargin","leftMargin",-427217148),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m4","m4",-1624571215),value], null)], null)));

}
}
});
return internal_fn_leftmargin_59669.call(obj_59540_this_59543,obj_59540_this_59543,val_leftmargin_59674);
});
var prop_get_fn_maxwidth_59683_60512 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_maxwidth_59677 = (function (p1__59535_SHARP_){
return new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59535_SHARP_));
});
return internal_fn_maxwidth_59677.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_maxwidth_59680_60513 = null;
var coercer_fn_maxwidth_59678_60514 = (((((!((schema_maxwidth_59680_60513 == null)))) && ((!(cljs.core.fn_QMARK_(schema_maxwidth_59680_60513))))))?app.common.schema.coercer(schema_maxwidth_59680_60513):null);
var decode_fn_maxwidth_59679_60515 = app.common.json.__GT_clj;
var prop_set_fn_maxwidth_59684_60516 = (function (val_maxwidth_59682){
var obj_59540_this_59543 = this;
var internal_fn_maxwidth_59677 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),value], null)));

}
}
});
return internal_fn_maxwidth_59677.call(obj_59540_this_59543,obj_59540_this_59543,val_maxwidth_59682);
});
var prop_get_fn_minwidth_59691_60517 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_minwidth_59685 = (function (p1__59536_SHARP_){
return new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59536_SHARP_));
});
return internal_fn_minwidth_59685.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_minwidth_59688_60518 = null;
var coercer_fn_minwidth_59686_60519 = (((((!((schema_minwidth_59688_60518 == null)))) && ((!(cljs.core.fn_QMARK_(schema_minwidth_59688_60518))))))?app.common.schema.coercer(schema_minwidth_59688_60518):null);
var decode_fn_minwidth_59687_60520 = app.common.json.__GT_clj;
var prop_set_fn_minwidth_59692_60521 = (function (val_minwidth_59690){
var obj_59540_this_59543 = this;
var internal_fn_minwidth_59685 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),value], null)));

}
}
});
return internal_fn_minwidth_59685.call(obj_59540_this_59543,obj_59540_this_59543,val_minwidth_59690);
});
var prop_get_fn_maxheight_59699_60522 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_maxheight_59693 = (function (p1__59537_SHARP_){
return new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59537_SHARP_));
});
return internal_fn_maxheight_59693.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_maxheight_59696_60523 = null;
var coercer_fn_maxheight_59694_60524 = (((((!((schema_maxheight_59696_60523 == null)))) && ((!(cljs.core.fn_QMARK_(schema_maxheight_59696_60523))))))?app.common.schema.coercer(schema_maxheight_59696_60523):null);
var decode_fn_maxheight_59695_60525 = app.common.json.__GT_clj;
var prop_set_fn_maxheight_59700_60526 = (function (val_maxheight_59698){
var obj_59540_this_59543 = this;
var internal_fn_maxheight_59693 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),value], null)));

}
}
});
return internal_fn_maxheight_59693.call(obj_59540_this_59543,obj_59540_this_59543,val_maxheight_59698);
});
var prop_get_fn_minheight_59707_60527 = (function (){
var obj_59540_this_59543 = this;
var internal_fn_minheight_59701 = (function (p1__59538_SHARP_){
return new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__59538_SHARP_));
});
return internal_fn_minheight_59701.call(obj_59540_this_59543,obj_59540_this_59543);
});
var schema_minheight_59704_60528 = null;
var coercer_fn_minheight_59702_60529 = (((((!((schema_minheight_59704_60528 == null)))) && ((!(cljs.core.fn_QMARK_(schema_minheight_59704_60528))))))?app.common.schema.coercer(schema_minheight_59704_60528):null);
var decode_fn_minheight_59703_60530 = app.common.json.__GT_clj;
var prop_set_fn_minheight_59708_60531 = (function (val_minheight_59706){
var obj_59540_this_59543 = this;
var internal_fn_minheight_59701 = (function (_,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),value], null)));

}
}
});
return internal_fn_minheight_59701.call(obj_59540_this_59543,obj_59540_this_59543,val_minheight_59706);
});
Object.defineProperty(obj_59540_target_59544_60450,Symbol.toStringTag,(function (){var obj60111 = ({"enumerable":false,"get":prop_get_fn__59552_60451});
return obj60111;
})());

Object.defineProperty(obj_59540_target_59544_60450,Symbol["for"]("penpot.reify:type"),(function (){var obj60113 = ({"enumerable":false,"get":prop_get_fn__59559_60452});
return obj60113;
})());

Object.defineProperty(obj_59540_target_59544_60450,"$plugin",(function (){var obj60115 = ({"enumerable":false,"get":prop_get_fn_plugin_59566_60453});
return obj60115;
})());

Object.defineProperty(obj_59540_target_59544_60450,"$id",(function (){var obj60117 = ({"enumerable":false,"get":prop_get_fn_id_59573_60454});
return obj60117;
})());

Object.defineProperty(obj_59540_target_59544_60450,"$file",(function (){var obj60119 = ({"enumerable":false,"get":prop_get_fn_file_59580_60455});
return obj60119;
})());

Object.defineProperty(obj_59540_target_59544_60450,"$page",(function (){var obj60121 = ({"enumerable":false,"get":prop_get_fn_page_59587_60456});
return obj60121;
})());

Object.defineProperty(obj_59540_target_59544_60450,"absolute",(function (){var obj60123 = ({"enumerable":true,"get":prop_get_fn_absolute_59594_60457,"set":prop_set_fn_absolute_59595_60461});
return obj60123;
})());

Object.defineProperty(obj_59540_target_59544_60450,"zIndex",(function (){var obj60125 = ({"enumerable":true,"get":prop_get_fn_zindex_59602_60462,"set":prop_set_fn_zindex_59603_60466});
return obj60125;
})());

Object.defineProperty(obj_59540_target_59544_60450,"horizontalSizing",(function (){var obj60128 = ({"enumerable":true,"get":prop_get_fn_horizontalsizing_59610_60467,"set":prop_set_fn_horizontalsizing_59611_60471});
return obj60128;
})());

Object.defineProperty(obj_59540_target_59544_60450,"verticalSizing",(function (){var obj60130 = ({"enumerable":true,"get":prop_get_fn_verticalsizing_59618_60472,"set":prop_set_fn_verticalsizing_59619_60476});
return obj60130;
})());

Object.defineProperty(obj_59540_target_59544_60450,"alignSelf",(function (){var obj60132 = ({"enumerable":true,"get":prop_get_fn_alignself_59626_60477,"set":prop_set_fn_alignself_59627_60481});
return obj60132;
})());

Object.defineProperty(obj_59540_target_59544_60450,"verticalMargin",(function (){var obj60134 = ({"enumerable":true,"get":prop_get_fn_verticalmargin_59634_60482,"set":prop_set_fn_verticalmargin_59635_60486});
return obj60134;
})());

Object.defineProperty(obj_59540_target_59544_60450,"horizontalMargin",(function (){var obj60136 = ({"enumerable":true,"get":prop_get_fn_horizontalmargin_59642_60487,"set":prop_set_fn_horizontalmargin_59643_60491});
return obj60136;
})());

Object.defineProperty(obj_59540_target_59544_60450,"topMargin",(function (){var obj60138 = ({"enumerable":true,"get":prop_get_fn_topmargin_59651_60492,"set":prop_set_fn_topmargin_59652_60496});
return obj60138;
})());

Object.defineProperty(obj_59540_target_59544_60450,"rightMargin",(function (){var obj60140 = ({"enumerable":true,"get":prop_get_fn_rightmargin_59659_60497,"set":prop_set_fn_rightmargin_59660_60501});
return obj60140;
})());

Object.defineProperty(obj_59540_target_59544_60450,"bottomMargin",(function (){var obj60142 = ({"enumerable":true,"get":prop_get_fn_bottommargin_59667_60502,"set":prop_set_fn_bottommargin_59668_60506});
return obj60142;
})());

Object.defineProperty(obj_59540_target_59544_60450,"leftMargin",(function (){var obj60145 = ({"enumerable":true,"get":prop_get_fn_leftmargin_59675_60507,"set":prop_set_fn_leftmargin_59676_60511});
return obj60145;
})());

Object.defineProperty(obj_59540_target_59544_60450,"maxWidth",(function (){var obj60147 = ({"enumerable":true,"get":prop_get_fn_maxwidth_59683_60512,"set":prop_set_fn_maxwidth_59684_60516});
return obj60147;
})());

Object.defineProperty(obj_59540_target_59544_60450,"minWidth",(function (){var obj60149 = ({"enumerable":true,"get":prop_get_fn_minwidth_59691_60517,"set":prop_set_fn_minwidth_59692_60521});
return obj60149;
})());

Object.defineProperty(obj_59540_target_59544_60450,"maxHeight",(function (){var obj60151 = ({"enumerable":true,"get":prop_get_fn_maxheight_59699_60522,"set":prop_set_fn_maxheight_59700_60526});
return obj60151;
})());

Object.defineProperty(obj_59540_target_59544_60450,"minHeight",(function (){var obj60153 = ({"enumerable":true,"get":prop_get_fn_minheight_59707_60527,"set":prop_set_fn_minheight_59708_60531});
return obj60153;
})());


return obj_59540;
});

//# sourceMappingURL=app.plugins.flex.js.map
