import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.logging.js";
import "./app.common.types.path.js";
import "./app.main.ui.shapes.custom_stroke.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.path');
app.main.ui.shapes.path.content__GT_string = (function app$main$ui$shapes$path$content__GT_string(content){
if((content == null)){
return "";
} else {
if(app.common.types.path.content_QMARK_(content)){
return content.toString();
} else {
var content__$1 = app.common.types.path.content(content);
return content__$1.toString();

}
}
});
app.main.ui.shapes.path.path_shape = (function app$main$ui$shapes$path$path_shape(props_54343){
var shape = props_54343.shape;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224));
var pdata = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(content)],(function (){
try{return app.main.ui.shapes.path.content__GT_string(content);
}catch (e54344){var cause = e54344;
if(app.common.logging.enabled_QMARK_("app.main.ui.shapes.path",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"unexpected error on formatting path"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-name","shape-name",23994785),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null)], null);
}),null)),cause,null,"app.main.ui.shapes.path",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return "";
}}));
return rumext.v2.jsx(app.main.ui.shapes.custom_stroke.shape_custom_strokes,{'shape':shape,'children':rumext.v2.jsx("path",{'d':pdata})});
});

(app.main.ui.shapes.path.path_shape.displayName = "path-shape");


//# sourceMappingURL=app.main.ui.shapes.path.js.map
