import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.math.js";
import "./app.common.time.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.comments.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.comments.js";
import "./app.main.data.workspace.viewport.js";
import "./app.main.data.workspace.zoom.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cljs.math.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.comments');
app.main.ui.comments.ref_COLON_comments_local_options = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),app.main.refs.comments_local);
app.main.ui.comments.mentions_context = rumext.v2.create_context(null);
app.main.ui.comments.r_mentions_split = /@\[[^\]]*\]\([^\)]*\)/;
app.main.ui.comments.r_mentions = /@\[([^\]]*)\]\(([^\)]*)\)/;
app.main.ui.comments.zero_width_space = "\u200B";
/**
 * Parse a comment into its elements (texts and mentions)
 */
app.main.ui.comments.parse_comment = (function app$main$ui$comments$parse_comment(comment){
return app.common.data.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51585_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"content","content",15833224)],[new cljs.core.Keyword(null,"text","text",-1790561697),p1__51585_SHARP_]);
}),cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(comment,app.main.ui.comments.r_mentions_split)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51590){
var vec__51591 = p__51590;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51591,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51591,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51591,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mention","mention",-1057367181),new cljs.core.Keyword(null,"content","content",15833224),user,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
}),cljs.core.re_seq(app.main.ui.comments.r_mentions,comment)));
});
/**
 * Parse the nodes to format a comment
 */
app.main.ui.comments.parse_nodes = (function app$main$ui$comments$parse_nodes(node){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node__$1){
if(cljs.core.truth_((function (){var and__5023__auto__ = (node__$1 instanceof HTMLElement);
if(and__5023__auto__){
return app.util.dom.get_data(node__$1,"user-id");
} else {
return and__5023__auto__;
}
})())){
return ""+"@["+(node__$1.textContent ?? "")+"]("+(app.util.dom.get_data(node__$1,"user-id") ?? "")+")";
} else {
return node__$1.textContent;

}
}),app.util.dom.get_children(node)));
});
/**
 * Creates a text-only node
 */
app.main.ui.comments.create_text_node = (function app$main$ui$comments$create_text_node(var_args){
var G__51609 = arguments.length;
switch (G__51609) {
case 0:
return app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$1("");
}));

(app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$1 = (function (text){
return app.util.dom.set_html_BANG_(app.util.dom.set_data_BANG_(app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("span"),"type","text"),((cljs.core.empty_QMARK_(text))?app.main.ui.comments.zero_width_space:text));
}));

(app.main.ui.comments.create_text_node.cljs$lang$maxFixedArity = 1);

/**
 * Creates a mention node
 */
app.main.ui.comments.create_mention_node = (function app$main$ui$comments$create_mention_node(id,fullname){
return app.util.object.set_BANG_(app.util.dom.set_data_BANG_(app.util.dom.set_data_BANG_(app.util.dom.set_data_BANG_(app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("span"),"type","mention"),"user-id",""+(id ?? "")),"fullname",fullname),"textContent",fullname);
});
/**
 * Retrieves the text node and the offset that the cursor is positioned on
 */
app.main.ui.comments.current_text_node_STAR_ = (function app$main$ui$comments$current_text_node_STAR_(node,anchor_node){
if(cljs.core.truth_(node.contains(anchor_node))){
var span_node = (((anchor_node instanceof Text))?app.util.dom.get_parent(anchor_node):anchor_node);
var container = app.util.dom.get_parent(span_node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,container)){
return span_node;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Retrieves the text node and the offset that the cursor is positioned on
 */
app.main.ui.comments.current_text_node = (function app$main$ui$comments$current_text_node(node){
if((!((node == null)))){
} else {
throw (new Error(["Assert failed: ","expected valid node","\n","(some? node)"].join('')));
}

var temp__5825__auto__ = app.util.webapi.get_selection();
if(cljs.core.truth_(temp__5825__auto__)){
var selection = temp__5825__auto__;
var range = app.util.webapi.get_range(selection,(0));
var anchor_node = app.util.webapi.range_start_container(range);
var offset = app.util.webapi.range_start_offset(range);
var span_node = app.main.ui.comments.current_text_node_STAR_(node,anchor_node);
if(cljs.core.truth_(span_node)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [span_node,offset], null);
} else {
return null;
}
} else {
return null;
}
});
app.main.ui.comments.absolute_offset = (function app$main$ui$comments$absolute_offset(node,child,offset){
var nodes = cljs.core.seq(app.util.dom.get_children(node));
var acc = (0);
while(true){
var temp__5823__auto__ = cljs.core.first(nodes);
if(cljs.core.truth_(temp__5823__auto__)){
var head = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,child)){
return (acc + offset);
} else {
var G__52220 = cljs.core.rest(nodes);
var G__52221 = (acc + head.textContent.length);
nodes = G__52220;
acc = G__52221;
continue;
}
} else {
return null;
}
break;
}
});
app.main.ui.comments.get_prev_node = (function app$main$ui$comments$get_prev_node(parent,node){
return cljs.core.second(app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p__51649){
var vec__51650 = p__51649;
var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51650,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51650,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,it);
}),app.common.data.with_prev(app.util.dom.get_children(parent))));
});
app.main.ui.comments.blank_content_QMARK_ = (function app$main$ui$comments$blank_content_QMARK_(content){
var content__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(content);
return ((cuerdas.core.blank_QMARK_(content__$1)) || (((cuerdas.core.empty_QMARK_(content__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(content__$1),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(content__$1),app.main.ui.comments.zero_width_space)))))));
});
app.main.ui.comments.comment_content_STAR_ = (function app$main$ui$comments$comment_content_STAR_(props_51656){
var content = props_51656.content;
var comment_elements = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(content)],(function (){
return app.main.ui.comments.parse_comment(content);
}));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__51668){
var vec__51669 = p__51668;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(0),null);
var map__51672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51669,(1),null);
var map__51672__$1 = cljs.core.__destructure_map(map__51672);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51672__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var content__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51672__$1,new cljs.core.Keyword(null,"content","content",15833224));
out_arr__35152__auto__.push((function (){var G__51673 = type;
switch (G__51673) {
default:
return rumext.v2.jsx("span",{'className':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"text","text",-1790561697)))?"main_ui_comments__comment-text":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"mention","mention",-1057367181)))?"main_ui_comments__comment-mention":""),'children':content__$1},idx);

}
})());

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(comment_elements));
});

(app.main.ui.comments.comment_content_STAR_.displayName = "comment-content*");

app.main.ui.comments.comment_input_STAR_ = (function app$main$ui$comments$comment_input_STAR_(props_51685){
var on_ctrl_enter = props_51685.onCtrlEnter;
var on_change = props_51685.onChange;
var placeholder = props_51685.placeholder;
var on_focus = props_51685.onFocus;
var value = props_51685.value;
var on_esc = props_51685.onEsc;
var on_blur = props_51685.onBlur;
var autofocus = props_51685.autofocus;
var value__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(value,"");
var prev_value = app.main.ui.hooks.use_previous(value__$1);
var local_ref = rumext.v2.use_ref(null);
var mentions_s = rumext.v2.use_ctx(app.main.ui.comments.mentions_context);
var cur_mention = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var prev_selection_ref = rumext.v2.use_ref();
var init_input = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (node){
rumext.v2.set_ref_val_BANG_(local_ref,node);

if(cljs.core.truth_(node)){
var seq__51700 = cljs.core.seq(app.main.ui.comments.parse_comment(value__$1));
var chunk__51701 = null;
var count__51702 = (0);
var i__51703 = (0);
while(true){
if((i__51703 < count__51702)){
var map__51714 = chunk__51701.cljs$core$IIndexed$_nth$arity$2(null,i__51703);
var map__51714__$1 = cljs.core.__destructure_map(map__51714);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51714__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51714__$1,new cljs.core.Keyword(null,"content","content",15833224));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51714__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__51715_52230 = type;
var G__51715_52231__$1 = (((G__51715_52230 instanceof cljs.core.Keyword))?G__51715_52230.fqn:null);
switch (G__51715_52231__$1) {
case "text":
app.util.dom.append_child_BANG_(node,app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$1(content));

break;
case "mention":
app.util.dom.append_child_BANG_(node,app.main.ui.comments.create_mention_node(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),content));

break;
default:

}


var G__52233 = seq__51700;
var G__52234 = chunk__51701;
var G__52235 = count__51702;
var G__52236 = (i__51703 + (1));
seq__51700 = G__52233;
chunk__51701 = G__52234;
count__51702 = G__52235;
i__51703 = G__52236;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51700);
if(temp__5825__auto__){
var seq__51700__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51700__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__51700__$1);
var G__52237 = cljs.core.chunk_rest(seq__51700__$1);
var G__52238 = c__5548__auto__;
var G__52239 = cljs.core.count(c__5548__auto__);
var G__52240 = (0);
seq__51700 = G__52237;
chunk__51701 = G__52238;
count__51702 = G__52239;
i__51703 = G__52240;
continue;
} else {
var map__51717 = cljs.core.first(seq__51700__$1);
var map__51717__$1 = cljs.core.__destructure_map(map__51717);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51717__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51717__$1,new cljs.core.Keyword(null,"content","content",15833224));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51717__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__51718_52241 = type;
var G__51718_52242__$1 = (((G__51718_52241 instanceof cljs.core.Keyword))?G__51718_52241.fqn:null);
switch (G__51718_52242__$1) {
case "text":
app.util.dom.append_child_BANG_(node,app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$1(content));

break;
case "mention":
app.util.dom.append_child_BANG_(node,app.main.ui.comments.create_mention_node(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),content));

break;
default:

}


var G__52244 = cljs.core.next(seq__51700__$1);
var G__52245 = null;
var G__52246 = (0);
var G__52247 = (0);
seq__51700 = G__52244;
chunk__51701 = G__52245;
count__51702 = G__52246;
i__51703 = G__52247;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
var handle_input = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (){
var node = rumext.v2.ref_val(local_ref);
var children = app.util.dom.get_children(node);
var seq__51722_52248 = cljs.core.seq(children);
var chunk__51723_52249 = null;
var count__51724_52250 = (0);
var i__51725_52251 = (0);
while(true){
if((i__51725_52251 < count__51724_52250)){
var child_node_52252 = chunk__51723_52249.cljs$core$IIndexed$_nth$arity$2(null,i__51725_52251);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(child_node_52252.tagName,"SPAN")){
child_node_52252.remove();
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(child_node_52252,"type"),"text")) && (cljs.core.empty_QMARK_(app.util.dom.get_text(child_node_52252))))){
app.util.dom.set_html_BANG_(child_node_52252,app.main.ui.comments.zero_width_space);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(child_node_52252,"type"),"mention")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(child_node_52252,"fullname"),app.util.dom.get_text(child_node_52252))))){
child_node_52252.remove();
} else {
}


