import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.json.js";
import "./app.common.path_names.js";
import "./app.common.record.js";
import "./app.common.schema.js";
import "./app.common.svg.path.js";
import "./app.common.types.color.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.fills.js";
import "./app.common.types.grid.js";
import "./app.common.types.path.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape.blur.js";
import "./app.common.types.shape.export.js";
import "./app.common.types.shape.interactions.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.shape.radius.js";
import "./app.common.types.shape.shadow.js";
import "./app.common.types.text.js";
import "./app.common.types.token.js";
import "./app.common.uuid.js";
import "./app.main.data.plugins.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.groups.js";
import "./app.main.data.workspace.guides.js";
import "./app.main.data.workspace.interactions.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.variants.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.plugins.flags.js";
import "./app.plugins.flex.js";
import "./app.plugins.format.js";
import "./app.plugins.grid.js";
import "./app.plugins.parser.js";
import "./app.plugins.register.js";
import "./app.plugins.ruler_guides.js";
import "./app.plugins.text.js";
import "./app.plugins.utils.js";
import "./app.util.http.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
goog.provide('app.plugins.shape');
app.plugins.shape.variant_proxy = null;
app.plugins.shape.interaction_proxy_QMARK_ = (function app$plugins$shape$interaction_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"InteractionProxy");
});
app.plugins.shape.interaction_proxy = (function app$plugins$shape$interaction_proxy(plugin_id,file_id,page_id,shape_id,index){
var obj_60710 = ({});
var to_string_60709 = (function (){
return "InteractionProxy";
});
var obj_60710_target_60716_61838 = obj_60710;
var prop_get_fn__60724_61839 = (function (){
var obj_60710_this_60715 = this;
var internal_fn__60718 = to_string_60709;
return internal_fn__60718.call(obj_60710_this_60715);
});
var prop_get_fn__60731_61840 = (function (){
var obj_60710_this_60715 = this;
var internal_fn__60725 = to_string_60709;
return internal_fn__60725.call(obj_60710_this_60715);
});
var prop_get_fn_plugin_60738_61841 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_plugin_60732 = (function (){
return plugin_id;
});
return internal_fn_plugin_60732.call(obj_60710_this_60715);
});
var prop_get_fn_file_60745_61842 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_file_60739 = (function (){
return file_id;
});
return internal_fn_file_60739.call(obj_60710_this_60715);
});
var prop_get_fn_page_60752_61843 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_page_60746 = (function (){
return page_id;
});
return internal_fn_page_60746.call(obj_60710_this_60715);
});
var prop_get_fn_shape_60759_61844 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_shape_60753 = (function (){
return shape_id;
});
return internal_fn_shape_60753.call(obj_60710_this_60715);
});
var prop_get_fn_index_60766_61845 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_index_60760 = (function (){
return index;
});
return internal_fn_index_60760.call(obj_60710_this_60715);
});
var prop_get_fn_shape_60773_61846 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_shape_60767 = (function (){
return (app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,page_id,shape_id) : app.plugins.shape.shape_proxy.call(null,plugin_id,file_id,page_id,shape_id));
});
return internal_fn_shape_60767.call(obj_60710_this_60715);
});
var prop_get_fn_trigger_60780_61847 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_trigger_60774 = (function (p1__60703_SHARP_){
return app.plugins.format.format_key(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_interaction(p1__60703_SHARP_)));
});
return internal_fn_trigger_60774.call(obj_60710_this_60715,obj_60710_this_60715);
});
var schema_trigger_60777_61848 = null;
var coercer_fn_trigger_60775_61849 = (((((!((schema_trigger_60777_61848 == null)))) && ((!(cljs.core.fn_QMARK_(schema_trigger_60777_61848))))))?app.common.schema.coercer(schema_trigger_60777_61848):null);
var decode_fn_trigger_60776_61850 = app.common.json.__GT_clj;
var prop_set_fn_trigger_60781_61851 = (function (val_trigger_60779){
var obj_60710_this_60715 = this;
var internal_fn_trigger_60774 = (function (_,value){
var value__$1 = app.plugins.parser.parse_keyword(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.interactions.event_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"trigger","trigger",103466139),value__$1);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),shape_id], null),index,(function (p1__60704_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60704_SHARP_,new cljs.core.Keyword(null,"event-type","event-type",319722813),value__$1);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)));

}
});
return internal_fn_trigger_60774.call(obj_60710_this_60715,obj_60710_this_60715,val_trigger_60779);
});
var prop_get_fn_delay_60788_61852 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_delay_60782 = (function (p1__60705_SHARP_){
return new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_interaction(p1__60705_SHARP_));
});
return internal_fn_delay_60782.call(obj_60710_this_60715,obj_60710_this_60715);
});
var schema_delay_60785_61853 = null;
var coercer_fn_delay_60783_61854 = (((((!((schema_delay_60785_61853 == null)))) && ((!(cljs.core.fn_QMARK_(schema_delay_60785_61853))))))?app.common.schema.coercer(schema_delay_60785_61853):null);
var decode_fn_delay_60784_61855 = app.common.json.__GT_clj;
var prop_set_fn_delay_60789_61856 = (function (val_delay_60787){
var obj_60710_this_60715 = this;
var internal_fn_delay_60782 = (function (_,value){
if((((!(typeof value === 'number'))) || ((!((value > (0))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"delay","delay",-574225219),value);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),shape_id], null),index,(function (p1__60706_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60706_SHARP_,new cljs.core.Keyword(null,"delay","delay",-574225219),value);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)));

}
});
return internal_fn_delay_60782.call(obj_60710_this_60715,obj_60710_this_60715,val_delay_60787);
});
var prop_get_fn_action_60796_61857 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_action_60790 = (function (p1__60707_SHARP_){
return app.plugins.format.format_action(app.plugins.utils.proxy__GT_interaction(p1__60707_SHARP_),plugin_id,file_id,page_id);
});
return internal_fn_action_60790.call(obj_60710_this_60715,obj_60710_this_60715);
});
var schema_action_60793_61858 = null;
var coercer_fn_action_60791_61859 = (((((!((schema_action_60793_61858 == null)))) && ((!(cljs.core.fn_QMARK_(schema_action_60793_61858))))))?app.common.schema.coercer(schema_action_60793_61858):null);
var decode_fn_action_60792_61860 = app.common.json.__GT_clj;
var prop_set_fn_action_60797_61861 = (function (val_action_60795){
var obj_60710_this_60715 = this;
var internal_fn_action_60790 = (function (self,value){
var params = app.plugins.parser.parse_action(value);
var interaction = app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(app.plugins.utils.proxy__GT_interaction(self),params);
if(cljs.core.not(app.common.schema.validate(app.common.types.shape.interactions.schema_COLON_interaction,interaction))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"action","action",-811238024),interaction);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),shape_id], null),index,(function (p1__60708_SHARP_){
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(p1__60708_SHARP_,params);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)));

}
});
return internal_fn_action_60790.call(obj_60710_this_60715,obj_60710_this_60715,val_action_60795);
});
var schema_remove_60801_61862 = null;
var coercer_fn_remove_60799_61863 = (((((!((schema_remove_60801_61862 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_60801_61862))))))?app.common.schema.coercer(schema_remove_60801_61862):null);
var decode_fn_remove_60800_61864 = app.common.json.__GT_clj;
var prop_get_fn_remove_60804_61865 = (function (){
var obj_60710_this_60715 = this;
var internal_fn_remove_60798 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.remove_interaction.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),shape_id], null),index));
});
var internal_fn_remove_60798__$1 = internal_fn_remove_60798.bind(obj_60710_this_60715);
return internal_fn_remove_60798__$1;
});
Object.defineProperty(obj_60710_target_60716_61838,Symbol.toStringTag,(function (){var obj60812 = ({"enumerable":false,"get":prop_get_fn__60724_61839});
return obj60812;
})());

Object.defineProperty(obj_60710_target_60716_61838,Symbol["for"]("penpot.reify:type"),(function (){var obj60814 = ({"enumerable":false,"get":prop_get_fn__60731_61840});
return obj60814;
})());

Object.defineProperty(obj_60710_target_60716_61838,"$plugin",(function (){var obj60816 = ({"enumerable":false,"get":prop_get_fn_plugin_60738_61841});
return obj60816;
})());

Object.defineProperty(obj_60710_target_60716_61838,"$file",(function (){var obj60818 = ({"enumerable":false,"get":prop_get_fn_file_60745_61842});
return obj60818;
})());

Object.defineProperty(obj_60710_target_60716_61838,"$page",(function (){var obj60820 = ({"enumerable":false,"get":prop_get_fn_page_60752_61843});
return obj60820;
})());

Object.defineProperty(obj_60710_target_60716_61838,"$shape",(function (){var obj60822 = ({"enumerable":false,"get":prop_get_fn_shape_60759_61844});
return obj60822;
})());

Object.defineProperty(obj_60710_target_60716_61838,"$index",(function (){var obj60824 = ({"enumerable":false,"get":prop_get_fn_index_60766_61845});
return obj60824;
})());

Object.defineProperty(obj_60710_target_60716_61838,"shape",(function (){var obj60826 = ({"enumerable":false,"get":prop_get_fn_shape_60773_61846});
return obj60826;
})());

Object.defineProperty(obj_60710_target_60716_61838,"trigger",(function (){var obj60828 = ({"enumerable":true,"get":prop_get_fn_trigger_60780_61847,"set":prop_set_fn_trigger_60781_61851});
return obj60828;
})());

Object.defineProperty(obj_60710_target_60716_61838,"delay",(function (){var obj60830 = ({"enumerable":true,"get":prop_get_fn_delay_60788_61852,"set":prop_set_fn_delay_60789_61856});
return obj60830;
})());

Object.defineProperty(obj_60710_target_60716_61838,"action",(function (){var obj60832 = ({"enumerable":true,"get":prop_get_fn_action_60796_61857,"set":prop_set_fn_action_60797_61861});
return obj60832;
})());

Object.defineProperty(obj_60710_target_60716_61838,"remove",(function (){var obj60834 = ({"enumerable":false,"get":prop_get_fn_remove_60804_61865});
return obj60834;
})());


return obj_60710;
});
app.plugins.shape.lib_typography_proxy_QMARK_ = null;
app.plugins.shape.lib_component_proxy = null;
app.plugins.shape.text_props = (function app$plugins$shape$text_props(shape){
return app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.texts.current_root_values(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.root_attrs], null)),app.main.data.workspace.texts.current_paragraph_values(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.paragraph_attrs], null)),app.main.data.workspace.texts.current_text_values(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.text_node_attrs], null))], 0));
});
app.plugins.shape.shadow_defaults = (function app$plugins$shape$shadow_defaults(shadow__$1){
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2], null),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),(4),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),(4),new cljs.core.Keyword(null,"blur","blur",-453500461),(4),new cljs.core.Keyword(null,"spread","spread",862337191),(0),new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null),shadow__$1);
});
app.plugins.shape.blur_defaults = (function app$plugins$shape$blur_defaults(blur){
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"layer-blur","layer-blur",2003227989),new cljs.core.Keyword(null,"value","value",305978217),(4),new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null),blur);
});
app.plugins.shape.shape_proxy_QMARK_ = (function app$plugins$shape$shape_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"ShapeProxy");
});
app.plugins.shape.token_proxy_QMARK_ = (function app$plugins$shape$token_proxy_QMARK_(t){
return app.util.object.type_of_QMARK_(t,"TokenProxy");
});
app.plugins.shape.shape_proxy = (function app$plugins$shape$shape_proxy(var_args){
var G__60919 = arguments.length;
switch (G__60919) {
case 2:
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$2 = (function (plugin_id,id){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),id);
}));

(app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$3 = (function (plugin_id,page_id,id){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),page_id,id);
}));

(app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4 = (function (plugin_id,file_id,page_id,id){
if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error("Assert failed: (uuid? file-id)"));
}

if(cljs.core.uuid_QMARK_(page_id)){
} else {
throw (new Error("Assert failed: (uuid? page-id)"));
}

if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error("Assert failed: (uuid? id)"));
}

