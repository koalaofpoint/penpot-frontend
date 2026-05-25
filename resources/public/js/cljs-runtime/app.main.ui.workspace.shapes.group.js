import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.refs.js";
import "./app.main.ui.shapes.group.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.workspace.shapes.common.js";
import "./app.main.ui.workspace.shapes.debug.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.group');
app.main.ui.workspace.shapes.group.group_wrapper_factory = (function app$main$ui$workspace$shapes$group$group_wrapper_factory(shape_wrapper){
var group_shape = app.main.ui.shapes.group.group_shape(shape_wrapper);
var group_wrapper__73583 = (function (p1__73581_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__73581_SHARP_,app.main.ui.workspace.shapes.common.check_shape_props);
})((function app$main$ui$workspace$shapes$group$group_wrapper_factory_$_group_wrapper(props_73582){
var props = props_73582;
var shape = (props["shape"]);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var childs_STAR_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.refs.children_objects(shape_id);
}));
var childs = rumext.v2.deref(childs_STAR_);
return rumext.v2.jsxs(app.main.ui.shapes.shape.shape_container,{'shape':shape,'children':[rumext.v2.jsx(group_shape,{'shape':shape,'childs':childs}),(cljs.core.truth_(cljs.core._STAR_assert_STAR_)?rumext.v2.jsx(app.main.ui.workspace.shapes.debug.shape_debug,{'shape':shape}):null)]});
}));
(group_wrapper__73583.displayName = "group-wrapper");

return group_wrapper__73583;
});

//# sourceMappingURL=app.main.ui.workspace.shapes.group.js.map
