import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.formats.js";
import "./app.util.dom.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.radio_buttons');
app.main.ui.components.radio_buttons.context = rumext.v2.create_context(null);
app.main.ui.components.radio_buttons.radio_button = (function app$main$ui$components$radio_buttons$radio_button(props_71468){
var disabled = props_71468.disabled;
var value = props_71468.value;
var type = props_71468.type;
var icon = props_71468.icon;
var title = props_71468.title;
var id = props_71468.id;
var icon_class = (props_71468["icon-class"]);
var context = rumext.v2.use_ctx(app.main.ui.components.radio_buttons.context);
var allow_empty = (context["allow-empty"]);
var type__$1 = ((type)?type:((allow_empty)?"checkbox":"radio"));
var on_change = (context["on-change"]);
var selected = (context["selected"]);
var name = (context["name"]);
var encode_fn = (context["encode-fn"]);
var checked_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,value);
var value__$1 = (encode_fn.cljs$core$IFn$_invoke$arity$1 ? encode_fn.cljs$core$IFn$_invoke$arity$1(value) : encode_fn.call(null,value));
return rumext.v2.jsxs("label",{'htmlFor':id,'data-testid':id,'title':title,'className':"main_ui_components_radio_buttons__radio-icon"+" "+((checked_QMARK_)?"main_ui_components_radio_buttons__checked":"")+" "+(cljs.core.truth_(disabled)?"main_ui_components_radio_buttons__disabled":""),'children':[(((!((icon == null))))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'className':icon_class,'aria-hidden':true}):rumext.v2.jsx("span",{'className':"main_ui_components_radio_buttons__title-name",'children':value__$1})),rumext.v2.jsx("input",{'id':id,'onChange':on_change,'type':type__$1,'name':name,'disabled':disabled,'value':value__$1,'defaultChecked':checked_QMARK_})]});
});

(app.main.ui.components.radio_buttons.radio_button.displayName = "radio-button");

app.main.ui.components.radio_buttons.radio_buttons = (function app$main$ui$components$radio_buttons$radio_buttons(props_71472){
var wide = props_71472.wide;
var on_change = (props_71472["on-change"]);
var children = props_71472.children;
var selected = props_71472.selected;
var decode_fn = (props_71472["decode-fn"]);
var name = props_71472.name;
var encode_fn = (props_71472["encode-fn"]);
var allow_empty = (props_71472["allow-empty"]);
var class$ = props_71472.class;
var props = props_71472;
var encode_fn__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(encode_fn,cljs.core.identity);
var decode_fn__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(decode_fn,cljs.core.identity);
var nitems = ((cljs.core.array_QMARK_(children))?cljs.core.count(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,children)):(1));
var width = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(nitems)],(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wide,true)){
return "unset";
} else {
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1((((4) * (nitems - (1))) + ((32) * nitems)));
}
}));
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(on_change)],(function (event){
var input = app.util.dom.get_target(event);
var value = app.util.dom.get_target_val(event);
var value__$1 = ((((cljs.core.not(allow_empty)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,selected))))?value:null);
if(cljs.core.fn_QMARK_(on_change)){
var G__71473_71477 = (decode_fn__$1.cljs$core$IFn$_invoke$arity$1 ? decode_fn__$1.cljs$core$IFn$_invoke$arity$1(value__$1) : decode_fn__$1.call(null,value__$1));
var G__71474_71478 = event;
(on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__71473_71477,G__71474_71478) : on_change.call(null,G__71473_71477,G__71474_71478));
} else {
}

return app.util.dom.blur_BANG_(input);
}));
var context_value = {...props, 'on-change':on_change_SINGLEQUOTE_,'encode-fn':encode_fn__$1,'decode-fn':decode_fn__$1};
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.components.radio_buttons.context),{'value':context_value,'children':rumext.v2.jsx("div",{'style':{'width':width},'className':""+(class$ ?? "")+" "+("main_ui_components_radio_buttons__radio-btn-wrapper" ?? ""),'children':children},""+(name ?? "")+"-"+(selected ?? ""))});
});

(app.main.ui.components.radio_buttons.radio_buttons.displayName = "radio-buttons");


//# sourceMappingURL=app.main.ui.components.radio_buttons.js.map
