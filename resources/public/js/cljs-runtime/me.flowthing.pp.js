import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('me.flowthing.pp');
/**
 * Given a (presumably qualified) ident, return an unqualified version
 *   of the ident.
 */
me.flowthing.pp.strip_ns = (function me$flowthing$pp$strip_ns(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(x));
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(x));
} else {
return null;
}
}
});
/**
 * Given a map, iff the keys in the map are qualified idents that share
 *   a namespace, return a tuple where the first item is the namespace
 *   name (a string) and the second item is a copy of the original map
 *   but with unqualified idents.
 */
me.flowthing.pp.extract_map_ns = (function me$flowthing$pp$extract_map_ns(m){
if(cljs.core.seq(m)){
var m__$1 = m;
var ns = null;
var nm = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var temp__5827__auto__ = cljs.core.first(m__$1);
if((temp__5827__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,nm], null);
} else {
var vec__29034 = temp__5827__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29034,(1),null);
if(cljs.core.qualified_ident_QMARK_(k)){
var k_ns = cljs.core.namespace(k);
if((((ns == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,k_ns)))){
var G__29176 = cljs.core.rest(m__$1);
var G__29177 = k_ns;
var G__29178 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nm,me.flowthing.pp.strip_ns(k),v);
m__$1 = G__29176;
ns = G__29177;
nm = G__29178;
continue;
} else {
return null;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Return the opening delimiter (a string) of coll.
 */
me.flowthing.pp.open_delim = (function me$flowthing$pp$open_delim(coll){
if(cljs.core.map_QMARK_(coll)){
return "{";
} else {
if(cljs.core.vector_QMARK_(coll)){
return "[";
} else {
if(cljs.core.set_QMARK_(coll)){
return "#{";
} else {
if(cljs.core.array_QMARK_(coll)){
return "[";
} else {
return "(";

}
}
}
}
});
/**
 * Return the closing delimiter (a string) of coll.
 */
me.flowthing.pp.close_delim = (function me$flowthing$pp$close_delim(coll){
if(cljs.core.map_QMARK_(coll)){
return "}";
} else {
if(cljs.core.vector_QMARK_(coll)){
return "]";
} else {
if(cljs.core.set_QMARK_(coll)){
return "}";
} else {
if(cljs.core.array_QMARK_(coll)){
return "]";
} else {
return ")";

}
}
}
}
});

/**
 * @interface
 */
me.flowthing.pp.CountKeepingWriter = function(){};

var me$flowthing$pp$CountKeepingWriter$write$dyn_29179 = (function (this$,s){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (me.flowthing.pp.write[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__5374__auto__.call(null,this$,s));
} else {
var m__5372__auto__ = (me.flowthing.pp.write["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__5372__auto__.call(null,this$,s));
} else {
throw cljs.core.missing_protocol("CountKeepingWriter.write",this$);
}
}
});
/**
 * Write a string into the underlying java.io.Writer while keeping
 *  count of the length of the strings written into the writer.
 */
me.flowthing.pp.write = (function me$flowthing$pp$write(this$,s){
if((((!((this$ == null)))) && ((!((this$.me$flowthing$pp$CountKeepingWriter$write$arity$2 == null)))))){
return this$.me$flowthing$pp$CountKeepingWriter$write$arity$2(this$,s);
} else {
return me$flowthing$pp$CountKeepingWriter$write$dyn_29179(this$,s);
}
});

var me$flowthing$pp$CountKeepingWriter$remaining$dyn_29181 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (me.flowthing.pp.remaining[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (me.flowthing.pp.remaining["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CountKeepingWriter.remaining",this$);
}
}
});
/**
 * Return the number of characters available on the current line.
 */
me.flowthing.pp.remaining = (function me$flowthing$pp$remaining(this$){
if((((!((this$ == null)))) && ((!((this$.me$flowthing$pp$CountKeepingWriter$remaining$arity$1 == null)))))){
return this$.me$flowthing$pp$CountKeepingWriter$remaining$arity$1(this$);
} else {
return me$flowthing$pp$CountKeepingWriter$remaining$dyn_29181(this$);
}
});

var me$flowthing$pp$CountKeepingWriter$nl$dyn_29183 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (me.flowthing.pp.nl[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (me.flowthing.pp.nl["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CountKeepingWriter.nl",this$);
}
}
});
/**
 * Write a newline into the underlying java.io.Writer.
 * 
 *  Resets the number of characters allotted to the current line to
 *  zero.
 */
me.flowthing.pp.nl = (function me$flowthing$pp$nl(this$){
if((((!((this$ == null)))) && ((!((this$.me$flowthing$pp$CountKeepingWriter$nl$arity$1 == null)))))){
return this$.me$flowthing$pp$CountKeepingWriter$nl$arity$1(this$);
} else {
return me$flowthing$pp$CountKeepingWriter$nl$dyn_29183(this$);
}
});

/**
 * Given a writer (java.io.Writer or cljs.core.IWriter) and a string,
 *   write the string into the writer.
 */
me.flowthing.pp.write_into = (function me$flowthing$pp$write_into(writer,s){
return cljs.core._write(writer,s);
});
/**
 * Given a string, return the length of the string.
 * 
 *   Since java.lang.String isn't counted?, (.length s) is faster than (count s).
 */
me.flowthing.pp.strlen = (function me$flowthing$pp$strlen(s){
return s.length;
});

/**
* @constructor
 * @implements {me.flowthing.pp.CountKeepingWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
me.flowthing.pp.t_me$flowthing$pp29041 = (function (writer,opts,max_width,c,meta29042){
this.writer = writer;
this.opts = opts;
this.max_width = max_width;
this.c = c;
this.meta29042 = meta29042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(me.flowthing.pp.t_me$flowthing$pp29041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29043,meta29042__$1){
var self__ = this;
var _29043__$1 = this;
return (new me.flowthing.pp.t_me$flowthing$pp29041(self__.writer,self__.opts,self__.max_width,self__.c,meta29042__$1));
}));

(me.flowthing.pp.t_me$flowthing$pp29041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29043){
var self__ = this;
var _29043__$1 = this;
return self__.meta29042;
}));

(me.flowthing.pp.t_me$flowthing$pp29041.prototype.me$flowthing$pp$CountKeepingWriter$ = cljs.core.PROTOCOL_SENTINEL);

(me.flowthing.pp.t_me$flowthing$pp29041.prototype.me$flowthing$pp$CountKeepingWriter$write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
me.flowthing.pp.write_into(self__.writer,s);

cljs.core._vreset_BANG_(self__.c,(function (n){
return (n + me.flowthing.pp.strlen(s));
})(cljs.core._deref(self__.c)));

return null;
}));

(me.flowthing.pp.t_me$flowthing$pp29041.prototype.me$flowthing$pp$CountKeepingWriter$remaining$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.max_width - cljs.core.deref(self__.c));
}));

(me.flowthing.pp.t_me$flowthing$pp29041.prototype.me$flowthing$pp$CountKeepingWriter$nl$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
me.flowthing.pp.write_into(self__.writer,"\n");

cljs.core.vreset_BANG_(self__.c,(0));

return null;
}));

(me.flowthing.pp.t_me$flowthing$pp29041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"meta29042","meta29042",-182974651,null)], null);
}));

(me.flowthing.pp.t_me$flowthing$pp29041.cljs$lang$type = true);

(me.flowthing.pp.t_me$flowthing$pp29041.cljs$lang$ctorStr = "me.flowthing.pp/t_me$flowthing$pp29041");

(me.flowthing.pp.t_me$flowthing$pp29041.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"me.flowthing.pp/t_me$flowthing$pp29041");
}));

/**
 * Positional factory function for me.flowthing.pp/t_me$flowthing$pp29041.
 */
me.flowthing.pp.__GT_t_me$flowthing$pp29041 = (function me$flowthing$pp$__GT_t_me$flowthing$pp29041(writer,opts,max_width,c,meta29042){
return (new me.flowthing.pp.t_me$flowthing$pp29041(writer,opts,max_width,c,meta29042));
});


/**
 * Given a java.io.Writer and an options map, wrap the java.io.Writer
 *   such that it becomes a CountKeepingWriter: a writer that keeps count
 *   of the length of the strings written into each line.
 * 
 *   Options:
 * 
 *  :max-width (long)
 *    Maximum line width.
 */
me.flowthing.pp.count_keeping_writer = (function me$flowthing$pp$count_keeping_writer(writer,opts){
var max_width = new cljs.core.Keyword(null,"max-width","max-width",-1939924051).cljs$core$IFn$_invoke$arity$1(opts);
var c = cljs.core.volatile_BANG_((0));
return (new me.flowthing.pp.t_me$flowthing$pp29041(writer,opts,max_width,c,cljs.core.PersistentArrayMap.EMPTY));
});
me.flowthing.pp.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
me.flowthing.pp.record_name = (function me$flowthing$pp$record_name(record){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(record)], 0));
});
/**
 * Given a coll, return a tuple where the first item is the coll's
 *   opening delimiter and the second item is the coll.
 * 
 *   If *print-namespace-maps* is true, the coll is a map, and the map is
 *   amenable to the map namespace syntax, the open delimiter includes
 *   the map namespace prefix and the map keys are unqualified.
 * 
 *   If the coll is a record, the open delimiter includes the record name
 *   prefix.
 */
