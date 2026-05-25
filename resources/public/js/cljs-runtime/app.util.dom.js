import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.logging.js";
import "./app.common.media.js";
import "./app.util.globals.js";
import "./app.util.object.js";
import "./app.util.webapi.js";
import "./cuerdas.core.js";
import "./goog.dom.dom.js";
import "./potok.v2.core.js";
import "./promesa.core.js";
import "./goog.events.browserevent.js";
goog.provide('app.util.dom');
(goog.events.BrowserEvent.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(goog.events.BrowserEvent.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var it__$1 = this;
return it__$1.getBrowserEvent();
}));
app.util.dom.browser_event_QMARK_ = (function app$util$dom$browser_event_QMARK_(o){
return (o instanceof goog.events.BrowserEvent);
});
app.util.dom.native_event_QMARK_ = (function app$util$dom$native_event_QMARK_(o){
return (o instanceof Event);
});
app.common.logging.loggers.set("app.util.dom",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.util.dom.event__GT_inner_text = (function app$util$dom$event__GT_inner_text(e){
if((!((e == null)))){
return e.target.innerText;
} else {
return null;
}
});
app.util.dom.event__GT_value = (function app$util$dom$event__GT_value(e){
if((!((e == null)))){
return e.target.value;
} else {
return null;
}
});
app.util.dom.event__GT_target = (function app$util$dom$event__GT_target(e){
if((!((e == null)))){
return e.target;
} else {
return null;
}
});
app.util.dom.event__GT_native_event = (function app$util$dom$event__GT_native_event(e){
return e.nativeEvent;
});
app.util.dom.event__GT_browser_event = (function app$util$dom$event__GT_browser_event(e){
return e.getBrowserEvent();
});
app.util.dom.set_html_title = (function app$util$dom$set_html_title(title){
return (app.util.globals.document.title = title);
});
app.util.dom.set_page_style_BANG_ = (function app$util$dom$set_page_style_BANG_(styles){
var node = cljs.core.first((app.util.dom.get_elements_by_tag.cljs$core$IFn$_invoke$arity$2 ? app.util.dom.get_elements_by_tag.cljs$core$IFn$_invoke$arity$2(app.util.globals.document,"head") : app.util.dom.get_elements_by_tag.call(null,app.util.globals.document,"head")));
var style = cljs.core.reduce_kv((function (res,k,v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,""+(cuerdas.core.css_selector(k) ?? "")+":"+(v ?? "")+";");
}),cljs.core.PersistentVector.EMPTY,styles);
var style__$1 = ""+"<style>\n  @page {"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",style) ?? "")+"}\n   html, body {font-size:0; margin:0; padding:0}\n </style>";
return node.insertAdjacentHTML("beforeend",style__$1);
});
app.util.dom.get_element_by_class = (function app$util$dom$get_element_by_class(var_args){
var G__47254 = arguments.length;
switch (G__47254) {
case 1:
return app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$1 = (function (classname){
return goog.dom.getElementByClass(classname);
}));

(app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$2 = (function (classname,node){
return goog.dom.getElementByClass(classname,node);
}));

(app.util.dom.get_element_by_class.cljs$lang$maxFixedArity = 2);

app.util.dom.get_elements_by_class = (function app$util$dom$get_elements_by_class(var_args){
var G__47256 = arguments.length;
switch (G__47256) {
case 1:
return app.util.dom.get_elements_by_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.get_elements_by_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.get_elements_by_class.cljs$core$IFn$_invoke$arity$1 = (function (classname){
return goog.dom.getElementsByClass(classname);
}));

(app.util.dom.get_elements_by_class.cljs$core$IFn$_invoke$arity$2 = (function (classname,node){
return goog.dom.getElementsByClass(classname,node);
}));

(app.util.dom.get_elements_by_class.cljs$lang$maxFixedArity = 2);

app.util.dom.get_element = (function app$util$dom$get_element(id){
return goog.dom.getElement(id);
});
app.util.dom.get_elements_by_tag = (function app$util$dom$get_elements_by_tag(node,tag){
if((!((node == null)))){
return node.getElementsByTagName(tag);
} else {
return null;
}
});
app.util.dom.stop_propagation = (function app$util$dom$stop_propagation(event){
if((((!((event == null)))) && (cljs.core.fn_QMARK_(event.stopPropagation)))){
return event.stopPropagation();
} else {
return null;
}
});
app.util.dom.stop_immediate_propagation = (function app$util$dom$stop_immediate_propagation(event){
if((((!((event == null)))) && (cljs.core.fn_QMARK_(event.stopImmediatePropagation)))){
return event.stopImmediatePropagation();
} else {
return null;
}
});
app.util.dom.prevent_default = (function app$util$dom$prevent_default(event){
if((((!((event == null)))) && (cljs.core.fn_QMARK_(event.preventDefault)))){
return event.preventDefault();
} else {
return null;
}
});
/**
 * Extract the target from event instance.
 */
app.util.dom.get_target = (function app$util$dom$get_target(event){
if((!((event == null)))){
return event.target;
} else {
return null;
}
});
/**
 * Extract the related target from a blur or focus event instance.
 */
app.util.dom.get_related_target = (function app$util$dom$get_related_target(event){
if((!((event == null)))){
return event.relatedTarget;
} else {
return null;
}
});
/**
 * Extract the target from event instance and select it
 */
app.util.dom.select_target = (function app$util$dom$select_target(event){
if((!((event == null)))){
return event.target.select();
} else {
return null;
}
});
/**
 * Select element by node
 */
app.util.dom.select_node = (function app$util$dom$select_node(node){
if((!((node == null)))){
return node.select;
} else {
return null;
}
});
/**
 * Extract the current target from event instance (different from target
 *   when event triggered in a child of the subscribing element).
 */
app.util.dom.get_current_target = (function app$util$dom$get_current_target(event){
if((!((event == null)))){
return event.currentTarget;
} else {
return null;
}
});
app.util.dom.get_parent = (function app$util$dom$get_parent(node){
if((!((node == null)))){
return node.parentElement;
} else {
return null;
}
});
app.util.dom.get_parent_at = (function app$util$dom$get_parent_at(node,count){
if((!((node == null)))){
var current = node;
var current_count = count;
while(true){
if((((current == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_count,(0))))){
return current;
} else {
var G__47510 = current.parentElement;
var G__47511 = (current_count - (1));
current = G__47510;
current_count = G__47511;
continue;
}
break;
}
} else {
return null;
}
});
app.util.dom.get_parent_with_data = (function app$util$dom$get_parent_with_data(node,name){
var name__$1 = cuerdas.core.camel(name);
var current = node;
while(true){
if((current == null)){
return null;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current.nodeType,Node.ELEMENT_NODE)){
var G__47512 = current.parentElement;
current = G__47512;
continue;
} else {
if(app.util.object.in_QMARK_(current.dataset,name__$1)){
return current;
} else {
var G__47513 = current.parentElement;
current = G__47513;
continue;

}
}
}
break;
}
});
app.util.dom.get_parent_with_selector = (function app$util$dom$get_parent_with_selector(node,selector){
var current = node;
while(true){
if(cljs.core.truth_((function (){var or__5025__auto__ = (current == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return current.matches(selector);
}
})())){
return current;
} else {
var G__47514 = current.parentElement;
current = G__47514;
continue;
}
break;
}
});
/**
 * Extract the value from dom node.
 */
app.util.dom.get_value = (function app$util$dom$get_value(node){
if((!((node == null)))){
return node.value;
} else {
return null;
}
});
/**
 * Extract the value from dom input node taking into account the type.
 */
app.util.dom.get_input_value = (function app$util$dom$get_input_value(node){
if((!((node == null)))){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type,"checkbox")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.type,"radio")))){
return node.checked;
} else {
return node.value;
}
} else {
return null;
}
});
/**
 * Extract the value of one attribute of a dom node.
 */
