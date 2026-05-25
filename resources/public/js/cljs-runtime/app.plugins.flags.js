import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.store.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
import "./potok.v2.core.js";
goog.provide('app.plugins.flags');
app.plugins.flags.natural_child_ordering_QMARK_ = (function app$plugins$flags$natural_child_ordering_QMARK_(plugin_id){
return cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"plugins","plugins",1900073717)),new cljs.core.Keyword(null,"flags","flags",1775418075)),plugin_id),new cljs.core.Keyword(null,"natural-child-ordering","natural-child-ordering",648760544)));
});
app.plugins.flags.clear = (function app$plugins$flags$clear(id){
if((typeof app.plugins.flags.reset_56122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.plugins.flags.reset_56122 = (function (id,meta56123){
this.id = id;
this.meta56123 = meta56123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.plugins.flags.reset_56122.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.plugins.flags.reset_56122.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.plugins.flags","reset","app.plugins.flags/reset",2067187122);
}));

(app.plugins.flags.reset_56122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56124,meta56123__$1){
var self__ = this;
var _56124__$1 = this;
return (new app.plugins.flags.reset_56122(self__.id,meta56123__$1));
}));

(app.plugins.flags.reset_56122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56124){
var self__ = this;
var _56124__$1 = this;
return self__.meta56123;
}));

(app.plugins.flags.reset_56122.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.plugins.flags.reset_56122.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"flags","flags",1775418075)], null),cljs.core.assoc,self__.id,cljs.core.PersistentArrayMap.EMPTY);
}));
}

return (new app.plugins.flags.reset_56122(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.plugins.flags.set_flag = (function app$plugins$flags$set_flag(id,key,value){
if((typeof app.plugins.flags.set_flag_56129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.plugins.flags.set_flag_56129 = (function (id,key,value,meta56130){
this.id = id;
this.key = key;
this.value = value;
this.meta56130 = meta56130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.plugins.flags.set_flag_56129.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.plugins.flags.set_flag_56129.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.plugins.flags","set-flag","app.plugins.flags/set-flag",-2024665901);
}));

(app.plugins.flags.set_flag_56129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56131,meta56130__$1){
var self__ = this;
var _56131__$1 = this;
return (new app.plugins.flags.set_flag_56129(self__.id,self__.key,self__.value,meta56130__$1));
}));

(app.plugins.flags.set_flag_56129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56131){
var self__ = this;
var _56131__$1 = this;
return self__.meta56130;
}));

(app.plugins.flags.set_flag_56129.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.plugins.flags.set_flag_56129.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"flags","flags",1775418075),self__.id], null),cljs.core.assoc,self__.key,self__.value);
}));
}

return (new app.plugins.flags.set_flag_56129(id,key,value,cljs.core.PersistentArrayMap.EMPTY));
});
app.plugins.flags.flags_proxy = (function app$plugins$flags$flags_proxy(plugin_id){
var obj_56137 = ({});
var to_string_56136 = (function (){
return "FlagProxy";
});
var obj_56137_target_56141_56172 = obj_56137;
var prop_get_fn__56150_56173 = (function (){
var obj_56137_this_56140 = this;
var internal_fn__56144 = to_string_56136;
return internal_fn__56144.call(obj_56137_this_56140);
});
var prop_get_fn__56157_56174 = (function (){
var obj_56137_this_56140 = this;
var internal_fn__56151 = to_string_56136;
return internal_fn__56151.call(obj_56137_this_56140);
});
var prop_get_fn_naturalchildordering_56164_56175 = (function (){
var obj_56137_this_56140 = this;
var internal_fn_naturalchildordering_56158 = (function (){
return app.plugins.flags.natural_child_ordering_QMARK_(plugin_id);
});
return internal_fn_naturalchildordering_56158.call(obj_56137_this_56140);
});
var schema_naturalchildordering_56161_56176 = null;
var coercer_fn_naturalchildordering_56159_56177 = (((((!((schema_naturalchildordering_56161_56176 == null)))) && ((!(cljs.core.fn_QMARK_(schema_naturalchildordering_56161_56176))))))?app.common.schema.coercer(schema_naturalchildordering_56161_56176):null);
var decode_fn_naturalchildordering_56160_56178 = app.common.json.__GT_clj;
var prop_set_fn_naturalchildordering_56165_56179 = (function (val_naturalchildordering_56163){
var obj_56137_this_56140 = this;
var internal_fn_naturalchildordering_56158 = (function (value){
if((!(cljs.core.boolean_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"naturalChildOrdering","naturalChildOrdering",-1223123419),value);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.plugins.flags.set_flag(plugin_id,new cljs.core.Keyword(null,"natural-child-ordering","natural-child-ordering",648760544),value));

}
});
return internal_fn_naturalchildordering_56158.call(obj_56137_this_56140,val_naturalchildordering_56163);
});
Object.defineProperty(obj_56137_target_56141_56172,Symbol.toStringTag,(function (){var obj56167 = ({"enumerable":false,"get":prop_get_fn__56150_56173});
return obj56167;
})());

Object.defineProperty(obj_56137_target_56141_56172,Symbol["for"]("penpot.reify:type"),(function (){var obj56169 = ({"enumerable":false,"get":prop_get_fn__56157_56174});
return obj56169;
})());

Object.defineProperty(obj_56137_target_56141_56172,"naturalChildOrdering",(function (){var obj56171 = ({"enumerable":true,"get":prop_get_fn_naturalchildordering_56164_56175,"set":prop_set_fn_naturalchildordering_56165_56179});
return obj56171;
})());


return obj_56137;
});

//# sourceMappingURL=app.plugins.flags.js.map