me.flowthing.pp.open_delim_PLUS_form = (function me$flowthing$pp$open_delim_PLUS_form(coll){
if(cljs.core.record_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["#",me.flowthing.pp.record_name(coll),"{"].join(''),coll], null);
} else {
var vec__29046 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._STAR_print_namespace_maps_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.map_QMARK_(coll);
} else {
return and__5023__auto__;
}
})())?me.flowthing.pp.extract_map_ns(coll):null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29046,(0),null);
var ns_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29046,(1),null);
var coll__$1 = (cljs.core.truth_(ns)?ns_map:coll);
var o = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):me.flowthing.pp.open_delim(coll__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,coll__$1], null);
}
});
/**
 * Given a level (a long), return true if the level is the same as
 *   *print-level*.
 */
me.flowthing.pp.meets_print_level_QMARK_ = (function me$flowthing$pp$meets_print_level_QMARK_(level){
return ((cljs.core.int_QMARK_(cljs.core._STAR_print_level_STAR_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,cljs.core._STAR_print_level_STAR_)));
});
/**
 * Print a map entry within a map.
 */
me.flowthing.pp._print_map_entry = (function me$flowthing$pp$_print_map_entry(this$,writer,opts){
if(me.flowthing.pp.meets_print_level_QMARK_(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(opts))){
return me.flowthing.pp.write_into(writer,"#");
} else {
var opts__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.inc);
var G__29053_29184 = cljs.core.key(this$);
var G__29054_29185 = writer;
var G__29055_29186 = opts__$1;
(me.flowthing.pp._print.cljs$core$IFn$_invoke$arity$3 ? me.flowthing.pp._print.cljs$core$IFn$_invoke$arity$3(G__29053_29184,G__29054_29185,G__29055_29186) : me.flowthing.pp._print.call(null,G__29053_29184,G__29054_29185,G__29055_29186));

me.flowthing.pp.write_into(writer," ");

var G__29056 = cljs.core.val(this$);
var G__29057 = writer;
var G__29058 = opts__$1;
return (me.flowthing.pp._print.cljs$core$IFn$_invoke$arity$3 ? me.flowthing.pp._print.cljs$core$IFn$_invoke$arity$3(G__29056,G__29057,G__29058) : me.flowthing.pp._print.call(null,G__29056,G__29057,G__29058));
}
});
/**
 * Like -print, but only for maps.
 */
