import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.text.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.data.workspace.wasm_text.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.options.menus.typography.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.text.content.js";
import "./app.util.text.ui.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.text');
app.main.ui.workspace.sidebar.options.menus.text.text_align_options = (function app$main$ui$workspace$sidebar$options$menus$text$text_align_options(props_55942){
var map__55943 = rumext.v2.util.wrap_props(props_55942);
var map__55943__$1 = cljs.core.__destructure_map(map__55943);
var props = map__55943__$1;
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55943__$1,new cljs.core.Keyword(null,"values","values",372645556));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55943__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55943__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var map__55944 = values;
var map__55944__$1 = cljs.core.__destructure_map(map__55944);
var text_align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55944__$1,new cljs.core.Keyword(null,"text-align","text-align",1786091845));
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(on_blur)],(function (value){
var G__55945_55966 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),value], null);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55945_55966) : on_change.call(null,G__55945_55966));

if((!((on_blur == null)))){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_text__align-options",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':text_align,'on-change':handle_change,'name':"align-text-options",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"left",'id':"text-align-left",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.text-align-left"),'icon':app.main.ui.ds.foundations.assets.icon.text_align_left}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"center",'id':"text-align-center",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.text-align-center"),'icon':app.main.ui.ds.foundations.assets.icon.text_align_center}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"right",'id':"text-align-right",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.text-align-right"),'icon':app.main.ui.ds.foundations.assets.icon.text_align_right}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"justify",'id':"text-align-justify",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.text-align-justify"),'icon':app.main.ui.ds.foundations.assets.icon.text_justify})]})});
});

(app.main.ui.workspace.sidebar.options.menus.text.text_align_options.displayName = "text-align-options");

app.main.ui.workspace.sidebar.options.menus.text.text_direction_options = (function app$main$ui$workspace$sidebar$options$menus$text$text_direction_options(props_55946){
var map__55947 = rumext.v2.util.wrap_props(props_55946);
var map__55947__$1 = cljs.core.__destructure_map(map__55947);
var props = map__55947__$1;
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55947__$1,new cljs.core.Keyword(null,"values","values",372645556));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55947__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55947__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var direction = new cljs.core.Keyword(null,"text-direction","text-direction",590275785).cljs$core$IFn$_invoke$arity$1(values);
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(on_blur),rumext.v2.adapt(direction)],(function (value){
var dir = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,direction))?"none":value);
var G__55948_55967 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-direction","text-direction",590275785),dir], null);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55948_55967) : on_change.call(null,G__55948_55967));

if((!((on_blur == null)))){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_text__text-direction-options",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':direction,'on-change':handle_change,'name':"text-direction-options",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"ltr",'type':"checkbox",'id':"ltr-text-direction",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.direction-ltr"),'icon':app.main.ui.ds.foundations.assets.icon.text_ltr}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"rtl",'type':"checkbox",'id':"rtl-text-direction",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.direction-rtl"),'icon':app.main.ui.ds.foundations.assets.icon.text_rtl})]})});
});

(app.main.ui.workspace.sidebar.options.menus.text.text_direction_options.displayName = "text-direction-options");

app.main.ui.workspace.sidebar.options.menus.text.vertical_align = (function app$main$ui$workspace$sidebar$options$menus$text$vertical_align(props_55949){
var map__55950 = rumext.v2.util.wrap_props(props_55949);
var map__55950__$1 = cljs.core.__destructure_map(map__55950);
var props = map__55950__$1;
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55950__$1,new cljs.core.Keyword(null,"values","values",372645556));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55950__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55950__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var map__55951 = values;
var map__55951__$1 = cljs.core.__destructure_map(map__55951);
var vertical_align__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55951__$1,new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333));
var vertical_align__$2 = (function (){var or__5025__auto__ = vertical_align__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "top";
}
})();
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(on_blur)],(function (value){
var G__55952_55968 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),value], null);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55952_55968) : on_change.call(null,G__55952_55968));

if((!((on_blur == null)))){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_text__vertical-align-options",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':vertical_align__$2,'on-change':handle_change,'name':"vertical-align-text-options",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"top",'id':"vertical-text-align-top",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.align-top"),'icon':app.main.ui.ds.foundations.assets.icon.text_top}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"center",'id':"vertical-text-align-center",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.align-middle"),'icon':app.main.ui.ds.foundations.assets.icon.text_middle}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"bottom",'id':"vertical-text-align-bottom",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.align-bottom"),'icon':app.main.ui.ds.foundations.assets.icon.text_bottom})]})});
});

(app.main.ui.workspace.sidebar.options.menus.text.vertical_align.displayName = "vertical-align");

