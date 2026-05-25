import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.exceptions.js";
import "./app.common.time.js";
import "./app.common.transit.js";
import "./app.util.functions.js";
import "./app.util.globals.js";
import "./cuerdas.core.js";
import "./okulary.util.js";
goog.provide('app.util.storage');
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.storage !== 'undefined') && (typeof app.util.storage.local_storage !== 'undefined')){
} else {
app.util.storage.local_storage = (function (){try{return (app.util.globals.global["localStorage"]);
}catch (e46213){var e__43136__auto__ = e46213;
return null;
}})();
}
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.storage !== 'undefined') && (typeof app.util.storage.session_storage !== 'undefined')){
} else {
app.util.storage.session_storage = (function (){try{return (app.util.globals.global["sessionStorage"]);
}catch (e46216){var e__43136__auto__ = e46216;
return null;
}})();
}
/**
 * Dynamic variable which determines the mode of operation of the
 *   storage mutatio actions. By default is asynchronous.
 */
app.util.storage._STAR_sync_STAR_ = false;
app.util.storage.encode_key = (function app$util$storage$encode_key(prefix,k){
if((k instanceof cljs.core.Keyword)){
} else {
throw (new Error(["Assert failed: ","key must be keyword","\n","(keyword? k)"].join('')));
}

var kns = cljs.core.namespace(k);
var kn = cljs.core.name(k);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),":",kns,"/",kn].join('');
});
app.util.storage.decode_key = (function app$util$storage$decode_key(prefix,k){
if(cuerdas.core.starts_with_QMARK_(k,prefix)){
var l = (cljs.core.count(prefix) + (1));
var k__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(k,l);
if(cuerdas.core.starts_with_QMARK_(k__$1,"/")){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(k__$1,(1)));
} else {
var vec__46228 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(k__$1,"/",(2));
var kns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46228,(0),null);
var kn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46228,(1),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(kns,kn);
}
} else {
return null;
}
});
app.util.storage.lookup_by_index = (function app$util$storage$lookup_by_index(backend,prefix,result,index){
try{var key = backend.key(index);
var key_SINGLEQUOTE_ = app.util.storage.decode_key(prefix,key);
if(cljs.core.truth_(key_SINGLEQUOTE_)){
var val = backend.getItem(key);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(result,key_SINGLEQUOTE_,app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(val));
} else {
return result;
}
}catch (e46245){var _ = e46245;
return result;
}});
app.util.storage.load_data = (function app$util$storage$load_data(backend,prefix){
if((!((backend == null)))){
var length = backend.length;
var index = (0);
var result = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((index < length)){
var G__46331 = (index + (1));
var G__46332 = app.util.storage.lookup_by_index(backend,prefix,result,index);
index = G__46331;
result = G__46332;
continue;
} else {
return cljs.core.persistent_BANG_(result);
}
break;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
app.util.storage.set_item = (function app$util$storage$set_item(storage,key,val){
if((((!((storage == null)))) && (typeof key === 'string'))){
return storage.setItem(key,val);
} else {
return null;
}
});
app.util.storage.get_item = (function app$util$storage$get_item(storage,key){
if((!((storage == null)))){
return storage.getItem(key);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
app.util.storage.t_app$util$storage46269 = (function (last_data,curr_data,on_change,backend,watches,update_key,prefix,on_change_STAR_,initial,meta46270){
this.last_data = last_data;
this.curr_data = curr_data;
this.on_change = on_change;
this.backend = backend;
this.watches = watches;
this.update_key = update_key;
this.prefix = prefix;
this.on_change_STAR_ = on_change_STAR_;
this.initial = initial;
this.meta46270 = meta46270;
this.cljs$lang$protocol_mask$partition0$ = 426240;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(app.util.storage.t_app$util$storage46269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46271,meta46270__$1){
var self__ = this;
var _46271__$1 = this;
return (new app.util.storage.t_app$util$storage46269(self__.last_data,self__.curr_data,self__.on_change,self__.backend,self__.watches,self__.update_key,self__.prefix,self__.on_change_STAR_,self__.initial,meta46270__$1));
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46271){
var self__ = this;
var _46271__$1 = this;
return self__.meta46270;
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.curr_data["content"]);
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return coll__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var state = (self__.curr_data["content"]);
return cljs.core._lookup(state,k,not_found);
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (self,newval){
var self__ = this;
var self__$1 = this;
var oldval = (self__.curr_data["content"]);
(self__.curr_data["content"] = newval);

if(cljs.core.truth_(app.util.storage._STAR_sync_STAR_)){
(self__.on_change_STAR_.cljs$core$IFn$_invoke$arity$1 ? self__.on_change_STAR_.cljs$core$IFn$_invoke$arity$1(newval) : self__.on_change_STAR_.call(null,newval));
} else {
(self__.on_change.cljs$core$IFn$_invoke$arity$1 ? self__.on_change.cljs$core$IFn$_invoke$arity$1(newval) : self__.on_change.call(null,newval));
}

if((self__.watches.size > (0))){
self__$1.cljs$core$IWatchable$_notify_watches$arity$3(null,oldval,newval);
} else {
}

return newval;
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (self,f){
var self__ = this;
var self__$1 = this;
var state = (self__.curr_data["content"]);
return self__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state)));
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (self,f,x){
var self__ = this;
var self__$1 = this;
var state = (self__.curr_data["content"]);
return self__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(state,x) : f.call(null,state,x)));
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (self,f,x,y){
var self__ = this;
var self__$1 = this;
var state = (self__.curr_data["content"]);
return self__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(state,x,y) : f.call(null,state,x,y)));
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (self,f,x,y,more){
var self__ = this;
var self__$1 = this;
var state = (self__.curr_data["content"]);
return self__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,state,x,y,more));
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (self,oldval,newval){
var self__ = this;
var self__$1 = this;
return okulary.util.doiter(self__.watches.entries(),(function (n){
var f = (n[(1)]);
var k = (n[(0)]);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(k,self__$1,oldval,newval) : f.call(null,k,self__$1,oldval,newval));
}));
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (self,key,f){
var self__ = this;
var self__$1 = this;
self__.watches.set(key,f);

return self__$1;
}));

(app.util.storage.t_app$util$storage46269.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return self__.watches.delete(key);
}));

