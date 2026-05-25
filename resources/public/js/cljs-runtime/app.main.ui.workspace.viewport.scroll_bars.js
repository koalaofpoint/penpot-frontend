import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.color.js";
import "./app.main.data.workspace.js";
import "./app.main.store.js";
import "./app.main.ui.workspace.viewport.viewport_ref.js";
import "./app.util.dom.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.scroll_bars');
app.main.ui.workspace.viewport.scroll_bars.scroll_x = (10);
app.main.ui.workspace.viewport.scroll_bars.scroll_y = (10);
app.main.ui.workspace.viewport.scroll_bars.scroll_height = (app.main.ui.workspace.viewport.scroll_bars.scroll_x + (4));
app.main.ui.workspace.viewport.scroll_bars.scroll_width = (app.main.ui.workspace.viewport.scroll_bars.scroll_y + (4));
app.main.ui.workspace.viewport.scroll_bars.other_x = (26);
app.main.ui.workspace.viewport.scroll_bars.other_y = (26);
app.main.ui.workspace.viewport.scroll_bars.other_width = (100);
app.main.ui.workspace.viewport.scroll_bars.other_height = (100);
app.main.ui.workspace.viewport.scroll_bars.viewport_scrollbars = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$scroll_bars$viewport_scrollbars(props_57186){
var map__57190 = rumext.v2.util.wrap_props(props_57186);
var map__57190__$1 = cljs.core.__destructure_map(map__57190);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57190__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57190__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57190__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var bottom_padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57190__$1,new cljs.core.Keyword(null,"bottom-padding","bottom-padding",-1809629359));
var v_scrolling_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var h_scrolling_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var start_ref = rumext.v2.use_ref(null);
var v_scrollbar_y_ref = rumext.v2.use_ref(null);
var h_scrollbar_x_ref = rumext.v2.use_ref(null);
var v_scrollbar_y_stored = rumext.v2.ref_val(v_scrollbar_y_ref);
var h_scrollbar_x_stored = rumext.v2.ref_val(h_scrollbar_x_ref);
var v_scrollbar_y_padding_ref = rumext.v2.use_ref(null);
var h_scrollbar_x_padding_ref = rumext.v2.use_ref(null);
var scrollbar_height_ref = rumext.v2.use_ref(null);
var scrollbar_width_ref = rumext.v2.use_ref(null);
var scrollbar_height_stored = rumext.v2.ref_val(scrollbar_height_ref);
var scrollbar_width_stored = rumext.v2.ref_val(scrollbar_width_ref);
var height_factor_ref = rumext.v2.use_ref(null);
var width_factor_ref = rumext.v2.use_ref(null);
var vbox_y_ref = rumext.v2.use_ref(null);
var vbox_x_ref = rumext.v2.use_ref(null);
var vbox_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox);
var vbox_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox);
var base_objects_rect = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.common.geom.shapes.shapes__GT_rect(app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$1(objects));
}));
var vbox__$1 = (function (){var G__57191 = vbox;
if((!((bottom_padding == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__57191,new cljs.core.Keyword(null,"height","height",1025178622),cljs.core._,(bottom_padding / zoom));
} else {
return G__57191;
}
})();
var inv_zoom = ((1) / zoom);
var vbox_height = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox__$1) - (inv_zoom * app.main.ui.workspace.viewport.scroll_bars.scroll_height));
var vbox_width = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox__$1) - (inv_zoom * app.main.ui.workspace.viewport.scroll_bars.scroll_width));
var top_offset = (((function (){var x__5110__auto__ = (vbox_y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(base_objects_rect));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() * vbox_height) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(base_objects_rect));
var left_offset = (((function (){var x__5110__auto__ = (vbox_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(base_objects_rect));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() * vbox_width) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(base_objects_rect));
var bottom_offset = (((function (){var x__5110__auto__ = (new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(base_objects_rect) - (vbox_y + vbox_height));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() * vbox_height) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(base_objects_rect));
var right_offset = (((function (){var x__5110__auto__ = (new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(base_objects_rect) - (vbox_x + vbox_width));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() * vbox_width) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(base_objects_rect));
var show_v_scroll_QMARK_ = (function (){var or__5025__auto__ = cljs.core.deref(v_scrolling_QMARK_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (((top_offset > (0))) || ((bottom_offset > (0))));
}
})();
var show_h_scroll_QMARK_ = (function (){var or__5025__auto__ = cljs.core.deref(h_scrolling_QMARK_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (((left_offset > (0))) || ((right_offset > (0))));
}
})();
var v_scrollbar_x = ((vbox_x + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox__$1)) + (inv_zoom * (- app.main.ui.workspace.viewport.scroll_bars.scroll_x)));
var v_scrollbar_y = (vbox_y + top_offset);
var h_scrollbar_x = (vbox_x + left_offset);
var h_scrollbar_y = ((vbox_y + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox__$1)) + (inv_zoom * (- app.main.ui.workspace.viewport.scroll_bars.scroll_y)));
var scrollbar_height = (((vbox_y + vbox_height) - bottom_offset) - v_scrollbar_y);
var scrollbar_height__$1 = (function (){var x__5110__auto__ = (cljs.core.truth_(cljs.core.deref(v_scrolling_QMARK_))?scrollbar_height_stored:scrollbar_height
);
var y__5111__auto__ = (inv_zoom * app.main.ui.workspace.viewport.scroll_bars.other_height);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var scrollbar_width = (((vbox_x + vbox_width) - right_offset) - h_scrollbar_x);
var scrollbar_width__$1 = (function (){var x__5110__auto__ = (cljs.core.truth_(cljs.core.deref(h_scrolling_QMARK_))?scrollbar_width_stored:scrollbar_width
);
var y__5111__auto__ = (inv_zoom * app.main.ui.workspace.viewport.scroll_bars.other_width);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var v_scrollbar_y__$1 = (function (){var x__5110__auto__ = (cljs.core.truth_(cljs.core.deref(v_scrolling_QMARK_))?(v_scrollbar_y_stored - (- (vbox_y - rumext.v2.ref_val(vbox_y_ref)))):v_scrollbar_y
);
var y__5111__auto__ = (vbox_y + (inv_zoom * app.main.ui.workspace.viewport.scroll_bars.other_y));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var v_scrollbar_y__$2 = ((((v_scrollbar_y__$1 + scrollbar_height__$1) > (vbox_y + vbox_height)))?((vbox_y + vbox_height) - scrollbar_height__$1):v_scrollbar_y__$1);
var h_scrollbar_x__$1 = (function (){var x__5110__auto__ = (cljs.core.truth_(cljs.core.deref(h_scrolling_QMARK_))?(h_scrollbar_x_stored - (- (vbox_x - rumext.v2.ref_val(vbox_x_ref)))):h_scrollbar_x
);
var y__5111__auto__ = (vbox_x + (inv_zoom * app.main.ui.workspace.viewport.scroll_bars.other_x));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var h_scrollbar_x__$2 = ((((h_scrollbar_x__$1 + scrollbar_width__$1) > (vbox_x + vbox_width)))?((vbox_x + vbox_width) - scrollbar_width__$1):h_scrollbar_x__$1);
var on_pointer_move = (function (event,axis){
var temp__5825__auto__ = (function (){var or__5025__auto__ = cljs.core.deref(v_scrolling_QMARK_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(h_scrolling_QMARK_);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var _ = temp__5825__auto__;
var start_pt = rumext.v2.ref_val(start_ref);
var current_pt = app.util.dom.get_client_position(event);
var current_pt_viewport = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(current_pt);
var y_delta = ((rumext.v2.ref_val(height_factor_ref) * (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(current_pt) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_pt))) / zoom);
var x_delta = ((rumext.v2.ref_val(width_factor_ref) * (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(current_pt) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_pt))) / zoom);
var new_v_scrollbar_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(current_pt_viewport) + rumext.v2.ref_val(v_scrollbar_y_padding_ref));
var new_h_scrollbar_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(current_pt_viewport) + rumext.v2.ref_val(h_scrollbar_x_padding_ref));
var viewport_update = (function (){var G__57201 = (function (){var G__57202 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"y","y",-1757859776))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57202,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__57180_SHARP_){
return (p1__57180_SHARP_ + y_delta);
}));
} else {
return G__57202;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57201,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__57181_SHARP_){
return (p1__57181_SHARP_ + x_delta);
}));
} else {
return G__57201;
}
})();
rumext.v2.set_ref_val_BANG_(vbox_y_ref,vbox_y);

rumext.v2.set_ref_val_BANG_(vbox_x_ref,vbox_x);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_viewport_position(viewport_update));

rumext.v2.set_ref_val_BANG_(v_scrollbar_y_ref,new_v_scrollbar_y);

rumext.v2.set_ref_val_BANG_(h_scrollbar_x_ref,new_h_scrollbar_x);

return rumext.v2.set_ref_val_BANG_(start_ref,current_pt);
} else {
return null;
}
});
var on_pointer_down = (function (event,axis){
var start_pt = app.util.dom.get_client_position(event);
var viewport_point = app.main.ui.workspace.viewport.viewport_ref.point__GT_viewport(start_pt);
var new_h_scrollbar_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(viewport_point);
var new_v_scrollbar_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(viewport_point);
var v_scrollbar_y_padding = (v_scrollbar_y__$2 - new_v_scrollbar_y);
var h_scrollbar_x_padding = (h_scrollbar_x__$2 - new_h_scrollbar_x);
var vbox_rect = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),vbox_x,new cljs.core.Keyword(null,"y","y",-1757859776),vbox_y,new cljs.core.Keyword(null,"x1","x1",-1863922247),vbox_x,new cljs.core.Keyword(null,"y1","y1",589123466),vbox_y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(vbox_x + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),(vbox_y + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox__$1)),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox__$1),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox__$1)], null);
var containing_rect = app.common.geom.rect.join_rects(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_objects_rect,vbox_rect], null));
var height_factor = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(containing_rect) / vbox_height);
var width_factor = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(containing_rect) / vbox_width);
rumext.v2.set_ref_val_BANG_(start_ref,start_pt);

