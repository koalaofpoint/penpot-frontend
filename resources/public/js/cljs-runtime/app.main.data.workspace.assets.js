import "./cljs_env.js";
import "./cljs.core.js";
import "./app.util.storage.js";
goog.provide('app.main.data.workspace.assets');
app.main.data.workspace.assets.get_current_assets_ordering = (function app$main$data$workspace$assets$get_current_assets_ordering(){
var ordering = new cljs.core.Keyword("app.main.data.workspace.assets","ordering","app.main.data.workspace.assets/ordering",-515349399).cljs$core$IFn$_invoke$arity$1(app.util.storage.user);
var or__5025__auto__ = ordering;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"asc","asc",356854569);
}
});
app.main.data.workspace.assets.set_current_assets_ordering_BANG_ = (function app$main$data$workspace$assets$set_current_assets_ordering_BANG_(ordering){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,new cljs.core.Keyword("app.main.data.workspace.assets","ordering","app.main.data.workspace.assets/ordering",-515349399),ordering);
});
app.main.data.workspace.assets.get_current_assets_list_style = (function app$main$data$workspace$assets$get_current_assets_list_style(){
var list_style = new cljs.core.Keyword("app.main.data.workspace.assets","list-style","app.main.data.workspace.assets/list-style",-1347397902).cljs$core$IFn$_invoke$arity$1(app.util.storage.user);
var or__5025__auto__ = list_style;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"thumbs","thumbs",-1134286339);
}
});
app.main.data.workspace.assets.set_current_assets_list_style_BANG_ = (function app$main$data$workspace$assets$set_current_assets_list_style_BANG_(list_style){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,new cljs.core.Keyword("app.main.data.workspace.assets","list-style","app.main.data.workspace.assets/list-style",-1347397902),list_style);
});

//# sourceMappingURL=app.main.data.workspace.assets.js.map
