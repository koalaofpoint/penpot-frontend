import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.common.typography');
app.main.ui.inspect.common.typography.make_typographies_library_ref = (function app$main$ui$inspect$common$typography$make_typographies_library_ref(file_id){
var get_library = (function (state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer-libraries","viewer-libraries",-1612687816),file_id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"typographies","typographies",-482095730)], null));
});
return (function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(get_library,app.main.store.state);
});
});
app.main.ui.inspect.common.typography.file_typographies_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"typographies","typographies",-482095730)], null)),app.main.store.state);
app.main.ui.inspect.common.typography.get_typography = (function app$main$ui$inspect$common$typography$get_typography(style){
var typography_library_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(style))],app.main.ui.inspect.common.typography.make_typographies_library_ref(new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(style)));
var typography_library = rumext.v2.deref(typography_library_ref);
var file_typographies_viewer = rumext.v2.deref(app.main.ui.inspect.common.typography.file_typographies_ref);
var file_typographies_workspace = rumext.v2.deref(app.main.refs.workspace_file_typography);
var file_library_workspace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rumext.v2.deref(app.main.refs.files),new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(style));
var typography_external_lib = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file_library_workspace,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"typographies","typographies",-482095730),new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(style)], null));
var typography = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = typography_library;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = file_typographies_viewer;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return file_typographies_workspace;
}
}
})(),new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(style));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return typography_external_lib;
}
})();
return typography;
});

//# sourceMappingURL=app.main.ui.inspect.common.typography.js.map