var data = app.plugins.utils.locate_shape(file_id,page_id,id);
var G__60920 = (function (){var G__60921 = (function (){var G__60922 = (function (){var G__60923 = (function (){var obj_60925 = ({});
var to_string_60924 = (function (){
return "ShapeProxy";
});
var obj_60925_target_60929_61867 = obj_60925;
var prop_get_fn__60937_61868 = (function (){
var obj_60925_this_60928 = this;
var internal_fn__60931 = to_string_60924;
return internal_fn__60931.call(obj_60925_this_60928);
});
var prop_get_fn__60944_61869 = (function (){
var obj_60925_this_60928 = this;
var internal_fn__60938 = to_string_60924;
return internal_fn__60938.call(obj_60925_this_60928);
});
var prop_get_fn_plugin_60951_61870 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_plugin_60945 = (function (){
return plugin_id;
});
return internal_fn_plugin_60945.call(obj_60925_this_60928);
});
var prop_get_fn_id_60958_61871 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_id_60952 = (function (){
return id;
});
return internal_fn_id_60952.call(obj_60925_this_60928);
});
var prop_get_fn_file_60965_61872 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_file_60959 = (function (){
return file_id;
});
return internal_fn_file_60959.call(obj_60925_this_60928);
});
var prop_get_fn_page_60972_61873 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_page_60966 = (function (){
return page_id;
});
return internal_fn_page_60966.call(obj_60925_this_60928);
});
var prop_get_fn_id_60979_61874 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_id_60973 = (function (p1__60837_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60837_SHARP_)));
});
return internal_fn_id_60973.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_type_60986_61875 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_type_60980 = (function (p1__60838_SHARP_){
return app.plugins.format.shape_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60838_SHARP_)));
});
return internal_fn_type_60980.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_name_60993_61876 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_name_60987 = (function (p1__60839_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60839_SHARP_));
});
return internal_fn_name_60987.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_name_60990_61877 = null;
var coercer_fn_name_60988_61878 = (((((!((schema_name_60990_61877 == null)))) && ((!(cljs.core.fn_QMARK_(schema_name_60990_61877))))))?app.common.schema.coercer(schema_name_60990_61877):null);
var decode_fn_name_60989_61879 = app.common.json.__GT_clj;
var prop_set_fn_name_60994_61880 = (function (val_name_60992){
var obj_60925_this_60928 = this;
var internal_fn_name_60987 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = ((typeof value === 'string')?app.common.path_names.clean_path(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(value)):null);
var valid_QMARK_ = (((!((value__$1 == null)))) && ((((!(cuerdas.core.ends_with_QMARK_(value__$1,"/")))) && ((!(cuerdas.core.blank_QMARK_(value__$1)))))));
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),"Plugin doesn't have 'content:write' permission");
} else {
if((!(valid_QMARK_))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"name","name",1843675177),value__$1);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.rename_shape_or_variant.cljs$core$IFn$_invoke$arity$4(file_id,page_id,id__$1,value__$1));

}
}
});
return internal_fn_name_60987.call(obj_60925_this_60928,obj_60925_this_60928,val_name_60992);
});
var prop_get_fn_blocked_61001_61881 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_blocked_60995 = (function (p1__60840_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60840_SHARP_)));
});
return internal_fn_blocked_60995.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_blocked_60998_61882 = null;
var coercer_fn_blocked_60996_61883 = (((((!((schema_blocked_60998_61882 == null)))) && ((!(cljs.core.fn_QMARK_(schema_blocked_60998_61882))))))?app.common.schema.coercer(schema_blocked_60998_61882):null);
var decode_fn_blocked_60997_61884 = app.common.json.__GT_clj;
var prop_set_fn_blocked_61002_61885 = (function (val_blocked_61000){
var obj_60925_this_60928 = this;
var internal_fn_blocked_60995 = (function (self,value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"blocked","blocked",181326681),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"blocked","blocked",181326681),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60841_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60841_SHARP_,new cljs.core.Keyword(null,"blocked","blocked",181326681),value);
})));

}
}
});
return internal_fn_blocked_60995.call(obj_60925_this_60928,obj_60925_this_60928,val_blocked_61000);
});
var prop_get_fn_hidden_61009_61886 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_hidden_61003 = (function (p1__60842_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60842_SHARP_)));
});
return internal_fn_hidden_61003.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_hidden_61006_61887 = null;
var coercer_fn_hidden_61004_61888 = (((((!((schema_hidden_61006_61887 == null)))) && ((!(cljs.core.fn_QMARK_(schema_hidden_61006_61887))))))?app.common.schema.coercer(schema_hidden_61006_61887):null);
var decode_fn_hidden_61005_61889 = app.common.json.__GT_clj;
var prop_set_fn_hidden_61010_61890 = (function (val_hidden_61008){
var obj_60925_this_60928 = this;
var internal_fn_hidden_61003 = (function (self,value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"hidden","hidden",-312506092),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"hidden","hidden",-312506092),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60843_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60843_SHARP_,new cljs.core.Keyword(null,"hidden","hidden",-312506092),value);
})));

}
}
});
return internal_fn_hidden_61003.call(obj_60925_this_60928,obj_60925_this_60928,val_hidden_61008);
});
var prop_get_fn_visible_61017_61891 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_visible_61011 = (function (p1__60844_SHARP_){
return (!(cljs.core.boolean$(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60844_SHARP_)))));
});
return internal_fn_visible_61011.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_visible_61014_61892 = null;
var coercer_fn_visible_61012_61893 = (((((!((schema_visible_61014_61892 == null)))) && ((!(cljs.core.fn_QMARK_(schema_visible_61014_61892))))))?app.common.schema.coercer(schema_visible_61014_61892):null);
var decode_fn_visible_61013_61894 = app.common.json.__GT_clj;
var prop_set_fn_visible_61018_61895 = (function (val_visible_61016){
var obj_60925_this_60928 = this;
var internal_fn_visible_61011 = (function (self,value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"visible","visible",-1024216805),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"visible","visible",-1024216805),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60845_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60845_SHARP_,new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.not(value));
})));

}
}
});
return internal_fn_visible_61011.call(obj_60925_this_60928,obj_60925_this_60928,val_visible_61016);
});
var prop_get_fn_proportionlock_61025_61896 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_proportionlock_61019 = (function (p1__60846_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60846_SHARP_)));
});
return internal_fn_proportionlock_61019.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_proportionlock_61022_61897 = null;
var coercer_fn_proportionlock_61020_61898 = (((((!((schema_proportionlock_61022_61897 == null)))) && ((!(cljs.core.fn_QMARK_(schema_proportionlock_61022_61897))))))?app.common.schema.coercer(schema_proportionlock_61022_61897):null);
var decode_fn_proportionlock_61021_61899 = app.common.json.__GT_clj;
var prop_set_fn_proportionlock_61026_61900 = (function (val_proportionlock_61024){
var obj_60925_this_60928 = this;
var internal_fn_proportionlock_61019 = (function (self,value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"proportionLock","proportionLock",90792392),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"proportionLock","proportionLock",90792392),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60847_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60847_SHARP_,new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),value);
})));

}
}
});
return internal_fn_proportionlock_61019.call(obj_60925_this_60928,obj_60925_this_60928,val_proportionlock_61024);
});
var prop_get_fn_constraintshorizontal_61033_61901 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_constraintshorizontal_61027 = (function (p1__60848_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60848_SHARP_)));
});
return internal_fn_constraintshorizontal_61027.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_constraintshorizontal_61030_61902 = null;
var coercer_fn_constraintshorizontal_61028_61903 = (((((!((schema_constraintshorizontal_61030_61902 == null)))) && ((!(cljs.core.fn_QMARK_(schema_constraintshorizontal_61030_61902))))))?app.common.schema.coercer(schema_constraintshorizontal_61030_61902):null);
var decode_fn_constraintshorizontal_61029_61904 = app.common.json.__GT_clj;
var prop_set_fn_constraintshorizontal_61034_61905 = (function (val_constraintshorizontal_61032){
var obj_60925_this_60928 = this;
var internal_fn_constraintshorizontal_61027 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.horizontal_constraint_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"constraintsHorizontal","constraintsHorizontal",1307569455),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"constraintsHorizontal","constraintsHorizontal",1307569455),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60849_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60849_SHARP_,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),value__$1);
})));

}
}
});
return internal_fn_constraintshorizontal_61027.call(obj_60925_this_60928,obj_60925_this_60928,val_constraintshorizontal_61032);
});
var prop_get_fn_constraintsvertical_61041_61906 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_constraintsvertical_61035 = (function (p1__60850_SHARP_){
return app.common.data.name(new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60850_SHARP_)));
});
return internal_fn_constraintsvertical_61035.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_constraintsvertical_61038_61907 = null;
var coercer_fn_constraintsvertical_61036_61908 = (((((!((schema_constraintsvertical_61038_61907 == null)))) && ((!(cljs.core.fn_QMARK_(schema_constraintsvertical_61038_61907))))))?app.common.schema.coercer(schema_constraintsvertical_61038_61907):null);
var decode_fn_constraintsvertical_61037_61909 = app.common.json.__GT_clj;
var prop_set_fn_constraintsvertical_61042_61910 = (function (val_constraintsvertical_61040){
var obj_60925_this_60928 = this;
var internal_fn_constraintsvertical_61035 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.vertical_constraint_types,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"constraintsVertical","constraintsVertical",250879495),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"constraintsVertical","constraintsVertical",250879495),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60851_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60851_SHARP_,new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),value__$1);
})));

}
}
});
return internal_fn_constraintsvertical_61035.call(obj_60925_this_60928,obj_60925_this_60928,val_constraintsvertical_61040);
});
var prop_get_fn_borderradius_61049_61911 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_borderradius_61043 = (function (p1__60852_SHARP_){
return new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60852_SHARP_));
});
return internal_fn_borderradius_61043.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_borderradius_61046_61912 = null;
var coercer_fn_borderradius_61044_61913 = (((((!((schema_borderradius_61046_61912 == null)))) && ((!(cljs.core.fn_QMARK_(schema_borderradius_61046_61912))))))?app.common.schema.coercer(schema_borderradius_61046_61912):null);
var decode_fn_borderradius_61045_61914 = app.common.json.__GT_clj;
var prop_set_fn_borderradius_61050_61915 = (function (val_borderradius_61048){
var obj_60925_this_60928 = this;
var internal_fn_borderradius_61043 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(((cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))) || ((value < (0))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60853_SHARP_){
return app.common.types.shape.radius.set_radius_to_all_corners(p1__60853_SHARP_,value);
})));

}
}
});
return internal_fn_borderradius_61043.call(obj_60925_this_60928,obj_60925_this_60928,val_borderradius_61048);
});
var prop_get_fn_borderradiustopleft_61057_61916 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_borderradiustopleft_61051 = (function (p1__60854_SHARP_){
return new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60854_SHARP_));
});
return internal_fn_borderradiustopleft_61051.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_borderradiustopleft_61054_61917 = null;
var coercer_fn_borderradiustopleft_61052_61918 = (((((!((schema_borderradiustopleft_61054_61917 == null)))) && ((!(cljs.core.fn_QMARK_(schema_borderradiustopleft_61054_61917))))))?app.common.schema.coercer(schema_borderradiustopleft_61054_61917):null);
var decode_fn_borderradiustopleft_61053_61919 = app.common.json.__GT_clj;
var prop_set_fn_borderradiustopleft_61058_61920 = (function (val_borderradiustopleft_61056){
var obj_60925_this_60928 = this;
var internal_fn_borderradiustopleft_61051 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadiusTopLeft","borderRadiusTopLeft",1495282142),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadiusTopLeft","borderRadiusTopLeft",1495282142),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60855_SHARP_){
return app.common.types.shape.radius.set_radius_to_single_corner(p1__60855_SHARP_,new cljs.core.Keyword(null,"r1","r1",690974900),value);
})));

}
}
});
return internal_fn_borderradiustopleft_61051.call(obj_60925_this_60928,obj_60925_this_60928,val_borderradiustopleft_61056);
});
var prop_get_fn_borderradiustopright_61065_61921 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_borderradiustopright_61059 = (function (p1__60856_SHARP_){
return new cljs.core.Keyword(null,"r2","r2",252844174).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60856_SHARP_));
});
return internal_fn_borderradiustopright_61059.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_borderradiustopright_61062_61922 = null;
var coercer_fn_borderradiustopright_61060_61923 = (((((!((schema_borderradiustopright_61062_61922 == null)))) && ((!(cljs.core.fn_QMARK_(schema_borderradiustopright_61062_61922))))))?app.common.schema.coercer(schema_borderradiustopright_61062_61922):null);
var decode_fn_borderradiustopright_61061_61924 = app.common.json.__GT_clj;
var prop_set_fn_borderradiustopright_61066_61925 = (function (val_borderradiustopright_61064){
var obj_60925_this_60928 = this;
var internal_fn_borderradiustopright_61059 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadiusTopRight","borderRadiusTopRight",223982879),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadiusTopRight","borderRadiusTopRight",223982879),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60857_SHARP_){
return app.common.types.shape.radius.set_radius_to_single_corner(p1__60857_SHARP_,new cljs.core.Keyword(null,"r2","r2",252844174),value);
})));

}
}
});
return internal_fn_borderradiustopright_61059.call(obj_60925_this_60928,obj_60925_this_60928,val_borderradiustopright_61064);
});
var prop_get_fn_borderradiusbottomright_61073_61926 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_borderradiusbottomright_61067 = (function (p1__60858_SHARP_){
return new cljs.core.Keyword(null,"r3","r3",-2027148174).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60858_SHARP_));
});
return internal_fn_borderradiusbottomright_61067.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_borderradiusbottomright_61070_61927 = null;
var coercer_fn_borderradiusbottomright_61068_61928 = (((((!((schema_borderradiusbottomright_61070_61927 == null)))) && ((!(cljs.core.fn_QMARK_(schema_borderradiusbottomright_61070_61927))))))?app.common.schema.coercer(schema_borderradiusbottomright_61070_61927):null);
var decode_fn_borderradiusbottomright_61069_61929 = app.common.json.__GT_clj;
var prop_set_fn_borderradiusbottomright_61074_61930 = (function (val_borderradiusbottomright_61072){
var obj_60925_this_60928 = this;
var internal_fn_borderradiusbottomright_61067 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadiusBottomRight","borderRadiusBottomRight",-1210449538),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadiusBottomRight","borderRadiusBottomRight",-1210449538),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60859_SHARP_){
return app.common.types.shape.radius.set_radius_to_single_corner(p1__60859_SHARP_,new cljs.core.Keyword(null,"r3","r3",-2027148174),value);
})));

}
}
});
return internal_fn_borderradiusbottomright_61067.call(obj_60925_this_60928,obj_60925_this_60928,val_borderradiusbottomright_61072);
});
var prop_get_fn_borderradiusbottomleft_61081_61931 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_borderradiusbottomleft_61075 = (function (p1__60860_SHARP_){
return new cljs.core.Keyword(null,"r4","r4",1134323163).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60860_SHARP_));
});
return internal_fn_borderradiusbottomleft_61075.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_borderradiusbottomleft_61078_61932 = null;
var coercer_fn_borderradiusbottomleft_61076_61933 = (((((!((schema_borderradiusbottomleft_61078_61932 == null)))) && ((!(cljs.core.fn_QMARK_(schema_borderradiusbottomleft_61078_61932))))))?app.common.schema.coercer(schema_borderradiusbottomleft_61078_61932):null);
var decode_fn_borderradiusbottomleft_61077_61934 = app.common.json.__GT_clj;
var prop_set_fn_borderradiusbottomleft_61082_61935 = (function (val_borderradiusbottomleft_61080){
var obj_60925_this_60928 = this;
var internal_fn_borderradiusbottomleft_61075 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadiusBottomLeft","borderRadiusBottomLeft",-81645913),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"borderRadiusBottomLeft","borderRadiusBottomLeft",-81645913),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60863_SHARP_){
return app.common.types.shape.radius.set_radius_to_single_corner(p1__60863_SHARP_,new cljs.core.Keyword(null,"r4","r4",1134323163),value);
})));

}
}
});
return internal_fn_borderradiusbottomleft_61075.call(obj_60925_this_60928,obj_60925_this_60928,val_borderradiusbottomleft_61080);
});
var prop_get_fn_opacity_61089_61936 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_opacity_61083 = (function (p1__60864_SHARP_){
return new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60864_SHARP_));
});
return internal_fn_opacity_61083.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_opacity_61086_61937 = null;
var coercer_fn_opacity_61084_61938 = (((((!((schema_opacity_61086_61937 == null)))) && ((!(cljs.core.fn_QMARK_(schema_opacity_61086_61937))))))?app.common.schema.coercer(schema_opacity_61086_61937):null);
var decode_fn_opacity_61085_61939 = app.common.json.__GT_clj;
var prop_set_fn_opacity_61090_61940 = (function (val_opacity_61088){
var obj_60925_this_60928 = this;
var internal_fn_opacity_61083 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(((cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))) || ((((value < (0))) || ((value > (1))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"opacity","opacity",397153780),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"opacity","opacity",397153780),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60865_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60865_SHARP_,new cljs.core.Keyword(null,"opacity","opacity",397153780),value);
})));

}
}
});
return internal_fn_opacity_61083.call(obj_60925_this_60928,obj_60925_this_60928,val_opacity_61088);
});
var prop_get_fn_blendmode_61097_61941 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_blendmode_61091 = (function (p1__60866_SHARP_){
return app.common.data.name(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60866_SHARP_)),new cljs.core.Keyword(null,"normal","normal",-1519123858)));
});
return internal_fn_blendmode_61091.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_blendmode_61094_61942 = null;
var coercer_fn_blendmode_61092_61943 = (((((!((schema_blendmode_61094_61942 == null)))) && ((!(cljs.core.fn_QMARK_(schema_blendmode_61094_61942))))))?app.common.schema.coercer(schema_blendmode_61094_61942):null);
var decode_fn_blendmode_61093_61944 = app.common.json.__GT_clj;
var prop_set_fn_blendmode_61098_61945 = (function (val_blendmode_61096){
var obj_60925_this_60928 = this;
var internal_fn_blendmode_61091 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(app.common.types.shape.blend_modes,value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"blendMode","blendMode",2057676269),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"blendMode","blendMode",2057676269),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60867_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60867_SHARP_,new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),value__$1);
})));

}
}
});
return internal_fn_blendmode_61091.call(obj_60925_this_60928,obj_60925_this_60928,val_blendmode_61096);
});
var prop_get_fn_shadows_61105_61946 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_shadows_61099 = (function (p1__60868_SHARP_){
return app.plugins.format.format_shadows(new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60868_SHARP_)));
});
return internal_fn_shadows_61099.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_shadows_61102_61947 = null;
var coercer_fn_shadows_61100_61948 = (((((!((schema_shadows_61102_61947 == null)))) && ((!(cljs.core.fn_QMARK_(schema_shadows_61102_61947))))))?app.common.schema.coercer(schema_shadows_61102_61947):null);
var decode_fn_shadows_61101_61949 = app.common.json.__GT_clj;
var prop_set_fn_shadows_61106_61950 = (function (val_shadows_61104){
var obj_60925_this_60928 = this;
var internal_fn_shadows_61099 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60869_SHARP_){
return app.plugins.shape.shadow_defaults(app.plugins.parser.parse_shadow(p1__60869_SHARP_));
}),value);
if(cljs.core.not(app.common.schema.validate(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.common.types.shape.shadow.schema_COLON_shadow], null),value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"shadows","shadows",-1489088471),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"shadows","shadows",-1489088471),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60870_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60870_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803),value__$1);
})));

}
}
});
return internal_fn_shadows_61099.call(obj_60925_this_60928,obj_60925_this_60928,val_shadows_61104);
});
var prop_get_fn_blur_61113_61951 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_blur_61107 = (function (p1__60871_SHARP_){
return app.plugins.format.format_blur(new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60871_SHARP_)));
});
return internal_fn_blur_61107.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_blur_61110_61952 = null;
var coercer_fn_blur_61108_61953 = (((((!((schema_blur_61110_61952 == null)))) && ((!(cljs.core.fn_QMARK_(schema_blur_61110_61952))))))?app.common.schema.coercer(schema_blur_61110_61952):null);
var decode_fn_blur_61109_61954 = app.common.json.__GT_clj;
var prop_set_fn_blur_61114_61955 = (function (val_blur_61112){
var obj_60925_this_60928 = this;
var internal_fn_blur_61107 = (function (self,value){
if((value == null)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),(function (p1__60872_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60872_SHARP_,new cljs.core.Keyword(null,"blur","blur",-453500461));
})));
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = app.plugins.shape.blur_defaults(app.plugins.parser.parse_blur(value));
if(cljs.core.not(app.common.schema.validate(app.common.types.shape.blur.schema_COLON_blur,value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"blur","blur",-453500461),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"blur","blur",-453500461),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60873_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60873_SHARP_,new cljs.core.Keyword(null,"blur","blur",-453500461),value__$1);
})));

}
}
}
});
return internal_fn_blur_61107.call(obj_60925_this_60928,obj_60925_this_60928,val_blur_61112);
});
var prop_get_fn_exports_61121_61956 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_exports_61115 = (function (p1__60874_SHARP_){
return app.plugins.format.format_exports(new cljs.core.Keyword(null,"exports","exports",-745008272).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60874_SHARP_)));
});
return internal_fn_exports_61115.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_exports_61118_61957 = null;
var coercer_fn_exports_61116_61958 = (((((!((schema_exports_61118_61957 == null)))) && ((!(cljs.core.fn_QMARK_(schema_exports_61118_61957))))))?app.common.schema.coercer(schema_exports_61118_61957):null);
var decode_fn_exports_61117_61959 = app.common.json.__GT_clj;
var prop_set_fn_exports_61122_61960 = (function (val_exports_61120){
var obj_60925_this_60928 = this;
var internal_fn_exports_61115 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = app.plugins.parser.parse_exports(value);
if(cljs.core.not(app.common.schema.validate(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.common.types.shape.export$.schema_COLON_export], null),value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"exports","exports",-745008272),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"exports","exports",-745008272),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60875_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60875_SHARP_,new cljs.core.Keyword(null,"exports","exports",-745008272),value__$1);
})));

}
}
});
return internal_fn_exports_61115.call(obj_60925_this_60928,obj_60925_this_60928,val_exports_61120);
});
var prop_get_fn_x_61129_61961 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_x_61123 = (function (p1__60876_SHARP_){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60876_SHARP_))));
});
return internal_fn_x_61123.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_x_61126_61962 = null;
var coercer_fn_x_61124_61963 = (((((!((schema_x_61126_61962 == null)))) && ((!(cljs.core.fn_QMARK_(schema_x_61126_61962))))))?app.common.schema.coercer(schema_x_61126_61962):null);
var decode_fn_x_61125_61964 = app.common.json.__GT_clj;
var prop_set_fn_x_61130_61965 = (function (val_x_61128){
var obj_60925_this_60928 = this;
var internal_fn_x_61123 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"x","x",2099068185),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"x","x",2099068185),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_position.cljs$core$IFn$_invoke$arity$3(id__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absolute?","absolute?",1457842844),true], null)));

}
}
});
return internal_fn_x_61123.call(obj_60925_this_60928,obj_60925_this_60928,val_x_61128);
});
var prop_get_fn_y_61137_61966 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_y_61131 = (function (p1__60877_SHARP_){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60877_SHARP_))));
});
return internal_fn_y_61131.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_y_61134_61967 = null;
var coercer_fn_y_61132_61968 = (((((!((schema_y_61134_61967 == null)))) && ((!(cljs.core.fn_QMARK_(schema_y_61134_61967))))))?app.common.schema.coercer(schema_y_61134_61967):null);
var decode_fn_y_61133_61969 = app.common.json.__GT_clj;
var prop_set_fn_y_61138_61970 = (function (val_y_61136){
var obj_60925_this_60928 = this;
var internal_fn_y_61131 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"y","y",-1757859776),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"y","y",-1757859776),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_position.cljs$core$IFn$_invoke$arity$3(id__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absolute?","absolute?",1457842844),true], null)));

}
}
});
return internal_fn_y_61131.call(obj_60925_this_60928,obj_60925_this_60928,val_y_61136);
});
var prop_get_fn_parent_61145_61971 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_parent_61139 = (function (self){
var shape = app.plugins.utils.proxy__GT_shape(self);
if(app.common.files.helpers.root_QMARK_(shape)){
return null;
} else {
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page"),parent_id);
}
});
return internal_fn_parent_61139.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_parentindex_61152_61972 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_parentindex_61146 = (function (self){
var shape = app.plugins.utils.proxy__GT_shape(self);
if(app.common.files.helpers.root_QMARK_(shape)){
return (0);
} else {
var file_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file");
var page_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page");
var parent = app.plugins.utils.locate_shape(file_id__$1,page_id__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var index = app.common.data.index_of(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent),id);
return index;
}
});
return internal_fn_parentindex_61146.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_parentx_61159_61973 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_parentx_61153 = (function (self){
var shape = app.plugins.utils.proxy__GT_shape(self);
var shape_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)));
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
var parent = app.plugins.utils.locate_shape(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page"),parent_id);
return (shape_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent));
});
return internal_fn_parentx_61153.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_parentx_61156_61974 = null;
var coercer_fn_parentx_61154_61975 = (((((!((schema_parentx_61156_61974 == null)))) && ((!(cljs.core.fn_QMARK_(schema_parentx_61156_61974))))))?app.common.schema.coercer(schema_parentx_61156_61974):null);
var decode_fn_parentx_61155_61976 = app.common.json.__GT_clj;
var prop_set_fn_parentx_61160_61977 = (function (val_parentx_61158){
var obj_60925_this_60928 = this;
var internal_fn_parentx_61153 = (function (self,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"parentX","parentX",283353021),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"parentX","parentX",283353021),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self));
var parent = app.plugins.utils.locate_shape(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page"),parent_id);
var parent_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_position.cljs$core$IFn$_invoke$arity$3(id__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(parent_x + value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absolute?","absolute?",1457842844),true], null)));

}
}
});
return internal_fn_parentx_61153.call(obj_60925_this_60928,obj_60925_this_60928,val_parentx_61158);
});
var prop_get_fn_parenty_61167_61978 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_parenty_61161 = (function (self){
var shape = app.plugins.utils.proxy__GT_shape(self);
var shape_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)));
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
var parent = app.plugins.utils.locate_shape(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page"),parent_id);
var parent_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent);
return (shape_y - parent_y);
});
return internal_fn_parenty_61161.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_parenty_61164_61979 = null;
var coercer_fn_parenty_61162_61980 = (((((!((schema_parenty_61164_61979 == null)))) && ((!(cljs.core.fn_QMARK_(schema_parenty_61164_61979))))))?app.common.schema.coercer(schema_parenty_61164_61979):null);
var decode_fn_parenty_61163_61981 = app.common.json.__GT_clj;
var prop_set_fn_parenty_61168_61982 = (function (val_parenty_61166){
var obj_60925_this_60928 = this;
var internal_fn_parenty_61161 = (function (self,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"parentY","parentY",485277499),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"parentY","parentY",485277499),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self));
var parent = app.plugins.utils.locate_shape(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page"),parent_id);
var parent_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_position.cljs$core$IFn$_invoke$arity$3(id__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(parent_y + value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absolute?","absolute?",1457842844),true], null)));

}
}
});
return internal_fn_parenty_61161.call(obj_60925_this_60928,obj_60925_this_60928,val_parenty_61166);
});
var prop_get_fn_boardx_61175_61983 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_boardx_61169 = (function (self){
var shape = app.plugins.utils.proxy__GT_shape(self);
var shape_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)));
var frame_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
var frame = app.plugins.utils.locate_shape(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page"),frame_id);
var frame_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame);
return (shape_x - frame_x);
});
return internal_fn_boardx_61169.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_boardx_61172_61984 = null;
var coercer_fn_boardx_61170_61985 = (((((!((schema_boardx_61172_61984 == null)))) && ((!(cljs.core.fn_QMARK_(schema_boardx_61172_61984))))))?app.common.schema.coercer(schema_boardx_61172_61984):null);
var decode_fn_boardx_61171_61986 = app.common.json.__GT_clj;
var prop_set_fn_boardx_61176_61987 = (function (val_boardx_61174){
var obj_60925_this_60928 = this;
var internal_fn_boardx_61169 = (function (self,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"frameX","frameX",1123372234),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"frameX","frameX",1123372234),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self));
var frame = app.plugins.utils.locate_shape(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page"),frame_id);
var frame_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_position.cljs$core$IFn$_invoke$arity$3(id__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(frame_x + value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absolute?","absolute?",1457842844),true], null)));

}
}
});
return internal_fn_boardx_61169.call(obj_60925_this_60928,obj_60925_this_60928,val_boardx_61174);
});
var prop_get_fn_boardy_61183_61988 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_boardy_61177 = (function (self){
var shape = app.plugins.utils.proxy__GT_shape(self);
var shape_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape)));
var frame_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
var frame = app.plugins.utils.locate_shape(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page"),frame_id);
var frame_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame);
return (shape_y - frame_y);
});
return internal_fn_boardy_61177.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_boardy_61180_61989 = null;
var coercer_fn_boardy_61178_61990 = (((((!((schema_boardy_61180_61989 == null)))) && ((!(cljs.core.fn_QMARK_(schema_boardy_61180_61989))))))?app.common.schema.coercer(schema_boardy_61180_61989):null);
var decode_fn_boardy_61179_61991 = app.common.json.__GT_clj;
var prop_set_fn_boardy_61184_61992 = (function (val_boardy_61182){
var obj_60925_this_60928 = this;
var internal_fn_boardy_61177 = (function (self,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"frameY","frameY",86132734),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"frameY","frameY",86132734),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self));
var frame = app.plugins.utils.locate_shape(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page"),frame_id);
var frame_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_position.cljs$core$IFn$_invoke$arity$3(id__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(frame_y + value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absolute?","absolute?",1457842844),true], null)));

}
}
});
return internal_fn_boardy_61177.call(obj_60925_this_60928,obj_60925_this_60928,val_boardy_61182);
});
var prop_get_fn_width_61191_61993 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_width_61185 = (function (p1__60882_SHARP_){
return new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60882_SHARP_)));
});
return internal_fn_width_61185.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_height_61198_61994 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_height_61192 = (function (p1__60883_SHARP_){
return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60883_SHARP_)));
});
return internal_fn_height_61192.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_bounds_61205_61995 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_bounds_61199 = (function (p1__60884_SHARP_){
return app.plugins.format.format_bounds(app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60884_SHARP_))));
});
return internal_fn_bounds_61199.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_center_61212_61996 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_center_61206 = (function (p1__60885_SHARP_){
return app.plugins.format.format_point(app.common.geom.shapes.shape__GT_center(app.plugins.utils.proxy__GT_shape(p1__60885_SHARP_)));
});
return internal_fn_center_61206.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_rotation_61219_61997 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_rotation_61213 = (function (p1__60886_SHARP_){
return new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60886_SHARP_));
});
return internal_fn_rotation_61213.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_rotation_61216_61998 = null;
var coercer_fn_rotation_61214_61999 = (((((!((schema_rotation_61216_61998 == null)))) && ((!(cljs.core.fn_QMARK_(schema_rotation_61216_61998))))))?app.common.schema.coercer(schema_rotation_61216_61998):null);
var decode_fn_rotation_61215_62000 = app.common.json.__GT_clj;
var prop_set_fn_rotation_61220_62001 = (function (val_rotation_61218){
var obj_60925_this_60928 = this;
var internal_fn_rotation_61213 = (function (self,value){
if((!(typeof value === 'number'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rotation","rotation",-1728051644),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rotation","rotation",-1728051644),"Plugin doesn't have 'content:write' permission");
} else {
var shape = app.plugins.utils.proxy__GT_shape(self);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.increase_rotation.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)]),value));

}
}
});
return internal_fn_rotation_61213.call(obj_60925_this_60928,obj_60925_this_60928,val_rotation_61218);
});
var prop_get_fn_flipx_61227_62002 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_flipx_61221 = (function (p1__60887_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60887_SHARP_)));
});
return internal_fn_flipx_61221.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_flipx_61224_62003 = null;
var coercer_fn_flipx_61222_62004 = (((((!((schema_flipx_61224_62003 == null)))) && ((!(cljs.core.fn_QMARK_(schema_flipx_61224_62003))))))?app.common.schema.coercer(schema_flipx_61224_62003):null);
var decode_fn_flipx_61223_62005 = app.common.json.__GT_clj;
var prop_set_fn_flipx_61228_62006 = (function (val_flipx_61226){
var obj_60925_this_60928 = this;
var internal_fn_flipx_61221 = (function (self,value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"flipX","flipX",-1853365),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"flipX","flipX",-1853365),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.flip_horizontal_selected.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([id__$1])));

}
}
});
return internal_fn_flipx_61221.call(obj_60925_this_60928,obj_60925_this_60928,val_flipx_61226);
});
var prop_get_fn_flipy_61235_62007 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_flipy_61229 = (function (p1__60888_SHARP_){
return cljs.core.boolean$(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60888_SHARP_)));
});
return internal_fn_flipy_61229.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_flipy_61232_62008 = null;
var coercer_fn_flipy_61230_62009 = (((((!((schema_flipy_61232_62008 == null)))) && ((!(cljs.core.fn_QMARK_(schema_flipy_61232_62008))))))?app.common.schema.coercer(schema_flipy_61232_62008):null);
var decode_fn_flipy_61231_62010 = app.common.json.__GT_clj;
var prop_set_fn_flipy_61236_62011 = (function (val_flipy_61234){
var obj_60925_this_60928 = this;
var internal_fn_flipy_61229 = (function (self,value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"flipY","flipY",624880256),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"flipY","flipY",624880256),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.flip_vertical_selected.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([id__$1])));

}
}
});
return internal_fn_flipy_61229.call(obj_60925_this_60928,obj_60925_this_60928,val_flipy_61234);
});
var prop_get_fn_fills_61243_62012 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_fills_61237 = (function (p1__60889_SHARP_){
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(data)){
return app.plugins.format.format_fills(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(app.plugins.shape.text_props(app.plugins.utils.proxy__GT_shape(p1__60889_SHARP_))));
} else {
return app.plugins.format.format_fills(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60889_SHARP_)));
}
});
return internal_fn_fills_61237.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_fills_61240_62013 = null;
var coercer_fn_fills_61238_62014 = (((((!((schema_fills_61240_62013 == null)))) && ((!(cljs.core.fn_QMARK_(schema_fills_61240_62013))))))?app.common.schema.coercer(schema_fills_61240_62013):null);
var decode_fn_fills_61239_62015 = app.common.json.__GT_clj;
var prop_set_fn_fills_61244_62016 = (function (val_fills_61242){
var obj_60925_this_60928 = this;
var internal_fn_fills_61237 = (function (self,value){
var shape = app.plugins.utils.proxy__GT_shape(self);
var id__$1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var value__$1 = app.plugins.parser.parse_fills(value);
if(cljs.core.not(app.common.schema.validate(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.common.types.fills.schema_COLON_fill], null),value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fills","fills",902966780),value__$1);
} else {
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(id__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fills","fills",902966780),value__$1], null)));
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"fills","fills",902966780),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60890_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60890_SHARP_,new cljs.core.Keyword(null,"fills","fills",902966780),value__$1);
})));

}
}
}
});
return internal_fn_fills_61237.call(obj_60925_this_60928,obj_60925_this_60928,val_fills_61242);
});
var prop_get_fn_strokes_61251_62017 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_strokes_61245 = (function (p1__60891_SHARP_){
return app.plugins.format.format_strokes(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60891_SHARP_)));
});
return internal_fn_strokes_61245.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_strokes_61248_62018 = null;
var coercer_fn_strokes_61246_62019 = (((((!((schema_strokes_61248_62018 == null)))) && ((!(cljs.core.fn_QMARK_(schema_strokes_61248_62018))))))?app.common.schema.coercer(schema_strokes_61248_62018):null);
var decode_fn_strokes_61247_62020 = app.common.json.__GT_clj;
var prop_set_fn_strokes_61252_62021 = (function (val_strokes_61250){
var obj_60925_this_60928 = this;
var internal_fn_strokes_61245 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = app.plugins.parser.parse_strokes(value);
if(cljs.core.not(app.common.schema.validate(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.common.types.shape.schema_COLON_stroke], null),value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"strokes","strokes",-1645650952),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"strokes","strokes",-1645650952),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60892_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60892_SHARP_,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),value__$1);
})));

}
}
});
return internal_fn_strokes_61245.call(obj_60925_this_60928,obj_60925_this_60928,val_strokes_61250);
});
var prop_get_fn_layoutchild_61259_62022 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_layoutchild_61253 = (function (self){
var file_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file");
var page_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page");
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id__$1,page_id__$1);
if(app.common.types.shape.layout.any_layout_immediate_child_id_QMARK_(objects,id__$1)){
return app.plugins.flex.layout_child_proxy(plugin_id,file_id__$1,page_id__$1,id__$1);
} else {
return null;
}
});
return internal_fn_layoutchild_61253.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_layoutcell_61266_62023 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_layoutcell_61260 = (function (self){
var file_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file");
var page_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page");
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id__$1,page_id__$1);
if(app.common.types.shape.layout.grid_layout_immediate_child_id_QMARK_(objects,id__$1)){
return app.plugins.grid.layout_cell_proxy(plugin_id,file_id__$1,page_id__$1,id__$1);
} else {
return null;
}
});
return internal_fn_layoutcell_61260.call(obj_60925_this_60928,obj_60925_this_60928);
});
var prop_get_fn_interactions_61273_62024 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_interactions_61267 = (function (self){
var interactions = new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self));
return app.plugins.format.format_array((function (p1__60895_SHARP_){
return app.plugins.shape.interaction_proxy(plugin_id,file_id,page_id,id,p1__60895_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(interactions)));
});
return internal_fn_interactions_61267.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_resize_61277_62025 = null;
var coercer_fn_resize_61275_62026 = (((((!((schema_resize_61277_62025 == null)))) && ((!(cljs.core.fn_QMARK_(schema_resize_61277_62025))))))?app.common.schema.coercer(schema_resize_61277_62025):null);
var decode_fn_resize_61276_62027 = app.common.json.__GT_clj;
var prop_get_fn_resize_61280_62028 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_resize_61274 = (function (width,height){
if(((cljs.core.not(app.common.schema.valid_safe_number_QMARK_(width))) || ((width <= (0))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"resize","resize",297367086),width);
} else {
if(((cljs.core.not(app.common.schema.valid_safe_number_QMARK_(height))) || ((height <= (0))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"resize","resize",297367086),height);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"resize","resize",297367086),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.update_dimensions.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.Keyword(null,"width","width",-384071477),width),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.update_dimensions.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.Keyword(null,"height","height",1025178622),height)], 0));

}
}
}
});
var internal_fn_resize_61274__$1 = internal_fn_resize_61274.bind(obj_60925_this_60928);
return internal_fn_resize_61274__$1;
});
var schema_rotate_61284_62029 = null;
var coercer_fn_rotate_61282_62030 = (((((!((schema_rotate_61284_62029 == null)))) && ((!(cljs.core.fn_QMARK_(schema_rotate_61284_62029))))))?app.common.schema.coercer(schema_rotate_61284_62029):null);
var decode_fn_rotate_61283_62031 = app.common.json.__GT_clj;
var prop_get_fn_rotate_61287_62032 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_rotate_61281 = (function (angle,center){
var center__$1 = (cljs.core.truth_(center)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),app.util.object.get.cljs$core$IFn$_invoke$arity$2(center,"x"),new cljs.core.Keyword(null,"y","y",-1757859776),app.util.object.get.cljs$core$IFn$_invoke$arity$2(center,"y")], null):null);
if((!(typeof angle === 'number'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rotate-angle","rotate-angle",-1896437128),angle);
} else {
if((((!((center__$1 == null)))) && ((((!(typeof new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(center__$1) === 'number'))) || ((!(typeof new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(center__$1) === 'number'))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rotate-center","rotate-center",6610822),center__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"rotate","rotate",152705015),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.increase_rotation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),angle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center","center",-748944368),center__$1,new cljs.core.Keyword(null,"delta?","delta?",-1801433442),true], null)));

}
}
}
});
var internal_fn_rotate_61281__$1 = internal_fn_rotate_61281.bind(obj_60925_this_60928);
return internal_fn_rotate_61281__$1;
});
var schema_clone_61291_62033 = null;
var coercer_fn_clone_61289_62034 = (((((!((schema_clone_61291_62033 == null)))) && ((!(cljs.core.fn_QMARK_(schema_clone_61291_62033))))))?app.common.schema.coercer(schema_clone_61291_62033):null);
var decode_fn_clone_61290_62035 = app.common.json.__GT_clj;
var prop_get_fn_clone_61294_62036 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_clone_61288 = (function (){
var ret_v = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"clone","clone",711747572),"Plugin doesn't have 'content:write' permission");
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.selection.duplicate_shapes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"change-selection?","change-selection?",1166805125),false,new cljs.core.Keyword(null,"return-ref","return-ref",1355506357),ret_v], 0)));

