import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.tokens.js";
import "./app.common.logging.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.tokens.remapping');
app.common.logging.loggers.set("app.main.data.workspace.tokens.remapping",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
/**
 * Scan a shape for applied token references to a specific token name
 */
app.main.data.workspace.tokens.remapping.scan_shape_applied_tokens = (function app$main$data$workspace$tokens$remapping$scan_shape_applied_tokens(shape,token_name,container){
var temp__5825__auto__ = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(temp__5825__auto__)){
var applied_tokens = temp__5825__auto__;
var iter__5503__auto__ = (function app$main$data$workspace$tokens$remapping$scan_shape_applied_tokens_$_iter__56458(s__56459){
return (new cljs.core.LazySeq(null,(function (){
var s__56459__$1 = s__56459;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__56459__$1);
if(temp__5825__auto____$1){
var s__56459__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56459__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56459__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56461 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56460 = (0);
while(true){
if((i__56460 < size__5502__auto__)){
var vec__56462 = cljs.core._nth(c__5501__auto__,i__56460);
var attribute = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56462,(0),null);
var applied_token_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56462,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(applied_token_name,token_name)){
cljs.core.chunk_append(b__56461,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"applied-token","applied-token",-1808287379),new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attribute,new cljs.core.Keyword(null,"token-name","token-name",1766556933),applied_token_name,new cljs.core.Keyword(null,"container","container",-1736937707),container], null));

var G__56483 = (i__56460 + (1));
i__56460 = G__56483;
continue;
} else {
var G__56484 = (i__56460 + (1));
i__56460 = G__56484;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56461),app$main$data$workspace$tokens$remapping$scan_shape_applied_tokens_$_iter__56458(cljs.core.chunk_rest(s__56459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56461),null);
}
} else {
var vec__56465 = cljs.core.first(s__56459__$2);
var attribute = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56465,(0),null);
var applied_token_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56465,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(applied_token_name,token_name)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"applied-token","applied-token",-1808287379),new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attribute,new cljs.core.Keyword(null,"token-name","token-name",1766556933),applied_token_name,new cljs.core.Keyword(null,"container","container",-1736937707),container], null),app$main$data$workspace$tokens$remapping$scan_shape_applied_tokens_$_iter__56458(cljs.core.rest(s__56459__$2)));
} else {
var G__56485 = cljs.core.rest(s__56459__$2);
s__56459__$1 = G__56485;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(applied_tokens);
} else {
return null;
}
});
/**
 * Scan a token value for references to a specific token name (alias), supporting complex token values.
 */
app.main.data.workspace.tokens.remapping.scan_token_value_references = (function app$main$data$workspace$tokens$remapping$scan_token_value_references(token,token_name){
var find_all_token_value_references = (function app$main$data$workspace$tokens$remapping$scan_token_value_references_$_find_all_token_value_references(token_value){
if(typeof token_value === 'string'){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56468_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56468_SHARP_,token_name);
}),app.common.types.token.find_token_value_references(token_value));
} else {
if(cljs.core.map_QMARK_(token_value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app$main$data$workspace$tokens$remapping$scan_token_value_references_$_find_all_token_value_references,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(token_value)], 0));
} else {
if(cljs.core.sequential_QMARK_(token_value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app$main$data$workspace$tokens$remapping$scan_token_value_references_$_find_all_token_value_references,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token_value], 0));
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}
});
var temp__5825__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
var iter__5503__auto__ = (function app$main$data$workspace$tokens$remapping$scan_token_value_references_$_iter__56469(s__56470){
return (new cljs.core.LazySeq(null,(function (){
var s__56470__$1 = s__56470;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__56470__$1);
if(temp__5825__auto____$1){
var s__56470__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56470__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56470__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56472 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56471 = (0);
while(true){
if((i__56471 < size__5502__auto__)){
var referenced_token_name = cljs.core._nth(c__5501__auto__,i__56471);
cljs.core.chunk_append(b__56472,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"token-alias","token-alias",2012298055),new cljs.core.Keyword(null,"source-token-id","source-token-id",-86861571),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"referenced-token-name","referenced-token-name",462027675),referenced_token_name], null));

var G__56486 = (i__56471 + (1));
i__56471 = G__56486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56472),app$main$data$workspace$tokens$remapping$scan_token_value_references_$_iter__56469(cljs.core.chunk_rest(s__56470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56472),null);
}
} else {
var referenced_token_name = cljs.core.first(s__56470__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"token-alias","token-alias",2012298055),new cljs.core.Keyword(null,"source-token-id","source-token-id",-86861571),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"referenced-token-name","referenced-token-name",462027675),referenced_token_name], null),app$main$data$workspace$tokens$remapping$scan_token_value_references_$_iter__56469(cljs.core.rest(s__56470__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(find_all_token_value_references(value));
} else {
return null;
}
});
/**
 * Scan entire workspace for all token references to a specific token
 */
