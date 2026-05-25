import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.formats.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.flex_controls.common');
app.main.ui.flex_controls.common.font_size = (11);
app.main.ui.flex_controls.common.distance_color = "var(--color-accent-quaternary)";
app.main.ui.flex_controls.common.distance_text_color = "var(--app-white)";
app.main.ui.flex_controls.common.warning_color = "var(--status-color-warning-500)";
app.main.ui.flex_controls.common.flex_display_pill_width = (40);
app.main.ui.flex_controls.common.flex_display_pill_height = (20);
app.main.ui.flex_controls.common.flex_display_pill_border_radius = (4);
app.main.ui.flex_controls.common.flex_display_pill = (function app$main$ui$flex_controls$common$flex_display_pill(props_79845){
var map__79847 = rumext.v2.util.wrap_props(props_79845);
var map__79847__$1 = cljs.core.__destructure_map(map__79847);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79847__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79847__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79847__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79847__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79847__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var border_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79847__$1,new cljs.core.Keyword(null,"border-radius","border-radius",419594011));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79847__$1,new cljs.core.Keyword(null,"value","value",305978217));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79847__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return rumext.v2.jsxs("g",{'className':"distance-pill",'children':[rumext.v2.jsx("rect",{'x':x,'y':y,'width':width,'height':height,'rx':border_radius,'ry':border_radius,'style':{'fill':color}}),rumext.v2.jsx("text",{'x':(x + (width / (2))),'y':(y + (height / (2))),'textAnchor':"middle",'dominantBaseline':"central",'style':{'fill':app.main.ui.flex_controls.common.distance_text_color,'fontSize':font_size},'children':app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})())})]});
});

(app.main.ui.flex_controls.common.flex_display_pill.displayName = "flex-display-pill");


//# sourceMappingURL=app.main.ui.flex_controls.common.js.map