app.main.ui.workspace.sidebar.options.menus.text.grow_options = (function app$main$ui$workspace$sidebar$options$menus$text$grow_options(props_55954){
var map__55955 = rumext.v2.util.wrap_props(props_55954);
var map__55955__$1 = cljs.core.__destructure_map(map__55955);
var props = map__55955__$1;
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55955__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55955__$1,new cljs.core.Keyword(null,"values","values",372645556));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55955__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var grow_type = new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(values);
var editor_instance = rumext.v2.deref(app.main.refs.workspace_editor);
var handle_change_grow = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(on_blur),rumext.v2.adapt(editor_instance)],(function (value){
(on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));

var uid_55969 = Symbol();
var grow_type_55970__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(uid_55969));

if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2"))){
var content_55971 = (cljs.core.truth_(editor_instance)?app.util.text.content.dom__GT_cljs(app.main.data.workspace.texts.get_editor_root(editor_instance)):null);
if((!((content_55971 == null)))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.v2_update_text_shape_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(ids),content_55971,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"finalize?","finalize?",687625539),true], 0)));
} else {
}
} else {
}

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (p1__55953_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55953_SHARP_,new cljs.core.Keyword(null,"grow-type","grow-type",-908344411),grow_type_55970__$1);
})));

if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.wasm_text.resize_wasm_text_all(ids));
} else {
}

app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(uid_55969));
}));

if((!((on_blur == null)))){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_text__grow-options",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':app.common.data.name(grow_type),'on-change':handle_change_grow,'name':"grow-text-options",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"fixed",'id':"text-fixed-grow",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.grow-fixed"),'icon':app.main.ui.ds.foundations.assets.icon.text_fixed}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"auto-width",'id':"text-auto-width-grow",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.grow-auto-width"),'icon':app.main.ui.ds.foundations.assets.icon.text_auto_width}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"auto-height",'id':"text-auto-height-grow",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.grow-auto-height"),'icon':app.main.ui.ds.foundations.assets.icon.text_auto_height})]})});
});

(app.main.ui.workspace.sidebar.options.menus.text.grow_options.displayName = "grow-options");

app.main.ui.workspace.sidebar.options.menus.text.text_decoration_options = (function app$main$ui$workspace$sidebar$options$menus$text$text_decoration_options(props_55956){
var map__55957 = rumext.v2.util.wrap_props(props_55956);
var map__55957__$1 = cljs.core.__destructure_map(map__55957);
var props = map__55957__$1;
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55957__$1,new cljs.core.Keyword(null,"values","values",372645556));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55957__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55957__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var text_decoration = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "none";
}
})();
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(on_blur),rumext.v2.adapt(text_decoration)],(function (value){
var decoration = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,text_decoration))?"none":value);
var G__55958_55972 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),decoration], null);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55958_55972) : on_change.call(null,G__55958_55972));

if((!((on_blur == null)))){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_text__text-decoration-options",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':text_decoration,'on-change':handle_change,'name':"text-decoration-options",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"underline",'type':"checkbox",'id':"underline-text-decoration",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.options.text-options.underline",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"underline","underline",2018066703))], 0)),'icon':app.main.ui.ds.foundations.assets.icon.text_underlined}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"line-through",'type':"checkbox",'id':"line-through-text-decoration",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.options.text-options.strikethrough",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"line-through","line-through",-250988971))], 0)),'icon':app.main.ui.ds.foundations.assets.icon.text_stroked})]})});
});

(app.main.ui.workspace.sidebar.options.menus.text.text_decoration_options.displayName = "text-decoration-options");

