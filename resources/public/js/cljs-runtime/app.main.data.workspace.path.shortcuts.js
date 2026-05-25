import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.path.js";
import "./app.main.store.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.shortcuts');
app.main.data.workspace.path.shortcuts.esc_pressed = (function app$main$data$workspace$path$shortcuts$esc_pressed(){
if((typeof app.main.data.workspace.path.shortcuts.esc_pressed_52834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.shortcuts.esc_pressed_52834 = (function (meta52835){
this.meta52835 = meta52835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.shortcuts.esc_pressed_52834.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.shortcuts.esc_pressed_52834.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.shortcuts","esc-pressed","app.main.data.workspace.path.shortcuts/esc-pressed",2080782952);
}));

(app.main.data.workspace.path.shortcuts.esc_pressed_52834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52836,meta52835__$1){
var self__ = this;
var _52836__$1 = this;
return (new app.main.data.workspace.path.shortcuts.esc_pressed_52834(meta52835__$1));
}));

(app.main.data.workspace.path.shortcuts.esc_pressed_52834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52836){
var self__ = this;
var _52836__$1 = this;
return self__.meta52835;
}));

(app.main.data.workspace.path.shortcuts.esc_pressed_52834.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.shortcuts.esc_pressed_52834.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
}));
}

return (new app.main.data.workspace.path.shortcuts.esc_pressed_52834(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.shortcuts.shortcuts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"escape","escape",-991601952),new cljs.core.Keyword(null,"fit-all","fit-all",90208612),new cljs.core.Keyword(null,"move-unit-down","move-unit-down",1480083783),new cljs.core.Keyword(null,"join-nodes","join-nodes",923290343),new cljs.core.Keyword(null,"redo","redo",501190664),new cljs.core.Keyword(null,"make-corner","make-corner",-1029141688),new cljs.core.Keyword(null,"draw-nodes","draw-nodes",1085190985),new cljs.core.Keyword(null,"move-fast-down","move-fast-down",-949416918),new cljs.core.Keyword(null,"delete-node","delete-node",-573394678),new cljs.core.Keyword(null,"snap-nodes","snap-nodes",42271851),new cljs.core.Keyword(null,"merge-nodes","merge-nodes",714582572),new cljs.core.Keyword(null,"move-unit-up","move-unit-up",-87570067),new cljs.core.Keyword(null,"decrease-zoom","decrease-zoom",-316768753),new cljs.core.Keyword(null,"increase-zoom","increase-zoom",853377297),new cljs.core.Keyword(null,"reset-zoom","reset-zoom",540867442),new cljs.core.Keyword(null,"undo","undo",-1818036302),new cljs.core.Keyword(null,"move-fast-right","move-fast-right",-1380819692),new cljs.core.Keyword(null,"zoom-selected","zoom-selected",-1583985803),new cljs.core.Keyword(null,"move-unit-right","move-unit-right",-182503082),new cljs.core.Keyword(null,"move-fast-left","move-fast-left",1147435382),new cljs.core.Keyword(null,"separate-nodes","separate-nodes",-1215076842),new cljs.core.Keyword(null,"make-curve","make-curve",-1823500424),new cljs.core.Keyword(null,"add-node","add-node",-2069253988),new cljs.core.Keyword(null,"move-fast-up","move-fast-up",773005692),new cljs.core.Keyword(null,"move-unit-left","move-unit-left",-871314243),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.esc(),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["escape","enter","v"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.shortcuts.esc_pressed());
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift("1"),new cljs.core.Keyword(null,"command","command",-894540724),"shift+1",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom_to_fit_all);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.down_arrow,new cljs.core.Keyword(null,"command","command",-894540724),"down",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.move_selected(new cljs.core.Keyword(null,"down","down",1565245570),false));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"J",new cljs.core.Keyword(null,"command","command",-894540724),"j",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.join_nodes());
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("Y"),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.shortcuts.c_mod("shift+z"),app.main.data.shortcuts.c_mod("y")], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.redo_path());
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"X",new cljs.core.Keyword(null,"command","command",-894540724),"x",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.make_corner.cljs$core$IFn$_invoke$arity$0());
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"P",new cljs.core.Keyword(null,"command","command",-894540724),"p",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.change_edit_mode(new cljs.core.Keyword(null,"draw","draw",1358331674)));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift(app.main.data.shortcuts.down_arrow),new cljs.core.Keyword(null,"command","command",-894540724),"shift+down",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.move_selected(new cljs.core.Keyword(null,"down","down",1565245570),true));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.supr(),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["del","backspace"], null),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.remove_node());
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("'"),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.shortcuts.c_mod("'"),app.main.data.shortcuts.c_mod("219")], null),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.toggle_snap());
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("J"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.c_mod("j"),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.merge_nodes());
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.up_arrow,new cljs.core.Keyword(null,"command","command",-894540724),"up",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.move_selected(new cljs.core.Keyword(null,"up","up",-269712113),false));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"-",new cljs.core.Keyword(null,"command","command",-894540724),"-",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.decrease_zoom.cljs$core$IFn$_invoke$arity$1(null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"+",new cljs.core.Keyword(null,"command","command",-894540724),"+",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.increase_zoom.cljs$core$IFn$_invoke$arity$1(null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift("0"),new cljs.core.Keyword(null,"command","command",-894540724),"shift+0",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.reset_zoom);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("Z"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.c_mod("z"),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.undo_path());
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift(app.main.data.shortcuts.right_arrow),new cljs.core.Keyword(null,"command","command",-894540724),"shift+right",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.move_selected(new cljs.core.Keyword(null,"right","right",-452581833),true));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift("2"),new cljs.core.Keyword(null,"command","command",-894540724),"shift+2",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom_to_selected_shape);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.left_arrow,new cljs.core.Keyword(null,"command","command",-894540724),"left",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.move_selected(new cljs.core.Keyword(null,"left","left",-399115937),false));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift(app.main.data.shortcuts.left_arrow),new cljs.core.Keyword(null,"command","command",-894540724),"shift+left",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.move_selected(new cljs.core.Keyword(null,"left","left",-399115937),true));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"K",new cljs.core.Keyword(null,"command","command",-894540724),"k",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.separate_nodes());
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"C",new cljs.core.Keyword(null,"command","command",-894540724),"c",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.make_curve.cljs$core$IFn$_invoke$arity$0());
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift("+"),new cljs.core.Keyword(null,"command","command",-894540724),"shift++",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.add_node());
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift(app.main.data.shortcuts.up_arrow),new cljs.core.Keyword(null,"command","command",-894540724),"shift+up",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.move_selected(new cljs.core.Keyword(null,"up","up",-269712113),true));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.right_arrow,new cljs.core.Keyword(null,"command","command",-894540724),"right",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.move_selected(new cljs.core.Keyword(null,"right","right",-452581833),false));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"M",new cljs.core.Keyword(null,"command","command",-894540724),"m",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-editor","path-editor",399326731)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.change_edit_mode(new cljs.core.Keyword(null,"move","move",-2110884309)));
})], null)]);
app.main.data.workspace.path.shortcuts.get_tooltip = (function app$main$data$workspace$path$shortcuts$get_tooltip(shortcut){
if(cljs.core.contains_QMARK_(app.main.data.workspace.path.shortcuts.shortcuts,shortcut)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shortcut),"\n","(contains? shortcuts shortcut)"].join('')));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.path.shortcuts.shortcuts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)], null));
});

//# sourceMappingURL=app.main.data.workspace.path.shortcuts.js.map
