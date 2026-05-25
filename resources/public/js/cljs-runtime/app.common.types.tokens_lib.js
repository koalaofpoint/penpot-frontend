import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.json.js";
import "./app.common.path_names.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./app.common.time.js";
import "./app.common.transit.js";
import "./app.common.types.token.js";
import "./app.common.uuid.js";
import "./clojure.core.protocols.js";
import "./clojure.datafy.js";
import "./cljs.pprint.js";
import "./clojure.set.js";
import "./clojure.walk.js";
import "./cuerdas.core.js";
goog.provide('app.common.types.tokens_lib');

/**
 * @interface
 */
app.common.types.tokens_lib.IValidation = function(){};

var app$common$types$tokens_lib$IValidation$valid_QMARK_$dyn_51448 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.valid_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.valid_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IValidation.valid?",_);
}
}
});
/**
 * check if this data structure is valid, returns true or false
 */
app.common.types.tokens_lib.valid_QMARK_ = (function app$common$types$tokens_lib$valid_QMARK_(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$IValidation$valid_QMARK_$arity$1 == null)))))){
return _.app$common$types$tokens_lib$IValidation$valid_QMARK_$arity$1(_);
} else {
return app$common$types$tokens_lib$IValidation$valid_QMARK_$dyn_51448(_);
}
});

var app$common$types$tokens_lib$IValidation$check$dyn_51454 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.check[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.check["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IValidation.check",_);
}
}
});
/**
 * check if this data structure is valid, raises exception or self
 */
app.common.types.tokens_lib.check = (function app$common$types$tokens_lib$check(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$IValidation$check$arity$1 == null)))))){
return _.app$common$types$tokens_lib$IValidation$check$arity$1(_);
} else {
return app$common$types$tokens_lib$IValidation$check$dyn_51454(_);
}
});


/**
 * Protocol for items that have an id, a name, a description and a modified date.
 * @interface
 */
app.common.types.tokens_lib.INamedItem = function(){};

var app$common$types$tokens_lib$INamedItem$get_id$dyn_51455 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_id[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_id["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INamedItem.get-id",_);
}
}
});
/**
 * Get the id of the item.
 */
app.common.types.tokens_lib.get_id = (function app$common$types$tokens_lib$get_id(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$INamedItem$get_id$arity$1 == null)))))){
return _.app$common$types$tokens_lib$INamedItem$get_id$arity$1(_);
} else {
return app$common$types$tokens_lib$INamedItem$get_id$dyn_51455(_);
}
});

var app$common$types$tokens_lib$INamedItem$get_name$dyn_51456 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_name[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_name["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INamedItem.get-name",_);
}
}
});
/**
 * Get the name of the item.
 */
app.common.types.tokens_lib.get_name = (function app$common$types$tokens_lib$get_name(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$INamedItem$get_name$arity$1 == null)))))){
return _.app$common$types$tokens_lib$INamedItem$get_name$arity$1(_);
} else {
return app$common$types$tokens_lib$INamedItem$get_name$dyn_51456(_);
}
});

var app$common$types$tokens_lib$INamedItem$get_description$dyn_51458 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_description[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_description["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INamedItem.get-description",_);
}
}
});
/**
 * Get the description of the item.
 */
app.common.types.tokens_lib.get_description = (function app$common$types$tokens_lib$get_description(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$INamedItem$get_description$arity$1 == null)))))){
return _.app$common$types$tokens_lib$INamedItem$get_description$arity$1(_);
} else {
return app$common$types$tokens_lib$INamedItem$get_description$dyn_51458(_);
}
});

var app$common$types$tokens_lib$INamedItem$get_modified_at$dyn_51463 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_modified_at[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_modified_at["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INamedItem.get-modified-at",_);
}
}
});
/**
 * Get the description of the item.
 */
app.common.types.tokens_lib.get_modified_at = (function app$common$types$tokens_lib$get_modified_at(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$INamedItem$get_modified_at$arity$1 == null)))))){
return _.app$common$types$tokens_lib$INamedItem$get_modified_at$arity$1(_);
} else {
return app$common$types$tokens_lib$INamedItem$get_modified_at$dyn_51463(_);
}
});

var app$common$types$tokens_lib$INamedItem$rename$dyn_51466 = (function (_,new_name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.rename[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,new_name) : m__5374__auto__.call(null,_,new_name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.rename["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,new_name) : m__5372__auto__.call(null,_,new_name));
} else {
throw cljs.core.missing_protocol("INamedItem.rename",_);
}
}
});
/**
 * Change the name of the item.
 */
app.common.types.tokens_lib.rename = (function app$common$types$tokens_lib$rename(_,new_name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$INamedItem$rename$arity$2 == null)))))){
return _.app$common$types$tokens_lib$INamedItem$rename$arity$2(_,new_name);
} else {
return app$common$types$tokens_lib$INamedItem$rename$dyn_51466(_,new_name);
}
});

var app$common$types$tokens_lib$INamedItem$reid$dyn_51467 = (function (_,new_id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.reid[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,new_id) : m__5374__auto__.call(null,_,new_id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.reid["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,new_id) : m__5372__auto__.call(null,_,new_id));
} else {
throw cljs.core.missing_protocol("INamedItem.reid",_);
}
}
});
/**
 * Change the id of the item.
 */
app.common.types.tokens_lib.reid = (function app$common$types$tokens_lib$reid(_,new_id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$INamedItem$reid$arity$2 == null)))))){
return _.app$common$types$tokens_lib$INamedItem$reid$arity$2(_,new_id);
} else {
return app$common$types$tokens_lib$INamedItem$reid$dyn_51467(_,new_id);
}
});

var app$common$types$tokens_lib$INamedItem$set_description$dyn_51469 = (function (_,new_description){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.set_description[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,new_description) : m__5374__auto__.call(null,_,new_description));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.set_description["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,new_description) : m__5372__auto__.call(null,_,new_description));
} else {
throw cljs.core.missing_protocol("INamedItem.set-description",_);
}
}
});
/**
 * Set the description of the item.
 */
app.common.types.tokens_lib.set_description = (function app$common$types$tokens_lib$set_description(_,new_description){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$INamedItem$set_description$arity$2 == null)))))){
return _.app$common$types$tokens_lib$INamedItem$set_description$arity$2(_,new_description);
} else {
return app$common$types$tokens_lib$INamedItem$set_description$dyn_51469(_,new_description);
}
});

(app.common.types.tokens_lib.INamedItem["null"] = true);

(app.common.types.tokens_lib.get_id["null"] = (function (_){
return null;
}));

(app.common.types.tokens_lib.get_name["null"] = (function (_){
return null;
}));

(app.common.types.tokens_lib.get_description["null"] = (function (_){
return null;
}));

(app.common.types.tokens_lib.get_modified_at["null"] = (function (_){
return null;
}));

(app.common.types.tokens_lib.rename["null"] = (function (_,___$1){
return null;
}));

(app.common.types.tokens_lib.reid["null"] = (function (_,___$1){
return null;
}));

(app.common.types.tokens_lib.set_description["null"] = (function (_,___$1){
return null;
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.protocols.Datafiable}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {app.common.types.tokens_lib.INamedItem}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.common.types.tokens_lib.Token = (function (id,name,type,value,description,modified_at,__meta,__extmap,__hash){
this.id = id;
this.name = name;
this.type = type;
this.value = value;
this.description = description;
this.modified_at = modified_at;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.common.types.tokens_lib.Token.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k51005,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__51016 = k51005;
var G__51016__$1 = (((G__51016 instanceof cljs.core.Keyword))?G__51016.fqn:null);
switch (G__51016__$1) {
case "id":
return self__.id;

break;
case "name":
return self__.name;

break;
case "type":
return self__.type;

break;
case "value":
return self__.value;

break;
case "description":
return self__.description;

break;
case "modified-at":
return self__.modified_at;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51005,else__5326__auto__);

}
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__51018){
var vec__51019 = p__51018;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51019,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51019,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.common.types.tokens-lib.Token{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),self__.modified_at],null))], null),self__.__extmap));
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51004){
var self__ = this;
var G__51004__$1 = this;
return (new cljs.core.RecordIter((0),G__51004__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.common.types.tokens_lib.Token(self__.id,self__.name,self__.type,self__.value,self__.description,self__.modified_at,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-269476610 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51006,other51007){
var self__ = this;
var this51006__$1 = this;
return (((!((other51007 == null)))) && ((((this51006__$1.constructor === other51007.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51006__$1.id,other51007.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51006__$1.name,other51007.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51006__$1.type,other51007.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51006__$1.value,other51007.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51006__$1.description,other51007.description)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51006__$1.modified_at,other51007.modified_at)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51006__$1.__extmap,other51007.__extmap)))))))))))))))));
}));

(app.common.types.tokens_lib.Token.prototype.app$common$types$tokens_lib$INamedItem$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.Token.prototype.app$common$types$tokens_lib$INamedItem$get_id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.id;
}));

(app.common.types.tokens_lib.Token.prototype.app$common$types$tokens_lib$INamedItem$get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(app.common.types.tokens_lib.Token.prototype.app$common$types$tokens_lib$INamedItem$get_description$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.description;
}));

(app.common.types.tokens_lib.Token.prototype.app$common$types$tokens_lib$INamedItem$get_modified_at$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.modified_at;
}));

(app.common.types.tokens_lib.Token.prototype.app$common$types$tokens_lib$INamedItem$rename$arity$2 = (function (this$,new_name){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"name","name",1843675177),new_name);
}));

(app.common.types.tokens_lib.Token.prototype.app$common$types$tokens_lib$INamedItem$reid$arity$2 = (function (this$,new_id){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"id","id",-1388402092),new_id);
}));

(app.common.types.tokens_lib.Token.prototype.app$common$types$tokens_lib$INamedItem$set_description$arity$2 = (function (this$,new_description){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"description","description",-1428560544),new_description);
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.common.types.tokens_lib.Token(self__.id,self__.name,self__.type,self__.value,self__.description,self__.modified_at,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k51005){
var self__ = this;
var this__5330__auto____$1 = this;
var G__51027 = k51005;
var G__51027__$1 = (((G__51027 instanceof cljs.core.Keyword))?G__51027.fqn:null);
switch (G__51027__$1) {
case "id":
case "name":
case "type":
case "value":
case "description":
case "modified-at":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51005);

}
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__51004){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__51028 = cljs.core.keyword_identical_QMARK_;
var expr__51029 = k__5332__auto__;
if(cljs.core.truth_((pred__51028.cljs$core$IFn$_invoke$arity$2 ? pred__51028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__51029) : pred__51028.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__51029)))){
return (new app.common.types.tokens_lib.Token(G__51004,self__.name,self__.type,self__.value,self__.description,self__.modified_at,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51028.cljs$core$IFn$_invoke$arity$2 ? pred__51028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__51029) : pred__51028.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__51029)))){
return (new app.common.types.tokens_lib.Token(self__.id,G__51004,self__.type,self__.value,self__.description,self__.modified_at,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51028.cljs$core$IFn$_invoke$arity$2 ? pred__51028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__51029) : pred__51028.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__51029)))){
return (new app.common.types.tokens_lib.Token(self__.id,self__.name,G__51004,self__.value,self__.description,self__.modified_at,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51028.cljs$core$IFn$_invoke$arity$2 ? pred__51028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__51029) : pred__51028.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__51029)))){
return (new app.common.types.tokens_lib.Token(self__.id,self__.name,self__.type,G__51004,self__.description,self__.modified_at,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51028.cljs$core$IFn$_invoke$arity$2 ? pred__51028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"description","description",-1428560544),expr__51029) : pred__51028.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__51029)))){
return (new app.common.types.tokens_lib.Token(self__.id,self__.name,self__.type,self__.value,G__51004,self__.modified_at,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51028.cljs$core$IFn$_invoke$arity$2 ? pred__51028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),expr__51029) : pred__51028.call(null,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),expr__51029)))){
return (new app.common.types.tokens_lib.Token(self__.id,self__.name,self__.type,self__.value,self__.description,G__51004,self__.__meta,self__.__extmap,null));
} else {
return (new app.common.types.tokens_lib.Token(self__.id,self__.name,self__.type,self__.value,self__.description,self__.modified_at,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__51004),null));
}
}
}
}
}
}
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"description","description",-1428560544),self__.description,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),self__.modified_at,null))], null),self__.__extmap));
}));

(app.common.types.tokens_lib.Token.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.Token.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this$__$1);
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__51004){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.common.types.tokens_lib.Token(self__.id,self__.name,self__.type,self__.value,self__.description,self__.modified_at,G__51004,self__.__extmap,self__.__hash));
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.common.types.tokens_lib.Token.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"modified-at","modified-at",708483348,null)], null);
}));

(app.common.types.tokens_lib.Token.cljs$lang$type = true);

(app.common.types.tokens_lib.Token.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.common.types.tokens-lib/Token",null,(1),null));
}));

(app.common.types.tokens_lib.Token.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.common.types.tokens-lib/Token");
}));

/**
 * Positional factory function for app.common.types.tokens-lib/Token.
 */
app.common.types.tokens_lib.__GT_Token = (function app$common$types$tokens_lib$__GT_Token(id,name,type,value,description,modified_at){
return (new app.common.types.tokens_lib.Token(id,name,type,value,description,modified_at,null,null,null));
});

/**
 * Factory function for app.common.types.tokens-lib/Token, taking a map of keywords to field values.
 */
app.common.types.tokens_lib.map__GT_Token = (function app$common$types$tokens_lib$map__GT_Token(G__51014){
var extmap__5365__auto__ = (function (){var G__51034 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51014,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179)], 0));
if(cljs.core.record_QMARK_(G__51014)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51034);
} else {
return G__51034;
}
})();
return (new app.common.types.tokens_lib.Token(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__51014),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__51014),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__51014),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__51014),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__51014),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(G__51014),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,app.common.types.tokens_lib.Token,(function (obj){
cljs.core._STAR_out_STAR_.write("#penpot/token ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clojure.datafy.datafy(obj));
}));
(app.common.types.tokens_lib.Token.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.Token.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
cljs.core._write(writer,"#penpot/token ");

return cljs.core._pr_writer(clojure.datafy.datafy(this$__$1),writer,opts);
}));

(app.common.types.tokens_lib.Token.prototype.cljs$core$IEncodeJS$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.Token.prototype.cljs$core$IEncodeJS$_clj__GT_js$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.clj__GT_js(clojure.datafy.datafy(this$__$1));
}));
app.common.types.tokens_lib.token_QMARK_ = (function app$common$types$tokens_lib$token_QMARK_(o){
return (o instanceof app.common.types.tokens_lib.Token);
});
app.common.types.tokens_lib.schema_COLON_token = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.fmap((function (p1__51037_SHARP_){
return (app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$1(p1__51037_SHARP_) : app.common.types.tokens_lib.make_token.call(null,p1__51037_SHARP_));
}),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.token.schema_COLON_token_attrs))], null),app.common.schema.required_keys.cljs$core$IFn$_invoke$arity$1(app.common.types.token.schema_COLON_token_attrs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.tokens_lib.token_QMARK_], null)], null);
app.common.types.tokens_lib.check_token_attrs = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.token.schema_COLON_token_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid params for token"], 0));
app.common.types.tokens_lib.decode_token_attrs = app.common.schema.lazy_decoder(app.common.types.token.schema_COLON_token_attrs,app.common.schema.json_transformer);
app.common.types.tokens_lib.check_token = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.schema_COLON_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid token"], 0));
app.common.types.tokens_lib.make_token = (function app$common$types$tokens_lib$make_token(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51487 = arguments.length;
var i__5750__auto___51488 = (0);
while(true){
if((i__5750__auto___51488 < len__5749__auto___51487)){
args__5755__auto__.push((arguments[i__5750__auto___51488]));

var G__51489 = (i__5750__auto___51488 + (1));
i__5750__auto___51488 = G__51489;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic = (function (p__51042){
var map__51043 = p__51042;
var map__51043__$1 = cljs.core.__destructure_map(map__51043);
var attrs = map__51043__$1;
return app.common.types.tokens_lib.map__GT_Token(app.common.types.tokens_lib.check_token_attrs(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__51038_SHARP_){
var or__5025__auto__ = p1__51038_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),(function (p1__51039_SHARP_){
var or__5025__auto__ = p1__51039_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.time.now();
}
})),new cljs.core.Keyword(null,"description","description",-1428560544),app.common.data.nilv,"")));
}));

(app.common.types.tokens_lib.make_token.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.types.tokens_lib.make_token.cljs$lang$applyTo = (function (seq51040){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51040));
}));

app.common.types.tokens_lib.token_separator = ".";
app.common.types.tokens_lib.get_token_path = (function app$common$types$tokens_lib$get_token_path(token){
return app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),app.common.types.tokens_lib.token_separator], 0));
});
app.common.types.tokens_lib.group_by_type = (function app$common$types$tokens_lib$group_by_type(tokens){
var tokens_SINGLEQUOTE_ = ((((cljs.core.map_QMARK_(tokens)) || (app.common.data.ordered_map_QMARK_(tokens))))?cljs.core.vals(tokens):tokens);
return cljs.core.group_by(new cljs.core.Keyword(null,"type","type",1174270348),tokens_SINGLEQUOTE_);
});

/**
 * @interface
 */
app.common.types.tokens_lib.ITokenSet = function(){};

var app$common$types$tokens_lib$ITokenSet$add_token_$dyn_51491 = (function (_,token){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.add_token_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,token) : m__5374__auto__.call(null,_,token));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.add_token_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,token) : m__5372__auto__.call(null,_,token));
} else {
throw cljs.core.missing_protocol("ITokenSet.add-token-",_);
}
}
});
/**
 * add a token at the end of the list
 */
app.common.types.tokens_lib.add_token_ = (function app$common$types$tokens_lib$add_token_(_,token){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSet$add_token_$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenSet$add_token_$arity$2(_,token);
} else {
return app$common$types$tokens_lib$ITokenSet$add_token_$dyn_51491(_,token);
}
});

var app$common$types$tokens_lib$ITokenSet$update_token_$dyn_51492 = (function (_,id,f){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.update_token_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,id,f) : m__5374__auto__.call(null,_,id,f));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.update_token_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,id,f) : m__5372__auto__.call(null,_,id,f));
} else {
throw cljs.core.missing_protocol("ITokenSet.update-token-",_);
}
}
});
/**
 * update a token in the list
 */
app.common.types.tokens_lib.update_token_ = (function app$common$types$tokens_lib$update_token_(_,id,f){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSet$update_token_$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokenSet$update_token_$arity$3(_,id,f);
} else {
return app$common$types$tokens_lib$ITokenSet$update_token_$dyn_51492(_,id,f);
}
});

var app$common$types$tokens_lib$ITokenSet$delete_token_$dyn_51494 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.delete_token_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.delete_token_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenSet.delete-token-",_);
}
}
});
/**
 * delete a token from the list
 */
app.common.types.tokens_lib.delete_token_ = (function app$common$types$tokens_lib$delete_token_(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSet$delete_token_$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenSet$delete_token_$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenSet$delete_token_$dyn_51494(_,id);
}
});

var app$common$types$tokens_lib$ITokenSet$get_token_$dyn_51499 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_token_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_token_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenSet.get-token-",_);
}
}
});
/**
 * get a token by its id
 */
app.common.types.tokens_lib.get_token_ = (function app$common$types$tokens_lib$get_token_(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSet$get_token_$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenSet$get_token_$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenSet$get_token_$dyn_51499(_,id);
}
});

var app$common$types$tokens_lib$ITokenSet$get_token_by_name_$dyn_51500 = (function (_,name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_token_by_name_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,name) : m__5374__auto__.call(null,_,name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_token_by_name_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,name) : m__5372__auto__.call(null,_,name));
} else {
throw cljs.core.missing_protocol("ITokenSet.get-token-by-name-",_);
}
}
});
/**
 * get a token by its name
 */
app.common.types.tokens_lib.get_token_by_name_ = (function app$common$types$tokens_lib$get_token_by_name_(_,name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSet$get_token_by_name_$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenSet$get_token_by_name_$arity$2(_,name);
} else {
return app$common$types$tokens_lib$ITokenSet$get_token_by_name_$dyn_51500(_,name);
}
});

var app$common$types$tokens_lib$ITokenSet$get_tokens_$dyn_51501 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_tokens_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_tokens_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenSet.get-tokens-",_);
}
}
});
/**
 * return a map of tokens in the set, indexed by token-name
 */