app.main.data.workspace.tokens.remapping.scan_workspace_token_references = (function app$main$data$workspace$tokens$remapping$scan_workspace_token_references(file_data,old_token_name){
var tokens_lib = new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991).cljs$core$IFn$_invoke$arity$1(file_data);
var containers = app.common.types.file.object_containers_seq(file_data);
var matching_applied = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (container){
var shapes = app.common.types.container.shapes_seq(container);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56473_SHARP_){
return app.main.data.workspace.tokens.remapping.scan_shape_applied_tokens(p1__56473_SHARP_,old_token_name,container);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shapes], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([containers], 0));
var matching_aliases = (cljs.core.truth_(tokens_lib)?(function (){var all_tokens = app.common.types.tokens_lib.get_all_tokens(tokens_lib);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56474_SHARP_){
return app.main.data.workspace.tokens.remapping.scan_token_value_references(p1__56474_SHARP_,old_token_name);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_tokens], 0));
})():cljs.core.PersistentVector.EMPTY);
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.tokens.remapping",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"token-scan-details"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),old_token_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers-count","containers-count",-2090453936),cljs.core.count(containers)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-applied-refs","total-applied-refs",1091146793),cljs.core.count(matching_applied)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matching-applied","matching-applied",-1367639331),cljs.core.count(matching_applied)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-alias-refs","total-alias-refs",369704626),cljs.core.count(matching_aliases)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matching-aliases","matching-aliases",-889687368),cljs.core.count(matching_aliases)], null)], null);
}),null)),null,null,"app.main.data.workspace.tokens.remapping",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),matching_applied,new cljs.core.Keyword(null,"token-aliases","token-aliases",-1660509197),matching_aliases,new cljs.core.Keyword(null,"total-references","total-references",1857252869),(cljs.core.count(matching_applied) + cljs.core.count(matching_aliases))], null);
});
/**
 * Main function to remap all token references when a token name changes
 */
app.main.data.workspace.tokens.remapping.remap_tokens = (function app$main$data$workspace$tokens$remapping$remap_tokens(old_token_name,new_token_name){
if((typeof app.main.data.workspace.tokens.remapping.remap_tokens_56479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.remapping.remap_tokens_56479 = (function (old_token_name,new_token_name,meta56480){
this.old_token_name = old_token_name;
this.new_token_name = new_token_name;
this.meta56480 = meta56480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.remapping.remap_tokens_56479.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.remapping.remap_tokens_56479.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.remapping","remap-tokens","app.main.data.workspace.tokens.remapping/remap-tokens",-1766049516);
}));

(app.main.data.workspace.tokens.remapping.remap_tokens_56479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56481,meta56480__$1){
var self__ = this;
var _56481__$1 = this;
return (new app.main.data.workspace.tokens.remapping.remap_tokens_56479(self__.old_token_name,self__.new_token_name,meta56480__$1));
}));

(app.main.data.workspace.tokens.remapping.remap_tokens_56479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56481){
var self__ = this;
var _56481__$1 = this;
return self__.meta56480;
}));