app.main.ui.workspace.sidebar.options.menus.text.text_menu = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$options$menus$text$text_menu(props_55960){
var map__55961 = rumext.v2.util.wrap_props(props_55960);
var map__55961__$1 = cljs.core.__destructure_map(map__55961);
var props = map__55961__$1;
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55961__$1,new cljs.core.Keyword(null,"values","values",372645556));
var file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var typographies = rumext.v2.deref(app.main.refs.workspace_file_typography);
var libraries = rumext.v2.deref(app.main.refs.files);
var label = (function (){var G__55962 = type;
var G__55962__$1 = (((G__55962 instanceof cljs.core.Keyword))?G__55962.fqn:null);
switch (G__55962__$1) {
case "multiple":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.title-selection");

break;
case "group":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.title-group");

break;
default:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.title");

}
})();
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main-menu","main-menu",-1471790381),true,new cljs.core.Keyword(null,"more-options","more-options",1399478268),false], null));
var state = cljs.core.deref(state_STAR_);
var main_menu_open_QMARK_ = new cljs.core.Keyword(null,"main-menu","main-menu",-1471790381).cljs$core$IFn$_invoke$arity$1(state);
var more_options_open_QMARK_ = new cljs.core.Keyword(null,"more-options","more-options",1399478268).cljs$core$IFn$_invoke$arity$1(state);
var toggle_main_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(main_menu_open_QMARK_)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-menu","main-menu",-1471790381)], null),cljs.core.not(main_menu_open_QMARK_));
}));
var toggle_more_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(more_options_open_QMARK_)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"more-options","more-options",1399478268)], null),cljs.core.not(more_options_open_QMARK_));
}));
var typography_id = new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(values);
var typography_file_id = new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(values);
var emit_update_BANG_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(values)],(function (ids__$1,attrs){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.texts.save_font(cljs.core.select_keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.get_default_text_attrs(),values,attrs], 0)),app.common.types.text.text_node_attrs)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.texts.update_all_attrs(ids__$1,attrs)], 0));
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(emit_update_BANG_)],(function (attrs){
return (emit_update_BANG_.cljs$core$IFn$_invoke$arity$2 ? emit_update_BANG_.cljs$core$IFn$_invoke$arity$2(ids,attrs) : emit_update_BANG_.call(null,ids,attrs));
}));
var typography = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(values),rumext.v2.adapt(file_id),rumext.v2.adapt(libraries)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = typography_id;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(typography_id,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(typography_file_id,file_id)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [typography_file_id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"typographies","typographies",-482095730),typography_id], null)),new cljs.core.Keyword(null,"file-id","file-id",-811871323),typography_file_id);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = typography_id;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(typography_id,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography_file_id,file_id)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(typographies,typography_id);
} else {
return null;
}
}
}));
var on_convert_to_typography = (function (_){
var set_values = cljs.core.select_keys(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(values),app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(app.common.types.text.text_font_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.text_spacing_attrs,app.common.types.text.text_transform_attrs], 0)));
var typography__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.default_typography,set_values], 0));
var typography__$2 = app.main.data.workspace.texts.generate_typography_name(typography__$1);
var id = app.common.uuid.next();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_typography.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(typography__$2,new cljs.core.Keyword(null,"id","id",-1388402092),id),false));

var G__55963 = ids;
var G__55964 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),id,new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),file_id], null);
return (emit_update_BANG_.cljs$core$IFn$_invoke$arity$2 ? emit_update_BANG_.cljs$core$IFn$_invoke$arity$2(G__55963,G__55964) : emit_update_BANG_.call(null,G__55963,G__55964));
});
var handle_detach_typography = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (){
var G__55965 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),null,new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),null], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55965) : on_change.call(null,G__55965));
}));
var handle_change_typography = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typography),rumext.v2.adapt(file_id)],(function (changes){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_typography(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([typography,changes], 0)),file_id));
}));
var expand_stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expand-text-more-options","expand-text-more-options",1399966572)),app.main.store.stream);
}));
var multiple_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__55959_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__55959_SHARP_,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
}),cljs.core.vals(values));
var opts = ({"ids": ids, "values": values, "on-change": on_change, "show-recent": true, "on-blur": (function (){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((100),(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("INPUT",app.util.dom.get_tag_name(app.util.dom.get_active()))){
var node = app.util.text.ui.get_text_editor_content();
return app.util.dom.focus_BANG_(node);
} else {
return null;
}
}));
})});
app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2(expand_stream,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"more-options","more-options",1399478268)], null),true);
}));

return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_text__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_text__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':true,'collapsed':cljs.core.not(main_menu_open_QMARK_),'onCollapsed':toggle_main_menu,'title':label,'className':"main_ui_workspace_sidebar_options_menus_text__title-spacing-text",'children':((((cljs.core.not(typography)) && (cljs.core.not(multiple_QMARK_))))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.options"),'onClick':on_convert_to_typography,'icon':app.main.ui.ds.foundations.assets.icon.add}):null)})}),(cljs.core.truth_(main_menu_open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_text__element-content",'children':[(cljs.core.truth_(typography)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.typography.typography_entry,{'file-id':typography_file_id,'typography':typography,'local?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography_file_id,file_id),'on-detach':handle_detach_typography,'on-change':handle_change_typography}):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typography_id,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_text__multiple-typography",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_text__multiple-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.text.multiple-typography")}),rumext.v2.jsx("div",{'onClick':handle_detach_typography,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.text.multiple-typography-tooltip"),'className':"main_ui_workspace_sidebar_options_menus_text__multiple-typography-button",'children':app.main.ui.icons.detach})]}):rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.typography.text_options,opts)
)),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_text__text-align-options",'children':[rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.text.text_align_options,opts),rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.text.grow_options,opts),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.options"),'data-testid':"text-align-options-button",'onClick':toggle_more_options,'icon':app.main.ui.ds.foundations.assets.icon.menu})]}),(cljs.core.truth_(more_options_open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_text__text-decoration-options",'children':[rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.text.vertical_align,opts),rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.text.text_decoration_options,opts),rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.text.text_direction_options,opts)]}):null)]}):null)]});
}));

(app.main.ui.workspace.sidebar.options.menus.text.text_menu.displayName = "text-menu");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.text.js.map
