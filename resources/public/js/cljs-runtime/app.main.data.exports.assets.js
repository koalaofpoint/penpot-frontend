import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.time.js";
import "./app.common.uuid.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.persistence.js";
import "./app.main.refs.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.util.dom.js";
import "./app.util.websocket.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.exports.assets');
app.main.data.exports.assets.default_timeout = (5000);
app.main.data.exports.assets.toggle_detail_visibililty = (function app$main$data$exports$assets$toggle_detail_visibililty(){
if((typeof app.main.data.exports.assets.toggle_detail_visibililty_51190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.toggle_detail_visibililty_51190 = (function (meta51191){
this.meta51191 = meta51191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.toggle_detail_visibililty_51190.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.toggle_detail_visibililty_51190.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","toggle-detail-visibililty","app.main.data.exports.assets/toggle-detail-visibililty",-630730977);
}));

(app.main.data.exports.assets.toggle_detail_visibililty_51190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51192,meta51191__$1){
var self__ = this;
var _51192__$1 = this;
return (new app.main.data.exports.assets.toggle_detail_visibililty_51190(meta51191__$1));
}));

(app.main.data.exports.assets.toggle_detail_visibililty_51190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51192){
var self__ = this;
var _51192__$1 = this;
return self__.meta51191;
}));

(app.main.data.exports.assets.toggle_detail_visibililty_51190.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.toggle_detail_visibililty_51190.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"detail-visible","detail-visible",-1852231289)], null),cljs.core.not);
}));
}

return (new app.main.data.exports.assets.toggle_detail_visibililty_51190(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.toggle_widget_visibililty = (function app$main$data$exports$assets$toggle_widget_visibililty(){
if((typeof app.main.data.exports.assets.toggle_widget_visibility_51196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.toggle_widget_visibility_51196 = (function (meta51197){
this.meta51197 = meta51197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.toggle_widget_visibility_51196.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.toggle_widget_visibility_51196.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","toggle-widget-visibility","app.main.data.exports.assets/toggle-widget-visibility",639244179);
}));

(app.main.data.exports.assets.toggle_widget_visibility_51196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51198,meta51197__$1){
var self__ = this;
var _51198__$1 = this;
return (new app.main.data.exports.assets.toggle_widget_visibility_51196(meta51197__$1));
}));

(app.main.data.exports.assets.toggle_widget_visibility_51196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51198){
var self__ = this;
var _51198__$1 = this;
return self__.meta51197;
}));

(app.main.data.exports.assets.toggle_widget_visibility_51196.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.toggle_widget_visibility_51196.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"widget-visible","widget-visible",939047906)], null),cljs.core.not);
}));
}

return (new app.main.data.exports.assets.toggle_widget_visibility_51196(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.clear_export_state = (function app$main$data$exports$assets$clear_export_state(id){
if((typeof app.main.data.exports.assets.clear_export_state_51206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.clear_export_state_51206 = (function (id,meta51207){
this.id = id;
this.meta51207 = meta51207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.clear_export_state_51206.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.clear_export_state_51206.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","clear-export-state","app.main.data.exports.assets/clear-export-state",1793686057);
}));

(app.main.data.exports.assets.clear_export_state_51206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51208,meta51207__$1){
var self__ = this;
var _51208__$1 = this;
return (new app.main.data.exports.assets.clear_export_state_51206(self__.id,meta51207__$1));
}));

(app.main.data.exports.assets.clear_export_state_51206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51208){
var self__ = this;
var _51208__$1 = this;
return self__.meta51207;
}));

(app.main.data.exports.assets.clear_export_state_51206.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.clear_export_state_51206.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var existing_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(state));
if((((!((existing_id == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,existing_id)))){
return state;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"export","export",214356590));
}
}));
}

