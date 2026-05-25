import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.transit.js";
import "./app.common.types.color.js";
import "./app.common.types.text.js";
import "./app.main.fonts.js";
import "./app.main.ui.formats.js";
import "./app.util.color.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
goog.provide('app.main.ui.shapes.text.styles');
app.main.ui.shapes.text.styles.generate_root_styles = (function app$main$ui$shapes$text$styles$generate_root_styles(var_args){
var G__54838 = arguments.length;
switch (G__54838) {
case 2:
return app.main.ui.shapes.text.styles.generate_root_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.ui.shapes.text.styles.generate_root_styles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.shapes.text.styles.generate_root_styles.cljs$core$IFn$_invoke$arity$2 = (function (props,node){
return app.main.ui.shapes.text.styles.generate_root_styles.cljs$core$IFn$_invoke$arity$3(props,node,false);
}));

(app.main.ui.shapes.text.styles.generate_root_styles.cljs$core$IFn$_invoke$arity$3 = (function (p__54839,node,code_QMARK_){
var map__54840 = p__54839;
var map__54840__$1 = cljs.core.__destructure_map(map__54840);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54840__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54840__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var valign = new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333).cljs$core$IFn$_invoke$arity$2(node,"top");
var base = ({"height": (cljs.core.truth_(code_QMARK_)?null:app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(height)), "width": (cljs.core.truth_(code_QMARK_)?null:app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(width)), "display": "flex", "whiteSpace": "break-spaces"});
var G__54841 = base;
var G__54841__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(valign,"top"))?app.util.object.set_BANG_(G__54841,"alignItems","flex-start"):G__54841);
var G__54841__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(valign,"center"))?app.util.object.set_BANG_(G__54841__$1,"alignItems","center"):G__54841__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(valign,"bottom")){
return app.util.object.set_BANG_(G__54841__$2,"alignItems","flex-end");
} else {
return G__54841__$2;
}
}));

(app.main.ui.shapes.text.styles.generate_root_styles.cljs$lang$maxFixedArity = 3);

