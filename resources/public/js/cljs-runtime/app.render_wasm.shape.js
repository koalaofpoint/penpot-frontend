import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.transit.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape.layout.js";
import "./app.main.refs.js";
import "./app.render_wasm.api.js";
import "./app.render_wasm.svg_filters.js";
import "./app.render_wasm.wasm.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
goog.provide('app.render_wasm.shape');
/**
 * Check if a shape is in the current page by looking up the current page objects
 */
app.render_wasm.shape.shape_in_current_page_QMARK_ = (function app$render_wasm$shape$shape_in_current_page_QMARK_(shape_id){
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
return cljs.core.contains_QMARK_(objects,shape_id);
});
app.render_wasm.shape.map_entry = (function app$render_wasm$shape$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {app.common.types.shape.IShape}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
app.render_wasm.shape.ShapeProxy = (function (id,type,delegate){
this.id = id;
this.type = type;
this.delegate = delegate;
this.cljs$lang$protocol_mask$partition0$ = 2179335951;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.render_wasm.shape.ShapeProxy.prototype.app$common$types$shape$IShape$ = cljs.core.PROTOCOL_SENTINEL);

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,["#penpot/shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.delegate))].join(''));
}));

(app.render_wasm.shape.ShapeProxy.prototype.toString = (function (){
var self__ = this;
var coll = this;
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",(function (){var iter__5503__auto__ = (function app$render_wasm$shape$iter__55834(s__55835){
return (new cljs.core.LazySeq(null,(function (){
var s__55835__$1 = s__55835;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__55835__$1);
if(temp__5825__auto__){
var s__55835__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55835__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__55835__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__55837 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__55836 = (0);
while(true){
if((i__55836 < size__5502__auto__)){
var vec__55887 = cljs.core._nth(c__5501__auto__,i__55836);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55887,(1),null);
cljs.core.chunk_append(b__55837,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__55978 = (i__55836 + (1));
i__55836 = G__55978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55837),app$render_wasm$shape$iter__55834(cljs.core.chunk_rest(s__55835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55837),null);
}
} else {
var vec__55893 = cljs.core.first(s__55835__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55893,(1),null);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),app$render_wasm$shape$iter__55834(cljs.core.rest(s__55835__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(coll);
})())),"}"].join('');
}));

(app.render_wasm.shape.ShapeProxy.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IFind$_find$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var G__55919 = k;
var G__55919__$1 = (((G__55919 instanceof cljs.core.Keyword))?G__55919.fqn:null);
switch (G__55919__$1) {
case "id":
return app.render_wasm.shape.map_entry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);

break;
case "type":
return app.render_wasm.shape.map_entry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type);

break;
default:
return cljs.core._find(self__.delegate,k);

}
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new app.render_wasm.shape.ShapeProxy(self__.id,self__.type,cljs.core.with_meta(self__.delegate,meta)));
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return coll__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var G__55923 = k;
var G__55923__$1 = (((G__55923 instanceof cljs.core.Keyword))?G__55923.fqn:null);
switch (G__55923__$1) {
case "id":
return self__.id;

break;
case "type":
return self__.type;

break;
default:
return cljs.core._lookup(self__.delegate,k,not_found);

}
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.delegate);
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,coll__$1));
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new app.render_wasm.shape.ShapeProxy(null,null,null));
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
return (app.render_wasm.shape.impl_assoc.cljs$core$IFn$_invoke$arity$3 ? app.render_wasm.shape.impl_assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v) : app.render_wasm.shape.impl_assoc.call(null,coll__$1,k,v));
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"id","id",-1388402092))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"type","type",1174270348))) || (cljs.core.contains_QMARK_(self__.delegate,k)))));
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((1) + cljs.core.count(self__.delegate));
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return (app.render_wasm.shape.impl_dissoc.cljs$core$IFn$_invoke$arity$2 ? app.render_wasm.shape.impl_dissoc.cljs$core$IFn$_invoke$arity$2(coll__$1,k) : app.render_wasm.shape.impl_dissoc.call(null,coll__$1,k));
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(app.render_wasm.shape.map_entry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id),cljs.core.cons(app.render_wasm.shape.map_entry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type),cljs.core._seq(self__.delegate)));
}));

