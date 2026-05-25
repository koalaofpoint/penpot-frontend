import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.grid_layout.areas.js";
import "./app.common.math.js";
import "./app.common.schema.js";
import "./app.common.uuid.js";
goog.provide('app.common.types.shape.layout');
app.common.types.shape.layout.layout_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",402978600),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null], null), null);
app.common.types.shape.layout.flex_direction_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row-reverse","row-reverse",78332847),null,new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null);
app.common.types.shape.layout.grid_direction_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null);
app.common.types.shape.layout.gap_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"simple","simple",-581868663),null,new cljs.core.Keyword(null,"multiple","multiple",1244445549),null], null), null);
app.common.types.shape.layout.wrap_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap","wrap",851669987),null,new cljs.core.Keyword(null,"nowrap","nowrap",457264988),null], null), null);
app.common.types.shape.layout.padding_type = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"simple","simple",-581868663),null,new cljs.core.Keyword(null,"multiple","multiple",1244445549),null], null), null);
app.common.types.shape.layout.justify_content_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"space-around","space-around",248184132),null,new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"space-between","space-between",1908176695),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"stretch","stretch",-1888837380),null], null), null);
app.common.types.shape.layout.align_content_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"space-around","space-around",248184132),null,new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"space-between","space-between",1908176695),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"stretch","stretch",-1888837380),null], null), null);
app.common.types.shape.layout.align_items_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"stretch","stretch",-1888837380),null], null), null);
app.common.types.shape.layout.justify_items_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"stretch","stretch",-1888837380),null], null), null);
app.common.types.shape.layout.grid_track_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"percent","percent",2031453817),null,new cljs.core.Keyword(null,"fixed","fixed",-562004358),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
app.common.types.shape.layout.grid_position_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"manual","manual",-237370608),null,new cljs.core.Keyword(null,"area","area",472007256),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
app.common.types.shape.layout.grid_cell_align_self_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"stretch","stretch",-1888837380),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
app.common.types.shape.layout.grid_cell_justify_self_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"stretch","stretch",-1888837380),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
app.common.types.shape.layout.schema_COLON_grid_cell = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"GridCell"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"area-name","area-name",-496581211),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-span","column-span",1302376857),new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.grid_position_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.grid_cell_align_self_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.grid_cell_justify_self_types], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(1)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null);
app.common.types.shape.layout.schema_COLON_grid_track = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"GridTrack"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.grid_track_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null)], null)], null);
app.common.types.shape.layout.schema_COLON_layout_attrs = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"LayoutAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.layout_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.flex_direction_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.gap_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.wrap_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.padding_type], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p3","p3",1731040739),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p4","p4",-1090126814),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.justify_content_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.justify_items_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.align_content_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.align_items_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.grid_direction_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(2)], null),app.common.types.shape.layout.schema_COLON_grid_track], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(2)], null),app.common.types.shape.layout.schema_COLON_grid_track], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),app.common.types.shape.layout.schema_COLON_grid_cell], null)], null)], null);
app.common.types.shape.layout.check_grid_track = app.common.schema.check_fn(app.common.types.shape.layout.schema_COLON_grid_track);
app.common.types.shape.layout.layout_attrs = app.common.schema.keys(app.common.types.shape.layout.schema_COLON_layout_attrs);
app.common.types.shape.layout.item_margin_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"simple","simple",-581868663),null,new cljs.core.Keyword(null,"multiple","multiple",1244445549),null], null), null);
app.common.types.shape.layout.item_h_sizing_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"fix","fix",-1031773329),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
app.common.types.shape.layout.item_v_sizing_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"fix","fix",-1031773329),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
app.common.types.shape.layout.item_align_self_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"stretch","stretch",-1888837380),null], null), null);
app.common.types.shape.layout.schema_COLON_layout_child_attrs = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"LayoutChildAttrs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.item_margin_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m1","m1",-108094626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m2","m2",-587003306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m3","m3",-703635357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m4","m4",-1624571215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.item_h_sizing_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.item_v_sizing_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),app.common.types.shape.layout.item_align_self_types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378)], null)], null);
app.common.types.shape.layout.layout_child_attrs = app.common.schema.keys(app.common.types.shape.layout.schema_COLON_layout_child_attrs);
app.common.types.shape.layout.valid_layouts = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid","grid",402978600),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null], null), null);
app.common.types.shape.layout.flex_layout_QMARK_ = (function app$common$types$shape$layout$flex_layout_QMARK_(var_args){
var G__47779 = arguments.length;
switch (G__47779) {
case 2:
return app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shape))));
}));

(app.common.types.shape.layout.flex_layout_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.grid_layout_QMARK_ = (function app$common$types$shape$layout$grid_layout_QMARK_(var_args){
var G__47781 = arguments.length;
switch (G__47781) {
case 2:
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shape))));
}));

(app.common.types.shape.layout.grid_layout_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.any_layout_QMARK_ = (function app$common$types$shape$layout$any_layout_QMARK_(var_args){
var G__47783 = arguments.length;
switch (G__47783) {
case 2:
return app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var and__5023__auto__ = app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
if(and__5023__auto__){
var layout = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shape);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),layout)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grid","grid",402978600),layout)));
} else {
return and__5023__auto__;
}
}));

(app.common.types.shape.layout.any_layout_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.flex_layout_immediate_child_QMARK_ = (function app$common$types$shape$layout$flex_layout_immediate_child_QMARK_(objects,shape){
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
return app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
});
app.common.types.shape.layout.grid_layout_immediate_child_QMARK_ = (function app$common$types$shape$layout$grid_layout_immediate_child_QMARK_(objects,shape){
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
});
app.common.types.shape.layout.any_layout_immediate_child_QMARK_ = (function app$common$types$shape$layout$any_layout_immediate_child_QMARK_(objects,shape){
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
return app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
});
app.common.types.shape.layout.flex_layout_immediate_child_id_QMARK_ = (function app$common$types$shape$layout$flex_layout_immediate_child_id_QMARK_(objects,id){
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
return app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
});
app.common.types.shape.layout.grid_layout_immediate_child_id_QMARK_ = (function app$common$types$shape$layout$grid_layout_immediate_child_id_QMARK_(objects,id){
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
});
app.common.types.shape.layout.any_layout_immediate_child_id_QMARK_ = (function app$common$types$shape$layout$any_layout_immediate_child_id_QMARK_(objects,id){
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
return app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
});
app.common.types.shape.layout.flex_layout_descent_QMARK_ = (function app$common$types$shape$layout$flex_layout_descent_QMARK_(objects,shape){
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
return app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(frame);
});
app.common.types.shape.layout.grid_layout_descent_QMARK_ = (function app$common$types$shape$layout$grid_layout_descent_QMARK_(objects,shape){
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(frame);
});
app.common.types.shape.layout.any_layout_descent_QMARK_ = (function app$common$types$shape$layout$any_layout_descent_QMARK_(objects,shape){
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
return app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(frame);
});
/**
 * Check if the shape is inside a layout
 */
app.common.types.shape.layout.inside_layout_QMARK_ = (function app$common$types$shape$layout$inside_layout_QMARK_(objects,shape){
var current_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
while(true){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,current_id);
var parent_id = (current?.parent_id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)));
if((((current == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,parent_id)))){
return false;
} else {
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(current)){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(current);
} else {
var G__48598 = parent_id;
current_id = G__48598;
continue;

}
}
break;
}
});
app.common.types.shape.layout.wrap_QMARK_ = (function app$common$types$shape$layout$wrap_QMARK_(p__47817){
var map__47818 = p__47817;
var map__47818__$1 = cljs.core.__destructure_map(map__47818);
var layout_wrap_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47818__$1,new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_wrap_type,new cljs.core.Keyword(null,"wrap","wrap",851669987));
});
app.common.types.shape.layout.fill_width_QMARK_ = (function app$common$types$shape$layout$fill_width_QMARK_(var_args){
var G__47820 = arguments.length;
switch (G__47820) {
case 2:
return app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527)));
}));

(app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (child){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(child));
}));

(app.common.types.shape.layout.fill_width_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.fill_height_QMARK_ = (function app$common$types$shape$layout$fill_height_QMARK_(var_args){
var G__47822 = arguments.length;
switch (G__47822) {
case 2:
return app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641)));
}));

(app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (child){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(child));
}));

(app.common.types.shape.layout.fill_height_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.fill_QMARK_ = (function app$common$types$shape$layout$fill_QMARK_(var_args){
var G__47827 = arguments.length;
switch (G__47827) {
case 2:
return app.common.types.shape.layout.fill_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.fill_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.fill_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return ((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,id)) || (app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,id)));
}));

(app.common.types.shape.layout.fill_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return ((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)));
}));

(app.common.types.shape.layout.fill_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.auto_width_QMARK_ = (function app$common$types$shape$layout$auto_width_QMARK_(var_args){
var G__47837 = arguments.length;
switch (G__47837) {
case 2:
return app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527)));
}));

(app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (child){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(child));
}));

(app.common.types.shape.layout.auto_width_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.auto_height_QMARK_ = (function app$common$types$shape$layout$auto_height_QMARK_(var_args){
var G__47844 = arguments.length;
switch (G__47844) {
case 2:
return app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641)));
}));

(app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (child){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(child));
}));

(app.common.types.shape.layout.auto_height_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.auto_QMARK_ = (function app$common$types$shape$layout$auto_QMARK_(var_args){
var G__47848 = arguments.length;
switch (G__47848) {
case 2:
return app.common.types.shape.layout.auto_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.auto_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.auto_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return ((app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,id)) || (app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,id)));
}));

(app.common.types.shape.layout.auto_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return ((app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)));
}));

(app.common.types.shape.layout.auto_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.col_QMARK_ = (function app$common$types$shape$layout$col_QMARK_(var_args){
var G__47852 = arguments.length;
switch (G__47852) {
case 2:
return app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (p__47856){
var map__47857 = p__47856;
var map__47857__$1 = cljs.core.__destructure_map(map__47857);
var layout_flex_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857__$1,new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),layout_flex_dir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587),layout_flex_dir)));
}));