app.common.types.tokens_lib.get_tokens_ = (function app$common$types$tokens_lib$get_tokens_(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSet$get_tokens_$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenSet$get_tokens_$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenSet$get_tokens_$dyn_51501(_);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.common.types.tokens_lib.TokenSetLegacy = (function (id,name,description,modified_at,tokens,__meta,__extmap,__hash){
this.id = id;
this.name = name;
this.description = description;
this.modified_at = modified_at;
this.tokens = tokens;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k51052,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__51058 = k51052;
var G__51058__$1 = (((G__51058 instanceof cljs.core.Keyword))?G__51058.fqn:null);
switch (G__51058__$1) {
case "id":
return self__.id;

break;
case "name":
return self__.name;

break;
case "description":
return self__.description;

break;
case "modified-at":
return self__.modified_at;

break;
case "tokens":
return self__.tokens;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51052,else__5326__auto__);

}
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__51059){
var vec__51060 = p__51059;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51060,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51060,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.common.types.tokens-lib.TokenSetLegacy{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),self__.modified_at],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tokens","tokens",-818939304),self__.tokens],null))], null),self__.__extmap));
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51051){
var self__ = this;
var G__51051__$1 = this;
return (new cljs.core.RecordIter((0),G__51051__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword(null,"tokens","tokens",-818939304)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.common.types.tokens_lib.TokenSetLegacy(self__.id,self__.name,self__.description,self__.modified_at,self__.tokens,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-573429936 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51053,other51054){
var self__ = this;
var this51053__$1 = this;
return (((!((other51054 == null)))) && ((((this51053__$1.constructor === other51054.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51053__$1.id,other51054.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51053__$1.name,other51054.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51053__$1.description,other51054.description)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51053__$1.modified_at,other51054.modified_at)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51053__$1.tokens,other51054.tokens)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51053__$1.__extmap,other51054.__extmap)))))))))))))));
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"tokens","tokens",-818939304),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.common.types.tokens_lib.TokenSetLegacy(self__.id,self__.name,self__.description,self__.modified_at,self__.tokens,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k51052){
var self__ = this;
var this__5330__auto____$1 = this;
var G__51063 = k51052;
var G__51063__$1 = (((G__51063 instanceof cljs.core.Keyword))?G__51063.fqn:null);
switch (G__51063__$1) {
case "id":
case "name":
case "description":
case "modified-at":
case "tokens":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51052);

}
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__51051){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__51064 = cljs.core.keyword_identical_QMARK_;
var expr__51065 = k__5332__auto__;
if(cljs.core.truth_((pred__51064.cljs$core$IFn$_invoke$arity$2 ? pred__51064.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__51065) : pred__51064.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__51065)))){
return (new app.common.types.tokens_lib.TokenSetLegacy(G__51051,self__.name,self__.description,self__.modified_at,self__.tokens,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51064.cljs$core$IFn$_invoke$arity$2 ? pred__51064.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__51065) : pred__51064.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__51065)))){
return (new app.common.types.tokens_lib.TokenSetLegacy(self__.id,G__51051,self__.description,self__.modified_at,self__.tokens,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51064.cljs$core$IFn$_invoke$arity$2 ? pred__51064.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"description","description",-1428560544),expr__51065) : pred__51064.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__51065)))){
return (new app.common.types.tokens_lib.TokenSetLegacy(self__.id,self__.name,G__51051,self__.modified_at,self__.tokens,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51064.cljs$core$IFn$_invoke$arity$2 ? pred__51064.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),expr__51065) : pred__51064.call(null,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),expr__51065)))){
return (new app.common.types.tokens_lib.TokenSetLegacy(self__.id,self__.name,self__.description,G__51051,self__.tokens,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51064.cljs$core$IFn$_invoke$arity$2 ? pred__51064.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tokens","tokens",-818939304),expr__51065) : pred__51064.call(null,new cljs.core.Keyword(null,"tokens","tokens",-818939304),expr__51065)))){
return (new app.common.types.tokens_lib.TokenSetLegacy(self__.id,self__.name,self__.description,self__.modified_at,G__51051,self__.__meta,self__.__extmap,null));
} else {
return (new app.common.types.tokens_lib.TokenSetLegacy(self__.id,self__.name,self__.description,self__.modified_at,self__.tokens,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__51051),null));
}
}
}
}
}
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"description","description",-1428560544),self__.description,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),self__.modified_at,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tokens","tokens",-818939304),self__.tokens,null))], null),self__.__extmap));
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__51051){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.common.types.tokens_lib.TokenSetLegacy(self__.id,self__.name,self__.description,self__.modified_at,self__.tokens,G__51051,self__.__extmap,self__.__hash));
}));

(app.common.types.tokens_lib.TokenSetLegacy.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.common.types.tokens_lib.TokenSetLegacy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"modified-at","modified-at",708483348,null),new cljs.core.Symbol(null,"tokens","tokens",821592223,null)], null);
}));

(app.common.types.tokens_lib.TokenSetLegacy.cljs$lang$type = true);

(app.common.types.tokens_lib.TokenSetLegacy.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.common.types.tokens-lib/TokenSetLegacy",null,(1),null));
}));

(app.common.types.tokens_lib.TokenSetLegacy.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.common.types.tokens-lib/TokenSetLegacy");
}));

/**
 * Positional factory function for app.common.types.tokens-lib/TokenSetLegacy.
 */
app.common.types.tokens_lib.__GT_TokenSetLegacy = (function app$common$types$tokens_lib$__GT_TokenSetLegacy(id,name,description,modified_at,tokens){
return (new app.common.types.tokens_lib.TokenSetLegacy(id,name,description,modified_at,tokens,null,null,null));
});

/**
 * Factory function for app.common.types.tokens-lib/TokenSetLegacy, taking a map of keywords to field values.
 */
app.common.types.tokens_lib.map__GT_TokenSetLegacy = (function app$common$types$tokens_lib$map__GT_TokenSetLegacy(G__51055){
var extmap__5365__auto__ = (function (){var G__51069 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51055,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword(null,"tokens","tokens",-818939304)], 0));
if(cljs.core.record_QMARK_(G__51055)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51069);
} else {
return G__51069;
}
})();
return (new app.common.types.tokens_lib.TokenSetLegacy(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__51055),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__51055),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__51055),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(G__51055),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(G__51055),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {clojure.core.protocols.Datafiable}
 * @implements {app.common.types.tokens_lib.ITokenSet}
 * @implements {app.common.types.tokens_lib.INamedItem}
*/
app.common.types.tokens_lib.TokenSet = (function (id,name,description,modified_at,tokens){
this.id = id;
this.name = name;
this.description = description;
this.modified_at = modified_at;
this.tokens = tokens;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.common.types.tokens_lib.TokenSet.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof app.common.types.tokens_lib.TokenSet)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,other.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.name,other.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.description,other.description)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.modified_at,other.modified_at)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.tokens,other.tokens)))))))))));
}));

(app.common.types.tokens_lib.TokenSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return this$__$1.equals(other);
}));

(app.common.types.tokens_lib.TokenSet.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenSet.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"description","description",-1428560544),self__.description,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),self__.modified_at,new cljs.core.Keyword(null,"tokens","tokens",-818939304),self__.tokens], null);
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$INamedItem$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$INamedItem$get_id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.id;
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$INamedItem$get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$INamedItem$get_description$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.description;
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$INamedItem$get_modified_at$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.modified_at;
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$INamedItem$rename$arity$2 = (function (_,new_name){
var self__ = this;
var ___$1 = this;
return (new app.common.types.tokens_lib.TokenSet(self__.id,new_name,self__.description,app.common.time.now(),self__.tokens));
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$INamedItem$reid$arity$2 = (function (_,new_id){
var self__ = this;
var ___$1 = this;
return (new app.common.types.tokens_lib.TokenSet(new_id,self__.name,self__.description,app.common.time.now(),self__.tokens));
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$INamedItem$set_description$arity$2 = (function (_,new_description){
var self__ = this;
var ___$1 = this;
return (new app.common.types.tokens_lib.TokenSet(self__.id,self__.name,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new_description,""),app.common.time.now(),self__.tokens));
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$ITokenSet$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$ITokenSet$add_token_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
var token__$1 = app.common.types.tokens_lib.check_token(token);
return (new app.common.types.tokens_lib.TokenSet(self__.id,self__.name,self__.description,app.common.time.now(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token__$1),token__$1)));
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$ITokenSet$update_token_$arity$3 = (function (this$,token_id,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.uuid_QMARK_(token_id)){
} else {
throw (new Error(["Assert failed: ","expected uuid for `token-id`","\n","(uuid? token-id)"].join('')));
}

var temp__5823__auto__ = this$__$1.app$common$types$tokens_lib$ITokenSet$get_token_$arity$2(null,token_id);
if(cljs.core.truth_(temp__5823__auto__)){
var token = temp__5823__auto__;
var token_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(token) : f.call(null,token))], 0)),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),app.common.time.now());
return (new app.common.types.tokens_lib.TokenSet(self__.id,self__.name,self__.description,app.common.time.now(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token_SINGLEQUOTE_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token_SINGLEQUOTE_),token_SINGLEQUOTE_):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.common.data.oassoc_before(self__.tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token_SINGLEQUOTE_),token_SINGLEQUOTE_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token)))));
} else {
return this$__$1;
}
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$ITokenSet$delete_token_$arity$2 = (function (this$,token_id){
var self__ = this;
var this$__$1 = this;
if(cljs.core.uuid_QMARK_(token_id)){
} else {
throw (new Error(["Assert failed: ","expected uuid for `token-id`","\n","(uuid? token-id)"].join('')));
}

var token = this$__$1.app$common$types$tokens_lib$ITokenSet$get_token_$arity$2(null,token_id);
return (new app.common.types.tokens_lib.TokenSet(self__.id,self__.name,self__.description,app.common.time.now(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token))));
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$ITokenSet$get_token_$arity$2 = (function (_,token_id){
var self__ = this;
var ___$1 = this;
if(cljs.core.uuid_QMARK_(token_id)){
} else {
throw (new Error(["Assert failed: ","expected uuid for `token-id`","\n","(uuid? token-id)"].join('')));
}

return cljs.core.some((function (p1__51070_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51070_SHARP_),token_id)){
return p1__51070_SHARP_;
} else {
return null;
}
}),cljs.core.vals(self__.tokens));
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$ITokenSet$get_token_by_name_$arity$2 = (function (_,name__$1){
var self__ = this;
var ___$1 = this;
if(typeof name__$1 === 'string'){
} else {
throw (new Error(["Assert failed: ","expected string for `name`","\n","(string? name)"].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.tokens,name__$1);
}));

(app.common.types.tokens_lib.TokenSet.prototype.app$common$types$tokens_lib$ITokenSet$get_tokens_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tokens;
}));

(app.common.types.tokens_lib.TokenSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"modified-at","modified-at",708483348,null),new cljs.core.Symbol(null,"tokens","tokens",821592223,null)], null);
}));

(app.common.types.tokens_lib.TokenSet.cljs$lang$type = true);

(app.common.types.tokens_lib.TokenSet.cljs$lang$ctorStr = "app.common.types.tokens-lib/TokenSet");

(app.common.types.tokens_lib.TokenSet.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.types.tokens-lib/TokenSet");
}));

/**
 * Positional factory function for app.common.types.tokens-lib/TokenSet.
 */
app.common.types.tokens_lib.__GT_TokenSet = (function app$common$types$tokens_lib$__GT_TokenSet(id,name,description,modified_at,tokens){
return (new app.common.types.tokens_lib.TokenSet(id,name,description,modified_at,tokens));
});

cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,app.common.types.tokens_lib.TokenSet,(function (obj){
cljs.core._STAR_out_STAR_.write("#penpot/token-set ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clojure.datafy.datafy(obj));
}));
(app.common.types.tokens_lib.TokenSet.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
cljs.core._write(writer,"#penpot/token-set ");

return cljs.core._pr_writer(clojure.datafy.datafy(this$__$1),writer,opts);
}));

(app.common.types.tokens_lib.TokenSet.prototype.cljs$core$IEncodeJS$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenSet.prototype.cljs$core$IEncodeJS$_clj__GT_js$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.clj__GT_js(clojure.datafy.datafy(this$__$1));
}));
app.common.types.tokens_lib.token_set_QMARK_ = (function app$common$types$tokens_lib$token_set_QMARK_(o){
return (o instanceof app.common.types.tokens_lib.TokenSet);
});
app.common.types.tokens_lib.token_set_legacy_QMARK_ = (function app$common$types$tokens_lib$token_set_legacy_QMARK_(o){
return (o instanceof app.common.types.tokens_lib.TokenSetLegacy);
});
app.common.types.tokens_lib.schema_COLON_token_set_name = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__51095_SHARP_){
return (app.common.types.tokens_lib.normalized_set_name_QMARK_.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.normalized_set_name_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__51095_SHARP_) : app.common.types.tokens_lib.normalized_set_name_QMARK_.call(null,p1__51095_SHARP_));
})], null)], null);
app.common.types.tokens_lib.schema_COLON_token_set_attrs = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"TokenSet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),app.common.types.tokens_lib.schema_COLON_token_set_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.fmap((function (p1__51096_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),p1__51096_SHARP_);
}),app.common.schema.generators.map_of.cljs$core$IFn$_invoke$arity$2(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.tokens_lib.schema_COLON_token)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5),new cljs.core.Keyword("decode","json","decode/json",468276044),(function (v){
if(app.common.data.ordered_map_QMARK_(v)){
return v;
} else {
if(cljs.core.map_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),v);
} else {
return v;

}
}
})], null),new cljs.core.Keyword(null,"string","string",-1989541586),app.common.types.tokens_lib.schema_COLON_token], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.data.ordered_map_QMARK_], null)], null)], null)], null);
app.common.types.tokens_lib.schema_COLON_token_set = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.fmap((function (p1__51097_SHARP_){
return (app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$1(p1__51097_SHARP_) : app.common.types.tokens_lib.make_token_set.call(null,p1__51097_SHARP_));
}),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.tokens_lib.schema_COLON_token_set_attrs))], null),app.common.schema.required_keys.cljs$core$IFn$_invoke$arity$1(app.common.types.tokens_lib.schema_COLON_token_set_attrs)], null);
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.types.tokens-lib","token-set","app.common.types.tokens-lib/token-set",169935610),app.common.types.tokens_lib.schema_COLON_token_set);
app.common.types.tokens_lib.check_token_set_attrs = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.schema_COLON_token_set_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid params for token-set"], 0));
app.common.types.tokens_lib.check_token_set = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.schema_COLON_token_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid token set"], 0));
app.common.types.tokens_lib.map__GT_token_set = (function app$common$types$tokens_lib$map__GT_token_set(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51509 = arguments.length;
var i__5750__auto___51510 = (0);
while(true){
if((i__5750__auto___51510 < len__5749__auto___51509)){
args__5755__auto__.push((arguments[i__5750__auto___51510]));

var G__51511 = (i__5750__auto___51510 + (1));
i__5750__auto___51510 = G__51511;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.types.tokens_lib.map__GT_token_set.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.types.tokens_lib.map__GT_token_set.cljs$core$IFn$_invoke$arity$variadic = (function (p__51100){
var map__51101 = p__51100;
var map__51101__$1 = cljs.core.__destructure_map(map__51101);
var attrs = map__51101__$1;
return (new app.common.types.tokens_lib.TokenSet(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(attrs)));
}));

(app.common.types.tokens_lib.map__GT_token_set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.types.tokens_lib.map__GT_token_set.cljs$lang$applyTo = (function (seq51098){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51098));
}));

app.common.types.tokens_lib.make_token_set = (function app$common$types$tokens_lib$make_token_set(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51512 = arguments.length;
var i__5750__auto___51513 = (0);
while(true){
if((i__5750__auto___51513 < len__5749__auto___51512)){
args__5755__auto__.push((arguments[i__5750__auto___51513]));

var G__51514 = (i__5750__auto___51513 + (1));
i__5750__auto___51513 = G__51514;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic = (function (p__51108){
var map__51109 = p__51108;
var map__51109__$1 = cljs.core.__destructure_map(map__51109);
var attrs = map__51109__$1;
return app.common.types.tokens_lib.map__GT_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.tokens_lib.check_token_set_attrs(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__51102_SHARP_){
var or__5025__auto__ = p1__51102_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),(function (p1__51104_SHARP_){
var or__5025__auto__ = p1__51104_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.time.now();
}
})),new cljs.core.Keyword(null,"tokens","tokens",-818939304),(function (p1__51105_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),p1__51105_SHARP_);
})),new cljs.core.Keyword(null,"description","description",-1428560544),app.common.data.nilv,""))], 0));
}));

(app.common.types.tokens_lib.make_token_set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.types.tokens_lib.make_token_set.cljs$lang$applyTo = (function (seq51106){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51106));
}));

app.common.types.tokens_lib.set_prefix = "S-";
app.common.types.tokens_lib.set_group_prefix = "G-";
app.common.types.tokens_lib.set_separator = "/";
app.common.types.tokens_lib.get_set_path = (function app$common$types$tokens_lib$get_set_path(token_set){
return app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.get_name(token_set),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),app.common.types.tokens_lib.set_separator], 0));
});
app.common.types.tokens_lib.split_set_name = (function app$common$types$tokens_lib$split_set_name(name){
return app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic(name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),app.common.types.tokens_lib.set_separator], 0));
});
app.common.types.tokens_lib.join_set_path = (function app$common$types$tokens_lib$join_set_path(path){
return app.common.path_names.join_path.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),app.common.types.tokens_lib.set_separator,new cljs.core.Keyword(null,"with-spaces?","with-spaces?",3340243),false], 0));
});
/**
 * Normalize a set name (ensure that there are no extra spaces, like ' group /  set' -> 'group/set').
 * 
 *   If `relative-to` is provided, the normalized name will preserve the same group prefix as reference name.
 */
app.common.types.tokens_lib.normalize_set_name = (function app$common$types$tokens_lib$normalize_set_name(var_args){
var G__51116 = arguments.length;
switch (G__51116) {
case 1:
return app.common.types.tokens_lib.normalize_set_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.tokens_lib.normalize_set_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.tokens_lib.normalize_set_name.cljs$core$IFn$_invoke$arity$1 = (function (name){
return app.common.path_names.join_path.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.split_set_name(name),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),app.common.types.tokens_lib.set_separator,new cljs.core.Keyword(null,"with-spaces?","with-spaces?",3340243),false], 0));
}));

(app.common.types.tokens_lib.normalize_set_name.cljs$core$IFn$_invoke$arity$2 = (function (name,relative_to){
return app.common.path_names.join_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(app.common.types.tokens_lib.split_set_name(relative_to)),app.common.types.tokens_lib.split_set_name(name)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),app.common.types.tokens_lib.set_separator,new cljs.core.Keyword(null,"with-spaces?","with-spaces?",3340243),false], 0));
}));

(app.common.types.tokens_lib.normalize_set_name.cljs$lang$maxFixedArity = 2);

/**
 * Check if a set name is normalized (no extra spaces).
 */
app.common.types.tokens_lib.normalized_set_name_QMARK_ = (function app$common$types$tokens_lib$normalized_set_name_QMARK_(name){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,app.common.types.tokens_lib.normalize_set_name.cljs$core$IFn$_invoke$arity$1(name));
});
/**
 * Replaces the last element in a `path` vector with `name`.
 */
app.common.types.tokens_lib.replace_last_path_name = (function app$common$types$tokens_lib$replace_last_path_name(path,name){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(path)),name);
});
/**
 * Generate the name of a set child of `parent-set` adding the name `name`.
 */
app.common.types.tokens_lib.make_child_name = (function app$common$types$tokens_lib$make_child_name(parent_set,name){
var temp__5823__auto__ = app.common.types.tokens_lib.get_set_path(parent_set);
if(cljs.core.truth_(temp__5823__auto__)){
var parent_path = temp__5823__auto__;
return app.common.types.tokens_lib.join_set_path(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent_path,app.common.types.tokens_lib.split_set_name(name)));
} else {
return app.common.types.tokens_lib.normalize_set_name.cljs$core$IFn$_invoke$arity$1(name);
}
});
/**
 * Split set-path
 * 
 *   E.g.: "S-some-set"   -> ["S-" "some-set"]
 *      "G-some-group" -> ["G-" "some-group"]
 */
app.common.types.tokens_lib.split_set_str_path_prefix = (function app$common$types$tokens_lib$split_set_str_path_prefix(path_str){
var G__51143 = path_str;
var G__51143__$1 = (((G__51143 == null))?null:cljs.core.re_matches(/^([SG]-)(.*)/,G__51143));
if((G__51143__$1 == null)){
return null;
} else {
return cljs.core.rest(G__51143__$1);
}
});
app.common.types.tokens_lib.add_set_path_prefix = (function app$common$types$tokens_lib$add_set_path_prefix(set_name_str){
return [app.common.types.tokens_lib.set_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(set_name_str)].join('');
});
app.common.types.tokens_lib.add_set_path_group_prefix = (function app$common$types$tokens_lib$add_set_path_group_prefix(group_path_str){
return [app.common.types.tokens_lib.set_group_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_path_str)].join('');
});
/**
 * Returns token-set paths with prefixes to differentiate between sets and set-groups.
 * 
 *   Sets will be prefixed with `set-prefix` (S-).
 *   Set groups will be prefixed with `set-group-prefix` (G-).
 */
app.common.types.tokens_lib.set_full_path__GT_set_prefixed_full_path = (function app$common$types$tokens_lib$set_full_path__GT_set_prefixed_full_path(full_path){
var set_path = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.add_set_path_group_prefix,cljs.core.butlast(full_path));
var set_name = app.common.types.tokens_lib.add_set_path_prefix(cljs.core.last(full_path));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(set_path,set_name);
});
/**
 * Adds `set-group-prefix` (G-) to the `path` vector elements.
 */
app.common.types.tokens_lib.set_group_path__GT_set_group_prefixed_path = (function app$common$types$tokens_lib$set_group_path__GT_set_group_prefixed_path(path){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.add_set_path_group_prefix,path);
});
app.common.types.tokens_lib.set_group_path__GT_set_group_prefixed_path_str = (function app$common$types$tokens_lib$set_group_path__GT_set_group_prefixed_path_str(path){
return app.common.types.tokens_lib.join_set_path(app.common.types.tokens_lib.set_group_path__GT_set_group_prefixed_path(path));
});
app.common.types.tokens_lib.add_set_group_prefix = (function app$common$types$tokens_lib$add_set_group_prefix(group_path){
return [app.common.types.tokens_lib.set_group_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_path)].join('');
});
app.common.types.tokens_lib.set_name__GT_prefixed_full_path = (function app$common$types$tokens_lib$set_name__GT_prefixed_full_path(name_str){
return app.common.types.tokens_lib.set_full_path__GT_set_prefixed_full_path(app.common.types.tokens_lib.split_set_name(name_str));
});
app.common.types.tokens_lib.get_set_prefixed_path = (function app$common$types$tokens_lib$get_set_prefixed_path(token_set){
var path = app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.get_name(token_set),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),app.common.types.tokens_lib.set_separator], 0));
return app.common.types.tokens_lib.set_full_path__GT_set_prefixed_full_path(path);
});
/**
 * Convert tokens into a nested tree with their name as the path.
 *   Optionally use `update-token-fn` option to transform the token.
 */
