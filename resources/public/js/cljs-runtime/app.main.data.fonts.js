import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$opentype.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.logging.js";
import "./app.common.media.js";
import "./app.common.uuid.js";
import "./app.main.data.event.js";
import "./app.main.data.notifications.js";
import "./app.main.fonts.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.util.i18n.js";
import "./app.util.storage.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.fonts');
app.main.data.fonts.default_chunk_size = (((1024) * (1024)) * (4));
app.main.data.fonts.chunk_array = (function app$main$data$fonts$chunk_array(data,chunk_size){
var total_size = data.length;
var offset = (0);
var chunks = cljs.core.PersistentVector.EMPTY;
while(true){
if((offset < total_size)){
var end = (function (){var x__5113__auto__ = (offset + chunk_size);
var y__5114__auto__ = total_size;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var chunk = data.subarray(offset,end);
var G__56613 = end;
var G__56614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chunks,chunk);
offset = G__56613;
chunks = G__56614;
continue;
} else {
return chunks;
}
break;
}
});
app.main.data.fonts.fonts_fetched = (function app$main$data$fonts$fonts_fetched(fonts){
var prepare_font = (function app$main$data$fonts$fonts_fetched_$_prepare_font(p__56403){
var vec__56404 = p__56403;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56404,(0),null);
var vec__56407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56404,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56407,(0),null);
var items = vec__56407;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"family","family",-1313145692),new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"variants","variants",-176391100),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(variant_sort_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(prepare_font_variant,items)))], null);
});
var variant_sort_fn = (function app$main$data$fonts$fonts_fetched_$_variant_sort_fn(item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(item),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("normal",new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(item)))?(1):(2))], null);
});
var prepare_font_variant = (function app$main$data$fonts$fonts_fetched_$_prepare_font_variant(item){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(item)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(item))].join(''),new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.media.font_weight__GT_name(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(item))),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("normal",new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(item)))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.capital(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(item)))].join(''):null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword("app.main.fonts","woff1-file-id","app.main.fonts/woff1-file-id",2117136543),new cljs.core.Keyword(null,"woff1-file-id","woff1-file-id",1153304603).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("app.main.fonts","woff2-file-id","app.main.fonts/woff2-file-id",-49144145),new cljs.core.Keyword(null,"woff2-file-id","woff2-file-id",369972739).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("app.main.fonts","ttf-file-id","app.main.fonts/ttf-file-id",218081328),new cljs.core.Keyword(null,"ttf-file-id","ttf-file-id",-1342545748).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("app.main.fonts","otf-file-id","app.main.fonts/otf-file-id",313412300),new cljs.core.Keyword(null,"otf-file-id","otf-file-id",-108616880).cljs$core$IFn$_invoke$arity$1(item)], null);
});
var adapt_font_id = (function app$main$data$fonts$fonts_fetched_$_adapt_font_id(variant){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(variant,new cljs.core.Keyword(null,"font-id","font-id",-390084123),(function (p1__56385_SHARP_){
return ["custom-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56385_SHARP_)].join('');
}));
});
if((typeof app.main.data.fonts.fonts_loaded_56445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.fonts.fonts_loaded_56445 = (function (fonts,prepare_font,variant_sort_fn,prepare_font_variant,adapt_font_id,meta56446){
this.fonts = fonts;
this.prepare_font = prepare_font;
this.variant_sort_fn = variant_sort_fn;
this.prepare_font_variant = prepare_font_variant;
this.adapt_font_id = adapt_font_id;
this.meta56446 = meta56446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.fonts.fonts_loaded_56445.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.fonts_loaded_56445.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.fonts","fonts-loaded","app.main.data.fonts/fonts-loaded",484410584);
}));

(app.main.data.fonts.fonts_loaded_56445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56447,meta56446__$1){
var self__ = this;
var _56447__$1 = this;
return (new app.main.data.fonts.fonts_loaded_56445(self__.fonts,self__.prepare_font,self__.variant_sort_fn,self__.prepare_font_variant,self__.adapt_font_id,meta56446__$1));
}));

(app.main.data.fonts.fonts_loaded_56445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56447){
var self__ = this;
var _56447__$1 = this;
return self__.meta56446;
}));

(app.main.data.fonts.fonts_loaded_56445.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.fonts_loaded_56445.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"fonts","fonts",1683167295),app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),self__.fonts));
}));

