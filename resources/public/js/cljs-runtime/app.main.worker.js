import "./cljs_env.js";
import "./cljs.core.js";
import "./app.config.js";
import "./app.util.worker.js";
import "./beicon.v2.core.js";
goog.provide('app.main.worker');
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.worker !== 'undefined') && (typeof app.main.worker.on_error !== 'undefined')){
} else {
app.main.worker.on_error = null;
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.worker !== 'undefined') && (typeof app.main.worker.instance !== 'undefined')){
} else {
app.main.worker.instance = null;
}
app.main.worker.init_BANG_ = (function app$main$worker$init_BANG_(){
var worker = app.util.worker.init(app.config.worker_uri,app.main.worker.on_error);
app.util.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$2(worker,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"configure","configure",1586823664),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"public-uri","public-uri",-1456511719),app.config.public_uri,new cljs.core.Keyword(null,"build-data","build-data",980428267),app.config.build_date,new cljs.core.Keyword(null,"version","version",425292698),app.config.version], null)], null));

return (app.main.worker.instance = worker);
});
app.main.worker.ask_BANG_ = (function app$main$worker$ask_BANG_(var_args){
var G__55041 = arguments.length;
switch (G__55041) {
case 1:
return app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (message){
if(cljs.core.truth_(app.main.worker.instance)){
return app.util.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.worker.instance,message);
} else {
return beicon.v2.core.empty();
}
}));

(app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (message,transfer){
if(cljs.core.truth_(app.main.worker.instance)){
return app.util.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$3(app.main.worker.instance,message,transfer);
} else {
return beicon.v2.core.empty();
}
}));

(app.main.worker.ask_BANG_.cljs$lang$maxFixedArity = 2);

app.main.worker.emit_BANG_ = (function app$main$worker$emit_BANG_(var_args){
var G__55043 = arguments.length;
switch (G__55043) {
case 1:
return app.main.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (message){
if(cljs.core.truth_(app.main.worker.instance)){
return app.util.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.worker.instance,message);
} else {
return beicon.v2.core.empty();
}
}));

(app.main.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (message,transfer){
if(cljs.core.truth_(app.main.worker.instance)){
return app.util.worker.emit_BANG_.cljs$core$IFn$_invoke$arity$3(app.main.worker.instance,message,transfer);
} else {
return beicon.v2.core.empty();
}
}));

(app.main.worker.emit_BANG_.cljs$lang$maxFixedArity = 2);

app.main.worker.ask_buffered_BANG_ = (function app$main$worker$ask_buffered_BANG_(var_args){
var G__55045 = arguments.length;
switch (G__55045) {
case 1:
return app.main.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (message){
if(cljs.core.truth_(app.main.worker.instance)){
return app.util.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.worker.instance,message);
} else {
return beicon.v2.core.empty();
}
}));

(app.main.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (message,transfer){
if(cljs.core.truth_(app.main.worker.instance)){
return app.util.worker.ask_buffered_BANG_.cljs$core$IFn$_invoke$arity$3(app.main.worker.instance,message,transfer);
} else {
return beicon.v2.core.empty();
}
}));

(app.main.worker.ask_buffered_BANG_.cljs$lang$maxFixedArity = 2);

app.main.worker.ask_many_BANG_ = (function app$main$worker$ask_many_BANG_(var_args){
var G__55047 = arguments.length;
switch (G__55047) {
case 1:
return app.main.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (message){
if(cljs.core.truth_(app.main.worker.instance)){
return app.util.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.worker.instance,message);
} else {
return beicon.v2.core.empty();
}
}));

(app.main.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (message,transfer){
if(cljs.core.truth_(app.main.worker.instance)){
return app.util.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$3(app.main.worker.instance,message,transfer);
} else {
return beicon.v2.core.empty();
}
}));

(app.main.worker.ask_many_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=app.main.worker.js.map
