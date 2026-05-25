import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.worker.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.drawing.common');
app.main.data.workspace.drawing.common.clear_drawing = (function app$main$data$workspace$drawing$common$clear_drawing(){
if((typeof app.main.data.workspace.drawing.common.clear_drawing_49204 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.common.clear_drawing_49204 = (function (meta49205){
this.meta49205 = meta49205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.common.clear_drawing_49204.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.common.clear_drawing_49204.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing.common","clear-drawing","app.main.data.workspace.drawing.common/clear-drawing",-2106156961);
}));

(app.main.data.workspace.drawing.common.clear_drawing_49204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49206,meta49205__$1){
var self__ = this;
var _49206__$1 = this;
return (new app.main.data.workspace.drawing.common.clear_drawing_49204(meta49205__$1));
}));

(app.main.data.workspace.drawing.common.clear_drawing_49204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49206){
var self__ = this;
var _49206__$1 = this;
return self__.meta49205;
}));

(app.main.data.workspace.drawing.common.clear_drawing_49204.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.common.clear_drawing_49204.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973));
}));
}

return (new app.main.data.workspace.drawing.common.clear_drawing_49204(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.drawing.common.handle_finish_drawing = (function app$main$data$workspace$drawing$common$handle_finish_drawing(){
if((typeof app.main.data.workspace.drawing.common.handle_finish_drawing_49213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.drawing.common.handle_finish_drawing_49213 = (function (meta49214){
this.meta49214 = meta49214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.drawing.common.handle_finish_drawing_49213.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.common.handle_finish_drawing_49213.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.drawing.common","handle-finish-drawing","app.main.data.workspace.drawing.common/handle-finish-drawing",605061012);
}));

(app.main.data.workspace.drawing.common.handle_finish_drawing_49213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49215,meta49214__$1){
var self__ = this;
var _49215__$1 = this;
return (new app.main.data.workspace.drawing.common.handle_finish_drawing_49213(meta49214__$1));
}));

(app.main.data.workspace.drawing.common.handle_finish_drawing_49213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49215){
var self__ = this;
var _49215__$1 = this;
return self__.meta49214;
}));

(app.main.data.workspace.drawing.common.handle_finish_drawing_49213.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.drawing.common.handle_finish_drawing_49213.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var drawing_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(drawing_state,new cljs.core.Keyword(null,"object","object",1474613949));
var tool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(drawing_state,new cljs.core.Keyword(null,"tool","tool",-1298696470));
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.concat((cljs.core.truth_(new cljs.core.Keyword(null,"initialized?","initialized?",1707939066).cljs$core$IFn$_invoke$arity$1(shape))?(function (){var click_draw_QMARK_ = new cljs.core.Keyword(null,"click-draw?","click-draw?",-1784736640).cljs$core$IFn$_invoke$arity$1(shape);
var text_QMARK_ = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(drawing_state,new cljs.core.Keyword(null,"width","width",-384071477),(100));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(drawing_state,new cljs.core.Keyword(null,"height","height",1025178622),(100));
var shape__$1 = (function (){var G__49219 = shape;
var G__49219__$1 = ((cljs.core.not(click_draw_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49219,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.Keyword(null,"fixed","fixed",-562004358)):G__49219);
var G__49219__$2 = ((((click_draw_QMARK_) && ((!(text_QMARK_)))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.setup_shape(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49219__$1,new cljs.core.Keyword(null,"width","width",-384071477),width),new cljs.core.Keyword(null,"height","height",1025178622),height),new cljs.core.Keyword(null,"selrect","selrect",1966287292),null),new cljs.core.Keyword(null,"points","points",-1486596883),null)),app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$2((- (width / (2))),(- (height / (2))))):G__49219__$1);
var G__49219__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = click_draw_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return text_QMARK_;
} else {
return and__5023__auto__;
}
})())?app.common.types.shape.setup_shape(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__49219__$2,new cljs.core.Keyword(null,"height","height",1025178622),(17),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),(4),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),new cljs.core.Keyword(null,"auto-width","auto-width",-992925188)], 0))):G__49219__$2);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49219__$3,new cljs.core.Keyword(null,"initialized?","initialized?",1707939066),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"click-draw?","click-draw?",-1784736640)], 0));

})();
return beicon.v2.core.concat(((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1))?beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1))):beicon.v2.core.empty()),beicon.v2.core.of(app.main.data.workspace.shapes.add_shape.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-select?","no-select?",345814430),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tool,new cljs.core.Keyword(null,"curve","curve",-569677866))], null))),((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1))?beicon.v2.core.concat(beicon.v2.core.map((function (p1__49212_SHARP_){
return app.main.data.workspace.shapes.move_shapes_into_frame(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1),p1__49212_SHARP_);
}),beicon.v2.core.map((function (p1__49211_SHARP_){
return app.common.files.helpers.clean_loops(objects,p1__49211_SHARP_);
}),app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("index","query-selection","index/query-selection",-1103332922),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape__$1),new cljs.core.Keyword(null,"include-frames?","include-frames?",-256091430),true,new cljs.core.Keyword(null,"full-frame?","full-frame?",763988721),true,new cljs.core.Keyword(null,"using-selrect?","using-selrect?",-223163153),true], null)))),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1)))):beicon.v2.core.empty()));
})():null),beicon.v2.core.delay((0),beicon.v2.core.of(app.main.data.workspace.drawing.common.clear_drawing())));
}));
}

return (new app.main.data.workspace.drawing.common.handle_finish_drawing_49213(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.drawing.common.js.map
