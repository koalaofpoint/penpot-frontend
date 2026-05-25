import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.js";
import "./app.common.json.js";
import "./app.common.svg.js";
import "./app.main.ui.context.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.export$');
app.main.ui.shapes.export$.internal_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
app.main.ui.shapes.export$.include_metadata_ctx = rumext.v2.create_context(false);
app.main.ui.shapes.export$.render_xml = (function app$main$ui$shapes$export$render_xml(props_53971){
var map__53972 = rumext.v2.util.wrap_props(props_53971);
var map__53972__$1 = cljs.core.__destructure_map(map__53972);
var map__53973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53972__$1,new cljs.core.Keyword(null,"xml","xml",-1170142052));
var map__53973__$1 = cljs.core.__destructure_map(map__53973);
var node = map__53973__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53973__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53973__$1,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.map_QMARK_(node)){
var props = app.common.json.__GT_js.cljs$core$IFn$_invoke$arity$variadic(app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1(attrs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.name], 0));
return rumext.v2.create_element(app.common.data.name(tag),props,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,child){
out_arr__46744__auto__.push(rumext.v2.jsx(app$main$ui$shapes$export$render_xml,{'xml':child},cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc)));

return out_arr__46744__auto__;
}),[],content));
} else {
if(typeof node === 'string'){
return node;
} else {
return null;

}
}
});

(app.main.ui.shapes.export$.render_xml.displayName = "render-xml");