return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$2(plugin_id,cljs.core.deref(ret_v));

}
});
var internal_fn_clone_61288__$1 = internal_fn_clone_61288.bind(obj_60925_this_60928);
return internal_fn_clone_61288__$1;
});
var schema_remove_61298_62037 = null;
var coercer_fn_remove_61296_62038 = (((((!((schema_remove_61298_62037 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_61298_62037))))))?app.common.schema.coercer(schema_remove_61298_62037):null);
var decode_fn_remove_61297_62039 = app.common.json.__GT_clj;
var prop_get_fn_remove_61301_62040 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_remove_61295 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"remove","remove",-131428414),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([id])));

}
});
var internal_fn_remove_61295__$1 = internal_fn_remove_61295.bind(obj_60925_this_60928);
return internal_fn_remove_61295__$1;
});
var schema_getplugindata_61305_62041 = null;
var coercer_fn_getplugindata_61303_62042 = (((((!((schema_getplugindata_61305_62041 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindata_61305_62041))))))?app.common.schema.coercer(schema_getplugindata_61305_62041):null);
var decode_fn_getplugindata_61304_62043 = app.common.json.__GT_clj;
var prop_get_fn_getplugindata_61308_62044 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_getplugindata_61302 = (function (key){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getPluginData","getPluginData",190301887),key);
} else {
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id))),key);

}
});
var internal_fn_getplugindata_61302__$1 = internal_fn_getplugindata_61302.bind(obj_60925_this_60928);
return internal_fn_getplugindata_61302__$1;
});
var schema_setplugindata_61312_62045 = null;
var coercer_fn_setplugindata_61310_62046 = (((((!((schema_setplugindata_61312_62045 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setplugindata_61312_62045))))))?app.common.schema.coercer(schema_setplugindata_61312_62045):null);
var decode_fn_setplugindata_61311_62047 = app.common.json.__GT_clj;
var prop_get_fn_setplugindata_61315_62048 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_setplugindata_61309 = (function (key,value){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-key","setPluginData-key",437211756),key);
} else {
if((((!((value == null)))) && ((!(typeof value === 'string'))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-value","setPluginData-value",281004073),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData","setPluginData",2049380387),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$7(file_id,new cljs.core.Keyword(null,"shape","shape",1190694006),id,page_id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)),key,value));

}
}
}
});
var internal_fn_setplugindata_61309__$1 = internal_fn_setplugindata_61309.bind(obj_60925_this_60928);
return internal_fn_setplugindata_61309__$1;
});
var schema_getplugindatakeys_61319_62049 = null;
var coercer_fn_getplugindatakeys_61317_62050 = (((((!((schema_getplugindatakeys_61319_62049 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindatakeys_61319_62049))))))?app.common.schema.coercer(schema_getplugindatakeys_61319_62049):null);
var decode_fn_getplugindatakeys_61318_62051 = app.common.json.__GT_clj;
var prop_get_fn_getplugindatakeys_61322_62052 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_getplugindatakeys_61316 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)))));
});
var internal_fn_getplugindatakeys_61316__$1 = internal_fn_getplugindatakeys_61316.bind(obj_60925_this_60928);
return internal_fn_getplugindatakeys_61316__$1;
});
var schema_getsharedplugindata_61326_62053 = null;
var coercer_fn_getsharedplugindata_61324_62054 = (((((!((schema_getsharedplugindata_61326_62053 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindata_61326_62053))))))?app.common.schema.coercer(schema_getsharedplugindata_61326_62053):null);
var decode_fn_getsharedplugindata_61325_62055 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindata_61329_62056 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_getsharedplugindata_61323 = (function (namespace,key){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginData-namespace","getSharedPluginData-namespace",823864288),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginData-key","getSharedPluginData-key",1393856585),key);
} else {
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace)),key);

}
}
});
var internal_fn_getsharedplugindata_61323__$1 = internal_fn_getsharedplugindata_61323.bind(obj_60925_this_60928);
return internal_fn_getsharedplugindata_61323__$1;
});
var schema_setsharedplugindata_61333_62057 = null;
var coercer_fn_setsharedplugindata_61331_62058 = (((((!((schema_setsharedplugindata_61333_62057 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setsharedplugindata_61333_62057))))))?app.common.schema.coercer(schema_setsharedplugindata_61333_62057):null);
var decode_fn_setsharedplugindata_61332_62059 = app.common.json.__GT_clj;
var prop_get_fn_setsharedplugindata_61336_62060 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_setsharedplugindata_61330 = (function (namespace,key,value){
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
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$7(file_id,new cljs.core.Keyword(null,"shape","shape",1190694006),id,page_id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace),key,value));

}
}
}
}
});
var internal_fn_setsharedplugindata_61330__$1 = internal_fn_setsharedplugindata_61330.bind(obj_60925_this_60928);
return internal_fn_setsharedplugindata_61330__$1;
});
var schema_getsharedplugindatakeys_61340_62061 = null;
var coercer_fn_getsharedplugindatakeys_61338_62062 = (((((!((schema_getsharedplugindatakeys_61340_62061 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindatakeys_61340_62061))))))?app.common.schema.coercer(schema_getsharedplugindatakeys_61340_62061):null);
var decode_fn_getsharedplugindatakeys_61339_62063 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindatakeys_61343_62064 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_getsharedplugindatakeys_61337 = (function (namespace){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginDataKeys","getSharedPluginDataKeys",1605636461),namespace);
} else {
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace))));

}
});
var internal_fn_getsharedplugindatakeys_61337__$1 = internal_fn_getsharedplugindatakeys_61337.bind(obj_60925_this_60928);
return internal_fn_getsharedplugindatakeys_61337__$1;
});
var schema_getchildren_61347_62065 = null;
var coercer_fn_getchildren_61345_62066 = (((((!((schema_getchildren_61347_62065 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getchildren_61347_62065))))))?app.common.schema.coercer(schema_getchildren_61347_62065):null);
var decode_fn_getchildren_61346_62067 = app.common.json.__GT_clj;
var prop_get_fn_getchildren_61350_62068 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_getchildren_61344 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if((((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((((!(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((((!(app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((!(app.common.files.helpers.bool_shape_QMARK_(shape)))))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getChildren","getChildren",-446203521),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
} else {
var is_reversed_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var reverse_fn = ((((app.plugins.flags.natural_child_ordering_QMARK_(plugin_id)) && (is_reversed_QMARK_)))?cljs.core.reverse:cljs.core.identity);
return app.plugins.format.format_array((function (p1__60898_SHARP_){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,page_id,p1__60898_SHARP_);
}),(function (){var G__61596 = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_shape(file_id,page_id,id));
return (reverse_fn.cljs$core$IFn$_invoke$arity$1 ? reverse_fn.cljs$core$IFn$_invoke$arity$1(G__61596) : reverse_fn.call(null,G__61596));
})());

}
});
var internal_fn_getchildren_61344__$1 = internal_fn_getchildren_61344.bind(obj_60925_this_60928);
return internal_fn_getchildren_61344__$1;
});
var schema_appendchild_61354_62069 = null;
var coercer_fn_appendchild_61352_62070 = (((((!((schema_appendchild_61354_62069 == null)))) && ((!(cljs.core.fn_QMARK_(schema_appendchild_61354_62069))))))?app.common.schema.coercer(schema_appendchild_61354_62069):null);
var decode_fn_appendchild_61353_62071 = app.common.json.__GT_clj;
var prop_get_fn_appendchild_61357_62072 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_appendchild_61351 = (function (child){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if((((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((((!(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((((!(app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((!(app.common.files.helpers.bool_shape_QMARK_(shape)))))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"appendChild","appendChild",1287125270),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if((!(app.plugins.shape.shape_proxy_QMARK_(child)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"appendChild-child","appendChild-child",-568841985),child);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"appendChild","appendChild",1287125270),"Plugin doesn't have 'content:write' permission");
} else {
var child_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"$id");
var is_reversed_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var index = (((((!(app.plugins.flags.natural_child_ordering_QMARK_(plugin_id)))) || (is_reversed_QMARK_)))?(0):cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.relocate_shapes(cljs.core.PersistentHashSet.createAsIfByAssoc([child_id]),id,index));

}
}
}
});
var internal_fn_appendchild_61351__$1 = internal_fn_appendchild_61351.bind(obj_60925_this_60928);
return internal_fn_appendchild_61351__$1;
});
var schema_insertchild_61361_62073 = null;
var coercer_fn_insertchild_61359_62074 = (((((!((schema_insertchild_61361_62073 == null)))) && ((!(cljs.core.fn_QMARK_(schema_insertchild_61361_62073))))))?app.common.schema.coercer(schema_insertchild_61361_62073):null);
var decode_fn_insertchild_61360_62075 = app.common.json.__GT_clj;
var prop_get_fn_insertchild_61364_62076 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_insertchild_61358 = (function (index,child){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if((((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((((!(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((((!(app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((!(app.common.files.helpers.bool_shape_QMARK_(shape)))))))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"insertChild","insertChild",649742086),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if((!(app.plugins.shape.shape_proxy_QMARK_(child)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"insertChild-child","insertChild-child",1653590456),child);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"insertChild","insertChild",649742086),"Plugin doesn't have 'content:write' permission");
} else {
var child_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"$id");
var is_reversed_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var index__$1 = (((((!(app.plugins.flags.natural_child_ordering_QMARK_(plugin_id)))) || (is_reversed_QMARK_)))?(cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)) - index):index);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.relocate_shapes(cljs.core.PersistentHashSet.createAsIfByAssoc([child_id]),id,index__$1));

}
}
}
});
var internal_fn_insertchild_61358__$1 = internal_fn_insertchild_61358.bind(obj_60925_this_60928);
return internal_fn_insertchild_61358__$1;
});
var schema_addflexlayout_61368_62077 = null;
var coercer_fn_addflexlayout_61366_62078 = (((((!((schema_addflexlayout_61368_62077 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addflexlayout_61368_62077))))))?app.common.schema.coercer(schema_addflexlayout_61368_62077):null);
var decode_fn_addflexlayout_61367_62079 = app.common.json.__GT_clj;
var prop_get_fn_addflexlayout_61371_62080 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_addflexlayout_61365 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addFlexLayout","addFlexLayout",222594497),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addFlexLayout","addFlexLayout",222594497),"Plugin doesn't have 'content:write' permission");
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.create_layout_from_id.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from-frame?","from-frame?",-131850262),true,new cljs.core.Keyword(null,"calculate-params?","calculate-params?",-38704171),false], 0)));

return app.plugins.flex.flex_layout_proxy(plugin_id,file_id,page_id,id);

}
}
});
var internal_fn_addflexlayout_61365__$1 = internal_fn_addflexlayout_61365.bind(obj_60925_this_60928);
return internal_fn_addflexlayout_61365__$1;
});
var schema_addgridlayout_61375_62081 = null;
var coercer_fn_addgridlayout_61373_62082 = (((((!((schema_addgridlayout_61375_62081 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addgridlayout_61375_62081))))))?app.common.schema.coercer(schema_addgridlayout_61375_62081):null);
var decode_fn_addgridlayout_61374_62083 = app.common.json.__GT_clj;
var prop_get_fn_addgridlayout_61378_62084 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_addgridlayout_61372 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addGridLayout","addGridLayout",-2084589424),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addGridLayout","addGridLayout",-2084589424),"Plugin doesn't have 'content:write' permission");
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.create_layout_from_id.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"grid","grid",402978600),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from-frame?","from-frame?",-131850262),true,new cljs.core.Keyword(null,"calculate-params?","calculate-params?",-38704171),false], 0)));

