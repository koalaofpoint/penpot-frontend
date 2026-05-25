import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.text.js";
import "./app.util.dom.js";
import "./app.util.text.content.styles.js";
goog.provide('app.util.text.content.to_dom');
app.util.text.content.to_dom.set_dataset = (function app$util$text$content$to_dom$set_dataset(element,data){
var seq__55304 = cljs.core.seq(data);
var chunk__55305 = null;
var count__55306 = (0);
var i__55307 = (0);
while(true){
if((i__55307 < count__55306)){
var vec__55318 = chunk__55305.cljs$core$IIndexed$_nth$arity$2(null,i__55307);
var data_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55318,(0),null);
var data_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55318,(1),null);
app.util.dom.set_data_BANG_(element,cljs.core.name(data_name),data_value);


var G__55404 = seq__55304;
var G__55405 = chunk__55305;
var G__55406 = count__55306;
var G__55407 = (i__55307 + (1));
seq__55304 = G__55404;
chunk__55305 = G__55405;
count__55306 = G__55406;
i__55307 = G__55407;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__55304);
if(temp__5825__auto__){
var seq__55304__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55304__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__55304__$1);
var G__55408 = cljs.core.chunk_rest(seq__55304__$1);
var G__55409 = c__5548__auto__;
var G__55410 = cljs.core.count(c__5548__auto__);
var G__55411 = (0);
seq__55304 = G__55408;
chunk__55305 = G__55409;
count__55306 = G__55410;
i__55307 = G__55411;
continue;
} else {
var vec__55326 = cljs.core.first(seq__55304__$1);
var data_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55326,(0),null);
var data_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55326,(1),null);
app.util.dom.set_data_BANG_(element,cljs.core.name(data_name),data_value);


var G__55412 = cljs.core.next(seq__55304__$1);
var G__55413 = null;
var G__55414 = (0);
var G__55415 = (0);
seq__55304 = G__55412;
chunk__55305 = G__55413;
count__55306 = G__55414;
i__55307 = G__55415;
continue;
}
} else {
return null;
}
}
break;
}
});
app.util.text.content.to_dom.set_styles = (function app$util$text$content$to_dom$set_styles(element,styles){
var seq__55338 = cljs.core.seq(styles);
var chunk__55339 = null;
var count__55340 = (0);
var i__55341 = (0);
while(true){
if((i__55341 < count__55340)){
var vec__55359 = chunk__55339.cljs$core$IIndexed$_nth$arity$2(null,i__55341);
var style_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55359,(0),null);
var style_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55359,(1),null);
if(cljs.core.contains_QMARK_(app.util.text.content.styles.mapping,style_name)){
var vec__55362_55416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.text.content.styles.mapping,style_name);
var style_encode_55417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55362_55416,(0),null);
var style_encoded_value_55418 = (style_encode_55417.cljs$core$IFn$_invoke$arity$1 ? style_encode_55417.cljs$core$IFn$_invoke$arity$1(style_value) : style_encode_55417.call(null,style_value));
app.util.dom.set_style_BANG_(element,app.util.text.content.styles.get_style_name_as_css_variable(style_name),style_encoded_value_55418);
} else {
app.util.dom.set_style_BANG_(element,app.util.text.content.styles.get_style_name(style_name),app.util.text.content.styles.normalize_style_value(style_name,style_value));
}


