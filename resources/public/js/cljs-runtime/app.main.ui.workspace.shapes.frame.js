import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.math.js";
import "./app.common.thumbnails.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.thumbnails.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.frame.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.workspace.shapes.common.js";
import "./app.main.ui.workspace.shapes.debug.js";
import "./app.main.ui.workspace.shapes.frame.dynamic_modifiers.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.thumbnails.js";
import "./app.util.timers.js";
import "./promesa.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.frame');
app.main.ui.workspace.shapes.frame.frame_shape_factory = (function app$main$ui$workspace$shapes$frame$frame_shape_factory(shape_wrapper){
var frame_shape = app.main.ui.shapes.frame.frame_shape(shape_wrapper);
var frame_shape_inner__52680 = (function (p1__52678_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__52678_SHARP_,app.main.ui.workspace.shapes.common.check_shape_props);
})(rumext.v2.forward_ref((function app$main$ui$workspace$shapes$frame$frame_shape_factory_$_frame_shape_inner(props_52679,ref){
var props = props_52679;
var shape = (props["shape"]);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var childs_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.refs.children_objects(shape_id);
}));
var childs = rumext.v2.deref(childs_ref);
return rumext.v2.jsxs(app.main.ui.shapes.shape.shape_container,{'shape':shape,'ref':ref,'children':[rumext.v2.jsx(frame_shape,{'shape':shape,'childs':childs}),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.shape_debug,{'shape':shape}):null)]});
})));
(frame_shape_inner__52680.displayName = "frame-shape-inner");

return frame_shape_inner__52680;
});
app.main.ui.workspace.shapes.frame.check_props = (function app$main$ui$workspace$shapes$frame$check_props(new_props,old_props){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props["thumbnail?"]),(old_props["thumbnail?"]))) && (((((new_props["objects"]) === (old_props["objects"]))) && (app.main.ui.workspace.shapes.common.check_shape_props(new_props,old_props)))));
});
app.main.ui.workspace.shapes.frame.nested_frame_wrapper_factory = (function app$main$ui$workspace$shapes$frame$nested_frame_wrapper_factory(shape_wrapper){
var frame_shape = app.main.ui.workspace.shapes.frame.frame_shape_factory(shape_wrapper);
var frame_wrapper__52684 = (function (p1__52682_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__52682_SHARP_,app.main.ui.workspace.shapes.frame.check_props);
})((function app$main$ui$workspace$shapes$frame$nested_frame_wrapper_factory_$_frame_wrapper(props_52683){
var props = props_52683;
var shape = (props["shape"]);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var frame_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var node_ref = rumext.v2.use_ref(null);
var modifiers_STAR_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id)],(function (){
return app.main.refs.workspace_modifiers_by_frame_id(frame_id);
}));
var modifiers = rumext.v2.deref(modifiers_STAR_);
app.main.ui.workspace.shapes.frame.dynamic_modifiers.use_dynamic_modifiers(objects,rumext.v2.ref_val(node_ref),modifiers);

return rumext.v2.jsx(frame_shape,{'shape':shape,'ref':node_ref});
}));
(frame_wrapper__52684.displayName = "frame-wrapper");

return frame_wrapper__52684;
});
app.main.ui.workspace.shapes.frame.image_size = (function app$main$ui$workspace$shapes$frame$image_size(href){
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve,_){
var img = (new Image());
var load_fn = (function (){
var width = img.naturalWidth;
var height = img.naturalHeight;
var G__52686 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__52686) : resolve.call(null,G__52686));
});
(img.onload = load_fn);

