import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.common.types.shape.layout.js";
import "./app.config.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.grid_layout.editor.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.layout_container');
app.main.ui.workspace.sidebar.options.menus.layout_container.dir_icons_refactor = (function app$main$ui$workspace$sidebar$options$menus$layout_container$dir_icons_refactor(val){
var G__55490 = val;
var G__55490__$1 = (((G__55490 instanceof cljs.core.Keyword))?G__55490.fqn:null);
switch (G__55490__$1) {
case "row":
return app.main.ui.ds.foundations.assets.icon.grid_row;

break;
case "row-reverse":
return app.main.ui.ds.foundations.assets.icon.row_reverse;

break;
case "column":
return app.main.ui.ds.foundations.assets.icon.column;

break;
case "column-reverse":
return app.main.ui.ds.foundations.assets.icon.column_reverse;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55490__$1)].join('')));

}
});
app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_flex_attrs = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947)], null);
app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon = (function app$main$ui$workspace$sidebar$options$menus$layout_container$get_layout_flex_icon(type,val,column_QMARK_){
var G__55500 = type;
var G__55500__$1 = (((G__55500 instanceof cljs.core.Keyword))?G__55500.fqn:null);
switch (G__55500__$1) {
case "align-items":
if(column_QMARK_){
var G__55503 = val;
var G__55503__$1 = (((G__55503 instanceof cljs.core.Keyword))?G__55503.fqn:null);
switch (G__55503__$1) {
case "start":
return app.main.ui.ds.foundations.assets.icon.align_items_column_start;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_items_column_end;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_items_column_center;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55503__$1)].join('')));

}
} else {
var G__55505 = val;
var G__55505__$1 = (((G__55505 instanceof cljs.core.Keyword))?G__55505.fqn:null);
switch (G__55505__$1) {
case "start":
return app.main.ui.ds.foundations.assets.icon.align_items_row_start;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_items_row_end;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_items_row_center;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55505__$1)].join('')));

}
}

break;
case "justify-content":
if(column_QMARK_){
var G__55509 = val;
var G__55509__$1 = (((G__55509 instanceof cljs.core.Keyword))?G__55509.fqn:null);
switch (G__55509__$1) {
case "start":
return app.main.ui.ds.foundations.assets.icon.justify_content_column_start;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.justify_content_column_end;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.justify_content_column_center;

break;
case "space-around":
return app.main.ui.ds.foundations.assets.icon.justify_content_column_around;

break;
case "space-evenly":
return app.main.ui.ds.foundations.assets.icon.justify_content_column_evenly;

break;
case "space-between":
return app.main.ui.ds.foundations.assets.icon.justify_content_column_between;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55509__$1)].join('')));

}
} else {
var G__55510 = val;
var G__55510__$1 = (((G__55510 instanceof cljs.core.Keyword))?G__55510.fqn:null);
switch (G__55510__$1) {
case "start":
return app.main.ui.ds.foundations.assets.icon.justify_content_row_start;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.justify_content_row_end;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.justify_content_row_center;

break;
case "space-around":
return app.main.ui.ds.foundations.assets.icon.justify_content_row_around;

break;
case "space-evenly":
return app.main.ui.ds.foundations.assets.icon.justify_content_row_evenly;

break;
case "space-between":
return app.main.ui.ds.foundations.assets.icon.justify_content_row_between;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55510__$1)].join('')));

}
}

break;
case "align-content":
if(column_QMARK_){
var G__55511 = val;
var G__55511__$1 = (((G__55511 instanceof cljs.core.Keyword))?G__55511.fqn:null);
switch (G__55511__$1) {
case "start":
return app.main.ui.ds.foundations.assets.icon.align_content_column_start;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_content_column_end;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_content_column_center;

break;
case "space-around":
return app.main.ui.ds.foundations.assets.icon.align_content_column_around;

break;
case "space-evenly":
return app.main.ui.ds.foundations.assets.icon.align_content_column_evenly;

break;
case "space-between":
return app.main.ui.ds.foundations.assets.icon.align_content_column_between;

break;
case "stretch":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55511__$1)].join('')));

}
} else {
var G__55512 = val;
var G__55512__$1 = (((G__55512 instanceof cljs.core.Keyword))?G__55512.fqn:null);
switch (G__55512__$1) {
case "start":
return app.main.ui.ds.foundations.assets.icon.align_content_row_start;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_content_row_end;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_content_row_center;

break;
case "space-around":
return app.main.ui.ds.foundations.assets.icon.align_content_row_around;

break;
case "space-evenly":
return app.main.ui.ds.foundations.assets.icon.align_content_row_evenly;

break;
case "space-between":
return app.main.ui.ds.foundations.assets.icon.align_content_row_between;

break;
case "stretch":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55512__$1)].join('')));

}
}

break;
case "align-self":
if(column_QMARK_){
var G__55515 = val;
var G__55515__$1 = (((G__55515 instanceof cljs.core.Keyword))?G__55515.fqn:null);
switch (G__55515__$1) {
case "auto":
return app.main.ui.ds.foundations.assets.icon.remove;

break;
case "start":
return app.main.ui.ds.foundations.assets.icon.align_self_row_left;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_self_row_right;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_self_row_center;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55515__$1)].join('')));

}
} else {
var G__55516 = val;
var G__55516__$1 = (((G__55516 instanceof cljs.core.Keyword))?G__55516.fqn:null);
switch (G__55516__$1) {
case "auto":
return app.main.ui.ds.foundations.assets.icon.remove;

break;
case "start":
return app.main.ui.ds.foundations.assets.icon.align_self_column_top;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_self_column_bottom;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_self_column_center;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55516__$1)].join('')));

}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55500__$1)].join('')));

}
});
app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon = (function app$main$ui$workspace$sidebar$options$menus$layout_container$get_layout_grid_icon(type,val,column_QMARK_){
var G__55519 = type;
var G__55519__$1 = (((G__55519 instanceof cljs.core.Keyword))?G__55519.fqn:null);
switch (G__55519__$1) {
case "align-items":
if(column_QMARK_){
var G__55520 = val;
var G__55520__$1 = (((G__55520 instanceof cljs.core.Keyword))?G__55520.fqn:null);
switch (G__55520__$1) {
case "auto":
return app.main.ui.ds.foundations.assets.icon.remove;

break;
case "start":
return app.main.ui.ds.foundations.assets.icon.align_self_row_left;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_self_row_right;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_self_row_center;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55520__$1)].join('')));

}
} else {
var G__55521 = val;
var G__55521__$1 = (((G__55521 instanceof cljs.core.Keyword))?G__55521.fqn:null);
switch (G__55521__$1) {
case "auto":
return app.main.ui.ds.foundations.assets.icon.remove;

break;
case "start":
return app.main.ui.ds.foundations.assets.icon.align_self_column_top;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_self_column_bottom;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_self_column_center;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55521__$1)].join('')));

}
}

