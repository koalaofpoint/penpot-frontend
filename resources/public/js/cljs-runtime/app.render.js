import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.logging.js";
import "./app.common.math.js";
import "./app.common.schema.js";
import "./app.common.types.components_list.js";
import "./app.common.uri.js";
import "./app.main.data.fonts.js";
import "./app.main.features.js";
import "./app.main.render.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.util.dom.js";
import "./app.util.globals.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./garden.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.render');
app.common.logging.setup_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"info","info",-317069002)], null));
app.render.set_current_team = (function app$render$set_current_team(p__58449){
var map__58450 = p__58449;
var map__58450__$1 = cljs.core.__destructure_map(map__58450);
var team = map__58450__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58450__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
if((typeof app.render.set_current_team_58451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.render.set_current_team_58451 = (function (p__58449,map__58450,team,id,permissions,features,meta58452){
this.p__58449 = p__58449;
this.map__58450 = map__58450;
this.team = team;
this.id = id;
this.permissions = permissions;
this.features = features;
this.meta58452 = meta58452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.render.set_current_team_58451.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.set_current_team_58451.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.render","set-current-team","app.render/set-current-team",-861918381);
}));

(app.render.set_current_team_58451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58453,meta58452__$1){
var self__ = this;
var _58453__$1 = this;
return (new app.render.set_current_team_58451(self__.p__58449,self__.map__58450,self__.team,self__.id,self__.permissions,self__.features,meta58452__$1));
}));

(app.render.set_current_team_58451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58453){
var self__ = this;
var _58453__$1 = this;
return self__.meta58452;
}));

(app.render.set_current_team_58451.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.set_current_team_58451.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"permissions","permissions",67803075),self__.permissions),new cljs.core.Keyword(null,"teams","teams",1677714510),cljs.core.assoc,self__.id,self__.team),new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995),self__.id);
}));

(app.render.set_current_team_58451.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.set_current_team_58451.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.features.initialize(self__.features));
}));
}

return (new app.render.set_current_team_58451(p__58449,map__58450__$1,team,id,permissions,features__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.render.fetch_team = (function app$render$fetch_team(var_args){
var args__5755__auto__ = [];
var len__5749__auto___58499 = arguments.length;
var i__5750__auto___58500 = (0);
while(true){
if((i__5750__auto___58500 < len__5749__auto___58499)){
args__5755__auto__.push((arguments[i__5750__auto___58500]));

var G__58501 = (i__5750__auto___58500 + (1));
i__5750__auto___58500 = G__58501;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.render.fetch_team.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.render.fetch_team.cljs$core$IFn$_invoke$arity$variadic = (function (p__58455){
var map__58456 = p__58455;
var map__58456__$1 = cljs.core.__destructure_map(map__58456);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58456__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
if((typeof app.render.fetch_team_58457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.render.fetch_team_58457 = (function (p__58455,map__58456,file_id,meta58458){
this.p__58455 = p__58455;
this.map__58456 = map__58456;
this.file_id = file_id;
this.meta58458 = meta58458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.render.fetch_team_58457.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.fetch_team_58457.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.render","fetch-team","app.render/fetch-team",-1364121691);
}));

(app.render.fetch_team_58457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58459,meta58458__$1){
var self__ = this;
var _58459__$1 = this;
return (new app.render.fetch_team_58457(self__.p__58455,self__.map__58456,self__.file_id,meta58458__$1));
}));

(app.render.fetch_team_58457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58459){
var self__ = this;
var _58459__$1 = this;
return self__.meta58458;
}));

(app.render.fetch_team_58457.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.fetch_team_58457.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.mapcat((function (team){
return beicon.v2.core.of(app.render.set_current_team(team),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.render","team-fetched","app.render/team-fetched",317230867),team));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team","get-team",-1178950994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], null)));
}));
}

return (new app.render.fetch_team_58457(p__58455,map__58456__$1,file_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.render.fetch_team.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.render.fetch_team.cljs$lang$applyTo = (function (seq58454){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58454));
}));

app.render.ref_COLON_objects = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734),app.main.store.state);
app.render.object_svg = (function app$render$object_svg(props_58460){
var embed = props_58460.embed;
var object_id = (props_58460["object-id"]);
var skip_children = (props_58460["skip-children"]);
var objects = rumext.v2.deref(app.render.ref_COLON_objects);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,object_id);
if(cljs.core.truth_(temp__5825__auto__)){
var object = temp__5825__auto__;
var map__58461 = app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [objects], null),object);
var map__58461__$1 = cljs.core.__destructure_map(map__58461);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58461__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58461__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return app.util.dom.set_page_style_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),""+(app.common.math.ceil(width) ?? "")+"px "+(app.common.math.ceil(height) ?? "")+"px"], null));
} else {
return null;
}
}));