app.common.types.tokens_lib.tokens_tree = (function app$common$types$tokens_lib$tokens_tree(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51518 = arguments.length;
var i__5750__auto___51519 = (0);
while(true){
if((i__5750__auto___51519 < len__5749__auto___51518)){
args__5755__auto__.push((arguments[i__5750__auto___51519]));

var G__51520 = (i__5750__auto___51519 + (1));
i__5750__auto___51519 = G__51520;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.types.tokens_lib.tokens_tree.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.types.tokens_lib.tokens_tree.cljs$core$IFn$_invoke$arity$variadic = (function (tokens,p__51156){
var map__51157 = p__51156;
var map__51157__$1 = cljs.core.__destructure_map(map__51157);
var update_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51157__$1,new cljs.core.Keyword(null,"update-token-fn","update-token-fn",-805038447),cljs.core.identity);
return cljs.core.reduce_kv((function (acc,_,token){
var path = app.common.types.tokens_lib.get_token_path(token);
return cljs.core.assoc_in(acc,path,(update_token_fn.cljs$core$IFn$_invoke$arity$1 ? update_token_fn.cljs$core$IFn$_invoke$arity$1(token) : update_token_fn.call(null,token)));
}),cljs.core.PersistentArrayMap.EMPTY,tokens);
}));

(app.common.types.tokens_lib.tokens_tree.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.types.tokens_lib.tokens_tree.cljs$lang$applyTo = (function (seq51154){
var G__51155 = cljs.core.first(seq51154);
var seq51154__$1 = cljs.core.next(seq51154);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51155,seq51154__$1);
}));

/**
 * Convert tokens into a nested tree with their name as the path.
 *   Uses the existing token :id to backtrace a token from an external source (StyleDictionary).
 *   The backtrace can't be the name as the name might not exist when the user is creating a token.
 */
app.common.types.tokens_lib.backtrace_tokens_tree = (function app$common$types$tokens_lib$backtrace_tokens_tree(tokens){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__51158){
var vec__51159 = p__51158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51159,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51159,(1),null);
var path = app.common.types.tokens_lib.get_token_path(token);
return cljs.core.assoc_in(cljs.core.assoc_in(acc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokens-tree","tokens-tree",-1251912938)], null),path),token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token)], null),token);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tokens-tree","tokens-tree",-1251912938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.PersistentArrayMap.EMPTY], null),tokens);
});

/**
 * Collection of sets and set groups.
 * @interface
 */
app.common.types.tokens_lib.ITokenSets = function(){};

var app$common$types$tokens_lib$ITokenSets$add_set$dyn_51521 = (function (_,token_set){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.add_set[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,token_set) : m__5374__auto__.call(null,_,token_set));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.add_set["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,token_set) : m__5372__auto__.call(null,_,token_set));
} else {
throw cljs.core.missing_protocol("ITokenSets.add-set",_);
}
}
});
/**
 * Add a set to the library, at the end of the list
 */
app.common.types.tokens_lib.add_set = (function app$common$types$tokens_lib$add_set(_,token_set){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$add_set$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$add_set$arity$2(_,token_set);
} else {
return app$common$types$tokens_lib$ITokenSets$add_set$dyn_51521(_,token_set);
}
});

var app$common$types$tokens_lib$ITokenSets$update_set$dyn_51522 = (function (_,id,f){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.update_set[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,id,f) : m__5374__auto__.call(null,_,id,f));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.update_set["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,id,f) : m__5372__auto__.call(null,_,id,f));
} else {
throw cljs.core.missing_protocol("ITokenSets.update-set",_);
}
}
});
/**
 * Modify a set in the library
 */
app.common.types.tokens_lib.update_set = (function app$common$types$tokens_lib$update_set(_,id,f){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$update_set$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$update_set$arity$3(_,id,f);
} else {
return app$common$types$tokens_lib$ITokenSets$update_set$dyn_51522(_,id,f);
}
});

var app$common$types$tokens_lib$ITokenSets$delete_set$dyn_51523 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.delete_set[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.delete_set["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenSets.delete-set",_);
}
}
});
/**
 * Delete a set in the library and remove it from all themes
 */
app.common.types.tokens_lib.delete_set = (function app$common$types$tokens_lib$delete_set(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$delete_set$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$delete_set$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenSets$delete_set$dyn_51523(_,id);
}
});

var app$common$types$tokens_lib$ITokenSets$move_set$dyn_51526 = (function (_,from_path,to_path,before_path,before_group_QMARK_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.move_set[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$5(_,from_path,to_path,before_path,before_group_QMARK_) : m__5374__auto__.call(null,_,from_path,to_path,before_path,before_group_QMARK_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.move_set["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$5(_,from_path,to_path,before_path,before_group_QMARK_) : m__5372__auto__.call(null,_,from_path,to_path,before_path,before_group_QMARK_));
} else {
throw cljs.core.missing_protocol("ITokenSets.move-set",_);
}
}
});
/**
 * Move token set at `from-path` to `to-path` and order it before `before-path` with `before-group?`
 */
app.common.types.tokens_lib.move_set = (function app$common$types$tokens_lib$move_set(_,from_path,to_path,before_path,before_group_QMARK_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$move_set$arity$5 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$move_set$arity$5(_,from_path,to_path,before_path,before_group_QMARK_);
} else {
return app$common$types$tokens_lib$ITokenSets$move_set$dyn_51526(_,from_path,to_path,before_path,before_group_QMARK_);
}
});

var app$common$types$tokens_lib$ITokenSets$move_set_group$dyn_51528 = (function (_,from_path,to_path,before_path,before_group_QMARK_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.move_set_group[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$5(_,from_path,to_path,before_path,before_group_QMARK_) : m__5374__auto__.call(null,_,from_path,to_path,before_path,before_group_QMARK_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.move_set_group["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$5(_,from_path,to_path,before_path,before_group_QMARK_) : m__5372__auto__.call(null,_,from_path,to_path,before_path,before_group_QMARK_));
} else {
throw cljs.core.missing_protocol("ITokenSets.move-set-group",_);
}
}
});
/**
 * Move token set group at `from-path` to `to-path` and order it before `before-path` with `before-group?`.
 */
app.common.types.tokens_lib.move_set_group = (function app$common$types$tokens_lib$move_set_group(_,from_path,to_path,before_path,before_group_QMARK_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$move_set_group$arity$5 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$move_set_group$arity$5(_,from_path,to_path,before_path,before_group_QMARK_);
} else {
return app$common$types$tokens_lib$ITokenSets$move_set_group$dyn_51528(_,from_path,to_path,before_path,before_group_QMARK_);
}
});

var app$common$types$tokens_lib$ITokenSets$rename_set_group$dyn_51529 = (function (_,from_path_str,to_path_str){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.rename_set_group[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,from_path_str,to_path_str) : m__5374__auto__.call(null,_,from_path_str,to_path_str));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.rename_set_group["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,from_path_str,to_path_str) : m__5372__auto__.call(null,_,from_path_str,to_path_str));
} else {
throw cljs.core.missing_protocol("ITokenSets.rename-set-group",_);
}
}
});
/**
 * Renames set groups and all child set names from `from-path-str` to `to-path-str`
 */
app.common.types.tokens_lib.rename_set_group = (function app$common$types$tokens_lib$rename_set_group(_,from_path_str,to_path_str){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$rename_set_group$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$rename_set_group$arity$3(_,from_path_str,to_path_str);
} else {
return app$common$types$tokens_lib$ITokenSets$rename_set_group$dyn_51529(_,from_path_str,to_path_str);
}
});

var app$common$types$tokens_lib$ITokenSets$set_count$dyn_51530 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.set_count[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.set_count["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenSets.set-count",_);
}
}
});
/**
 * Get the total number if sets in the library
 */
app.common.types.tokens_lib.set_count = (function app$common$types$tokens_lib$set_count(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$set_count$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$set_count$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenSets$set_count$dyn_51530(_);
}
});

var app$common$types$tokens_lib$ITokenSets$get_set$dyn_51531 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_set[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_set["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenSets.get-set",_);
}
}
});
/**
 * Get a set looking by id
 */
app.common.types.tokens_lib.get_set = (function app$common$types$tokens_lib$get_set(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$get_set$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$get_set$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenSets$get_set$dyn_51531(_,id);
}
});

var app$common$types$tokens_lib$ITokenSets$get_set_by_name$dyn_51532 = (function (_,name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_set_by_name[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,name) : m__5374__auto__.call(null,_,name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_set_by_name["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,name) : m__5372__auto__.call(null,_,name));
} else {
throw cljs.core.missing_protocol("ITokenSets.get-set-by-name",_);
}
}
});
/**
 * Get a set looking by name
 */
app.common.types.tokens_lib.get_set_by_name = (function app$common$types$tokens_lib$get_set_by_name(_,name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$get_set_by_name$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$get_set_by_name$arity$2(_,name);
} else {
return app$common$types$tokens_lib$ITokenSets$get_set_by_name$dyn_51532(_,name);
}
});

var app$common$types$tokens_lib$ITokenSets$get_sets$dyn_51533 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_sets[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_sets["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenSets.get-sets",_);
}
}
});
/**
 * Get an ordered sequence of all sets in the library
 */
app.common.types.tokens_lib.get_sets = (function app$common$types$tokens_lib$get_sets(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$get_sets$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$get_sets$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenSets$get_sets$dyn_51533(_);
}
});

var app$common$types$tokens_lib$ITokenSets$get_set_names$dyn_51536 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_set_names[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_set_names["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenSets.get-set-names",_);
}
}
});
/**
 * Get an ordered sequence of all sets names in the library
 */
app.common.types.tokens_lib.get_set_names = (function app$common$types$tokens_lib$get_set_names(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$get_set_names$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$get_set_names$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenSets$get_set_names$dyn_51536(_);
}
});

var app$common$types$tokens_lib$ITokenSets$get_set_tree$dyn_51540 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_set_tree[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_set_tree["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenSets.get-set-tree",_);
}
}
});
/**
 * Get a nested tree of all sets in the library
 */
app.common.types.tokens_lib.get_set_tree = (function app$common$types$tokens_lib$get_set_tree(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$get_set_tree$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$get_set_tree$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenSets$get_set_tree$dyn_51540(_);
}
});

var app$common$types$tokens_lib$ITokenSets$get_sets_at_path$dyn_51542 = (function (_,path_str){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_sets_at_path[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,path_str) : m__5374__auto__.call(null,_,path_str));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_sets_at_path["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,path_str) : m__5372__auto__.call(null,_,path_str));
} else {
throw cljs.core.missing_protocol("ITokenSets.get-sets-at-path",_);
}
}
});
/**
 * Get an ordered sequence of sets under `path` in the library
 */
app.common.types.tokens_lib.get_sets_at_path = (function app$common$types$tokens_lib$get_sets_at_path(_,path_str){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenSets$get_sets_at_path$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenSets$get_sets_at_path$arity$2(_,path_str);
} else {
return app$common$types$tokens_lib$ITokenSets$get_sets_at_path$dyn_51542(_,path_str);
}
});

app.common.types.tokens_lib.schema_COLON_token_set_node = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.common.types.tokens-lib","node","app.common.types.tokens-lib/node",-2091664271),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.tokens_lib.token_set_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("app.common.types.tokens-lib","node","app.common.types.tokens-lib/node",-2091664271)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.data.ordered_map_QMARK_], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("app.common.types.tokens-lib","node","app.common.types.tokens-lib/node",-2091664271)], null)], null);
app.common.types.tokens_lib.not_repeated_ids = (function app$common$types$tokens_lib$not_repeated_ids(sets){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_id,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,app.common.types.tokens_lib.TokenSet),cljs.core.tree_seq(app.common.data.ordered_map_QMARK_,cljs.core.vals,sets)));
var ids_SINGLEQUOTE_ = cljs.core.set(ids);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ids),cljs.core.count(ids_SINGLEQUOTE_));
});
app.common.types.tokens_lib.schema_COLON_token_sets = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"TokenSets"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),app.common.types.tokens_lib.schema_COLON_token_set_node], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.data.ordered_map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.tokens_lib.not_repeated_ids], null)], null);

/**
 * @interface
 */
app.common.types.tokens_lib.ITokenTheme = function(){};

var app$common$types$tokens_lib$ITokenTheme$set_sets$dyn_51544 = (function (_,set_names){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.set_sets[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,set_names) : m__5374__auto__.call(null,_,set_names));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.set_sets["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,set_names) : m__5372__auto__.call(null,_,set_names));
} else {
throw cljs.core.missing_protocol("ITokenTheme.set-sets",_);
}
}
});
/**
 * set the active token sets
 */
app.common.types.tokens_lib.set_sets = (function app$common$types$tokens_lib$set_sets(_,set_names){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenTheme$set_sets$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenTheme$set_sets$arity$2(_,set_names);
} else {
return app$common$types$tokens_lib$ITokenTheme$set_sets$dyn_51544(_,set_names);
}
});

var app$common$types$tokens_lib$ITokenTheme$enable_set$dyn_51546 = (function (_,set_name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.enable_set[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,set_name) : m__5374__auto__.call(null,_,set_name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.enable_set["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,set_name) : m__5372__auto__.call(null,_,set_name));
} else {
throw cljs.core.missing_protocol("ITokenTheme.enable-set",_);
}
}
});
/**
 * enable one set in theme
 */
app.common.types.tokens_lib.enable_set = (function app$common$types$tokens_lib$enable_set(_,set_name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenTheme$enable_set$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenTheme$enable_set$arity$2(_,set_name);
} else {
return app$common$types$tokens_lib$ITokenTheme$enable_set$dyn_51546(_,set_name);
}
});

var app$common$types$tokens_lib$ITokenTheme$enable_sets$dyn_51547 = (function (_,set_names){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.enable_sets[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,set_names) : m__5374__auto__.call(null,_,set_names));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.enable_sets["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,set_names) : m__5372__auto__.call(null,_,set_names));
} else {
throw cljs.core.missing_protocol("ITokenTheme.enable-sets",_);
}
}
});
/**
 * enable several sets in theme
 */
app.common.types.tokens_lib.enable_sets = (function app$common$types$tokens_lib$enable_sets(_,set_names){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenTheme$enable_sets$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenTheme$enable_sets$arity$2(_,set_names);
} else {
return app$common$types$tokens_lib$ITokenTheme$enable_sets$dyn_51547(_,set_names);
}
});

var app$common$types$tokens_lib$ITokenTheme$disable_set$dyn_51550 = (function (_,set_name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.disable_set[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,set_name) : m__5374__auto__.call(null,_,set_name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.disable_set["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,set_name) : m__5372__auto__.call(null,_,set_name));
} else {
throw cljs.core.missing_protocol("ITokenTheme.disable-set",_);
}
}
});
/**
 * disable one set in theme
 */
app.common.types.tokens_lib.disable_set = (function app$common$types$tokens_lib$disable_set(_,set_name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenTheme$disable_set$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenTheme$disable_set$arity$2(_,set_name);
} else {
return app$common$types$tokens_lib$ITokenTheme$disable_set$dyn_51550(_,set_name);
}
});

var app$common$types$tokens_lib$ITokenTheme$disable_sets$dyn_51553 = (function (_,set_names){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.disable_sets[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,set_names) : m__5374__auto__.call(null,_,set_names));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.disable_sets["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,set_names) : m__5372__auto__.call(null,_,set_names));
} else {
throw cljs.core.missing_protocol("ITokenTheme.disable-sets",_);
}
}
});
/**
 * disable several sets in theme
 */
app.common.types.tokens_lib.disable_sets = (function app$common$types$tokens_lib$disable_sets(_,set_names){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenTheme$disable_sets$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenTheme$disable_sets$arity$2(_,set_names);
} else {
return app$common$types$tokens_lib$ITokenTheme$disable_sets$dyn_51553(_,set_names);
}
});

var app$common$types$tokens_lib$ITokenTheme$toggle_set$dyn_51554 = (function (_,set_name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.toggle_set[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,set_name) : m__5374__auto__.call(null,_,set_name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.toggle_set["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,set_name) : m__5372__auto__.call(null,_,set_name));
} else {
throw cljs.core.missing_protocol("ITokenTheme.toggle-set",_);
}
}
});
/**
 * toggle a set enabled / disabled in the theme
 */
app.common.types.tokens_lib.toggle_set = (function app$common$types$tokens_lib$toggle_set(_,set_name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenTheme$toggle_set$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenTheme$toggle_set$arity$2(_,set_name);
} else {
return app$common$types$tokens_lib$ITokenTheme$toggle_set$dyn_51554(_,set_name);
}
});

var app$common$types$tokens_lib$ITokenTheme$update_set_name$dyn_51555 = (function (_,prev_set_name,set_name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.update_set_name[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,prev_set_name,set_name) : m__5374__auto__.call(null,_,prev_set_name,set_name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.update_set_name["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,prev_set_name,set_name) : m__5372__auto__.call(null,_,prev_set_name,set_name));
} else {
throw cljs.core.missing_protocol("ITokenTheme.update-set-name",_);
}
}
});
/**
 * update set-name when it exists
 */
app.common.types.tokens_lib.update_set_name = (function app$common$types$tokens_lib$update_set_name(_,prev_set_name,set_name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenTheme$update_set_name$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokenTheme$update_set_name$arity$3(_,prev_set_name,set_name);
} else {
return app$common$types$tokens_lib$ITokenTheme$update_set_name$dyn_51555(_,prev_set_name,set_name);
}
});

var app$common$types$tokens_lib$ITokenTheme$theme_matches_group_name$dyn_51558 = (function (_,group,name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.theme_matches_group_name[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,group,name) : m__5374__auto__.call(null,_,group,name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.theme_matches_group_name["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,group,name) : m__5372__auto__.call(null,_,group,name));
} else {
throw cljs.core.missing_protocol("ITokenTheme.theme-matches-group-name",_);
}
}
});
/**
 * if a theme matches the given group & name
 */
app.common.types.tokens_lib.theme_matches_group_name = (function app$common$types$tokens_lib$theme_matches_group_name(_,group,name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenTheme$theme_matches_group_name$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokenTheme$theme_matches_group_name$arity$3(_,group,name);
} else {
return app$common$types$tokens_lib$ITokenTheme$theme_matches_group_name$dyn_51558(_,group,name);
}
});

var app$common$types$tokens_lib$ITokenTheme$hidden_theme_QMARK_$dyn_51559 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.hidden_theme_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.hidden_theme_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenTheme.hidden-theme?",_);
}
}
});
/**
 * if a theme is the (from the user ui) hidden temporary theme
 */
app.common.types.tokens_lib.hidden_theme_QMARK_ = (function app$common$types$tokens_lib$hidden_theme_QMARK_(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenTheme$hidden_theme_QMARK_$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenTheme$hidden_theme_QMARK_$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenTheme$hidden_theme_QMARK_$dyn_51559(_);
}
});

app.common.types.tokens_lib.hidden_theme_id = app.common.uuid.zero;
app.common.types.tokens_lib.hidden_theme_group = "";
app.common.types.tokens_lib.hidden_theme_name = "__PENPOT__HIDDEN__TOKEN__THEME__";

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.protocols.Datafiable}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {app.common.types.tokens_lib.INamedItem}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {app.common.types.tokens_lib.ITokenTheme}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.common.types.tokens_lib.TokenTheme = (function (id,name,group,description,is_source,external_id,modified_at,sets,__meta,__extmap,__hash){
this.id = id;
this.name = name;
this.group = group;
this.description = description;
this.is_source = is_source;
this.external_id = external_id;
this.modified_at = modified_at;
this.sets = sets;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k51187,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__51191 = k51187;
var G__51191__$1 = (((G__51191 instanceof cljs.core.Keyword))?G__51191.fqn:null);
switch (G__51191__$1) {
case "id":
return self__.id;

break;
case "name":
return self__.name;

break;
case "group":
return self__.group;

break;
case "description":
return self__.description;

break;
case "is-source":
return self__.is_source;

break;
case "external-id":
return self__.external_id;

break;
case "modified-at":
return self__.modified_at;

break;
case "sets":
return self__.sets;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51187,else__5326__auto__);

}
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__51192){
var vec__51193 = p__51192;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51193,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51193,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#app.common.types.tokens-lib.TokenTheme{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"group","group",582596132),self__.group],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"is-source","is-source",562449867),self__.is_source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"external-id","external-id",-456527727),self__.external_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),self__.modified_at],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sets","sets",400955582),self__.sets],null))], null),self__.__extmap));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51186){
var self__ = this;
var G__51186__$1 = this;
return (new cljs.core.RecordIter((0),G__51186__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"is-source","is-source",562449867),new cljs.core.Keyword(null,"external-id","external-id",-456527727),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword(null,"sets","sets",400955582)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,self__.is_source,self__.external_id,self__.modified_at,self__.sets,self__.__meta,self__.__extmap,self__.__hash));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (92571567 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51188,other51189){
var self__ = this;
var this51188__$1 = this;
return (((!((other51189 == null)))) && ((((this51188__$1.constructor === other51189.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51188__$1.id,other51189.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51188__$1.name,other51189.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51188__$1.group,other51189.group)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51188__$1.description,other51189.description)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51188__$1.is_source,other51189.is_source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51188__$1.external_id,other51189.external_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51188__$1.modified_at,other51189.modified_at)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51188__$1.sets,other51189.sets)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51188__$1.__extmap,other51189.__extmap)))))))))))))))))))));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$INamedItem$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$INamedItem$get_id$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.id;
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$INamedItem$get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$INamedItem$get_description$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.description;
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$INamedItem$get_modified_at$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.modified_at;
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$INamedItem$rename$arity$2 = (function (this$,new_name){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"name","name",1843675177),new_name);
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$INamedItem$reid$arity$2 = (function (this$,new_id){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"id","id",-1388402092),new_id);
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$INamedItem$set_description$arity$2 = (function (this$,new_description){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"description","description",-1428560544),new_description);
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"is-source","is-source",562449867),null,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),null,new cljs.core.Keyword(null,"external-id","external-id",-456527727),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"sets","sets",400955582),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,self__.is_source,self__.external_id,self__.modified_at,self__.sets,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k51187){
var self__ = this;
var this__5330__auto____$1 = this;
var G__51196 = k51187;
var G__51196__$1 = (((G__51196 instanceof cljs.core.Keyword))?G__51196.fqn:null);
switch (G__51196__$1) {
case "id":
case "name":
case "group":
case "description":
case "is-source":
case "external-id":
case "modified-at":
case "sets":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51187);

}
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__51186){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__51197 = cljs.core.keyword_identical_QMARK_;
var expr__51198 = k__5332__auto__;
if(cljs.core.truth_((pred__51197.cljs$core$IFn$_invoke$arity$2 ? pred__51197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__51198) : pred__51197.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__51198)))){
return (new app.common.types.tokens_lib.TokenTheme(G__51186,self__.name,self__.group,self__.description,self__.is_source,self__.external_id,self__.modified_at,self__.sets,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51197.cljs$core$IFn$_invoke$arity$2 ? pred__51197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__51198) : pred__51197.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__51198)))){
return (new app.common.types.tokens_lib.TokenTheme(self__.id,G__51186,self__.group,self__.description,self__.is_source,self__.external_id,self__.modified_at,self__.sets,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51197.cljs$core$IFn$_invoke$arity$2 ? pred__51197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),expr__51198) : pred__51197.call(null,new cljs.core.Keyword(null,"group","group",582596132),expr__51198)))){
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,G__51186,self__.description,self__.is_source,self__.external_id,self__.modified_at,self__.sets,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51197.cljs$core$IFn$_invoke$arity$2 ? pred__51197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"description","description",-1428560544),expr__51198) : pred__51197.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__51198)))){
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,G__51186,self__.is_source,self__.external_id,self__.modified_at,self__.sets,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51197.cljs$core$IFn$_invoke$arity$2 ? pred__51197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-source","is-source",562449867),expr__51198) : pred__51197.call(null,new cljs.core.Keyword(null,"is-source","is-source",562449867),expr__51198)))){
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,G__51186,self__.external_id,self__.modified_at,self__.sets,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51197.cljs$core$IFn$_invoke$arity$2 ? pred__51197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"external-id","external-id",-456527727),expr__51198) : pred__51197.call(null,new cljs.core.Keyword(null,"external-id","external-id",-456527727),expr__51198)))){
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,self__.is_source,G__51186,self__.modified_at,self__.sets,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51197.cljs$core$IFn$_invoke$arity$2 ? pred__51197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),expr__51198) : pred__51197.call(null,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),expr__51198)))){
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,self__.is_source,self__.external_id,G__51186,self__.sets,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51197.cljs$core$IFn$_invoke$arity$2 ? pred__51197.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sets","sets",400955582),expr__51198) : pred__51197.call(null,new cljs.core.Keyword(null,"sets","sets",400955582),expr__51198)))){
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,self__.is_source,self__.external_id,self__.modified_at,G__51186,self__.__meta,self__.__extmap,null));
} else {
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,self__.is_source,self__.external_id,self__.modified_at,self__.sets,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__51186),null));
}
}
}
}
}
}
}
}
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"group","group",582596132),self__.group,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"description","description",-1428560544),self__.description,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"is-source","is-source",562449867),self__.is_source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"external-id","external-id",-456527727),self__.external_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),self__.modified_at,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sets","sets",400955582),self__.sets,null))], null),self__.__extmap));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenTheme.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this$__$1);
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__51186){
var self__ = this;
var this__5322__auto____$1 = this;
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,self__.is_source,self__.external_id,self__.modified_at,self__.sets,G__51186,self__.__extmap,self__.__hash));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$set_sets$arity$2 = (function (_,set_names){
var self__ = this;
var ___$1 = this;
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,self__.is_source,self__.external_id,app.common.time.now(),set_names,null,null,null));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$enable_sets$arity$2 = (function (this$,set_names){
var self__ = this;
var this$__$1 = this;
return this$__$1.app$common$types$tokens_lib$ITokenTheme$set_sets$arity$2(null,clojure.set.union.cljs$core$IFn$_invoke$arity$2(self__.sets,set_names));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$enable_set$arity$2 = (function (this$,set_name){
var self__ = this;
var this$__$1 = this;
return this$__$1.app$common$types$tokens_lib$ITokenTheme$set_sets$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.sets,set_name));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$disable_sets$arity$2 = (function (this$,set_names){
var self__ = this;
var this$__$1 = this;
return this$__$1.app$common$types$tokens_lib$ITokenTheme$set_sets$arity$2(null,(function (){var or__5025__auto__ = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(self__.sets,set_names);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})());
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$disable_set$arity$2 = (function (this$,set_name){
var self__ = this;
var this$__$1 = this;
return this$__$1.app$common$types$tokens_lib$ITokenTheme$set_sets$arity$2(null,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.sets,set_name));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$update_set_name$arity$3 = (function (this$,prev_set_name,set_name){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.sets,prev_set_name))){
return (new app.common.types.tokens_lib.TokenTheme(self__.id,self__.name,self__.group,self__.description,self__.is_source,self__.external_id,app.common.time.now(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.sets,prev_set_name),set_name),null,null,null));
} else {
return this$__$1;
}
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$theme_matches_group_name$arity$3 = (function (this$,group__$1,name__$1){
var self__ = this;
var this$__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(this$__$1),group__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this$__$1),name__$1)));
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$hidden_theme_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.app$common$types$tokens_lib$ITokenTheme$theme_matches_group_name$arity$3(null,app.common.types.tokens_lib.hidden_theme_group,app.common.types.tokens_lib.hidden_theme_name);
}));