return (new app.main.data.exports.assets.clear_export_state_51206(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.show_workspace_export_dialog = (function app$main$data$exports$assets$show_workspace_export_dialog(p__51215){
var map__51216 = p__51215;
var map__51216__$1 = cljs.core.__destructure_map(map__51216);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51216__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51216__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if((typeof app.main.data.exports.assets.show_workspace_export_dialog_51217 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.show_workspace_export_dialog_51217 = (function (p__51215,map__51216,selected,origin,meta51218){
this.p__51215 = p__51215;
this.map__51216 = map__51216;
this.selected = selected;
this.origin = origin;
this.meta51218 = meta51218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.show_workspace_export_dialog_51217.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.show_workspace_export_dialog_51217.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","show-workspace-export-dialog","app.main.data.exports.assets/show-workspace-export-dialog",1408325039);
}));

(app.main.data.exports.assets.show_workspace_export_dialog_51217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51219,meta51218__$1){
var self__ = this;
var _51219__$1 = this;
return (new app.main.data.exports.assets.show_workspace_export_dialog_51217(self__.p__51215,self__.map__51216,self__.selected,self__.origin,meta51218__$1));
}));

(app.main.data.exports.assets.show_workspace_export_dialog_51217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51219){
var self__ = this;
var _51219__$1 = this;
return self__.meta51218;
}));

(app.main.data.exports.assets.show_workspace_export_dialog_51217.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.show_workspace_export_dialog_51217.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var selected__$1 = (function (){var or__5025__auto__ = self__.selected;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$3(state,page_id,cljs.core.PersistentArrayMap.EMPTY);
}
})();
var shapes = ((cljs.core.seq(selected__$1))?app.main.data.helpers.lookup_shapes.cljs$core$IFn$_invoke$arity$2(state,selected__$1):cljs.core.reverse(app.main.data.helpers.filter_shapes.cljs$core$IFn$_invoke$arity$2(state,(function (p1__51214_SHARP_){
return (cljs.core.count(new cljs.core.Keyword(null,"exports","exports",-745008272).cljs$core$IFn$_invoke$arity$1(p1__51214_SHARP_)) > (0));
}))));
var exports__$1 = (function (){var iter__5503__auto__ = (function app$main$data$exports$assets$show_workspace_export_dialog_$_iter__51220(s__51221){
return (new cljs.core.LazySeq(null,(function (){
var s__51221__$1 = s__51221;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__51221__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var shape = cljs.core.first(xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__51221__$1,shape,xs__6385__auto__,temp__5825__auto__,file_id,page_id,selected__$1,shapes,___$2,map__51216,map__51216__$1,selected,origin){
return (function app$main$data$exports$assets$show_workspace_export_dialog_$_iter__51220_$_iter__51222(s__51223){
return (new cljs.core.LazySeq(null,((function (s__51221__$1,shape,xs__6385__auto__,temp__5825__auto__,file_id,page_id,selected__$1,shapes,___$2,map__51216,map__51216__$1,selected,origin){
return (function (){
var s__51223__$1 = s__51223;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__51223__$1);
if(temp__5825__auto____$1){
var s__51223__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51223__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__51223__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__51225 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__51224 = (0);
while(true){
if((i__51224 < size__5502__auto__)){
var export$ = cljs.core._nth(c__5501__auto__,i__51224);
cljs.core.chunk_append(b__51225,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(export$,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id),new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id),new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"exports","exports",-745008272))),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)));

var G__51302 = (i__51224 + (1));
i__51224 = G__51302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51225),app$main$data$exports$assets$show_workspace_export_dialog_$_iter__51220_$_iter__51222(cljs.core.chunk_rest(s__51223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51225),null);
}
} else {
var export$ = cljs.core.first(s__51223__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(export$,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id),new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id),new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"exports","exports",-745008272))),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)),app$main$data$exports$assets$show_workspace_export_dialog_$_iter__51220_$_iter__51222(cljs.core.rest(s__51223__$2)));
}
} else {
return null;
}
break;
}
});})(s__51221__$1,shape,xs__6385__auto__,temp__5825__auto__,file_id,page_id,selected__$1,shapes,___$2,map__51216,map__51216__$1,selected,origin))
,null,null));
});})(s__51221__$1,shape,xs__6385__auto__,temp__5825__auto__,file_id,page_id,selected__$1,shapes,___$2,map__51216,map__51216__$1,selected,origin))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(new cljs.core.Keyword(null,"exports","exports",-745008272).cljs$core$IFn$_invoke$arity$1(shape)));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,app$main$data$exports$assets$show_workspace_export_dialog_$_iter__51220(cljs.core.rest(s__51221__$1)));
} else {
var G__51303 = cljs.core.rest(s__51221__$1);
s__51221__$1 = G__51303;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(shapes);
})();
return beicon.v2.core.of(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-shapes","export-shapes",341502938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exports","exports",-745008272),cljs.core.vec(exports__$1),new cljs.core.Keyword(null,"origin","origin",1037372088),self__.origin], null)));
}));
}

