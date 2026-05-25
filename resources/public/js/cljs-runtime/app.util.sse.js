import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$eventsource_parser$stream.js";
import "./beicon.v2.core.js";
goog.provide('app.util.sse');
app.util.sse.create_stream = (function app$util$sse$create_stream(stream){
return stream.pipeThrough((new TextDecoderStream())).pipeThrough((new shadow.js.shim.module$eventsource_parser$stream.EventSourceParserStream()));
});
app.util.sse.read_stream = (function app$util$sse$read_stream(stream,decode_fn){
var read_items = (function app$util$sse$read_stream_$_read_items(reader){
return beicon.v2.core.mapcat((function (result){
if(cljs.core.truth_(result.done)){
return beicon.v2.core.empty();
} else {
return beicon.v2.core.concat(beicon.v2.core.of(result.value),app$util$sse$read_stream_$_read_items(reader));
}
}),beicon.v2.core.from(reader.read()));
});
return beicon.v2.core.mapcat((function (event){
var type = event.event;
var data = event.data;
var data__$1 = (decode_fn.cljs$core$IFn$_invoke$arity$1 ? decode_fn.cljs$core$IFn$_invoke$arity$1(data) : decode_fn.call(null,data));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",type)){
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("stream exception",data__$1));
} else {
return beicon.v2.core.of(({"type": type, "data": data__$1}));
}
}),read_items(stream.getReader()));
});
app.util.sse.get_type = (function app$util$sse$get_type(event){
return (event["type"]);
});
app.util.sse.get_payload = (function app$util$sse$get_payload(event){
return (event["data"]);
});
app.util.sse.end_of_stream_QMARK_ = (function app$util$sse$end_of_stream_QMARK_(event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("end",app.util.sse.get_type(event));
});
app.util.sse.progress_QMARK_ = (function app$util$sse$progress_QMARK_(event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("progress",app.util.sse.get_type(event));
});
app.util.sse.event_QMARK_ = (function app$util$sse$event_QMARK_(event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("event",app.util.sse.get_type(event));
});

//# sourceMappingURL=app.util.sse.js.map
