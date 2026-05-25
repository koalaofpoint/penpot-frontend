import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
goog.provide('app.common.types.shape.interactions');
app.common.types.shape.interactions.event_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"after-delay","after-delay",-2054763582),null,new cljs.core.Keyword(null,"mouse-leave","mouse-leave",135558349),null,new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),null,new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303),null,new cljs.core.Keyword(null,"click","click",1912301393),null,new cljs.core.Keyword(null,"mouse-press","mouse-press",-273498051),null], null), null);
app.common.types.shape.interactions.action_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"navigate","navigate",657596805),null,new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518),null,new cljs.core.Keyword(null,"prev-screen","prev-screen",1175524591),null,new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961),null,new cljs.core.Keyword(null,"open-url","open-url",-1504173381),null,new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651),null], null), null);
app.common.types.shape.interactions.overlay_positioning_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"top-right","top-right",284698505),null,new cljs.core.Keyword(null,"top-left","top-left",-1396159636),null,new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),null,new cljs.core.Keyword(null,"manual","manual",-237370608),null,new cljs.core.Keyword(null,"top-center","top-center",1447995281),null,new cljs.core.Keyword(null,"bottom-center","bottom-center",1844600634),null], null), null);
app.common.types.shape.interactions.easing_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ease-in-out","ease-in-out",1896519269),null,new cljs.core.Keyword(null,"ease-in","ease-in",-819423123),null,new cljs.core.Keyword(null,"ease","ease",-1427802543),null,new cljs.core.Keyword(null,"linear","linear",872268697),null,new cljs.core.Keyword(null,"ease-out","ease-out",1760664474),null], null), null);
app.common.types.shape.interactions.direction_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"down","down",1565245570),null,new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null);
app.common.types.shape.interactions.way_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out","out",-910545517),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null);
app.common.types.shape.interactions.animation_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",799791267),null,new cljs.core.Keyword(null,"dissolve","dissolve",-629896345),null,new cljs.core.Keyword(null,"slide","slide",142491892),null], null), null);
app.common.types.shape.interactions.schema_COLON_dissolve_animation = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AnimationDisolve"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"dissolve","dissolve",-629896345)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.easing_types], null)], null)], null);
app.common.types.shape.interactions.schema_COLON_slide_animation = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AnimationSlide"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"slide","slide",142491892)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.easing_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"way","way",1564954669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.way_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.direction_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.common.types.shape.interactions.schema_COLON_push_animation = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"PushAnimation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"push","push",799791267)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.easing_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.direction_types], null)], null)], null);
app.common.types.shape.interactions.schema_COLON_animation = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),new cljs.core.Keyword(null,"title","title",636505583),"Animation",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.interactions.schema_COLON_dissolve_animation),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.interactions.schema_COLON_slide_animation),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.interactions.schema_COLON_push_animation)], 0)),new cljs.core.Keyword("decode","json","decode/json",468276044),(function (p1__50551_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__50551_SHARP_,new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),cljs.core.keyword);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissolve","dissolve",-629896345),app.common.types.shape.interactions.schema_COLON_dissolve_animation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slide","slide",142491892),app.common.types.shape.interactions.schema_COLON_slide_animation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"push","push",799791267),app.common.types.shape.interactions.schema_COLON_push_animation], null)], null);
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.types.shape.interactions","animation","app.common.types.shape.interactions/animation",1402188269),app.common.types.shape.interactions.schema_COLON_animation);
app.common.types.shape.interactions.check_animation_BANG_ = app.common.schema.check_fn(app.common.types.shape.interactions.schema_COLON_animation);
app.common.types.shape.interactions.schema_COLON_generic_interaction_attrs = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"GenericInteractionAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.action_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.event_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destination","destination",-253872483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.shape.interactions.schema_COLON_animation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.overlay_positioning_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.common.types.shape.interactions.schema_COLON_navigate_interaction = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"NavigateInteraction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"navigate","navigate",657596805)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.event_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destination","destination",-253872483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.shape.interactions.schema_COLON_animation], null)], null);
app.common.types.shape.interactions.schema_COLON_open_overlay_interaction = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"OpenOverlayInteraction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.event_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.overlay_positioning_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destination","destination",-253872483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.shape.interactions.schema_COLON_animation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null);
app.common.types.shape.interactions.schema_COLON_toggle_overlay_interaction = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ToggleOverlayInteraction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.event_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.overlay_positioning_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destination","destination",-253872483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.shape.interactions.schema_COLON_animation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null);
app.common.types.shape.interactions.schema_COLON_close_overlay_interaction = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"CloseOverlayInteraction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.event_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destination","destination",-253872483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.shape.interactions.schema_COLON_animation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null);
app.common.types.shape.interactions.schema_COLON_prev_scren_interaction = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"PrevScreenInteraction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"prev-screen","prev-screen",1175524591)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.event_types], null)], null)], null);
app.common.types.shape.interactions.schema_COLON_open_url_interaction = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"OpenUrlInteraction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"open-url","open-url",-1504173381)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.interactions.event_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.common.types.shape.interactions.schema_COLON_interaction = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Interaction",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.interactions.schema_COLON_navigate_interaction),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.interactions.schema_COLON_open_overlay_interaction),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.interactions.schema_COLON_close_overlay_interaction),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.interactions.schema_COLON_toggle_overlay_interaction),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.interactions.schema_COLON_prev_scren_interaction),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.shape.interactions.schema_COLON_open_url_interaction)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),app.common.types.shape.interactions.schema_COLON_generic_interaction_attrs,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"title","title",636505583),"InteractionAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),app.common.types.shape.interactions.schema_COLON_navigate_interaction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651),app.common.types.shape.interactions.schema_COLON_open_overlay_interaction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961),app.common.types.shape.interactions.schema_COLON_toggle_overlay_interaction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518),app.common.types.shape.interactions.schema_COLON_close_overlay_interaction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-screen","prev-screen",1175524591),app.common.types.shape.interactions.schema_COLON_prev_scren_interaction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-url","open-url",-1504173381),app.common.types.shape.interactions.schema_COLON_open_url_interaction], null)], null)], null)], null);
app.common.types.shape.interactions.check_interaction = app.common.schema.check_fn(app.common.types.shape.interactions.schema_COLON_interaction);
app.common.types.shape.interactions.default_interaction = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"destination","destination",-253872483),null,new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190),null,new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069),false], null);
app.common.types.shape.interactions.default_delay = (600);
app.common.types.shape.interactions.set_event_type = (function app$common$types$shape$interactions$set_event_type(interaction,event_type,shape){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.contains_QMARK_(app.common.types.shape.interactions.event_types,event_type)){
} else {
throw (new Error(["Assert failed: ","should be a valid event type","\n","(contains? event-types event-type)"].join('')));
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(event_type,new cljs.core.Keyword(null,"after-delay","after-delay",-2054763582))) || (app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
} else {
throw (new Error(["Assert failed: ","the `:after-delay` event type incompatible with not frame shapes","\n","(or (not= event-type :after-delay) (cfh/frame-shape? shape))"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),event_type)){
return interaction;
} else {
var G__50552 = event_type;
var G__50552__$1 = (((G__50552 instanceof cljs.core.Keyword))?G__50552.fqn:null);
switch (G__50552__$1) {
case "after-delay":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(interaction,new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"delay","delay",-574225219),cljs.core.get.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"delay","delay",-574225219),app.common.types.shape.interactions.default_delay)], 0));