var G__52253 = seq__51722_52248;
var G__52254 = chunk__51723_52249;
var G__52255 = count__51724_52250;
var G__52256 = (i__51725_52251 + (1));
seq__51722_52248 = G__52253;
chunk__51723_52249 = G__52254;
count__51724_52250 = G__52255;
i__51725_52251 = G__52256;
continue;
} else {
var temp__5825__auto___52257 = cljs.core.seq(seq__51722_52248);
if(temp__5825__auto___52257){
var seq__51722_52258__$1 = temp__5825__auto___52257;
if(cljs.core.chunked_seq_QMARK_(seq__51722_52258__$1)){
var c__5548__auto___52259 = cljs.core.chunk_first(seq__51722_52258__$1);
var G__52260 = cljs.core.chunk_rest(seq__51722_52258__$1);
var G__52261 = c__5548__auto___52259;
var G__52262 = cljs.core.count(c__5548__auto___52259);
var G__52263 = (0);
seq__51722_52248 = G__52260;
chunk__51723_52249 = G__52261;
count__51724_52250 = G__52262;
i__51725_52251 = G__52263;
continue;
} else {
var child_node_52264 = cljs.core.first(seq__51722_52258__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(child_node_52264.tagName,"SPAN")){
child_node_52264.remove();
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(child_node_52264,"type"),"text")) && (cljs.core.empty_QMARK_(app.util.dom.get_text(child_node_52264))))){
app.util.dom.set_html_BANG_(child_node_52264,app.main.ui.comments.zero_width_space);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(child_node_52264,"type"),"mention")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(child_node_52264,"fullname"),app.util.dom.get_text(child_node_52264))))){
child_node_52264.remove();
} else {
}


var G__52265 = cljs.core.next(seq__51722_52258__$1);
var G__52266 = null;
var G__52267 = (0);
var G__52268 = (0);
seq__51722_52248 = G__52265;
chunk__51723_52249 = G__52266;
count__51724_52250 = G__52267;
i__51725_52251 = G__52268;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),children.length)){
app.util.dom.append_child_BANG_(node,app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$0());
} else {
}

var new_input = app.main.ui.comments.parse_nodes(node);
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_input) : on_change.call(null,new_input));
} else {
return null;
}
}));
var handle_select = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = rumext.v2.ref_val(local_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var temp__5825__auto____$1 = app.util.webapi.get_selection();
if(cljs.core.truth_(temp__5825__auto____$1)){
var selection = temp__5825__auto____$1;
var range = app.util.webapi.get_range(selection,(0));
var anchor_node = app.util.webapi.range_start_container(range);
var offset = app.util.webapi.range_start_offset(range);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,anchor_node);
if(and__5023__auto__){
return range.collapsed;
} else {
return and__5023__auto__;
}
})())){
app.util.webapi.set_cursor_after_BANG_(anchor_node);
} else {
}

var temp__5825__auto____$2 = app.main.ui.comments.current_text_node_STAR_(node,anchor_node);
if(cljs.core.truth_(temp__5825__auto____$2)){
var span_node = temp__5825__auto____$2;
var vec__51786 = rumext.v2.ref_val(prev_selection_ref);
var prev_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51786,(0),null);
var prev_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51786,(1),null);
var node_text = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(app.util.dom.get_text(span_node),(0),offset);
var current_at_symbol = cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(node_text,(0),offset),"@");
var mention_text = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(node_text,current_at_symbol);
var at_symbol_inside_word_QMARK_ = (((current_at_symbol > (0))) && (cuerdas.core.word_QMARK_(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(node_text,(current_at_symbol - (1)),current_at_symbol))));
rumext.v2.set_ref_val_BANG_(prev_selection_ref,[span_node,offset]);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(span_node,"type"),"mention")){
var from_offset_52269 = app.main.ui.comments.absolute_offset(node,prev_span,prev_offset);
var to_offset_52270 = app.main.ui.comments.absolute_offset(node,span_node,offset);
var vec__51802_52271 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51808){
var vec__51809 = p__51808;
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51809,(0),null);
var __52272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51809,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51809,(2),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elem,span_node);
}),app.common.data.with_prev_next(app.util.dom.seq_nodes(node))));
var __52272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51802_52271,(0),null);
var prev_52273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51802_52271,(1),null);
var next_52274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51802_52271,(2),null);
if((from_offset_52269 > to_offset_52270)){
app.util.webapi.set_cursor_after_BANG_(prev_52273);
} else {
app.util.webapi.set_cursor_before_BANG_(next_52274);
}
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = (!(at_symbol_inside_word_QMARK_));
if(and__5023__auto__){
return cljs.core.re_matches(/@\w*/,mention_text);
} else {
return and__5023__auto__;
}
})())){
cljs.core.reset_BANG_(cur_mention,mention_text);

mentions_s.next(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"display-mentions","display-mentions",-424302104)], null));

var mention = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(mention_text,(1));
if(app.common.data.not_empty_QMARK_(mention)){
return mentions_s.next(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"filter-mentions","filter-mentions",-1571090553),new cljs.core.Keyword(null,"data","data",-232669377),mention], null));
} else {
return null;
}
} else {
cljs.core.reset_BANG_(cur_mention,null);

return mentions_s.next(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hide-mentions","hide-mentions",1980291578)], null));
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
var handle_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.set_css_property_BANG_(rumext.v2.ref_val(local_ref),"--placeholder","");

if(cljs.core.truth_(on_focus)){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(event) : on_focus.call(null,event));
} else {
return null;
}
}));
var handle_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value__$1)],(function (event){
if(cljs.core.empty_QMARK_(value__$1)){
var node_52275 = rumext.v2.ref_val(local_ref);
app.util.dom.set_css_property_BANG_(node_52275,"--placeholder",""+"\""+(placeholder ?? "")+"\"");
} else {
}

if(cljs.core.truth_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(event) : on_blur.call(null,event));
} else {
return null;
}
}));
var handle_insert_mention = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (data){
var temp__5825__auto__ = rumext.v2.ref_val(local_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var temp__5825__auto____$1 = app.main.ui.comments.current_text_node(node);
if(cljs.core.truth_(temp__5825__auto____$1)){
var vec__51829 = temp__5825__auto____$1;
var span_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51829,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51829,(1),null);
var node_text = app.util.dom.get_text(span_node);
var current_at_symbol = (function (){var or__5025__auto__ = cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(node_text,(0),offset),"@");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.comments.absolute_offset(node,span_node,offset);
}
})();
var mention = cljs.core.re_find(/@\w*/,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(node_text,current_at_symbol));
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(node_text,(0),current_at_symbol);
var suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(node_text,(current_at_symbol + cljs.core.count(mention)));
var mention_span = app.main.ui.comments.create_mention_node(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(data)));
var after_span = app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$1(""+" "+(suffix ?? ""));
var sel = app.util.webapi.get_selection();
app.util.dom.set_html_BANG_(span_node,((cljs.core.empty_QMARK_(prefix))?app.main.ui.comments.zero_width_space:prefix));

app.util.dom.insert_after_BANG_(node,span_node,mention_span);

app.util.dom.insert_after_BANG_(node,mention_span,after_span);

app.util.webapi.set_cursor_after_BANG_(after_span);

app.util.webapi.collapse_end_BANG_(sel);

