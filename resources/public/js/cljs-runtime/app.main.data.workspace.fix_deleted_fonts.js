import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.helpers.js";
import "./app.common.types.text.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.fonts.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.fix_deleted_fonts');
app.main.data.workspace.fix_deleted_fonts.calculate_alternative_font_id = (function app$main$data$workspace$fix_deleted_fonts$calculate_alternative_font_id(value){
var fonts = cljs.core.deref(app.main.fonts.fontsdb);
return cljs.core.reduce_kv((function (_,___$1,font){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"family","family",-1313145692).cljs$core$IFn$_invoke$arity$1(font),value)){
return cljs.core.reduced(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font));
} else {
return null;
}
}),null,fonts);
});
app.main.data.workspace.fix_deleted_fonts.has_invalid_font_family_QMARK_ = (function app$main$data$workspace$fix_deleted_fonts$has_invalid_font_family_QMARK_(node){
var fonts = cljs.core.deref(app.main.fonts.fontsdb);
var font_family = new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(node);
return (((!((font_family == null)))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(fonts,new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(node)) == null)));
});
app.main.data.workspace.fix_deleted_fonts.shape_has_invalid_font_family_QMARK__QMARK_ = (function app$main$data$workspace$fix_deleted_fonts$shape_has_invalid_font_family_QMARK__QMARK_(shape){
var and__5023__auto__ = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
if(and__5023__auto__){
return cljs.core.some(app.main.data.workspace.fix_deleted_fonts.has_invalid_font_family_QMARK_,app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return and__5023__auto__;
}
});
app.main.data.workspace.fix_deleted_fonts.fix_deleted_font = (function app$main$data$workspace$fix_deleted_fonts$fix_deleted_font(node){
var temp__5823__auto__ = app.main.data.workspace.fix_deleted_fonts.calculate_alternative_font_id(new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(temp__5823__auto__)){
var alternative_font_id = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"font-id","font-id",-390084123),alternative_font_id);
} else {
return node;
}
});
app.main.data.workspace.fix_deleted_fonts.fix_shape_content = (function app$main$data$workspace$fix_deleted_fonts$fix_shape_content(shape){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.fix_deleted_fonts.has_invalid_font_family_QMARK_,app.main.data.workspace.fix_deleted_fonts.fix_deleted_font,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape));
});
app.main.data.workspace.fix_deleted_fonts.fix_typography = (function app$main$data$workspace$fix_deleted_fonts$fix_typography(typography){
var temp__5823__auto__ = app.main.data.workspace.fix_deleted_fonts.calculate_alternative_font_id(new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(typography));
if(cljs.core.truth_(temp__5823__auto__)){
var alternative_font_id = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(typography,new cljs.core.Keyword(null,"font-id","font-id",-390084123),alternative_font_id);
} else {
return typography;
}
});
app.main.data.workspace.fix_deleted_fonts.generate_page_changes = (function app$main$data$workspace$fix_deleted_fonts$generate_page_changes(p__50488){
var map__50489 = p__50488;
var map__50489__$1 = cljs.core.__destructure_map(map__50489);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50489__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.reduce_kv((function (changes,shape_id,shape){
if(cljs.core.truth_(app.main.data.workspace.fix_deleted_fonts.shape_has_invalid_font_family_QMARK__QMARK_(shape))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(changes,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),shape_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),id,new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"val","val",128701612),app.main.data.workspace.fix_deleted_fonts.fix_shape_content(shape)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"position-data","position-data",-499622376),new cljs.core.Keyword(null,"val","val",128701612),null], null)], null)], null));
} else {
return changes;
}
}),cljs.core.PersistentVector.EMPTY,objects);
});
app.main.data.workspace.fix_deleted_fonts.generate_library_changes = (function app$main$data$workspace$fix_deleted_fonts$generate_library_changes(fdata){
return cljs.core.reduce_kv((function (changes,_,typography){
if(app.main.data.workspace.fix_deleted_fonts.has_invalid_font_family_QMARK_(typography)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(changes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-typography","mod-typography",55947030),new cljs.core.Keyword(null,"typography","typography",-399568138),app.main.data.workspace.fix_deleted_fonts.fix_typography(typography)], null));
} else {
return changes;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(fdata));
});
/**
 * Looks the file local library for deleted fonts and emit changes if
 *   invalid but fixable typographyes found.
 */
app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library = (function app$main$data$workspace$fix_deleted_fonts$fix_deleted_fonts_for_local_library(file_id){
if((typeof app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506 = (function (file_id,meta50507){
this.file_id = file_id;
this.meta50507 = meta50507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.fix-deleted-fonts","fix-deleted-fonts-for-local-library","app.main.data.workspace.fix-deleted-fonts/fix-deleted-fonts-for-local-library",-314408718);
}));

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50508,meta50507__$1){
var self__ = this;
var _50508__$1 = this;
return (new app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506(self__.file_id,meta50507__$1));
}));

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50508){
var self__ = this;
var _50508__$1 = this;
return self__.meta50507;
}));

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var fdata = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,self__.file_id);
var temp__5825__auto__ = cljs.core.not_empty(app.main.data.workspace.fix_deleted_fonts.generate_library_changes(fdata));
if(cljs.core.truth_(temp__5825__auto__)){
var changes = temp__5825__auto__;
return beicon.v2.core.of(app.main.data.changes.commit_changes(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"origin","origin",1037372088),it__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),changes,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false,new cljs.core.Keyword(null,"ignore-wasm?","ignore-wasm?",-324568531),true], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_local_library_50506(file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page = (function app$main$data$workspace$fix_deleted_fonts$fix_deleted_fonts_for_page(file_id,page_id){
if((typeof app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545 = (function (file_id,page_id,meta50546){
this.file_id = file_id;
this.page_id = page_id;
this.meta50546 = meta50546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.fix-deleted-fonts","fix-deleted-fonts-for-page","app.main.data.workspace.fix-deleted-fonts/fix-deleted-fonts-for-page",1505644212);
}));

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50547,meta50546__$1){
var self__ = this;
var _50547__$1 = this;
return (new app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545(self__.file_id,self__.page_id,meta50546__$1));
}));

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50547){
var self__ = this;
var _50547__$1 = this;
return self__.meta50546;
}));

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$3(state,self__.file_id,self__.page_id);
var temp__5825__auto__ = cljs.core.not_empty(app.main.data.workspace.fix_deleted_fonts.generate_page_changes(page));
if(cljs.core.truth_(temp__5825__auto__)){
var changes = temp__5825__auto__;
return beicon.v2.core.of(app.main.data.changes.commit_changes(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"origin","origin",1037372088),it__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),changes,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false,new cljs.core.Keyword(null,"ignore-wasm?","ignore-wasm?",-324568531),true], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.fix_deleted_fonts.fix_deleted_fonts_for_page_50545(file_id,page_id,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.fix_deleted_fonts.js.map