app.util.dom.get_attribute = (function app$util$dom$get_attribute(node,attr_name){
if((!((node == null)))){
return node.getAttribute(attr_name);
} else {
return null;
}
});
app.util.dom.get_scroll_position = (function app$util$dom$get_scroll_position(event){
if((!((event == null)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),event.scrollHeight,new cljs.core.Keyword(null,"scroll-left","scroll-left",-211761103),event.scrollLeft,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),event.scrollTop,new cljs.core.Keyword(null,"scroll-width","scroll-width",-752407930),event.scrollWidth], null);
} else {
return null;
}
});
app.util.dom.get_scroll_height_ratio = (function app$util$dom$get_scroll_height_ratio(node){
if((!((node == null)))){
return (node.scrollHeight / node.clientHeight);
} else {
return null;
}
});
app.util.dom.get_scroll_distance = (function app$util$dom$get_scroll_distance(node,scroll_node){
if((((!((node == null)))) && ((!((scroll_node == null)))))){
return cljs.core.abs((scroll_node.scrollTop - node.offsetTop));
} else {
return null;
}
});
app.util.dom.get_scroll_distance_ratio = (function app$util$dom$get_scroll_distance_ratio(node,scroll_node){
var distance = app.util.dom.get_scroll_distance(node,scroll_node);
var height = scroll_node.clientHeight;
return (distance / height);
});
app.util.dom.get_target_val = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_value,app.util.dom.get_target);
app.util.dom.get_target_scroll = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_scroll_position,app.util.dom.get_target);
/**
 * Click a node
 */
app.util.dom.click = (function app$util$dom$click(node){
if((!((node == null)))){
return node.click();
} else {
return null;
}
});
/**
 * Extract the files from dom node.
 */
app.util.dom.get_files = (function app$util$dom$get_files(node){
if((!((node == null)))){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(node.files);
} else {
return null;
}
});
/**
 * Check if the node that represents a radio
 *   or checkbox is checked or not.
 */
app.util.dom.checked_QMARK_ = (function app$util$dom$checked_QMARK_(node){
if((!((node == null)))){
return node.checked;
} else {
return null;
}
});
/**
 * Check if the node that is a form input
 *   has a valid value, against html5 form validation
 *   properties (required, min/max, pattern...).
 */