(app.common.types.tokens_lib.TokenTheme.prototype.app$common$types$tokens_lib$ITokenTheme$toggle_set$arity$2 = (function (this$,set_name){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.sets.cljs$core$IFn$_invoke$arity$1 ? self__.sets.cljs$core$IFn$_invoke$arity$1(set_name) : self__.sets.call(null,set_name)))){
return this$__$1.app$common$types$tokens_lib$ITokenTheme$disable_set$arity$2(null,set_name);
} else {
return this$__$1.app$common$types$tokens_lib$ITokenTheme$enable_set$arity$2(null,set_name);
}
}));

(app.common.types.tokens_lib.TokenTheme.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"group","group",-2071839637,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"is-source","is-source",-2091985902,null),new cljs.core.Symbol(null,"external-id","external-id",1184003800,null),new cljs.core.Symbol(null,"modified-at","modified-at",708483348,null),new cljs.core.Symbol(null,"sets","sets",2041487109,null)], null);
}));

(app.common.types.tokens_lib.TokenTheme.cljs$lang$type = true);

(app.common.types.tokens_lib.TokenTheme.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"app.common.types.tokens-lib/TokenTheme",null,(1),null));
}));

(app.common.types.tokens_lib.TokenTheme.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"app.common.types.tokens-lib/TokenTheme");
}));

/**
 * Positional factory function for app.common.types.tokens-lib/TokenTheme.
 */
app.common.types.tokens_lib.__GT_TokenTheme = (function app$common$types$tokens_lib$__GT_TokenTheme(id,name,group,description,is_source,external_id,modified_at,sets){
return (new app.common.types.tokens_lib.TokenTheme(id,name,group,description,is_source,external_id,modified_at,sets,null,null,null));
});

/**
 * Factory function for app.common.types.tokens-lib/TokenTheme, taking a map of keywords to field values.
 */
app.common.types.tokens_lib.map__GT_TokenTheme = (function app$common$types$tokens_lib$map__GT_TokenTheme(G__51190){
var extmap__5365__auto__ = (function (){var G__51200 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51190,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"is-source","is-source",562449867),new cljs.core.Keyword(null,"external-id","external-id",-456527727),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword(null,"sets","sets",400955582)], 0));
if(cljs.core.record_QMARK_(G__51190)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51200);
} else {
return G__51200;
}
})();
return (new app.common.types.tokens_lib.TokenTheme(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__51190),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__51190),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(G__51190),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__51190),new cljs.core.Keyword(null,"is-source","is-source",562449867).cljs$core$IFn$_invoke$arity$1(G__51190),new cljs.core.Keyword(null,"external-id","external-id",-456527727).cljs$core$IFn$_invoke$arity$1(G__51190),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(G__51190),new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(G__51190),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,app.common.types.tokens_lib.TokenTheme,(function (obj){
cljs.core._STAR_out_STAR_.write("#penpot/token-theme ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(clojure.datafy.datafy(obj));
}));
(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
cljs.core._write(writer,"#penpot/token-theme ");

return cljs.core._pr_writer(clojure.datafy.datafy(this$__$1),writer,opts);
}));

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IEncodeJS$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokenTheme.prototype.cljs$core$IEncodeJS$_clj__GT_js$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.clj__GT_js(clojure.datafy.datafy(this$__$1));
}));
app.common.types.tokens_lib.token_theme_QMARK_ = (function app$common$types$tokens_lib$token_theme_QMARK_(o){
return (o instanceof app.common.types.tokens_lib.TokenTheme);
});
app.common.types.tokens_lib.schema_COLON_token_theme_attrs = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"TokenTheme"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-source","is-source",562449867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"external-id","external-id",-456527727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sets","sets",400955582),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5)], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null);
app.common.types.tokens_lib.schema_COLON_token_theme = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),app.common.schema.required_keys.cljs$core$IFn$_invoke$arity$1(app.common.types.tokens_lib.schema_COLON_token_theme_attrs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.tokens_lib.token_theme_QMARK_], null)], null);
app.common.types.tokens_lib.check_token_theme_attrs = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.schema_COLON_token_theme_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid params for token-theme"], 0));
app.common.types.tokens_lib.check_token_theme = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.schema_COLON_token_theme,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected a valid token-theme"], 0));
/**
 * Top level theme groups have an empty string as the theme group.
 */
app.common.types.tokens_lib.top_level_theme_group_name = "";
app.common.types.tokens_lib.top_level_theme_group_QMARK_ = (function app$common$types$tokens_lib$top_level_theme_group_QMARK_(group){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,app.common.types.tokens_lib.top_level_theme_group_name);
});
app.common.types.tokens_lib.make_token_theme = (function app$common$types$tokens_lib$make_token_theme(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51568 = arguments.length;
var i__5750__auto___51569 = (0);
while(true){
if((i__5750__auto___51569 < len__5749__auto___51568)){
args__5755__auto__.push((arguments[i__5750__auto___51569]));

var G__51572 = (i__5750__auto___51569 + (1));
i__5750__auto___51569 = G__51572;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic = (function (p__51206){
var map__51207 = p__51206;
var map__51207__$1 = cljs.core.__destructure_map(map__51207);
var attrs = map__51207__$1;
var new_id = app.common.uuid.next();
return app.common.types.tokens_lib.map__GT_TokenTheme(app.common.types.tokens_lib.check_token_theme_attrs(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"id","id",-1388402092),(function (id){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(((typeof id === 'string')?app.common.uuid.parse_STAR_(id):id),new_id);
})),new cljs.core.Keyword(null,"group","group",582596132),app.common.data.nilv,app.common.types.tokens_lib.top_level_theme_group_name),new cljs.core.Keyword(null,"description","description",-1428560544),app.common.data.nilv,""),new cljs.core.Keyword(null,"is-source","is-source",562449867),app.common.data.nilv,false),new cljs.core.Keyword(null,"external-id","external-id",-456527727),(function (p1__51201_SHARP_){
var or__5025__auto__ = p1__51201_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_id);
}
})),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),(function (p1__51202_SHARP_){
var or__5025__auto__ = p1__51202_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.time.now();
}
})),new cljs.core.Keyword(null,"sets","sets",400955582),cljs.core.set)));
}));

(app.common.types.tokens_lib.make_token_theme.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.types.tokens_lib.make_token_theme.cljs$lang$applyTo = (function (seq51203){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51203));
}));

app.common.types.tokens_lib.make_hidden_theme = (function app$common$types$tokens_lib$make_hidden_theme(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51580 = arguments.length;
var i__5750__auto___51581 = (0);
while(true){
if((i__5750__auto___51581 < len__5749__auto___51580)){
args__5755__auto__.push((arguments[i__5750__auto___51581]));

var G__51582 = (i__5750__auto___51581 + (1));
i__5750__auto___51581 = G__51582;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.types.tokens_lib.make_hidden_theme.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.types.tokens_lib.make_hidden_theme.cljs$core$IFn$_invoke$arity$variadic = (function (p__51213){
var map__51214 = p__51213;
var map__51214__$1 = cljs.core.__destructure_map(map__51214);
var attrs = map__51214__$1;
return app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.zero),new cljs.core.Keyword(null,"external-id","external-id",-456527727),""),new cljs.core.Keyword(null,"group","group",582596132),app.common.types.tokens_lib.hidden_theme_group),new cljs.core.Keyword(null,"name","name",1843675177),app.common.types.tokens_lib.hidden_theme_name)], 0));
}));

(app.common.types.tokens_lib.make_hidden_theme.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.types.tokens_lib.make_hidden_theme.cljs$lang$applyTo = (function (seq51212){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51212));
}));

app.common.types.tokens_lib.theme_separator = "/";
app.common.types.tokens_lib.join_theme_path = (function app$common$types$tokens_lib$join_theme_path(group,name){
return app.common.path_names.join_path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,name], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),app.common.types.tokens_lib.theme_separator,new cljs.core.Keyword(null,"with-spaces?","with-spaces?",3340243),false], 0));
});
app.common.types.tokens_lib.get_theme_path = (function app$common$types$tokens_lib$get_theme_path(theme){
return app.common.types.tokens_lib.join_theme_path(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme));
});
app.common.types.tokens_lib.split_theme_path = (function app$common$types$tokens_lib$split_theme_path(path){
return app.common.path_names.split_group_name.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),app.common.types.tokens_lib.theme_separator,new cljs.core.Keyword(null,"with-spaces?","with-spaces?",3340243),false], 0));
});
app.common.types.tokens_lib.hidden_theme_path = app.common.types.tokens_lib.join_theme_path(app.common.types.tokens_lib.hidden_theme_group,app.common.types.tokens_lib.hidden_theme_name);

/**
 * Collection of themes in groups
 * @interface
 */
app.common.types.tokens_lib.ITokenThemes = function(){};

var app$common$types$tokens_lib$ITokenThemes$add_theme$dyn_51587 = (function (_,token_theme){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.add_theme[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,token_theme) : m__5374__auto__.call(null,_,token_theme));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.add_theme["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,token_theme) : m__5372__auto__.call(null,_,token_theme));
} else {
throw cljs.core.missing_protocol("ITokenThemes.add-theme",_);
}
}
});
/**
 * add a theme to the library, at the end
 */
app.common.types.tokens_lib.add_theme = (function app$common$types$tokens_lib$add_theme(_,token_theme){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$add_theme$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$add_theme$arity$2(_,token_theme);
} else {
return app$common$types$tokens_lib$ITokenThemes$add_theme$dyn_51587(_,token_theme);
}
});

var app$common$types$tokens_lib$ITokenThemes$update_theme$dyn_51590 = (function (_,id,f){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.update_theme[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,id,f) : m__5374__auto__.call(null,_,id,f));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.update_theme["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,id,f) : m__5372__auto__.call(null,_,id,f));
} else {
throw cljs.core.missing_protocol("ITokenThemes.update-theme",_);
}
}
});
/**
 * modify a theme in the ilbrary
 */
app.common.types.tokens_lib.update_theme = (function app$common$types$tokens_lib$update_theme(_,id,f){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$update_theme$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$update_theme$arity$3(_,id,f);
} else {
return app$common$types$tokens_lib$ITokenThemes$update_theme$dyn_51590(_,id,f);
}
});

var app$common$types$tokens_lib$ITokenThemes$delete_theme$dyn_51594 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.delete_theme[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.delete_theme["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenThemes.delete-theme",_);
}
}
});
/**
 * delete a theme in the library
 */
app.common.types.tokens_lib.delete_theme = (function app$common$types$tokens_lib$delete_theme(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$delete_theme$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$delete_theme$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenThemes$delete_theme$dyn_51594(_,id);
}
});

var app$common$types$tokens_lib$ITokenThemes$theme_count$dyn_51595 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.theme_count[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.theme_count["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenThemes.theme-count",_);
}
}
});
/**
 * get the total number if themes in the library
 */
app.common.types.tokens_lib.theme_count = (function app$common$types$tokens_lib$theme_count(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$theme_count$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$theme_count$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenThemes$theme_count$dyn_51595(_);
}
});

var app$common$types$tokens_lib$ITokenThemes$get_theme_tree$dyn_51597 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_theme_tree[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_theme_tree["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenThemes.get-theme-tree",_);
}
}
});
/**
 * get a nested tree of all themes in the library
 */
app.common.types.tokens_lib.get_theme_tree = (function app$common$types$tokens_lib$get_theme_tree(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$get_theme_tree$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$get_theme_tree$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenThemes$get_theme_tree$dyn_51597(_);
}
});

var app$common$types$tokens_lib$ITokenThemes$get_themes$dyn_51598 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_themes[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_themes["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenThemes.get-themes",_);
}
}
});
/**
 * get an ordered sequence of all themes in the library
 */
app.common.types.tokens_lib.get_themes = (function app$common$types$tokens_lib$get_themes(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$get_themes$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$get_themes$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenThemes$get_themes$dyn_51598(_);
}
});

var app$common$types$tokens_lib$ITokenThemes$get_theme$dyn_51609 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_theme[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_theme["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenThemes.get-theme",_);
}
}
});
/**
 * get one theme looking for id
 */
app.common.types.tokens_lib.get_theme = (function app$common$types$tokens_lib$get_theme(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenThemes$get_theme$dyn_51609(_,id);
}
});

var app$common$types$tokens_lib$ITokenThemes$get_theme_by_name$dyn_51611 = (function (_,group,name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_theme_by_name[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,group,name) : m__5374__auto__.call(null,_,group,name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_theme_by_name["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,group,name) : m__5372__auto__.call(null,_,group,name));
} else {
throw cljs.core.missing_protocol("ITokenThemes.get-theme-by-name",_);
}
}
});
/**
 * get one theme looking for group and name
 */
app.common.types.tokens_lib.get_theme_by_name = (function app$common$types$tokens_lib$get_theme_by_name(_,group,name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$get_theme_by_name$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$get_theme_by_name$arity$3(_,group,name);
} else {
return app$common$types$tokens_lib$ITokenThemes$get_theme_by_name$dyn_51611(_,group,name);
}
});

var app$common$types$tokens_lib$ITokenThemes$get_theme_groups$dyn_51612 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_theme_groups[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_theme_groups["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenThemes.get-theme-groups",_);
}
}
});
/**
 * get a sequence of group names by order
 */
app.common.types.tokens_lib.get_theme_groups = (function app$common$types$tokens_lib$get_theme_groups(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$get_theme_groups$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$get_theme_groups$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenThemes$get_theme_groups$dyn_51612(_);
}
});

var app$common$types$tokens_lib$ITokenThemes$get_active_theme_paths$dyn_51613 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_active_theme_paths[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_active_theme_paths["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenThemes.get-active-theme-paths",_);
}
}
});
/**
 * get the active theme paths
 */
app.common.types.tokens_lib.get_active_theme_paths = (function app$common$types$tokens_lib$get_active_theme_paths(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$get_active_theme_paths$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$get_active_theme_paths$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenThemes$get_active_theme_paths$dyn_51613(_);
}
});

var app$common$types$tokens_lib$ITokenThemes$get_active_themes$dyn_51614 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_active_themes[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_active_themes["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenThemes.get-active-themes",_);
}
}
});
/**
 * get an ordered sequence of active themes in the library
 */
app.common.types.tokens_lib.get_active_themes = (function app$common$types$tokens_lib$get_active_themes(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$get_active_themes$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$get_active_themes$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenThemes$get_active_themes$dyn_51614(_);
}
});

var app$common$types$tokens_lib$ITokenThemes$set_active_themes$dyn_51615 = (function (_,active_themes){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.set_active_themes[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,active_themes) : m__5374__auto__.call(null,_,active_themes));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.set_active_themes["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,active_themes) : m__5372__auto__.call(null,_,active_themes));
} else {
throw cljs.core.missing_protocol("ITokenThemes.set-active-themes",_);
}
}
});
/**
 * set active themes in library
 */
app.common.types.tokens_lib.set_active_themes = (function app$common$types$tokens_lib$set_active_themes(_,active_themes){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$set_active_themes$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$set_active_themes$arity$2(_,active_themes);
} else {
return app$common$types$tokens_lib$ITokenThemes$set_active_themes$dyn_51615(_,active_themes);
}
});

var app$common$types$tokens_lib$ITokenThemes$theme_active_QMARK_$dyn_51617 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.theme_active_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.theme_active_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenThemes.theme-active?",_);
}
}
});
/**
 * predicate if token theme is active
 */
app.common.types.tokens_lib.theme_active_QMARK_ = (function app$common$types$tokens_lib$theme_active_QMARK_(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$theme_active_QMARK_$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$theme_active_QMARK_$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenThemes$theme_active_QMARK_$dyn_51617(_,id);
}
});

var app$common$types$tokens_lib$ITokenThemes$activate_theme$dyn_51621 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.activate_theme[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.activate_theme["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenThemes.activate-theme",_);
}
}
});
/**
 * adds theme from the active-themes
 */
app.common.types.tokens_lib.activate_theme = (function app$common$types$tokens_lib$activate_theme(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$activate_theme$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$activate_theme$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenThemes$activate_theme$dyn_51621(_,id);
}
});

var app$common$types$tokens_lib$ITokenThemes$deactivate_theme$dyn_51622 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.deactivate_theme[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.deactivate_theme["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenThemes.deactivate-theme",_);
}
}
});
/**
 * removes theme from the active-themes
 */
app.common.types.tokens_lib.deactivate_theme = (function app$common$types$tokens_lib$deactivate_theme(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$deactivate_theme$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$deactivate_theme$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenThemes$deactivate_theme$dyn_51622(_,id);
}
});

var app$common$types$tokens_lib$ITokenThemes$toggle_theme_active$dyn_51623 = (function (_,id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.toggle_theme_active[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5374__auto__.call(null,_,id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.toggle_theme_active["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,id) : m__5372__auto__.call(null,_,id));
} else {
throw cljs.core.missing_protocol("ITokenThemes.toggle-theme-active",_);
}
}
});
/**
 * toggles theme in the active-themes
 */
app.common.types.tokens_lib.toggle_theme_active = (function app$common$types$tokens_lib$toggle_theme_active(_,id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$toggle_theme_active$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$toggle_theme_active$arity$2(_,id);
} else {
return app$common$types$tokens_lib$ITokenThemes$toggle_theme_active$dyn_51623(_,id);
}
});

var app$common$types$tokens_lib$ITokenThemes$get_hidden_theme$dyn_51624 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_hidden_theme[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_hidden_theme["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokenThemes.get-hidden-theme",_);
}
}
});
/**
 * get the hidden temporary theme
 */
app.common.types.tokens_lib.get_hidden_theme = (function app$common$types$tokens_lib$get_hidden_theme(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokenThemes$get_hidden_theme$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokenThemes$get_hidden_theme$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokenThemes$get_hidden_theme$dyn_51624(_);
}
});

app.common.types.tokens_lib.schema_COLON_token_themes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"TokenThemes"], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),app.common.types.tokens_lib.schema_COLON_token_theme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.data.ordered_map_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.data.ordered_map_QMARK_], null)], null);
app.common.types.tokens_lib.schema_COLON_active_themes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null);
/**
 * Walk sets tree as a flat list.
 * 
 *   Options:
 *  `:skip-children-pred`: predicate to skip iterating over a set groups children by checking the path of the set group
 *  `:new-editing-set-path`: append a an item with `:new?` at the given path
 */
