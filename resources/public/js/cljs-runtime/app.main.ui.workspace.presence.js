import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.config.js";
import "./app.main.refs.js";
import "./app.util.dom.js";
import "./app.util.timers.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.presence');
app.main.ui.workspace.presence.session_widget = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$presence$session_widget(props_78005){
var profile = props_78005.profile;
var index = props_78005.index;
var color = props_78005.color;
var profile__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(profile,new cljs.core.Keyword(null,"color","color",1011675173),color);
var full_name = new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(profile__$1);
return rumext.v2.jsx("li",{'style':{'zIndex':""+(((2) + ((-1) * index)) ?? ""),'backgroundColor':color},'title':full_name,'className':"main_ui_workspace_presence__session-icon",'children':rumext.v2.jsx("img",{'alt':full_name,'style':{'backgroundColor':color},'src':app.config.resolve_profile_photo_url(profile__$1)})});
}));

(app.main.ui.workspace.presence.session_widget.displayName = "session-widget");

app.main.ui.workspace.presence.active_sessions = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$presence$active_sessions(props_78006){
var profiles = rumext.v2.deref(app.main.refs.profiles);
var presence = rumext.v2.deref(app.main.refs.workspace_presence);
var sessions = cljs.core.vals(presence);
var num_sessions = cljs.core.count(sessions);
var max_avatar_count = (3);
var avatar_count = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_sessions,max_avatar_count))?max_avatar_count:(max_avatar_count - (1)));
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var open_QMARK_ = ((cljs.core.deref(open_STAR_)) && ((num_sessions > max_avatar_count)));
var on_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
cljs.core.reset_BANG_(open_STAR_,true);

return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.focus_BANG_(app.util.dom.get_element("users-close"));
}));
}));
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(open_STAR_,false);
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((open_QMARK_)?rumext.v2.jsx("button",{'id':"users-close",'onClick':on_close,'onBlur':on_close,'className':"main_ui_workspace_presence__active-users-opened",'children':rumext.v2.jsx("ul",{'data-testid':"active-users-list",'className':"main_ui_workspace_presence__active-users-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,session){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.workspace.presence.session_widget,{'color':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(session),'index':(0),'profile':cljs.core.get.cljs$core$IFn$_invoke$arity$2(profiles,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(session))},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(session) ?? "")));

return out_arr__46744__auto__;
}),[],sessions)})}):null),rumext.v2.jsx("button",{'onClick':on_open,'className':"main_ui_workspace_presence__active-users",'children':rumext.v2.jsxs("ul",{'data-testid':"active-users-list",'className':"main_ui_workspace_presence__active-users-list",'children':[(((num_sessions > max_avatar_count))?rumext.v2.jsx("li",{'className':"main_ui_workspace_presence__users-num",'children':""+"+"+(((1) + (num_sessions - max_avatar_count)) ?? "")}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__78007){
var vec__78008 = p__78007;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78008,(0),null);
var session = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78008,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.workspace.presence.session_widget,{'color':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(session),'index':index,'profile':cljs.core.get.cljs$core$IFn$_invoke$arity$2(profiles,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(session))},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(session) ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(avatar_count,sessions)))]})})]});
}));

(app.main.ui.workspace.presence.active_sessions.displayName = "active-sessions");


//# sourceMappingURL=app.main.ui.workspace.presence.js.map