(app.common.types.shape.layout.col_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.row_QMARK_ = (function app$common$types$shape$layout$row_QMARK_(var_args){
var G__47859 = arguments.length;
switch (G__47859) {
case 2:
return app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (p__47862){
var map__47863 = p__47862;
var map__47863__$1 = cljs.core.__destructure_map(map__47863);
var layout_flex_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47863__$1,new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),layout_flex_dir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-reverse","row-reverse",78332847),layout_flex_dir)));
}));

(app.common.types.shape.layout.row_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.gaps = (function app$common$types$shape$layout$gaps(p__47866){
var map__47867 = p__47866;
var map__47867__$1 = cljs.core.__destructure_map(map__47867);
var layout_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47867__$1,new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911));
var layout_gap_row = (function (){var or__5025__auto__ = app.common.math.finite(new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(layout_gap),(0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var layout_gap_col = (function (){var or__5025__auto__ = app.common.math.finite(new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(layout_gap),(0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout_gap_row,layout_gap_col], null);
});
app.common.types.shape.layout.paddings = (function app$common$types$shape$layout$paddings(p__47868){
var map__47869 = p__47868;
var map__47869__$1 = cljs.core.__destructure_map(map__47869);
var layout_padding_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47869__$1,new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837));
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47869__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
var map__47870 = layout_padding;
var map__47870__$1 = cljs.core.__destructure_map(map__47870);
var pad_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47870__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var pad_right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47870__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var pad_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47870__$1,new cljs.core.Keyword(null,"p3","p3",1731040739));
var pad_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47870__$1,new cljs.core.Keyword(null,"p4","p4",-1090126814));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),layout_padding_type)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pad_top,pad_right,pad_top,pad_right], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pad_top,pad_right,pad_bottom,pad_left], null);
}
});
app.common.types.shape.layout.h_padding = (function app$common$types$shape$layout$h_padding(p__47871){
var map__47872 = p__47871;
var map__47872__$1 = cljs.core.__destructure_map(map__47872);
var layout_padding_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47872__$1,new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837));
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47872__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
var map__47873 = layout_padding;
var map__47873__$1 = cljs.core.__destructure_map(map__47873);
var pad_right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var pad_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47873__$1,new cljs.core.Keyword(null,"p4","p4",-1090126814));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),layout_padding_type)){
return (pad_right + pad_right);
} else {
return (pad_right + pad_left);
}
});
app.common.types.shape.layout.v_padding = (function app$common$types$shape$layout$v_padding(p__47875){
var map__47877 = p__47875;
var map__47877__$1 = cljs.core.__destructure_map(map__47877);
var layout_padding_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47877__$1,new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837));
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47877__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
var map__47878 = layout_padding;
var map__47878__$1 = cljs.core.__destructure_map(map__47878);
var pad_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47878__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var pad_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47878__$1,new cljs.core.Keyword(null,"p3","p3",1731040739));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),layout_padding_type)){
return (pad_top + pad_top);
} else {
return (pad_top + pad_bottom);
}
});
app.common.types.shape.layout.child_min_width = (function app$common$types$shape$layout$child_min_width(child){
if(((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && ((!((new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548).cljs$core$IFn$_invoke$arity$1(child) == null)))))){
var x__5110__auto__ = 0.01;
var y__5111__auto__ = new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548).cljs$core$IFn$_invoke$arity$1(child);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
return 0.01;
}
});
app.common.types.shape.layout.child_max_width = (function app$common$types$shape$layout$child_max_width(child){
if(((app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && ((!((new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366).cljs$core$IFn$_invoke$arity$1(child) == null)))))){
var x__5110__auto__ = 0.01;
var y__5111__auto__ = new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366).cljs$core$IFn$_invoke$arity$1(child);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
return Infinity;
}
});
app.common.types.shape.layout.child_min_height = (function app$common$types$shape$layout$child_min_height(child){
if(((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && ((!((new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548).cljs$core$IFn$_invoke$arity$1(child) == null)))))){
var x__5110__auto__ = 0.01;
var y__5111__auto__ = new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548).cljs$core$IFn$_invoke$arity$1(child);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
return 0.01;
}
});
app.common.types.shape.layout.child_max_height = (function app$common$types$shape$layout$child_max_height(child){
if(((app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(child)) && ((!((new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307).cljs$core$IFn$_invoke$arity$1(child) == null)))))){
var x__5110__auto__ = 0.01;
var y__5111__auto__ = new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307).cljs$core$IFn$_invoke$arity$1(child);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
return Infinity;
}
});
app.common.types.shape.layout.child_margins = (function app$common$types$shape$layout$child_margins(p__47889){
var map__47892 = p__47889;
var map__47892__$1 = cljs.core.__destructure_map(map__47892);
var map__47893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47892__$1,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708));
var map__47893__$1 = cljs.core.__destructure_map(map__47893);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47893__$1,new cljs.core.Keyword(null,"m1","m1",-108094626));
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47893__$1,new cljs.core.Keyword(null,"m2","m2",-587003306));
var m3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47893__$1,new cljs.core.Keyword(null,"m3","m3",-703635357));
var m4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47893__$1,new cljs.core.Keyword(null,"m4","m4",-1624571215));
var layout_item_margin_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47892__$1,new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390));
var m1__$1 = (function (){var or__5025__auto__ = m1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var m2__$1 = (function (){var or__5025__auto__ = m2;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var m3__$1 = (function (){var or__5025__auto__ = m3;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var m4__$1 = (function (){var or__5025__auto__ = m4;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_item_margin_type,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m1__$1,m2__$1,m3__$1,m4__$1], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m1__$1,m2__$1,m1__$1,m2__$1], null);
}
});
app.common.types.shape.layout.child_height_margin = (function app$common$types$shape$layout$child_height_margin(child){
var vec__47897 = app.common.types.shape.layout.child_margins(child);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47897,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47897,(1),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47897,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47897,(3),null);
return (top + bottom);
});
app.common.types.shape.layout.child_width_margin = (function app$common$types$shape$layout$child_width_margin(child){
var vec__47903 = app.common.types.shape.layout.child_margins(child);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47903,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47903,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47903,(2),null);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47903,(3),null);
return (right + left);
});
app.common.types.shape.layout.h_start_QMARK_ = (function app$common$types$shape$layout$h_start_QMARK_(p__47906){
var map__47907 = p__47906;
var map__47907__$1 = cljs.core.__destructure_map(map__47907);
var shape = map__47907__$1;
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47907__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47907__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
return ((((app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"start","start",-355208981))))) || (((app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_justify_content,new cljs.core.Keyword(null,"start","start",-355208981))))));
});
app.common.types.shape.layout.h_center_QMARK_ = (function app$common$types$shape$layout$h_center_QMARK_(p__47918){
var map__47919 = p__47918;
var map__47919__$1 = cljs.core.__destructure_map(map__47919);
var shape = map__47919__$1;
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47919__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47919__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
return ((((app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"center","center",-748944368))))) || (((app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_justify_content,new cljs.core.Keyword(null,"center","center",-748944368))))));
});
app.common.types.shape.layout.h_end_QMARK_ = (function app$common$types$shape$layout$h_end_QMARK_(p__47922){
var map__47923 = p__47922;
var map__47923__$1 = cljs.core.__destructure_map(map__47923);
var shape = map__47923__$1;
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47923__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47923__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
return ((((app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"end","end",-268185958))))) || (((app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_justify_content,new cljs.core.Keyword(null,"end","end",-268185958))))));
});
app.common.types.shape.layout.v_start_QMARK_ = (function app$common$types$shape$layout$v_start_QMARK_(p__47928){
var map__47930 = p__47928;
var map__47930__$1 = cljs.core.__destructure_map(map__47930);
var shape = map__47930__$1;
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47930__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47930__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
return ((((app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"start","start",-355208981))))) || (((app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_justify_content,new cljs.core.Keyword(null,"start","start",-355208981))))));
});
app.common.types.shape.layout.v_center_QMARK_ = (function app$common$types$shape$layout$v_center_QMARK_(p__47933){
var map__47934 = p__47933;
var map__47934__$1 = cljs.core.__destructure_map(map__47934);
var shape = map__47934__$1;
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47934__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
return ((((app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"center","center",-748944368))))) || (((app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_justify_content,new cljs.core.Keyword(null,"center","center",-748944368))))));
});
app.common.types.shape.layout.v_end_QMARK_ = (function app$common$types$shape$layout$v_end_QMARK_(p__47936){
var map__47937 = p__47936;
var map__47937__$1 = cljs.core.__destructure_map(map__47937);
var shape = map__47937__$1;
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47937__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47937__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
return ((((app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"end","end",-268185958))))) || (((app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_justify_content,new cljs.core.Keyword(null,"end","end",-268185958))))));
});
app.common.types.shape.layout.content_start_QMARK_ = (function app$common$types$shape$layout$content_start_QMARK_(p__47941){
var map__47942 = p__47941;
var map__47942__$1 = cljs.core.__destructure_map(map__47942);
var layout_align_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47942__$1,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),layout_align_content);
});
app.common.types.shape.layout.content_center_QMARK_ = (function app$common$types$shape$layout$content_center_QMARK_(p__47943){
var map__47946 = p__47943;
var map__47946__$1 = cljs.core.__destructure_map(map__47946);
var layout_align_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47946__$1,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"center","center",-748944368),layout_align_content);
});
app.common.types.shape.layout.content_end_QMARK_ = (function app$common$types$shape$layout$content_end_QMARK_(p__47952){
var map__47961 = p__47952;
var map__47961__$1 = cljs.core.__destructure_map(map__47961);
var layout_align_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47961__$1,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),layout_align_content);
});
app.common.types.shape.layout.content_between_QMARK_ = (function app$common$types$shape$layout$content_between_QMARK_(p__47972){
var map__47975 = p__47972;
var map__47975__$1 = cljs.core.__destructure_map(map__47975);
var layout_align_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-between","space-between",1908176695),layout_align_content);
});
app.common.types.shape.layout.content_around_QMARK_ = (function app$common$types$shape$layout$content_around_QMARK_(p__47984){
var map__47986 = p__47984;
var map__47986__$1 = cljs.core.__destructure_map(map__47986);
var layout_align_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47986__$1,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-around","space-around",248184132),layout_align_content);
});
app.common.types.shape.layout.content_evenly_QMARK_ = (function app$common$types$shape$layout$content_evenly_QMARK_(p__47991){
var map__47993 = p__47991;
var map__47993__$1 = cljs.core.__destructure_map(map__47993);
var layout_align_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47993__$1,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),layout_align_content);
});
app.common.types.shape.layout.content_stretch_QMARK_ = (function app$common$types$shape$layout$content_stretch_QMARK_(p__48002){
var map__48004 = p__48002;
var map__48004__$1 = cljs.core.__destructure_map(map__48004);
var layout_align_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48004__$1,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stretch","stretch",-1888837380),layout_align_content)) || ((layout_align_content == null)));
});
app.common.types.shape.layout.align_items_center_QMARK_ = (function app$common$types$shape$layout$align_items_center_QMARK_(p__48011){
var map__48014 = p__48011;
var map__48014__$1 = cljs.core.__destructure_map(map__48014);
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"center","center",-748944368));
});
app.common.types.shape.layout.align_items_start_QMARK_ = (function app$common$types$shape$layout$align_items_start_QMARK_(p__48015){
var map__48016 = p__48015;
var map__48016__$1 = cljs.core.__destructure_map(map__48016);
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48016__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"start","start",-355208981));
});
app.common.types.shape.layout.align_items_end_QMARK_ = (function app$common$types$shape$layout$align_items_end_QMARK_(p__48017){
var map__48018 = p__48017;
var map__48018__$1 = cljs.core.__destructure_map(map__48018);
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48018__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"end","end",-268185958));
});
app.common.types.shape.layout.align_items_stretch_QMARK_ = (function app$common$types$shape$layout$align_items_stretch_QMARK_(p__48020){
var map__48021 = p__48020;
var map__48021__$1 = cljs.core.__destructure_map(map__48021);
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48021__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_align_items,new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
});
app.common.types.shape.layout.reverse_QMARK_ = (function app$common$types$shape$layout$reverse_QMARK_(var_args){
var G__48025 = arguments.length;
switch (G__48025) {
case 2:
return app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (p__48033){
var map__48034 = p__48033;
var map__48034__$1 = cljs.core.__destructure_map(map__48034);
var layout_flex_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48034__$1,new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-reverse","row-reverse",78332847),layout_flex_dir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587),layout_flex_dir)));
}));

(app.common.types.shape.layout.reverse_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.space_between_QMARK_ = (function app$common$types$shape$layout$space_between_QMARK_(p__48037){
var map__48038 = p__48037;
var map__48038__$1 = cljs.core.__destructure_map(map__48038);
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48038__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_justify_content,new cljs.core.Keyword(null,"space-between","space-between",1908176695));
});
app.common.types.shape.layout.space_around_QMARK_ = (function app$common$types$shape$layout$space_around_QMARK_(p__48041){
var map__48042 = p__48041;
var map__48042__$1 = cljs.core.__destructure_map(map__48042);
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48042__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_justify_content,new cljs.core.Keyword(null,"space-around","space-around",248184132));
});
app.common.types.shape.layout.space_evenly_QMARK_ = (function app$common$types$shape$layout$space_evenly_QMARK_(p__48044){
var map__48045 = p__48044;
var map__48045__$1 = cljs.core.__destructure_map(map__48045);
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48045__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_justify_content,new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715));
});
app.common.types.shape.layout.align_self_start_QMARK_ = (function app$common$types$shape$layout$align_self_start_QMARK_(p__48046){
var map__48047 = p__48046;
var map__48047__$1 = cljs.core.__destructure_map(map__48047);
var layout_item_align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48047__$1,new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),layout_item_align_self);
});
app.common.types.shape.layout.align_self_end_QMARK_ = (function app$common$types$shape$layout$align_self_end_QMARK_(p__48050){
var map__48051 = p__48050;
var map__48051__$1 = cljs.core.__destructure_map(map__48051);
var layout_item_align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48051__$1,new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),layout_item_align_self);
});
app.common.types.shape.layout.align_self_center_QMARK_ = (function app$common$types$shape$layout$align_self_center_QMARK_(p__48052){
var map__48053 = p__48052;
var map__48053__$1 = cljs.core.__destructure_map(map__48053);
var layout_item_align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48053__$1,new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"center","center",-748944368),layout_item_align_self);
});
app.common.types.shape.layout.align_self_stretch_QMARK_ = (function app$common$types$shape$layout$align_self_stretch_QMARK_(p__48054){
var map__48055 = p__48054;
var map__48055__$1 = cljs.core.__destructure_map(map__48055);
var layout_item_align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48055__$1,new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stretch","stretch",-1888837380),layout_item_align_self);
});
app.common.types.shape.layout.item_absolute_QMARK_ = (function app$common$types$shape$layout$item_absolute_QMARK_(var_args){
var G__48057 = arguments.length;
switch (G__48057) {
case 2:
return app.common.types.shape.layout.item_absolute_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.item_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.item_absolute_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.types.shape.layout.item_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.types.shape.layout.item_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265)) === true;
}));