var G__55419 = seq__55338;
var G__55420 = chunk__55339;
var G__55421 = count__55340;
var G__55422 = (i__55341 + (1));
seq__55338 = G__55419;
chunk__55339 = G__55420;
count__55340 = G__55421;
i__55341 = G__55422;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__55338);
if(temp__5825__auto__){
var seq__55338__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55338__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__55338__$1);
var G__55423 = cljs.core.chunk_rest(seq__55338__$1);
var G__55424 = c__5548__auto__;
var G__55425 = cljs.core.count(c__5548__auto__);
var G__55426 = (0);
seq__55338 = G__55423;
chunk__55339 = G__55424;
count__55340 = G__55425;
i__55341 = G__55426;
continue;
} else {
var vec__55366 = cljs.core.first(seq__55338__$1);
var style_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55366,(0),null);
var style_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55366,(1),null);
if(cljs.core.contains_QMARK_(app.util.text.content.styles.mapping,style_name)){
var vec__55370_55427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.text.content.styles.mapping,style_name);
var style_encode_55428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55370_55427,(0),null);
var style_encoded_value_55429 = (style_encode_55428.cljs$core$IFn$_invoke$arity$1 ? style_encode_55428.cljs$core$IFn$_invoke$arity$1(style_value) : style_encode_55428.call(null,style_value));
app.util.dom.set_style_BANG_(element,app.util.text.content.styles.get_style_name_as_css_variable(style_name),style_encoded_value_55429);
} else {
app.util.dom.set_style_BANG_(element,app.util.text.content.styles.get_style_name(style_name),app.util.text.content.styles.normalize_style_value(style_name,style_value));
}


var G__55430 = cljs.core.next(seq__55338__$1);
var G__55431 = null;
var G__55432 = (0);
var G__55433 = (0);
seq__55338 = G__55430;
chunk__55339 = G__55431;
count__55340 = G__55432;
i__55341 = G__55433;
continue;
}
} else {
return null;
}
}
break;
}
});
app.util.text.content.to_dom.create_element = (function app$util$text$content$to_dom$create_element(var_args){
var G__55375 = arguments.length;
switch (G__55375) {
case 1:
return app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$3(tag,null,null);
}));

(app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,attrs){
return app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$3(tag,attrs,null);
}));

(app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$3 = (function (tag,attrs,children){
var element = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1(tag);
var seq__55376_55435 = cljs.core.seq(attrs);
var chunk__55377_55436 = null;
var count__55378_55437 = (0);
var i__55379_55438 = (0);
while(true){
if((i__55379_55438 < count__55378_55437)){
var vec__55388_55439 = chunk__55377_55436.cljs$core$IIndexed$_nth$arity$2(null,i__55379_55438);
var attr_name_55440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55388_55439,(0),null);
var attr_value_55441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55388_55439,(1),null);
var G__55391_55442 = attr_name_55440;
var G__55391_55443__$1 = (((G__55391_55442 instanceof cljs.core.Keyword))?G__55391_55442.fqn:null);
switch (G__55391_55443__$1) {
case "data":
app.util.text.content.to_dom.set_dataset(element,attr_value_55441);

break;
case "style":
app.util.text.content.to_dom.set_styles(element,attr_value_55441);

break;
default:
app.util.dom.set_attribute_BANG_(element,cljs.core.name(attr_name_55440),attr_value_55441);

}


var G__55445 = seq__55376_55435;
var G__55446 = chunk__55377_55436;
var G__55447 = count__55378_55437;
var G__55448 = (i__55379_55438 + (1));
seq__55376_55435 = G__55445;
chunk__55377_55436 = G__55446;
count__55378_55437 = G__55447;
i__55379_55438 = G__55448;
continue;
} else {
var temp__5825__auto___55449 = cljs.core.seq(seq__55376_55435);
if(temp__5825__auto___55449){
var seq__55376_55450__$1 = temp__5825__auto___55449;
if(cljs.core.chunked_seq_QMARK_(seq__55376_55450__$1)){
var c__5548__auto___55451 = cljs.core.chunk_first(seq__55376_55450__$1);
var G__55452 = cljs.core.chunk_rest(seq__55376_55450__$1);
var G__55453 = c__5548__auto___55451;
var G__55454 = cljs.core.count(c__5548__auto___55451);
var G__55455 = (0);
seq__55376_55435 = G__55452;
chunk__55377_55436 = G__55453;
count__55378_55437 = G__55454;
i__55379_55438 = G__55455;
continue;
} else {
var vec__55393_55456 = cljs.core.first(seq__55376_55450__$1);
var attr_name_55457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55393_55456,(0),null);
var attr_value_55458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55393_55456,(1),null);
var G__55396_55459 = attr_name_55457;
var G__55396_55460__$1 = (((G__55396_55459 instanceof cljs.core.Keyword))?G__55396_55459.fqn:null);
switch (G__55396_55460__$1) {
case "data":
app.util.text.content.to_dom.set_dataset(element,attr_value_55458);

break;
case "style":
app.util.text.content.to_dom.set_styles(element,attr_value_55458);

break;
default:
app.util.dom.set_attribute_BANG_(element,cljs.core.name(attr_name_55457),attr_value_55458);

}


var G__55462 = cljs.core.next(seq__55376_55450__$1);
var G__55463 = null;
var G__55464 = (0);
var G__55465 = (0);
seq__55376_55435 = G__55462;
chunk__55377_55436 = G__55463;
count__55378_55437 = G__55464;
i__55379_55438 = G__55465;
continue;
}
} else {
}
}
break;
}

