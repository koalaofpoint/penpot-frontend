import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.point.js";
import "./app.common.schema.js";
import "./app.main.data.comments.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.comments.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.plugins.format.js";
import "./app.plugins.parser.js";
import "./app.plugins.register.js";
import "./app.plugins.shape.js";
import "./app.plugins.user.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
goog.provide('app.plugins.comments');
app.plugins.comments.comment_proxy_QMARK_ = (function app$plugins$comments$comment_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"CommentProxy");
});
app.plugins.comments.comment_proxy = (function app$plugins$comments$comment_proxy(plugin_id,file_id,page_id,thread_id,data){
var data_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data);
var obj_62214 = ({});
var to_string_62213 = (function (){
return "CommentProxy";
});
var obj_62214_target_62235_62784 = obj_62214;
var prop_get_fn__62247_62785 = (function (){
var obj_62214_this_62234 = this;
var internal_fn__62240 = to_string_62213;
return internal_fn__62240.call(obj_62214_this_62234);
});
var prop_get_fn__62256_62786 = (function (){
var obj_62214_this_62234 = this;
var internal_fn__62250 = to_string_62213;
return internal_fn__62250.call(obj_62214_this_62234);
});
var prop_get_fn_plugin_62263_62787 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_plugin_62257 = (function (){
return plugin_id;
});
return internal_fn_plugin_62257.call(obj_62214_this_62234);
});
var prop_get_fn_file_62271_62788 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_file_62265 = (function (){
return file_id;
});
return internal_fn_file_62265.call(obj_62214_this_62234);
});
var prop_get_fn_page_62280_62789 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_page_62273 = (function (){
return page_id;
});
return internal_fn_page_62273.call(obj_62214_this_62234);
});
var prop_get_fn_thread_62288_62792 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_thread_62282 = (function (){
return thread_id;
});
return internal_fn_thread_62282.call(obj_62214_this_62234);
});
var prop_get_fn_id_62295_62793 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_id_62289 = (function (){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data);
});
return internal_fn_id_62289.call(obj_62214_this_62234);
});
var prop_get_fn_user_62303_62794 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_user_62297 = (function (){
return app.plugins.user.user_proxy(plugin_id,app.main.data.comments.get_owner(data));
});
return internal_fn_user_62297.call(obj_62214_this_62234);
});
var prop_get_fn_owner_62310_62795 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_owner_62304 = (function (){
return app.plugins.user.user_proxy(plugin_id,app.main.data.comments.get_owner(data));
});
return internal_fn_owner_62304.call(obj_62214_this_62234);
});
var prop_get_fn_date_62319_62796 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_date_62311 = (function (){
return new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(data);
});
return internal_fn_date_62311.call(obj_62214_this_62234);
});
var prop_get_fn_content_62328_62797 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_content_62321 = (function (){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_));
});
return internal_fn_content_62321.call(obj_62214_this_62234);
});
var schema_content_62324_62798 = null;
var coercer_fn_content_62322_62799 = (((((!((schema_content_62324_62798 == null)))) && ((!(cljs.core.fn_QMARK_(schema_content_62324_62798))))))?app.common.schema.coercer(schema_content_62324_62798):null);
var decode_fn_content_62323_62800 = app.common.json.__GT_clj;
var prop_set_fn_content_62330_62801 = (function (val_content_62326){
var obj_62214_this_62234 = this;
var internal_fn_content_62321 = (function (content){
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
if((((!(typeof content === 'string'))) || (cljs.core.empty_QMARK_(content)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"content","content",15833224),"Not valid");
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile),new cljs.core.Keyword(null,"owner-id","owner-id",-58940392).cljs$core$IFn$_invoke$arity$1(data))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"content","content",15833224),"Cannot change content from another user's comments");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"comment:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"content","content",15833224),"Plugin doesn't have 'comment:write' permission");
} else {
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),content);
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.retrieve_comment_threads(file_id));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-comment","update-comment",-1347462369),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"content","content",15833224),content], null))));

}
}
}
});
return internal_fn_content_62321.call(obj_62214_this_62234,val_content_62326);
});
var schema_remove_62335_62802 = null;
var coercer_fn_remove_62333_62803 = (((((!((schema_remove_62335_62802 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_62335_62802))))))?app.common.schema.coercer(schema_remove_62335_62802):null);
var decode_fn_remove_62334_62804 = app.common.json.__GT_clj;
var prop_get_fn_remove_62339_62805 = (function (){
var obj_62214_this_62234 = this;
var internal_fn_remove_62332 = (function (){
return (new Promise((function (resolve,reject){
if((!(app.plugins.register.check_permission(plugin_id,"comment:write")))){
app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"remove","remove",-131428414),"Plugin doesn't have 'comment:write' permission");

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1("Plugin doesn't have 'comment:write' permission") : reject.call(null,"Plugin doesn't have 'comment:write' permission"));
} else {
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (){
return (resolve.cljs$core$IFn$_invoke$arity$0 ? resolve.cljs$core$IFn$_invoke$arity$0() : resolve.call(null));
}),reject,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.retrieve_comment_threads(file_id));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null))));

}
})));
});
var internal_fn_remove_62332__$1 = internal_fn_remove_62332.bind(obj_62214_this_62234);
return internal_fn_remove_62332__$1;
});
Object.defineProperty(obj_62214_target_62235_62784,Symbol.toStringTag,(function (){var obj62414 = ({"enumerable":false,"get":prop_get_fn__62247_62785});
return obj62414;
})());