return (new app.main.data.exports.assets.show_workspace_export_dialog_51217(p__51215,map__51216__$1,selected,origin,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.show_viewer_export_dialog = (function app$main$data$exports$assets$show_viewer_export_dialog(p__51229){
var map__51230 = p__51229;
var map__51230__$1 = cljs.core.__destructure_map(map__51230);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51230__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51230__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51230__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var share_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51230__$1,new cljs.core.Keyword(null,"share-id","share-id",795821204));
var exports__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51230__$1,new cljs.core.Keyword(null,"exports","exports",-745008272));
if((typeof app.main.data.exports.assets.show_viewer_export_dialog_51234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.show_viewer_export_dialog_51234 = (function (p__51229,map__51230,shapes,page_id,file_id,share_id,exports,meta51235){
this.p__51229 = p__51229;
this.map__51230 = map__51230;
this.shapes = shapes;
this.page_id = page_id;
this.file_id = file_id;
this.share_id = share_id;
this.exports = exports;
this.meta51235 = meta51235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.show_viewer_export_dialog_51234.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.show_viewer_export_dialog_51234.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","show-viewer-export-dialog","app.main.data.exports.assets/show-viewer-export-dialog",1881460878);
}));

(app.main.data.exports.assets.show_viewer_export_dialog_51234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51236,meta51235__$1){
var self__ = this;
var _51236__$1 = this;
return (new app.main.data.exports.assets.show_viewer_export_dialog_51234(self__.p__51229,self__.map__51230,self__.shapes,self__.page_id,self__.file_id,self__.share_id,self__.exports,meta51235__$1));
}));

(app.main.data.exports.assets.show_viewer_export_dialog_51234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51236){
var self__ = this;
var _51236__$1 = this;
return self__.meta51235;
}));

(app.main.data.exports.assets.show_viewer_export_dialog_51234.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.show_viewer_export_dialog_51234.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var exports__$1 = (function (){var iter__5503__auto__ = (function app$main$data$exports$assets$show_viewer_export_dialog_$_iter__51243(s__51244){
return (new cljs.core.LazySeq(null,(function (){
var s__51244__$1 = s__51244;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__51244__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var shape = cljs.core.first(xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__51244__$1,shape,xs__6385__auto__,temp__5825__auto__,___$3,map__51230,map__51230__$1,shapes,page_id,file_id,share_id,exports__$1){
return (function app$main$data$exports$assets$show_viewer_export_dialog_$_iter__51243_$_iter__51245(s__51246){
return (new cljs.core.LazySeq(null,((function (s__51244__$1,shape,xs__6385__auto__,temp__5825__auto__,___$3,map__51230,map__51230__$1,shapes,page_id,file_id,share_id,exports__$1){
return (function (){
var s__51246__$1 = s__51246;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__51246__$1);
if(temp__5825__auto____$1){
var s__51246__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51246__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__51246__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__51248 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__51247 = (0);
while(true){
if((i__51247 < size__5502__auto__)){
var export$ = cljs.core._nth(c__5501__auto__,i__51247);
cljs.core.chunk_append(b__51248,(function (){var G__51249 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(export$,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true),new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id),new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id),new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"exports","exports",-745008272))),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(self__.share_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51249,new cljs.core.Keyword(null,"share-id","share-id",795821204),self__.share_id);
} else {
return G__51249;
}
})());

var G__51304 = (i__51247 + (1));
i__51247 = G__51304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51248),app$main$data$exports$assets$show_viewer_export_dialog_$_iter__51243_$_iter__51245(cljs.core.chunk_rest(s__51246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51248),null);
}
} else {
var export$ = cljs.core.first(s__51246__$2);
return cljs.core.cons((function (){var G__51253 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(export$,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true),new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id),new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id),new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"exports","exports",-745008272))),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(self__.share_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51253,new cljs.core.Keyword(null,"share-id","share-id",795821204),self__.share_id);
} else {
return G__51253;
}
})(),app$main$data$exports$assets$show_viewer_export_dialog_$_iter__51243_$_iter__51245(cljs.core.rest(s__51246__$2)));
}
} else {
return null;
}
break;
}
});})(s__51244__$1,shape,xs__6385__auto__,temp__5825__auto__,___$3,map__51230,map__51230__$1,shapes,page_id,file_id,share_id,exports__$1))
,null,null));
});})(s__51244__$1,shape,xs__6385__auto__,temp__5825__auto__,___$3,map__51230,map__51230__$1,shapes,page_id,file_id,share_id,exports__$1))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(self__.exports));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,app$main$data$exports$assets$show_viewer_export_dialog_$_iter__51243(cljs.core.rest(s__51244__$1)));
} else {
var G__51305 = cljs.core.rest(s__51244__$1);
s__51244__$1 = G__51305;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(self__.shapes);
})();
return beicon.v2.core.of(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-shapes","export-shapes",341502938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exports","exports",-745008272),cljs.core.vec(exports__$1),new cljs.core.Keyword(null,"origin","origin",1037372088),"viewer"], null)));
}));
}

