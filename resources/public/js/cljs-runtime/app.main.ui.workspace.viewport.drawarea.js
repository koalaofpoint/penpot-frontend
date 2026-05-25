import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.main.refs.js";
import "./app.main.ui.shapes.path.js";
import "./app.main.ui.workspace.shapes.js";
import "./app.main.ui.workspace.shapes.path.editor.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.drawarea');
app.main.ui.workspace.viewport.drawarea.make_edit_path_ref = (function app$main$ui$workspace$viewport$drawarea$make_edit_path_ref(id){
var get_fn = (function (p1__56909_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__56909_SHARP_,new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id);
});
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(get_fn,app.main.refs.workspace_local);
});
app.main.ui.workspace.viewport.drawarea.generic_draw_area_STAR_ = (function app$main$ui$workspace$viewport$drawarea$generic_draw_area_STAR_(props_56914){
var zoom = props_56914.zoom;
var shape = props_56914.shape;
var map__56916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var map__56916__$1 = cljs.core.__destructure_map(map__56916);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56916__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56916__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56916__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56916__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_((function (){var and__5023__auto__ = x;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = y;
if(cljs.core.truth_(and__5023__auto____$1)){
return ((cljs.core.not(app.common.math.nan_QMARK_(x))) && (cljs.core.not(app.common.math.nan_QMARK_(y))));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return rumext.v2.jsx("rect",{'className':"main",'x':x,'y':y,'width':width,'height':height,'style':{'stroke':"var(--color-accent-tertiary)",'fill':"none",'strokeWidth':((1) / zoom)}});
} else {
return null;
}
});

(app.main.ui.workspace.viewport.drawarea.generic_draw_area_STAR_.displayName = "generic-draw-area*");

app.main.ui.workspace.viewport.drawarea.path_draw_area_STAR_ = (function app$main$ui$workspace$viewport$drawarea$path_draw_area_STAR_(props_56917){
var shape = props_56917.shape;
var props = props_56917;
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var edit_path_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.ui.workspace.viewport.drawarea.make_edit_path_ref(shape_id);
}));
var edit_path_state = rumext.v2.deref(edit_path_ref);
var props__$1 = {...props, 'state':edit_path_state};
return rumext.v2.create_element(app.main.ui.workspace.shapes.path.editor.path_editor_STAR_,props__$1);
});

(app.main.ui.workspace.viewport.drawarea.path_draw_area_STAR_.displayName = "path-draw-area*");

app.main.ui.workspace.viewport.drawarea.draw_area_STAR_ = (function app$main$ui$workspace$viewport$drawarea$draw_area_STAR_(props_56918){
var zoom = props_56918.zoom;
var tool = props_56918.tool;
var shape = props_56918.shape;
var props = props_56918;
return rumext.v2.jsxs("g",{'className':"draw-area",'children':[rumext.v2.jsx("g",{'style':{'pointerEvents':"none"},'children':rumext.v2.jsx(app.main.ui.workspace.shapes.shape_wrapper,{'shape':shape})}),(function (){var G__56920 = tool;
var G__56920__$1 = (((G__56920 instanceof cljs.core.Keyword))?G__56920.fqn:null);
switch (G__56920__$1) {
case "path":
return rumext.v2.create_element(app.main.ui.workspace.viewport.drawarea.path_draw_area_STAR_,props);

break;
case "curve":
return rumext.v2.jsx(app.main.ui.shapes.path.path_shape,{'shape':shape,'zoom':zoom});

break;
default:
return rumext.v2.create_element(app.main.ui.workspace.viewport.drawarea.generic_draw_area_STAR_,props);

}
})()]});
});

(app.main.ui.workspace.viewport.drawarea.draw_area_STAR_.displayName = "draw-area*");


//# sourceMappingURL=app.main.ui.workspace.viewport.drawarea.js.map
