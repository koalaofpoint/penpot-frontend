import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.json.js";
import "./app.common.schema.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.helpers.js";
import "./app.main.store.js";
import "./app.util.object.js";
goog.provide('app.plugins.utils');
app.plugins.utils.locate_file = (function app$plugins$utils$locate_file(id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","File not valid uuid","\n","(uuid? id)"].join('')));
}

return app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),id);
});
app.plugins.utils.locate_page = (function app$plugins$utils$locate_page(file_id,id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","Page not valid uuid","\n","(uuid? id)"].join('')));
}

return app.main.data.helpers.get_page(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),file_id),id);
});
app.plugins.utils.locate_objects = (function app$plugins$utils$locate_objects(var_args){
var G__56085 = arguments.length;
switch (G__56085) {
case 0:
return app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)),new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state)));
}));

(app.plugins.utils.locate_objects.cljs$core$IFn$_invoke$arity$2 = (function (file_id,page_id){
return new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_page(file_id,page_id));
}));

(app.plugins.utils.locate_objects.cljs$lang$maxFixedArity = 2);

app.plugins.utils.locate_shape = (function app$plugins$utils$locate_shape(file_id,page_id,id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","Shape not valid uuid","\n","(uuid? id)"].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.plugins.utils.locate_page(file_id,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734)),id);
});
app.plugins.utils.locate_library_color = (function app$plugins$utils$locate_library_color(file_id,id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","Color not valid uuid","\n","(uuid? id)"].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.plugins.utils.locate_file(file_id),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"colors","colors",1157174732)),id);
});
app.plugins.utils.locate_library_typography = (function app$plugins$utils$locate_library_typography(file_id,id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","Typography not valid uuid","\n","(uuid? id)"].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.plugins.utils.locate_file(file_id),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"typographies","typographies",-482095730)),id);
});
app.plugins.utils.locate_library_component = (function app$plugins$utils$locate_library_component(file_id,id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","Component not valid uuid","\n","(uuid? id)"].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.plugins.utils.locate_file(file_id),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"components","components",-1073188942)),id);
});
app.plugins.utils.locate_tokens_lib = (function app$plugins$utils$locate_tokens_lib(file_id){
var file = app.plugins.utils.locate_file(file_id);
return new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file));
});
app.plugins.utils.locate_token_theme = (function app$plugins$utils$locate_token_theme(file_id,id){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
if((!((tokens_lib == null)))){
return app.common.types.tokens_lib.get_theme(tokens_lib,id);
} else {
return null;
}
});
app.plugins.utils.locate_token_set = (function app$plugins$utils$locate_token_set(file_id,set_id){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
if((!((tokens_lib == null)))){
return app.common.types.tokens_lib.get_set(tokens_lib,set_id);
} else {
return null;
}
});
app.plugins.utils.locate_token = (function app$plugins$utils$locate_token(file_id,set_id,token_id){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
if((!((tokens_lib == null)))){
return app.common.types.tokens_lib.get_token(tokens_lib,set_id,token_id);
} else {
return null;
}
});
app.plugins.utils.locate_presence = (function app$plugins$utils$locate_presence(session_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"workspace-presence","workspace-presence",-919312096)),session_id);
});
app.plugins.utils.locate_profile = (function app$plugins$utils$locate_profile(session_id){
var map__56090 = app.plugins.utils.locate_presence(session_id);
var map__56090__$1 = cljs.core.__destructure_map(map__56090);
var profile_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56090__$1,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"profiles","profiles",507634713)),profile_id);
});
app.plugins.utils.locate_component = (function app$plugins$utils$locate_component(objects,shape){
var state = cljs.core.deref(app.main.store.state);
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$1(state);
var libraries = app.main.data.helpers.lookup_libraries(state);
var root = app.common.types.container.get_instance_root(objects,shape);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,app.common.types.file.resolve_component.cljs$core$IFn$_invoke$arity$variadic(root,file,libraries,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0))], null);
});
app.plugins.utils.proxy__GT_file = (function app$plugins$utils$proxy__GT_file(proxy){
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$id");
if((!((id == null)))){
return app.plugins.utils.locate_file(id);
} else {
return null;
}
});
app.plugins.utils.proxy__GT_page = (function app$plugins$utils$proxy__GT_page(proxy){
var file_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$file");
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$id");
if((((!((file_id == null)))) && ((!((id == null)))))){
return app.plugins.utils.locate_page(file_id,id);
} else {
return null;
}
});
app.plugins.utils.proxy__GT_shape = (function app$plugins$utils$proxy__GT_shape(proxy){
var file_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$file");
var page_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$page");
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$id");
if((((!((file_id == null)))) && ((((!((page_id == null)))) && ((!((id == null)))))))){
return app.plugins.utils.locate_shape(file_id,page_id,id);
} else {
return null;
}
});
app.plugins.utils.proxy__GT_library_color = (function app$plugins$utils$proxy__GT_library_color(proxy){
var file_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$file");
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$id");
if((((!((file_id == null)))) && ((!((id == null)))))){
return app.plugins.utils.locate_library_color(file_id,id);
} else {
return null;
}
});
app.plugins.utils.proxy__GT_library_typography = (function app$plugins$utils$proxy__GT_library_typography(proxy){
var file_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$file");
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$id");
if((((!((file_id == null)))) && ((!((id == null)))))){
return app.plugins.utils.locate_library_typography(file_id,id);
} else {
return null;
}
});
app.plugins.utils.proxy__GT_library_component = (function app$plugins$utils$proxy__GT_library_component(proxy){
var file_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$file");
var id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$id");
if((((!((file_id == null)))) && ((!((id == null)))))){
return app.plugins.utils.locate_library_component(file_id,id);
} else {
return null;
}
});
app.plugins.utils.proxy__GT_flow = (function app$plugins$utils$proxy__GT_flow(proxy){
var file_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$file");
var page_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$page");
var flow_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$id");
var page = app.plugins.utils.locate_page(file_id,page_id);
if((!((page == null)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(page),flow_id);
} else {
return null;
}
});
app.plugins.utils.locate_ruler_guide = (function app$plugins$utils$locate_ruler_guide(file_id,page_id,ruler_id){
var page = app.plugins.utils.locate_page(file_id,page_id);
if((!((page == null)))){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__56091_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56091_SHARP_),ruler_id);
}),cljs.core.vals(new cljs.core.Keyword(null,"guides","guides",-1398390510).cljs$core$IFn$_invoke$arity$1(page)));
} else {
return null;
}
});
app.plugins.utils.proxy__GT_ruler_guide = (function app$plugins$utils$proxy__GT_ruler_guide(proxy){
var file_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$file");
var page_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$page");
var ruler_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$id");
return app.plugins.utils.locate_ruler_guide(file_id,page_id,ruler_id);
});
app.plugins.utils.locate_interaction = (function app$plugins$utils$locate_interaction(file_id,page_id,shape_id,index){
var temp__5825__auto__ = app.plugins.utils.locate_shape(file_id,page_id,shape_id);
if(cljs.core.truth_(temp__5825__auto__)){
var shape = temp__5825__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interactions","interactions",550841811),index], null));
} else {
return null;
}
});
app.plugins.utils.proxy__GT_interaction = (function app$plugins$utils$proxy__GT_interaction(proxy){
var file_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$file");
var page_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$page");
var shape_id = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$shape");
var index = app.util.object.get.cljs$core$IFn$_invoke$arity$2(proxy,"$index");
return app.plugins.utils.locate_interaction(file_id,page_id,shape_id,index);
});
app.plugins.utils.get_data = (function app$plugins$utils$get_data(var_args){
var G__56093 = arguments.length;
switch (G__56093) {
case 2:
return app.plugins.utils.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.plugins.utils.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.plugins.utils.get_data.cljs$core$IFn$_invoke$arity$2 = (function (self,attr){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.object.get.cljs$core$IFn$_invoke$arity$2(self,"_data"),attr);
}));

(app.plugins.utils.get_data.cljs$core$IFn$_invoke$arity$3 = (function (self,attr,transform_fn){
var G__56094 = app.plugins.utils.get_data.cljs$core$IFn$_invoke$arity$2(self,attr);
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__56094) : transform_fn.call(null,G__56094));
}));