(app.main.data.fonts.fonts_loaded_56445.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.fonts_loaded_56445.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var fonts__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(self__.prepare_font,cljs.core.group_by(new cljs.core.Keyword(null,"font-id","font-id",-390084123),cljs.core.map.cljs$core$IFn$_invoke$arity$2(self__.adapt_font_id,self__.fonts)));
return app.main.fonts.register_BANG_(new cljs.core.Keyword(null,"custom","custom",340151948),fonts__$1);
}));
}

return (new app.main.data.fonts.fonts_loaded_56445(fonts,prepare_font,variant_sort_fn,prepare_font_variant,adapt_font_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.fonts.fetch_fonts = (function app$main$data$fonts$fetch_fonts(team_id){
if((typeof app.main.data.fonts.fetch_fonts_56463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.fonts.fetch_fonts_56463 = (function (team_id,meta56464){
this.team_id = team_id;
this.meta56464 = meta56464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.fonts.fetch_fonts_56463.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.fetch_fonts_56463.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.fonts","fetch-fonts","app.main.data.fonts/fetch-fonts",967009596);
}));

(app.main.data.fonts.fetch_fonts_56463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56465,meta56464__$1){
var self__ = this;
var _56465__$1 = this;
return (new app.main.data.fonts.fetch_fonts_56463(self__.team_id,meta56464__$1));
}));

(app.main.data.fonts.fetch_fonts_56463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56465){
var self__ = this;
var _56465__$1 = this;
return self__.meta56464;
}));

(app.main.data.fonts.fetch_fonts_56463.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.fetch_fonts_56463.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.fonts.fonts_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-font-variants","get-font-variants",-135164076),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id], null)));
}));
}

return (new app.main.data.fonts.fetch_fonts_56463(team_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a seq of blobs and the team id, creates a ready-to-use fonts
 *   map with temporal ID's associated to each font entry.
 */
app.main.data.fonts.process_upload = (function app$main$data$fonts$process_upload(blobs,team_id){
var prepare = (function app$main$data$fonts$process_upload_$_prepare(p__56509){
var map__56510 = p__56509;
var map__56510__$1 = cljs.core.__destructure_map(map__56510);
var params = map__56510__$1;
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56510__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56510__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56510__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var family = (function (){var or__5025__auto__ = font.getEnglishName("preferredFamily");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return font.getEnglishName("fontFamily");
}
})();
var variant = (function (){var or__5025__auto__ = font.getEnglishName("preferredSubfamily");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return font.getEnglishName("fontSubfamily");
}
})();
var hhea_ascender = cljs.core.abs(font.tables.hhea.ascender);
var hhea_descender = cljs.core.abs(font.tables.hhea.descender);
var win_ascent = cljs.core.abs(font.tables.os2.usWinAscent);
var win_descent = cljs.core.abs(font.tables.os2.usWinDescent);
var os2_ascent = cljs.core.abs(font.tables.os2.sTypoAscender);
var os2_descent = cljs.core.abs(font.tables.os2.sTypoDescender);
var f_selection = ((font.tables.os2.fsSelection & (1 << (7))) != 0);
var height_warning_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hhea_ascender,win_ascent)) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hhea_descender,win_descent)) || (((f_selection) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hhea_ascender,os2_ascent)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hhea_descender,os2_descent)))))))));
var data__$1 = (new Uint8Array(data));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),app.main.data.fonts.chunk_array(data__$1,app.main.data.fonts.default_chunk_size),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"type","type",1174270348),type], null),new cljs.core.Keyword(null,"font-family","font-family",-667419874),(function (){var or__5025__auto__ = family;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),app.common.media.parse_font_weight(variant),new cljs.core.Keyword(null,"font-style","font-style",-773672352),app.common.media.parse_font_style(variant),new cljs.core.Keyword(null,"height-warning?","height-warning?",1727594341),height_warning_QMARK_], null);
});
var join = (function app$main$data$fonts$process_upload_$_join(res,p__56528){
var map__56532 = p__56528;
var map__56532__$1 = cljs.core.__destructure_map(map__56532);
var font = map__56532__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56532__$1,new cljs.core.Keyword(null,"content","content",15833224));
var key_fn = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-style","font-style",-773672352));
var existing = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__56471_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_fn(font),key_fn(p1__56471_SHARP_));
}),cljs.core.vals(res));
if(cljs.core.truth_(existing)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(existing),(function (existing__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(existing__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(content),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(content)),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(content));
}));
} else {
var tmp_id = app.common.uuid.next();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,tmp_id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(font,new cljs.core.Keyword(null,"id","id",-1388402092),tmp_id),new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id),new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(content)])),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(content),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(content)])),new cljs.core.Keyword(null,"content","content",15833224)));
}
});
var parse_mtype = (function app$main$data$fonts$process_upload_$_parse_mtype(ba){
var u8 = (new Uint8Array(ba,(0),(4)));
var sg = (function (){var a__5613__auto__ = u8;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = "";
while(true){
if((i < l__5614__auto__)){
var G__56622 = (i + (1));
var G__56623 = [ret,(((i === (0)))?"":" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((u8[i]).toString((8)))].join('');
i = G__56622;
ret = G__56623;
continue;
} else {
return ret;
}
break;
}
})();
var G__56536 = sg;
switch (G__56536) {
case "117 124 124 117":
return "font/otf";

break;
case "0 1 0 0":
return "font/ttf";

break;
case "167 117 106 106":
return "font/woff";

break;
default:
throw (new Error(["No matching clause: ",G__56536].join('')));

}
});
var parse_font = (function app$main$data$fonts$process_upload_$_parse_font(p__56540){
var map__56541 = p__56540;
var map__56541__$1 = cljs.core.__destructure_map(map__56541);
var params = map__56541__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,new cljs.core.Keyword(null,"data","data",-232669377));
try{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"font","font",-1506159249),shadow.js.shim.module$opentype.parse(data));
}catch (e56542){var _e = e56542;
if(app.common.logging.enabled_QMARK_("app.main.data.fonts",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),(function (){var G__56543 = "skipping file %s, unsupported format";
var G__56544 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(params);
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2(G__56543,G__56544) : cuerdas.core.fmt.call(null,G__56543,G__56544));
})()], null)], null);
}),null)),null,null,"app.main.data.fonts",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


