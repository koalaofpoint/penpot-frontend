import "./cljs_env.js";
import "./cljs.core.js";
import "./app.util.dom.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.common');
app.main.ui.workspace.sidebar.options.common.advanced_options_STAR_ = (function app$main$ui$workspace$sidebar$options$common$advanced_options_STAR_(props_78783){
var children = props_78783.children;
var class$ = props_78783.className;
var is_visible = props_78783.isVisible;
var ref = rumext.v2.use_ref(null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_visible)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
if(cljs.core.truth_(is_visible)){
return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1(node);
} else {
return null;
}
} else {
return null;
}
}));

if(cljs.core.truth_(is_visible)){
return rumext.v2.jsx("div",{'ref':ref,'className':(class$ ?? "")+" "+("main_ui_workspace_sidebar_options_common__advanced-options-wrapper" ?? ""),'children':children});
} else {
return null;
}
});

(app.main.ui.workspace.sidebar.options.common.advanced_options_STAR_.displayName = "advanced-options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.common.js.map
