import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.path.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.edition.js";
import "./app.main.data.workspace.path.changes.js";
import "./app.main.data.workspace.path.state.js";
import "./app.main.data.workspace.shapes.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.tools');
/**
 * Generic function that executes path transformations with the content and selected nodes
 */
app.main.data.workspace.path.tools.process_path_tool = (function app$main$data$workspace$path$tools$process_path_tool(var_args){
var G__49780 = arguments.length;
switch (G__49780) {
case 1:
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$1 = (function (tool_fn){
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$2(null,tool_fn);
}));

(app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$2 = (function (points,tool_fn){
if((typeof app.main.data.workspace.path.tools.process_path_tool_49786 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.tools.process_path_tool_49786 = (function (points,tool_fn,meta49787){
this.points = points;
this.tool_fn = tool_fn;
this.meta49787 = meta49787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.tools.process_path_tool_49786.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.tools.process_path_tool_49786.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.tools","process-path-tool","app.main.data.workspace.path.tools/process-path-tool",1225713567);
}));

(app.main.data.workspace.path.tools.process_path_tool_49786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49788,meta49787__$1){
var self__ = this;
var _49788__$1 = this;
return (new app.main.data.workspace.path.tools.process_path_tool_49786(self__.points,self__.tool_fn,meta49787__$1));
}));

(app.main.data.workspace.path.tools.process_path_tool_49786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49788){
var self__ = this;
var _49788__$1 = this;
return self__.meta49787;
}));

(app.main.data.workspace.path.tools.process_path_tool_49786.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.tools.process_path_tool_49786.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shape = app.main.data.workspace.path.state.get_path(state);
var id = app.main.data.workspace.path.state.get_path_id(state);
var selected_points = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179),cljs.core.PersistentHashSet.EMPTY);
var points__$1 = (function (){var or__5025__auto__ = self__.points;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return selected_points;
}
})();
if(((cljs.core.seq(points__$1)) && ((!((shape == null)))))){
var new_content = app.common.types.path.close_subpaths((function (){var G__49813 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
var G__49814 = points__$1;
return (self__.tool_fn.cljs$core$IFn$_invoke$arity$2 ? self__.tool_fn.cljs$core$IFn$_invoke$arity$2(G__49813,G__49814) : self__.tool_fn.call(null,G__49813,G__49814));
})());
var changes = app.main.data.workspace.path.changes.generate_path_changes(it__$1,objects,page_id,shape,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),new_content);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),app.common.types.path.convert_to_path),app.main.data.changes.commit_changes(changes)),((cljs.core.empty_QMARK_(new_content))?beicon.v2.core.of(app.main.data.workspace.edition.clear_edition_mode()):null));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.path.tools.process_path_tool_49786(points,tool_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.path.tools.process_path_tool.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.path.tools.make_corner = (function app$main$data$workspace$path$tools$make_corner(var_args){
var G__49829 = arguments.length;
switch (G__49829) {
case 0:
return app.main.data.workspace.path.tools.make_corner.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.path.tools.make_corner.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.path.tools.make_corner.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.path.tools.make_corner.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.path.tools.make_corner.cljs$core$IFn$_invoke$arity$1 = (function (point){
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(point)?cljs.core.PersistentHashSet.createAsIfByAssoc([point]):null),(function (content,points){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.types.path.make_corner_point,content,points);
}));
}));

(app.main.data.workspace.path.tools.make_corner.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.path.tools.make_curve = (function app$main$data$workspace$path$tools$make_curve(var_args){
var G__49834 = arguments.length;
switch (G__49834) {
case 0:
return app.main.data.workspace.path.tools.make_curve.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.path.tools.make_curve.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.path.tools.make_curve.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.path.tools.make_curve.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.path.tools.make_curve.cljs$core$IFn$_invoke$arity$1 = (function (point){
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(point)?cljs.core.PersistentHashSet.createAsIfByAssoc([point]):null),(function (content,points){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.types.path.make_curve_point,content,points);
}));
}));

(app.main.data.workspace.path.tools.make_curve.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.path.tools.add_node = (function app$main$data$workspace$path$tools$add_node(){
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$1((function (content,points){
return app.common.types.path.split_segments(content,points,0.5);
}));
});
app.main.data.workspace.path.tools.remove_node = (function app$main$data$workspace$path$tools$remove_node(){
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$1(app.common.types.path.remove_nodes);
});
app.main.data.workspace.path.tools.merge_nodes = (function app$main$data$workspace$path$tools$merge_nodes(){
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$1(app.common.types.path.merge_nodes);
});
app.main.data.workspace.path.tools.join_nodes = (function app$main$data$workspace$path$tools$join_nodes(){
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$1(app.common.types.path.join_nodes);
});
app.main.data.workspace.path.tools.separate_nodes = (function app$main$data$workspace$path$tools$separate_nodes(){
return app.main.data.workspace.path.tools.process_path_tool.cljs$core$IFn$_invoke$arity$1(app.common.types.path.separate_nodes);
});
app.main.data.workspace.path.tools.toggle_snap = (function app$main$data$workspace$path$tools$toggle_snap(){
if((typeof app.main.data.workspace.path.tools.toggle_snap_49854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.tools.toggle_snap_49854 = (function (meta49855){
this.meta49855 = meta49855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.tools.toggle_snap_49854.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.tools.toggle_snap_49854.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.tools","toggle-snap","app.main.data.workspace.path.tools/toggle-snap",-1160865838);
}));

(app.main.data.workspace.path.tools.toggle_snap_49854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49856,meta49855__$1){
var self__ = this;
var _49856__$1 = this;
return (new app.main.data.workspace.path.tools.toggle_snap_49854(meta49855__$1));
}));

(app.main.data.workspace.path.tools.toggle_snap_49854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49856){
var self__ = this;
var _49856__$1 = this;
return self__.meta49855;
}));

(app.main.data.workspace.path.tools.toggle_snap_49854.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.tools.toggle_snap_49854.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"snap-toggled","snap-toggled",-1650735574)], null),cljs.core.not);
}));
}

return (new app.main.data.workspace.path.tools.toggle_snap_49854(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.path.tools.js.map