break;
case "justify-items":
if((!(column_QMARK_))){
var G__55522 = val;
var G__55522__$1 = (((G__55522 instanceof cljs.core.Keyword))?G__55522.fqn:null);
switch (G__55522__$1) {
case "start":
return app.main.ui.ds.foundations.assets.icon.align_content_column_start;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_content_column_center;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_content_column_end;

break;
case "space-around":
return app.main.ui.ds.foundations.assets.icon.align_content_column_around;

break;
case "space-between":
return app.main.ui.ds.foundations.assets.icon.align_content_column_between;

break;
case "stretch":
return app.main.ui.ds.foundations.assets.icon.align_content_column_stretch;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55522__$1)].join('')));

}
} else {
var G__55523 = val;
var G__55523__$1 = (((G__55523 instanceof cljs.core.Keyword))?G__55523.fqn:null);
switch (G__55523__$1) {
case "start":
return app.main.ui.ds.foundations.assets.icon.align_content_row_start;

break;
case "center":
return app.main.ui.ds.foundations.assets.icon.align_content_row_center;

break;
case "end":
return app.main.ui.ds.foundations.assets.icon.align_content_row_end;

break;
case "space-around":
return app.main.ui.ds.foundations.assets.icon.align_content_row_around;

break;
case "space-between":
return app.main.ui.ds.foundations.assets.icon.align_content_row_between;

break;
case "stretch":
return app.main.ui.ds.foundations.assets.icon.align_content_row_stretch;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55523__$1)].join('')));

}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55519__$1)].join('')));

}
});
app.main.ui.workspace.sidebar.options.menus.layout_container.direction_row_flex = (function app$main$ui$workspace$sidebar$options$menus$layout_container$direction_row_flex(props_55524){
var on_change = (props_55524["on-change"]);
var value = props_55524.value;
return rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'class':"main_ui_workspace_sidebar_options_menus_layout_container__direction-row-flex",'selected':app.common.data.name(value),'decode-fn':cljs.core.keyword,'on-change':on_change,'name':"flex-direction",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"row",'id':"flex-direction-row",'title':"Row",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.dir_icons_refactor(new cljs.core.Keyword(null,"row","row",-570139521))}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"row-reverse",'id':"flex-direction-row-reverse",'title':"Row reverse",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.dir_icons_refactor(new cljs.core.Keyword(null,"row-reverse","row-reverse",78332847))}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"column",'id':"flex-direction-column",'title':"Column",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.dir_icons_refactor(new cljs.core.Keyword(null,"column","column",2078222095))}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"column-reverse",'id':"flex-direction-column-reverse",'title':"Column reverse",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.dir_icons_refactor(new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587))})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.direction_row_flex.displayName = "direction-row-flex");

app.main.ui.workspace.sidebar.options.menus.layout_container.wrap_row = (function app$main$ui$workspace$sidebar$options$menus$layout_container$wrap_row(props_55526){
var on_click = (props_55526["on-click"]);
var wrap_type = (props_55526["wrap-type"]);
return rumext.v2.jsx("button",{'title':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrap","wrap",851669987),wrap_type))?"No wrap":"Wrap"),'onClick':on_click,'className':"main_ui_workspace_sidebar_options_menus_layout_container__wrap-button"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrap_type,new cljs.core.Keyword(null,"wrap","wrap",851669987)))?"main_ui_workspace_sidebar_options_menus_layout_container__selected":""),'children':app.main.ui.icons.wrap});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.wrap_row.displayName = "wrap-row");

app.main.ui.workspace.sidebar.options.menus.layout_container.align_row = (function app$main$ui$workspace$sidebar$options$menus$layout_container$align_row(props_55528){
var on_change = (props_55528["on-change"]);
var is_column = (props_55528["is-column"]);
var value = props_55528.value;
return rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'class':"main_ui_workspace_sidebar_options_menus_layout_container__align-row",'selected':app.common.data.name(value),'decode-fn':cljs.core.keyword,'on-change':on_change,'name':"flex-align-items",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"start",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"start","start",-355208981),is_column),'title':"Align items start",'id':"align-items-start"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"center",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),is_column),'title':"Align items center",'id':"align-items-center"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"end",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"end","end",-268185958),is_column),'title':"Align items end",'id':"align-items-end"})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.align_row.displayName = "align-row");

app.main.ui.workspace.sidebar.options.menus.layout_container.align_content_row = (function app$main$ui$workspace$sidebar$options$menus$layout_container$align_content_row(props_55529){
var on_change = (props_55529["on-change"]);
var is_column = (props_55529["is-column"]);
var value = props_55529.value;
return rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'class':"main_ui_workspace_sidebar_options_menus_layout_container__align-content-row",'selected':app.common.data.name(value),'decode-fn':cljs.core.keyword,'on-change':on_change,'name':"flex-align-content",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"start",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"start","start",-355208981),is_column),'title':"Align content start",'id':"align-content-start"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"center",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368),is_column),'title':"Align content center",'id':"align-content-center"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"end",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"end","end",-268185958),is_column),'title':"Align content end",'id':"align-content-end"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"space-between",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"space-between","space-between",1908176695),is_column),'title':"Align content space-between",'id':"align-content-space-between"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"space-around",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"space-around","space-around",248184132),is_column),'title':"Align content space-around",'id':"align-content-space-around"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"space-evenly",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),is_column),'title':"Align content space-evenly",'id':"align-content-space-evenly"})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.align_content_row.displayName = "align-content-row");

app.main.ui.workspace.sidebar.options.menus.layout_container.justify_content_row = (function app$main$ui$workspace$sidebar$options$menus$layout_container$justify_content_row(props_55532){
var on_change = (props_55532["on-change"]);
var is_column = (props_55532["is-column"]);
var justify_content = (props_55532["justify-content"]);
return rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'class':"main_ui_workspace_sidebar_options_menus_layout_container__justify-content-row",'selected':app.common.data.name(justify_content),'on-change':on_change,'name':"flex-justify",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"start",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"start","start",-355208981),is_column),'title':"Justify content start",'id':"justify-content-start"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"center",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),is_column),'title':"Justify content center",'id':"justify-content-center"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"end",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"end","end",-268185958),is_column),'title':"Justify content end",'id':"justify-content-end"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"space-between",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),is_column),'title':"Justify content space-between",'id':"justify-content-space-between"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"space-around",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-around","space-around",248184132),is_column),'title':"Justify content space-around",'id':"justify-content-space-around"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"space-evenly",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715),is_column),'title':"Justify content space-evenly",'id':"justify-content-space-evenly"})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.justify_content_row.displayName = "justify-content-row");

app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding = (function app$main$ui$workspace$sidebar$options$menus$layout_container$select_padding(var_args){
var G__55539 = arguments.length;
switch (G__55539) {
case 1:
return app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$core$IFn$_invoke$arity$1 = (function (p){
return app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"p1","p1",-936759954)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"p2","p2",905500641)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"p3","p3",1731040739)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"p4","p4",-1090126814)));
}));

(app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$core$IFn$_invoke$arity$4 = (function (p1_QMARK_,p2_QMARK_,p3_QMARK_,p4_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_paddings_selected(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),p1_QMARK_,new cljs.core.Keyword(null,"p2","p2",905500641),p2_QMARK_,new cljs.core.Keyword(null,"p3","p3",1731040739),p3_QMARK_,new cljs.core.Keyword(null,"p4","p4",-1090126814),p4_QMARK_], null)));
}));

(app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$lang$maxFixedArity = 4);

app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur = (function app$main$ui$workspace$sidebar$options$menus$layout_container$on_padding_blur(_event){
return app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$core$IFn$_invoke$arity$4(false,false,false,false);
});
app.main.ui.workspace.sidebar.options.menus.layout_container.simple_padding_selection_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$layout_container$simple_padding_selection_STAR_(props_55547){
var on_change = props_55547.onChange;
var value = props_55547.value;
var ids = props_55547.ids;
var applied_tokens = props_55547.appliedTokens;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var p1 = new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(value);
var p2 = new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(value);
var p3 = new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(value);
var p4 = new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(value);
var p1__$1 = (((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),value)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p3))))?p1:null);
var p2__$1 = (((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),value)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2,p4))))?p2:null);
var applied_to_p1 = new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_to_p2 = new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_to_p3 = new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_to_p4 = new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_to_p1__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(applied_to_p1,applied_to_p3))?applied_to_p1:null);
var applied_to_p2__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(applied_to_p2,applied_to_p4))?applied_to_p2:null);
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(ids)],(function (value__$1,attr,event){
if(((typeof value__$1 === 'string') || (typeof value__$1 === 'number'))){
return (on_change.cljs$core$IFn$_invoke$arity$4 ? on_change.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"simple","simple",-581868663),attr,value__$1,event) : on_change.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663),attr,value__$1,event));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p1","p1",-936759954),attr))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p3","p3",1731040739),null,new cljs.core.Keyword(null,"p1","p1",-936759954),null], null), null):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p2","p2",905500641),null,new cljs.core.Keyword(null,"p4","p4",-1090126814),null], null), null)),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}
}));
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token_name,attr){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
var on_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding)],(function (attr,event){
var G__55550_55676 = attr;
var G__55550_55677__$1 = (((G__55550_55676 instanceof cljs.core.Keyword))?G__55550_55676.fqn:null);
switch (G__55550_55677__$1) {
case "p1":
app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$core$IFn$_invoke$arity$4(true,false,true,false);

break;
case "p2":
app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$core$IFn$_invoke$arity$4(false,true,false,true);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55550_55677__$1)].join('')));

}

