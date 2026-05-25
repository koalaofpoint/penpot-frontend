import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.attrs.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.component.js";
import "./app.common.types.path.js";
import "./app.common.types.shape.attrs.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.text.js";
import "./app.common.types.token.js";
import "./app.common.weak.js";
import "./app.main.refs.js";
import "./app.main.ui.workspace.sidebar.options.menus.blur.js";
import "./app.main.ui.workspace.sidebar.options.menus.color_selection.js";
import "./app.main.ui.workspace.sidebar.options.menus.component.js";
import "./app.main.ui.workspace.sidebar.options.menus.constraints.js";
import "./app.main.ui.workspace.sidebar.options.menus.exports.js";
import "./app.main.ui.workspace.sidebar.options.menus.fill.js";
import "./app.main.ui.workspace.sidebar.options.menus.layer.js";
import "./app.main.ui.workspace.sidebar.options.menus.layout_container.js";
import "./app.main.ui.workspace.sidebar.options.menus.layout_item.js";
import "./app.main.ui.workspace.sidebar.options.menus.measures.js";
import "./app.main.ui.workspace.sidebar.options.menus.shadow.js";
import "./app.main.ui.workspace.sidebar.options.menus.stroke.js";
import "./app.main.ui.workspace.sidebar.options.menus.text.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.shapes.multiple');
app.main.ui.workspace.sidebar.options.shapes.multiple.type__GT_read_mode = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"text","text",-1790561697)],[cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"children","children",-940561982)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"children","children",-940561982)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"ignore","ignore",-1631542033)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"text","text",-1790561697)])]);
app.main.ui.workspace.sidebar.options.shapes.multiple.group__GT_attrs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"layout-container","layout-container",684815305),new cljs.core.Keyword(null,"measure","measure",-1857519826),new cljs.core.Keyword(null,"exports","exports",-745008272),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"text","text",-1790561697)],[app.main.ui.workspace.sidebar.options.menus.constraints.constraint_attrs,app.main.ui.workspace.sidebar.options.menus.stroke.stroke_attrs,app.main.ui.workspace.sidebar.options.menus.layout_item.layout_item_attrs,app.main.ui.workspace.sidebar.options.menus.fill.fill_attrs,app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_flex_attrs,app.main.ui.workspace.sidebar.options.menus.measures.measure_attrs,app.main.ui.workspace.sidebar.options.menus.exports.exports_attrs,app.main.ui.workspace.sidebar.options.menus.layer.layer_attrs,app.main.ui.workspace.sidebar.options.menus.blur.blur_attrs,app.main.ui.workspace.sidebar.options.menus.shadow.shadow_attrs,app.common.types.text.text_all_attrs]);
app.main.ui.workspace.sidebar.options.shapes.multiple.shadow_keys = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"spread","spread",862337191),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null);
/**
 * Function to check if two shadows are equivalent to the multiple selection (ignores their ids)
 */
app.main.ui.workspace.sidebar.options.shapes.multiple.shadow_eq = (function app$main$ui$workspace$sidebar$options$shapes$multiple$shadow_eq(s1,s2){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s1),cljs.core.count(s2))) && (cljs.core.every_QMARK_((function (p__55974){
var vec__55975 = p__55974;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55975,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55975,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(v1,app.main.ui.workspace.sidebar.options.shapes.multiple.shadow_keys),cljs.core.select_keys(v2,app.main.ui.workspace.sidebar.options.shapes.multiple.shadow_keys));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,s1,s2))));
});
/**
 * Function to select the attributes that interest us for the multiple selections
 */
app.main.ui.workspace.sidebar.options.shapes.multiple.shadow_sel = (function app$main$ui$workspace$sidebar$options$shapes$multiple$shadow_sel(v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55978_SHARP_){
return cljs.core.select_keys(p1__55978_SHARP_,app.main.ui.workspace.sidebar.options.shapes.multiple.shadow_keys);
}),v);
});
app.main.ui.workspace.sidebar.options.shapes.multiple.blur_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null);
/**
 * Checks if two blurs are equivalent for the multiple selection
 */
app.main.ui.workspace.sidebar.options.shapes.multiple.blur_eq = (function app$main$ui$workspace$sidebar$options$shapes$multiple$blur_eq(v1,v2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(v1,app.main.ui.workspace.sidebar.options.shapes.multiple.blur_keys),cljs.core.select_keys(v2,app.main.ui.workspace.sidebar.options.shapes.multiple.blur_keys));
});
/**
 * Select interesting keys for multiple selection
 */
