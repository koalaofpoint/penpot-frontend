import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.rect.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.helpers.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.grid_layout.editor');
app.main.data.workspace.grid_layout.editor.hover_grid_cell = (function app$main$data$workspace$grid_layout$editor$hover_grid_cell(grid_id,cell_id,add_to_set){
if((typeof app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069 = (function (grid_id,cell_id,add_to_set,meta71070){
this.grid_id = grid_id;
this.cell_id = cell_id;
this.add_to_set = add_to_set;
this.meta71070 = meta71070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.editor","hover-grid-cell","app.main.data.workspace.grid-layout.editor/hover-grid-cell",1974310204);
}));

(app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71071,meta71070__$1){
var self__ = this;
var _71071__$1 = this;
return (new app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069(self__.grid_id,self__.cell_id,self__.add_to_set,meta71070__$1));
}));

(app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71071){
var self__ = this;
var _71071__$1 = this;
return self__.meta71070;
}));

(app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),self__.grid_id,new cljs.core.Keyword(null,"hover","hover",-341141711)], null),(function (hover_set){
var hover_set__$1 = (function (){var or__5025__auto__ = hover_set;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.truth_(self__.add_to_set)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(hover_set__$1,self__.cell_id);
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(hover_set__$1,self__.cell_id);
}
}));
}));
}

return (new app.main.data.workspace.grid_layout.editor.hover_grid_cell_71069(grid_id,cell_id,add_to_set,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid_layout.editor.add_to_selection = (function app$main$data$workspace$grid_layout$editor$add_to_selection(var_args){
var G__71074 = arguments.length;
switch (G__71074) {
case 2:
return app.main.data.workspace.grid_layout.editor.add_to_selection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.grid_layout.editor.add_to_selection.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.grid_layout.editor.add_to_selection.cljs$core$IFn$_invoke$arity$2 = (function (grid_id,cell_id){
return app.main.data.workspace.grid_layout.editor.add_to_selection.cljs$core$IFn$_invoke$arity$3(grid_id,cell_id,false);
}));

(app.main.data.workspace.grid_layout.editor.add_to_selection.cljs$core$IFn$_invoke$arity$3 = (function (grid_id,cell_id,shift_QMARK_){
if((typeof app.main.data.workspace.grid_layout.editor.add_to_selection_71075 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.editor.add_to_selection_71075 = (function (grid_id,cell_id,shift_QMARK_,meta71076){
this.grid_id = grid_id;
this.cell_id = cell_id;
this.shift_QMARK_ = shift_QMARK_;
this.meta71076 = meta71076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.editor.add_to_selection_71075.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.add_to_selection_71075.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.editor","add-to-selection","app.main.data.workspace.grid-layout.editor/add-to-selection",1344621079);
}));

(app.main.data.workspace.grid_layout.editor.add_to_selection_71075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71077,meta71076__$1){
var self__ = this;
var _71077__$1 = this;
return (new app.main.data.workspace.grid_layout.editor.add_to_selection_71075(self__.grid_id,self__.cell_id,self__.shift_QMARK_,meta71076__$1));
}));

(app.main.data.workspace.grid_layout.editor.add_to_selection_71075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71077){
var self__ = this;
var _71077__$1 = this;
return self__.meta71076;
}));

(app.main.data.workspace.grid_layout.editor.add_to_selection_71075.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.add_to_selection_71075.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.shift_QMARK_)){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.grid_id);
var selected = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766)),self__.grid_id),new cljs.core.Keyword(null,"selected","selected",574897764));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var selected__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.cell_id], null));
var cells = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71072_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187)),p1__71072_SHARP_);
}),selected__$1);
var map__71078 = app.common.types.shape.layout.cells_coordinates(cells);
var map__71078__$1 = cljs.core.__destructure_map(map__71078);
var first_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71078__$1,new cljs.core.Keyword(null,"first-row","first-row",-111793911));
var last_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71078__$1,new cljs.core.Keyword(null,"last-row","last-row",388121667));
var first_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71078__$1,new cljs.core.Keyword(null,"first-column","first-column",22621775));
var last_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71078__$1,new cljs.core.Keyword(null,"last-column","last-column",2053855408));
var new_selected = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),app.common.types.shape.layout.cells_in_area(grid,first_row,last_row,first_column,last_column));
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),self__.grid_id,new cljs.core.Keyword(null,"selected","selected",574897764)], null),new_selected);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),self__.grid_id,new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),self__.cell_id);
}
}));
}