if(cljs.core.truth_(objects)){
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.is_render_QMARK_),{'value':true,'children':rumext.v2.jsx(app.main.render.object_svg,{'objects':objects,'object-id':object_id,'embed':embed,'skip-children':skip_children})});
} else {
return null;
}
});

(app.render.object_svg.displayName = "object-svg");

app.render.objects_svg = (function app$render$objects_svg(props_58462){
var embed = props_58462.embed;
var skip_children = (props_58462["skip-children"]);
var object_ids = (props_58462["object-ids"]);
var temp__5825__auto__ = rumext.v2.deref(app.render.ref_COLON_objects);
if(cljs.core.truth_(temp__5825__auto__)){
var objects = temp__5825__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,object_id){
out_arr__35152__auto__.push((function (){var objects__$1 = app.main.render.adapt_objects_for_shape(objects,object_id);
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.is_render_QMARK_),{'value':true,'children':rumext.v2.jsx(app.main.render.object_svg,{'objects':objects__$1,'object-id':object_id,'embed':embed,'skip-children':skip_children},cljs.core.str.cljs$core$IFn$_invoke$arity$1(object_id))});
})());

return out_arr__35152__auto__;
}),[],object_ids);
} else {
return null;
}
});

(app.render.objects_svg.displayName = "objects-svg");

app.render.fetch_objects_bundle = (function app$render$fetch_objects_bundle(var_args){
var args__5755__auto__ = [];
var len__5749__auto___58502 = arguments.length;
var i__5750__auto___58503 = (0);
while(true){
if((i__5750__auto___58503 < len__5749__auto___58502)){
args__5755__auto__.push((arguments[i__5750__auto___58503]));

var G__58504 = (i__5750__auto___58503 + (1));
i__5750__auto___58503 = G__58504;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.render.fetch_objects_bundle.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.render.fetch_objects_bundle.cljs$core$IFn$_invoke$arity$variadic = (function (p__58465){
var map__58466 = p__58465;
var map__58466__$1 = cljs.core.__destructure_map(map__58466);
var options = map__58466__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var share_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"share-id","share-id",795821204));
var object_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58466__$1,new cljs.core.Keyword(null,"object-id","object-id",-754527291));
if((typeof app.render.fetch_objects_bundle_58467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.render.fetch_objects_bundle_58467 = (function (p__58465,map__58466,options,file_id,page_id,share_id,object_id,meta58468){
this.p__58465 = p__58465;
this.map__58466 = map__58466;
this.options = options;
this.file_id = file_id;
this.page_id = page_id;
this.share_id = share_id;
this.object_id = object_id;
this.meta58468 = meta58468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.render.fetch_objects_bundle_58467.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.fetch_objects_bundle_58467.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.render","fetch-objects-bundle","app.render/fetch-objects-bundle",-1122096864);
}));

(app.render.fetch_objects_bundle_58467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58469,meta58468__$1){
var self__ = this;
var _58469__$1 = this;
return (new app.render.fetch_objects_bundle_58467(self__.p__58465,self__.map__58466,self__.options,self__.file_id,self__.page_id,self__.share_id,self__.object_id,meta58468__$1));
}));

(app.render.fetch_objects_bundle_58467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58469){
var self__ = this;
var _58469__$1 = this;
return self__.meta58468;
}));

(app.render.fetch_objects_bundle_58467.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.fetch_objects_bundle_58467.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336));
return beicon.v2.core.map((function (objects){
var objects__$1 = app.main.render.adapt_objects_for_shape(objects,self__.object_id);
return (function (p1__58463_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58463_SHARP_,new cljs.core.Keyword(null,"objects","objects",2099713734),objects__$1);
});
}),beicon.v2.core.map(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.second),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (p__58470){
var vec__58471 = p__58470;
var fonts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58471,(0),null);
if(cljs.core.seq(fonts)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.fonts.fonts_fetched(fonts));
} else {
return null;
}
}),beicon.v2.core.zip(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-font-variants","get-font-variants",-135164076),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),self__.share_id], null)),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-page","get-page",264342825),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),self__.share_id,new cljs.core.Keyword(null,"object-id","object-id",-754527291),self__.object_id,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1], null)))))));
}));
}

return (new app.render.fetch_objects_bundle_58467(p__58465,map__58466__$1,options,file_id,page_id,share_id,object_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.render.fetch_objects_bundle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.render.fetch_objects_bundle.cljs$lang$applyTo = (function (seq58464){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58464));
}));

