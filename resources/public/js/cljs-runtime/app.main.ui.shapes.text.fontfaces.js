import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.main.fonts.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.text.fontfaces');
/**
 * Hook that retrieves the CSS of the fonts passed as parameter
 */
app.main.ui.shapes.text.fontfaces.use_fonts_css = (function app$main$ui$shapes$text$fontfaces$use_fonts_css(fonts){
var fonts_css_ref = rumext.v2.use_ref("");
var redraw = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
rumext.v2.use_ssr_effect([rumext.v2.adapt(fonts)],(function (){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (result){
var css = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",result);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rumext.v2.ref_val(fonts_css_ref),css)){
return null;
} else {
rumext.v2.set_ref_val_BANG_(fonts_css_ref,css);

return cljs.core.reset_BANG_(redraw,cljs.core.inc);
}
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.merge_map(app.main.fonts.fetch_font_css,beicon.v2.core.from(fonts))));
return (function (){
return beicon.v2.core.dispose_BANG_(sub);
});
}));

return rumext.v2.ref_val(fonts_css_ref);
});
app.main.ui.shapes.text.fontfaces.fontfaces_style_html = (function (p1__54917_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__54917_SHARP_,(function (new_props_54919,old_props_54920){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_54919.fonts,old_props_54920.fonts);
}));
})((function app$main$ui$shapes$text$fontfaces$fontfaces_style_html(props_54918){
var props = props_54918;
var fonts = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"fonts");
var fonts_css = app.main.ui.shapes.text.fontfaces.use_fonts_css(fonts);
return rumext.v2.jsx("style",{'children':fonts_css});
}));

(app.main.ui.shapes.text.fontfaces.fontfaces_style_html.displayName = "fontfaces-style-html");

app.main.ui.shapes.text.fontfaces.fontfaces_style_render = (function (p1__54921_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__54921_SHARP_,(function (new_props_54923,old_props_54924){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_54923.fonts,old_props_54924.fonts);
}));
})((function app$main$ui$shapes$text$fontfaces$fontfaces_style_render(props_54922){
var props = props_54922;
var fonts = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"fonts");
var fonts_css = app.main.ui.shapes.text.fontfaces.use_fonts_css(fonts);
return rumext.v2.jsx("style",{'children':fonts_css});
}));

(app.main.ui.shapes.text.fontfaces.fontfaces_style_render.displayName = "fontfaces-style-render");

app.main.ui.shapes.text.fontfaces.shape__GT_fonts = (function app$main$ui$shapes$text$fontfaces$shape__GT_fonts(shape,objects){
var initial = (function (){var G__54925 = cljs.core.PersistentHashSet.EMPTY;
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__54925,app.main.fonts.get_content_fonts(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return G__54925;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,initial,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.main.fonts.get_content_fonts,new cljs.core.Keyword(null,"content","content",15833224)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.text_shape_QMARK_,app.common.files.helpers.get_children(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)))));
});
app.main.ui.shapes.text.fontfaces.shapes__GT_fonts = (function app$main$ui$shapes$text$fontfaces$shapes__GT_fonts(shapes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.main.fonts.get_content_fonts,new cljs.core.Keyword(null,"content","content",15833224)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.text_shape_QMARK_,shapes)));
});
app.main.ui.shapes.text.fontfaces.fontfaces_style = (function (p1__54926_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__54926_SHARP_,(function (new_props_54928,old_props_54929){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_54928.fonts,old_props_54929.fonts);
}));
})((function app$main$ui$shapes$text$fontfaces$fontfaces_style(props_54927){
var props = props_54927;
var fonts = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"fonts");
if(app.common.data.not_empty_QMARK_(fonts)){
return rumext.v2.jsx(app.main.ui.shapes.text.fontfaces.fontfaces_style_render,{'fonts':fonts});
} else {
return null;
}
}));

(app.main.ui.shapes.text.fontfaces.fontfaces_style.displayName = "fontfaces-style");


//# sourceMappingURL=app.main.ui.shapes.text.fontfaces.js.map