return app.util.dom.select_target(event);
}));
var on_focus_p1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p1","p1",-936759954)) : on_focus.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954)));
}));
var on_focus_p2 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p2","p2",905500641)) : on_focus.call(null,new cljs.core.Keyword(null,"p2","p2",905500641)));
}));
var on_p1_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55545_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55545_SHARP_,new cljs.core.Keyword(null,"p1","p1",-936759954)) : on_change_SINGLEQUOTE_.call(null,p1__55545_SHARP_,new cljs.core.Keyword(null,"p1","p1",-936759954)));
}));
var on_p2_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55546_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55546_SHARP_,new cljs.core.Keyword(null,"p2","p2",905500641)) : on_change_SINGLEQUOTE_.call(null,p1__55546_SHARP_,new cljs.core.Keyword(null,"p2","p2",905500641)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__paddings-simple",'children':[((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'onChange':on_p1_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),applied_to_p1__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),p1__$1)) || ((p1__$1 == null))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'inputType':new cljs.core.Keyword(null,"vertical-padding","vertical-padding",50408610),'attr':new cljs.core.Keyword(null,"p1","p1",-936759954),'appliedToken':applied_to_p1__$1,'value':p1__$1,'onFocus':on_focus_p1,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.vertical"),'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'nillable':true,'icon':app.main.ui.ds.foundations.assets.icon.padding_top_bottom}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.vertical"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-simple",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__icon",'children':app.main.ui.icons.padding_top_bottom}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':(0),'onChange':on_p1_change,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.vertical"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__numeric-input",'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"),'value':p1__$1,'onFocus':on_focus_p1,'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'nillable':true})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_p2_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),applied_to_p2__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),p2__$1)) || ((p2__$1 == null))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'inputType':new cljs.core.Keyword(null,"horizontal-padding","horizontal-padding",-1543677678),'attr':new cljs.core.Keyword(null,"p2","p2",905500641),'appliedToken':applied_to_p2__$1,'value':p2__$1,'onFocus':on_focus_p2,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.horizontal"),'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'nillable':true,'icon':app.main.ui.ds.foundations.assets.icon.padding_left_right}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.horizontal"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-simple",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__icon",'children':app.main.ui.icons.padding_left_right}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':(0),'onChange':on_p2_change,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.horizontal"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__numeric-input",'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"),'value':p2__$1,'onFocus':on_focus_p2,'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'nillable':true})]}))]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.simple_padding_selection_STAR_.displayName = "simple-padding-selection*");

app.main.ui.workspace.sidebar.options.menus.layout_container.multiple_padding_selection_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$layout_container$multiple_padding_selection_STAR_(props_55556){
var on_change = props_55556.onChange;
var value = props_55556.value;
var ids = props_55556.ids;
var applied_tokens = props_55556.appliedTokens;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var p1 = new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(value);
var p2 = new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(value);
var p3 = new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(value);
var p4 = new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(value);
var applied_to_p1 = new cljs.core.Keyword(null,"p1","p1",-936759954).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_to_p2 = new cljs.core.Keyword(null,"p2","p2",905500641).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_to_p3 = new cljs.core.Keyword(null,"p3","p3",1731040739).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_to_p4 = new cljs.core.Keyword(null,"p4","p4",-1090126814).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(ids)],(function (value__$1,attr,event){
if(((typeof value__$1 === 'string') || (typeof value__$1 === 'number'))){
return (on_change.cljs$core$IFn$_invoke$arity$4 ? on_change.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"multiple","multiple",1244445549),attr,value__$1,event) : on_change.call(null,new cljs.core.Keyword(null,"multiple","multiple",1244445549),attr,value__$1,event));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}
}));
var on_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding)],(function (attr,event){
app.main.ui.workspace.sidebar.options.menus.layout_container.select_padding.cljs$core$IFn$_invoke$arity$1(attr);

return app.util.dom.select_target(event);
}));
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token,attr){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token,new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
var on_p1_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55551_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55551_SHARP_,new cljs.core.Keyword(null,"p1","p1",-936759954)) : on_change_SINGLEQUOTE_.call(null,p1__55551_SHARP_,new cljs.core.Keyword(null,"p1","p1",-936759954)));
}));
var on_p2_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55552_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55552_SHARP_,new cljs.core.Keyword(null,"p2","p2",905500641)) : on_change_SINGLEQUOTE_.call(null,p1__55552_SHARP_,new cljs.core.Keyword(null,"p2","p2",905500641)));
}));
var on_p3_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55553_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55553_SHARP_,new cljs.core.Keyword(null,"p3","p3",1731040739)) : on_change_SINGLEQUOTE_.call(null,p1__55553_SHARP_,new cljs.core.Keyword(null,"p3","p3",1731040739)));
}));
var on_p4_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55554_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55554_SHARP_,new cljs.core.Keyword(null,"p4","p4",-1090126814)) : on_change_SINGLEQUOTE_.call(null,p1__55554_SHARP_,new cljs.core.Keyword(null,"p4","p4",-1090126814)));
}));
var on_focus_p1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p1","p1",-936759954)) : on_focus.call(null,new cljs.core.Keyword(null,"p1","p1",-936759954)));
}));
var on_focus_p2 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p2","p2",905500641)) : on_focus.call(null,new cljs.core.Keyword(null,"p2","p2",905500641)));
}));
var on_focus_p3 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p3","p3",1731040739)) : on_focus.call(null,new cljs.core.Keyword(null,"p3","p3",1731040739)));
}));
var on_focus_p4 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p4","p4",-1090126814)) : on_focus.call(null,new cljs.core.Keyword(null,"p4","p4",-1090126814)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__paddings-multiple",'children':[((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'onChange':on_p1_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),applied_to_p1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),p1))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'inputType':new cljs.core.Keyword(null,"vertical-padding","vertical-padding",50408610),'attr':new cljs.core.Keyword(null,"p1","p1",-936759954),'appliedToken':applied_to_p1,'value':p1,'onFocus':on_focus_p1,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.top"),'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'icon':app.main.ui.ds.foundations.assets.icon.padding_top}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.top"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-multiple",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__icon",'children':app.main.ui.icons.padding_top}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':(0),'onChange':on_p1_change,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.top"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__numeric-input",'placeholder':"--",'value':p1,'onFocus':on_focus_p1,'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'data-attr':"p1"})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_p2_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),applied_to_p2)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),p2))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'inputType':new cljs.core.Keyword(null,"horizontal-padding","horizontal-padding",-1543677678),'attr':new cljs.core.Keyword(null,"p2","p2",905500641),'appliedToken':applied_to_p2,'value':p2,'onFocus':on_focus_p2,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.right"),'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'icon':app.main.ui.ds.foundations.assets.icon.padding_right}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.right"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-multiple",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__icon",'children':app.main.ui.icons.padding_right}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':(0),'onChange':on_p2_change,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.right"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__numeric-input",'placeholder':"--",'value':p2,'onFocus':on_focus_p2,'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'data-attr':"p2"})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'onChange':on_p3_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),applied_to_p3)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),p3))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'inputType':new cljs.core.Keyword(null,"vertical-padding","vertical-padding",50408610),'attr':new cljs.core.Keyword(null,"p3","p3",1731040739),'appliedToken':applied_to_p3,'value':p3,'onFocus':on_focus_p3,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.bottom"),'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'icon':app.main.ui.ds.foundations.assets.icon.padding_bottom}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.bottom"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-multiple",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__icon",'children':app.main.ui.icons.padding_bottom}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':(0),'onChange':on_p3_change,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.bottom"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__numeric-input",'placeholder':"--",'value':p3,'onFocus':on_focus_p3,'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'data-attr':"p3"})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_p4_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),applied_to_p4)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),p4))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'inputType':new cljs.core.Keyword(null,"horizontal-padding","horizontal-padding",-1543677678),'attr':new cljs.core.Keyword(null,"p4","p4",-1090126814),'appliedToken':applied_to_p4,'value':p4,'onFocus':on_focus_p4,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.left"),'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'icon':app.main.ui.ds.foundations.assets.icon.padding_left}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.left"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-multiple",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__icon",'children':app.main.ui.icons.padding_left}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':(0),'onChange':on_p4_change,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.left"),'className':"main_ui_workspace_sidebar_options_menus_layout_container__numeric-input",'placeholder':"--",'value':p4,'onFocus':on_focus_p4,'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur,'data-attr':"p4"})]}))]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.multiple_padding_selection_STAR_.displayName = "multiple-padding-selection*");

