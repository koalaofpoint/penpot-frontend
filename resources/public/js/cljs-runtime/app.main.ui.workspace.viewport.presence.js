import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.time.js";
import "./app.main.refs.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.presence');
app.main.ui.workspace.viewport.presence.pointer_path = ""+"M11.58,-0.47L11.47,-0.35L0.34,10.77L0.30,10.96L-0.46,15.52L4.29,14.72L15.53,3.47L11.58,-0.47ZL11.58,-0.47ZL11.58,-0.47ZM11.58,1.3C12.31,2.05,13.02,2.742,13.76,3.47L4.0053,13.23C3.27,12.50,2.55,11.78,1.82,11.05L11.58,1.30ZL11.58,1.30ZM1.37,12.15L2.90,13.68L1.67,13.89L1.165,13.39L1.37,12.15ZL1.37,12.15Z";
app.main.ui.workspace.viewport.presence.session_cursor = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$viewport$presence$session_cursor(props_80558){
var profile = props_80558.profile;
var session = props_80558.session;
var zoom = props_80558.zoom;
var point = new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(session);
var bg_color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(session);
var fg_color = "var(--app-white)";
var transform = ""+"translate("+((point?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"x","x",2099068185))) ?? "")+", "+((point?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(point,new cljs.core.Keyword(null,"y","y",-1757859776))) ?? "")+") scale("+(((1) / zoom) ?? "")+")";
var fullname = new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(profile);
var fullname__$1 = (((cljs.core.count(fullname) > (16)))?""+(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(fullname,(0),(12)) ?? "")+"...":fullname);
return rumext.v2.jsxs("g",{'transform':transform,'className':"main_ui_workspace_viewport_presence__multiuser-cursor",'children':[rumext.v2.jsx("path",{'fill':bg_color,'d':app.main.ui.workspace.viewport.presence.pointer_path}),rumext.v2.jsx("g",{'transform':"translate(17 -10)",'children':rumext.v2.jsx("foreignObject",{'x':-0.3,'y':-12.5,'width':(300),'height':(120),'children':rumext.v2.jsx("div",{'style':{'backgroundColor':bg_color,'color':fg_color},'className':"main_ui_workspace_viewport_presence__profile-name",'children':fullname__$1})})})]});
}));

(app.main.ui.workspace.viewport.presence.session_cursor.displayName = "session-cursor");

app.main.ui.workspace.viewport.presence.active_cursors = (function app$main$ui$workspace$viewport$presence$active_cursors(props_80561){
var page_id = (props_80561["page-id"]);
var counter = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
var profiles = rumext.v2.deref(app.main.refs.profiles);
var sessions = rumext.v2.deref(app.main.refs.workspace_presence);
var zoom = rumext.v2.deref(app.main.refs.selected_zoom);
var sessions__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80560_SHARP_){
return ((5000) >= (cljs.core.inst_ms(app.common.time.now()) - cljs.core.inst_ms(new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336).cljs$core$IFn$_invoke$arity$1(p1__80560_SHARP_))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80559_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__80559_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"point","point",1813198264),cljs.core.vals(sessions))));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2(null,(function (){
var sem = app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((1000),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
}));
return (function (){
return beicon.v2.core.dispose_BANG_(sem);
});
}));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,session){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.workspace.viewport.presence.session_cursor,{'session':session,'zoom':zoom,'profile':cljs.core.get.cljs$core$IFn$_invoke$arity$2(profiles,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(session))},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(session) ?? "")));

return out_arr__46744__auto__;
}),[],sessions__$1);
});

(app.main.ui.workspace.viewport.presence.active_cursors.displayName = "active-cursors");


//# sourceMappingURL=app.main.ui.workspace.viewport.presence.js.map
