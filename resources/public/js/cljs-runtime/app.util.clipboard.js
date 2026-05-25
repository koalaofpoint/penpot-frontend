import "./cljs_env.js";
import "./cljs.core.js";
import "./module$app$util$clipboard.js";
import "./app.common.transit.js";
import "./app.util.dom.js";
import "./beicon.v2.core.js";
goog.provide('app.util.clipboard');
app.util.clipboard.image_types = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["image/webp","image/png","image/jpeg","image/svg+xml"], null);
app.util.clipboard.default_options = ({"decodeTransit": app.common.transit.decode_str, "allowHTMLPaste": false});
/**
 * Get clipboard stream from DataTransfer instance
 */
app.util.clipboard.from_data_transfer = (function app$util$clipboard$from_data_transfer(var_args){
var G__56327 = arguments.length;
switch (G__56327) {
case 1:
return app.util.clipboard.from_data_transfer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.clipboard.from_data_transfer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.clipboard.from_data_transfer.cljs$core$IFn$_invoke$arity$1 = (function (data_transfer){
return app.util.clipboard.from_data_transfer.cljs$core$IFn$_invoke$arity$2(data_transfer,app.util.clipboard.default_options);
}));

(app.util.clipboard.from_data_transfer.cljs$core$IFn$_invoke$arity$2 = (function (data_transfer,options){
return beicon.v2.core.mapcat((function (p1__56325_SHARP_){
return beicon.v2.core.from(p1__56325_SHARP_);
}),beicon.v2.core.from(module$app$util$clipboard.fromDataTransfer(data_transfer,options)));
}));

(app.util.clipboard.from_data_transfer.cljs$lang$maxFixedArity = 2);

app.util.clipboard.from_navigator = (function app$util$clipboard$from_navigator(var_args){
var G__56330 = arguments.length;
switch (G__56330) {
case 0:
return app.util.clipboard.from_navigator.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.util.clipboard.from_navigator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.clipboard.from_navigator.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.util.clipboard.from_navigator.cljs$core$IFn$_invoke$arity$1(app.util.clipboard.default_options);
}));

(app.util.clipboard.from_navigator.cljs$core$IFn$_invoke$arity$1 = (function (options){
return beicon.v2.core.mapcat((function (p1__56328_SHARP_){
return beicon.v2.core.from(p1__56328_SHARP_);
}),beicon.v2.core.from(module$app$util$clipboard.fromNavigator(options)));
}));

(app.util.clipboard.from_navigator.cljs$lang$maxFixedArity = 1);

/**
 * Get clipboard stream from clipboard event
 */
app.util.clipboard.from_clipboard_event = (function app$util$clipboard$from_clipboard_event(var_args){
var G__56332 = arguments.length;
switch (G__56332) {
case 1:
return app.util.clipboard.from_clipboard_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.clipboard.from_clipboard_event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.clipboard.from_clipboard_event.cljs$core$IFn$_invoke$arity$1 = (function (event){
return app.util.clipboard.from_clipboard_event.cljs$core$IFn$_invoke$arity$2(event,app.util.clipboard.default_options);
}));

(app.util.clipboard.from_clipboard_event.cljs$core$IFn$_invoke$arity$2 = (function (event,options){
var cdata = event.clipboardData;
return app.util.clipboard.from_data_transfer.cljs$core$IFn$_invoke$arity$2(cdata,options);
}));

(app.util.clipboard.from_clipboard_event.cljs$lang$maxFixedArity = 2);

/**
 * Get clipboard stream from syntetic clipboard event
 */
app.util.clipboard.from_synthetic_clipboard_event = (function app$util$clipboard$from_synthetic_clipboard_event(event,options){
var target = app.util.dom.get_target(event);
var content_editable_QMARK_ = app.util.dom.is_content_editable_QMARK_(target);
var is_input_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(target),"INPUT");
if(cljs.core.not((function (){var or__5025__auto__ = content_editable_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return is_input_QMARK_;
}
})())){
return app.util.clipboard.from_clipboard_event.cljs$core$IFn$_invoke$arity$2(app.util.dom.event__GT_browser_event(event),options);
} else {
return beicon.v2.core.empty();
}
});
/**
 * Get clipboard stream from drop event
 */
app.util.clipboard.from_drop_event = (function app$util$clipboard$from_drop_event(var_args){
var G__56334 = arguments.length;
switch (G__56334) {
case 1:
return app.util.clipboard.from_drop_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.clipboard.from_drop_event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.clipboard.from_drop_event.cljs$core$IFn$_invoke$arity$1 = (function (event){
return app.util.clipboard.from_drop_event.cljs$core$IFn$_invoke$arity$2(event,app.util.clipboard.default_options);
}));

(app.util.clipboard.from_drop_event.cljs$core$IFn$_invoke$arity$2 = (function (event,options){
return app.util.clipboard.from_data_transfer.cljs$core$IFn$_invoke$arity$2(event.dataTransfer,options);
}));

(app.util.clipboard.from_drop_event.cljs$lang$maxFixedArity = 2);

app.util.clipboard.to_clipboard = (function app$util$clipboard$to_clipboard(data){
if(typeof data === 'string'){
} else {
throw (new Error(["Assert failed: ","`data` should be string","\n","(string? data)"].join('')));
}

var clipboard = (navigator["clipboard"]);
return clipboard.writeText(data);
});
app.util.clipboard.create_clipboard_item = (function app$util$clipboard$create_clipboard_item(mimetype,promise){
return (new ClipboardItem((function (){var obj56336 = ({});
(obj56336[mimetype] = promise);

return obj56336;
})()));
});
app.util.clipboard.to_clipboard_promise = (function app$util$clipboard$to_clipboard_promise(mimetype,promise){
var clipboard = (navigator["clipboard"]);
var data = app.util.clipboard.create_clipboard_item(mimetype,promise);
return clipboard.write([data]);
});

//# sourceMappingURL=app.util.clipboard.js.map
