import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.common.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.layout.tab_switcher.js";
import "./app.main.ui.inspect.right_sidebar.js";
import "./app.main.ui.workspace.sidebar.options.drawing.js";
import "./app.main.ui.workspace.sidebar.options.menus.align.js";
import "./app.main.ui.workspace.sidebar.options.menus.bool.js";
import "./app.main.ui.workspace.sidebar.options.menus.component.js";
import "./app.main.ui.workspace.sidebar.options.menus.grid_cell.js";
import "./app.main.ui.workspace.sidebar.options.menus.interactions.js";
import "./app.main.ui.workspace.sidebar.options.menus.layout_container.js";
import "./app.main.ui.workspace.sidebar.options.page.js";
import "./app.main.ui.workspace.sidebar.options.shapes.bool.js";
import "./app.main.ui.workspace.sidebar.options.shapes.circle.js";
import "./app.main.ui.workspace.sidebar.options.shapes.frame.js";
import "./app.main.ui.workspace.sidebar.options.shapes.group.js";
import "./app.main.ui.workspace.sidebar.options.shapes.multiple.js";
import "./app.main.ui.workspace.sidebar.options.shapes.path.js";
import "./app.main.ui.workspace.sidebar.options.shapes.rect.js";
import "./app.main.ui.workspace.sidebar.options.shapes.svg_raw.js";
import "./app.main.ui.workspace.sidebar.options.shapes.text.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options');
app.main.ui.workspace.sidebar.options.single_shape_options_STAR_ = (function app$main$ui$workspace$sidebar$options$single_shape_options_STAR_(props_56088){
var file_id = undefined;
var libraries = undefined;
var page_id = undefined;
var shape = undefined;
var props = undefined;
var {"shape": shape, "pageId": page_id, "fileId": file_id, "libraries": libraries, ...props} = props_56088;

var shape_type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var modifiers = rumext.v2.deref(app.main.refs.workspace_modifiers);
var modifiers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,shape_id),new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var shape__$1 = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers__$1);
var props__$1 = {...props, 'shape':shape__$1,'fileId':file_id,'pageId':page_id,'libraries':libraries};
var G__56092 = shape_type;
var G__56092__$1 = (((G__56092 instanceof cljs.core.Keyword))?G__56092.fqn:null);
switch (G__56092__$1) {
case "frame":
return rumext.v2.create_element(app.main.ui.workspace.sidebar.options.shapes.frame.options_STAR_,props__$1);

break;
case "group":
return rumext.v2.create_element(app.main.ui.workspace.sidebar.options.shapes.group.options_STAR_,props__$1);

break;
case "text":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.shapes.text.options_STAR_,{'shape':shape__$1,'fileId':file_id,'pageId':page_id,'libraries':libraries});

break;
case "rect":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.shapes.rect.options_STAR_,{'shape':shape__$1,'fileId':file_id,'pageId':page_id});

break;
case "circle":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.shapes.circle.options_STAR_,{'shape':shape__$1,'fileId':file_id,'pageId':page_id});

break;
case "path":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.shapes.path.options_STAR_,{'shape':shape__$1,'fileId':file_id,'pageId':page_id});

break;
case "svg-raw":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.shapes.svg_raw.options_STAR_,{'shape':shape__$1,'fileId':file_id,'pageId':page_id});

break;
case "bool":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.shapes.bool.options_STAR_,{'shape':shape__$1,'fileId':file_id,'pageId':page_id});

break;
default:
return null;

}
});

(app.main.ui.workspace.sidebar.options.single_shape_options_STAR_.displayName = "single-shape-options*");

app.main.ui.workspace.sidebar.options.shape_options_STAR_ = (function (p1__56094_SHARP_){
return rumext.v2.throttle(p1__56094_SHARP_,(100));
})((function app$main$ui$workspace$sidebar$options$shape_options_STAR_(props_56095){
var shapes_with_children = props_56095.shapesWithChildren;
var shapes = props_56095.shapes;
var selected = props_56095.selected;
var file_id = props_56095.fileId;
var libraries = props_56095.libraries;
var page_id = props_56095.pageId;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))){
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.single_shape_options_STAR_,{'pageId':page_id,'fileId':file_id,'libraries':libraries,'shape':cljs.core.first(shapes),'shapesWithChildren':shapes_with_children});
} else {
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.shapes.multiple.options_STAR_,{'shapesWithChildren':shapes_with_children,'shapes':shapes,'pageId':page_id,'fileId':file_id,'libraries':libraries});
}
}));