app.main.ui.workspace.sidebar.options.menus.layout_container.padding_section_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$layout_container$padding_section_STAR_(props_55557){
var on_change = props_55557.onChange;
var type = props_55557.type;
var on_type_change = props_55557.onTypeChange;
var props = props_55557;
var on_type_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_type_change)],(function (event){
var type__$1 = app.util.dom.get_data(app.util.dom.get_current_target(event),"type");
var type__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"multiple"))?new cljs.core.Keyword(null,"simple","simple",-581868663):new cljs.core.Keyword(null,"multiple","multiple",1244445549));
return (on_type_change.cljs$core$IFn$_invoke$arity$1 ? on_type_change.cljs$core$IFn$_invoke$arity$1(type__$2) : on_type_change.call(null,type__$2));
}));
var props__$1 = {...props, 'onChange':on_change};
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return (function (){
return app.main.ui.workspace.sidebar.options.menus.layout_container.on_padding_blur(null);
});
}));

return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-group",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-inputs",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"simple","simple",-581868663)))?rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.layout_container.simple_padding_selection_STAR_,props__$1):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.layout_container.multiple_padding_selection_STAR_,props__$1):null))}),rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.expand"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.padding.expand"),'data-type':app.common.data.name(type),'onClick':on_type_change_SINGLEQUOTE_,'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-toggle"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?"main_ui_workspace_sidebar_options_menus_layout_container__selected":""),'children':app.main.ui.icons.padding_extended})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.padding_section_STAR_.displayName = "padding-section*");

app.main.ui.workspace.sidebar.options.menus.layout_container.select_gap_BANG_ = (function app$main$ui$workspace$sidebar$options$menus$layout_container$select_gap_BANG_(value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_gap_selected(value));
});
app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_focus = (function app$main$ui$workspace$sidebar$options$menus$layout_container$on_gap_focus(type){
return app.main.ui.workspace.sidebar.options.menus.layout_container.select_gap_BANG_(type);
});
app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_blur = (function app$main$ui$workspace$sidebar$options$menus$layout_container$on_gap_blur(_event){
return app.main.ui.workspace.sidebar.options.menus.layout_container.select_gap_BANG_(null);
});
app.main.ui.workspace.sidebar.options.menus.layout_container.gap_section_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$layout_container$gap_section_STAR_(props_55564){
var on_change = props_55564.onChange;
var is_column = props_55564.isColumn;
var value = props_55564.value;
var ids = props_55564.ids;
var wrap_type = props_55564.wrapType;
var applied_tokens = props_55564.appliedTokens;
var props = props_55564;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var nowrap_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nowrap","nowrap",457264988),wrap_type);
var row_gap_disabled_QMARK_ = ((nowrap_QMARK_) && ((!(is_column))));
var col_gap_disabled_QMARK_ = ((nowrap_QMARK_) && (is_column));
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(wrap_type),rumext.v2.adapt(ids)],(function (value__$1,event,attr){
if(((typeof value__$1 === 'string') || (typeof value__$1 === 'number'))){
var G__55567 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nowrap",wrap_type);
var G__55568 = attr;
var G__55569 = value__$1;
var G__55570 = event;
return (on_change.cljs$core$IFn$_invoke$arity$4 ? on_change.cljs$core$IFn$_invoke$arity$4(G__55567,G__55568,G__55569,G__55570) : on_change.call(null,G__55567,G__55568,G__55569,G__55570));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nowrap",wrap_type))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colum-gap","colum-gap",2136475955),null,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),null], null), null):cljs.core.PersistentHashSet.createAsIfByAssoc([attr])),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}
}));
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token,attr){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token,new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
var on_row_gap_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55560_SHARP_,p2__55561_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3(p1__55560_SHARP_,p2__55561_SHARP_,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537)) : on_change_SINGLEQUOTE_.call(null,p1__55560_SHARP_,p2__55561_SHARP_,new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537)));
}));
var on_column_gap_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55562_SHARP_,p2__55563_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3(p1__55562_SHARP_,p2__55563_SHARP_,new cljs.core.Keyword(null,"column-gap","column-gap",384822863)) : on_change_SINGLEQUOTE_.call(null,p1__55562_SHARP_,p2__55563_SHARP_,new cljs.core.Keyword(null,"column-gap","column-gap",384822863)));
}));
var on_focus_row_gap = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_focus)],(function (){
return app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_focus(new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537));
}));
var on_focus_column_gap = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_focus)],(function (){
return app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_focus(new cljs.core.Keyword(null,"column-gap","column-gap",384822863));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return (function (){
return app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_blur(null);
});
}));