app.util.dom.valid_QMARK_ = (function app$util$dom$valid_QMARK_(node){
if((!((node == null)))){
var temp__5825__auto__ = node.validity;
if(cljs.core.truth_(temp__5825__auto__)){
var validity = temp__5825__auto__;
return validity.valid;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Manually set the validity status of a node that
 *   is a form input. If the state is an empty string,
 *   the input will be valid. If not, the string will
 *   be set as the error message.
 */
app.util.dom.set_validity_BANG_ = (function app$util$dom$set_validity_BANG_(node,status){
if((!((node == null)))){
node.setCustomValidity(status);

return node.reportValidity();
} else {
return null;
}
});
app.util.dom.clean_value_BANG_ = (function app$util$dom$clean_value_BANG_(node){
if((!((node == null)))){
return (node.value = "");
} else {
return null;
}
});
app.util.dom.set_value_BANG_ = (function app$util$dom$set_value_BANG_(node,value){
if((!((node == null)))){
return (node.value = value);
} else {
return null;
}
});
app.util.dom.select_text_BANG_ = (function app$util$dom$select_text_BANG_(node){
if((((!((node == null)))) && ((!(((node["select"]) == null)))))){
return node.select();
} else {
return null;
}
});
app.util.dom.equals_QMARK_ = (function app$util$dom$equals_QMARK_(node_a,node_b){
var or__5025__auto__ = (((node_a == null)) && ((node_b == null)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = (!((node_a == null)));
if(and__5023__auto__){
return node_a.isEqualNode(node_b);
} else {
return and__5023__auto__;
}
}
});
/**
 * Extract the files from event instance.
 */
app.util.dom.get_event_files = (function app$util$dom$get_event_files(event){
if((!((event == null)))){
return app.util.dom.get_files(app.util.dom.get_target(event));
} else {
return null;
}
});
app.util.dom.create_element = (function app$util$dom$create_element(var_args){
var G__47274 = arguments.length;
switch (G__47274) {
case 1:
return app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.dom.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return app.util.globals.document.createElement(tag);
}));

(app.util.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (ns,tag){
return app.util.globals.document.createElementNS(ns,tag);
}));

(app.util.dom.create_element.cljs$core$IFn$_invoke$arity$3 = (function (document,ns,tag){
return document.createElementNS(ns,tag);
}));

(app.util.dom.create_element.cljs$lang$maxFixedArity = 3);

app.util.dom.create_text = (function app$util$dom$create_text(var_args){
var G__47280 = arguments.length;
switch (G__47280) {
case 1:
return app.util.dom.create_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.create_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.create_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return app.util.dom.create_text.cljs$core$IFn$_invoke$arity$2(app.util.globals.document,text);
}));

(app.util.dom.create_text.cljs$core$IFn$_invoke$arity$2 = (function (document,text){
return document.createTextNode(text);
}));

(app.util.dom.create_text.cljs$lang$maxFixedArity = 2);

app.util.dom.set_html_BANG_ = (function app$util$dom$set_html_BANG_(el,html){
if((!((el == null)))){
(el.innerHTML = html);
} else {
}

return el;
});
app.util.dom.append_child_BANG_ = (function app$util$dom$append_child_BANG_(el,child){
if((!((el == null)))){
el.appendChild(child);
} else {
}

return el;
});
app.util.dom.insert_after_BANG_ = (function app$util$dom$insert_after_BANG_(el,ref,child){
if((((!((el == null)))) && ((!((ref == null)))))){
var nodes_47520 = el.childNodes;
var idx_47521 = app.common.data.index_of_pred(nodes_47520,(function (p1__47296_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref,p1__47296_SHARP_);
}));
var temp__5823__auto___47522 = (nodes_47520[(idx_47521 + (1))]);
if(cljs.core.truth_(temp__5823__auto___47522)){
var sibnode_47523 = temp__5823__auto___47522;
el.insertBefore(child,sibnode_47523);
} else {
el.appendChild(child);
}
} else {
}

return el;
});
app.util.dom.remove_child_BANG_ = (function app$util$dom$remove_child_BANG_(el,child){
if((!((el == null)))){
el.removeChild(child);
} else {
}

return el;
});
app.util.dom.remove_BANG_ = (function app$util$dom$remove_BANG_(el){
if((!((el == null)))){
return el.remove();
} else {
return null;
}
});
app.util.dom.get_first_child = (function app$util$dom$get_first_child(el){
if((!((el == null)))){
return el.firstChild;
} else {
return null;
}
});
app.util.dom.get_tag_name = (function app$util$dom$get_tag_name(el){
if((!((el == null)))){
return el.tagName;
} else {
return null;
}
});
app.util.dom.get_outer_html = (function app$util$dom$get_outer_html(el){
if((!((el == null)))){
return el.outerHTML;
} else {
return null;
}
});
app.util.dom.get_inner_text = (function app$util$dom$get_inner_text(el){
if((!((el == null)))){
return el.innerText;
} else {
return null;
}
});
app.util.dom.is_content_editable_QMARK_ = (function app$util$dom$is_content_editable_QMARK_(el){
return el.isContentEditable;
});
app.util.dom.query = (function app$util$dom$query(var_args){
var G__47308 = arguments.length;
switch (G__47308) {
case 1:
return app.util.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return app.util.dom.query.cljs$core$IFn$_invoke$arity$2(app.util.globals.document,selector);
}));

(app.util.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (el,selector){
if((!((el == null)))){
return el.querySelector(selector);
} else {
return null;
}
}));

(app.util.dom.query.cljs$lang$maxFixedArity = 2);

app.util.dom.query_all = (function app$util$dom$query_all(var_args){
var G__47318 = arguments.length;
switch (G__47318) {
case 1:
return app.util.dom.query_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.query_all.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(app.util.globals.document,selector);
}));

(app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2 = (function (el,selector){
if((!((el == null)))){
return el.querySelectorAll(selector);
} else {
return null;
}
}));

(app.util.dom.query_all.cljs$lang$maxFixedArity = 2);

app.util.dom.get_element_offset_position = (function app$util$dom$get_element_offset_position(node){
if((!((node == null)))){
var x = node.offsetTop;
var y = node.offsetLeft;
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return null;
}
});
app.util.dom.get_client_position = (function app$util$dom$get_client_position(event){
var x = event.clientX;
var y = event.clientY;
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
});
app.util.dom.get_offset_position = (function app$util$dom$get_offset_position(event){
if((!((event == null)))){
var x = event.offsetX;
var y = event.offsetY;
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return null;
}
});
app.util.dom.get_delta_position = (function app$util$dom$get_delta_position(event){
var e = ((app.util.dom.browser_event_QMARK_(event))?cljs.core.deref(event):event);
var x = e.deltaX;
var y = e.deltaY;
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
});
app.util.dom.get_client_size = (function app$util$dom$get_client_size(node){
if((!((node == null)))){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4((0),(0),node.clientWidth,node.clientHeight);
} else {
return null;
}
});
app.util.dom.get_bounding_rect = (function app$util$dom$get_bounding_rect(node){
var rect = node.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left","left",-399115937),rect.left,new cljs.core.Keyword(null,"top","top",-1856271961),rect.top,new cljs.core.Keyword(null,"right","right",-452581833),rect.right,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),rect.bottom,new cljs.core.Keyword(null,"width","width",-384071477),rect.width,new cljs.core.Keyword(null,"height","height",1025178622),rect.height], null);
});
app.util.dom.is_bounding_rect_outside_QMARK_ = (function app$util$dom$is_bounding_rect_outside_QMARK_(p__47327,p__47328){
var map__47329 = p__47327;
var map__47329__$1 = cljs.core.__destructure_map(map__47329);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47329__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47329__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47329__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47329__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var map__47330 = p__47328;
var map__47330__$1 = cljs.core.__destructure_map(map__47330);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47330__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47330__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (((left < (0))) || ((((top < (0))) || ((((right > width)) || ((bottom > height)))))));
});
app.util.dom.is_element_outside_QMARK_ = (function app$util$dom$is_element_outside_QMARK_(element){
return app.util.dom.is_bounding_rect_outside_QMARK_(app.util.dom.get_bounding_rect(element),(app.util.dom.get_window_size.cljs$core$IFn$_invoke$arity$0 ? app.util.dom.get_window_size.cljs$core$IFn$_invoke$arity$0() : app.util.dom.get_window_size.call(null)));
});
app.util.dom.bounding_rect__GT_rect = (function app$util$dom$bounding_rect__GT_rect(rect){
if((!((rect == null)))){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4((function (){var or__5025__auto__ = rect.left;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(rect);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
}
})(),(function (){var or__5025__auto__ = rect.top;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(rect);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
}
})(),(function (){var or__5025__auto__ = rect.width;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (1);
}
}
})(),(function (){var or__5025__auto__ = rect.height;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (1);
}
}
})());
} else {
return null;
}
});
app.util.dom.get_window_size = (function app$util$dom$get_window_size(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight], null);
});
app.util.dom.get_window_height = (function app$util$dom$get_window_height(){
return window.innerHeight;
});
app.util.dom.get_computed_styles = (function app$util$dom$get_computed_styles(node){
return getComputedStyle(node);
});
app.util.dom.get_property_value = (function app$util$dom$get_property_value(o,prop){
return o.getPropertyValue(prop);
});
app.util.dom.get_css_variable = (function app$util$dom$get_css_variable(var_args){
var G__47346 = arguments.length;
switch (G__47346) {
case 2:
return app.util.dom.get_css_variable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.util.dom.get_css_variable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.get_css_variable.cljs$core$IFn$_invoke$arity$2 = (function (variable,element){
return window.getComputedStyle(element).getPropertyValue(variable);
}));

(app.util.dom.get_css_variable.cljs$core$IFn$_invoke$arity$1 = (function (variable){
return window.getComputedStyle(document.documentElement).getPropertyValue(variable);
}));

(app.util.dom.get_css_variable.cljs$lang$maxFixedArity = 2);

app.util.dom.focus_BANG_ = (function app$util$dom$focus_BANG_(node){
if((!((node == null)))){
return node.focus();
} else {
return null;
}
});
app.util.dom.click_BANG_ = (function app$util$dom$click_BANG_(node){
if((!((node == null)))){
return node.click();
} else {
return null;
}
});
app.util.dom.focus_QMARK_ = (function app$util$dom$focus_QMARK_(node){
var and__5023__auto__ = node;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.activeElement,node);
} else {
return and__5023__auto__;
}
});
app.util.dom.blur_BANG_ = (function app$util$dom$blur_BANG_(node){
if((!((node == null)))){
return node.blur();
} else {
return null;
}
});
app.util.dom.fullscreen_events = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fullscreenchange","mozfullscreenchange","MSFullscreenChange","webkitfullscreenchange"], null);
app.util.dom.fullscreen_QMARK_ = (function app$util$dom$fullscreen_QMARK_(){
if(app.util.object.in_QMARK_(app.util.globals.document,"webkitFullscreenElement")){
return cljs.core.boolean$(app.util.globals.document.webkitFullscreenElement);
} else {
if(app.util.object.in_QMARK_(app.util.globals.document,"mozFullScreen")){
return cljs.core.boolean$(app.util.globals.document.mozFullScreen);
} else {
if(app.util.object.in_QMARK_(app.util.globals.document,"msFullscreenElement")){
return cljs.core.boolean$(app.util.globals.document.msFullscreenElement);
} else {
if(app.util.object.in_QMARK_(app.util.globals.document,"fullscreenElement")){
return cljs.core.boolean$(app.util.globals.document.fullscreenElement);
} else {
if(app.common.logging.enabled_QMARK_("app.util.dom",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Seems like the current browser does not support fullscreen api."], null)], null);
}),null)),null,null,"app.util.dom",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return false;

}
}
}
}
});
app.util.dom.blob_QMARK_ = (function app$util$dom$blob_QMARK_(v){
if((!((v == null)))){
return (v instanceof Blob);
} else {
return null;
}
});
app.util.dom.make_node = (function app$util$dom$make_node(var_args){
var G__47362 = arguments.length;
switch (G__47362) {
case 2:
return app.util.dom.make_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.util.dom.make_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.make_node.cljs$core$IFn$_invoke$arity$2 = (function (namespace,name){
return app.util.globals.document.createElementNS(namespace,name);
}));

(app.util.dom.make_node.cljs$core$IFn$_invoke$arity$1 = (function (name){
return app.util.globals.document.createElement(name);
}));

(app.util.dom.make_node.cljs$lang$maxFixedArity = 2);

app.util.dom.node__GT_xml = (function app$util$dom$node__GT_xml(node){
if((!((node == null)))){
return (new XMLSerializer()).serializeToString(node);
} else {
return null;
}
});
app.util.dom.str__GT_data_uri = (function app$util$dom$str__GT_data_uri(str,type){
if(typeof str === 'string'){
} else {
throw (new Error("Assert failed: (string? str)"));
}

var b64 = btoa(str);
return ""+"data:"+(type ?? "")+";base64,"+(b64 ?? "");
});
app.util.dom.svg_node__GT_data_uri = (function app$util$dom$svg_node__GT_data_uri(svg_node){
var xml = (new XMLSerializer()).serializeToString(svg_node);
var data_uri = app.util.dom.str__GT_data_uri(xml,"image/svg+xml");
return data_uri;
});
app.util.dom.set_property_BANG_ = (function app$util$dom$set_property_BANG_(node,property,value){
if((!((node == null)))){
node.setAttribute(property,value);
} else {
}

return node;
});
app.util.dom.get_text = (function app$util$dom$get_text(node){
if((!((node == null)))){
return node.textContent;
} else {
return null;
}
});
app.util.dom.set_text_BANG_ = (function app$util$dom$set_text_BANG_(node,text){
if((!((node == null)))){
(node.textContent = text);
} else {
}

return node;
});
app.util.dom.set_css_property_BANG_ = (function app$util$dom$set_css_property_BANG_(node,property,value){
if((!((node == null)))){
node.style.setProperty(property,value);
} else {
}

return node;
});
app.util.dom.unset_css_property_BANG_ = (function app$util$dom$unset_css_property_BANG_(node,property){
if((!((node == null)))){
node.style.removeProperty(property);
} else {
}

return node;
});
app.util.dom.capture_pointer = (function app$util$dom$capture_pointer(event){
if((!((event == null)))){
return app.util.dom.get_target(event).setPointerCapture(event.pointerId);
} else {
return null;
}
});
app.util.dom.release_pointer = (function app$util$dom$release_pointer(event){
if(cljs.core.truth_((function (){var and__5023__auto__ = (!((event == null)));
if(and__5023__auto__){
return event.pointerId;
} else {
return and__5023__auto__;
}
})())){
return app.util.dom.get_target(event).releasePointerCapture(event.pointerId);
} else {
return null;
}
});
app.util.dom.get_body = (function app$util$dom$get_body(){
return app.util.globals.document.body;
});
app.util.dom.get_root = (function app$util$dom$get_root(){
return app.util.dom.query.cljs$core$IFn$_invoke$arity$2(app.util.globals.document,"#app");
});
app.util.dom.classnames = (function app$util$dom$classnames(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47559 = arguments.length;
var i__5750__auto___47560 = (0);
while(true){
if((i__5750__auto___47560 < len__5749__auto___47559)){
args__5755__auto__.push((arguments[i__5750__auto___47560]));

var G__47561 = (i__5750__auto___47560 + (1));
i__5750__auto___47560 = G__47561;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.util.dom.classnames.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.util.dom.classnames.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.even_QMARK_(cljs.core.count(params))){
} else {
throw (new Error("Assert failed: (even? (count params))"));
}

return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__47381){
var vec__47383 = p__47381;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47383,(1),null);
if(cljs.core.boolean$(v) === true){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,app.common.data.name(k));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)));
}));