(app.main.ui.workspace.sidebar.options.shape_options_STAR_.displayName = "shape-options*");

app.main.ui.workspace.sidebar.options.specialized_panel_STAR_ = (function app$main$ui$workspace$sidebar$options$specialized_panel_STAR_(props_56096){
var panel = props_56096.panel;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(panel),new cljs.core.Keyword(null,"component-swap","component-swap",-190693695))){
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_menu_STAR_,{'shapes':new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(panel),'isSwapOpened':true});
} else {
return null;
}
});

(app.main.ui.workspace.sidebar.options.specialized_panel_STAR_.displayName = "specialized-panel*");

app.main.ui.workspace.sidebar.options.design_menu_STAR_ = (function app$main$ui$workspace$sidebar$options$design_menu_STAR_(props_56098){
var shapes = props_56098.shapes;
var selected = props_56098.selected;
var file_id = props_56098.fileId;
var objects = props_56098.objects;
var page_id = props_56098.pageId;
var sp_panel = rumext.v2.deref(app.main.refs.specialized_panel);
var drawing = rumext.v2.deref(app.main.refs.workspace_drawing);
var edition = rumext.v2.deref(app.main.refs.selected_edition);
var files = rumext.v2.deref(app.main.refs.files);
var libraries = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(files),rumext.v2.adapt(file_id)],(function (){
return app.main.refs.select_libraries(files,file_id);
}));
var edit_grid_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects),rumext.v2.adapt(edition)],(function (){
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,edition);
}));
var grid_edition = rumext.v2.deref(app.main.refs.workspace_grid_edition);
var selected_cells = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56097_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,edition),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187)),p1__56097_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid_edition,edition),new cljs.core.Keyword(null,"selected","selected",574897764)));
var shapes_with_children_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var _ = rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(objects),rumext.v2.adapt(shapes)],(function (){
cljs.core.reset_BANG_(shapes_with_children_STAR_,null);

var result = (function (){var queue = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),selected);
var visited = selected;
while(true){
var temp__5823__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var children = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.seq(children)){
var new_children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(visited,children);
var G__56155 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),new_children);
var G__56156 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(visited,new_children);
queue = G__56155;
visited = G__56156;
continue;
} else {
var G__56157 = cljs.core.pop(queue);
var G__56158 = visited;
queue = G__56157;
visited = G__56158;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),visited);
}
break;
}
})();
return cljs.core.reset_BANG_(shapes_with_children_STAR_,result);
}));
var shapes_with_children = cljs.core.deref(shapes_with_children_STAR_);
var total_selected = cljs.core.count(selected);
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options__element-options main_ui_workspace_sidebar_options__design-options",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.align.align_options_STAR_,{'shapes':shapes,'objects':objects}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.bool.bool_options_STAR_,{'totalSelected':total_selected,'shapes':shapes,'shapesWithChildren':shapes_with_children}),(cljs.core.truth_((function (){var and__5023__auto__ = edit_grid_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.data.not_empty_QMARK_(selected_cells);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.grid_cell.options,{'shape':cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,edition),'cells':selected_cells}):(cljs.core.truth_(edit_grid_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.grid_layout_edition,{'ids':new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edition], null),'values':cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,edition)}):(((!((sp_panel == null))))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.specialized_panel_STAR_,{'panel':sp_panel}):((app.common.data.not_empty_QMARK_(drawing))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.drawing.drawing_options_STAR_,{'drawingState':drawing}):(((total_selected === (0)))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.page.options_STAR_,{}):rumext.v2.jsx(app.main.ui.workspace.sidebar.options.shape_options_STAR_,{'shapes':shapes,'shapesWithChildren':shapes_with_children,'pageId':page_id,'fileId':file_id,'selected':selected,'libraries':libraries})
)))))]});
});

(app.main.ui.workspace.sidebar.options.design_menu_STAR_.displayName = "design-menu*");

app.main.ui.workspace.sidebar.options.inspect_tab_STAR_ = (function app$main$ui$workspace$sidebar$options$inspect_tab_STAR_(props_56132){
var shapes = props_56132.shapes;
var objects = props_56132.objects;
var props = props_56132;
var frame = app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(shapes));
var props__$1 = {...props, 'frame':frame,'from':new cljs.core.Keyword(null,"workspace","workspace",-1096735709)};
return rumext.v2.create_element(app.main.ui.inspect.right_sidebar.right_sidebar_STAR_,props__$1);
});