if(cljs.core.fn_QMARK_(on_change)){
var G__51836 = app.main.ui.comments.parse_nodes(node);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__51836) : on_change.call(null,G__51836));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
var handle_insert_at_symbol = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = rumext.v2.ref_val(local_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var temp__5825__auto____$1 = app.main.ui.comments.current_text_node(node);
if(cljs.core.truth_(temp__5825__auto____$1)){
var vec__51837 = temp__5825__auto____$1;
var span_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51837,(0),null);
var node_text = app.util.dom.get_text(span_node);
var at_symbol = ((app.main.ui.comments.blank_content_QMARK_(node_text))?"@":" @");
app.util.dom.set_html_BANG_(span_node,""+(node_text ?? "")+(at_symbol ?? ""));

return app.util.webapi.set_cursor_after_BANG_(span_node);
} else {
return null;
}
} else {
return null;
}
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_esc),rumext.v2.adapt(on_ctrl_enter),rumext.v2.adapt(handle_select),rumext.v2.adapt(handle_input)],(function (event){
(handle_select.cljs$core$IFn$_invoke$arity$1 ? handle_select.cljs$core$IFn$_invoke$arity$1(event) : handle_select.call(null,event));

var temp__5825__auto__ = rumext.v2.ref_val(local_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var temp__5825__auto____$1 = app.main.ui.comments.current_text_node(node);
if(cljs.core.truth_(temp__5825__auto____$1)){
var vec__51845 = temp__5825__auto____$1;
var span_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51845,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51845,(1),null);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(cur_mention);
if(cljs.core.truth_(and__5023__auto__)){
return app.util.keyboard.enter_QMARK_(event);
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return mentions_s.next(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"insert-selected-mention","insert-selected-mention",-711779812)], null));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(cur_mention);
if(cljs.core.truth_(and__5023__auto__)){
return app.util.keyboard.down_arrow_QMARK_(event);
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return mentions_s.next(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"insert-next-mention","insert-next-mention",-1023430798)], null));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(cur_mention);
if(cljs.core.truth_(and__5023__auto__)){
return app.util.keyboard.up_arrow_QMARK_(event);
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return mentions_s.next(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"insert-prev-mention","insert-prev-mention",-933004389)], null));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(cur_mention);
if(cljs.core.truth_(and__5023__auto__)){
return app.util.keyboard.esc_QMARK_(event);
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return mentions_s.next(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hide-mentions","hide-mentions",1980291578)], null));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = app.util.keyboard.esc_QMARK_(event);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.fn_QMARK_(on_esc);
} else {
return and__5023__auto__;
}
})())){
return (on_esc.cljs$core$IFn$_invoke$arity$1 ? on_esc.cljs$core$IFn$_invoke$arity$1(event) : on_esc.call(null,event));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = app.util.keyboard.mod_QMARK_(event);
if(and__5023__auto__){
var and__5023__auto____$1 = app.util.keyboard.enter_QMARK_(event);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.fn_QMARK_(on_ctrl_enter);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return (on_ctrl_enter.cljs$core$IFn$_invoke$arity$1 ? on_ctrl_enter.cljs$core$IFn$_invoke$arity$1(event) : on_ctrl_enter.call(null,event));
} else {
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
var sel = app.util.webapi.get_selection();
var range = sel.getRangeAt((0));
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var vec__51857 = app.main.ui.comments.current_text_node(node);
var span_node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51857,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51857,(1),null);
range.deleteContents();

(handle_input.cljs$core$IFn$_invoke$arity$0 ? handle_input.cljs$core$IFn$_invoke$arity$0() : handle_input.call(null));

if(cljs.core.truth_(span_node__$1)){
var txt = span_node__$1.textContent;
app.util.dom.set_html_BANG_(span_node__$1,""+(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(txt,(0),offset__$1) ?? "")+"\n"+(app.main.ui.comments.zero_width_space ?? "")+(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(txt,offset__$1) ?? ""));

app.util.webapi.set_cursor_BANG_.cljs$core$IFn$_invoke$arity$2(span_node__$1,(offset__$1 + (1)));

return (handle_input.cljs$core$IFn$_invoke$arity$0 ? handle_input.cljs$core$IFn$_invoke$arity$0() : handle_input.call(null));
} else {
return null;
}
} else {
if(cljs.core.truth_(app.util.keyboard.backspace_QMARK_(event))){
var prev_node = app.main.ui.comments.get_prev_node(node,span_node);
if((((!((prev_node == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("mention",app.util.dom.get_data(prev_node,"type"))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,(1))))))){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return prev_node.remove();
} else {
return null;
}
} else {
return null;
}
}
}
}
}
}
}
}
} else {
return null;
}
} else {
return null;
}
}));
rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(autofocus)],(function (){
if(autofocus){
return app.util.dom.focus_BANG_(rumext.v2.ref_val(local_ref));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(handle_select)],(function (){
var handle_select_STAR_ = handle_select;
document.addEventListener("selectionchange",handle_select_STAR_);

return (function (){
return document.removeEventListener("selectionchange",handle_select_STAR_);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
if(cljs.core.truth_(mentions_s)){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__51865){
var map__51866 = p__51865;
var map__51866__$1 = cljs.core.__destructure_map(map__51866);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51866__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51866__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__51868 = type;
var G__51868__$1 = (((G__51868 instanceof cljs.core.Keyword))?G__51868.fqn:null);
switch (G__51868__$1) {
case "insert-mention":
return (handle_insert_mention.cljs$core$IFn$_invoke$arity$1 ? handle_insert_mention.cljs$core$IFn$_invoke$arity$1(data) : handle_insert_mention.call(null,data));

break;
case "insert-at-symbol":
return (handle_insert_at_symbol.cljs$core$IFn$_invoke$arity$0 ? handle_insert_at_symbol.cljs$core$IFn$_invoke$arity$0() : handle_insert_at_symbol.call(null));

break;
default:
return null;

}
}),mentions_s);
} else {
return null;
}
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2(null,(function (){
var temp__5825__auto__ = rumext.v2.ref_val(local_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
(node.style.height = "0");

return (node.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((2) + node.scrollHeight)),"px"].join(''));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value__$1),rumext.v2.adapt(prev_value)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(local_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
if(((app.common.data.not_empty_QMARK_(prev_value)) && (cljs.core.empty_QMARK_(value__$1)))){
app.util.dom.set_html_BANG_(node,"");

app.util.dom.append_child_BANG_(node,app.main.ui.comments.create_text_node.cljs$core$IFn$_invoke$arity$0());

app.util.dom.set_css_property_BANG_(node,"--placeholder","");

return app.util.dom.focus_BANG_(node);
} else {
if((((!((node == null)))) && (((cljs.core.empty_QMARK_(value__$1)) && (cljs.core.not(app.util.dom.focus_QMARK_(node))))))){
return app.util.dom.set_css_property_BANG_(node,"--placeholder",""+"\""+(placeholder ?? "")+"\"");
} else {
if((!((node == null)))){
return app.util.dom.set_css_property_BANG_(node,"--placeholder","");
} else {
return null;
}
}
}
} else {
return null;
}
}));

return rumext.v2.jsx("div",{'role':"textbox",'onInput':handle_input,'className':"main_ui_comments__comment-input",'suppressContentEditableWarning':true,'onFocus':handle_focus,'onBlur':handle_blur,'ref':init_input,'onKeyDown':handle_key_down,'contentEditable':"true"});
});

(app.main.ui.comments.comment_input_STAR_.displayName = "comment-input*");

app.main.ui.comments.mentions_panel_STAR_ = (function app$main$ui$comments$mentions_panel_STAR_(props_51915){
var mentions_s = rumext.v2.use_ctx(app.main.ui.comments.mentions_context);
var team = rumext.v2.deref(app.main.refs.team);
var members = new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(team);
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),false,new cljs.core.Keyword(null,"mention-filter","mention-filter",1368401887),"",new cljs.core.Keyword(null,"selected","selected",574897764),(0)], null);
}));
var map__51921 = cljs.core.deref(state_STAR_);
var map__51921__$1 = cljs.core.__destructure_map(map__51921);
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51921__$1,new cljs.core.Keyword(null,"display","display",242065432));
var mention_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51921__$1,new cljs.core.Keyword(null,"mention-filter","mention-filter",1368401887));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51921__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var mentions_users = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(mention_filter),rumext.v2.adapt(members)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51927){
var map__51928 = p__51927;
var map__51928__$1 = cljs.core.__destructure_map(map__51928);
var fullname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51928__$1,new cljs.core.Keyword(null,"fullname","fullname",1638772587));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51928__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var or__5025__auto__ = cljs.core.not(mention_filter);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.empty_QMARK_(mention_filter);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cuerdas.core.includes_QMARK_(cuerdas.core.lower(fullname),cuerdas.core.lower(mention_filter));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(email),cuerdas.core.lower(mention_filter));
}
}
}
}),members)));
}));
var selected__$1 = app.common.math.clamp(selected,(0),(cljs.core.count(mentions_users) - (1)));
var handle_click_mention = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var id = app.common.uuid.parse(app.util.dom.get_data(app.util.dom.get_current_target(event),"user-id"));
var user = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__51905_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51905_SHARP_),id);
}),members);
return mentions_s.next(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"insert-mention","insert-mention",-490505880),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null)], null));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(mentions_users),rumext.v2.adapt(selected__$1)],(function (){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__51929){
var map__51930 = p__51929;
var map__51930__$1 = cljs.core.__destructure_map(map__51930);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51930__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51930__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__51931 = type;
var G__51931__$1 = (((G__51931 instanceof cljs.core.Keyword))?G__51931.fqn:null);
switch (G__51931__$1) {
case "display-mentions":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),true);

break;
case "hide-mentions":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mention-filter","mention-filter",1368401887),""], 0));

break;
case "filter-mentions":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"mention-filter","mention-filter",1368401887),data);

