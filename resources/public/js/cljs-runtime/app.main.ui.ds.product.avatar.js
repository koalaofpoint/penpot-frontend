import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.profile.js";
import "./app.config.js";
import "./app.util.avatars.js";
import "./rumext.v2.js";
import "./rumext.v2.util.js";
goog.provide('app.main.ui.ds.product.avatar');
app.main.ui.ds.product.avatar.schema_COLON_avatar = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),app.common.types.profile.schema_COLON_profile], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"S","M","L"], null)], null)], null)], null);
app.main.ui.ds.product.avatar.get_url = (function app$main$ui$ds$product$avatar$get_url(p__79247){
var map__79248 = p__79247;
var map__79248__$1 = cljs.core.__destructure_map(map__79248);
var photo_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79248__$1,new cljs.core.Keyword(null,"photo-url","photo-url",-1816449182));
var photo_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79248__$1,new cljs.core.Keyword(null,"photo-id","photo-id",108052797));
var fullname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79248__$1,new cljs.core.Keyword(null,"fullname","fullname",1638772587));
var or__5025__auto__ = photo_url;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var G__79249 = photo_id;
if((G__79249 == null)){
return null;
} else {
return app.config.resolve_media(G__79249);
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.util.avatars.generate(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),fullname], null));
}
}
});
app.main.ui.ds.product.avatar.avatar_STAR__validator = rumext.v2.validation.validator(app.common.schema.schema(app.main.ui.ds.product.avatar.schema_COLON_avatar));

app.main.ui.ds.product.avatar.avatar_STAR_ = (function app$main$ui$ds$product$avatar$avatar_STAR_(props_79250){
// ===== start props checking =====;

var res__47117__auto___79251 = app.main.ui.ds.product.avatar.avatar_STAR__validator(props_79250);
if((!((res__47117__auto___79251 == null)))){
var items__47118__auto___79252 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___79251);
var msg__47122__auto___79253 = ["invalid props on component avatar*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___79252),"\n"].join('');
throw (new Error(msg__47122__auto___79253));
} else {
}

// ===== end props checking =====;

var tag = props_79250.tag;
var profile = props_79250.profile;
var selected = props_79250.selected;
var variant = props_79250.variant;
var class$ = props_79250.className;
var variant__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(variant,"S");
var profile__$1 = ((cljs.core.object_QMARK_(profile))?rumext.v2.util.bean(profile):profile);
var href = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile__$1)],(function (){
return app.main.ui.ds.product.avatar.get_url(profile__$1);
}));
var class_SINGLEQUOTE_ = "main_ui_ds_product_avatar__avatar"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"S"))?"main_ui_ds_product_avatar__avatar-small":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"M"))?"main_ui_ds_product_avatar__avatar-medium":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"L"))?"main_ui_ds_product_avatar__avatar-large":"")+" "+(cljs.core.truth_(selected)?"main_ui_ds_product_avatar__is-selected":"");
return rumext.v2.jsx(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(tag,"div"),{'className':(class$ ?? "")+" "+(class_SINGLEQUOTE_ ?? ""),'title':new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(profile__$1),'children':rumext.v2.jsx("div",{'className':"main_ui_ds_product_avatar__avatar-image",'children':rumext.v2.jsx("img",{'alt':new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(profile__$1),'src':href})})});
});

(app.main.ui.ds.product.avatar.avatar_STAR_.displayName = "avatar*");


//# sourceMappingURL=app.main.ui.ds.product.avatar.js.map