(app.main.ui.workspace.sidebar.options.inspect_tab_STAR_.displayName = "inspect-tab*");

app.main.ui.workspace.sidebar.options.options_tabs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.design"),new cljs.core.Keyword(null,"id","id",-1388402092),"design"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.prototype"),new cljs.core.Keyword(null,"id","id",-1388402092),"prototype"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.inspect"),new cljs.core.Keyword(null,"id","id",-1388402092),"inspect"], null)], null);
app.main.ui.workspace.sidebar.options.on_option_tab_change = (function app$main$ui$workspace$sidebar$options$on_option_tab_change(mode){
var mode__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(mode);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_options_mode(mode__$1));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode__$1,new cljs.core.Keyword(null,"inspect","inspect",688794057))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.common.set_workspace_read_only(true)], 0));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.common.set_workspace_read_only(false)], 0));
}
});
app.main.ui.workspace.sidebar.options.options_content_STAR_ = (function app$main$ui$workspace$sidebar$options$options_content_STAR_(props_56134){
var on_expand = props_56134.onExpand;
var on_change_section = props_56134.onChangeSection;
var selected = props_56134.selected;
var file_id = props_56134.fileId;
var objects = props_56134.objects;
var page_id = props_56134.pageId;
var permissions = rumext.v2.use_ctx(app.main.ui.context.permissions);
var options_mode = rumext.v2.deref(app.main.refs.options_mode_global);
var shapes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(objects)],(function (){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),selected);
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options__tool-window",'children':(cljs.core.truth_(new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions))?rumext.v2.jsx(app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR_,{'tabs':app.main.ui.workspace.sidebar.options.options_tabs,'onChange':app.main.ui.workspace.sidebar.options.on_option_tab_change,'selected':cljs.core.name(options_mode),'className':"main_ui_workspace_sidebar_options__options-tab-switcher",'children':(function (){var G__56137 = options_mode;
var G__56137__$1 = (((G__56137 instanceof cljs.core.Keyword))?G__56137.fqn:null);
switch (G__56137__$1) {
case "prototype":
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options__element-options main_ui_workspace_sidebar_options__interaction-options",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.interactions.interactions_menu_STAR_,{'shape':cljs.core.first(shapes)})});

break;
case "inspect":
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options__element-options main_ui_workspace_sidebar_options__inspect-options",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.inspect_tab_STAR_,{'pageId':page_id,'fileId':file_id,'objects':objects,'selected':selected,'shapes':shapes,'onChangeSection':on_change_section,'onExpand':on_expand})});

break;
case "design":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.design_menu_STAR_,{'selected':selected,'objects':objects,'pageId':page_id,'fileId':file_id,'shapes':shapes});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56137__$1)].join('')));

}
})()}):rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options__element-options main_ui_workspace_sidebar_options__inspect-options main_ui_workspace_sidebar_options__read-only",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.inspect_tab_STAR_,{'pageId':page_id,'fileId':file_id,'objects':objects,'selected':selected,'shapes':shapes,'onChangeSection':on_change_section,'onExpand':on_expand})}))});
});

(app.main.ui.workspace.sidebar.options.options_content_STAR_.displayName = "options-content*");

app.main.ui.workspace.sidebar.options.make_page_objects_ref = (function app$main$ui$workspace$sidebar$options$make_page_objects_ref(file_id,page_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p1__56142_SHARP_){
return app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3(p1__56142_SHARP_,file_id,page_id);
}),app.main.store.state);
});
app.main.ui.workspace.sidebar.options.options_toolbox_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$sidebar$options$options_toolbox_STAR_(props_56143){
var on_expand = props_56143.onExpand;
var on_change_section = props_56143.onChangeSection;
var selected = props_56143.selected;
var file_id = props_56143.fileId;
var section = props_56143.section;
var page_id = props_56143.pageId;
var objects_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page_id),rumext.v2.adapt(file_id)],(function (){
return app.main.ui.workspace.sidebar.options.make_page_objects_ref(file_id,page_id);
}));
var objects = rumext.v2.deref(objects_ref);
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.options_content_STAR_,{'objects':objects,'selected':selected,'fileId':file_id,'pageId':page_id,'section':section,'onChangeSection':on_change_section,'onExpand':on_expand});
}));

(app.main.ui.workspace.sidebar.options.options_toolbox_STAR_.displayName = "options-toolbox*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.js.map