break;
case "insert-selected-mention":
return mentions_s.next(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"insert-mention","insert-mention",-490505880),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.get.cljs$core$IFn$_invoke$arity$2(mentions_users,selected__$1)], null)], null));

break;
case "insert-next-mention":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"selected","selected",574897764),(function (p1__51910_SHARP_){
return app.common.math.clamp((p1__51910_SHARP_ + (1)),(0),(cljs.core.count(mentions_users) - (1)));
}));

break;
case "insert-prev-mention":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"selected","selected",574897764),(function (p1__51912_SHARP_){
return app.common.math.clamp((p1__51912_SHARP_ - (1)),(0),(cljs.core.count(mentions_users) - (1)));
}));

break;
default:
return null;

}
}),mentions_s);
return (function (){
return beicon.v2.core.dispose_BANG_(sub);
});
}));

if(display){
return rumext.v2.jsx("div",{'className':"main_ui_comments__comments-mentions-choice",'children':((cljs.core.empty_QMARK_(mentions_users))?rumext.v2.jsx("div",{'className':"main_ui_comments__comments-mentions-empty",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("comments.mentions.not-found",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mention_filter], 0))}):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__51936){
var vec__51938 = p__51936;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51938,(0),null);
var map__51941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51938,(1),null);
var map__51941__$1 = cljs.core.__destructure_map(map__51941);
var user = map__51941__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fullname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941__$1,new cljs.core.Keyword(null,"fullname","fullname",1638772587));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941__$1,new cljs.core.Keyword(null,"email","email",1415816706));
out_arr__35152__auto__.push(rumext.v2.jsxs("div",{'onPointerDown':handle_click_mention,'data-user-id':""+(id ?? ""),'className':"main_ui_comments__comments-mentions-entry"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected__$1,idx))?"main_ui_comments__is-selected":""),'children':[rumext.v2.jsx("img",{'src':app.config.resolve_profile_photo_url(user),'className':"main_ui_comments__comments-mentions-avatar"}),rumext.v2.jsx("div",{'className':"main_ui_comments__comments-mentions-name",'children':fullname}),rumext.v2.jsx("div",{'className':"main_ui_comments__comments-mentions-email",'children':email})]},id));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(mentions_users)))});
} else {
return null;
}
});

(app.main.ui.comments.mentions_panel_STAR_.displayName = "mentions-panel*");

app.main.ui.comments.mentions_button_STAR_ = (function app$main$ui$comments$mentions_button_STAR_(props_51944){
var mentions_s = rumext.v2.use_ctx(app.main.ui.comments.mentions_context);
var display_mentions_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var handle_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(display_mentions_STAR_))],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

if(cljs.core.truth_(cljs.core.deref(display_mentions_STAR_))){
return mentions_s.next(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hide-mentions","hide-mentions",1980291578)], null));
} else {
return mentions_s.next(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"insert-at-symbol","insert-at-symbol",974397941)], null));
}
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(display_mentions_STAR_))],(function (event){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.enter_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.space_QMARK_(event);
}
})())){
return (handle_pointer_down.cljs$core$IFn$_invoke$arity$1 ? handle_pointer_down.cljs$core$IFn$_invoke$arity$1(event) : handle_pointer_down.call(null,event));
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__51956){
var map__51957 = p__51956;
var map__51957__$1 = cljs.core.__destructure_map(map__51957);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51957__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var G__51958 = type;
var G__51958__$1 = (((G__51958 instanceof cljs.core.Keyword))?G__51958.fqn:null);
switch (G__51958__$1) {
case "display-mentions":
return cljs.core.reset_BANG_(display_mentions_STAR_,true);

break;
case "hide-mentions":
return cljs.core.reset_BANG_(display_mentions_STAR_,false);

break;
default:
return null;

}
}),mentions_s);
return (function (){
return beicon.v2.core.dispose_BANG_(sub);
});
}));

return rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.mention"),'onPointerDown':handle_pointer_down,'onKeyDown':handle_key_down,'iconClass':"main_ui_comments__open-mentions-button"+" "+(cljs.core.truth_(cljs.core.deref(display_mentions_STAR_))?"main_ui_comments__is-toggled":""),'icon':app.main.ui.ds.foundations.assets.icon.at});
});

(app.main.ui.comments.mentions_button_STAR_.displayName = "mentions-button*");

app.main.ui.comments.schema_COLON_comment_avatar = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"read","unread","solved"], null)], null)], null)], null);
app.main.ui.comments.comment_avatar_STAR__validator = rumext.v2.validation.validator(app.main.ui.comments.schema_COLON_comment_avatar);

app.main.ui.comments.comment_avatar_STAR_ = (function app$main$ui$comments$comment_avatar_STAR_(props_51964){
// ===== start props checking =====;

var res__35513__auto___52318 = app.main.ui.comments.comment_avatar_STAR__validator(props_51964);
if((!((res__35513__auto___52318 == null)))){
var items__35514__auto___52320 = cljs.core.reduce_kv((function (result__35515__auto__,k__35516__auto__,v__35517__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__35515__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__35516__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__35517__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__35513__auto___52318);
var msg__35518__auto___52321 = ["invalid props on component comment-avatar*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__35514__auto___52320),"\n"].join('');
throw (new Error(msg__35518__auto___52321));
} else {
}

// ===== end props checking =====;

var children = undefined;
var variant = undefined;
var class$ = undefined;
var image = undefined;
var props = undefined;
var {"image": image, "variant": variant, "className": class$, "children": children, ...props} = props_51964;

var variant__$1 = (function (){var or__5025__auto__ = variant;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "read";
}
})();
var class$__$1 = ""+(class$ ?? "")+" "+("main_ui_comments__avatar"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"read"))?"main_ui_comments__avatar-read":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"unread"))?"main_ui_comments__avatar-unread":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"solved"))?"main_ui_comments__avatar-solved":"") ?? "");
var props__$1 = {...props, 'className':class$__$1};
return rumext.v2.create_element("div",props__$1,(cljs.core.truth_(image)?rumext.v2.jsx("img",{'src':image,'className':"main_ui_comments__avatar-image"}):rumext.v2.jsx("div",{'className':"main_ui_comments__avatar-text",'children':children})),rumext.v2.jsx("div",{'className':"main_ui_comments__avatar-mask"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"solved"))?"main_ui_comments__avatar-darken":"")}));
});

(app.main.ui.comments.comment_avatar_STAR_.displayName = "comment-avatar*");

app.main.ui.comments.comment_info_STAR_ = (function app$main$ui$comments$comment_info_STAR_(props_51990){
var profile = props_51990.profile;
var item = props_51990.item;
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_comments__author",'children':[rumext.v2.jsx(app.main.ui.comments.comment_avatar_STAR_,{'image':app.config.resolve_profile_photo_url(profile),'className':"main_ui_comments__avatar-lg",'variant':(cljs.core.truth_(new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551).cljs$core$IFn$_invoke$arity$1(item))?"solved":(((new cljs.core.Keyword(null,"count-unread-comments","count-unread-comments",1085002472).cljs$core$IFn$_invoke$arity$1(item) > (0)))?"unread":"read"
))}),rumext.v2.jsxs("div",{'className':"main_ui_comments__author-identity",'children':[rumext.v2.jsx("div",{'className':"main_ui_comments__author-fullname",'children':new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(profile)}),rumext.v2.jsx("div",{'className':"main_ui_comments__author-timeago",'children':app.common.time.timeago(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(item))})]})]}),rumext.v2.jsx("div",{'className':"main_ui_comments__item",'children':rumext.v2.jsx(app.main.ui.comments.comment_content_STAR_,{'content':new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(item)})}),rumext.v2.jsx("div",{'className':"main_ui_comments__replies",'children':(function (){var total_comments = new cljs.core.Keyword(null,"count-comments","count-comments",2017472395).cljs$core$IFn$_invoke$arity$1(item);
var unread_comments = new cljs.core.Keyword(null,"count-unread-comments","count-unread-comments",1085002472).cljs$core$IFn$_invoke$arity$1(item);
var total_replies = (total_comments - (1));
var unread_replies = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unread_comments,total_comments))?(unread_comments - (1)):unread_comments);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((total_replies > (0)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_replies,(1)))?rumext.v2.jsx("span",{'className':"main_ui_comments__replies-total",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_replies)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.reply"))].join('')}):rumext.v2.jsx("span",{'className':"main_ui_comments__replies-total",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_replies)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.replies"))].join('')})):null),(((((total_replies > (0))) && ((unread_replies > (0)))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unread_replies,(1)))?rumext.v2.jsx("span",{'className':"main_ui_comments__replies-unread",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(unread_replies)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.reply.new"))].join('')}):rumext.v2.jsx("span",{'className':"main_ui_comments__replies-unread",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(unread_replies)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.replies.new"))].join('')})):null)]});
})()})]});
});