me.flowthing.pp._print_map = (function me$flowthing$pp$_print_map(coll,writer,opts){
if(me.flowthing.pp.meets_print_level_QMARK_(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(opts,(0)))){
return me.flowthing.pp.write_into(writer,"#");
} else {
var vec__29059 = me.flowthing.pp.open_delim_PLUS_form(coll);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(1),null);
me.flowthing.pp.write_into(writer,o);

if(cljs.core.seq(form)){
var form_29187__$1 = form;
var index_29188 = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_29188,cljs.core._STAR_print_length_STAR_)){
me.flowthing.pp.write_into(writer,"...");
} else {
var f_29189 = cljs.core.first(form_29187__$1);
var n_29190 = cljs.core.next(form_29187__$1);
me.flowthing.pp._print_map_entry(f_29189,writer,cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.inc));

if(cljs.core.empty_QMARK_(n_29190)){
} else {
me.flowthing.pp.write_into(writer,new cljs.core.Keyword(null,"map-entry-separator","map-entry-separator",-1791684417).cljs$core$IFn$_invoke$arity$1(opts));

me.flowthing.pp.write_into(writer," ");

var G__29191 = n_29190;
var G__29192 = (index_29188 + (1));
form_29187__$1 = G__29191;
index_29188 = G__29192;
continue;
}
}
break;
}
} else {
}