return app.plugins.grid.grid_layout_proxy(plugin_id,file_id,page_id,id);

}
}
});
var internal_fn_addgridlayout_61372__$1 = internal_fn_addgridlayout_61372.bind(obj_60925_this_60928);
return internal_fn_addgridlayout_61372__$1;
});
var schema_makemask_61382_62085 = null;
var coercer_fn_makemask_61380_62086 = (((((!((schema_makemask_61382_62085 == null)))) && ((!(cljs.core.fn_QMARK_(schema_makemask_61382_62085))))))?app.common.schema.coercer(schema_makemask_61382_62085):null);
var decode_fn_makemask_61381_62087 = app.common.json.__GT_clj;
var prop_get_fn_makemask_61385_62088 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_makemask_61379 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if((!(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"makeMask","makeMask",1937012005),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"makeMask","makeMask",1937012005),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.groups.mask_group.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([id])));

}
}
});
var internal_fn_makemask_61379__$1 = internal_fn_makemask_61379.bind(obj_60925_this_60928);
return internal_fn_makemask_61379__$1;
});
var schema_removemask_61389_62089 = null;
var coercer_fn_removemask_61387_62090 = (((((!((schema_removemask_61389_62089 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removemask_61389_62089))))))?app.common.schema.coercer(schema_removemask_61389_62089):null);
var decode_fn_removemask_61388_62091 = app.common.json.__GT_clj;
var prop_get_fn_removemask_61392_62092 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_removemask_61386 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if((!(app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeMask","removeMask",1636150276),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeMask","removeMask",1636150276),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.groups.unmask_group.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([id])));

}
}
});
var internal_fn_removemask_61386__$1 = internal_fn_removemask_61386.bind(obj_60925_this_60928);
return internal_fn_removemask_61386__$1;
});
var schema_tod_61396_62093 = null;
var coercer_fn_tod_61394_62094 = (((((!((schema_tod_61396_62093 == null)))) && ((!(cljs.core.fn_QMARK_(schema_tod_61396_62093))))))?app.common.schema.coercer(schema_tod_61396_62093):null);
var decode_fn_tod_61395_62095 = app.common.json.__GT_clj;
var prop_get_fn_tod_61399_62096 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_tod_61393 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if((((!(app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) && ((!(app.common.files.helpers.bool_shape_QMARK_(shape)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"toD","toD",-167929600),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape).toString();

}
});
var internal_fn_tod_61393__$1 = internal_fn_tod_61393.bind(obj_60925_this_60928);
return internal_fn_tod_61393__$1;
});
var schema_getrange_61403_62097 = null;
var coercer_fn_getrange_61401_62098 = (((((!((schema_getrange_61403_62097 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getrange_61403_62097))))))?app.common.schema.coercer(schema_getrange_61403_62097):null);
var decode_fn_getrange_61402_62099 = app.common.json.__GT_clj;
var prop_get_fn_getrange_61406_62100 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_getrange_61400 = (function (start,end){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if((!(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getRange-shape","getRange-shape",1197987177),"shape is not text");
} else {
if(((cljs.core.not(app.common.schema.valid_safe_int_QMARK_(start))) || ((((start < (0))) || ((start > end)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getRange-start","getRange-start",243941450),start);
} else {
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(end))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getRange-end","getRange-end",-1693867629),end);
} else {
return app.plugins.text.text_range_proxy(plugin_id,file_id,page_id,id,start,end);

}
}
}
});
var internal_fn_getrange_61400__$1 = internal_fn_getrange_61400.bind(obj_60925_this_60928);
return internal_fn_getrange_61400__$1;
});
var schema_applytypography_61410_62101 = null;
var coercer_fn_applytypography_61408_62102 = (((((!((schema_applytypography_61410_62101 == null)))) && ((!(cljs.core.fn_QMARK_(schema_applytypography_61410_62101))))))?app.common.schema.coercer(schema_applytypography_61410_62101):null);
var decode_fn_applytypography_61409_62103 = app.common.json.__GT_clj;
var prop_get_fn_applytypography_61413_62104 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_applytypography_61407 = (function (typography){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if(cljs.core.not((app.plugins.shape.lib_typography_proxy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? app.plugins.shape.lib_typography_proxy_QMARK_.cljs$core$IFn$_invoke$arity$1(typography) : app.plugins.shape.lib_typography_proxy_QMARK_.call(null,typography)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyTypography-typography","applyTypography-typography",2055995230),typography);
} else {
if((!(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyTypography-shape","applyTypography-shape",1275019073),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyTypography","applyTypography",-1953840408),"Plugin doesn't have 'content:write' permission");
} else {
var typography__$1 = app.plugins.utils.proxy__GT_library_typography(typography);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.apply_typography.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),typography__$1,file_id));

}
}
}
});
var internal_fn_applytypography_61407__$1 = internal_fn_applytypography_61407.bind(obj_60925_this_60928);
return internal_fn_applytypography_61407__$1;
});
var schema_setparentindex_61417_62105 = null;
var coercer_fn_setparentindex_61415_62106 = (((((!((schema_setparentindex_61417_62105 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setparentindex_61417_62105))))))?app.common.schema.coercer(schema_setparentindex_61417_62105):null);
var decode_fn_setparentindex_61416_62107 = app.common.json.__GT_clj;
var prop_get_fn_setparentindex_61420_62108 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_setparentindex_61414 = (function (index){
if(cljs.core.not(app.common.schema.valid_safe_int_QMARK_(index))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setParentIndex","setParentIndex",1845372782),index);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setParentIndex","setParentIndex",1845372782),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_shape_index(file_id,page_id,id,index));

}
}
});
var internal_fn_setparentindex_61414__$1 = internal_fn_setparentindex_61414.bind(obj_60925_this_60928);
return internal_fn_setparentindex_61414__$1;
});
var schema_bringforward_61424_62109 = null;
var coercer_fn_bringforward_61422_62110 = (((((!((schema_bringforward_61424_62109 == null)))) && ((!(cljs.core.fn_QMARK_(schema_bringforward_61424_62109))))))?app.common.schema.coercer(schema_bringforward_61424_62109):null);
var decode_fn_bringforward_61423_62111 = app.common.json.__GT_clj;
var prop_get_fn_bringforward_61427_62112 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_bringforward_61421 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.vertical_order_selected(new cljs.core.Keyword(null,"up","up",-269712113)));
});
var internal_fn_bringforward_61421__$1 = internal_fn_bringforward_61421.bind(obj_60925_this_60928);
return internal_fn_bringforward_61421__$1;
});
var schema_sendbackward_61431_62113 = null;
var coercer_fn_sendbackward_61429_62114 = (((((!((schema_sendbackward_61431_62113 == null)))) && ((!(cljs.core.fn_QMARK_(schema_sendbackward_61431_62113))))))?app.common.schema.coercer(schema_sendbackward_61431_62113):null);
var decode_fn_sendbackward_61430_62115 = app.common.json.__GT_clj;
var prop_get_fn_sendbackward_61434_62116 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_sendbackward_61428 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.vertical_order_selected(new cljs.core.Keyword(null,"down","down",1565245570)));
});
var internal_fn_sendbackward_61428__$1 = internal_fn_sendbackward_61428.bind(obj_60925_this_60928);
return internal_fn_sendbackward_61428__$1;
});
var schema_bringtofront_61438_62117 = null;
var coercer_fn_bringtofront_61436_62118 = (((((!((schema_bringtofront_61438_62117 == null)))) && ((!(cljs.core.fn_QMARK_(schema_bringtofront_61438_62117))))))?app.common.schema.coercer(schema_bringtofront_61438_62117):null);
var decode_fn_bringtofront_61437_62119 = app.common.json.__GT_clj;
var prop_get_fn_bringtofront_61441_62120 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_bringtofront_61435 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.vertical_order_selected(new cljs.core.Keyword(null,"top","top",-1856271961)));
});
var internal_fn_bringtofront_61435__$1 = internal_fn_bringtofront_61435.bind(obj_60925_this_60928);
return internal_fn_bringtofront_61435__$1;
});
var schema_sendtoback_61445_62121 = null;
var coercer_fn_sendtoback_61443_62122 = (((((!((schema_sendtoback_61445_62121 == null)))) && ((!(cljs.core.fn_QMARK_(schema_sendtoback_61445_62121))))))?app.common.schema.coercer(schema_sendtoback_61445_62121):null);
var decode_fn_sendtoback_61444_62123 = app.common.json.__GT_clj;
var prop_get_fn_sendtoback_61448_62124 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_sendtoback_61442 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.vertical_order_selected(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)));
});
var internal_fn_sendtoback_61442__$1 = internal_fn_sendtoback_61442.bind(obj_60925_this_60928);
return internal_fn_sendtoback_61442__$1;
});
var schema_iscomponentinstance_61452_62125 = null;
var coercer_fn_iscomponentinstance_61450_62126 = (((((!((schema_iscomponentinstance_61452_62125 == null)))) && ((!(cljs.core.fn_QMARK_(schema_iscomponentinstance_61452_62125))))))?app.common.schema.coercer(schema_iscomponentinstance_61452_62125):null);
var decode_fn_iscomponentinstance_61451_62127 = app.common.json.__GT_clj;
var prop_get_fn_iscomponentinstance_61455_62128 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_iscomponentinstance_61449 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id);
return app.common.types.container.in_any_component_QMARK_(objects,shape);
});
var internal_fn_iscomponentinstance_61449__$1 = internal_fn_iscomponentinstance_61449.bind(obj_60925_this_60928);
return internal_fn_iscomponentinstance_61449__$1;
});
var schema_iscomponentmaininstance_61459_62129 = null;
var coercer_fn_iscomponentmaininstance_61457_62130 = (((((!((schema_iscomponentmaininstance_61459_62129 == null)))) && ((!(cljs.core.fn_QMARK_(schema_iscomponentmaininstance_61459_62129))))))?app.common.schema.coercer(schema_iscomponentmaininstance_61459_62129):null);
var decode_fn_iscomponentmaininstance_61458_62131 = app.common.json.__GT_clj;
var prop_get_fn_iscomponentmaininstance_61462_62132 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_iscomponentmaininstance_61456 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id);
return app.common.types.container.inside_component_main_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,shape);
});
var internal_fn_iscomponentmaininstance_61456__$1 = internal_fn_iscomponentmaininstance_61456.bind(obj_60925_this_60928);
return internal_fn_iscomponentmaininstance_61456__$1;
});
var schema_iscomponentcopyinstance_61466_62133 = null;
var coercer_fn_iscomponentcopyinstance_61464_62134 = (((((!((schema_iscomponentcopyinstance_61466_62133 == null)))) && ((!(cljs.core.fn_QMARK_(schema_iscomponentcopyinstance_61466_62133))))))?app.common.schema.coercer(schema_iscomponentcopyinstance_61466_62133):null);
var decode_fn_iscomponentcopyinstance_61465_62135 = app.common.json.__GT_clj;
var prop_get_fn_iscomponentcopyinstance_61469_62136 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_iscomponentcopyinstance_61463 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
return app.common.types.component.in_component_copy_QMARK_(shape);
});
var internal_fn_iscomponentcopyinstance_61463__$1 = internal_fn_iscomponentcopyinstance_61463.bind(obj_60925_this_60928);
return internal_fn_iscomponentcopyinstance_61463__$1;
});
var schema_iscomponentroot_61473_62137 = null;
var coercer_fn_iscomponentroot_61471_62138 = (((((!((schema_iscomponentroot_61473_62137 == null)))) && ((!(cljs.core.fn_QMARK_(schema_iscomponentroot_61473_62137))))))?app.common.schema.coercer(schema_iscomponentroot_61473_62137):null);
var decode_fn_iscomponentroot_61472_62139 = app.common.json.__GT_clj;
var prop_get_fn_iscomponentroot_61476_62140 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_iscomponentroot_61470 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
return app.common.types.component.instance_root_QMARK_(shape);
});
var internal_fn_iscomponentroot_61470__$1 = internal_fn_iscomponentroot_61470.bind(obj_60925_this_60928);
return internal_fn_iscomponentroot_61470__$1;
});
var schema_iscomponenthead_61480_62141 = null;
var coercer_fn_iscomponenthead_61478_62142 = (((((!((schema_iscomponenthead_61480_62141 == null)))) && ((!(cljs.core.fn_QMARK_(schema_iscomponenthead_61480_62141))))))?app.common.schema.coercer(schema_iscomponenthead_61480_62141):null);
var decode_fn_iscomponenthead_61479_62143 = app.common.json.__GT_clj;
var prop_get_fn_iscomponenthead_61483_62144 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_iscomponenthead_61477 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
return app.common.types.component.instance_head_QMARK_(shape);
});
var internal_fn_iscomponenthead_61477__$1 = internal_fn_iscomponenthead_61477.bind(obj_60925_this_60928);
return internal_fn_iscomponenthead_61477__$1;
});
var schema_componentrefshape_61487_62145 = null;
var coercer_fn_componentrefshape_61485_62146 = (((((!((schema_componentrefshape_61487_62145 == null)))) && ((!(cljs.core.fn_QMARK_(schema_componentrefshape_61487_62145))))))?app.common.schema.coercer(schema_componentrefshape_61487_62145):null);
var decode_fn_componentrefshape_61486_62147 = app.common.json.__GT_clj;
var prop_get_fn_componentrefshape_61490_62148 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_componentrefshape_61484 = (function (){
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id);
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if(cljs.core.truth_(app.common.types.container.in_any_component_QMARK_(objects,shape))){
var vec__61597 = app.plugins.utils.locate_component(objects,shape);
var root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61597,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61597,(1),null);
var component_page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
var component_file = app.plugins.utils.locate_file(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(root));
var ref_shape = app.common.types.file.get_ref_shape(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component_file),component,shape);
if(((cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))) && ((((!((ref_shape == null)))) && ((!((component_file == null)))))))){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_file),component_page_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ref_shape));
} else {
return null;
}
} else {
return null;
}
});
var internal_fn_componentrefshape_61484__$1 = internal_fn_componentrefshape_61484.bind(obj_60925_this_60928);
return internal_fn_componentrefshape_61484__$1;
});
var schema_componentroot_61494_62149 = null;
var coercer_fn_componentroot_61492_62150 = (((((!((schema_componentroot_61494_62149 == null)))) && ((!(cljs.core.fn_QMARK_(schema_componentroot_61494_62149))))))?app.common.schema.coercer(schema_componentroot_61494_62149):null);
var decode_fn_componentroot_61493_62151 = app.common.json.__GT_clj;
var prop_get_fn_componentroot_61497_62152 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_componentroot_61491 = (function (){
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id);
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if(cljs.core.truth_(app.common.types.container.in_any_component_QMARK_(objects,shape))){
var vec__61600 = app.plugins.utils.locate_component(objects,shape);
var root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61600,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61600,(1),null);
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root));
} else {
return null;
}
});
var internal_fn_componentroot_61491__$1 = internal_fn_componentroot_61491.bind(obj_60925_this_60928);
return internal_fn_componentroot_61491__$1;
});
var schema_componenthead_61501_62153 = null;
var coercer_fn_componenthead_61499_62154 = (((((!((schema_componenthead_61501_62153 == null)))) && ((!(cljs.core.fn_QMARK_(schema_componenthead_61501_62153))))))?app.common.schema.coercer(schema_componenthead_61501_62153):null);
var decode_fn_componenthead_61500_62155 = app.common.json.__GT_clj;
var prop_get_fn_componenthead_61504_62156 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_componenthead_61498 = (function (){
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id);
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if(cljs.core.truth_(app.common.types.container.in_any_component_QMARK_(objects,shape))){
var head = app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$2(app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id),shape);
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,page_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(head));
} else {
return null;
}
});
var internal_fn_componenthead_61498__$1 = internal_fn_componenthead_61498.bind(obj_60925_this_60928);
return internal_fn_componenthead_61498__$1;
});
var schema_component_61508_62157 = null;
var coercer_fn_component_61506_62158 = (((((!((schema_component_61508_62157 == null)))) && ((!(cljs.core.fn_QMARK_(schema_component_61508_62157))))))?app.common.schema.coercer(schema_component_61508_62157):null);
var decode_fn_component_61507_62159 = app.common.json.__GT_clj;
var prop_get_fn_component_61511_62160 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_component_61505 = (function (){
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id);
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if(cljs.core.truth_(app.common.types.container.in_any_component_QMARK_(objects,shape))){
var vec__61603 = app.plugins.utils.locate_component(objects,shape);
var root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61603,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61603,(1),null);
var G__61606 = plugin_id;
var G__61607 = new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(root);
var G__61608 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component);
return (app.plugins.shape.lib_component_proxy.cljs$core$IFn$_invoke$arity$3 ? app.plugins.shape.lib_component_proxy.cljs$core$IFn$_invoke$arity$3(G__61606,G__61607,G__61608) : app.plugins.shape.lib_component_proxy.call(null,G__61606,G__61607,G__61608));
} else {
return null;
}
});
var internal_fn_component_61505__$1 = internal_fn_component_61505.bind(obj_60925_this_60928);
return internal_fn_component_61505__$1;
});
var schema_detach_61515_62161 = null;
var coercer_fn_detach_61513_62162 = (((((!((schema_detach_61515_62161 == null)))) && ((!(cljs.core.fn_QMARK_(schema_detach_61515_62161))))))?app.common.schema.coercer(schema_detach_61515_62161):null);
var decode_fn_detach_61514_62163 = app.common.json.__GT_clj;
var prop_get_fn_detach_61518_62164 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_detach_61512 = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.detach_component(id));
});
var internal_fn_detach_61512__$1 = internal_fn_detach_61512.bind(obj_60925_this_60928);
return internal_fn_detach_61512__$1;
});
var schema_export_61522_62165 = null;
var coercer_fn_export_61520_62166 = (((((!((schema_export_61522_62165 == null)))) && ((!(cljs.core.fn_QMARK_(schema_export_61522_62165))))))?app.common.schema.coercer(schema_export_61522_62165):null);
var decode_fn_export_61521_62167 = app.common.json.__GT_clj;
var prop_get_fn_export_61525_62168 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_export_61519 = (function (value){
var value__$1 = app.plugins.parser.parse_export(value);
if(cljs.core.not(app.common.schema.validate(app.common.types.shape.export$.schema_COLON_export,value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"export","export",214356590),value__$1);
} else {
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
var payload = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"export-shapes","export-shapes",341502938),new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),new cljs.core.Keyword(null,"wait","wait",-260664777),true,new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"object-id","object-id",-754527291),id,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(value__$1,new cljs.core.Keyword(null,"png","png",551930691)),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$2(value__$1,""),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$2(value__$1,(1))], null)], null)], null);
return (new Promise((function (resolve,reject){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.map((function (p1__60904_SHARP_){
return (new Uint8Array(p1__60904_SHARP_));
}),beicon.v2.core.mapcat((function (p1__60903_SHARP_){
return p1__60903_SHARP_.arrayBuffer();
}),beicon.v2.core.mapcat((function (p__61609){
var map__61610 = p__61609;
var map__61610__$1 = cljs.core.__destructure_map(map__61610);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61610__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"blob","blob",1636965233),new cljs.core.Keyword(null,"omit-default-headers","omit-default-headers",-2108409502),true], null)));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export","export",214356590),payload)))));
})));

}
});
var internal_fn_export_61519__$1 = internal_fn_export_61519.bind(obj_60925_this_60928);
return internal_fn_export_61519__$1;
});
var schema_addinteraction_61529_62169 = null;
var coercer_fn_addinteraction_61527_62170 = (((((!((schema_addinteraction_61529_62169 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addinteraction_61529_62169))))))?app.common.schema.coercer(schema_addinteraction_61529_62169):null);
var decode_fn_addinteraction_61528_62171 = app.common.json.__GT_clj;
var prop_get_fn_addinteraction_61532_62172 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_addinteraction_61526 = (function (trigger,action,delay){
var interaction = app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.interactions.default_interaction,app.plugins.parser.parse_interaction(trigger,action,delay));
if(cljs.core.not(app.common.schema.validate(app.common.types.shape.interactions.schema_COLON_interaction,interaction))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addInteraction","addInteraction",1571848503),interaction);
} else {
var index = cljs.core.count(new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$2(app.plugins.utils.locate_shape(file_id,page_id,id),cljs.core.PersistentVector.EMPTY));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.add_interaction(page_id,id,interaction));

return app.plugins.shape.interaction_proxy(plugin_id,file_id,page_id,id,index);

}
});
var internal_fn_addinteraction_61526__$1 = internal_fn_addinteraction_61526.bind(obj_60925_this_60928);
return internal_fn_addinteraction_61526__$1;
});
var schema_removeinteraction_61536_62173 = null;
var coercer_fn_removeinteraction_61534_62174 = (((((!((schema_removeinteraction_61536_62173 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removeinteraction_61536_62173))))))?app.common.schema.coercer(schema_removeinteraction_61536_62173):null);
var decode_fn_removeinteraction_61535_62175 = app.common.json.__GT_clj;
var prop_get_fn_removeinteraction_61539_62176 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_removeinteraction_61533 = (function (interaction){
if((!(app.plugins.shape.interaction_proxy_QMARK_(interaction)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeInteraction","removeInteraction",1218317317),interaction);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.remove_interaction.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),app.util.object.get.cljs$core$IFn$_invoke$arity$2(interaction,"$index")));

}
});
var internal_fn_removeinteraction_61533__$1 = internal_fn_removeinteraction_61533.bind(obj_60925_this_60928);
return internal_fn_removeinteraction_61533__$1;
});
var schema_addrulerguide_61543_62177 = null;
var coercer_fn_addrulerguide_61541_62178 = (((((!((schema_addrulerguide_61543_62177 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addrulerguide_61543_62177))))))?app.common.schema.coercer(schema_addrulerguide_61543_62177):null);
var decode_fn_addrulerguide_61542_62179 = app.common.json.__GT_clj;
var prop_get_fn_addrulerguide_61546_62180 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_addrulerguide_61540 = (function (orientation,value){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRulerGuide","addRulerGuide",1837252654),"Value not a safe number");
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["vertical",null,"horizontal",null], null), null),orientation)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRulerGuide","addRulerGuide",1837252654),"Orientation should be either 'vertical' or 'horizontal'");
} else {
if((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRulerGuide","addRulerGuide",1837252654),"The shape is not a board");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addRulerGuide","addRulerGuide",1837252654),"Plugin doesn't have 'content:write' permission");
} else {
var id__$1 = app.common.uuid.next();
var axis = app.plugins.parser.orientation__GT_axis(orientation);
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id__$1);
var board_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,axis);
var position = (board_pos + value);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.guides.update_guides(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822),axis,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),id__$1], null)));

