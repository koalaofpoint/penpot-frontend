import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.plugins.register.js";
import "./app.plugins.utils.js";
import "./app.util.globals.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
goog.provide('app.plugins.local_storage');
if((typeof app !== 'undefined') && (typeof app.plugins !== 'undefined') && (typeof app.plugins.local_storage !== 'undefined') && (typeof app.plugins.local_storage.local_storage !== 'undefined')){
} else {
app.plugins.local_storage.local_storage = (function (){try{return (app.util.globals.global["localStorage"]);
}catch (e89510){var e__43136__auto__ = e89510;
return null;
}})();
}
app.plugins.local_storage.prefix_key = (function app$plugins$local_storage$prefix_key(plugin_id,key){
return ""+"penpot-plugins:"+(plugin_id ?? "")+"/"+(key ?? "");
});
app.plugins.local_storage.local_storage_proxy = (function app$plugins$local_storage$local_storage_proxy(plugin_id){
var obj_89515 = ({});
var to_string_89514 = (function (){
return "LocalStorageProxy";
});
var obj_89515_target_89519_89647 = obj_89515;
var prop_get_fn__89527_89648 = (function (){
var obj_89515_this_89518 = this;
var internal_fn__89521 = to_string_89514;
return internal_fn__89521.call(obj_89515_this_89518);
});
var prop_get_fn__89534_89649 = (function (){
var obj_89515_this_89518 = this;
var internal_fn__89528 = to_string_89514;
return internal_fn__89528.call(obj_89515_this_89518);
});
var prop_get_fn_plugin_89541_89650 = (function (){
var obj_89515_this_89518 = this;
var internal_fn_plugin_89535 = (function (){
return plugin_id;
});
return internal_fn_plugin_89535.call(obj_89515_this_89518);
});
var schema_getitem_89545_89651 = null;
var coercer_fn_getitem_89543_89652 = (((((!((schema_getitem_89545_89651 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getitem_89545_89651))))))?app.common.schema.coercer(schema_getitem_89545_89651):null);
var decode_fn_getitem_89544_89653 = app.common.json.__GT_clj;
var prop_get_fn_getitem_89548_89654 = (function (){
var obj_89515_this_89518 = this;
var internal_fn_getitem_89542 = (function (key){
if((!(app.plugins.register.check_permission(plugin_id,"allow:localstorage")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getItem","getItem",-1850161217),"Plugin doesn't have 'allow:localstorage' permission");
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getItem","getItem",-1850161217),"The key must be a string");
} else {
return app.plugins.local_storage.local_storage.getItem(app.plugins.local_storage.prefix_key(plugin_id,key));

}
}
});
var internal_fn_getitem_89542__$1 = internal_fn_getitem_89542.bind(obj_89515_this_89518);
return internal_fn_getitem_89542__$1;
});
var schema_setitem_89552_89655 = null;
var coercer_fn_setitem_89550_89656 = (((((!((schema_setitem_89552_89655 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setitem_89552_89655))))))?app.common.schema.coercer(schema_setitem_89552_89655):null);
var decode_fn_setitem_89551_89657 = app.common.json.__GT_clj;
var prop_get_fn_setitem_89555_89658 = (function (){
var obj_89515_this_89518 = this;
var internal_fn_setitem_89549 = (function (key,value){
if((!(app.plugins.register.check_permission(plugin_id,"allow:localstorage")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setItem","setItem",1848393972),"Plugin doesn't have 'allow:localstorage' permission");
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setItem","setItem",1848393972),"The key must be a string");
} else {
return app.plugins.local_storage.local_storage.setItem(app.plugins.local_storage.prefix_key(plugin_id,key),value);

}
}
});
var internal_fn_setitem_89549__$1 = internal_fn_setitem_89549.bind(obj_89515_this_89518);
return internal_fn_setitem_89549__$1;
});
var schema_removeitem_89559_89659 = null;
var coercer_fn_removeitem_89557_89660 = (((((!((schema_removeitem_89559_89659 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removeitem_89559_89659))))))?app.common.schema.coercer(schema_removeitem_89559_89659):null);
var decode_fn_removeitem_89558_89661 = app.common.json.__GT_clj;
var prop_get_fn_removeitem_89562_89662 = (function (){
var obj_89515_this_89518 = this;
var internal_fn_removeitem_89556 = (function (key){
if((!(app.plugins.register.check_permission(plugin_id,"allow:localstorage")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeItem","removeItem",-1184844686),"Plugin doesn't have 'allow:localstorage' permission");
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"removeItem","removeItem",-1184844686),"The key must be a string");
} else {
return app.plugins.local_storage.local_storage.getItem(app.plugins.local_storage.prefix_key(plugin_id,key));

}
}
});
var internal_fn_removeitem_89556__$1 = internal_fn_removeitem_89556.bind(obj_89515_this_89518);
return internal_fn_removeitem_89556__$1;
});
var schema_getkeys_89566_89663 = null;
var coercer_fn_getkeys_89564_89664 = (((((!((schema_getkeys_89566_89663 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getkeys_89566_89663))))))?app.common.schema.coercer(schema_getkeys_89566_89663):null);
var decode_fn_getkeys_89565_89665 = app.common.json.__GT_clj;
var prop_get_fn_getkeys_89569_89666 = (function (){
var obj_89515_this_89518 = this;
var internal_fn_getkeys_89563 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__89513_SHARP_){
return cuerdas.core.replace(p1__89513_SHARP_,app.plugins.local_storage.prefix_key(plugin_id,""),"");
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__89512_SHARP_){
return cuerdas.core.starts_with_QMARK_(p1__89512_SHARP_,app.plugins.local_storage.prefix_key(plugin_id,""));
}),Object.keys(app.plugins.local_storage.local_storage))));
});
var internal_fn_getkeys_89563__$1 = internal_fn_getkeys_89563.bind(obj_89515_this_89518);
return internal_fn_getkeys_89563__$1;
});
Object.defineProperty(obj_89515_target_89519_89647,Symbol.toStringTag,(function (){var obj89634 = ({"enumerable":false,"get":prop_get_fn__89527_89648});
return obj89634;
})());

Object.defineProperty(obj_89515_target_89519_89647,Symbol["for"]("penpot.reify:type"),(function (){var obj89636 = ({"enumerable":false,"get":prop_get_fn__89534_89649});
return obj89636;
})());

Object.defineProperty(obj_89515_target_89519_89647,"$plugin",(function (){var obj89638 = ({"enumerable":false,"get":prop_get_fn_plugin_89541_89650});
return obj89638;
})());

Object.defineProperty(obj_89515_target_89519_89647,"getItem",(function (){var obj89640 = ({"enumerable":false,"get":prop_get_fn_getitem_89548_89654});
return obj89640;
})());

Object.defineProperty(obj_89515_target_89519_89647,"setItem",(function (){var obj89642 = ({"enumerable":false,"get":prop_get_fn_setitem_89555_89658});
return obj89642;
})());

Object.defineProperty(obj_89515_target_89519_89647,"removeItem",(function (){var obj89644 = ({"enumerable":false,"get":prop_get_fn_removeitem_89562_89662});
return obj89644;
})());

Object.defineProperty(obj_89515_target_89519_89647,"getKeys",(function (){var obj89646 = ({"enumerable":false,"get":prop_get_fn_getkeys_89569_89666});
return obj89646;
})());


return obj_89515;
});

//# sourceMappingURL=app.plugins.local_storage.js.map