break;
default:
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type);

}
}
});
app.common.types.shape.interactions.set_action_type = (function app$common$types$shape$interactions$set_action_type(interaction,action_type){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.contains_QMARK_(app.common.types.shape.interactions.action_types,action_type)){
} else {
throw (new Error(["Assert failed: ","Should be a valid event type","\n","(contains? action-types action-type)"].join('')));
}

var new_interaction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),action_type))?interaction:(function (){var G__50553 = action_type;
var G__50553__$1 = (((G__50553 instanceof cljs.core.Keyword))?G__50553.fqn:null);
switch (G__50553__$1) {
case "navigate":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(interaction,new cljs.core.Keyword(null,"action-type","action-type",-1141667361),action_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"destination","destination",-253872483),cljs.core.get.cljs$core$IFn$_invoke$arity$2(interaction,new cljs.core.Keyword(null,"destination","destination",-253872483)),new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069),cljs.core.get.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069),false)], 0));

break;
case "open-overlay":
case "toggle-overlay":
var overlay_pos_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),new cljs.core.Keyword(null,"center","center",-748944368));
var overlay_position = cljs.core.get.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(interaction,new cljs.core.Keyword(null,"action-type","action-type",-1141667361),action_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),overlay_pos_type,new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),overlay_position], 0));

