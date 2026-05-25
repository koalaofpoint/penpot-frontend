import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.constants.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.product.input_with_meta');
app.main.ui.ds.product.input_with_meta.schema_COLON_input_with_meta = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null)], null);
app.main.ui.ds.product.input_with_meta.input_with_meta_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.product.input_with_meta.schema_COLON_input_with_meta);

app.main.ui.ds.product.input_with_meta.input_with_meta_STAR_ = (function app$main$ui$ds$product$input_with_meta$input_with_meta_STAR_(props_78314){
// ===== start props checking =====;

var res__47117__auto___78320 = app.main.ui.ds.product.input_with_meta.input_with_meta_STAR__validator(props_78314);
if((!((res__47117__auto___78320 == null)))){
var items__47118__auto___78321 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___78320);
var msg__47122__auto___78322 = ["invalid props on component input-with-meta*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___78321),"\n"].join('');
throw (new Error(msg__47122__auto___78322));
} else {
}

// ===== end props checking =====;

var max_length = undefined;
var meta = undefined;
var value = undefined;
var on_blur = undefined;
var is_editing = undefined;
var props = undefined;
var {"value": value, "meta": meta, "maxLength": max_length, "isEditing": is_editing, "onBlur": on_blur, ...props} = props_78314;

var title = (cljs.core.truth_(meta)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(meta)].join(''):value);
var editing_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(is_editing,false));
var editing_QMARK_ = cljs.core.deref(editing_STAR_);
var input_ref = rumext.v2.use_ref();
var last_node_STAR_ = rumext.v2.use_ref(null);
var ref_cb = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (node){
rumext.v2.set_ref_val_BANG_(input_ref,node);

if(cljs.core.truth_(node)){
return rumext.v2.set_ref_val_BANG_(last_node_STAR_,node);
} else {
return null;
}
}));
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

cljs.core.reset_BANG_(editing_STAR_,true);

return app.util.dom.focus_BANG_(rumext.v2.ref_val(input_ref));
}));
var on_stop_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_blur)],(function (event){
app.util.dom.stop_propagation(event);

cljs.core.reset_BANG_(editing_STAR_,false);

if(cljs.core.truth_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(event) : on_blur.call(null,event));
} else {
return null;
}
}));
var on_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return app.util.dom.select_text_BANG_(app.util.dom.get_target(event));
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var enter_QMARK_ = app.util.keyboard.enter_QMARK_(event);
var esc_QMARK_ = app.util.keyboard.esc_QMARK_(event);
var node = app.util.dom.get_target(event);
if(enter_QMARK_){
app.util.dom.blur_BANG_(node);
} else {
}

if(esc_QMARK_){
return app.util.dom.blur_BANG_(node);
} else {
return null;
}
}));
var props__$1 = {...props, 'ref':ref_cb,'defaultValue':value,'maxLength':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(max_length,app.main.constants.max_input_length),'autoFocus':true,'onFocus':on_focus,'onBlur':on_stop_edit,'onKeyDown':handle_key_down};
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_blur),rumext.v2.adapt(last_node_STAR_)],(function (){
return (function (){
var input = rumext.v2.ref_val(last_node_STAR_);
var fake_blur_event = ({"type": "blur", "target": input, "currentTarget": input, "stopPropagation": (function (){
return null;
}), "preventDefault": (function (){
return null;
})});
if(cljs.core.truth_(input)){
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(fake_blur_event) : on_blur.call(null,fake_blur_event));
} else {
return null;
}
});
}));

if(cljs.core.truth_(editing_QMARK_)){
return rumext.v2.jsx("div",{'className':"main_ui_ds_product_input_with_meta__input-with-meta-edit-container",'children':rumext.v2.create_element(app.main.ui.ds.controls.input.input_STAR_,props__$1)});
} else {
return rumext.v2.jsxs("div",{'title':title,'onClick':on_edit,'className':"main_ui_ds_product_input_with_meta__input-with-meta-container",'children':[rumext.v2.jsx("span",{'className':"main_ui_ds_product_input_with_meta__input-with-meta-value",'children':value}),(cljs.core.truth_(meta)?rumext.v2.jsx("span",{'className':"main_ui_ds_product_input_with_meta__input-with-meta-data",'children':meta}):null)]});
}
});

(app.main.ui.ds.product.input_with_meta.input_with_meta_STAR_.displayName = "input-with-meta*");


//# sourceMappingURL=app.main.ui.ds.product.input_with_meta.js.map
