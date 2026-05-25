import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.mask.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.group');
app.main.ui.shapes.group.group_shape = (function app$main$ui$shapes$group$group_shape(shape_wrapper){
var render_mask = app.main.ui.shapes.mask.mask_factory(shape_wrapper);
var group_shape__54663 = (function app$main$ui$shapes$group$group_shape_$_group_shape(props_54661){
var props = props_54661;
var shape = (props["shape"]);
var childs = (props["childs"]);
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var masked_group_QMARK_ = new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(shape);
var mask = ((masked_group_QMARK_)?cljs.core.first(childs):null);
var childs__$1 = ((masked_group_QMARK_)?cljs.core.rest(childs):childs);
var wrapper = ((masked_group_QMARK_)?"g":rumext.v2.Fragment);
var clip_props = ((masked_group_QMARK_)?({"clipPath": app.main.ui.shapes.mask.clip_url(render_id,mask)}):({}));
var mask_props = ((masked_group_QMARK_)?({"mask": app.main.ui.shapes.mask.mask_url(render_id,mask)}):({}));
var current_svg_root_id = rumext.v2.use_ctx(app.main.ui.context.current_svg_root_id);
var vec__54665 = ((((cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772))) && (cljs.core.not(current_svg_root_id))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rumext.v2.provider(app.main.ui.context.current_svg_root_id),({"value": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rumext.v2.Fragment,({})], null));
var svg_wrapper = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54665,(0),null);
var svg_wrapper_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54665,(1),null);
return rumext.v2.create_element(svg_wrapper,svg_wrapper_props,rumext.v2.create_element(wrapper,clip_props,rumext.v2.create_element(wrapper,mask_props,((masked_group_QMARK_)?rumext.v2.jsx(render_mask,{'mask':mask}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,item){
out_arr__46744__auto__.push(rumext.v2.jsx(shape_wrapper,{'shape':item},""+((item?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"id","id",-1388402092))) ?? "")));

return out_arr__46744__auto__;
}),[],childs__$1))));
});
(group_shape__54663.displayName = "group-shape");

return group_shape__54663;
});

//# sourceMappingURL=app.main.ui.shapes.group.js.map