(app.common.types.shape.layout.item_absolute_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.position_absolute_QMARK_ = (function app$common$types$shape$layout$position_absolute_QMARK_(var_args){
var G__48060 = arguments.length;
switch (G__48060) {
case 2:
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__5025__auto__ = app.common.types.shape.layout.item_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape);
}
}));

(app.common.types.shape.layout.position_absolute_QMARK_.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.layout_z_index = (function app$common$types$shape$layout$layout_z_index(var_args){
var G__48069 = arguments.length;
switch (G__48069) {
case 2:
return app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$2 = (function (objects,id){
return app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id));
}));

(app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__5025__auto__ = new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
}));

(app.common.types.shape.layout.layout_z_index.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.comparator_layout_z_index = (function app$common$types$shape$layout$comparator_layout_z_index(reverse_QMARK_,p__48078,p__48079){
var vec__48080 = p__48078;
var idx_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48080,(0),null);
var child_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48080,(1),null);
var vec__48083 = p__48079;
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083,(0),null);
var child_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48083,(1),null);
if((app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$1(child_a) > app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$1(child_b))){
return (1);
} else {
if((app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$1(child_a) < app.common.types.shape.layout.layout_z_index.cljs$core$IFn$_invoke$arity$1(child_b))){
return (-1);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = (idx_a < idx_b);
if(and__5023__auto__){
return reverse_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = (idx_a > idx_b);
if(and__5023__auto__){
return reverse_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return (1);
} else {
if((idx_a < idx_b)){
return (1);
} else {
if((idx_a > idx_b)){
return (-1);
} else {
return (0);

}
}
}
}
}
}
});
app.common.types.shape.layout.sort_layout_children_z_index = (function app$common$types$shape$layout$sort_layout_children_z_index(children,reverse_QMARK_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.comparator_layout_z_index,reverse_QMARK_),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(children)));
});
app.common.types.shape.layout.change_h_sizing_QMARK_ = (function app$common$types$shape$layout$change_h_sizing_QMARK_(frame_id,objects,children_ids){
var and__5023__auto__ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(and__5023__auto____$1){
var or__5025__auto__ = (function (){var and__5023__auto____$2 = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(cljs.core.truth_(and__5023__auto____$2)){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.fill_width_QMARK_,objects),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,objects),children_ids));
} else {
return and__5023__auto____$2;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto____$2 = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(cljs.core.truth_(and__5023__auto____$2)){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.fill_width_QMARK_,objects),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,objects),children_ids));
} else {
return and__5023__auto____$2;
}
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
app.common.types.shape.layout.change_v_sizing_QMARK_ = (function app$common$types$shape$layout$change_v_sizing_QMARK_(frame_id,objects,children_ids){
var and__5023__auto__ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(and__5023__auto____$1){
var or__5025__auto__ = (function (){var and__5023__auto____$2 = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(cljs.core.truth_(and__5023__auto____$2)){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.fill_height_QMARK_,objects),children_ids);
} else {
return and__5023__auto____$2;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto____$2 = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
if(cljs.core.truth_(and__5023__auto____$2)){
return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.fill_height_QMARK_,objects),children_ids);
} else {
return and__5023__auto____$2;
}
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
app.common.types.shape.layout.remove_layout_container_data = (function app$common$types$shape$layout$remove_layout_container_data(shape){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598),new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947)], 0));
});
app.common.types.shape.layout.remove_layout_item_data = (function app$common$types$shape$layout$remove_layout_item_data(shape){
var G__48100 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692),new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455)], 0));
var G__48100__$1 = (((((!(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape)))))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48100,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527)):G__48100);
if((((!(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48100__$1,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641));
} else {
return G__48100__$1;
}
});
app.common.types.shape.layout.update_flex_scale = (function app$common$types$shape$layout$update_flex_scale(shape,scale){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"column-gap","column-gap",384822863)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"p1","p1",-936759954)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"p2","p2",905500641)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"p3","p3",1731040739)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"p4","p4",-1090126814)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0));
});
app.common.types.shape.layout.update_grid_scale = (function app$common$types$shape$layout$update_grid_scale(shape,scale){
var scale_track = (function app$common$types$shape$layout$update_grid_scale_$_scale_track(track){
var G__48110 = track;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(track),new cljs.core.Keyword(null,"fixed","fixed",-562004358))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__48110,new cljs.core.Keyword(null,"value","value",305978217),cljs.core._STAR_,scale);
} else {
return G__48110;
}
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),(function (p1__48105_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(scale_track,p1__48105_SHARP_);
})),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),(function (p1__48106_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(scale_track,p1__48106_SHARP_);
}));
});
app.common.types.shape.layout.update_flex_child = (function app$common$types$shape$layout$update_flex_child(shape,scale){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"m1","m1",-108094626)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"m2","m2",-587003306)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"m3","m3",-703635357)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"m4","m4",-1624571215)], null),cljs.core._STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scale], 0));
});
app.common.types.shape.layout.default_track_value = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
app.common.types.shape.layout.grid_cell_defaults = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),(1),new cljs.core.Keyword(null,"column-span","column-span",1302376857),(1),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY], null);
/**
 * Remove the areas in the given `index` before and after the index
 */
app.common.types.shape.layout.remove_cell_areas = (function app$common$types$shape$layout$remove_cell_areas(parent,prop,index){
var prop_span = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.Keyword(null,"column-span","column-span",1302376857):new cljs.core.Keyword(null,"row-span","row-span",-365554241));
var cells = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"column","column",2078222095)))?(app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2(parent,index) : app.common.types.shape.layout.cells_by_column.call(null,parent,index)):(app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2(parent,index) : app.common.types.shape.layout.cells_by_row.call(null,parent,index)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$1,cell){
var area_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell));
var changed_cells = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop),(index + (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,prop_span,(1)),(function (){var G__48114 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cell,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY,prop,(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + (1)),prop_span,(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span) - (1))], 0)),new cljs.core.Keyword(null,"area-name","area-name",-496581211));
if(area_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48114,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608));
} else {
return G__48114;
}
})()], null):(((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) < (index + (1)))) && (((index + (1)) < (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span) - (1)))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,prop_span,((index + (1)) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop))),(function (){var G__48115 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cell,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY,prop,(index + (1)),prop_span,(1)], 0)),new cljs.core.Keyword(null,"area-name","area-name",-496581211));
if(area_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48115,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608));
} else {
return G__48115;
}
})(),(function (){var G__48116 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cell,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY,prop,(index + (2)),prop_span,((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span) - (1))) - (index + (1)))], 0)),new cljs.core.Keyword(null,"area-name","area-name",-496581211));
if(area_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48116,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608));
} else {
return G__48116;
}
})()], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span) - (1))),(index + (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,prop_span,((index + (1)) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop))),(function (){var G__48117 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cell,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY,prop,(index + (1)),prop_span,(1)], 0)),new cljs.core.Keyword(null,"area-name","area-name",-496581211));
if(area_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48117,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608));
} else {
return G__48117;
}
})()], null):null)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48112_SHARP_,p2__48113_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__48112_SHARP_,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__48113_SHARP_),p2__48113_SHARP_);
}),parent__$1,changed_cells);
}),parent,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48111_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__48111_SHARP_,prop_span) > (1));
}),cells));
});
/**
 * Remove the areas in the given `index` but only after the index.
 */