return null;
}});
var read_blob = (function app$main$data$fonts$process_upload_$_read_blob(blob){
return beicon.v2.core.mapcat((function (p__56545){
var map__56546 = p__56545;
var map__56546__$1 = cljs.core.__destructure_map(map__56546);
var font = map__56546__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_((function (){var or__5025__auto__ = type;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return error;
}
})())){
return beicon.v2.core.of(font);
} else {
return beicon.v2.core.empty();
}
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),blob.name], null));
}),beicon.v2.core.map((function (data){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"name","name",1843675177),blob.name,new cljs.core.Keyword(null,"type","type",1174270348),parse_mtype(data)], null);
}),app.util.webapi.read_file_as_array_buffer(blob))));
});
var fonts = beicon.v2.core.mapcat(read_blob,beicon.v2.core.from(blobs));
var errors = beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,font){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(font)),"'"].join(''));
}),cljs.core.PersistentVector.EMPTY,beicon.v2.core.filter((function (p1__56472_SHARP_){
return (!((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__56472_SHARP_) == null)));
}),fonts));
beicon.v2.core.subscribe.cljs$core$IFn$_invoke$arity$2(errors,(function (p1__56473_SHARP_){
if(cljs.core.truth_(cljs.core.not_empty(p1__56473_SHARP_))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error((((cljs.core.count(p1__56473_SHARP_) > (1)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.bad-font-plural",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",p1__56473_SHARP_)], 0)):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.bad-font",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(p1__56473_SHARP_)], 0)))));
} else {
return null;
}
}));

return beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(join,cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.map(prepare,beicon.v2.core.filter(cljs.core.some_QMARK_,beicon.v2.core.map(parse_font,beicon.v2.core.filter((function (p1__56474_SHARP_){
return (new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__56474_SHARP_) == null);
}),fonts)))));
});
app.main.data.fonts.calculate_family_to_id_mapping = (function app$main$data$fonts$calculate_family_to_id_mapping(existing){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56555_SHARP_,p2__56556_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56555_SHARP_,new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(p2__56556_SHARP_),new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(p2__56556_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(existing));
});
/**
 * Function responsible to merge (and apropriatelly group) incoming
 *   fonts (processed by `process-upload`) into existing fonts
 *   in local state, preserving correct font-id references.
 */
app.main.data.fonts.merge_and_group_fonts = (function app$main$data$fonts$merge_and_group_fonts(current_fonts,installed_fonts,incoming_fonts){
var famdb = app.main.data.fonts.calculate_family_to_id_mapping(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_fonts,installed_fonts], 0)));
var items = cljs.core.vals(incoming_fonts);
var result = current_fonts;
while(true){
var temp__5823__auto__ = cljs.core.first(items);
if(cljs.core.truth_(temp__5823__auto__)){
var map__56562 = temp__5823__auto__;
var map__56562__$1 = cljs.core.__destructure_map(map__56562);
var item = map__56562__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56562__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var font_family = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56562__$1,new cljs.core.Keyword(null,"font-family","font-family",-667419874));
var font_id = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(famdb,font_family);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})();
var font = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"font-id","font-id",-390084123),font_id);
var G__56635 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(famdb,font_family,font_id);
var G__56636 = cljs.core.rest(items);
var G__56637 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,id,font);
famdb = G__56635;
items = G__56636;
result = G__56637;
continue;
} else {
return result;
}
break;
}
});
/**
 * Function responsible to rename a font in a local state and properly
 *   regroup it to the appropriate `font-id` having in account current
 *   fonts and installed fonts.
 */