return (new app.main.data.exports.assets.show_viewer_export_dialog_51234(p__51229,map__51230__$1,shapes,page_id,file_id,share_id,exports__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.show_workspace_export_frames_dialog = (function app$main$data$exports$assets$show_workspace_export_frames_dialog(frames){
if((typeof app.main.data.exports.assets.show_workspace_export_frames_dialog_51257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.show_workspace_export_frames_dialog_51257 = (function (frames,meta51258){
this.frames = frames;
this.meta51258 = meta51258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.show_workspace_export_frames_dialog_51257.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.show_workspace_export_frames_dialog_51257.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","show-workspace-export-frames-dialog","app.main.data.exports.assets/show-workspace-export-frames-dialog",-1173311717);
}));

(app.main.data.exports.assets.show_workspace_export_frames_dialog_51257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51259,meta51258__$1){
var self__ = this;
var _51259__$1 = this;
return (new app.main.data.exports.assets.show_workspace_export_frames_dialog_51257(self__.frames,meta51258__$1));
}));

(app.main.data.exports.assets.show_workspace_export_frames_dialog_51257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51259){
var self__ = this;
var _51259__$1 = this;
return self__.meta51258;
}));

(app.main.data.exports.assets.show_workspace_export_frames_dialog_51257.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.show_workspace_export_frames_dialog_51257.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var exports__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (frame){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"shape","shape",1190694006),frame,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame)], null);
}),self__.frames);
return beicon.v2.core.of(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-frames","export-frames",-511225256),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exports","exports",-745008272),exports__$1,new cljs.core.Keyword(null,"origin","origin",1037372088),"workspace:menu"], null)));
}));
}

return (new app.main.data.exports.assets.show_workspace_export_frames_dialog_51257(frames,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.initialize_export_status = (function app$main$data$exports$assets$initialize_export_status(exports,cmd,resource){
if((typeof app.main.data.exports.assets.initialize_export_status_51260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.initialize_export_status_51260 = (function (exports,cmd,resource,meta51261){
this.exports = exports;
this.cmd = cmd;
this.resource = resource;
this.meta51261 = meta51261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.initialize_export_status_51260.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.initialize_export_status_51260.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","initialize-export-status","app.main.data.exports.assets/initialize-export-status",232156249);
}));

(app.main.data.exports.assets.initialize_export_status_51260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51262,meta51261__$1){
var self__ = this;
var _51262__$1 = this;
return (new app.main.data.exports.assets.initialize_export_status_51260(self__.exports,self__.cmd,self__.resource,meta51261__$1));
}));

(app.main.data.exports.assets.initialize_export_status_51260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51262){
var self__ = this;
var _51262__$1 = this;
return self__.meta51261;
}));

(app.main.data.exports.assets.initialize_export_status_51260.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.initialize_export_status_51260.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"export","export",214356590),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"widget-visible","widget-visible",939047906),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"detail-visible","detail-visible",-1852231289),new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"last-update","last-update",-983435406),new cljs.core.Keyword(null,"healthy?","healthy?",1027593366),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"progress","progress",244323547)],[true,true,true,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.resource),self__.exports,app.common.time.now(),true,false,self__.cmd,(0)]));
}));
}