return me.flowthing.pp.write_into(writer,me.flowthing.pp.close_delim(form));
}
});
/**
 * Like -print, but only for lists, vectors, and sets.
 */
me.flowthing.pp._print_coll = (function me$flowthing$pp$_print_coll(coll,writer,opts){
if(me.flowthing.pp.meets_print_level_QMARK_(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(opts,(0)))){
return me.flowthing.pp.write_into(writer,"#");
} else {
var vec__29066 = me.flowthing.pp.open_delim_PLUS_form(coll);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29066,(1),null);
me.flowthing.pp.write_into(writer,o);

if(cljs.core.seq(form)){
var form_29193__$1 = form;
var index_29194 = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_29194,cljs.core._STAR_print_length_STAR_)){
me.flowthing.pp.write_into(writer,"...");
} else {
var f_29195 = cljs.core.first(form_29193__$1);
var n_29196 = cljs.core.next(form_29193__$1);
var G__29074_29197 = f_29195;
var G__29075_29198 = writer;
var G__29076_29199 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.inc);
(me.flowthing.pp._print.cljs$core$IFn$_invoke$arity$3 ? me.flowthing.pp._print.cljs$core$IFn$_invoke$arity$3(G__29074_29197,G__29075_29198,G__29076_29199) : me.flowthing.pp._print.call(null,G__29074_29197,G__29075_29198,G__29076_29199));

if(cljs.core.empty_QMARK_(n_29196)){
} else {
me.flowthing.pp.write_into(writer," ");

var G__29202 = n_29196;
var G__29203 = (index_29194 + (1));
form_29193__$1 = G__29202;
index_29194 = G__29203;
continue;
}
}
break;
}
} else {
}

return me.flowthing.pp.write_into(writer,me.flowthing.pp.close_delim(form));
}
});
me.flowthing.pp._print_seq = (function me$flowthing$pp$_print_seq(this$,writer,opts){
var temp__5827__auto__ = (function (){var G__29077 = cljs.core.first(this$);
return (me.flowthing.pp.reader_macros.cljs$core$IFn$_invoke$arity$1 ? me.flowthing.pp.reader_macros.cljs$core$IFn$_invoke$arity$1(G__29077) : me.flowthing.pp.reader_macros.call(null,G__29077));
})();
if((temp__5827__auto__ == null)){
return me.flowthing.pp._print_coll(this$,writer,opts);
} else {
var reader_macro = temp__5827__auto__;
me.flowthing.pp.write_into(writer,reader_macro);

return me.flowthing.pp.write_into(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second(this$)], 0)));
}
});
me.flowthing.pp._print = (function me$flowthing$pp$_print(this$,writer,opts){
if((this$ == null)){
return me.flowthing.pp.write_into(writer,"nil");
} else {
if(cljs.core.seq_QMARK_(this$)){
return me.flowthing.pp._print_seq(this$,writer,opts);
} else {
if(cljs.core.map_QMARK_(this$)){
return me.flowthing.pp._print_map(this$,writer,opts);
} else {
if(cljs.core.vector_QMARK_(this$)){
return me.flowthing.pp._print_coll(this$,writer,opts);
} else {
if(cljs.core.set_QMARK_(this$)){
return me.flowthing.pp._print_coll(this$,writer,opts);
} else {
return me.flowthing.pp.write_into(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)));

}
}
}
}
}
});
/**
 * Given a function, create a java.io.StringWriter (Clojure) or a
 *   goog.string.StringBuffer (ClojureScript), pass it to the function, and
 *   return the string value in the writer/buffer.
 */
