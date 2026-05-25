import "./cljs_env.js";
import "./cljs.core.js";
import "./app.util.clipboard.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.debug.playground');
app.main.ui.debug.playground.playground_clipboard = (function app$main$ui$debug$playground$playground_clipboard(props_82726){
var on_paste = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
var stream = app.util.clipboard.from_clipboard_event.cljs$core$IFn$_invoke$arity$1(e);
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(stream,(function (data){
return console.log("data",data);
}));
}));
var on_dragover = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
return e.preventDefault();
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
e.preventDefault();

var stream = app.util.clipboard.from_drop_event.cljs$core$IFn$_invoke$arity$1(e);
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(stream,(function (data){
return console.log("data",data);
}));
}));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
console.log("event",e);

var stream = app.util.clipboard.from_navigator.cljs$core$IFn$_invoke$arity$0();
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(stream,(function (data){
return console.log("data",data);
}));
}));
window.addEventListener("paste",on_paste);

window.addEventListener("drop",on_drop);

window.addEventListener("dragover",on_dragover);

return rumext.v2.jsx("button",{'id':"paste",'onClick':on_click,'children':"Paste"});
});

(app.main.ui.debug.playground.playground_clipboard.displayName = "playground-clipboard");

app.main.ui.debug.playground.playground = (function app$main$ui$debug$playground$playground(props_82729){
return rumext.v2.jsx(app.main.ui.debug.playground.playground_clipboard,{});
});

(app.main.ui.debug.playground.playground.displayName = "playground");


//# sourceMappingURL=app.main.ui.debug.playground.js.map