app.main.ui.shapes.export$.bool__GT_str = (function app$main$ui$shapes$export$bool__GT_str(val){
if((!((val == null)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(val);
} else {
return null;
}
});
app.main.ui.shapes.export$.touched__GT_str = (function app$main$ui$shapes$export$touched__GT_str(val){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,val));
});
app.main.ui.shapes.export$.add_factory = (function app$main$ui$shapes$export$add_factory(shape){
return (function() {
var app$main$ui$shapes$export$add_factory_$_add_BANG_ = null;
var app$main$ui$shapes$export$add_factory_$_add_BANG___2 = (function (props,attr){
return app$main$ui$shapes$export$add_factory_$_add_BANG_.cljs$core$IFn$_invoke$arity$3(props,attr,cljs.core.str);
});
var app$main$ui$shapes$export$add_factory_$_add_BANG___3 = (function (props,attr,trfn){
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,attr);
var val__$1 = (((val instanceof cljs.core.Keyword))?app.common.data.name(val):val);
var ns_attr = cuerdas.core.strip_suffix(["penpot:",app.common.data.name(attr)].join(''),"?");
var G__53981 = props;
if((!((val__$1 == null)))){
return app.util.object.set_BANG_(G__53981,ns_attr,(trfn.cljs$core$IFn$_invoke$arity$1 ? trfn.cljs$core$IFn$_invoke$arity$1(val__$1) : trfn.call(null,val__$1)));
} else {
return G__53981;
}
});
app$main$ui$shapes$export$add_factory_$_add_BANG_ = function(props,attr,trfn){
switch(arguments.length){
case 2:
return app$main$ui$shapes$export$add_factory_$_add_BANG___2.call(this,props,attr);
case 3:
return app$main$ui$shapes$export$add_factory_$_add_BANG___3.call(this,props,attr,trfn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$main$ui$shapes$export$add_factory_$_add_BANG_.cljs$core$IFn$_invoke$arity$2 = app$main$ui$shapes$export$add_factory_$_add_BANG___2;
app$main$ui$shapes$export$add_factory_$_add_BANG_.cljs$core$IFn$_invoke$arity$3 = app$main$ui$shapes$export$add_factory_$_add_BANG___3;
return app$main$ui$shapes$export$add_factory_$_add_BANG_;
})()
});
/**
 * Adds as metadata properties that we cannot deduce from the exported SVG
 */
app.main.ui.shapes.export$.add_data = (function app$main$ui$shapes$export$add_data(props,shape){
var add_BANG_ = app.main.ui.shapes.export$.add_factory(shape);
var frame_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
var group_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
var rect_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
var image_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
var text_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
var path_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
var mask_QMARK_ = (function (){var and__5023__auto__ = group_QMARK_;
if(and__5023__auto__){
return new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return and__5023__auto__;
}
})();
var bool_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
var center = app.common.geom.shapes.shape__GT_center(shape);
var G__53983 = (function (){var G__53984 = (function (){var G__53985 = (function (){var G__53986 = (function (){var G__53987 = (function (){var G__53988 = (function (){var G__53989 = add_BANG_(add_BANG_(add_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(props,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"blocked","blocked",181326681)),new cljs.core.Keyword(null,"hidden","hidden",-312506092)),new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146)),new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340)),new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391)),new cljs.core.Keyword(null,"transform","transform",1381301764)),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576)),new cljs.core.Keyword(null,"flip-x","flip-x",891276861)),new cljs.core.Keyword(null,"flip-y","flip-y",935998815)),new cljs.core.Keyword(null,"proportion","proportion",-1209284230)),new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)),"penpot:center-x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(center))),"penpot:center-y",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(center))),new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452)),new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122)),new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691));
if(frame_QMARK_){
return add_BANG_(add_BANG_(G__53989,new cljs.core.Keyword(null,"show-content","show-content",-878000465)),new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312));
} else {
return G__53989;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = frame_QMARK_;
if(and__5023__auto__){
return new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return and__5023__auto__;
}
})())){
return add_BANG_(G__53988,new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442));
} else {
return G__53988;
}
})();
if(((((rect_QMARK_) || (((image_QMARK_) || (frame_QMARK_))))) && ((!((new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(shape) == null)))))){
return add_BANG_(add_BANG_(add_BANG_(add_BANG_(G__53987,new cljs.core.Keyword(null,"r1","r1",690974900)),new cljs.core.Keyword(null,"r2","r2",252844174)),new cljs.core.Keyword(null,"r3","r3",-2027148174)),new cljs.core.Keyword(null,"r4","r4",1134323163));
} else {
return G__53987;
}
})();
if(path_QMARK_){
return add_BANG_(add_BANG_(G__53986,new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757)),new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737));
} else {
return G__53986;
}
})();
if(text_QMARK_){
return add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(G__53985,new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776)),new cljs.core.Keyword(null,"width","width",-384071477)),new cljs.core.Keyword(null,"height","height",1025178622)),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411)),new cljs.core.Keyword(null,"content","content",15833224),app.common.json.encode),new cljs.core.Keyword(null,"position-data","position-data",-499622376),app.common.json.encode);
} else {
return G__53985;
}
})();
if(cljs.core.truth_(mask_QMARK_)){
return app.util.object.set_BANG_(G__53984,"penpot:masked-group","true");
} else {
return G__53984;
}
})();
if(bool_QMARK_){
return add_BANG_(G__53983,new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459));
} else {
return G__53983;
}
});
app.main.ui.shapes.export$.add_library_refs = (function app$main$ui$shapes$export$add_library_refs(props,shape){
var add_BANG_ = app.main.ui.shapes.export$.add_factory(shape);
return add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(add_BANG_(props,new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098)),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255)),new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761)),new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279)),new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356)),new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688)),new cljs.core.Keyword(null,"component-file","component-file",-1378670433)),new cljs.core.Keyword(null,"component-id","component-id",1551113783)),new cljs.core.Keyword(null,"component-root","component-root",-485271026)),new cljs.core.Keyword(null,"main-instance","main-instance",476264761)),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329)),new cljs.core.Keyword(null,"touched","touched",-609134419),app.main.ui.shapes.export$.touched__GT_str);
});
app.main.ui.shapes.export$.prefix_keys = (function app$main$ui$shapes$export$prefix_keys(m){
var prefix_entry = (function app$main$ui$shapes$export$prefix_keys_$_prefix_entry(p__53996){
var vec__53998 = p__53996;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53998,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53998,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["penpot:",app.common.data.name(k)].join(''),v], null);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(prefix_entry),m);
});
app.main.ui.shapes.export$.export_grid_data = (function app$main$ui$shapes$export$export_grid_data(p__54001){
var map__54003 = p__54001;
var map__54003__$1 = cljs.core.__destructure_map(map__54003);
var grids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54003__$1,new cljs.core.Keyword(null,"grids","grids",44187194));
if(app.common.data.not_empty_QMARK_(grids)){
return rumext.v2.create_element("penpot:grids",({}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54004){
var map__54005 = p__54004;
var map__54005__$1 = cljs.core.__destructure_map(map__54005);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54005__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54005__$1,new cljs.core.Keyword(null,"display","display",242065432));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54005__$1,new cljs.core.Keyword(null,"params","params",710516235));
out_arr__46744__auto__.push((function (){var props = cljs.core.clj__GT_js(app.main.ui.shapes.export$.prefix_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"color","color",1011675173))));
return rumext.v2.create_element("penpot:grid",(function (){var G__54006 = app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(props,"penpot:color",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173)], null))),"penpot:opacity",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"opacity","opacity",397153780)], null))),"penpot:type",app.common.data.name(type));
if((!((display == null)))){
return app.util.object.set_BANG_(G__54006,"penpot:display",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display));
} else {
return G__54006;
}
})());
})());

