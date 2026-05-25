import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.cursors.js";
import "./app.main.ui.icons.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.debug.icons_preview');
app.main.ui.debug.icons_preview.icons_gallery = (function app$main$ui$debug$icons_preview$icons_gallery(props_82714){
var entries = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(Object.entries(app.main.ui.icons.default$)));
return rumext.v2.jsx("section",{'className':"main_ui_debug_icons_preview__gallery",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__82715){
var vec__82716 = p__82715;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82716,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82716,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsxs("div",{'title':key,'className':"main_ui_debug_icons_preview__gallery-item",'children':[val,rumext.v2.jsx("span",{'children':key})]},key));

return out_arr__46744__auto__;
}),[],entries)});
});

(app.main.ui.debug.icons_preview.icons_gallery.displayName = "icons-gallery");

app.main.ui.debug.icons_preview.cursors_gallery = (function app$main$ui$debug$icons_preview$cursors_gallery(props_82721){
var rotation = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
var entries = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.seq(Object.entries(app.main.ui.cursors.default$)));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.util.timers.interval((100),(function (){
return cljs.core.reset_BANG_(rotation,cljs.core.inc);
}));
}));

return rumext.v2.jsx("section",{'className':"main_ui_debug_icons_preview__gallery",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__82722){
var vec__82723 = p__82722;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82723,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82723,(1),null);
out_arr__46744__auto__.push((function (){var value__$1 = ((cljs.core.fn_QMARK_(value))?(function (){var G__82727 = cljs.core.deref(rotation);
return (value.cljs$core$IFn$_invoke$arity$1 ? value.cljs$core$IFn$_invoke$arity$1(G__82727) : value.call(null,G__82727));
})():value);
return rumext.v2.jsxs("div",{'className':"main_ui_debug_icons_preview__gallery-item",'children':[rumext.v2.jsx("div",{'style':{'backgroundImage':cuerdas.core.replace(value__$1,/(url\(.*\)).*/,"$1"),'cursor':value__$1},'className':"main_ui_debug_icons_preview__cursor"}),rumext.v2.jsx("span",{'children':cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0))})]},key);
})());

return out_arr__46744__auto__;
}),[],entries)});
});

(app.main.ui.debug.icons_preview.cursors_gallery.displayName = "cursors-gallery");

app.main.ui.debug.icons_preview.icons_preview = (function app$main$ui$debug$icons_preview$icons_preview(props_82728){
return rumext.v2.jsxs("article",{'className':"main_ui_debug_icons_preview__container",'children':[rumext.v2.jsx("h2",{'className':"main_ui_debug_icons_preview__title",'children':"Cursors"}),rumext.v2.jsx(app.main.ui.debug.icons_preview.cursors_gallery,{}),rumext.v2.jsx("h2",{'className':"main_ui_debug_icons_preview__title",'children':"Icons"}),rumext.v2.jsx(app.main.ui.debug.icons_preview.icons_gallery,{})]});
});

(app.main.ui.debug.icons_preview.icons_preview.displayName = "icons-preview");


//# sourceMappingURL=app.main.ui.debug.icons_preview.js.map