(app.util.storage.t_app$util$storage46269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"last-data","last-data",1354406304,null),new cljs.core.Symbol(null,"curr-data","curr-data",-508471998,null),new cljs.core.Symbol(null,"on-change","on-change",908485378,null),new cljs.core.Symbol(null,"backend","backend",793042403,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update-key","update-key",116846857,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"on-change*","on-change*",1978139542,null),new cljs.core.Symbol(null,"initial","initial",-799787555,null),new cljs.core.Symbol(null,"meta46270","meta46270",-1814830819,null)], null);
}));

(app.util.storage.t_app$util$storage46269.cljs$lang$type = true);

(app.util.storage.t_app$util$storage46269.cljs$lang$ctorStr = "app.util.storage/t_app$util$storage46269");

(app.util.storage.t_app$util$storage46269.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.util.storage/t_app$util$storage46269");
}));

/**
 * Positional factory function for app.util.storage/t_app$util$storage46269.
 */
app.util.storage.__GT_t_app$util$storage46269 = (function app$util$storage$__GT_t_app$util$storage46269(last_data,curr_data,on_change,backend,watches,update_key,prefix,on_change_STAR_,initial,meta46270){
return (new app.util.storage.t_app$util$storage46269(last_data,curr_data,on_change,backend,watches,update_key,prefix,on_change_STAR_,initial,meta46270));
});


app.util.storage.create_storage = (function app$util$storage$create_storage(backend,prefix){
var initial = app.util.storage.load_data(backend,prefix);
var curr_data = ({"content": initial});
var last_data = ({"content": initial});
var watches = (new Map());
var update_key = (function (key,val){
if((!((backend == null)))){
if((!((val == null)))){
return backend.setItem(app.util.storage.encode_key(prefix,key),app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),true], null)));
} else {
return backend.removeItem(app.util.storage.encode_key(prefix,key));
}
} else {
return null;
}
});
var on_change_STAR_ = (function (curr_state){
var prev_state = (last_data["content"]);
try{return cljs.core.run_BANG_((function (key){
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_state,key);
var curr_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(curr_state,key);
if((curr_val === prev_val)){
return null;
} else {
return update_key(key,curr_val);
}
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(curr_state),cljs.core.keys(prev_state))));
}finally {(last_data["content"] = curr_state);
}});
var on_change = app.util.functions.debounce.cljs$core$IFn$_invoke$arity$2(on_change_STAR_,(2000));
return (new app.util.storage.t_app$util$storage46269(last_data,curr_data,on_change,backend,watches,update_key,prefix,on_change_STAR_,initial,cljs.core.PersistentArrayMap.EMPTY));
});
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.storage !== 'undefined') && (typeof app.util.storage.global !== 'undefined')){
} else {
app.util.storage.global = app.util.storage.create_storage(app.util.storage.local_storage,"penpot-global");
}
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.storage !== 'undefined') && (typeof app.util.storage.user !== 'undefined')){
} else {
app.util.storage.user = app.util.storage.create_storage(app.util.storage.local_storage,"penpot-user");
}
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.storage !== 'undefined') && (typeof app.util.storage.storage !== 'undefined')){
} else {
app.util.storage.storage = app.util.storage.create_storage(app.util.storage.local_storage,"penpot");
}
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.storage !== 'undefined') && (typeof app.util.storage.session !== 'undefined')){
} else {
app.util.storage.session = app.util.storage.create_storage(app.util.storage.session_storage,"penpot");
}
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.storage !== 'undefined') && (typeof app.util.storage.before_unload !== 'undefined')){
} else {
app.util.storage.before_unload = (function (){var on_before_unload = (function app$util$storage$on_before_unload(_){
var _STAR_sync_STAR__orig_val__46324 = app.util.storage._STAR_sync_STAR_;
var _STAR_sync_STAR__temp_val__46325 = true;
(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__temp_val__46325);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.global,cljs.core.assoc,new cljs.core.Keyword("app.util.storage","last-refresh","app.util.storage/last-refresh",-1234332050),app.common.time.now());

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,new cljs.core.Keyword("app.util.storage","last-refresh","app.util.storage/last-refresh",-1234332050),app.common.time.now());
}finally {(app.util.storage._STAR_sync_STAR_ = _STAR_sync_STAR__orig_val__46324);
}});
app.util.globals.window.addEventListener("beforeunload",on_before_unload);

return on_before_unload;
})();
}

//# sourceMappingURL=app.util.storage.js.map