return app.plugins.ruler_guides.ruler_guide_proxy(plugin_id,file_id,page_id,id__$1);

}
}
}
}
});
var internal_fn_addrulerguide_61540__$1 = internal_fn_addrulerguide_61540.bind(obj_60925_this_60928);
return internal_fn_addrulerguide_61540__$1;
});
var schema_removerulerguide_61550_62181 = null;
var coercer_fn_removerulerguide_61548_62182 = (((((!((schema_removerulerguide_61550_62181 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removerulerguide_61550_62181))))))?app.common.schema.coercer(schema_removerulerguide_61550_62181):null);
var decode_fn_removerulerguide_61549_62183 = app.common.json.__GT_clj;
var prop_get_fn_removerulerguide_61553_62184 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_removerulerguide_61547 = (function (_,value){
if((!(app.plugins.ruler_guides.ruler_guide_proxy_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeRulerGuide","removeRulerGuide",-1323808559),"Guide not provided");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeRulerGuide","removeRulerGuide",-1323808559),"Plugin doesn't have 'content:write' permission");
} else {
var guide = app.plugins.utils.proxy__GT_ruler_guide(value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.guides.remove_guide(guide));

}
}
});
var internal_fn_removerulerguide_61547__$1 = internal_fn_removerulerguide_61547.bind(obj_60925_this_60928);
return internal_fn_removerulerguide_61547__$1;
});
var prop_get_fn_tokens_61560_62185 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_tokens_61554 = (function (_){
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.plugins.utils.locate_shape(file_id,page_id,id),new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__61611){
var vec__61612 = p__61611;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61612,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61612,(1),null);
return app.util.object.set_BANG_(acc,app.common.json.write_camel_key(prop),name);
}),({}),tokens);
});
return internal_fn_tokens_61554.call(obj_60925_this_60928,obj_60925_this_60928);
});
var schema_applytoken_61564_62186 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.plugins.shape.token_proxy_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword("app.common.schema","keyword","app.common.schema/keyword",123822366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.token.token_attr_QMARK_], null)], null)], null)], null)], null);
var coercer_fn_applytoken_61562_62187 = (((((!((schema_applytoken_61564_62186 == null)))) && ((!(cljs.core.fn_QMARK_(schema_applytoken_61564_62186))))))?app.common.schema.coercer(schema_applytoken_61564_62186):null);
var decode_fn_applytoken_61563_62188 = app.common.json.__GT_clj;
var prop_get_fn_applytoken_61567_62189 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_applytoken_61561 = (function (token,attrs){
var token__$1 = app.plugins.utils.locate_token(file_id,app.util.object.get.cljs$core$IFn$_invoke$arity$2(token,"$set-id"),app.util.object.get.cljs$core$IFn$_invoke$arity$2(token,"$id"));
var kw_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,attrs));
if(cljs.core.truth_(cljs.core.some((function (p1__60905_SHARP_){
return (!(app.common.types.token.token_attr_QMARK_(p1__60905_SHARP_)));
}),kw_attrs))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToken","applyToken",-109067546),attrs);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token","token",-1211463215),token__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),kw_attrs,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.Keyword(null,"expand-with-children","expand-with-children",-1923116463),false], null)));
}
});
var internal_fn_applytoken_61561__$1 = internal_fn_applytoken_61561.bind(obj_60925_this_60928);
var internal_fn_applytoken_61561__$2 = (function (){
var val_applytoken_61566 = app.util.object.into_array(arguments);
var val_applytoken_61566__$1 = decode_fn_applytoken_61563_62188(val_applytoken_61566,null);
var schema_applytoken_61564__$1 = ((cljs.core.fn_QMARK_(schema_applytoken_61564_62186))?schema_applytoken_61564_62186(val_applytoken_61566__$1):schema_applytoken_61564_62186);
var coercer_fn_applytoken_61562__$1 = (((coercer_fn_applytoken_61562_62187 == null))?app.common.schema.coercer(schema_applytoken_61564__$1):coercer_fn_applytoken_61562_62187);
var val_applytoken_61566__$2 = coercer_fn_applytoken_61562__$1(val_applytoken_61566__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_applytoken_61561__$1,val_applytoken_61566__$2);
});
return internal_fn_applytoken_61561__$2;
});
var schema_isvarianthead_61571_62190 = null;
var coercer_fn_isvarianthead_61569_62191 = (((((!((schema_isvarianthead_61571_62190 == null)))) && ((!(cljs.core.fn_QMARK_(schema_isvarianthead_61571_62190))))))?app.common.schema.coercer(schema_isvarianthead_61571_62190):null);
var decode_fn_isvarianthead_61570_62192 = app.common.json.__GT_clj;
var prop_get_fn_isvarianthead_61574_62193 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_isvarianthead_61568 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
var component = app.plugins.utils.locate_library_component(file_id,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape));
return ((app.common.types.component.instance_head_QMARK_(shape)) && (app.common.types.component.is_variant_QMARK_(component)));
});
var internal_fn_isvarianthead_61568__$1 = internal_fn_isvarianthead_61568.bind(obj_60925_this_60928);
return internal_fn_isvarianthead_61568__$1;
});
var schema_isvariantcontainer_61578_62194 = null;
var coercer_fn_isvariantcontainer_61576_62195 = (((((!((schema_isvariantcontainer_61578_62194 == null)))) && ((!(cljs.core.fn_QMARK_(schema_isvariantcontainer_61578_62194))))))?app.common.schema.coercer(schema_isvariantcontainer_61578_62194):null);
var decode_fn_isvariantcontainer_61577_62196 = app.common.json.__GT_clj;
var prop_get_fn_isvariantcontainer_61581_62197 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_isvariantcontainer_61575 = (function (){
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
return app.common.types.component.is_variant_container_QMARK_(shape);
});
var internal_fn_isvariantcontainer_61575__$1 = internal_fn_isvariantcontainer_61575.bind(obj_60925_this_60928);
return internal_fn_isvariantcontainer_61575__$1;
});
var schema_switchvariant_61585_62198 = null;
var coercer_fn_switchvariant_61583_62199 = (((((!((schema_switchvariant_61585_62198 == null)))) && ((!(cljs.core.fn_QMARK_(schema_switchvariant_61585_62198))))))?app.common.schema.coercer(schema_switchvariant_61585_62198):null);
var decode_fn_switchvariant_61584_62200 = app.common.json.__GT_clj;
var prop_get_fn_switchvariant_61588_62201 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_switchvariant_61582 = (function (pos,value){
if((!(cljs.core.nat_int_QMARK_(pos)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"pos","pos",-864607220),pos);
} else {
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"value","value",305978217),value);
} else {
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
var component = app.plugins.utils.locate_library_component(file_id,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_((function (){var and__5023__auto__ = component;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.component.is_variant_QMARK_(component);
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.variants_switch(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"val","val",128701612),value], null)));
} else {
return null;
}

}
}
});
var internal_fn_switchvariant_61582__$1 = internal_fn_switchvariant_61582.bind(obj_60925_this_60928);
return internal_fn_switchvariant_61582__$1;
});
var schema_combineasvariants_61592_62202 = null;
var coercer_fn_combineasvariants_61590_62203 = (((((!((schema_combineasvariants_61592_62202 == null)))) && ((!(cljs.core.fn_QMARK_(schema_combineasvariants_61592_62202))))))?app.common.schema.coercer(schema_combineasvariants_61592_62202):null);
var decode_fn_combineasvariants_61591_62204 = app.common.json.__GT_clj;
var prop_get_fn_combineasvariants_61595_62205 = (function (){
var obj_60925_this_60928 = this;
var internal_fn_combineasvariants_61589 = (function (ids){
if(((cljs.core.not(cljs.core.seq(ids))) || ((!(cljs.core.every_QMARK_(app.common.uuid.parse_STAR_,ids)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"ids","ids",-998535796),ids);
} else {
var shape = app.plugins.utils.locate_shape(file_id,page_id,id);
var component = app.plugins.utils.locate_library_component(file_id,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape));
var ids__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.uuid.uuid,ids));
if(cljs.core.truth_((function (){var and__5023__auto__ = component;
if(cljs.core.truth_(and__5023__auto__)){
return (!(app.common.types.component.is_variant_QMARK_(component)));
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.combine_as_variants(ids__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",103466139),"plugin:combine-as-variants"], null)));
} else {
return null;
}
}
});
var internal_fn_combineasvariants_61589__$1 = internal_fn_combineasvariants_61589.bind(obj_60925_this_60928);
return internal_fn_combineasvariants_61589__$1;
});
Object.defineProperty(obj_60925_target_60929_61867,Symbol.toStringTag,(function (){var obj61616 = ({"enumerable":false,"get":prop_get_fn__60937_61868});
return obj61616;
})());

Object.defineProperty(obj_60925_target_60929_61867,Symbol["for"]("penpot.reify:type"),(function (){var obj61618 = ({"enumerable":false,"get":prop_get_fn__60944_61869});
return obj61618;
})());

Object.defineProperty(obj_60925_target_60929_61867,"$plugin",(function (){var obj61620 = ({"enumerable":false,"get":prop_get_fn_plugin_60951_61870});
return obj61620;
})());

Object.defineProperty(obj_60925_target_60929_61867,"$id",(function (){var obj61622 = ({"enumerable":false,"get":prop_get_fn_id_60958_61871});
return obj61622;
})());

Object.defineProperty(obj_60925_target_60929_61867,"$file",(function (){var obj61624 = ({"enumerable":false,"get":prop_get_fn_file_60965_61872});
return obj61624;
})());

Object.defineProperty(obj_60925_target_60929_61867,"$page",(function (){var obj61626 = ({"enumerable":false,"get":prop_get_fn_page_60972_61873});
return obj61626;
})());

Object.defineProperty(obj_60925_target_60929_61867,"id",(function (){var obj61628 = ({"enumerable":true,"get":prop_get_fn_id_60979_61874});
return obj61628;
})());

Object.defineProperty(obj_60925_target_60929_61867,"type",(function (){var obj61630 = ({"enumerable":true,"get":prop_get_fn_type_60986_61875});
return obj61630;
})());

Object.defineProperty(obj_60925_target_60929_61867,"name",(function (){var obj61632 = ({"enumerable":true,"get":prop_get_fn_name_60993_61876,"set":prop_set_fn_name_60994_61880});
return obj61632;
})());

Object.defineProperty(obj_60925_target_60929_61867,"blocked",(function (){var obj61634 = ({"enumerable":true,"get":prop_get_fn_blocked_61001_61881,"set":prop_set_fn_blocked_61002_61885});
return obj61634;
})());

Object.defineProperty(obj_60925_target_60929_61867,"hidden",(function (){var obj61636 = ({"enumerable":true,"get":prop_get_fn_hidden_61009_61886,"set":prop_set_fn_hidden_61010_61890});
return obj61636;
})());

Object.defineProperty(obj_60925_target_60929_61867,"visible",(function (){var obj61638 = ({"enumerable":true,"get":prop_get_fn_visible_61017_61891,"set":prop_set_fn_visible_61018_61895});
return obj61638;
})());

Object.defineProperty(obj_60925_target_60929_61867,"proportionLock",(function (){var obj61640 = ({"enumerable":true,"get":prop_get_fn_proportionlock_61025_61896,"set":prop_set_fn_proportionlock_61026_61900});
return obj61640;
})());

Object.defineProperty(obj_60925_target_60929_61867,"constraintsHorizontal",(function (){var obj61642 = ({"enumerable":true,"get":prop_get_fn_constraintshorizontal_61033_61901,"set":prop_set_fn_constraintshorizontal_61034_61905});
return obj61642;
})());

Object.defineProperty(obj_60925_target_60929_61867,"constraintsVertical",(function (){var obj61644 = ({"enumerable":true,"get":prop_get_fn_constraintsvertical_61041_61906,"set":prop_set_fn_constraintsvertical_61042_61910});
return obj61644;
})());

Object.defineProperty(obj_60925_target_60929_61867,"borderRadius",(function (){var obj61646 = ({"enumerable":true,"get":prop_get_fn_borderradius_61049_61911,"set":prop_set_fn_borderradius_61050_61915});
return obj61646;
})());

Object.defineProperty(obj_60925_target_60929_61867,"borderRadiusTopLeft",(function (){var obj61648 = ({"enumerable":true,"get":prop_get_fn_borderradiustopleft_61057_61916,"set":prop_set_fn_borderradiustopleft_61058_61920});
return obj61648;
})());

Object.defineProperty(obj_60925_target_60929_61867,"borderRadiusTopRight",(function (){var obj61650 = ({"enumerable":true,"get":prop_get_fn_borderradiustopright_61065_61921,"set":prop_set_fn_borderradiustopright_61066_61925});
return obj61650;
})());

Object.defineProperty(obj_60925_target_60929_61867,"borderRadiusBottomRight",(function (){var obj61652 = ({"enumerable":true,"get":prop_get_fn_borderradiusbottomright_61073_61926,"set":prop_set_fn_borderradiusbottomright_61074_61930});
return obj61652;
})());

Object.defineProperty(obj_60925_target_60929_61867,"borderRadiusBottomLeft",(function (){var obj61654 = ({"enumerable":true,"get":prop_get_fn_borderradiusbottomleft_61081_61931,"set":prop_set_fn_borderradiusbottomleft_61082_61935});
return obj61654;
})());

Object.defineProperty(obj_60925_target_60929_61867,"opacity",(function (){var obj61656 = ({"enumerable":true,"get":prop_get_fn_opacity_61089_61936,"set":prop_set_fn_opacity_61090_61940});
return obj61656;
})());

Object.defineProperty(obj_60925_target_60929_61867,"blendMode",(function (){var obj61658 = ({"enumerable":true,"get":prop_get_fn_blendmode_61097_61941,"set":prop_set_fn_blendmode_61098_61945});
return obj61658;
})());

Object.defineProperty(obj_60925_target_60929_61867,"shadows",(function (){var obj61660 = ({"enumerable":true,"get":prop_get_fn_shadows_61105_61946,"set":prop_set_fn_shadows_61106_61950});
return obj61660;
})());

Object.defineProperty(obj_60925_target_60929_61867,"blur",(function (){var obj61662 = ({"enumerable":true,"get":prop_get_fn_blur_61113_61951,"set":prop_set_fn_blur_61114_61955});
return obj61662;
})());

Object.defineProperty(obj_60925_target_60929_61867,"exports",(function (){var obj61664 = ({"enumerable":true,"get":prop_get_fn_exports_61121_61956,"set":prop_set_fn_exports_61122_61960});
return obj61664;
})());

Object.defineProperty(obj_60925_target_60929_61867,"x",(function (){var obj61666 = ({"enumerable":true,"get":prop_get_fn_x_61129_61961,"set":prop_set_fn_x_61130_61965});
return obj61666;
})());

Object.defineProperty(obj_60925_target_60929_61867,"y",(function (){var obj61668 = ({"enumerable":true,"get":prop_get_fn_y_61137_61966,"set":prop_set_fn_y_61138_61970});
return obj61668;
})());

Object.defineProperty(obj_60925_target_60929_61867,"parent",(function (){var obj61670 = ({"enumerable":false,"get":prop_get_fn_parent_61145_61971});
return obj61670;
})());

Object.defineProperty(obj_60925_target_60929_61867,"parentIndex",(function (){var obj61672 = ({"enumerable":true,"get":prop_get_fn_parentindex_61152_61972});
return obj61672;
})());

Object.defineProperty(obj_60925_target_60929_61867,"parentX",(function (){var obj61674 = ({"enumerable":true,"get":prop_get_fn_parentx_61159_61973,"set":prop_set_fn_parentx_61160_61977});
return obj61674;
})());

Object.defineProperty(obj_60925_target_60929_61867,"parentY",(function (){var obj61676 = ({"enumerable":true,"get":prop_get_fn_parenty_61167_61978,"set":prop_set_fn_parenty_61168_61982});
return obj61676;
})());

Object.defineProperty(obj_60925_target_60929_61867,"boardX",(function (){var obj61678 = ({"enumerable":true,"get":prop_get_fn_boardx_61175_61983,"set":prop_set_fn_boardx_61176_61987});
return obj61678;
})());

Object.defineProperty(obj_60925_target_60929_61867,"boardY",(function (){var obj61680 = ({"enumerable":true,"get":prop_get_fn_boardy_61183_61988,"set":prop_set_fn_boardy_61184_61992});
return obj61680;
})());

Object.defineProperty(obj_60925_target_60929_61867,"width",(function (){var obj61682 = ({"enumerable":true,"get":prop_get_fn_width_61191_61993});
return obj61682;
})());

Object.defineProperty(obj_60925_target_60929_61867,"height",(function (){var obj61684 = ({"enumerable":true,"get":prop_get_fn_height_61198_61994});
return obj61684;
})());

Object.defineProperty(obj_60925_target_60929_61867,"bounds",(function (){var obj61686 = ({"enumerable":true,"get":prop_get_fn_bounds_61205_61995});
return obj61686;
})());

Object.defineProperty(obj_60925_target_60929_61867,"center",(function (){var obj61688 = ({"enumerable":true,"get":prop_get_fn_center_61212_61996});
return obj61688;
})());

Object.defineProperty(obj_60925_target_60929_61867,"rotation",(function (){var obj61690 = ({"enumerable":true,"get":prop_get_fn_rotation_61219_61997,"set":prop_set_fn_rotation_61220_62001});
return obj61690;
})());

Object.defineProperty(obj_60925_target_60929_61867,"flipX",(function (){var obj61692 = ({"enumerable":true,"get":prop_get_fn_flipx_61227_62002,"set":prop_set_fn_flipx_61228_62006});
return obj61692;
})());

Object.defineProperty(obj_60925_target_60929_61867,"flipY",(function (){var obj61694 = ({"enumerable":true,"get":prop_get_fn_flipy_61235_62007,"set":prop_set_fn_flipy_61236_62011});
return obj61694;
})());

Object.defineProperty(obj_60925_target_60929_61867,"fills",(function (){var obj61696 = ({"enumerable":true,"get":prop_get_fn_fills_61243_62012,"set":prop_set_fn_fills_61244_62016});
return obj61696;
})());

Object.defineProperty(obj_60925_target_60929_61867,"strokes",(function (){var obj61698 = ({"enumerable":true,"get":prop_get_fn_strokes_61251_62017,"set":prop_set_fn_strokes_61252_62021});
return obj61698;
})());

Object.defineProperty(obj_60925_target_60929_61867,"layoutChild",(function (){var obj61700 = ({"enumerable":true,"get":prop_get_fn_layoutchild_61259_62022});
return obj61700;
})());

Object.defineProperty(obj_60925_target_60929_61867,"layoutCell",(function (){var obj61702 = ({"enumerable":true,"get":prop_get_fn_layoutcell_61266_62023});
return obj61702;
})());

Object.defineProperty(obj_60925_target_60929_61867,"interactions",(function (){var obj61704 = ({"enumerable":true,"get":prop_get_fn_interactions_61273_62024});
return obj61704;
})());

Object.defineProperty(obj_60925_target_60929_61867,"resize",(function (){var obj61706 = ({"enumerable":false,"get":prop_get_fn_resize_61280_62028});
return obj61706;
})());

Object.defineProperty(obj_60925_target_60929_61867,"rotate",(function (){var obj61708 = ({"enumerable":false,"get":prop_get_fn_rotate_61287_62032});
return obj61708;
})());

Object.defineProperty(obj_60925_target_60929_61867,"clone",(function (){var obj61710 = ({"enumerable":false,"get":prop_get_fn_clone_61294_62036});
return obj61710;
})());

Object.defineProperty(obj_60925_target_60929_61867,"remove",(function (){var obj61712 = ({"enumerable":false,"get":prop_get_fn_remove_61301_62040});
return obj61712;
})());

Object.defineProperty(obj_60925_target_60929_61867,"getPluginData",(function (){var obj61714 = ({"enumerable":false,"get":prop_get_fn_getplugindata_61308_62044});
return obj61714;
})());

Object.defineProperty(obj_60925_target_60929_61867,"setPluginData",(function (){var obj61716 = ({"enumerable":false,"get":prop_get_fn_setplugindata_61315_62048});
return obj61716;
})());

Object.defineProperty(obj_60925_target_60929_61867,"getPluginDataKeys",(function (){var obj61718 = ({"enumerable":false,"get":prop_get_fn_getplugindatakeys_61322_62052});
return obj61718;
})());

Object.defineProperty(obj_60925_target_60929_61867,"getSharedPluginData",(function (){var obj61720 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindata_61329_62056});
return obj61720;
})());

Object.defineProperty(obj_60925_target_60929_61867,"setSharedPluginData",(function (){var obj61722 = ({"enumerable":false,"get":prop_get_fn_setsharedplugindata_61336_62060});
return obj61722;
})());

Object.defineProperty(obj_60925_target_60929_61867,"getSharedPluginDataKeys",(function (){var obj61724 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindatakeys_61343_62064});
return obj61724;
})());