return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__gap-group",'children':[((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'values':new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(value)], null),'min':(0),'onChange':on_row_gap_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(applied_tokens))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(value)))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'attr':new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),'appliedToken':new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(applied_tokens),'value':new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(value),'onFocus':on_focus_row_gap,'onDetach':on_detach_token,'property':"Row gap",'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_blur,'nillable':true,'disabled':row_gap_disabled_QMARK_,'icon':app.main.ui.ds.foundations.assets.icon.gap_vertical}):rumext.v2.jsxs("div",{'title':"Row gap",'className':"main_ui_workspace_sidebar_options_menus_layout_container__row-gap"+" "+((row_gap_disabled_QMARK_)?"main_ui_workspace_sidebar_options_menus_layout_container__disabled":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__icon",'children':app.main.ui.icons.gap_vertical}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'min':(0),'onChange':on_row_gap_change,'className':"main_ui_workspace_sidebar_options_menus_layout_container__numeric-input",'placeholder':"--",'value':new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(value),'onFocus':on_focus_row_gap,'data-wrap-type':app.common.data.name(wrap_type),'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_blur,'data-type':"row-gap",'nillable':true,'disabled':row_gap_disabled_QMARK_})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_column_gap_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(applied_tokens))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(value)))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'attr':new cljs.core.Keyword(null,"column-gap","column-gap",384822863),'appliedToken':new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(applied_tokens),'value':new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(value),'onFocus':on_focus_column_gap,'onDetach':on_detach_token,'property':"Column gap",'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_blur,'nillable':true,'disabled':col_gap_disabled_QMARK_,'icon':app.main.ui.ds.foundations.assets.icon.gap_horizontal}):rumext.v2.jsxs("div",{'title':"Column gap",'className':"main_ui_workspace_sidebar_options_menus_layout_container__column-gap"+" "+((col_gap_disabled_QMARK_)?"main_ui_workspace_sidebar_options_menus_layout_container__disabled":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__icon",'children':app.main.ui.icons.gap_horizontal}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'min':(0),'onChange':on_column_gap_change,'className':"main_ui_workspace_sidebar_options_menus_layout_container__numeric-input",'placeholder':"--",'value':new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(value),'onFocus':on_focus_column_gap,'data-wrap-type':app.common.data.name(wrap_type),'onBlur':app.main.ui.workspace.sidebar.options.menus.layout_container.on_gap_blur,'data-type':"column-gap",'nillable':true,'disabled':col_gap_disabled_QMARK_})]}))]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.gap_section_STAR_.displayName = "gap-section*");

app.main.ui.workspace.sidebar.options.menus.layout_container.direction_row_grid = (function app$main$ui$workspace$sidebar$options$menus$layout_container$direction_row_grid(props_55579){
var on_change = (props_55579["on-change"]);
var value = props_55579.value;
var props = props_55579;
return rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'class':"main_ui_workspace_sidebar_options_menus_layout_container__direction-row-grid",'selected':app.common.data.name(value),'decode-fn':cljs.core.keyword,'on-change':on_change,'name':"grid-direction",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"row",'id':"grid-direction-row",'title':"Row",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.dir_icons_refactor(new cljs.core.Keyword(null,"row","row",-570139521))}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"column",'id':"grid-direction-column",'title':"Column",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.dir_icons_refactor(new cljs.core.Keyword(null,"column","column",2078222095))})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.direction_row_grid.displayName = "direction-row-grid");

app.main.ui.workspace.sidebar.options.menus.layout_container.grid_edit_mode = (function app$main$ui$workspace$sidebar$options$menus$layout_container$grid_edit_mode(props_55584){
var id = props_55584.id;
var edition = rumext.v2.deref(app.main.refs.selected_edition);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,edition);
var toggle_edit_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(edition)],(function (){
if((!(active_QMARK_))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_edition_mode(id));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
}
}));
return rumext.v2.jsx("button",{'alt':"Grid edit mode",'onClick':toggle_edit_mode,'className':"main_ui_workspace_sidebar_options_menus_layout_container__edit-mode-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.options.edit-grid")});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.grid_edit_mode.displayName = "grid-edit-mode");

app.main.ui.workspace.sidebar.options.menus.layout_container.align_grid_row = (function app$main$ui$workspace$sidebar$options$menus$layout_container$align_grid_row(props_55585){
var on_change = (props_55585["on-change"]);
var is_column = (props_55585["is-column"]);
var value = props_55585.value;
var type = ((is_column)?"column":"row");
return rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'class':"main_ui_workspace_sidebar_options_menus_layout_container__align-grid-row",'selected':app.common.data.name(value),'decode-fn':cljs.core.keyword,'on-change':on_change,'name':""+"flex-align-items-"+(type ?? ""),'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"start",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon(new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"start","start",-355208981),is_column),'title':"Align items start",'id':""+"align-items-start-"+(type ?? "")}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"center",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon(new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),is_column),'title':"Align items center",'id':""+"align-items-center-"+(type ?? "")}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"end",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon(new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"end","end",-268185958),is_column),'title':"Align items end",'id':""+"align-items-end-"+(type ?? "")})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.align_grid_row.displayName = "align-grid-row");

app.main.ui.workspace.sidebar.options.menus.layout_container.justify_grid_row = (function app$main$ui$workspace$sidebar$options$menus$layout_container$justify_grid_row(props_55586){
var on_change = (props_55586["on-change"]);
var is_column = (props_55586["is-column"]);
var value = props_55586.value;
var type = ((is_column)?"column":"row");
return rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'class':"main_ui_workspace_sidebar_options_menus_layout_container__justify-grid-row",'selected':app.common.data.name(value),'on-change':on_change,'decode-fn':cljs.core.keyword,'name':""+"grid-justify-items-"+(type ?? ""),'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"start",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon(new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),new cljs.core.Keyword(null,"start","start",-355208981),is_column),'title':"Justify items start",'id':""+"justify-items-start-"+(type ?? "")},"justify-item-start"),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"center",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon(new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),new cljs.core.Keyword(null,"center","center",-748944368),is_column),'title':"Justify items center",'id':""+"justify-items-center-"+(type ?? "")},"justify-item-center"),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"end",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon(new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),new cljs.core.Keyword(null,"end","end",-268185958),is_column),'title':"Justify items end",'id':""+"justify-items-end-"+(type ?? "")},"justify-item-end"),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"space-around",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon(new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),new cljs.core.Keyword(null,"space-around","space-around",248184132),is_column),'title':"Justify items space-around",'id':""+"justify-items-space-around-"+(type ?? "")},"justify-item-space-around"),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"space-between",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon(new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),new cljs.core.Keyword(null,"space-between","space-between",1908176695),is_column),'title':"Justify items space-between",'id':""+"justify-items-space-between-"+(type ?? "")},"justify-item-space-between"),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"stretch",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_grid_icon(new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),is_column),'title':"Justify items stretch",'id':""+"justify-items-stretch-"+(type ?? "")},"justify-item-stretch")]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.justify_grid_row.displayName = "justify-grid-row");

app.main.ui.workspace.sidebar.options.menus.layout_container.manage_values = (function app$main$ui$workspace$sidebar$options$menus$layout_container$manage_values(p__55587){
var map__55588 = p__55587;
var map__55588__$1 = cljs.core.__destructure_map(map__55588);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55588__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55588__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__55589 = type;
var G__55589__$1 = (((G__55589 instanceof cljs.core.Keyword))?G__55589.fqn:null);
switch (G__55589__$1) {
case "auto":
return "auto";

break;
case "percent":
return app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$1((value / (100)));

break;
case "flex":
return app.main.ui.formats.format_frs.cljs$core$IFn$_invoke$arity$1(value);

break;
case "fixed":
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(value);

break;
default:
return value;

}
});
app.main.ui.workspace.sidebar.options.menus.layout_container.grid_track_info = (function app$main$ui$workspace$sidebar$options$menus$layout_container$grid_track_info(props_55592){
var remove_element = (props_55592["remove-element"]);
var set_column_type = (props_55592["set-column-type"]);
var on_select_track = (props_55592["on-select-track"]);
var is_column = (props_55592["is-column"]);
var index = props_55592.index;
var hover_track = (props_55592["hover-track"]);
var type = props_55592.type;
var set_column_value = (props_55592["set-column-value"]);
var column = props_55592.column;
var reorder_track = (props_55592["reorder-track"]);
var drop_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(type),rumext.v2.adapt(reorder_track),rumext.v2.adapt(index)],(function (drop_position,data,event){
var G__55596 = type;
var G__55597 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(data);
var G__55598 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),drop_position))?(index - (1)):index);
var G__55599 = (!(app.util.keyboard.mod_QMARK_(event)));
return (reorder_track.cljs$core$IFn$_invoke$arity$4 ? reorder_track.cljs$core$IFn$_invoke$arity$4(G__55596,G__55597,G__55598,G__55599) : reorder_track.call(null,G__55596,G__55597,G__55598,G__55599));
}));
var pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(type),rumext.v2.adapt(hover_track),rumext.v2.adapt(index)],(function (){
return (hover_track.cljs$core$IFn$_invoke$arity$3 ? hover_track.cljs$core$IFn$_invoke$arity$3(type,index,true) : hover_track.call(null,type,index,true));
}));
var pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(type),rumext.v2.adapt(hover_track),rumext.v2.adapt(index)],(function (){
return (hover_track.cljs$core$IFn$_invoke$arity$3 ? hover_track.cljs$core$IFn$_invoke$arity$3(type,index,false) : hover_track.call(null,type,index,false));
}));
var handle_select_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select_track),rumext.v2.adapt(type),rumext.v2.adapt(index)],(function (){
if(cljs.core.truth_(on_select_track)){
return (on_select_track.cljs$core$IFn$_invoke$arity$2 ? on_select_track.cljs$core$IFn$_invoke$arity$2(type,index) : on_select_track.call(null,type,index));
} else {
return null;
}
}));
var vec__55593 = app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/grid-track",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),drop_track,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-column","is-column",1610131457),is_column,new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),true], 0));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55593,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55593,(1),null);
return rumext.v2.jsxs("div",{'ref':dref,'onPointerEnter':pointer_enter,'onPointerLeave':pointer_leave,'className':"main_ui_workspace_sidebar_options_menus_layout_container__track-info"+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"center","center",-748944368)))))?"main_ui_workspace_sidebar_options_menus_layout_container__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_sidebar_options_menus_layout_container__dnd-over-bot":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__track-info-container",'children':[rumext.v2.jsx("div",{'onClick':handle_select_track,'className':"main_ui_workspace_sidebar_options_menus_layout_container__track-info-dir-icon",'children':(cljs.core.truth_(is_column)?app.main.ui.icons.flex_vertical:app.main.ui.icons.flex_horizontal)}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__track-info-value",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'value':new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(column),'onChange':(function (p1__55590_SHARP_){
return (set_column_value.cljs$core$IFn$_invoke$arity$3 ? set_column_value.cljs$core$IFn$_invoke$arity$3(type,index,p1__55590_SHARP_) : set_column_value.call(null,type,index,p1__55590_SHARP_));
}),'placeholder':"--",'min':(0),'disabled':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(column))})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__track-info-unit",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'class':"main_ui_workspace_sidebar_options_menus_layout_container__track-info-unit-selector",'default-value':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(column),'options':new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"label","label",1718410804),"FR"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"label","label",1718410804),"AUTO"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"label","label",1718410804),"PX"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"percent","percent",2031453817),new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),'on-change':(function (p1__55591_SHARP_){
return (set_column_type.cljs$core$IFn$_invoke$arity$3 ? set_column_type.cljs$core$IFn$_invoke$arity$3(type,index,p1__55591_SHARP_) : set_column_type.call(null,type,index,p1__55591_SHARP_));
})})})]}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.delete"),'onClick':remove_element,'data-type':type,'data-index':index,'icon':app.main.ui.ds.foundations.assets.icon.remove})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.grid_track_info.displayName = "grid-track-info");

