import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.types.modifiers.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.modifiers.js";
import "./app.render_wasm.api.js";
import "./app.render_wasm.api.fonts.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.wasm_text');
app.main.data.workspace.wasm_text.resize_wasm_text_modifiers = (function app$main$data$workspace$wasm_text$resize_wasm_text_modifiers(var_args){
var G__49011 = arguments.length;
switch (G__49011) {
case 1:
return app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape));
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$core$IFn$_invoke$arity$2 = (function (p__49012,content){
var map__49013 = p__49012;
var map__49013__$1 = cljs.core.__destructure_map(map__49013);
var shape = map__49013__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49013__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49013__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49013__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var grow_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49013__$1,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411));
app.render_wasm.api.use_shape(id);

app.render_wasm.api.set_shape_text_content(id,content);

app.render_wasm.api.set_shape_text_images.cljs$core$IFn$_invoke$arity$2(id,content);

var dimension = app.render_wasm.api.get_text_dimensions.cljs$core$IFn$_invoke$arity$0();
var width_scale = (cljs.core.truth_((function (){var fexpr__49014 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-height","auto-height",-960519663),null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),null], null), null);
return (fexpr__49014.cljs$core$IFn$_invoke$arity$1 ? fexpr__49014.cljs$core$IFn$_invoke$arity$1(grow_type) : fexpr__49014.call(null,grow_type));
})())?1.0:(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(dimension) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect)));
var height_scale = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),grow_type))?1.0:(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(dimension) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect)));
var resize_v = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(width_scale,height_scale);
var origin = cljs.core.first(points);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),app.common.types.modifiers.resize_modifiers.cljs$core$IFn$_invoke$arity$4(resize_v,origin,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$2(shape,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$2(shape,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()))], null)]);
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$lang$maxFixedArity = 2);

/**
 * Resize a single text shape (auto-width/auto-height) by id.
 *   No-op if the id is not a text shape or is :fixed.
 */