me.flowthing.pp.with_str_writer = (function me$flowthing$pp$with_str_writer(f){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(writer) : f.call(null,writer));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
});
/**
 * Print a form in linear style (without regard to line length).
 * 
 *   Given one arg (a form), print the form into a string using the
 *   default options.
 * 
 *   Given two args (a form and an options map), print the form into a
 *   string using the given options.
 * 
 *   Given three args (a java.io.Writer, a form, and an options map), print
 *   the form into the writer using the given options.
 * 
 *   Options:
 * 
 *  :level (long)
 *    The current nesting level.
 */
me.flowthing.pp.print_linear = (function me$flowthing$pp$print_linear(var_args){
var G__29083 = arguments.length;
switch (G__29083) {
case 1:
return me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$1 = (function (form){
return me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$2(form,null);
}));

(me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$2 = (function (form,opts){
return me.flowthing.pp.with_str_writer((function (writer){
return me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$3(writer,form,opts);
}));
}));

(me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$3 = (function (writer,form,opts){
return me.flowthing.pp._print(form,writer,opts);
}));

(me.flowthing.pp.print_linear.cljs$lang$maxFixedArity = 3);

/**
 * Given a CountKeepingWriter, a form, and an options map, return a keyword
 *   indicating a printing mode (:linear or :miser).
 */
me.flowthing.pp.print_mode = (function me$flowthing$pp$print_mode(writer,form,opts){
var reserve_chars = new cljs.core.Keyword(null,"reserve-chars","reserve-chars",1038553515).cljs$core$IFn$_invoke$arity$1(opts);
var s = me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$2(form,opts);
if((me.flowthing.pp.strlen(s) <= (me.flowthing.pp.remaining(writer) - reserve_chars))){
return new cljs.core.Keyword(null,"linear","linear",872268697);
} else {
return new cljs.core.Keyword(null,"miser","miser",-556060186);
}
});
/**
 * Given a CountKeepingWriter and a printing mode, print a separator (a
 *   space or a newline) into the writer.
 */
me.flowthing.pp.write_sep = (function me$flowthing$pp$write_sep(writer,mode){
var G__29086 = mode;
var G__29086__$1 = (((G__29086 instanceof cljs.core.Keyword))?G__29086.fqn:null);
switch (G__29086__$1) {
case "miser":
return me.flowthing.pp.nl(writer);

break;
default:
return me.flowthing.pp.write(writer," ");

}
});
me.flowthing.pp.pprint_meta = (function me$flowthing$pp$pprint_meta(form,writer,opts,mode){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._STAR_print_meta_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._STAR_print_readably_STAR_;
} else {
return and__5023__auto__;
}
})())){
var temp__5829__auto__ = cljs.core.meta(form);
if((temp__5829__auto__ == null)){
return null;
} else {
var m = temp__5829__auto__;
if(cljs.core.seq(m)){
me.flowthing.pp.write(writer,"^");

var m_29215__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),(1));
if(and__5023__auto__){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return and__5023__auto__;
}
})())?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):m);
(me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3 ? me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3(m_29215__$1,writer,opts) : me.flowthing.pp._pprint.call(null,m_29215__$1,writer,opts));

return me.flowthing.pp.write_sep(writer,mode);
} else {
return null;
}
}
} else {
return null;
}
});
me.flowthing.pp.pprint_opts = (function me$flowthing$pp$pprint_opts(open_delim,opts){
var indentation = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"indentation","indentation",-902544874).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ".repeat(me.flowthing.pp.strlen(open_delim)))].join('');
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"indentation","indentation",-902544874),indentation),new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.inc);
});
/**
 * Like -pprint, but only for lists, vectors and sets.
 */
