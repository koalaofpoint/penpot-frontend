import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.frame_preview');
app.main.ui.frame_preview.frame_preview = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$frame_preview$frame_preview(props_82867){
var iframe_ref = rumext.v2.use_ref(null);
var last_data_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var zoom_ref = rumext.v2.use_ref(null);
var zoom_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((1));
var zoom = cljs.core.deref(zoom_STAR_);
var handle_load = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (data,width,height){
cljs.core.reset_BANG_(last_data_STAR_,data);

var iframe_dom = rumext.v2.ref_val(iframe_ref);
if(cljs.core.truth_(iframe_dom)){
(iframe_dom["width"] = (width + (64)));

(iframe_dom["height"] = (height + (64)));

iframe_dom.contentWindow.document.open();

iframe_dom.contentWindow.document.write(data);

return iframe_dom.contentWindow.document.close();
} else {
return null;
}
}));
var load_ref = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (iframe_dom){
console.log("load-ref",iframe_dom);

rumext.v2.set_ref_val_BANG_(iframe_ref,iframe_dom);

if(cljs.core.truth_((function (){var and__5023__auto__ = iframe_dom;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.deref(last_data_STAR_);
} else {
return and__5023__auto__;
}
})())){
iframe_dom.contentWindow.document.open();

iframe_dom.contentWindow.document.write(cljs.core.deref(last_data_STAR_));

return iframe_dom.contentWindow.document.close();
} else {
return null;
}
}));
var change_zoom = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
var zoom_level = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(rumext.v2.ref_val(zoom_ref).value);
return cljs.core.reset_BANG_(zoom_STAR_,(zoom_level / (100)));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
(window["load"] = handle_load);

return (function (){
return delete window["load"];
});
}));

return rumext.v2.jsxs("div",{'style':{'display':"flex",'width':"100%",'height':"100%",'flexDirection':"column",'overflow':"auto",'alignItems':"center"},'children':[rumext.v2.jsx("input",{'id':"zoom-input",'ref':zoom_ref,'type':"range",'min':(1),'max':(400),'defaultValue':(100),'onChange':change_zoom,'style':{'maxWidth':"500px"}}),rumext.v2.jsx("div",{'style':{'width':"100%",'height':"100%",'overflow':"auto"},'children':rumext.v2.jsx("iframe",{'ref':load_ref,'frameBorder':"0",'scrolling':"no",'style':{'transformOrigin':"top left",'transform':["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zoom),")"].join('')}})})]});
}));

(app.main.ui.frame_preview.frame_preview.displayName = "frame-preview");


//# sourceMappingURL=app.main.ui.frame_preview.js.map