break;
case "close-overlay":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(interaction,new cljs.core.Keyword(null,"action-type","action-type",-1141667361),action_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"destination","destination",-253872483),cljs.core.get.cljs$core$IFn$_invoke$arity$2(interaction,new cljs.core.Keyword(null,"destination","destination",-253872483))], 0));

break;
case "prev-screen":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"action-type","action-type",-1141667361),action_type);

break;
case "open-url":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(interaction,new cljs.core.Keyword(null,"action-type","action-type",-1141667361),action_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"url","url",276297046),cljs.core.get.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"url","url",276297046),"")], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50553__$1)].join('')));

}
})());
var G__50554 = new_interaction;
if(cljs.core.not((function (){var G__50555 = action_type;
var G__50556 = new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(new_interaction));
return (app.common.types.shape.interactions.allowed_animation_QMARK_.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.interactions.allowed_animation_QMARK_.cljs$core$IFn$_invoke$arity$2(G__50555,G__50556) : app.common.types.shape.interactions.allowed_animation_QMARK_.call(null,G__50555,G__50556));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50554,new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"animation","animation",-1248293244)], 0));
} else {
return G__50554;
}
});
app.common.types.shape.interactions.has_delay = (function app$common$types$shape$interactions$has_delay(interaction){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"after-delay","after-delay",-2054763582));
});
app.common.types.shape.interactions.set_delay = (function app$common$types$shape$interactions$set_delay(interaction,delay){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.truth_(app.common.schema.check_safe_int(delay))){
} else {
throw (new Error("Assert failed: (sm/check-safe-int delay)"));
}

if(app.common.types.shape.interactions.has_delay(interaction)){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction event type","\n","(has-delay interaction)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"delay","delay",-574225219),delay);
});
app.common.types.shape.interactions.has_destination = (function app$common$types$shape$interactions$has_destination(interaction){
var G__50558 = new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction);
var fexpr__50557 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"navigate","navigate",657596805),null,new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518),null,new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961),null,new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651),null], null), null);
return (fexpr__50557.cljs$core$IFn$_invoke$arity$1 ? fexpr__50557.cljs$core$IFn$_invoke$arity$1(G__50558) : fexpr__50557.call(null,G__50558));
});
app.common.types.shape.interactions.destination_QMARK_ = (function app$common$types$shape$interactions$destination_QMARK_(interaction){
var and__5023__auto__ = app.common.types.shape.interactions.has_destination(interaction);
if(cljs.core.truth_(and__5023__auto__)){
return (!((new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction) == null)));
} else {
return and__5023__auto__;
}
});
app.common.types.shape.interactions.set_destination = (function app$common$types$shape$interactions$set_destination(interaction,destination){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_destination(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction event type","\n","(has-destination interaction)"].join('')));
}

var G__50564 = interaction;
var G__50564__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50564,new cljs.core.Keyword(null,"destination","destination",-253872483),destination)
;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50564__$1,new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),new cljs.core.Keyword(null,"center","center",-748944368),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0))], 0));
} else {
return G__50564__$1;
}
});
app.common.types.shape.interactions.has_preserve_scroll = (function app$common$types$shape$interactions$has_preserve_scroll(interaction){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"navigate","navigate",657596805));
});
app.common.types.shape.interactions.set_preserve_scroll = (function app$common$types$shape$interactions$set_preserve_scroll(interaction,preserve_scroll){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.boolean_QMARK_(preserve_scroll)){
} else {
throw (new Error(["Assert failed: ","expected boolean for `preserve-scroll`","\n","(boolean? preserve-scroll)"].join('')));
}

if(app.common.types.shape.interactions.has_preserve_scroll(interaction)){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map with preserve-scroll","\n","(has-preserve-scroll interaction)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069),preserve_scroll);
});
app.common.types.shape.interactions.has_url = (function app$common$types$shape$interactions$has_url(interaction){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"open-url","open-url",-1504173381));
});
app.common.types.shape.interactions.set_url = (function app$common$types$shape$interactions$set_url(interaction,url){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(typeof url === 'string'){
} else {
throw (new Error(["Assert failed: ","expected a string for `url`","\n","(string? url)"].join('')));
}

if(app.common.types.shape.interactions.has_url(interaction)){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map with url param","\n","(has-url interaction)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"url","url",276297046),url);
});
app.common.types.shape.interactions.has_overlay_opts = (function app$common$types$shape$interactions$has_overlay_opts(interaction){
var G__50569 = new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction);
var fexpr__50568 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961),null,new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651),null], null), null);
return (fexpr__50568.cljs$core$IFn$_invoke$arity$1 ? fexpr__50568.cljs$core$IFn$_invoke$arity$1(G__50569) : fexpr__50568.call(null,G__50569));
});
app.common.types.shape.interactions.set_overlay_pos_type = (function app$common$types$shape$interactions$set_overlay_pos_type(interaction,overlay_pos_type,shape,objects){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.contains_QMARK_(app.common.types.shape.interactions.overlay_positioning_types,overlay_pos_type)){
} else {
throw (new Error(["Assert failed: ","expected valid overlay positioning type","\n","(contains? overlay-positioning-types overlay-pos-type)"].join('')));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_overlay_opts(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-overlay-opts interaction)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(interaction,new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),overlay_pos_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),(function (){var G__50578 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
var G__50579 = shape;
var G__50580 = objects;
var G__50581 = overlay_pos_type;
return (app.common.types.shape.interactions.calc_overlay_pos_initial.cljs$core$IFn$_invoke$arity$4 ? app.common.types.shape.interactions.calc_overlay_pos_initial.cljs$core$IFn$_invoke$arity$4(G__50578,G__50579,G__50580,G__50581) : app.common.types.shape.interactions.calc_overlay_pos_initial.call(null,G__50578,G__50579,G__50580,G__50581));
})()], 0));
});
app.common.types.shape.interactions.toggle_overlay_pos_type = (function app$common$types$shape$interactions$toggle_overlay_pos_type(interaction,overlay_pos_type,shape,objects){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.contains_QMARK_(app.common.types.shape.interactions.overlay_positioning_types,overlay_pos_type)){
} else {
throw (new Error(["Assert failed: ","expected valid overlay positioning type","\n","(contains? overlay-positioning-types overlay-pos-type)"].join('')));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_overlay_opts(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-overlay-opts interaction)"].join('')));
}

var new_pos_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction),overlay_pos_type))?new cljs.core.Keyword(null,"manual","manual",-237370608):overlay_pos_type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(interaction,new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),new_pos_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),(function (){var G__50593 = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
var G__50594 = shape;
var G__50595 = objects;
var G__50596 = new_pos_type;
return (app.common.types.shape.interactions.calc_overlay_pos_initial.cljs$core$IFn$_invoke$arity$4 ? app.common.types.shape.interactions.calc_overlay_pos_initial.cljs$core$IFn$_invoke$arity$4(G__50593,G__50594,G__50595,G__50596) : app.common.types.shape.interactions.calc_overlay_pos_initial.call(null,G__50593,G__50594,G__50595,G__50596));
})()], 0));
});
app.common.types.shape.interactions.set_overlay_position = (function app$common$types$shape$interactions$set_overlay_position(interaction,overlay_position){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(app.common.geom.point.point_QMARK_(overlay_position)){
} else {
throw (new Error(["Assert failed: ","expected valid overlay position","\n","(gpt/point? overlay-position)"].join('')));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_overlay_opts(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-overlay-opts interaction)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(interaction,new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455),new cljs.core.Keyword(null,"manual","manual",-237370608),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),overlay_position], 0));
});
app.common.types.shape.interactions.set_close_click_outside = (function app$common$types$shape$interactions$set_close_click_outside(interaction,close_click_outside){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.boolean_QMARK_(close_click_outside)){
} else {
throw (new Error(["Assert failed: ","expected boolean value for `close-click-outside`","\n","(boolean? close-click-outside)"].join('')));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_overlay_opts(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-overlay-opts interaction)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612),close_click_outside);
});
app.common.types.shape.interactions.set_background_overlay = (function app$common$types$shape$interactions$set_background_overlay(interaction,background_overlay){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.boolean_QMARK_(background_overlay)){
} else {
throw (new Error(["Assert failed: ","expected boolean value for `background-overlay`","\n","(boolean? background-overlay)"].join('')));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_overlay_opts(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-overlay-opts interaction)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424),background_overlay);
});
app.common.types.shape.interactions.set_position_relative_to = (function app$common$types$shape$interactions$set_position_relative_to(interaction,position_relative_to){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if((((position_relative_to == null)) || (cljs.core.uuid_QMARK_(position_relative_to)))){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `position-relative-to`","\n","(or (nil? position-relative-to) (uuid? position-relative-to))"].join('')));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_overlay_opts(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-overlay-opts interaction)"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190),position_relative_to);
});
app.common.types.shape.interactions.calc_overlay_pos_initial = (function app$common$types$shape$interactions$calc_overlay_pos_initial(destination,shape,objects,overlay_pos_type){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay_pos_type,new cljs.core.Keyword(null,"manual","manual",-237370608))) && ((!((destination == null)))))){
var dest_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,destination);
var overlay_size = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(dest_frame);
var orig_frame = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame","frame",-1711082588)))?shape:cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape)));
var frame_size = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(orig_frame);
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(overlay_size)) / (2)),((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(frame_size) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(overlay_size)) / (2)));
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
}
});
app.common.types.shape.interactions.calc_overlay_position = (function app$common$types$shape$interactions$calc_overlay_position(interaction,shape,objects,relative_to_shape,base_frame,dest_frame,frame_offset){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_overlay_opts(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-overlay-opts interaction)"].join('')));
}

var shape_frame = app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(objects,shape);
var frame_offset__$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction))) || ((((shape_frame == null)) || (((app.common.files.helpers.is_direct_child_of_root_QMARK_.cljs$core$IFn$_invoke$arity$1(shape_frame)) || (app.common.files.helpers.root_QMARK_(shape_frame))))))))?frame_offset:app.common.geom.point.add(frame_offset,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(shape_frame)));
if((dest_frame == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);
} else {
var overlay_size = app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$2(objects,dest_frame);
var base_frame_size = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(base_frame);
var relative_to_shape_size = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(relative_to_shape);
var relative_to_adjusted_to_base_frame = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_frame_size)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_frame_size))], null);
var relative_to_is_auto_QMARK_ = (((new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190).cljs$core$IFn$_invoke$arity$1(interaction) == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction))));
var base_position = ((relative_to_is_auto_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame_offset__$1) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(relative_to_adjusted_to_base_frame)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame_offset__$1) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(relative_to_adjusted_to_base_frame))], null));
var overlay_position = new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730).cljs$core$IFn$_invoke$arity$1(interaction);
var overlay_position__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(relative_to_shape),new cljs.core.Keyword(null,"frame","frame",-1711082588)))?overlay_position:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(overlay_position) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(relative_to_adjusted_to_base_frame)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(overlay_position) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(relative_to_adjusted_to_base_frame))], null));
var G__50619 = new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction);
var G__50619__$1 = (((G__50619 instanceof cljs.core.Keyword))?G__50619.fqn:null);
switch (G__50619__$1) {
case "center":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_position) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(overlay_size)) / (2))),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_position) + ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(overlay_size)) / (2)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null);