(app.util.dom.classnames.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.util.dom.classnames.cljs$lang$applyTo = (function (seq47376){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47376));
}));

app.util.dom.id_QMARK_ = (function app$util$dom$id_QMARK_(node,id){
if((!((node == null)))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.id,id);
} else {
return null;
}
});
app.util.dom.class_QMARK_ = (function app$util$dom$class_QMARK_(node,class_name){
if((!((node == null)))){
var class_list = node.classList;
return class_list.contains(class_name);
} else {
return null;
}
});
app.util.dom.add_class_BANG_ = (function app$util$dom$add_class_BANG_(node,class_name){
if((!((node == null)))){
var class_list_47571 = node.classList;
class_list_47571.add(class_name);
} else {
}

return node;
});
app.util.dom.remove_class_BANG_ = (function app$util$dom$remove_class_BANG_(node,class_name){
if((!((node == null)))){
var class_list = node.classList;
return class_list.remove(class_name);
} else {
return null;
}
});
app.util.dom.child_QMARK_ = (function app$util$dom$child_QMARK_(node1,node2){
if((((!((node1 == null)))) && ((!((node2 == null)))))){
return node2.contains(node1);
} else {
return null;
}
});
app.util.dom.get_active = (function app$util$dom$get_active(){
return app.util.globals.document.activeElement;
});
app.util.dom.active_QMARK_ = (function app$util$dom$active_QMARK_(node){
if((!((node == null)))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_active(),node);
} else {
return null;
}
});
app.util.dom.get_data = (function app$util$dom$get_data(node,attr){
if((!((node == null)))){
return node.getAttribute(""+"data-"+(attr ?? ""));
} else {
return null;
}
});
app.util.dom.resolve_node = (function app$util$dom$resolve_node(event){
if((event instanceof Element)){
return event;
} else {
return app.util.dom.get_current_target(event);

}
});
app.util.dom.get_boolean_data = (function app$util$dom$get_boolean_data(node,attr){
var G__47402 = app.util.dom.resolve_node(node);
var G__47402__$1 = (((G__47402 == null))?null:app.util.dom.get_data(G__47402,attr));
if((G__47402__$1 == null)){
return null;
} else {
return cljs.core.parse_boolean(G__47402__$1);
}
});
app.util.dom.set_data_BANG_ = (function app$util$dom$set_data_BANG_(node,attr,value){
if((!((node == null)))){
node.setAttribute(""+"data-"+(attr ?? ""),""+(value ?? ""));
} else {
}

return node;
});
app.util.dom.set_attribute_BANG_ = (function app$util$dom$set_attribute_BANG_(node,attr,value){
if((!((node == null)))){
return node.setAttribute(attr,value);
} else {
return null;
}
});
app.util.dom.set_style_BANG_ = (function app$util$dom$set_style_BANG_(node,style,value){
if((!((node == null)))){
return node.style.setProperty(style,value);
} else {
return null;
}
});
app.util.dom.remove_attribute_BANG_ = (function app$util$dom$remove_attribute_BANG_(node,attr){
if((!((node == null)))){
return node.removeAttribute(attr);
} else {
return null;
}
});
app.util.dom.get_scroll_pos = (function app$util$dom$get_scroll_pos(element){
if((!((element == null)))){
return element.scrollTop;
} else {
return null;
}
});
app.util.dom.get_h_scroll_pos = (function app$util$dom$get_h_scroll_pos(element){
if((!((element == null)))){
return element.scrollLeft;
} else {
return null;
}
});
app.util.dom.scroll_to = (function app$util$dom$scroll_to(var_args){
var G__47419 = arguments.length;
switch (G__47419) {
case 2:
return app.util.dom.scroll_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.dom.scroll_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.scroll_to.cljs$core$IFn$_invoke$arity$2 = (function (element,options){
return element.scrollTo(options);
}));

(app.util.dom.scroll_to.cljs$core$IFn$_invoke$arity$3 = (function (element,x,y){
return element.scrollTo(x,y);
}));

(app.util.dom.scroll_to.cljs$lang$maxFixedArity = 3);

app.util.dom.set_scroll_pos_BANG_ = (function app$util$dom$set_scroll_pos_BANG_(element,scroll){
if((!((element == null)))){
return app.util.object.set_BANG_(element,"scrollTop",scroll);
} else {
return null;
}
});
app.util.dom.set_h_scroll_pos_BANG_ = (function app$util$dom$set_h_scroll_pos_BANG_(element,scroll){
if((!((element == null)))){
return app.util.object.set_BANG_(element,"scrollLeft",scroll);
} else {
return null;
}
});
app.util.dom.scroll_into_view_BANG_ = (function app$util$dom$scroll_into_view_BANG_(var_args){
var G__47429 = arguments.length;
switch (G__47429) {
case 1:
return app.util.dom.scroll_into_view_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.scroll_into_view_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.scroll_into_view_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (element){
return app.util.dom.scroll_into_view_BANG_.cljs$core$IFn$_invoke$arity$2(element,false);
}));

(app.util.dom.scroll_into_view_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (element,options){
if((!((element == null)))){
return element.scrollIntoView(options);
} else {
return null;
}
}));

(app.util.dom.scroll_into_view_BANG_.cljs$lang$maxFixedArity = 2);

app.util.dom.scroll_into_view_if_needed_BANG_ = (function app$util$dom$scroll_into_view_if_needed_BANG_(var_args){
var G__47437 = arguments.length;
switch (G__47437) {
case 1:
return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (element){
return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$2(element,false);
}));

(app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (element,options){
if((!((element == null)))){
return element.scrollIntoViewIfNeeded(options);
} else {
return null;
}
}));

(app.util.dom.scroll_into_view_if_needed_BANG_.cljs$lang$maxFixedArity = 2);

app.util.dom.is_in_viewport_QMARK_ = (function app$util$dom$is_in_viewport_QMARK_(element){
if((!((element == null)))){
var rect = element.getBoundingClientRect();
var height = (function (){var or__5025__auto__ = window.innerHeight;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return document.documentElement.clientHeight;
}
})();
var width = (function (){var or__5025__auto__ = window.innerWidth;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return document.documentElement.clientWidth;
}
})();
return (((rect.top >= (0))) && ((((rect.left >= (0))) && ((((rect.bottom <= height)) && ((rect.right <= width)))))));
} else {
return null;
}
});
app.util.dom.trigger_download_uri = (function app$util$dom$trigger_download_uri(filename,mtype,uri){
var link = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("a");
var extension = app.common.media.mtype__GT_extension(mtype);
var filename__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = extension;
if(cljs.core.truth_(and__5023__auto__)){
return (!(cuerdas.core.ends_with_QMARK_(filename,extension)));
} else {
return and__5023__auto__;
}
})())?""+(filename ?? "")+(extension ?? ""):filename);
app.util.object.set_BANG_(link,"href",uri);