return (new app.main.data.workspace.grid_layout.editor.add_to_selection_71075(grid_id,cell_id,shift_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.grid_layout.editor.add_to_selection.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.grid_layout.editor.set_selection = (function app$main$data$workspace$grid_layout$editor$set_selection(grid_id,cell_id){
if((typeof app.main.data.workspace.grid_layout.editor.set_selection_71079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.editor.set_selection_71079 = (function (grid_id,cell_id,meta71080){
this.grid_id = grid_id;
this.cell_id = cell_id;
this.meta71080 = meta71080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.editor.set_selection_71079.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.set_selection_71079.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.editor","set-selection","app.main.data.workspace.grid-layout.editor/set-selection",-1992082205);
}));

(app.main.data.workspace.grid_layout.editor.set_selection_71079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71081,meta71080__$1){
var self__ = this;
var _71081__$1 = this;
return (new app.main.data.workspace.grid_layout.editor.set_selection_71079(self__.grid_id,self__.cell_id,meta71080__$1));
}));

(app.main.data.workspace.grid_layout.editor.set_selection_71079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71081){
var self__ = this;
var _71081__$1 = this;
return self__.meta71080;
}));

(app.main.data.workspace.grid_layout.editor.set_selection_71079.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.set_selection_71079.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),self__.grid_id,new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([self__.cell_id]));
}));
}

return (new app.main.data.workspace.grid_layout.editor.set_selection_71079(grid_id,cell_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid_layout.editor.remove_selection = (function app$main$data$workspace$grid_layout$editor$remove_selection(grid_id,cell_id){
if((typeof app.main.data.workspace.grid_layout.editor.remove_selection_71082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.editor.remove_selection_71082 = (function (grid_id,cell_id,meta71083){
this.grid_id = grid_id;
this.cell_id = cell_id;
this.meta71083 = meta71083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.editor.remove_selection_71082.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.remove_selection_71082.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.editor","remove-selection","app.main.data.workspace.grid-layout.editor/remove-selection",884403180);
}));

(app.main.data.workspace.grid_layout.editor.remove_selection_71082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71084,meta71083__$1){
var self__ = this;
var _71084__$1 = this;
return (new app.main.data.workspace.grid_layout.editor.remove_selection_71082(self__.grid_id,self__.cell_id,meta71083__$1));
}));

(app.main.data.workspace.grid_layout.editor.remove_selection_71082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71084){
var self__ = this;
var _71084__$1 = this;
return self__.meta71083;
}));

(app.main.data.workspace.grid_layout.editor.remove_selection_71082.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.remove_selection_71082.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),self__.grid_id,new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.disj,self__.cell_id);
}));
}

return (new app.main.data.workspace.grid_layout.editor.remove_selection_71082(grid_id,cell_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid_layout.editor.clear_selection = (function app$main$data$workspace$grid_layout$editor$clear_selection(grid_id){
if((typeof app.main.data.workspace.grid_layout.editor.clear_selection_71085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.editor.clear_selection_71085 = (function (grid_id,meta71086){
this.grid_id = grid_id;
this.meta71086 = meta71086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.editor.clear_selection_71085.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.clear_selection_71085.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.editor","clear-selection","app.main.data.workspace.grid-layout.editor/clear-selection",1229404566);
}));

(app.main.data.workspace.grid_layout.editor.clear_selection_71085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71087,meta71086__$1){
var self__ = this;
var _71087__$1 = this;
return (new app.main.data.workspace.grid_layout.editor.clear_selection_71085(self__.grid_id,meta71086__$1));
}));

(app.main.data.workspace.grid_layout.editor.clear_selection_71085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71087){
var self__ = this;
var _71087__$1 = this;
return self__.meta71086;
}));

(app.main.data.workspace.grid_layout.editor.clear_selection_71085.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.clear_selection_71085.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),self__.grid_id], null),cljs.core.dissoc,new cljs.core.Keyword(null,"selected","selected",574897764));
}));
}

return (new app.main.data.workspace.grid_layout.editor.clear_selection_71085(grid_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid_layout.editor.clean_selection = (function app$main$data$workspace$grid_layout$editor$clean_selection(grid_id){
if((typeof app.main.data.workspace.grid_layout.editor.clean_selection_71089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.editor.clean_selection_71089 = (function (grid_id,meta71090){
this.grid_id = grid_id;
this.meta71090 = meta71090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.editor.clean_selection_71089.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.clean_selection_71089.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.editor","clean-selection","app.main.data.workspace.grid-layout.editor/clean-selection",-1297822824);
}));

(app.main.data.workspace.grid_layout.editor.clean_selection_71089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71091,meta71090__$1){
var self__ = this;
var _71091__$1 = this;
return (new app.main.data.workspace.grid_layout.editor.clean_selection_71089(self__.grid_id,meta71090__$1));
}));

(app.main.data.workspace.grid_layout.editor.clean_selection_71089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71091){
var self__ = this;
var _71091__$1 = this;
return self__.meta71090;
}));

(app.main.data.workspace.grid_layout.editor.clean_selection_71089.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.clean_selection_71089.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.grid_id);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),self__.grid_id,new cljs.core.Keyword(null,"selected","selected",574897764)], null),(function (selected){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__71088_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(shape),p1__71088_SHARP_);
})),selected);
}));
}));
}

