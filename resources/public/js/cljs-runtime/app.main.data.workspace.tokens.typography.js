import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.main.data.changes.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.tokens.typography');
app.main.data.workspace.tokens.typography.set_base_font_size = (function app$main$data$workspace$tokens$typography$set_base_font_size(base_font_size){
if((typeof app.main.data.workspace.tokens.typography.set_base_font_size_56579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.typography.set_base_font_size_56579 = (function (base_font_size,meta56580){
this.base_font_size = base_font_size;
this.meta56580 = meta56580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.typography.set_base_font_size_56579.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.typography.set_base_font_size_56579.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.typography","set-base-font-size","app.main.data.workspace.tokens.typography/set-base-font-size",196229846);
}));

(app.main.data.workspace.tokens.typography.set_base_font_size_56579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56581,meta56580__$1){
var self__ = this;
var _56581__$1 = this;
return (new app.main.data.workspace.tokens.typography.set_base_font_size_56579(self__.base_font_size,meta56580__$1));
}));

(app.main.data.workspace.tokens.typography.set_base_font_size_56579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56581){
var self__ = this;
var _56581__$1 = this;
return self__.meta56580;
}));

(app.main.data.workspace.tokens.typography.set_base_font_size_56579.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.typography.set_base_font_size_56579.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace","workspace",-1096735709)),new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404));
var file_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450)),file_id),new cljs.core.Keyword(null,"data","data",-232669377));
var changes = app.common.files.changes_builder.set_base_font_size(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),file_data),self__.base_font_size);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.tokens.typography.set_base_font_size_56579(base_font_size,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.tokens.typography.js.map
