import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.render_wasm.api.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.text.text_edition_outline');
app.main.ui.workspace.shapes.text.text_edition_outline.text_edition_outline = (function app$main$ui$workspace$shapes$text$text_edition_outline$text_edition_outline(props_56742){
var map__56751 = rumext.v2.util.wrap_props(props_56742);
var map__56751__$1 = cljs.core.__destructure_map(map__56751);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56751__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56751__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56751__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
var selrect_transform = rumext.v2.deref(app.main.refs.workspace_selrect);
var vec__56755 = app.main.data.helpers.get_selrect(selrect_transform,shape);
var selrect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56755,(0),null);
var transform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56755,(1),null);
var vec__56758 = (cljs.core.truth_((function (){var or__5025__auto__ = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect),0.01);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect),0.01);
}
})())?(function (){var map__56763 = app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var map__56763__$1 = cljs.core.__destructure_map(map__56763);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56763__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect)], null));
var sr_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56758,(0),null);
var sr_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56758,(1),null);
return rumext.v2.jsx("rect",{'className':"main viewport-selrect",'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selrect),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selrect),'width':sr_width,'height':sr_height,'transform':transform,'style':{'stroke':"var(--color-accent-tertiary)",'strokeWidth':((1) / zoom),'fill':"none"}});
} else {
var modifiers__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null));
var text_modifier_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))],(function (){
return app.main.refs.workspace_text_modifier_by_id(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
}));
var text_modifier = rumext.v2.deref(text_modifier_ref);
var shape__$1 = (function (){var G__56771 = shape;
var G__56771__$1 = (((!((modifiers__$1 == null))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__56771,modifiers__$1):G__56771);
if((!((text_modifier == null)))){
return app.main.data.workspace.texts.apply_text_modifier(G__56771__$1,text_modifier);
} else {
return G__56771__$1;
}
})();
var transform = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape__$1);
var map__56766 = shape__$1;
var map__56766__$1 = cljs.core.__destructure_map(map__56766);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56766__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56766__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56766__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56766__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return rumext.v2.jsx("rect",{'className':"main viewport-selrect",'x':x,'y':y,'width':width,'height':height,'transform':transform,'style':{'stroke':"var(--color-accent-tertiary)",'strokeWidth':((1) / zoom),'fill':"none"}});
}
});

(app.main.ui.workspace.shapes.text.text_edition_outline.text_edition_outline.displayName = "text-edition-outline");


//# sourceMappingURL=app.main.ui.workspace.shapes.text.text_edition_outline.js.map
