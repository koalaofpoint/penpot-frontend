import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.store.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.grid_layout.shortcuts');
app.main.data.workspace.grid_layout.shortcuts.esc_pressed = (function app$main$data$workspace$grid_layout$shortcuts$esc_pressed(){
if((typeof app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113 = (function (meta57114){
this.meta57114 = meta57114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.grid-layout.shortcuts","esc-pressed","app.main.data.workspace.grid-layout.shortcuts/esc-pressed",-1690439930);
}));

(app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57115,meta57114__$1){
var self__ = this;
var _57115__$1 = this;
return (new app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113(meta57114__$1));
}));

(app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57115){
var self__ = this;
var _57115__$1 = this;
return self__.meta57114;
}));

(app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var edition_id = (function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edition","edition",1337508089)], null));
}
})();
var path_edit_mode = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),edition_id,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993)], null));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),path_edit_mode)))){
return beicon.v2.core.of(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.grid_layout.shortcuts.esc_pressed_57113(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.grid_layout.shortcuts.shortcuts = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"escape","escape",-991601952),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.esc(),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["escape","enter","v"], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.shortcuts.esc_pressed());
})], null),new cljs.core.Keyword(null,"undo","undo",-1818036302),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("Z"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.c_mod("z"),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.undo);
})], null),new cljs.core.Keyword(null,"redo","redo",501190664),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("Y"),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.shortcuts.c_mod("shift+z"),app.main.data.shortcuts.c_mod("y")], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.redo);
})], null),new cljs.core.Keyword(null,"increase-zoom","increase-zoom",853377297),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"+",new cljs.core.Keyword(null,"command","command",-894540724),"+",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.increase_zoom.cljs$core$IFn$_invoke$arity$1(null));
})], null),new cljs.core.Keyword(null,"decrease-zoom","decrease-zoom",-316768753),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"-",new cljs.core.Keyword(null,"command","command",-894540724),"-",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.decrease_zoom.cljs$core$IFn$_invoke$arity$1(null));
})], null),new cljs.core.Keyword(null,"reset-zoom","reset-zoom",540867442),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift("0"),new cljs.core.Keyword(null,"command","command",-894540724),"shift+0",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.reset_zoom);
})], null),new cljs.core.Keyword(null,"fit-all","fit-all",90208612),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift("1"),new cljs.core.Keyword(null,"command","command",-894540724),"shift+1",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom_to_fit_all);
})], null),new cljs.core.Keyword(null,"zoom-selected","zoom-selected",-1583985803),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.shift("2"),new cljs.core.Keyword(null,"command","command",-894540724),"shift+2",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.zoom_to_selected_shape);
})], null)], null);
app.main.data.workspace.grid_layout.shortcuts.get_tooltip = (function app$main$data$workspace$grid_layout$shortcuts$get_tooltip(shortcut){
if(cljs.core.contains_QMARK_(app.main.data.workspace.grid_layout.shortcuts.shortcuts,shortcut)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shortcut),"\n","(contains? shortcuts shortcut)"].join('')));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.grid_layout.shortcuts.shortcuts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)], null));
});

//# sourceMappingURL=app.main.data.workspace.grid_layout.shortcuts.js.map