app.util.object.set_BANG_(link,"download",filename__$1);

app.util.object.set_BANG_(link.style,"display","none");

document.body.appendChild(link);

link.click();

return link.remove();
});
app.util.dom.trigger_download = (function app$util$dom$trigger_download(filename,blob){
return app.util.dom.trigger_download_uri(filename,blob.type,app.util.webapi.create_uri(blob));
});
/**
 * Create an instance of DOM Event
 */
app.util.dom.event = (function app$util$dom$event(var_args){
var G__47449 = arguments.length;
switch (G__47449) {
case 1:
return app.util.dom.event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.event.cljs$core$IFn$_invoke$arity$1 = (function (type){
return (new Event(type));
}));

(app.util.dom.event.cljs$core$IFn$_invoke$arity$2 = (function (type,options){
return (new Event(type,options));
}));

(app.util.dom.event.cljs$lang$maxFixedArity = 2);

app.util.dom.dispatch_event = (function app$util$dom$dispatch_event(target,event){
if((!((target == null)))){
return target.dispatchEvent(event);
} else {
return null;
}
});
app.util.dom.save_as = (function app$util$dom$save_as(uri,filename,mtype,description){
if(cljs.core.truth_(app.util.object.contains_QMARK_(app.util.globals.window,"showSaveFilePicker"))){
var extension = app.common.media.mtype__GT_extension(mtype);
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"suggestedName","suggestedName",1964460200),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"accept","accept",1874130431),cljs.core.PersistentArrayMap.createAsIfByAssoc([mtype,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join('')], null)])], null)], null)], null);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.impl.resolved(null),(function (___45733__auto__){
return promesa.protocols._mcat(promesa.impl.coerce(app.util.globals.window.showSaveFilePicker(cljs.core.clj__GT_js(opts))),(function (file_system){
return promesa.protocols._mcat(promesa.impl.coerce(file_system.createWritable()),(function (writable){
return promesa.protocols._mcat(promesa.impl.coerce(fetch(uri)),(function (response){
return promesa.protocols._mcat(promesa.impl.coerce(response.blob()),(function (blob){
return promesa.protocols._mcat(promesa.impl.coerce(writable.write(blob)),(function (_){
return promesa.impl.coerce(writable.close());
}));
}));
}));
}));
}));
})),(function (p1__47457_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(p1__47457_SHARP_),DOMException)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__47457_SHARP_.name,"AbortError")))){
return null;
} else {
return app.util.dom.trigger_download_uri(filename,mtype,uri);
}
}));
} else {
return app.util.dom.trigger_download_uri(filename,mtype,uri);
}
});
app.util.dom.left_mouse_QMARK_ = (function app$util$dom$left_mouse_QMARK_(bevent){
var event = bevent.nativeEvent;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),event.which);
});
app.util.dom.middle_mouse_QMARK_ = (function app$util$dom$middle_mouse_QMARK_(bevent){
var event = bevent.nativeEvent;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),event.which);
});
app.util.dom.open_new_window = (function app$util$dom$open_new_window(var_args){
var G__47474 = arguments.length;
switch (G__47474) {
case 1:
return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$3(uri,"_blank","noopener,noreferrer");
}));

