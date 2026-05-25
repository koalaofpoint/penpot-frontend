import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.schema.js";
import "./app.main.data.workspace.guides.js";
import "./app.main.store.js";
import "./app.plugins.format.js";
import "./app.plugins.register.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
goog.provide('app.plugins.ruler_guides');
app.plugins.ruler_guides.shape_proxy = cljs.core.identity;
app.plugins.ruler_guides.shape_proxy_QMARK_ = cljs.core.identity;
app.plugins.ruler_guides.ruler_guide_proxy_QMARK_ = (function app$plugins$ruler_guides$ruler_guide_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"RulerGuideProxy");
});
app.plugins.ruler_guides.ruler_guide_proxy = (function app$plugins$ruler_guides$ruler_guide_proxy(plugin_id,file_id,page_id,id){
var obj_58898 = ({});
var to_string_58897 = (function (){
return "RuleGuideProxy";
});
var obj_58898_target_58907_59443 = obj_58898;
var prop_get_fn__58980_59444 = (function (){
var obj_58898_this_58906 = this;
var internal_fn__58972 = to_string_58897;
return internal_fn__58972.call(obj_58898_this_58906);
});
var prop_get_fn__58988_59445 = (function (){
var obj_58898_this_58906 = this;
var internal_fn__58981 = to_string_58897;
return internal_fn__58981.call(obj_58898_this_58906);
});
var prop_get_fn_plugin_59001_59446 = (function (){
var obj_58898_this_58906 = this;
var internal_fn_plugin_58990 = cljs.core.constantly(plugin_id);
return internal_fn_plugin_58990.call(obj_58898_this_58906);
});
var prop_get_fn_file_59011_59447 = (function (){
var obj_58898_this_58906 = this;
var internal_fn_file_59003 = cljs.core.constantly(file_id);
return internal_fn_file_59003.call(obj_58898_this_58906);
});
var prop_get_fn_page_59023_59448 = (function (){
var obj_58898_this_58906 = this;
var internal_fn_page_59013 = cljs.core.constantly(page_id);
return internal_fn_page_59013.call(obj_58898_this_58906);
});
var prop_get_fn_id_59032_59449 = (function (){
var obj_58898_this_58906 = this;
var internal_fn_id_59025 = cljs.core.constantly(id);
return internal_fn_id_59025.call(obj_58898_this_58906);
});
var prop_get_fn_board_59042_59450 = (function (){
var obj_58898_this_58906 = this;
var internal_fn_board_59034 = (function (self){
var board_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_ruler_guide(self));
if(cljs.core.truth_(board_id)){
return (app.plugins.ruler_guides.shape_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.ruler_guides.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,page_id,board_id) : app.plugins.ruler_guides.shape_proxy.call(null,plugin_id,file_id,page_id,board_id));
} else {
return null;
}
});
return internal_fn_board_59034.call(obj_58898_this_58906,obj_58898_this_58906);
});
var schema_board_59038_59451 = null;
var coercer_fn_board_59036_59452 = (((((!((schema_board_59038_59451 == null)))) && ((!(cljs.core.fn_QMARK_(schema_board_59038_59451))))))?app.common.schema.coercer(schema_board_59038_59451):null);
var decode_fn_board_59037_59453 = app.common.json.__GT_clj;
var prop_set_fn_board_59045_59454 = (function (val_board_59040){
var obj_58898_this_58906 = this;
var internal_fn_board_59034 = (function (self,value){
var shape = app.plugins.utils.locate_shape(file_id,page_id,app.util.object.get.cljs$core$IFn$_invoke$arity$2(value,"$id"));
if(cljs.core.not((app.plugins.ruler_guides.shape_proxy_QMARK_.cljs$core$IFn$_invoke$arity$1 ? app.plugins.ruler_guides.shape_proxy_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : app.plugins.ruler_guides.shape_proxy_QMARK_.call(null,value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"board","board",-1907017633),"The board is not a shape proxy");
} else {
if((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"board","board",-1907017633),"The shape is not a board");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"board","board",-1907017633),"Plugin doesn't have 'content:write' permission");
} else {
var board_id = (cljs.core.truth_(value)?app.util.object.get.cljs$core$IFn$_invoke$arity$2(value,"$id"):null);
var guide = app.plugins.utils.proxy__GT_ruler_guide(self);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.guides.update_guides(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guide,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),board_id)));

}
}
}
});
return internal_fn_board_59034.call(obj_58898_this_58906,obj_58898_this_58906,val_board_59040);
});
var prop_get_fn_orientation_59058_59455 = (function (){
var obj_58898_this_58906 = this;
var internal_fn_orientation_59048 = (function (p1__58894_SHARP_){
return app.plugins.format.axis__GT_orientation(new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.proxy__GT_ruler_guide(p1__58894_SHARP_)));
});
return internal_fn_orientation_59048.call(obj_58898_this_58906,obj_58898_this_58906);
});
var prop_get_fn_position_59072_59456 = (function (){
var obj_58898_this_58906 = this;
var internal_fn_position_59063 = (function (self){
var guide = app.plugins.utils.proxy__GT_ruler_guide(self);
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(guide))){
var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id);
var board_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(guide)),new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(guide));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide);
return (position - board_pos);
} else {
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide);
}
});
return internal_fn_position_59063.call(obj_58898_this_58906,obj_58898_this_58906);
});
var schema_position_59067_59457 = null;
var coercer_fn_position_59064_59458 = (((((!((schema_position_59067_59457 == null)))) && ((!(cljs.core.fn_QMARK_(schema_position_59067_59457))))))?app.common.schema.coercer(schema_position_59067_59457):null);
var decode_fn_position_59066_59459 = app.common.json.__GT_clj;
var prop_set_fn_position_59076_59460 = (function (val_position_59070){
var obj_58898_this_58906 = this;
var internal_fn_position_59063 = (function (self,value){
if(cljs.core.not(app.common.schema.valid_safe_number_QMARK_(value))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"position","position",-2011731912),"Not valid position");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"position","position",-2011731912),"Plugin doesn't have 'content:write' permission");
} else {
var guide = app.plugins.utils.proxy__GT_ruler_guide(self);
var position = (cljs.core.truth_(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(guide))?(function (){var objects = app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(file_id,page_id);
var board_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(guide)),new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(guide));
return (board_pos + value);
})():value);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.guides.update_guides(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(guide,new cljs.core.Keyword(null,"position","position",-2011731912),position)));

}
}
});
return internal_fn_position_59063.call(obj_58898_this_58906,obj_58898_this_58906,val_position_59070);
});
var schema_remove_59083_59461 = null;
var coercer_fn_remove_59080_59462 = (((((!((schema_remove_59083_59461 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_59083_59461))))))?app.common.schema.coercer(schema_remove_59083_59461):null);
var decode_fn_remove_59081_59463 = app.common.json.__GT_clj;
var prop_get_fn_remove_59089_59464 = (function (){
var obj_58898_this_58906 = this;
var internal_fn_remove_59079 = (function (){
var guide = app.plugins.utils.locate_ruler_guide(file_id,page_id,id);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.guides.remove_guide(guide));
});
var internal_fn_remove_59079__$1 = internal_fn_remove_59079.bind(obj_58898_this_58906);
return internal_fn_remove_59079__$1;
});
Object.defineProperty(obj_58898_target_58907_59443,Symbol.toStringTag,(function (){var obj59422 = ({"enumerable":false,"get":prop_get_fn__58980_59444});
return obj59422;
})());