app.common.types.tokens_lib.walk_sets_tree_seq = (function app$common$types$tokens_lib$walk_sets_tree_seq(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51631 = arguments.length;
var i__5750__auto___51632 = (0);
while(true){
if((i__5750__auto___51632 < len__5749__auto___51631)){
args__5755__auto__.push((arguments[i__5750__auto___51632]));

var G__51633 = (i__5750__auto___51632 + (1));
i__5750__auto___51632 = G__51633;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.types.tokens_lib.walk_sets_tree_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.types.tokens_lib.walk_sets_tree_seq.cljs$core$IFn$_invoke$arity$variadic = (function (nodes,p__51234){
var map__51235 = p__51234;
var map__51235__$1 = cljs.core.__destructure_map(map__51235);
var skip_children_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51235__$1,new cljs.core.Keyword(null,"skip-children-pred","skip-children-pred",663146554),cljs.core.constantly(false));
var new_editing_set_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"new-editing-set-path","new-editing-set-path",1502705622));
var walk = (function app$common$types$tokens_lib$walk(node,p__51236){
var map__51237 = p__51236;
var map__51237__$1 = cljs.core.__destructure_map(map__51237);
var opts = map__51237__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51237__$1,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.PersistentVector.EMPTY);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51237__$1,new cljs.core.Keyword(null,"depth","depth",1768663640),(0));
return (new cljs.core.LazySeq(null,(function (){
if(app.common.data.ordered_map_QMARK_(node)){
var root = (function (){var G__51238 = node;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new_editing_set_path)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51238,new cljs.core.Keyword(null,"new?","new?",777958557),true);
} else {
return G__51238;
}
})();
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51230_SHARP_){
return app$common$types$tokens_lib$walk(p1__51230_SHARP_,opts);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root], 0));
} else {
var vec__51239 = node;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51239,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51239,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new?","new?",777958557),k)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"new?","new?",777958557),true,new cljs.core.Keyword(null,"group?","group?",-1871629417),false,new cljs.core.Keyword(null,"parent-path","parent-path",-2115866866),parent,new cljs.core.Keyword(null,"depth","depth",1768663640),depth], null)], null);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = v;
if(cljs.core.truth_(and__5023__auto__)){
return (v instanceof app.common.types.tokens_lib.TokenSet);
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"group?","group?",-1871629417),false,new cljs.core.Keyword(null,"path","path",-188191168),app.common.types.tokens_lib.split_set_name(app.common.types.tokens_lib.get_name(v)),new cljs.core.Keyword(null,"parent-path","parent-path",-2115866866),parent,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"set","set",304602554),v], null)], null);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = v;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.data.ordered_map_QMARK_(v);
} else {
return and__5023__auto__;
}
})())){
var unprefixed_path = cljs.core.last(app.common.types.tokens_lib.split_set_str_path_prefix(k));
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent,unprefixed_path);
var item = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"group?","group?",-1871629417),true,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"parent-path","parent-path",-2115866866),parent,new cljs.core.Keyword(null,"depth","depth",1768663640),depth], null);
if(cljs.core.truth_((skip_children_pred.cljs$core$IFn$_invoke$arity$1 ? skip_children_pred.cljs$core$IFn$_invoke$arity$1(path) : skip_children_pred.call(null,path)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
} else {
var v_SINGLEQUOTE_ = (function (){var G__51243 = v;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,new_editing_set_path)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51243,new cljs.core.Keyword(null,"new?","new?",777958557),true);
} else {
return G__51243;
}
})();
return cljs.core.cons(item,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51231_SHARP_){
return app$common$types$tokens_lib$walk(p1__51231_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"parent","parent",-878878779),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1))], 0)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_SINGLEQUOTE_], 0)));
}
} else {
return null;
}
}
}
}
}),null,null));
});
return walk((function (){var or__5025__auto__ = nodes;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0();
}
})(),null);
}));

(app.common.types.tokens_lib.walk_sets_tree_seq.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.types.tokens_lib.walk_sets_tree_seq.cljs$lang$applyTo = (function (seq51232){
var G__51233 = cljs.core.first(seq51232);
var seq51232__$1 = cljs.core.next(seq51232);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51233,seq51232__$1);
}));

/**
 * Return a lazy sequence that walks through the tokens sets tree in a depth-first order. It returns a node for each
 * group and set. The nodes contain:
 *  - is-group: true if the node is a group, false if it's a set.
 *  - path: vector with the path of the group or set (without prefixes).
 *  - depth: depth in the tree, starting from 0.
 *  - index: index in the sequence, starting from 0.
 *  - id: the uuid if it's a set, and the path string if it's a group.
 *  - token-set: the TokenSet instance if it's a set.
 * 
 *   Options:
 *  `:skip-children-pred`: predicate that is given a node path. If it returns true, the children of that node are skipped.
 *  `:new-at-path`: append at the given path a node with `:is-new true` and a newly created set.
 */
app.common.types.tokens_lib.sets_tree_seq = (function app$common$types$tokens_lib$sets_tree_seq(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51664 = arguments.length;
var i__5750__auto___51665 = (0);
while(true){
if((i__5750__auto___51665 < len__5749__auto___51664)){
args__5755__auto__.push((arguments[i__5750__auto___51665]));

var G__51667 = (i__5750__auto___51665 + (1));
i__5750__auto___51665 = G__51667;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.types.tokens_lib.sets_tree_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.types.tokens_lib.sets_tree_seq.cljs$core$IFn$_invoke$arity$variadic = (function (tree,p__51248){
var map__51250 = p__51248;
var map__51250__$1 = cljs.core.__destructure_map(map__51250);
var skip_children_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51250__$1,new cljs.core.Keyword(null,"skip-children-pred","skip-children-pred",663146554),cljs.core.constantly(false));
var new_at_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51250__$1,new cljs.core.Keyword(null,"new-at-path","new-at-path",-777014351));
var walk = (function app$common$types$tokens_lib$walk(p__51251,parent_path,depth){
var vec__51255 = p__51251;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51255,(1),null);
var node = vec__51255;
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-new","is-new",-1424373503),k)){
var token_set = app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core.empty_QMARK_(parent_path))?"":app.common.types.tokens_lib.join_set_path(parent_path))], 0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"is-new","is-new",-1424373503),true,new cljs.core.Keyword(null,"is-group","is-group",1574418960),false,new cljs.core.Keyword(null,"path","path",-188191168),app.common.types.tokens_lib.split_set_name(token_set.app$common$types$tokens_lib$INamedItem$get_name$arity$1(null)),new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"id","id",-1388402092),token_set.app$common$types$tokens_lib$INamedItem$get_id$arity$1(null),new cljs.core.Keyword(null,"token-set","token-set",655734075),token_set], null)], null);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = v;
if(cljs.core.truth_(and__5023__auto__)){
return (v instanceof app.common.types.tokens_lib.TokenSet);
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"is-group","is-group",1574418960),false,new cljs.core.Keyword(null,"path","path",-188191168),app.common.types.tokens_lib.split_set_name(app.common.types.tokens_lib.get_name(v)),new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.types.tokens_lib.get_id(v),new cljs.core.Keyword(null,"token-set","token-set",655734075),v], null)], null);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = v;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.data.ordered_map_QMARK_(v);
} else {
return and__5023__auto__;
}
})())){
var unprefixed_path = cljs.core.last(app.common.types.tokens_lib.split_set_str_path_prefix(k));
var path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_path,unprefixed_path);
var item = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"is-group","is-group",1574418960),true,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.types.tokens_lib.join_set_path(path)], null);
if(cljs.core.truth_((skip_children_pred.cljs$core$IFn$_invoke$arity$1 ? skip_children_pred.cljs$core$IFn$_invoke$arity$1(path) : skip_children_pred.call(null,path)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
} else {
var v__$1 = (function (){var G__51258 = v;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,new_at_path)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51258,new cljs.core.Keyword(null,"is-new","is-new",-1424373503),true);
} else {
return G__51258;
}
})();
return cljs.core.cons(item,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51244_SHARP_){
return app$common$types$tokens_lib$walk(p1__51244_SHARP_,path,(depth + (1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0)));
}
} else {
return null;
}
}
}
}),null,null));
});
var tree__$1 = (function (){var G__51259 = tree;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new_at_path)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51259,new cljs.core.Keyword(null,"is-new","is-new",-1424373503),true);
} else {
return G__51259;
}
})();
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"index","index",-1531685915),index);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51245_SHARP_){
return walk(p1__51245_SHARP_,cljs.core.PersistentVector.EMPTY,(0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tree__$1], 0)));
}));

(app.common.types.tokens_lib.sets_tree_seq.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.types.tokens_lib.sets_tree_seq.cljs$lang$applyTo = (function (seq51246){
var G__51247 = cljs.core.first(seq51246);
var seq51246__$1 = cljs.core.next(seq51246);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51247,seq51246__$1);
}));


/**
 * A library of tokens, sets and themes.
 * @interface
 */
app.common.types.tokens_lib.ITokensLib = function(){};

var app$common$types$tokens_lib$ITokensLib$empty_lib_QMARK_$dyn_51675 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.empty_lib_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.empty_lib_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokensLib.empty-lib?",_);
}
}
});
/**
 * True if the lib does not contain any token, set or theme
 */
app.common.types.tokens_lib.empty_lib_QMARK_ = (function app$common$types$tokens_lib$empty_lib_QMARK_(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$empty_lib_QMARK_$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$empty_lib_QMARK_$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokensLib$empty_lib_QMARK_$dyn_51675(_);
}
});

var app$common$types$tokens_lib$ITokensLib$set_path_exists_QMARK_$dyn_51676 = (function (_,path){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.set_path_exists_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,path) : m__5374__auto__.call(null,_,path));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.set_path_exists_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,path) : m__5372__auto__.call(null,_,path));
} else {
throw cljs.core.missing_protocol("ITokensLib.set-path-exists?",_);
}
}
});
/**
 * if a set at `path` exists
 */
app.common.types.tokens_lib.set_path_exists_QMARK_ = (function app$common$types$tokens_lib$set_path_exists_QMARK_(_,path){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$set_path_exists_QMARK_$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$set_path_exists_QMARK_$arity$2(_,path);
} else {
return app$common$types$tokens_lib$ITokensLib$set_path_exists_QMARK_$dyn_51676(_,path);
}
});

var app$common$types$tokens_lib$ITokensLib$set_group_path_exists_QMARK_$dyn_51680 = (function (_,path){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.set_group_path_exists_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,path) : m__5374__auto__.call(null,_,path));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.set_group_path_exists_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,path) : m__5372__auto__.call(null,_,path));
} else {
throw cljs.core.missing_protocol("ITokensLib.set-group-path-exists?",_);
}
}
});
/**
 * if a set group at `path` exists
 */
app.common.types.tokens_lib.set_group_path_exists_QMARK_ = (function app$common$types$tokens_lib$set_group_path_exists_QMARK_(_,path){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$set_group_path_exists_QMARK_$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$set_group_path_exists_QMARK_$arity$2(_,path);
} else {
return app$common$types$tokens_lib$ITokensLib$set_group_path_exists_QMARK_$dyn_51680(_,path);
}
});

var app$common$types$tokens_lib$ITokensLib$add_token$dyn_51681 = (function (_,set_id,token){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.add_token[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,set_id,token) : m__5374__auto__.call(null,_,set_id,token));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.add_token["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,set_id,token) : m__5372__auto__.call(null,_,set_id,token));
} else {
throw cljs.core.missing_protocol("ITokensLib.add-token",_);
}
}
});
/**
 * add token to a set
 */
app.common.types.tokens_lib.add_token = (function app$common$types$tokens_lib$add_token(_,set_id,token){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$add_token$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$add_token$arity$3(_,set_id,token);
} else {
return app$common$types$tokens_lib$ITokensLib$add_token$dyn_51681(_,set_id,token);
}
});

var app$common$types$tokens_lib$ITokensLib$get_token$dyn_51682 = (function (_,set_id,token_id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_token[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,set_id,token_id) : m__5374__auto__.call(null,_,set_id,token_id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_token["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,set_id,token_id) : m__5372__auto__.call(null,_,set_id,token_id));
} else {
throw cljs.core.missing_protocol("ITokensLib.get-token",_);
}
}
});
/**
 * get token in a set
 */
app.common.types.tokens_lib.get_token = (function app$common$types$tokens_lib$get_token(_,set_id,token_id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$get_token$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$get_token$arity$3(_,set_id,token_id);
} else {
return app$common$types$tokens_lib$ITokensLib$get_token$dyn_51682(_,set_id,token_id);
}
});

var app$common$types$tokens_lib$ITokensLib$get_token_by_name$dyn_51685 = (function (_,set_name,token_name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_token_by_name[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,set_name,token_name) : m__5374__auto__.call(null,_,set_name,token_name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_token_by_name["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,set_name,token_name) : m__5372__auto__.call(null,_,set_name,token_name));
} else {
throw cljs.core.missing_protocol("ITokensLib.get-token-by-name",_);
}
}
});
/**
 * get token in a set searching by set and token names
 */
app.common.types.tokens_lib.get_token_by_name = (function app$common$types$tokens_lib$get_token_by_name(_,set_name,token_name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$get_token_by_name$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$get_token_by_name$arity$3(_,set_name,token_name);
} else {
return app$common$types$tokens_lib$ITokensLib$get_token_by_name$dyn_51685(_,set_name,token_name);
}
});

var app$common$types$tokens_lib$ITokensLib$update_token$dyn_51686 = (function (_,set_id,token_id,f){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.update_token[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(_,set_id,token_id,f) : m__5374__auto__.call(null,_,set_id,token_id,f));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.update_token["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(_,set_id,token_id,f) : m__5372__auto__.call(null,_,set_id,token_id,f));
} else {
throw cljs.core.missing_protocol("ITokensLib.update-token",_);
}
}
});
/**
 * update a token in a set
 */
app.common.types.tokens_lib.update_token = (function app$common$types$tokens_lib$update_token(_,set_id,token_id,f){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$update_token$arity$4 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$update_token$arity$4(_,set_id,token_id,f);
} else {
return app$common$types$tokens_lib$ITokensLib$update_token$dyn_51686(_,set_id,token_id,f);
}
});

var app$common$types$tokens_lib$ITokensLib$delete_token$dyn_51687 = (function (_,set_id,token_id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.delete_token[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,set_id,token_id) : m__5374__auto__.call(null,_,set_id,token_id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.delete_token["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,set_id,token_id) : m__5372__auto__.call(null,_,set_id,token_id));
} else {
throw cljs.core.missing_protocol("ITokensLib.delete-token",_);
}
}
});
/**
 * delete a token from a set
 */
app.common.types.tokens_lib.delete_token = (function app$common$types$tokens_lib$delete_token(_,set_id,token_id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$delete_token$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$delete_token$arity$3(_,set_id,token_id);
} else {
return app$common$types$tokens_lib$ITokensLib$delete_token$dyn_51687(_,set_id,token_id);
}
});

var app$common$types$tokens_lib$ITokensLib$toggle_set_in_theme$dyn_51691 = (function (_,theme_id,set_name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.toggle_set_in_theme[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,theme_id,set_name) : m__5374__auto__.call(null,_,theme_id,set_name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.toggle_set_in_theme["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,theme_id,set_name) : m__5372__auto__.call(null,_,theme_id,set_name));
} else {
throw cljs.core.missing_protocol("ITokensLib.toggle-set-in-theme",_);
}
}
});
/**
 * toggle a set used / not used in a theme
 */
app.common.types.tokens_lib.toggle_set_in_theme = (function app$common$types$tokens_lib$toggle_set_in_theme(_,theme_id,set_name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$toggle_set_in_theme$arity$3 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$toggle_set_in_theme$arity$3(_,theme_id,set_name);
} else {
return app$common$types$tokens_lib$ITokensLib$toggle_set_in_theme$dyn_51691(_,theme_id,set_name);
}
});

var app$common$types$tokens_lib$ITokensLib$get_active_themes_set_names$dyn_51692 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_active_themes_set_names[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_active_themes_set_names["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokensLib.get-active-themes-set-names",_);
}
}
});
/**
 * set of set names that are active in the the active themes
 */
app.common.types.tokens_lib.get_active_themes_set_names = (function app$common$types$tokens_lib$get_active_themes_set_names(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$get_active_themes_set_names$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$get_active_themes_set_names$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokensLib$get_active_themes_set_names$dyn_51692(_);
}
});

var app$common$types$tokens_lib$ITokensLib$token_set_active_QMARK_$dyn_51693 = (function (_,set_name){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.token_set_active_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,set_name) : m__5374__auto__.call(null,_,set_name));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.token_set_active_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,set_name) : m__5372__auto__.call(null,_,set_name));
} else {
throw cljs.core.missing_protocol("ITokensLib.token-set-active?",_);
}
}
});
/**
 * if a set is active in any of the active themes
 */
app.common.types.tokens_lib.token_set_active_QMARK_ = (function app$common$types$tokens_lib$token_set_active_QMARK_(_,set_name){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$token_set_active_QMARK_$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$token_set_active_QMARK_$arity$2(_,set_name);
} else {
return app$common$types$tokens_lib$ITokensLib$token_set_active_QMARK_$dyn_51693(_,set_name);
}
});

var app$common$types$tokens_lib$ITokensLib$sets_at_path_all_active_QMARK_$dyn_51695 = (function (_,group_path){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.sets_at_path_all_active_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,group_path) : m__5374__auto__.call(null,_,group_path));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.sets_at_path_all_active_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,group_path) : m__5372__auto__.call(null,_,group_path));
} else {
throw cljs.core.missing_protocol("ITokensLib.sets-at-path-all-active?",_);
}
}
});
/**
 * compute active state for child sets at `group-path`.
 * Will return a value that matches this schema:
 * `:none`    None of the nested sets are active
 * `:all`     All of the nested sets are active
 * `:partial` Mixed active state of nested sets
 */
app.common.types.tokens_lib.sets_at_path_all_active_QMARK_ = (function app$common$types$tokens_lib$sets_at_path_all_active_QMARK_(_,group_path){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$sets_at_path_all_active_QMARK_$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$sets_at_path_all_active_QMARK_$arity$2(_,group_path);
} else {
return app$common$types$tokens_lib$ITokensLib$sets_at_path_all_active_QMARK_$dyn_51695(_,group_path);
}
});

var app$common$types$tokens_lib$ITokensLib$get_tokens_in_active_sets$dyn_51696 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_tokens_in_active_sets[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_tokens_in_active_sets["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokensLib.get-tokens-in-active-sets",_);
}
}
});
/**
 * set of set names that are active in the the active themes
 */
app.common.types.tokens_lib.get_tokens_in_active_sets = (function app$common$types$tokens_lib$get_tokens_in_active_sets(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$get_tokens_in_active_sets$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$get_tokens_in_active_sets$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokensLib$get_tokens_in_active_sets$dyn_51696(_);
}
});

var app$common$types$tokens_lib$ITokensLib$get_all_tokens$dyn_51697 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_all_tokens[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_all_tokens["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokensLib.get-all-tokens",_);
}
}
});
/**
 * all tokens in the lib, as a sequence
 */
app.common.types.tokens_lib.get_all_tokens = (function app$common$types$tokens_lib$get_all_tokens(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$get_all_tokens$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$get_all_tokens$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokensLib$get_all_tokens$dyn_51697(_);
}
});

var app$common$types$tokens_lib$ITokensLib$get_all_tokens_map$dyn_51698 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_all_tokens_map[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_all_tokens_map["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITokensLib.get-all-tokens-map",_);
}
}
});
/**
 * all tokens in the lib, as a map name -> token
 */
app.common.types.tokens_lib.get_all_tokens_map = (function app$common$types$tokens_lib$get_all_tokens_map(_){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$get_all_tokens_map$arity$1 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$get_all_tokens_map$arity$1(_);
} else {
return app$common$types$tokens_lib$ITokensLib$get_all_tokens_map$dyn_51698(_);
}
});

var app$common$types$tokens_lib$ITokensLib$get_tokens$dyn_51702 = (function (_,set_id){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.types.tokens_lib.get_tokens[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,set_id) : m__5374__auto__.call(null,_,set_id));
} else {
var m__5372__auto__ = (app.common.types.tokens_lib.get_tokens["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,set_id) : m__5372__auto__.call(null,_,set_id));
} else {
throw cljs.core.missing_protocol("ITokensLib.get-tokens",_);
}
}
});
/**
 * return a map of tokens in the set, indexed by token-name
 */
app.common.types.tokens_lib.get_tokens = (function app$common$types$tokens_lib$get_tokens(_,set_id){
if((((!((_ == null)))) && ((!((_.app$common$types$tokens_lib$ITokensLib$get_tokens$arity$2 == null)))))){
return _.app$common$types$tokens_lib$ITokensLib$get_tokens$arity$2(_,set_id);
} else {
return app$common$types$tokens_lib$ITokensLib$get_tokens$dyn_51702(_,set_id);
}
});