var seq__55397_55466 = cljs.core.seq(children);
var chunk__55398_55467 = null;
var count__55399_55468 = (0);
var i__55400_55469 = (0);
while(true){
if((i__55400_55469 < count__55399_55468)){
var child_55470 = chunk__55398_55467.cljs$core$IIndexed$_nth$arity$2(null,i__55400_55469);
app.util.dom.append_child_BANG_(element,child_55470);


var G__55471 = seq__55397_55466;
var G__55472 = chunk__55398_55467;
var G__55473 = count__55399_55468;
var G__55474 = (i__55400_55469 + (1));
seq__55397_55466 = G__55471;
chunk__55398_55467 = G__55472;
count__55399_55468 = G__55473;
i__55400_55469 = G__55474;
continue;
} else {
var temp__5825__auto___55475 = cljs.core.seq(seq__55397_55466);
if(temp__5825__auto___55475){
var seq__55397_55476__$1 = temp__5825__auto___55475;
if(cljs.core.chunked_seq_QMARK_(seq__55397_55476__$1)){
var c__5548__auto___55477 = cljs.core.chunk_first(seq__55397_55476__$1);
var G__55478 = cljs.core.chunk_rest(seq__55397_55476__$1);
var G__55479 = c__5548__auto___55477;
var G__55480 = cljs.core.count(c__5548__auto___55477);
var G__55481 = (0);
seq__55397_55466 = G__55478;
chunk__55398_55467 = G__55479;
count__55399_55468 = G__55480;
i__55400_55469 = G__55481;
continue;
} else {
var child_55482 = cljs.core.first(seq__55397_55476__$1);
app.util.dom.append_child_BANG_(element,child_55482);


var G__55483 = cljs.core.next(seq__55397_55476__$1);
var G__55484 = null;
var G__55485 = (0);
var G__55486 = (0);
seq__55397_55466 = G__55483;
chunk__55398_55467 = G__55484;
count__55399_55468 = G__55485;
i__55400_55469 = G__55486;
continue;
}
} else {
}
}
break;
}

return element;
}));

(app.util.text.content.to_dom.create_element.cljs$lang$maxFixedArity = 3);

