import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$sax.js";
goog.provide('tubax.core');
tubax.core.start_document = (function tubax$core$start_document(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current","current",-1088038603),null], null);
});
tubax.core.parse_node = (function tubax$core$parse_node(var_args){
var G__67425 = arguments.length;
switch (G__67425) {
case 1:
return tubax.core.parse_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tubax.core.parse_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tubax.core.parse_node.cljs$core$IFn$_invoke$arity$1 = (function (node){
return tubax.core.parse_node.cljs$core$IFn$_invoke$arity$2(node,null);
}));

(tubax.core.parse_node.cljs$core$IFn$_invoke$arity$2 = (function (node,p__67426){
var map__67427 = p__67426;
var map__67427__$1 = cljs.core.__destructure_map(map__67427);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67427__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var tag = (function (){var G__67428 = node.name;
if(cljs.core.truth_(keywordize_keys)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__67428);
} else {
return G__67428;
}
})();
var attrs = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node.attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys], 0));
var attrs__$1 = ((cljs.core.empty_QMARK_(attrs))?null:attrs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,new cljs.core.Keyword(null,"content","content",15833224),null], null);
}));

(tubax.core.parse_node.cljs$lang$maxFixedArity = 2);

tubax.core.push_node = (function tubax$core$push_node(p__67431,node){
var map__67438 = p__67431;
var map__67438__$1 = cljs.core.__destructure_map(map__67438);
var document__$1 = map__67438__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67438__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67438__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var new_current = tubax.core.parse_node.cljs$core$IFn$_invoke$arity$1(node);
var new_stack = (function (){var G__67440 = stack;
if((!((current == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67440,current);
} else {
return G__67440;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(document__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),new_stack,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),new_current], 0));
});
tubax.core.pop_node = (function tubax$core$pop_node(p__67443,node){
var map__67445 = p__67443;
var map__67445__$1 = cljs.core.__destructure_map(map__67445);
var document__$1 = map__67445__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67445__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67445__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var tag = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.empty_QMARK_(stack)){
return document__$1;
} else {
var new_stack = cljs.core.pop(stack);
var new_current = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.peek(stack),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),current);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(document__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),new_stack,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603),new_current], 0));
}
});
tubax.core.push_text = (function tubax$core$push_text(document,text){
var G__67446 = document;
if((!(cljs.core.empty_QMARK_(text)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__67446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),text);
} else {
return G__67446;
}
});
tubax.core.create_parser = (function tubax$core$create_parser(p__67447){
var map__67448 = p__67447;
var map__67448__$1 = cljs.core.__destructure_map(map__67448);
var strict = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67448__$1,new cljs.core.Keyword(null,"strict","strict",-665564191),true);
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67448__$1,new cljs.core.Keyword(null,"trim","trim",774319767),true);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67448__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false);
var lowercase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67448__$1,new cljs.core.Keyword(null,"lowercase","lowercase",41029539),true);
var xmlns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67448__$1,new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67448__$1,new cljs.core.Keyword(null,"position","position",-2011731912),true);
var strict_entities = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67448__$1,new cljs.core.Keyword(null,"strict-entities","strict-entities",-551773933),false);
return shadow.js.shim.module$sax.parser(strict,({"trim": trim, "normalize": normalize, "lowercase": lowercase, "xmlns": xmlns, "position": position, "strictEntities": strict_entities}));
});
tubax.core.xml__GT_clj = (function tubax$core$xml__GT_clj(var_args){
var G__67456 = arguments.length;
switch (G__67456) {
case 1:
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (source){
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2(source,cljs.core.PersistentArrayMap.EMPTY);
}));

(tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (source,options){
var parser = tubax.core.create_parser(options);
var document__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tubax.core.start_document());
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
(parser.onopentag = (function (p1__67450_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(document__$1,tubax.core.push_node,p1__67450_SHARP_);
}));

(parser.onclosetag = (function (p1__67451_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(document__$1,tubax.core.pop_node,p1__67451_SHARP_);
}));

(parser.ontext = (function (p1__67452_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(document__$1,tubax.core.push_text,p1__67452_SHARP_);
}));

(parser.oncdata = (function (p1__67453_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(document__$1,tubax.core.push_text,p1__67453_SHARP_);
}));

(parser.onend = (function (){
if((!((cljs.core.deref(result) == null)))){
return null;
} else {
return cljs.core.reset_BANG_(result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(document__$1))], null));
}
}));

(parser.onerror = (function (p1__67454_SHARP_){
return cljs.core.reset_BANG_(result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67454_SHARP_)], null));
}));

parser.write(source);

parser.close();

var or__5025__auto__ = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(result));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(result))),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(tubax.core.xml__GT_clj.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=tubax.core.js.map
