import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.color.js";
import "./app.main.ui.shapes.text.styles.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.text.fo_text');
app.main.ui.shapes.text.fo_text.render_text = (function app$main$ui$shapes$text$fo_text$render_text(props_54864){
var props = props_54864;
var node = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"node");
var parent = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"parent");
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,""))?app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$2(shape,parent):app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$2(shape,node));
return rumext.v2.jsx("span",{'className':"text-node",'style':style,'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,""))?"\u00A0":text)});
});

(app.main.ui.shapes.text.fo_text.render_text.displayName = "render-text");

app.main.ui.shapes.text.fo_text.render_root = (function app$main$ui$shapes$text$fo_text$render_root(props_54865){
var props = props_54865;
var node = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"node");
var children = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"children");
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var style = app.main.ui.shapes.text.styles.generate_root_styles.cljs$core$IFn$_invoke$arity$2(shape,node);
return rumext.v2.jsx("div",{'className':"root rich-text",'style':style,'xmlns':"http://www.w3.org/1999/xhtml",'children':children});
});

(app.main.ui.shapes.text.fo_text.render_root.displayName = "render-root");

app.main.ui.shapes.text.fo_text.render_paragraph_set = (function app$main$ui$shapes$text$fo_text$render_paragraph_set(props_54866){
var props = props_54866;
var children = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"children");
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var style = app.main.ui.shapes.text.styles.generate_paragraph_set_styles(shape);
return rumext.v2.jsx("div",{'className':"paragraph-set",'style':style,'children':children});
});

(app.main.ui.shapes.text.fo_text.render_paragraph_set.displayName = "render-paragraph-set");

app.main.ui.shapes.text.fo_text.render_paragraph = (function app$main$ui$shapes$text$fo_text$render_paragraph(props_54867){
var props = props_54867;
var node = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"node");
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var children = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"children");
var style = app.main.ui.shapes.text.styles.generate_paragraph_styles(shape,node);
var dir = new cljs.core.Keyword(null,"text-direction","text-direction",590275785).cljs$core$IFn$_invoke$arity$2(node,"auto");
return rumext.v2.jsx("p",{'className':"paragraph",'style':style,'dir':dir,'children':children});
});

(app.main.ui.shapes.text.fo_text.render_paragraph.displayName = "render-paragraph");

app.main.ui.shapes.text.fo_text.render_node = (function app$main$ui$shapes$text$fo_text$render_node(props_54868){
var props = props_54868;
var map__54869 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"node");
var map__54869__$1 = cljs.core.__destructure_map(map__54869);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54869__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54869__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54869__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(typeof text === 'string'){
return rumext.v2.create_element(app.main.ui.shapes.text.fo_text.render_text,props);
} else {
var component = (function (){var G__54870 = type;
switch (G__54870) {
case "root":
return app.main.ui.shapes.text.fo_text.render_root;

break;
case "paragraph-set":
return app.main.ui.shapes.text.fo_text.render_paragraph_set;

break;
case "paragraph":
return app.main.ui.shapes.text.fo_text.render_paragraph;

break;
default:
return null;

}
})();
if(cljs.core.truth_(component)){
return rumext.v2.create_element(component,props,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54871){
var vec__54872 = p__54871;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54872,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54872,(1),null);
out_arr__46744__auto__.push((function (){var props__$1 = app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.clone(props),"node",node),"index",index),"key",index);
return rumext.v2.create_element(app$main$ui$shapes$text$fo_text$render_node,props__$1);
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(children)));
} else {
return null;
}
}
});

(app.main.ui.shapes.text.fo_text.render_node.displayName = "render-node");

/**
 * Given a set of colors try to get a color not yet used
 */
app.main.ui.shapes.text.fo_text.next_color = (function app$main$ui$shapes$text$fo_text$next_color(colors){
if(cljs.core.set_QMARK_(colors)){
} else {
throw (new Error("Assert failed: (set? colors)"));
}

var current_rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
while(true){
var current_hex = app.common.types.color.rgb__GT_hex(current_rgb);
if(cljs.core.contains_QMARK_(colors,current_hex)){
var G__54899 = app.common.types.color.next_rgb(current_rgb);
current_rgb = G__54899;
continue;
} else {
return current_hex;
}
break;
}
});
/**
 * Given a content node returns the information about that node fill color
 */
app.main.ui.shapes.text.fo_text.fill__GT_color = (function app$main$ui$shapes$text$fo_text$fill__GT_color(p__54875){
var map__54876 = p__54875;
var map__54876__$1 = cljs.core.__destructure_map(map__54876);
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var fill_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170));
var fill_color_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54876__$1,new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870));
if((!((fill_color_gradient == null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),fill_color_gradient], null);
} else {
if(((typeof fill_color === 'string') && ((((!((fill_opacity == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fill_opacity,(1))))))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"hex","hex",41691346),fill_color,new cljs.core.Keyword(null,"opacity","opacity",397153780),fill_opacity], null);
} else {
if(typeof fill_color === 'string'){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"hex","hex",41691346),fill_color,new cljs.core.Keyword(null,"map-to","map-to",2011737634),fill_color], null);
} else {
return null;
}
}
}
});
/**
 * Given a text shape returns a triple with the values:
 *  - colors used as fills
 *  - a mapping from simple solid colors to complex ones (transparents/gradients)
 *  - the inverse of the previous mapping (to restore the value in the SVG)
 */