(app.plugins.utils.get_data.cljs$lang$maxFixedArity = 3);

app.plugins.utils.get_data_fn = (function app$plugins$utils$get_data_fn(var_args){
var G__56096 = arguments.length;
switch (G__56096) {
case 1:
return app.plugins.utils.get_data_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.plugins.utils.get_data_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.plugins.utils.get_data_fn.cljs$core$IFn$_invoke$arity$1 = (function (attr){
return (function (self){
return app.plugins.utils.get_data.cljs$core$IFn$_invoke$arity$2(self,attr);
});
}));

(app.plugins.utils.get_data_fn.cljs$core$IFn$_invoke$arity$2 = (function (attr,transform_fn){
return (function (self){
return app.plugins.utils.get_data.cljs$core$IFn$_invoke$arity$3(self,attr,transform_fn);
});
}));

(app.plugins.utils.get_data_fn.cljs$lang$maxFixedArity = 2);

app.plugins.utils.get_state = (function app$plugins$utils$get_state(var_args){
var G__56098 = arguments.length;
switch (G__56098) {
case 2:
return app.plugins.utils.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.plugins.utils.get_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.plugins.utils.get_state.cljs$core$IFn$_invoke$arity$2 = (function (self,attr){
var id = app.plugins.utils.get_data.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.Keyword(null,"id","id",-1388402092));
var page_id = (function (){var or__5025__auto__ = app.plugins.utils.get_data.cljs$core$IFn$_invoke$arity$2(self,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
}
})();
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),page_id),new cljs.core.Keyword(null,"objects","objects",2099713734)),id),attr);
}));