app.common.types.shape.layout.remove_cell_areas_after = (function app$common$types$shape$layout$remove_cell_areas_after(parent,prop,index){
var prop_span = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.Keyword(null,"column-span","column-span",1302376857):new cljs.core.Keyword(null,"row-span","row-span",-365554241));
var cells = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"column","column",2078222095)))?(app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2(parent,index) : app.common.types.shape.layout.cells_by_column.call(null,parent,index)):(app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2(parent,index) : app.common.types.shape.layout.cells_by_row.call(null,parent,index)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$1,cell){
var area_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell));
var changed_cells = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop),(index + (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,prop_span,(1)),(function (){var G__48121 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cell,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY,prop,(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + (1)),prop_span,(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span) - (1))], 0)),new cljs.core.Keyword(null,"area-name","area-name",-496581211));
if(area_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48121,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608));
} else {
return G__48121;
}
})()], null):(((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) < (index + (1)))) && (((index + (1)) < (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span) - (1)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,prop_span,((index + (2)) - cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop))),(function (){var G__48128 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cell,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY,prop,(index + (2)),prop_span,((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span) - (1))) - (index + (1)))], 0)),new cljs.core.Keyword(null,"area-name","area-name",-496581211));
if(area_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48128,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608));
} else {
return G__48128;
}
})()], null):null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48119_SHARP_,p2__48120_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__48119_SHARP_,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__48120_SHARP_),p2__48120_SHARP_);
}),parent__$1,changed_cells);
}),parent,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48118_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__48118_SHARP_,prop_span) > (1));
}),cells));
});
app.common.types.shape.layout.add_grid_track = (function app$common$types$shape$layout$add_grid_track(var_args){
var G__48132 = arguments.length;
switch (G__48132) {
case 3:
return app.common.types.shape.layout.add_grid_track.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.types.shape.layout.add_grid_track.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.add_grid_track.cljs$core$IFn$_invoke$arity$3 = (function (type,parent,value){
return app.common.types.shape.layout.add_grid_track.cljs$core$IFn$_invoke$arity$4(type,parent,value,null);
}));

(app.common.types.shape.layout.add_grid_track.cljs$core$IFn$_invoke$arity$4 = (function (type,parent,value,index){
if(cljs.core.truth_(app.common.types.shape.layout.check_grid_track(value))){
} else {
throw (new Error("Assert failed: (check-grid-track value)"));
}

var vec__48134 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"column-span","column-span",1302376857),new cljs.core.Keyword(null,"row-span","row-span",-365554241)], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"row-span","row-span",-365554241),new cljs.core.Keyword(null,"column-span","column-span",1302376857)], null));
var tracks_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48134,(0),null);
var tracks_prop_other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48134,(1),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48134,(2),null);
var prop_other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48134,(3),null);
var prop_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48134,(4),null);
var prop_span_other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48134,(5),null);
var new_index = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(index,cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent,tracks_prop)));
var new_track_num = (new_index + (1));
var layout_grid_cells = cljs.core.update_vals(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent),(function (cell){
var G__48137 = cell;
var G__48137__$1 = (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) >= new_track_num))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48137,prop,cljs.core.inc):G__48137);
if((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) < new_track_num)) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span) > (1))) && (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span) - (1))) >= new_track_num)))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48137__$1,prop_span,cljs.core.inc);
} else {
return G__48137__$1;
}
}));
var exist_cells_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (cell){
return (((new_track_num >= cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop))) && ((new_track_num < (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span)))));
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__48129_SHARP_){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__48129_SHARP_,prop_other),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__48129_SHARP_,prop_other) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__48129_SHARP_,prop_span_other)));
}))),cljs.core.vals(layout_grid_cells));
var layout_grid_cells__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__48138){
var vec__48139 = p__48138;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48139,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48139,(1),null);
var id = app.common.uuid.next();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,id,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092),id,prop_other,(idx + (1)),prop,new_track_num]),app.common.types.shape.layout.grid_cell_defaults], 0)));
}),layout_grid_cells,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48142){
var vec__48143 = p__48142;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48143,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48143,(1),null);
var G__48146 = (idx + (1));
return (exist_cells_QMARK_.cljs$core$IFn$_invoke$arity$1 ? exist_cells_QMARK_.cljs$core$IFn$_invoke$arity$1(G__48146) : exist_cells_QMARK_.call(null,G__48146));
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent,tracks_prop_other))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(parent,tracks_prop,app.common.data.add_at_index,new_index,value),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),layout_grid_cells__$1);
}));

(app.common.types.shape.layout.add_grid_track.cljs$lang$maxFixedArity = 4);

app.common.types.shape.layout.add_grid_column = (function app$common$types$shape$layout$add_grid_column(var_args){
var G__48149 = arguments.length;
switch (G__48149) {
case 2:
return app.common.types.shape.layout.add_grid_column.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape.layout.add_grid_column.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.add_grid_column.cljs$core$IFn$_invoke$arity$2 = (function (parent,value){
return app.common.types.shape.layout.add_grid_column.cljs$core$IFn$_invoke$arity$3(parent,value,null);
}));

(app.common.types.shape.layout.add_grid_column.cljs$core$IFn$_invoke$arity$3 = (function (parent,value,index){
return app.common.types.shape.layout.add_grid_track.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"column","column",2078222095),parent,value,index);
}));

(app.common.types.shape.layout.add_grid_column.cljs$lang$maxFixedArity = 3);

app.common.types.shape.layout.add_grid_row = (function app$common$types$shape$layout$add_grid_row(var_args){
var G__48151 = arguments.length;
switch (G__48151) {
case 2:
return app.common.types.shape.layout.add_grid_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape.layout.add_grid_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.add_grid_row.cljs$core$IFn$_invoke$arity$2 = (function (parent,value){
return app.common.types.shape.layout.add_grid_row.cljs$core$IFn$_invoke$arity$3(parent,value,null);
}));

(app.common.types.shape.layout.add_grid_row.cljs$core$IFn$_invoke$arity$3 = (function (parent,value,index){
return app.common.types.shape.layout.add_grid_track.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"row","row",-570139521),parent,value,index);
}));

(app.common.types.shape.layout.add_grid_row.cljs$lang$maxFixedArity = 3);

app.common.types.shape.layout.duplicate_cells = (function app$common$types$shape$layout$duplicate_cells(shape,prop,from_index,to_index,ids_map){
var vec__48152 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"column","column",2078222095)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-span","column-span",1302376857),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row-span","row-span",-365554241)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column-span","column-span",1302376857)], null));
var prop_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48152,(0),null);
var prop_other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48152,(1),null);
var prop_other_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48152,(2),null);
var from_cells = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"column","column",2078222095)))?(app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2(shape,from_index) : app.common.types.shape.layout.cells_by_column.call(null,shape,from_index)):(app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2(shape,from_index) : app.common.types.shape.layout.cells_by_row.call(null,shape,from_index)));
var to_cells = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"column","column",2078222095)))?(app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2(shape,to_index) : app.common.types.shape.layout.cells_by_column.call(null,shape,to_index)):(app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2(shape,to_index) : app.common.types.shape.layout.cells_by_row.call(null,shape,to_index)));
var to_cells_idx = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(prop_other,to_cells);
var vec__48155 = (function (){var from_cells__$1 = cljs.core.seq(from_cells);
var matched = cljs.core.PersistentHashSet.EMPTY;
var result = shape;
while(true){
var temp__5823__auto__ = cljs.core.first(from_cells__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var cell = temp__5823__auto__;
var match_cell = (function (){var G__48160 = (function (){var G__48161 = app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(to_cells_idx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_other)),cljs.core.select_keys(cell,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop_other_span,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48161,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608));
} else {
return G__48161;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,prop_span),(1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48160,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(ids_map,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell)));
} else {
return G__48160;
}
})();
var G__48752 = cljs.core.rest(from_cells__$1);
var G__48753 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matched,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match_cell));
var G__48754 = cljs.core.assoc_in(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match_cell)], null),match_cell);
from_cells__$1 = G__48752;
matched = G__48753;
result = G__48754;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,matched], null);
}
break;
}
})();
var shape__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48155,(0),null);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48155,(1),null);
var shape__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (shape__$2,cell){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape__$2,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell));
}),shape__$1,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48162){
var map__48163 = p__48162;
var map__48163__$1 = cljs.core.__destructure_map(map__48163);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48163__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.contains_QMARK_(matched,id);
}),to_cells));
return shape__$2;
});
app.common.types.shape.layout.duplicate_row = (function app$common$types$shape$layout$duplicate_row(shape,objects,index,ids_map){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947)),index);
var G__48164 = app.common.types.shape.layout.duplicate_cells(app.common.types.shape.layout.add_grid_row.cljs$core$IFn$_invoke$arity$3(app.common.types.shape.layout.remove_cell_areas_after(shape,new cljs.core.Keyword(null,"row","row",-570139521),index),value,(index + (1))),new cljs.core.Keyword(null,"row","row",-570139521),index,(index + (1)),ids_map);
var G__48165 = objects;
return (app.common.types.shape.layout.assign_cells.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.assign_cells.cljs$core$IFn$_invoke$arity$2(G__48164,G__48165) : app.common.types.shape.layout.assign_cells.call(null,G__48164,G__48165));
});
app.common.types.shape.layout.duplicate_column = (function app$common$types$shape$layout$duplicate_column(shape,objects,index,ids_map){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864)),index);
var G__48166 = app.common.types.shape.layout.duplicate_cells(app.common.types.shape.layout.add_grid_column.cljs$core$IFn$_invoke$arity$3(app.common.types.shape.layout.remove_cell_areas_after(shape,new cljs.core.Keyword(null,"column","column",2078222095),index),value,(index + (1))),new cljs.core.Keyword(null,"column","column",2078222095),index,(index + (1)),ids_map);
var G__48167 = objects;
return (app.common.types.shape.layout.assign_cells.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.assign_cells.cljs$core$IFn$_invoke$arity$2(G__48166,G__48167) : app.common.types.shape.layout.assign_cells.call(null,G__48166,G__48167));
});
app.common.types.shape.layout.make_remove_cell = (function app$common$types$shape$layout$make_remove_cell(attr,span_attr,track_num){
return (function (p__48168){
var vec__48169 = p__48168;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48169,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48169,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(track_num,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,attr))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,span_attr),(1))));
});
});
app.common.types.shape.layout.make_decrease_track_num = (function app$common$types$shape$layout$make_decrease_track_num(attr,span_attr,track_num){
return (function (p__48172){
var vec__48173 = p__48172;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48173,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48173,(1),null);
var inner_track_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(track_num,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,attr))) || ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,attr) < track_num)) && ((track_num < (cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,attr) + cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,span_attr)))))));
var displace_cell_QMARK_ = (((!(inner_track_QMARK_))) && ((track_num < cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,attr))));
var cell__$1 = (function (){var G__48176 = cell;
var G__48176__$1 = ((inner_track_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48176,span_attr,cljs.core.dec):G__48176);
if(displace_cell_QMARK_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48176__$1,attr,cljs.core.dec);
} else {
return G__48176__$1;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cell__$1], null);
});
});
app.common.types.shape.layout.remove_grid_column = (function app$common$types$shape$layout$remove_grid_column(parent,index,objects){
var track_num = (index + (1));
var decrease_track_num = app.common.types.shape.layout.make_decrease_track_num(new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column-span","column-span",1302376857),track_num);
var remove_track_QMARK_ = app.common.types.shape.layout.make_remove_cell(new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column-span","column-span",1302376857),track_num);
var update_cells = (function (cells){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(remove_track_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(decrease_track_num)),cells);
});
var G__48177 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(parent,new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),app.common.data.remove_at_index,index),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),update_cells);
var G__48178 = objects;
return (app.common.types.shape.layout.assign_cells.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.assign_cells.cljs$core$IFn$_invoke$arity$2(G__48177,G__48178) : app.common.types.shape.layout.assign_cells.call(null,G__48177,G__48178));
});
app.common.types.shape.layout.remove_grid_row = (function app$common$types$shape$layout$remove_grid_row(parent,index,objects){
var track_num = (index + (1));
var decrease_track_num = app.common.types.shape.layout.make_decrease_track_num(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row-span","row-span",-365554241),track_num);
var remove_track_QMARK_ = app.common.types.shape.layout.make_remove_cell(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row-span","row-span",-365554241),track_num);
var update_cells = (function (cells){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(remove_track_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(decrease_track_num)),cells);
});
var G__48179 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(parent,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),app.common.data.remove_at_index,index),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),update_cells);
var G__48180 = objects;
return (app.common.types.shape.layout.assign_cells.cljs$core$IFn$_invoke$arity$2 ? app.common.types.shape.layout.assign_cells.cljs$core$IFn$_invoke$arity$2(G__48179,G__48180) : app.common.types.shape.layout.assign_cells.call(null,G__48179,G__48180));
});
/**
 * Swap the positions of the tracks info
 */