(app.main.ui.comments.comment_info_STAR_.displayName = "comment-info*");

app.main.ui.comments.comment_form_buttons_STAR_ = (function app$main$ui$comments$comment_form_buttons_STAR_(props_52005){
var on_cancel = props_52005.onCancel;
var is_disabled = props_52005.isDisabled;
var on_submit = props_52005.onSubmit;
var handle_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_cancel)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return null;
}
}));
var handle_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_submit)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_submit.cljs$core$IFn$_invoke$arity$0 ? on_submit.cljs$core$IFn$_invoke$arity$0() : on_submit.call(null));
} else {
return null;
}
}));
return rumext.v2.jsxs("div",{'className':"main_ui_comments__form-buttons-wrapper",'children':[rumext.v2.jsx(app.main.ui.comments.mentions_button_STAR_,{}),(((!((on_cancel == null))))?rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"ghost",'type':"button",'onKeyDown':handle_cancel,'onClick':on_cancel,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-cancel")}):null),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"button",'onKeyDown':handle_submit,'onClick':on_submit,'disabled':is_disabled,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.post")})]});
});

(app.main.ui.comments.comment_form_buttons_STAR_.displayName = "comment-form-buttons*");

app.main.ui.comments.exceeds_length_QMARK_ = (function app$main$ui$comments$exceeds_length_QMARK_(content){
return (cljs.core.count(content) > (750));
});
app.main.ui.comments.comment_reply_form_STAR_ = (function app$main$ui$comments$comment_reply_form_STAR_(props_52032){
var on_submit = props_52032.onSubmit;
var content = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var disabled_QMARK_ = ((app.main.ui.comments.blank_content_QMARK_(cljs.core.deref(content))) || (app.main.ui.comments.exceeds_length_QMARK_(cljs.core.deref(content))));
var on_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__52029_SHARP_){
return cljs.core.reset_BANG_(content,p1__52029_SHARP_);
}));
var on_submit_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(content))],(function (){
var G__52053_52326 = cljs.core.deref(content);
(on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(G__52053_52326) : on_submit.call(null,G__52053_52326));

return cljs.core.reset_BANG_(content,"");
}));
return rumext.v2.jsxs("div",{'className':"main_ui_comments__form",'children':[rumext.v2.jsx(app.main.ui.comments.comment_input_STAR_,{'value':cljs.core.deref(content),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.reply.thread"),'autofocus':true,'onCtrlEnter':on_submit_STAR_,'onChange':on_change}),((app.main.ui.comments.exceeds_length_QMARK_(cljs.core.deref(content)))?rumext.v2.jsx("div",{'className':"main_ui_comments__error-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.character-limit-exceeded")}):null),rumext.v2.jsx(app.main.ui.comments.comment_form_buttons_STAR_,{'onSubmit':on_submit_STAR_,'onCancel':on_cancel,'isDisabled':disabled_QMARK_})]});
});

(app.main.ui.comments.comment_reply_form_STAR_.displayName = "comment-reply-form*");

app.main.ui.comments.comment_edit_form_STAR_ = (function app$main$ui$comments$comment_edit_form_STAR_(props_52064){
var on_cancel = props_52064.onCancel;
var content = props_52064.content;
var on_submit = props_52064.onSubmit;
var content__$1 = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(content);
var disabled_QMARK_ = ((app.main.ui.comments.blank_content_QMARK_(cljs.core.deref(content__$1))) || (app.main.ui.comments.exceeds_length_QMARK_(cljs.core.deref(content__$1))));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__52063_SHARP_){
return cljs.core.reset_BANG_(content__$1,p1__52063_SHARP_);
}));
var on_submit_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(content__$1))],(function (){
var G__52074 = cljs.core.deref(content__$1);
return (on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(G__52074) : on_submit.call(null,G__52074));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_comments__form",'children':[rumext.v2.jsx(app.main.ui.comments.comment_input_STAR_,{'value':cljs.core.deref(content__$1),'autofocus':true,'onCtrlEnter':on_submit_STAR_,'onChange':on_change}),((app.main.ui.comments.exceeds_length_QMARK_(cljs.core.deref(content__$1)))?rumext.v2.jsx("div",{'className':"main_ui_comments__error-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.character-limit-exceeded")}):null),rumext.v2.jsx(app.main.ui.comments.comment_form_buttons_STAR_,{'onSubmit':on_submit_STAR_,'onCancel':on_cancel,'isDisabled':disabled_QMARK_})]});
});

(app.main.ui.comments.comment_edit_form_STAR_.displayName = "comment-edit-form*");

app.main.ui.comments.offset_position = (function app$main$ui$comments$offset_position(position,viewport,zoom,bubble_margin){
var viewport__$1 = (function (){var or__5025__auto__ = viewport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),(0),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),(0),new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null);
}
})();
var base_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position) * zoom) + new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(viewport__$1));
var base_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position) * zoom) + new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(viewport__$1));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position);
var w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(viewport__$1);
var h = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(viewport__$1);
var comment_width = (284);
var orientation_left_QMARK_ = (((base_x + comment_width) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bubble_margin)) >= w);
var orientation_top_QMARK_ = (base_y >= (h / (2)));
var h_dir = ((orientation_left_QMARK_)?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833));
var v_dir = ((orientation_top_QMARK_)?new cljs.core.Keyword(null,"top","top",-1856271961):new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"h-dir","h-dir",1678725750),h_dir,new cljs.core.Keyword(null,"v-dir","v-dir",395606617),v_dir], null);
});
app.main.ui.comments.comment_floating_thread_draft_STAR_ = (function app$main$ui$comments$comment_floating_thread_draft_STAR_(props_52075){
var viewport = props_52075.viewport;
var on_cancel = props_52075.onCancel;
var zoom = props_52075.zoom;
var position_modifier = props_52075.positionModifier;
var draft = props_52075.draft;
var on_submit = props_52075.onSubmit;
var profile = rumext.v2.deref(app.main.refs.profile);
var mentions_s = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return beicon.v2.core.subject();
}));
var position = (function (){var G__52078 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(draft);
if((!((position_modifier == null)))){
return app.common.geom.point.transform(G__52078,position_modifier);
} else {
return G__52078;
}
})();
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(draft);
var bubble_margin = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
var pos = app.main.ui.comments.offset_position(position,viewport,zoom,bubble_margin);
var margin_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bubble_margin) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h-dir","h-dir",1678725750).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"left","left",-399115937)))?(-1):(1)));
var margin_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bubble_margin) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v-dir","v-dir",395606617).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"top","top",-1856271961)))?(-1):(1)));
var pos_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) * zoom) + margin_x);
var pos_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) * zoom) - margin_y);
var disabled_QMARK_ = ((app.main.ui.comments.blank_content_QMARK_(content)) || (app.main.ui.comments.exceeds_length_QMARK_(content)));
var on_esc = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(draft)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.fn_QMARK_(on_cancel)){
return (on_cancel.cljs$core$IFn$_invoke$arity$0 ? on_cancel.cljs$core$IFn$_invoke$arity$0() : on_cancel.call(null));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
}
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(draft)],(function (content__$1){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_draft_thread(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),content__$1], null)));
}));
var on_submit_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(draft)],(function (){
return (on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(draft) : on_submit.call(null,draft));
}));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.comments.mentions_context),{'value':mentions_s,'children':rumext.v2.jsxs("div",{'style':{'top':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos_y),"px"].join(''),'left':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos_x),"px"].join('')},'className':"main_ui_comments__floating-thread-draft-wrapper"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h-dir","h-dir",1678725750).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"left","left",-399115937)))?"main_ui_comments__left":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v-dir","v-dir",395606617).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_comments__top":""),'children':[rumext.v2.jsx("div",{'data-testid':"floating-thread-bubble",'style':{'top':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos_y),"px"].join(''),'left':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos_x),"px"].join('')},'onClick':app.util.dom.stop_propagation,'children':rumext.v2.jsx(app.main.ui.comments.comment_avatar_STAR_,{'className':"main_ui_comments__avatar-lg",'image':app.config.resolve_profile_photo_url(profile)})}),rumext.v2.jsxs("div",{'style':{'top':[cljs.core.str.cljs$core$IFn$_invoke$arity$1((pos_y - (24))),"px"].join(''),'left':[cljs.core.str.cljs$core$IFn$_invoke$arity$1((pos_x + (28))),"px"].join('')},'onClick':app.util.dom.stop_propagation,'className':"main_ui_comments__floating-thread-draft-inner-wrapper main_ui_comments__cursor-auto",'children':[rumext.v2.jsxs("div",{'className':"main_ui_comments__form",'children':[rumext.v2.jsx(app.main.ui.comments.comment_input_STAR_,{'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.write-new-comment"),'value':(function (){var or__5025__auto__ = content;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'autofocus':true,'onEsc':on_esc,'onChange':on_change,'onCtrlEnter':on_submit_STAR_}),((app.main.ui.comments.exceeds_length_QMARK_(content))?rumext.v2.jsx("div",{'className':"main_ui_comments__error-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.character-limit-exceeded")}):null),rumext.v2.jsx(app.main.ui.comments.comment_form_buttons_STAR_,{'onSubmit':on_submit_STAR_,'onCancel':on_esc,'isDisabled':disabled_QMARK_})]}),rumext.v2.jsx(app.main.ui.comments.mentions_panel_STAR_,{})]})]})});
});