/**
* @constructor
 * @implements {app.common.types.tokens_lib.ITokenSets}
 * @implements {app.common.types.tokens_lib.ITokenThemes}
 * @implements {app.common.types.tokens_lib.ITokensLib}
 * @implements {app.common.types.tokens_lib.IValidation}
 * @implements {clojure.core.protocols.Datafiable}
*/
app.common.types.tokens_lib.TokensLib = (function (sets,themes,active_themes){
this.sets = sets;
this.themes = themes;
this.active_themes = active_themes;
});
(app.common.types.tokens_lib.TokensLib.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokensLib.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sets","sets",400955582),self__.sets,new cljs.core.Keyword(null,"themes","themes",-702786642),self__.themes,new cljs.core.Keyword(null,"active-themes","active-themes",-868998012),self__.active_themes], null);
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$set_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(this$__$1.app$common$types$tokens_lib$ITokenSets$get_sets$arity$1(null));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$get_set_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(typeof name === 'string'){
} else {
throw (new Error(["Assert failed: ","expected string for `name`","\n","(string? name)"].join('')));
}

var path = app.common.types.tokens_lib.set_name__GT_prefixed_full_path(name);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.sets,path);
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$get_set_tree$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.sets;
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$get_sets$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,app.common.types.tokens_lib.TokenSet),cljs.core.tree_seq(app.common.data.ordered_map_QMARK_,cljs.core.vals,self__.sets));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$get_set_names$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_name,this$__$1.app$common$types$tokens_lib$ITokenSets$get_sets$arity$1(null));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$move_set_group$arity$5 = (function (this$,from_path,to_path,before_path,before_group_QMARK_){
var self__ = this;
var this$__$1 = this;
var prefixed_from_path = app.common.types.tokens_lib.set_group_path__GT_set_group_prefixed_path(from_path);
var prev_set_group = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.sets,prefixed_from_path);
if(cljs.core.truth_(prev_set_group)){
var from_path_str = app.common.types.tokens_lib.join_set_path(from_path);
var to_path_str = app.common.types.tokens_lib.join_set_path(to_path);
var prefixed_to_path = app.common.types.tokens_lib.set_group_path__GT_set_group_prefixed_path(to_path);
var prefixed_before_path = (cljs.core.truth_(before_path)?(cljs.core.truth_(before_group_QMARK_)?app.common.types.tokens_lib.set_group_path__GT_set_group_prefixed_path(before_path):app.common.types.tokens_lib.set_full_path__GT_set_prefixed_full_path(before_path)):null);
var reorder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefixed_from_path,prefixed_to_path);
var sets_SINGLEQUOTE_ = ((reorder_QMARK_)?app.common.data.oreorder_before(self__.sets,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(prefixed_from_path)),cljs.core.last(prefixed_from_path),prev_set_group,cljs.core.last(prefixed_before_path)):app.common.data.oupdate_in(app.common.data.dissoc_in((cljs.core.truth_(before_path)?app.common.data.oassoc_in_before(self__.sets,prefixed_before_path,prefixed_to_path,prev_set_group):app.common.data.oassoc_in(self__.sets,prefixed_to_path,prev_set_group)),prefixed_from_path),prefixed_to_path,(function (sets__$1){
return clojure.walk.prewalk((function (form){
if(app.common.types.tokens_lib.token_set_QMARK_(form)){
return app.common.types.tokens_lib.rename(form,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_path_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.strip_prefix(app.common.types.tokens_lib.get_name(form),from_path_str))].join(''));
} else {
return form;
}
}),sets__$1);
})));
var themes_SINGLEQUOTE_ = ((reorder_QMARK_)?self__.themes:(function (){var rename_sets_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (set){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.tokens_lib.get_name(set),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_path_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.strip_prefix(app.common.types.tokens_lib.get_name(set),from_path_str))].join('')], null);
}),this$__$1.app$common$types$tokens_lib$ITokenSets$get_sets_at_path$arity$2(null,from_path)));
return clojure.walk.postwalk((function (form){
if((form instanceof app.common.types.tokens_lib.TokenTheme)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(form,new cljs.core.Keyword(null,"sets","sets",400955582),(function (p1__51294_SHARP_){
return cljs.core.set(cljs.core.replace.cljs$core$IFn$_invoke$arity$2(rename_sets_map,p1__51294_SHARP_));
}));
} else {
return form;
}
}),self__.themes);
})());
return (new app.common.types.tokens_lib.TokensLib(sets_SINGLEQUOTE_,themes_SINGLEQUOTE_,self__.active_themes));
} else {
return (new app.common.types.tokens_lib.TokensLib(self__.sets,self__.themes,self__.active_themes));
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$rename_set_group$arity$3 = (function (this$,path,path_fname){
var self__ = this;
var this$__$1 = this;
var from_path_str = app.common.types.tokens_lib.join_set_path(path);
var to_path_str = app.common.types.tokens_lib.join_set_path(app.common.types.tokens_lib.replace_last_path_name(path,path_fname));
var sets__$1 = this$__$1.app$common$types$tokens_lib$ITokenSets$get_sets_at_path$arity$2(null,path);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (lib,set){
return app.common.types.tokens_lib.update_set(lib,app.common.types.tokens_lib.get_id(set),(function (set_SINGLEQUOTE_){
return app.common.types.tokens_lib.rename(set_SINGLEQUOTE_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_path_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.strip_prefix(app.common.types.tokens_lib.get_name(set_SINGLEQUOTE_),from_path_str))].join(''));
}));
}),this$__$1,sets__$1);
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$get_sets_at_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var G__51314 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.add_set_path_group_prefix,path);
var G__51314__$1 = (((G__51314 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.sets,G__51314));
var G__51314__$2 = (((G__51314__$1 == null))?null:cljs.core.tree_seq(app.common.data.ordered_map_QMARK_,cljs.core.vals,G__51314__$1));
if((G__51314__$2 == null)){
return null;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,app.common.types.tokens_lib.TokenSet),G__51314__$2);
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$update_set$arity$3 = (function (this$,id,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected uuid for `id`","\n","(uuid? id)"].join('')));
}

var set = this$__$1.app$common$types$tokens_lib$ITokenSets$get_set$arity$2(null,id);
var name = app.common.types.tokens_lib.get_name(set);
var prefixed_full_path = app.common.types.tokens_lib.set_name__GT_prefixed_full_path(name);
if(cljs.core.truth_(set)){
var set_SINGLEQUOTE_ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(set) : f.call(null,set));
var name_SINGLEQUOTE_ = app.common.types.tokens_lib.get_name(set_SINGLEQUOTE_);
var prefixed_full_path_SINGLEQUOTE_ = app.common.types.tokens_lib.get_set_prefixed_path(set_SINGLEQUOTE_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,name_SINGLEQUOTE_)){
return (new app.common.types.tokens_lib.TokensLib(app.common.data.oassoc_in(self__.sets,prefixed_full_path,set_SINGLEQUOTE_),self__.themes,self__.active_themes));
} else {
return (new app.common.types.tokens_lib.TokensLib(app.common.data.dissoc_in(app.common.data.oassoc_in_before(self__.sets,prefixed_full_path,prefixed_full_path_SINGLEQUOTE_,set_SINGLEQUOTE_),prefixed_full_path),clojure.walk.postwalk((function (form){
if((form instanceof app.common.types.tokens_lib.TokenTheme)){
return form.app$common$types$tokens_lib$ITokenTheme$update_set_name$arity$3(null,name,name_SINGLEQUOTE_);
} else {
return form;
}
}),self__.themes),self__.active_themes));
}
} else {
return this$__$1;
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$add_set$arity$2 = (function (_,token_set){
var self__ = this;
var ___$1 = this;
if(app.common.types.tokens_lib.token_set_QMARK_(token_set)){
} else {
throw (new Error(["Assert failed: ","expected valid token-set","\n","(token-set? token-set)"].join('')));
}

var path = app.common.types.tokens_lib.get_set_prefixed_path(token_set);
return (new app.common.types.tokens_lib.TokensLib(app.common.data.oassoc_in(self__.sets,path,token_set),self__.themes,self__.active_themes));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$move_set$arity$5 = (function (_,from_path,to_path,before_path,before_group_QMARK_){
var self__ = this;
var ___$1 = this;
var prefixed_from_path = app.common.types.tokens_lib.set_full_path__GT_set_prefixed_full_path(from_path);
var prev_set = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.sets,prefixed_from_path);
if((prev_set instanceof app.common.types.tokens_lib.TokenSet)){
var prefixed_to_path = app.common.types.tokens_lib.set_full_path__GT_set_prefixed_full_path(to_path);
var prefixed_before_path = (cljs.core.truth_(before_path)?(cljs.core.truth_(before_group_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.add_set_path_group_prefix,before_path):app.common.types.tokens_lib.set_full_path__GT_set_prefixed_full_path(before_path)):null);
var set = prev_set.app$common$types$tokens_lib$INamedItem$rename$arity$2(null,app.common.types.tokens_lib.join_set_path(to_path));
var reorder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefixed_from_path,prefixed_to_path);
var sets_SINGLEQUOTE_ = ((reorder_QMARK_)?app.common.data.oreorder_before(self__.sets,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(prefixed_from_path)),cljs.core.last(prefixed_from_path),set,cljs.core.last(prefixed_before_path)):app.common.data.dissoc_in((cljs.core.truth_(before_path)?app.common.data.oassoc_in_before(self__.sets,prefixed_before_path,prefixed_to_path,set):app.common.data.oassoc_in(self__.sets,prefixed_to_path,set)),prefixed_from_path));
return (new app.common.types.tokens_lib.TokensLib(sets_SINGLEQUOTE_,((reorder_QMARK_)?self__.themes:clojure.walk.postwalk((function (form){
if((form instanceof app.common.types.tokens_lib.TokenTheme)){
return form.app$common$types$tokens_lib$ITokenTheme$update_set_name$arity$3(null,prev_set.app$common$types$tokens_lib$INamedItem$get_name$arity$1(null),app.common.types.tokens_lib.get_name(set));
} else {
return form;
}
}),self__.themes)),self__.active_themes));
} else {
return (new app.common.types.tokens_lib.TokensLib(self__.sets,self__.themes,self__.active_themes));
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$delete_set$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected uuid for `id`","\n","(uuid? id)"].join('')));
}

var set = this$__$1.app$common$types$tokens_lib$ITokenSets$get_set$arity$2(null,id);
var set_name = app.common.types.tokens_lib.get_name(set);
var prefixed_path = app.common.types.tokens_lib.set_name__GT_prefixed_full_path(set_name);
return (new app.common.types.tokens_lib.TokensLib(app.common.data.dissoc_in(self__.sets,prefixed_path),clojure.walk.postwalk((function (form){
if((form instanceof app.common.types.tokens_lib.TokenTheme)){
return form.app$common$types$tokens_lib$ITokenTheme$disable_set$arity$2(null,set_name);
} else {
return form;
}
}),self__.themes),self__.active_themes));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenSets$get_set$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected uuid for `id`","\n","(uuid? id)"].join('')));
}

return cljs.core.some((function (p1__51295_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_id(p1__51295_SHARP_),id)){
return p1__51295_SHARP_;
} else {
return null;
}
}),this$__$1.app$common$types$tokens_lib$ITokenSets$get_sets$arity$1(null));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$activate_theme$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = this$__$1.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2(null,id);
if(cljs.core.truth_(temp__5823__auto__)){
var theme = temp__5823__auto__;
var group = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme);
var group_themes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_theme_path,cljs.core.val),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.themes,group)));
var active_themes_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(self__.active_themes,group_themes),app.common.types.tokens_lib.get_theme_path(theme));
return (new app.common.types.tokens_lib.TokensLib(self__.sets,self__.themes,active_themes_SINGLEQUOTE_));
} else {
return this$__$1;
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$theme_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(this$__$1.app$common$types$tokens_lib$ITokenThemes$get_themes$arity$1(null));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$theme_active_QMARK_$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
var temp__5825__auto__ = this$__$1.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2(null,id);
if(cljs.core.truth_(temp__5825__auto__)){
var theme = temp__5825__auto__;
return cljs.core.contains_QMARK_(self__.active_themes,app.common.types.tokens_lib.get_theme_path(theme));
} else {
return null;
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$deactivate_theme$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = this$__$1.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2(null,id);
if(cljs.core.truth_(temp__5823__auto__)){
var theme = temp__5823__auto__;
return (new app.common.types.tokens_lib.TokensLib(self__.sets,self__.themes,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.active_themes,app.common.types.tokens_lib.get_theme_path(theme))));
} else {
return this$__$1;
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$delete_theme$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
var theme = this$__$1.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2(null,id);
var vec__51324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme)], null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51324,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51324,(1),null);
if(cljs.core.truth_(theme)){
return (new app.common.types.tokens_lib.TokensLib(self__.sets,app.common.data.dissoc_in(self__.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,name], null)),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.active_themes,app.common.types.tokens_lib.join_theme_path(group,name))));
} else {
return this$__$1;
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$toggle_theme_active$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.app$common$types$tokens_lib$ITokenThemes$theme_active_QMARK_$arity$2(null,id))){
return this$__$1.app$common$types$tokens_lib$ITokenThemes$deactivate_theme$arity$2(null,id);
} else {
return this$__$1.app$common$types$tokens_lib$ITokenThemes$activate_theme$arity$2(null,id);
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$add_theme$arity$2 = (function (_,token_theme){
var self__ = this;
var ___$1 = this;
var token_theme__$1 = app.common.types.tokens_lib.check_token_theme(token_theme);
return (new app.common.types.tokens_lib.TokensLib(self__.sets,cljs.core.update.cljs$core$IFn$_invoke$arity$5(self__.themes,new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(token_theme__$1),app.common.data.oassoc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token_theme__$1),token_theme__$1),self__.active_themes));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__51297_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51297_SHARP_),id);
}),this$__$1.app$common$types$tokens_lib$ITokenThemes$get_themes$arity$1(null));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$get_theme_by_name$arity$3 = (function (_,group,name){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.themes,group),name);
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$get_theme_groups$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(app.common.types.tokens_lib.top_level_theme_group_QMARK_)),self__.themes);
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$get_themes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,app.common.types.tokens_lib.TokenTheme),cljs.core.tree_seq(app.common.data.ordered_map_QMARK_,cljs.core.vals,self__.themes));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$get_active_theme_paths$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.active_themes;
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$update_theme$arity$3 = (function (this$,id,f){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = this$__$1.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2(null,id);
if(cljs.core.truth_(temp__5823__auto__)){
var theme = temp__5823__auto__;
var group = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme);
var theme_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(theme) : f.call(null,theme))], 0)),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),app.common.time.now());
var group_SINGLEQUOTE_ = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme_SINGLEQUOTE_);
var name_SINGLEQUOTE_ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme_SINGLEQUOTE_);
var same_group_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,group_SINGLEQUOTE_);
var same_name_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,name_SINGLEQUOTE_);
var same_path_QMARK_ = ((same_group_QMARK_) && (same_name_QMARK_));
return (new app.common.types.tokens_lib.TokensLib(self__.sets,((same_path_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(self__.themes,group_SINGLEQUOTE_,cljs.core.assoc,name_SINGLEQUOTE_,theme_SINGLEQUOTE_):app.common.data.dissoc_in(app.common.data.oassoc_in_before(self__.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_SINGLEQUOTE_,name_SINGLEQUOTE_], null),theme_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,name], null))),((same_path_QMARK_)?self__.active_themes:cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.active_themes,app.common.types.tokens_lib.join_theme_path(group,name)))));
} else {
return this$__$1;
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$get_hidden_theme$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2(null,app.common.types.tokens_lib.hidden_theme_id);
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$get_theme_tree$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.themes;
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$get_active_themes$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.List.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,app.common.types.tokens_lib.TokenTheme)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__51301_SHARP_){
return this$__$1.app$common$types$tokens_lib$ITokenThemes$theme_active_QMARK_$arity$2(null,app.common.types.tokens_lib.get_id(p1__51301_SHARP_));
}))),cljs.core.tree_seq(app.common.data.ordered_map_QMARK_,cljs.core.vals,self__.themes));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokenThemes$set_active_themes$arity$2 = (function (_,active_themes__$1){
var self__ = this;
var ___$1 = this;
return (new app.common.types.tokens_lib.TokensLib(self__.sets,self__.themes,active_themes__$1));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$toggle_set_in_theme$arity$3 = (function (this$,theme_id,set_name){
var self__ = this;
var this$__$1 = this;
var temp__5823__auto__ = this$__$1.app$common$types$tokens_lib$ITokenThemes$get_theme$arity$2(null,theme_id);
if(cljs.core.truth_(temp__5823__auto__)){
var theme = temp__5823__auto__;
return (new app.common.types.tokens_lib.TokensLib(self__.sets,app.common.data.oupdate_in(self__.themes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme)], null),(function (p1__51305_SHARP_){
return app.common.types.tokens_lib.toggle_set(p1__51305_SHARP_,set_name);
})),self__.active_themes));
} else {
return this$__$1;
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$get_token$arity$3 = (function (this$,set_id,token_id){
var self__ = this;
var this$__$1 = this;
var G__51347 = this$__$1;
var G__51347__$1 = (((G__51347 == null))?null:G__51347.app$common$types$tokens_lib$ITokenSets$get_set$arity$2(null,set_id));
if((G__51347__$1 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_token_(G__51347__$1,token_id);
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$get_all_tokens_map$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tokens_SINGLEQUOTE_,set){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tokens_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(x),x], null);
}),cljs.core.vals(app.common.types.tokens_lib.get_tokens_(set))));
}),cljs.core.PersistentArrayMap.EMPTY,this$__$1.app$common$types$tokens_lib$ITokenSets$get_sets$arity$1(null));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$get_tokens$arity$2 = (function (this$,set_id){
var self__ = this;
var this$__$1 = this;
var G__51348 = this$__$1;
var G__51348__$1 = (((G__51348 == null))?null:G__51348.app$common$types$tokens_lib$ITokenSets$get_set$arity$2(null,set_id));
if((G__51348__$1 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_tokens_(G__51348__$1);
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$update_token$arity$4 = (function (this$,set_id,token_id,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.app$common$types$tokens_lib$ITokenSets$update_set$arity$3(null,set_id,(function (p1__51303_SHARP_){
return app.common.types.tokens_lib.update_token_(p1__51303_SHARP_,token_id,f);
}));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$set_path_exists_QMARK_$arity$2 = (function (_,set_path){
var self__ = this;
var ___$1 = this;
return (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.sets,app.common.types.tokens_lib.set_full_path__GT_set_prefixed_full_path(set_path)) == null)));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$sets_at_path_all_active_QMARK_$arity$2 = (function (this$,group_path){
var self__ = this;
var this$__$1 = this;
var active_set_names = this$__$1.app$common$types$tokens_lib$ITokensLib$get_active_themes_set_names$arity$1(null);
var prefixed_path_str = app.common.types.tokens_lib.set_group_path__GT_set_group_prefixed_path_str(group_path);
if(cljs.core.seq(active_set_names)){
var path_active_set_names = (function (){var G__51349 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.sets,app.common.types.tokens_lib.split_set_name(prefixed_path_str));
var G__51349__$1 = (((G__51349 == null))?null:cljs.core.tree_seq(app.common.data.ordered_map_QMARK_,cljs.core.vals,G__51349));
var G__51349__$2 = (((G__51349__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,app.common.types.tokens_lib.TokenSet),G__51349__$1));
var G__51349__$3 = (((G__51349__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_name,G__51349__$2));
if((G__51349__$3 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,G__51349__$3);
}
})();
var difference = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_active_set_names,active_set_names);
if(cljs.core.empty_QMARK_(difference)){
return new cljs.core.Keyword(null,"all","all",892129742);
} else {
if(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_active_set_names,active_set_names))){
return new cljs.core.Keyword(null,"partial","partial",241141745);
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);

}
}
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$add_token$arity$3 = (function (this$,set_id,token){
var self__ = this;
var this$__$1 = this;
return this$__$1.app$common$types$tokens_lib$ITokenSets$update_set$arity$3(null,set_id,(function (p1__51302_SHARP_){
return app.common.types.tokens_lib.add_token_(p1__51302_SHARP_,token);
}));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$delete_token$arity$3 = (function (this$,set_id,token_id){
var self__ = this;
var this$__$1 = this;
return this$__$1.app$common$types$tokens_lib$ITokenSets$update_set$arity$3(null,set_id,(function (p1__51304_SHARP_){
return app.common.types.tokens_lib.delete_token_(p1__51304_SHARP_,token_id);
}));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$empty_lib_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var and__5023__auto__ = cljs.core.empty_QMARK_(self__.sets);
if(and__5023__auto__){
var or__5025__auto__ = cljs.core.empty_QMARK_(self__.themes);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.app$common$types$tokens_lib$ITokenThemes$theme_count$arity$1(null),(1));
if(and__5023__auto____$1){
return this$__$1.app$common$types$tokens_lib$ITokenThemes$get_hidden_theme$arity$1(null);
} else {
return and__5023__auto____$1;
}
}
} else {
return and__5023__auto__;
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$get_all_tokens$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51306_SHARP_){
return cljs.core.vals(app.common.types.tokens_lib.get_tokens_(p1__51306_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1.app$common$types$tokens_lib$ITokenSets$get_sets$arity$1(null)], 0));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$set_group_path_exists_QMARK_$arity$2 = (function (_,set_path){
var self__ = this;
var ___$1 = this;
return (!((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.sets,app.common.types.tokens_lib.set_group_path__GT_set_group_prefixed_path(set_path)) == null)));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$get_tokens_in_active_sets$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var theme_set_names = this$__$1.app$common$types$tokens_lib$ITokensLib$get_active_themes_set_names$arity$1(null);
var all_set_names = this$__$1.app$common$types$tokens_lib$ITokenSets$get_set_names$arity$1(null);
var active_set_names = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(theme_set_names,all_set_names);
var tokens = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tokens,set_name){
var set = this$__$1.app$common$types$tokens_lib$ITokenSets$get_set_by_name$arity$2(null,set_name);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tokens,app.common.types.tokens_lib.get_tokens_(set)], 0));
}),app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),active_set_names);
return tokens;
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$get_token_by_name$arity$3 = (function (this$,set_name,token_name){
var self__ = this;
var this$__$1 = this;
var G__51350 = this$__$1;
var G__51350__$1 = (((G__51350 == null))?null:G__51350.app$common$types$tokens_lib$ITokenSets$get_set_by_name$arity$2(null,set_name));
if((G__51350__$1 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_token_by_name_(G__51350__$1,token_name);
}
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$token_set_active_QMARK_$arity$2 = (function (this$,set_name){
var self__ = this;
var this$__$1 = this;
var set_names = this$__$1.app$common$types$tokens_lib$ITokensLib$get_active_themes_set_names$arity$1(null);
return cljs.core.contains_QMARK_(set_names,set_name);
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$ITokensLib$get_active_themes_set_names$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sets","sets",400955582)),this$__$1.app$common$types$tokens_lib$ITokenThemes$get_active_themes$arity$1(null));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$IValidation$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$IValidation$valid_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__51351 = clojure.datafy.datafy(this$__$1);
return (app.common.types.tokens_lib.valid_tokens_lib_map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.valid_tokens_lib_map_QMARK_.cljs$core$IFn$_invoke$arity$1(G__51351) : app.common.types.tokens_lib.valid_tokens_lib_map_QMARK_.call(null,G__51351));
}));

(app.common.types.tokens_lib.TokensLib.prototype.app$common$types$tokens_lib$IValidation$check$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__51352_51719 = clojure.datafy.datafy(this$__$1);
(app.common.types.tokens_lib.check_tokens_lib_map.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.check_tokens_lib_map.cljs$core$IFn$_invoke$arity$1(G__51352_51719) : app.common.types.tokens_lib.check_tokens_lib_map.call(null,G__51352_51719));

return this$__$1;
}));