(app.render_wasm.shape.ShapeProxy.prototype.call = (function (unused__14253__auto__){
var self__ = this;
var self__ = this;
var G__55924 = (arguments.length - (1));
switch (G__55924) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(app.render_wasm.shape.ShapeProxy.prototype.apply = (function (self__,args55820){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args55820)));
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(app.render_wasm.shape.ShapeProxy.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return (app.render_wasm.shape.impl_conj.cljs$core$IFn$_invoke$arity$2 ? app.render_wasm.shape.impl_conj.cljs$core$IFn$_invoke$arity$2(coll__$1,entry) : app.render_wasm.shape.impl_conj.call(null,coll__$1,entry));
}));

(app.render_wasm.shape.ShapeProxy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"delegate","delegate",498647757,null)], null);
}));

(app.render_wasm.shape.ShapeProxy.cljs$lang$type = true);

(app.render_wasm.shape.ShapeProxy.cljs$lang$ctorStr = "app.render-wasm.shape/ShapeProxy");

(app.render_wasm.shape.ShapeProxy.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.render-wasm.shape/ShapeProxy");
}));

/**
 * Positional factory function for app.render-wasm.shape/ShapeProxy.
 */
app.render_wasm.shape.__GT_ShapeProxy = (function app$render_wasm$shape$__GT_ShapeProxy(id,type,delegate){
return (new app.render_wasm.shape.ShapeProxy(id,type,delegate));
});

app.render_wasm.shape.set_wasm_attr_BANG_ = (function app$render_wasm$shape$set_wasm_attr_BANG_(shape,k){
if(app.render_wasm.wasm.context_initialized_QMARK_){
var shape__$1 = (function (){var G__55935 = k;
var G__55935__$1 = (((G__55935 instanceof cljs.core.Keyword))?G__55935.fqn:null);
switch (G__55935__$1) {
case "svg-attrs":
return app.render_wasm.svg_filters.apply_svg_derived(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772))));

break;
case "fills":
case "blur":
case "shadow":
return app.render_wasm.svg_filters.apply_svg_derived(shape);

break;
default:
return shape;

}
})();
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,k);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var G__55937 = k;
var G__55937__$1 = (((G__55937 instanceof cljs.core.Keyword))?G__55937.fqn:null);
switch (G__55937__$1) {
case "parent-id":
return app.render_wasm.api.set_parent_id(v);

break;
case "type":
app.render_wasm.api.set_shape_type(v);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"path","path",-188191168))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"bool","bool",1444635321))))){
return app.render_wasm.api.set_shape_path_content(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape__$1));
} else {
return null;
}

break;
case "bool-type":
return app.render_wasm.api.set_shape_bool_type(v);

break;
case "selrect":
app.render_wasm.api.set_shape_selrect(v);

if(app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
return app.render_wasm.api.set_shape_svg_raw_content(app.render_wasm.api.get_static_markup(shape__$1));
} else {
return null;
}

break;
case "show-content":
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
return app.render_wasm.api.set_shape_clip_content(cljs.core.not(v));
} else {
return app.render_wasm.api.set_shape_clip_content(false);
}

break;
case "rotation":
return app.render_wasm.api.set_shape_rotation(v);

break;
case "transform":
return app.render_wasm.api.set_shape_transform(v);

break;
case "fills":
return app.render_wasm.api.set_shape_fills(id,v,false);

break;
case "strokes":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,app.render_wasm.api.set_shape_strokes(id,v,false));

break;
case "blend-mode":
return app.render_wasm.api.set_shape_blend_mode(v);

break;
case "opacity":
return app.render_wasm.api.set_shape_opacity(v);

break;
case "hidden":
return app.render_wasm.api.set_shape_hidden(v);

break;
case "shapes":
return app.render_wasm.api.set_shape_children(v);

break;
case "blur":
return app.render_wasm.api.set_shape_blur(v);

break;
case "shadow":
return app.render_wasm.api.set_shape_shadows(v);

break;
case "constraints-h":
return app.render_wasm.api.set_constraints_h(v);

break;
case "constraints-v":
return app.render_wasm.api.set_constraints_v(v);

