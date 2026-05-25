import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.store.js";
import "./app.plugins.register.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
goog.provide('app.plugins.history');
app.plugins.history.history_subcontext_QMARK_ = (function app$plugins$history$history_subcontext_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"HistorySubcontext");
});
app.plugins.history.history_subcontext = (function app$plugins$history$history_subcontext(plugin_id){
var obj_62207 = ({});
var to_string_62206 = (function (){
return "HistorySubcontext";
});
var obj_62207_target_62211_62350 = obj_62207;
var prop_get_fn__62223_62351 = (function (){
var obj_62207_this_62210 = this;
var internal_fn__62215 = to_string_62206;
return internal_fn__62215.call(obj_62207_this_62210);
});
var prop_get_fn__62230_62352 = (function (){
var obj_62207_this_62210 = this;
var internal_fn__62224 = to_string_62206;
return internal_fn__62224.call(obj_62207_this_62210);
});
var prop_get_fn_plugin_62242_62353 = (function (){
var obj_62207_this_62210 = this;
var internal_fn_plugin_62231 = (function (){
return plugin_id;
});
return internal_fn_plugin_62231.call(obj_62207_this_62210);
});
var schema_undoblockbegin_62272_62354 = null;
var coercer_fn_undoblockbegin_62249_62355 = (((((!((schema_undoblockbegin_62272_62354 == null)))) && ((!(cljs.core.fn_QMARK_(schema_undoblockbegin_62272_62354))))))?app.common.schema.coercer(schema_undoblockbegin_62272_62354):null);
var decode_fn_undoblockbegin_62264_62356 = app.common.json.__GT_clj;
var prop_get_fn_undoblockbegin_62296_62357 = (function (){
var obj_62207_this_62210 = this;
var internal_fn_undoblockbegin_62248 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"resize","resize",297367086),"Plugin doesn't have 'content:write' permission");
} else {
var id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(id));

return id;

}
});
var internal_fn_undoblockbegin_62248__$1 = internal_fn_undoblockbegin_62248.bind(obj_62207_this_62210);
return internal_fn_undoblockbegin_62248__$1;
});
var schema_undoblockfinish_62327_62358 = null;
var coercer_fn_undoblockfinish_62318_62359 = (((((!((schema_undoblockfinish_62327_62358 == null)))) && ((!(cljs.core.fn_QMARK_(schema_undoblockfinish_62327_62358))))))?app.common.schema.coercer(schema_undoblockfinish_62327_62358):null);
var decode_fn_undoblockfinish_62320_62360 = app.common.json.__GT_clj;
var prop_get_fn_undoblockfinish_62338_62361 = (function (){
var obj_62207_this_62210 = this;
var internal_fn_undoblockfinish_62317 = (function (block_id){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"resize","resize",297367086),"Plugin doesn't have 'content:write' permission");
} else {
if(cljs.core.not(block_id)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"undoBlockFinish","undoBlockFinish",223635385),block_id);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(block_id));

}
}
});
var internal_fn_undoblockfinish_62317__$1 = internal_fn_undoblockfinish_62317.bind(obj_62207_this_62210);
return internal_fn_undoblockfinish_62317__$1;
});
Object.defineProperty(obj_62207_target_62211_62350,Symbol.toStringTag,(function (){var obj62341 = ({"enumerable":false,"get":prop_get_fn__62223_62351});
return obj62341;
})());

Object.defineProperty(obj_62207_target_62211_62350,Symbol["for"]("penpot.reify:type"),(function (){var obj62343 = ({"enumerable":false,"get":prop_get_fn__62230_62352});
return obj62343;
})());

Object.defineProperty(obj_62207_target_62211_62350,"$plugin",(function (){var obj62345 = ({"enumerable":false,"get":prop_get_fn_plugin_62242_62353});
return obj62345;
})());

Object.defineProperty(obj_62207_target_62211_62350,"undoBlockBegin",(function (){var obj62347 = ({"enumerable":false,"get":prop_get_fn_undoblockbegin_62296_62357});
return obj62347;
})());

Object.defineProperty(obj_62207_target_62211_62350,"undoBlockFinish",(function (){var obj62349 = ({"enumerable":false,"get":prop_get_fn_undoblockfinish_62338_62361});
return obj62349;
})());


return obj_62207;
});

//# sourceMappingURL=app.plugins.history.js.map