return out_arr__46744__auto__;
}),[],grids));
} else {
return null;
}
});
app.main.ui.shapes.export$.export_flows = (function app$main$ui$shapes$export$export_flows(props_54011){
var map__54012 = rumext.v2.util.wrap_props(props_54011);
var map__54012__$1 = cljs.core.__destructure_map(map__54012);
var flows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54012__$1,new cljs.core.Keyword(null,"flows","flows",-1369576628));
return rumext.v2.create_element("penpot:flows",({}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54015){
var map__54016 = p__54015;
var map__54016__$1 = cljs.core.__destructure_map(map__54016);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var starting_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54016__$1,new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271));
out_arr__46744__auto__.push(rumext.v2.create_element("penpot:flow",({"id": id, "key": id, "name": name, "starting-frame": starting_frame})));

return out_arr__46744__auto__;
}),[],cljs.core.vals(flows)));
});

(app.main.ui.shapes.export$.export_flows.displayName = "export-flows");

app.main.ui.shapes.export$.export_guides = (function app$main$ui$shapes$export$export_guides(props_54017){
var map__54018 = rumext.v2.util.wrap_props(props_54017);
var map__54018__$1 = cljs.core.__destructure_map(map__54018);
var guides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54018__$1,new cljs.core.Keyword(null,"guides","guides",-1398390510));
return rumext.v2.create_element("penpot:guides",({}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54019){
var map__54020 = p__54019;
var map__54020__$1 = cljs.core.__destructure_map(map__54020);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54020__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54020__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54020__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
out_arr__46744__auto__.push(rumext.v2.create_element("penpot:guide",({"position": position, "frame-id": frame_id, "axis": app.common.data.name(axis)})));

return out_arr__46744__auto__;
}),[],cljs.core.vals(guides)));
});

(app.main.ui.shapes.export$.export_guides.displayName = "export-guides");

app.main.ui.shapes.export$.export_page = (function app$main$ui$shapes$export$export_page(props_54021){
var page = props_54021.page;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"id","id",-1388402092));
var grids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"grids","grids",44187194));
var flows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"flows","flows",-1369576628));
var guides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"guides","guides",-1398390510));
return rumext.v2.create_element("penpot:page",({"id": id}),((app.common.data.not_empty_QMARK_(grids))?(function (){var parse_grid = (function (p__54024){
var vec__54025 = p__54024;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54025,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54025,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"params","params",710516235),params], null);
});
var grids__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(parse_grid,grids);
return rumext.v2.jsx(app.main.ui.shapes.export$.export_grid_data,{'grids':grids__$1});
})():null),((app.common.data.not_empty_QMARK_(flows))?rumext.v2.jsx(app.main.ui.shapes.export$.export_flows,{'flows':flows}):null),((app.common.data.not_empty_QMARK_(guides))?rumext.v2.jsx(app.main.ui.shapes.export$.export_guides,{'guides':guides}):null));
});

