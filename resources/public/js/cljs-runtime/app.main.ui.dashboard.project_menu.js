import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.context_menu_a11y.js";
import "./app.main.ui.context.js";
import "./app.main.ui.dashboard.import.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.project_menu');
app.main.ui.dashboard.project_menu.project_menu_STAR_ = (function app$main$ui$dashboard$project_menu$project_menu_STAR_(props_53188){
var on_import = props_53188.onImport;
var show = props_53188.show;
var left = props_53188.left;
var on_close = props_53188.onClose;
var top = props_53188.top;
var project = props_53188.project;
var on_edit = props_53188.onEdit;
var top__$1 = (function (){var or__5025__auto__ = top;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var left__$1 = (function (){var or__5025__auto__ = left;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var current_team_id = rumext.v2.use_ctx(app.main.ui.context.current_team_id);
var teams = rumext.v2.deref(app.main.refs.teams);
var teams__$1 = cljs.core.vec(cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(teams,current_team_id)));
var on_duplicate_success = (function (new_project){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.success-duplicate-project")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(new_project),new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_project)], 0))], 0));
});
var on_duplicate = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.duplicate_project(cljs.core.with_meta(project,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_duplicate_success], null))));
});
var toggle_pin = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.toggle_project_pin(project));
});
var on_move_success = (function (team_id){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));
});
var on_move = (function (team_id){
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null);
var mdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return on_move_success(team_id);
})], null);
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.success-move-project")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.move_project(cljs.core.with_meta(data,mdata))], 0));
});
});
var delete_fn = (function (_){
var team_id = new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(project);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.success-delete-project")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.delete_project(project),app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0))], 0));
});
var on_delete = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-project-confirm.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-project-confirm.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-project-confirm.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),delete_fn], null)));
});
var file_input = rumext.v2.use_ref(null);
var on_import_files = (function (){
return app.util.dom.click_BANG_(rumext.v2.ref_val(file_input));
});
var on_finish_import = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.fn_QMARK_(on_import)){
return (on_import.cljs$core$IFn$_invoke$arity$0 ? on_import.cljs$core$IFn$_invoke$arity$0() : on_import.call(null));
} else {
return null;
}
}));
var options = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.rename"),new cljs.core.Keyword(null,"id","id",-1388402092),"project-rename",new cljs.core.Keyword(null,"handler","handler",-195596612),on_edit], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.duplicate"),new cljs.core.Keyword(null,"id","id",-1388402092),"project-duplicate",new cljs.core.Keyword(null,"handler","handler",-195596612),on_duplicate], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.pin-unpin"),new cljs.core.Keyword(null,"id","id",-1388402092),"project-pin",new cljs.core.Keyword(null,"handler","handler",-195596612),toggle_pin], null)),((((cljs.core.seq(teams__$1)) && (cljs.core.not(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.move-to"),new cljs.core.Keyword(null,"id","id",-1388402092),"project-move-to",new cljs.core.Keyword(null,"options","options",99638489),(function (){var iter__5503__auto__ = (function app$main$ui$dashboard$project_menu$project_menu_STAR__$_iter__53199(s__53200){
return (new cljs.core.LazySeq(null,(function (){
var s__53200__$1 = s__53200;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53200__$1);
if(temp__5825__auto__){
var s__53200__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53200__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__53200__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__53202 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__53201 = (0);
while(true){
if((i__53201 < size__5502__auto__)){
var team = cljs.core._nth(c__5501__auto__,i__53201);
cljs.core.chunk_append(b__53202,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team),new cljs.core.Keyword(null,"id","id",-1388402092),["move-to-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team))].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),on_move(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team))], null));

var G__53212 = (i__53201 + (1));
i__53201 = G__53212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53202),app$main$ui$dashboard$project_menu$project_menu_STAR__$_iter__53199(cljs.core.chunk_rest(s__53200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53202),null);
}
} else {
var team = cljs.core.first(s__53200__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team),new cljs.core.Keyword(null,"id","id",-1388402092),["move-to-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team))].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),on_move(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team))], null),app$main$ui$dashboard$project_menu$project_menu_STAR__$_iter__53199(cljs.core.rest(s__53200__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(teams__$1);
})()], null):null),(((!((on_import == null))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import"),new cljs.core.Keyword(null,"id","id",-1388402092),"file-import",new cljs.core.Keyword(null,"handler","handler",-195596612),on_import_files], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(project))?null:new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete"),new cljs.core.Keyword(null,"id","id",-1388402092),"project-delete",new cljs.core.Keyword(null,"handler","handler",-195596612),on_delete], null))], null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(show),rumext.v2.adapt(on_close)],(function (){
if(show){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dropdown","open","dropdown/open",824533839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"project-menu"], null)));

var stream = beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__53187_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("project-menu",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53187_SHARP_));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("dropdown","open","dropdown/open",824533839)),app.main.store.stream))));
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$4(null,null,on_close,stream);
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
} else {
return null;
}
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.components.context_menu_a11y.context_menu_STAR_,{'onClose':on_close,'show':show,'fixed':((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(top__$1,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(left__$1,(0)))),'minWidth':true,'top':top__$1,'left':left__$1,'options':options}),rumext.v2.jsx(app.main.ui.dashboard.import$.import_form,{'ref':file_input,'project-id':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),'on-finish-import':on_finish_import})]});
});

(app.main.ui.dashboard.project_menu.project_menu_STAR_.displayName = "project-menu*");


//# sourceMappingURL=app.main.ui.dashboard.project_menu.js.map