Object.defineProperty(obj_62214_target_62235_62784,Symbol["for"]("penpot.reify:type"),(function (){var obj62422 = ({"enumerable":false,"get":prop_get_fn__62256_62786});
return obj62422;
})());

Object.defineProperty(obj_62214_target_62235_62784,"$plugin",(function (){var obj62426 = ({"enumerable":false,"get":prop_get_fn_plugin_62263_62787});
return obj62426;
})());

Object.defineProperty(obj_62214_target_62235_62784,"$file",(function (){var obj62430 = ({"enumerable":false,"get":prop_get_fn_file_62271_62788});
return obj62430;
})());

Object.defineProperty(obj_62214_target_62235_62784,"$page",(function (){var obj62432 = ({"enumerable":false,"get":prop_get_fn_page_62280_62789});
return obj62432;
})());

Object.defineProperty(obj_62214_target_62235_62784,"$thread",(function (){var obj62434 = ({"enumerable":false,"get":prop_get_fn_thread_62288_62792});
return obj62434;
})());

Object.defineProperty(obj_62214_target_62235_62784,"$id",(function (){var obj62436 = ({"enumerable":false,"get":prop_get_fn_id_62295_62793});
return obj62436;
})());

Object.defineProperty(obj_62214_target_62235_62784,"user",(function (){var obj62438 = ({"enumerable":true,"get":prop_get_fn_user_62303_62794});
return obj62438;
})());

Object.defineProperty(obj_62214_target_62235_62784,"owner",(function (){var obj62440 = ({"enumerable":true,"get":prop_get_fn_owner_62310_62795});
return obj62440;
})());

Object.defineProperty(obj_62214_target_62235_62784,"date",(function (){var obj62442 = ({"enumerable":true,"get":prop_get_fn_date_62319_62796});
return obj62442;
})());

Object.defineProperty(obj_62214_target_62235_62784,"content",(function (){var obj62444 = ({"enumerable":true,"get":prop_get_fn_content_62328_62797,"set":prop_set_fn_content_62330_62801});
return obj62444;
})());

Object.defineProperty(obj_62214_target_62235_62784,"remove",(function (){var obj62446 = ({"enumerable":false,"get":prop_get_fn_remove_62339_62805});
return obj62446;
})());