return (new app.main.data.exports.assets.initialize_export_status_51260(exports,cmd,resource,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.update_export_status = (function app$main$data$exports$assets$update_export_status(p__51263){
var map__51264 = p__51263;
var map__51264__$1 = cljs.core.__destructure_map(map__51264);
var data = map__51264__$1;
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51264__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51264__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var resource_uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51264__$1,new cljs.core.Keyword(null,"resource-uri","resource-uri",-1848708900));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51264__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51264__$1,new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
if((typeof app.main.data.exports.assets.update_export_status_51265 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.update_export_status_51265 = (function (p__51263,map__51264,data,done,status,resource_uri,filename,mtype,meta51266){
this.p__51263 = p__51263;
this.map__51264 = map__51264;
this.data = data;
this.done = done;
this.status = status;
this.resource_uri = resource_uri;
this.filename = filename;
this.mtype = mtype;
this.meta51266 = meta51266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.update_export_status_51265.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.update_export_status_51265.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","update-export-status","app.main.data.exports.assets/update-export-status",-1565666338);
}));

(app.main.data.exports.assets.update_export_status_51265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51267,meta51266__$1){
var self__ = this;
var _51267__$1 = this;
return (new app.main.data.exports.assets.update_export_status_51265(self__.p__51263,self__.map__51264,self__.data,self__.done,self__.status,self__.resource_uri,self__.filename,self__.mtype,meta51266__$1));
}));

(app.main.data.exports.assets.update_export_status_51265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51267){
var self__ = this;
var _51267__$1 = this;
return self__.meta51266;
}));

(app.main.data.exports.assets.update_export_status_51265.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.update_export_status_51265.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var time_diff = app.common.time.diff_ms(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"last-update","last-update",-983435406)], null)),app.common.time.now());
var healthy_QMARK_ = (time_diff < (6000));
var G__51268 = state;
var G__51268__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.status,"running"))?cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__51268,new cljs.core.Keyword(null,"export","export",214356590),cljs.core.assoc,new cljs.core.Keyword(null,"progress","progress",244323547),self__.done,new cljs.core.Keyword(null,"last-update","last-update",-983435406),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.time.now(),new cljs.core.Keyword(null,"healthy?","healthy?",1027593366),healthy_QMARK_], 0)):G__51268);
var G__51268__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.status,"error"))?cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__51268__$1,new cljs.core.Keyword(null,"export","export",214356590),cljs.core.assoc,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),false,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"last-update","last-update",-983435406),app.common.time.now(),new cljs.core.Keyword(null,"healthy?","healthy?",1027593366),healthy_QMARK_], 0)):G__51268__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.status,"ended")){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__51268__$2,new cljs.core.Keyword(null,"export","export",214356590),cljs.core.assoc,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),false,new cljs.core.Keyword(null,"last-update","last-update",-983435406),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.time.now(),new cljs.core.Keyword(null,"healthy?","healthy?",1027593366),healthy_QMARK_], 0));
} else {
return G__51268__$2;
}
}));

(app.main.data.exports.assets.update_export_status_51265.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.update_export_status_51265.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.status,"ended")){
return app.util.dom.trigger_download_uri(self__.filename,self__.mtype,self__.resource_uri);
} else {
return null;
}
}));
}

return (new app.main.data.exports.assets.update_export_status_51265(p__51263,map__51264__$1,data,done,status,resource_uri,filename,mtype,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.request_simple_export = (function app$main$data$exports$assets$request_simple_export(p__51270){
var map__51271 = p__51270;
var map__51271__$1 = cljs.core.__destructure_map(map__51271);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51271__$1,new cljs.core.Keyword(null,"export","export",214356590));
if((typeof app.main.data.exports.assets.request_simple_export_51272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.request_simple_export_51272 = (function (p__51270,map__51271,export$,meta51273){
this.p__51270 = p__51270;
this.map__51271 = map__51271;
this.export$ = export$;
this.meta51273 = meta51273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.request_simple_export_51272.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.request_simple_export_51272.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","request-simple-export","app.main.data.exports.assets/request-simple-export",-1758800299);
}));

(app.main.data.exports.assets.request_simple_export_51272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51274,meta51273__$1){
var self__ = this;
var _51274__$1 = this;
return (new app.main.data.exports.assets.request_simple_export_51272(self__.p__51270,self__.map__51271,self__.export$,meta51273__$1));
}));

(app.main.data.exports.assets.request_simple_export_51272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51274){
var self__ = this;
var _51274__$1 = this;
return self__.meta51273;
}));

(app.main.data.exports.assets.request_simple_export_51272.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.request_simple_export_51272.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"export","export",214356590),cljs.core.assoc,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),true,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.uuid.zero], 0));
}));