break;
case "top-left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_position),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_position)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);

break;
case "top-right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_position) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(overlay_size))),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_position)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null);

break;
case "top-center":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_position) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(overlay_size)) / (2))),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_position)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null);

break;
case "bottom-left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_position),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_position) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(overlay_size)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);

break;
case "bottom-right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_position) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(overlay_size))),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_position) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(overlay_size)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null);

break;
case "bottom-center":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_position) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(overlay_size)) / (2))),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_position) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(relative_to_shape_size) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(overlay_size)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null);

break;
case "manual":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_position) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(overlay_position__$1)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_position) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(overlay_position__$1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50619__$1)].join('')));

}
}
});
app.common.types.shape.interactions.has_animation_QMARK_ = (function app$common$types$shape$interactions$has_animation_QMARK_(interaction){
var G__50628 = new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction);
var fexpr__50627 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"navigate","navigate",657596805),null,new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518),null,new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961),null,new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651),null], null), null);
return (fexpr__50627.cljs$core$IFn$_invoke$arity$1 ? fexpr__50627.cljs$core$IFn$_invoke$arity$1(G__50628) : fexpr__50627.call(null,G__50628));
});
app.common.types.shape.interactions.allow_push_QMARK_ = (function app$common$types$shape$interactions$allow_push_QMARK_(action_type){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),action_type);
});
app.common.types.shape.interactions.allowed_animation_QMARK_ = (function app$common$types$shape$interactions$allowed_animation_QMARK_(action_type,animation_type){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(animation_type,new cljs.core.Keyword(null,"push","push",799791267))) || (app.common.types.shape.interactions.allow_push_QMARK_(action_type)));
});
app.common.types.shape.interactions.set_animation_type = (function app$common$types$shape$interactions$set_animation_type(interaction,animation_type){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if((((animation_type == null)) || (cljs.core.contains_QMARK_(app.common.types.shape.interactions.animation_types,animation_type)))){
} else {
throw (new Error(["Assert failed: ","expected valid value for `animation-type`","\n","(or (nil? animation-type) (contains? animation-types animation-type))"].join('')));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_animation_QMARK_(interaction))){
} else {
throw (new Error(["Assert failed: ","expected interaction map compatible with animation","\n","(has-animation? interaction)"].join('')));
}

if(app.common.types.shape.interactions.allowed_animation_QMARK_(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),animation_type)){
} else {
throw (new Error(["Assert failed: ","expected allowed animation type","\n","(allowed-animation? (:action-type interaction) animation-type)"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction)),animation_type)){
return interaction;
} else {
if((animation_type == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(interaction,new cljs.core.Keyword(null,"animation","animation",-1248293244));
} else {
var G__50640 = interaction;
var G__50640__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__50640,new cljs.core.Keyword(null,"animation","animation",-1248293244),cljs.core.assoc,new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),animation_type)
;
var G__50640__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(animation_type,new cljs.core.Keyword(null,"dissolve","dissolve",-629896345)))?cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__50640__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244),cljs.core.assoc,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),(300)),new cljs.core.Keyword(null,"easing","easing",735372043),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"easing","easing",735372043)], null),new cljs.core.Keyword(null,"linear","linear",872268697))], 0)):G__50640__$1);
var G__50640__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(animation_type,new cljs.core.Keyword(null,"slide","slide",142491892)))?cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__50640__$2,new cljs.core.Keyword(null,"animation","animation",-1248293244),cljs.core.assoc,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),(300)),new cljs.core.Keyword(null,"easing","easing",735372043),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"easing","easing",735372043)], null),new cljs.core.Keyword(null,"linear","linear",872268697)),new cljs.core.Keyword(null,"way","way",1564954669),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"way","way",1564954669)], null),new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"direction","direction",-633359395),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208)], null),false)], 0)):G__50640__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(animation_type,new cljs.core.Keyword(null,"push","push",799791267))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(G__50640__$3,new cljs.core.Keyword(null,"animation","animation",-1248293244),cljs.core.assoc,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),(300)),new cljs.core.Keyword(null,"easing","easing",735372043),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"easing","easing",735372043)], null),new cljs.core.Keyword(null,"linear","linear",872268697)),new cljs.core.Keyword(null,"direction","direction",-633359395),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),new cljs.core.Keyword(null,"right","right",-452581833))], 0));
} else {
return G__50640__$3;
}
}
}
});
app.common.types.shape.interactions.has_duration_QMARK_ = (function app$common$types$shape$interactions$has_duration_QMARK_(interaction){
var G__50649 = new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction));
var fexpr__50648 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",799791267),null,new cljs.core.Keyword(null,"dissolve","dissolve",-629896345),null,new cljs.core.Keyword(null,"slide","slide",142491892),null], null), null);
return (fexpr__50648.cljs$core$IFn$_invoke$arity$1 ? fexpr__50648.cljs$core$IFn$_invoke$arity$1(G__50649) : fexpr__50648.call(null,G__50649));
});
app.common.types.shape.interactions.set_duration = (function app$common$types$shape$interactions$set_duration(interaction,duration){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.truth_(app.common.schema.check_safe_int(duration))){
} else {
throw (new Error("Assert failed: (sm/check-safe-int duration)"));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_duration_QMARK_(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-duration? interaction)"].join('')));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(interaction,new cljs.core.Keyword(null,"animation","animation",-1248293244),cljs.core.assoc,new cljs.core.Keyword(null,"duration","duration",1444101068),duration);
});
app.common.types.shape.interactions.has_easing_QMARK_ = (function app$common$types$shape$interactions$has_easing_QMARK_(interaction){
var G__50653 = new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction));
var fexpr__50652 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",799791267),null,new cljs.core.Keyword(null,"dissolve","dissolve",-629896345),null,new cljs.core.Keyword(null,"slide","slide",142491892),null], null), null);
return (fexpr__50652.cljs$core$IFn$_invoke$arity$1 ? fexpr__50652.cljs$core$IFn$_invoke$arity$1(G__50653) : fexpr__50652.call(null,G__50653));
});
app.common.types.shape.interactions.set_easing = (function app$common$types$shape$interactions$set_easing(interaction,easing){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.contains_QMARK_(app.common.types.shape.interactions.easing_types,easing)){
} else {
throw (new Error(["Assert failed: ","expected valid easing","\n","(contains? easing-types easing)"].join('')));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_easing_QMARK_(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-easing? interaction)"].join('')));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(interaction,new cljs.core.Keyword(null,"animation","animation",-1248293244),cljs.core.assoc,new cljs.core.Keyword(null,"easing","easing",735372043),easing);
});
app.common.types.shape.interactions.has_way_QMARK_ = (function app$common$types$shape$interactions$has_way_QMARK_(interaction){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"navigate","navigate",657596805))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction)),new cljs.core.Keyword(null,"slide","slide",142491892))));
});
app.common.types.shape.interactions.set_way = (function app$common$types$shape$interactions$set_way(interaction,way){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.contains_QMARK_(app.common.types.shape.interactions.way_types,way)){
} else {
throw (new Error(["Assert failed: ","expected valid way","\n","(contains? way-types way)"].join('')));
}

if(app.common.types.shape.interactions.has_way_QMARK_(interaction)){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-way? interaction)"].join('')));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(interaction,new cljs.core.Keyword(null,"animation","animation",-1248293244),cljs.core.assoc,new cljs.core.Keyword(null,"way","way",1564954669),way);
});
app.common.types.shape.interactions.has_direction_QMARK_ = (function app$common$types$shape$interactions$has_direction_QMARK_(interaction){
var G__50664 = new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction));
var fexpr__50663 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"push","push",799791267),null,new cljs.core.Keyword(null,"slide","slide",142491892),null], null), null);
return (fexpr__50663.cljs$core$IFn$_invoke$arity$1 ? fexpr__50663.cljs$core$IFn$_invoke$arity$1(G__50664) : fexpr__50663.call(null,G__50664));
});
app.common.types.shape.interactions.set_direction = (function app$common$types$shape$interactions$set_direction(interaction,direction){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.contains_QMARK_(app.common.types.shape.interactions.direction_types,direction)){
} else {
throw (new Error(["Assert failed: ","expected valid direction","\n","(contains? direction-types direction)"].join('')));
}

if(cljs.core.truth_(app.common.types.shape.interactions.has_direction_QMARK_(interaction))){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-direction? interaction)"].join('')));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(interaction,new cljs.core.Keyword(null,"animation","animation",-1248293244),cljs.core.assoc,new cljs.core.Keyword(null,"direction","direction",-633359395),direction);
});
app.common.types.shape.interactions.invert_direction = (function app$common$types$shape$interactions$invert_direction(animation){
if(cljs.core.truth_((function (){var or__5025__auto__ = (animation == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.shape.interactions.check_animation_BANG_(animation);
}
})())){
} else {
throw (new Error(["Assert failed: ","expected valid animation map","\n","(or (nil? animation) (check-animation! animation))"].join('')));
}

var G__50668 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(animation);
var G__50668__$1 = (((G__50668 instanceof cljs.core.Keyword))?G__50668.fqn:null);
switch (G__50668__$1) {
case "right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(animation,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "left":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(animation,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "up":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(animation,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"down","down",1565245570));

break;
case "down":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(animation,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"up","up",-269712113));

break;
default:
return animation;

}
});
app.common.types.shape.interactions.has_offset_effect_QMARK_ = (function app$common$types$shape$interactions$has_offset_effect_QMARK_(interaction){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"navigate","navigate",657596805))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction)),new cljs.core.Keyword(null,"slide","slide",142491892))));
});
app.common.types.shape.interactions.set_offset_effect = (function app$common$types$shape$interactions$set_offset_effect(interaction,offset_effect){
if(cljs.core.truth_(app.common.types.shape.interactions.check_interaction(interaction))){
} else {
throw (new Error("Assert failed: (check-interaction interaction)"));
}

if(cljs.core.boolean_QMARK_(offset_effect)){
} else {
throw (new Error(["Assert failed: ","expected valid boolean for `offset-effect`","\n","(boolean? offset-effect)"].join('')));
}

if(app.common.types.shape.interactions.has_offset_effect_QMARK_(interaction)){
} else {
throw (new Error(["Assert failed: ","expected compatible interaction map","\n","(has-offset-effect? interaction)"].join('')));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(interaction,new cljs.core.Keyword(null,"animation","animation",-1248293244),cljs.core.assoc,new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208),offset_effect);
});
/**
 * Check if the interaction has the given frame as destination.
 */
