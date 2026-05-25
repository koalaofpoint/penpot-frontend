import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
goog.provide('app.common.types.pages_list');
app.common.types.pages_list.get_page = (function app$common$types$pages_list$get_page(file_data,id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),id);
});
app.common.types.pages_list.get_last_page = (function app$common$types$pages_list$get_last_page(file_data){
var id = cljs.core.last(new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(file_data));
if(cljs.core.truth_(id)){
return app.common.types.pages_list.get_page(file_data,id);
} else {
return null;
}
});
app.common.types.pages_list.add_page = (function app$common$types$pages_list$add_page(file_data,p__52776){
var map__52780 = p__52776;
var map__52780__$1 = cljs.core.__destructure_map(map__52780);
var page = map__52780__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52780__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52780__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(file_data,new cljs.core.Keyword(null,"pages","pages",-285406513),(function (pages){
var exists_QMARK_ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,id),pages);
if(cljs.core.truth_(exists_QMARK_)){
return pages;
} else {
if((index == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pages,id);
} else {
return app.common.data.insert_at_index(pages,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

}
}
})),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),cljs.core.assoc,id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"index","index",-1531685915)));
});
app.common.types.pages_list.pages_seq = (function app$common$types$pages_list$pages_seq(fdata){
return cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145).cljs$core$IFn$_invoke$arity$1(fdata)));
});
app.common.types.pages_list.update_page = (function app$common$types$pages_list$update_page(file_data,page_id,f){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),f);
});
app.common.types.pages_list.delete_page = (function app$common$types$pages_list$delete_page(file_data,page_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(file_data,new cljs.core.Keyword(null,"pages","pages",-285406513),(function (pages){
return cljs.core.filterv((function (p1__52800_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__52800_SHARP_,page_id);
}),pages);
})),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),cljs.core.dissoc,page_id);
});

//# sourceMappingURL=app.common.types.pages_list.js.map