app.main.data.fonts.rename_and_regroup = (function app$main$data$fonts$rename_and_regroup(current_fonts,id,name,installed_fonts){
var famdb = app.main.data.fonts.calculate_family_to_id_mapping(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_fonts,installed_fonts], 0)));
var font_id = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(famdb,name);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(current_fonts,id,(function (font){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(font,new cljs.core.Keyword(null,"font-family","font-family",-667419874),name),new cljs.core.Keyword(null,"font-id","font-id",-390084123),font_id);
}));
});
app.main.data.fonts.add_font = (function app$main$data$fonts$add_font(font){
if((typeof app.main.data.fonts.add_font_56563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.fonts.add_font_56563 = (function (font,meta56564){
this.font = font;
this.meta56564 = meta56564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.fonts.add_font_56563.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.add_font_56563.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.fonts","add-font","app.main.data.fonts/add-font",-1155803849);
}));

(app.main.data.fonts.add_font_56563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56565,meta56564__$1){
var self__ = this;
var _56565__$1 = this;
return (new app.main.data.fonts.add_font_56563(self__.font,meta56564__$1));
}));

(app.main.data.fonts.add_font_56563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56565){
var self__ = this;
var _56565__$1 = this;
return self__.meta56564;
}));

(app.main.data.fonts.add_font_56563.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.add_font_56563.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"fonts","fonts",1683167295),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.font),self__.font);
}));

(app.main.data.fonts.add_font_56563.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.add_font_56563.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-font",new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.font),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(self__.font),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(self__.font),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(self__.font)], null)));
}));
}

return (new app.main.data.fonts.add_font_56563(font,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.fonts.update_font = (function app$main$data$fonts$update_font(p__56566){
var map__56567 = p__56566;
var map__56567__$1 = cljs.core.__destructure_map(map__56567);
var params = map__56567__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56567__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56567__$1,new cljs.core.Keyword(null,"name","name",1843675177));
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

app.common.data.macros.runtime_assert("expr assert: (string? name)",(function (){
return typeof name === 'string';
}));

if((typeof app.main.data.fonts.update_font_56568 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.fonts.update_font_56568 = (function (p__56566,map__56567,params,id,name,meta56569){
this.p__56566 = p__56566;
this.map__56567 = map__56567;
this.params = params;
this.id = id;
this.name = name;
this.meta56569 = meta56569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.fonts.update_font_56568.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.update_font_56568.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.fonts","update-font","app.main.data.fonts/update-font",1239820208);
}));

(app.main.data.fonts.update_font_56568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56570,meta56569__$1){
var self__ = this;
var _56570__$1 = this;
return (new app.main.data.fonts.update_font_56568(self__.p__56566,self__.map__56567,self__.params,self__.id,self__.name,meta56569__$1));
}));

(app.main.data.fonts.update_font_56568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56570){
var self__ = this;
var _56570__$1 = this;
return self__.meta56569;
}));

(app.main.data.fonts.update_font_56568.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.update_font_56568.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"fonts","fonts",1683167295),cljs.core.update_vals,(function (font){
var G__56578 = font;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(font))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56578,new cljs.core.Keyword(null,"font-family","font-family",-667419874),self__.name);
} else {
return G__56578;
}
}));
}));

(app.main.data.fonts.update_font_56568.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.update_font_56568.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-font","update-font",-1331477528),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
}));
}

