import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.main.refs.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.shapes.attrs.js";
import "./app.util.object.js";
import "./clojure.set.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.outline');
app.main.ui.workspace.viewport.outline.outline = (function app$main$ui$workspace$viewport$outline$outline(props_80381){
var props = props_80381;
var shape = (props["shape"]);
var modifier = (props["modifier"]);
var zoom = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["zoom"]),(1));
var shape__$1 = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"modifiers","modifiers",50378834).cljs$core$IFn$_invoke$arity$1(modifier));
var transform = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape__$1);
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var color = (cljs.core.truth_((function (){var or__5025__auto__ = app.common.types.container.in_any_component_QMARK_(objects,shape__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.component.is_variant_container_QMARK_(shape__$1);
}
})())?"var(--assets-component-hightlight)":"var(--color-accent-tertiary)");
var x = (shape__$1?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape__$1?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (shape__$1?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (shape__$1?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"height","height",1025178622)));
var selrect = (shape__$1?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
var type = (shape__$1?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"type","type",1174270348)));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"content","content",15833224));
var path_QMARK_ = app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1);
var path_data = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(path_QMARK_),rumext.v2.adapt(content)],(function (){
if(((path_QMARK_) && ((!((content == null)))))){
return content.toString();
} else {
return null;
}
}));
var border_attrs = app.main.ui.shapes.attrs.get_border_props(shape__$1);
var outline_type = (function (){var G__80382 = type;
var G__80382__$1 = (((G__80382 instanceof cljs.core.Keyword))?G__80382.fqn:null);
switch (G__80382__$1) {
case "circle":
return "ellipse";

break;
case "path":
return "path";

break;
default:
if((!((app.util.object.get.cljs$core$IFn$_invoke$arity$2(border_attrs,"d") == null)))){
return "path";
} else {
return "rect";
}

}
})();
var props__$1 = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(({"fill": "none", "stroke": color, "strokeWidth": ((1) / zoom), "pointerEvents": "none", "transform": transform}),(function (){var G__80384 = type;
var G__80384__$1 = (((G__80384 instanceof cljs.core.Keyword))?G__80384.fqn:null);
switch (G__80384__$1) {
case "circle":
return ({"cx": (x + (width / (2))), "cy": (y + (height / (2))), "rx": (width / (2)), "ry": (height / (2))});

break;
case "path":
return ({"d": path_data, "transform": null});

break;
default:
var x__$1 = (selrect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y__$1 = (selrect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)));
return ({"x": x__$1, "y": y__$1, "width": w, "height": h, "rx": app.util.object.get.cljs$core$IFn$_invoke$arity$2(border_attrs,"rx"), "ry": app.util.object.get.cljs$core$IFn$_invoke$arity$2(border_attrs,"ry"), "d": app.util.object.get.cljs$core$IFn$_invoke$arity$2(border_attrs,"d")});

}
})());
return rumext.v2.create_element(outline_type,props__$1);
});

(app.main.ui.workspace.viewport.outline.outline.displayName = "outline");

app.main.ui.workspace.viewport.outline.shape_outlines_render = (function (p1__80386_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__80386_SHARP_,(function (new_props_80388,old_props_80389){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_80388.shapes,old_props_80389.shapes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_80388.zoom,old_props_80389.zoom)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_80388.modifiers,old_props_80389.modifiers)))));
}));
})((function app$main$ui$workspace$viewport$outline$shape_outlines_render(props_80387){
var props = props_80387;
var shapes = (props["shapes"]);
var zoom = (props["zoom"]);
var modifiers = (props["modifiers"]);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push((function (){var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,shape_id);
return rumext.v2.jsx(app.main.ui.workspace.viewport.outline.outline,{'shape':shape,'modifier':modifier,'zoom':zoom},""+"outline-"+(shape_id ?? ""));
})());

return out_arr__46744__auto__;
}),[],shapes);
}));

(app.main.ui.workspace.viewport.outline.shape_outlines_render.displayName = "shape-outlines-render");

app.main.ui.workspace.viewport.outline.shape_outlines = (function app$main$ui$workspace$viewport$outline$shape_outlines(props_80390){
var props = props_80390;
var selected = (function (){var or__5025__auto__ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"selected");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var hover = (function (){var or__5025__auto__ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"hover");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var highlighted = (function (){var or__5025__auto__ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"highlighted");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var objects = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"objects");
var edition = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"edition");
var zoom = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"zoom");
var modifiers = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"modifiers");
var lookup = app.common.data.getf(objects);
var edition_QMARK_ = (function (o){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edition,o);
});
var shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(edition_QMARK_),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(lookup)),clojure.set.union.cljs$core$IFn$_invoke$arity$2(selected,hover)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(edition_QMARK_),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(lookup)),highlighted);
var modifiers__$1 = cljs.core.select_keys(modifiers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes));
var modifiers__$2 = app.main.ui.hooks.use_equal_memo(modifiers__$1);
var shapes__$1 = app.main.ui.hooks.use_equal_memo(shapes);
return rumext.v2.jsx("g",{'className':"outlines blurrable",'children':rumext.v2.jsx(app.main.ui.workspace.viewport.outline.shape_outlines_render,{'shapes':shapes__$1,'zoom':zoom,'modifiers':modifiers__$2})});
});

(app.main.ui.workspace.viewport.outline.shape_outlines.displayName = "shape-outlines");


//# sourceMappingURL=app.main.ui.workspace.viewport.outline.js.map