(app.main.ui.comments.comment_floating_thread_draft_STAR_.displayName = "comment-floating-thread-draft*");

app.main.ui.comments.comment_floating_thread_header_STAR_ = (function app$main$ui$comments$comment_floating_thread_header_STAR_(props_52088){
var thread = props_52088.thread;
var origin = props_52088.origin;
var owner = app.main.data.comments.get_owner(thread);
var profile = rumext.v2.deref(app.main.refs.profile);
var options = rumext.v2.deref(app.main.ui.comments.ref_COLON_comments_local_options);
var toggle_resolved = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(thread)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_comment_thread(cljs.core.update.cljs$core$IFn$_invoke$arity$3(thread,new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551),cljs.core.not)));
}));
var on_toggle_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.toggle_comment_options(app.common.uuid.zero));
}));
var delete_thread = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.comments.close_thread(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"viewer","viewer",-783949853)))?app.main.data.comments.delete_comment_thread_on_viewer(thread):app.main.data.comments.delete_comment_thread_on_workspace.cljs$core$IFn$_invoke$arity$1(thread))], 0));
}));
var on_delete_thread = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.hide_comment_options());

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-comment-thread.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-comment-thread.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-comment-thread.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),delete_thread], null)));
}));
var on_hide_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.hide_comment_options());
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_comments__floating-thread-header-left",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.comment")," ",rumext.v2.jsxs("span",{'className':"main_ui_comments__grayed-text",'children':["#",new cljs.core.Keyword(null,"seqn","seqn",406413591).cljs$core$IFn$_invoke$arity$1(thread)]})]}),rumext.v2.jsxs("div",{'className':"main_ui_comments__floating-thread-header-right",'children':[(((!((thread == null))))?rumext.v2.jsx("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.comment.mark-as-solved"),'onClick':toggle_resolved,'className':"main_ui_comments__checkbox-wrapper",'children':rumext.v2.jsx("span",{'className':"main_ui_comments__checkbox"+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551).cljs$core$IFn$_invoke$arity$1(thread))?"checked":""),'children':app.main.ui.icons.tick})}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(owner)))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.options"),'onClick':on_toggle_options,'icon':app.main.ui.ds.foundations.assets.icon.menu}):null)]}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(options,app.common.uuid.zero),'on-close':on_hide_options,'children':rumext.v2.jsx("ul",{'className':"main_ui_comments__dropdown-menu",'children':rumext.v2.jsx("li",{'onClick':on_delete_thread,'className':"main_ui_comments__dropdown-menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete-comment-thread")})})})]});
});

(app.main.ui.comments.comment_floating_thread_header_STAR_.displayName = "comment-floating-thread-header*");

app.main.ui.comments.comment_floating_thread_item_STAR_ = (function app$main$ui$comments$comment_floating_thread_item_STAR_(props_52101){
var thread = props_52101.thread;
var comment = props_52101.comment;
var owner = app.main.data.comments.get_owner(comment);
var profile = rumext.v2.deref(app.main.refs.profile);
var options = rumext.v2.deref(app.main.ui.comments.ref_COLON_comments_local_options);
var edition_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var on_toggle_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.toggle_comment_options(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comment)));
}));
var on_hide_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.hide_comment_options());
}));
var on_edit_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.hide_comment_options());

return cljs.core.reset_BANG_(edition_QMARK_,true);
}));
var on_delete_comment = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(comment)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.delete_comment(comment));
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(comment),rumext.v2.adapt(thread)],(function (content){
cljs.core.reset_BANG_(edition_QMARK_,false);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_comment(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(comment,new cljs.core.Keyword(null,"content","content",15833224),content)));
}));
var on_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(edition_QMARK_,false);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_comments__floating-thread-item-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_comments__floating-thread-item",'children':[rumext.v2.jsxs("div",{'className':"main_ui_comments__author",'children':[rumext.v2.jsx(app.main.ui.comments.comment_avatar_STAR_,{'image':app.config.resolve_profile_photo_url(owner)}),rumext.v2.jsxs("div",{'className':"main_ui_comments__author-identity",'children':[rumext.v2.jsx("div",{'className':"main_ui_comments__author-fullname",'children':new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(owner)}),rumext.v2.jsx("div",{'className':"main_ui_comments__author-timeago",'children':app.common.time.timeago(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(comment))})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(owner)))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.options"),'onClick':on_toggle_options,'icon':app.main.ui.ds.foundations.assets.icon.menu}):null)]}),rumext.v2.jsx("div",{'className':"main_ui_comments__item",'children':(cljs.core.truth_(cljs.core.deref(edition_QMARK_))?rumext.v2.jsx(app.main.ui.comments.comment_edit_form_STAR_,{'content':new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(comment),'onSubmit':on_submit,'onCancel':on_cancel}):rumext.v2.jsx("span",{'className':"main_ui_comments__text",'children':rumext.v2.jsx(app.main.ui.comments.comment_content_STAR_,{'content':new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(comment)})}))})]}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comment)),'on-close':on_hide_options,'children':rumext.v2.jsxs("ul",{'className':"main_ui_comments__dropdown-menu",'children':[rumext.v2.jsx("li",{'onClick':on_edit_clicked,'className':"main_ui_comments__dropdown-menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.edit")}),(cljs.core.truth_(thread)?null:rumext.v2.jsx("li",{'onClick':on_delete_comment,'className':"main_ui_comments__dropdown-menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete-comment")}))]})})]});
});

(app.main.ui.comments.comment_floating_thread_item_STAR_.displayName = "comment-floating-thread-item*");

app.main.ui.comments.make_comments_ref = (function app$main$ui$comments$make_comments_ref(thread_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),thread_id], null)),app.main.store.state);
});
app.main.ui.comments.comment_floating_thread_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$comments$comment_floating_thread_STAR_(props_52121){
var viewport = props_52121.viewport;
var zoom = props_52121.zoom;
var position_modifier = props_52121.positionModifier;
var thread = props_52121.thread;
var origin = props_52121.origin;
var ref = rumext.v2.use_ref();
var mentions_s = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return beicon.v2.core.subject();
}));
var thread_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(thread);
var thread_pos = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(thread);
var base_pos = (function (){var G__52131 = thread_pos;
if((!((position_modifier == null)))){
return app.common.geom.point.transform(G__52131,position_modifier);
} else {
return G__52131;
}
})();
var max_height = (((!((viewport == null))))?((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(viewport) * 0.5) | (0)):null);
var bubble_margin = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((24),(24));
var pos = app.main.ui.comments.offset_position(base_pos,viewport,zoom,bubble_margin);
var margin_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bubble_margin) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h-dir","h-dir",1678725750).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"left","left",-399115937)))?(-1):(1)));
var margin_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bubble_margin) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v-dir","v-dir",395606617).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"top","top",-1856271961)))?(-1):(1)));
var pos_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) * zoom) + margin_x);
var pos_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) * zoom) - margin_y);
var comments_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(thread_id)],(function (){
return app.main.ui.comments.make_comments_ref(thread_id);
}));
var comments_map = rumext.v2.deref(comments_ref);
var comments = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(comments_map)],(function (){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created-at","created-at",-89248644),cljs.core.vals(comments_map));
}));
var first_comment = cljs.core.first(comments);
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(thread)],(function (content){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.add_comment(thread,content));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(thread_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.retrieve_comments(thread_id));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(thread_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_comment_thread_status(thread_id));
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(thread_pos),rumext.v2.adapt(comments_map)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1(node);
} else {
return null;
}
}));

return rumext.v2.jsx(rumext.v2.provider(app.main.ui.comments.mentions_context),{'value':mentions_s,'children':(((!((first_comment == null))))?rumext.v2.jsxs("div",{'id':["thread-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thread_id)].join(''),'style':{'left':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos_x),"px"].join(''),'top':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos_y),"px"].join(''),'--comment-height':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_height),"px"].join('')},'onClick':app.util.dom.stop_propagation,'className':"main_ui_comments__floating-thread-wrapper"+" "+"main_ui_comments__cursor-auto"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h-dir","h-dir",1678725750).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"left","left",-399115937)))?"main_ui_comments__left":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v-dir","v-dir",395606617).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_comments__top":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_comments__floating-thread-header",'children':rumext.v2.jsx(app.main.ui.comments.comment_floating_thread_header_STAR_,{'thread':thread,'origin':origin})}),rumext.v2.jsxs("div",{'className':"main_ui_comments__floating-thread-main",'children':[rumext.v2.jsx(app.main.ui.comments.comment_floating_thread_item_STAR_,{'comment':first_comment,'thread':thread}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,item){
out_arr__35152__auto__.push(rumext.v2.jsx(rumext.v2.Fragment,{'children':rumext.v2.jsx(app.main.ui.comments.comment_floating_thread_item_STAR_,{'comment':item})},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? "")));

return out_arr__35152__auto__;
}),[],cljs.core.rest(comments))]}),rumext.v2.jsx(app.main.ui.comments.comment_reply_form_STAR_,{'onSubmit':on_submit}),rumext.v2.jsx(app.main.ui.comments.mentions_panel_STAR_,{})]}):null)});
}));