Object.defineProperty(obj_60925_target_60929_61867,"getChildren",(function (){var obj61726 = ({"enumerable":false,"get":prop_get_fn_getchildren_61350_62068});
return obj61726;
})());

Object.defineProperty(obj_60925_target_60929_61867,"appendChild",(function (){var obj61728 = ({"enumerable":false,"get":prop_get_fn_appendchild_61357_62072});
return obj61728;
})());

Object.defineProperty(obj_60925_target_60929_61867,"insertChild",(function (){var obj61730 = ({"enumerable":false,"get":prop_get_fn_insertchild_61364_62076});
return obj61730;
})());

Object.defineProperty(obj_60925_target_60929_61867,"addFlexLayout",(function (){var obj61732 = ({"enumerable":false,"get":prop_get_fn_addflexlayout_61371_62080});
return obj61732;
})());

Object.defineProperty(obj_60925_target_60929_61867,"addGridLayout",(function (){var obj61734 = ({"enumerable":false,"get":prop_get_fn_addgridlayout_61378_62084});
return obj61734;
})());

Object.defineProperty(obj_60925_target_60929_61867,"makeMask",(function (){var obj61736 = ({"enumerable":false,"get":prop_get_fn_makemask_61385_62088});
return obj61736;
})());

Object.defineProperty(obj_60925_target_60929_61867,"removeMask",(function (){var obj61738 = ({"enumerable":false,"get":prop_get_fn_removemask_61392_62092});
return obj61738;
})());

