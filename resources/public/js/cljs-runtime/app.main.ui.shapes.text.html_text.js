import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.text.js";
import "./app.main.ui.shapes.text.styles.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.text.html_text');
app.main.ui.shapes.text.html_text.render_text = (function app$main$ui$shapes$text$html_text$render_text(props_72707){
var props = props_72707;
var node = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"node");
var parent = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"parent");
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var code_QMARK_ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"code?");
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,""))?app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$2(shape,parent):app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$2(shape,node));
var class$ = (cljs.core.truth_(code_QMARK_)?new cljs.core.Keyword(null,"$id","$id",-1635392559).cljs$core$IFn$_invoke$arity$1(node):null);
return rumext.v2.jsx("span",{'className':"text-node"+" "+(class$ ?? ""),'style':style,'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,""))?"\u00A0":text)});
});

(app.main.ui.shapes.text.html_text.render_text.displayName = "render-text");

app.main.ui.shapes.text.html_text.render_root = (function app$main$ui$shapes$text$html_text$render_root(props_72714){
var props = props_72714;
var node = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"node");
var children = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"children");
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var code_QMARK_ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"code?");
var style = app.main.ui.shapes.text.styles.generate_root_styles.cljs$core$IFn$_invoke$arity$3(shape,node,code_QMARK_);
var class$ = (cljs.core.truth_(code_QMARK_)?new cljs.core.Keyword(null,"$id","$id",-1635392559).cljs$core$IFn$_invoke$arity$1(node):null);
return rumext.v2.jsx("div",{'className':"root"+" "+"rich-text"+" "+(class$ ?? ""),'style':style,'xmlns':"http://www.w3.org/1999/xhtml",'children':children});
});

(app.main.ui.shapes.text.html_text.render_root.displayName = "render-root");

app.main.ui.shapes.text.html_text.render_paragraph_set = (function app$main$ui$shapes$text$html_text$render_paragraph_set(props_72715){
var props = props_72715;
var node = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"node");
var children = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"children");
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var code_QMARK_ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"code?");
var style = (cljs.core.truth_(code_QMARK_)?null:app.main.ui.shapes.text.styles.generate_paragraph_set_styles(shape));
var class$ = (cljs.core.truth_(code_QMARK_)?new cljs.core.Keyword(null,"$id","$id",-1635392559).cljs$core$IFn$_invoke$arity$1(node):null);
return rumext.v2.jsx("div",{'className':"paragraph-set"+" "+(class$ ?? ""),'style':style,'children':children});
});

(app.main.ui.shapes.text.html_text.render_paragraph_set.displayName = "render-paragraph-set");

app.main.ui.shapes.text.html_text.render_paragraph = (function app$main$ui$shapes$text$html_text$render_paragraph(props_72716){
var props = props_72716;
var node = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"node");
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var children = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"children");
var code_QMARK_ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"code?");
var style = (cljs.core.truth_(code_QMARK_)?null:app.main.ui.shapes.text.styles.generate_paragraph_styles(shape,node));
var class$ = (cljs.core.truth_(code_QMARK_)?new cljs.core.Keyword(null,"$id","$id",-1635392559).cljs$core$IFn$_invoke$arity$1(node):null);
var dir = new cljs.core.Keyword(null,"text-direction","text-direction",590275785).cljs$core$IFn$_invoke$arity$2(node,"auto");
return rumext.v2.jsx("p",{'className':"paragraph"+" "+(class$ ?? ""),'style':style,'dir':dir,'children':children});
});

(app.main.ui.shapes.text.html_text.render_paragraph.displayName = "render-paragraph");

app.main.ui.shapes.text.html_text.render_node = (function app$main$ui$shapes$text$html_text$render_node(props_72717){
var props = props_72717;
var map__72722 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"node");
var map__72722__$1 = cljs.core.__destructure_map(map__72722);
var parent = map__72722__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72722__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72722__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var code_QMARK_ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"code?");
if(typeof text === 'string'){
return rumext.v2.create_element(app.main.ui.shapes.text.html_text.render_text,props);
} else {
var component = (function (){var G__72725 = type;
switch (G__72725) {
case "root":
return app.main.ui.shapes.text.html_text.render_root;

break;
case "paragraph-set":
return app.main.ui.shapes.text.html_text.render_paragraph_set;

break;
case "paragraph":
return app.main.ui.shapes.text.html_text.render_paragraph;

break;
default:
return null;

}
})();
if(cljs.core.truth_(component)){
return rumext.v2.create_element(component,props,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__72729){
var vec__72730 = p__72729;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72730,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72730,(1),null);
out_arr__46744__auto__.push((function (){var props__$1 = app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.clone(props),"node",node),"parent",parent),"index",index),"key",index),"code?",code_QMARK_);
return rumext.v2.create_element(app$main$ui$shapes$text$html_text$render_node,props__$1);
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(children)));
} else {
return null;
}
}
});

(app.main.ui.shapes.text.html_text.render_node.displayName = "render-node");

app.main.ui.shapes.text.html_text.text_shape = rumext.v2.forward_ref((function app$main$ui$shapes$text$html_text$text_shape(props_72740,ref){
var props = props_72740;
var shape = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"shape");
var grow_type = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"grow-type");
var code_QMARK_ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"code?");
var map__72743 = shape;
var map__72743__$1 = cljs.core.__destructure_map(map__72743);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72743__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72743__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72743__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72743__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72743__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72743__$1,new cljs.core.Keyword(null,"content","content",15833224));
var content__$1 = (cljs.core.truth_(code_QMARK_)?app.common.text.index_content.cljs$core$IFn$_invoke$arity$1(content):content);
var style = (cljs.core.truth_(code_QMARK_)?null:({"position": "fixed", "left": (0), "top": (0), "background": "white", "width": (cljs.core.truth_((function (){var fexpr__72753 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),null], null), null);
return (fexpr__72753.cljs$core$IFn$_invoke$arity$1 ? fexpr__72753.cljs$core$IFn$_invoke$arity$1(grow_type) : fexpr__72753.call(null,grow_type));
})())?(100000):width), "height": (cljs.core.truth_((function (){var fexpr__72754 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-height","auto-height",-960519663),null,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),null], null), null);
return (fexpr__72754.cljs$core$IFn$_invoke$arity$1 ? fexpr__72754.cljs$core$IFn$_invoke$arity$1(grow_type) : fexpr__72754.call(null,grow_type));
})())?(100000):height)}));
return rumext.v2.jsxs("div",{'className':"text-node-html",'id':""+"html-text-node-"+(id ?? ""),'ref':ref,'data-x':x,'data-y':y,'style':style,'children':[((cljs.core.not(code_QMARK_))?rumext.v2.jsx("style",{'children':".text-node { background-clip: text;\n                             -webkit-background-clip: text; }"}):null),rumext.v2.jsx(app.main.ui.shapes.text.html_text.render_node,{'index':(0),'shape':shape,'node':content__$1,'code?':code_QMARK_})]});
}));

(app.main.ui.shapes.text.html_text.text_shape.displayName = "text-shape");


//# sourceMappingURL=app.main.ui.shapes.text.html_text.js.map