break;
case "r1":
return app.render_wasm.api.set_shape_corners(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,(shape__$1?.r2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r2","r2",252844174))),(shape__$1?.r3?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r3","r3",-2027148174))),(shape__$1?.r4?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r4","r4",1134323163)))], null));

break;
case "r2":
return app.render_wasm.api.set_shape_corners(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(shape__$1?.r1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r1","r1",690974900))),v,(shape__$1?.r3?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r3","r3",-2027148174))),(shape__$1?.r4?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r4","r4",1134323163)))], null));

break;
case "r3":
return app.render_wasm.api.set_shape_corners(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(shape__$1?.r1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r1","r1",690974900))),(shape__$1?.r2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r2","r2",252844174))),v,(shape__$1?.r4?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r4","r4",1134323163)))], null));

break;
case "r4":
return app.render_wasm.api.set_shape_corners(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(shape__$1?.r1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r1","r1",690974900))),(shape__$1?.r2?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r2","r2",252844174))),(shape__$1?.r3?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"r3","r3",-2027148174))),v], null));

break;
case "svg-attrs":
app.render_wasm.api.set_shape_svg_attrs(v);

app.render_wasm.api.set_shape_fills(id,new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape__$1),false);

app.render_wasm.api.set_shape_blur(new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape__$1));

return app.render_wasm.api.set_shape_shadows(new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape__$1));

break;
case "masked-group":
if(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
return app.render_wasm.api.set_masked(cljs.core.boolean$(new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(shape__$1)));
} else {
return null;
}

break;
case "content":
if(((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)) || (app.common.files.helpers.bool_shape_QMARK_(shape__$1)))){
return app.render_wasm.api.set_shape_path_content(v);
} else {
if(app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
return app.render_wasm.api.set_shape_svg_raw_content(app.render_wasm.api.get_static_markup(shape__$1));
} else {
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
var pending_thumbnails = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(app.render_wasm.api.set_shape_text_content(id,v)));
var pending_full = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(app.render_wasm.api.set_shape_text_images.cljs$core$IFn$_invoke$arity$2(id,v)));
app.render_wasm.api.process_pending.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape__$1], null),pending_thumbnails,pending_full,app.render_wasm.api.noop_fn);

return null;
} else {
return null;
}
}
}

break;
case "grow-type":
return app.render_wasm.api.set_shape_grow_type(v);

break;
case "layout-item-align-self":
case "layout-item-margin":
case "layout-item-margin-type":
case "layout-item-h-sizing":
case "layout-item-v-sizing":
case "layout-item-max-h":
case "layout-item-min-h":
case "layout-item-max-w":
case "layout-item-min-w":
case "layout-item-absolute":
case "layout-item-z-index":
return app.render_wasm.api.set_layout_data(shape__$1);

break;
case "layout-grid-rows":
return app.render_wasm.api.set_grid_layout_rows(v);

break;
case "layout-grid-columns":
return app.render_wasm.api.set_grid_layout_columns(v);

break;
case "layout-grid-cells":
return app.render_wasm.api.set_grid_layout_cells(v);

break;
case "layout":
app.render_wasm.api.clear_layout();

if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
app.render_wasm.api.set_grid_layout(shape__$1);
} else {
if(app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
app.render_wasm.api.set_flex_layout(shape__$1);
} else {
}
}

return app.render_wasm.api.set_layout_data(shape__$1);

break;
case "layout-flex-dir":
case "layout-gap-type":
case "layout-gap":
case "layout-align-items":
case "layout-align-content":
case "layout-justify-items":
case "layout-justify-content":
case "layout-wrap-type":
case "layout-padding-type":
case "layout-padding":
if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
return app.render_wasm.api.set_grid_layout_data(shape__$1);
} else {
if(app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)){
return app.render_wasm.api.set_flex_layout(shape__$1);
} else {
return null;
}
}