(app.main.ui.comments.comment_floating_thread_STAR_.displayName = "comment-floating-thread*");

/**
 * Group bubbles in different vectors by proximity
 */
app.main.ui.comments.group_bubbles = (function app$main$ui$comments$group_bubbles(var_args){
var G__52153 = arguments.length;
switch (G__52153) {
case 2:
return app.main.ui.comments.group_bubbles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.main.ui.comments.group_bubbles.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.comments.group_bubbles.cljs$core$IFn$_invoke$arity$2 = (function (zoom,circles){
return app.main.ui.comments.group_bubbles.cljs$core$IFn$_invoke$arity$4(zoom,circles,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
}));

(app.main.ui.comments.group_bubbles.cljs$core$IFn$_invoke$arity$4 = (function (zoom,circles,visited,groups){
if(cljs.core.empty_QMARK_(circles)){
return groups;
} else {
var current = cljs.core.first(circles);
var remaining = cljs.core.rest(circles);
var overlapping_group = cljs.core.some((function (group){
if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.comments.overlap_bubbles_QMARK_,zoom,current),group))){
return group;
} else {
return null;
}
}),groups);
if(cljs.core.truth_(overlapping_group)){
return app.main.ui.comments.group_bubbles.cljs$core$IFn$_invoke$arity$4(zoom,remaining,visited,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (group){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,overlapping_group)){
return cljs.core.cons(current,group);
} else {
return group;
}
}),groups));
} else {
return app.main.ui.comments.group_bubbles.cljs$core$IFn$_invoke$arity$4(zoom,remaining,visited,cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current], null),groups));
}
}
}));

(app.main.ui.comments.group_bubbles.cljs$lang$maxFixedArity = 4);

/**
 * Checks if a bubble or a bubble group is inside a viewbox
 */
app.main.ui.comments.inside_vbox_QMARK_ = (function app$main$ui$comments$inside_vbox_QMARK_(thread_group,wl){
var vbox = new cljs.core.Keyword(null,"vbox","vbox",-492787765).cljs$core$IFn$_invoke$arity$1(wl);
var positions = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912),thread_group);
var position = app.common.geom.point.center_points(positions);
var pos_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position);
var pos_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position);
var x1 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox);
var y1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox);
var x2 = (x1 + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox));
var y2 = (y1 + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox));
return (((((x2 > pos_x)) && ((pos_x > x1)))) && ((((y2 > pos_y)) && ((pos_y > y1)))));
});
/**
 * Calculates the zoom level needed to ungroup the largest number of bubbles while
 * keeping them all visible in the viewbox.
 */
app.main.ui.comments.calculate_zoom_scale = (function app$main$ui$comments$calculate_zoom_scale(position,zoom,threads,wl){
var num_threads = cljs.core.count(threads);
var grouped_threads = app.main.ui.comments.group_bubbles.cljs$core$IFn$_invoke$arity$2(zoom,threads);
var num_grouped_threads = cljs.core.count(grouped_threads);
var zoom_scale_step = 1.75;
var scaled_zoom = (zoom * zoom_scale_step);
var zoomed_wl = app.main.data.workspace.zoom.impl_update_zoom(wl,position,scaled_zoom);
var outside_vbox_QMARK_ = cljs.core.complement(app.main.ui.comments.inside_vbox_QMARK_);
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_threads,num_grouped_threads);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.some((function (p1__52159_SHARP_){
return outside_vbox_QMARK_(p1__52159_SHARP_,zoomed_wl);
}),grouped_threads);
}
})())){
return zoom;
} else {
return (app.main.ui.comments.calculate_zoom_scale.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.comments.calculate_zoom_scale.cljs$core$IFn$_invoke$arity$4(position,scaled_zoom,threads,zoomed_wl) : app.main.ui.comments.calculate_zoom_scale.call(null,position,scaled_zoom,threads,zoomed_wl));
}
});
app.main.ui.comments.comment_floating_group_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$comments$comment_floating_group_STAR_(props_52164){
var thread_group = props_52164.threadGroup;
var zoom = props_52164.zoom;
var position_modifier = props_52164.positionModifier;
var positions = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912),thread_group);
var position = app.common.geom.point.center_points(positions);
var position__$1 = (function (){var G__52165 = position;
if((!((position_modifier == null)))){
return app.common.geom.point.transform(G__52165,position_modifier);
} else {
return G__52165;
}
})();
var pos_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position__$1) * zoom);
var pos_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position__$1) * zoom);
var unread_QMARK_ = cljs.core.some((function (p1__52162_SHARP_){
return (new cljs.core.Keyword(null,"count-unread-comments","count-unread-comments",1085002472).cljs$core$IFn$_invoke$arity$1(p1__52162_SHARP_) > (0));
}),thread_group);
var num_threads = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(thread_group));
var test_id = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seqn","seqn",406413591),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seqn","seqn",406413591),thread_group)));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(thread_group),rumext.v2.adapt(position__$1),rumext.v2.adapt(zoom)],(function (){
var wl = cljs.core.deref(app.main.refs.workspace_local);
var centered_wl = app.main.data.workspace.viewport.calculate_centered_viewbox(wl,position__$1);
var updated_zoom = app.main.ui.comments.calculate_zoom_scale(position__$1,zoom,thread_group,centered_wl);
var scale_zoom = (updated_zoom / zoom);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.viewport.update_viewport_position_center(position__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$2(position__$1,scale_zoom)], 0));
}));
return rumext.v2.jsx("div",{'style':{'top':""+(pos_y ?? "")+"px",'left':""+(pos_x ?? "")+"px"},'onClick':on_click,'className':"main_ui_comments__floating-preview-wrapper main_ui_comments__floating-preview-bubble",'children':rumext.v2.jsx(app.main.ui.comments.comment_avatar_STAR_,{'className':"main_ui_comments__avatar-lg",'variant':(cljs.core.truth_(unread_QMARK_)?"unread":"read"),'data-testid':""+"floating-thread-bubble-"+(test_id ?? ""),'children':num_threads})});
}));

(app.main.ui.comments.comment_floating_group_STAR_.displayName = "comment-floating-group*");

app.main.ui.comments.comment_floating_bubble_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$comments$comment_floating_bubble_STAR_(props_52171){
var is_open = props_52171.isOpen;
var zoom = props_52171.zoom;
var position_modifier = props_52171.positionModifier;
var on_click = props_52171.onClick;
var thread = props_52171.thread;
var origin = props_52171.origin;
var owner = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(thread)],(function (){
return app.main.data.comments.get_owner(thread);
}));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(thread);
var position__$1 = (function (){var G__52173 = position;
if((!((position_modifier == null)))){
return app.common.geom.point.transform(G__52173,position_modifier);
} else {
return G__52173;
}
})();
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(thread);
var state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"is-hover","is-hover",967709367),false,new cljs.core.Keyword(null,"is-grabbing","is-grabbing",1756392012),false,new cljs.core.Keyword(null,"new-position-x","new-position-x",-944422613),null,new cljs.core.Keyword(null,"new-position-y","new-position-y",1655805839),null,new cljs.core.Keyword(null,"new-frame-id","new-frame-id",150989205),frame_id], null);
}));
var pos_x = cljs.math.floor(((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"new-position-x","new-position-x",-944422613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position__$1);
}
})() * zoom));
var pos_y = cljs.math.floor(((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"new-position-y","new-position-y",1655805839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position__$1);
}
})() * zoom));
var drag_QMARK_ = rumext.v2.use_ref(null);
var was_open_QMARK_ = rumext.v2.use_ref(null);
var dragging_ref = rumext.v2.use_ref(false);
var start_ref = rumext.v2.use_ref(null);
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(origin),rumext.v2.adapt(was_open_QMARK_),rumext.v2.adapt(is_open),rumext.v2.adapt(drag_QMARK_)],(function (event){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"viewer","viewer",-783949853))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"is-grabbing","is-grabbing",1756392012),true);

rumext.v2.set_ref_val_BANG_(was_open_QMARK_,is_open);

if(cljs.core.truth_(is_open)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.close_thread());
} else {
}

rumext.v2.set_ref_val_BANG_(drag_QMARK_,false);

app.util.dom.stop_propagation(event);

app.util.dom.capture_pointer(event);

rumext.v2.set_ref_val_BANG_(dragging_ref,true);