(app.main.data.exports.assets.request_simple_export_51272.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.request_simple_export_51272.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var profile_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(state);
var params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.export$], null),new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),profile_id,new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"export-shapes","export-shapes",341502938),new cljs.core.Keyword(null,"wait","wait",-260664777),true], null);
return beicon.v2.core.concat(beicon.v2.core.of(new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199)),beicon.v2.core.timeout.cljs$core$IFn$_invoke$arity$3((400),beicon.v2.core.empty(),beicon.v2.core.first(beicon.v2.core.filter((function (p1__51269_SHARP_){
return (((p1__51269_SHARP_ == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"saved","saved",288760660),p1__51269_SHARP_)));
}),beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.persistence_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null))))),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.exports.assets.clear_export_state(app.common.uuid.zero)),beicon.v2.core.throw$(cause));
}),beicon.v2.core.map((function (p__51275){
var map__51276 = p__51275;
var map__51276__$1 = cljs.core.__destructure_map(map__51276);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51276__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var mtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51276__$1,new cljs.core.Keyword(null,"mtype","mtype",-1724656120));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51276__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
app.util.dom.trigger_download_uri(filename,mtype,uri);

return app.main.data.exports.assets.clear_export_state(app.common.uuid.zero);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export","export",214356590),params))));
}));
}

return (new app.main.data.exports.assets.request_simple_export_51272(p__51270,map__51271__$1,export$,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.request_multiple_export = (function app$main$data$exports$assets$request_multiple_export(p__51282){
var map__51283 = p__51282;
var map__51283__$1 = cljs.core.__destructure_map(map__51283);
var params = map__51283__$1;
var exports__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51283__$1,new cljs.core.Keyword(null,"exports","exports",-745008272));
var cmd = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51283__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"export-shapes","export-shapes",341502938));
if((typeof app.main.data.exports.assets.request_multiple_export_51284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.request_multiple_export_51284 = (function (p__51282,map__51283,params,exports,cmd,meta51285){
this.p__51282 = p__51282;
this.map__51283 = map__51283;
this.params = params;
this.exports = exports;
this.cmd = cmd;
this.meta51285 = meta51285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.request_multiple_export_51284.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.request_multiple_export_51284.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","request-multiple-export","app.main.data.exports.assets/request-multiple-export",430043139);
}));

(app.main.data.exports.assets.request_multiple_export_51284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51286,meta51285__$1){
var self__ = this;
var _51286__$1 = this;
return (new app.main.data.exports.assets.request_multiple_export_51284(self__.p__51282,self__.map__51283,self__.params,self__.exports,self__.cmd,meta51285__$1));
}));

(app.main.data.exports.assets.request_multiple_export_51284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51286){
var self__ = this;
var _51286__$1 = this;
return self__.meta51285;
}));

(app.main.data.exports.assets.request_multiple_export_51284.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.request_multiple_export_51284.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var resource_id = cljs.core.volatile_BANG_(null);
var profile_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(state);
var ws_conn = new cljs.core.Keyword(null,"ws-conn","ws-conn",1536795552).cljs$core$IFn$_invoke$arity$1(state);
var params__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exports","exports",-745008272),self__.exports,new cljs.core.Keyword(null,"cmd","cmd",-302931143),self__.cmd,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),profile_id,new cljs.core.Keyword(null,"force-multiple","force-multiple",1918068049),true], null);
var progress_stream = beicon.v2.core.share(beicon.v2.core.filter((function (p1__51279_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(resource_id),new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582).cljs$core$IFn$_invoke$arity$1(p1__51279_SHARP_));
}),beicon.v2.core.filter((function (p1__51278_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export-update","export-update",1935824931),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__51278_SHARP_));
}),beicon.v2.core.map(new cljs.core.Keyword(null,"payload","payload",-383036092),beicon.v2.core.filter(app.util.websocket.message_event_QMARK_,app.util.websocket.get_rcv_stream(ws_conn))))));
var stopper = beicon.v2.core.filter((function (p1__51280_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ended",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__51280_SHARP_))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__51280_SHARP_))));
}),progress_stream);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.main.store.ongoing_tasks,cljs.core.conj,new cljs.core.Keyword(null,"export","export",214356590));