app.main.ui.workspace.sidebar.options.menus.layout_container.grid_columns_row = (function app$main$ui$workspace$sidebar$options$menus$layout_container$grid_columns_row(props_55601){
var remove_element = (props_55601["remove-element"]);
var set_column_type = (props_55601["set-column-type"]);
var column_values = (props_55601["column-values"]);
var on_select_track = (props_55601["on-select-track"]);
var is_column = (props_55601["is-column"]);
var expanded_QMARK_ = (props_55601["expanded?"]);
var hover_track = (props_55601["hover-track"]);
var toggle = props_55601.toggle;
var add_new_element = (props_55601["add-new-element"]);
var set_column_value = (props_55601["set-column-value"]);
var reorder_track = (props_55601["reorder-track"]);
var column_num = cljs.core.count(column_values);
var direction = (((column_num > (1)))?((is_column)?"Columns ":"Rows "):((is_column)?"Column ":"Row "));
var track_name = ""+(direction ?? "")+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_num,(0)))?" - empty":column_num) ?? "");
var track_detail = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.options.menus.layout_container.manage_values,column_values));
var type = (cljs.core.truth_(is_column)?new cljs.core.Keyword(null,"column","column",2078222095):new cljs.core.Keyword(null,"row","row",-570139521));
var testid = ((cljs.core.not(is_column))?"inspect-layout-rows":null);
var add_track = (function (){
if(cljs.core.truth_(expanded_QMARK_)){
} else {
(toggle.cljs$core$IFn$_invoke$arity$0 ? toggle.cljs$core$IFn$_invoke$arity$0() : toggle.call(null));
}

return (add_new_element.cljs$core$IFn$_invoke$arity$2 ? add_new_element.cljs$core$IFn$_invoke$arity$2(type,app.common.types.shape.layout.default_track_value) : add_new_element.call(null,type,app.common.types.shape.layout.default_track_value));
});
return rumext.v2.jsxs("div",{'data-testid':testid,'className':"main_ui_workspace_sidebar_options_menus_layout_container__grid-tracks",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__grid-track-header",'children':[rumext.v2.jsx("button",{'onClick':toggle,'className':"main_ui_workspace_sidebar_options_menus_layout_container__expand-icon",'children':app.main.ui.icons.menu}),rumext.v2.jsxs("div",{'onClick':toggle,'className':"main_ui_workspace_sidebar_options_menus_layout_container__track-title",'children':[rumext.v2.jsx("div",{'title':track_name,'className':"main_ui_workspace_sidebar_options_menus_layout_container__track-name",'children':track_name}),rumext.v2.jsx("div",{'title':track_detail,'className':"main_ui_workspace_sidebar_options_menus_layout_container__track-detail",'children':track_detail})]}),rumext.v2.jsx("button",{'onClick':add_track,'className':"main_ui_workspace_sidebar_options_menus_layout_container__add-column",'children':app.main.ui.icons.add})]}),(cljs.core.truth_(expanded_QMARK_)?rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__grid-tracks-info-container",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55602){
var vec__55603 = p__55602;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55603,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55603,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.grid_track_info,{'is-column':is_column,'index':index,'hover-track':hover_track,'type':type,'set-column-value':set_column_value,'column':column,'reorder-track':reorder_track,'remove-element':remove_element,'set-column-type':set_column_type,'on-select-track':on_select_track},""+(index ?? "")+"-"+(app.common.data.name(type) ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(column_values))})}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_container.grid_columns_row.displayName = "grid-columns-row");

app.main.ui.workspace.sidebar.options.menus.layout_container.open_flex_help = (function app$main$ui$workspace$sidebar$options$menus$layout_container$open_flex_help(_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1(app.config.flex_help_uri));
});
app.main.ui.workspace.sidebar.options.menus.layout_container.open_grid_help = (function app$main$ui$workspace$sidebar$options$menus$layout_container$open_grid_help(_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1(app.config.grid_help_uri));
});
app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_menu = (function (component__35533__auto__){
return rumext.v2.memo_SINGLEQUOTE_(component__35533__auto__,(function (new_props_55610,old_props_55611){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55610.ids,old_props_55611.ids)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55610.multiple,old_props_55611.multiple)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55610.values,old_props_55611.values)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55610["applied-tokens"]),(old_props_55611["applied-tokens"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55610.shapes,old_props_55611.shapes)))))))));
}));
})((function app$main$ui$workspace$sidebar$options$menus$layout_container$layout_container_menu(props_55609){
var map__55633 = rumext.v2.util.wrap_props(props_55609);
var map__55633__$1 = cljs.core.__destructure_map(map__55633);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55633__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55633__$1,new cljs.core.Keyword(null,"values","values",372645556));
var multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55633__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
var applied_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55633__$1,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
var layout_type = new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(values);
var has_layout_QMARK_ = (!((layout_type == null)));
var show_dropdown_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_dropdown_QMARK_ = cljs.core.deref(show_dropdown_STAR_);
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.truth_(layout_type)){
return true;
} else {
return false;
}
}));
var open_QMARK_ = cljs.core.deref(open_STAR_);
var on_toggle_visibility = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_STAR_,cljs.core.not);
}));
var on_add_layout = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"type"));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.workspace.shape_layout.create_layout(type),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:sidebar"], null)));