rumext.v2.set_ref_val_BANG_(v_scrollbar_y_padding_ref,v_scrollbar_y_padding);

rumext.v2.set_ref_val_BANG_(h_scrollbar_x_padding_ref,h_scrollbar_x_padding);

rumext.v2.set_ref_val_BANG_(v_scrollbar_y_ref,(new_v_scrollbar_y + v_scrollbar_y_padding));

rumext.v2.set_ref_val_BANG_(h_scrollbar_x_ref,(new_h_scrollbar_x + h_scrollbar_x_padding));

rumext.v2.set_ref_val_BANG_(vbox_y_ref,vbox_y);

rumext.v2.set_ref_val_BANG_(vbox_x_ref,vbox_x);

rumext.v2.set_ref_val_BANG_(scrollbar_height_ref,scrollbar_height__$1);

rumext.v2.set_ref_val_BANG_(scrollbar_width_ref,scrollbar_width__$1);

rumext.v2.set_ref_val_BANG_(height_factor_ref,height_factor);

rumext.v2.set_ref_val_BANG_(width_factor_ref,width_factor);

cljs.core.reset_BANG_(v_scrolling_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"y","y",-1757859776)));

return cljs.core.reset_BANG_(h_scrolling_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"x","x",2099068185)));
});
var on_pointer_up = (function (){
cljs.core.reset_BANG_(v_scrolling_QMARK_,false);

return cljs.core.reset_BANG_(h_scrolling_QMARK_,false);
});
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(show_v_scroll_QMARK_)?rumext.v2.jsx("g",{'className':"v-scroll",'fill':"#000000",'data-testid':"vertical-scrollbar",'children':rumext.v2.jsx("rect",{'width':(inv_zoom * (7)),'height':scrollbar_height__$1,'x':v_scrollbar_x,'onPointerUp':on_pointer_up,'style':{'stroke':"white",'strokeWidth':(0.15 / zoom)},'ry':(inv_zoom * (3)),'rx':(inv_zoom * (3)),'y':v_scrollbar_y__$2,'onPointerMove':(function (p1__57182_SHARP_){
return on_pointer_move(p1__57182_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776));
}),'fillOpacity':0.4,'onPointerDown':(function (p1__57183_SHARP_){
return on_pointer_down(p1__57183_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776));
})})}):null),(cljs.core.truth_(show_h_scroll_QMARK_)?rumext.v2.jsx("g",{'className':"h-scroll",'fill':"#000000",'data-testid':"horizontal-scrollbar",'children':rumext.v2.jsx("rect",{'width':scrollbar_width__$1,'height':(inv_zoom * (7)),'x':h_scrollbar_x__$2,'onPointerUp':on_pointer_up,'style':{'stroke':"white",'strokeWidth':(0.15 / zoom)},'ry':(inv_zoom * (3)),'rx':(inv_zoom * (3)),'y':h_scrollbar_y,'onPointerMove':(function (p1__57184_SHARP_){
return on_pointer_move(p1__57184_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185));
}),'fillOpacity':0.4,'onPointerDown':(function (p1__57185_SHARP_){
return on_pointer_down(p1__57185_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185));
})})}):null)]});
}));

(app.main.ui.workspace.viewport.scroll_bars.viewport_scrollbars.displayName = "viewport-scrollbars");


//# sourceMappingURL=app.main.ui.workspace.viewport.scroll_bars.js.map