app.common.types.shape.interactions.dest_to_QMARK_ = (function app$common$types$shape$interactions$dest_to_QMARK_(interaction,frame_id){
var and__5023__auto__ = app.common.types.shape.interactions.has_destination(interaction);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction),frame_id);
} else {
return and__5023__auto__;
}
});
/**
 * Check if the interaction is a navigation to the given frame.
 */
app.common.types.shape.interactions.navs_to_QMARK_ = (function app$common$types$shape$interactions$navs_to_QMARK_(interaction,frame_id){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"navigate","navigate",657596805))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction),frame_id)));
});
app.common.types.shape.interactions.add_interaction = (function app$common$types$shape$interactions$add_interaction(interactions,interaction){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = interactions;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),interaction);
});
app.common.types.shape.interactions.remove_interaction = (function app$common$types$shape$interactions$remove_interaction(interactions,index){
var interactions__$1 = (function (){var or__5025__auto__ = interactions;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(interactions__$1,(0),index),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(interactions__$1,(index + (1))));
});
app.common.types.shape.interactions.update_interaction = (function app$common$types$shape$interactions$update_interaction(interactions,index,update_fn){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(interactions,index,update_fn);
});
/**
 * Update all interactions whose destination points to a shape in the
 *   map to the new id. And remove the ones whose destination does not exist
 *   in the map nor in the objects tree.
 */
app.common.types.shape.interactions.remap_interactions = (function app$common$types$shape$interactions$remap_interactions(interactions,ids_map,objects){
if((!((interactions == null)))){
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (interaction){
var destination = new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction);
return (((destination == null)) || (((cljs.core.contains_QMARK_(ids_map,destination)) || (cljs.core.contains_QMARK_(objects,destination)))));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (interaction){
return app.common.data.update_when(interaction,new cljs.core.Keyword(null,"destination","destination",-253872483),(function (p1__50693_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(ids_map,p1__50693_SHARP_,p1__50693_SHARP_);
}));
})));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,interactions);
} else {
return null;
}
});
/**
 * Remove all interactions that the fn returns true.
 */