return rumext.v2.set_ref_val_BANG_(start_ref,app.util.dom.get_client_position(event));
} else {
return null;
}
}));
var on_pointer_up = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(origin),rumext.v2.adapt(thread),rumext.v2.adapt(cljs.core.select_keys(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-position-x","new-position-x",-944422613),new cljs.core.Keyword(null,"new-position-y","new-position-y",1655805839),new cljs.core.Keyword(null,"new-frame-id","new-frame-id",150989205)], null)))],(function (event){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"viewer","viewer",-783949853))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"is-grabbing","is-grabbing",1756392012),false);

app.util.dom.stop_propagation(event);

app.util.dom.release_pointer(event);

rumext.v2.set_ref_val_BANG_(dragging_ref,false);

rumext.v2.set_ref_val_BANG_(start_ref,null);

if((((!((new cljs.core.Keyword(null,"new-position-x","new-position-x",-944422613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) == null)))) && ((!((new cljs.core.Keyword(null,"new-position-y","new-position-y",1655805839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) == null)))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.comments.update_comment_thread_position.cljs$core$IFn$_invoke$arity$2(thread,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-position-x","new-position-x",-944422613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"new-position-y","new-position-y",1655805839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"new-position-x","new-position-x",-944422613),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-position-y","new-position-y",1655805839),null], 0));
} else {
return null;
}
} else {
return null;
}
}));
var on_pointer_move = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(origin),rumext.v2.adapt(drag_QMARK_),rumext.v2.adapt(position__$1),rumext.v2.adapt(zoom)],(function (event){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"viewer","viewer",-783949853))){
rumext.v2.set_ref_val_BANG_(drag_QMARK_,true);

app.util.dom.stop_propagation(event);

var temp__5825__auto__ = rumext.v2.ref_val(dragging_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var _ = temp__5825__auto__;
var start_pt = rumext.v2.ref_val(start_ref);
var current_pt = app.util.dom.get_client_position(event);
var delta_x = ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(current_pt) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_pt)) / zoom);
var delta_y = ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(current_pt) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_pt)) / zoom);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"new-position-x","new-position-x",-944422613),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position__$1) + delta_x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-position-y","new-position-y",1655805839),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position__$1) + delta_y)], 0));
} else {
return null;
}
} else {
return null;
}
}));
var on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open)],(function (event){
app.util.dom.stop_propagation(event);

if(is_open === false){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"is-hover","is-hover",967709367),true);
} else {
return null;
}
}));
var on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"is-hover","is-hover",967709367),false);
}));
var on_click_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(origin),rumext.v2.adapt(thread),rumext.v2.adapt(on_click),rumext.v2.adapt(was_open_QMARK_),rumext.v2.adapt(drag_QMARK_),rumext.v2.adapt(cljs.core.select_keys(cljs.core.deref(state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-hover","is-hover",967709367)], null)))],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_((function (){var or__5025__auto__ = (function (){var and__5023__auto__ = rumext.v2.ref_val(was_open_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
return rumext.v2.ref_val(drag_QMARK_);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core.not(rumext.v2.ref_val(was_open_QMARK_))) && (cljs.core.not(rumext.v2.ref_val(drag_QMARK_))));
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"is-hover","is-hover",967709367),false);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.open_thread(thread));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"viewer","viewer",-783949853))){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(thread) : on_click.call(null,thread));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_comments__floating-preview-wrapper"+" "+((new cljs.core.Keyword(null,"is-hover","is-hover",967709367).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) === false)?"main_ui_comments__floating-preview-bubble":""),'children':(cljs.core.truth_(new cljs.core.Keyword(null,"is-hover","is-hover",967709367).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?rumext.v2.jsx("div",{'className':"main_ui_comments__floating-thread-wrapper"+" "+"main_ui_comments__floating-preview-displacement"+" "+((new cljs.core.Keyword(null,"is-grabbing","is-grabbing",1756392012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) === false)?"main_ui_comments__cursor-pointer":"")+" "+((new cljs.core.Keyword(null,"is-grabbing","is-grabbing",1756392012).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) === true)?"main_ui_comments__cursor-grabbing":""),'children':rumext.v2.jsx("div",{'className':"main_ui_comments__floating-thread-item-wrapper",'children':rumext.v2.jsx("div",{'className':"main_ui_comments__floating-thread-item",'children':rumext.v2.jsx(app.main.ui.comments.comment_info_STAR_,{'item':thread,'profile':owner})})})}):rumext.v2.jsx(app.main.ui.comments.comment_avatar_STAR_,{'image':app.config.resolve_profile_photo_url(owner),'className':"main_ui_comments__avatar-lg",'data-testid':""+"floating-thread-bubble-"+(new cljs.core.Keyword(null,"seqn","seqn",406413591).cljs$core$IFn$_invoke$arity$1(thread) ?? ""),'variant':(cljs.core.truth_(new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551).cljs$core$IFn$_invoke$arity$1(thread))?"solved":(((new cljs.core.Keyword(null,"count-unread-comments","count-unread-comments",1085002472).cljs$core$IFn$_invoke$arity$1(thread) > (0)))?"unread":"read"
))})),'onPointerUp':on_pointer_up,'style':{'top':""+(pos_y ?? "")+"px",'left':""+(pos_x ?? "")+"px"},'onClick':on_click_STAR_,'onPointerMove':on_pointer_move,'onPointerDown':on_pointer_down,'onPointerLeave':on_pointer_leave,'onPointerEnter':on_pointer_enter});
}));

(app.main.ui.comments.comment_floating_bubble_STAR_.displayName = "comment-floating-bubble*");

app.main.ui.comments.comment_sidebar_thread_item_STAR_ = (function app$main$ui$comments$comment_sidebar_thread_item_STAR_(props_52188){
var item = props_52188.item;
var on_click = props_52188.onClick;
var owner = app.main.data.comments.get_owner(item);
var frame = rumext.v2.deref(app.main.refs.workspace_page_object_by_id(new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(item)));
var on_click_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(item)],(function (event){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

if(cljs.core.fn_QMARK_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(item) : on_click.call(null,item));
} else {
return null;
}
}));
return rumext.v2.jsxs("div",{'onClick':on_click_STAR_,'className':"main_ui_comments__cover",'children':[rumext.v2.jsx("div",{'className':"main_ui_comments__location",'children':rumext.v2.jsxs("div",{'className':"main_ui_comments__location-text",'children':[["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"seqn","seqn",406413591).cljs$core$IFn$_invoke$arity$1(item))].join(''),[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page-name","page-name",974981762).cljs$core$IFn$_invoke$arity$1(item))].join(''),(((((!((frame == null)))) && ((!(app.common.files.helpers.root_QMARK_(frame))))))?[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame))].join(''):null)]})}),rumext.v2.jsx(app.main.ui.comments.comment_info_STAR_,{'item':item,'profile':owner})]});
});

(app.main.ui.comments.comment_sidebar_thread_item_STAR_.displayName = "comment-sidebar-thread-item*");

app.main.ui.comments.comment_sidebar_thread_group_STAR_ = (function app$main$ui$comments$comment_sidebar_thread_group_STAR_(props_52191){
var group = props_52191.group;
var on_thread_click = props_52191.onThreadClick;
return rumext.v2.jsx("div",{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,item){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.comments.comment_sidebar_thread_item_STAR_,{'item':item,'onClick':on_thread_click},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)));

return out_arr__35152__auto__;
}),[],new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(group))});
});

(app.main.ui.comments.comment_sidebar_thread_group_STAR_.displayName = "comment-sidebar-thread-group*");

app.main.ui.comments.comment_dashboard_thread_item_STAR_ = (function app$main$ui$comments$comment_dashboard_thread_item_STAR_(props_52195){
var item = props_52195.item;
var on_click = props_52195.onClick;
var owner = app.main.data.comments.get_owner(item);
var on_click_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(item)],(function (event){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

if(cljs.core.fn_QMARK_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(item) : on_click.call(null,item));
} else {
return null;
}
}));
return rumext.v2.jsxs("div",{'onClick':on_click_STAR_,'className':"main_ui_comments__cover",'children':[rumext.v2.jsxs("div",{'className':"main_ui_comments__location",'children':[rumext.v2.jsx("div",{'className':"main_ui_comments__location-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.comments})}),rumext.v2.jsxs("div",{'className':"main_ui_comments__location-text",'children':[["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"seqn","seqn",406413591).cljs$core$IFn$_invoke$arity$1(item))].join(''),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file-name","file-name",-1654217259).cljs$core$IFn$_invoke$arity$1(item))].join(''),[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page-name","page-name",974981762).cljs$core$IFn$_invoke$arity$1(item))].join('')]})]}),rumext.v2.jsx(app.main.ui.comments.comment_info_STAR_,{'item':item,'profile':owner})]});
});

(app.main.ui.comments.comment_dashboard_thread_item_STAR_.displayName = "comment-dashboard-thread-item*");

app.main.ui.comments.comment_dashboard_thread_group_STAR_ = (function app$main$ui$comments$comment_dashboard_thread_group_STAR_(props_52210){
var group = props_52210.group;
var on_thread_click = props_52210.onThreadClick;
return rumext.v2.jsx("div",{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,item){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.comments.comment_dashboard_thread_item_STAR_,{'item':item,'onClick':on_thread_click},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)));

return out_arr__35152__auto__;
}),[],new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(group))});
});

(app.main.ui.comments.comment_dashboard_thread_group_STAR_.displayName = "comment-dashboard-thread-group*");


//# sourceMappingURL=app.main.ui.comments.js.map