return (img.src = href);
}));
});
app.main.ui.workspace.shapes.frame.check_thumbnail_size = (function app$main$ui$workspace$shapes$frame$check_thumbnail_size(image_node,bounds,file_id,page_id,frame_id){
var href = app.util.dom.get_attribute(image_node,"href");
var width = (bounds?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (bounds?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"height","height",1025178622)));
var vec__52689 = app.util.thumbnails.get_relative_size(width,height);
var fixed_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52689,(0),null);
var fixed_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52689,(1),null);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.shapes.frame.image_size(href),(function (p__52693){
var map__52694 = p__52693;
var map__52694__$1 = cljs.core.__destructure_map(map__52694);
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52694__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52694__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((((!(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$3(width__$1,fixed_width,(5))))) || ((!(app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$3(height__$1,fixed_height,(5))))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.thumbnails.update_thumbnail(file_id,page_id,frame_id,"frame","check-thumbnail-size"));
} else {
return null;
}
}));
});
app.main.ui.workspace.shapes.frame.root_frame_wrapper_factory = (function app$main$ui$workspace$shapes$frame$root_frame_wrapper_factory(shape_wrapper){
var frame_shape = app.main.ui.workspace.shapes.frame.frame_shape_factory(shape_wrapper);
var frame_wrapper__52697 = (function (p1__52695_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__52695_SHARP_,app.main.ui.workspace.shapes.frame.check_props);
})((function app$main$ui$workspace$shapes$frame$root_frame_wrapper_factory_$_frame_wrapper(props_52696){
var props = props_52696;
var shape = (props["shape"]);
var thumbnail_QMARK_ = (props["thumbnail?"]);
var objects = (props["objects"]);
var file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var page_id = rumext.v2.use_ctx(app.main.ui.context.current_page_id);
var frame_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var container_ref = rumext.v2.use_ref(null);
var content_ref = rumext.v2.use_ref(null);
var bounds = app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-margin?","ignore-margin?",1173241988),false], null));
var x = (bounds?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (bounds?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (bounds?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (bounds?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"height","height",1025178622)));
var thumbnail_uri_STAR_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(page_id),rumext.v2.adapt(frame_id)],(function (){
var object_id = app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$4(file_id,page_id,frame_id,"frame");
return app.main.refs.workspace_thumbnail_by_id(object_id);
}));
var thumbnail_uri = rumext.v2.deref(thumbnail_uri_STAR_);
var modifiers_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id)],(function (){
return app.main.refs.workspace_modifiers_by_frame_id(frame_id);
}));
var modifiers = rumext.v2.deref(modifiers_ref);
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape) === true;
var content_visible_QMARK_ = (((!(thumbnail_QMARK_))) || ((!(thumbnail_uri))));
var tries_ref = rumext.v2.use_ref((0));
var imposter_ref = rumext.v2.use_ref(null);
var imposter_loaded = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var task_ref = rumext.v2.use_ref(null);
var on_load = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
rumext.v2.set_ref_val_BANG_(tries_ref,(0));

return cljs.core.reset_BANG_(imposter_loaded,true);
}));
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
var current_tries = rumext.v2.ref_val(tries_ref);
var new_tries = rumext.v2.set_ref_val_BANG_(tries_ref,(current_tries + (1)));
var delay_in_ms = (app.common.math.pow((2),new_tries) * (1000));
var retry_fn = (function (){
var imposter = rumext.v2.ref_val(imposter_ref);
if((imposter == null)){
return null;
} else {
return app.util.dom.set_attribute_BANG_(imposter,"href",thumbnail_uri);
}
});
if((new_tries < (8))){
return rumext.v2.set_ref_val_BANG_(task_ref,app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2(delay_in_ms,retry_fn));
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
if((!((thumbnail_uri == null)))){
} else {
app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.thumbnails.update_thumbnail(file_id,page_id,frame_id,"frame","root-frame"));
}));
}

return (function (){
var temp__5825__auto__ = rumext.v2.ref_val(task_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var task = temp__5825__auto__;
return app.common.data.close_BANG_(task);
} else {
return null;
}
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(thumbnail_uri)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(task_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var task = temp__5825__auto__;
return app.common.data.close_BANG_(task);
} else {
return null;
}
}));

app.main.ui.workspace.shapes.frame.dynamic_modifiers.use_dynamic_modifiers(objects,rumext.v2.ref_val(content_ref),modifiers);

return rumext.v2.jsxs(app.main.ui.shapes.shape.shape_container,{'shape':shape,'children':[rumext.v2.jsxs("g",{'className':"frame-container",'id':""+"frame-container-"+(frame_id ?? ""),'opacity':((hidden_QMARK_)?(0):null),'children':[(((((!(content_visible_QMARK_))) && (cljs.core.not(cljs.core.deref(imposter_loaded)))))?rumext.v2.jsx("g",{'className':"frame-placeholder",'children':rumext.v2.jsx("rect",{'x':x,'y':y,'width':width,'height':height,'fill':"url(#frame-placeholder-gradient)"})}):null),rumext.v2.jsxs("g",{'className':"frame-imposter",'children':[rumext.v2.jsx("image",{'width':width,'height':height,'className':"thumbnail-bitmap",'x':x,'onError':on_error,'href':thumbnail_uri,'style':{'display':((((thumbnail_QMARK_) && (thumbnail_uri)))?null:"none")},'y':y,'ref':imposter_ref,'onLoad':on_load}),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572)))?rumext.v2.jsx("rect",{'x':(x + (2)),'y':(y + (2)),'width':(width - (4)),'height':(height - (4)),'stroke':"#f0f",'strokeWidth':(2)}):null)]}),((content_visible_QMARK_)?rumext.v2.jsx("g",{'className':"frame-content",'id':""+"frame-content-"+(frame_id ?? ""),'ref':container_ref,'children':rumext.v2.jsx(frame_shape,{'shape':shape,'ref':content_ref})}):null)]},"frame-container"),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.shape_debug,{'shape':shape}):null)]});
}));
(frame_wrapper__52697.displayName = "frame-wrapper");

return frame_wrapper__52697;
});

//# sourceMappingURL=app.main.ui.workspace.shapes.frame.js.map
