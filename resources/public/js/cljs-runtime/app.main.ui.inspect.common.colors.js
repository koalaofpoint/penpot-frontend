import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.store.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.common.colors');
app.main.ui.inspect.common.colors.file_colors_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"colors","colors",1157174732)], null)),app.main.store.state);
app.main.ui.inspect.common.colors.make_colors_library_ref = (function app$main$ui$inspect$common$colors$make_colors_library_ref(libraries_place,file_id){
var get_library = (function (state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [libraries_place,file_id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"colors","colors",1157174732)], null));
});
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(get_library,app.main.store.state);
});
app.main.ui.inspect.common.colors.use_colors_library = (function app$main$ui$inspect$common$colors$use_colors_library(p__74645){
var map__74646 = p__74645;
var map__74646__$1 = cljs.core.__destructure_map(map__74646);
var color = map__74646__$1;
var ref_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74646__$1,new cljs.core.Keyword(null,"ref-file","ref-file",255004238));
var library = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ref_file)],(function (){
return app.main.ui.inspect.common.colors.make_colors_library_ref(new cljs.core.Keyword(null,"files","files",-472457450),ref_file);
}));
return rumext.v2.deref(library);
});

//# sourceMappingURL=app.main.ui.inspect.common.colors.js.map