(app.main.ui.shapes.export$.export_page.displayName = "export-page");

app.main.ui.shapes.export$.export_shadow_data = (function app$main$ui$shapes$export$export_shadow_data(p__54028){
var map__54029 = p__54028;
var map__54029__$1 = cljs.core.__destructure_map(map__54029);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54029__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54030){
var map__54031 = p__54030;
var map__54031__$1 = cljs.core.__destructure_map(map__54031);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54031__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54031__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54031__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54031__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54031__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54031__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54031__$1,new cljs.core.Keyword(null,"spread","spread",862337191));
out_arr__46744__auto__.push(rumext.v2.create_element("penpot:shadow",({"key": cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc), "penpot:offset-y": cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset_y), "penpot:blur": cljs.core.str.cljs$core$IFn$_invoke$arity$1(blur), "penpot:shadow-type": app.common.data.name(style), "penpot:hidden": cljs.core.str.cljs$core$IFn$_invoke$arity$1(hidden), "penpot:spread": cljs.core.str.cljs$core$IFn$_invoke$arity$1(spread), "penpot:color": cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color)), "penpot:offset-x": cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset_x), "penpot:opacity": cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color))})));

return out_arr__46744__auto__;
}),[],shadow__$1);
});
app.main.ui.shapes.export$.export_blur_data = (function app$main$ui$shapes$export$export_blur_data(p__54032){
var map__54033 = p__54032;
var map__54033__$1 = cljs.core.__destructure_map(map__54033);
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54033__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var temp__5825__auto__ = blur;
if(cljs.core.truth_(temp__5825__auto__)){
var map__54034 = temp__5825__auto__;
var map__54034__$1 = cljs.core.__destructure_map(map__54034);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54034__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54034__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54034__$1,new cljs.core.Keyword(null,"value","value",305978217));
return rumext.v2.create_element("penpot:blur",({"penpot:blur-type": app.common.data.name(type), "penpot:hidden": cljs.core.str.cljs$core$IFn$_invoke$arity$1(hidden), "penpot:value": cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)}));
} else {
return null;
}
});
app.main.ui.shapes.export$.export_exports_data = (function app$main$ui$shapes$export$export_exports_data(p__54035){
var map__54036 = p__54035;
var map__54036__$1 = cljs.core.__destructure_map(map__54036);
var exports__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54036__$1,new cljs.core.Keyword(null,"exports","exports",-745008272));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54037){
var map__54038 = p__54037;
var map__54038__$1 = cljs.core.__destructure_map(map__54038);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54038__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54038__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54038__$1,new cljs.core.Keyword(null,"type","type",1174270348));
out_arr__46744__auto__.push(rumext.v2.create_element("penpot:export",({"penpot:type": app.common.data.name(type), "key": cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc), "penpot:suffix": suffix, "penpot:scale": cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale)})));