app.util.text.content.to_dom.get_styles_from_attrs = (function app$util$text$content$to_dom$get_styles_from_attrs(node,attrs,defaults){
var styles = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,cljs.core.get.cljs$core$IFn$_invoke$arity$3(node,key,default_value));
}),cljs.core.PersistentArrayMap.EMPTY,attrs);
var fills = (((((!((new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(node) == null)))) || ((((!((new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(node) == null)))) || ((!((new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(node) == null))))))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.select_keys(node,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255)], null)))], null):(((new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(node) == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#000000",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null):new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(node)
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(styles,new cljs.core.Keyword(null,"fills","fills",902966780),fills);
});
app.util.text.content.to_dom.get_paragraph_styles = (function app$util$text$content$to_dom$get_paragraph_styles(paragraph){
var styles = app.util.text.content.to_dom.get_styles_from_attrs(paragraph,app.common.data.concat_set.cljs$core$IFn$_invoke$arity$variadic(app.common.types.text.paragraph_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.text_node_attrs], 0)),app.common.types.text.default_text_attrs);
var font_size = (cljs.core.truth_(cljs.core.some((function (p1__55401_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p1__55401_SHARP_));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(paragraph)))?"0":new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$2(styles,new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography)));
var line_height = new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(styles);
var line_height__$1 = (((((!((line_height == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",line_height))))?line_height:new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(styles,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),font_size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line-height","line-height",1870784992),line_height__$1], 0));
});
app.util.text.content.to_dom.get_root_styles = (function app$util$text$content$to_dom$get_root_styles(root){
return app.util.text.content.to_dom.get_styles_from_attrs(root,app.common.types.text.root_attrs,app.common.types.text.default_text_attrs);
});
app.util.text.content.to_dom.get_text_span_styles = (function app$util$text$content$to_dom$get_text_span_styles(inline,paragraph){
var node = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inline)))?paragraph:inline);
var styles = app.util.text.content.to_dom.get_styles_from_attrs(node,app.common.types.text.text_node_attrs,app.common.types.text.default_text_attrs);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(styles,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
});
/**
 * Add zero-width spaces after forward slashes to enable word breaking
 */
app.util.text.content.to_dom.normalize_spaces = (function app$util$text$content$to_dom$normalize_spaces(text){
if(cljs.core.truth_(text)){
return text.replace(RegExp("/","g"),"/\u200B");
} else {
return null;
}
});
app.util.text.content.to_dom.get_text_span_children = (function app$util$text$content$to_dom$get_text_span_children(inline,paragraph){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inline))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(paragraph))))))?app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("br"):app.util.dom.create_text.cljs$core$IFn$_invoke$arity$1(app.util.text.content.to_dom.normalize_spaces(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inline))))], null);
});
app.util.text.content.to_dom.create_random_key = (function app$util$text$content$to_dom$create_random_key(){
return Math.floor((Math.random() * Number.MAX_SAFE_INTEGER)).toString((36));
});
app.util.text.content.to_dom.has_content_QMARK_ = (function app$util$text$content$to_dom$has_content_QMARK_(paragraph){
return cljs.core.some((function (p1__55402_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$2(p1__55402_SHARP_,""));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(paragraph));
});
app.util.text.content.to_dom.create_text_span = (function app$util$text$content$to_dom$create_text_span(inline,paragraph){
return app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$3("span",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inline);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.text.content.to_dom.create_random_key();
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"itype","itype",-1679163844),"span"], null),new cljs.core.Keyword(null,"style","style",-496642736),app.util.text.content.to_dom.get_text_span_styles(inline,paragraph)], null),app.util.text.content.to_dom.get_text_span_children(inline,paragraph));
});
app.util.text.content.to_dom.create_paragraph = (function app$util$text$content$to_dom$create_paragraph(paragraph){
return app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(paragraph);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.text.content.to_dom.create_random_key();
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"itype","itype",-1679163844),"paragraph"], null),new cljs.core.Keyword(null,"style","style",-496642736),app.util.text.content.to_dom.get_paragraph_styles(paragraph)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55403_SHARP_){
return app.util.text.content.to_dom.create_text_span(p1__55403_SHARP_,paragraph);
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(paragraph)));
});
app.util.text.content.to_dom.create_root = (function app$util$text$content$to_dom$create_root(root){
var root_styles = app.util.text.content.to_dom.get_root_styles(root);
var paragraphs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(root,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),(0),new cljs.core.Keyword(null,"children","children",-940561982)], null));
var filtered_paragraphs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,paragraphs));
return app.util.text.content.to_dom.create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(root);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.text.content.to_dom.create_random_key();
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"itype","itype",-1679163844),"root"], null),new cljs.core.Keyword(null,"style","style",-496642736),root_styles], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.util.text.content.to_dom.create_paragraph,filtered_paragraphs));
});

//# sourceMappingURL=app.util.text.content.to_dom.js.map