app.main.ui.shapes.text.styles.generate_paragraph_set_styles = (function app$main$ui$shapes$text$styles$generate_paragraph_set_styles(p__54842){
var map__54843 = p__54842;
var map__54843__$1 = cljs.core.__destructure_map(map__54843);
var shape = map__54843__$1;
var grow_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54843__$1,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411));
var auto_width_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188));
return ({"display": "inline-flex", "flexDirection": "column", "justifyContent": "inherit", "minWidth": ((auto_width_QMARK_)?null:"100%"), "marginRight": "1px", "verticalAlign": "top"});
});
app.main.ui.shapes.text.styles.generate_paragraph_styles = (function app$main$ui$shapes$text$styles$generate_paragraph_styles(_shape,data){
var line_height = new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(data);
var line_height__$1 = (((((!((line_height == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",line_height))))?line_height:new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography));
var text_align = new cljs.core.Keyword(null,"text-align","text-align",1786091845).cljs$core$IFn$_invoke$arity$2(data,"start");
var base = ({"fontSize": (0), "lineHeight": line_height__$1, "margin": (0)});
var G__54844 = base;
var G__54844__$1 = (((!((line_height__$1 == null))))?app.util.object.set_BANG_(G__54844,"lineHeight",line_height__$1):G__54844);
if((!((text_align == null)))){
return app.util.object.set_BANG_(G__54844__$1,"textAlign",text_align);
} else {
return G__54844__$1;
}
});
app.main.ui.shapes.text.styles.generate_text_styles = (function app$main$ui$shapes$text$styles$generate_text_styles(var_args){
var G__54847 = arguments.length;
switch (G__54847) {
case 2:
return app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$2 = (function (shape,data){
return app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$3(shape,data,null);
}));

(app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$3 = (function (p__54848,data,p__54849){
var map__54850 = p__54848;
var map__54850__$1 = cljs.core.__destructure_map(map__54850);
var shape = map__54850__$1;
var grow_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54850__$1,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411));
var map__54851 = p__54849;
var map__54851__$1 = cljs.core.__destructure_map(map__54851);
var show_text_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54851__$1,new cljs.core.Keyword(null,"show-text?","show-text?",1934354679),true);
var letter_spacing = new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$2(data,(0));
var text_decoration = new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(data);
var text_transform = new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(data);
var font_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography);
}
})();
var font_variant_id = new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(data);
var font_size = new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(data);
var fill_color = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(data)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(data);
}
})();
var fill_opacity = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(data)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(data);
}
})();
var fill_gradient = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(data)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(data);
}
})();
var vec__54852 = app.common.types.color.hex__GT_rgba(fill_color,fill_opacity);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54852,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54852,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54852,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54852,(3),null);
var text_color = (((((!((fill_color == null)))) && ((!((fill_opacity == null))))))?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("rgba(%s, %s, %s, %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r,g,b,a], 0)):null);
var gradient_QMARK_ = (!((fill_gradient == null)));
var text_color__$1 = ((gradient_QMARK_)?app.util.color.color__GT_background(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradient","gradient",-1983908971),fill_gradient], null)):text_color);
var fontsdb = cljs.core.deref(app.main.fonts.fontsdb);
var base = ({"color": (cljs.core.truth_((function (){var and__5023__auto__ = show_text_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!(gradient_QMARK_));
} else {
return and__5023__auto__;
}
})())?text_color__$1:"transparent"), "textTransform": text_transform, "background": (cljs.core.truth_((function (){var and__5023__auto__ = show_text_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return gradient_QMARK_;
} else {
return and__5023__auto__;
}
})())?text_color__$1:null), "lineBreak": "auto", "overflowWrap": "initial", "whiteSpace": "break-spaces", "fontSize": font_size, "textRendering": "geometricPrecision", "caretColor": (cljs.core.truth_((function (){var and__5023__auto__ = (!(gradient_QMARK_));
if(and__5023__auto__){
return text_color__$1;
} else {
return and__5023__auto__;
}
})())?text_color__$1:"black"), "textDecoration": text_decoration});
var base__$1 = (function (){var G__54858 = base;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(data),"0")){
return app.util.object.set_BANG_(app.util.object.set_BANG_(G__54858,"display","inline-block"),"verticalAlign","top");
} else {
return G__54858;
}
})();
var fills = (((((!((new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(data) == null)))) || ((((!((new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(data) == null)))) || ((!((new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(data) == null))))))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.select_keys(data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255)], null)))], null):(((new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(data) == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#000000",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null):new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(data)
));
var font = (function (){var G__54859 = font_id;
if((G__54859 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(fontsdb,G__54859);
}
})();
var vec__54855 = (((!((font == null))))?(function (){var font_variant = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__54845_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(font_variant_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54845_SHARP_));
}),new cljs.core.Keyword(null,"variants","variants",-176391100).cljs$core$IFn$_invoke$arity$1(font));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"family","family",-1313145692).cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(data);
}
})()),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(font_variant);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(data);
}
})(),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font_variant);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(data);
}
})()], null);
})():null);
var font_family = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54855,(0),null);
var font_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54855,(1),null);
var font_weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54855,(2),null);
var base__$2 = app.util.object.set_BANG_(base__$1,"--font-id",font_id);
var G__54861 = base__$2;
var G__54861__$1 = (((!((fills == null))))?app.util.object.set_BANG_(G__54861,"--fills",app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1(fills)):G__54861);
var G__54861__$2 = ((((typeof letter_spacing === 'string') && ((letter_spacing.length > (0)))))?app.util.object.set_BANG_(G__54861__$1,"letterSpacing",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter_spacing),"px"].join('')):G__54861__$1);
var G__54861__$3 = ((((typeof font_size === 'string') && ((font_size.length > (0)))))?app.util.object.set_BANG_(G__54861__$2,"fontSize",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px"].join('')):G__54861__$2);
var G__54861__$4 = (((!((font == null))))?app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(G__54861__$3,"fontFamily",font_family),"fontStyle",font_style),"fontWeight",font_weight):G__54861__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(grow_type,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188))){
return app.util.object.set_BANG_(G__54861__$4,"whiteSpace","pre");
} else {
return G__54861__$4;
}
}));

(app.main.ui.shapes.text.styles.generate_text_styles.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.main.ui.shapes.text.styles.js.map