me.flowthing.pp._pprint_coll = (function me$flowthing$pp$_pprint_coll(this$,writer,opts){
if(me.flowthing.pp.meets_print_level_QMARK_(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(opts))){
return me.flowthing.pp.write(writer,"#");
} else {
var vec__29095 = me.flowthing.pp.open_delim_PLUS_form(this$);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29095,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29095,(1),null);
var mode = me.flowthing.pp.print_mode(writer,this$,opts);
var opts__$1 = me.flowthing.pp.pprint_opts(o,opts);
me.flowthing.pp.pprint_meta(form,writer,opts__$1,mode);

me.flowthing.pp.write(writer,o);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_print_length_STAR_,(0))){
me.flowthing.pp.write(writer,"...");
} else {
if(cljs.core.seq(form)){
var form_29217__$1 = form;
var index_29218 = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_29218,cljs.core._STAR_print_length_STAR_)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"miser","miser",-556060186))){
me.flowthing.pp.write(writer,new cljs.core.Keyword(null,"indentation","indentation",-902544874).cljs$core$IFn$_invoke$arity$1(opts__$1));
} else {
}

me.flowthing.pp.write(writer,"...");
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"miser","miser",-556060186))) && ((index_29218 > (0))))){
me.flowthing.pp.write(writer,new cljs.core.Keyword(null,"indentation","indentation",-902544874).cljs$core$IFn$_invoke$arity$1(opts__$1));
} else {
}

var f_29219 = cljs.core.first(form_29217__$1);
var n_29220 = cljs.core.next(form_29217__$1);
if(cljs.core.empty_QMARK_(n_29220)){
var G__29109_29221 = f_29219;
var G__29110_29222 = writer;
var G__29111_29224 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"reserve-chars","reserve-chars",1038553515),cljs.core.inc);
(me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3 ? me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3(G__29109_29221,G__29110_29222,G__29111_29224) : me.flowthing.pp._pprint.call(null,G__29109_29221,G__29110_29222,G__29111_29224));
} else {
var G__29115_29225 = f_29219;
var G__29116_29226 = writer;
var G__29117_29227 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"reserve-chars","reserve-chars",1038553515),(0));
(me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3 ? me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3(G__29115_29225,G__29116_29226,G__29117_29227) : me.flowthing.pp._pprint.call(null,G__29115_29225,G__29116_29226,G__29117_29227));

me.flowthing.pp.write_sep(writer,mode);

var G__29228 = n_29220;
var G__29229 = (index_29218 + (1));
form_29217__$1 = G__29228;
index_29218 = G__29229;
continue;
}
}
break;
}
} else {
}
}

return me.flowthing.pp.write(writer,me.flowthing.pp.close_delim(form));
}
});
/**
 * Pretty-print a map entry within a map.
 */
me.flowthing.pp._pprint_map_entry = (function me$flowthing$pp$_pprint_map_entry(this$,writer,opts){
if(me.flowthing.pp.meets_print_level_QMARK_(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(opts))){
return me.flowthing.pp.write(writer,"#");
} else {
var k = cljs.core.key(this$);
var opts__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.inc);
(me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3 ? me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3(k,writer,opts__$1) : me.flowthing.pp._pprint.call(null,k,writer,opts__$1));

var v = cljs.core.val(this$);
var mode = me.flowthing.pp.print_mode(writer,v,cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"reserve-chars","reserve-chars",1038553515),cljs.core.inc));
me.flowthing.pp.write_sep(writer,mode);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"miser","miser",-556060186),mode)){
me.flowthing.pp.write(writer,new cljs.core.Keyword(null,"indentation","indentation",-902544874).cljs$core$IFn$_invoke$arity$1(opts__$1));
} else {
}

return (me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3 ? me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3(v,writer,opts__$1) : me.flowthing.pp._pprint.call(null,v,writer,opts__$1));
}
});
/**
 * Like -pprint, but only for maps.
 */
me.flowthing.pp._pprint_map = (function me$flowthing$pp$_pprint_map(this$,writer,opts){
if(me.flowthing.pp.meets_print_level_QMARK_(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(opts))){
return me.flowthing.pp.write(writer,"#");
} else {
var vec__29132 = me.flowthing.pp.open_delim_PLUS_form(this$);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29132,(0),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29132,(1),null);
var mode = me.flowthing.pp.print_mode(writer,this$,opts);
var opts__$1 = me.flowthing.pp.pprint_opts(o,opts);
me.flowthing.pp.pprint_meta(form,writer,opts__$1,mode);

me.flowthing.pp.write(writer,o);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_print_length_STAR_,(0))){
me.flowthing.pp.write(writer,"...");
} else {
if(cljs.core.seq(form)){
var form_29231__$1 = form;
var index_29232 = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index_29232,cljs.core._STAR_print_length_STAR_)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"miser","miser",-556060186))){
me.flowthing.pp.write(writer,new cljs.core.Keyword(null,"indentation","indentation",-902544874).cljs$core$IFn$_invoke$arity$1(opts__$1));
} else {
}