(app.plugins.utils.get_state.cljs$core$IFn$_invoke$arity$3 = (function (self,attr,mapfn){
var G__56099 = app.plugins.utils.get_state.cljs$core$IFn$_invoke$arity$2(self,attr);
return (mapfn.cljs$core$IFn$_invoke$arity$1 ? mapfn.cljs$core$IFn$_invoke$arity$1(G__56099) : mapfn.call(null,G__56099));
}));

(app.plugins.utils.get_state.cljs$lang$maxFixedArity = 3);

/**
 * Creates a pair of atom+promise. The promise will be resolved when the atom gets a value.
 *   We use this to return the promise to the library clients and resolve its value when a value is passed
 *   to the atom
 */
app.plugins.utils.result_p = (function app$plugins$utils$result_p(){
var ret_v = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ret_p = (new Promise((function (resolve,_){
return cljs.core.add_watch(ret_v,new cljs.core.Keyword("app.plugins.utils","watcher","app.plugins.utils/watcher",-543714163),(function (___$1,___$2,___$3,value){
cljs.core.remove_watch(ret_v,new cljs.core.Keyword("app.plugins.utils","watcher","app.plugins.utils/watcher",-543714163));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
}));
})));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_v,ret_p], null);
});
app.plugins.utils.display_not_valid = (function app$plugins$utils$display_not_valid(code,value){
if((!((value == null)))){
console.error(""+"[PENPOT PLUGIN] Value not valid: "+(value ?? "")+". Code: "+(code ?? ""));
} else {
console.error(""+"[PENPOT PLUGIN] Value not valid. Code: "+(code ?? ""));
}

return null;
});
app.plugins.utils.reject_not_valid = (function app$plugins$utils$reject_not_valid(reject,code,value){
var msg = ""+"[PENPOT PLUGIN] Value not valid: "+(value ?? "")+". Code: "+(code ?? "");
console.error(msg);

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(msg) : reject.call(null,msg));
});
/**
 * Decodes a javascript object into clj and check against schema. If schema validation fails,
 * displays a not-valid message with the code and hint provided and returns nil.
 */
app.plugins.utils.coerce = (function app$plugins$utils$coerce(attrs,schema,code,hint){
var decoder = app.common.schema.decoder.cljs$core$IFn$_invoke$arity$2(schema,app.common.schema.json_transformer);
var explainer = app.common.schema.explainer(schema);
var attrs__$1 = (function (){var G__56100 = app.common.json.__GT_clj(attrs);
return (decoder.cljs$core$IFn$_invoke$arity$1 ? decoder.cljs$core$IFn$_invoke$arity$1(G__56100) : decoder.call(null,G__56100));
})();
var temp__5823__auto__ = (explainer.cljs$core$IFn$_invoke$arity$1 ? explainer.cljs$core$IFn$_invoke$arity$1(attrs__$1) : explainer.call(null,attrs__$1));
if(cljs.core.truth_(temp__5823__auto__)){
var explain = temp__5823__auto__;
return app.plugins.utils.display_not_valid(code,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hint)," ",app.common.schema.humanize_explain(explain)].join(''));
} else {
return attrs__$1;
}
});
app.plugins.utils.mixed_value = (function app$plugins$utils$mixed_value(values){
var s = cljs.core.set(values);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(1))){
return cljs.core.first(s);
} else {
return "mixed";
}
});
/**
 * Function to be used in plugin proxies methods to handle errors and print a readable
 * message to the console.
 */
app.plugins.utils.handle_error = (function app$plugins$utils$handle_error(cause){
app.plugins.utils.display_not_valid(cljs.core.ex_message(cause),null);

var temp__5823__auto___56105 = new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(cause));
if(cljs.core.truth_(temp__5823__auto___56105)){
var explain_56107 = temp__5823__auto___56105;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.schema.humanize_explain(explain_56107)], 0));
} else {
console.log(cljs.core.ex_data(cause));
}

return console.log(cause.stack);
});

//# sourceMappingURL=app.plugins.utils.js.map