Object.defineProperty(obj_60925_target_60929_61867,"toD",(function (){var obj61740 = ({"enumerable":false,"get":prop_get_fn_tod_61399_62096});
return obj61740;
})());

Object.defineProperty(obj_60925_target_60929_61867,"getRange",(function (){var obj61742 = ({"enumerable":false,"get":prop_get_fn_getrange_61406_62100});
return obj61742;
})());

Object.defineProperty(obj_60925_target_60929_61867,"applyTypography",(function (){var obj61744 = ({"enumerable":false,"get":prop_get_fn_applytypography_61413_62104});
return obj61744;
})());

Object.defineProperty(obj_60925_target_60929_61867,"setParentIndex",(function (){var obj61746 = ({"enumerable":false,"get":prop_get_fn_setparentindex_61420_62108});
return obj61746;
})());

Object.defineProperty(obj_60925_target_60929_61867,"bringForward",(function (){var obj61748 = ({"enumerable":false,"get":prop_get_fn_bringforward_61427_62112});
return obj61748;
})());

Object.defineProperty(obj_60925_target_60929_61867,"sendBackward",(function (){var obj61750 = ({"enumerable":false,"get":prop_get_fn_sendbackward_61434_62116});
return obj61750;
})());

Object.defineProperty(obj_60925_target_60929_61867,"bringToFront",(function (){var obj61752 = ({"enumerable":false,"get":prop_get_fn_bringtofront_61441_62120});
return obj61752;
})());