return beicon.v2.core.merge(beicon.v2.core.of(new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199)),beicon.v2.core.map((function (p__51287){
var map__51288 = p__51287;
var map__51288__$1 = cljs.core.__destructure_map(map__51288);
var resource = map__51288__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51288__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.vreset_BANG_(resource_id,id);

return app.main.data.exports.assets.initialize_export_status(self__.exports,self__.cmd,resource);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"export","export",214356590),params__$1)),beicon.v2.core.finalize((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.main.store.ongoing_tasks,cljs.core.disj,new cljs.core.Keyword(null,"export","export",214356590));
}),beicon.v2.core.take_until(beicon.v2.core.delay((500),stopper),beicon.v2.core.map(app.main.data.exports.assets.update_export_status,progress_stream))),beicon.v2.core.take_until(beicon.v2.core.delay((6000),stopper),beicon.v2.core.map((function (){
return app.main.data.exports.assets.clear_export_state(cljs.core.deref(resource_id));
}),beicon.v2.core.delay(app.main.data.exports.assets.default_timeout,beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__51281_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ended",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__51281_SHARP_));
}),progress_stream))))));
}));
}

return (new app.main.data.exports.assets.request_multiple_export_51284(p__51282,map__51283__$1,params,exports__$1,cmd,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.request_export = (function app$main$data$exports$assets$request_export(p__51292){
var map__51293 = p__51292;
var map__51293__$1 = cljs.core.__destructure_map(map__51293);
var params = map__51293__$1;
var exports__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293__$1,new cljs.core.Keyword(null,"exports","exports",-745008272));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(exports__$1))){
return app.main.data.exports.assets.request_simple_export(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"export","export",214356590),cljs.core.first(exports__$1)));
} else {
return app.main.data.exports.assets.request_multiple_export(params);
}
});
app.main.data.exports.assets.retry_last_export = (function app$main$data$exports$assets$retry_last_export(){
if((typeof app.main.data.exports.assets.retry_last_export_51294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.assets.retry_last_export_51294 = (function (meta51295){
this.meta51295 = meta51295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.assets.retry_last_export_51294.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.retry_last_export_51294.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.assets","retry-last-export","app.main.data.exports.assets/retry-last-export",56700563);
}));

(app.main.data.exports.assets.retry_last_export_51294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51296,meta51295__$1){
var self__ = this;
var _51296__$1 = this;
return (new app.main.data.exports.assets.retry_last_export_51294(meta51295__$1));
}));

(app.main.data.exports.assets.retry_last_export_51294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51296){
var self__ = this;
var _51296__$1 = this;
return self__.meta51295;
}));

(app.main.data.exports.assets.retry_last_export_51294.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.assets.retry_last_export_51294.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params = cljs.core.select_keys(new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"cmd","cmd",-302931143)], null));
if(cljs.core.seq(params)){
return beicon.v2.core.of(app.main.data.exports.assets.request_multiple_export(params));
} else {
return null;
}
}));
}

return (new app.main.data.exports.assets.retry_last_export_51294(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.assets.export_shapes_event = (function app$main$data$exports$assets$export_shapes_event(exports,origin){
var types = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,p__51297){
var map__51298 = p__51297;
var map__51298__$1 = cljs.core.__destructure_map(map__51298);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51298__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_((function (){var fexpr__51299 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"png","png",551930691),null,new cljs.core.Keyword(null,"pdf","pdf",1586765132),null,new cljs.core.Keyword(null,"webp","webp",1501869900),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"jpeg","jpeg",-646816934),null], null), null);
return (fexpr__51299.cljs$core$IFn$_invoke$arity$1 ? fexpr__51299.cljs$core$IFn$_invoke$arity$1(type) : fexpr__51299.call(null,type));
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(counts,type,cljs.core.inc);
} else {
return counts;
}
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"png","png",551930691),(0),new cljs.core.Keyword(null,"jpeg","jpeg",-646816934),(0),new cljs.core.Keyword(null,"webp","webp",1501869900),(0),new cljs.core.Keyword(null,"pdf","pdf",1586765132),(0),new cljs.core.Keyword(null,"svg","svg",856789142),(0)], null),exports);
return potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([types,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"export-shapes",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"num-shapes","num-shapes",597955393),cljs.core.count(exports)], null)], 0)));
});

//# sourceMappingURL=app.main.data.exports.assets.js.map