app.common.types.shape.layout.reorder_grid_tracks = (function app$common$types$shape$layout$reorder_grid_tracks(parent,prop,from_index,to_index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(parent,prop,(function (tracks){
var tr = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tracks,from_index);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,app.common.data.vec_without_nils(app.common.data.insert_at_index(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(tracks),from_index,null),(to_index + (1)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,tr], null)], null))));
}));
});
/**
 * Swap the shapes contained in the given tracks moves as necessary the others.
 */
app.common.types.shape.layout.swap_track_content = (function app$common$types$shape$layout$swap_track_content(parent,prop,from_track,to_track){
var remap_tracks = (((from_track > to_track))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([from_track,to_track]),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48181_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__48181_SHARP_,(p1__48181_SHARP_ + (1))],null));
})),cljs.core.range.cljs$core$IFn$_invoke$arity$2(to_track,from_track)):(((from_track < to_track))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([from_track,to_track]),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48182_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__48182_SHARP_,(p1__48182_SHARP_ - (1))],null));
})),cljs.core.range.cljs$core$IFn$_invoke$arity$2((from_track + (1)),(to_track + (1)))):null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(parent,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.update_vals,(function (cell){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cell,prop,(function (p1__48183_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(remap_tracks,p1__48183_SHARP_,p1__48183_SHARP_);
}));
}));
});
app.common.types.shape.layout.reorder_grid_track = (function app$common$types$shape$layout$reorder_grid_track(parent,from_index,to_index,move_content_QMARK_,tracks_props,prop){
var from_track = (from_index + (1));
var to_track = (((to_index < from_index))?(to_index + (2)):(to_index + (1)));
var move_content_QMARK___$1 = (function (){var and__5023__auto__ = move_content_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_track,to_track);
} else {
return and__5023__auto__;
}
})();
var parent__$1 = (function (){var G__48184 = parent;
if(cljs.core.truth_(move_content_QMARK___$1)){
return app.common.types.shape.layout.remove_cell_areas_after(app.common.types.shape.layout.remove_cell_areas(G__48184,prop,from_index),prop,to_index);
} else {
return G__48184;
}
})();
var parent__$2 = app.common.types.shape.layout.reorder_grid_tracks(parent__$1,tracks_props,from_index,to_index);
var G__48185 = parent__$2;
if(cljs.core.truth_(move_content_QMARK___$1)){
return app.common.types.shape.layout.swap_track_content(G__48185,prop,from_track,to_track);
} else {
return G__48185;
}
});
app.common.types.shape.layout.reorder_grid_column = (function app$common$types$shape$layout$reorder_grid_column(parent,from_index,to_index,move_content_QMARK_){
return app.common.types.shape.layout.reorder_grid_track(parent,from_index,to_index,move_content_QMARK_,new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"column","column",2078222095));
});
app.common.types.shape.layout.reorder_grid_row = (function app$common$types$shape$layout$reorder_grid_row(parent,from_index,to_index,move_content_QMARK_){
return app.common.types.shape.layout.reorder_grid_track(parent,from_index,to_index,move_content_QMARK_,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"row","row",-570139521));
});
app.common.types.shape.layout.cells_seq = (function app$common$types$shape$layout$cells_seq(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48768 = arguments.length;
var i__5750__auto___48769 = (0);
while(true){
if((i__5750__auto___48769 < len__5749__auto___48768)){
args__5755__auto__.push((arguments[i__5750__auto___48769]));

var G__48770 = (i__5750__auto___48769 + (1));
i__5750__auto___48769 = G__48770;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.types.shape.layout.cells_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.types.shape.layout.cells_seq.cljs$core$IFn$_invoke$arity$variadic = (function (p__48190,p__48191){
var map__48192 = p__48190;
var map__48192__$1 = cljs.core.__destructure_map(map__48192);
var layout_grid_cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48192__$1,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187));
var layout_grid_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48192__$1,new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661));
var map__48193 = p__48191;
var map__48193__$1 = cljs.core.__destructure_map(map__48193);
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48193__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924),false);
var comp_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layout_grid_dir,new cljs.core.Keyword(null,"row","row",-570139521)))?cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"column","column",2078222095)):cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"row","row",-570139521)));
var maybe_sort_QMARK_ = (cljs.core.truth_(sort_QMARK_)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(comp_fn,cljs.core.second)):cljs.core.identity);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(maybe_sort_QMARK_.cljs$core$IFn$_invoke$arity$1 ? maybe_sort_QMARK_.cljs$core$IFn$_invoke$arity$1(layout_grid_cells) : maybe_sort_QMARK_.call(null,layout_grid_cells)));
}));

(app.common.types.shape.layout.cells_seq.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.types.shape.layout.cells_seq.cljs$lang$applyTo = (function (seq48188){
var G__48189 = cljs.core.first(seq48188);
var seq48188__$1 = cljs.core.next(seq48188);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48189,seq48188__$1);
}));

app.common.types.shape.layout.get_free_cells = (function app$common$types$shape$layout$get_free_cells(var_args){
var G__48196 = arguments.length;
switch (G__48196) {
case 1:
return app.common.types.shape.layout.get_free_cells.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.shape.layout.get_free_cells.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.get_free_cells.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return app.common.types.shape.layout.get_free_cells.cljs$core$IFn$_invoke$arity$2(parent,null);
}));

(app.common.types.shape.layout.get_free_cells.cljs$core$IFn$_invoke$arity$2 = (function (parent,p__48198){
var map__48199 = p__48198;
var map__48199__$1 = cljs.core.__destructure_map(map__48199);
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48199__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924),false);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,new cljs.core.Keyword(null,"shapes","shapes",1897594879)),app.common.types.shape.layout.cells_seq.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sort?","sort?",-567661924),sort_QMARK_], 0))));
}));

(app.common.types.shape.layout.get_free_cells.cljs$lang$maxFixedArity = 2);

app.common.types.shape.layout.get_cells = (function app$common$types$shape$layout$get_cells(var_args){
var G__48201 = arguments.length;
switch (G__48201) {
case 1:
return app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$2(parent,null);
}));

(app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$2 = (function (parent,p__48210){
var map__48211 = p__48210;
var map__48211__$1 = cljs.core.__destructure_map(map__48211);
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48211__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924),false);
var remove_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48211__$1,new cljs.core.Keyword(null,"remove-empty?","remove-empty?",-2004264696),false);
var maybe_remove_QMARK_ = (cljs.core.truth_(remove_empty_QMARK_)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,new cljs.core.Keyword(null,"shapes","shapes",1897594879))):cljs.core.identity);
var G__48217 = app.common.types.shape.layout.cells_seq.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sort?","sort?",-567661924),sort_QMARK_], 0));
return (maybe_remove_QMARK_.cljs$core$IFn$_invoke$arity$1 ? maybe_remove_QMARK_.cljs$core$IFn$_invoke$arity$1(G__48217) : maybe_remove_QMARK_.call(null,G__48217));
}));

(app.common.types.shape.layout.get_cells.cljs$lang$maxFixedArity = 2);

/**
 * Clean the cells whith shapes that are no longer in the layout
 */
app.common.types.shape.layout.check_deassigned_cells = (function app$common$types$shape$layout$check_deassigned_cells(parent,objects){
var child_set = cljs.core.set(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent));
var assigned_QMARK_ = (function (id){
return ((cljs.core.contains_QMARK_(child_set,id)) && (cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,id))));
});
var cells = cljs.core.update_vals(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent),(function (cell){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__48222_SHARP_){
return cljs.core.filterv(assigned_QMARK_,p1__48222_SHARP_);
}));
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cells);
});
/**
 * Find overlapping cells
 */
app.common.types.shape.layout.overlapping_cells = (function app$common$types$shape$layout$overlapping_cells(parent){
var cells = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48224){
var vec__48225 = p__48224;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48225,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$1(cell)], null);
}),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent));
var find_overlaps = (function (result,p__48228){
var vec__48229 = p__48228;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48229,(0),null);
var area = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48229,(1),null);
var vec__48232 = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__48223_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__48223_SHARP_),id)) && (app.common.geom.shapes.grid_layout.areas.intersects_QMARK_(cljs.core.second(p1__48223_SHARP_),area)));
}),cells);
var fid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48232,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48232,(1),null);
var G__48236 = result;
if((!((fid == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48236,cljs.core.PersistentHashSet.createAsIfByAssoc([fid,id]));
} else {
return G__48236;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(find_overlaps,cljs.core.PersistentHashSet.EMPTY,cells);
});
app.common.types.shape.layout.fix_overlaps = (function app$common$types$shape$layout$fix_overlaps(parent,overlaps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$1,ids){
var id = ((cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.first(ids)], null))))?cljs.core.first(ids):cljs.core.second(ids));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(parent__$1,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.dissoc,id);
}),parent,overlaps);
});
/**
 * Propagate the manual positioning to the following cells
 */