return cljs.core.reset_BANG_(open_STAR_,true);
}));
var on_remove_layout = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.remove_layout(ids));

return cljs.core.reset_BANG_(open_STAR_,false);
}));
var saved_dir = new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670).cljs$core$IFn$_invoke$arity$1(values);
var is_column = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),saved_dir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-reverse","column-reverse",278726587),saved_dir)));
var wrap_type = new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597).cljs$core$IFn$_invoke$arity$1(values);
var toggle_wrap = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(wrap_type),rumext.v2.adapt(ids)],(function (){
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrap_type,new cljs.core.Keyword(null,"wrap","wrap",851669987)))?new cljs.core.Keyword(null,"nowrap","nowrap",457264988):new cljs.core.Keyword(null,"wrap","wrap",851669987));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),type], null)));
}));
var align_items = new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895).cljs$core$IFn$_invoke$arity$1(values);
var set_align_items = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)], null)));
}));
var justify_content = new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(values);
var set_justify_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)], null)));
}));
var align_content = new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(values);
var on_align_content_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(align_content)],(function (value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(align_content,value)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),new cljs.core.Keyword(null,"stretch","stretch",-1888837380)], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value)], null)));
}
}));
var on_gap_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (multiple_QMARK_,type,val){
var val__$1 = app.common.math.finite(val,(0));
if(multiple_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),val__$1,new cljs.core.Keyword(null,"column-gap","column-gap",384822863),val__$1], null)], null)));
} else {
if((!((type == null)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),cljs.core.PersistentArrayMap.createAsIfByAssoc([type,val__$1])], null)));
} else {
return null;
}
}
}));
var on_padding_type_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),type], null)));
}));
var on_padding_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type,prop,val){
var val__$1 = app.common.math.finite(val,(0));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"simple","simple",-581868663))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"p1","p1",-936759954))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",-936759954),val__$1,new cljs.core.Keyword(null,"p3","p3",1731040739),val__$1], null)], null)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"simple","simple",-581868663))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"p2","p2",905500641))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p2","p2",905500641),val__$1,new cljs.core.Keyword(null,"p4","p4",-1090126814),val__$1], null)], null)));
} else {
if((!((prop == null)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,val__$1])], null)));
} else {
return null;
}
}
}
}));
var saved_grid_dir = new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661).cljs$core$IFn$_invoke$arity$1(values);
var on_direction_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(layout_type),rumext.v2.adapt(ids)],(function (dir){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flex","flex",-1425124628),layout_type)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),dir], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),dir], null)));
}
}));
var align_items_row = new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895).cljs$core$IFn$_invoke$arity$1(values);
var align_items_column = new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173).cljs$core$IFn$_invoke$arity$1(values);
var on_column_align_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),value], null)));
}));
var on_row_align_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),value], null)));
}));
var grid_justify_content_row = new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(values);
var grid_justify_content_column = new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(values);
var on_column_justify_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),value], null)));
}));
var on_row_justify_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),value], null)));
}));
var on_toggle_dropdown_visibility = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_dropdown_STAR_,cljs.core.not);
}));
var on_hide_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_dropdown_STAR_,false);
}));
return rumext.v2.jsxs("div",{'data-testid':"inspect-layout",'className':"main_ui_workspace_sidebar_options_menus_layout_container__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_layout_QMARK_,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':on_toggle_visibility,'title':"Layout",'className':(((!(has_layout_QMARK_)))?"main_ui_workspace_sidebar_options_menus_layout_container__title-spacing-layout":""),'children':(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(multiple);
if(and__5023__auto__){
return new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(values);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__title-actions",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-layout"),'onClick':on_toggle_dropdown_visibility,'icon':app.main.ui.ds.foundations.assets.icon.menu}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':show_dropdown_QMARK_,'on-close':on_hide_dropdown,'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__layout-options",'children':[rumext.v2.jsx("button",{'data-type':"flex",'onClick':on_add_layout,'className':"main_ui_workspace_sidebar_options_menus_layout_container__layout-option",'children':"Flex layout"}),rumext.v2.jsx("button",{'data-type':"grid",'onClick':on_add_layout,'className':"main_ui_workspace_sidebar_options_menus_layout_container__layout-option",'children':"Grid layout"})]})}),((has_layout_QMARK_)?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.remove-layout"),'onClick':on_remove_layout,'icon':app.main.ui.ds.foundations.assets.icon.remove}):null)]}):rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__title-actions",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-layout"),'onClick':on_toggle_dropdown_visibility,'icon':app.main.ui.ds.foundations.assets.icon.add}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':show_dropdown_QMARK_,'on-close':on_hide_dropdown,'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__layout-options",'children':[rumext.v2.jsx("button",{'data-type':"flex",'onClick':on_add_layout,'className':"main_ui_workspace_sidebar_options_menus_layout_container__layout-option",'children':"Flex layout"}),rumext.v2.jsx("button",{'data-type':"grid",'onClick':on_add_layout,'className':"main_ui_workspace_sidebar_options_menus_layout_container__layout-option",'children':"Grid layout"})]})}),((has_layout_QMARK_)?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.delete"),'onClick':on_remove_layout,'icon':app.main.ui.ds.foundations.assets.icon.remove}):null)]}))})}),((((open_QMARK_) && (((has_layout_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),layout_type))))))?(function (){var G__55644 = layout_type;
var G__55644__$1 = (((G__55644 instanceof cljs.core.Keyword))?G__55644.fqn:null);
switch (G__55644__$1) {
case "flex":
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__flex-layout-menu",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__first-row",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.align_row,{'is-column':is_column,'value':align_items,'on-change':set_align_items}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.direction_row_flex,{'on-change':on_direction_change,'value':saved_dir}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.wrap_row,{'wrap-type':wrap_type,'on-click':toggle_wrap})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__second-row main_ui_workspace_sidebar_options_menus_layout_container__help-button-wrapper",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.justify_content_row,{'is-column':is_column,'justify-content':justify_content,'on-change':set_justify_content}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.help-center"),'onClick':app.main.ui.workspace.sidebar.options.menus.layout_container.open_flex_help,'icon':app.main.ui.ds.foundations.assets.icon.help})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrap","wrap",851669987),wrap_type))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__third-row",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.align_content_row,{'is-column':is_column,'value':align_content,'on-change':on_align_content_change})}):null),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__forth-row",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.gap_section_STAR_,{'isColumn':is_column,'wrapType':wrap_type,'onChange':on_gap_change,'ids':ids,'appliedTokens':applied_tokens,'value':new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911).cljs$core$IFn$_invoke$arity$1(values)}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.padding_section_STAR_,{'value':new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(values),'type':new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837).cljs$core$IFn$_invoke$arity$1(values),'onTypeChange':on_padding_type_change,'ids':ids,'appliedTokens':applied_tokens,'onChange':on_padding_change})]})]});