(app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$2 = (function (uri,name){
return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$3(uri,name,"noopener,noreferrer");
}));

(app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$3 = (function (uri,name,features__$1){
var temp__5825__auto__ = window.open(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),name,features__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var new_window = temp__5825__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,"_blank")){
var temp__5825__auto____$1 = new_window.location;
if(cljs.core.truth_(temp__5825__auto____$1)){
var location__$1 = temp__5825__auto____$1;
return location__$1.reload();
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

(app.util.dom.open_new_window.cljs$lang$maxFixedArity = 3);

app.util.dom.browser_back = (function app$util$dom$browser_back(){
return window.history.back();
});
app.util.dom.reload_current_window = (function app$util$dom$reload_current_window(var_args){
var G__47479 = arguments.length;
switch (G__47479) {
case 0:
return app.util.dom.reload_current_window.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.util.dom.reload_current_window.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.reload_current_window.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.util.globals.location.reload();
}));

(app.util.dom.reload_current_window.cljs$core$IFn$_invoke$arity$1 = (function (force_QMARK_){
return app.util.globals.location.reload(force_QMARK_);
}));

(app.util.dom.reload_current_window.cljs$lang$maxFixedArity = 1);

app.util.dom.scroll_by_BANG_ = (function app$util$dom$scroll_by_BANG_(var_args){
var G__47481 = arguments.length;
switch (G__47481) {
case 3:
return app.util.dom.scroll_by_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return app.util.dom.scroll_by_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.scroll_by_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (element,x,y){
return element.scrollBy(x,y);
}));

(app.util.dom.scroll_by_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return app.util.dom.scroll_by_BANG_.cljs$core$IFn$_invoke$arity$3(window,x,y);
}));

(app.util.dom.scroll_by_BANG_.cljs$lang$maxFixedArity = 3);

app.util.dom.animate_BANG_ = (function app$util$dom$animate_BANG_(var_args){
var G__47483 = arguments.length;
switch (G__47483) {
case 3:
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (item,keyframes,duration){
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(item,keyframes,duration,null);
}));

(app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (item,keyframes,duration,onfinish){
var animation = item.animate(keyframes,duration);
if(cljs.core.truth_(onfinish)){
return (animation.onfinish = onfinish);
} else {
return null;
}
}));

(app.util.dom.animate_BANG_.cljs$lang$maxFixedArity = 4);

app.util.dom.is_child_QMARK_ = (function app$util$dom$is_child_QMARK_(node,candidate){
var and__5023__auto__ = (!((node == null)));
if(and__5023__auto__){
var and__5023__auto____$1 = (!((candidate == null)));
if(and__5023__auto____$1){
return node.contains(candidate);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
app.util.dom.seq_nodes = (function app$util$dom$seq_nodes(root_node){
var branch_QMARK_ = (function app$util$dom$seq_nodes_$_branch_QMARK_(node){
return app.common.data.not_empty_QMARK_(get_children(node));
});
var get_children = (function app$util$dom$seq_nodes_$_get_children(node){
return cljs.core.seq(node.children);
});
return cljs.core.tree_seq(branch_QMARK_,get_children,root_node);
});
app.util.dom.check_font_QMARK_ = (function app$util$dom$check_font_QMARK_(font){
var fonts = app.util.globals.document.fonts;
return fonts.check(font);
});
app.util.dom.load_font = (function app$util$dom$load_font(font){
var fonts = app.util.globals.document.fonts;
return fonts.load(font);
});
app.util.dom.text_measure = (function app$util$dom$text_measure(font){
var element = app.util.globals.document.createElement("canvas");
var context = element.getContext("2d");
var _ = (context.font = font);
var measure = context.measureText("Ag");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ascent","ascent",-1986032338),measure.fontBoundingBoxAscent,new cljs.core.Keyword(null,"descent","descent",1331783219),measure.fontBoundingBoxDescent], null);
});
app.util.dom.clone_node = (function app$util$dom$clone_node(var_args){
var G__47488 = arguments.length;
switch (G__47488) {
case 1:
return app.util.dom.clone_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.clone_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.clone_node.cljs$core$IFn$_invoke$arity$1 = (function (node){
return app.util.dom.clone_node.cljs$core$IFn$_invoke$arity$2(node,true);
}));

(app.util.dom.clone_node.cljs$core$IFn$_invoke$arity$2 = (function (node,deep_QMARK_){
return node.cloneNode(deep_QMARK_);
}));

(app.util.dom.clone_node.cljs$lang$maxFixedArity = 2);

app.util.dom.get_children = (function app$util$dom$get_children(node){
if((!((node == null)))){
return node.children;
} else {
return null;
}
});
app.util.dom.has_children_QMARK_ = (function app$util$dom$has_children_QMARK_(node){
return (node.children.length > (0));
});
/**
 * Given a canvas' context 2d and the text info returns tis ascent/descent info
 */
app.util.dom.measure_text = (function app$util$dom$measure_text(context_2d,font_size,font_family,text){
var _ = (context_2d.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_family)].join(''));
var measures = context_2d.measureText(text);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"descent","descent",1331783219),measures.actualBoundingBoxDescent,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),measures.actualBoundingBoxAscent], null);
});
potok.v2.core.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.util.dom","focus-element","app.util.dom/focus-element",899201855),(function (_,p__47491){
var map__47492 = p__47491;
var map__47492__$1 = cljs.core.__destructure_map(map__47492);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if((typeof app.util.dom.focus_element_47493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.util.dom.focus_element_47493 = (function (_,p__47491,map__47492,name,meta47494){
this._ = _;
this.p__47491 = p__47491;
this.map__47492 = map__47492;
this.name = name;
this.meta47494 = meta47494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.util.dom.focus_element_47493.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.util.dom.focus_element_47493.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.util.dom","focus-element","app.util.dom/focus-element",899201855);
}));

(app.util.dom.focus_element_47493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47495,meta47494__$1){
var self__ = this;
var _47495__$1 = this;
return (new app.util.dom.focus_element_47493(self__._,self__.p__47491,self__.map__47492,self__.name,meta47494__$1));
}));

(app.util.dom.focus_element_47493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47495){
var self__ = this;
var _47495__$1 = this;
return self__.meta47494;
}));

(app.util.dom.focus_element_47493.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.util.dom.focus_element_47493.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return app.util.dom.focus_BANG_(app.util.dom.get_element(self__.name));
}));
}

return (new app.util.dom.focus_element_47493(_,p__47491,map__47492__$1,name,cljs.core.PersistentArrayMap.EMPTY));
}));
app.util.dom.first_child = (function app$util$dom$first_child(node){
return node.firstChild;
});
app.util.dom.last_child = (function app$util$dom$last_child(node){
return node.lastChild;
});
app.util.dom.prevent_browser_gesture_navigation_BANG_ = (function app$util$dom$prevent_browser_gesture_navigation_BANG_(){
(document.documentElement.style.overscrollBehaviorX = "none");

return (document.body.style.overscrollBehaviorX = "none");
});

//# sourceMappingURL=app.util.dom.js.map