return obj_62214;
});
app.plugins.comments.comment_thread_proxy_QMARK_ = (function app$plugins$comments$comment_thread_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"CommentThreadProxy");
});
app.plugins.comments.comment_thread_proxy = (function app$plugins$comments$comment_thread_proxy(plugin_id,file_id,page_id,data){
var data_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data);
var obj_62536 = ({});
var to_string_62535 = (function (){
return "CommentThreadProxy";
});
var obj_62536_target_62540_62813 = obj_62536;
var prop_get_fn__62548_62814 = (function (){
var obj_62536_this_62539 = this;
var internal_fn__62542 = to_string_62535;
return internal_fn__62542.call(obj_62536_this_62539);
});
var prop_get_fn__62555_62815 = (function (){
var obj_62536_this_62539 = this;
var internal_fn__62549 = to_string_62535;
return internal_fn__62549.call(obj_62536_this_62539);
});
var prop_get_fn_plugin_62562_62816 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_plugin_62556 = (function (){
return plugin_id;
});
return internal_fn_plugin_62556.call(obj_62536_this_62539);
});
var prop_get_fn_file_62569_62817 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_file_62563 = (function (){
return file_id;
});
return internal_fn_file_62563.call(obj_62536_this_62539);
});
var prop_get_fn_page_62576_62818 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_page_62570 = (function (){
return page_id;
});
return internal_fn_page_62570.call(obj_62536_this_62539);
});
var prop_get_fn_id_62583_62819 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_id_62577 = (function (){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data);
});
return internal_fn_id_62577.call(obj_62536_this_62539);
});
var prop_get_fn_page_62590_62820 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_page_62584 = (function (){
return app.plugins.utils.locate_page(file_id,page_id);
});
return internal_fn_page_62584.call(obj_62536_this_62539);
});
var prop_get_fn_seqnumber_62597_62821 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_seqnumber_62591 = (function (){
return new cljs.core.Keyword(null,"seqn","seqn",406413591).cljs$core$IFn$_invoke$arity$1(data);
});
return internal_fn_seqnumber_62591.call(obj_62536_this_62539);
});
var prop_get_fn_board_62604_62822 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_board_62598 = (function (){
return app.plugins.shape.shape_proxy.cljs$core$IFn$_invoke$arity$4(plugin_id,file_id,page_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(data));
});
return internal_fn_board_62598.call(obj_62536_this_62539);
});
var prop_get_fn_owner_62611_62823 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_owner_62605 = (function (){
return app.plugins.user.user_proxy(plugin_id,app.main.data.comments.get_owner(data));
});
return internal_fn_owner_62605.call(obj_62536_this_62539);
});
var prop_get_fn_position_62618_62824 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_position_62612 = (function (){
return app.plugins.format.format_point(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_)));
});
return internal_fn_position_62612.call(obj_62536_this_62539);
});
var schema_position_62615_62825 = null;
var coercer_fn_position_62613_62826 = (((((!((schema_position_62615_62825 == null)))) && ((!(cljs.core.fn_QMARK_(schema_position_62615_62825))))))?app.common.schema.coercer(schema_position_62615_62825):null);
var decode_fn_position_62614_62827 = app.common.json.__GT_clj;
var prop_set_fn_position_62619_62828 = (function (val_position_62617){
var obj_62536_this_62539 = this;
var internal_fn_position_62612 = (function (position){
var position__$1 = app.plugins.parser.parse_point(position);
if(((cljs.core.not(app.common.schema.valid_safe_number_QMARK_(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position__$1)))) || (cljs.core.not(app.common.schema.valid_safe_number_QMARK_(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position__$1)))))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"position","position",-2011731912),"Not valid point");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"comment:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"position","position",-2011731912),"Plugin doesn't have 'comment:write' permission");
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.comments.update_comment_thread_position.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position__$1)], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(position__$1));

}
}
});
return internal_fn_position_62612.call(obj_62536_this_62539,val_position_62617);
});
var prop_get_fn_resolved_62626_62829 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_resolved_62620 = (function (){
return new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_));
});
return internal_fn_resolved_62620.call(obj_62536_this_62539);
});
var schema_resolved_62623_62830 = null;
var coercer_fn_resolved_62621_62831 = (((((!((schema_resolved_62623_62830 == null)))) && ((!(cljs.core.fn_QMARK_(schema_resolved_62623_62830))))))?app.common.schema.coercer(schema_resolved_62623_62830):null);
var decode_fn_resolved_62622_62832 = app.common.json.__GT_clj;
var prop_set_fn_resolved_62627_62833 = (function (val_resolved_62625){
var obj_62536_this_62539 = this;
var internal_fn_resolved_62620 = (function (is_resolved){
if((!(cljs.core.boolean_QMARK_(is_resolved)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"resolved","resolved",968763567),"Not a boolean type");
} else {
if((!(app.plugins.register.check_permission(plugin_id,"comment:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"resolved","resolved",968763567),"Plugin doesn't have 'comment:write' permission");
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_comment_thread(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(data_STAR_),new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551),is_resolved)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551),is_resolved);

}
}
});
return internal_fn_resolved_62620.call(obj_62536_this_62539,val_resolved_62625);
});
var schema_findcomments_62631_62834 = null;
var coercer_fn_findcomments_62629_62835 = (((((!((schema_findcomments_62631_62834 == null)))) && ((!(cljs.core.fn_QMARK_(schema_findcomments_62631_62834))))))?app.common.schema.coercer(schema_findcomments_62631_62834):null);
var decode_fn_findcomments_62630_62836 = app.common.json.__GT_clj;
var prop_get_fn_findcomments_62634_62837 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_findcomments_62628 = (function (){
return (new Promise((function (resolve,reject){
if((!(app.plugins.register.check_permission(plugin_id,"comment:read")))){
app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"findComments","findComments",1317965565),"Plugin doesn't have 'comment:read' permission");

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1("Plugin doesn't have 'comment:read' permission") : reject.call(null,"Plugin doesn't have 'comment:read' permission"));
} else {
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (comments){
var G__62675 = app.plugins.format.format_array((function (p1__62453_SHARP_){
return app.plugins.comments.comment_proxy(plugin_id,file_id,page_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),p1__62453_SHARP_);
}),comments);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__62675) : resolve.call(null,G__62675));
}),reject,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comments","get-comments",1914340167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null)));

}
})));
});
var internal_fn_findcomments_62628__$1 = internal_fn_findcomments_62628.bind(obj_62536_this_62539);
return internal_fn_findcomments_62628__$1;
});
var schema_reply_62638_62838 = null;
var coercer_fn_reply_62636_62839 = (((((!((schema_reply_62638_62838 == null)))) && ((!(cljs.core.fn_QMARK_(schema_reply_62638_62838))))))?app.common.schema.coercer(schema_reply_62638_62838):null);
var decode_fn_reply_62637_62840 = app.common.json.__GT_clj;
var prop_get_fn_reply_62641_62841 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_reply_62635 = (function (content){
if((!(app.plugins.register.check_permission(plugin_id,"comment:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"reply","reply",1144328671),"Plugin doesn't have 'comment:write' permission");
} else {
if((((!(typeof content === 'string'))) || (cljs.core.empty_QMARK_(content)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"reply","reply",1144328671),"Not valid");
} else {
return (new Promise((function (resolve,reject){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (p1__62487_SHARP_){
var G__62739 = app.plugins.comments.comment_proxy(plugin_id,file_id,page_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),p1__62487_SHARP_);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__62739) : resolve.call(null,G__62739));
}),reject,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-comment","create-comment",1276859739),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"content","content",15833224),content], null)));
})));

}
}
});
var internal_fn_reply_62635__$1 = internal_fn_reply_62635.bind(obj_62536_this_62539);
return internal_fn_reply_62635__$1;
});
var schema_remove_62645_62842 = null;
var coercer_fn_remove_62643_62843 = (((((!((schema_remove_62645_62842 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_62645_62842))))))?app.common.schema.coercer(schema_remove_62645_62842):null);
var decode_fn_remove_62644_62844 = app.common.json.__GT_clj;
var prop_get_fn_remove_62648_62845 = (function (){
var obj_62536_this_62539 = this;
var internal_fn_remove_62642 = (function (){
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var owner = app.main.data.helpers.lookup_profile.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"owner-id","owner-id",-58940392).cljs$core$IFn$_invoke$arity$1(data));
if((!(app.plugins.register.check_permission(plugin_id,"comment:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"remove","remove",-131428414),"Plugin doesn't have 'comment:write' permission");
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile),owner)){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"remove","remove",-131428414),"Cannot change content from another user's comments");
} else {
return (new Promise((function (resolve){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.delete_comment_thread_on_workspace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null),(function (){
return (resolve.cljs$core$IFn$_invoke$arity$0 ? resolve.cljs$core$IFn$_invoke$arity$0() : resolve.call(null));
})));
})));

}
}
});
var internal_fn_remove_62642__$1 = internal_fn_remove_62642.bind(obj_62536_this_62539);
return internal_fn_remove_62642__$1;
});
Object.defineProperty(obj_62536_target_62540_62813,Symbol.toStringTag,(function (){var obj62741 = ({"enumerable":false,"get":prop_get_fn__62548_62814});
return obj62741;
})());