app.common.types.shape.layout.reassign_positions = (function app$common$types$shape$layout$reassign_positions(parent){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__48243,cell){
var vec__48244 = p__48243;
var parent__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48244,(0),null);
var auto_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48244,(1),null);
var vec__48247 = ((((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(cell),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(cell),(1)))))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,false], null):((((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(cell),(1))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(cell),(1))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608)),false], null):((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,false], null):((((cljs.core.not(auto_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608)),false], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,false], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell,auto_QMARK_], null)
)))));
var cell__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48247,(0),null);
var auto_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48247,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(parent__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell__$1)], null),cell__$1),auto_QMARK___$1], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,true], null),app.common.types.shape.layout.cells_seq.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sort?","sort?",-567661924),true], 0))));
});
app.common.types.shape.layout.position_auto_shapes = (function app$common$types$shape$layout$position_auto_shapes(parent){
var auto_cells = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48252_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__48252_SHARP_),new cljs.core.Keyword(null,"auto","auto",-566279492))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(p1__48252_SHARP_),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(p1__48252_SHARP_),(1))))));
}),app.common.types.shape.layout.cells_seq.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sort?","sort?",-567661924),true], 0)));
var shapes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([auto_cells], 0));
var parent__$1 = (function (){var parent__$1 = parent;
var cells = cljs.core.seq(auto_cells);
var shapes__$1 = cljs.core.seq(shapes);
while(true){
if(cljs.core.empty_QMARK_(cells)){
return parent__$1;
} else {
var shape = cljs.core.first(shapes__$1);
var cell = cljs.core.first(cells);
var parent__$2 = cljs.core.assoc_in(parent__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),(((!((shape == null))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null):cljs.core.PersistentVector.EMPTY));
var G__48779 = parent__$2;
var G__48780 = cljs.core.rest(cells);
var G__48781 = cljs.core.rest(shapes__$1);
parent__$1 = G__48779;
cells = G__48780;
shapes__$1 = G__48781;
continue;
}
break;
}
})();
return parent__$1;
});
app.common.types.shape.layout.assign_cell_positions = (function app$common$types$shape$layout$assign_cell_positions(parent,objects){
return app.common.types.shape.layout.position_auto_shapes(app.common.types.shape.layout.reassign_positions(app.common.types.shape.layout.check_deassigned_cells(parent,objects)));
});
app.common.types.shape.layout.assign_cells = (function app$common$types$shape$layout$assign_cells(parent,objects){
var parent__$1 = app.common.types.shape.layout.assign_cell_positions(parent,objects);
var shape_has_cell_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.second)),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent__$1));
var no_cell_shapes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,objects),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shape_has_cell_QMARK_,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent__$1)));
if(cljs.core.empty_QMARK_(no_cell_shapes)){
return parent__$1;
} else {
var parent__$2 = (function (){var G__48259 = parent__$1;
var G__48259__$1 = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(parent__$1)))?app.common.types.shape.layout.add_grid_column.cljs$core$IFn$_invoke$arity$2(G__48259,app.common.types.shape.layout.default_track_value):G__48259);
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(parent__$1))){
return app.common.types.shape.layout.add_grid_row.cljs$core$IFn$_invoke$arity$2(G__48259__$1,app.common.types.shape.layout.default_track_value);
} else {
return G__48259__$1;
}
})();
var free_cells = app.common.types.shape.layout.get_free_cells.cljs$core$IFn$_invoke$arity$1(parent__$2);
var to_add_tracks = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661).cljs$core$IFn$_invoke$arity$1(parent__$2),new cljs.core.Keyword(null,"row","row",-570139521)))?app.common.math.ceil(((cljs.core.count(no_cell_shapes) - cljs.core.count(free_cells)) / cljs.core.count(new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(parent__$2)))):app.common.math.ceil(((cljs.core.count(no_cell_shapes) - cljs.core.count(free_cells)) / cljs.core.count(new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(parent__$2)))));
var add_track = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661).cljs$core$IFn$_invoke$arity$1(parent__$2),new cljs.core.Keyword(null,"row","row",-570139521)))?app.common.types.shape.layout.add_grid_column:app.common.types.shape.layout.add_grid_row);
var parent__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$3,_){
return (add_track.cljs$core$IFn$_invoke$arity$2 ? add_track.cljs$core$IFn$_invoke$arity$2(parent__$3,app.common.types.shape.layout.default_track_value) : add_track.call(null,parent__$3,app.common.types.shape.layout.default_track_value));
}),parent__$2,cljs.core.range.cljs$core$IFn$_invoke$arity$1(to_add_tracks));
var cells = (function (){var cells = new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent__$3);
var free_cells__$1 = app.common.types.shape.layout.get_free_cells.cljs$core$IFn$_invoke$arity$2(parent__$3,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort?","sort?",-567661924),true], null));
var pending = no_cell_shapes;
while(true){
if(((cljs.core.empty_QMARK_(free_cells__$1)) || (cljs.core.empty_QMARK_(pending)))){
return cells;
} else {
var next_free = cljs.core.first(free_cells__$1);
var current = cljs.core.first(pending);
var cells__$1 = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_free,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),cljs.core.conj,current),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_free,new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"auto","auto",-566279492));
var G__48789 = cells__$1;
var G__48790 = cljs.core.rest(free_cells__$1);
var G__48791 = cljs.core.rest(pending);
cells = G__48789;
free_cells__$1 = G__48790;
pending = G__48791;
continue;
}
break;
}
})();
if(cljs.core.empty_QMARK_(app.common.types.shape.layout.overlapping_cells(parent__$3))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(""+(app.common.types.shape.layout.overlapping_cells(parent__$3) ?? "")),"\n","(empty? (overlapping-cells parent))"].join('')));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent__$3,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cells);
}
});
/**
 * Frees the cell at index and push the shapes in the order given by the `cells` attribute
 */
app.common.types.shape.layout.free_cell_push = (function app$common$types$shape$layout$free_cell_push(parent,cells,index){
var start_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells,index);
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(start_cell))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,cells], null);
} else {
var vec__48263 = (function (){var parent__$1 = parent;
var result_cells = cells;
var idx = index;
while(true){
if((idx > (cljs.core.count(cells) - (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent__$1,result_cells], null);
} else {
var cell_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells,idx);
var cell_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells,(idx + (1)));
var cell = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cell_to,new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell_from),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell_from)], 0));
var parent__$2 = cljs.core.assoc_in(parent__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cell);
var result_cells__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_cells,(idx + (1)),cell);
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell_to))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent__$2,result_cells__$1], null);
} else {
var G__48797 = parent__$2;
var G__48798 = result_cells__$1;
var G__48799 = (idx + (1));
parent__$1 = G__48797;
result_cells = G__48798;
idx = G__48799;
continue;
}
}
break;
}
})();
var parent__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48263,(0),null);
var result_cells = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48263,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(parent__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),cljs.core.PersistentVector.EMPTY),cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(result_cells,index,cljs.core.assoc,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto","auto",-566279492)], 0))], null);
}
});
/**
 * Given a cell check if the row+column is inside this cell
 */
app.common.types.shape.layout.in_cell_QMARK_ = (function app$common$types$shape$layout$in_cell_QMARK_(p__48269,row,column){
var map__48270 = p__48269;
var map__48270__$1 = cljs.core.__destructure_map(map__48270);
var cell_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var cell_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
return (((row >= cell_row)) && ((((column >= cell_column)) && ((((row <= ((cell_row + row_span) + (-1)))) && ((column <= ((cell_column + column_span) + (-1)))))))));
});
app.common.types.shape.layout.cell_by_row_column = (function app$common$types$shape$layout$cell_by_row_column(parent,row,column){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__48274_SHARP_){
return app.common.types.shape.layout.in_cell_QMARK_(p1__48274_SHARP_,row,column);
}),cljs.core.vals(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent)));
});
app.common.types.shape.layout.seek_indexed_cell = (function app$common$types$shape$layout$seek_indexed_cell(cells,row,column){
var cells_PLUS_index = app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cells);
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__48277_SHARP_){
return app.common.types.shape.layout.in_cell_QMARK_(cljs.core.second(p1__48277_SHARP_),row,column);
}),cells_PLUS_index);
});
/**
 * Removes the shape-ids from the cells previously assigned.
 */
app.common.types.shape.layout.free_cell_shapes = (function app$common$types$shape$layout$free_cell_shapes(parent,shape_ids){
var shape_ids__$1 = cljs.core.set(shape_ids);
var free_cells = (function app$common$types$shape$layout$free_cell_shapes_$_free_cells(cells){
return cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.truth_(cljs.core.some(shape_ids__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(v)))){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),cljs.core.PersistentVector.EMPTY);
} else {
return m;
}
}),cells,cells);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(parent,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),free_cells);
});
/**
 * Push the shapes into the row/column cell and moves the rest
 */
app.common.types.shape.layout.push_into_cell = (function app$common$types$shape$layout$push_into_cell(parent,shape_ids,row,column){
var parent__$1 = app.common.types.shape.layout.free_cell_shapes(parent,shape_ids);
var cells = cljs.core.vec(app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$2(parent__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort?","sort?",-567661924),true], null)));
var vec__48290 = app.common.types.shape.layout.seek_indexed_cell(cells,row,column);
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48290,(0),null);
var start_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48290,(1),null);
if((!((start_cell == null)))){
var to_index = (function (){var x__5113__auto__ = (start_index + cljs.core.count(shape_ids));
var y__5114__auto__ = (cljs.core.count(cells) - (1));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__48297,p__48298){
var vec__48299 = p__48297;
var parent__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48299,(0),null);
var cells__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48299,(1),null);
var vec__48302 = p__48298;
var shape_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48302,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48302,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent__$2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cells__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"id","id",-1388402092)], null)),new cljs.core.Keyword(null,"shapes","shapes",1897594879),(0)], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent__$2,cells__$1], null);
} else {
var vec__48307 = app.common.types.shape.layout.free_cell_push(parent__$2,cells__$1,idx);
var parent__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48307,(0),null);
var cells__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48307,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(parent__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cells__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"id","id",-1388402092)], null))], null),cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null)], 0)),cells__$2], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent__$1,cells], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,shape_ids,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_index,(to_index + (1))))));
} else {
return parent__$1;
}
});
/**
 * Create cells in an area. One cell per row/column 
 */
app.common.types.shape.layout.create_cells = (function app$common$types$shape$layout$create_cells(parent,p__48314){
var vec__48315 = p__48314;
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48315,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48315,(1),null);
var column_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48315,(2),null);
var row_span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48315,(3),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48312_SHARP_,p2__48313_SHARP_){
return cljs.core.assoc_in(p1__48312_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__48313_SHARP_)], null),p2__48313_SHARP_);
}),parent,(function (){var iter__5503__auto__ = (function app$common$types$shape$layout$create_cells_$_iter__48319(s__48320){
return (new cljs.core.LazySeq(null,(function (){
var s__48320__$1 = s__48320;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48320__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var row__$1 = cljs.core.first(xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__48320__$1,row__$1,xs__6385__auto__,temp__5825__auto__,vec__48315,column,row,column_span,row_span){
return (function app$common$types$shape$layout$create_cells_$_iter__48319_$_iter__48321(s__48322){
return (new cljs.core.LazySeq(null,((function (s__48320__$1,row__$1,xs__6385__auto__,temp__5825__auto__,vec__48315,column,row,column_span,row_span){
return (function (){
var s__48322__$1 = s__48322;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__48322__$1);
if(temp__5825__auto____$1){
var s__48322__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48322__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48322__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48324 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48323 = (0);
while(true){
if((i__48323 < size__5502__auto__)){
var column__$1 = cljs.core._nth(c__5501__auto__,i__48323);
cljs.core.chunk_append(b__48324,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.shape.layout.grid_cell_defaults,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"row","row",-570139521),row__$1,new cljs.core.Keyword(null,"column","column",2078222095),column__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241),(1),new cljs.core.Keyword(null,"column-span","column-span",1302376857),(1)], null)], 0)));

var G__48817 = (i__48323 + (1));
i__48323 = G__48817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48324),app$common$types$shape$layout$create_cells_$_iter__48319_$_iter__48321(cljs.core.chunk_rest(s__48322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48324),null);
}
} else {
var column__$1 = cljs.core.first(s__48322__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.shape.layout.grid_cell_defaults,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"row","row",-570139521),row__$1,new cljs.core.Keyword(null,"column","column",2078222095),column__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241),(1),new cljs.core.Keyword(null,"column-span","column-span",1302376857),(1)], null)], 0)),app$common$types$shape$layout$create_cells_$_iter__48319_$_iter__48321(cljs.core.rest(s__48322__$2)));
}
} else {
return null;
}
break;
}
});})(s__48320__$1,row__$1,xs__6385__auto__,temp__5825__auto__,vec__48315,column,row,column_span,row_span))
,null,null));
});})(s__48320__$1,row__$1,xs__6385__auto__,temp__5825__auto__,vec__48315,column,row,column_span,row_span))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(column,(column + column_span))));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,app$common$types$shape$layout$create_cells_$_iter__48319(cljs.core.rest(s__48320__$1)));
} else {
var G__48819 = cljs.core.rest(s__48320__$1);
s__48320__$1 = G__48819;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(row,(row + row_span)));
})());
});
/**
 * Increases/decreases the cell size
 */