return out_arr__46744__auto__;
}),[],exports__$1);
});
app.main.ui.shapes.export$.str__GT_style = (function app$main$ui$shapes$export$str__GT_style(style_str){
if(typeof style_str === 'string'){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54042){
var vec__54043 = p__54042;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54043,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54043,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),cljs.core.second(cljs.core.first(val))],null));
}),cljs.core.group_by(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54040_SHARP_){
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(p1__54040_SHARP_,":");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cuerdas.core.trim,cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(style_str,";"))))));
} else {
return style_str;
}
});
app.main.ui.shapes.export$.style__GT_str = (function app$main$ui$shapes$export$style__GT_str(style){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("; ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54048){
var vec__54049 = p__54048;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54049,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54049,(1),null);
return [app.common.data.name(key),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('');
}),style));
});
app.main.ui.shapes.export$.export_svg_data = (function app$main$ui$shapes$export$export_svg_data(shape){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)))?(function (){var svg_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-transform","svg-transform",-1664613325));
var svg_attrs = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.data.name,cuerdas.core.kebab),cljs.core.keys(new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772).cljs$core$IFn$_invoke$arity$1(shape))));
var svg_defs = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.name,cljs.core.keys(new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720).cljs$core$IFn$_invoke$arity$1(shape))));
return rumext.v2.create_element("penpot:svg-import",({"penpot:svg-viewbox-x": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),new cljs.core.Keyword(null,"x","x",2099068185)], null)), "penpot:svg-viewbox-y": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),new cljs.core.Keyword(null,"y","y",-1757859776)], null)), "penpot:svg-viewbox-width": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),new cljs.core.Keyword(null,"width","width",-384071477)], null)), "penpot:svg-attrs": ((cljs.core.empty_QMARK_(svg_attrs))?null:svg_attrs), "penpot:svg-defs": ((cljs.core.empty_QMARK_(svg_defs))?null:svg_defs), "penpot:svg-viewbox-height": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146),new cljs.core.Keyword(null,"height","height",1025178622)], null)), "penpot:svg-filter": ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"filter","filter",-948537934)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"filter","filter",-948537934)], null)):null), "penpot:svg-transform": (cljs.core.truth_(svg_transform)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(svg_transform):null), "penpot:svg-style": ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"style","style",-496642736)))?app.main.ui.shapes.export$.style__GT_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"style","style",-496642736)], null))):null)}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54062){
var vec__54063 = p__54062;
var def_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(0),null);
var def_xml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54063,(1),null);
out_arr__46744__auto__.push(rumext.v2.create_element("penpot:svg-def",({"def-id": def_id, "key": cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc)}),rumext.v2.jsx(app.main.ui.shapes.export$.render_xml,{'xml':def_xml})));

return out_arr__46744__auto__;
}),[],new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720).cljs$core$IFn$_invoke$arity$1(shape)));
})():null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202)))?(function (){var shape__$1 = app.common.data.update_in_when(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736)], null),app.main.ui.shapes.export$.str__GT_style);
var props = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.create(),"penpot:x",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape__$1)),"penpot:y",new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape__$1)),"penpot:width",new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape__$1)),"penpot:height",new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape__$1)),"penpot:tag",app.common.data.name(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)))),cljs.core.clj__GT_js(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null))));
return rumext.v2.create_element("penpot:svg-content",props,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,leaf){
out_arr__46744__auto__.push(rumext.v2.jsx("penpot:svg-child",{'children':leaf},cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc)));