Object.defineProperty(obj_62536_target_62540_62813,Symbol["for"]("penpot.reify:type"),(function (){var obj62743 = ({"enumerable":false,"get":prop_get_fn__62555_62815});
return obj62743;
})());

Object.defineProperty(obj_62536_target_62540_62813,"$plugin",(function (){var obj62745 = ({"enumerable":false,"get":prop_get_fn_plugin_62562_62816});
return obj62745;
})());

Object.defineProperty(obj_62536_target_62540_62813,"$file",(function (){var obj62747 = ({"enumerable":false,"get":prop_get_fn_file_62569_62817});
return obj62747;
})());

Object.defineProperty(obj_62536_target_62540_62813,"$page",(function (){var obj62749 = ({"enumerable":false,"get":prop_get_fn_page_62576_62818});
return obj62749;
})());

Object.defineProperty(obj_62536_target_62540_62813,"$id",(function (){var obj62751 = ({"enumerable":false,"get":prop_get_fn_id_62583_62819});
return obj62751;
})());

Object.defineProperty(obj_62536_target_62540_62813,"page",(function (){var obj62753 = ({"enumerable":false,"get":prop_get_fn_page_62590_62820});
return obj62753;
})());

Object.defineProperty(obj_62536_target_62540_62813,"seqNumber",(function (){var obj62755 = ({"enumerable":true,"get":prop_get_fn_seqnumber_62597_62821});
return obj62755;
})());