Object.defineProperty(obj_58898_target_58907_59443,Symbol["for"]("penpot.reify:type"),(function (){var obj59424 = ({"enumerable":false,"get":prop_get_fn__58988_59445});
return obj59424;
})());

Object.defineProperty(obj_58898_target_58907_59443,"$plugin",(function (){var obj59426 = ({"enumerable":false,"get":prop_get_fn_plugin_59001_59446});
return obj59426;
})());

Object.defineProperty(obj_58898_target_58907_59443,"$file",(function (){var obj59428 = ({"enumerable":false,"get":prop_get_fn_file_59011_59447});
return obj59428;
})());

Object.defineProperty(obj_58898_target_58907_59443,"$page",(function (){var obj59432 = ({"enumerable":false,"get":prop_get_fn_page_59023_59448});
return obj59432;
})());

Object.defineProperty(obj_58898_target_58907_59443,"$id",(function (){var obj59434 = ({"enumerable":false,"get":prop_get_fn_id_59032_59449});
return obj59434;
})());

Object.defineProperty(obj_58898_target_58907_59443,"board",(function (){var obj59436 = ({"enumerable":false,"get":prop_get_fn_board_59042_59450,"set":prop_set_fn_board_59045_59454});
return obj59436;
})());

Object.defineProperty(obj_58898_target_58907_59443,"orientation",(function (){var obj59438 = ({"enumerable":true,"get":prop_get_fn_orientation_59058_59455});
return obj59438;
})());

Object.defineProperty(obj_58898_target_58907_59443,"position",(function (){var obj59440 = ({"enumerable":true,"get":prop_get_fn_position_59072_59456,"set":prop_set_fn_position_59076_59460});
return obj59440;
})());

Object.defineProperty(obj_58898_target_58907_59443,"remove",(function (){var obj59442 = ({"enumerable":false,"get":prop_get_fn_remove_59089_59464});
return obj59442;
})());


return obj_58898;
});

//# sourceMappingURL=app.plugins.ruler_guides.js.map