return (new app.main.data.fonts.update_font_56568(p__56566,map__56567__$1,params,id,name,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Delete all variants related to the provided `font-id`.
 */
app.main.data.fonts.delete_font = (function app$main$data$fonts$delete_font(font_id){
app.common.data.macros.runtime_assert("expr assert: (uuid? font-id)",(function (){
return cljs.core.uuid_QMARK_(font_id);
}));

if((typeof app.main.data.fonts.delete_font_56579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.fonts.delete_font_56579 = (function (font_id,meta56580){
this.font_id = font_id;
this.meta56580 = meta56580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.fonts.delete_font_56579.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.delete_font_56579.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.fonts","delete-font","app.main.data.fonts/delete-font",-296165289);
}));

(app.main.data.fonts.delete_font_56579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56581,meta56580__$1){
var self__ = this;
var _56581__$1 = this;
return (new app.main.data.fonts.delete_font_56579(self__.font_id,meta56580__$1));
}));

(app.main.data.fonts.delete_font_56579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56581){
var self__ = this;
var _56581__$1 = this;
return self__.meta56580;
}));

(app.main.data.fonts.delete_font_56579.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.delete_font_56579.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.font_id], null);
}));

(app.main.data.fonts.delete_font_56579.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.delete_font_56579.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"fonts","fonts",1683167295),(function (variants){
return app.common.data.removem((function (p__56583){
var vec__56585 = p__56583;
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56585,(0),null);
var variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56585,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(variant),self__.font_id);
}),variants);
}));
}));

(app.main.data.fonts.delete_font_56579.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.delete_font_56579.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.concat(beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-font","delete-font",1742044319),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.font_id,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null))),beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-font",new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"font-id","font-id",-390084123),self__.font_id], null))));
}));
}

return (new app.main.data.fonts.delete_font_56579(font_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.fonts.delete_font_variant = (function app$main$data$fonts$delete_font_variant(id){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.fonts.delete_font_variants_56592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.fonts.delete_font_variants_56592 = (function (id,meta56593){
this.id = id;
this.meta56593 = meta56593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.fonts.delete_font_variants_56592.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.delete_font_variants_56592.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.fonts","delete-font-variants","app.main.data.fonts/delete-font-variants",-390227477);
}));

(app.main.data.fonts.delete_font_variants_56592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56594,meta56593__$1){
var self__ = this;
var _56594__$1 = this;
return (new app.main.data.fonts.delete_font_variants_56592(self__.id,meta56593__$1));
}));

(app.main.data.fonts.delete_font_variants_56592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56594){
var self__ = this;
var _56594__$1 = this;
return self__.meta56593;
}));

(app.main.data.fonts.delete_font_variants_56592.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.delete_font_variants_56592.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"fonts","fonts",1683167295),(function (variants){
return app.common.data.removem((function (p__56599){
var vec__56600 = p__56599;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56600,(0),null);
var variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56600,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(variant),self__.id);
}),variants);
}));
}));

(app.main.data.fonts.delete_font_variants_56592.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.delete_font_variants_56592.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.concat(beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-font-variant","delete-font-variant",1348703111),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null))),beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-font-variant",new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null))));
}));
}

return (new app.main.data.fonts.delete_font_variants_56592(id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Moves the font/font to the top of the list of recents and then truncates up to 4
 */
app.main.data.fonts.update_recent_font = (function app$main$data$fonts$update_recent_font(state,file_id,font){
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__56603_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(font,p1__56603_SHARP_);
})),cljs.core.take.cljs$core$IFn$_invoke$arity$1((3)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,file_id,(function (p1__56604_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [font], null),xform,p1__56604_SHARP_);
}));
});
app.main.data.fonts.add_recent_font = (function app$main$data$fonts$add_recent_font(font){
if((typeof app.main.data.fonts.add_recent_font_56605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.fonts.add_recent_font_56605 = (function (font,meta56606){
this.font = font;
this.meta56606 = meta56606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.fonts.add_recent_font_56605.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.add_recent_font_56605.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.fonts","add-recent-font","app.main.data.fonts/add-recent-font",-616232459);
}));

(app.main.data.fonts.add_recent_font_56605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56607,meta56606__$1){
var self__ = this;
var _56607__$1 = this;
return (new app.main.data.fonts.add_recent_font_56605(self__.font,meta56606__$1));
}));

(app.main.data.fonts.add_recent_font_56605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56607){
var self__ = this;
var _56607__$1 = this;
return self__.meta56606;
}));

(app.main.data.fonts.add_recent_font_56605.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.add_recent_font_56605.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"recent-fonts","recent-fonts",1734170898),app.main.data.fonts.update_recent_font,file_id,self__.font);
}));

(app.main.data.fonts.add_recent_font_56605.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.fonts.add_recent_font_56605.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var recent_fonts = new cljs.core.Keyword(null,"recent-fonts","recent-fonts",1734170898).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,new cljs.core.Keyword(null,"recent-fonts","recent-fonts",1734170898),recent_fonts);
}));
}

return (new app.main.data.fonts.add_recent_font_56605(font,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.fonts.js.map