app.render.schema_COLON_render_objects = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"render-objets"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"share-id","share-id",795821204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skip-children","skip-children",1139347942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null);
app.render.coerce_render_objects_params = app.common.schema.coercer(app.render.schema_COLON_render_objects);
app.render.render_objects = (function app$render$render_objects(params){
try{var map__58475 = app.render.coerce_render_objects_params(params);
var map__58475__$1 = cljs.core.__destructure_map(map__58475);
var params__$1 = map__58475__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var embed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"embed","embed",-1354913349));
var share_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"share-id","share-id",795821204));
var object_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"object-id","object-id",-754527291));
var skip_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword(null,"skip-children","skip-children",1139347942));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.render.fetch_objects_bundle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id,new cljs.core.Keyword(null,"object-id","object-id",-754527291),object_id], 0)));

if(cljs.core.uuid_QMARK_(object_id)){
return rumext.v2.jsx(app.render.object_svg,{'file-id':file_id,'page-id':page_id,'share-id':share_id,'object-id':object_id,'embed':embed,'skip-children':skip_children});
} else {
return rumext.v2.jsx(app.render.objects_svg,{'file-id':file_id,'page-id':page_id,'share-id':share_id,'object-ids':cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,object_id),'embed':embed,'skip-children':skip_children});
}
}catch (e58474){var cause = e58474;
var temp__5825__auto___58505 = new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(cause));
if(cljs.core.truth_(temp__5825__auto___58505)){
var explain_58506 = temp__5825__auto___58505;
console.log("Unexpected error");

console.log(app.common.schema.humanize_explain(explain_58506));
} else {
}

return rumext.v2.jsxs("span",{'children':["Unexpected error:",cljs.core.ex_message(cause)]});
}});
app.render.components_svg = (function app$render$components_svg(props_58476){
var embed = props_58476.embed;
var component_id = (props_58476["component-id"]);
var file_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),app.main.store.state);
}));
var state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id], null));
var temp__5825__auto__ = rumext.v2.deref(file_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var file = temp__5825__auto__;
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("style",{'children':garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"height","height",1025178622),"calc(100vh - 200px)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nav",".nav",844974156),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"list-style","list-style",-809622358),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.Keyword(null,"margin","margin",-995903681)],["none","wrap","10px","scroll","flex","column","200px","1px dotted #e6e6e6",(0)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"border","border",1444987323),"0px solid black"], null)], null)], null)], null)], 0))}),rumext.v2.jsx("ul",{'className':"nav",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__58477){
var vec__58478 = p__58477;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58478,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58478,(1),null);
out_arr__35152__auto__.push((function (){var on_click = (function (event){
app.util.dom.prevent_default(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"component-id","component-id",1551113783),id);
});
return rumext.v2.jsx("li",{'children':rumext.v2.jsx("a",{'onClick':on_click,'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data)})},cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
})());

return out_arr__35152__auto__;
}),[],app.common.types.components_list.components.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file)))}),rumext.v2.jsx("main",{'children':rumext.v2.jsx(app.main.render.components_svg,{'data':new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),'embed':embed,'children':(function (){var temp__5825__auto____$1 = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5825__auto____$1)){
var component_id__$1 = temp__5825__auto____$1;
return rumext.v2.jsx("use",{'x':(0),'y':(0),'href':["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_id__$1)].join('')});
} else {
return null;
}
})()})})]});
} else {
return null;
}
});

(app.render.components_svg.displayName = "components-svg");

app.render.fetch_components_bundle = (function app$render$fetch_components_bundle(var_args){
var args__5755__auto__ = [];
var len__5749__auto___58507 = arguments.length;
var i__5750__auto___58508 = (0);
while(true){
if((i__5750__auto___58508 < len__5749__auto___58507)){
args__5755__auto__.push((arguments[i__5750__auto___58508]));

var G__58509 = (i__5750__auto___58508 + (1));
i__5750__auto___58508 = G__58509;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.render.fetch_components_bundle.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.render.fetch_components_bundle.cljs$core$IFn$_invoke$arity$variadic = (function (p__58483){
var map__58484 = p__58483;
var map__58484__$1 = cljs.core.__destructure_map(map__58484);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
if((typeof app.render.fetch_components_bundle_58485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.render.fetch_components_bundle_58485 = (function (p__58483,map__58484,file_id,meta58486){
this.p__58483 = p__58483;
this.map__58484 = map__58484;
this.file_id = file_id;
this.meta58486 = meta58486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.render.fetch_components_bundle_58485.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.fetch_components_bundle_58485.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.render","fetch-components-bundle","app.render/fetch-components-bundle",-1260822827);
}));

(app.render.fetch_components_bundle_58485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58487,meta58486__$1){
var self__ = this;
var _58487__$1 = this;
return (new app.render.fetch_components_bundle_58485(self__.p__58483,self__.map__58484,self__.file_id,meta58486__$1));
}));

(app.render.fetch_components_bundle_58485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58487){
var self__ = this;
var _58487__$1 = this;
return self__.meta58486;
}));

(app.render.fetch_components_bundle_58485.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.fetch_components_bundle_58485.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336));
return beicon.v2.core.map((function (file){
return (function (p1__58481_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58481_SHARP_,new cljs.core.Keyword(null,"file","file",-1269645878),file);
});
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file","get-file",-588292783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.file_id,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1], null)));
}));
}