(app.common.types.tokens_lib.TokensLib.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sets","sets",2041487109,null),new cljs.core.Symbol(null,"themes","themes",937744885,null),new cljs.core.Symbol(null,"active-themes","active-themes",771533515,null)], null);
}));

(app.common.types.tokens_lib.TokensLib.cljs$lang$type = true);

(app.common.types.tokens_lib.TokensLib.cljs$lang$ctorStr = "app.common.types.tokens-lib/TokensLib");

(app.common.types.tokens_lib.TokensLib.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.common.types.tokens-lib/TokensLib");
}));

/**
 * Positional factory function for app.common.types.tokens-lib/TokensLib.
 */
app.common.types.tokens_lib.__GT_TokensLib = (function app$common$types$tokens_lib$__GT_TokensLib(sets,themes,active_themes){
return (new app.common.types.tokens_lib.TokensLib(sets,themes,active_themes));
});

cljs.pprint.simple_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,app.common.types.tokens_lib.TokensLib,(function (obj){
cljs.core._STAR_out_STAR_.write("#penpot/tokens-lib ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((app.common.types.tokens_lib.export_dtcg_json.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.export_dtcg_json.cljs$core$IFn$_invoke$arity$1(obj) : app.common.types.tokens_lib.export_dtcg_json.call(null,obj)));
}));
(app.common.types.tokens_lib.TokensLib.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokensLib.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
cljs.core._write(writer,"#penpot/tokens-lib ");

return cljs.core._pr_writer((app.common.types.tokens_lib.export_dtcg_json.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.export_dtcg_json.cljs$core$IFn$_invoke$arity$1(this$__$1) : app.common.types.tokens_lib.export_dtcg_json.call(null,this$__$1)),writer,opts);
}));

(app.common.types.tokens_lib.TokensLib.prototype.cljs$core$IEncodeJS$ = cljs.core.PROTOCOL_SENTINEL);

(app.common.types.tokens_lib.TokensLib.prototype.cljs$core$IEncodeJS$_clj__GT_js$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.clj__GT_js(clojure.datafy.datafy(this$__$1));
}));
/**
 * Internal data structure schema
 */
app.common.types.tokens_lib.schema_COLON_tokens_lib_map = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"TokensLib"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sets","sets",400955582),app.common.types.tokens_lib.schema_COLON_token_sets], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"themes","themes",-702786642),app.common.types.tokens_lib.schema_COLON_token_themes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-themes","active-themes",-868998012),app.common.types.tokens_lib.schema_COLON_active_themes], null)], null);
app.common.types.tokens_lib.valid_tokens_lib_map_QMARK_ = app.common.schema.lazy_validator(app.common.types.tokens_lib.schema_COLON_tokens_lib_map);
app.common.types.tokens_lib.check_tokens_lib_map = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.schema_COLON_tokens_lib_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"invalid tokens-lib internal data structure"], 0));
app.common.types.tokens_lib.tokens_lib_QMARK_ = (function app$common$types$tokens_lib$tokens_lib_QMARK_(o){
return (o instanceof app.common.types.tokens_lib.TokensLib);
});
app.common.types.tokens_lib.valid_tokens_lib_QMARK_ = (function app$common$types$tokens_lib$valid_tokens_lib_QMARK_(o){
var and__5023__auto__ = app.common.types.tokens_lib.tokens_lib_QMARK_(o);
if(and__5023__auto__){
return app.common.types.tokens_lib.valid_QMARK_(o);
} else {
return and__5023__auto__;
}
});
/**
 * A helper that is responsible to ensure that the hidden theme always
 *   exists on the themes data structure
 */
app.common.types.tokens_lib.ensure_hidden_theme = (function app$common$types$tokens_lib$ensure_hidden_theme(themes){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(themes,app.common.types.tokens_lib.hidden_theme_group,(function (data){
if(cljs.core.contains_QMARK_(data,app.common.types.tokens_lib.hidden_theme_name)){
return data;
} else {
return app.common.data.oassoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.tokens_lib.hidden_theme_name,app.common.types.tokens_lib.make_hidden_theme()], 0));
}
}));
});
/**
 * Make a new instance of TokensLib from a map, but skiping all
 *   validation; it is used for create new instances from trusted
 *   sources
 */
app.common.types.tokens_lib.map__GT_tokens_lib = (function app$common$types$tokens_lib$map__GT_tokens_lib(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51722 = arguments.length;
var i__5750__auto___51723 = (0);
while(true){
if((i__5750__auto___51723 < len__5749__auto___51722)){
args__5755__auto__.push((arguments[i__5750__auto___51723]));

var G__51724 = (i__5750__auto___51723 + (1));
i__5750__auto___51723 = G__51724;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.types.tokens_lib.map__GT_tokens_lib.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.types.tokens_lib.map__GT_tokens_lib.cljs$core$IFn$_invoke$arity$variadic = (function (p__51354){
var map__51355 = p__51354;
var map__51355__$1 = cljs.core.__destructure_map(map__51355);
var sets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"sets","sets",400955582));
var themes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"themes","themes",-702786642));
var active_themes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"active-themes","active-themes",-868998012));
return (new app.common.types.tokens_lib.TokensLib(sets,themes,active_themes));
}));

(app.common.types.tokens_lib.map__GT_tokens_lib.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.types.tokens_lib.map__GT_tokens_lib.cljs$lang$applyTo = (function (seq51353){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51353));
}));

/**
 * Make a new instance of TokensLib from a map and validates the input
 */
app.common.types.tokens_lib.make_tokens_lib = (function app$common$types$tokens_lib$make_tokens_lib(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51726 = arguments.length;
var i__5750__auto___51727 = (0);
while(true){
if((i__5750__auto___51727 < len__5749__auto___51726)){
args__5755__auto__.push((arguments[i__5750__auto___51727]));

var G__51731 = (i__5750__auto___51727 + (1));
i__5750__auto___51727 = G__51731;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.types.tokens_lib.make_tokens_lib.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.types.tokens_lib.make_tokens_lib.cljs$core$IFn$_invoke$arity$variadic = (function (p__51360){
var map__51361 = p__51360;
var map__51361__$1 = cljs.core.__destructure_map(map__51361);
var params = map__51361__$1;
return app.common.types.tokens_lib.map__GT_tokens_lib.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.tokens_lib.check_tokens_lib_map(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"sets","sets",400955582),(function (p1__51356_SHARP_){
var or__5025__auto__ = p1__51356_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0();
}
})),new cljs.core.Keyword(null,"themes","themes",-702786642),(function (p1__51357_SHARP_){
return app.common.types.tokens_lib.ensure_hidden_theme((function (){var or__5025__auto__ = p1__51357_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0();
}
})());
})),new cljs.core.Keyword(null,"active-themes","active-themes",-868998012),(function (p1__51358_SHARP_){
var or__5025__auto__ = p1__51358_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.types.tokens_lib.hidden_theme_path]);
}
})))], 0));
}));

(app.common.types.tokens_lib.make_tokens_lib.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.types.tokens_lib.make_tokens_lib.cljs$lang$applyTo = (function (seq51359){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51359));
}));

app.common.types.tokens_lib.ensure_tokens_lib = (function app$common$types$tokens_lib$ensure_tokens_lib(tokens_lib){
var or__5025__auto__ = tokens_lib;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.tokens_lib.make_tokens_lib();
}
});
app.common.types.tokens_lib.schema_COLON_tokens_lib = app.common.schema.type_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.types.tokens-lib","tokens-lib","app.common.types.tokens-lib/tokens-lib",1206706540),new cljs.core.Keyword(null,"pred","pred",1927423397),app.common.types.tokens_lib.valid_tokens_lib_QMARK_,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("encode","json","encode/json",303857460),(function (p1__51364_SHARP_){
var G__51366 = p1__51364_SHARP_;
if((G__51366 == null)){
return null;
} else {
return (app.common.types.tokens_lib.export_dtcg_json.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.export_dtcg_json.cljs$core$IFn$_invoke$arity$1(G__51366) : app.common.types.tokens_lib.export_dtcg_json.call(null,G__51366));
}
}),new cljs.core.Keyword("decode","json","decode/json",468276044),(function (p1__51365_SHARP_){
var G__51367 = p1__51365_SHARP_;
if((G__51367 == null)){
return null;
} else {
return (app.common.types.tokens_lib.read_multi_set_dtcg.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.read_multi_set_dtcg.cljs$core$IFn$_invoke$arity$1(G__51367) : app.common.types.tokens_lib.read_multi_set_dtcg.call(null,G__51367));
}
}),new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.fmap((function (_){
return app.common.types.tokens_lib.make_tokens_lib();
}),app.common.schema.generators.small_int())], null)], null)], 0));
/**
 * Make a new set with a unique name, copying data from the given set in the lib.
 */
app.common.types.tokens_lib.duplicate_set = (function app$common$types$tokens_lib$duplicate_set(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51735 = arguments.length;
var i__5750__auto___51736 = (0);
while(true){
if((i__5750__auto___51736 < len__5749__auto___51735)){
args__5755__auto__.push((arguments[i__5750__auto___51736]));

var G__51737 = (i__5750__auto___51736 + (1));
i__5750__auto___51736 = G__51737;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.common.types.tokens_lib.duplicate_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.common.types.tokens_lib.duplicate_set.cljs$core$IFn$_invoke$arity$variadic = (function (set_id,lib,p__51371){
var map__51372 = p__51371;
var map__51372__$1 = cljs.core.__destructure_map(map__51372);
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51372__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var sets = app.common.types.tokens_lib.get_sets(lib);
var unames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_name,sets);
var set = app.common.types.tokens_lib.get_set(lib,set_id);
var copy_name = (cljs.core.truth_(set)?app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.get_name(set),unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suffix","suffix",367373057),suffix], 0)):null);
if(cljs.core.truth_(set)){
return app.common.types.tokens_lib.reid(app.common.types.tokens_lib.rename(set,copy_name),app.common.uuid.next());
} else {
return null;
}
}));

(app.common.types.tokens_lib.duplicate_set.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.common.types.tokens_lib.duplicate_set.cljs$lang$applyTo = (function (seq51368){
var G__51369 = cljs.core.first(seq51368);
var seq51368__$1 = cljs.core.next(seq51368);
var G__51370 = cljs.core.first(seq51368__$1);
var seq51368__$2 = cljs.core.next(seq51368__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51369,G__51370,seq51368__$2);
}));

/**
 * Splits token-name into map with `:path` and `:selector` using `token-name->path`.
 * 
 *   `:selector` is the last item of the names path
 *   `:path` is everything leading up the the `:selector`.
 */
app.common.types.tokens_lib.token_name__GT_path_selector = (function app$common$types$tokens_lib$token_name__GT_path_selector(token_name){
var path_segments = app.common.types.tokens_lib.get_token_path(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),token_name], null));
var last_idx = (cljs.core.count(path_segments) - (1));
var vec__51373 = cljs.core.split_at(last_idx,path_segments);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51373,(0),null);
var vec__51376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51373,(1),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51376,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.seq(path),new cljs.core.Keyword(null,"selector","selector",762528866),selector], null);
});
/**
 * Traverses the path from `token-name` down a `tokens-tree` and checks if a token at that path exists.
 * 
 *   It's not allowed to create a token inside a token. E.g.:
 *   Creating a token with
 * 
 *  {:name "foo.bar"}
 * 
 *   in the tokens tree:
 * 
 *  {"foo" {:name "other"}}
 */
app.common.types.tokens_lib.token_name_path_exists_QMARK_ = (function app$common$types$tokens_lib$token_name_path_exists_QMARK_(token_name,tokens_tree){
var map__51379 = app.common.types.tokens_lib.token_name__GT_path_selector(token_name);
var map__51379__$1 = cljs.core.__destructure_map(map__51379);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51379__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51379__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var path_target = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,cur);
if((target == null)){
return cljs.core.reduced(false);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target))){
return cljs.core.reduced(true);
} else {
return target;

}
}
}),tokens_tree,path);
if(cljs.core.boolean_QMARK_(path_target)){
return path_target;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_target,new cljs.core.Keyword(null,"name","name",1843675177)))){
return true;
} else {
return cljs.core.boolean$(cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_target,selector)));

}
}
});
app.common.types.tokens_lib.legacy_node_QMARK_ = app.common.schema.validator(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["value",new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["type",new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["value",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["type",new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["type",new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["value",new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["type",new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null));
app.common.types.tokens_lib.schema_COLON_dtcg_node = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.common.types.tokens-lib","simple-value","app.common.types.tokens-lib/simple-value",-1723851317),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null),new cljs.core.Keyword("app.common.types.tokens-lib","value","app.common.types.tokens-lib/value",-1272173908),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("app.common.types.tokens-lib","simple-value","app.common.types.tokens-lib/simple-value",-1723851317)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword("app.common.types.tokens-lib","simple-value","app.common.types.tokens-lib/simple-value",-1723851317)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword("app.common.types.tokens-lib","simple-value","app.common.types.tokens-lib/simple-value",-1723851317)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("app.common.types.tokens-lib","simple-value","app.common.types.tokens-lib/simple-value",-1723851317)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword("app.common.types.tokens-lib","simple-value","app.common.types.tokens-lib/simple-value",-1723851317)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$type",new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$value",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("app.common.types.tokens-lib","value","app.common.types.tokens-lib/value",-1272173908)], null)], null)], null)], null);
app.common.types.tokens_lib.dtcg_node_QMARK_ = app.common.schema.validator(app.common.types.tokens_lib.schema_COLON_dtcg_node);
/**
 * Searches through decoded token file and returns:
 * - `:json-format/legacy` when first node satisfies `legacy-node?` predicate
 * - `:json-format/dtcg` when first node satisfies `dtcg-node?` predicate
 * - If neither combination is found, return dtcg format by default (we assume that
 *   the file does not contain any token, so the format is irrelevan).
 */
app.common.types.tokens_lib.get_json_format = (function app$common$types$tokens_lib$get_json_format(var_args){
var G__51386 = arguments.length;
switch (G__51386) {
case 1:
return app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$1 = (function (decoded_json){
return app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$3(decoded_json,app.common.types.tokens_lib.legacy_node_QMARK_,app.common.types.tokens_lib.dtcg_node_QMARK_);
}));

(app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$3 = (function (decoded_json,legacy_node_QMARK_,dtcg_node_QMARK_){
if(cljs.core.map_QMARK_(decoded_json)){
} else {
throw (new Error(["Assert failed: ","expected a plain clojure map for `decoded-json`","\n","(map? decoded-json)"].join('')));
}

var branch_QMARK_ = cljs.core.map_QMARK_;
var children = (function (node){
return cljs.core.vals(node);
});
var check_node = (function (node){
if(cljs.core.truth_((legacy_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? legacy_node_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : legacy_node_QMARK_.call(null,node)))){
return new cljs.core.Keyword("json-format","legacy","json-format/legacy",-1635639619);
} else {
if(cljs.core.truth_((dtcg_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? dtcg_node_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : dtcg_node_QMARK_.call(null,node)))){
return new cljs.core.Keyword("json-format","dtcg","json-format/dtcg",-2034606706);
} else {
return null;

}
}
});
var walk = (function app$common$types$tokens_lib$walk(node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(check_node(node),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app$common$types$tokens_lib$walk,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children(node)], 0)):null));
}),null,null));
});
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,walk(decoded_json))),new cljs.core.Keyword("json-format","dtcg","json-format/dtcg",-2034606706));
}));

(app.common.types.tokens_lib.get_json_format.cljs$lang$maxFixedArity = 3);

/**
 * Converts a decoded json file in legacy format into DTCG format.
 */
app.common.types.tokens_lib.legacy_json__GT_dtcg_json = (function app$common$types$tokens_lib$legacy_json__GT_dtcg_json(decoded_json){
if(cljs.core.map_QMARK_(decoded_json)){
} else {
throw (new Error(["Assert failed: ","expected a plain clojure map for `decoded-json`","\n","(map? decoded-json)"].join('')));
}

return clojure.walk.postwalk((function (node){
var G__51388 = node;
var G__51388__$1 = ((((cljs.core.map_QMARK_(node)) && (((cljs.core.contains_QMARK_(node,"value")) && (((cljs.core.sequential_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"value"))) && (cljs.core.map_QMARK_(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"value"))))))))))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__51388,"value",(function (seq_value){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51387_SHARP_){
return clojure.set.rename_keys(p1__51387_SHARP_,new cljs.core.PersistentArrayMap(null, 1, ["type","$type"], null));
}),seq_value);
})):G__51388);
var G__51388__$2 = ((((cljs.core.map_QMARK_(node)) && (((cljs.core.contains_QMARK_(node,"type")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fontFamilies",cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"type"))) && (((cljs.core.contains_QMARK_(node,"value")) && (((cljs.core.sequential_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"value"))) && ((!(cljs.core.map_QMARK_(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"value"))))))))))))))))?cljs.core.identity(G__51388__$1):G__51388__$1);
if(((cljs.core.map_QMARK_(node)) && (((cljs.core.contains_QMARK_(node,"type")) && (cljs.core.contains_QMARK_(node,"value")))))){
return clojure.set.rename_keys(G__51388__$2,new cljs.core.PersistentArrayMap(null, 2, ["value","$value","type","$type"], null));
} else {
return G__51388__$2;
}
}),decoded_json);
});
/**
 * Check if the decoded json file conforms to basic DTCG format with a single set.
 */
app.common.types.tokens_lib.single_set_QMARK_ = (function app$common$types$tokens_lib$single_set_QMARK_(decoded_json){
if(cljs.core.map_QMARK_(decoded_json)){
} else {
throw (new Error(["Assert failed: ","expected a plain clojure map for `decoded-json`","\n","(map? decoded-json)"].join('')));
}

return (((!(cljs.core.contains_QMARK_(decoded_json,"$metadata")))) && ((!(cljs.core.contains_QMARK_(decoded_json,"$themes")))));
});
/**
 * Convert font-family token value from DTCG format to internal format.
 * - If value is a string, split it into a collection of font families
 * - If value is already an array, keep it as is
 * - Otherwise keep as is
 */
app.common.types.tokens_lib.convert_dtcg_font_family = (function app$common$types$tokens_lib$convert_dtcg_font_family(value){
if(typeof value === 'string'){
return app.common.types.token.split_font_family(value);
} else {
if(cljs.core.sequential_QMARK_(value)){
return value;
} else {
return value;

}
}
});
/**
 * Convert typography token value keys from DTCG format to internal format.
 */
app.common.types.tokens_lib.convert_dtcg_typography_composite = (function app$common$types$tokens_lib$convert_dtcg_typography_composite(value){
if(cljs.core.map_QMARK_(value)){
return app.common.data.update_when(cljs.core.select_keys(clojure.set.rename_keys(value,app.common.types.token.composite_dtcg_token_type__GT_token_type),app.common.types.token.typography_keys),new cljs.core.Keyword(null,"font-family","font-family",-667419874),app.common.types.tokens_lib.convert_dtcg_font_family);
} else {
return value;
}
});
/**
 * Convert shadow token value from DTCG format to internal format.
 */
app.common.types.tokens_lib.convert_dtcg_shadow_composite = (function app$common$types$tokens_lib$convert_dtcg_shadow_composite(value){
var process_shadow = (function (shadow__$1){
if(cljs.core.map_QMARK_(shadow__$1)){
var legacy_shadow_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,"type");
return cljs.core.select_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(clojure.set.rename_keys(shadow__$1,new cljs.core.PersistentArrayMap(null, 8, ["x",new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),"offsetX",new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),"y",new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),"offsetY",new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),"blur",new cljs.core.Keyword(null,"blur","blur",-453500461),"spread",new cljs.core.Keyword(null,"spread","spread",862337191),"color",new cljs.core.Keyword(null,"color","color",1011675173),"inset",new cljs.core.Keyword(null,"inset","inset",-396367740)], null)),new cljs.core.Keyword(null,"inset","inset",-396367740),(function (p1__51393_SHARP_){
if(cljs.core.boolean_QMARK_(p1__51393_SHARP_)){
return p1__51393_SHARP_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__51393_SHARP_)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",p1__51393_SHARP_)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(legacy_shadow_type,"innerShadow")){
return true;
} else {
return false;

}
}
}
}
})),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"spread","spread",862337191),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"inset","inset",-396367740)], null));
} else {
return shadow__$1;
}
});
if(typeof value === 'string'){
return value;
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(process_shadow,value);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [process_shadow(value)], null);
} else {
return value;

}
}
}
});
/**
 * Convert a tokens tree in the decoded json fragment into a flat map,
 * being the keys the token paths after joining the keys with '.'.
 */
app.common.types.tokens_lib.flatten_nested_tokens_json = (function app$common$types$tokens_lib$flatten_nested_tokens_json(decoded_json_tokens,parent_path){
return cljs.core.reduce_kv((function (tokens,k,v){
var child_path = ((cljs.core.empty_QMARK_(parent_path))?cljs.core.name(k):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_path),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
if(((cljs.core.map_QMARK_(v)) && ((!(cljs.core.contains_QMARK_(v,"$type")))))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tokens,(app.common.types.tokens_lib.flatten_nested_tokens_json.cljs$core$IFn$_invoke$arity$2 ? app.common.types.tokens_lib.flatten_nested_tokens_json.cljs$core$IFn$_invoke$arity$2(v,child_path) : app.common.types.tokens_lib.flatten_nested_tokens_json.call(null,v,child_path))], 0));
} else {
var token_type = (function (){var G__51394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,"$type");
return (app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1(G__51394) : app.common.types.token.dtcg_token_type__GT_token_type.call(null,G__51394));
})();
if(cljs.core.truth_(token_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tokens,child_path,app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),child_path,new cljs.core.Keyword(null,"type","type",1174270348),token_type,new cljs.core.Keyword(null,"value","value",305978217),(function (){var token_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,"$value");
var G__51395 = token_type;
var G__51395__$1 = (((G__51395 instanceof cljs.core.Keyword))?G__51395.fqn:null);
switch (G__51395__$1) {
case "font-family":
return app.common.types.tokens_lib.convert_dtcg_font_family(token_value);

break;
case "typography":
return app.common.types.tokens_lib.convert_dtcg_typography_composite(token_value);

break;
case "shadow":
return app.common.types.tokens_lib.convert_dtcg_shadow_composite(token_value);

break;
default:
return token_value;

}
})(),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,"$description")], 0)));
} else {
return tokens;
}
}
}),cljs.core.PersistentArrayMap.EMPTY,decoded_json_tokens);
});
/**
 * Parse a decoded json file with a single set of tokens in DTCG format into a TokensLib.
 */
