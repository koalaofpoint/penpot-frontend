import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.util.modules.js";
import "./cuerdas.core.js";
import "./promesa.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.code_block');
app.main.ui.components.code_block.highlight_fn = (new cljs.core.Delay((function (){
return shadow.esm.load_by_name(new cljs.core.Symbol("app.util.code-highlight","highlight!","app.util.code-highlight/highlight!",-728712751,null));
}),null));
app.main.ui.components.code_block.code_block = (function app$main$ui$components$code_block$code_block(props_74770){
var type = props_74770.type;
var code = props_74770.code;
var block_ref = rumext.v2.use_ref();
var code__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(code);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(code__$1),rumext.v2.adapt(type)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(block_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (f,cause){
if(cljs.core.truth_(cause)){
return console.error(cause);
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(node) : f.call(null,node));
}
}),promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}),cljs.core.deref(app.main.ui.components.code_block.highlight_fn)));
} else {
return null;
}
}));

return rumext.v2.jsx("pre",{'ref':block_ref,'className':""+(type ?? "")+" "+("main_ui_components_code_block__code-display" ?? ""),'children':code__$1});
});

(app.main.ui.components.code_block.code_block.displayName = "code-block");


//# sourceMappingURL=app.main.ui.components.code_block.js.map