app.main.ui.workspace.sidebar.options.shapes.multiple.blur_sel = (function app$main$ui$workspace$sidebar$options$shapes$multiple$blur_sel(v){
if(cljs.core.truth_(v)){
return cljs.core.select_keys(v,app.main.ui.workspace.sidebar.options.shapes.multiple.blur_keys);
} else {
return null;
}
});
/**
 * Given a group of attributes that we want to extract and the shapes to extract them from
 *   returns a list of tuples [id, values] with the extracted properties for the shapes that
 *   applies (some of them ignore some attributes)
 */
app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs_STAR_ = (function app$main$ui$workspace$sidebar$options$shapes$multiple$get_attrs_STAR_(shapes,objects,attr_group){
var attrs = (app.main.ui.workspace.sidebar.options.shapes.multiple.group__GT_attrs.cljs$core$IFn$_invoke$arity$1 ? app.main.ui.workspace.sidebar.options.shapes.multiple.group__GT_attrs.cljs$core$IFn$_invoke$arity$1(attr_group) : app.main.ui.workspace.sidebar.options.shapes.multiple.group__GT_attrs.call(null,attr_group));
var merge_attrs = (function (v1,v2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_group,new cljs.core.Keyword(null,"shadow","shadow",873231803))){
return app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,v2], null),attrs,app.main.ui.workspace.sidebar.options.shapes.multiple.shadow_eq,app.main.ui.workspace.sidebar.options.shapes.multiple.shadow_sel);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_group,new cljs.core.Keyword(null,"blur","blur",-453500461))){
return app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,v2], null),attrs,app.main.ui.workspace.sidebar.options.shapes.multiple.blur_eq,app.main.ui.workspace.sidebar.options.shapes.multiple.blur_sel);
} else {
return app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,v2], null),attrs);

}
}
});
var merge_attr = (function (acc,applied_tokens,t_attr){

var new_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,t_attr);
var existing = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,t_attr,new cljs.core.Keyword("app.main.ui.workspace.sidebar.options.shapes.multiple","not-found","app.main.ui.workspace.sidebar.options.shapes.multiple/not-found",-1070649517));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(existing,new cljs.core.Keyword("app.main.ui.workspace.sidebar.options.shapes.multiple","not-found","app.main.ui.workspace.sidebar.options.shapes.multiple/not-found",-1070649517))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,t_attr,new_val);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(existing,new_val)){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,t_attr,new cljs.core.Keyword(null,"multiple","multiple",1244445549));

}
}
});
var merge_shape_attr = (function (acc,applied_tokens,shape_attr){

var token_attrs = app.common.types.token.shape_attr__GT_token_attrs.cljs$core$IFn$_invoke$arity$1(shape_attr);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__55979_SHARP_,p2__55980_SHARP_){
return merge_attr(p1__55979_SHARP_,applied_tokens,p2__55980_SHARP_);
}),acc,token_attrs);
});
var merge_token_values = (function (acc,shape_attrs,applied_tokens){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__55981_SHARP_,p2__55982_SHARP_){
return merge_shape_attr(p1__55981_SHARP_,applied_tokens,p2__55982_SHARP_);
}),acc,shape_attrs);
});
var extract_attrs = (function (p__55985,p__55986){
var vec__55987 = p__55985;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55987,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55987,(1),null);
var token_acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55987,(2),null);
var map__55990 = p__55986;
var map__55990__$1 = cljs.core.__destructure_map(map__55990);
var shape = map__55990__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55990__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55990__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var applied_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55990__$1,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
var read_mode = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.options.shapes.multiple.type__GT_read_mode,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attr_group], null));
var editable_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.attrs.editable_attrs,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)),attrs);
var G__55991 = read_mode;
var G__55991__$1 = (((G__55991 instanceof cljs.core.Keyword))?G__55991.fqn:null);
switch (G__55991__$1) {
case "ignore":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ids,values], null);

break;
case "shape":
var shape_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__55983_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__55983_SHARP_,null],null));
})),editable_attrs),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_group,new cljs.core.Keyword(null,"measure","measure",-1857519826)))?app.main.ui.workspace.sidebar.options.menus.measures.select_measure_keys(shape):cljs.core.select_keys(shape,editable_attrs)
)], 0));
var new_token_acc = merge_token_values(token_acc,editable_attrs,applied_tokens);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ids,id),merge_attrs(values,shape_values),new_token_acc], null);

break;
case "text":
var shape_attrs = cljs.core.select_keys(shape,attrs);
var content_attrs = app.common.attrs.get_text_attrs_multi(shape,app.common.types.text.default_text_attrs,attrs);
var new_values = merge_attrs(merge_attrs(values,shape_attrs),content_attrs);
var new_token_acc = merge_token_values(token_acc,content_attrs,applied_tokens);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ids,id),new_values,new_token_acc], null);

