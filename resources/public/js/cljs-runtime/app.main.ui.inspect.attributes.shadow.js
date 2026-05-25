import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.inspect.attributes.common.js";
import "./app.util.code_gen.style_css.js";
import "./app.util.code_gen.style_css_formats.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.shadow');
app.main.ui.inspect.attributes.shadow.has_shadow_QMARK_ = (function app$main$ui$inspect$attributes$shadow$has_shadow_QMARK_(shape){
return new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape);
});
app.main.ui.inspect.attributes.shadow.shadow_copy_data = (function app$main$ui$inspect$attributes$shadow$shadow_copy_data(shadow__$1){
return app.util.code_gen.style_css.shadow__GT_css(shadow__$1);
});
/**
 * Converts a fill object to CSS color string in the specified format.
 */
app.main.ui.inspect.attributes.shadow.copy_color_data = (function app$main$ui$inspect$attributes$shadow$copy_color_data(color,format){
return app.util.code_gen.style_css_formats.format_color_value(color,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),format], null));
});
app.main.ui.inspect.attributes.shadow.shadow_block = (function app$main$ui$inspect$attributes$shadow$shadow_block(props_74680){
var map__74681 = rumext.v2.util.wrap_props(props_74680);
var map__74681__$1 = cljs.core.__destructure_map(map__74681);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74681__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var color_format = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hex","hex",41691346));
var color_format_STAR_ = cljs.core.deref(color_format);
var label = app.main.ui.inspect.attributes.common.get_css_rule_humanized(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(shadow__$1));
var on_change_format = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (format){
return cljs.core.reset_BANG_(color_format,format);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_shadow__attributes-shadow-block",'children':[rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_shadow__shadow-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':label}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.shadow.shadow_copy_data(shadow__$1),'className':"main_ui_inspect_attributes_shadow__color-row-copy-btn",'children':rumext.v2.jsxs("div",{'title':""+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.offsetx") ?? "")+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.offsety") ?? "")+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.blur") ?? "")+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.spread") ?? ""),'className':"main_ui_inspect_attributes_shadow__button-children",'children':[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(shadow__$1)),"px"].join('')," ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(shadow__$1)),"px"].join('')," ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shadow__$1)),"px"].join('')," ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spread","spread",862337191).cljs$core$IFn$_invoke$arity$1(shadow__$1)),"px"].join('')]})})})]}),rumext.v2.jsx(app.main.ui.inspect.attributes.common.color_row,{'color':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shadow__$1),'format':cljs.core.deref(color_format),'copy-data':app.main.ui.inspect.attributes.shadow.copy_color_data(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shadow__$1),color_format_STAR_),'on-change-format':on_change_format})]});
});

(app.main.ui.inspect.attributes.shadow.shadow_block.displayName = "shadow-block");

app.main.ui.inspect.attributes.shadow.shadow_panel = (function app$main$ui$inspect$attributes$shadow$shadow_panel(props_74682){
var map__74683 = rumext.v2.util.wrap_props(props_74682);
var map__74683__$1 = cljs.core.__destructure_map(map__74683);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74683__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.attributes.shadow.has_shadow_QMARK_,shapes);
if(((cljs.core.seq(shapes__$1)) && ((cljs.core.count(shapes__$1) > (0))))){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_shadow__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.shadow"),'className':"main_ui_inspect_attributes_shadow__title-wrapper",'titleClass':"main_ui_inspect_attributes_shadow__shadow-attr-title"}),rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_shadow__attributes-content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,shadow__$1){
out_arr__46744__auto____$1.push(rumext.v2.jsx(app.main.ui.inspect.attributes.shadow.shadow_block,{'shape':shape,'shadow':shadow__$1},""+"block-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+"-shadow"));

return out_arr__46744__auto____$1;
}),[],new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape)));

return out_arr__46744__auto__;
}),[],shapes__$1)})]});
} else {
return null;
}
});

(app.main.ui.inspect.attributes.shadow.shadow_panel.displayName = "shadow-panel");


//# sourceMappingURL=app.main.ui.inspect.attributes.shadow.js.map