me.flowthing.pp.write(writer,"...");
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"miser","miser",-556060186))) && ((index_29232 > (0))))){
me.flowthing.pp.write(writer,new cljs.core.Keyword(null,"indentation","indentation",-902544874).cljs$core$IFn$_invoke$arity$1(opts__$1));
} else {
}

var f_29236 = cljs.core.first(form_29231__$1);
var n_29237 = cljs.core.next(form_29231__$1);
if(cljs.core.empty_QMARK_(n_29237)){
me.flowthing.pp._pprint_map_entry(f_29236,writer,cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"reserve-chars","reserve-chars",1038553515),cljs.core.inc));
} else {
var map_entry_separator_29238 = new cljs.core.Keyword(null,"map-entry-separator","map-entry-separator",-1791684417).cljs$core$IFn$_invoke$arity$1(opts__$1);
me.flowthing.pp._pprint_map_entry(f_29236,writer,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"reserve-chars","reserve-chars",1038553515),me.flowthing.pp.strlen(map_entry_separator_29238)));

me.flowthing.pp.write(writer,map_entry_separator_29238);

me.flowthing.pp.write_sep(writer,mode);

var G__29239 = n_29237;
var G__29240 = (index_29232 + (1));
form_29231__$1 = G__29239;
index_29232 = G__29240;
continue;
}
}
break;
}
} else {
}
}

return me.flowthing.pp.write(writer,me.flowthing.pp.close_delim(form));
}
});
me.flowthing.pp._pprint_seq = (function me$flowthing$pp$_pprint_seq(this$,writer,opts){
var temp__5827__auto__ = (function (){var G__29136 = cljs.core.first(this$);
return (me.flowthing.pp.reader_macros.cljs$core$IFn$_invoke$arity$1 ? me.flowthing.pp.reader_macros.cljs$core$IFn$_invoke$arity$1(G__29136) : me.flowthing.pp.reader_macros.call(null,G__29136));
})();
if((temp__5827__auto__ == null)){
return me.flowthing.pp._pprint_coll(this$,writer,opts);
} else {
var reader_macro = temp__5827__auto__;
if(me.flowthing.pp.meets_print_level_QMARK_(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(opts))){
return me.flowthing.pp.write(writer,"#");
} else {
me.flowthing.pp.write(writer,reader_macro);

var G__29137 = cljs.core.second(this$);
var G__29138 = writer;
var G__29139 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"indentation","indentation",-902544874),(function (indentation){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(indentation)," "].join('');
}));
return (me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3 ? me.flowthing.pp._pprint.cljs$core$IFn$_invoke$arity$3(G__29137,G__29138,G__29139) : me.flowthing.pp._pprint.call(null,G__29137,G__29138,G__29139));
}
}
});
me.flowthing.pp._pprint_queue = (function me$flowthing$pp$_pprint_queue(this$,writer,opts){
me.flowthing.pp.write(writer,"<-");

me.flowthing.pp._pprint_coll((function (){var or__5025__auto__ = cljs.core.seq(this$);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),writer,cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"indentation","indentation",-902544874),(function (p1__29140_SHARP_){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29140_SHARP_)].join('');
})));