app.common.types.tokens_lib.parse_single_set_dtcg_json = (function app$common$types$tokens_lib$parse_single_set_dtcg_json(set_name,decoded_json_tokens){
if(cljs.core.map_QMARK_(decoded_json_tokens)){
} else {
throw (new Error(["Assert failed: ","expected a plain clojure map for `decoded-json-tokens`","\n","(map? decoded-json-tokens)"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$1(decoded_json_tokens),new cljs.core.Keyword("json-format","dtcg","json-format/dtcg",-2034606706))){
} else {
throw (new Error(["Assert failed: ","expected a dtcg format for `decoded-json-tokens`","\n","(= (get-json-format decoded-json-tokens) :json-format/dtcg)"].join('')));
}

var set_name__$1 = app.common.types.tokens_lib.normalize_set_name.cljs$core$IFn$_invoke$arity$1(set_name);
var tokens = app.common.types.tokens_lib.flatten_nested_tokens_json(decoded_json_tokens,"");
if(cljs.core.empty_QMARK_(tokens)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("the file doesn't contain any tokens",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.import","invalid-json-data","error.import/invalid-json-data",231259630)], null));
} else {
}

return app.common.types.tokens_lib.make_tokens_lib().app$common$types$tokens_lib$ITokenSets$add_set$arity$2(null,app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),set_name__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens], 0)));
});
/**
 * Parse a decoded json file with a single set of tokens in legacy format into a TokensLib.
 */
app.common.types.tokens_lib.parse_single_set_legacy_json = (function app$common$types$tokens_lib$parse_single_set_legacy_json(set_name,decoded_json_tokens){
if(cljs.core.map_QMARK_(decoded_json_tokens)){
} else {
throw (new Error(["Assert failed: ","expected a plain clojure map for `decoded-json-tokens`","\n","(map? decoded-json-tokens)"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$1(decoded_json_tokens),new cljs.core.Keyword("json-format","legacy","json-format/legacy",-1635639619))){
} else {
throw (new Error(["Assert failed: ","expected a legacy format for `decoded-json-tokens`","\n","(= (get-json-format decoded-json-tokens) :json-format/legacy)"].join('')));
}

return app.common.types.tokens_lib.parse_single_set_dtcg_json(set_name,app.common.types.tokens_lib.legacy_json__GT_dtcg_json(decoded_json_tokens));
});
/**
 * Schema for penpot multi-set dtcg json decoded data/
 * 
 *   Mainly used for validate the structure of the incoming data before
 *   proceed to parse it to our internal data structures.
 */
app.common.types.tokens_lib.schema_COLON_multi_set_dtcg = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.common.types.tokens-lib","node","app.common.types.tokens-lib/node",-2091664271),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("app.common.types.tokens-lib","node","app.common.types.tokens-lib/node",-2091664271)], null)], null),app.common.types.tokens_lib.schema_COLON_dtcg_node], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$themes",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Theme"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name",new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["description",new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["isSource",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selectedTokenSets",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"enabled","disabled"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$metadata",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Metadata"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tokenSetOrder",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["activeThemes",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["activeSets",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.core","default","malli.core/default",-1706204176),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("app.common.types.tokens-lib","node","app.common.types.tokens-lib/node",-2091664271)], null)], null)], null)], null)], null);
app.common.types.tokens_lib.check_multi_set_dtcg_data = app.common.schema.check_fn(app.common.types.tokens_lib.schema_COLON_multi_set_dtcg);
app.common.types.tokens_lib.decode_multi_set_dtcg_data = app.common.schema.decoder.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.schema_COLON_multi_set_dtcg,app.common.schema.json_transformer);
/**
 * Parse a decoded json file with multi sets in DTCG format into a TokensLib.
 */
app.common.types.tokens_lib.parse_multi_set_dtcg_json = (function app$common$types$tokens_lib$parse_multi_set_dtcg_json(decoded_json){
if(cljs.core.map_QMARK_(decoded_json)){
} else {
throw (new Error(["Assert failed: ","expected a plain clojure map for `decoded-json`","\n","(map? decoded-json)"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$1(decoded_json),new cljs.core.Keyword("json-format","dtcg","json-format/dtcg",-2034606706))){
} else {
throw (new Error(["Assert failed: ","expected a dtcg format for `decoded-json`","\n","(= (get-json-format decoded-json) :json-format/dtcg)"].join('')));
}

var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(decoded_json,"$metadata");
var xf_normalize_set_name = cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.types.tokens_lib.normalize_set_name);
var sets = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(decoded_json,"$themes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["$metadata"], 0));
var ordered_set_names = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),xf_normalize_set_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"tokenSetOrder")),xf_normalize_set_name,cljs.core.keys(sets));
var active_set_names = (function (){var or__5025__auto__ = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xf_normalize_set_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"activeSets")));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var active_theme_names = (function (){var or__5025__auto__ = cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"activeThemes")));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.types.tokens_lib.hidden_theme_path]);
}
})();
var themes = cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (theme){
return app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5025__auto__ = app.common.uuid.parse_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(theme,"id"));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(theme,"name"),new cljs.core.Keyword(null,"group","group",582596132),cljs.core.get.cljs$core$IFn$_invoke$arity$2(theme,"group"),new cljs.core.Keyword(null,"is-source","is-source",562449867),(function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(theme,"isSource");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(theme,"is-source");
}
})(),new cljs.core.Keyword(null,"external-id","external-id",-456527727),cljs.core.get.cljs$core$IFn$_invoke$arity$2(theme,"id"),new cljs.core.Keyword(null,"sets","sets",400955582),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key),xf_normalize_set_name,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__51396_SHARP_){
return cljs.core.contains_QMARK_(ordered_set_names,p1__51396_SHARP_);
}))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(theme,"selectedTokenSets"))], 0));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(decoded_json,"$themes")));
var library = app.common.types.tokens_lib.make_tokens_lib();
var sets__$1 = cljs.core.reduce_kv((function (result,name,tokens){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,app.common.types.tokens_lib.normalize_set_name.cljs$core$IFn$_invoke$arity$1(name),app.common.types.tokens_lib.flatten_nested_tokens_json(tokens,""));
}),cljs.core.PersistentArrayMap.EMPTY,sets);
var library__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (library__$1,name){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sets__$1,name);
if(cljs.core.truth_(temp__5823__auto__)){
var tokens = temp__5823__auto__;
return app.common.types.tokens_lib.add_set(library__$1,app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens], 0)));
} else {
return library__$1;
}
}),library,ordered_set_names);
var library__$2 = app.common.types.tokens_lib.update_theme(library__$1,app.common.types.tokens_lib.hidden_theme_id,(function (p1__51397_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51397_SHARP_,new cljs.core.Keyword(null,"sets","sets",400955582),active_set_names);
}));
var library__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.types.tokens_lib.add_theme,library__$2,themes);
var library__$4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (library__$4,theme_path){
var vec__51398 = app.common.types.tokens_lib.split_theme_path(theme_path);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51398,(1),null);
var theme = app.common.types.tokens_lib.get_theme_by_name(library__$4,group,name);
return app.common.types.tokens_lib.activate_theme(library__$4,app.common.types.tokens_lib.get_id(theme));
}),library__$3,active_theme_names);
if(((cljs.core.empty_QMARK_(sets__$1)) && (cljs.core.empty_QMARK_(themes)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("the file doesn't contain any tokens",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","code","error/code",-1740032098),new cljs.core.Keyword("error.import","invalid-json-data","error.import/invalid-json-data",231259630)], null));
} else {
}

return library__$4;
});
/**
 * Read penpot multi-set dctg tokens. Accepts string or JSON decoded
 *   data (without any case transformation). Used as schema decoder and
 *   in the SDK.
 */
app.common.types.tokens_lib.read_multi_set_dtcg = (function app$common$types$tokens_lib$read_multi_set_dtcg(data){
if((data instanceof app.common.types.tokens_lib.TokensLib)){
return data;
} else {
var data__$1 = ((typeof data === 'string')?app.common.json.decode.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity], 0)):data);
var data__$2 = ((cljs.core.object_QMARK_(data__$1))?app.common.json.__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity], 0)):data__$1);
var data__$3 = (app.common.types.tokens_lib.decode_multi_set_dtcg_data.cljs$core$IFn$_invoke$arity$1 ? app.common.types.tokens_lib.decode_multi_set_dtcg_data.cljs$core$IFn$_invoke$arity$1(data__$2) : app.common.types.tokens_lib.decode_multi_set_dtcg_data.call(null,data__$2));
return app.common.types.tokens_lib.parse_multi_set_dtcg_json(app.common.types.tokens_lib.check_multi_set_dtcg_data(data__$3));
}
});
/**
 * Parse a decoded json file with multi sets in legacy format into a TokensLib.
 */
app.common.types.tokens_lib.parse_multi_set_legacy_json = (function app$common$types$tokens_lib$parse_multi_set_legacy_json(decoded_json){
if(cljs.core.map_QMARK_(decoded_json)){
} else {
throw (new Error(["Assert failed: ","expected a plain clojure map for `decoded-json`","\n","(map? decoded-json)"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$1(decoded_json),new cljs.core.Keyword("json-format","legacy","json-format/legacy",-1635639619))){
} else {
throw (new Error(["Assert failed: ","expected a legacy format for `decoded-json`","\n","(= (get-json-format decoded-json) :json-format/legacy)"].join('')));
}

var sets_data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(decoded_json,"$themes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["$metadata"], 0));
var other_data = cljs.core.select_keys(decoded_json,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["$themes","$metadata"], null));
var dtcg_sets_data = app.common.types.tokens_lib.legacy_json__GT_dtcg_json(sets_data);
return app.common.types.tokens_lib.parse_multi_set_dtcg_json(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([other_data,dtcg_sets_data], 0)));
});
/**
 * Guess the format and content type of the decoded json file and parse it into a TokensLib.
 * The `file-name` is used to determine the set name when the json file contains a single set.
 */
app.common.types.tokens_lib.parse_decoded_json = (function app$common$types$tokens_lib$parse_decoded_json(decoded_json,file_name){
var single_set_QMARK_ = app.common.types.tokens_lib.single_set_QMARK_(decoded_json);
var json_format = app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$1(decoded_json);
if(((single_set_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("json-format","legacy","json-format/legacy",-1635639619),json_format)))){
return app.common.types.tokens_lib.parse_single_set_legacy_json(file_name,decoded_json);
} else {
if(((single_set_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("json-format","dtcg","json-format/dtcg",-2034606706),json_format)))){
return app.common.types.tokens_lib.parse_single_set_dtcg_json(file_name,decoded_json);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("json-format","legacy","json-format/legacy",-1635639619),json_format)){
return app.common.types.tokens_lib.parse_multi_set_legacy_json(decoded_json);
} else {
return app.common.types.tokens_lib.parse_multi_set_dtcg_json(decoded_json);

}
}
}
});
app.common.types.tokens_lib.typography_token__GT_dtcg_token = (function app$common$types$tokens_lib$typography_token__GT_dtcg_token(value){
if(cljs.core.map_QMARK_(value)){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.contains_QMARK_(app.common.types.token.typography_keys,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(app.common.types.token.composite_token_type__GT_dtcg_token_type.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.composite_token_type__GT_dtcg_token_type.cljs$core$IFn$_invoke$arity$1(k) : app.common.types.token.composite_token_type__GT_dtcg_token_type.call(null,k)),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,value);
} else {
return value;
}
});
/**
 * Convert shadow token value from internal format to DTCG format.
 */
app.common.types.tokens_lib.shadow_token__GT_dtcg_token = (function app$common$types$tokens_lib$shadow_token__GT_dtcg_token(value){
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (shadow__$1){
if(cljs.core.map_QMARK_(shadow__$1)){
return cljs.core.select_keys(clojure.set.rename_keys(shadow__$1,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),"offsetX",new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),"offsetY",new cljs.core.Keyword(null,"blur","blur",-453500461),"blur",new cljs.core.Keyword(null,"spread","spread",862337191),"spread",new cljs.core.Keyword(null,"color","color",1011675173),"color",new cljs.core.Keyword(null,"inset","inset",-396367740),"inset"], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["offsetX","offsetY","blur","spread","color","inset"], null));
} else {
return shadow__$1;
}
}),value);
} else {
return value;
}
});
app.common.types.tokens_lib.token__GT_dtcg_token = (function app$common$types$tokens_lib$token__GT_dtcg_token(token){
var G__51401 = new cljs.core.PersistentArrayMap(null, 2, ["$value",(function (){var G__51402 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token);
var G__51402__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token)))?app.common.types.tokens_lib.typography_token__GT_dtcg_token(G__51402):G__51402);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token))){
return app.common.types.tokens_lib.shadow_token__GT_dtcg_token(G__51402__$1);
} else {
return G__51402__$1;
}
})(),"$type",(function (){var G__51403 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
return (app.common.types.token.token_type__GT_dtcg_token_type.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.token_type__GT_dtcg_token_type.cljs$core$IFn$_invoke$arity$1(G__51403) : app.common.types.token.token_type__GT_dtcg_token_type.call(null,G__51403));
})()], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(token))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51401,"$description",new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(token));
} else {
return G__51401;
}
});
/**
 * Extract themes for a dtcg json export.
 */
app.common.types.tokens_lib.dtcg_export_themes = (function app$common$types$tokens_lib$dtcg_export_themes(tokens_lib){
var themes_xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__51404_SHARP_){
return (((p1__51404_SHARP_ instanceof app.common.types.tokens_lib.TokenTheme)) && (cljs.core.not(app.common.types.tokens_lib.hidden_theme_QMARK_(p1__51404_SHARP_))));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (token_theme){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, ["id",new cljs.core.Keyword(null,"external-id","external-id",-456527727).cljs$core$IFn$_invoke$arity$1(token_theme),"name",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token_theme),"group",new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(token_theme),"description",new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(token_theme),"isSource",new cljs.core.Keyword(null,"is-source","is-source",562449867).cljs$core$IFn$_invoke$arity$1(token_theme),"selectedTokenSets",cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__51405_SHARP_,p2__51406_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51405_SHARP_,p2__51406_SHARP_,"enabled");
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(token_theme))], null));
})));
var themes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,themes_xform,cljs.core.tree_seq(app.common.data.ordered_map_QMARK_,cljs.core.vals,app.common.types.tokens_lib.get_theme_tree(tokens_lib)));
var active_themes = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_active_theme_paths(tokens_lib),app.common.types.tokens_lib.hidden_theme_path);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [themes,active_themes], null);
});
/**
 * Convert a TokensLib into a plain clojure map, suitable to be encoded as a multi json files each encoded in DTCG format.
 */
app.common.types.tokens_lib.export_dtcg_multi_file = (function app$common$types$tokens_lib$export_dtcg_multi_file(tokens_lib){
var vec__51407 = app.common.types.tokens_lib.dtcg_export_themes(tokens_lib);
var themes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51407,(0),null);
var active_themes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51407,(1),null);
var sets = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (token_set){
var name = app.common.types.tokens_lib.get_name(token_set);
var tokens = app.common.types.tokens_lib.get_tokens_(token_set);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".json"].join(''),app.common.types.tokens_lib.tokens_tree.cljs$core$IFn$_invoke$arity$variadic(tokens,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-token-fn","update-token-fn",-805038447),app.common.types.tokens_lib.token__GT_dtcg_token], 0))], null);
}),app.common.types.tokens_lib.get_sets(tokens_lib)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sets,"$themes.json",themes),"$metadata.json",new cljs.core.PersistentArrayMap(null, 3, ["tokenSetOrder",app.common.types.tokens_lib.get_set_names(tokens_lib),"activeThemes",active_themes,"activeSets",app.common.types.tokens_lib.get_active_themes_set_names(tokens_lib)], null));
});
/**
 * Convert a TokensLib into a plain clojure map, suitable to be encoded as a multi sets json string in DTCG format.
 */
app.common.types.tokens_lib.export_dtcg_json = (function app$common$types$tokens_lib$export_dtcg_json(tokens_lib){
var vec__51410 = app.common.types.tokens_lib.dtcg_export_themes(tokens_lib);
var themes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51410,(0),null);
var active_themes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51410,(1),null);
var name_set_tuples = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (set){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.tokens_lib.get_name(set),app.common.types.tokens_lib.tokens_tree.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.get_tokens_(set),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-token-fn","update-token-fn",-805038447),app.common.types.tokens_lib.token__GT_dtcg_token], 0))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.instance_QMARK_,app.common.types.tokens_lib.TokenSet),cljs.core.tree_seq(app.common.data.ordered_map_QMARK_,cljs.core.vals,app.common.types.tokens_lib.get_set_tree(tokens_lib))));
var ordered_set_names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,name_set_tuples);
var sets = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,name_set_tuples);
var active_set_names = app.common.types.tokens_lib.get_active_themes_set_names(tokens_lib);
if(cljs.core.truth_(app.common.types.tokens_lib.empty_lib_QMARK_(tokens_lib))){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sets,"$themes",themes),"$metadata",new cljs.core.PersistentArrayMap(null, 3, ["tokenSetOrder",ordered_set_names,"activeThemes",active_themes,"activeSets",active_set_names], null));
}
});
/**
 * Search for all tokens in the decoded json file that have a type that is not currently
 * supported by Penpot. Returns a map token-path -> token type.
 */
app.common.types.tokens_lib.get_tokens_of_unknown_type = (function app$common$types$tokens_lib$get_tokens_of_unknown_type(decoded_json,p__51413){
var map__51414 = p__51413;
var map__51414__$1 = cljs.core.__destructure_map(map__51414);
var opts = map__51414__$1;
var json_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51414__$1,new cljs.core.Keyword(null,"json-format","json-format",-1581359788),app.common.types.tokens_lib.get_json_format.cljs$core$IFn$_invoke$arity$1(decoded_json));
var parent_path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51414__$1,new cljs.core.Keyword(null,"parent-path","parent-path",-2115866866),"");
var process_token_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51414__$1,new cljs.core.Keyword(null,"process-token-type","process-token-type",1139715555),cljs.core.identity);
var type_key = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(json_format,new cljs.core.Keyword("json-format","dtcg","json-format/dtcg",-2034606706)))?"$type":"type");
return cljs.core.reduce_kv((function (unknown_tokens,k,v){
var child_path = ((cljs.core.empty_QMARK_(parent_path))?cljs.core.name(k):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_path),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
if(((cljs.core.map_QMARK_(v)) && ((!(cljs.core.contains_QMARK_(v,type_key)))))){
var nested_unknown_tokens = (function (){var G__51415 = v;
var G__51416 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"parent-path","parent-path",-2115866866),child_path);
return (app.common.types.tokens_lib.get_tokens_of_unknown_type.cljs$core$IFn$_invoke$arity$2 ? app.common.types.tokens_lib.get_tokens_of_unknown_type.cljs$core$IFn$_invoke$arity$2(G__51415,G__51416) : app.common.types.tokens_lib.get_tokens_of_unknown_type.call(null,G__51415,G__51416));
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unknown_tokens,nested_unknown_tokens], 0));
} else {
var token_type_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,type_key);
var token_type = (function (){var G__51417 = (app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1(token_type_str) : app.common.types.token.dtcg_token_type__GT_token_type.call(null,token_type_str));
return (process_token_type.cljs$core$IFn$_invoke$arity$1 ? process_token_type.cljs$core$IFn$_invoke$arity$1(G__51417) : process_token_type.call(null,G__51417));
})();
if((((!((!((token_type == null)))))) && ((!((token_type_str == null)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(unknown_tokens,child_path,token_type_str);
} else {
return unknown_tokens;
}
}
}),null,decoded_json);
});
app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"penpot/tokens-lib",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.types.tokens_lib.TokensLib,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),clojure.datafy.datafy,new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (p1__51418_SHARP_){
return app.common.types.tokens_lib.make_tokens_lib.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51418_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"penpot/token-set",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.types.tokens_lib.TokenSet,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),clojure.datafy.datafy,new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (p1__51419_SHARP_){
return app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51419_SHARP_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"penpot/token-theme",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.types.tokens_lib.TokenTheme,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),clojure.datafy.datafy,new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (p1__51420_SHARP_){
return app.common.types.tokens_lib.map__GT_TokenTheme(p1__51420_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"penpot/token",new cljs.core.Keyword(null,"class","class",-2030961996),app.common.types.tokens_lib.Token,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),clojure.datafy.datafy,new cljs.core.Keyword(null,"rfn","rfn",-990883444),(function (p1__51421_SHARP_){
return app.common.types.tokens_lib.map__GT_Token(p1__51421_SHARP_);
})], null)], 0));
/**
 * Given an instance of TokensLib fixes it internal sets data sturcture
 *   for ensure each set has unique id;
 * 
 *   Specific function for file data migrations
 */
app.common.types.tokens_lib.fix_duplicate_token_set_ids = (function app$common$types$tokens_lib$fix_duplicate_token_set_ids(tokens_lib){
var seen_ids = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
var migrate_set_node = (function app$common$types$tokens_lib$fix_duplicate_token_set_ids_$_recurse(node){
if(app.common.types.tokens_lib.token_set_QMARK_(node)){
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_ids),app.common.types.tokens_lib.get_id(node))){
return app.common.types.tokens_lib.map__GT_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.datafy.datafy(node),new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next())], 0));
} else {
seen_ids.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_ids.cljs$core$IDeref$_deref$arity$1(null),app.common.types.tokens_lib.get_id(node)));

return node;
}
} else {
return app.common.data.update_vals(node,app$common$types$tokens_lib$fix_duplicate_token_set_ids_$_recurse);
}
});
var G__51427 = tokens_lib;
if((G__51427 == null)){
return null;
} else {
return app.common.types.tokens_lib.map__GT_tokens_lib.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(clojure.datafy.datafy(G__51427),new cljs.core.Keyword(null,"sets","sets",400955582),app.common.data.update_vals,migrate_set_node)], 0)).app$common$types$tokens_lib$IValidation$check$arity$1(null);
}
});

//# sourceMappingURL=app.common.types.tokens_lib.js.map