app.common.types.shape.layout.resize_cell_area = (function app$common$types$shape$layout$resize_cell_area(parent,row,column,new_row,new_column,new_row_span,new_column_span){
if((((new_row >= (1))) && ((((new_column >= (1))) && ((((new_row_span >= (1))) && ((new_column_span >= (1))))))))){
var prev_cell = app.common.types.shape.layout.cell_by_row_column(parent,row,column);
var prev_area = app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$1(prev_cell);
var target_cell = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prev_cell,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"manual","manual",-237370608),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"row","row",-570139521),new_row,new cljs.core.Keyword(null,"column","column",2078222095),new_column,new cljs.core.Keyword(null,"row-span","row-span",-365554241),new_row_span,new cljs.core.Keyword(null,"column-span","column-span",1302376857),new_column_span], 0));
var target_area = app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$1(target_cell);
var parent__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$1,_){
return app.common.types.shape.layout.add_grid_column.cljs$core$IFn$_invoke$arity$2(parent__$1,app.common.types.shape.layout.default_track_value);
}),parent,cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(parent)),((new_column + new_column_span) + (-1))));
var parent__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$2,_){
return app.common.types.shape.layout.add_grid_row.cljs$core$IFn$_invoke$arity$2(parent__$2,app.common.types.shape.layout.default_track_value);
}),parent__$1,cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(parent__$1)),((new_row + new_row_span) + (-1))));
var parent__$3 = app.common.types.shape.layout.create_cells(parent__$2,prev_area);
var cells = cljs.core.vec(app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$2(parent__$3,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort?","sort?",-567661924),true], null)));
var remove_cells = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48330_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_cell),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48330_SHARP_))) && (app.common.geom.shapes.grid_layout.areas.contains_QMARK_(target_area,app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$1(p1__48330_SHARP_))));
}),cells));
var split_cells = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48331_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_cell),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48331_SHARP_))) && ((((!(cljs.core.contains_QMARK_(remove_cells,p1__48331_SHARP_)))) && (app.common.geom.shapes.grid_layout.areas.intersects_QMARK_(target_area,app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$1(p1__48331_SHARP_))))));
}),cells);
var vec__48337 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__48350,p__48351){
var vec__48353 = p__48350;
var parent__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(0),null);
var cells__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(1),null);
var vec__48356 = p__48351;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48356,(0),null);
var cur_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48356,(1),null);
if(cljs.core.contains_QMARK_(remove_cells,cur_cell)){
var vec__48361 = app.common.types.shape.layout.free_cell_push(parent__$4,cells__$1,index);
var parent__$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361,(0),null);
var cells__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent__$5,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cells__$2,cur_cell)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent__$4,cells__$1], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent__$3,cells], null),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cells));
var parent__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48337,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48337,(1),null);
var parent__$5 = cljs.core.assoc_in(parent__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_cell)], null),target_cell);
var parent__$6 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$6,cell){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(parent__$6,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell));
}),parent__$5,remove_cells);
var parent__$7 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$7,cell){
var new_areas = app.common.geom.shapes.grid_layout.areas.difference(app.common.geom.shapes.grid_layout.areas.make_area.cljs$core$IFn$_invoke$arity$1(cell),target_area);
var $ = parent__$7;
var $__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4($,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell)], null),cljs.core.merge,app.common.geom.shapes.grid_layout.areas.area__GT_cell_props(cljs.core.first(new_areas)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (parent__$8,area){
var cell__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.shape.layout.grid_cell_defaults,new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next()),app.common.geom.shapes.grid_layout.areas.area__GT_cell_props(area)], 0));
return cljs.core.assoc_in(parent__$8,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell__$1)], null),cell__$1);
}),$__$1,new_areas);
}),parent__$6,split_cells);
return parent__$7;
} else {
return parent;
}
});
app.common.types.shape.layout.get_cell_by_position = (function app$common$types$shape$layout$get_cell_by_position(parent,target_row,target_column){
return cljs.core.second(app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p__48385){
var vec__48386 = p__48385;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48386,(0),null);
var map__48389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48386,(1),null);
var map__48389__$1 = cljs.core.__destructure_map(map__48389);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
return (((target_row >= row)) && ((((target_column >= column)) && ((((target_column < (column + column_span))) && ((target_row < (row + row_span))))))));
}),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent)));
});
app.common.types.shape.layout.get_cell_by_shape_id = (function app$common$types$shape$layout$get_cell_by_shape_id(parent,shape_id){
return cljs.core.second(app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p__48392){
var vec__48393 = p__48392;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48393,(0),null);
var map__48396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48393,(1),null);
var map__48396__$1 = cljs.core.__destructure_map(map__48396);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48396__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
return cljs.core.contains_QMARK_(cljs.core.set(shapes),shape_id);
}),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent)));
});
app.common.types.shape.layout.swap_shapes = (function app$common$types$shape$layout$swap_shapes(parent,id_from,id_to){
var cell_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187)),id_to);
var cell_from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187)),id_from);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),id_from], null),cljs.core.assoc,new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell_to),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell_to)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),id_to], null),cljs.core.assoc,new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cell_from),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell_from)], 0));
});
app.common.types.shape.layout.add_children_to_cell = (function app$common$types$shape$layout$add_children_to_cell(frame,children,objects,p__48405){
var vec__48406 = p__48405;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48406,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48406,(1),null);
var cell = vec__48406;
var frame__$1 = app.common.types.shape.layout.assign_cells(cljs.core.update.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__48403_SHARP_){
return app.common.data.removev(children,p1__48403_SHARP_);
})),objects);
var children__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48404_SHARP_){
return app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__48404_SHARP_);
}),children);
return app.common.types.shape.layout.assign_cells((function (){var G__48409 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(frame__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879),app.common.data.concat_vec,children__$1);
if((!((cell == null)))){
return app.common.types.shape.layout.push_into_cell(G__48409,children__$1,row,column);
} else {
return G__48409;
}
})(),objects);
});
app.common.types.shape.layout.get_cell_by_index = (function app$common$types$shape$layout$get_cell_by_index(parent,to_index){
var cells = app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$2(parent,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sort?","sort?",-567661924),true,new cljs.core.Keyword(null,"remove-empty?","remove-empty?",-2004264696),true], null));
var to_index__$1 = ((cljs.core.count(cells) - to_index) - (1));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cells,to_index__$1,null);
});
app.common.types.shape.layout.add_children_to_index = (function app$common$types$shape$layout$add_children_to_index(parent,ids,objects,to_index){
var target_cell = app.common.types.shape.layout.get_cell_by_index(parent,to_index);
var G__48411 = parent;
if((!((target_cell == null)))){
return app.common.types.shape.layout.add_children_to_cell(G__48411,ids,objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(target_cell),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(target_cell)], null));
} else {
return G__48411;
}
});
app.common.types.shape.layout.reorder_grid_children = (function app$common$types$shape$layout$reorder_grid_children(parent){
var cells = app.common.types.shape.layout.get_cells.cljs$core$IFn$_invoke$arity$2(parent,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort?","sort?",-567661924),true], null));
var child_QMARK_ = cljs.core.set(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent));
var new_shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"shapes","shapes",1897594879))),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(child_QMARK_)),cells);
var new_shapes__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_shapes,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(new_shapes__$1)));
});
app.common.types.shape.layout.cells_by_row = (function app$common$types$shape$layout$cells_by_row(var_args){
var G__48420 = arguments.length;
switch (G__48420) {
case 2:
return app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$2 = (function (parent,index){
return app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$3(parent,index,true);
}));

(app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$3 = (function (parent,index,check_span_QMARK_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48426){
var map__48427 = p__48426;
var map__48427__$1 = cljs.core.__destructure_map(map__48427);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48427__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48427__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
if(cljs.core.truth_(check_span_QMARK_)){
return ((((index + (1)) >= row)) && (((index + (1)) < (row + row_span))));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),row);
}
}),cljs.core.vals(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent)));
}));

(app.common.types.shape.layout.cells_by_row.cljs$lang$maxFixedArity = 3);

app.common.types.shape.layout.cells_by_column = (function app$common$types$shape$layout$cells_by_column(var_args){
var G__48430 = arguments.length;
switch (G__48430) {
case 2:
return app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$2 = (function (parent,index){
return app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$3(parent,index,true);
}));

(app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$3 = (function (parent,index,check_span_QMARK_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48432){
var map__48433 = p__48432;
var map__48433__$1 = cljs.core.__destructure_map(map__48433);
var cell = map__48433__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48433__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48433__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
if(cljs.core.truth_(check_span_QMARK_)){
return ((((index + (1)) >= column)) && (((index + (1)) < (column + column_span))));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((index + (1)),column);
}
}),cljs.core.vals(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent)));
}));

(app.common.types.shape.layout.cells_by_column.cljs$lang$maxFixedArity = 3);

app.common.types.shape.layout.cells_in_area = (function app$common$types$shape$layout$cells_in_area(parent,first_row,last_row,first_column,last_column){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48440){
var map__48441 = p__48440;
var map__48441__$1 = cljs.core.__destructure_map(map__48441);
var cell = map__48441__$1;
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48441__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48441__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48441__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48441__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
return (((((((row <= first_row)) && ((first_row <= ((row + row_span) + (-1)))))) || ((((((row <= last_row)) && ((last_row <= ((row + row_span) + (-1)))))) || ((((((first_row <= row)) && ((row <= last_row)))) || ((((first_row <= ((row + row_span) + (-1)))) && ((((row + row_span) + (-1)) <= last_row)))))))))) && ((((((column <= first_column)) && ((first_column <= ((column + column_span) + (-1)))))) || ((((((column <= last_column)) && ((last_column <= ((column + column_span) + (-1)))))) || ((((((first_column <= column)) && ((column <= last_column)))) || ((((first_column <= ((column + column_span) + (-1)))) && ((((column + column_span) + (-1)) <= last_column)))))))))));
}),cljs.core.vals(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(parent)));
});
/**
 * Find all the shapes for a given row
 */
app.common.types.shape.layout.shapes_by_row = (function app$common$types$shape$layout$shapes_by_row(var_args){
var G__48448 = arguments.length;
switch (G__48448) {
case 2:
return app.common.types.shape.layout.shapes_by_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape.layout.shapes_by_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.shapes_by_row.cljs$core$IFn$_invoke$arity$2 = (function (parent,index){
return app.common.types.shape.layout.shapes_by_row.cljs$core$IFn$_invoke$arity$3(parent,index,true);
}));

(app.common.types.shape.layout.shapes_by_row.cljs$core$IFn$_invoke$arity$3 = (function (parent,index,check_span_QMARK_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.shape.layout.cells_by_row.cljs$core$IFn$_invoke$arity$3(parent,index,check_span_QMARK_)], 0));
}));

(app.common.types.shape.layout.shapes_by_row.cljs$lang$maxFixedArity = 3);

/**
 * Find all the shapes for a given column
 */
app.common.types.shape.layout.shapes_by_column = (function app$common$types$shape$layout$shapes_by_column(var_args){
var G__48451 = arguments.length;
switch (G__48451) {
case 2:
return app.common.types.shape.layout.shapes_by_column.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.shape.layout.shapes_by_column.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.shape.layout.shapes_by_column.cljs$core$IFn$_invoke$arity$2 = (function (parent,index){
return app.common.types.shape.layout.shapes_by_column.cljs$core$IFn$_invoke$arity$3(parent,index,true);
}));

(app.common.types.shape.layout.shapes_by_column.cljs$core$IFn$_invoke$arity$3 = (function (parent,index,check_span_QMARK_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.shape.layout.cells_by_column.cljs$core$IFn$_invoke$arity$3(parent,index,check_span_QMARK_)], 0));
}));

