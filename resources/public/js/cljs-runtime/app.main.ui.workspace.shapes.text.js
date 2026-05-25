import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.refs.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.shapes.text.js";
import "./app.main.ui.workspace.shapes.debug.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.text');
app.main.ui.workspace.shapes.text.text_wrapper = (function app$main$ui$workspace$shapes$text$text_wrapper(props_52676){
var shape = props_52676.shape;
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var text_modifier_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.refs.workspace_text_modifier_by_id(shape_id);
}));
var text_modifier = rumext.v2.deref(text_modifier_ref);
var shape__$1 = (((((!((shape == null)))) && ((!((text_modifier == null))))))?app.main.data.workspace.texts.apply_text_modifier(shape,text_modifier):shape);
return rumext.v2.jsxs(app.main.ui.shapes.shape.shape_container,{'shape':shape__$1,'children':[rumext.v2.jsx("g",{'className':"text-shape",'children':rumext.v2.jsx(app.main.ui.shapes.text.text_shape,{'shape':shape__$1})},""+(shape_id ?? "")),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.shape_debug,{'shape':shape__$1}):null)]});
});

(app.main.ui.workspace.shapes.text.text_wrapper.displayName = "text-wrapper");


//# sourceMappingURL=app.main.ui.workspace.shapes.text.js.map