break;
default:
return null;

}
} else {
return null;
}
});
app.render_wasm.shape.process_shape_BANG_ = (function app$render_wasm$shape$process_shape_BANG_(shape,properties){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
if(app.render_wasm.shape.shape_in_current_page_QMARK_(shape_id)){
app.render_wasm.api.use_shape(shape_id);

return beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.render_wasm.api.update_text_rect_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return null;
}
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.mapcat((function (callback){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
}),beicon.v2.core.from(cljs.core.vals(app.common.data.index_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"callback","callback",-705136228),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__55946_SHARP_){
return app.render_wasm.shape.set_wasm_attr_BANG_(shape,p1__55946_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0))))))));
} else {
return beicon.v2.core.empty();
}
});
app.render_wasm.shape.process_shape_changes_BANG_ = (function app$render_wasm$shape$process_shape_changes_BANG_(objects,shape_changes){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return app.render_wasm.api.request_render("set-wasm-attrs");
}),beicon.v2.core.mapcat((function (p__55952){
var vec__55953 = p__55952;
var shape_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55953,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55953,(1),null);
return app.render_wasm.shape.process_shape_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id),props);
}),beicon.v2.core.from(shape_changes)));
});
app.render_wasm.shape.conj_STAR_ = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0());
app.render_wasm.shape.impl_assoc = (function app$render_wasm$shape$impl_assoc(self,k,v){
if(cljs.core.truth_(app.common.types.shape._STAR_shape_changes_STAR_)){
cljs.core._vreset_BANG_(app.common.types.shape._STAR_shape_changes_STAR_,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core._deref(app.common.types.shape._STAR_shape_changes_STAR_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self),app.render_wasm.shape.conj_STAR_,k));
} else {
}

var G__55956 = k;
var G__55956__$1 = (((G__55956 instanceof cljs.core.Keyword))?G__55956.fqn:null);
switch (G__55956__$1) {
case "id":
return (new app.render_wasm.shape.ShapeProxy(v,self.type,self.delegate));

break;
case "type":
return (new app.render_wasm.shape.ShapeProxy(self.id,v,self.delegate));

break;
default:
var delegate = self.delegate;
var delegate_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(delegate,k,v);
if((delegate_SINGLEQUOTE_ === delegate)){
return self;
} else {
return (new app.render_wasm.shape.ShapeProxy(self.id,self.type,delegate_SINGLEQUOTE_));
}

}
});
app.render_wasm.shape.impl_dissoc = (function app$render_wasm$shape$impl_dissoc(self,k){
if(cljs.core.truth_(app.common.types.shape._STAR_shape_changes_STAR_)){
cljs.core._vreset_BANG_(app.common.types.shape._STAR_shape_changes_STAR_,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core._deref(app.common.types.shape._STAR_shape_changes_STAR_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self),app.render_wasm.shape.conj_STAR_,k));
} else {
}

var G__55960 = k;
var G__55960__$1 = (((G__55960 instanceof cljs.core.Keyword))?G__55960.fqn:null);
switch (G__55960__$1) {
case "id":
return (new app.render_wasm.shape.ShapeProxy(null,self.type,self.delegate));

break;
case "type":
return (new app.render_wasm.shape.ShapeProxy(self.id,null,self.delegate));

break;
default:
var delegate = self.delegate;
var delegate_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(delegate,k);
if((delegate === delegate_SINGLEQUOTE_)){
return self;
} else {
return (new app.render_wasm.shape.ShapeProxy(self.id,self.type,delegate_SINGLEQUOTE_));
}

}
});
app.render_wasm.shape.impl_conj = (function app$render_wasm$shape$impl_conj(self,entry){
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(self,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
var ret = self;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__56001 = cljs.core._assoc(ret,cljs.core._nth(e,(0)),cljs.core._nth(e,(1)));
var G__56002 = cljs.core.next(es);
ret = G__56001;
es = G__56002;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
app.render_wasm.shape.xf_COLON_without_id_and_type = cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (kvpair){
var k = cljs.core.key(kvpair);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"id","id",-1388402092))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"type","type",1174270348))));
}));
/**
 * Instanciate a shape from a map
 */
app.render_wasm.shape.create_shape = (function app$render_wasm$shape$create_shape(attrs){
return (new app.render_wasm.shape.ShapeProxy(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(attrs),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,app.render_wasm.shape.xf_COLON_without_id_and_type,attrs)));
});
app.common.transit.add_handlers_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"shape",new cljs.core.Keyword(null,"class","class",-2030961996),app.render_wasm.shape.ShapeProxy,new cljs.core.Keyword(null,"wfn","wfn",-1437298400),(function (p1__55965_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__55965_SHARP_);
})], null)], 0));

//# sourceMappingURL=app.render_wasm.shape.js.map