return me.flowthing.pp.write(writer,"-<");
});
me.flowthing.pp._pprint = (function me$flowthing$pp$_pprint(this$,writer,opts){
if((this$ == null)){
return me.flowthing.pp.write(writer,"nil");
} else {
if((this$ instanceof cljs.core.PersistentQueue)){
return me.flowthing.pp._pprint_queue(this$,writer,opts);
} else {
if(cljs.core.seq_QMARK_(this$)){
return me.flowthing.pp._pprint_seq(this$,writer,opts);
} else {
if(cljs.core.map_QMARK_(this$)){
return me.flowthing.pp._pprint_map(this$,writer,opts);
} else {
if(cljs.core.vector_QMARK_(this$)){
return me.flowthing.pp._pprint_coll(this$,writer,opts);
} else {
if(cljs.core.set_QMARK_(this$)){
return me.flowthing.pp._pprint_coll(this$,writer,opts);
} else {
return me.flowthing.pp.write(writer,me.flowthing.pp.print_linear.cljs$core$IFn$_invoke$arity$2(this$,opts));

}
}
}
}
}
}
});
/**
 * Pretty-print an object.
 * 
 *   Given one arg (an object), pretty-print the object into *out* using
 *   the default options.
 * 
 *   Given two args (an object and an options map), pretty-print the object
 *   into *out* using the given options.
 * 
 *   Given three args (a java.io.Writer, a object, and an options map),
 *   pretty-print the object into the writer using the given options.
 * 
 *   If *print-dup* is true, pprint does not attempt to pretty-print;
 *   instead, it falls back to default print-dup behavior. ClojureScript
 *   does not support *print-dup*.
 * 
 *   Options:
 * 
 *  :max-width (long or ##Inf, default: 72)
 *    Avoid printing anything beyond the column indicated by this
 *    value.
 * 
 *  :map-entry-separator (string, default: ",")
 *    The string to print between map entries. To not print commas
 *    between map entries, use an empty string.
 */
me.flowthing.pp.pprint = (function me$flowthing$pp$pprint(var_args){
var G__29158 = arguments.length;
switch (G__29158) {
case 1:
return me.flowthing.pp.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return me.flowthing.pp.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.flowthing.pp.pprint.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.flowthing.pp.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return me.flowthing.pp.pprint.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_out_STAR_,x,null);
}));

(me.flowthing.pp.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,opts){
return me.flowthing.pp.pprint.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_out_STAR_,x,opts);
}));

(me.flowthing.pp.pprint.cljs$core$IFn$_invoke$arity$3 = (function (writer,x,p__29162){
var map__29163 = p__29162;
var map__29163__$1 = cljs.core.__destructure_map(map__29163);
var opts = map__29163__$1;
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29163__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(72));
var map_entry_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29163__$1,new cljs.core.Keyword(null,"map-entry-separator","map-entry-separator",-1791684417),",");
if(((cljs.core.nat_int_QMARK_(max_width)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_width,Infinity)))){
} else {
throw (new Error(["Assert failed: ",":max-width must be a natural int or ##Inf","\n","(or (nat-int? max-width) (= max-width ##Inf))"].join('')));
}

var pp = (function me$flowthing$pp$pp(writer__$1){
var max_width__$1 = (function (){var G__29169 = max_width;
switch (G__29169) {
case Infinity:
return Number.MAX_SAFE_INTEGER;

break;
default:
return max_width;

}
})();
var writer__$2 = me.flowthing.pp.count_keeping_writer(writer__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width__$1], null));
me.flowthing.pp._pprint(x,writer__$2,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"map-entry-separator","map-entry-separator",-1791684417),map_entry_separator,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"indentation","indentation",-902544874),"",new cljs.core.Keyword(null,"reserve-chars","reserve-chars",1038553515),(0)], 0)));

return writer__$2.me$flowthing$pp$CountKeepingWriter$nl$arity$1(null);
});
if(cljs.core.truth_(writer)){
if((((!((writer == null))))?(((((writer.cljs$lang$protocol_mask$partition0$ & (1073741824))) || ((cljs.core.PROTOCOL_SENTINEL === writer.cljs$core$IWriter$))))?true:(((!writer.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWriter,writer):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWriter,writer))){
} else {
throw (new Error(["Assert failed: ","first arg to pprint must be a cljs.core.IWriter","\n","(satisfies? cljs.core.IWriter writer)"].join('')));
}

return pp(writer);
} else {
var sb = (new goog.string.StringBuffer());
var writer__$1 = (new cljs.core.StringBufferWriter(sb));
pp(writer__$1);

cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));

if(cljs.core.truth_(cljs.core._STAR_flush_on_newline_STAR_)){
return writer__$1.cljs$core$IWriter$_flush$arity$1(null);
} else {
return null;
}
}
}));

(me.flowthing.pp.pprint.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=me.flowthing.pp.js.map