Object.defineProperty(obj_60925_target_60929_61867,"sendToBack",(function (){var obj61754 = ({"enumerable":false,"get":prop_get_fn_sendtoback_61448_62124});
return obj61754;
})());

Object.defineProperty(obj_60925_target_60929_61867,"isComponentInstance",(function (){var obj61756 = ({"enumerable":false,"get":prop_get_fn_iscomponentinstance_61455_62128});
return obj61756;
})());

Object.defineProperty(obj_60925_target_60929_61867,"isComponentMainInstance",(function (){var obj61758 = ({"enumerable":false,"get":prop_get_fn_iscomponentmaininstance_61462_62132});
return obj61758;
})());

Object.defineProperty(obj_60925_target_60929_61867,"isComponentCopyInstance",(function (){var obj61760 = ({"enumerable":false,"get":prop_get_fn_iscomponentcopyinstance_61469_62136});
return obj61760;
})());

Object.defineProperty(obj_60925_target_60929_61867,"isComponentRoot",(function (){var obj61762 = ({"enumerable":false,"get":prop_get_fn_iscomponentroot_61476_62140});
return obj61762;
})());

Object.defineProperty(obj_60925_target_60929_61867,"isComponentHead",(function (){var obj61764 = ({"enumerable":false,"get":prop_get_fn_iscomponenthead_61483_62144});
return obj61764;
})());

Object.defineProperty(obj_60925_target_60929_61867,"componentRefShape",(function (){var obj61766 = ({"enumerable":false,"get":prop_get_fn_componentrefshape_61490_62148});
return obj61766;
})());

Object.defineProperty(obj_60925_target_60929_61867,"componentRoot",(function (){var obj61768 = ({"enumerable":false,"get":prop_get_fn_componentroot_61497_62152});
return obj61768;
})());

Object.defineProperty(obj_60925_target_60929_61867,"componentHead",(function (){var obj61770 = ({"enumerable":false,"get":prop_get_fn_componenthead_61504_62156});
return obj61770;
})());

Object.defineProperty(obj_60925_target_60929_61867,"component",(function (){var obj61772 = ({"enumerable":false,"get":prop_get_fn_component_61511_62160});
return obj61772;
})());

Object.defineProperty(obj_60925_target_60929_61867,"detach",(function (){var obj61774 = ({"enumerable":false,"get":prop_get_fn_detach_61518_62164});
return obj61774;
})());

Object.defineProperty(obj_60925_target_60929_61867,"export",(function (){var obj61776 = ({"enumerable":false,"get":prop_get_fn_export_61525_62168});
return obj61776;
})());

Object.defineProperty(obj_60925_target_60929_61867,"addInteraction",(function (){var obj61778 = ({"enumerable":false,"get":prop_get_fn_addinteraction_61532_62172});
return obj61778;
})());

Object.defineProperty(obj_60925_target_60929_61867,"removeInteraction",(function (){var obj61780 = ({"enumerable":false,"get":prop_get_fn_removeinteraction_61539_62176});
return obj61780;
})());

Object.defineProperty(obj_60925_target_60929_61867,"addRulerGuide",(function (){var obj61782 = ({"enumerable":false,"get":prop_get_fn_addrulerguide_61546_62180});
return obj61782;
})());

Object.defineProperty(obj_60925_target_60929_61867,"removeRulerGuide",(function (){var obj61784 = ({"enumerable":false,"get":prop_get_fn_removerulerguide_61553_62184});
return obj61784;
})());

Object.defineProperty(obj_60925_target_60929_61867,"tokens",(function (){var obj61786 = ({"enumerable":true,"get":prop_get_fn_tokens_61560_62185});
return obj61786;
})());

Object.defineProperty(obj_60925_target_60929_61867,"applyToken",(function (){var obj61788 = ({"enumerable":false,"get":prop_get_fn_applytoken_61567_62189});
return obj61788;
})());

Object.defineProperty(obj_60925_target_60929_61867,"isVariantHead",(function (){var obj61790 = ({"enumerable":false,"get":prop_get_fn_isvarianthead_61574_62193});
return obj61790;
})());

Object.defineProperty(obj_60925_target_60929_61867,"isVariantContainer",(function (){var obj61792 = ({"enumerable":false,"get":prop_get_fn_isvariantcontainer_61581_62197});
return obj61792;
})());

Object.defineProperty(obj_60925_target_60929_61867,"switchVariant",(function (){var obj61794 = ({"enumerable":false,"get":prop_get_fn_switchvariant_61588_62201});
return obj61794;
})());

Object.defineProperty(obj_60925_target_60929_61867,"combineAsVariants",(function (){var obj61796 = ({"enumerable":false,"get":prop_get_fn_combineasvariants_61595_62205});
return obj61796;
})());


return obj_60925;
})();
if(((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(data)) || (((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(data)) || (((app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(data)) || (app.common.files.helpers.bool_shape_QMARK_(data)))))))){
var target61800 = G__60923;
var get_fn61797_64355 = (function (self){
return self.getChildren();
});
var set_fn61798_64356 = (function (self,children){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"children","children",-940561982),"Plugin doesn't have 'content:write' permission");
} else {
if((!(cljs.core.every_QMARK_(app.plugins.shape.shape_proxy_QMARK_,children)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"children","children",-940561982),"Every children needs to be shape proxies");
} else {
var shape = app.plugins.utils.proxy__GT_shape(self);
var file_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file");
var page_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page");
var reverse_fn = ((app.plugins.flags.natural_child_ordering_QMARK_(plugin_id))?cljs.core.reverse:cljs.core.identity);
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60906_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__60906_SHARP_,"$id");
}),(reverse_fn.cljs$core$IFn$_invoke$arity$1 ? reverse_fn.cljs$core$IFn$_invoke$arity$1(children) : reverse_fn.call(null,children)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ids),cljs.core.set(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"children","children",-940561982),"Not all children are present in the input");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.reorder_children(file_id__$1,page_id__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),ids));

}

}
}
});
Object.defineProperty(target61800,"children",(function (){var obj61802 = ({"enumerable":false,"get":(function (){
var this61799 = this;
return get_fn61797_64355(this61799);
}),"set":(function (value__34924__auto__){
var this61799 = this;
return set_fn61798_64356(this61799,value__34924__auto__);
})});
return obj61802;
})());

return target61800;
} else {
return G__60923;
}
})();
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(data)){
var target61806 = G__60922;
var get_fn61803_64357 = (function (self){
return cljs.core.not(new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)));
});
var set_fn61804_64358 = (function (_,value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"clipContent","clipContent",249671651),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"clipContent","clipContent",249671651),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),(function (p1__60907_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60907_SHARP_,new cljs.core.Keyword(null,"show-content","show-content",-878000465),cljs.core.not(value));
})));

}
}
});
Object.defineProperty(target61806,"clipContent",(function (){var obj61808 = ({"enumerable":true,"get":(function (){
var this61805 = this;
return get_fn61803_64357(this61805);
}),"set":(function (value__34924__auto__){
var this61805 = this;
return set_fn61804_64358(this61805,value__34924__auto__);
})});
return obj61808;
})());

var get_fn61803_64359 = (function (self){
return cljs.core.not(new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self)));
});
var set_fn61804_64360 = (function (_,value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"showInViewMode","showInViewMode",-445923934),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"showInViewMode","showInViewMode",-445923934),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),(function (p1__60908_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60908_SHARP_,new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),cljs.core.not(value));
})));

}
}
});
Object.defineProperty(target61806,"showInViewMode",(function (){var obj61810 = ({"enumerable":true,"get":(function (){
var this61805 = this;
return get_fn61803_64359(this61805);
}),"set":(function (value__34924__auto__){
var this61805 = this;
return set_fn61804_64360(this61805,value__34924__auto__);
})});
return obj61810;
})());

var get_fn61803_64361 = (function (self){
var layout = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self));
var file_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file");
var page_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page");
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grid","grid",402978600),layout)){
return app.plugins.grid.grid_layout_proxy(plugin_id,file_id__$1,page_id__$1,id__$1);
} else {
return null;
}
});
var set_fn61804_64362 = null;
Object.defineProperty(target61806,"grid",(function (){var obj61812 = ({"enumerable":true,"get":(function (){
var this61805 = this;
return get_fn61803_64361(this61805);
})});
return obj61812;
})());

var get_fn61803_64363 = (function (self){
var layout = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(self));
var file_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$file");
var page_id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$page");
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),layout)){
return app.plugins.flex.flex_layout_proxy(plugin_id,file_id__$1,page_id__$1,id__$1);
} else {
return null;
}
});
var set_fn61804_64364 = null;
Object.defineProperty(target61806,"flex",(function (){var obj61814 = ({"enumerable":true,"get":(function (){
var this61805 = this;
return get_fn61803_64363(this61805);
})});
return obj61814;
})());

var get_fn61803_64365 = (function (p1__60909_SHARP_){
return app.plugins.format.format_frame_guides(new cljs.core.Keyword(null,"grids","grids",44187194).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60909_SHARP_)));
});
var set_fn61804_64366 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = app.plugins.parser.parse_frame_guides(value);
if(cljs.core.not(app.common.schema.validate(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword("app.common.types.grid","grid","app.common.types.grid/grid",-1484913641)], null),value__$1))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"guides","guides",-1398390510),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"guides","guides",-1398390510),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1], null),(function (p1__60910_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60910_SHARP_,new cljs.core.Keyword(null,"grids","grids",44187194),value__$1);
})));

}
}
});
Object.defineProperty(target61806,"guides",(function (){var obj61816 = ({"enumerable":true,"get":(function (){
var this61805 = this;
return get_fn61803_64365(this61805);
}),"set":(function (value__34924__auto__){
var this61805 = this;
return set_fn61804_64366(this61805,value__34924__auto__);
})});
return obj61816;
})());

var get_fn61803_64367 = (function (_){
var guides = new cljs.core.Keyword(null,"guides","guides",-1398390510).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_page(file_id,page_id));
return app.plugins.format.format_array((function (p1__60912_SHARP_){
return app.plugins.ruler_guides.ruler_guide_proxy(plugin_id,file_id,page_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__60912_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60911_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(p1__60911_SHARP_));
}),cljs.core.vals(guides)));
});
var set_fn61804_64368 = null;
Object.defineProperty(target61806,"rulerGuides",(function (){var obj61818 = ({"enumerable":true,"get":(function (){
var this61805 = this;
return get_fn61803_64367(this61805);
})});
return obj61818;
})());

var get_fn61803_64369 = (function (p1__60913_SHARP_){
return app.common.data.name(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60913_SHARP_)),new cljs.core.Keyword(null,"fix","fix",-1031773329)));
});
var set_fn61804_64370 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fix","fix",-1031773329),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalSizing","horizontalSizing",1922240218),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"horizontalSizing","horizontalSizing",1922240218),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id__$1]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),value__$1], null)));

}
}
});
Object.defineProperty(target61806,"horizontalSizing",(function (){var obj61820 = ({"enumerable":true,"get":(function (){
var this61805 = this;
return get_fn61803_64369(this61805);
}),"set":(function (value__34924__auto__){
var this61805 = this;
return set_fn61804_64370(this61805,value__34924__auto__);
})});
return obj61820;
})());

var get_fn61803_64456 = (function (p1__60914_SHARP_){
return app.common.data.name(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60914_SHARP_)),new cljs.core.Keyword(null,"fix","fix",-1031773329)));
});
var set_fn61804_64457 = (function (self,value){
var id__$1 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"$id");
var value__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fix","fix",-1031773329),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),value__$1)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalSizing","verticalSizing",911089716),value__$1);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"verticalSizing","verticalSizing",911089716),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([id__$1]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),value__$1], null)));

}
}
});
Object.defineProperty(target61806,"verticalSizing",(function (){var obj61822 = ({"enumerable":true,"get":(function (){
var this61805 = this;
return get_fn61803_64456(this61805);
}),"set":(function (value__34924__auto__){
var this61805 = this;
return set_fn61804_64457(this61805,value__34924__auto__);
})});
return obj61822;
})());

var get_fn61803_64458 = (function (self){
var shape = app.plugins.utils.proxy__GT_shape(self);
if(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(shape))){
var G__61823 = plugin_id;
var G__61824 = file_id;
var G__61825 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
return (app.plugins.shape.variant_proxy.cljs$core$IFn$_invoke$arity$3 ? app.plugins.shape.variant_proxy.cljs$core$IFn$_invoke$arity$3(G__61823,G__61824,G__61825) : app.plugins.shape.variant_proxy.call(null,G__61823,G__61824,G__61825));
} else {
return null;
}
});
var set_fn61804_64459 = null;
Object.defineProperty(target61806,"variants",(function (){var obj61827 = ({"enumerable":false,"get":(function (){
var this61805 = this;
return get_fn61803_64458(this61805);
})});
return obj61827;
})());

return target61806;
} else {
return G__60922;
}
})();
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(data)){
return app.plugins.text.add_text_props(G__60921,plugin_id);
} else {
return G__60921;
}
})();
if(((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(data)) || (app.common.files.helpers.bool_shape_QMARK_(data)))){
var target61831 = G__60920;
var get_fn61828_64460 = (function (p1__60915_SHARP_){
return app.plugins.format.format_path_content(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60915_SHARP_)));
});
var set_fn61829_64461 = (function (_,value){
var segments = app.plugins.parser.parse_commands(value);
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"content","content",15833224),"Plugin doesn't have 'content:write' permission");
} else {
if(cljs.core.not(app.common.schema.validate(app.common.types.path.schema_COLON_segments,segments))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"content","content",15833224),segments);
} else {
var selrect = app.common.types.path.calc_selrect(segments);
var content = app.common.types.path.from_plain(segments);
var points = app.common.geom.rect.rect__GT_points(selrect);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),content),new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect),new cljs.core.Keyword(null,"points","points",-1486596883),points);
})));

}
}
});
Object.defineProperty(target61831,"commands",(function (){var obj61833 = ({"enumerable":true,"get":(function (){
var this61830 = this;
return get_fn61828_64460(this61830);
}),"set":(function (value__34924__auto__){
var this61830 = this;
return set_fn61829_64461(this61830,value__34924__auto__);
})});
return obj61833;
})());

var get_fn61828_64462 = (function (p1__60916_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_shape(p1__60916_SHARP_)));
});
var set_fn61829_64463 = (function (_,value){
var segments = ((typeof value === 'string')?app.common.svg.path.parse(value):value);
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"content","content",15833224),"Plugin doesn't have 'content:write' permission");
} else {
if((!(app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(data)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"content-type","content-type",-508222634),cljs.core.type);
} else {
if(cljs.core.not(app.common.schema.validate(app.common.types.path.schema_COLON_segments,segments))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"content","content",15833224),segments);
} else {
var selrect = app.common.types.path.calc_selrect(segments);
var content = app.common.types.path.from_plain(segments);
var points = app.common.geom.rect.rect__GT_points(selrect);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),content),new cljs.core.Keyword(null,"selrect","selrect",1966287292),selrect),new cljs.core.Keyword(null,"points","points",-1486596883),points);
})));

}
}
}
});
Object.defineProperty(target61831,"d",(function (){var obj61835 = ({"enumerable":true,"get":(function (){
var this61830 = this;
return get_fn61828_64462(this61830);
}),"set":(function (value__34924__auto__){
var this61830 = this;
return set_fn61829_64463(this61830,value__34924__auto__);
})});
return obj61835;
})());

var get_fn61828_64464 = (function (p1__60917_SHARP_){
return p1__60917_SHARP_.d;
});
var set_fn61829_64465 = (function (self,value){
return (self.d = value);
});
Object.defineProperty(target61831,"content",(function (){var obj61837 = ({"enumerable":true,"get":(function (){
var this61830 = this;
return get_fn61828_64464(this61830);
}),"set":(function (value__34924__auto__){
var this61830 = this;
return set_fn61829_64465(this61830,value__34924__auto__);
})});
return obj61837;
})());

return target61831;
} else {
return G__60920;
}
}));

(app.plugins.shape.shape_proxy.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=app.plugins.shape.js.map