break;
case "grid":
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__grid-layout-menu",'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ids)))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__edit-grid-wrapper",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.grid_edit_mode,{'id':cljs.core.first(ids)}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.help-center"),'onClick':app.main.ui.workspace.sidebar.options.menus.layout_container.open_grid_help,'icon':app.main.ui.ds.foundations.assets.icon.help})]}):null),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__first-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__direction-edit",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__direction",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.direction_row_grid,{'value':saved_grid_dir,'on-change':on_direction_change})})}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.align_grid_row,{'is-column':false,'value':align_items_row,'on-change':on_row_align_change}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.align_grid_row,{'is-column':true,'value':align_items_column,'on-change':on_column_align_change})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__row main_ui_workspace_sidebar_options_menus_layout_container__grid-layout-align",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.justify_grid_row,{'is-column':true,'value':grid_justify_content_column,'on-change':on_column_justify_change}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.justify_grid_row,{'is-column':false,'value':grid_justify_content_row,'on-change':on_row_justify_change})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__gap-row",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.gap_section_STAR_,{'onChange':on_gap_change,'ids':ids,'appliedTokens':applied_tokens,'value':new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911).cljs$core$IFn$_invoke$arity$1(values)})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-row",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.padding_section_STAR_,{'value':new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(values),'type':new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837).cljs$core$IFn$_invoke$arity$1(values),'appliedTokens':applied_tokens,'onTypeChange':on_padding_type_change,'onChange':on_padding_change})})]});

break;
default:
return null;

}
})():null)]});
}));

(app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_menu.displayName = "layout-container-menu");

app.main.ui.workspace.sidebar.options.menus.layout_container.grid_layout_edition = (function (component__35533__auto__){
return rumext.v2.memo_SINGLEQUOTE_(component__35533__auto__,(function (new_props_55650,old_props_55651){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55650.ids,old_props_55651.ids)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55650.values,old_props_55651.values)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55650["applied-tokens"]),(old_props_55651["applied-tokens"]))))));
}));
})((function app$main$ui$workspace$sidebar$options$menus$layout_container$grid_layout_edition(props_55649){
var map__55652 = rumext.v2.util.wrap_props(props_55649);
var map__55652__$1 = cljs.core.__destructure_map(map__55652);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55652__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55652__$1,new cljs.core.Keyword(null,"values","values",372645556));
var applied_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55652__$1,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
var saved_grid_dir = new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661).cljs$core$IFn$_invoke$arity$1(values);
var on_direction_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (dir){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661),dir], null)));
}));
var on_gap_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (multiple_QMARK_,type,val){
var val__$1 = app.common.math.finite(val,(0));
if(cljs.core.truth_(multiple_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),val__$1,new cljs.core.Keyword(null,"column-gap","column-gap",384822863),val__$1], null)], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),cljs.core.PersistentArrayMap.createAsIfByAssoc([type,val__$1])], null)));
}
}));
var on_padding_type_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),type], null)));
}));
var on_padding_change = (function (type,prop,val){
var val__$1 = app.common.math.finite(val,(0));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"simple","simple",-581868663))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"p1","p1",-936759954))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",-936759954),val__$1,new cljs.core.Keyword(null,"p3","p3",1731040739),val__$1], null)], null)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"simple","simple",-581868663))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"p2","p2",905500641))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p2","p2",905500641),val__$1,new cljs.core.Keyword(null,"p4","p4",-1090126814),val__$1], null)], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,val__$1])], null)));

}
}
});
var align_items_row = new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895).cljs$core$IFn$_invoke$arity$1(values);
var align_items_column = new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173).cljs$core$IFn$_invoke$arity$1(values);
var on_column_align_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),value], null)));
}));
var on_row_align_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),value], null)));
}));
var grid_justify_content_row = new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(values);
var grid_justify_content_column = new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(values);
var on_column_justify_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),value], null)));
}));
var on_row_justify_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),value], null)));
}));
var columns_open_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var rows_open_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var column_values = new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(values);
var rows_values = new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(values);
var toggle_columns_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(columns_open_QMARK_,cljs.core.not);
}));
var toggle_rows_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rows_open_QMARK_,cljs.core.not);
}));
var add_new_element = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type,value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$3(ids,type,value));
}));
var remove_element = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (event){
var type = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"type"));
var index = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"index"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.remove_layout_track(ids,type,index));
}));
var reorder_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type,from_index,to_index,move_content_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.reorder_layout_track(ids,type,from_index,to_index,move_content_QMARK_));
}));
var hover_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type,index,hover_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.hover_layout_track(ids,type,index,hover_QMARK_));
}));
var handle_select_track = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type,index){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.select_track_cells(cljs.core.first(ids),type,index));
}));
var set_column_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type,index,value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.change_layout_track(ids,type,index,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null)));
}));
var set_column_type = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type,index,track_type){
var value = (function (){var G__55657 = track_type;
var G__55657__$1 = (((G__55657 instanceof cljs.core.Keyword))?G__55657.fqn:null);
switch (G__55657__$1) {
case "auto":
return null;

break;
case "flex":
return (1);

break;
case "percent":
return (20);

break;
case "fixed":
return (100);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55657__$1)].join('')));

}
})();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.change_layout_track(ids,type,index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"type","type",1174270348),track_type], null)));
}));
var handle_locate_grid = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid_layout.editor.locate_board(cljs.core.first(ids)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__grid-layout-menu",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__grid-first-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__grid-layout-menu-title",'children':"GRID LAYOUT"}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'className':"main_ui_workspace_sidebar_options_menus_layout_container__help-button",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.help-center"),'onClick':app.main.ui.workspace.sidebar.options.menus.layout_container.open_grid_help,'icon':app.main.ui.ds.foundations.assets.icon.help}),rumext.v2.jsx("button",{'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.clear_edition_mode());
}),'className':"main_ui_workspace_sidebar_options_menus_layout_container__exit-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.options.exit")})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__row main_ui_workspace_sidebar_options_menus_layout_container__first-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__direction-edit",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__direction",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.direction_row_grid,{'value':saved_grid_dir,'on-change':on_direction_change})})}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.align_grid_row,{'is-column':false,'value':align_items_row,'on-change':on_row_align_change}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.align_grid_row,{'is-column':true,'value':align_items_column,'on-change':on_column_align_change})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__row main_ui_workspace_sidebar_options_menus_layout_container__grid-layout-align",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.justify_grid_row,{'is-column':true,'value':grid_justify_content_column,'on-change':on_column_justify_change}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.justify_grid_row,{'is-column':false,'value':grid_justify_content_row,'on-change':on_row_justify_change}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'className':"main_ui_workspace_sidebar_options_menus_layout_container__locate-button",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.top-bar.locate.tooltip"),'onClick':handle_locate_grid,'icon':app.main.ui.ds.foundations.assets.icon.locate})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__gap-row",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.gap_section_STAR_,{'onChange':on_gap_change,'ids':ids,'appliedTokens':applied_tokens,'value':new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911).cljs$core$IFn$_invoke$arity$1(values)})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__padding-row main_ui_workspace_sidebar_options_menus_layout_container__padding-section",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.padding_section_STAR_,{'value':new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(values),'type':new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837).cljs$core$IFn$_invoke$arity$1(values),'onTypeChange':on_padding_type_change,'onChange':on_padding_change})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_container__grid-tracks-row",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.grid_columns_row,{'is-column':true,'hover-track':hover_track,'expanded?':cljs.core.deref(columns_open_QMARK_),'set-column-value':set_column_value,'toggle':toggle_columns_open,'add-new-element':add_new_element,'reorder-track':reorder_track,'remove-element':remove_element,'set-column-type':set_column_type,'on-select-track':handle_select_track,'column-values':column_values}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.grid_columns_row,{'is-column':false,'hover-track':hover_track,'expanded?':cljs.core.deref(rows_open_QMARK_),'set-column-value':set_column_value,'toggle':toggle_rows_open,'add-new-element':add_new_element,'reorder-track':reorder_track,'remove-element':remove_element,'set-column-type':set_column_type,'on-select-track':handle_select_track,'column-values':rows_values})]})]});
}));

(app.main.ui.workspace.sidebar.options.menus.layout_container.grid_layout_edition.displayName = "grid-layout-edition");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.layout_container.js.map