(app.main.data.workspace.tokens.remapping.remap_tokens_56479.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.remapping.remap_tokens_56479.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var scan_results = app.main.data.workspace.tokens.remapping.scan_workspace_token_references(file_data,self__.old_token_name);
var tokens_lib = new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991).cljs$core$IFn$_invoke$arity$1(file_data);
var sets = app.common.types.tokens_lib.get_sets(tokens_lib);
var tokens_with_sets = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (set){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (token){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"set","set",304602554),set], null);
}),cljs.core.vals(app.common.types.tokens_lib.get_tokens(tokens_lib,app.common.types.tokens_lib.get_id(set))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sets], 0));
var refs_by_container = cljs.core.group_by(new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(scan_results));
var shape_changes = cljs.core.reduce_kv((function (changes,container,refs){
var shape_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape-id","shape-id",981169327),refs);
var token = (function (){var or__5025__auto__ = cljs.core.some((function (p1__56475_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__56475_SHARP_)),self__.new_token_name)){
return p1__56475_SHARP_;
} else {
return null;
}
}),tokens_with_sets);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.some((function (p1__56476_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__56476_SHARP_)),self__.old_token_name)){
return p1__56476_SHARP_;
} else {
return null;
}
}),tokens_with_sets);
}
})();
var attributes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attribute","attribute",-2074029119),refs));
if(cljs.core.truth_(token)){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_container(changes,container),shape_ids,(function (shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),(function (p1__56477_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__56477_SHARP_,app.common.files.tokens.attributes_map(attributes,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(token))], 0));
}));
}));
} else {
return changes;
}
}),app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),file_data),file_data),refs_by_container);
var token_changes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes,ref){
var source_token_id = new cljs.core.Keyword(null,"source-token-id","source-token-id",-86861571).cljs$core$IFn$_invoke$arity$1(ref);
var temp__5825__auto__ = cljs.core.some((function (p1__56478_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__56478_SHARP_)),source_token_id)){
return p1__56478_SHARP_;
} else {
return null;
}
}),tokens_with_sets);
if(cljs.core.truth_(temp__5825__auto__)){
var map__56482 = temp__5825__auto__;
var map__56482__$1 = cljs.core.__destructure_map(map__56482);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56482__$1,new cljs.core.Keyword(null,"set","set",304602554));
var old_value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token);
var new_value = app.common.types.token.update_token_value_references(old_value,self__.old_token_name,self__.new_token_name);
return app.common.files.changes_builder.set_token(changes,app.common.types.tokens_lib.get_id(set),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(token,new cljs.core.Keyword(null,"value","value",305978217),new_value));
} else {
return null;
}
}),shape_changes,new cljs.core.Keyword(null,"token-aliases","token-aliases",-1660509197).cljs$core$IFn$_invoke$arity$1(scan_results));
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.tokens.remapping",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"token-remapping"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old-name","old-name",1289683869),self__.old_token_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-name","new-name",1288355058),self__.new_token_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"references-count","references-count",403887736),new cljs.core.Keyword(null,"total-references","total-references",1857252869).cljs$core$IFn$_invoke$arity$1(scan_results)], null)], null);
}),null)),null,null,"app.main.data.workspace.tokens.remapping",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return beicon.v2.core.of(app.main.data.changes.commit_changes(token_changes));
}));
}

return (new app.main.data.workspace.tokens.remapping.remap_tokens_56479(old_token_name,new_token_name,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Validate that a token remapping operation is safe to perform
 */
app.main.data.workspace.tokens.remapping.validate_token_remapping = (function app$main$data$workspace$tokens$remapping$validate_token_remapping(old_name,new_name){
if(cuerdas.core.blank_QMARK_(new_name)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-name","invalid-name",-1996307131),new cljs.core.Keyword(null,"message","message",-406056002),"Token name cannot be empty"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_name,new_name)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"no-change","no-change",1480549909),new cljs.core.Keyword(null,"message","message",-406056002),"New name is the same as current name"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valid?","valid?",-212412379),true], null);

}
}
});
/**
 * Count the number of references to a token in the workspace
 */
app.main.data.workspace.tokens.remapping.count_token_references = (function app$main$data$workspace$tokens$remapping$count_token_references(file_data,token_name){
var scan_results = app.main.data.workspace.tokens.remapping.scan_workspace_token_references(file_data,token_name);
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.tokens.remapping",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"token-reference-scan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"applied-refs","applied-refs",-956375371),cljs.core.count(new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(scan_results))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias-refs","alias-refs",665806110),cljs.core.count(new cljs.core.Keyword(null,"token-aliases","token-aliases",-1660509197).cljs$core$IFn$_invoke$arity$1(scan_results))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"total-references","total-references",1857252869).cljs$core$IFn$_invoke$arity$1(scan_results)], null)], null);
}),null)),null,null,"app.main.data.workspace.tokens.remapping",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return new cljs.core.Keyword(null,"total-references","total-references",1857252869).cljs$core$IFn$_invoke$arity$1(scan_results);
});

//# sourceMappingURL=app.main.data.workspace.tokens.remapping.js.map