return (new app.render.fetch_components_bundle_58485(p__58483,map__58484__$1,file_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.render.fetch_components_bundle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.render.fetch_components_bundle.cljs$lang$applyTo = (function (seq58482){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58482));
}));

app.render.schema_COLON_render_components = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"render-components"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null);
app.render.coerce_render_components_params = app.common.schema.coercer(app.render.schema_COLON_render_components);
app.render.render_components = (function app$render$render_components(params){
try{var map__58489 = app.render.coerce_render_components_params(params);
var map__58489__$1 = cljs.core.__destructure_map(map__58489);
var params__$1 = map__58489__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58489__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58489__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var embed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58489__$1,new cljs.core.Keyword(null,"embed","embed",-1354913349));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
if((typeof app.render.initialize_render_components_58490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.render.initialize_render_components_58490 = (function (params,map__58489,file_id,component_id,embed,meta58491){
this.params = params;
this.map__58489 = map__58489;
this.file_id = file_id;
this.component_id = component_id;
this.embed = embed;
this.meta58491 = meta58491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.render.initialize_render_components_58490.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.initialize_render_components_58490.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.render","initialize-render-components","app.render/initialize-render-components",-1801338695);
}));

(app.render.initialize_render_components_58490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58492,meta58491__$1){
var self__ = this;
var _58492__$1 = this;
return (new app.render.initialize_render_components_58490(self__.params,self__.map__58489,self__.file_id,self__.component_id,self__.embed,meta58491__$1));
}));

(app.render.initialize_render_components_58490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58492){
var self__ = this;
var _58492__$1 = this;
return self__.meta58491;
}));

(app.render.initialize_render_components_58490.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.render.initialize_render_components_58490.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.merge(beicon.v2.core.of(app.render.fetch_team.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], 0))),beicon.v2.core.map(app.render.fetch_components_bundle,beicon.v2.core.map(cljs.core.constantly(self__.params),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.render","team-fetched","app.render/team-fetched",317230867)),stream)))));
}));
}

return (new app.render.initialize_render_components_58490(params__$1,map__58489__$1,file_id,component_id,embed,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return rumext.v2.jsx(app.render.components_svg,{'component-id':component_id,'embed':embed});
}catch (e58488){var cause = e58488;
var temp__5825__auto___58511 = new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(cause));
if(cljs.core.truth_(temp__5825__auto___58511)){
var explain_58512 = temp__5825__auto___58511;
console.log("Unexpected error");

console.log(app.common.schema.humanize_explain(explain_58512));
} else {
}

return rumext.v2.jsxs("span",{'children':["Unexpected error:",cljs.core.ex_message(cause)]});
}});
if((typeof app !== 'undefined') && (typeof app.render !== 'undefined') && (typeof app.render.app_root !== 'undefined')){
} else {
app.render.app_root = (function (){var el = app.util.dom.get_element("app");
return rumext.v2.create_root(el);
})();
}
app.render.parse_params = (function app$render$parse_params(loc){
var href = (loc["href"]);
var G__58496 = href;
var G__58496__$1 = (((G__58496 == null))?null:app.common.uri.uri(G__58496));
var G__58496__$2 = (((G__58496__$1 == null))?null:new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__58496__$1));
if((G__58496__$2 == null)){
return null;
} else {
return app.common.uri.query_string__GT_map(G__58496__$2);
}
});
app.render.init_ui = (function app$render$init_ui(){
var temp__5825__auto__ = app.render.parse_params(app.util.globals.location);
if(cljs.core.truth_(temp__5825__auto__)){
var params = temp__5825__auto__;
var temp__5825__auto____$1 = (function (){var G__58497 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(params);
switch (G__58497) {
case "objects":
return app.render.render_objects(params);

break;
case "components":
return app.render.render_components(params);

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var component = temp__5825__auto____$1;
return rumext.v2.render_BANG_(app.render.app_root,component);
} else {
return null;
}
} else {
return null;
}
});
app.render.init = (function app$render$init(){
return app.render.init_ui();
});
goog.exportSymbol('app.render.init', app.render.init);
app.render.reinit = (function app$render$reinit(){
return app.render.init_ui();
});
app.render.after_load = (function app$render$after_load(){
return app.render.reinit();
});

//# sourceMappingURL=app.render.js.map