break;
case "children":
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55984_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__55984_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$2(shape,cljs.core.PersistentVector.EMPTY));
var vec__55992 = (app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs_STAR_.cljs$core$IFn$_invoke$arity$3 ? app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs_STAR_.cljs$core$IFn$_invoke$arity$3(children,objects,attr_group) : app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs_STAR_.call(null,children,objects,attr_group));
var new_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55992,(0),null);
var new_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55992,(1),null);
var tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55992,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_ids], 0)),merge_attrs(values,new_values),tokens], null);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(extract_attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),shapes);
});
app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs = app.common.weak.memoize(app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs_STAR_);
app.main.ui.workspace.sidebar.options.shapes.multiple.is_bool_descendant_QMARK_ = (function app$main$ui$workspace$sidebar$options$shapes$multiple$is_bool_descendant_QMARK_(objects,selected_shape_ids,shape){
while(true){
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
if((shape == null)){
return false;
} else {
if(cljs.core.contains_QMARK_(selected_shape_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))){
return false;
} else {
if(app.common.files.helpers.bool_shape_QMARK_(parent)){
return true;
} else {
var G__56066 = objects;
var G__56067 = selected_shape_ids;
var G__56068 = parent;
objects = G__56066;
selected_shape_ids = G__56067;
shape = G__56068;
continue;

}
}
}
break;
}
});
app.main.ui.workspace.sidebar.options.shapes.multiple.check_options_props = (function app$main$ui$workspace$sidebar$options$shapes$multiple$check_options_props(new_props,old_props){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props["shapes"]),(old_props["shapes"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props["shapesWithChildren"]),(old_props["shapesWithChildren"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props["pageId"]),(old_props["pageId"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props["fileId"]),(old_props["fileId"]))))))));
});
app.main.ui.workspace.sidebar.options.shapes.multiple.options_STAR_ = (function (p1__55995_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__55995_SHARP_,app.main.ui.workspace.sidebar.options.shapes.multiple.check_options_props);
})((function app$main$ui$workspace$sidebar$options$shapes$multiple$options_STAR_(props_55997){
var shapes_with_children = props_55997.shapesWithChildren;
var shapes = props_55997.shapes;
var file_id = props_55997.fileId;
var libraries = props_55997.libraries;
var page_id = props_55997.pageId;
var props = props_55997;
var shape_ids = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.data.xf_COLON_map_id,shapes);
}));
var is_layout_child_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_ids)],(function (){
return app.main.refs.is_layout_child_QMARK_(shape_ids);
}));
var is_layout_child_QMARK_ = rumext.v2.deref(is_layout_child_ref);
var is_flex_parent_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_ids)],(function (){
return app.main.refs.flex_layout_child_QMARK_(shape_ids);
}));
var is_flex_parent_QMARK_ = rumext.v2.deref(is_flex_parent_ref);
var is_grid_parent_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_ids)],(function (){
return app.main.refs.grid_layout_child_QMARK_(shape_ids);
}));
var is_grid_parent_QMARK_ = rumext.v2.deref(is_grid_parent_ref);
var has_flex_layout_container_QMARK_ = cljs.core.some(app.common.types.shape.layout.flex_layout_QMARK_,shapes);
var all_layout_child_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_ids)],(function (){
return app.main.refs.all_layout_child_QMARK_(shape_ids);
}));
var all_layout_child_QMARK_ = rumext.v2.deref(all_layout_child_ref);
var all_flex_layout_container_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return cljs.core.every_QMARK_(app.common.types.shape.layout.flex_layout_QMARK_,shapes);
}));
var show_caps_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return cljs.core.some((function (p1__55996_SHARP_){
return ((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__55996_SHARP_)) && (app.common.types.path.shape_with_open_path_QMARK_(p1__55996_SHARP_)));
}),shapes);
}));
var has_text_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return cljs.core.some(app.common.files.helpers.text_shape_QMARK_,shapes);
}));
var objects = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes_with_children)],(function (){
var objects = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes_with_children);
return cljs.core.reduce_kv((function (objects__$1,id,object){
if(app.main.ui.workspace.sidebar.options.shapes.multiple.is_bool_descendant_QMARK_(objects__$1,shape_ids,object)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(objects__$1,id);
} else {
return objects__$1;
}
}),objects,objects);
}));
var vec__55998 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var layer_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55998,(0),null);
var layer_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55998,(1),null);
var layer_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55998,(2),null);
var vec__56001 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56001,(0),null);
var text_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56001,(1),null);
var vec__56004 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"constraint","constraint",1725147424));
var constraint_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56004,(0),null);
var constraint_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56004,(1),null);
var vec__56007 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"fill","fill",883462889));
var fill_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56007,(0),null);
var fill_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56007,(1),null);
var fill_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56007,(2),null);
var vec__56010 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var shadow_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56010,(0),null);
var shadow_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56010,(1),null);
var vec__56013 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"blur","blur",-453500461));
var blur_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56013,(0),null);
var blur_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56013,(1),null);
var vec__56016 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56016,(0),null);
var stroke_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56016,(1),null);
var stroke_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56016,(2),null);
var vec__56019 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"exports","exports",-745008272));
var exports_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56019,(0),null);
var exports_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56019,(1),null);
var vec__56022 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"layout-container","layout-container",684815305));
var layout_container_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56022,(0),null);
var layout_container_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56022,(1),null);
var layout_container_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56022,(2),null);
var vec__56025 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322));
var layout_item_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56025,(0),null);
var layout_item_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56025,(1),null);
var layout_item_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56025,(2),null);
var components = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.component.instance_head_QMARK_,shapes));
}));
var workspace_modifiers = rumext.v2.deref(app.main.refs.workspace_modifiers);
var shapes__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(workspace_modifiers),rumext.v2.adapt(shapes)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (shape){
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(workspace_modifiers,shape_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers);
})),shapes);
}));
var type = new cljs.core.Keyword(null,"multiple","multiple",1244445549);
var vec__56028 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs_STAR_(shapes__$1,objects,new cljs.core.Keyword(null,"measure","measure",-1857519826));
var measure_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56028,(0),null);
var measure_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56028,(1),null);
var measure_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56028,(2),null);
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_shapes_multiple__options",'children':[((cljs.core.empty_QMARK_(layer_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layer.layer_menu_STAR_,{'type':type,'ids':layer_ids,'appliedTokens':layer_tokens,'values':layer_values})),((cljs.core.empty_QMARK_(measure_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.measures.measures_menu_STAR_,{'type':type,'ids':measure_ids,'values':measure_values,'appliedTokens':measure_tokens,'shapes':shapes__$1})),(((!((components == null))))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_menu_STAR_,{'shapes':components}):null),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_menu,{'type':type,'ids':layout_container_ids,'values':layout_container_values,'applied-tokens':layout_container_tokens,'multiple':true}),(cljs.core.truth_((function (){var or__5025__auto__ = is_layout_child_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return has_flex_layout_container_QMARK_;
}
})())?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_item.layout_item_menu,{'type':type,'ids':layout_item_ids,'is-layout-child?':all_layout_child_QMARK_,'is-layout-container?':all_flex_layout_container_QMARK_,'is-flex-parent?':is_flex_parent_QMARK_,'is-grid-parent?':is_grid_parent_QMARK_,'applied-tokens':layout_item_tokens,'values':layout_item_values}):null),((((cljs.core.empty_QMARK_(constraint_ids)) || (is_layout_child_QMARK_)))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.constraints.constraints_menu,{'ids':constraint_ids,'values':constraint_values})),((cljs.core.empty_QMARK_(text_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.text.text_menu,{'type':type,'ids':text_ids,'values':text_values})),((cljs.core.empty_QMARK_(fill_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.fill.fill_menu_STAR_,{'type':type,'ids':fill_ids,'values':fill_values,'appliedTokens':fill_tokens})),((cljs.core.empty_QMARK_(stroke_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.stroke.stroke_menu,{'type':type,'ids':stroke_ids,'show-caps':show_caps_QMARK_,'values':stroke_values,'disable-stroke-style':has_text_QMARK_,'applied-tokens':stroke_tokens})),((cljs.core.empty_QMARK_(shapes__$1))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.color_selection.color_selection_menu_STAR_,{'fileId':file_id,'type':type,'shapes':cljs.core.vals(objects),'libraries':libraries})),((cljs.core.empty_QMARK_(shadow_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.shadow.shadow_menu_STAR_,{'type':type,'ids':shadow_ids,'values':cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow_values,new cljs.core.Keyword(null,"shadow","shadow",873231803))})),((cljs.core.empty_QMARK_(blur_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.blur.blur_menu,{'type':type,'ids':blur_ids,'values':blur_values})),((cljs.core.empty_QMARK_(exports_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.exports.exports_menu_STAR_,{'type':type,'ids':exports_ids,'shapes':shapes__$1,'values':exports_values,'pageId':page_id,'fileId':file_id}))]});
}));

(app.main.ui.workspace.sidebar.options.shapes.multiple.options_STAR_.displayName = "options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.shapes.multiple.js.map