(app.common.types.shape.layout.shapes_by_column.cljs$lang$maxFixedArity = 3);

/**
 * Given a group of cells returns the coordinates that define
 */
app.common.types.shape.layout.cells_coordinates = (function app$common$types$shape$layout$cells_coordinates(cells){
var cells__$1 = cljs.core.seq(cells);
var result = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"first-row","first-row",-111793911),Infinity,new cljs.core.Keyword(null,"first-column","first-column",22621775),Infinity,new cljs.core.Keyword(null,"last-row","last-row",388121667),-Infinity,new cljs.core.Keyword(null,"last-column","last-column",2053855408),-Infinity,new cljs.core.Keyword(null,"cell-coords","cell-coords",-1095377947),cljs.core.PersistentHashSet.EMPTY], null);
while(true){
if(cljs.core.empty_QMARK_(cells__$1)){
return result;
} else {
var map__48483 = result;
var map__48483__$1 = cljs.core.__destructure_map(map__48483);
var first_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48483__$1,new cljs.core.Keyword(null,"first-row","first-row",-111793911));
var last_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48483__$1,new cljs.core.Keyword(null,"last-row","last-row",388121667));
var first_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48483__$1,new cljs.core.Keyword(null,"first-column","first-column",22621775));
var last_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48483__$1,new cljs.core.Keyword(null,"last-column","last-column",2053855408));
var cell_coords = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48483__$1,new cljs.core.Keyword(null,"cell-coords","cell-coords",-1095377947));
var current = cljs.core.first(cells__$1);
var first_row__$1 = (((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(current) < first_row))?new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(current):first_row);
var last_row__$1 = (((((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(current) + new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(current)) + (-1)) > last_row))?((new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(current) + new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(current)) + (-1)):last_row);
var first_column__$1 = (((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(current) < first_column))?new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(current):first_column);
var last_column__$1 = (((((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(current) + new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(current)) + (-1)) > last_column))?((new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(current) + new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(current)) + (-1)):last_column);
var cell_coords__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cell_coords,(function (){var iter__5503__auto__ = ((function (cells__$1,result,map__48483,map__48483__$1,first_row,last_row,first_column,last_column,cell_coords,current,first_row__$1,last_row__$1,first_column__$1,last_column__$1){
return (function app$common$types$shape$layout$cells_coordinates_$_iter__48486(s__48487){
return (new cljs.core.LazySeq(null,((function (cells__$1,result,map__48483,map__48483__$1,first_row,last_row,first_column,last_column,cell_coords,current,first_row__$1,last_row__$1,first_column__$1,last_column__$1){
return (function (){
var s__48487__$1 = s__48487;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48487__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var r = cljs.core.first(xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__48487__$1,cells__$1,result,r,xs__6385__auto__,temp__5825__auto__,map__48483,map__48483__$1,first_row,last_row,first_column,last_column,cell_coords,current,first_row__$1,last_row__$1,first_column__$1,last_column__$1){
return (function app$common$types$shape$layout$cells_coordinates_$_iter__48486_$_iter__48488(s__48489){
return (new cljs.core.LazySeq(null,((function (s__48487__$1,cells__$1,result,r,xs__6385__auto__,temp__5825__auto__,map__48483,map__48483__$1,first_row,last_row,first_column,last_column,cell_coords,current,first_row__$1,last_row__$1,first_column__$1,last_column__$1){
return (function (){
var s__48489__$1 = s__48489;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__48489__$1);
if(temp__5825__auto____$1){
var s__48489__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48489__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48489__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48491 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48490 = (0);
while(true){
if((i__48490 < size__5502__auto__)){
var c = cljs.core._nth(c__5501__auto__,i__48490);
cljs.core.chunk_append(b__48491,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__48847 = (i__48490 + (1));
i__48490 = G__48847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48491),app$common$types$shape$layout$cells_coordinates_$_iter__48486_$_iter__48488(cljs.core.chunk_rest(s__48489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48491),null);
}
} else {
var c = cljs.core.first(s__48489__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),app$common$types$shape$layout$cells_coordinates_$_iter__48486_$_iter__48488(cljs.core.rest(s__48489__$2)));
}
} else {
return null;
}
break;
}
});})(s__48487__$1,cells__$1,result,r,xs__6385__auto__,temp__5825__auto__,map__48483,map__48483__$1,first_row,last_row,first_column,last_column,cell_coords,current,first_row__$1,last_row__$1,first_column__$1,last_column__$1))
,null,null));
});})(s__48487__$1,cells__$1,result,r,xs__6385__auto__,temp__5825__auto__,map__48483,map__48483__$1,first_row,last_row,first_column,last_column,cell_coords,current,first_row__$1,last_row__$1,first_column__$1,last_column__$1))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(current),(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(current) + new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(current)))));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,app$common$types$shape$layout$cells_coordinates_$_iter__48486(cljs.core.rest(s__48487__$1)));
} else {
var G__48849 = cljs.core.rest(s__48487__$1);
s__48487__$1 = G__48849;
continue;
}
} else {
return null;
}
break;
}
});})(cells__$1,result,map__48483,map__48483__$1,first_row,last_row,first_column,last_column,cell_coords,current,first_row__$1,last_row__$1,first_column__$1,last_column__$1))
,null,null));
});})(cells__$1,result,map__48483,map__48483__$1,first_row,last_row,first_column,last_column,cell_coords,current,first_row__$1,last_row__$1,first_column__$1,last_column__$1))
;
return iter__5503__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(current),(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(current) + new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(current))));
})());
var G__48851 = cljs.core.rest(cells__$1);
var G__48852 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"first-row","first-row",-111793911),first_row__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-row","last-row",388121667),last_row__$1,new cljs.core.Keyword(null,"first-column","first-column",22621775),first_column__$1,new cljs.core.Keyword(null,"last-column","last-column",2053855408),last_column__$1,new cljs.core.Keyword(null,"cell-coords","cell-coords",-1095377947),cell_coords__$1], 0));
cells__$1 = G__48851;
result = G__48852;
continue;
}
break;
}
});
app.common.types.shape.layout.valid_area_cells_QMARK_ = (function app$common$types$shape$layout$valid_area_cells_QMARK_(cells){
var map__48509 = app.common.types.shape.layout.cells_coordinates(cells);
var map__48509__$1 = cljs.core.__destructure_map(map__48509);
var first_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48509__$1,new cljs.core.Keyword(null,"first-row","first-row",-111793911));
var last_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48509__$1,new cljs.core.Keyword(null,"last-row","last-row",388121667));
var first_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48509__$1,new cljs.core.Keyword(null,"first-column","first-column",22621775));
var last_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48509__$1,new cljs.core.Keyword(null,"last-column","last-column",2053855408));
var cell_coords = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48509__$1,new cljs.core.Keyword(null,"cell-coords","cell-coords",-1095377947));
return cljs.core.every_QMARK_((function (p1__48505_SHARP_){
return cljs.core.contains_QMARK_(cell_coords,p1__48505_SHARP_);
}),(function (){var iter__5503__auto__ = (function app$common$types$shape$layout$valid_area_cells_QMARK__$_iter__48516(s__48517){
return (new cljs.core.LazySeq(null,(function (){
var s__48517__$1 = s__48517;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48517__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var r = cljs.core.first(xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__48517__$1,r,xs__6385__auto__,temp__5825__auto__,map__48509,map__48509__$1,first_row,last_row,first_column,last_column,cell_coords){
return (function app$common$types$shape$layout$valid_area_cells_QMARK__$_iter__48516_$_iter__48518(s__48519){
return (new cljs.core.LazySeq(null,((function (s__48517__$1,r,xs__6385__auto__,temp__5825__auto__,map__48509,map__48509__$1,first_row,last_row,first_column,last_column,cell_coords){
return (function (){
var s__48519__$1 = s__48519;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__48519__$1);
if(temp__5825__auto____$1){
var s__48519__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48519__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48519__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48521 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48520 = (0);
while(true){
if((i__48520 < size__5502__auto__)){
var c = cljs.core._nth(c__5501__auto__,i__48520);
cljs.core.chunk_append(b__48521,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__48855 = (i__48520 + (1));
i__48520 = G__48855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48521),app$common$types$shape$layout$valid_area_cells_QMARK__$_iter__48516_$_iter__48518(cljs.core.chunk_rest(s__48519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48521),null);
}
} else {
var c = cljs.core.first(s__48519__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),app$common$types$shape$layout$valid_area_cells_QMARK__$_iter__48516_$_iter__48518(cljs.core.rest(s__48519__$2)));
}
} else {
return null;
}
break;
}
});})(s__48517__$1,r,xs__6385__auto__,temp__5825__auto__,map__48509,map__48509__$1,first_row,last_row,first_column,last_column,cell_coords))
,null,null));
});})(s__48517__$1,r,xs__6385__auto__,temp__5825__auto__,map__48509,map__48509__$1,first_row,last_row,first_column,last_column,cell_coords))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_column,(last_column + (1)))));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,app$common$types$shape$layout$valid_area_cells_QMARK__$_iter__48516(cljs.core.rest(s__48517__$1)));
} else {
var G__48857 = cljs.core.rest(s__48517__$1);
s__48517__$1 = G__48857;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_row,(last_row + (1))));
})());
});
/**
 * Remaps the shapes ids inside the cells
 */
app.common.types.shape.layout.remap_grid_cells = (function app$common$types$shape$layout$remap_grid_cells(shape,ids_map){
var remap_shape = (function (id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(ids_map,id,id);
});
var remap_cell = (function (cell){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__48534_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(remap_shape),p1__48534_SHARP_);
}));
});
var shape__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cljs.core.update_vals,remap_cell);
return shape__$1;
});
/**
 * Given target cells update with source cells while trying to keep target as
 *   untouched as possible
 */
app.common.types.shape.layout.merge_cells = (function app$common$types$shape$layout$merge_cells(target_cells,source_cells,omit_touched_QMARK_){
if(cljs.core.truth_(omit_touched_QMARK_)){
var merge_cells = (function app$common$types$shape$layout$merge_cells_$_merge_cells(source_cell,target_cell){
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(source_cell,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(target_cell,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"row-span","row-span",-365554241),new cljs.core.Keyword(null,"column-span","column-span",1302376857)], 0)));
});
var deleted_cells = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__48535_SHARP_){
return (!(cljs.core.contains_QMARK_(source_cells,p1__48535_SHARP_)));
})),cljs.core.keys(target_cells));
var touched_cells = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__48536_SHARP_){
return (!(cljs.core.contains_QMARK_(deleted_cells,p1__48536_SHARP_)));
})),cljs.core.keys(target_cells));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cells,id){
return app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(cells,id,merge_cells,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(target_cells,id)], 0));
}),source_cells,touched_cells);
} else {
return source_cells;
}
});
/**
 * Changes the sizing to fix if it's fill
 */
app.common.types.shape.layout.toggle_fix_if_auto = (function app$common$types$shape$layout$toggle_fix_if_auto(shape){
var G__48538 = shape;
var G__48538__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"fill","fill",883462889)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48538,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__48538);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"fill","fill",883462889))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48538__$1,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fix","fix",-1031773329));
} else {
return G__48538__$1;
}
});

//# sourceMappingURL=app.common.types.shape.layout.js.map