app.main.data.workspace.wasm_text.resize_wasm_text = (function app$main$data$workspace$wasm_text$resize_wasm_text(id){
if((typeof app.main.data.workspace.wasm_text.resize_wasm_text_49015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.wasm_text.resize_wasm_text_49015 = (function (id,meta49016){
this.id = id;
this.meta49016 = meta49016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.wasm_text.resize_wasm_text_49015.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_49015.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text","app.main.data.workspace.wasm-text/resize-wasm-text",-677095419);
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_49015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49017,meta49016__$1){
var self__ = this;
var _49017__$1 = this;
return (new app.main.data.workspace.wasm_text.resize_wasm_text_49015(self__.id,meta49016__$1));
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_49015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49017){
var self__ = this;
var _49017__$1 = this;
return self__.meta49016;
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_49015.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_49015.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
if((((!((shape == null)))) && (((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape))))))){
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers(app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.wasm_text.resize_wasm_text_49015(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit = (function app$main$data$workspace$wasm_text$resize_wasm_text_debounce_commit(){
if((typeof app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019 = (function (meta49020){
this.meta49020 = meta49020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-commit","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-commit",-1698151156);
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49021,meta49020__$1){
var self__ = this;
var _49021__$1 = this;
return (new app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019(meta49020__$1));
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49021){
var self__ = this;
var _49021__$1 = this;
return self__.meta49020;
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-ids","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-ids",900652551));
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var modifiers = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (modifiers,id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var G__49025 = modifiers;
if((((!((shape == null)))) && (((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(shape))))))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__49025,app.main.data.workspace.wasm_text.resize_wasm_text_modifiers.cljs$core$IFn$_invoke$arity$1(shape)], 0));
} else {
return G__49025;
}
}),cljs.core.PersistentArrayMap.EMPTY,ids);
if((!(cljs.core.empty_QMARK_(modifiers)))){
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers(modifiers));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit_49019(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner = (function app$main$data$workspace$wasm_text$resize_wasm_text_debounce_inner(id){
var cur_event = Symbol();
if((typeof app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028 = (function (id,cur_event,meta49029){
this.id = id;
this.cur_event = cur_event;
this.meta49029 = meta49029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-inner","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-inner",995485041);
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49030,meta49029__$1){
var self__ = this;
var _49030__$1 = this;
return (new app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028(self__.id,self__.cur_event,meta49029__$1));
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49030){
var self__ = this;
var _49030__$1 = this;
return self__.meta49029;
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var G__49031 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-ids","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-ids",900652551),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),self__.id);
if((new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-event","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-event",-1468604289).cljs$core$IFn$_invoke$arity$1(state) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49031,new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-event","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-event",-1468604289),self__.cur_event);
} else {
return G__49031;
}
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-event","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-event",-1468604289).cljs$core$IFn$_invoke$arity$1(state),self__.cur_event)){
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","finalize","app.main.data.workspace/finalize",-1506426600)),stream);
return beicon.v2.core.concat(beicon.v2.core.merge(beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (){
return app.main.data.workspace.wasm_text.resize_wasm_text_debounce_commit();
}),beicon.v2.core.take((1),beicon.v2.core.debounce((40),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-inner","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-inner",995485041)),stream))))),beicon.v2.core.of((app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner.cljs$core$IFn$_invoke$arity$1(self__.id) : app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner.call(null,self__.id)))),beicon.v2.core.of((function (p1__49027_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__49027_SHARP_,new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-ids","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-ids",900652551),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce-event","app.main.data.workspace.wasm-text/resize-wasm-text-debounce-event",-1468604289)], 0));
})));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner_49028(id,cur_event,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.wasm_text.resize_wasm_text_debounce = (function app$main$data$workspace$wasm_text$resize_wasm_text_debounce(id){
if((typeof app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034 = (function (id,meta49035){
this.id = id;
this.meta49035 = meta49035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-debounce","app.main.data.workspace.wasm-text/resize-wasm-text-debounce",1348694639);
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49036,meta49035__$1){
var self__ = this;
var _49036__$1 = this;
return (new app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034(self__.id,meta49035__$1));
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49036){
var self__ = this;
var _49036__$1 = this;
return self__.meta49035;
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id),new cljs.core.Keyword(null,"content","content",15833224));
var fonts = app.render_wasm.api.fonts.get_content_fonts(content);
var fonts_loaded_QMARK_ = cljs.core.every_QMARK_((function (font){
var font_data = app.render_wasm.api.fonts.make_font_data(font);
return app.render_wasm.api.fonts.font_stored_QMARK_(font_data,new cljs.core.Keyword(null,"emoji?","emoji?",-927869376).cljs$core$IFn$_invoke$arity$1(font_data));
}),fonts);
if((!(fonts_loaded_QMARK_))){
return beicon.v2.core.delay((20),beicon.v2.core.of((app.main.data.workspace.wasm_text.resize_wasm_text_debounce.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.wasm_text.resize_wasm_text_debounce.cljs$core$IFn$_invoke$arity$1(self__.id) : app.main.data.workspace.wasm_text.resize_wasm_text_debounce.call(null,self__.id))));
} else {
return beicon.v2.core.of(app.main.data.workspace.wasm_text.resize_wasm_text_debounce_inner(self__.id));
}
}));
}

return (new app.main.data.workspace.wasm_text.resize_wasm_text_debounce_49034(id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Resize all text shapes (auto-width/auto-height) from a collection of ids.
 */
app.main.data.workspace.wasm_text.resize_wasm_text_all = (function app$main$data$workspace$wasm_text$resize_wasm_text_all(ids){
if((typeof app.main.data.workspace.wasm_text.resize_wasm_text_all_49047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.wasm_text.resize_wasm_text_all_49047 = (function (ids,meta49048){
this.ids = ids;
this.meta49048 = meta49048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.wasm_text.resize_wasm_text_all_49047.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_all_49047.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.wasm-text","resize-wasm-text-all","app.main.data.workspace.wasm-text/resize-wasm-text-all",100967986);
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_all_49047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49049,meta49048__$1){
var self__ = this;
var _49049__$1 = this;
return (new app.main.data.workspace.wasm_text.resize_wasm_text_all_49047(self__.ids,meta49048__$1));
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_all_49047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49049){
var self__ = this;
var _49049__$1 = this;
return self__.meta49048;
}));

(app.main.data.workspace.wasm_text.resize_wasm_text_all_49047.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.wasm_text.resize_wasm_text_all_49047.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.workspace.wasm_text.resize_wasm_text,beicon.v2.core.from(self__.ids));
}));
}

return (new app.main.data.workspace.wasm_text.resize_wasm_text_all_49047(ids,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.wasm_text.js.map