app.common.types.shape.interactions.remove_interactions = (function app$common$types$shape$interactions$remove_interactions(f,interactions){
return cljs.core.not_empty(app.common.data.removev(f,interactions));
});
/**
 * Check if there is any interaction that is clickable by the user
 */
app.common.types.shape.interactions.actionable_QMARK_ = (function app$common$types$shape$interactions$actionable_QMARK_(interactions){
return cljs.core.some((function (p1__50711_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__50711_SHARP_),new cljs.core.Keyword(null,"click","click",1912301393));
}),interactions);
});
/**
 * Check if there is any interaction that is the start or the continuation of a flow
 */
app.common.types.shape.interactions.flow_origin_QMARK_ = (function app$common$types$shape$interactions$flow_origin_QMARK_(interactions){
return cljs.core.some((function (p1__50714_SHARP_){
var and__5023__auto__ = (function (){var G__50716 = new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(p1__50714_SHARP_);
var fexpr__50715 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"navigate","navigate",657596805),null,new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518),null,new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961),null,new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651),null], null), null);
return (fexpr__50715.cljs$core$IFn$_invoke$arity$1 ? fexpr__50715.cljs$core$IFn$_invoke$arity$1(G__50716) : fexpr__50715.call(null,G__50716));
})();
if(cljs.core.truth_(and__5023__auto__)){
return (!((new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(p1__50714_SHARP_) == null)));
} else {
return and__5023__auto__;
}
}),interactions);
});
/**
 * Check if there is any interaction that flows into the given frame
 */
app.common.types.shape.interactions.flow_to_QMARK_ = (function app$common$types$shape$interactions$flow_to_QMARK_(interactions,frame_id){
return cljs.core.some((function (p1__50721_SHARP_){
var and__5023__auto__ = (function (){var G__50724 = new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(p1__50721_SHARP_);
var fexpr__50723 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"navigate","navigate",657596805),null,new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518),null,new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961),null,new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651),null], null), null);
return (fexpr__50723.cljs$core$IFn$_invoke$arity$1 ? fexpr__50723.cljs$core$IFn$_invoke$arity$1(G__50724) : fexpr__50723.call(null,G__50724));
})();
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(p1__50721_SHARP_),frame_id);
} else {
return and__5023__auto__;
}
}),interactions);
});

//# sourceMappingURL=app.common.types.shape.interactions.js.map