return out_arr__46744__auto__;
}),[],cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape__$1)))));
})():null)]});
});
app.main.ui.shapes.export$.export_fills_data = (function app$main$ui$shapes$export$export_fills_data(p__54070){
var map__54071 = p__54070;
var map__54071__$1 = cljs.core.__destructure_map(map__54071);
var fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54071__$1,new cljs.core.Keyword(null,"fills","fills",902966780));
var temp__5825__auto__ = cljs.core.seq(fills);
if(temp__5825__auto__){
var fills__$1 = temp__5825__auto__;
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
return rumext.v2.create_element("penpot:fills",({}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54073){
var vec__54074 = p__54073;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54074,(0),null);
var fill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54074,(1),null);
out_arr__46744__auto__.push((function (){var fill_image_id = ""+"fill-image-"+(render_id ?? "")+"-"+(index ?? "");
return rumext.v2.create_element("penpot:fill",({"penpot:fill-color": (((!((new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(fill) == null))))?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("url(#%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["fill-color-gradient-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(render_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], 0)):app.common.data.name(new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(fill))
), "key": cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc), "penpot:fill-image-id": (cljs.core.truth_(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(fill))?fill_image_id:null), "penpot:fill-color-ref-file": app.common.data.name(new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255).cljs$core$IFn$_invoke$arity$1(fill)), "penpot:fill-color-ref-id": app.common.data.name(new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098).cljs$core$IFn$_invoke$arity$1(fill)), "penpot:fill-opacity": app.common.data.name(new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(fill))}));
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(fills__$1)));
} else {
return null;
}
});
app.main.ui.shapes.export$.export_strokes_data = (function app$main$ui$shapes$export$export_strokes_data(p__54077){
var map__54078 = p__54077;
var map__54078__$1 = cljs.core.__destructure_map(map__54078);
var strokes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54078__$1,new cljs.core.Keyword(null,"strokes","strokes",-1645650952));
var temp__5825__auto__ = cljs.core.seq(strokes);
if(temp__5825__auto__){
var strokes__$1 = temp__5825__auto__;
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
return rumext.v2.create_element("penpot:strokes",({}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54079){
var vec__54080 = p__54079;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54080,(0),null);
var stroke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54080,(1),null);
out_arr__46744__auto__.push((function (){var stroke_image_id = ""+"stroke-image-"+(render_id ?? "")+"-"+(index ?? "");
return rumext.v2.create_element("penpot:stroke",({"penpot:stroke-alignment": app.common.data.name(new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340).cljs$core$IFn$_invoke$arity$1(stroke)), "key": cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc), "penpot:stroke-image-id": (cljs.core.truth_(new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214).cljs$core$IFn$_invoke$arity$1(stroke))?stroke_image_id:null), "penpot:stroke-color": (((!((new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260).cljs$core$IFn$_invoke$arity$1(stroke) == null))))?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("url(#%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["stroke-color-gradient-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(render_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], 0)):app.common.data.name(new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(stroke))
), "penpot:stroke-opacity": app.common.data.name(new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159).cljs$core$IFn$_invoke$arity$1(stroke)), "penpot:stroke-width": app.common.data.name(new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(stroke)), "penpot:stroke-style": app.common.data.name(new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146).cljs$core$IFn$_invoke$arity$1(stroke)), "penpot:stroke-cap-start": app.common.data.name(new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757).cljs$core$IFn$_invoke$arity$1(stroke)), "penpot:stroke-color-ref-file": app.common.data.name(new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279).cljs$core$IFn$_invoke$arity$1(stroke)), "penpot:stroke-color-ref-id": app.common.data.name(new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761).cljs$core$IFn$_invoke$arity$1(stroke)), "penpot:stroke-cap-end": app.common.data.name(new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737).cljs$core$IFn$_invoke$arity$1(stroke))}));
})());

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(strokes__$1)));
} else {
return null;
}
});
app.main.ui.shapes.export$.export_interactions_data = (function app$main$ui$shapes$export$export_interactions_data(p__54084){
var map__54085 = p__54084;
var map__54085__$1 = cljs.core.__destructure_map(map__54085);
var interactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54085__$1,new cljs.core.Keyword(null,"interactions","interactions",550841811));
var temp__5825__auto__ = cljs.core.seq(interactions);
if(temp__5825__auto__){
var interactions__$1 = temp__5825__auto__;
return rumext.v2.create_element("penpot:interactions",({}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,interaction){
out_arr__46744__auto__.push(rumext.v2.create_element("penpot:interaction",({"penpot:overlay-position-x": app.common.data.nilf(cljs.core.get_in)(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),new cljs.core.Keyword(null,"x","x",2099068185)], null)), "penpot:preserve-scroll": app.common.data.nilf(cljs.core.str)(new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069).cljs$core$IFn$_invoke$arity$1(interaction)), "key": cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc), "penpot:background-overlay": app.common.data.nilf(cljs.core.str)(new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424).cljs$core$IFn$_invoke$arity$1(interaction)), "penpot:event-type": app.common.data.name(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction)), "penpot:overlay-pos-type": app.common.data.nilf(app.common.data.name)(new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction)), "penpot:url": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(interaction), "penpot:destination": app.common.data.nilf(cljs.core.str)(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction)), "penpot:close-click-outside": app.common.data.nilf(cljs.core.str)(new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612).cljs$core$IFn$_invoke$arity$1(interaction)), "penpot:overlay-position-y": app.common.data.nilf(cljs.core.get_in)(interaction,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overlay-position","overlay-position",-2038634730),new cljs.core.Keyword(null,"y","y",-1757859776)], null)), "penpot:action-type": app.common.data.name(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction)), "penpot:delay": app.common.data.nilf(cljs.core.str)(new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(interaction))})));

return out_arr__46744__auto__;
}),[],interactions__$1));
} else {
return null;
}
});
app.main.ui.shapes.export$.export_layout_container_data = (function app$main$ui$shapes$export$export_layout_container_data(p__54104){
var map__54108 = p__54104;
var map__54108__$1 = cljs.core.__destructure_map(map__54108);
var layout_grid_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947));
var layout_grid_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661));
var layout_grid_columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864));
var layout_gap_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598));
var layout_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747));
var layout_wrap_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var layout_align_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895));
var layout_padding_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837));
var layout_grid_cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187));
var layout_gap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911));
var layout_justify_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134));
var layout_justify_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173));
var layout_flex_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670));
var layout_align_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54108__$1,new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473));
if(cljs.core.truth_(layout)){
return rumext.v2.create_element("penpot:layout",({"penpot:layout": app.common.data.name(layout), "penpot:layout-gap-type": app.common.data.name(layout_gap_type), "penpot:layout-padding-p1": new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(layout_padding), "penpot:layout-justify-content": app.common.data.name(layout_justify_content), "penpot:layout-gap-column": new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(layout_gap), "penpot:layout-gap-row": new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(layout_gap), "penpot:layout-wrap-type": app.common.data.name(layout_wrap_type), "penpot:layout-grid-dir": app.common.data.name(layout_grid_dir), "penpot:layout-padding-p3": new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(layout_padding), "penpot:layout-align-items": app.common.data.name(layout_align_items), "penpot:layout-justify-items": app.common.data.name(layout_justify_items), "penpot:layout-padding-p4": new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(layout_padding), "penpot:layout-align-content": app.common.data.name(layout_align_content), "penpot:layout-padding-p2": new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(layout_padding), "penpot:layout-padding-type": app.common.data.name(layout_padding_type), "penpot:layout-flex-dir": app.common.data.name(layout_flex_dir)}),rumext.v2.create_element("penpot:grid-rows",({}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54133){
var vec__54134 = p__54133;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54134,(0),null);
var map__54137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54134,(1),null);
var map__54137__$1 = cljs.core.__destructure_map(map__54137);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54137__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54137__$1,new cljs.core.Keyword(null,"value","value",305978217));
out_arr__46744__auto__.push(rumext.v2.create_element("penpot:grid-track",({"penpot:index": idx, "key": cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc), "penpot:type": app.common.data.name(type), "penpot:value": value})));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(layout_grid_rows))),rumext.v2.create_element("penpot:grid-columns",({}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54146){
var vec__54151 = p__54146;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54151,(0),null);
var map__54154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54151,(1),null);
var map__54154__$1 = cljs.core.__destructure_map(map__54154);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54154__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54154__$1,new cljs.core.Keyword(null,"value","value",305978217));
out_arr__46744__auto__.push(rumext.v2.create_element("penpot:grid-track",({"penpot:index": idx, "key": cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc), "penpot:type": app.common.data.name(type), "penpot:value": value})));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(layout_grid_columns))),rumext.v2.create_element("penpot:grid-cells",({}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54158){
var vec__54159 = p__54158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54159,(0),null);
var map__54162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54159,(1),null);
var map__54162__$1 = cljs.core.__destructure_map(map__54162);
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var area_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"area-name","area-name",-496581211));
var justify_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54162__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
out_arr__46744__auto__.push(rumext.v2.create_element("penpot:grid-cell",({"penpot:align-self": app.common.data.name(align_self), "penpot:row-span": row_span, "penpot:shapes": cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",shapes), "key": cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.export$.internal_counter,cljs.core.inc), "penpot:justify-self": app.common.data.name(justify_self), "penpot:position": app.common.data.name(position), "penpot:column": column, "penpot:id": id, "penpot:row": row, "penpot:area-name": area_name, "penpot:column-span": column_span})));

return out_arr__46744__auto__;
}),[],layout_grid_cells)));
} else {
return null;
}
});
app.main.ui.shapes.export$.export_layout_item_data = (function app$main$ui$shapes$export$export_layout_item_data(p__54178){
var map__54181 = p__54178;
var map__54181__$1 = cljs.core.__destructure_map(map__54181);
var layout_item_min_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548));
var layout_item_margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708));
var layout_item_align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692));
var layout_item_max_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307));
var layout_item_z_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455));
var layout_item_absolute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265));
var layout_item_margin_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390));
var layout_item_max_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366));
var layout_item_h_sizing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527));
var layout_item_v_sizing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641));
var layout_item_min_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54181__$1,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548));
if(cljs.core.truth_((function (){var or__5025__auto__ = layout_item_margin;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = layout_item_margin_type;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = layout_item_h_sizing;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = layout_item_v_sizing;
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = layout_item_max_h;
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
var or__5025__auto____$5 = layout_item_min_h;
if(cljs.core.truth_(or__5025__auto____$5)){
return or__5025__auto____$5;
} else {
var or__5025__auto____$6 = layout_item_max_w;
if(cljs.core.truth_(or__5025__auto____$6)){
return or__5025__auto____$6;
} else {
var or__5025__auto____$7 = layout_item_min_w;
if(cljs.core.truth_(or__5025__auto____$7)){
return or__5025__auto____$7;
} else {
var or__5025__auto____$8 = layout_item_align_self;
if(cljs.core.truth_(or__5025__auto____$8)){
return or__5025__auto____$8;
} else {
var or__5025__auto____$9 = layout_item_absolute;
if(cljs.core.truth_(or__5025__auto____$9)){
return or__5025__auto____$9;
} else {
return layout_item_z_index;
}
}
}
}
}
}
}
}
}
}
})())){
return rumext.v2.create_element("penpot:layout-item",({"penpot:layout-item-min-w": layout_item_min_w, "penpot:layout-item-margin-m4": new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(layout_item_margin), "penpot:layout-item-margin-m2": new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(layout_item_margin), "penpot:layout-item-h-sizing": app.common.data.name(layout_item_h_sizing), "penpot:layout-item-max-w": layout_item_max_w, "penpot:layout-item-margin-type": app.common.data.name(layout_item_margin_type), "penpot:layout-item-min-h": layout_item_min_h, "penpot:layout-item-margin-m3": new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(layout_item_margin), "penpot:layout-item-absolute": layout_item_absolute, "penpot:layout-item-z-index": layout_item_z_index, "penpot:layout-item-v-sizing": app.common.data.name(layout_item_v_sizing), "penpot:layout-item-max-h": layout_item_max_h, "penpot:layout-item-margin-m1": new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(layout_item_margin), "penpot:layout-item-align-self": app.common.data.name(layout_item_align_self)}));
} else {
return null;
}
});
app.main.ui.shapes.export$.export_data = (function app$main$ui$shapes$export$export_data(props_54187){
var map__54188 = rumext.v2.util.wrap_props(props_54187);
var map__54188__$1 = cljs.core.__destructure_map(map__54188);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54188__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var props = app.main.ui.shapes.export$.add_library_refs(app.main.ui.shapes.export$.add_data(app.util.object.create(),shape),shape);
return rumext.v2.create_element("penpot:shape",props,app.main.ui.shapes.export$.export_shadow_data(shape),app.main.ui.shapes.export$.export_blur_data(shape),app.main.ui.shapes.export$.export_exports_data(shape),app.main.ui.shapes.export$.export_svg_data(shape),app.main.ui.shapes.export$.export_interactions_data(shape),app.main.ui.shapes.export$.export_fills_data(shape),app.main.ui.shapes.export$.export_strokes_data(shape),app.main.ui.shapes.export$.export_grid_data(shape),app.main.ui.shapes.export$.export_layout_container_data(shape),app.main.ui.shapes.export$.export_layout_item_data(shape));
});

(app.main.ui.shapes.export$.export_data.displayName = "export-data");


//# sourceMappingURL=app.main.ui.shapes.export.js.map