Object.defineProperty(obj_62536_target_62540_62813,"board",(function (){var obj62757 = ({"enumerable":true,"get":prop_get_fn_board_62604_62822});
return obj62757;
})());

Object.defineProperty(obj_62536_target_62540_62813,"owner",(function (){var obj62759 = ({"enumerable":true,"get":prop_get_fn_owner_62611_62823});
return obj62759;
})());

Object.defineProperty(obj_62536_target_62540_62813,"position",(function (){var obj62761 = ({"enumerable":true,"get":prop_get_fn_position_62618_62824,"set":prop_set_fn_position_62619_62828});
return obj62761;
})());

Object.defineProperty(obj_62536_target_62540_62813,"resolved",(function (){var obj62763 = ({"enumerable":true,"get":prop_get_fn_resolved_62626_62829,"set":prop_set_fn_resolved_62627_62833});
return obj62763;
})());

Object.defineProperty(obj_62536_target_62540_62813,"findComments",(function (){var obj62765 = ({"enumerable":false,"get":prop_get_fn_findcomments_62634_62837});
return obj62765;
})());

Object.defineProperty(obj_62536_target_62540_62813,"reply",(function (){var obj62767 = ({"enumerable":false,"get":prop_get_fn_reply_62641_62841});
return obj62767;
})());

Object.defineProperty(obj_62536_target_62540_62813,"remove",(function (){var obj62769 = ({"enumerable":false,"get":prop_get_fn_remove_62648_62845});
return obj62769;
})());


return obj_62536;
});

//# sourceMappingURL=app.plugins.comments.js.map