return (new app.main.data.workspace.grid_layout.editor.clean_selection_71089(grid_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing = (function app$main$data$workspace$grid_layout$editor$stop_grid_layout_editing(grid_id){
if((typeof app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092 = (function (grid_id,meta71093){
this.grid_id = grid_id;
this.meta71093 = meta71093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.editor","stop-grid-layout-editing","app.main.data.workspace.grid-layout.editor/stop-grid-layout-editing",-641808288);
}));

(app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71094,meta71093__$1){
var self__ = this;
var _71094__$1 = this;
return (new app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092(self__.grid_id,meta71093__$1));
}));

(app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71094){
var self__ = this;
var _71094__$1 = this;
return self__.meta71093;
}));

(app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),cljs.core.dissoc,self__.grid_id);
}));
}

return (new app.main.data.workspace.grid_layout.editor.stop_grid_layout_editing_71092(grid_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid_layout.editor.locate_board = (function app$main$data$workspace$grid_layout$editor$locate_board(grid_id){
if((typeof app.main.data.workspace.grid_layout.editor.locate_board_71095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.editor.locate_board_71095 = (function (grid_id,meta71096){
this.grid_id = grid_id;
this.meta71096 = meta71096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.editor.locate_board_71095.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.locate_board_71095.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.editor","locate-board","app.main.data.workspace.grid-layout.editor/locate-board",212264121);
}));

(app.main.data.workspace.grid_layout.editor.locate_board_71095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71097,meta71096__$1){
var self__ = this;
var _71097__$1 = this;
return (new app.main.data.workspace.grid_layout.editor.locate_board_71095(self__.grid_id,meta71096__$1));
}));

(app.main.data.workspace.grid_layout.editor.locate_board_71095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71097){
var self__ = this;
var _71097__$1 = this;
return self__.meta71096;
}));

(app.main.data.workspace.grid_layout.editor.locate_board_71095.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.locate_board_71095.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var srect = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.grid_id,new cljs.core.Keyword(null,"selrect","selrect",1966287292)], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p__71098){
var map__71099 = p__71098;
var map__71099__$1 = cljs.core.__destructure_map(map__71099);
var local = map__71099__$1;
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71099__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71099__$1,new cljs.core.Keyword(null,"vport","vport",-1317419022));
var map__71100 = srect;
var map__71100__$1 = cljs.core.__destructure_map(map__71100);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71100__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71100__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71100__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71100__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x__$1 = ((x + (width / (2))) + (- ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vport) / (2)) / zoom)));
var y__$1 = ((y + (height / (2))) + (- ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vport) / (2)) / zoom)));
var srect__$1 = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(x__$1,y__$1,width,height);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(local,new cljs.core.Keyword(null,"vbox","vbox",-492787765),cljs.core.merge,cljs.core.select_keys(srect__$1,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y2","y2",-718691301)], null)));
}));
}));
}

return (new app.main.data.workspace.grid_layout.editor.locate_board_71095(grid_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid_layout.editor.select_track_cells = (function app$main$data$workspace$grid_layout$editor$select_track_cells(grid_id,type,index){
if((typeof app.main.data.workspace.grid_layout.editor.select_track_cells_71101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.editor.select_track_cells_71101 = (function (grid_id,type,index,meta71102){
this.grid_id = grid_id;
this.type = type;
this.index = index;
this.meta71102 = meta71102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.editor.select_track_cells_71101.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.select_track_cells_71101.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.editor","select-track-cells","app.main.data.workspace.grid-layout.editor/select-track-cells",-1790760885);
}));

(app.main.data.workspace.grid_layout.editor.select_track_cells_71101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71103,meta71102__$1){
var self__ = this;
var _71103__$1 = this;
return (new app.main.data.workspace.grid_layout.editor.select_track_cells_71101(self__.grid_id,self__.type,self__.index,meta71102__$1));
}));

(app.main.data.workspace.grid_layout.editor.select_track_cells_71101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71103){
var self__ = this;
var _71103__$1 = this;
return self__.meta71102;
}));

(app.main.data.workspace.grid_layout.editor.select_track_cells_71101.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.editor.select_track_cells_71101.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.grid_id);
var cells = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,new cljs.core.Keyword(null,"column","column",2078222095)))?app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2(parent,self__.index):app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2(parent,self__.index));
var selected = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),cells);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),self__.grid_id,new cljs.core.Keyword(null,"selected","selected",574897764)], null),selected);
}));
}

return (new app.main.data.workspace.grid_layout.editor.select_track_cells_71101(grid_id,type,index,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.grid_layout.editor.js.map
