import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.colorpicker.color_inputs');
app.main.ui.workspace.colorpicker.color_inputs.parse_hex = (function app$main$ui$workspace$colorpicker$color_inputs$parse_hex(val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(val),"#")){
return val;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('');
}
});
app.main.ui.workspace.colorpicker.color_inputs.value__GT_hsv_value = (function app$main$ui$workspace$colorpicker$color_inputs$value__GT_hsv_value(val){
return ((255) * (val / (100)));
});
app.main.ui.workspace.colorpicker.color_inputs.hsv_value__GT_value = (function app$main$ui$workspace$colorpicker$color_inputs$hsv_value__GT_value(val){
return ((val / (255)) * (100));
});
app.main.ui.workspace.colorpicker.color_inputs.color_inputs = (function app$main$ui$workspace$colorpicker$color_inputs$color_inputs(props_77048){
var map__77055 = rumext.v2.util.wrap_props(props_77048);
var map__77055__$1 = cljs.core.__destructure_map(map__77055);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77055__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77055__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var disable_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77055__$1,new cljs.core.Keyword(null,"disable-opacity","disable-opacity",1547998851));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77055__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var map__77056 = color;
var map__77056__$1 = cljs.core.__destructure_map(map__77056);
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77056__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77056__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77056__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77056__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77056__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77056__$1,new cljs.core.Keyword(null,"v","v",21465059));
var hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77056__$1,new cljs.core.Keyword(null,"hex","hex",41691346));
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77056__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var refs = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"hex","hex",41691346),rumext.v2.use_ref(null),new cljs.core.Keyword(null,"r","r",-471384190),rumext.v2.use_ref(null),new cljs.core.Keyword(null,"g","g",1738089905),rumext.v2.use_ref(null),new cljs.core.Keyword(null,"b","b",1482224470),rumext.v2.use_ref(null),new cljs.core.Keyword(null,"h","h",1109658740),rumext.v2.use_ref(null),new cljs.core.Keyword(null,"s","s",1705939918),rumext.v2.use_ref(null),new cljs.core.Keyword(null,"v","v",21465059),rumext.v2.use_ref(null),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),rumext.v2.use_ref(null)], null);
var setup_hex_color = (function (hex__$1){
var vec__77057 = app.common.types.color.hex__GT_rgb(hex__$1);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77057,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77057,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77057,(2),null);
var vec__77060 = app.common.types.color.hex__GT_hsv(hex__$1);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77060,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77060,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77060,(2),null);
var G__77063 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hex","hex",41691346),hex__$1,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"s","s",1705939918),s,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77063) : on_change.call(null,G__77063));
});
var on_change_hex = (function (e){
var val = app.main.ui.workspace.colorpicker.color_inputs.parse_hex(app.util.dom.get_target_val(e));
if(app.common.types.color.valid_hex_color_QMARK_(val)){
return setup_hex_color(val);
} else {
return null;
}
});
var on_blur_hex = (function (e){
var val = app.util.dom.get_target_val(e);
var val__$1 = ((app.common.types.color.color_string_QMARK_(val))?app.common.types.color.parse(val):((app.common.types.color.valid_hex_color_QMARK_(app.main.ui.workspace.colorpicker.color_inputs.parse_hex(val)))?app.main.ui.workspace.colorpicker.color_inputs.parse_hex(val):null));
if((!((val__$1 == null)))){
return setup_hex_color(val__$1);
} else {
return null;
}
});
var apply_property_change = (function (property,val){
var val__$1 = (function (){var G__77064 = property;
var G__77064__$1 = (((G__77064 instanceof cljs.core.Keyword))?G__77064.fqn:null);
switch (G__77064__$1) {
case "s":
return (val / (100));

break;
case "v":
return app.main.ui.workspace.colorpicker.color_inputs.value__GT_hsv_value(val);

break;
case "alpha":
return (val / (100));

break;
default:
return val;

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword(null,"alpha","alpha",-1574982441))){
var G__77065 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alpha","alpha",-1574982441),val__$1], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77065) : on_change.call(null,G__77065));
} else {
if(cljs.core.truth_((function (){var fexpr__77066 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"b","b",1482224470),null], null), null);
return (fexpr__77066.cljs$core$IFn$_invoke$arity$1 ? fexpr__77066.cljs$core$IFn$_invoke$arity$1(property) : fexpr__77066.call(null,property));
})())){
var map__77067 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color,cljs.core.PersistentHashMap.fromArrays([property],[val__$1])], 0));
var map__77067__$1 = cljs.core.__destructure_map(map__77067);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77067__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77067__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77067__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var hex__$1 = app.common.types.color.rgb__GT_hex(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
var vec__77068 = app.common.types.color.hex__GT_hsv(hex__$1);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77068,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77068,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77068,(2),null);
var G__77071 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hex","hex",41691346),hex__$1,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"s","s",1705939918),s,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77071) : on_change.call(null,G__77071));
} else {
var map__77072 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color,cljs.core.PersistentHashMap.fromArrays([property],[val__$1])], 0));
var map__77072__$1 = cljs.core.__destructure_map(map__77072);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77072__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77072__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77072__$1,new cljs.core.Keyword(null,"v","v",21465059));
var hex__$1 = app.common.types.color.hsv__GT_hex(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,v], null));
var vec__77073 = app.common.types.color.hex__GT_rgb(hex__$1);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77073,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77073,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77073,(2),null);
var G__77076 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hex","hex",41691346),hex__$1,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"s","s",1705939918),s,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77076) : on_change.call(null,G__77076));

}
}
});
var on_change_property = (function (property,max_value){
return (function (e){
var val = app.common.math.clamp(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_target_val(e)),(0),max_value);
if((!((val == null)))){
return apply_property_change(property,val);
} else {
return null;
}
});
});
var on_key_down_step = (function (max_value,on_step){
return (function (e){
var up_QMARK_ = app.util.keyboard.up_arrow_QMARK_(e);
var down_QMARK_ = app.util.keyboard.down_arrow_QMARK_(e);
if(cljs.core.truth_((function (){var and__5023__auto__ = (function (){var or__5025__auto__ = up_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return down_QMARK_;
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return ((app.util.keyboard.shift_QMARK_(e)) || (app.util.keyboard.alt_QMARK_(e)));
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(e);

var temp__5825__auto__ = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_target_val(e));
if(cljs.core.truth_(temp__5825__auto__)){
var current_value = temp__5825__auto__;
var step = ((app.util.keyboard.shift_QMARK_(e))?(cljs.core.truth_(up_QMARK_)?(10):(-10)):((app.util.keyboard.alt_QMARK_(e))?(cljs.core.truth_(up_QMARK_)?0.1:-0.1):null));
var new_value = app.common.math.clamp((current_value + step),(0),max_value);
var node = app.util.dom.get_target(e);
app.util.dom.set_value_BANG_(node,new_value);

return (on_step.cljs$core$IFn$_invoke$arity$1 ? on_step.cljs$core$IFn$_invoke$arity$1(new_value) : on_step.call(null,new_value));
} else {
return null;
}
} else {
return null;
}
});
});
var on_key_down_property = (function (property,max_value){
return on_key_down_step(max_value,(function (p1__77047_SHARP_){
return apply_property_change(property,p1__77047_SHARP_);
}));
});
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color),rumext.v2.adapt(type)],(function (){
var seq__77077 = cljs.core.seq(cljs.core.keys(refs));
var chunk__77078 = null;
var count__77079 = (0);
var i__77080 = (0);
while(true){
if((i__77080 < count__77079)){
var ref_key = chunk__77078.cljs$core$IIndexed$_nth$arity$2(null,i__77080);
var property_val_77086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,ref_key);
var property_ref_77087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,ref_key);
if(cljs.core.truth_((function (){var and__5023__auto__ = property_val_77086;
if(cljs.core.truth_(and__5023__auto__)){
return property_ref_77087;
} else {
return and__5023__auto__;
}
})())){
var temp__5825__auto___77088 = rumext.v2.ref_val(property_ref_77087);
if(cljs.core.truth_(temp__5825__auto___77088)){
var node_77089 = temp__5825__auto___77088;
var new_val_77090 = (function (){var G__77083 = ref_key;
var G__77083__$1 = (((G__77083 instanceof cljs.core.Keyword))?G__77083.fqn:null);
switch (G__77083__$1) {
case "s":
case "alpha":
return app.common.math.precision((property_val_77086 * (100)),(2));

break;
case "v":
return app.common.math.precision(app.main.ui.workspace.colorpicker.color_inputs.hsv_value__GT_value(property_val_77086),(2));

break;
default:
return property_val_77086;

}
})();
app.util.dom.set_value_BANG_(node_77089,new_val_77090);
} else {
}
} else {
}


var G__77092 = seq__77077;
var G__77093 = chunk__77078;
var G__77094 = count__77079;
var G__77095 = (i__77080 + (1));
seq__77077 = G__77092;
chunk__77078 = G__77093;
count__77079 = G__77094;
i__77080 = G__77095;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__77077);
if(temp__5825__auto__){
var seq__77077__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77077__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__77077__$1);
var G__77096 = cljs.core.chunk_rest(seq__77077__$1);
var G__77097 = c__5548__auto__;
var G__77098 = cljs.core.count(c__5548__auto__);
var G__77099 = (0);
seq__77077 = G__77096;
chunk__77078 = G__77097;
count__77079 = G__77098;
i__77080 = G__77099;
continue;
} else {
var ref_key = cljs.core.first(seq__77077__$1);
var property_val_77100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,ref_key);
var property_ref_77101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,ref_key);
if(cljs.core.truth_((function (){var and__5023__auto__ = property_val_77100;
if(cljs.core.truth_(and__5023__auto__)){
return property_ref_77101;
} else {
return and__5023__auto__;
}
})())){
var temp__5825__auto___77102__$1 = rumext.v2.ref_val(property_ref_77101);
if(cljs.core.truth_(temp__5825__auto___77102__$1)){
var node_77103 = temp__5825__auto___77102__$1;
var new_val_77104 = (function (){var G__77084 = ref_key;
var G__77084__$1 = (((G__77084 instanceof cljs.core.Keyword))?G__77084.fqn:null);
switch (G__77084__$1) {
case "s":
case "alpha":
return app.common.math.precision((property_val_77100 * (100)),(2));

break;
case "v":
return app.common.math.precision(app.main.ui.workspace.colorpicker.color_inputs.hsv_value__GT_value(property_val_77100),(2));

break;
default:
return property_val_77100;

}
})();
app.util.dom.set_value_BANG_(node_77103,new_val_77104);
} else {
}
} else {
}


var G__77106 = cljs.core.next(seq__77077__$1);
var G__77107 = null;
var G__77108 = (0);
var G__77109 = (0);
seq__77077 = G__77106;
chunk__77078 = G__77107;
count__77079 = G__77108;
i__77080 = G__77109;
continue;
}
} else {
return null;
}
}
break;
}
}));

return rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__color-values"+" "+(cljs.core.truth_(disable_opacity)?"main_ui_workspace_colorpicker_color_inputs__disable-opacity":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker_color_inputs__colors-row",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"rgb","rgb",1432123467)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__input-wrapper",'children':[rumext.v2.jsx("label",{'htmlFor':"red-value",'className':"main_ui_workspace_colorpicker_color_inputs__input-label",'children':"R"}),rumext.v2.jsx("input",{'id':"red-value",'ref':new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(refs),'type':"number",'min':(0),'max':(255),'defaultValue':red,'onChange':on_change_property(new cljs.core.Keyword(null,"r","r",-471384190),(255)),'onKeyDown':on_key_down_property(new cljs.core.Keyword(null,"r","r",-471384190),(255))})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__input-wrapper",'children':[rumext.v2.jsx("label",{'htmlFor':"green-value",'className':"main_ui_workspace_colorpicker_color_inputs__input-label",'children':"G"}),rumext.v2.jsx("input",{'id':"green-value",'ref':new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(refs),'type':"number",'min':(0),'max':(255),'defaultValue':green,'onChange':on_change_property(new cljs.core.Keyword(null,"g","g",1738089905),(255)),'onKeyDown':on_key_down_property(new cljs.core.Keyword(null,"g","g",1738089905),(255))})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__input-wrapper",'children':[rumext.v2.jsx("label",{'htmlFor':"blue-value",'className':"main_ui_workspace_colorpicker_color_inputs__input-label",'children':"B"}),rumext.v2.jsx("input",{'id':"blue-value",'ref':new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(refs),'type':"number",'min':(0),'max':(255),'defaultValue':blue,'onChange':on_change_property(new cljs.core.Keyword(null,"b","b",1482224470),(255)),'onKeyDown':on_key_down_property(new cljs.core.Keyword(null,"b","b",1482224470),(255))})]})]}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__input-wrapper",'children':[rumext.v2.jsx("label",{'htmlFor':"hue-value",'className':"main_ui_workspace_colorpicker_color_inputs__input-label",'children':"H"}),rumext.v2.jsx("input",{'id':"hue-value",'ref':new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(refs),'type':"number",'min':(0),'max':(360),'defaultValue':hue,'onChange':on_change_property(new cljs.core.Keyword(null,"h","h",1109658740),(360)),'onKeyDown':on_key_down_property(new cljs.core.Keyword(null,"h","h",1109658740),(360))})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__input-wrapper",'children':[rumext.v2.jsx("label",{'htmlFor':"saturation-value",'className':"main_ui_workspace_colorpicker_color_inputs__input-label",'children':"S"}),rumext.v2.jsx("input",{'min':(0),'onChange':on_change_property(new cljs.core.Keyword(null,"s","s",1705939918),(100)),'max':(100),'id':"saturation-value",'type':"number",'ref':new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(refs),'defaultValue':saturation,'onKeyDown':on_key_down_property(new cljs.core.Keyword(null,"s","s",1705939918),(100)),'step':(1)})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__input-wrapper",'children':[rumext.v2.jsx("label",{'htmlFor':"value-value",'className':"main_ui_workspace_colorpicker_color_inputs__input-label",'children':"V"}),rumext.v2.jsx("input",{'id':"value-value",'ref':new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(refs),'type':"number",'min':(0),'max':(100),'defaultValue':value,'onChange':on_change_property(new cljs.core.Keyword(null,"v","v",21465059),(100)),'onKeyDown':on_key_down_property(new cljs.core.Keyword(null,"v","v",21465059),(100))})]})]}))}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__hex-alpha-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__input-wrapper"+" "+"main_ui_workspace_colorpicker_color_inputs__hex",'children':[rumext.v2.jsx("label",{'htmlFor':"hex-value",'className':"main_ui_workspace_colorpicker_color_inputs__input-label",'children':"HEX"}),rumext.v2.jsx("input",{'id':"hex-value",'ref':new cljs.core.Keyword(null,"hex","hex",41691346).cljs$core$IFn$_invoke$arity$1(refs),'defaultValue':hex,'onChange':on_change_hex,'onBlur':on_blur_hex})]}),((cljs.core.not(disable_opacity))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_inputs__input-wrapper",'children':[rumext.v2.jsx("label",{'htmlFor':"alpha-value",'className':"main_ui_workspace_colorpicker_color_inputs__input-label",'children':"A"}),rumext.v2.jsx("input",{'min':(0),'onChange':on_change_property(new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(100)),'max':(100),'id':"alpha-value",'type':"number",'ref':new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(refs),'defaultValue':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(alpha,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?"":alpha),'onKeyDown':on_key_down_property(new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(100)),'step':(1)})]}):null)]})]});
});

(app.main.ui.workspace.colorpicker.color_inputs.color_inputs.displayName = "color-inputs");


//# sourceMappingURL=app.main.ui.workspace.colorpicker.color_inputs.js.map
