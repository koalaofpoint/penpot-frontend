import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.hooks.js";
import "./app.util.http.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.embed');
app.main.ui.shapes.embed.context = rumext.v2.create_context(false);
app.main.ui.shapes.embed.use_data_uris = (function app$main$ui$shapes$embed$use_data_uris(urls){
var embed_QMARK_ = rumext.v2.use_ctx(app.main.ui.shapes.embed.context);
var urls__$1 = app.main.ui.hooks.use_equal_memo(urls);
var uri_data = rumext.v2.use_ref(cljs.core.PersistentArrayMap.EMPTY);
var state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
rumext.v2.use_ssr_effect([rumext.v2.adapt(embed_QMARK_),rumext.v2.adapt(urls__$1)],(function (){
var url_mapping = (function (obs){
if(cljs.core.truth_(embed_QMARK_)){
return beicon.v2.core.merge_map((function (uri){
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.of(cljs.core.PersistentHashMap.fromArrays([uri],[uri]));
}),app.util.http.fetch_data_uri.cljs$core$IFn$_invoke$arity$2(uri,true));
}),obs);
} else {
return beicon.v2.core.map((function (uri){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([uri,uri]);
}),obs);
}
});
var sub = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (data){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,rumext.v2.ref_val(uri_data))){
return null;
} else {
rumext.v2.set_ref_val_BANG_(uri_data,data);

return cljs.core.reset_BANG_(state,cljs.core.inc);
}
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY,url_mapping(beicon.v2.core.filter(cljs.core.some_QMARK_,beicon.v2.core.from(urls__$1)))));
return (function (){
if(cljs.core.truth_(sub)){
return beicon.v2.core.dispose_BANG_(sub);
} else {
return null;
}
});
}));

return rumext.v2.ref_val(uri_data);
});

//# sourceMappingURL=app.main.ui.shapes.embed.js.map