app.main.ui.shapes.text.fo_text.retrieve_colors = (function app$main$ui$shapes$text$fo_text$retrieve_colors(shape){
var color_data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.text.fo_text.fill__GT_color,cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))));
var colors = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc(["#000000"]),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__54877_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54877_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hex","hex",41691346))),color_data);
var vec__54885 = (function (){var colors__$1 = colors;
var head = cljs.core.first(color_data);
var tail = cljs.core.rest(color_data);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if((head == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors__$1,result], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(head))){
var G__54904 = colors__$1;
var G__54905 = cljs.core.first(tail);
var G__54906 = cljs.core.rest(tail);
var G__54907 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,head);
colors__$1 = G__54904;
head = G__54905;
tail = G__54906;
result = G__54907;
continue;
} else {
var next_color = app.main.ui.shapes.text.fo_text.next_color(colors__$1);
var head__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(head,new cljs.core.Keyword(null,"map-to","map-to",2011737634),next_color);
var colors__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(colors__$1,next_color);
var G__54908 = colors__$2;
var G__54909 = cljs.core.first(tail);
var G__54910 = cljs.core.rest(tail);
var G__54911 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,head__$1);
colors__$1 = G__54908;
head = G__54909;
tail = G__54910;
result = G__54911;
continue;
}
}
break;
}
})();
var colors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54885,(0),null);
var color_data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54885,(1),null);
var color_mapping_inverse = app.common.data.mapm.cljs$core$IFn$_invoke$arity$2((function (p1__54880_SHARP_,p2__54879_SHARP_){
return cljs.core.first(p2__54879_SHARP_);
}),cljs.core.group_by(new cljs.core.Keyword(null,"map-to","map-to",2011737634),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54878_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54878_SHARP_));
}),color_data__$1)));
var color_mapping = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54882_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hex","hex",41691346).cljs$core$IFn$_invoke$arity$1(p1__54882_SHARP_),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(p1__54882_SHARP_)], null),new cljs.core.Keyword(null,"map-to","map-to",2011737634).cljs$core$IFn$_invoke$arity$1(p1__54882_SHARP_)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54881_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54881_SHARP_));
}),color_data__$1))),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54884_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(p1__54884_SHARP_),new cljs.core.Keyword(null,"map-to","map-to",2011737634).cljs$core$IFn$_invoke$arity$1(p1__54884_SHARP_)],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54883_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54883_SHARP_));
}),color_data__$1)))], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors__$1,color_mapping,color_mapping_inverse], null);
});
app.main.ui.shapes.text.fo_text.text_shape = rumext.v2.forward_ref((function app$main$ui$shapes$text$fo_text$text_shape(props_54888,ref){
var grow_type = (props_54888["grow-type"]);
var shape = props_54888.shape;
var transform = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape);
var id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224));
var vec__54891 = app.main.ui.shapes.text.fo_text.retrieve_colors(shape);
var colors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54891,(0),null);
var _color_mapping = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54891,(1),null);
var color_mapping_inverse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54891,(2),null);
return rumext.v2.jsxs("foreignObject",{'width':(cljs.core.truth_((function (){var fexpr__54896 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),null], null), null);
return (fexpr__54896.cljs$core$IFn$_invoke$arity$1 ? fexpr__54896.cljs$core$IFn$_invoke$arity$1(grow_type) : fexpr__54896.call(null,grow_type));
})())?(100000):width),'height':(cljs.core.truth_((function (){var fexpr__54897 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-height","auto-height",-960519663),null,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),null], null), null);
return (fexpr__54897.cljs$core$IFn$_invoke$arity$1 ? fexpr__54897.cljs$core$IFn$_invoke$arity$1(grow_type) : fexpr__54897.call(null,grow_type));
})())?(100000):height),'children':[rumext.v2.jsx("style",{'children':".text-node { background-clip: text;\n                           -webkit-background-clip: text; }"}),rumext.v2.jsx(app.main.ui.shapes.text.fo_text.render_node,{'index':(0),'shape':shape,'node':content})],'x':x,'id':id,'data-mapping':JSON.stringify(cljs.core.clj__GT_js(color_mapping_inverse)),'transform':transform,'data-colors':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",colors),'y':y,'ref':ref});
}));

(app.main.ui.shapes.text.fo_text.text_shape.displayName = "text-shape");


//# sourceMappingURL=app.main.ui.shapes.text.fo_text.js.map
