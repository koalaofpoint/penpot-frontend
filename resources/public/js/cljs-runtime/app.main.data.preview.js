import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.types.shape_tree.js";
import "./app.main.data.helpers.js";
import "./app.main.fonts.js";
import "./app.main.refs.js";
import "./app.util.code_beautify.js";
import "./app.util.code_gen.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.preview');
app.main.data.preview.style_type = "css";
app.main.data.preview.markup_type = "html";
app.main.data.preview.page_template = "<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n    %s\n    </style>\n  </head>\n  <body>\n  %s\n  </body>\n</html>";
app.main.data.preview.update_preview_window = (function app$main$data$preview$update_preview_window(preview,code,width,height){
if(cljs.core.truth_(preview)){
if(cljs.core.truth_((preview["load"]))){
return preview.load(code,width,height);
} else {
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return (app.main.data.preview.update_preview_window.cljs$core$IFn$_invoke$arity$4 ? app.main.data.preview.update_preview_window.cljs$core$IFn$_invoke$arity$4(preview,code,width,height) : app.main.data.preview.update_preview_window.call(null,preview,code,width,height));
}));
}
} else {
return null;
}
});
app.main.data.preview.shapes__GT_fonts = (function app$main$data$preview$shapes__GT_fonts(shapes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.main.fonts.get_content_fonts,new cljs.core.Keyword(null,"content","content",15833224)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.text_shape_QMARK_,shapes)));
});
app.main.data.preview.update_preview = (function app$main$data$preview$update_preview(preview,shape_id){
if((typeof app.main.data.preview.update_preview_72790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.preview.update_preview_72790 = (function (preview,shape_id,meta72791){
this.preview = preview;
this.shape_id = shape_id;
this.meta72791 = meta72791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.preview.update_preview_72790.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.preview.update_preview_72790.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.preview","update-preview","app.main.data.preview/update-preview",-201546492);
}));

(app.main.data.preview.update_preview_72790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72792,meta72791__$1){
var self__ = this;
var _72792__$1 = this;
return (new app.main.data.preview.update_preview_72790(self__.preview,self__.shape_id,meta72791__$1));
}));

(app.main.data.preview.update_preview_72790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72792){
var self__ = this;
var _72792__$1 = this;
return self__.meta72791;
}));

(app.main.data.preview.update_preview_72790.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.preview.update_preview_72790.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.shape_id);
var all_children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.types.shape_tree.sort_z_index.cljs$core$IFn$_invoke$arity$2(objects,app.common.files.helpers.selected_with_children(objects,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.shape_id], null))));
var fonts = app.main.data.preview.shapes__GT_fonts(all_children);
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (fontfaces_css){
var style_code = ""+(fontfaces_css ?? "")+"\n"+(app.util.code_beautify.format_code(app.util.code_gen.generate_style_code.cljs$core$IFn$_invoke$arity$4(objects,app.main.data.preview.style_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),all_children),app.main.data.preview.style_type) ?? "");
var markup_code = app.util.code_gen.generate_formatted_markup_code(objects,app.main.data.preview.markup_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null));
return app.main.data.preview.update_preview_window(self__.preview,cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(app.main.data.preview.page_template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style_code,markup_code], 0)),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape)));
}),beicon.v2.core.map((function (p1__72789_SHARP_){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",p1__72789_SHARP_);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.merge_map(app.main.fonts.fetch_font_css,beicon.v2.core.from(fonts)))));
}));
}

return (new app.main.data.preview.update_preview_72790(preview,shape_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.preview.open_preview_selected = (function app$main$data$preview$open_preview_selected(){
if((typeof app.main.data.preview.open_preview_selected_72793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.preview.open_preview_selected_72793 = (function (meta72794){
this.meta72794 = meta72794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.preview.open_preview_selected_72793.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.preview.open_preview_selected_72793.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.preview","open-preview-selected","app.main.data.preview/open-preview-selected",532840787);
}));

(app.main.data.preview.open_preview_selected_72793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72795,meta72794__$1){
var self__ = this;
var _72795__$1 = this;
return (new app.main.data.preview.open_preview_selected_72793(meta72794__$1));
}));

(app.main.data.preview.open_preview_selected_72793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72795){
var self__ = this;
var _72795__$1 = this;
return self__.meta72794;
}));

(app.main.data.preview.open_preview_selected_72793.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.preview.open_preview_selected_72793.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var shape_id = cljs.core.first(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var closed_preview = beicon.v2.core.subject();
var preview = window.open("/#/frame-preview");
var listener_fn = (function (){
return closed_preview.next(true);
});
if((!((preview == null)))){
preview.addEventListener("beforeunload",listener_fn);
} else {
}

return beicon.v2.core.map((function (){
return app.main.data.preview.update_preview(preview,shape_id);
}),beicon.v2.core.debounce((1000),beicon.v2.core.take_until(closed_preview,beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.all_children_objects(shape_id),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null)))));
}));
}

return (new app.main.data.preview.open_preview_selected_72793(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.preview.js.map
